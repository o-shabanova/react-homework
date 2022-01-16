import React from 'react';
import './App.css';
import { UsersList } from "./components/UsersList";

const userInfo = {
  firstName: 'Michael',
  lastName: 'Jackson',
  address: {
    country: 'UA',
    city: 'Ivano-Frankivsk',
    street: 'Nezalezhnosti, 1',
    postIndex: '76000'
  }
};

const userInfoList = [{
  firstName: 'Michael',
  lastName: 'Jackson',
  address: {
    country: 'UA',
    city: 'Ivano-Frankivsk',
    street: 'Nezalezhnosti, 1',
    postIndex: '76000'
  },
  active: true
},
{
  firstName: 'Kira',
  lastName: 'Najtli',
  address: {
    country: 'UA',
    city: 'Kyiv',
    street: 'Holosiivska, 1',
    postIndex: '12345'
  },
  active: false
},
{
  firstName: 'Britni',
  lastName: 'Spirs',
  address: {
    country: 'UA',
    city: 'Lviv',
    street: 'Kamianetska, 1',
    postIndex: '34567'
  },
  active: true
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.filterUsers = this.filterUsers.bind(this);
    this.state = {
      deleteInactive: false,
      users: userInfoList
    }
  }

  filterUsers(e) {
    this.setState({
      deleteInactive: e.target.checked,
      users: (e.target.checked) ? userInfoList.filter(user => user.active === true) : userInfoList
    });
  }

  render() {
    return (
      <div>
        <div>
          <input type="checkbox" onClick={this.filterUsers} />
          <label>Показувати тільки активних користувачів</label>
        </div>
        <div>
          <UsersList users={this.state.users} />
        </div>
      </div >
    );
  }
}

export default App;
