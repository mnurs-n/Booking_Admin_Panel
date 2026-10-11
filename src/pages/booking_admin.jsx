import './booking_admin.css';

const ArrayPractice = () => {

 const rooms = [
  { id: 1, name: "Room_1", isAvailable: true, price: 50 },
  { id: 2, name: "Room_2", isAvailable: false, price: 80 },
  { id: 3, name: "Room_3", isAvailable: true, price: 65 },
  { id: 4, name: "Room_4", isAvailable: false, price: 70 },
  { id: 5, name: "Room_5", isAvailable: false, price: 40 },
  { id: 6, name: "Room_6", isAvailable: true, price: 75 },
  { id: 7, name: "Room_7", isAvailable: true, price: 70 }
 ];

 function availableRooms(rooms) {
    return rooms.filter(room => room.isAvailable === true)
 };
 availableRooms(rooms);
 
return (
    <div className="container">
        <h1>Rooms:</h1>
         <p>{rooms[0].name}</p>
         <p>{rooms[1].name}</p>
         <p>{rooms[2].name}</p>
         <p>{rooms[3].name}</p>
         <p>{rooms[4].name}</p>
         <p>{rooms[5].name}</p>
         <p>{rooms[6].name}</p>
         <p>Available rooms number is {availableRooms(rooms).length}</p>
    </div>
);
}

export default ArrayPractice;