import type { ResumeData } from '../types';

interface Props {
  data: ResumeData;
}

type ScreenerRow = { symbol: string; category: string; change: number };

const coreNewProjects = [
  {
    title: 'Market Microstructure Limit Order Book',
    tech: 'C++20',
    date: 'April 2026',
    details: 'Sub-5 microsecond latency matching engine.',
  },
  {
    title: 'Historical Market Data Parser',
    tech: 'C++',
    date: 'March 2026',
    details: '10+ million updates/sec UDP multicast.',
  },
  {
    title: 'Systematic Trading Backtester',
    tech: 'Python/C++',
    date: 'February 2026',
    details: 'Pybind11 bridged framework.',
  },
  {
    title: 'SafeLens AI Pipeline',
    tech: 'C++, CUDA',
    date: 'December 2025',
    details: '300% inference speedup.',
  },
  {
    title: 'Predictive NCAA Tournament Model',
    tech: 'Python',
    date: 'November 2025',
    details: '5+ TB data analysis.',
  },
];

function hashPct(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const x = (h % 420) / 100 - 2.1;
  return Math.round(x * 10) / 10;
}

function buildScreenerRows(data: ResumeData): ScreenerRow[] {
  const oldSkills = [
    ...data.skills.languages.map((s) => s.name),
    ...data.skills.frameworks.map((s) => s.name),
    ...data.skills.developerTools.map((s) => s.name),
    ...data.skills.librariesTools.map((s) => s.name),
  ];

  const merged: Array<{ cat: string; items: string[] }> = [
    { cat: 'Languages', items: [...data.terminalSkills.languages, ...oldSkills] },
    { cat: 'Systems & Architecture', items: data.terminalSkills.systemsArchitecture },
    { cat: 'Data & Quant', items: data.terminalSkills.dataQuant },
    { cat: 'Tools & Platforms', items: data.terminalSkills.toolsPlatforms },
  ];

  return merged.flatMap((m) =>
    Array.from(new Set(m.items)).map((skill) => ({
      symbol: skill,
      category: m.cat,
      change: hashPct(`${m.cat}-${skill}`),
    })),
  );
}

