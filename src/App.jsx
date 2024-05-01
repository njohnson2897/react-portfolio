import Header from "./components/Header.jsx";
import Nav from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
  <>
  <Header />
  <Outlet />
  <Footer />
  </>
  );
}

export default App;