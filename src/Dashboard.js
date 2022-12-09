import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Dashboard({ setBook, data, setData, loading, setLoading, book }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const modal2 = () => {
    setDltreg(!dltreg);
    back();
    backkk();
  };
  const [dltreg, setDltreg] = useState(false);

  function fun(w) {
    setDltreg(true);
    setRemove(w);
  }
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

  const back = async () => {
    try {
      setLoading(true);
      const getting = await axios.get(
        "https://636405f97b209ece0f3e9710.mockapi.io/library"
      );
      setData(getting.data);

      setLoading(false);
    } catch (error) {}
  };
  const [remove, setRemove] = useState();

  const modal = () => {
    setDltreg(!dltreg);
    back();
    backkk();
  };

  const del = async () => {
    try {
      const deleting = await axios.delete(
        `https://636405f97b209ece0f3e9710.mockapi.io/library/${remove}`
      );

      alert("successfully deleted, Click back");
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <>
      <div className="container mrg">
        {loading ? (
          <div class="text-center load">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-6">
                    <div class="card text dash mb-3">
                      <div class="card-header">
                        <h5>
                          <b style={{ color: "white" }}>{book.length}</b>
                        </h5>{" "}
                      </div>
                      <div class="card-body cbody">
                        <h5 class="card-title">
                          <b>
                            Books
                            <br /> Added
                          </b>
                        </h5>
                        <i class="fa-solid fa-book   fa-4x size"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="card text dash mb-3">
                      <div class="card-header">
                        <h5>
                          <b style={{ color: "white" }}>{data.length}</b>
                        </h5>
                      </div>
                      <div class="card-body cbody">
                        <h5 class="card-title">
                          <b>
                            Id
                            <br /> Register
                          </b>{" "}
                        </h5>
                        <i class="fa-solid fa-id-card-clip fa-4x size"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div class="card text dash mb-3">
                      <div class="card-header">
                        <h5>
                          <b style={{ color: "white" }}>{data.length}</b>
                        </h5>
                      </div>
                      <div class="card-body cbody">
                        <h5 class="card-title">
                          <b>
                            Browwed <br />
                            Books
                          </b>
                        </h5>
                        <i class="fa-solid fa-bookmark fa-4x size"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="card text dash mb-3">
                      <div class="card-header">
                        <h5>
                          <b style={{ color: "white" }}>6</b>
                        </h5>
                      </div>
                      <div class="card-body cbody">
                        <h5 class="card-title">
                          <b>
                            Due <br /> Books
                          </b>{" "}
                        </h5>
                        <i class="fa-solid fa-paperclip fa-4x size"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6  bgg">
                <Slider {...settings}>
                  {book.map((get) => {
                    return (
                      <>
                        <div className="row m-0">
                          <div class="col ">
                            <img src={get.avatar} className="obj" alt="..." />
                          </div>
                          <div class="col hig ">
                            <h5>
                              <b>Name:&nbsp;</b>
                              {get.bookname}
                            </h5>
                            <p>
                              <b>Author:&nbsp;</b>
                              {get.Author}
                            </p>
                            <p>
                              <b>About: &nbsp;</b>
                              <a target="_blank" href={get.about}>
                                Click here!
                              </a>
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="row   ">
              <div className="row ">
                <div className="col-12">
                  <table class="table">
                    <thead
                      style={{
                        backgroundColor: " #1a4345",
                        color: "whitesmoke",
                      }}
                    >
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Book</th>
                        <th>Days they need</th>
                        <th>Genre</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((get, index) => {
                        return (
                          <tr>
                            <th>{index + 1}</th>
                            <td>{get.name}</td>
                            <td>{get.email}</td>
                            <td>{get.book}</td>
                            <td>{get.days}</td>
                            <td>{get.genres}</td>
                            <td>
                              {" "}
                              <Link
                                to={`/home/edit/${get.id}`}
                                className=" btn linkicon"
                              >
                                <i class="fa-solid fa-pen-to-square  "> </i>{" "}
                                &nbsp; Edit
                              </Link>
                            </td>
                            <td>
                              <button
                                className="btn linkicon"
                                onClick={() => {
                                  fun(get.id);
                                }}
                              >
                                <i class="fa-solid fa-trash linkicon"></i>{" "}
                                &nbsp; Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {dltreg ? (
        <>
          <div className="empty">
            <div className="emptybg" onClick={modal}></div>
          </div>
          <div className="reg">
            <div className="reg-overlay">
              <div className="reg-content2  ">
                <h2>Delete Register</h2>

                <div className="row justify-content-around  mt-3 mb-3">
                  <h5 style={{ color: "white" }}>
                    Are you sure you want to delete this Register
                  </h5>
                  <div className="col-3 justify-content-center bbtn">
                    <button class="input-group-text span1" onClick={del}>
                      Confrim Delete
                    </button>
                  </div>
                </div>
              </div>
              <Link className="btn bbtn1" onClick={modal2}>
                Back
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Dashboard;
