// import React, { Component } from 'react';
// import logo from './logo.svg';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import './App.css';

// // react/components/App.js
// var Router       = require('react-router');
// var RouteHandler = Router.RouteHandler;
// var $            = require('jquery');
 
// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       signedIn: null
//     }
//   }

//   componentWillMount() {
//       $.ajax({
//         method: "GET",
//         url: "/auth/is_signed_in.json"
//       })
//       .done(function(data){
//         this.setState({ signedIn: data.signed_in });
//       }.bind(this));
//   }

//   getInitialState() {
//     return { signedIn: null };
//   }

//   render() {
//     return (
//       <RouteHandler signedIn={this.state.signedIn} />
//     )
//   }
// }

// export default App;

// ================

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <CssBaseline />
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h1 className="App-title">TaskMonster</h1>
//           </header>
//           <p className="App-intro">
//             To get started, edit <code>src/App.js</code> and save to reload.
//           </p>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import TaskForm from './containers/TaskForm';
import Tasks from './containers/Tasks';
import Monster from './components/Monster';
import ProgressBar from './components/ProgressBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TaskModule from './components/TaskModule';
import Navigation from './components/Navigation';
import './App.css';
import SignUpForm from './components/auth/SignUpForm'
import SignInForm from './components/auth/SignInForm'
var $            = require('jquery');

export class App extends Component {
  state = {
    taskLists: []
  };

  componentWillMount(){
       $.ajax({
        method: "GET",
        url: `http://localhost:3001/task_lists/`
        }).done(function(data){
          console.log(data)
          this.setState({
            taskLists: data.map(e => e)
          })
        }.bind(this))        
  }

  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <br/>
        <br/>
        <Grid container spacing={24} alignItems="center" direction="row" justify="flex-start">
        {this.state.taskLists.map((taskList, index)=> <Grid item xs={3}> <TaskModule lastSaved={taskList.last_saved} taskName={taskList.name} taskListId={taskList.id} /> </Grid>)}
        </Grid>
        <SignUpForm/>
        <SignInForm />
      </div>
    );
  }
}

export default App;
