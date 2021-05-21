const {Group} = require('../models');

const groups = [
    {
        id:1,
        title: "Overwatch Session?",
        content:" Id like ot play some overwatch later today any one down to join?",
        gamerTag:" PSN: bigSnipe223",
        user_id:1,
        timeFrom: "5 pm",
        timeTo: " 7pm",
        gameName:"OverWatch",
        currentPlayers:3,
        maxPlayers:5,
        difficulty:"competitive"

    },
    {
        id:2,
        title: "Lets play Some Red Dead Redemption?",
        content:" Lets go back in time and RP some red dead?",
        gamerTag:" Xbox: jellyDoeSlinder",
        user_id:4,
        timeFrom: "1 pm",
        timeTo: " 7pm",
        gameName:"Red Dead Redemption",
        currentPlayers:3,
        maxPlayers:4,
        difficulty:"casual"
    },
    {
        id:3,
        title: "Any one wanna play Madden for Money?",
        content:" Im the best madden player lets bet!",
        gamerTag:" PSN: malterHeatLeg",
        user_id:7,
        timeFrom: "9 am",
        timeTo: " 7 pm",
        gameName:"Madden",
        currentPlayers:2,
        maxPlayers:2,
        difficulty:"competitive"
    },
]

const seedGroups = async () =>  Group.bulkCreate(groups);

module.exports = seedGroups;
