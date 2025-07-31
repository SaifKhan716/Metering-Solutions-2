// import React from 'react'

// const Onboarding = () => {
//   return (
//     <div className='flex item-center justify-center '>
//       Onboarding
//     </div>
//   )
// }

// export default Onboarding

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
import Header from "../components/header/Header";

const Onboarding = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle("Onboarding"));
    dispatch(
      setBreadcrumbs([
        // { label: "Home", link: "/home" },  // Updated label for clarity
        { label: "Onboarding" },
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

export default Onboarding;
