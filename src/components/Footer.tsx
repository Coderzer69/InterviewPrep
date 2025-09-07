import {
  Home,
  BookOpen,
  User,
  Mail,
  Shield,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#", icon: Home },
    { name: "Resources", href: "#resources", icon: BookOpen },
    { name: "About", href: "#about", icon: User },
    { name: "Contact", href: "#contact", icon: Mail },
    { name: "Privacy Policy", href: "#privacy", icon: Shield },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      hoverColor:
        "hover:text-[#0077B5] hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]",
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
      hoverColor: "hover:text-primary hover:shadow-glow",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
      hoverColor:
        "hover:text-accent hover:shadow-[0_0_15px_rgba(180,70,65,0.3)]",
    },
  ];

  return (
    <footer className="relative bg-background border-t border-border/20 mt-20">
      {/* Subtle gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group">
                <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:shadow-glow transition-all"></div>
              </div>
              <span className="text-2xl font-bold text-foreground">
                Interview Prep Bot
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Empowering professionals with AI-powered interview preparation,
              personalized feedback, and comprehensive career growth resources.
              Your success is our mission.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-muted/20 border border-border/30 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.hoverColor} hover:scale-110 hover:border-current/30`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="space-y-3">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Features & Stats */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Why Choose Us
            </h3>
            <div className="space-y-4">
              {[
                { feature: "AI-Powered Analysis", stat: "95% Accuracy" },
                { feature: "Personalized Feedback", stat: "1000+ Reviews" },
                { feature: "Real-time Practice", stat: "24/7 Available" },
                { feature: "Success Rate", stat: "87% Pass Rate" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground">{item.feature}</span>
                  <span className="text-primary font-medium">{item.stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Interview Prep Bot – Ace your interviews with
              confidence
            </p>

            {/* Tech Stack Indicators */}
            <div className="flex items-center space-x-6 text-xs text-muted-foreground/60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-accent/40"></div>
                <span>Real-time</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-improvement/40"></div>
                <span>Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </footer>
  );
};
