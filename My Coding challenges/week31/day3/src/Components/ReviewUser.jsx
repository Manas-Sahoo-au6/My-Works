import React from "react";

import "./ReviewUser.css";

function ReviewUser(props) {
  let { Name, Email, ProfilePicUrl, Review, Rating } = props.review;
  console.log(Name);

  return (
    <>
      <div className="Review">
        <h1>{Name}</h1>
        <div className="card">
          <img src={ProfilePicUrl} alt="" />
          <h4>{Email}</h4>
            <p>{Review}</p>
            
            <strong>{Rating}</strong>
        </div>
      </div>
    </>
  );
}

export default ReviewUser;
