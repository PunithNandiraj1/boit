import React from "react";
import "./Home.css";
import Logo from "../../images/logoboit.PNG";
import Highlights from "../Highlights/Highlights";
import Roadmap from "../Roadmap/Roadmap";
import Tokenomics from "../Tokenomics/Tokenomics";
import Faq from "../Faq/Faq";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="stats-container">
          <img className="logo" alt="Logo" src={Logo} />

          <div className="stats">
            <div className="supply">
              <h3>Total Supply </h3>
              <button> 100,000,000 </button>
            </div>
            <div className="holder">
              <h3>Holders </h3>
              <button> 204 </button>
            </div>
            <div className="price">
              <h3> Price </h3>
              <button> 0.1 USD </button>
            </div>
            <div className="burn">
              <h3> Burned </h3>
              <button> 1234 </button>
            </div>
          </div>
        </div>

        <div className="content-container">
          <h2 className="content">
            {" "}
            A <span> Deflationary Utility Token </span> that has the answer to
            "Wen Lambo?" <br /> - Right now{" "}
          </h2>
          <div className="swap-container">
            <div className="wrapper">
              <h5>BOIT</h5>
              <button className="connect-wallet"> Connect to a wallet </button>
            </div>
            <div className="wrapper2">
              <SettingsIcon />
              <MoreVertIcon />
            </div>
            <div className="pool">
                <div className="head">
                    <h2>Swap</h2>
                    <h2>Pool</h2>
                </div>
            <div className="convert">
                <h7>From</h7>
            <div>
            <input placeholder="0.0"></input>
            <label> Sol </label>
            <select></select>
            </div>
            </div>

            <div className="convert">
                <h7>To</h7>
                <div>
                <input placeholder="0.0"></input>
                <label > Sol </label>
                <select></select>
            </div>
            </div>

            <button className="connect-wallet"> Connect to a wallet </button>
             
            </div>
          </div>
        </div>
      </div>
      <Highlights/>
        <Roadmap/>
        <Tokenomics/>
        <Faq/>
    </>
  );
};

export default Home;
