
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
import Header from "../components/header/Header";

const Roles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle("Roles"));
    dispatch(
      setBreadcrumbs([
        // { label: "Home", link: "/home" },  // Updated label for clarity
        { label: "Roles" },
      ])
    );
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      {/* Page content goes here */}
    </div>
  );
};

export default Roles;

