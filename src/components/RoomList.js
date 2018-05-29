import React, { Component } from 'react';

class RoomList extends Component{
  constructor(props){
    super(props);
    this.state = {
      rooms: [],
      name: ""
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    })
  }
  
  handleChange(e) {
    this.setState({ name: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit triggered");
    this.createRoom(this.state.name);
    this.setState({name: ""});
    console.log("name:" + this.state.name);
    console.log("New Room Created");
  }

  createRoom(newRoomName) {
    console.log(newRoomName);
    this.roomsRef.push({
      name: newRoomName,
    })
    console.log("createRoom triggered");
  }

  render() {
    return (
      <section className="room-list">
        <div className="room-names">
          <ul>
            {this.state.rooms.map( (room,index) => {
              return (
                <li key={index}>{room.name}</li>
              )
            })}
          </ul>
        </div>
        <div className="room-form">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Create Room:
              <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
            </label>
            <input type="submit" />
          </form>
        </div> 
      </section>
    );
  }
}

export default RoomList;
