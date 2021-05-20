const formatDistance = require('date-fns/formatDistance');
const subDays = require('date-fns/subDays');

module.exports = {
    format_date: (date) => {
        formatDistance((new Date(), 3), new Date(date), { addSuffix: true })
    }
}