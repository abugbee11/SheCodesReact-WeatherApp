import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boston" />
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
            href="https://github.com/abugbee11/SheCodesReact-WeatherApp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted by{" "}
          <a
            href="https://jolly-buttercream-7c44fe.netlify.app/"
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
