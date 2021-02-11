import React from "react";
import ReactDOM from "react-dom";
import useDeviceOrientation from "./hooks/useDeviceOrientation";
import useFavicon from "./hooks/useFavicon";
import useGeolocation from "./hooks/useGeolocation";
import useKeyPress from "./hooks/useKeyPress";
import useLocalStorage from "./hooks/useLocalStorage";
import useMousePosition from "./hooks/useMousePosition";
import useOnline from "./hooks/useOnline";
import useLockScroll from "./hooks/useLockScroll";

import "./styles.css";

function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();

  const setFavicon = useFavicon(
    "https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico"
  );

  const { coords, error } = useGeolocation();

  const kPressed = useKeyPress("k");
  const iPressed = useKeyPress("i");
  const mPressed = useKeyPress("m");
  const cPressed = useKeyPress("c");
  const hPressed = useKeyPress("h");

  const [currentLS, setLS] = useLocalStorage("JWT", "12345");

  const { x, y } = useMousePosition();

  const isOnline = useOnline();

  const [isLocked, { lockScroll, unLockScroll }] = useLockScroll();

  return (
    <div className="App">
      <h1>Superhooks!</h1>
      <h3>useDeviceOrientation</h3>
      <ul>
        <li>Alpha: {alpha}</li>
        <li>Beta: {beta}</li>
        <li>Gamma: {gamma}</li>
      </ul>
      <h3>useFavicon</h3>
      <button
        onClick={() => {
          setFavicon("http://www.google.com/favicon.ico");
        }}
      >
        Change Favicon
      </button>
      <h3>useGeolocation</h3>
      <ul>
        <li>Latitude: {coords.lat}</li>
        <li>Logitude:{coords.long} </li>
        <li>Geolocation Error: {error} </li>
      </ul>
      <h3>useKeyPress</h3>
      <ul>
        <li>Press 'k' : {kPressed && "K"}</li>
        <li>Press 'i' : {iPressed && "I"}</li>
        <li>Press 'm' : {mPressed && "M"}</li>
        <li>Press 'c' : {cPressed && "C"}</li>
        <li>Press 'h' : {hPressed && "H"}</li>
        <li>Press 'i' : {iPressed && "I"}</li>
      </ul>
      <h3>useLocalStorage</h3>
      <ul>
        <li>Current Value : {currentLS} </li>
        <button
          onClick={() => {
            setLS("12345");
          }}
        >
          Set Value : 12345
        </button>
        <button
          onClick={() => {
            setLS(null);
          }}
        >
          Clear LS
        </button>
      </ul>
      <h3>useMousePosition</h3>
      <ul>
        <li>Mouse X: {x}</li>
        <li>Mouse Y: {y}</li>
      </ul>
      <h3>useOnline</h3>
      <p>Are we Online? {isOnline ? "Yes" : "No"}</p>
      <h3>useLockScroll</h3>
      <p>Is Locked? {isLocked ? "Yes" : "No"}</p>
      <button
        onClick={() => {
          lockScroll();
        }}
      >
        Lock scroll
      </button>
      <button
        onClick={() => {
          unLockScroll();
        }}
      >
        Unlock scroll
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
