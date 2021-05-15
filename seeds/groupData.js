const {Group} = require('../models');

const groups = [
    {
        id:1,
        tittle: "Overwatch Session?",
        content:" Id like ot play some overwatch later today any one down to join?",
        gamerTag:" PSN: bigSnipe223",
        user_id:1,
        comment_id:[1,2]
    },
    {
        id:2,
        tittle: "Lets play Some Red Dead Redemption?",
        content:" Lets go back in time and RP some red dead?",
        gamerTag:" Xbox: jellyDoeSlinder",
        user_id:4,
        comment_id:[3,4]
    },
    {
        id:3,
        tittle: "Any one wanna play Madden for Money?",
        content:" Im the best madden player lets bet!",
        gamerTag:" PSN: malterHeatLeg",
        user_id:7,
        comment_id:[5,6]
    },
]

const seedGroups = () => Group.bulkCreate(seedGroups);

module.exports = seedGroups;