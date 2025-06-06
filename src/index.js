import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./Store/index";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="loading...///////">
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "#6b21a8",
              color: "white",
              font_weight: 500,
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
