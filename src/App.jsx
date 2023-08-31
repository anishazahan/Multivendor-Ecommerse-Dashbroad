import { useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/PublicRoute";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  console.log(allRoutes);

  return <Router allRoutes={allRoutes} />;
}

export default App;
