const db = require('../db/dbConfig')


const getAllItems = async ()=> {
    try {
        const allItems = await db.any('SELECT * FROM todoItems')
        return allItems;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllItems
}