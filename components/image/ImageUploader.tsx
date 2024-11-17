"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Camera, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";

interface ImageUploaderProps {
  value?: string;
  onChange: (path: string) => void;
}

const ImageUploader = ({ onChange, value }: ImageUploaderProps) => {
  const supabase = createClient();
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Download and create object URL for image preview
  useEffect(() => {
    let mounted = true;

    const downloadImage = async (path: string) => {
      try {
        const { data, error } = await supabase.storage
          .from("products")
          .download(path);

        if (error) throw error;
        if (!mounted) return;

        const url = URL.createObjectURL(data);
        setImageUrl(url);
      } catch (error) {
        console.error("Error downloading image:", error);
        toast.error("Failed to load image");
      }
    };

    if (value) downloadImage(value);

    // Cleanup function
    return () => {
      mounted = false;
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [value, supabase]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("File size must be less than 5MB");
      }

      // Generate random file name
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;

      // Upload to Supabase
      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Store the path (not the URL)
      onChange(fileName);
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error(
        error instanceof Error ? error.message : "Error uploading image",
      );
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemove = async () => {
    try {
      if (value) {
        const { error } = await supabase.storage
          .from("products")
          .remove([value]);

        if (error) throw error;
      }

      // Clear the image
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
        setImageUrl(null);
      }
      onChange("");
      toast.success("Image removed successfully");
    } catch (error) {
      console.error("Error removing image:", error);
      toast.error("Failed to remove image");
    }
  };

  // Handle button click to trigger file input
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Image Preview */}
          <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-200">
            {imageUrl ? (
              <>
                <Image
                  src={imageUrl}
                  alt="Product image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 200px) 100vw, 200px"
                  priority
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6 rounded-full"
                  onClick={handleRemove}
                >
                  <X className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>

          {/* Upload Button and Input */}
          <div className="absolute bottom-2 right-2">
            <Button
              type="button"
              variant="secondary"
              className="h-8 rounded-md"
              disabled={isUploading}
              onClick={handleButtonClick}
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Uploading...
                </>
              ) : (
                <>
                  <Camera className="h-4 w-4 mr-2" />
                  Upload Image
                </>
              )}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleUpload}
              disabled={isUploading}
              className="hidden"
            />
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Upload a product image (max 5MB)
      </p>
    </div>
  );
};

export default ImageUploader;
