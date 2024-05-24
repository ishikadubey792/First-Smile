import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.scss";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
import { AuthContextProvider } from "./Config/authProvider.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
        <Toaster/>
      </Provider>
    </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
