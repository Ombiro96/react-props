import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Footer from "./footer";
import Main from "./main";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
