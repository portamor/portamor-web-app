import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function getRequest(url: string): Promise<any> {
  return axiosClient
    .get(`/${url}`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}

export function postRequest(url: string, data?: any): Promise<any> {
  return axiosClient
    .post(`/${url}`, data)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}

export function patchRequest(url: string, data?: any): Promise<any> {
  return axiosClient
    .patch(`/${url}`, data)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}

export function deleteRequest(url: string): Promise<any> {
  return axiosClient
    .delete(`/${url}`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}
