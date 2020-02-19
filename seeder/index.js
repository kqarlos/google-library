//dependencies
let mongoose = require("mongoose");
// getting our books model
let db = require("../models");

//connecting to our db that we named in our server file
mongoose.connect("mongodb://localhost/library", {
  useNewUrlParser: true,
  useFindAndModify: false
});
//seed variable to be sent
let librarySeed ={
    title:"Red fish blue fish",
    author: "dr seuss",
    picture: "https://prodimage.images-bn.com/pimages/9780394800134_p0_v3_s550x406.jpg",
    description: "the best book ever",
    link: "https://www.barnesandnoble.com/w/one-fish-two-fish-red-fish-blue-fish-dr-seuss/1101011554#/"
}
//adding our seed variable to our books collection/library db
 db.create(librarySeed)
  .then(data => {
  console.log("eggs",data)
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });