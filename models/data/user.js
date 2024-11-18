import "dotenv/config.js";
import "../../config/dataBase.js";
import User from "../User.js";

const users = [
  {
    name: "Ana García",
    email: "ana.garcia@email.com",
    address: "Main Street 123",
    phone: 3001234567,
    password: "password123",
    online: true,
  },
  {
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@email.com",
    address: "Central Avenue 456",
    phone: 3009876543,
    password: "password456",
    online: false,
  },
  {
    name: "María López",
    email: "maria.lopez@email.com",
    address: "Carrera 7 #89-12",
    phone: 3002345678,
    password: "password789",
    online: true,
  },
  {
    name: "Juan Martínez",
    email: "juan.martinez@email.com",
    address: "Street 15 #34-56",
    phone: 3003456789,
    password: "passwordabc",
    online: false,
  },
  {
    name: "Laura Sánchez",
    email: "laura.sanchez@email.com",
    address: "Avenue 45 #67-89",
    phone: 3004567890,
    password: "passworddef",
    online: true,
  },
  {
    name: "Pedro Ramírez",
    email: "pedro.ramirez@email.com",
    address: "Carrera 23 #45-67",
    phone: 3005678901,
    password: "passwordghi",
    online: true,
  },
  {
    name: "Sofia Torres",
    email: "sofia.torres@email.com",
    address: "Street 56 #78-90",
    phone: 3006789012,
    password: "passwordjkl",
    online: true,
  },
  {
    name: "Diego Castro",
    email: "diego.castro@email.com",
    address: "Avenue 89 #12-34",
    phone: 3007890123,
    password: "passwordmno",
    online: false,
  },
  {
    name: "Valentina Medina",
    email: "valentina.medina@email.com",
    address: "Carrera 12 #34-56",
    phone: 3008901234,
    password: "passwordpqr",
    online: true,
  },
  {
    name: "Andrés Herrera",
    email: "andres.herrera@email.com",
    address: "Street 78 #90-12",
    phone: 3009012345,
    password: "passwordstu",
    online: false,
  },
];

User.insertMany(users)
  .then(() => {
    console.log("Data inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });
