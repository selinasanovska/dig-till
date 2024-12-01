import React from "react";
import "./Components.css";

function Content1() {
  return (
    <main className="main-content">
      <a name="Content1" /><h2 style={{ fontWeight: "bold" }}>Bilder - Alt texter</h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        consequat, justo in dapibus cursus.
      </p>

      <div className="comparison-container">
        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }}>Code without WCAG</h3>
          <div className="image-placeholder">Img</div>
          <p className="comparison-text">
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Bad Example</h1>
            <ul style={{ textAlign: "left" }}>
              <li>
                The first image has no <code>alt</code> attribute, which makes it inaccessible to screen readers.
              </li>
              <li>
                The second image has an empty <code>alt</code> attribute but no clear indication that it’s decorative.
              </li>
              <li>
                The third image uses generic and unhelpful <code>alt</code> text ("Image"), which provides no meaningful context.
              </li>
            </ul>
          </p>
        </div>

        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }}>Code with WCAG</h3>
          <div className="image-placeholder">Img</div>
          <p className="comparison-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content1;
