import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import React, { useContext, useState } from "react";
import { postcontext } from "../Helpers/context";
import CustomModal from "./CustomModal";

const Posts = () => {
  const { post, handledelete, filteredresults, handlemodal, setopenModal } = useContext(postcontext);
  
  const cards = filteredresults.length
    ? filteredresults.map((eachpost) => {
        return (
          <Grid key={eachpost.id} item sm={6} md={4} xs={12}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 15, fontWeight: "500" }}
                  align="center"
                  color="text.secondary"
                >
                  {eachpost.title}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  marginTop: "15px",
                }}
              >
                <Button
                  size="small"
                  sx={{ mr: "10px" }}
                  variant="outlined"
                  onClick={(e) => {
                    setopenModal(true);
                    handlemodal(eachpost.id);
                  }}
                >
                  Comments
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => handledelete(eachpost.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })
    : post.map((eachpost) => {
        return (
          <Grid key={eachpost.id} item sm={6} md={4} xs={12}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 15, fontWeight: "500" }}
                  align="center"
                  color="text.secondary"
                >
                  {eachpost.title}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  marginTop: "15px",
                }}
              >
                <Button
                  size="small"
                  sx={{ mr: "10px" }}
                  variant="outlined"
                  onClick={(e) => {
                    setopenModal(true);
                    handlemodal(eachpost.id);
                  }}
                >
                  Comments
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => handledelete(eachpost.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      });

  return (
    <Container fixed>
      <Grid container rowSpacing={3} columnSpacing={5} mt={2}>
        {cards}
        <CustomModal />
      </Grid>
    </Container>
  );
};
export default Posts;
