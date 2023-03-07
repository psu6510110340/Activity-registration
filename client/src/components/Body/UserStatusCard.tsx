import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import MDAC from "../../Models/ModelsActivity";
import { Box } from "@mui/joy";

const getUserData = () => {
  const stringfiedUser = localStorage.getItem("user") || "";
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const CardStatus = () => {
  const userData = getUserData();
  const [activityresult, setActivityResult] = useState<MDAC[]>([]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `http://localhost:1337/api/statuses?filters[Username]=${userData.username}`
      );
      if (data) {
        const data1 = await data.json();
        setActivityResult(data1.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      {activityresult.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box sx={{ p: 1 }}>
            <Card sx={{ maxWidth: 345}}>
              <CardMedia
                sx={{ height: 150 }}
                component="img"
                alt="activity"
                height="140"
                image={item.attributes.Image.toString()}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.attributes.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* {item.attributes.Username} */}
                </Typography>
                <Typography variant="body2" color="#00FF66">
                  คุณได้สมัครกิจกรรมนี้แล้ว
                </Typography>
              </CardContent>
              <CardActions>
                
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardStatus;
