const { User } = require('../models');

const users = [
    {
        id:1,
        email: "hotBoy30@email.com",
        password:"Heavy45",
       
    },
    {
        id:2,
        email: "diorMe@email.com",
        password:"BigLoto45",
        
    },
    {
        id:3,
        email: "shePradaMe@email.com",
        password:"jellyBean009"
    },
    {
        id:4,
        email: "gucciheadband@email.com",
        password:"headBandIsgucci$$$"
    },
    {
        id:5,
        email: "louieLofer@email.com",
        password:"getMoney$$$"
    },
    {
        id:6,
        email: "angelHippie@email.com",
        password:"onePiece$$$"
    },
    {
        id:7,
        email: "bigBallergetter@email.com",
        password:"AttheTop$$$"
    },
    {
        id:8,
        email: "godBlesstheMailMan@email.com",
        password:"TerkeysIN33"
    },
    
]

const seedUsers = () => User.bulkCreate(users, {
    individualHooks: true,
    returning: true
});

module.exports = seedUsers;