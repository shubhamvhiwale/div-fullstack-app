import { useCookies } from "@/app/useCookies";
export const BASE_URL = "http://localhost:8080";

export const header: Record<string, string> = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const RequestAPI = async (
  url: string,
  options: RequestInit
): Promise<any> => {
  const cookieRaw = await useCookies("", "get-cookie");
  let cookie = "";
  if (cookieRaw) {
    cookie = JSON.parse(cookieRaw);
  }

  const headers = new Headers();
  if (!(options.body instanceof FormData)) {
    headers.append("Content-Type", "application/json");
  }
  // const accessToken = sessionStorage.getItem("accessToken");
  if (cookie) {
    headers.append("Authorization", cookie?.value);
    if (options.body instanceof FormData) {
      options.body.append("Authorization", cookie?.value);
    }
  }
  const defaults: RequestInit = { headers: headers };
  options = Object.assign({}, defaults, options);
  return fetch(url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return Promise.resolve(json);
    })
  );
};
