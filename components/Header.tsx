import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavUser } from "./nav-user";

interface HeaderProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          {/* <NavUser /> */}
        </div>
      </div>
    </header>
  );
}
