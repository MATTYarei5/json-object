const allUsers = [
  {
    id: 1,
    name: "Matt",
    email: "matt@devpipeline.com",
    password: "password",
  },
  {
    id: 2,
    name: "Jake",
    email: "Jake@devpipeline.com",
    password: "password",
  },
  {
    id: 3,
    name: "Ian",
    email: "Ian@devpipeline.com",
    password: "password",
  },
];

allUsers.forEach((user) => {
  console.log(`Hello, ${user.name}, your email is ${user.email}`);
});

const requestObject = new XMLHttpRequest();

function getSwapiData() {
  return new Promise((resolve, reject) => {
    requestObject.open("GET", "https://www.swapi.tech/api/planets");
    requestObject.responseType = "json";
    requestObject.send();
    requestObject.onload = () => {
      resolve(requestObject.response);
    };
    reject(new Error());
  });
}

getSwapiData()
  .then((response) => {
    console.log(response.results);
    return response.results;
  })
  .then((results) => console.log(results[2]))
  .catch((Error) => console.error(Error));

fetch("https://www.swapi.tech/api/people")
  .then((res) => res.json())
  .then((data) => console.log(data));

let userInput = prompt("Enter what you would like to search");

fetch("https://www.swapi.tech/api/" + userInput)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.error("SWAPI Error: ", err);
  });
