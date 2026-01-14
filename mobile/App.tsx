import React, { useState } from "react";
import PermissionsScreen from "./src/screens/PermissionsScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [ready, setReady] = useState(false);
  if (!ready) return <PermissionsScreen onDone={() => setReady(true)} />;
  return <HomeScreen />;
}