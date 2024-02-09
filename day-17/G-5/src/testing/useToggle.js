import React, { useState } from "react";
import { userState, useEffect } from "react";
const useToggle = (url) => {
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        // console.log(resp);
        if (!response.ok) {
          setError(true);
          setLoading(false);
        }

        const users = await response.json();
        setUser(users);
      } catch (error) {
        setError(true);

        // console.log(error);
      }
      // hide loading
      setLoading(false);
    };
    fetchUser();
  }, []);
  return { user, isError, loading };
};
export default useToggle;
