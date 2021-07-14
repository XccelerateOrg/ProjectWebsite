import React from "react";
import "../assets/HomePage.css";

function TestPage() {
  return (
    <div>
      <nav className="side">
        <div className="side__inner">
          <div className="top">
            <a href="#">Volker Otto</a>
          </div>
          <div className="bottom">
            <a href="https://dribbble.com/hellovolker">
              DRIBBBLE
            </a>
            <a href="https://twitter.com/hellovolker">
              TWITTER
            </a>
            <a href="mailto:hello@volkerotto.net">
              EMAIL ME
            </a>
          </div>
        </div>
      </nav>
      
    </div>
  );
}
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <TestPage />
    </div>
  );
}

export default HomePage;
