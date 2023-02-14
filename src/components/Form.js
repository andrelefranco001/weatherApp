import React, { useState } from "react";
import NavBar from "./NavBar";

function Form({ newLocation }) {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({city});
    if(city === '' || !city) 
    return;
    newLocation(city);
  }

  return (
    <div className="form">
      <NavBar />
      <form onSubmit={onSubmit}>
        <div className="input">
          <input type='text' className="input__form" placeholder="City Name" onChange={(e) =>setCity(e.target.value)}/>
          <button className="button__input" type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
