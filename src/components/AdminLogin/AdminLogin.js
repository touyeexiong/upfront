import React from 'react';
import './AdminLogin.css';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <h2>Appointments</h2>
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:


class InfoPage extends React.Component {

  state = {
    a: "Name: Tou Xiong Phone: 6513549476 Service: 3 Room Special",
    b: "testing",
    c: "",
    color: "",
    check: '✓'
  }

  deleteAppt = (event) => {
    console.log('Appointment Confirmed', event.target.value);

    if (this.state.check == "✓") {
      this.setState({
        color: 'red',
        check: 'X',
      })
    } else{
      this.setState({
        color: 'red',
        check: '✓',
      })
    }

    // this.setState({
    //   color: 'red',
    //   check: 'X',
    // })
  }

  render() {
    return (
      <div>
        <h2><center>Appointments</center></h2>
        <button onClick={this.deleteAppt} value="✓">{this.state.check}</button><p>{this.state.a}</p> 

      </div>
    )
  }
}

export default InfoPage;
