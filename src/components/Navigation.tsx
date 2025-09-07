import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ProfileModal } from "@/components/ProfileModal";

interface NavigationProps {
  onViewHistory: () => void;
  onViewResources: () => void;
  onScrollToInterview: () => void;
  onScrollToTips: () => void;
  onGoHome: () => void;
}

export const Navigation = ({
  onViewHistory,
  onViewResources,
  onScrollToInterview,
  onScrollToTips,
  onGoHome,
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={onGoHome}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-neon">
              <span className="text-primary-foreground text-sm font-bold">
                AI
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Interview Prep
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onScrollToInterview}
              className="text-muted-foreground hover:text-primary transition-colors relative group cursor-pointer"
            >
              Take Interview
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button
              onClick={onScrollToTips}
              className="text-muted-foreground hover:text-primary transition-colors relative group cursor-pointer"
            >
              Tips
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button
              onClick={onViewHistory}
              className="text-muted-foreground hover:text-primary transition-colors relative group cursor-pointer"
            >
              History
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button
              onClick={onViewResources}
              className="text-muted-foreground hover:text-primary transition-colors relative group cursor-pointer"
            >
              Resources
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <ProfileModal />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border/50 py-4">
            <div className="space-y-4">
              <button
                onClick={() => {
                  onScrollToInterview();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/20 cursor-pointer"
              >
                Take Interview
              </button>
              <button
                onClick={() => {
                  onScrollToTips();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/20 cursor-pointer"
              >
                Tips
              </button>
              <button
                onClick={() => {
                  onViewHistory();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/20 cursor-pointer"
              >
                History
              </button>
              <button
                onClick={() => {
                  onViewResources();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/20 cursor-pointer"
              >
                Resources
              </button>
              <div className="pt-2 border-t border-border/50 px-4">
                <ProfileModal />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
