import React from "react";
import TrafficLightLogo from "./TrafficLightLogo";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <TrafficLightLogo size="sm" showText={false} />
          <div>
            <p className="font-display font-semibold text-sm">TFLaw</p>
            <p className="text-xs text-muted-foreground">{t("footer.tagline")}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} TFLaw. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
