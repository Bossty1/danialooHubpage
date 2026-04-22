import profileImage from "@/assets/danialoo-profile.jpg";
import cryptoBg from "@/assets/crypto-bg.jpg";
import redotPayCard from "@/assets/redotpay-card.png";
import danialooLabLogo from "@/assets/danialoo-lab-logo.jpeg";
import SocialLink from "@/components/SocialLink";
import PartnerCard from "@/components/PartnerCard";
import ComingSoonLink from "@/components/ComingSoonLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Bot, BarChart3 } from "lucide-react";
import { 
  TikTokIcon, 
  YouTubeIcon, 
  TelegramIcon, 
  RedotPayIcon,
  CryptoBubblesIcon,
  SmartContractIcon,
  PaidCoursesIcon,
  InstagramIcon,
  XTwitterIcon,
  DiscordIcon
} from "@/components/icons/BrandIcons";

// Partner logo URLs
const partnerLogos = {
  mexc: "https://i.ibb.co/WWfbT9YS/mexc33.png",
  gate: "https://i.ibb.co/H3ZZTMN/MEXC-Logo-Mark-Blue.png",
  binance: "https://i.ibb.co/PZ4wR4yh/bbnvce.jpg",
  coinW: "https://i.ibb.co/qMTb1SpT/logo-home1.png",
  smartContract: "",
};

