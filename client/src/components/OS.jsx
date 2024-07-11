import React, { useState, useEffect } from "react";
import { Data } from "./Data";
import axios from "axios";

const OS = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:3001/get/os");
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

export default OS;
