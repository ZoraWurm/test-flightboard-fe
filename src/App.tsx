import React, { useState } from 'react';
import './App.css';
import { Dropdown } from './dropdown/dropdown.component';
import { Room } from './room/room.component';
import { Header } from './header/header.component';
import { RoomEntry } from './room/room.model';

export function App() {
  const [rooms, setRooms] = useState<RoomEntry[]>([]);

  const roomList: RoomEntry[] = [
    { id: 1, roomName: 'Grace Hopper', isFree: true, location: 'TH13' },
    { id: 2, roomName: 'Ada Lovelance', isFree: true, location: 'TH13' },
    { id: 3, roomName: 'Kreativlab', isFree: false, location: 'OVAL' },
    { id: 4, roomName: 'Sofazimmer', isFree: true, location: 'MOIN' },
    { id: 5, roomName: 'Prinzessinenzimmer', isFree: false, location: 'MOIN' },
    { id: 6, roomName: 'Fernsehzimmer', isFree: true, location: 'TH13' },
  ];

  const handleLocationChange = (location: string): void => {
    const filteredRooms = roomList.filter(
      (result: any) => result.location === location
    );

    setRooms(filteredRooms);
  };

  return (
    <div className="App">
      <Header />
      <Dropdown handleChange={handleLocationChange} />
      <div className="roomColor">
        {rooms.map((room) => (
          <Room
            key={room.id}
            id={room.id}
            roomName={room.roomName}
            isFree={room.isFree}
            location={room.location}
          />
        ))}
      </div>
    </div>
  );
}
