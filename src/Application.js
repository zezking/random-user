import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Application() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  // const response = await fetch("https://randomuser.me/api/");
  // const data = await response.json();
  // const [item] = data.results;

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res) => {
      const [item] = res.data.results;
      setUser(item);
    });
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>

      {user && (
        <>
          <h1>{`${user.name.first} ${user.name.last}`}</h1>
          <h1>{user.cell}</h1>
          <h1>
            profile <img src={user.picture.large}></img>
          </h1>
        </>
      )}
    </div>
  );
}
