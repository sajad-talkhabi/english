// const options = (object) => {
//     let newObject = {};
//     console.log(newObject);
//     for (let index = 0; index < Object.keys(object).length; index++) {
//         const element = Object.keys(object)[index];
//         newObject[index] = object;
//         console.log('fs',element, newObject);
//     }
// }
const Filter = ({ filters, column, type }) => {
    let query = {}
    if (type === 'like' && filters[column].length) {
        query['$text'] = { $search: filters[column] }
        // options(query)
    }
    if (type === 'in' && filters[column].length) {
        query[column] = { $in: filters[column].split(',') }
        // options(query)
    }

    return query

};
module.exports = Filter;