var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;

require('./css/index.css')
//module require
var Todoitem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

//create components

var App = React.createClass({
  render: function(){
    return(
      <Router history = {browserHistory}>
        <Route path = {'/'} component = {TodoComponent}></Route>
        <Route path = {'/about'} component = {About}></Route>
      </Router>
    );
  }
});


var TodoComponent = React.createClass({

  getInitialState: function(){
    return{
      todo : ['eat', 'sleep', 'repeat'],
    };
  },//getInitialState


  render: function(){

    var todos = this.state.todo;
    todos = todos.map(function(item,index){
      return(
        <Todoitem item = {item} key = {index} onDelete = {this.onDelete}/>
      );
    }.bind(this));
    return(
      <div>
        <Link to = {'/about'}>About</Link>
        <p>I am quite busy today...</p>
        <AddItem onAdd = {this.onAdd}/>
        <ul>
          {todos}
        </ul>
      </div>
    );
  },//render

  //custom functions
  onDelete: function(item){
      var updatedtodos = this.state.todo.filter(function(val,index){
      return item !== val;
    });
    this.setState({
      todo: updatedtodos
    });
  },
  onAdd: function(item){
    var updatedtodos = this.state.todo;
    updatedtodos.push(item);
    this.setState({
      todo: updatedtodos
    });
  }
});



//put component into html
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
