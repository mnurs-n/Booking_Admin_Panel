import './booking_admin.css';

const ArrayPractice = () => {

 const rooms = [
  { id: 1, name: "Room_1", isAvailable: true, capacity: 4,price: 50 },
  { id: 2, name: "Room_2", isAvailable: false, capacity: 4, price: 50 },
  { id: 3, name: "Room_3", isAvailable: true, capacity: 4, price: 50 },
  { id: 4, name: "Room_4", isAvailable: false, capacity: 4, price: 50 },
  { id: 5, name: "Room_5", isAvailable: false, capacity: 4, price: 50 },
  { id: 6, name: "Room_6", isAvailable: true, capacity: 4, price: 50 },
  { id: 7, name: "Room_7", isAvailable: true, capacity: 4, price: 50 }
 ];

 const availableRooms = rooms.filter((room) => {
   return room.isAvailable === true;
 });

 const averagePrice = rooms.reduce((total, room) => {
    return (total + room.price / rooms.length)
 }, 0)
 console.log(averagePrice)

 const availableCapacity = availableRooms.reduce((sum, room) => {
     return sum + room.capacity; 
 }, 0);
 console.log(availableCapacity)

 const numberOfAvailableRooms = rooms.reduce((sum, room) => {
    if (room.isAvailable) {
        return sum + 1;
    }
    return sum;
 },0)
 console.log(numberOfAvailableRooms)
 
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
         <p>Available rooms number is {availableRooms.length}</p>
    </div>
);
}

export default ArrayPractice;