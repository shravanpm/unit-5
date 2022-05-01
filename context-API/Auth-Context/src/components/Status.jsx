import React, { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const Status = () => {
  const { token, isAuth } = useContext(AuthContext);

  return (
    <div>
      User Status : {isAuth && token ? "Success" : "Failed"}
      <p>Token : {token ? token : "NA"}</p>
    </div>
  );
};

export default Status;
