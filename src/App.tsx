import './App.css';
import {ThemeProvider} from "@ui5/webcomponents-react";
import React, {Component} from "react";
import ManagementPage from "./components/layout/page/ManagementPage";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import Icons from "./components/utils/Icons";
import {PageHeaderProps} from "./components/layout/header/PageHeaderProps";
import {ManagementTileProps} from "./components/tile/ManagementTileProps";

class App extends Component {

    tiles: ManagementTileProps[] = [
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

    managementHeader: PageHeaderProps = {
        icon: Icons.HOME,
        headerTitle: "Management",
        onClick: () => {
            alert("Go Home");
        }
    }

    render() {
        return (
            <ThemeProvider>
                <ManagementPage tiles={this.tiles} header={this.managementHeader}/>
            </ThemeProvider>
        );
    }

}

export default App;
