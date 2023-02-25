import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import { Button, TextField } from "@mui/material";

interface IUser {
  username: string;
  email: string;
  jwt: string;
}

const ActivityForm = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startActivity, setStartActivity] = useState<string>("");
  const [user, setUser] = useState<IUser | null>(null);
  const [EndActivity, setEndActivity ] = useState<string>("");
  const [StartRegister, setStartRegister] = useState<string>("");
  const [EndRegister, setEndRegister] =useState<string>("")
  const [Number, setNumber] = useState<number>(0)

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setUser(parsedUserData);
    }
  }, []);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!user) {
      alert("You are not authorized to create an activity.");
      return;
    }

    // Convert StartActivity to a date
    const startDate = new Date(startActivity);
    const EndDate = new Date(EndActivity);
    const startRegister = new Date(StartRegister);
    const endRegister = new Date(EndRegister);

    try {
      const response = await fetch("http://localhost:1337/api/activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.jwt}`,
        },
        body: JSON.stringify({
          data: {
            title,
            description,
            StartActivity: startDate.toISOString().substring(0, 10),
            EndActivity: EndDate.toISOString().substring(0, 10),
            StartRegister: startRegister.toISOString().substring(0, 10),
            EndRegister: endRegister.toISOString().substring(0, 10),
            Number
          },
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          variant="outlined"
          fullWidth
          multiline
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          type="date"
          variant="outlined"
          fullWidth
          value={startActivity}
          onChange={(event) => setStartActivity(event.target.value)}
        />
        <TextField
          type="date"
          variant="outlined"
          fullWidth
          value={EndActivity}
          onChange={(event) => setEndActivity(event.target.value)}
        />
        <TextField
          type="date"
          variant="outlined"
          fullWidth
          value={StartRegister}
          onChange={(event) => setStartRegister(event.target.value)}
        />
        <TextField
          type="date"
          variant="outlined"
          fullWidth
          value={EndRegister}
          onChange={(event) => setEndRegister(event.target.value)}
        />
        <TextField
          type="number"
          variant="outlined"
          fullWidth
          value={Number}
          onChange={(event) => setNumber(parseInt(event.target.value))}
        />

        <Button type="submit" variant="contained" color="primary">
          Create Activity
        </Button>
      </form>
    </div>
  );
};

export default ActivityForm
