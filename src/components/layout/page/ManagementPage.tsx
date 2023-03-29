import {Bar, Button, FlexBox, Label, Page, ProductSwitch} from "@ui5/webcomponents-react"
import React from "react";
import ManagementTile from "../../tile/ManagementTile";
import {ManagementPageProps} from "./ManagementPageProps";

const ManagementPage = (props: ManagementPageProps) => {

    return (
        <Page
            header={
                <Bar startContent=
                         {
                             <Button icon={props.header.icon} title="Go Home" onClick={props.header.onClick}/>
                         }
                >
                    <Label>{props.header.headerTitle}</Label>
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
                    {
                        props.tiles.map((tile, index) => (
                            <ManagementTile
                                key={index}
                                icon={tile.icon}
                                title={tile.title}
                                onClick={tile.onClick}
                            />
                        ))
                    }
                </ProductSwitch>
            </FlexBox>
        </Page>
    );
}

export default ManagementPage;