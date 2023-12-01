import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./reset.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
