import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";

function Header({ clearWeather }) {
  const [user, setUser] = useState(null);
  const [open, close] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const navegate = useNavigate()

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null); 
    setLogoutDialogOpen(false)
    clearWeather()
    navegate("/")
    
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [localStorage.getItem("user")]);

  const login = () => {
    close(true);
  };

  const getLogedin = useGoogleLogin({
    onSuccess: (resp) => SaveUserInfo(resp),
    onError: (resp) => console.log(resp),
  });

  const SaveUserInfo = async (token) => {
    const url = `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${token.access_token}`;
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
      setTimeout(() => {
        close(false);
      }, 500);
      setUser(localStorage.getItem("user"));
    }
  };

  return (
    <div className="flex justify-between px-7 items-center py-3 shadow-lg bg-gray-500">
      <img src="./SrinuWeather.jpg.webp" className="h-11 w-20 rounded-full" />
      {user ? (
        <AlertDialog  open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <AlertDialogTrigger className="bg-black text-white">Logout</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
            <AlertDialogDescription>
            You will be signed out from your account. To access your data again, you will need to log in.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick ={logout}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      ) : (
        <Button onClick={login}>Login</Button>
      )}

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
      
    </div>
  );
}

export default Header;
