import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronUp
} from "lucide-react";

export default function MainPage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "problems", "solution", "roadmap", "team", "technologies"];
      const scroll = window.scrollY + 150;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scroll && el.offsetTop + el.offsetHeight > scroll) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="header-content">
          <div className="logo" onClick={() => scrollTo("home")}>
            Tender WatchAI
          </div>
          <nav id="nav">
            <button className={`nav-btn ${activeSection === "home" ? "active" : ""}`} onClick={() => scrollTo("home")}>Home</button>
            <button className={`nav-btn ${activeSection === "problems" ? "active" : ""}`} onClick={() => scrollTo("problems")}>Muammolar</button>
            <button className={`nav-btn ${activeSection === "solution" ? "active" : ""}`} onClick={() => scrollTo("solution")}>Yechim</button>
            <button className={`nav-btn ${activeSection === "roadmap" ? "active" : ""}`} onClick={() => scrollTo("roadmap")}>Roadmap</button>
            <button className={`nav-btn ${activeSection === "team" ? "active" : ""}`} onClick={() => scrollTo("team")}>Team</button>
            <button className={`nav-btn ${activeSection === "technologies" ? "active" : ""}`} onClick={() => scrollTo("technologies")}>Texnologiyalar</button>
            <Link to="/upload" className="nav-btn">Upload</Link>
          </nav>
          <div className="lang-switcher">
            <button className="lang-btn active">UZ</button>
            <button className="lang-btn">RU</button>
            <button className="lang-btn">EN</button>
          </div>
        </div>
      </header>

      <main>
        {/* HOME */}
        {/* HOME — БАННЕР НА ВСЮ ШИРИНУ ЭКРАНА */}
<section 
  id="home" 
  style={{ 
    marginTop: "-10px",
    padding: "120px 20px 220px", 
    background: "linear-gradient(135deg, #0A2540 0%, #001529 100%)", 
    color: "white", 
    position: "relative", 
    overflow: "hidden",
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    boxSizing: "border-box"
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
    {/* Левая часть — текст */}
    <div>
      <h1 style={{ fontSize: "56px", fontWeight: 800, lineHeight: "1.1", marginBottom: "24px", fontFamily: "'Playfair Display', serif" }}>
        Tender WatchAI
      </h1>
      <p style={{ fontSize: "20px", lineHeight: "1.7", marginBottom: "32px", opacity: 0.95 }}>
        O‘zbekistondagi tender jarayonlari har yili milliardlab mablag‘larni qamrab oladi.<br /><br />
        Ammo narxlarning sun’iy oshirilishi, yashirin kelishuvlar va firibgarlik sxemalari hali ham katta xavf tug‘dirmoqda.<br /><br />
        <strong>Bizning AI yechimimiz ushbu muammoga barham berish uchun yaratilgan:</strong><br />
        shaffof tenderlar, adolatli raqobat va himoyalangan byudjet — barchasi bitta platformada.
      </p>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/upload" className="cta-button" style={{ padding: "16px 36px", fontSize: "18px" }}>
          Hujjat Yuklash
        </Link>
        <button onClick={() => scrollTo("problems")} style={{ padding: "16px 36px", fontSize: "18px", background: "transparent", border: "2px solid white", borderRadius: "12px", color: "white" }}>
          Batafsil
        </button>
      </div>
    </div>

    {/* Правая часть — место под картинку */}
    <div style={{
      background: "rgba(255,255,255,0.1)",
      borderRadius: "24px",
      height: "520px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      color: "rgba(255,255,255,0.6)",
      fontStyle: "italic"
    }}>
      ← <img style={{
        height: "520px",
        border: "1px solid rgba(255,255,255,0.2)",
        maxWidth: "580px"
      }
        
      } src="../img/Снимок экрана 2025-11-30 170808.png" alt="" />→<br />
     
    </div>
  </div>

  {/* Волны снизу */}
  <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }} viewBox="0 0 1440 200" fill="none">
    <path fill="#F8FAFB" d="M0,100 C300,200 600,0 1000,50 L1440,100 L1440,200 L0,200 Z" />
  </svg>
</section>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Tender WatchAI</h1>
            <p className="hero-subtitle">
              Davlat xaridlarida shaffoflik va xuddi shunday raqamli tekshiruvchi AI tizim. Noqonuniy narxlarni avtomatik aniqlaymiz.
            </p>
            <div className="hero-stats">
              <div className="stat-card"><div className="stat-number">1.7</div><div className="stat-label">Trillion So'm</div></div>
              <div className="stat-card"><div className="stat-number">24</div><div className="stat-label">Audit Natijalari</div></div>
              <div className="stat-card"><div className="stat-number">99%</div><div className="stat-label">Tekshiruv Aniqlik</div></div>
            </div>
            <Link to="/upload" className="cta-button">Hujjat Yuklash</Link>
          </div>
        </section>

       {/* PROBLEMS — ТОЧНО КАК У ТЕБЯ, НИ ОДНОЙ ЗАПЯТОЙ НЕ ТРОГАЛ */}
