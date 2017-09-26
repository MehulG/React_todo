var React = require('react');
require('./css/todoItem.css');

var Todoitem = React.createClass({
  render: function(){
    return(
      <li>
        <div className = 'todo-item'>
          <span className = 'item-name'>
            {this.props.item}
          </span>
          <span className = 'item-delete' onClick = {this.handleDelete}>
          x
          </span>
        </div>
      </li>
    );
  },

  //custom functions

  handleDelete: function(){
    //console.log('ghj');
    this.props.onDelete(this.props.item);
  }
});

module.exports = Todoitem;
