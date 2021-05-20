const formatDistance = require('date-fns/formatDistance');
const subDays = require('date-fns/subDays');

module.exports = {
    format_date: (date) => {
        formatDistance(subDays(new Date(), 3), new Date(date), { addSuffix: true })
    },
    if_eq: (arg1, arg2) => {
        console.log(arg1, arg2);
        return arg1 === arg2
    }
    
}