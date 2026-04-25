import { useState, useEffect } from "react"

const T = {
  en: {
    discord_label: "Discord Server",
    tagline: "A place for the honest.",
    subtitle: "Where conversations breathe.",
    join: "Join the House",
    about_label: "About",
    about_title: "What is Melancholic House?",
    about_text: "Melancholic House is a Discord server built for those who value real conversation. Minimal rules, maximum freedom — a modern space to share your creativity, connect with others, and simply exist without noise, without judgement.",
    features: ["Freedom of expression", "Minimal moderation", "Creative sharing", "Modern community"],
    cta_title: "Ready to enter?",
    cta_sub: "Join us on Discord.",
    footer_alt_label: "Backup link",
    footer_copy: "© 2025 Melancholic House",
  },
  ru: {
    discord_label: "Discord Сервер",
    tagline: "Место для честных.",
    subtitle: "Где разговоры дышат.",
    join: "Войти в Дом",
    about_label: "О нас",
    about_title: "Что такое Melancholic House?",
    about_text: "Melancholic House — Discord сервер для тех, кто ценит настоящее общение. Минимум правил, максимум свободы — современное пространство для творчества, общения и просто существования без лишнего шума и осуждения.",
    features: ["Свобода самовыражения", "Минимальная модерация", "Творческий обмен", "Современное сообщество"],
    cta_title: "Готов войти?",
    cta_sub: "Присоединяйся в Discord.",
    footer_alt_label: "Запасная ссылка",
    footer_copy: "© 2025 Melancholic House",
  }
}

const RU_COUNTRIES = ['RU', 'BY', 'KZ', 'UA', 'UZ', 'AZ', 'AM', 'GE', 'TM', 'KG', 'TJ', 'MD']

const stars = Array.from({ length: 44 }, (_, i) => ({
  cx: ((i * 137.508) % 1200).toFixed(1),
  cy: ((i * 97.31) % 300).toFixed(1),
  r: i % 4 === 0 ? 1.3 : i % 3 === 0 ? 1 : 0.65,
  opacity: (0.08 + (i % 6) * 0.07).toFixed(2),
}))

const ArrowSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" width="15" height="15" style={{ flexShrink: 0 }}>
    <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const HouseLogoSVG = () => (
  <svg viewBox="0 0 30 30" fill="none" width="26" height="26" style={{ flexShrink: 0 }}>
    <path d="M3 13.5L15 3L27 13.5V28H3V13.5Z" stroke="#ede9e3" strokeWidth="1" fill="none"/>
    <rect x="11" y="19" width="8" height="9" stroke="#ede9e3" strokeWidth="0.8" fill="none"/>
    <line x1="15" y1="3" x2="15" y2="0.5" stroke="#ede9e3" strokeWidth="0.8" opacity="0.35"/>
    <rect x="4" y="19" width="5" height="5" stroke="#ede9e3" strokeWidth="0.6" fill="none" opacity="0.45"/>
    <rect x="21" y="19" width="5" height="5" stroke="#ede9e3" strokeWidth="0.6" fill="none" opacity="0.45"/>
  </svg>
)

const BannerSVG = () => (
  <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
    <rect width="1200" height="420" fill="#0d0d0d"/>
    {stars.map((s, i) => (
      <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="white" opacity={s.opacity}/>
    ))}
    <circle cx="150" cy="105" r="56" fill="none" stroke="white" strokeWidth="0.6" opacity="0.4"/>
    <circle cx="169" cy="95" r="56" fill="#0d0d0d"/>
    <polygon points="600,125 450,282 750,282" fill="none" stroke="white" strokeWidth="0.8" opacity="0.28"/>
    <rect x="465" y="282" width="270" height="138" fill="none" stroke="white" strokeWidth="0.8" opacity="0.28"/>
    <rect x="558" y="324" width="84" height="96" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
    <rect x="480" y="302" width="50" height="50" fill="none" stroke="white" strokeWidth="0.4" opacity="0.16"/>
    <rect x="670" y="302" width="50" height="50" fill="none" stroke="white" strokeWidth="0.4" opacity="0.16"/>
    <line x1="0" y1="410" x2="370" y2="410" stroke="white" strokeWidth="0.3" opacity="0.09"/>
    <line x1="830" y1="410" x2="1200" y2="410" stroke="white" strokeWidth="0.3" opacity="0.09"/>
    <text x="600" y="398" textAnchor="middle" fill="white" opacity="0.022" fontSize="210" fontFamily="Georgia,serif" letterSpacing="22">HOUSE</text>
  </svg>
)

