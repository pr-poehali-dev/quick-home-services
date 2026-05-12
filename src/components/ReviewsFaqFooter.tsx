import { useState } from "react";
import Icon from "@/components/ui/icon";

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

const SERVICES_FOOTER = [
  "Бухгалтерский учёт",
  "Юридическое сопровождение",
  "Финансовый консалтинг",
  "Кадровый учёт",
];

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

const ReviewsFaqFooter = () => {
  return (
    <>
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
              {SERVICES_FOOTER.map((s) => (
                <span
                  key={s}
                  className="text-white/60 text-sm hover:text-white cursor-pointer transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="font-oswald text-sm tracking-widest uppercase text-white/40 mb-4">Контакты</div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Icon name="Phone" size={14} />
                +7 (495) 123-45-67
              </a>
              <a
                href="mailto:info@profi-consult.ru"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
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
    </>
  );
};

export default ReviewsFaqFooter;
