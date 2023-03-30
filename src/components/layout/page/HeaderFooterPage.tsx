import React from "react";
import {Bar, Button, Label, Page} from "@ui5/webcomponents-react";
import {HeaderFooterPageProps} from "./HeaderFooterPageProps";

/**
 * In order to use this component, it expects at least 3 props.
 *
 * @param header to set the header format
 * @param footer to set the footer format. This only accept properties to create a button
 * @param children content to be displayed
 * @constructor
 */
const HeaderFooterPage = ({header, footer, children}: HeaderFooterPageProps) => {
    return (
        <Page
            style={{
                height: '100vh'
            }}
            header={
                <Bar startContent=
                         {
                             <Button icon={header.icon} title="Go Home" onClick={header.onClick}/>
                         }
                >
                    <Label>{header.headerTitle}</Label>
                </Bar>
            }
            footer=
                {
                    <Bar
                        design={"FloatingFooter"}
                        endContent=
                            {
                                footer.map((element, index) => {
                                    return (<Button key={index} design={element.type}
                                                    onClick={element.onClick}>{element.title}</Button>)
                                })
                            }
                    />
                }
        >
            {children}
        </Page>
    );
}

export default HeaderFooterPage;