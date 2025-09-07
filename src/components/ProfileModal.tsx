import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export const ProfileModal = () => {
  const [open, setOpen] = useState(false);
  const { signOut, user } = useAuth();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
    }
    setOpen(false);
  };

  const handleProfile = () => {
    toast.info("Profile page coming soon!");
    setOpen(false);
  };

  const getInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Avatar className="h-8 w-8 border-2 border-primary/20">
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-foreground text-sm font-semibold">
              {user?.email ? getInitials(user.email) : "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-md border-border/50">
        <div className="space-y-6 p-2">
          {/* User Info */}
          <div className="flex items-center space-x-4 pb-4 border-b border-border/50">
            <Avatar className="h-12 w-12 border-2 border-primary/20">
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-foreground text-lg font-semibold">
                {user?.email ? getInitials(user.email) : "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Signed in as</p>
              <p className="font-medium text-foreground truncate max-w-[200px]">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start h-12 text-left hover:bg-muted/50"
              onClick={handleProfile}
            >
              <User className="mr-3 h-4 w-4" />
              Go to Profile
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start h-12 text-left hover:bg-destructive/10 hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
