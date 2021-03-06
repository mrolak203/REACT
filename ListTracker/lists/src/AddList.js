import React, { Component } from 'react';

class AddList extends Component {

constructor(props){
  super(props);
  this.state = {list: ''};

}
  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading 

      //update state of List
      this.setState({list: this.refs.id.value},
        function() {
          this.props.addList(this.state);
        });
      
  }

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div id='addList'>
      <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID'></input>
      </label>
      </div><br />
      <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;
