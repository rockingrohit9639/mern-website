import React, { useState, useEffect} from "react";

function Home()
{

  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    const callHome = async () => {
      try {
        const res = await fetch("/getData", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

          const resJson = await res.json();
          

        if (!res.status === 200) {
          throw new Error(res.error);
        } else {
          setUserName(resJson.name);
        }
      } catch (err) {
        console.log(err);
      }
      };
      
      callHome();
  }, []);
  return (
    <>
      <div className="home">
        <div className="home__content">
          <p className="font-weight-bold"> { userName ? `Welcome back ${userName}.` : "WELCOME"} </p>
          <h1> { userName ? `Lets get back to work.` : " We Are The MERN Developers."} </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
