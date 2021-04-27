import React from "react";
import { StatusBar as ExpoSatusBar } from "expo-status-bar";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoSatusBar style="auto" />
    </>
  );
}
