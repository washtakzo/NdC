import React, { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<Error | undefined>();
  const sendRequest = async (
    url: string,
    method: string = "GET",
    body: any = null,
    headers: any = {}
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: method,
        headers: headers,
        body: body,
      });

      const data = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(
          data.message ||
            "Something went wrong with the server please try again ..."
        );
      }
      setIsLoading(false);
      return data;
    } catch (e: any) {
      setError(e);
      setIsLoading(false);
      throw new Error(e.message);
    }
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
