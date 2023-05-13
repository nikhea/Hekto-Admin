import { useQueryClient } from "@tanstack/react-query";
import "./App.css";
import { FC, useEffect, useState } from "react";
import RouteComponents from "./RouteComponents";
import PageLoading from "./components/Loading/Loading";
import { useUser } from "./auth/auth";
const App: FC = () => {
  const user = useUser();

  const queryClient = useQueryClient();
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
//  {Loading ? (
//       <PageLoading />
//     ) : (
//       <>
//         <RouteComponents />
//       </>
//     )}
