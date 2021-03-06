import React, { useEffect, useState } from "react";
import Routes from "./routes";
import { useLocation } from "react-router-dom";
import GlobalStyle from "./styles";
import Aside from "./components/Aside";
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  const [headerLocation, setHeaderLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    setHeaderLocation(location.pathname);
  }, [location]);

  return (
    <>
      <UserContextProvider>
        <Aside />
        <Routes />
      </UserContextProvider>

      <GlobalStyle location={headerLocation} />
    </>
  );
};

export default App;
