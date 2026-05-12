import { useState } from "react";
import Icon from "@/components/ui/icon";

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

const ServicesSection = () => {
  return (
    <>
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
                  <Icon
                    name={s.icon}
                    size={22}
                    className="text-[hsl(var(--foreground))] group-hover:text-white transition-colors"
                  />
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
    </>
  );
};

export default ServicesSection;
