import { RequestAPI, BASE_URL } from "./httpRequest";

export function ProductsList(): Promise<any> {
  return RequestAPI(`${BASE_URL}/products`, {
    method: "GET",
  });
}

export function ProductDetails(id: string | number): Promise<any> {
  return RequestAPI(`${BASE_URL}/products/${id}`, {
    method: "GET",
  });
}
