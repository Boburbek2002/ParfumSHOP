import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import GridLoader from "react-spinners/GridLoader";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <GridLoader color={"#36d7b7"} size={30} />
        </div>
      ) : (
        <div>
          <Header />
          <div>
            <Routers />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
