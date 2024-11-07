import React, { useState } from "react";
import Image from "next/image";
import { Camera, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

interface ProductImageUploadProps {
  onChange: (url: string) => void;
  value?: string;
  onUpload?: (file: File) => Promise<{ url: string }>;
}

const ImageUploader = ({
  onChange,
  value,
  onUpload,
}: ProductImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File too large", {
        description: "Please select an image under 5MB.",
      });
      return;
    }

    setIsUploading(true);

    try {
      if (onUpload) {
        const { url } = await onUpload(file);
        onChange(url);
        toast.success("Image uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Upload failed", {
        description:
          "There was a problem uploading your image. Please try again.",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    onChange("");
    // Reset the input value to allow uploading the same file again
    const input = document.getElementById(
      "product-image-upload",
    ) as HTMLInputElement;
    if (input) input.value = "";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Image Preview */}
          <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-200">
            {value ? (
              <>
                <Image
                  src={value}
                  alt="Product image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 200px) 100vw, 200px"
                  priority
                />
                <Button
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

          {/* Upload Button */}
          <label htmlFor="product-image-upload">
            <Button
              variant="secondary"
              className="absolute bottom-2 right-2 h-8 rounded-md"
              disabled={isUploading}
              type="button"
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
          </label>

          <input
            id="product-image-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Upload a product image (max 5MB)
      </p>
    </div>
  );
};

export default ProductImageUpload;
