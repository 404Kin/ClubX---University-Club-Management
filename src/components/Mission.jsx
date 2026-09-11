import missionImg from "../assets/mission.jpg"; // ← আপনার ছবির path

function Mission() {
  return (
    <section className="mission-section">
      <div className="mission-wrap">

        {/* Left — image */}
        <div className="mission-image">
          <img src={missionImg} alt="Campus community" />
          <span className="mission-tag">01 — MISSION</span>
        </div>

        {/* Right — content */}
        <div className="mission-body">
          <h2>
            Our <em>Mission</em>.
          </h2>

          <p className="mission-lead">
            CampusClub exists to connect students, clubs, and campus life —
            turning scattered forms, spreadsheets, and group chats into one
            clear digital home.
          </p>

          <p className="mission-text">
            We believe campus communities grow best when joining a club,
            registering for an event, or tracking attendance takes seconds
            — not days. Every feature we build is shaped around that idea.
          </p>

          <ul className="mission-list">
            <li>
              <span className="num">01</span>
              <span className="txt">Simplify club operations end-to-end.</span>
            </li>
            <li>
              <span className="num">02</span>
              <span className="txt">Give every student one central platform.</span>
            </li>
            <li>
              <span className="num">03</span>
              <span className="txt">Replace manual work with clean digital tools.</span>
            </li>
          </ul>

          <button className="mission-cta">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Mission;