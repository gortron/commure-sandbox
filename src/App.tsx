import { AppHeader } from "@commure/components-core";
import { CommureSmartApp } from "@commure/components-data";
import SMARTClient from "@commure/smart-core";
import React from "react";
import "./App.css";
import { smartConfig } from "./config";

import MyPatient from "./MyPatient";

const smartClient = new SMARTClient(smartConfig);

function App() {
  return (
    <CommureSmartApp client={smartClient}>
      <AppHeader appName="My First Commure App" fixedToTop />
      <div className="hello-world-container">
        <p>Hello world!</p>
        <MyPatient />
      </div>
    </CommureSmartApp>
  );
}

export default App;
