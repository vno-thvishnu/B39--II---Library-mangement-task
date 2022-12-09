import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Editreg({ data, setData, setLoading, setBook }) {
  const { id } = useParams();
  const index = data.findIndex((x) => x.id == id);
  const update = data[index];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      book: "",
      days: "",
      genres: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "please enter valid name";
      }
      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        errors.name = "name must be between 3 to 15 character";
      }
      if (values.email === "") {
        errors.email = "please enter valid email";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "please enter a valid email";
      }
      if (values.book === "") {
        errors.book = "please enter Book name";
      }
      if (values.book && values.book.length <= 2) {
        errors.book = "please enter Book name more than 2 character";
      }

      if (values.days === "") {
        errors.days = "please enter days you needed";
      }
      if (values.days && values.days > 6) {
        errors.days = " given only for 6 days & below";
      }
      if (values.genres === "") {
        errors.genres = "select any one genre";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const getting = await axios.put(
          `https://636405f97b209ece0f3e9710.mockapi.io/library/${update.id}`,
          values
        );
        alert("succesfully edited register");
        // formik.resetForm()
      } catch (error) {
        alert("error");
      }
    },
  });
  useEffect(() => {
    formik.setValues(update);
  }, []);
  const backkk = async () => {
    try {
      setLoading(true);
      const getting = await axios.get(
        "https://6391ba02b750c8d178cb5ec5.mockapi.io/books"
      );
      setBook(getting.data);

      setLoading(false);
    } catch (error) {
      // alert("error fetching books")
    }
  };
  const back = async () => {
    try {
      backkk();
      setLoading(true);
      const getting = await axios.get(
        "https://636405f97b209ece0f3e9710.mockapi.io/library"
      );
      setData(getting.data);

      setLoading(false);
    } catch (error) {
      // alert("error fetching library")
    }
  };
  return (
    <>
      <div className="empty">
        <div className="emptybg"></div>
      </div>
      <div className="reg">
        <div className="reg-overlay">
          <div className="reg-content">
            <h2>Edit Existing Register</h2>

            <form>
              <div className="container-fluid mt-3 ">
                <form>
                  <div className="row justify-content-around mb-3">
                    <div className="col-5">
                      <div className="row">
                        <div class="input-group ">
                          <span
                            class="input-group-text spanb"
                            id="basic-addon2"
                          >
                            Name
                          </span>

                          <input
                            type={"text"}
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            class={`form-control
                              ${
                                formik.touched.name && formik.errors.name
                                  ? "error-box"
                                  : ""
                              }
                              ${
                                formik.touched.name && !formik.errors.name
                                  ? "success-box"
                                  : ""
                              }
                              `}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                        </div>
                        {formik.touched.name && formik.errors.name ? (
                          <span style={{ color: "red" }}>
                            {formik.errors.name}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="row">
                        <div class="input-group ">
                          <span
                            class="input-group-text spanb"
                            id="basic-addon2"
                          >
                            Email
                          </span>

                          <input
                            type={"text"}
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            class={`form-control
                              ${
                                formik.touched.email && formik.errors.email
                                  ? "error-box"
                                  : ""
                              }
                              ${
                                formik.touched.email && !formik.errors.email
                                  ? "success-box"
                                  : ""
                              }
                              `}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                          <span style={{ color: "red" }}>
                            {formik.errors.email}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-around mb-3">
                    <div className="col-5">
                      <div class="input-group ">
                        <span class="input-group-text spanb" id="basic-addon2">
                          Book Title
                        </span>

                        <input
                          type={"text"}
                          name="book"
                          value={formik.values.book}
                          onChange={formik.handleChange}
                          class={`form-control
                              ${
                                formik.touched.book && formik.errors.book
                                  ? "error-box"
                                  : ""
                              }
                              ${
                                formik.touched.book && !formik.errors.book
                                  ? "success-box"
                                  : ""
                              }
                              `}
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      {formik.touched.book && formik.errors.book ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.book}
                        </span>
                      ) : null}
                    </div>
                    <div className="col-5">
                      <div class="input-group ">
                        <span class="input-group-text spanb" id="basic-addon2">
                          No.of. Days They Needed
                        </span>

                        <input
                          type={"number"}
                          name="days"
                          value={formik.values.days}
                          onChange={formik.handleChange}
                          class={`form-control
                              ${
                                formik.touched.days && formik.errors.days
                                  ? "error-box"
                                  : ""
                              }
                              ${
                                formik.touched.days && !formik.errors.days
                                  ? "success-box"
                                  : ""
                              }
                              `}
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                      </div>
                      {formik.touched.days && formik.errors.days ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.days}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="row justify-content-around m-1">
                    <div className="row justify-content-around mb-2 ">
                      <div className="col-2">
                        <span
                          class="input-group-text spanb justify-content-center"
                          id="basic-addon2"
                        >
                          Genre
                        </span>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-2 ">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type={"radio"}
                            name="genres"
                            value="Fiction"
                            onChange={formik.handleChange}
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Fiction
                          </label>
                        </div>
                      </div>
                      <div className="col-2">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type={"radio"}
                            name="genres"
                            value="Non-Fiction"
                            onChange={formik.handleChange}
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Non-Fiction
                          </label>
                        </div>
                      </div>
                      <div className="col-2">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type={"radio"}
                            name="genres"
                            value="Drama"
                            onChange={formik.handleChange}
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Drama
                          </label>
                        </div>
                      </div>
                      <div className="col-2">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type={"radio"}
                            name="genres"
                            value="Poetry"
                            onChange={formik.handleChange}
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Poetry
                          </label>
                        </div>
                      </div>
                      <div className="col-2">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type={"radio"}
                            name="genres"
                            value="Thriller"
                            onChange={formik.handleChange}
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Thriller
                          </label>
                        </div>
                      </div>
                    </div>
                    {formik.touched.genres && formik.errors.genres ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.genres}
                      </span>
                    ) : null}
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
                </form>
              </div>
            </form>
          </div>
          <Link to="/home" className="btn bbtn1" onClick={back}>
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default Editreg;
