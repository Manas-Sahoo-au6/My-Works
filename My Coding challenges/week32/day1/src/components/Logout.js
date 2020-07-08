import React from "react";

function Logout() {
  let logout = () => {
    localStorage.clear();
    alert("Logout Sucessfully");
  };

  return (
    <>
      <div className="logout">
        <h1>Logout Page</h1>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

export default Logout;
