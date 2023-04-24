import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setLoader] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoader(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoader(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErr(err.message);
          setLoader(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, err, isLoading };
};

export default useData;
