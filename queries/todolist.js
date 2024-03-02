const db = require('../db/dbConfig')


const getAllItems = async ()=> {
    try {
        const allItems = await db.any('SELECT * FROM todoItems')
        return allItems;
    } catch (error) {
        return error;
    }
}

const getItemsByMonthAndYear = async (month,year) => {
    try {
        const itemsByDate = await db.any('SELECT * FROM todoItems WHERE EXTRACT(MONTH FROM due_date) = $1 AND EXTRACT(YEAR FROM due_date) = $2', [month,year])
        return itemsByDate
    }catch(error){
        return error
    }
}

const getOneItem = async (id) => {
    try {
        const oneItem = await db.one('SELECT * FROM todoItems WHERE id=$1', id );
        return oneItem;
    } catch (error) {
        return error
    }
}

const createItem = async (item) => {
    const {name, notes, completed, due_date, time_of_day, date_of_completion, weekly} = item
    try {
        const createdItem = await db.one('INSERT INTO todoItems (name, notes, completed, due_date, time_of_day, date_of_completion, weekly) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *', [name, notes, completed, due_date, time_of_day, date_of_completion, weekly]);
        return createdItem;
    } catch (error) {
        return error;
    }
}

const updateItem = async (item) => {
    const {name, notes, completed, due_date, time_of_day, date_of_completion, weekly ,id} = item
    try {
        const updateItem = await db.one('UPDATE todoItems SET name=$1, notes=$2, completed=$3, due_date=$4, time_of_day=$5, date_of_completion=$6, weekly=$7 WHERE id=$8 RETURNING *', [name, notes, completed, due_date, time_of_day, date_of_completion, weekly,id])
        return updateItem
    } catch (error) {
        return error;
    }
}

const deleteItem = async (id) => {
    try {
        const deletedItem = await db.one('DELETE FROM todoItems WHERE id=$1 RETURNING *', id);
        return deletedItem;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllItems,
    getOneItem,
    updateItem,
    createItem,
    deleteItem,
    getItemsByMonthAndYear
}