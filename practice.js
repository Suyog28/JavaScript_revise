// console.log("Suyog Muley");

// function maggie(water, masala, material) {
//   console.log(water + " " + masala + " " + material);
// }

// maggie("2ltr", "2packet", "gas");

// function additon(a, b) {
//   return a + b;
// }

// let names = ["SUyog", "Mayur", "Piyush", "Shubham"];

// console.log(names[2]);

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

const charecters = [
  {
    name: "Tarak Mehta",
    hieght: "172",
    mass: "90",
    eye_color: "brown",
    gender: "male",
  },
  {
    name: "Jethlaal",
    hieght: "128",
    mass: "290",
    eye_color: "green",
    gender: "male",
  },
  {
    name: "Iyer",
    hieght: "100",
    mass: "342",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "babita",
    hieght: "178",
    mass: "50",
    eye_color: "yellow",
    gender: "female",
  },
  {
    name: "tappu",
    hieght: "189",
    mass: "930",
    eye_color: "gray",
    gender: "male",
  },
];

//Get an array of all names
//console.log(charecters.map((name) => name.name));

//Get an array of objects with just name and height properties

const propertiesOfobj = charecters.map((ch) => {
  return {
    name: ch.name,
    hieght: ch.hieght,
  };
});

// console.log(propertiesOfobj);

//Get the total height of all charecters

const totalHeight = charecters.reduce((prevHeight, charecter) => {
  return prevHeight + Number(charecter.hieght);
}, 0);

// console.log(totalHeight);

//Get charecters with mass greater than 100

const massCharecter = charecters.filter((ch) => {
  return ch.mass < 100;
});

// console.log(massCharecter);

//Get all Male charecter

const getMale = charecters.filter((charecter) => charecter.gender == "male");

// console.log(getMale);

//Sort by Gender

const sortbygender = charecters.sort(function (a, b) {
  const nameA = a.gender.toUpperCase(); // ignore upper and lowercase
  const nameB = b.gender.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

// console.log(sortbygender);

//Sort By name

const sortbyName = charecters.sort(function (a, b) {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

// console.log(sortbyName);
//Does every charecter have mass more then 40?

//console.log(charecters.every((charecter) => charecter.mass > 40));

//Does every charecter have blue eyes?

// console.log(charecters.every((charecter) => charecter.eye_color == "blue"));
// // S there at least one male charecter ?
// console.log(charecters.some((charecter) => charecter.gender));
// //Is there any charecter taller than 100?
// console.log(charecters.some((charecter) => charecter.hieght > 100));



//Object 