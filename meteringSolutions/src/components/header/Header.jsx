import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaGreaterThan } from "react-icons/fa";

const Header = () => {
  const { title, breadcrumbs } = useSelector((state) => state.header || {} );


  
  return (
    <div className="w-full h-full flex flex-col">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-white h-[50px] bg-cyan-600 px-6">
        <NavLink to="/" className="hover:text-gray-700">
          <FaHome />
        </NavLink>
        {breadcrumbs?.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaGreaterThan className="text-sm" />
            {item.link ? (
              <NavLink to={item.link} className="hover:text-gray-700">
                {item.label}
              </NavLink>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
        ))}
      </div>

      {/* Title Section */}
      {/* <div className="flex items-center px-5 my-4">
        <h1 className="text-lg lg:text-xl font-semibold text-black">{title}</h1>
      </div> */}
    </div>
  );
};

export default Header;
