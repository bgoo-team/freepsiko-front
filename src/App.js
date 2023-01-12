import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/Theme.js'
import Navbar from "./components/navbar/navbar.js";
import { Home } from "./components/home/home.js";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/register";
import { Activation } from "./components/activation/activation";
import { SendActivationMail } from "./components/activation/sendActivationMail";
import { Profile } from "./components/profile/profile.js";
import { Account } from "./components/account/account.js";
import { Security } from "./components/security/security.js";
import { Jobs } from "./components/job/job";
import { Help } from "./components/help/help.js";
import style from "./main.css"
import { Explore } from "./components/explore/explore.js";
import { Footer } from "./components/footer/footer.js";
import React, { useState,useEffect } from "react";
import { ForgotPassword } from "./components/forgotPassword/forgotPassword.js";
export function App() {
  return (
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Navbar/>
          <Routes>
            <Route  exact path="/" element={<Home/>} />
            <Route  exact path="/login" element={<Login />} />
            <Route  exact path="/register" element={<Register/>} />
            <Route  exact path="/activation" element={<Activation/>} />
            <Route  exact path="/send-activation" element={<SendActivationMail/>} />
            <Route  exact path="/forgot-password" element={<ForgotPassword/>} />
            <Route  exact path="/profile" element={<Profile/>} />
            <Route  exact path="/account" element={<Account/>} />
            <Route  exact path="/security" element={<Security/>} />
            <Route  exact path="/help" element={<Help/>} />
            <Route  exact path="/jobs" element={<Jobs/>} />
            <Route  exact path="/explore" element={ <Explore/>} />
          </Routes>
          <Footer/>
        </ChakraProvider>
      </BrowserRouter>

    );
  }

