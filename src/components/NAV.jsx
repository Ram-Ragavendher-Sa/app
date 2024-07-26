import "./NAV.css";
import { Parallax } from "react-parallax";
import Woman from "./Woman.jpg";
import City from "./City.jpg";
import fly from "./fly.jpg";
import Home from "./Home";
import { Paper } from "@mui/material";

function NAV() {
  return (
    <div className="NAV">
      <Home/>
      <Parallax strength={300} bgImage={Woman}>
        <div className="content">
          <div>
            <Paper className="Pep"><p className="text-content">Your one stop renting Sollution .<br/>
            All your renting needs in one stop..!</p></Paper>
          </div>
        </div>
      </Parallax>

      <Parallax strength={300}  bgImage={City}>
        <div className="content">
          <div>
          <Paper className="Pep1"><p className="text-content1">Your one stop renting Sollution .<br/>
            All your renting needs in one stop..!</p></Paper>
          </div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={fly}>
      <div>
            <Paper className="Pep"><p className="text-content">Your one stop renting Sollution .<br/>
            All your renting needs in one stop..!</p></Paper>
      </div>
      </Parallax>

      <div className="content"></div>
    </div>
  );
}

export default NAV;