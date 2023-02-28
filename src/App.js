import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Open source code by{" "}
          <a
            href="https://www.linkedin.com/in/abugbee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adrienne Bugbee
          </a>{" "}
          available on{" "}
          <a
            href="https://github.com/abugbee11/Weather-React-Application"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted by{" "}
          <a
            href="https://stately-kataifi-ad4a69.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
