import React, { useState } from "react";
import "./pages.css";
import Login from "../components/Login";
import Register from "../components/Register";
import { Paper } from "@mui/material";

const Home = () => {
  const [state, setState] = useState(false);
  return (
    <div className="home">
      <video preload="auto" autoplay={"autoplay"} loop muted>
        <source src="./video/home2.mp4"></source>
      </video>
      <div className="content">
        <div className="welcome-items">
          <Paper
            elevation={24}
            sx={{
              background: "transparent",
              marginRight: "100px",
              borderRadius: "40px",
            }}
          >
            {state ? (
              <Login state={state} setState={setState} />
            ) : (
              <Register state={state} setState={setState} />
            )}
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Home;
