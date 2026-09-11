// import event1 from "../assets/event1.jpg";
// import event2 from "../assets/event2.jpg";
// import event3 from "../assets/event3.jpg";

// function Events() {
//   const events = [
//     {
//       src: event1,
//       title: "IEEE Tech Workshop 2025",
//       desc: "A hands-on workshop on IoT and Embedded Systems. Open to all engineering students who want to build real-world projects.",
//       day: "28",
//       month: "Sep",
//       place: "CSE Seminar Hall",
//       time: "10:00 AM – 1:00 PM",
//       tags: ["IOT & EMBEDDED", "HANDS-ON LAB", "CERTIFICATE", "OPEN TO ALL"],
//     },
//     {
//       src: event2,
//       title: "Inter-Department Programming Contest",
//       desc: "Show off your coding skills, solve algorithmic problems, and compete with the best programmers on campus.",
//       day: "30",
//       month: "Sep",
//       place: "Computer Lab, Building 2",
//       time: "9:00 AM – 12:00 PM",
//       tags: ["ALGORITHMS", "TEAM OF 3", "PRIZE MONEY", "ICPС FORMAT"],
//     },
//     {
//       src: event3,
//       title: "IIUCPS Career Guidance Seminar",
//       desc: "A career guidance seminar with industry experts. Learn about internships, skill development, and future career paths.",
//       day: "05",
//       month: "Oct",
//       place: "Main Auditorium",
//       time: "2:00 PM – 5:00 PM",
//       tags: ["INDUSTRY SPEAKERS", "INTERNSHIP TIPS", "CV REVIEW", "Q&A SESSION"],
//     },
//   ];

//   return (
//     <section className="events-section">
//       <div className="events-header">
//         <span className="events-tag">SERVICES / EVENTS</span>
//         <h2>
//           Built to <br /> Engage Campus
//         </h2>
//         <p className="events-sub">
//           Amplytic-style event listings — every workshop, contest, and
//           seminar managed through ClubX in one place.
//         </p>
//       </div>

//       <div className="events-list">
//         {events.map((ev, i) => (
//           <div className="event-block" key={i}>
//             <div className="event-number">
//               {String(i + 1).padStart(2, "0")}
//             </div>

//             <div className="event-body">
//               <h3>{ev.title}</h3>
//               <p>{ev.desc}</p>

//               <div className="event-tags">
//                 {ev.tags.map((t, j) => (
//                   <span key={j}>{t}</span>
//                 ))}
//               </div>

//               <div className="event-meta-row">
//                 <div className="meta-item">
//                   <span className="meta-label">DATE</span>
//                   <span className="meta-value">
//                     {ev.day} {ev.month}
//                   </span>
//                 </div>
//                 <div className="meta-item">
//                   <span className="meta-label">TIME</span>
//                   <span className="meta-value">{ev.time}</span>
//                 </div>
//                 <div className="meta-item">
//                   <span className="meta-label">VENUE</span>
//                   <span className="meta-value">{ev.place}</span>
//                 </div>
//               </div>

//               <button className="event-cta">
//                 JOIN EVENT <span>→</span>
//               </button>
//             </div>

//             <div className="event-thumb">
//               <img src={ev.src} alt={ev.title} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Events;


import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";

function Events() {
  const events = [
    {
      src: event1,
      title: "IEEE Tech Workshop 2025",
      club: "IEEE Student Branch",
      desc: "Hands-on workshop on IoT and Embedded Systems. Build real-world projects with mentors.",
      day: "28",
      month: "Sep",
      year: "2025",
      place: "CSE Seminar Hall",
      time: "10:00 AM – 1:00 PM",
      seats: "42 / 60",
    },
    {
      src: event2,
      title: "Inter-Department Programming Contest",
      club: "Computer Club",
      desc: "Algorithmic battle across departments. Team up, solve, and win.",
      day: "30",
      month: "Sep",
      year: "2025",
      place: "Computer Lab, Bldg 2",
      time: "9:00 AM – 12:00 PM",
      seats: "78 / 100",
    },
    {
      src: event3,
      title: "IIUCPS Career Guidance Seminar",
      club: "IIUCPS",
      desc: "Industry experts talk internships, CV building, and career paths.",
      day: "05",
      month: "Oct",
      year: "2025",
      place: "Main Auditorium",
      time: "2:00 PM – 5:00 PM",
      seats: "130 / 200",
    },
  ];

  return (
    <section className="events-section">
      <div className="events-wrap">

        {/* Sticky left column */}
        <aside className="events-aside">
          <span className="aside-label">EVENTS — 2025</span>
          <h2>
            What's <br />
            <em>happening</em> <br />
            on campus.
          </h2>
          <p className="aside-note">
            Three curated events this month, managed end-to-end through ClubX.
          </p>
          <button className="aside-cta">See full calendar →</button>
        </aside>

        {/* Event list */}
        <div className="events-list">
          {events.map((ev, i) => (
            <article className="ev-row" key={i}>
              <div className="ev-date-col">
                <span className="ev-day">{ev.day}</span>
                <span className="ev-month">{ev.month}</span>
                <span className="ev-year">{ev.year}</span>
              </div>

              <div className="ev-main">
                <span className="ev-club">{ev.club}</span>
                <h3>{ev.title}</h3>
                <p>{ev.desc}</p>

                <div className="ev-foot">
                  <div className="ev-meta">
                    <span>{ev.time}</span>
                    <span className="dot">•</span>
                    <span>{ev.place}</span>
                  </div>
                  <div className="ev-seats">
                    <span className="seats-bar" data-full={ev.seats}></span>
                    <span className="seats-text">{ev.seats} seats</span>
                  </div>
                </div>

                <button className="ev-join">
                  Join event
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="ev-thumb">
                <img src={ev.src} alt={ev.title} />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Events;