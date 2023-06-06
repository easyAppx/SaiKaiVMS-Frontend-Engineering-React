import React from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Home from "./Pages/Home/Home";
import reportWebVitals from "reportWebVitals";

const App = () => {
    return(
        <div style={{'background':'#fef3f3'}}>
            <Home/>
        </div>
    );
}

export default App;
reportWebVitals();