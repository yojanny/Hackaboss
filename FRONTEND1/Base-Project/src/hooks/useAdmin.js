import { useEffect, useState } from "react";
import useToken from "./useToken";

const checkAdmin = (tokenData) => {
  if (!tokenData) {
    return false;
  }
  return tokenData.id === 1;
};

function useAdmin() {
  const { tokenData, updateToken } = useToken();
  const [isAdmin, setIsAdmin] = useState(checkAdmin(tokenData));

  useEffect(() => {
    setIsAdmin(checkAdmin(tokenData));
  }, [tokenData]);

  return isAdmin;
}

export default useAdmin;
