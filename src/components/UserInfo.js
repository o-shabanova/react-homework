import React from "react";
import { Avatar } from "./Avatar";
import { Adress } from "./Adress";


export class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <Avatar firstName={this.props.info.firstName} lastName={this.props.info.lastName} />
                <Adress address={this.props.info.address} />

            </div>
        )
    }
}


