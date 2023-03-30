import React, {Component} from "react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import Icons from "./components/utils/Icons";
import {PageHeaderProps} from "./components/layout/header/PageHeaderProps";
import {ManagementTileProps} from "./components/tile/ManagementTileProps";
import HeaderFooterPage from "./components/layout/page/HeaderFooterPage";
import {Button, ThemeProvider} from "@ui5/webcomponents-react";
import {HeaderFooterPageProps} from "./components/layout/page/HeaderFooterPageProps";
import {PageFooterProps} from "./components/layout/footer/PageFooterProps";

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

    footer: PageFooterProps[] = [
        {
        title: "Approve",
        type: "Positive",
        onClick: () => {
            alert("Approve!")
        }
    },
        {
            title: "Approve",
            type: "Positive",
            onClick: () => {
                alert("Approve!")
            }
        }
    ]

    children() {
        return (<Button>Hallo</Button>)
    }

    headerFooterPageProps: HeaderFooterPageProps = {
        header: this.managementHeader,
        footer: this.footer,
        children: this.children()
    }


    render() {
        return (
            <ThemeProvider>
                {/*<ManagementPage tiles={this.tiles} header={this.managementHeader}/>*/
                }
                <HeaderFooterPage header={this.headerFooterPageProps.header} footer={this.footer}>
                    {this.headerFooterPageProps.children}
                </HeaderFooterPage>
            </ThemeProvider>
        )
            ;
    }

}

export default App;
