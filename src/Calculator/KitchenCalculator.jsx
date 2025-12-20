import { Col, Container, Row } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import "./BhkCalculator.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Header1 from "../components/Header1";

export default function KitchenCalculator() {
  // --- BHK step state
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(null);
  const [nested, setNested] = useState({});
  const [showRoomDesign, setShowRoomDesign] = useState(false);

  // --- rooms state & counters
  const [roomCounts, setRoomCounts] = useState({
    living: 1,
    kitchen: 1,
    bedroom: 1,
    bathroom: 1,
    dining: 1,
  });

  // --- package state
  const [showPackage, setShowPackage] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // --- refs for scrolling
  const roomRef = useRef(null);
  const packageRef = useRef(null);

  // header offset helper (if you have fixed header)
  const getHeaderOffset = () => {
    const header = document.querySelector("header");
    return header ? header.offsetHeight : 0;
  };

  // scroll when room section is shown
  useEffect(() => {
    if (showRoomDesign && roomRef.current) {
      const headerOffset = getHeaderOffset();
      const rect = roomRef.current.getBoundingClientRect();
      const absoluteY = rect.top + window.scrollY;
      const top = Math.max(absoluteY - headerOffset - 16, 0);
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [showRoomDesign]);

  // scroll when package section is shown
  useEffect(() => {
    if (showPackage && packageRef.current) {
      const headerOffset = getHeaderOffset();
      const rect = packageRef.current.getBoundingClientRect();
      const absoluteY = rect.top + window.scrollY;
      const top = Math.max(absoluteY - headerOffset - 16, 0);
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [showPackage]);

  // --- data
  const bhkOptions = [
    { id: "1bhk", label: "1 BHK", hasNested: false },
    { id: "2bhk", label: "2 BHK", hasNested: true },
    { id: "3bhk", label: "3 BHK", hasNested: true },
    { id: "4bhk", label: "4 BHK", hasNested: true },
    { id: "5bhk", label: "5 BHK+", hasNested: false },
  ];

  const nestedOptionsMap = {
    "2bhk": [
      { id: "small", label: "Small", desc: "Below 800 sq ft" },
      { id: "large", label: "Large", desc: "Above 800 sq ft" },
    ],
    "3bhk": [
      { id: "small", label: "Small", desc: "Below 1100 sq ft" },
      { id: "large", label: "Large", desc: "Above 1100 sq ft" },
    ],
    "4bhk": [
      { id: "small", label: "Small", desc: "Below 1600 sq ft" },
      { id: "large", label: "Large", desc: "Above 1600 sq ft" },
    ],
  };

  const packageOptions = [
    {
      id: "basics",
      title: "Basic (₹)",
      subtitle: "A range of essential home interior solutions that's perfect for all your needs.",
      img: "/media/1bhk.jpg",
      points: ["Affordable pricing", "Convenient designs", "Basic accessories"],
    },
    {
      id: "premium",
      title: "Premium (₹₹)",
      subtitle: "Superior home interior solutions that will take your interiors to the next level.",
      img: "/media/2bhk-2.jpg",
      points: ["High-quality materials", "Custom detailing", "Better finishes"],
    },
   
  ];

  const handleBack = () => {
    navigate(-1);
  };

  const navigate = useNavigate();

  // --- handlers
  const handleParentSelect = (id, hasNested) => {
    setSelected(id);
    if (hasNested) setOpen((prev) => (prev === id ? null : id));
    else setOpen(null);
  };

  const toggleOpen = (e, id) => {
    e.stopPropagation();
    setOpen((prev) => (prev === id ? null : id));
  };

  const handleNestedSelect = (parentId, childId) => {
    setNested((prev) => ({ ...prev, [parentId]: childId }));
    setSelected(parentId);
  };

  const handleNextFromBhk = () => {
    if (!selected) {
      alert("Please select your BHK type first!");
      return;
    }
    setShowRoomDesign(true);
  };

  const handleShowPackage = () => {
    // require at least one room count > 0
    const anyRoom = Object.values(roomCounts).some((v) => v > 0);
    if (!anyRoom) {
      alert("Please choose at least one room.");
      return;
    }
    setShowPackage(true); // useEffect will scroll to package section
  };

  const handleSelectPackage = (id) => {
    setSelectedPackage(id);
  };

  const handleNextFromPackage = () => {
  if (!selectedPackage) {
    alert("Please pick a package.");
    return;
  }
  // redirect to get quote page (same-app route)
  navigate("/get-quote");
};

  return (
    <>
    <Header1/>
      {/* --- BHK selector (unchanged) */}
      <Container className="bhkcalci" style={{ maxWidth: "700px", margin: "30px auto" }}>
        <Row className="text-center mb-4">
          <Col>
            <h3 className="bhk-heading">Select the layout of your kitchen</h3>
            <p className="bhk-subtext">To know more about this, <span className="bhk-link">click here</span></p>
          </Col>
        </Row>

        <Row>
          <Col md={8} className="mx-auto">
            <div className="bhk-options">
              {bhkOptions.map((opt) => {
                const isActive = selected === opt.id;
                const isOpen = open === opt.id;
                const hasNested = opt.hasNested;
                return (
                  <div
                    key={opt.id}
                    className={`bhk-card ${isActive ? "active" : ""}`}
                    onClick={() => handleParentSelect(opt.id, hasNested)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter") handleParentSelect(opt.id, hasNested); }}
                  >
                    <div className="bhk-card-content">
                      <div className="bhk-left">
                        <span className={`bhk-radio-circle ${isActive ? "filled" : ""}`} />
                        <span className="bhk-label-text">{opt.label}</span>
                      </div>

                      <div className="bhk-right">
                        {hasNested ? (
                          <button className="bhk-expand-btn" onClick={(e) => toggleOpen(e, opt.id)} aria-expanded={isOpen}>
                            <span className={`chev ${isOpen ? "open" : ""}`}>⌄</span>
                          </button>
                        ) : null}
                      </div>
                    </div>

                    {hasNested && isOpen && (
                      <div className="bhk-nested">
                        {nestedOptionsMap[opt.id].map((n) => {
                          const isChosen = nested[opt.id] === n.id;
                          return (
                            <label key={n.id} className={`nested-tile ${isChosen ? "selected" : ""}`}>
                              <input type="radio" name={`${opt.id}-size`} value={n.id} checked={isChosen} onChange={() => handleNestedSelect(opt.id, n.id)} />
                              <span className="nested-radio" aria-hidden></span>
                              <div className="nested-content">
                                <div className="nested-title">{n.label}</div>
                                <div className="nested-desc">{n.desc}</div>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="d-flex justify-content-between">
            <button className="bhk-btn-back" onClick={handleBack}>BACK</button>
            <button className="bhk-btn-next" onClick={handleNextFromBhk}>NEXT</button>
          </Col>
        </Row>
      </Container>

      {/* --- Room design section */}
      {showRoomDesign && (
        <Container ref={roomRef} className="roomdesign-section slide-down" style={{ maxWidth: "700px", margin: "40px auto", padding: "30px", borderRadius: "12px", boxShadow: "0 6px 18px rgba(0,0,0,0.08)", background: "#fff", overflow: "hidden" }}>
          <h3 className="bhk-heading mb-3">Select the rooms you’d like us to design</h3>
          <p className="bhk-subtext">To know more about this, <span style={{ color: "#ffb900", fontWeight: "600", cursor: "pointer" }}>click here</span></p>

          <div className="room-counter-list">
            {[
              { id: "living", label: "Living Room" },
              { id: "kitchen", label: "Kitchen" },
              { id: "bedroom", label: "Bedroom" },
              { id: "bathroom", label: "Bathroom" },
              { id: "dining", label: "Dining" },
            ].map((room) => (
              <div key={room.id} className="room-counter-item">
                <span className="room-label">{room.label}</span>
                <div className="counter-controls">
                  <button
                    className="counter-btn"
                    onClick={() => setRoomCounts((prev) => ({ ...prev, [room.id]: Math.max(0, prev[room.id] - 1) }))}
                  >
                    −
                  </button>
                  <span className="counter-value">{roomCounts[room.id] || 0}</span>
                  <button
                    className="counter-btn"
                    onClick={() => setRoomCounts((prev) => ({ ...prev, [room.id]: (prev[room.id] || 0) + 1 }))}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Row className="mt-4">
            <Col className="d-flex justify-content-between">
              <button className="bhk-btn-back" onClick={handleBack}>BACK</button>
              <button className="bhk-btn-next" onClick={handleShowPackage}>NEXT</button>
            </Col>
          </Row>
        </Container>
      )}

      {/* --- Package selector section */}
      {showPackage && (
        <Container ref={packageRef} className="pkg-wrap slide-down" style={{ maxWidth: "780px", margin: "40px auto", padding: "28px", borderRadius: "12px", background: "#fff", boxShadow: "0 8px 20px rgba(0,0,0,0.06)" }}>
          <h2 className="pkg-heading">Pick your package</h2>

          <div className="pkg-grid">
            {packageOptions.map((p) => {
              const isActive = selectedPackage === p.id;
              return (
                <article key={p.id} className={`pkg-card ${isActive ? "active" : ""}`} onClick={() => handleSelectPackage(p.id)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") handleSelectPackage(p.id); }}>
                  <div className="pkg-left">
                    <label className="pkg-left-inner">
                      <input type="radio" className="pkg-radio" name="package" value={p.id} checked={isActive} onChange={() => handleSelectPackage(p.id)} />
                      <div className="pkg-title-block">
                        <div className="pkg-title">{p.title}</div>
                        <div className="pkg-sub">{p.subtitle}</div>
                      </div>
                    </label>

                    <div className="pkg-image-wrap">
                      <img src={p.img} alt={p.title} className="pkg-image" />
                    </div>
                  </div>

                  <div className="pkg-right">
                    <ul className="pkg-points">
                      {p.points.map((pt, i) => (
                        <li key={i} className="pkg-point">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="tick" aria-hidden>
                            <path d="M20 6L9 17l-5-5" stroke="#2e8f6e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="pkg-footer" style={{ marginTop: 20 }}>
            <button className="btn-back" onClick={handleBack}>BACK</button>
            <button className="btn-next" onClick={handleNextFromPackage}>NEXT</button>
          </div>
        </Container>
      )}
    </>
  );
}
