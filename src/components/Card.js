import React from "react";
import Spinner from "./Spinner";

function Card({ loadingData, showData, weather, forecast }) {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    let url = '';
    let iconUrl = '';

    let iconUrl3

  if (loadingData) {
    return <Spinner />;
  }

  if(showData){
    url = 'http://openweathermap.org/img/w/'
    iconUrl = url + weather.weather[0].icon + '.png'
  }

  return (
    <div className="card">
      {showData === true ? (
        <div className="card__container">          
            <div className="card__row">
                
              <div className="card__colm4">
                <img src="https://images.pexels.com/photos/2569471/pexels-photo-2569471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img__city" alt="No Data"/>
                <h3 className="card__title">{weather.name}</h3>
                <p className="card__date">{date}</p>
                <h1 className="card__temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                <p className="card__desc"><img src={iconUrl} alt='icon'/>{weather.weather[0].description}</p>              
                
                <div className="card__colm8">                
                <div className="card__body">
                    <h5 className="card__text">Maximum Temperature: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                    <h5 className="card__text">Minimum Temperature: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                    <h5 className="card__text">Thermal Sensation: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                    <h5 className="card__text">Humidity: {weather.main.humidity}%</h5>
                    <h5 className="card__text">Wind Speed: {weather.wind.speed}m/s</h5>
                </div>
              </div>
              
              </div>
            </div>
          
        </div>
      ) : (
        <h2 className="text__ligth">Welcome</h2>
      )}
    </div>
  );
}

export default Card;
