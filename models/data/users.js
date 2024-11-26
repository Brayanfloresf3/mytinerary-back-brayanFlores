import "dotenv/config.js";
import "../../config/dataBase.js";
import User from "../User.js";
import bcrypt from "bcryptjs";
  
const users = [
  {
    name: "John",
    lastname: "Doe",
    email: "john.doe@email.com",
    password: "securePass1",
    photoUrl: "https://randomuser.me/api/portraits/men/37.jpg",
    country: "USA",
    isOnline: false,
  },
  {
    name: "Jane",
    lastname: "Smith",
    email: "jane.smith@email.com",
    password: "mySecret12",
    photoUrl: "https://randomuser.me/api/portraits/women/30.jpg",
    country: "Canada",
    isOnline: true,
  },
  {
    name: "Carlos",
    lastname: "Gomez",
    email: "carlos.gomez@email.com",
    password: "password34",
    photoUrl: "https://randomuser.me/api/portraits/men/38.jpg",
    country: "Mexico",
    isOnline: false,
  },
  {
    name: "Maria",
    lastname: "Rodriguez",
    email: "maria.rodriguez@email.com",
    password: "strongPwd45",
    photoUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    country: "Colombia",
    isOnline: true,
  },
  {
    name: "Pedro",
    lastname: "Martinez",
    email: "pedro.martinez@email.com",
    password: "uniquePass56",
    photoUrl: "https://randomuser.me/api/portraits/men/39.jpg",
    country: "Argentina",
    isOnline: false,
  },
  {
    name: "Laura",
    lastname: "Sanchez",
    email: "laura.sanchez@email.com",
    password: "topSecret67",
    photoUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    country: "Chile",
    isOnline: true,
  },
  {
    name: "Sofia",
    lastname: "Torres",
    email: "sofia.torres@email.com",
    password: "secure1234",
    photoUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    country: "Costa Rica",
    isOnline: false,
  },
  {
    name: "Diego",
    lastname: "Castro",
    email: "diego.castro@email.com",
    password: "safePass78",
    photoUrl: "https://randomuser.me/api/portraits/men/40.jpg",
    country: "Venezuela",
    isOnline: true,
  },
  {
    name: "Valentina",
    lastname: "Medina",
    email: "valentina.medina@email.com",
    password: "password90",
    photoUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    country: "Peru",
    isOnline: true,
  },
  {
    name: "Andres",
    lastname: "Herrera",
    email: "andres.herrera@email.com",
    password: "hiddenPass12",
    photoUrl: "https://randomuser.me/api/portraits/men/40.jpg",
    country: "Uruguay",
    isOnline: false,
  },
];

const hashedUsers = users.map(user => ({
  ...user,
  password: bcrypt.hashSync(user.password, 10),
}));

User.insertMany(hashedUsers)
  .then(() => {
    console.log("Usuarios insertados exitosamente");
  })
  .catch(error => {
    console.error("Error al insertar los usuarios:", error);
  });