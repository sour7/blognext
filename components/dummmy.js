import React from "react";

const Dummmy = () => {
  return (
    <div>
      <style jsx global>
        {`
          .dummy {
            background-color: yellow;
          }
        `}
      </style>
      <div className="dummy">this is dummy</div>
    </div>
  );
};

export default Dummmy;
