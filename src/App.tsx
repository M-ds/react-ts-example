import './App.css';
import {ThemeProvider} from "@ui5/webcomponents-react";
import React, {Component} from "react";
import ManagementPage from "./components/layout/ManagementPage";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

class App extends Component {

    render() {
        return (
            <ThemeProvider>
                <ManagementPage/>
            </ThemeProvider>
        );
    }

}

export default App;
