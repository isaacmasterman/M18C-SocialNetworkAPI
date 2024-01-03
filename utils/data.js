// utils/data.js
const users = [
    {
      username: "alice",
      email: "alice@example.com"
    },
    {
      username: "bob",
      email: "bob@example.com"
    },
    {
      username: "charlie",
      email: "charlie@example.com"
    },
    {
      username: "dave",
      email: "dave@example.com"
    },
    {
      username: "eve",
      email: "eve@example.com"
    }
];
  
const thoughts = [
    {
      thoughtText: "This is a great day!",
      username: "alice"
    },
    {
      thoughtText: "I love coding!",
      username: "bob"
    },
    {
      thoughtText: "Mongoose makes MongoDB easy.",
      username: "charlie"
    },
    {
      thoughtText: "I'm learning so much at bootcamp.",
      username: "dave"
    },
    {
      thoughtText: "Can't wait for the weekend!",
      username: "eve"
    }
];
  
module.exports = { users, thoughts };
  