import React, { useState, useEffect } from "react";
import PermissionsScreen from "./src/screens/PermissionsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { initDB } from "./src/storage/initDB";

export default function App() {

  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function setup() {
      await initDB();
    }
    setup();
  }, []);

  if (!ready) {
    return (
      <PermissionsScreen
        onDone={() => setReady(true)}
      />
    );
  }

  return <HomeScreen />;

}