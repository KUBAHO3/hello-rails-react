import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from "./greeting";
import Home from "./home";
const App = ()=>{

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="greetings" component={<Greeting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}

export default App;