const TradingTerminalSPA = ({ data }: Props) => {
  const screenerRows = buildScreenerRows(data);
  const honors = [
    'Accepted to NeurIPS 2025 ”Pro Moral Bench”',
    ...data.awards.map((a) => `${a.title} — ${a.organization} (${a.date})`),
  ];
  const activities = [
    'UIUC Google Developer Student Club (GDSC) - Technical Lead',
    'ACM @ UIUC – SIGma - Active Member',
    'UIUC Algorithmic Trading Club - Quantitative Researcher',
  ];
  const openSourceFeed = [
    'https://github.com/anisety/LLOB',
    'https://github.com/anisety/Lock-Free-NASDAQ-ITCH-Feed-Handler',
    'https://github.com/anisety/Custom-Arena-Memory-Allocator',
    'https://github.com/anisety/Zero-Allocation-High-Frequency-Backtester',
  ];

  const statTicker = [
    `GPA ${data.education.gpa}`,
    `Open Source Contributions ${data.stats.openSourceContributions}`,
    `Hackathons Won ${data.stats.hackathonsWon}`,
    ...data.terminalSkills.languages.slice(0, 8),
    ...data.terminalSkills.systemsArchitecture.slice(0, 4),
  ];

  return (
    <div className="spa-root">
      <div className="spa-ticker">
        <div className="spa-ticker-track">
          {[...statTicker, ...statTicker].map((item, i) => {
            const ch = hashPct(item);
            return (
              <span key={`${item}-${i}`} className={ch >= 0 ? 'up' : 'down'}>
                {item} {ch >= 0 ? '▲' : '▼'} {ch >= 0 ? '+' : ''}
                {ch.toFixed(1)}% <span className="sep">|</span>
              </span>
            );
          })}
        </div>
      </div>

      <header className="spa-header">
        <div>{data.personal.name}</div>
        <div>{data.personal.title}</div>
        <div>UIUC</div>
        <div>Computer Science & Mathematics</div>
        <div>{data.education.graduationDate ?? 'Expected May 2028'}</div>
      </header>

      <div className="market-divider" aria-hidden>
        <div className="eq">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} className="eq-bar" style={{ animationDelay: `${i * 70}ms` }} />
          ))}
        </div>
      </div>

      <div className="spa-grid">
        <section className="panel screener">
          <h3>Screener</h3>
          <div className="panel-body">
            <div className="row head"><span>Symbol</span><span>Last</span><span>Change</span></div>
            {screenerRows.map((r) => (
              <div className="row" key={`${r.category}-${r.symbol}`}>
                <span>{r.symbol}</span>
                <span>{r.category}</span>
                <span className={r.change >= 0 ? 'up' : 'down'}>
                  {r.change >= 0 ? '+' : ''}{r.change.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel chart">
          <h3>Main Chart / About</h3>
          <div className="chart-bg" />
          <div className="chart-candles" aria-hidden>
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={`cndl ${i % 3 === 0 ? 'down' : 'up'}`} style={{ left: `${4 + i * 5.7}%` }}>
                <span className="wick" />
                <span className="body" />
              </div>
            ))}
            <div className="ma-line" />
          </div>
          <div className="about-overlay">
            <h1>Hi, I&apos;m {data.personal.name}</h1>
            <p>{data.personal.summary}</p>
            <p>
              I&apos;m passionate about creating innovative solutions that make a real impact.
              With expertise in full-stack development, AI/ML, and scalable systems,
              I love tackling complex problems and turning ideas into reality.
            </p>
            <p>
              Contact: {data.personal.email} | {data.personal.phone} | {data.personal.location}
            </p>
          </div>
        </section>

        <section className="panel watchlist">
          <h3>Watchlist (Activities & Honors)</h3>
          <div className="panel-body">
            {honors.map((h) => <div key={h} className="watch-item up">{h}</div>)}
            {activities.map((a) => <div key={a} className="watch-item">{a}</div>)}
          </div>
        </section>

        <section className="panel broker-info">
          <h3>Account / Broker Info (Contact)</h3>
          <div className="panel-body broker-body">
            <div className="broker-line"><span>Email</span><a href={`mailto:${data.personal.email}`}>{data.personal.email}</a></div>
            <div className="broker-line"><span>Phone</span><a href={`tel:${data.personal.phone.replace(/\s/g, '')}`}>{data.personal.phone}</a></div>
            <div className="broker-line"><span>Location</span><span>{data.personal.location}</span></div>
            <div className="broker-buttons">
              <a href={`mailto:${data.personal.email}`} className="broker-btn">
                <svg viewBox="0 0 24 24" aria-hidden><path d="M3 7h18v10H3z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M3 8l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg>
                <span>Send Email</span>
              </a>
              <a href={data.personal.github} target="_blank" rel="noreferrer" className="broker-btn">
                <svg viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.8-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.7 11.7 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.2 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 0Z"/></svg>
                <span>GitHub</span>
              </a>
              <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="broker-btn">
                <svg viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2 4-2 4.2 0 5 2.8 5 6.4V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9S15 14.2 15 15.6V21h-5V9Z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href={data.personal.website} target="_blank" rel="noreferrer" className="broker-btn">
                <svg viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg>
                <span>Website</span>
              </a>
            </div>
            <p className="broker-note">
              I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind,
              want to discuss potential opportunities, or just want to say hello, I&apos;d love to hear from you!
            </p>
          </div>
        </section>

        <div className="center-bottom">
          <section className="panel positions">
            <h3>Positions (Experience)</h3>
            <div className="panel-body">
              <div className="row head"><span>Time</span><span>Symbol</span><span>Action</span><span>Size/Details</span></div>
              {data.experience.map((e) => (
                <div className="row four" key={`${e.company}-${e.startDate}-${e.position}`}>
                  <span>{e.startDate} - {e.endDate}</span>
                  <span>{e.company}</span>
                  <span>{e.position}</span>
                  <span>{e.description}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel time-sales">
            <h3>Time of Sales (Open Source)</h3>
            <div className="panel-body feed">
              {[...openSourceFeed, ...openSourceFeed].map((url, i) => (
                <div key={`${url}-${i}`} className="trade-print">
                  <span className={i % 2 === 0 ? 'up' : 'down'}>{i % 2 === 0 ? 'BUY' : 'SELL'}</span>
                  <a href={url} target="_blank" rel="noreferrer">{url}</a>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="panel level2">
          <h3>Level II (Projects & Research)</h3>
          <div className="panel-body">
            <div className="ob-head"><span>Bid</span><span>Spread</span><span>Ask</span></div>
            {[...coreNewProjects, ...data.projectsResearchTerminal, ...data.projects.map((p) => ({
              title: p.title,
              tech: p.technologies.slice(0, 2).join(', '),
              date: `${p.startDate} - ${p.endDate}`,
              details: p.description,
            }))].map((p, idx) => (
              <div className="ob-row" key={`${p.title}-${idx}`}>
                <div className="bid">
                  <div>{p.title}</div>
                  <small>{p.details}</small>
                </div>
                <div className="spread">{p.tech}</div>
                <div className="ask">{p.date}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TradingTerminalSPA;

