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
    id: "",
  });

  const [errors, setErrors] = useState({
    titleError: "",
    descriptionError: "",
    urlError: "",
    priceError: "",
  });

  const validat = (valuess) => {
    const message = {};

    if (valuess.title === "") {
      message.title = "title is required";
    }
    if (valuess.description === "") {
      message.description = "description is required";
    }
    if (valuess.url === "") {
      message.url = "url is required";
    }
    if (valuess.price === "") {
      message.price = "price is required";
    }

    return message;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validat(values);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const newobj = values;
    newobj["id"] = uuidv4();
    setValues(newobj);
    const proarr = products;
    proarr[products.length] = values;
    setProducts(proarr);
    console.log("all products", proarr);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h1>Add products</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={values.title}
            onChange={handleChange}
          />
          {errors.title === "title is required" ? (
            <div className="error">{errors.title}</div>
          ) : null}
          <input
            type="text"
            name="description"
            value={values.description}
            placeholder="description"
            onChange={handleChange}
          />
          {errors.description === "description is required" ? (
            <div className="error">{errors.description}</div>
          ) : null}
          <input
            type="text"
            name="url"
            value={values.url}
            placeholder="url"
            onChange={handleChange}
          />
          {errors.url === "url is required" ? (
            <div className="error">{errors.url}</div>
          ) : null}
          <input
            type="number"
            name="price"
            value={values.price}
            placeholder="price"
            onChange={handleChange}
          />
          {
            (errors.price = "" ? null : (
              <div className="error">{errors.price}</div>
            ))
          }

          <button className="btn">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
