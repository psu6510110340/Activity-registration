import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import tmd from "../../Models/ModelTour";
import repository from "../../Repository";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Height } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import TMD from "../../Models/ModelAdmin";

function Fixdisplay() {
  const [TMD, setTMD] = useState<tmd[]>([]);
  const [userresult, setUserResult] = useState<TMD[]>([]);
  const data = userresult.length > 0 ? userresult[0].attributes : null;
  const navigate = useNavigate();

  const fetchtmd = async () => {
    const result = await repository.userResult.getAll();
    if (result) {
      setTMD(result);
    }
  };

  useEffect(() => {
    fetchtmd();
  }, []); // add empty dependency array to avoid infinite loop

  return (
    <Grid container spacing={3}>
      {TMD.map((tmd, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box sx={{ p: 1 }}>
            <Card sx={{ maxWidth: 500, width: "100%", height: "" }}>
              <CardMedia
                sx={{ height: 150 }}
                image={`http://localhost:1337${tmd.attributes.image.data.attributes.url}`}
              />
              <CardContent>
                <Typography gutterBottom component="div">
                  <h2>{tmd.attributes.title}</h2>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>ระยะเวลากิจกรรม </p>
                  <p>
                    {tmd.attributes.StartActivity.toString()} -{" "}
                    {tmd.attributes.EndActivity.toString()}
                  </p>
                  <p>ระยะเวลาการสมัคร</p>
                  <p>
                    {tmd.attributes.StartRegister.toString()} -{" "}
                    {tmd.attributes.EndRegister.toString()}
                  </p>
                  <h3>จำนวนรับ : {tmd.attributes.Number.toString()} คน</h3>
                </Typography>
                <CardActions onClick={()=>navigate(`/Detail/${tmd.id}`)}>
                </CardActions>
              </CardContent>
              
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Fixdisplay;
