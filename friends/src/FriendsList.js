import React, { Component } from 'react';
import './App.css';

class FriendsList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searchText:'',
      orderBy:'name',
      order:'ascending'
    }
  }
  render() {
    return (
      <div>
      	<form className="form-inline searchForm" role="form">
      		<div className="form-group">

      			<input value={this.state.searchText} className="form-control" placeholder="Search For Friends" />

                  <select value={this.state.orderBy}className="input-medium">
                      <option value = 'name'>Name</option>
                      <option value = 'friend_count'>#Friends</option>
                  </select>

                  <select value = {this.state.order} className="input-medium">
                      <option value='decending'>Descending</option>
                      <option value='ascending'>Ascending</option>
                  </select>

      		</div>
      	</form>

      	<ul>
      	</ul>
      </div>
    );
  }
}

export default FriendsList;
