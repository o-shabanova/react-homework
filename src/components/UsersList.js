import React from 'react';
import { UserInfo } from "./UserInfo";


export class UsersList extends React.Component {
    render() {
        return (
            <div>

                <ul>
                    {this.props.users.map(user => <li><UserInfo info={user} /></li>)}
                </ul>
            </div >
        )
    }

}