import React, { useEffect } from "react";
import { useHistory } from "react-router";

function Logout() {
  const history = useHistory();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history.push("/login", { replace: true });

        if (!res.status === 200) {
          throw new Error(res.error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1> This is logout ka page. </h1>
    </>
  );
}

export default Logout;
