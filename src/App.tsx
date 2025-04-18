import { OmbreSatin7 } from "@ombre-ui/react";

function App() {
  return (
    <main className="main">
      <div className="ombre">
        <OmbreSatin7 speed={0.5} brightness={0.9} />
      </div>
      <div className="content">
        <article className="about">
          <h1>Jane Molodetskaya</h1>
          <p>
            A coffee first software engineer at{" "}
            <a
              href="https://www.dapperlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Dapper Labs</strong>
            </a>
            , living in Toronto, Canada.
          </p>
        </article>
        <footer>
          <ul>
            <li>
              <a
                href="https://github.com/march213"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/march213"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/march213_ya"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/march213"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jane-molodetskaya-799bb757/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  );
}

export default App;
