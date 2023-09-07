import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/PublicRoute";
import { getRoutes } from "./router/routes";
import { useSelector, useDispatch } from "react-redux";
import { get_user_info } from "./Store/Reducers/authReducer";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  // console.log(allRoutes);
  useEffect(() => {
    const routes = getRoutes();
    // console.log(routes);
    setAllRoutes([...allRoutes, routes]);
  }, []);
  useEffect(() => {
    if (token) {
      dispatch(get_user_info());
    }
  }, [token]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
