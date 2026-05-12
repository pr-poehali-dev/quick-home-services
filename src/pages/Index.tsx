import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Как заказать", href: "#how" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Вопросы и ответы", href: "#faq" },
];

const SERVICES = [
  {
    icon: "BarChart3",
    title: "Бухгалтерский учёт",
    desc: "Ведём вашу бухгалтерию под ключ: от первичных документов до отчётности в налоговую.",
    price: "от 8 000 ₽/мес",
  },
  {
    icon: "FileText",
    title: "Юридическое сопровождение",
    desc: "Договоры, претензии, судебные иски — защищаем ваш бизнес на каждом этапе.",
    price: "от 15 000 ₽/мес",
  },
  {
    icon: "TrendingUp",
    title: "Финансовый консалтинг",
    desc: "Анализ показателей, построение финансовых моделей и стратегий роста.",
    price: "от 20 000 ₽/мес",
  },
  {
    icon: "Users",
    title: "Кадровый учёт",
    desc: "Приём и увольнение, трудовые договоры, расчёт зарплаты и отпускных.",
    price: "от 5 000 ₽/мес",
  },
];

const HOW_STEPS = [
  {
    num: "01",
    title: "Оставьте заявку",
    desc: "Заполните форму или позвоните нам. Мы свяжемся с вами в течение 30 минут в рабочее время.",
  },
  {
    num: "02",
    title: "Бесплатная консультация",
    desc: "Разберём вашу ситуацию, подберём оптимальный пакет услуг и согласуем условия.",
  },
  {
    num: "03",
    title: "Подписание договора",
    desc: "Фиксируем все условия: сроки, стоимость, ответственность сторон.",
  },
  {
    num: "04",
    title: "Работа и контроль",
    desc: "Отслеживайте статус выполнения задач в личном кабинете в режиме реального времени.",
  },
];

const REVIEWS = [
  {
    name: "Андрей Коваль",
    role: "Директор, ООО «МеталлТрейд»",
    text: "Работаем уже 3 года. Ни разу не было проблем с налоговой. Команда профессионалов — чётко, в срок, без лишних вопросов.",
    rating: 5,
  },
  {
    name: "Елена Воронова",
    role: "ИП, сеть кофеен «Бодрость»",
    text: "Перешла к ним после того, как предыдущий бухгалтер пропал с документами. Всё восстановили, штрафы оспорили. Рекомендую.",
    rating: 5,
  },
  {
    name: "Сергей Ильин",
    role: "CEO, IT-агентство Pixel",
    text: "Отличный сервис. Особенно нравится трекер статуса — всегда знаю, на каком этапе находится моя задача. Экономит кучу времени.",
    rating: 5,
  },
];

const FAQ = [
  {
    q: "Работаете ли вы с ИП на упрощённой системе налогообложения?",
    a: "Да, мы работаем со всеми системами налогообложения: ОСНО, УСН (доходы и доходы минус расходы), ПСН и НПД.",
  },
  {
    q: "Как я могу отслеживать статус выполнения моего заказа?",
    a: "После заключения договора вы получаете доступ в личный кабинет, где видны все ваши задачи, статус выполнения и ответственный специалист.",
  },
  {
    q: "Что входит в бесплатную консультацию?",
    a: "30-минутная встреча, на которой мы разбираем текущую ситуацию, определяем риски и подбираем подходящий пакет услуг.",
  },
  {
    q: "Несёте ли вы ответственность за ошибки?",
    a: "Да. Если по нашей вине возникнут штрафы или пени, мы возмещаем их в полном объёме согласно договору.",
  },
  {
    q: "Можно ли перейти к вам в середине года?",
    a: "Конечно. Мы принимаем клиентов в любое время и при необходимости восстанавливаем учёт за прошлые периоды.",
  },
];

const STATUS_STEPS = [
  { label: "Заявка принята", done: true },
  { label: "Консультация", done: true },
  { label: "В работе", done: true, active: true },
  { label: "На проверке", done: false },
  { label: "Завершено", done: false },
];

