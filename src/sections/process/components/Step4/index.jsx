import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

import backgroundVideo from "./demo.mp4";

const App = () => {
  return (
                  <Box mb={1} ml={0.5}>
                    <div>
                      <video loop style={{ width: "100%" }} controls>
                        <source src={backgroundVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </Box>
  );
};

export default App;