export default function App() {
  const [lang, setLang] = useState('en')
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 60)
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => { if (RU_COUNTRIES.includes(d.country_code)) setLang('ru') })
      .catch(() => {})
  }, [])

  const switchLang = (l) => {
    if (l === lang) return
    setFading(true)
    setTimeout(() => { setLang(l); setFading(false) }, 320)
  }

  const t = T[lang]

  return (
    <div style={{
      background: '#080808', color: '#ede9e3', minHeight: '100vh',
      fontFamily: "'DM Mono', 'Courier New', monospace", fontWeight: 300,
      opacity: visible ? 1 : 0, transition: 'opacity 0.9s ease',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::selection{background:#ede9e3;color:#080808}
        a{color:inherit;text-decoration:none}
        button{cursor:pointer;font-family:inherit}
        .nav{
          position:fixed;top:0;left:0;right:0;z-index:100;
          display:flex;justify-content:space-between;align-items:center;
          padding:22px 48px;
          background:rgba(8,8,8,0.78);
          border-bottom:1px solid rgba(237,233,227,0.06);
          backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
        }
        .nav-brand{display:flex;align-items:center;gap:14px}
        .nav-name{
          font-family:'Cormorant Garamond',serif;
          font-size:16px;font-weight:300;letter-spacing:4px;text-transform:uppercase;
        }
        .lang-sw{display:flex;border:1px solid rgba(237,233,227,0.18)}
        .lb{
          background:none;border:none;padding:7px 16px;
          font-size:10px;letter-spacing:2.5px;color:rgba(237,233,227,0.32);
          transition:all 0.3s ease;
        }
        .lb.on{background:#ede9e3;color:#080808}
        .lb:not(.on):hover{color:#ede9e3}
        .hero{
          min-height:100vh;display:flex;flex-direction:column;
          justify-content:center;padding:120px 48px 80px;
          position:relative;overflow:hidden;
        }
        .hero-tag{
          font-size:10px;letter-spacing:5px;text-transform:uppercase;
          color:rgba(237,233,227,0.26);margin-bottom:36px;
          display:flex;align-items:center;gap:18px;
        }
        .hero-tag::before{content:'';width:36px;height:1px;background:rgba(237,233,227,0.22)}
        .hero-h1{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(54px,9.5vw,136px);
          font-weight:300;line-height:0.88;letter-spacing:-2px;margin-bottom:44px;
        }
        .hero-h1 em{font-style:italic;color:rgba(237,233,227,0.4)}
        .hero-sub{
          font-size:11px;letter-spacing:4px;text-transform:uppercase;
          color:rgba(237,233,227,0.32);margin-bottom:64px;
        }
        .ghost-text{
          position:absolute;right:-10px;top:50%;transform:translateY(-50%);
          font-family:'Cormorant Garamond',serif;
          font-size:220px;font-weight:300;letter-spacing:-8px;
          color:rgba(237,233,227,0.028);
          pointer-events:none;user-select:none;white-space:nowrap;
        }
        .btn{
          display:inline-flex;align-items:center;gap:14px;
          border:1px solid rgba(237,233,227,0.48);
          padding:15px 38px;font-size:10px;letter-spacing:3.5px;
          text-transform:uppercase;transition:all 0.4s ease;
          color:#ede9e3;background:transparent;
        }
        .btn:hover{background:#ede9e3;color:#080808}
        .btn-arr{transition:transform 0.4s ease;display:flex;align-items:center}
        .btn:hover .btn-arr{transform:translateX(5px)}
        .banner{position:relative;overflow:hidden}
        .banner-fade{
          position:absolute;inset:0;
          background:linear-gradient(to bottom,#080808 8%,transparent 36%,transparent 64%,#080808 92%);
          z-index:1;
        }
        .banner-cap{
          position:absolute;bottom:64px;left:48px;z-index:2;
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(30px,5vw,68px);font-weight:300;font-style:italic;
          color:rgba(237,233,227,0.82);
        }
        .about-wrap{padding:120px 48px;max-width:1200px;margin:0 auto}
        .s-label{
          font-size:9px;letter-spacing:5px;text-transform:uppercase;
          color:rgba(237,233,227,0.22);margin-bottom:64px;
          display:flex;align-items:center;gap:20px;
        }
        .s-label::after{content:'';flex:1;height:1px;background:rgba(237,233,227,0.07)}
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:88px;align-items:start}
        .about-h{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(32px,4vw,58px);font-weight:300;line-height:1.1;
          margin-bottom:28px;
        }
        .about-p{font-size:13px;line-height:2;color:rgba(237,233,227,0.46);margin-bottom:52px}
        .feat{list-style:none}
        .feat li{
          padding:20px 0;border-bottom:1px solid rgba(237,233,227,0.07);
          display:flex;align-items:center;gap:18px;
          font-size:11px;letter-spacing:2px;color:rgba(237,233,227,0.55);
          transition:color 0.3s;
        }
        .feat li:first-child{border-top:1px solid rgba(237,233,227,0.07)}
        .feat li:hover{color:#ede9e3}
        .dot{width:5px;height:5px;border:1px solid rgba(237,233,227,0.3);flex-shrink:0;transition:background 0.3s}
        .feat li:hover .dot{background:#ede9e3;border-color:#ede9e3}
        .cta-s{
          padding:160px 48px;text-align:center;
          border-top:1px solid rgba(237,233,227,0.05);
        }
        .cta-h{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(48px,8vw,118px);font-weight:300;line-height:0.95;
          margin-bottom:28px;
        }
        .cta-p{font-size:10px;letter-spacing:5px;text-transform:uppercase;color:rgba(237,233,227,0.24);margin-bottom:64px}
        .foot{
          padding:44px 48px;border-top:1px solid rgba(237,233,227,0.05);
          display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;
        }
        .foot-links{display:flex;flex-direction:column;gap:10px}
        .fl{font-size:11px;letter-spacing:1.5px;color:rgba(237,233,227,0.24);transition:color 0.3s}
        .fl:hover{color:rgba(237,233,227,0.65)}
        .fc{font-size:10px;color:rgba(237,233,227,0.14);letter-spacing:2px}
        @media(max-width:768px){
          .nav{padding:18px 24px}
          .hero{padding:100px 24px 60px}
          .ghost-text{display:none}
          .about-wrap{padding:80px 24px}
          .about-grid{grid-template-columns:1fr;gap:48px}
          .cta-s{padding:100px 24px}
          .banner-cap{left:24px;bottom:40px}
          .foot{padding:32px 24px;flex-direction:column;align-items:flex-start}
          .btn{padding:14px 28px;font-size:9px}
        }
        @media(max-width:480px){
          .nav-name{display:none}
          .hero-h1{letter-spacing:-1px}
        }
        @supports(-webkit-touch-callout:none){
          .nav{padding-top:max(22px,env(safe-area-inset-top))}
          .foot{padding-bottom:max(44px,calc(32px + env(safe-area-inset-bottom)))}
        }
      `}</style>

      <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.32s ease' }}>

        <nav className="nav">
          <div className="nav-brand">
            <HouseLogoSVG/>
            <span className="nav-name">Melancholic House</span>
          </div>
          <div className="lang-sw">
            <button className={`lb${lang === 'en' ? ' on' : ''}`} onClick={() => switchLang('en')}>EN</button>
            <button className={`lb${lang === 'ru' ? ' on' : ''}`} onClick={() => switchLang('ru')}>RU</button>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-tag">{t.discord_label}</div>
          <h1 className="hero-h1">Melancholic<br/><em>House</em></h1>
          <p className="hero-sub">{t.tagline}</p>
          <a href="https://discord.gg/melancholic-house" target="_blank" rel="noopener noreferrer" className="btn">
            {t.join}
            <span className="btn-arr"><ArrowSVG/></span>
          </a>
          <div className="ghost-text" aria-hidden="true">HOUSE</div>
        </section>

        <section className="banner">
          <div className="banner-fade"/>
          <BannerSVG/>
          <div className="banner-cap">{t.subtitle}</div>
        </section>

        <section className="about-wrap">
          <div className="s-label">{t.about_label}</div>
          <div className="about-grid">
            <div>
              <h2 className="about-h">{t.about_title}</h2>
              <p className="about-p">{t.about_text}</p>
              <a href="https://discord.gg/melancholic-house" target="_blank" rel="noopener noreferrer" className="btn">
                {t.join}
                <span className="btn-arr"><ArrowSVG/></span>
              </a>
            </div>
            <ul className="feat">
              {t.features.map((f, i) => (
                <li key={i}><div className="dot"/>{f}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="cta-s">
          <h2 className="cta-h">{t.cta_title}</h2>
          <p className="cta-p">{t.cta_sub}</p>
          <a href="https://discord.gg/melancholic-house" target="_blank" rel="noopener noreferrer" className="btn">
            discord.gg/melancholic-house
            <span className="btn-arr"><ArrowSVG/></span>
          </a>
        </section>

        <footer className="foot">
          <div className="foot-links">
            <a href="https://discord.gg/melancholic-house" target="_blank" rel="noopener noreferrer" className="fl">discord.gg/melancholic-house</a>
            <a href="https://discord.gg/AxU7h2T6qj" target="_blank" rel="noopener noreferrer" className="fl">{t.footer_alt_label}: discord.gg/AxU7h2T6qj</a>
          </div>
          <span className="fc">{t.footer_copy}</span>
        </footer>

      </div>
    </div>
  )
}
