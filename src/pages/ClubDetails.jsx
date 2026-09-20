import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import clubs from "../data/clubs";

const TABS = ["Overview", "Announcements", "Members", "Requirements", "Achievements", "About"];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

const initials = (name) =>
  name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

function AnnouncementCard({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="cd-card">
      <span className="cd-date">{formatDate(item.date)}</span>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      {open && item.more && <p className="cd-more">{item.more}</p>}
      {item.more && (
        <button className="cd-link" onClick={() => setOpen(!open)}>
          {open ? "Show less" : "Read More"}
        </button>
      )}
    </article>
  );
}

function List({ title, items }) {
  return (
    <div className="cd-card">
      <h3>{title}</h3>
      <ul className="cd-list">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

function Overview({ club, goTo }) {
  return (
    <>
      <p className="cd-lead">{club.description}</p>
      <div className="cd-stats">
        {club.stats.map((s) => (
          <div className="cd-stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="cd-grid cd-grid-2">
        <div className="cd-card">
          <h3>Club Information</h3>
          <dl className="cd-info">
            {club.info.map((i) => (
              <div key={i.label}>
                <dt>{i.label}</dt>
                <dd>{i.href ? <a href={i.href} target="_blank" rel="noreferrer">{i.value}</a> : i.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="cd-sub">Latest Announcements</h3>
          {club.announcements.slice(0, 2).map((a) => <AnnouncementCard key={a.title} item={a} />)}
          <button className="cd-link" onClick={() => goTo("Announcements")}>View all →</button>
        </div>
      </div>
    </>
  );
}

function Members({ members }) {
  return (
    <div className="cd-grid cd-grid-3">
      {members.map((m) => (
        <div className="cd-card cd-member" key={m.name}>
          <div className="cd-avatar">{initials(m.name)}</div>
          <h3>{m.name}</h3>
          <span className="cd-role">{m.role}</span>
          <span className="cd-meta">{m.dept}</span>
        </div>
      ))}
    </div>
  );
}

function Requirements({ req }) {
  return (
    <div className="cd-grid cd-grid-2">
      <List title="Who Can Join" items={req.who} />
      <List title="Eligibility" items={req.eligibility} />
      <List title="How to Join" items={req.joining} />
      <List title="Conditions" items={req.conditions} />
    </div>
  );
}

function Achievements({ items }) {
  return (
    <ol className="cd-timeline">
      {items.map((a) => (
        <li key={a.title}>
          <span className="cd-year">{a.year}</span>
          <div className="cd-card">
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function About({ about }) {
  return (
    <div className="cd-grid cd-grid-2">
      <div className="cd-card cd-wide"><h3>History</h3><p>{about.history}</p></div>
      <div className="cd-card"><h3>Mission</h3><p>{about.mission}</p></div>
      <div className="cd-card"><h3>Vision</h3><p>{about.vision}</p></div>
      <List title="Activities" items={about.activities} />
      <div className="cd-card">
        <h3>Contact</h3>
        <dl className="cd-info">
          {about.contact.map((c) => (
            <div key={c.label}>
              <dt>{c.label}</dt>
              <dd><a href={c.href} target="_blank" rel="noreferrer">{c.value}</a></dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function ClubDetails() {
  const { slug } = useParams();
  const club = clubs[slug];
  const [tab, setTab] = useState("Overview");

  if (!club) {
    return (
      <div className="club-page">
        <Navbar />
        <div className="cd-container cd-empty">
          <h1>Club not found</h1>
          <p>This club page isn't available yet.</p>
          <Link to="/" className="cd-link">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="club-page">
      <Navbar />

      <header className="cd-header">
        <div className="cd-container cd-head-row">
          <div className="cd-logo">{club.short}</div>
          <div>
            <h1>{club.name}</h1>
            <p className="cd-tagline">{club.tagline}</p>
          </div>
        </div>
        <nav className="cd-container cd-tabs" aria-label="Club sections">
          {TABS.map((t) => (
            <button key={t} className={t === tab ? "active" : ""} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </nav>
      </header>

      <main className="cd-container cd-body">
        {tab === "Overview" && <Overview club={club} goTo={setTab} />}
        {tab === "Announcements" && (
          <div className="cd-grid cd-grid-2">
            {club.announcements.map((a) => <AnnouncementCard key={a.title} item={a} />)}
          </div>
        )}
        {tab === "Members" && <Members members={club.members} />}
        {tab === "Requirements" && <Requirements req={club.requirements} />}
        {tab === "Achievements" && <Achievements items={club.achievements} />}
        {tab === "About" && <About about={club.about} />}
      </main>
    </div>
  );
}

export default ClubDetails;