const STATUS_ORDERS = [
  { id: "ЗАК-2847", service: "Бухгалтерский учёт", date: "05.05.2026", step: 2 },
  { id: "ЗАК-2831", service: "Юридическое сопровождение", date: "28.04.2026", step: 4 },
  { id: "ЗАК-2798", service: "Кадровый учёт", date: "10.04.2026", step: 4 },
];

function StatusTracker() {
  const [selectedOrder, setSelectedOrder] = useState(STATUS_ORDERS[0]);

  const activeStep = selectedOrder.step;

  return (
    <section className="py-20 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 bg-[hsl(var(--accent))]" />
          <span className="font-oswald text-sm tracking-widest uppercase text-[hsl(var(--accent))]">
            Трекер заказов
          </span>
        </div>
        <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-2">
          Следите за статусом
        </h2>
        <p className="text-white/60 mb-10 max-w-xl">
          Каждый клиент видит актуальный статус выполнения своих задач в режиме реального времени.
        </p>

        <div className="grid md:grid-cols-3 gap-3 mb-10">
          {STATUS_ORDERS.map((order) => (
            <button
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className={`text-left p-4 border transition-all duration-200 ${
                selectedOrder.id === order.id
                  ? "border-[hsl(var(--accent))] bg-white/5"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <div className="font-oswald text-lg font-semibold">{order.id}</div>
              <div className="text-white/60 text-sm mt-1">{order.service}</div>
              <div className="text-white/40 text-xs mt-2">{order.date}</div>
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-4 left-0 right-0 h-px bg-white/10 z-0" />
            <div
              className="absolute top-4 left-0 h-px bg-[hsl(var(--accent))] z-0 transition-all duration-700"
              style={{ width: `${(activeStep / (STATUS_STEPS.length - 1)) * 100}%` }}
            />
            {STATUS_STEPS.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                    i < activeStep
                      ? "bg-[hsl(var(--accent))] border-[hsl(var(--accent))] text-white"
                      : i === activeStep
                      ? "bg-white border-[hsl(var(--accent))] text-[hsl(var(--primary))]"
                      : "bg-transparent border-white/20 text-white/30"
                  }`}
                >
                  {i < activeStep ? (
                    <Icon name="Check" size={14} />
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`text-xs text-center hidden md:block ${
                    i === activeStep
                      ? "text-white font-semibold"
                      : i < activeStep
                      ? "text-white/70"
                      : "text-white/30"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 text-[hsl(var(--accent))] font-semibold">
              <Icon name="Clock" size={16} />
              <span>Текущий статус: {STATUS_STEPS[activeStep].label}</span>
            </div>
            <p className="text-white/50 text-sm mt-2">
              Специалист работает над вашим заказом. Ориентировочное завершение — 14.05.2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[hsl(var(--border))]">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--accent))] transition-colors">
          {q}
        </span>
        <span className="shrink-0 text-[hsl(var(--accent))]">
          <Icon name={open ? "Minus" : "Plus"} size={18} />
        </span>
      </button>
      {open && (
        <p className="pb-5 text-[hsl(var(--muted-foreground))] text-sm leading-relaxed animate-fade-in">
          {a}
        </p>
      )}
    </div>
  );
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] font-golos">

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
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px),
              repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)`
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
              <div key={i} className="border border-white/10 p-6 hover:border-[hsl(var(--accent))] transition-colors">
                <div className="font-oswald text-4xl font-bold text-[hsl(var(--accent))]">{s.val}</div>
                <div className="text-white/50 text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-[hsl(var(--background))]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-[hsl(var(--accent))]" />
            <span className="font-oswald text-sm tracking-widest uppercase text-[hsl(var(--accent))]">
              Что мы делаем
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
              Наши услуги
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-sm text-sm">
              Комплексная поддержка вашего бизнеса — от документов до стратегии.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="border border-[hsl(var(--border))] p-6 group hover:border-[hsl(var(--accent))] hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-[hsl(var(--muted))] flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--accent))] transition-colors">
                  <Icon name={s.icon} size={22} className="text-[hsl(var(--foreground))] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-oswald text-lg font-semibold mb-3 text-[hsl(var(--foreground))]">
                  {s.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>
                <div className="font-semibold text-[hsl(var(--accent))] text-sm">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATUS TRACKER */}
      <StatusTracker />

      {/* HOW TO ORDER */}
      <section id="how" className="py-20 bg-[hsl(var(--background))]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-[hsl(var(--accent))]" />
            <span className="font-oswald text-sm tracking-widest uppercase text-[hsl(var(--accent))]">
              Начать работу
            </span>
          </div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-12 text-[hsl(var(--foreground))]">
            Как заказать
          </h2>
          <div className="grid md:grid-cols-4 gap-0">
            {HOW_STEPS.map((step, i) => (
              <div key={i} className="relative pl-6 pr-4 pb-8 md:pb-0 border-l-2 md:border-l-0 md:border-t-2 border-[hsl(var(--accent))] md:pt-6">
                <div className="absolute top-0 left-0 md:-top-3 md:left-0 w-6 h-6 bg-[hsl(var(--accent))] flex items-center justify-center -translate-x-[13px] md:translate-x-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="font-oswald text-4xl font-bold text-[hsl(var(--accent))]/20 mb-3">
                  {step.num}
                </div>
                <h3 className="font-oswald text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
                  {step.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 bg-[hsl(var(--primary))] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-oswald text-2xl font-bold text-white mb-3">
                Получите бесплатную консультацию
              </h3>
              <p className="text-white/60 text-sm">
                Заполните форму — наш специалист перезвонит в течение 30 минут в рабочее время.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Ваше имя"
                className="bg-white/5 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--accent))] transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="bg-white/5 border border-white/20 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--accent))] transition-colors"
              />
              <button className="bg-[hsl(var(--accent))] text-white font-semibold py-3 hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                Отправить заявку
                <Icon name="Send" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-[hsl(var(--muted))]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-[hsl(var(--accent))]" />
            <span className="font-oswald text-sm tracking-widest uppercase text-[hsl(var(--accent))]">
              Мнения клиентов
            </span>
          </div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-12 text-[hsl(var(--foreground))]">
            Отзывы
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="bg-white border border-[hsl(var(--border))] p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-[hsl(var(--accent))] fill-current" />
                  ))}
                </div>
                <p className="text-[hsl(var(--foreground))] text-sm leading-relaxed flex-1">
                  «{r.text}»
                </p>
                <div className="border-t border-[hsl(var(--border))] pt-4">
                  <div className="font-semibold text-sm text-[hsl(var(--foreground))]">{r.name}</div>
                  <div className="text-[hsl(var(--muted-foreground))] text-xs mt-1">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[hsl(var(--background))]">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-[hsl(var(--accent))]" />
            <span className="font-oswald text-sm tracking-widest uppercase text-[hsl(var(--accent))]">
              Часто задают
            </span>
          </div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-12 text-[hsl(var(--foreground))]">
            Вопросы и ответы
          </h2>
          <div className="border-t border-[hsl(var(--border))]">
            {FAQ.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--primary))] text-white py-12">
        <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-oswald text-xl font-bold mb-3 flex items-center gap-2">
              <span className="text-[hsl(var(--accent))]">●</span> ПРОФИ КОНСАЛТ
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Профессиональные бизнес-услуги с 2012 года. Ваш результат — наша репутация.
            </p>
          </div>
          <div>
            <div className="font-oswald text-sm tracking-widest uppercase text-white/40 mb-4">Услуги</div>
            <div className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <span key={s.title} className="text-white/60 text-sm hover:text-white cursor-pointer transition-colors">
                  {s.title}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="font-oswald text-sm tracking-widest uppercase text-white/40 mb-4">Контакты</div>
            <div className="flex flex-col gap-3">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Icon name="Phone" size={14} />
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@profi-consult.ru" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Icon name="Mail" size={14} />
                info@profi-consult.ru
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Icon name="MapPin" size={14} />
                Москва, ул. Деловая, 15
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Icon name="Clock" size={14} />
                Пн–Пт, 9:00–18:00
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-white/30 text-xs">© 2026 Профи Консалт. Все права защищены.</span>
          <span className="text-white/30 text-xs">ИНН 7701234567 · ОГРН 1127746001234</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
