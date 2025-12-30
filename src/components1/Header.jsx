import React from "react";
import "./Header.css";

export default function Header({
  logo = "/media/logo-gi.png",
  steps = ["BHK TYPE", "ROOMS TO DESIGN", "PACKAGE", "GET QUOTE"],
  icons = [
    "/media/bedroom.png",
    "/media/living-room-1.png",
    "/media/delivery-status.png",
    "/media/budgeting.png",
  ],
  current = 0,
  showPageCount = true,
}) {
  const total = steps.length;

  return (
    <header className="est-header">
      <div className="est-header-inner">
        {/* Left: Logo */}
       {/*} <div className="est-left">
          <img src={logo} alt="Logo" className="est-logo" />
        </div>*/}

        {/* Center: Progress steps */}
        <div className="est-center">
          <nav className="est-progress">
            <div className="est-progress-top">
              <div className="est-steps-line">
                <div
                  className="est-steps-fill"
                  style={{ width: `${(current / (total - 1)) * 100}%` }}
                />
              </div>

              <ul className="est-step-items">
                {steps.map((label, i) => (
                  <li
                    key={i}
                    className={`est-step-item ${
                      i <= current ? "est-step-active" : ""
                    }`}
                    aria-current={i === current ? "step" : undefined}
                  >
                    <span className="est-step-circle">
                      <img
                        src={icons[i]}
                        alt={label}
                        className="step-icon"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step Labels */}
            <div className="est-progress-labels">
              {steps.map((label, i) => (
                <div
                  key={i}
                  className={`est-label ${i <= current ? "est-label-active" : ""}`}
                  style={{ width: `${100 / total}%` }}
                >
                  {label}
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Right: Quote button + page count */}
       {/*} <div className="est-right">
          <button className="est-quote-btn">GET FREE QUOTE</button>
          {showPageCount && (
            <div className="est-page-count">
              {current + 1}/{total}
            </div>
          )}
        </div>*/}
      </div>
    </header>
  );
}
