import React from 'react';
import './App.css';
import MyCounter from "./components/MyCounter";

function App() {
    return (
        <div className="App">
            <div>
                <h2>Default counter</h2>
                <MyCounter/>
            </div>
            <hr/>
            <div>
                <h2>Counter with predefined value</h2>
                <MyCounter value={5}/>
            </div>
        </div>
    );
}

export default App;
