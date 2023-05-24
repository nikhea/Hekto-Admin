import "./styles/App.css";
import "./styles/select.css";
import { FC, useEffect, useState } from "react";
import RouteComponents from "./RouteComponents";

const App: FC = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <RouteComponents />
    </>
  );
};

export default App;
