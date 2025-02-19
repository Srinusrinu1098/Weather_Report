import React, {  useEffect, useState } from "react";
import Header from "../Headers/Header";
import Lottie from "lottie-react";
import cloud from "@/assets/cloud.json";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import WeatherCard from "../WeatherDetails/Weather";

function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [clouds, cloudData] = useState(null);
  const [bool, bools] = useState(false);
  const [open, close] = useState(false);
  
  const [handel, handelEvents] = useState("");

  const fetchPlaces = async (input) => {
    const API_KEY = import.meta.env.VITE_GOOGLE_PLACE_APIKEY;
    const url = `https://nominatim.openstreetmap.org/search?q=${input}&format=json&limit=5`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSuggestions(data || []);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

    useEffect(() => {
      cloudData(clouds)
    }, [clouds]);

  const submitTheDetails = async (event) => {
  event.preventDefault();
  const user = localStorage.getItem("user");
  
  if (!handel) {
    return toast.error("⚠️ Please enter a valid location!");
  }
  
  if (!user) {
    close(true);
    cloudData(null);
  } else {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=df827ba81f1641a38c660925251602&q=${handel}&aqi=no`
      );
      const data = await response.json();

      if (response.ok && data.location) {
        cloudData(data); // ✅ Update weather data only if valid
      } else {
        cloudData(null);
        toast("❌ Invalid location. Please enter a correct place!");
      }
    } catch (error) {
      cloudData(null);
      toast.error("🚨 Error fetching weather data. Try again later!");
    }
  }
};


  const getLogedin = useGoogleLogin({
    onSuccess: (resp) => SaveUserInfo(resp),
    onError: (resp) => console.log(resp),
  });

  const SaveUserInfo = async (token) => {
  const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token.access_token}`;
  const options = {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      Accept: "application/json",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("user", JSON.stringify(data));
    close(false);

    if (handel) {
      try {
        const weatherResponse = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=df827ba81f1641a38c660925251602&q=${handel}&aqi=no`
        );
        const weatherData = await weatherResponse.json();

        if (weatherResponse.ok && weatherData.location) {
          cloudData(weatherData);
        } else {
          cancelButton.error("❌ Invalid location. Please enter a correct place!");
          cloudData(null);
        }
      } catch (error) {
        toast("🚨 Error fetching weather data. Try again later!");
        cloudData(null);
      }
    }
  }
};


  return (
    <div className="">
      <Header clearWeather={() => {cloudData(null);handelEvents("")}}/>
      <div className="bg-black min-h-[100vh] py-7 w-full sm:px-16 md:px-24 lg:px-32 px-4">
        <Lottie animationData={cloud} loop={true} className="h-[200px]" />
        <h1 className="text-white text-[24px] font-extrabold font-mono">
          Weather on Demand: Check Anytime, Anywhere! ⛅🌎
        </h1>
        <p className="text-white font-[14px] py-1">
          Stay updated with real-time weather forecasts tailored to your
          location. Whether you're planning a trip, heading out for work, or
          just curious about the weather, get accurate and reliable updates at
          your fingertips. Your weather, your choice—anytime, anywhere! ☀️🌧️🌍
        </p>
        <form onSubmit={submitTheDetails}>
          <div className="flex flex-col justify-center  rounded-md p-2 w-full shadow-lg border border-slate-400 my-4">
            {" "}
            <input
              type="text"
              placeholder="Enter your place 🏞️"
              value={handel}
              className="px-3 outline-none w-full bg-black text-white"
              onChange={(e) => {
                fetchPlaces(e.target.value);
                bools(true);
                handelEvents(e.target.value);
              }}
            />
            <ul className="px-3 bg-black text-white">
              {bool &&
                suggestions.map((place) => (
                  <li
                    key={place.place_id}
                    onClick={() => {
                      handelEvents(place.display_name), bools(false);
                    }}
                    className="cursor-pointer truncate w-full"
                  >
                    {place.display_name}
                  </li>
                ))}
            </ul>
          </div>
          <Button type="submit" variant="outline" className="my-4">
            Search
          </Button>
        </form>

        <Dialog open={open} onOpenChange={close}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {" "}
                <img
                  src="./SrinuWeather.jpg.webp"
                  className="w-20 h-12 mt-2"
                />{" "}
                <br />
                Sign in with Google
              </DialogTitle>
              <DialogDescription className="">
                Sign in to the app with google authontication securely
                <Button className="w-full my-3" onClick={getLogedin}>
                  {" "}
                  <FcGoogle /> Sign in with google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {clouds !== null  && (
          <>
            <WeatherCard weather={clouds} />
          </>
        )}
        

        
      </div>
    </div>
  );
}

export default Home;
