import { RequestAPI, BASE_URL } from "./httpRequest";

export function UserLogin(obj: string | number | object): Promise<any> {
  return RequestAPI(BASE_URL + "/user/login", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function Authentication(): Promise<any> {
  return RequestAPI(BASE_URL + "/user/authentication", {
    method: "GET",
  });
}
