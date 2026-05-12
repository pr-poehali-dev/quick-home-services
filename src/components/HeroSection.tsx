import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Как заказать", href: "#how" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Вопросы и ответы", href: "#faq" },
];

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--primary))] text-white">
        <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-oswald text-xl font-bold tracking-wide flex items-center gap-2">
            <span className="text-[hsl(var(--accent))]">●</span> ПРОФИ КОНСАЛТ
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#how"
              className="bg-[hsl(var(--accent))] text-white text-sm font-semibold px-5 py-2 hover:opacity-90 transition-opacity"
            >
              Оставить заявку
            </a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[hsl(var(--primary))] border-t border-white/10 px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-white text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#how"
              className="bg-[hsl(var(--accent))] text-white text-sm font-semibold px-5 py-2 text-center hover:opacity-90 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Оставить заявку
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex items-center bg-[hsl(var(--primary))] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px),
              repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)`,
          }}
        />
        <div className="container max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <div className="h-px w-12 bg-[hsl(var(--accent))]" />
              <span className="text-[hsl(var(--accent))] text-xs tracking-[0.2em] uppercase font-semibold">
                Профессиональные бизнес-услуги
              </span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
              Ваш бизнес под<br />
              <span className="text-[hsl(var(--accent))]">надёжной защитой</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md animate-fade-in-up delay-200">
              Бухгалтерия, юридическое сопровождение и кадровый учёт — всё под контролем. Следите за статусом задач в реальном времени.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#how"
                className="bg-[hsl(var(--accent))] text-white font-semibold px-8 py-3 hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Оставить заявку
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#services"
                className="border border-white/30 text-white font-semibold px-8 py-3 hover:bg-white/5 transition-colors"
              >
                Наши услуги
              </a>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4 animate-fade-in-up delay-400">
            {[
              { val: "12+", label: "лет на рынке" },
              { val: "850+", label: "клиентов" },
              { val: "0", label: "штрафов по нашей вине" },
              { val: "24ч", label: "время реакции" },
            ].map((s, i) => (
              <div
                key={i}
                className="border border-white/10 p-6 hover:border-[hsl(var(--accent))] transition-colors"
              >
                <div className="font-oswald text-4xl font-bold text-[hsl(var(--accent))]">{s.val}</div>
                <div className="text-white/50 text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
