const {Group} = require('../models');

const groups = [
    {
        id:1,
        title: "Overwatch Session?",
        content:" Id like ot play some overwatch later today any one down to join?",
        gamerTag:" PSN: bigSnipe223",
        user_id:1,
        timeFrom: "5 pm",
        timeTo: " 7pm"

    },
    {
        id:2,
        title: "Lets play Some Red Dead Redemption?",
        content:" Lets go back in time and RP some red dead?",
        gamerTag:" Xbox: jellyDoeSlinder",
        user_id:4,
        timeFrom: "1 pm",
        timeTo: " 7pm"
    },
    {
        id:3,
        title: "Any one wanna play Madden for Money?",
        content:" Im the best madden player lets bet!",
        gamerTag:" PSN: malterHeatLeg",
        user_id:7,
        timeFrom: "9 am",
        timeTo: " 7 pm"
    },
]

const seedGroups = () => Group.bulkCreate(groups);

module.exports = seedGroups;