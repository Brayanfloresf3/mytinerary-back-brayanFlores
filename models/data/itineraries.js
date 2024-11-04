import "dotenv/config.js";
import "../../config/dataBase.js";
import Itinerary from "../Itinerary.js";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

const itineraries = [
  // Itineraries for Paris
  {
    author: {
      name: "Juan Pérez",
      photo: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35b"),
    price: 100,
    duration: 3,
    likes: 0,
    hashtags: ["#Paris", "#EiffelTower"],
    comments: [],
    activities: [
      {
        name: "Visit the Eiffel Tower",
        description: "Enjoy panoramic views from the top of the Eiffel Tower.",
        photo:
          "https://images.pexels.com/photos/2467552/pexels-photo-2467552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Ana Martínez",
      photo: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35b"),
    price: 150,
    duration: 4,
    likes: 0,
    hashtags: ["#Paris", "#Louvre"],
    comments: [],
    activities: [
      {
        name: "Tour the Louvre Museum",
        description: "Explore famous artworks, including the Mona Lisa.",
        photo:
          "https://images.pexels.com/photos/2130610/pexels-photo-2130610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Carlos Gómez",
      photo: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35b"),
    price: 120,
    duration: 2,
    likes: 0,
    hashtags: ["#Paris", "#SeineRiver"],
    comments: [],
    activities: [
      {
        name: "Seine River Cruise",
        description: "Sail along the Seine and enjoy views of Paris.",
        photo:
          "https://images.pexels.com/photos/22498701/pexels-photo-22498701/free-photo-of-ciudad-punto-de-referencia-nubes-barcos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  // Itineraries for Sydney
  {
    author: {
      name: "Linda Wilson",
      photo: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb360"),
    price: 180,
    duration: 5,
    likes: 0,
    hashtags: ["#Sydney", "#OperaHouse"],
    comments: [],
    activities: [
      {
        name: "Sydney Opera House Visit",
        description:
          "Discover the iconic architecture and enjoy a performance.",
        photo:
          "https://images.pexels.com/photos/7549817/pexels-photo-7549817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Tom Lee",
      photo: "https://randomuser.me/api/portraits/men/90.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb360"),
    price: 130,
    duration: 3,
    likes: 0,
    hashtags: ["#Sydney", "#BondiBeach"],
    comments: [],
    activities: [
      {
        name: "Day at Bondi Beach",
        description: "Relax at one of Australia's most famous beaches.",
        photo:
          "https://images.pexels.com/photos/3686267/pexels-photo-3686267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Emily Clark",
      photo: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35b"),
    price: 160,
    duration: 4,
    likes: 0,
    hashtags: ["#Sydney", "#HarborBridge"],
    comments: [],
    activities: [
      {
        name: "Sydney Harbor Bridge Climb",
        description: "Experience an exciting climb with city views.",
        photo:
          "https://images.pexels.com/photos/2333911/pexels-photo-2333911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // Itineraries for London
  {
    author: {
      name: "Oliver Smith",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35e"),
    price: 110,
    duration: 3,
    likes: 0,
    hashtags: ["#London", "#BigBen"],
    comments: [],
    activities: [
      {
        name: "Big Ben Tour",
        description: "Visit the iconic clock and learn about its history.",
        photo:
          "https://images.pexels.com/photos/29180031/pexels-photo-29180031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Sophia Johnson",
      photo: "https://randomuser.me/api/portraits/women/86.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35e"),
    price: 90,
    duration: 2,
    likes: 0,
    hashtags: ["#London", "#BuckinghamPalace"],
    comments: [],
    activities: [
      {
        name: "Buckingham Palace Guard Change",
        description: "Witness the famous Changing of the Guard ceremony.",
        photo:
          "https://images.pexels.com/photos/21814858/pexels-photo-21814858/free-photo-of-ciudad-hombre-punto-de-referencia-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "James Brown",
      photo: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35e"),
    price: 140,
    duration: 5,
    likes: 0,
    hashtags: ["#London", "#Thames"],
    comments: [],
    activities: [
      {
        name: "Thames River Cruise",
        description: "Enjoy a cruise on the Thames River with views of London.",
        photo:
          "https://images.pexels.com/photos/16211558/pexels-photo-16211558/free-photo-of-ciudad-punto-de-referencia-edificios-rio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // Itineraries for New York
  {
    author: {
      name: "Mike Taylor",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35c"),
    price: 200,
    duration: 6,
    likes: 0,
    hashtags: ["#NYC", "#TimesSquare"],
    comments: [],
    activities: [
      {
        name: "Explore Times Square",
        description:
          "Immerse yourself in the lights and sounds of Times Square.",
        photo:
          "https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Sara Davis",
      photo: "https://randomuser.me/api/portraits/women/76.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35c"),
    price: 170,
    duration: 4,
    likes: 0,
    hashtags: ["#NYC", "#CentralPark"],
    comments: [],
    activities: [
      {
        name: "Walk in Central Park",
        description: "Relax in one of New York's most iconic parks.",
        photo:
          "https://images.pexels.com/photos/5847354/pexels-photo-5847354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Chris Evans",
      photo: "https://randomuser.me/api/portraits/men/79.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35c"),
    price: 190,
    duration: 5,
    likes: 0,
    hashtags: ["#NYC", "#StatueOfLiberty"],
    comments: [],
    activities: [
      {
        name: "Visit the Statue of Liberty",
        description:
          "Climb to the crown of the Statue of Liberty and enjoy the views.",
        photo:
          "https://images.pexels.com/photos/20820861/pexels-photo-20820861/free-photo-of-monumento-a-la-estatua-de-la-libertad-en-nueva-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // Itineraries for Rio de Janeiro
  {
    author: {
      name: "Mariana Costa",
      photo: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb362"),
    price: 140,
    duration: 3,
    likes: 0,
    hashtags: ["#Rio", "#ChristTheRedeemer"],
    comments: [],
    activities: [
      {
        name: "Christ the Redeemer",
        description: "Visit the iconic statue overlooking Rio de Janeiro.",
        photo:
          "https://images.pexels.com/photos/16129709/pexels-photo-16129709/free-photo-of-mujer-punto-de-referencia-verano-viaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Rafael Oliveira",
      photo: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb362"),
    price: 100,
    duration: 2,
    likes: 0,
    hashtags: ["#Rio", "#Copacabana"],
    comments: [],
    activities: [
      {
        name: "Copacabana Beach",
        description:
          "Enjoy a sunny day on one of the world's most famous beaches.",
        photo:
          "https://images.pexels.com/photos/2868229/pexels-photo-2868229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // Itineraries for Dubai
  {
    author: {
      name: "Ahmed Khan",
      photo: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb361"),
    price: 250,
    duration: 5,
    likes: 0,
    hashtags: ["#Dubai", "#BurjKhalifa"],
    comments: [],
    activities: [
      {
        name: "Visit Burj Khalifa",
        description: "Enjoy the view from the tallest building in the world.",
        photo:
          "https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Fatima Al-Maktoum",
      photo: "https://randomuser.me/api/portraits/women/0.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb361"),
    price: 200,
    duration: 4,
    likes: 0,
    hashtags: ["#Dubai", "#DesertSafari"],
    comments: [],
    activities: [
      {
        name: "Desert Safari",
        description: "Experience a thrilling ride through the Dubai desert.",
        photo:
          "https://images.pexels.com/photos/12214734/pexels-photo-12214734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Mohammed Ali",
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb361"),
    price: 180,
    duration: 3,
    likes: 0,
    hashtags: ["#Dubai", "#PalmJumeirah"],
    comments: [],
    activities: [
      {
        name: "Explore Palm Jumeirah",
        description: "Discover the famous artificial island of Dubai.",
        photo:
          "https://images.pexels.com/photos/28720826/pexels-photo-28720826/free-photo-of-vista-aerea-del-hotel-atlantis-en-palm-jumeirah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // Itineraries for Amsterdam
  {
    author: {
      name: "Emma de Vries",
      photo: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb364"),
    price: 120,
    duration: 3,
    likes: 0,
    hashtags: ["#Amsterdam", "#CanalTour"],
    comments: [],
    activities: [
      {
        name: "Amsterdam Canal Tour",
        description: "Cruise through the scenic canals of Amsterdam.",
        photo:
          "https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Lucas Janssen",
      photo: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb364"),
    price: 100,
    duration: 2,
    likes: 0,
    hashtags: ["#Amsterdam", "#VanGoghMuseum"],
    comments: [],
    activities: [
      {
        name: "Van Gogh Museum",
        description: "Explore the largest collection of Van Gogh's works.",
        photo:
          "https://images.pexels.com/photos/16824029/pexels-photo-16824029/free-photo-of-arte-pared-muro-cafeteria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // Itineraries for Tokyo
  {
    author: {
      name: "Hiroshi Yamamoto",
      photo: "https://randomuser.me/api/portraits/men/92.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35d"),
    price: 160,
    duration: 3,
    likes: 0,
    hashtags: ["#Tokyo", "#ShibuyaCrossing"],
    comments: [],
    activities: [
      {
        name: "Shibuya Crossing",
        description: "Experience the world's busiest pedestrian crossing.",
        photo:
          "https://images.pexels.com/photos/15829202/pexels-photo-15829202/free-photo-of-ciudad-trafico-calle-paso-de-cebra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Aiko Sato",
      photo: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35d"),
    price: 180,
    duration: 5,
    likes: 0,
    hashtags: ["#Tokyo", "#CherryBlossoms"],
    comments: [],
    activities: [
      {
        name: "Cherry Blossom Viewing",
        description: "Admire cherry blossoms at Ueno Park.",
        photo:
          "https://images.pexels.com/photos/3250578/pexels-photo-3250578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // Itineraries for Singapore
  {
    author: {
      name: "Lim Wei",
      photo: "https://randomuser.me/api/portraits/women/51.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb366"),
    price: 220,
    duration: 5,
    likes: 0,
    hashtags: ["#Singapore", "#MarinaBaySands"],
    comments: [],
    activities: [
      {
        name: "Marina Bay Sands Skypark",
        description: "Enjoy stunning views of Singapore from the Skypark.",
        photo:
          "https://images.pexels.com/photos/9022691/pexels-photo-9022691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Tan Mei Ling",
      photo: "https://randomuser.me/api/portraits/women/39.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb366"),
    price: 150,
    duration: 3,
    likes: 0,
    hashtags: ["#Singapore", "#GardensByTheBay"],
    comments: [],
    activities: [
      {
        name: "Gardens by the Bay",
        description: "Explore the unique Supertree structures and gardens.",
        photo:
          "https://images.pexels.com/photos/18787549/pexels-photo-18787549/free-photo-of-singapur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Chew Kai",
      photo: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb366"),
    price: 100,
    duration: 2,
    likes: 0,
    hashtags: ["#Singapore", "#Sentosa"],
    comments: [],
    activities: [
      {
        name: "Sentosa Island",
        description: "Relax on the beach and enjoy theme park attractions.",
        photo:
          "https://images.pexels.com/photos/9022607/pexels-photo-9022607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },

  // Itineraries for Rome
  {
    author: {
      name: "Giulia Rossi",
      photo: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35f"),
    price: 120,
    duration: 3,
    likes: 0,
    hashtags: ["#Rome", "#Colosseum"],
    comments: [],
    activities: [
      {
        name: "Colosseum Tour",
        description: "Discover the ancient Roman Colosseum.",
        photo:
          "https://images.pexels.com/photos/356966/pexels-photo-356966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Marco Bianchi",
      photo: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35f"),
    price: 90,
    duration: 2,
    likes: 0,
    hashtags: ["#Rome", "#TreviFountain"],
    comments: [],
    activities: [
      {
        name: "Trevi Fountain",
        description: "Toss a coin and make a wish at the Trevi Fountain.",
        photo:
          "https://images.pexels.com/photos/21550396/pexels-photo-21550396/free-photo-of-italia-viaje-viajar-roma.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    author: {
      name: "Lucia Conti",
      photo: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    city: new mongoose.Types.ObjectId("671918e113cc2b3c27efb35f"),
    price: 140,
    duration: 4,
    likes: 0,
    hashtags: ["#Rome", "#VaticanMuseums"],
    comments: [],
    activities: [
      {
        name: "Vatican Museums",
        description: "Admire Renaissance art and visit the Sistine Chapel.",
        photo:
          "https://images.pexels.com/photos/2676597/pexels-photo-2676597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
];

Itinerary.insertMany(itineraries)
  .then(() => {
    console.log("dateses inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });
