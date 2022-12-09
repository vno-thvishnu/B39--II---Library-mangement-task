import "./App.css";
import "./design.css";
import "./Create Reg/Createreg.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Open from "./Open";
import Home from "./Home";
import {  useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import Editreg from "./Create Reg/Editreg";
import Createreg from "./Create Reg/Createreg";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      setLoading(true);
      const get = await axios.get(
        "https://636405f97b209ece0f3e9710.mockapi.io/library"
      );
      setData(get.data);
      setLoading(false);
    } catch (error) {
      alert("error in fetching data");
    }
  };

  const [book, setBook] = useState();

  useEffect(() => {
    bookData();
  }, []);

  let bookData = async () => {
    try {
      setLoading(true);
      const get = await axios.get(
        "https://6391ba02b750c8d178cb5ec5.mockapi.io/books"
      );
      setBook(get.data);
      setLoading(false);
    } catch (error) {
      alert("error in fetching book");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Open
                loading={loading}
                setBook={setBook}
                setLoading={setLoading}
                setData={setData}
              />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <Home
                data={data}
                setBook={setBook}
                setData={setData}
                loading={loading}
                setLoading={setLoading}
              />
            }
          >
            <Route
              path="/home"
              element={
                <Dashboard
                  data={data}
                  setBook={setBook}
                  setData={setData}
                  loading={loading}
                  setLoading={setLoading}
                  book={book}
                />
              }
            ></Route>
            <Route
              path="/home/newreg"
              element={
                <Createreg
                  setBook={setBook}
                  setData={setData}
                  loading={loading}
                  setLoading={setLoading}
                />
              }
            ></Route>
            <Route
              path="/home/edit/:id"
              element={
                <Editreg
                  setData={setData}
                  data={data}
                  setBook={setBook}
                  loading={loading}
                  setLoading={setLoading}
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