<section id="problems" style={{ padding: "100px 20px", background: "#F8FAFB" }}>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h2 style={{ textAlign: "center", fontSize: "42px", marginBottom: "20px", color: "#1a1a1a" }}>
      Davlatda Moliyaviy Qonunbuzarliklar
    </h2>
    <p style={{ textAlign: "center", color: "var(--text-light)", marginBottom: "40px", fontSize: "14px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
      Kartochkani sichqoncha bilan ustiga qo'ying — batafsil ma'lumot va manba havolalarini ko'ring:
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", marginBottom: "80px" }}>
      {/* Flip Card 1 */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="sticker sticker-top-left">💰</div>
            <div className="sticker sticker-top-right">🔍</div>
            <div className="flip-icon">💰</div>
            <div className="flip-title">Moliyaqonunbuzarliklar</div>
            <div className="flip-amount">1.7 Trillion So'm</div>
            <span className="flip-badge">Red Circle Juda Xavfli</span>
          </div>
          <div className="flip-card-back">
            <h3 style={{ marginTop: 0, fontSize: "18px" }}>2025 Q1 Audit Natijalari</h3>
            <p style={{ fontSize: "13px", margin: "12px 0", lineHeight: 1.6 }}>
              24 ta auditda Davlatxisob palatasitomonida aniqlangan qonunbuzarliklar
            </p>
            <div className="flip-amount">1,700,000,000,000 So'm</div>
            <a href="https://uzaily.uz" target="_blank" rel="noopener noreferrer" className="flip-link">
              Newspaper Manbani O'qish →
            </a>
          </div>
        </div>
      </div>

      {/* Flip Card 2 */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="sticker sticker-top-left">🏥</div>
            <div className="sticker sticker-top-right">📈</div>
            <div className="flip-icon">🛍️</div>
            <div className="flip-title">Ijtimoiy Tarmog'i</div>
            <div className="flip-amount">Ko'payib Boravotgan</div>
            <span className="flip-badge">Orange Circle O'rtacha Xavf</span>
          </div>
          <div className="flip-card-back">
            <h3 style={{ marginTop: 0, fontSize: "18px" }}>Asossiz & Ortiqcha</h3>
            <p style={{ fontSize: "13px", margin: "12px 0", lineHeight: 1.6 }}>
              Vazirliklar tomonidan "ortiqcha narxli" xaridlar bo'yicha shikoyatlar
            </p>
            <div className="flip-amount">Shikoyatlar Ko'paymoqda</div>
            <a href="https://uzaily.uz" target="_blank" rel="noopener noreferrer" className="flip-link">
              Clipboard Ma'lumot →
            </a>
          </div>
        </div>
      </div>

      {/* Flip Card 3 */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="sticker sticker-top-left">📋</div>
            <div className="sticker sticker-top-right">⚖️</div>
            <div className="flip-icon">📋</div>
            <div className="flip-title">Noqonuny Shartnomalar</div>
            <div className="flip-amount">6,241 Ta</div>
            <span className="flip-badge">Red Circle Juda Xavfli</span>
          </div>
          <div className="flip-card-back">
            <h3 style={{ marginTop: 0, fontSize: "18px" }}>Qonun Talablari Buzilgan</h3>
            <p style={{ fontSize: "13px", margin: "12px 0", lineHeight: 1.6 }}>
              To'g'ridan-to'g'ri shartnomalar qonunchiligiga zid
            </p>
            <div className="flip-amount" style={{ color: "#D4B065" }}>2.7 Trillion So'm</div>
            <a href="https://uzaily.uz" target="_blank" rel="noopener noreferrer" className="flip-link">
              Link Batafsil →
            </a>
          </div>
        </div>
      </div>

      {/* Flip Card 4 */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="sticker sticker-top-left">💸</div>
            <div className="sticker sticker-top-right">📊</div>
            <div className="flip-icon">💸</div>
            <div className="flip-title">Tanlovsiz Xaridlar</div>
            <div className="flip-amount">56.8%</div>
            <span className="flip-badge">Yellow Circle Diqqat</span>
          </div>
          <div className="flip-card-back">
            <h3 style={{ marginTop: 0, fontSize: "18px" }}>2024 Ma'lumotlari</h3>
            <p style={{ fontSize: "13px", margin: "12px 0", lineHeight: 1.6 }}>
              Davlat xaridlarining 56.8% tanlovsiz tarzda amalga oshirilgan
            </p>
            <div className="flip-amount" style={{ color: "#00A67E" }}>80.3 Trillion So'm</div>
            <a href="https://uzaily.uz" target="_blank" rel="noopener noreferrer" className="flip-link">
              Chart Rasmi →
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* CTA блок снизу */}
    <div style={{
      background: "linear-gradient(135deg, rgba(212, 176, 101, 0.05) 0%, rgba(0, 168, 126, 0.05) 100%)",
      borderRadius: "16px",
      padding: "20px",
      textAlign: "center",
      marginTop: "50px",
      border: "2px solid rgba(212, 176, 101, 0.1)"
    }}>
      <h3 style={{ color: "var(--primary)", marginTop: 0 }}>Nima Qilish Kerak?</h3>
      <p style={{ color: "var(--text-light)", maxWidth: "600px", margin: "15px auto", fontSize: "15px" }}>
       Tender Watch AI loyihasidan foydalanib qonunbuzarliklarni avtomatik aniqlab, shaffoflik va ochildiqni oshiradi.
      </p>
      <Link to="/upload" className="cta-button" style={{ marginTop: "20px", display: "inline-block" }}>
        Tahlil Qilishni Boshlash Rocket
      </Link>
    </div>
  </div>
</section>

{/* SOLUTION — ТОЧНО КАК У ТЕБЯ */}
<section id="solution" style={{ padding: "120px 20px", background: "white" }}>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h2 style={{ textAlign: "center", fontSize: "42px", marginBottom: "20px", color: "#1a1a1a" }}>
      Bizning Yechim
    </h2>
    <p style={{ textAlign: "center", fontSize: "16px", color: "var(--text-light)", maxWidth: "800px", margin: "0 auto 60px" }}>
      Avtomatlashtrilgan xarid tekshiruv platformasi — AI yordamida narxlarni tekshirish va qonunbuzarliklarni aniqlash.
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" }}>
      <div className="card">
        <div className="card-icon">📤</div>
        <h3>Fayl Yuklash</h3>
        <p>PDF yoki Word hujjatni sistemaga yuklang</p>
      </div>
      <div className="card">
        <div className="card-icon">🤖</div>
        <h3>AI Tahlili</h3>
        <p>Mahsulotlar va narxlar avtomatik aniqlanadi</p>
      </div>
      <div className="card">
        <div className="card-icon">📊</div>
        <h3>Bozor Solishtirmasi</h3>
        <p>Bozor narxlari bilan taqqoslash</p>
      </div>
      <div className="card">
        <div className="card-icon">⭐</div>
        <h3>Reyting Berish</h3>
        <p>Normal, Shubhali yoki Juda Shubhali</p>
      </div>
      <div className="card">
        <div className="card-icon">📚</div>
        <h3>O'rganish</h3>
        <p>Ekspert xulosalaridan o'rganish</p>
      </div>
      <div className="card">
        <div className="card-icon">🛡️</div>
        <h3>Himoya</h3>
        <p>Noqonuniy sarflanishlarni kamaytirish</p>
      </div>
    </div>

    <p style={{ textAlign: "center", fontSize: "18px", fontWeight: 700, color: "var(--primary)", marginTop: "60px" }}>
      Right Arrow Adolatli narx. Shaffof xarid. Aqlli tekshiruv. Left Arrow
    </p>
  </div>
</section>

        {/* ROADMAP — ТОЧНО КАК У ТЕБЯ, НИЧЕГО НЕ ИЗМЕНЕНО */}
        <section id="roadmap">
          <h2>Yo'l Xaritasi 🗺️</h2>
          <p style={{ textAlign: "center", color: "var(--text-light)", marginBottom: "60px" }}>
            Platformamiz rivojlanishining asosiy bosqichlari va maq sadlari:
          </p>

          <div className="timeline">
            <div className="timeline-item current">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-status current">🚀 HOZIR</span>
                <h3>MVP & Prototype</h3>
                <p>Asosiy funksiyalar va AI tizimining testlashtirilishi</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-status completed">✅ Keyingi</span>
                <h3>Beta Versiya</h3>
                <p>Foydalanuvchilar bilan tizimni sinov qilish va takomillashtirilishi</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-status completed">Q3 2025</span>
                <h3>Rasmiy Ishga Tushurilishi</h3>
                <p>Davlat organlari va audit tashkilotlarida muofaqiyatli ishni boshlash</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-status future">📈 Kelajak</span>
                <h3>Xorijiy Bozor</h3>
                <p>Boshqa mamlakatlarning davlat xaridlarini tekshirish</p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM — ТОЧНО КАК У ТЕБЯ */}
        <section id="team">
          <h2>Bizning Jamoa Users</h2>
          <p style={{ textAlign: "center", color: "var(--text-light)", marginBottom: "60px" }}>
            Davlat xaridlaridagi shaffoflikni oshirish uchun birlashgan, tajribali IT mutaxassislari.
          </p>

          <div className="card-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img src="../img/photo_2025-11-29_16-11-28.jpg" alt="" />
              </div>
              <div className="member-name">Abdussatorov Akbar</div>
              <div className="member-role">PM & Backend 1 year experience
</div>
              <p style={{ color: "var(--text-light)", fontSize: "14px" }}>Web xizmatlar & API integratsiyalari</p>
              <div className="member-skills">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="../img/myphotonew.JPG" alt="" />
              </div>
              <div className="member-name">Muytenbaeva Zulfiya</div>
              <div className="member-role">Data & AI  1 year experience
</div>
              <p style={{ color: "var(--text-light)", fontSize: "14px" }}>Data processing & ML models</p>
              <div className="member-skills">
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Gemini API</span>
              </div>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="../img/3.JPG" alt="" />
              </div>
              <div className="member-name">Temirova Sabina</div>
              <div className="member-role">Frontend Dev 1 year experience
</div>
              <p style={{ color: "var(--text-light)", fontSize: "14px" }}>React & Dashboard UIs</p>
              <div className="member-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TailwindCSS</span>
                <span className="skill-tag">REST API</span>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES — ТОЧНО КАК У ТЕБЯ */}
        <section id="technologies">
          <h2>Texnologiyalar 🛠️</h2>
          <p style={{ textAlign: "center", color: "var(--text-light)", marginBottom: "60px" }}>
            Platformamiz zamonaviy texnologiyalar va ochiq ma'lumot manbalari asosida qurilgan.
          </p>

          <h3 style={{ textAlign: "center", marginBottom: "40px" }}>Backend & AI</h3>
          <div className="card-grid">
            <div className="card"><div className="card-icon"><img src="../img/puthon.png" alt="" /></div><h3 style={{fontSize:"16px"}}>Python</h3><p>Asosiy backend tili</p></div>
            <div className="card"><div className="card-icon"><img src="../img/fastapi.jpg" alt="" /></div><h3 style={{fontSize:"16px"}}>FastAPI</h3><p>Yengil va tez API framework</p></div>
            <div className="card"><div className="card-icon"><img src="../img/Sql.png" alt="" /></div><h3 style={{fontSize:"16px"}}>PostgreSQL</h3><p>Ishonchli ma'lumotlar bazasi</p></div>
            <div className="card"><div className="card-icon"><img src="../img/gemini.png" alt="" /></div><h3 style={{fontSize:"16px"}}>Gemini API</h3><p>Hujjat tahlili uchun AI</p></div>
          </div>

          <h3 style={{ textAlign: "center", margin: "60px 0 40px" }}>Ochiq Ma'lumot Manbalari</h3>
          <div className="card-grid">
            <div className="card"><div className="card-icon"><a href="https://orginfo.uz/"><img src="../img/org.png" alt="" /></a></div><h3 style={{fontSize:"16px"}}>OrgInfo Portal</h3><p>Davlat organlari reestri</p></div>
            <div className="card"><div className="card-icon"><a href="https://xarid.uzex.uz/home"><img src="../img/xarid.png" alt="" /></a></div><h3 style={{fontSize:"16px"}}>E-Xarid Portal</h3><p>Davlat xaridlarining ma'lumotlari</p></div>
            <div className="card"><div className="card-icon"><a href="https://etender.uzex.uz/home"><img src="../img/uzex.png" alt="" /></a></div><h3 style={{fontSize:"16px"}}>E-Tender Portal</h3><p>Tenderlar ma'lumot bazasi</p></div>
                      </div>
        </section>
      </main>

      {/* FOOTER — ТОЧНО КАК У ТЕБЯ */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Tender Watch AI</h4>
            <p>Davlat xaridlarida shaffoflikni oshirish uchun AI yordamchi platform</p>
          </div>
          <div className="footer-section">
            <h4>Havolalar</h4>
            <a href="#" onClick={() => scrollTo("home")}>Home</a><br/>
            <a href="#" onClick={() => scrollTo("problems")}>Muammolar</a><br/>
            <a href="#" onClick={() => scrollTo("solution")}>Yechim</a> <br />
            <a href="./files/details.pdf">Loyiha haqida qo'shimcha ma'lumotlar</a> <br />
            <a href="./files/Namuna.pdf">Shartnoma namunasi</a><br/>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>Email: a.sh.abdusattorov@gmail.com</p>
            <p>Tel: +998 93 536-86-82</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Tender Watch. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>

      {/* Кнопка наверх */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 999, borderRadius: "50%", width: "50px", height: "50px" }}
        className="cta-button"
      >
        <ChevronUp size={28} />
      </button>
    </>
  );
}