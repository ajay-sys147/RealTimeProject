import React, { useEffect, useState } from "react";
import { Data } from "./Data";
import axios from "axios";

const DBMS = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:3001/get/dbms");
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

export default DBMS;
