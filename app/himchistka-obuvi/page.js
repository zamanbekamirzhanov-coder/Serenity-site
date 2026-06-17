import { LOGO_BLACK, waLink, WHATSAPP_MSG, LOCATIONS, INSTAGRAM_URL } from "../shared-data";
import Link from "next/link";

export const metadata = {
  title: "Химчистка обуви в Астане | Кожа, замша, текстиль | Serenity",
  description: "Профессиональная химчистка обуви в Астане. Чистка кожаной, замшевой, текстильной и деликатной обуви. Восстановление цвета, удаление солей. Консультация в WhatsApp.",
  keywords: "химчистка обуви Астана, чистка обуви Астана, чистка кроссовок Астана, химчистка замшевой обуви, реставрация обуви Астана",
  alternates: { canonical: "/himchistka-obuvi" },
  openGraph: {
    title: "Химчистка обуви в Астане | Кожа, замша, текстиль | Serenity",
    description: "Профессиональная химчистка обуви в Астане. Чистка кожаной, замшевой, текстильной и деликатной обуви. Восстановление цвета, удаление солей. Консультация в WhatsApp.",
    url: "https://serenity.kz/himchistka-obuvi",
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
          <h1>Химчистка обуви в Астане</h1>
          <p className="sr-hero-sub">Профессиональная чистка кожаной, замшевой, текстильной и деликатной обуви с возможностью восстановления цвета и реставрации.</p>
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
          <p>Обувь из разных материалов требует разного подхода. Кожа, замша, нубук, текстиль, мех — для каждого материала мы подбираем свой способ обработки, чтобы вернуть обуви чистый и ухоженный вид без риска повреждения.</p>
          <p>Отправьте фото обуви в WhatsApp — мы подскажем по стоимости, срокам и возможности обработки. Особенно это важно для деликатных и дорогих пар.</p>
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
          <h3 className="sr-service-cat-title">Химчистка обуви</h3>
          <div className="sr-price-row"><span>Обувь текстиль / синтетика</span><span className="sr-price-val">9 000 ₸</span></div>
          <div className="sr-price-row"><span>Обувь кожа / замша / нубук</span><span className="sr-price-val">10 000 ₸</span></div>
          <div className="sr-price-row"><span>Обувь мех</span><span className="sr-price-val">12 000 ₸</span></div>
          <div className="sr-price-row"><span>Обувь деликатная</span><span className="sr-price-val">12 000 ₸</span></div>
          <div className="sr-price-row"><span>Детская обувь (до 34 размера)</span><span className="sr-price-val">скидка 20%</span></div>
          <h3 className="sr-service-cat-title">Дополнительные услуги</h3>
          <div className="sr-price-row"><span>Восстановление цвета</span><span className="sr-price-val">+50% к стоимости</span></div>
          <div className="sr-price-row"><span>Реставрация кожи</span><span className="sr-price-val">+50% к стоимости</span></div>
          <div className="sr-price-row"><span>Высокая обувь (ботфорты и др.)</span><span className="sr-price-val">+3 000 ₸</span></div>
          <div className="sr-price-row"><span>Удаление солей</span><span className="sr-price-val">+3 000 ₸</span></div>
          <p className="sr-service-note">Дополнительные услуги оцениваются индивидуально. Уточняйте при обращении.</p>

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
          <div className="sr-step"><span className="sr-step-num">01</span><div><h3>Отправьте фото обуви</h3><p>Сфотографируйте обувь со всех сторон и отправьте в WhatsApp. Укажите материал если знаете.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">02</span><div><h3>Мы оценим и подскажем</h3><p>Подсказываем по стоимости, возможности чистки и ожидаемому результату.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">03</span><div><h3>Привезите в пункт приёма</h3><p>Приёмщик осмотрит обувь и зафиксирует состояние при приёме.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">04</span><div><h3>Профессиональная чистка</h3><p>Обувь обрабатывается с учётом материала, цвета и типа загрязнения.</p></div></div>
          <div className="sr-step"><span className="sr-step-num">05</span><div><h3>Подготовка к выдаче</h3><p>После чистки обувь подготавливается к выдаче в чистом и ухоженном виде.</p></div></div>

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
            <summary>Сколько стоит химчистка кроссовок?</summary>
            <p>Текстильные кроссовки — 9 000 ₸, кожаные или замшевые — 10 000 ₸. Детская обувь до 34 размера — скидка 20%.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Можно ли почистить замшевую обувь?</summary>
            <p>Да. Мы работаем с замшей, нубуком и другими деликатными материалами. Способ обработки подбирается индивидуально.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Можно ли восстановить цвет обуви?</summary>
            <p>В большинстве случаев — да. Восстановление цвета — дополнительная услуга (+50% к стоимости чистки). Результат зависит от состояния материала.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Сколько времени занимает чистка обуви?</summary>
            <p>Стандартный срок — от 3 до 7 рабочих дней в зависимости от типа обуви и загрязнения.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Удаляете ли вы солевые разводы?</summary>
            <p>Да. Удаление солей — дополнительная услуга (+3 000 ₸). Эффективность зависит от глубины проникновения соли в материал.</p>
          </details>
          <details className="sr-faq-detail">
            <summary>Принимаете ли сумки?</summary>
            <p>Да. Сумки из текстиля и кожи — от 8 000 до 17 000 ₸ в зависимости от размера и материала.</p>
          </details>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sr-final-cta">
        <div className="sr-wrap" style={{ textAlign: "center" }}>
          <h2>Нужна химчистка обуви?</h2>
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
