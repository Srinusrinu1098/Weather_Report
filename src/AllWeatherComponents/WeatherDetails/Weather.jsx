import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import map from "@/assets/map.json";
import React from "react";
import { Link } from "react-router-dom";


const WeatherCard = (props) => {
    const {weather} = props
   
    
  return (
    <>
    <div className="flex items-center justify-center lg:hidden ">
      <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-white w-full text-center">
        {/* Location */}
        <Link to ={`https://www.google.com/maps/search/?api=1&query=${weather.location.name}`} target ="_blank"><Lottie animationData={map} loop={true} className="h-[100px]" />
        </Link>
 
        <h2 className="text-2xl font-bold">{weather.location.name}, {weather.location.country}</h2>
        <p className="text-sm">{weather.location.localtime}</p>

        {/* Weather Icon & Temperature */}
        <img src={`https:${weather.current.condition.icon}`} alt="Weather Icon" className="w-20 mx-auto mt-2" />
        <h1 className="text-4xl font-bold">{weather.current.temp_c}°C</h1>
        <p className="text-lg">{weather.current.condition.text}</p>

        {/* Weather Details */}
        <div className="mt-4 text-sm space-y-1">
          <p>Feels Like: {weather.current.feelslike_c}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind: {weather.current.wind_kph} km/h ({weather.current.wind_dir})</p>
          <p>Pressure: {weather.current.pressure_mb} mb</p>
        </div>
      </div>
    </div>

    <div className="hidden items-center justify-center sm:hidden md:hidden lg:flex bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-white w-full text-center">
    <Link to ={`https://www.google.com/maps/search/?api=1&query=${weather.location.name}`} target ="_blank"><Lottie animationData={map} loop={true} className="h-[200px]" /></Link>
 
    <div>
    <p>Wind: {weather.current.wind_kph} km/h ({weather.current.wind_dir})</p>
    <p>Pressure: {weather.current.pressure_mb} mb</p>
    
    </div>
      
       <div>
        <h2 className="text-2xl font-bold">{weather.location.name}, {weather.location.country}</h2>
        <p className="text-sm">{weather.location.localtime}</p>
        
        <img src={`https:${weather.current.condition.icon}`} alt="Weather Icon" className="w-40 mx-auto mt-2" />
        <h1 className="text-4xl font-bold">{weather.current.temp_c}°C</h1>
        <p className="text-lg">{weather.current.condition.text}</p>
        </div>
        {/* Weather Details */}
        <div className="mt-4 text-sm space-y-1">
          <p>Feels Like: {weather.current.feelslike_c}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
         
        </div>
      
    </div>
    </>
  );
};

export default WeatherCard;
