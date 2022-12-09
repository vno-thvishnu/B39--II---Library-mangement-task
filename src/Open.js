import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import lib from "./assets/lib.jpg";
function Open({ setLoading, setData, setBook }) {
  const rld = async () => {
    try {
      backkk();
      setLoading(true);
      const getting = await axios.get(
        "https://636405f97b209ece0f3e9710.mockapi.io/library"
      );
      setData(getting.data);
      setLoading(false);
    } catch (error) {
      alert("error fetching teacher");
    }
  };

  const backkk = async () => {
    try {
      setLoading(true);
      const getting = await axios.get(
        "https://6391ba02b750c8d178cb5ec5.mockapi.io/books"
      );
      setBook(getting.data);

      setLoading(false);
    } catch (error) {}
  };
  return (
    <div className="open">
      <div className="insideopen ">
        <div className="rowtab">
          <div className="forh">
            <p style={{ color: "#588c66" }}>
              Secret<b style={{ color: "#588c66" }}>&nbsp;Bookracks</b>
            </p>
          </div>
          <div className="rowtab1">
            <h6>package</h6>
            <h6>others</h6>
            <h6>news</h6>
            <h6>contacts</h6>
          </div>
        </div>
        <div className="insideopen2">
          <div className="opencontent">
            <h5 style={{ color: "black", paddingLeft: "5px" }}>
              Library mangement
            </h5>
            <h5 style={{ color: "grey", paddingLeft: "5px" }}>(BOOKRACKS)</h5>
            <p
              style={{
                marginTop: "15px",
                fontSize: "12px",
                paddingLeft: "5px",
              }}
            >
              A library is a collection of materials, books or media that are
              accessible for use <br /> and not just for display purposes. A
              library provides physical or digital access materials, and may be
              a physical location or a virtual space, or both
            </p>

            <p style={{ color: "#588c66", marginTop: "20px" }}>
              <b>Admin</b> login here
            </p>
            <Link
              to={"/home"}
              className="btn  "
              onClick={rld}
              style={{ backgroundColor: "#1a4345", color: "white" }}
            >
              {" "}
              Next Page
            </Link>
          </div>
          <div className="openimage">
            <img style={{ width: "570px", height: "275px" }} src={lib} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Open;
