import { LOGO_BLACK, waLink, WHATSAPP_MSG, LOCATIONS, INSTAGRAM_URL } from "../shared-data";
import Link from "next/link";

export const metadata = {
  title: "Чистка штор и тюли в Астане | Химчистка домашнего текстиля | Serenity",
  description: "Профессиональная чистка штор, тюли, покрывал, одеял и подушек в Астане. Бережная обработка домашнего текстиля. 3 пункта приёма. Консультация в WhatsApp.",
  keywords: "чистка штор Астана, химчистка штор Астана, стирка штор Астана, чистка тюли, чистка одеял Астана, чистка подушек Астана, химчистка текстиля",
  alternates: { canonical: "/chistka-shtor" },
  openGraph: {
    title: "Чистка штор и тюли в Астане | Химчистка домашнего текстиля | Serenity",
    description: "Профессиональная чистка штор, тюли, покрывал, одеял и подушек в Астане. Бережная обработка домашнего текстиля. 3 пункта приёма. Консультация в WhatsApp.",
    url: "https://serenity.kz/chistka-shtor",
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
          <h1>Чистка штор и домашнего текстиля в Астане</h1>
          <p className="sr-hero-sub">Профессиональная чистка штор, тюли, одеял, подушек, покрывал и другого домашнего текстиля с бережным подходом к каждому изделию.</p>
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
          <p>Домашний текстиль накапливает пыль, аллергены и запахи. Регулярная профессиональная чистка штор, одеял и подушек — это не только эстетика, но и гигиена. В Serenity мы подбираем режим обработки индивидуально для каждого типа ткани.</p>
          <p>Для штор и тюли стоимость рассчитывается по весу или площади. Отправьте фото и примерные размеры в WhatsApp — мы подскажем по стоимости заранее.</p>
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
          <h3 className="sr-service-cat-title">Шторы и тюль</h3>
          <div className="sr-price-row"><span>Тюль (за кг)</span><span className="sr-price-val">2 500 ₸/кг</span></div>
          <div className="sr-price-row"><span>Тюль (за кв.м.)</span><span className="sr-price-val">800 ₸/м²</span></div>
          <div className="sr-price-row"><span>Шторы обычные (за кг)</span><span className="sr-price-val">3 500 ₸/кг</span></div>
          <div className="sr-price-row"><span>Шторы (за кв.м.)</span><span className="sr-price-val">1 500 ₸/м²</span></div>
          <div className="sr-price-row"><span>Шторы двусторонние (за кв.м.)</span><span className="sr-price-val">1 800 ₸/м²</span></div>
          <p className="sr-service-note">Для точного расчёта отправьте фото и размеры штор в WhatsApp.</p>
          <h3 className="sr-service-cat-title">Одеяла и подушки</h3>
          <div className="sr-price-row"><span>Одеяло полуторное</span><span className="sr-price-val">8 000 ₸</span></div>
          <div className="sr-price-row"><span>Одеяло двуспальное</span><span className="sr-price-val">9 000 ₸</span></div>
          <div className="sr-price-row"><span>Плед полуторный</span><span className="sr-price-val">5 000 ₸</span></div>
          <div className="sr-price-row"><span>Плед двуспальный</span><span className="sr-price-val">7 000 ₸</span></div>
          <div className="sr-price-row"><span>Подушка (синтепон / пух)</span><span className="sr-price-val">4 000 ₸</span></div>
          <h3 className="sr-service-cat-title">Прочий текстиль</h3>
          <div className="sr-price-row"><span>Покрывало (полуторное / двуспальное)</span><span className="sr-price-val">6 000 / 9 000 ₸</span></div>
          <div className="sr-price-row"><span>Наматрасник</span><span className="sr-price-val">5 000 / 6 000 ₸</span></div>
          <div className="sr-price-row"><span>Дивандек на кресло</span><span className="sr-price-val">4 000 ₸</span></div>
          <div className="sr-price-row"><span>Дивандек на диван</span><span className="sr-price-val">6 000 ₸</span></div>
          <div className="sr-price-row"><span>Скатерть (за кг)</span><span className="sr-price-val">3 000 ₸/кг</span></div>
          <div className="sr-price-row"><span>Халат махровый</span><span className="sr-price-val">5 000 ₸</span></div>

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
          <div className="sr-step"><span className="sr-step-num">01</span><div><h3>Свяжитесь с нами</h3><p>Отправьте фото штор или текстиля в WhatsApp. Укажите примерные размеры для расчёта.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">02</span><div><h3>Мы рассчитаем стоимость</h3><p>Подскажем точную стоимость, сроки и особенности обработки вашего текстиля.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">03</span><div><h3>Привезите в пункт приёма</h3><p>3 пункта приёма в Астане. Объёмные изделия удобно привозить в Туран 22/1.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">04</span><div><h3>Бережная обработка</h3><p>Каждое изделие обрабатывается с учётом типа ткани, плотности и рекомендаций по уходу.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">05</span><div><h3>Подготовка к выдаче</h3><p>Шторы и текстиль подготавливаются к выдаче аккуратно и в надлежащем виде.</p></div></div>

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
            <summary>Сколько стоит чистка штор?</summary>
            <p>Стоимость зависит от типа и объёма. Тюль — от 2 500 ₸/кг, обычные шторы — от 3 500 ₸/кг. Для точного расчёта отправьте фото и размеры в WhatsApp.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Как рассчитать стоимость чистки штор?</summary>
            <p>Стоимость рассчитывается по весу (кг) или площади (м²). Если вы знаете размеры штор — мы посчитаем заранее по WhatsApp.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Сколько времени занимает чистка штор?</summary>
            <p>Стандартный срок — от 3 до 5 рабочих дней. Зависит от объёма и загрязнённости.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Чистите ли вы подушки и одеяла?</summary>
            <p>Да. Подушки — 4 000 ₸, одеяла — от 8 000 до 9 000 ₸ в зависимости от размера.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Можно ли почистить покрывало или плед?</summary>
            <p>Да. Пледы — от 5 000 ₸, покрывала — от 6 000 ₸. Стоимость зависит от размера.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Принимаете ли вы шторы с крючками и кольцами?</summary>
            <p>Рекомендуем снять фурнитуру перед сдачей. Если это невозможно — предупредите при приёме, мы учтём это при обработке.</p>
          </details>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sr-final-cta">
        <div className="sr-wrap" style={{ textAlign: "center" }}>
          <h2>Нужна чистка штор или домашнего текстиля?</h2>
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
