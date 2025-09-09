const mongoose = require('mongoose');

main()
    .then(() => {
    console.log("connection succesful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
// Define a schema 
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// create a collection 
const User = mongoose.model("User", userSchema);

User.deleteOne({name: "adam", }).then((res) => {
  console.log(res);
});

// update in document 

// User.updateOne({name: "tony"}, {age: 45}).then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })  

// find method 
// User.find({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const user2 = new User ({
//   name: "eve",
//   email: "eve@yahoo.com",
//   age: 30,
// });

// user2
//     .save()
//       .then((res) => {
//   console.log(res);
// });




