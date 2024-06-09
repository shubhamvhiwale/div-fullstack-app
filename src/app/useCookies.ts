"use server";
import { cookies } from "next/headers";

const useCookies = (token: string, cookieAction: string) => {
  switch (cookieAction) {
    case "set-cookie":
      return JSON.stringify(cookies().set("jwttoken", token));
    case "get-cookie":
      return JSON.stringify(cookies().get("jwttoken"));
    case "delete-cookie":
      return JSON.stringify(cookies().delete("jwttoken"));
    default:
      return "";
  }
};

export { useCookies };
