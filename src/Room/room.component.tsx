import React from 'react';
import './room.component.css';

type RoomProps = {
  isFree: boolean;
};

export function Room({ isFree }: RoomProps) {
  return (
    <div className="room">
      <div>{isFree ? 'Open' : 'Busy'}</div>
      <div>Raumnummer</div>
      <div>Uhrzeit</div>
      <div>Titel/Name</div>
    </div>
  );
}
