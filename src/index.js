import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  const iframe = useRef(null);

  return (
    <iframe
      ref={iframe}
      src="https://app.saber.money/onramp?client_id=14e2e5a7-2af9-44ec-9e20-62409c8c039a"
      allow="camera"
      width="400"
      height="600"
      allow="camera"
    ></iframe>
  );
}

function App() {
  useEffect(() => {
    window.addEventListener("message", function (event) {
      console.log("Message received from the child: " + event.data.event); // Message received from child
    });
  }, []);
  return (
    <div className="App">
      <h1>Inside React</h1>
      <Iframe />,
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
