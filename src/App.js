import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          shadow="true"
          height={3}
          transitionTime={300}
          loaderSpeed={300}
          waitingTime={1000}
          progress={progress}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={12}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={12}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={12}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/General"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={12}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={12}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={12}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={12}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={12}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
