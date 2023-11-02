import React from "react";
import "./jar.css";
import jarImage from "../../assets/jar.png";

const Jar = React.forwardRef((props, ref) => {
  const jarStyle = {
    width: "75px",
    height: "75px",
  };

  return (
    <div className="jar" ref={ref} style={jarStyle}>
      <img src={jarImage} alt="Jar" style={jarStyle} />
    </div>
  );
});

export default Jar;
