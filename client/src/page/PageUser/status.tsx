import Grid from "@mui/material/Grid";
import NavBarDetile from "../../components/NavBarDetile";
import ComplexGrid from "../../components/Body/Headstatus";
import CardStatus from "../../components/Body/UserStatusCard";
import Logout from "../Pagelogin/Logout";
import { Button } from "react-bootstrap";
import Link from "@mui/material/Link";
import CardLog from "../../components/Body/Popupcard";
import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import conf from "../../conf";

const getUserData = () => {
  const stringfiedUser = localStorage.getItem("user") || "";
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const Status = () => {
  const userData = getUserData();
  if (!userData) {
    return (
      <div>
        <CardLog />
      </div>
    );
  }

  return (
    <div>
      <div>
        <NavBarDetile />
        <ComplexGrid />
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 60,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <CardStatus/>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Status;
