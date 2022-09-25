import { render } from "preact";
import { App } from "./lib/app";
import "./index.css";

render(<App />, document.getElementById("app") as HTMLElement);
