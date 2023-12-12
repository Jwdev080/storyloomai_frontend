import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductNewProject } from "../../../../store/reducers/products";
import Box from "@mui/material/Box";
import { Grid, TextField, Typography } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.productData);
  const newProject = productData.newProject;

  const [title, setTitle] = useState("");
  const [character1Info, setCharacter1Info] = useState("");
  const [character2Info, setCharacter2Info] = useState("");
  const [storyIdea, setStoryIdea] = useState("");

  useEffect(() => {
    setTitle(newProject.title);
    setCharacter1Info(newProject.character1Info);
    setCharacter2Info(newProject.character2Info);
    setStoryIdea(newProject.storyIdea);
  }, []);
  useEffect(() => {
    const delayedStateChange = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      dispatch(
        addProductNewProject({
          title,
          character1Info,
          character2Info,
          storyIdea,
        })
      );
    };
    delayedStateChange();
  }, [title, character1Info, character2Info, storyIdea]);

  return (
    <div>
      <Grid item xs={12} md={12}>
        <Box component="form" role="form">
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="h5" fontWeight="bold">
                Title
              </Typography>
            </Box>
            <TextField
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Title"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="h5" fontWeight="bold">
                Character 1 as much description and information or as little as
                you want
              </Typography>
            </Box>
            <TextField
              value={character1Info}
              multiline
              rows={3}
              onChange={(e) => {
                setCharacter1Info(e.target.value);
              }}
              type="text"
              placeholder="Character 1 name and personality traits"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="h5" fontWeight="bold">
                Character 2 as much description and information or as little as
                you want
              </Typography>
            </Box>
            <TextField
              value={character2Info}
              multiline
              rows={3}
              onChange={(e) => {
                setCharacter2Info(e.target.value);
              }}
              type="text"
              placeholder="Character 2 name and personality traits"
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <Box mb={1} ml={0.5}>
              <Typography component="label" variant="h5" fontWeight="bold">
                Story idea as as much description and information or as little
                as you want
              </Typography>
            </Box>
            <TextField
              value={storyIdea}
              onChange={(e) => {
                setStoryIdea(e.target.value);
              }}
              type="text"
              multiline
              rows={3}
              placeholder="Story idea as much or as little as you want"
              fullWidth
            />
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default App;
