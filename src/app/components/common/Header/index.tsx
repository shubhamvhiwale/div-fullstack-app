"use client";
import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import { toster } from "@/utils/toster";
import { storage } from "@/utils/systemStorage";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    storage({
      storageType: "sessionStorage",
      value: "true",
      action: "set",
      key: "isLoggedOut",
    });
    router.push("/");
    toster("success", "logout successfully");
  };

  return (
    <div className="w-full fixed top-0 bg-white z-50">
      <div className="p-2 m-2 flex justify-between">
        <h1 className="text-3xl flex">
          <FaCartPlus />
          &nbsp;
          {pathname.split("/").length > 2 ? `Product` : " Products List"}
        </h1>
        <button className="flex items-center" onClick={handleLogout}>
          Logout&nbsp;
          <BiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Header;
