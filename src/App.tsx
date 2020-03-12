import React from 'react';
import './App.css';
import Header from './header/header.component';
import Room from './Room/room.component';

function App() {
  const roomList: any[] = [
    { id: 1, isFree: true },
    { id: 2, isFree: true },
    { id: 3, isFree: false },
    { id: 4, isFree: true },
  ];

  return (
    <div className="App">
      {roomList.map((room) => (
        <Room key={room.id} isFree={room.isFree} />
      ))}
    </div>
  );
}
export default App;
