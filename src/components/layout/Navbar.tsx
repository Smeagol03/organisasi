/**
 * Navbar Component
 * Main navigation bar for public pages
 * Modern formal design with glassmorphism and creative touches
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/react-router";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/50 bg-background/80 shadow-lg shadow-background/5 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none">
                {siteConfig.organization.shortName}
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
                Organization
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "group relative px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon && (
                    <item.icon className="size-4 transition-transform group-hover:scale-110" />
                  )}
                  {item.title}
                </span>
                <span
                  className={cn(
                    "absolute inset-0 rounded-full transition-opacity",
                    isActive(item.href)
                      ? "bg-primary/5"
                      : "bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-muted/50",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <SignedIn>
              <div className="hidden sm:block">
                <Link to="/admin/dashboard">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 font-medium"
                  >
                    <Sparkles className="size-4" />
                    Dashboard
                  </Button>
                </Link>
              </div>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox:
                      "size-9 ring-2 ring-primary/20 transition-all hover:ring-primary/40",
                  },
                }}
              />
            </SignedIn>

            <SignedOut>
              <div className="hidden items-center gap-2 sm:flex">
                <Link to="/sign-in">
                  <Button variant="ghost" size="sm" className="font-medium">
                    Sign In
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button
                    size="sm"
                    className="font-medium shadow-lg shadow-primary/20"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </SignedOut>

            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "lg:hidden transition-colors",
                isMobileMenuOpen && "bg-muted",
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen
            ? "max-h-125 border-b border-border/50 bg-background/95 backdrop-blur-xl"
            : "max-h-0",
        )}
      >
        <nav className="container px-4 py-4 space-y-1">
          {mainNav.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                isActive(item.href)
                  ? "bg-linear-to-r from-primary/10 via-primary/5 to-transparent text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.icon && (
                <div
                  className={cn(
                    "flex size-8 items-center justify-center rounded-lg transition-colors",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
                  )}
                >
                  <item.icon className="size-4" />
                </div>
              )}
              <span>{item.title}</span>
              {isActive(item.href) && (
                <div className="ml-auto flex size-2 items-center justify-center rounded-full bg-primary" />
              )}
            </Link>
          ))}

          <SignedOut>
            <div className="mt-4 flex gap-2 border-t border-border/50 pt-4">
              <Link to="/sign-in" className="flex-1">
                <Button variant="outline" className="w-full font-medium">
                  Sign In
                </Button>
              </Link>
              <Link to="/sign-up" className="flex-1">
                <Button className="w-full font-medium">Get Started</Button>
              </Link>
            </div>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};
