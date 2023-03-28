import {Bar, Button, FlexBox, Label, Page, ProductSwitch, ProductSwitchItem} from "@ui5/webcomponents-react"
import React from "react";
import Icons from "../utils/Icons";

const ManagementPage = () => {

    const tileDimensions = {height: "180px", width: "180px"};

    return (
        <Page
            header={
                <Bar startContent=
                         {
                             <Button icon={Icons.HOME} title="Go Home" onClick={() => alert("GO HOME!")}/>
                         }
                >
                    <Label>Management</Label>
                </Bar>
            }
            style={{
                height: '100vh'
            }}
        >
            <FlexBox
                style={{
                    paddingTop: '100px',
                    margin: '50px 0',
                }}
                justifyContent="Center"
            >
                <ProductSwitch>
                    <ProductSwitchItem
                        icon={Icons.LIST}
                        titleText="Mapping Table"
                        onClick={() => {
                            alert("hoi")
                        }}
                        style={tileDimensions}>
                    </ProductSwitchItem>
                    <ProductSwitchItem
                        icon={Icons.UPLOAD}
                        titleText="Upload CSV"
                        onClick={() => {
                            alert("hoi")
                        }}
                        style={tileDimensions}>
                    </ProductSwitchItem>
                    <ProductSwitchItem
                        icon={Icons.PROCESS}
                        titleText={"Processes"}
                        onClick={() => {
                            alert("hoi")
                        }}
                        style={tileDimensions}>
                    </ProductSwitchItem>
                </ProductSwitch>
            </FlexBox>
        </Page>
    );
}

export default ManagementPage;