import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import MDT from "../../Models/ModelTour";
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

function UseData() {
  const [MDT, setMDT] = useState<MDT[]>([]);
  const [userresult, setUserResult] = useState<MDT[]>([]);
  const data = userresult.length > 0 ? userresult[0].attributes : null;
  const navigate = useNavigate();

  const fetchMDT = async () => {
    const result = await repository.userResult.getAll();
    if (result) {
      setMDT(result);
    }
  };

  useEffect(() => {
    fetchMDT();
  }, []); // add empty dependency array to avoid infinite loop

  return (
    <Grid container spacing={3}>
      {MDT.map((mdt, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box sx={{ p: 1 }}>
            <Card sx={{ maxWidth: 500, width: "100%", height: "" }}>
              <CardMedia
                sx={{ height: 150 }}
                image={`http://localhost:1337${mdt.attributes.image.data.attributes.url}`}
              />
              <CardContent>
                <Typography gutterBottom component="div">
                  <h2>{mdt.attributes.title}</h2>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>ระยะเวลากิจกรรม </p>
                  <p>
                    {mdt.attributes.StartActivity.toString()} -{" "}
                    {mdt.attributes.EndActivity.toString()}
                  </p>
                  <p>ระยะเวลาการสมัคร</p>
                  <p>
                    {mdt.attributes.StartRegister.toString()} -{" "}
                    {mdt.attributes.EndRegister.toString()}
                  </p>
                  <h3>จำนวนรับ : {mdt.attributes.Number.toString()} คน</h3>
                  <h3>จำนวนสมัคร : {mdt.attributes.likeCount.toString()} คน</h3>
                </Typography>
                <CardActions onClick={()=>navigate(`/Detail/${mdt.id}`)}>
                  <Button variant="outlined" style={{ width: "100%" }} sx={{'&:hover': {background: '#9fb4f2', opacity: [0.1, 0.3, 1]}}}>
                    สมัคร
                  </Button>
                </CardActions>
              </CardContent>
              
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default UseData;
