import {ProductSwitchItem} from "@ui5/webcomponents-react";
import React from "react";
import {ManagementTileProps} from "./ManagementTileProps";

/**
 * Management tile which can be used to execute a redirect to a different page.
 * This object can only be used within a ProductSwitch component.
 *
 * @param props - ManagementTileProps
 * @constructor
 */
const ManagementTile = (props: ManagementTileProps) => {

    const tileDimension = {
        height: "180px",
        width: "180px"
    };

    return (
        <ProductSwitchItem
            icon={props.icon}
            titleText={props.title}
            onClick={props.onClick}
            style={tileDimension}
        />
    )
}

export default ManagementTile;