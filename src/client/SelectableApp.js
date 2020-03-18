// This file exports a component that makes it possible to switch between
// all completed versions of `App` in this project.
import React from "react";

import App from "./App";
import Dashboard from "./components/Dashboard";
import SelectableComponents from "./components/SelectableComponents";

const components = {
  App: App
};

const SelectableApp = () => <SelectableComponents components={components} />;

export default SelectableApp;
