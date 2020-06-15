import React, { useState, useEffect, Component } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const token = localStorage.getItem("token")
  // fetch your colors data from the server when the component mounts
  const fetchColor = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        let newColorList = res.data
        setColorList(newColorList)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  fetchColor()
  

  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
