import { storage } from "./utils";
import axios from "../lib/axios";

export interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  _id: string;
  id: string;
  email: string;
  firstname?: string;
  lastname?: string;
  password?: string;
  role?: string;
  profile?: any;
}

export async function handleApiResponse(response: any) {
  const { data, message } = response;
  const { statuscode } = data;
  if (statuscode === 200 || statuscode === 201) {
    return data;
  } else {
    return Promise.reject(data);
  }
}

export async function getUserProfile() {
  const res = await axios.get(`/user/me`, {
    headers: {
      Authorization: `Bearer ${storage.getToken()}`,
    },
  });
  return handleApiResponse(res);
}

export async function loginWithEmailAndPassword(
  data: any
): Promise<AuthResponse> {
  console.log(data);

  const res = await axios.post(`/auth/login`, data);
  // notify(res.status, res.data.message);
  return handleApiResponse(res);
}

export async function registerWithEmailAndPassword(
  data: any
): Promise<AuthResponse> {
  const res = await axios.post(`/auth/signup`, data);
  // notify(res.status, res.data.message);
  return handleApiResponse(res);
}

export function logout(): Promise<{ message: string }> {
  return fetch("/auth/logout", { method: "POST" }).then(handleApiResponse);
}
