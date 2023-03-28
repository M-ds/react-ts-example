import './App.css';
import {ThemeProvider} from "@ui5/webcomponents-react";
import React, {Component} from "react";
import ManagementPage from "./components/layout/ManagementPage";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import Icons from "./components/utils/Icons";

class App extends Component {

    tiles = [
        {
            icon: Icons.LIST, title: "Mapping Tabel", onClick: () => {
                alert("mapping tabel")
            }
        },
        {
            icon: Icons.UPLOAD, title: "Upload CSV", onClick: () => {
                alert("upload csv")
            }
        },
        {
            icon: Icons.PROCESS, title: "Processes", onClick: () => {
                alert("processed")
            }
        }
    ]

    render() {
        return (
            <ThemeProvider>
                <ManagementPage tiles={this.tiles}/>
            </ThemeProvider>
        );
    }

}

export default App;
