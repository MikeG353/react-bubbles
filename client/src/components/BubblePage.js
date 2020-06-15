import React, { useState, useEffect, Component } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const token = localStorage.getItem("token")

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        let newColorList= res.data
        setColorList(newColorList)
      })
      .catch(err => {
        console.log(err.message)
      })
  },[])
  // fetch your colors data from the server when the component mounts
    // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
