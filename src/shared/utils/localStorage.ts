export const LOCAL_STORAGE = {
  constants: {
    JWT: "jwt",
  },
  set: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },
  get: (key: string) => {
    return JSON.parse(localStorage.getItem(key) ?? "null");
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
