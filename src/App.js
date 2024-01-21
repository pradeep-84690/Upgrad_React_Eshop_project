import "./App.css";
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import Products from "./pages/Products";

function App() {
    const [loggedIn, setLoggedIn] = useState(true);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                        }
                    />
                    <Route
                        path="/log-in"
                        element={
                            <LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                        }
                    />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route
                        path="/products"
                        element={
                            <Products
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                            />
                        }
                    />
                    <Route path="/redirect-login" element={<Navigate to="/log-in" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
