import Icon from "@/components/ui/icon";

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

const HowSection = () => {
  return (
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
            <div
              key={i}
              className="relative pl-6 pr-4 pb-8 md:pb-0 border-l-2 md:border-l-0 md:border-t-2 border-[hsl(var(--accent))] md:pt-6"
            >
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
  );
};

export default HowSection;
