import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFormik } from "formik";

function Home({ setData, setLoading, setBook }) {
  const [newbook, setNewbook] = useState(false);
  function nbook(nreg) {
    setNewbook(nreg);
  }

  const modal = () => {
    setNewbook(!newbook);

    back();
    backkk();
  };
  const modal2 = () => {
    setNewbook(!newbook);
    back();
    backkk();
  };
  const backkk = async () => {
    try {
      setLoading(true);
      const getting = await axios.get(
        "https://6391ba02b750c8d178cb5ec5.mockapi.io/books"
      );
      setBook(getting.data);

      setLoading(false);
    } catch (error) {
      alert("error fetching books");
    }
  };
  const back = async () => {
    try {
      setLoading(true);
      const getting = await axios.get(
        "https://636405f97b209ece0f3e9710.mockapi.io/library"
      );
      setData(getting.data);

      setLoading(false);
    } catch (error) {
      alert("error fetching register");
    }
  };

  const formik = useFormik({
    initialValues: {
      bookname: "",
      Author: "",
      avatar: "",
      about: "",
    },
    onSubmit: async (values) => {
      try {
        const getting = await axios.post(
          "https://6391ba02b750c8d178cb5ec5.mockapi.io/books",
          values
        );
        alert("succesfully created new register");
        formik.resetForm();
      } catch (error) {
        alert("error");
      }
    },
  });
  return (
    <>
      <div className="topbar ">
        <div className="col-3 green">
          <h3>Secret BOOKRACKS</h3>{" "}
        </div>
        <div className="container ">
          <div className="row me-5">
            <div className="col-11">
              <div className="row  justify-content-md-center">
                <div className="col-3">
                  <i class="fa-solid fa-bars"></i> &nbsp; Dashboard
                </div>
                <Link className="col-3  anb" onClick={nbook}>
                  <i class="fa-solid fa-book"></i>
                  &nbsp; Add New Books
                </Link>
                <Link to={"/home/newreg"} className="col-3 anb">
                  <i class="fa-solid fa-id-card-clip "></i>
                  &nbsp; New Register
                </Link>
              </div>
            </div>

            <Link to={"/"} className="col-1  green1">
              Logout
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
      {newbook ? (
        <>
          <div className="empty">
            <div className="emptybg" onClick={modal}></div>
          </div>
          <div className="reg">
            <div className="reg-overlay">
              <div className="reg-content ">
                <h2>Add New Book</h2>
                <form>
                  <div className="container mt-5">
                    <div className="row justify-content-around mb-3">
                      <div className="col-5">
                        <div className="row">
                          <div class="input-group ">
                            <span
                              class="input-group-text spanb"
                              id="basic-addon2"
                            >
                              Book Name
                            </span>

                            <input
                              type={"text"}
                              name="bookname"
                              value={formik.values.bookname}
                              onChange={formik.handleChange}
                              class="form-control"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="row">
                          <div class="input-group ">
                            <span
                              class="input-group-text spanb"
                              id="basic-addon2"
                            >
                              Author Name
                            </span>

                            <input
                              type={"text"}
                              name="Author"
                              value={formik.values.Author}
                              onChange={formik.handleChange}
                              class="form-control"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                      <div className="row mb-3">
                        <div class="input-group ">
                          <span
                            class="input-group-text spanb"
                            id="basic-addon2"
                          >
                            Image Url
                          </span>

                          <input
                            type={"text"}
                            name="avatar"
                            value={formik.values.avatar}
                            onChange={formik.handleChange}
                            class="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div class="input-group ">
                          <span
                            class="input-group-text spanb"
                            id="basic-addon2"
                          >
                            Details Url
                          </span>

                          <input
                            type={"text"}
                            name="about"
                            value={formik.values.about}
                            onChange={formik.handleChange}
                            class="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-around  mt-3 mb-3">
                      <div className="col-3 justify-content-center bbtn">
                        <button
                          class="input-group-text span1"
                          onClick={formik.handleSubmit}
                          type={"submit"}
                          id="basic-addon2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <Link to="/home" className="btn bbtn1" onClick={modal2}>
                Back
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Home;