const Index = () => {
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { href: "https://www.tiktok.com/@danialoo5", icon: <TikTokIcon className="w-6 h-6" />, label: "TikTok", color: "secondary" as const },
    { href: "https://youtube.com/@danialoocrypto", icon: <YouTubeIcon className="w-6 h-6" />, label: "YouTube", color: "primary" as const },
    { href: "https://t.me/danialoocrypto", icon: <TelegramIcon className="w-6 h-6" />, label: "Telegram", color: "primary" as const },
  ];

  const comingSoonLinks = [
    { icon: <InstagramIcon className="w-6 h-6" />, label: "Instagram" },
    { icon: <XTwitterIcon className="w-6 h-6" />, label: "X (Twitter)" },
    { icon: <DiscordIcon className="w-6 h-6" />, label: "Discord" },
  ];

  const partners = [
    { href: "https://accounts.binance.com/ar/register?ref=YL1K0MEE", name: "Binance", description: t("binanceDesc"), iconUrl: partnerLogos.binance },
    { href: "https://www.coinw.com/register?r=26625869", name: "CoinW", description: t("academyDesc"), iconUrl: partnerLogos.coinW },
    { href: "https://www.mexc.com/acquisition/custom-sign-up?shareCode=mexc-2rEsx", name: "MEXC", description: t("mexcDesc"), iconUrl: partnerLogos.mexc },
    { href: "https://www.gate.com/signup?ref_type=103&ref=UQARAF9X", name: "Gate.io", description: t("gateDesc"), iconUrl: partnerLogos.gate },
    { href: "https://", name: "DANIALOO MT5", description: "تداول الذهب و الفضة مع وكيلنا الموثوق و المعتمد MT5", iconUrl: "https://i.ibb.co/qL3k64mk/48Ry-X.jpg" },
  ];

  const tools = [
    { href: "https://sol-cleaner.com/?ref=K2fS25GG_", name: "Sol Cleaner", description: t("solCleanerDesc"), icon: <Sparkles className="w-6 h-6" /> },
    { href: "https://app.telemetry.io/@91fib", name: "Telemetry", description: t("telemetryDesc"), icon: <BarChart3 className="w-6 h-6" /> },
    { href: "https://t.me/BlumCryptoTradingBot?start=FckH4EeI5m", name: "Blum Trading Bot", description: t("blumDesc"), icon: <Bot className="w-6 h-6" /> },
    { href: "https://cryptobubbles.net/", name: "Crypto Bubbles", description: t("bubblesDesc"), icon: <CryptoBubblesIcon className="w-6 h-6" /> },
  ];

  const featuredProject = {
    href: "https://danialoo.online/",
    name: "DANIALOO TOKEN",
    iconUrl: "https://i.ibb.co/1Y1LkKT9/3232323.png",
  };

  const projects = [
    { href: "https://100tokensacademy.site/", name: "100Academy", description: "المنصة الرئيسية لعملة 100", iconUrl: "https://i.ibb.co/W4Z1tF48/Academy-Logo.png" },
    { href: "DANIALOO.COM", name: "DANALOO TOKEN", description: "عملة DANIALOO على سولانا", iconUrl: "https://i.ibb.co/1Y1LkKT9/3232323.png" },
  ];

  return (
    <div className={`min-h-screen bg-background cyber-grid relative overflow-hidden ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Crypto background image */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <img src={cryptoBg} alt="" className="w-full h-full object-cover opacity-25" />
      </div>

      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Fixed payment icons top-left */}
      <div className="fixed top-4 left-4 z-50 flex flex-col items-center gap-2">
        <a
          href="https://wap.redotpay.com/en/invite/?referralId=heb8p"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-2 bg-transparent border border-border/30 rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          <img src={redotPayCard} alt="RedotPay" className="w-10 h-10 object-contain rounded bg-transparent" />
          <span className="hidden sm:inline font-semibold text-sm">RedotPay</span>
        </a>
        <a
          href="https://www.bybit.com/cards/?ref=ZDBA8ZL&source=applet_invite"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-2 bg-transparent border border-border/30 rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          <img src="https://i.ibb.co/LXgd2qGy/card-1-global-b96302cf95fd80a71a26.png" alt="Bybit payment" className="w-10 h-10 object-contain rounded bg-transparent" />
          <span className="hidden sm:inline font-semibold text-sm">Bybit payment</span>
        </a>
      </div>

      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-50 animate-pulse-glow" />
            <img
              src={profileImage}
              alt="Danialoo Crypto"
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-primary/50 glow-border animate-float"
            />
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">DANIALOO</span>{" "}
            <span className="text-primary glow-text">CRYPTO</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
            {t("cryptoInfluencer")}
          </p>
        </header>

        {/* Danialoo Crypto Lab Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex justify-center">
            <a
              href="https://t.me/DanialooLab"
              target="_blank"
              rel="noopener noreferrer"
              className="card-cyber flex flex-col items-center gap-4 p-8 max-w-md w-full text-center group"
            >
              <img src={danialooLabLogo} alt="Danialoo Crypto Lab" className="w-24 h-24 rounded-xl object-cover" />
              <h2 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Danialoo Crypto Lab
              </h2>
              <p className="text-muted-foreground text-sm">
                {isRTL ? "حيث نطبخ مشاريعنا الكبيرة الجديدة 🔥" : "Where we cook our new big projects 🔥"}
              </p>
              <span className="btn-cyber px-6 py-2 text-sm">{isRTL ? "انضم الآن" : "Join Now"}</span>
            </a>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display text-2xl font-semibold text-center mb-8 text-foreground">
            {t("connectWithMe")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
            {comingSoonLinks.map((link) => (
              <ComingSoonLink key={link.label} {...link} />
            ))}
          </div>
        </section>

        {/* Paid Courses Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="font-display text-2xl font-semibold text-center mb-8 text-foreground">
            {t("paidCourses").split(" ")[0]} <span className="text-primary glow-text">{t("paidCourses").split(" ").slice(1).join(" ")}</span>
          </h2>
          <div className="flex justify-center">
            <a
              href="https://t.me/danialoocrypto/2927"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber flex items-center gap-3 text-lg px-8 py-4"
            >
              <PaidCoursesIcon className="w-7 h-7" />
              <span>{t("accessPremiumCourses")}</span>
            </a>
          </div>
        </section>

        {/* My Projects Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <h2 className="font-display text-4xl font-semibold text-center mb-8 text-foreground">
            <span className="text-secondary glow-text-pink">{t("myProjects")}</span>
          </h2>
          <div className="flex justify-center mb-8">
            <a
              href={featuredProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-background/80 border border-border/40 rounded-[2rem] shadow-2xl hover:shadow-primary/30 transition-shadow duration-300"
            >
              <img
                src={featuredProject.iconUrl}
                alt={featuredProject.name}
                className="w-40 h-40 md:w-52 md:h-52 object-contain"
              />
              <span className="text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
                {featuredProject.name}
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {projects.map((project) => (
              <PartnerCard
                key={project.name}
                {...project}
                imageClassName="w-28 h-28 md:w-32 md:h-32 object-cover rounded-xl"
                descriptionClassName="text-black text-sm mt-1"
              />
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="font-display text-2xl font-semibold text-center mb-8 text-foreground">
            <span className="text-secondary glow-text-pink">{t("myPartners")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {partners.map((partner) => (
              <PartnerCard
                key={partner.name}
                {...partner}
                imageClassName="w-28 h-28 md:w-32 md:h-32 object-cover rounded-xl"
                descriptionClassName="text-black text-sm mt-1"
              />
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className="font-display text-2xl font-semibold text-center mb-8 text-foreground">
            <span className="text-primary glow-text">{t("cryptoTools")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <PartnerCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Payment Platform */}
        <section className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <h2 className="sr-only">{t("paymentSolutions")}</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://wap.redotpay.com/en/invite/?referralId=heb8p"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-pink flex items-center gap-4 text-xl px-10 py-5 relative"
            >
              <div className="relative">
                <img src={redotPayCard} alt="RedotPay" className="w-16 h-10 object-contain rounded" />
                <span className="absolute -top-3 -left-3 text-xs md:text-sm font-semibold text-white bg-secondary/90 px-2 py-1 rounded">{t("paymentSolutions")}</span>
              </div>
              <span className="font-bold">RedotPay</span>
            </a>
            <a
              href="https://www.bybit.com/cards/?ref=ZDBA8ZL&source=applet_invite"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-pink flex items-center gap-4 text-xl px-10 py-5 relative"
            >
              <div className="relative">
                <img src="https://i.ibb.co/LXgd2qGy/card-1-global-b96302cf95fd80a71a26.png" alt="Bybit" className="w-16 h-10 object-contain rounded" />
                <span className="absolute -top-3 -left-3 text-xs md:text-sm font-semibold text-white bg-secondary/90 px-2 py-1 rounded">{t("paymentSolutions")}</span>
              </div>
              <span className="font-bold">Bybit payment</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Danialoo Crypto. {t("allRightsReserved")}.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;