import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductWorld } from "../../../../store/reducers/products";
import { Grid, Typography } from "@mui/material";
import World1 from "./world/1.png";
import World2 from "./world/2.png";
import World3 from "./world/3.png";
import World4 from "./world/4.png";
import World5 from "./world/5.png";
import World6 from "./world/6.png";
import World7 from "./world/7.png";
import World8 from "./world/8.png";
import World9 from "./world/9.png";

import "./style.css";
const Index = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.productData);
  const [selectedImageId, setSelectedImageId] = useState();

  const imageItems1 = [
    {
      id: 1,
      name: "Soul City",
      src: World1,
    },
  ];
  const imageItems2 = [
    {
      id: 2,
      name: "Shogun",
      src: World2,
    },
    {
      id: 3,
      name: "Fantasy",
      src: World3,
    },
    {
      id: 4,
      name: "Space",
      src: World4,
    },
    {
      id: 5,
      name: "City",
      src: World5,
    },
    {
      id: 6,
      name: "Cyberpunk",
      src: World6,
    },
    {
      id: 7,
      name: "Carribbean",
      src: World7,
    },
    {
      id: 8,
      name: "Alien Planet",
      src: World8,
    },
    {
      id: 9,
      name: "Medieval",
      src: World9,
    },
  ];

  const handleImageClick = async (image) => {
    setSelectedImageId(image);
  };
  useEffect(() => {
    const delayedStateChange = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      const seledtedWorld = imageItems1.find(
        (obj) => obj.id === selectedImageId
      );
      if (selectedImageId) dispatch(addProductWorld(seledtedWorld));
    };
    delayedStateChange();
  }, [selectedImageId]);

  useEffect(() => {
    if (Object.keys(productData.world).length !== 0) {
      setSelectedImageId(productData.world.id);
    }
  }, []);

  return (
    <Grid container spacing={2}>
      {imageItems1.map((imageItem) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          key={imageItem.id}
          sx={{ justifyContent: "center" }}
        >
          <img
            className="img-card"
            src={imageItem.src}
            alt="Image"
            onClick={() => handleImageClick(imageItem.id)}
            style={{
              filter:
                selectedImageId == imageItem.id
                  ? "grayscale(0) opacity(1)"
                  : "grayscale(0.9) opacity(0.9)",
              border:
                selectedImageId == imageItem.id
                  ? "3px solid red"
                  : "none",
              width: "100%",
            }}
          />
          <Typography variant="h5" component="h2" style={{textAlign: "center"}}>
            {imageItem.name}
          </Typography>
        </Grid>
      ))}
      {imageItems2.map((imageItem) => (
        <Grid item xs={6} sm={4} md={2} key={imageItem.id}>
          <img
            className="img-card"
            src={imageItem.src}
            alt="Image"
            style={{
              border: "0px solid white",
              width: "100%",
            }}
          />
          <Typography variant="h5" component="h2"  style={{textAlign: "center"}}>
            {imageItem.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Index;
