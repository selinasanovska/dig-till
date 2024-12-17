import React from "react";
import "./Components.css";

function Content3() {
  return (
    <main className="main-content">
      <a name="Content3" />
      <h2 style={{ fontWeight: "bold" }} tabIndex="0">
        Spinner/Loader
      </h2>
      <p tabIndex="0">
        Spinners är visuella indikatorer som används i webbapplikationer för att visa att en process pågår,
        till exempel att data laddas eller att användaren väntar på ett svar. De representeras ofta som animerade
        cirklar eller andra former som roterar eller pulserar. Även om spinners är användbara för att ge visuell
        feedback till seende användare, kan de skapa problem för användare som förlitar sig på hjälpmedel, som skärmläsare.
        <br /><br />
        För att säkerställa inkludering måste spinners utformas med tillgänglighet i åtanke, så att alla användare,
        oavsett förmåga, kan förstå vad som händer på sidan.
      </p>

      <div className="comparison-container">
        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }} tabIndex="0">
            Kod utan WAI-ARIA
          </h3>
          <div className="image-placeholder">Img</div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Dåligt Exempel
            </h4>
            <ul style={{ textAlign: "left" }}>
              En spinner utan ARIA attribut eller live region gör att användare med skärmläsare inte får information om att hemsidan laddar.
            </ul>
          </p>
        </div>

        <div className="comparison-box">
          <h3 style={{ fontWeight: "bold" }} tabIndex="0">
            Kod med WAI-ARIA
          </h3>
          <div className="image-placeholder">Img</div>
          <p className="comparison-text">
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }} tabIndex="0">
              Bra Exempel
            </h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Content3;
