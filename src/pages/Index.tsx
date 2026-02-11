import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ClipboardList, Brain, Shield, Award, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TrafficLightLogo from "@/components/TrafficLightLogo";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index: React.FC = () => {
  const { t } = useLanguage();

  const ctaCards = [
    { to: "/learn", icon: BookOpen, label: t("home.cta.learn"), color: "text-primary" },
    { to: "/quiz", icon: ClipboardList, label: t("home.cta.quiz"), color: "text-success" },
    { to: "/ai", icon: Brain, label: t("home.cta.ai"), color: "text-accent" },
  ];

  const features = [
    { icon: BookOpen, title: t("home.feature.lessons.title"), desc: t("home.feature.lessons.desc") },
    { icon: Award, title: t("home.feature.quiz.title"), desc: t("home.feature.quiz.desc") },
    { icon: Brain, title: t("home.feature.ai.title"), desc: t("home.feature.ai.desc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="container py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="space-y-6"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {t("home.headline")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                {t("home.subheadline")}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/learn">
                  <Button size="lg" className="gap-2 text-base">
                    <BookOpen className="h-5 w-5" />
                    {t("home.cta.learn")}
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button size="lg" variant="outline" className="gap-2 text-base">
                    <ClipboardList className="h-5 w-5" />
                    {t("home.cta.quiz")}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-accent/10 to-success/10 rounded-full blur-3xl" />
                <TrafficLightLogo size="lg" showText={false} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="container pb-16">
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {ctaCards.map(({ to, icon: Icon, label, color }, i) => (
            <motion.div
              key={to}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <Link to={to}>
                <Card className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer">
                  <CardContent className="flex flex-col items-center gap-4 py-8">
                    <div className={`p-4 rounded-xl bg-muted group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${color}`} />
                    </div>
                    <span className="font-display font-semibold text-lg">{label}</span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/40">
        <div className="container py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {features[0].title.includes("Structured") ? "Why TFLaw?" : "Kubera iki TFLaw?"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
              >
                <Card className="h-full border-none shadow-none bg-card">
                  <CardContent className="pt-8 pb-6 space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-xl">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
