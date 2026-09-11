import { useState, useRef } from "react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";

function Gallery() {
  const images = [
    { src: gallery1, club: "IEEE", title: "Tech Workshop 2025" },
    { src: gallery2, club: "Computer Club", title: "Programming Contest" },
    { src: gallery3, club: "IIUCPS", title: "Career Seminar" },
    { src: gallery4, club: "Campus", title: "Club Orientation" },
    { src: gallery5, club: "Cultural", title: "Cultural Night" },
  ];

  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const scrollTo = (index) => {
    setActive(index);
    const track = trackRef.current;
    if (track) {
      const card = track.children[index];
      if (card) {
        track.scrollTo({
          left: card.offsetLeft - track.offsetWidth / 2 + card.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  const next = () => scrollTo((active + 1) % images.length);
  const prev = () => scrollTo((active - 1 + images.length) % images.length);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>OUR CAMPUS MOMENTS</h2>
        <p className="gallery-sub">
          From workshops to cultural nights — every moment captured.
        </p>
      </div>

      <div className="gallery-slider">
        <button className="nav-arrow left" onClick={prev}>‹</button>

        <div className="gallery-track" ref={trackRef}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-card ${i === active ? "active" : ""}`}
              onClick={() => scrollTo(i)}
            >
              <img src={img.src} alt={img.title} />
              <div className="gallery-info">
                <span className="club-name">{img.club}</span>
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={next}>›</button>
      </div>

      <div className="gallery-footer">
        <div className="pagination">
          {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>

        <button className="view-all">VIEW ALL →</button>
      </div>
    </section>
  );
}

export default Gallery;