import React from 'react';
import './room.component.css';

type RoomProps = {
  isFree: boolean;
};

export function Room({ isFree }: RoomProps) {
  return (
    <div className="room">
      <div className={isFree === true ? 'roomIsOpen' : 'roomIsBusy'}>
        <div className={isFree === true ? 'styleOpen' : 'styleBusy'}>
          {isFree ? 'Open' : 'Busy'}
        </div>
        <div>Raumnummer</div>
        <div>Uhrzeit</div>
        <div>Titel/Name</div>
      </div>
    </div>
  );
}
