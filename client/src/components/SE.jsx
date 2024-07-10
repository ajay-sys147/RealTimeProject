import React, { useEffect, useState } from "react";
import { Data } from "./Data";
import axios from "axios";

const SE = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:3001/get/se");
      setData(res.data);
    };
    fetch();
  }, []);
  return (
    <div>
      {data.map((item, index) => (
        <Data key={index} course={item} />
      ))}
    </div>
  );
};

export default SE;
