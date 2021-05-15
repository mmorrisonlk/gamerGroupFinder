const { User } = require('../models');

const users= [
    {
        id:1,
        name: "honey bunz",
        email: "hotBoy30@email.com",
        password:"Heavy45",
       
    },
    {
        id:2,
        name: "deez skittles",
        email: "diorMe@email.com",
        password:"BigLoto45",
        
    },
    {
        id:3,
        name: "cam garret",
        email: "shePradaMe@email.com",
        password:"jellyBean009"
    },
    {
        id:4,
        name: "jackie chan",
        email: "gucciheadband@email.com",
        password:"headBandIsgucci$$$"
    },
    {
        id:5,
        name:"bruce lee",
        email: "louieLofer@email.com",
        password:"getMoney$$$"
    },
    {
        id:6,
        name: "kirk cousins",
        email: "angelHippie@email.com",
        password:"onePiece$$$"
    },
    {
        id:7,
        name: " kim possible",
        email: "bigBallergetter@email.com",
        password:"AttheTop$$$"
    },
    {
        id:8,
        name:"jessie clash",
        email: "godBlesstheMailMan@email.com",
        password:"TerkeysIN33"
    },
    
]

const seedUsers = async ()  => User.bulkCreate(users);

module.exports = seedUsers;