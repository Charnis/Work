type RESPONSE_DATA = {
  greeting: string;
};

const getJson = async <T>(endpoint: string): Promise<T> => {
  const path = import.meta.env.DEV
    ? `http://localhost:3001/api/${endpoint}`
    : `/gh-pages-demo/static/db/${endpoint}.json`;

  const response = await fetch(path);
  return await response.json();
};

type API = {
  get: {
    data: () => Promise<RESPONSE_DATA>;
  };
};

const api: API = {
  get: {
    data: () => getJson<RESPONSE_DATA>('data'),
  },
};

export type { RESPONSE_DATA };
export default api;
