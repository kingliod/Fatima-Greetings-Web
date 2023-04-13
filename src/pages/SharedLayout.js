import { Outlet } from "react-router-dom";

import StyledNavbar from "../components/StyledNavbar";
import Footer from "../components/Footer";
const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
