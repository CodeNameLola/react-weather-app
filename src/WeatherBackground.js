import React, { useState } from "react";

export default function WeatherBackground() {
  const [color, setColor] = useState("grey");

  return <div className="background"></div>;
}
// export default function WeatherBackground() {
//if (hours > 17) {
// return (

// )
//  }
//}

// this should be the night time background color:
// background: rgb(5,37,52);
// background: linear-gradient(8deg, rgba(5,37,52,1) 65%, rgba(4,13,17,1) 100%);
