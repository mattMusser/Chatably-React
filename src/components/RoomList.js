import React, { Component } from 'react';

class RoomList extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  ComponentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    })
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
      </section>
    );
  }
}

export default RoomList;
