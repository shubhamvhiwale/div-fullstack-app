"use client";

import React, { useState, useEffect } from "react";
import { UserLogin } from "@/services/user";
import { useCookies } from "@/app/useCookies";
import { useRouter } from "next/navigation";
import { toster } from "@/utils/toster";
import { storage } from "@/utils/systemStorage";

const useLogin = () => {
  const router = useRouter();
  const [formField, setFormField] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  let name;
  let value;
  const handleChanges = (e: any) => {
    name = e.target.name;
    value = e.target.value;
    setFormField({ ...formField, [name]: value });
  };

  const handleFormSubmit = async () => {
    setIsLoading(true);
    const result = await UserLogin(formField);
    useCookies(result.response.token, "set-cookie");
    setTimeout(() => {
      setIsLoading(false);
      toster("success", "login successfully");
      router.push("/products");
    }, 5000);
  };

  useEffect(() => {
    const clearCookies = async () => {
      const isLoggedOut = storage({
        storageType: "sessionStorage",
        value: "",
        action: "get",
        key: "isLoggedOut",
      });
      const cookie = await useCookies("", "get-cookie");
      if (cookie) {
        if (!Boolean(isLoggedOut)) {
          toster("danger", "Your Session has been expired, Please login!");
        }
        useCookies("", "delete-cookie");
        storage({
          storageType: "sessionStorage",
          value: "",
          action: "clear",
          key: "",
        });
      }
    };
    clearCookies();
  }, []);
  return {
    handleChanges,
    handleFormSubmit,
    formField,
    isLoading,
  };
};

export default useLogin;
