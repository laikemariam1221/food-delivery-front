import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import MenuList from "../MenuList/MenuList";
import Fooddesplay from "../Fooddesplay/Fooddesplay";
import Download from "../Download/Download";
import Login from "../Login/Login";
import { sinupContext } from "../Storecontext/FoodImageContext"; // Correct import path

function Home() {
  const [catagory, setCatagory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const { sinin } = useContext(sinupContext);

  return (
    <div>
      <Header />
      <MenuList
        category={catagory}
        setCatagory={setCatagory}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <Fooddesplay category={catagory} />
      <Download />
    </div>
  );
}

export default Home;
