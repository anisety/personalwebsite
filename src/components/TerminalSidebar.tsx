interface TerminalSidebarProps {
  name: string;
  title: string;
  location: string;
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    openSourceContributions: number;
    hackathonsWon: number;
  };
}

const links = [
  { id: 'hero', label: 'MAIN' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SCREENER' },
  { id: 'experience', label: 'TAPE' },
  { id: 'projects', label: 'LEVEL2' },
  { id: 'systems', label: 'MODULES' },
  { id: 'alerts', label: 'WATCH' },
  { id: 'education', label: 'EDU' },
  { id: 'contact', label: 'INBOX' },
];

const TerminalSidebar = ({ name, title, location, stats }: TerminalSidebarProps) => {
  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="terminal-sidebar terminal-pane">
      <div className="terminal-sidebar__head">
        <div className="terminal-sidebar__symbol">AB.TRM</div>
        <div className="terminal-sidebar__status">LIVE</div>
      </div>

      <div className="terminal-sidebar__body">
        <div className="terminal-sidebar__identity">
          <div className="terminal-sidebar__name">{name}</div>
          <div className="terminal-sidebar__title">{title}</div>
          <div className="terminal-sidebar__loc">{location}</div>
        </div>

        <nav className="terminal-sidebar__nav" aria-label="Dashboard sections">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => jumpTo(link.id)}
              className="terminal-sidebar__link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="terminal-sidebar__stats">
          <div className="terminal-sidebar__stat">
            <span>YRS</span>
            <span>{stats.yearsExperience}</span>
          </div>
          <div className="terminal-sidebar__stat">
            <span>PROJ</span>
            <span>{stats.projectsCompleted}</span>
          </div>
          <div className="terminal-sidebar__stat">
            <span>OSS</span>
            <span>{stats.openSourceContributions}</span>
          </div>
          <div className="terminal-sidebar__stat">
            <span>HACK</span>
            <span>{stats.hackathonsWon}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TerminalSidebar;

