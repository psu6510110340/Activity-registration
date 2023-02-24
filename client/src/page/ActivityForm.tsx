import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import { Button, TextField } from "@mui/material";

const ActivityForm = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startActivity, setStartActivity] = useState<string>("");
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const userData = localStorage.getItem("user") || "";
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setToken(parsedUserData.jwt);
    }
  }, []);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    // Convert StartActivity to a date
    const startDate = new Date(startActivity);

    try {
      const response = await fetch("http://localhost:1337/api/activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          StartActivity: startDate.toDateString().substring(0, 10), // Use the date value in yyyy-mm-dd format
        }),
      });

      if (!response.ok) {
        // Handle error response
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
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
        <Button type="submit" variant="contained" color="primary">
          Create Activity
        </Button>
      </form>
    </div>
  );
};

export default ActivityForm;
