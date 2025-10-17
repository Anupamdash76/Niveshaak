import React from "react";

const SupportPage = () => {
  const quickLinks = [
    { title: "Track account opening status SEBI", url: "https://www.google.com/search?q=Track+demat+account+opening+status+SEBI" },
    { title: "Track segment activation NSE", url: "https://www.google.com/search?q=Track+segment+activation+NSE" },
    { title: "Intraday margins explanation India", url: "https://www.google.com/search?q=Intraday+margins+explanation+India" },
    { title: "Niveshak user manual", url: "https://www.google.com/search?q=Niveshak+trading+platform+user+manual" },
    { title: "Brokerage & charges explained", url: "https://www.google.com/search?q=Brokerage+and+charges+explained+India" },
  ];

  const featuredArticles = [
    { title: "Current Takeovers and Delisting in India - August 2025", url: "https://www.google.com/search?q=Current+Takeovers+and+Delisting+in+India+August+2025" },
    { title: "Latest Intraday leverages (MIS & CO) SEBI rules", url: "https://www.google.com/search?q=Latest+Intraday+leverages+MIS+CO+SEBI+rules" },
    { title: "Understanding pledging & margin benefits", url: "https://www.google.com/search?q=Pledging+and+margin+benefits+SEBI" },
    { title: "How to read contract notes", url: "https://www.google.com/search?q=How+to+read+contract+note+India" },
  ];

  const Icon = ({ type }) => {
    const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
    switch (type) {
      case "book":
        return (
          <svg {...common}>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M4 3h16v14H6.5A2.5 2.5 0 0 0 4 19.5z" />
          </svg>
        );
      case "chat":
        return (
          <svg {...common}>
            <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </svg>
        );
      case "phone":
        return (
          <svg {...common}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 9.81 19.79 19.79 0 0 1 .08 1.18 2 2 0 0 1 2.05 0h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L6 8a16 16 0 0 0 10 10l1.54-1.17a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z" />
          </svg>
        );
      case "mail":
        return (
          <svg {...common}>
            <path d="M4 4h16v16H4z" />
            <path d="m22 6-10 7L2 6" />
          </svg>
        );
      default:
        return (
          <svg {...common}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        );
    }
  };

  return (
    <>
      <style>{`
        .support-page { background:#F8FAFC; color:#1F2937; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
        .wrap { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        .hero { text-align: center; padding: 48px 1rem 28px; }
        .hero h1 { margin:0; font-weight:800; font-size: 40px; letter-spacing:-0.02em; color:#0F172A; }
        .hero p { margin: 10px auto 0; max-width: 700px; color:#475569; font-size: 16px; }

        .section { padding: 28px 0 16px; }
        .section h2 { font-size: 22px; font-weight: 700; margin: 0 0 16px; color:#0F172A; }

        .grid { display: grid; gap: 14px; }
        .quick-links-grid { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .featured-grid  { grid-template-columns: repeat(1, minmax(0, 1fr)); }

        @media (min-width: 768px) {
          .quick-links-grid { grid-template-columns: repeat(3, 1fr); }
          .featured-grid  { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .quick-links-grid { grid-template-columns: repeat(5, 1fr); }
          .featured-grid  { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1280px) {
          .featured-grid  { grid-template-columns: repeat(4, 1fr); }
        }

        .card {
          background:#fff; border:1px solid #E5E7EB; border-radius:12px;
          padding:16px; min-height:120px;
          display:flex; gap:12px; align-items:flex-start;
          transition: box-shadow .2s ease, transform .2s ease, border-color .2s ease;
        }
        .card:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(15,23,42,.08); border-color:#FF9933; }
        .card .icon {
          width:40px; height:40px; border-radius:9999px; background:#EEF2FF;
          color:#4F46E5; display:flex; align-items:center; justify-content:center; flex:0 0 auto;
        }
        .card h3 { margin:2px 0 6px; font-size:16px; font-weight:600; color:#111827; }
        .card p  { margin:0; font-size:14px; color:#6B7280; }
        .card.link { text-decoration:none; color:inherit; }
      `}</style>

      <div className="support-page">
        <div className="wrap">
          {/* Hero */}
          <header className="hero">
            <h1>How can we help you?</h1>
            <p>Find answers, guides, and resources to get the most out of our platform.</p>
          </header>

          {/* Quick Links – 5 columns on desktop */}
          <section className="section">
            <h2>Quick Links</h2>
            <div className="grid quick-links-grid">
              {quickLinks.map((q, i) => (
                <a key={q.title} className="card link" href={q.url} target="_blank" rel="noreferrer">
                  <div className="icon" aria-hidden>
                    <Icon type={["book","chat","phone","mail","plus"][i] || "plus"} />
                  </div>
                  <div>
                    <h3>{q.title}</h3>
                    <p>Open in new tab</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Featured Articles – 3 columns (→ 4 on very wide screens) */}
          <section className="section" style={{ paddingBottom: 40 }}>
            <h2>Featured Articles</h2>
            <div className="grid featured-grid">
              {featuredArticles.map((a) => (
                <a key={a.title} className="card link" href={a.url} target="_blank" rel="noreferrer">
                  <div className="icon" aria-hidden>
                    <Icon type="book" />
                  </div>
                  <div>
                    <h3>{a.title}</h3>
                    <p>Click to read more…</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
