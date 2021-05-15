const { Comment } = require('../models');

const comments = [
    {
        id:1,
        user_id:2,
        group_id:1,
        content: "hey Id like to join you for a match!"

    },
    {
        id:2,
        user_id:3,
        group_id:1,
        content: "I wont be able to get on until you start, ill still try to join though."
    },
    {
        id:3,
        user_id:5,
        group_id:2,
        content: "I have to Down load the game but ill get on."
    },
    {
        id:4,
        user_id:6,
        group_id:2,
        content: "I havent played this game in years ill definetly get on."
    },
    {
        id:5,
        user_id:8,
        group_id:3,
        content: "Do you play on pc?"
    },
    {
        id:6,
        user_id:7,
        group_id:3,
        content: "no I play on PlayStation"
    },
]


const seedComments = async () => Comment.bulkCreate(comments);

module.exports = seedComments;