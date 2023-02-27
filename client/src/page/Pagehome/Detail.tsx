import NavBar from "../../components/NavBar"
import { useEffect,useState } from 'react';
import {Button} from '@mui/material';
import { Box} from '@mui/system';
import '../../index.css'
import FigureImage from 'react-bootstrap/FigureImage'
import Typography from '@mui/material/Typography/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col, Container, Form} from "react-bootstrap";
import Card from '@mui/material/Card';
import MDT from "../../Models/ModelTour";
import Repo from '../../Repository'
import ReactMarkdown from "react-markdown";
import CardContent from '@mui/material/CardContent';

const Detailpage = () => {
    const [userresult, setUserResult] = useState<MDT[]>([]);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const params = useParams();

    const fetchData = async () => {
        try {
            const res = await Repo.userResult.get(params.id as string);
            if(res) {
                setUserResult(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [params.id])
    
    const data = userresult.length > 0 ? userresult[0].attributes : null;
    const image = `http://localhost:1337${data?.image.data.attributes.url}`

    return (
        <div>
            <NavBar/>
            <div className="detailcontainer">
                <div className="third">
                <Card variant='outlined'
                sx = {{
                        backgroundColor: 'white',
                        padding: '1rem' 
                     }}  padding-left = "50px" padding-right = "50px" >
                        <FigureImage src={image} width={'60%'} height={'60%'} style={{display: 'block', margin: 'auto',marginBottom:"25px"}} />
                        <Typography style={{ fontSize: 30, textAlign: "left", fontWeight: "bold", color: "black", textAlignLast: "left"}}>รายละเอียด</Typography>
                            <Box width="auto" height="auto"
                            sx={{
                                    overflow:"auto",
                                    padding: '0.5rem'
                                }}>
                                <ReactMarkdown>{data?.detail as string}</ReactMarkdown>
                            </Box>
                        <Row xs="auto" style={{marginLeft: '8px'}} className="justify-content-md-center">

                            <CardContent>
                                <Typography style={{ fontSize: 16, textAlign: "left", color: "black", textAlignLast: "left",marginTop:"-45px",marginBottom:"-15px"}}>
                                    <p>ระยะเวลากิจกรรม : {data?.StartActivity.toString()} - {data?.EndActivity.toString()}</p>
                                </Typography>
                                <Typography style={{ fontSize: 16, textAlign: "left", color: "black", textAlignLast: "left",marginBottom:"2px"}}>
                                    <p>ระยะเวลาการสมัคร : {data?.StartRegister.toString()} - {data?.EndRegister.toString()}</p>
                                </Typography>
                                <Typography style={{ fontSize: 22, textAlign: "left", fontWeight: "bold", color: "black", textAlignLast: "left",marginTop:"15px",marginBottom:"10px"}}>จำนวนที่รับสมัคร : {data?.Number.toString()} คน</Typography>
                            <Button size="large" style={{background:"#1976d2", color:"white", width:"9%", fontSize: 20, height:"5vh"}} sx={{'&:hover': {background: '#ffffff', opacity: [0.9, 0.8, 0.7]}}}>สมัคร</Button>
                            </CardContent>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <br/>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Detailpage