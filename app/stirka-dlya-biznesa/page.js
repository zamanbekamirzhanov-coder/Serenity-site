import { LOGO_BLACK, waLink, WHATSAPP_MSG, LOCATIONS, INSTAGRAM_URL } from "../shared-data";
import Link from "next/link";

export const metadata = {
  title: "Химчистка и стирка для бизнеса в Астане | Отели, рестораны, офисы | Serenity",
  description: "Профессиональная чистка текстиля для бизнеса в Астане. Стирка для отелей, ресторанов, салонов красоты. Постельное бельё, полотенца, скатерти, спецодежда. WhatsApp для консультации.",
  keywords: "стирка для бизнеса Астана, прачечная для бизнеса Астана, чистка текстиля для отелей, стирка белья для ресторанов, химчистка спецодежды Астана, прачечная Астана",
  alternates: { canonical: "/stirka-dlya-biznesa" },
  openGraph: {
    title: "Химчистка и стирка для бизнеса в Астане | Отели, рестораны, офисы | Serenity",
    description: "Профессиональная чистка текстиля для бизнеса в Астане. Стирка для отелей, ресторанов, салонов красоты. Постельное бельё, полотенца, скатерти, спецодежда. WhatsApp для консультации.",
    url: "https://serenity.kz/stirka-dlya-biznesa",
    siteName: "Serenity",
    locale: "ru_KZ",
    type: "website",
  },
};

