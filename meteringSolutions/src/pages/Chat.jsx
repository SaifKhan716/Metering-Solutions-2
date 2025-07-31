// import React from 'react'

// const Chat = () => {
//   return (
//     <div>
//       Chat pages
//     </div>
//   )
// }

// export default Chat


import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
import Header from "../components/header/Header";

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle("Chat"));
    dispatch(
      setBreadcrumbs([
        // { label: "Home", link: "/home" },  // Updated label for clarity
        { label: "Chat" },
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

export default Chat;

