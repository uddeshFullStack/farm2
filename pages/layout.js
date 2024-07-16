import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <section className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start mix-blend-normal leading-[normal] tracking-[normal]">
      <TopNavBar/>
      {children}
      <Footer/>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
