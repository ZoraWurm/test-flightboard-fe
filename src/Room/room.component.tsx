import React from 'react';
import './room.component.css';
import { RoomEntry } from './room.model';

export function Room({ roomName, isFree }: RoomEntry) {
  return (
    <div className={isFree === true ? 'room roomIsOpen' : 'room roomIsBusy'}>
      <div className={isFree === true ? 'styleOpen' : 'styleBusy'}>
        {isFree ? 'Open' : 'Busy'}
      </div>
      <div>{roomName}</div>
      <div>Uhrzeit</div>
      <div>Titel/Name</div>
    </div>
  );
}
