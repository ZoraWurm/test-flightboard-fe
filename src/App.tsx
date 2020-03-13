import React from 'react';
import './App.css';
import { Room } from './room/room.component';
import { Header } from './header/header.component';

export function App() {
  const roomList: any[] = [
    { id: 1, isFree: true },
    { id: 2, isFree: true },
    { id: 3, isFree: false },
    { id: 4, isFree: true },
    { id: 5, isFree: true },
    { id: 6, isFree: true },
    { id: 7, isFree: true },
    { id: 8, isFree: true },
    { id: 9, isFree: true },
  ];

  return (
    <div className="App">
      <Header />
      <div className="roomColor">
        {roomList.map((room) => (
          <Room key={room.id} isFree={room.isFree} />
        ))}
      </div>
    </div>
  );
}
