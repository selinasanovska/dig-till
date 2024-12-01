import React from "react";
import "./Components.css";

function Content3() {
  return (
    <main className="main-content">
      <a name="Content3" /><h2>Title 3</h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        consequat, justo in dapibus cursus.
      </p>

      <div className="comparison-container">
        <div className="comparison-box">
          <h3>Code without WCAG</h3>
          <div className="image-placeholder">Img</div>
          <p className="comparison-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="comparison-box">
          <h3>Code with WCAG</h3>
          <div className="image-placeholder">Img</div>
          <p className="comparison-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content3;
