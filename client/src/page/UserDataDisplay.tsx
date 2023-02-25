import { Box } from "@mui/material";
import { useEffect ,useState } from 'react';
import MDT from "../Models/ModelTour";
import repository from "../Repository";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function UseData() {
  const [MDT, setMDT] = useState<MDT[]>([])
  const [userresult, setUserResult] = useState<MDT[]>([]);
  const data = userresult.length > 0 ? userresult[0].attributes : null;

  const fetchMDT = async () => {
    const result = await repository.userResult.getAll()
    if(result) {
      setMDT(result)
    }   
  }

  useEffect(() => {
    fetchMDT()
  }, []) // add empty dependency array to avoid infinite loop

  return (
    <div>
      {MDT.map((mdt ,index) => (
        <Box key={index} sx={{ border: "1px solid black", p: 2 }}>
          <Card sx={{ maxWidth: 1000000}}>
            <CardMedia
              sx={{ height: 490, Width:60 }}
              image = {`http://localhost:1337${data?.image.data.attributes.url}`}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom  component="div">
                <h2>{mdt.attributes.title}</h2>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>{mdt.attributes.description}</p>
                <p>ระยะเวลากิจกรรม </p>
                <p> {mdt.attributes.StartActivity.toString()} - {mdt.attributes.EndActivity.toString()}</p>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">สมัคร</Button>
              <Button size="small">รายละเอียด </Button>
              <Typography variant="body2" color="text.secondary">
                <p>ผู้สมัคร{mdt.attributes.Number.toString()}</p>
              </Typography>
            </CardActions>
          </Card>
        </Box>
        ))}
    </div>
  )
      }
  

export default UseData;
