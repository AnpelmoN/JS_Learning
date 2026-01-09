// const movie = {
//   title: "Madagascar",
//   year: 2005,
//   rating: 8.0,
//   genre: "Comedy",
// };

// const { title, ...other } = movie;

// const year = movie.year;
// const genre = movie.genre;
// const rating = movie.rating;

// console.log(`Title: ${title}, Year: ${year}, Genre: ${genre}`);

// const game = {
//   title: "Rogue Legacy",
//   releaseYear: 2013,
//   rating: 4.5,
//   genre: "Rogue-lite",
// };

// const { title, ...details } = game;

const releaseYear = game.releaseYear;
const genre = game.genre;

console.log(` Release Year: ${releaseYear}, Genre: ${genre} , Title: ${title}`);

const hotel = {
  hotelName: "Grand Plaza",
  contacts: {
    phone: "+123456789",
    email: "grandplaza@example.com",
  },
  stars: 5,
  capacity: 200,
};

const {
  hotelName,
  contacts: {
    email: { asjdia },
  },
} = hotel;

const hotelEmail = hotel.contacts.email.asjdia;

console.log(`Email: ${hotelEmail}`);



const title = document.querySelector("[data-title]");

console.dir(title);

const rgb = [255, 100, 155];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`); 

const [, ,green] = rgb;
console.log(`Green: ${green}`);