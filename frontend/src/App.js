import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActivitiesContainer from "./components/ActivitiesContainer/ActivitiesContainer";
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <a href="/activities/logout">Logout!</a>
        <ActivitiesContainer/>
      </div>
    );
  }
}

export default App;
