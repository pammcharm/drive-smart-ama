import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Brain, ClipboardList, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrafficLightLogo from "./TrafficLightLogo";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: "/learn", label: t("nav.learn"), icon: BookOpen },
    { to: "/quiz", label: t("nav.quiz"), icon: ClipboardList },
    { to: "/ai", label: t("nav.ai"), icon: Brain },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <TrafficLightLogo size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to}>
              <Button
                variant={isActive(to) ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSelector />
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2 ml-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">{t("nav.login")}</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">{t("nav.signup")}</Button>
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <Link key={to} to={to} onClick={() => setMobileOpen(false)}>
                  <Button
                    variant={isActive(to) ? "secondary" : "ghost"}
                    className="w-full justify-start gap-3"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Button>
                </Link>
              ))}
              <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                <Link to="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">{t("nav.login")}</Button>
                </Link>
                <Link to="/signup" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">{t("nav.signup")}</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
