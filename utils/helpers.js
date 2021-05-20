const formatDistanceToNow = require('date-fns/formatDistanceToNow');

module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    if_eq: (arg1, arg2) => {
        console.log(arg1, arg2);
        return arg1 === arg2
    },
    formatTime: function(date) 
    {
        return formatDistanceToNow(new Date(date), { addSuffix: true })
    }
    
}