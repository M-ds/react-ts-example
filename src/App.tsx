import './App.css';
import MyCounter from "./components/MyCounter";
import {ThemeProvider} from "@ui5/webcomponents-react";
import React, {Component} from "react";

class App extends Component {

    render() {
        return (
            <ThemeProvider>
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
            </ThemeProvider>
        );
    }

}

export default App;
