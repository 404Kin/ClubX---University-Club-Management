import Navbar from "./Navbar";

function Hero() {
  return (
    <section className="hero-section">

      <Navbar />

      <div className="hero-content">

        <h1>
          Discover. Connect.<br />
          <em>Participate.</em><br />
          Build Your Campus <br />
          Community.
        </h1>

        <p className="hero-copy">
          Explore university clubs, discover exciting events,
          and connect with students who share your interests.
        </p>

        <div className="hero-buttons">
          <button className="btn-hero-primary">
            Explore Clubs
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

          <button className="btn-hero-secondary">
            Explore Now
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;