import React, { useState } from "react";
import UseApp from "./../hooks/app";
const { v4: uuidv4 } = require("uuid");

const Form = () => {
  const { products, setProducts } = UseApp();
  const [values, setValues] = useState({
    title: "",
    description: "",
    url: "",
    price: "",
    _id: "",
  });
  const [errors, setErrors] = useState({
    titleError: "",
    descriptionError: "",
    urlError: "",
    priceError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors(validat(values));
    console.log(errors);
  };

  const btnClick = () => {
    setErrors(validat(values));
  };

  function validat(values) {
    const message = {};
    if (values.title === "") {
      message.title = "title is required";
    }
    if (values.description === "") {
      message.description = "description is required";
    }
    if (values.url === "") {
      message.url = "url is required";
    }
    if (values.price === "") {
      message.price = "price is required";
    }

    return message;
  }
  const handleSubmit = (e) => {};

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add new Product</h1>

        <input
          type="text"
          className="red"
          placeholder="title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        {errors.title === "title is required" ? <p>{errors.title}</p> : null}

        <input
          type="text"
          className="red"
          placeholder="description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        {errors.description === "description is required" ? (
          <p>{errors.description}</p>
        ) : null}
        <input
          type="text"
          className="red"
          placeholder="Url"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        {errors.url === "url is required" ? <p>{errors.url}</p> : null}
        <input
          type="text"
          className="red"
          placeholder="Price"
          name="price"
          value={values.price}
          onChange={handleChange}
        />
        {(errors.price = "" ? null : <p>{errors.price}</p>)}
        <button className="btn" onClick={btnClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
