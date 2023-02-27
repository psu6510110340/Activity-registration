import NavBar from "../components/NavBar"
import { useEffect,useState } from 'react';
import {Button} from '@mui/material';
import { Box} from '@mui/system';
import '../index.css'
import FigureImage from 'react-bootstrap/FigureImage'
import Typography from '@mui/material/Typography/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col, Container, Form} from "react-bootstrap";
import Card from '@mui/material/Card';
import MDT from "../Models/ModelTour";
import Repo from '../Repository'
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
                <div className="first">
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="45%" marginTop="30px" marginBottom = "30px" padding-left = "50px" padding-right = "50px"  >
                    </Box>
                </div>
                <div className="second">
                    <Box>
                    </Box>
                    </div>
                
                <div className="third">
                <Card variant='outlined'
                // imagecode here
                sx = {{
                        backgroundColor: 'white',
                        marginTop: "35px",
                        padding: '1rem' 
                     }}  padding-left = "50px" padding-right = "50px" >
                        <FigureImage src={image} width={'60%'} height={'60%'} style={{display: 'block', margin: 'auto'}} />
                        <Typography style={{ fontSize: 30, textAlign: "left", fontWeight: "bold", color: "black", textAlignLast: "left"}}>รายละเอียด</Typography>
                            <Box width="100%" height="50vh"
                            sx={{
                                    overflow:"auto",
                                    padding: '0.5rem'
                                }}>
                                <ReactMarkdown>{data?.detail as string}</ReactMarkdown>
                            </Box>
                        <Row xs="auto" style={{marginLeft: '8px'}} className="justify-content-md-center">
                            <Typography style={{ fontSize: 22, textAlign: "left", fontWeight: "bold", color: "black", textAlignLast: "left",marginTop:"10px"}}>จำนวนที่รับสมัคร {data?.Number.toString()}</Typography>
                            <CardContent>
                                <Typography style={{ fontSize: 17, textAlign: "left", color: "black", textAlignLast: "left"}}>
                                    <p>ระยะเวลากิจกรรม : {data?.StartActivity.toString()} - {data?.EndActivity.toString()}</p>
                                    <p>ระยะเวลาการสมัคร : {data?.StartRegister.toString()} - {data?.EndRegister.toString()}</p>
                                </Typography>
                                <Button size="small">สมัคร</Button>
                            </CardContent>
                                            <Col>
                                
                            </Col>
                            <Button size="small">สมัคร</Button>
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