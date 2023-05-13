// export const storage = {
//   getToken: () => JSON.parse(window.localStorage.getItem("token") || "null"),
//   setToken: (token: string) =>
//     window.localStorage.setItem("token", JSON.stringify(token)),
//   clearToken: () => window.localStorage.removeItem("token"),
// };

export const storage = {
  getToken: () => {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem("token") || "null");
    }
    return null;
  },
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("token", JSON.stringify(token));
    }
  },
  clearToken: () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("token");
    }
  },
};