export default function ServicePage() {
  return (
    <>
      {/* HEADER */}
      <header className="sr-header">
        <div className="sr-wrap sr-header-inner">
          <Link href="/"><img src={LOGO_BLACK} alt="Serenity" className="sr-logo-img" /></Link>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link href="/" className="sr-back-link">← Главная</Link>
            <a href={waLink(WHATSAPP_MSG)} target="_blank" rel="noopener noreferrer" className="sr-header-wa">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="sr-hero" style={{ paddingBottom: "40px" }}>
        <div className="sr-wrap" style={{ textAlign: "center" }}>
          <div className="sr-hero-label">Serenity — химчистка в Астане</div>
          <h1>Химчистка и стирка текстиля для бизнеса в Астане</h1>
          <p className="sr-hero-sub">Профессиональная чистка текстиля для отелей, ресторанов, салонов красоты, офисов и других организаций.</p>
          <div style={{ marginTop: "28px" }}>
            <a href={waLink(WHATSAPP_MSG)} target="_blank" rel="noopener noreferrer" className="sr-btn-primary">
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="sr-section">
        <div className="sr-wrap" style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p>Бизнесу важна не только чистота текстиля, но и стабильность, предсказуемость и удобство обслуживания. Serenity предлагает регулярную профессиональную чистку постельного белья, полотенец, скатертей, спецодежды и другого текстиля для организаций.</p>
          <p>Напишите в WhatsApp — обсудим объёмы, сроки и условия сотрудничества. Для корпоративных клиентов предусмотрены специальные условия.</p>
        </div>
      </section>

      {/* PRICES */}
      <section className="sr-section">
        <div className="sr-wrap">
          <div className="sr-section-header">
            <h2>Стоимость услуг</h2>
            <p>Ориентировочные цены. Точная стоимость зависит от типа изделия, материала и состояния.</p>
          </div>
          <div className="sr-prices-table">
          <h3 className="sr-service-cat-title">Текстиль для бизнеса</h3>
          <div className="sr-price-row"><span>Постельное бельё (за кг)</span><span className="sr-price-val">3 000 ₸/кг</span></div>
          <div className="sr-price-row"><span>Полотенца банные (за кг)</span><span className="sr-price-val">3 000 ₸/кг</span></div>
          <div className="sr-price-row"><span>Скатерти (за кг)</span><span className="sr-price-val">3 000 ₸/кг</span></div>
          <div className="sr-price-row"><span>Салфетки кухонные (за кг)</span><span className="sr-price-val">3 000 ₸/кг</span></div>
          <div className="sr-price-row"><span>Халат махровый</span><span className="sr-price-val">5 000 ₸</span></div>
          <div className="sr-price-row"><span>Халат вафельный</span><span className="sr-price-val">3 000 ₸</span></div>
          <p className="sr-service-note">Для корпоративных клиентов с регулярными объёмами — специальные условия.</p>
          <h3 className="sr-service-cat-title">Спецодежда и униформа</h3>
          <div className="sr-price-row"><span>Спецодежда зимняя (брюки+куртка)</span><span className="sr-price-val">10 000 ₸</span></div>
          <div className="sr-price-row"><span>Костюм классический (двойка)</span><span className="sr-price-val">7 500 ₸</span></div>
          <div className="sr-price-row"><span>Костюм классический (тройка)</span><span className="sr-price-val">8 000 ₸</span></div>
          <div className="sr-price-row"><span>Рубашка</span><span className="sr-price-val">3 000 ₸</span></div>
          <h3 className="sr-service-cat-title">Интерьерный текстиль</h3>
          <div className="sr-price-row"><span>Шторы (за кг)</span><span className="sr-price-val">3 500 ₸/кг</span></div>
          <div className="sr-price-row"><span>Тюль (за кг)</span><span className="sr-price-val">2 500 ₸/кг</span></div>
          <div className="sr-price-row"><span>Чехлы на стулья</span><span className="sr-price-val">1 500 ₸</span></div>
          <div className="sr-price-row"><span>Дивандек на диван</span><span className="sr-price-val">6 000 ₸</span></div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sr-section">
        <div className="sr-wrap">
          <div className="sr-section-header">
            <h2>Как проходит работа</h2>
          </div>
          <div className="sr-steps">
          <div className="sr-step"><span className="sr-step-num">01</span><div><h3>Обсудим ваши потребности</h3><p>Напишите в WhatsApp — расскажите о типе текстиля, объёмах и желаемой периодичности.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">02</span><div><h3>Согласуем условия</h3><p>Подберём оптимальный формат сотрудничества и согласуем стоимость.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">03</span><div><h3>Организуем приём изделий</h3><p>Вы привозите текстиль в удобный пункт приёма или обсуждаем другие варианты.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">04</span><div><h3>Профессиональная обработка</h3><p>Каждая партия обрабатывается в соответствии с типом ткани и требованиями.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">05</span><div><h3>Подготовка и выдача</h3><p>Чистый текстиль подготавливается к выдаче аккуратно и в срок.</p></div></div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sr-section">
        <div className="sr-wrap">
          <div className="sr-section-header">
            <h2>Частые вопросы</h2>
          </div>
          <div className="sr-faq-list">
          <details className="sr-faq-detail">
            <summary>Работаете ли вы с юридическими лицами?</summary>
            <p>Да. Мы работаем как с ИП, так и с ТОО. Возможно оформление договора и выставление счетов.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Есть ли скидки при регулярных заказах?</summary>
            <p>Да. Для корпоративных клиентов с регулярными объёмами предусмотрены специальные условия. Обсуждается индивидуально.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Какие объёмы вы можете обрабатывать?</summary>
            <p>Мы готовы обсудить любые объёмы. Напишите в WhatsApp — расскажем о наших возможностях.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Как быстро выполняется заказ?</summary>
            <p>Стандартный срок — от 2 до 5 рабочих дней в зависимости от объёма. Для ускоренной обработки — доплата.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Можно ли организовать регулярный вывоз?</summary>
            <p>На данный момент приём осуществляется через наши пункты. Обсуждаем индивидуальные варианты для крупных клиентов.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Подходит ли для отелей и ресторанов?</summary>
            <p>Да. Мы чистим постельное бельё, полотенца, скатерти, униформу и другой текстиль для HoReCa.</p>
          </details>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sr-final-cta">
        <div className="sr-wrap" style={{ textAlign: "center" }}>
          <h2>Нужна чистка текстиля для бизнеса?</h2>
          <p>Подскажем по стоимости, срокам и возможности обработки.</p>
          <a href={waLink(WHATSAPP_MSG)} target="_blank" rel="noopener noreferrer" className="sr-btn-primary" style={{ maxWidth: "340px", margin: "0 auto" }}>
            Написать в WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sr-footer">
        <div className="sr-wrap">
          <div className="sr-footer-grid">
            <div>
              <div className="sr-footer-brand"><img src={LOGO_BLACK} alt="Serenity" className="sr-footer-logo-img" /></div>
              <div className="sr-footer-tag">Химчистка в Астане</div>
            </div>
            <div>
              <h4>Пункты приёма</h4>
              {LOCATIONS.map((loc, i) => (
                <a key={i} href={loc.gis} target="_blank" rel="noopener noreferrer" className="sr-footer-link">
                  {loc.address}
                </a>
              ))}
            </div>
            <div>
              <h4>Услуги</h4>
              <Link href="/himchistka-kurtok" className="sr-footer-link">Химчистка курток</Link>
              <Link href="/himchistka-obuvi" className="sr-footer-link">Химчистка обуви</Link>
              <Link href="/chistka-shtor" className="sr-footer-link">Чистка штор</Link>
              <Link href="/stirka-dlya-biznesa" className="sr-footer-link">Для бизнеса</Link>
            </div>
          </div>
          <div className="sr-footer-bottom">
            © {new Date().getFullYear()} Serenity. Все права защищены.
          </div>
        </div>
      </footer>

      {/* FLOATING WA */}
      <a href={waLink(WHATSAPP_MSG)} target="_blank" rel="noopener noreferrer" className="sr-float-wa" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}
