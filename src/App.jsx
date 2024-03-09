// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./css/estilosGenericos.css";
import "./css/variables.css";
import Menu from "./components/Menu";
import Business from "./components/Business";
import User from "./components/User";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/Coder-Eats-FrontEnd/">
          <Route path="" element={<Main />} />
          <Route path="menu" element={<Menu />} />
          <Route path="restaurant" element={<Business />} />
          <Route path="user" element={<User />} />
          {/* <Route path="*" element={<Main />} /> */}
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
