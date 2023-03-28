import {Bar, Button, FlexBox, Label, Page, ProductSwitch} from "@ui5/webcomponents-react"
import React from "react";
import Icons from "../utils/Icons";
import ManagementTile from "../tile/ManagementTile";

const ManagementPage = () => {

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
                    <ManagementTile
                        icon={Icons.LIST}
                        title={'Mapping Table'}
                        onClick={() => {
                            alert("Hoi")
                        }}
                    />
                    <ManagementTile
                        icon={Icons.UPLOAD}
                        title="Upload CSV"
                        onClick={() => {
                            alert("hoi")
                        }}
                    />
                    <ManagementTile
                        icon={Icons.PROCESS}
                        title={"Processes"}
                        onClick={() => {
                            alert("hoi")
                        }}
                    />
                </ProductSwitch>
            </FlexBox>
        </Page>
    );
}

export default ManagementPage;