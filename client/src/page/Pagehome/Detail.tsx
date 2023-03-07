import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import "../../index.css";
import FigureImage from "react-bootstrap/FigureImage";
import Typography from "@mui/material/Typography/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Container, Form } from "react-bootstrap";
import Card from "@mui/material/Card";
import MDT from "../../Models/ModelTour";
import Repo from "../../Repository";
import ReactMarkdown from "react-markdown";
import CardContent from "@mui/material/CardContent";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import MDAC from "../../Models/ModelsActivity";
import { truncate } from "fs";

const getUserData = () => {
  const stringfiedUser = localStorage.getItem("user") || "";
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};
const Detailpage = () => {
  const [userresult, setUserResult] = useState<MDT[]>([]);
  const [activityresult, setActivityResult] = useState<MDAC[]>([]);
  // const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const params = useParams();
  // const [loggedIn, setLoggedIn] = useState(false);
  const [isRegis, setIsRegis] = useState(false)
  const userData = getUserData();
  

  const fetchData = async () => {
    try {

      const data1 = await Repo.userResult.get(params.id as string);
      const data2 = await fetch(`http://localhost:1337/api/statuses?filters[Username]=${userData.username}&filters[ActivityID]=${params.id}`)
      if (data1) {
        setUserResult(data1);
      }
      if (data2) {
        const data3 = await data2.json();
        setActivityResult(data3.data);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisabled = () => {
    if (activityresult.length > 0) {
      setIsRegis(true)
    }
  }


  async function handleSignupClick(id: string) {
    const activity = {
      data: {
        title: data?.title.toString(),
        status: "สมัครแล้ว",
        Username: userData.username,
        ActivityID: params.id,
        Image: `http://localhost:1337${data?.image.data.attributes.url}`
      },
    };

    const requestBody = JSON.stringify(activity);
    if (data?.likeCount != data?.Number) {
      if (userData) {
        const result = await Swal.fire({
          title: "คุณมั่นใจ?",
          text: "คุณต้องการจะสมัครกิจกรรมนี้หรือไม่",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        });

        if (result.isConfirmed) {
          try {
            const resp = await fetch(
              `http://localhost:1337/api/activity/${id}/like`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${userData.jwt}`,
                },
              }
            );
            const data = await resp.json();
            console.log(data);
            const response = await fetch(
              "http://localhost:1337/api/statuses",
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${userData.jwt}`,
                  "Content-Type": "application/json",
                },
                body: requestBody,
              }
            );

            const data1 = await response.json();
            console.log(data1);
            fetchData();
            Swal.fire({
              title: "สำเร็จ",
              text: "สมัครกิจกรรมสำเร็จแล้ว",
              icon: "success",
              confirmButtonText: "OK",
            });
            setIsRegis(true);
          } catch (err) {
            console.error(err);
          }
        }
      } else {
        Swal.fire({
          title: "คุณไม่มีสิทธิ์เข้าถึง",
          text: "กรุณาล็อคอิน",
          icon: "error",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/login");
        });
      }
    } else {
      Swal.fire({
        title: "เต็ม",
        text: "ขณะนี้มีผู้ลงทะเบียนกิจกรรมเต็มแล้ว",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  }
  useEffect(() => {
    fetchData()
  }, [params.id]);

  useEffect(() => {
    handleDisabled()
  })
  

  const data = userresult.length > 0 ? userresult[0].attributes : null;
  const image = `http://localhost:1337${data?.image.data.attributes.url}`;

  return (
    <div>
      <NavBar />
      <div className="detailcontainer">
        <div className="third">
          <Card
            variant="outlined"
            sx={{
              backgroundColor: "white",
              padding: "1rem",
            }}
            padding-left="50px"
            padding-right="50px"
          >
            <FigureImage
              src={image}
              width={"60%"}
              height={"60%"}
              style={{ display: "block", margin: "auto", marginBottom: "25px" }}
            />
            <Typography
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "left",
                color: "black",
                textAlignLast: "left",
                marginBottom: "-15px",
              }}
            >
              <p>{data?.title.toString()}</p>
            </Typography>
            <Typography
              style={{
                fontSize: 30,
                textAlign: "left",
                fontWeight: "bold",
                color: "black",
                textAlignLast: "left",
              }}
            >
              รายละเอียด
            </Typography>
            <Box
              width="auto"
              height="auto"
              sx={{
                overflow: "auto",
                padding: "0.5rem",
              }}
            >
              <ReactMarkdown>{data?.description as string}</ReactMarkdown>
            </Box>
            <Row
              xs="auto"
              style={{ marginLeft: "8px" }}
              className="justify-content-md-center"
            >
              <CardContent>
                <Typography
                  style={{
                    fontSize: 16,
                    textAlign: "left",
                    color: "black",
                    textAlignLast: "left",
                    marginTop: "-45px",
                    marginBottom: "-15px",
                  }}
                >
                  <p>
                    ระยะเวลากิจกรรม : {data?.StartActivity.toString()} -{" "}
                    {data?.EndActivity.toString()}
                  </p>
                </Typography>
                <Typography
                  style={{
                    fontSize: 16,
                    textAlign: "left",
                    color: "black",
                    textAlignLast: "left",
                    marginBottom: "2px",
                  }}
                >
                  <p>
                    ระยะเวลาการสมัคร : {data?.StartRegister.toString()} -{" "}
                    {data?.EndRegister.toString()}
                  </p>
                </Typography>
                <Typography
                  style={{
                    fontSize: 22,
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "black",
                    textAlignLast: "left",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                >
                  จำนวนที่รับสมัคร : {data?.Number.toString()} คน
                </Typography>
                <Typography
                  style={{
                    fontSize: 22,
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "black",
                    textAlignLast: "left",
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                >
                  จำนวนคนสมัคร : {data?.likeCount.toString()} คน
                </Typography>
                <Button
                  size="large"
                  style={{
                    background: "#1976d2",
                    color: "white",
                    width: "9%",
                    fontSize: 20,
                    height: "5vh",
                  }}
                  sx={{
                    "&:hover": {
                      background: "#ffffff",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  onClick={() =>
                    params.id && handleSignupClick(params.id.toString())
                  }
                  disabled = {isRegis}
                >
                  {!isRegis &&
                    <Typography>สมัคร</Typography>
                  }
                  {isRegis &&
                    <Typography>สมัครแล้ว</Typography>
                  }
                </Button>
              </CardContent>
              <Col></Col>
              <Col></Col>
            </Row>
            <br />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Detailpage;
