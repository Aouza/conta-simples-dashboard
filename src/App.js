import React, { useEffect, useState } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import GlobalStyle from "./styles";
import Aside from "./components/Aside";
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  const [headerLocation, setHeaderLocation] = useState("");

  useEffect(() => {
    const { location } = createBrowserHistory();

    setHeaderLocation(location);
  }, []);

  return (
    <BrowserRouter>
      <UserContextProvider>
        {headerLocation.pathname !== "/" && <Aside />}
        <Routes />
      </UserContextProvider>

      <GlobalStyle location={headerLocation.pathname} />
    </BrowserRouter>
  );
};

export default App;
