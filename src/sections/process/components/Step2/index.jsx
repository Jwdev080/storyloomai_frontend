import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductCharacter } from "../../../../store/reducers/products";
import { Grid } from "@mui/material";
import Character1 from "./character/1.png";
import Character2 from "./character/2.png";
import Character3 from "./character/3.png";
import Character4 from "./character/4.png";
import Character5 from "./character/5.png";
import Character6 from "./character/6.png";
import Character7 from "./character/7.png";
import Character8 from "./character/8.png";
import Character9 from "./character/9.png";
import Character10 from "./character/10.png";
import Character11 from "./character/ahri-bg.jpg";
import Character12 from "./character/akali-bg.jpg";
import Character13 from "./character/ashe-bg.png";
import Character14 from "./character/fortune-bg.jpg";
import Character15 from "./character/garen-bg.jpg";
import Character16 from "./character/lux-bg.jpg";
import "./style.css";
const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.productData);
  //const [selectedImages, setSelectedImages] = useState({ characterFirst: 0, characterSecond: 0 });
  // const [character, setCharacter] = useState({
  //   first: -1,
  //   second: -1,
  // });

  const [selectFirstId, setSelectFirstId] = useState(-1);
  const [selectSecondId, setSelectSecondId] = useState(-1);
  const [selectCount, setSelectCount] = useState(0);

  const imageItems1 = [
    {
      id: 1,
      name: "A",
      src: Character1,
    },
    {
      id: 2,
      name: "B",
      src: Character2,
    },
  ];
  const imageItems2 = [
    {
      id: 16,
      name: "I",
      src: Character16,
    },
    {
      id: 4,
      name: "D",
      src: Character4,
    },
    {
      id: 12,
      name: "I",
      src: Character12,
    },
    {
      id: 5,
      name: "E",
      src: Character5,
    },
    {
      id: 6,
      name: "F",
      src: Character6,
    },
    {
      id: 15,
      name: "I",
      src: Character15,
    },
    {
      id: 7,
      name: "G",
      src: Character7,
    },
    {
      id: 14,
      name: "I",
      src: Character14,
    },
    {
      id: 8,
      name: "H",
      src: Character8,
    },
    {
      id: 13,
      name: "I",
      src: Character13,
    },
    {
      id: 9,
      name: "I",
      src: Character9,
    },
    {
      id: 10,
      name: "I",
      src: Character10,
    },
    {
      id: 11,
      name: "I",
      src: Character11,
    },
    {
      id: 3,
      name: "C",
      src: Character3,
    },
  ];

  const handleImageClick = (characterId) => {
    if (selectCount % 2 === 0) {
      setSelectFirstId(characterId);
      setSelectCount(1);
    }
    if (selectCount % 2 === 1) {
      setSelectSecondId(characterId);
      setSelectCount(2);
    }
  };

  useEffect(() => {
    const delayedStateChange = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      const selectedFirstCharacter = imageItems1.find((obj) => obj.id === selectFirstId);
      const selectedSecondCharacter = imageItems1.find((obj) => obj.id === selectSecondId);
      if (selectCount == 2) {
        dispatch(addProductCharacter({ selectedFirstCharacter, selectedSecondCharacter }));
      }
    };
    delayedStateChange();
  }, [selectFirstId, selectSecondId, selectCount]);

  useEffect(() => {
    if (Object.keys(productData.character).length === 2) {
      setSelectFirstId(productData.character.selectedFirstCharacter.id);
      setSelectSecondId(productData.character.selectedSecondCharacter.id);
    }
  }, []);
  return (
    <div>
          <Grid container spacing={2}>
            {imageItems1.map((imageItem) => (
              <Grid item xs={6} sm={4} md={2} key={imageItem.id}>
                <img
                  className="img-card"
                  src={imageItem.src}
                  alt="Image 1"
                  onClick={() => handleImageClick(imageItem.id)}
                  style={{
                    filter:
                      selectFirstId == imageItem.id
                        ? "grayscale(0) opacity(1)"
                        : selectSecondId == imageItem.id
                        ? "grayscale(0) opacity(1)"
                        : "grayscale(0.9) opacity(0.9)",
                    border:
                      selectFirstId === imageItem.id
                        ? "2px solid Violet"
                        : selectSecondId == imageItem.id
                        ? "2px solid SlateBlue"
                        : "none",
                    width: "100%",
                  }}
                />
                {selectFirstId === imageItem.id ? (
                  <p style={{textAlign: "center"}}>Character1</p>
                ) : (
                  <>{selectSecondId === imageItem.id ? <p style={{textAlign: "center"}}>Character2</p> : <></>}</>
                )}
              </Grid>
            ))}
            {imageItems2.map((imageItem) => (
              <Grid item xs={6} sm={4} md={2} key={imageItem.id}>
                <img
                  className="img-card"
                  src={imageItem.src}
                  alt="Image 1"
                  style={{
                    width: "100%",
                  }}
                />
                {selectFirstId === imageItem.id ? (
                  <p style={{textAlign: "center"}}>Character1</p>
                ) : (
                  <>{selectSecondId === imageItem.id ? <p style={{textAlign: "center"}}>Character2</p> : <></>}</>
                )}
              </Grid>
            ))}
          </Grid>
    </div>
  );
};

export default App;
