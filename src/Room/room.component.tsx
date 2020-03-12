import React from './node_modules/react';
import './room.component.css';

type RoomProps = {
  isFree: boolean;
};

function Room({ isFree }: RoomProps) {
  return (
    <div className="room">
      <div>{isFree ? 'Open' : 'Busy'}</div>
      <div>Raumnummer</div>
      <div>Uhrzeit</div>
      <div>Titel/Name</div>
    </div>
  );
}

export default Room;
