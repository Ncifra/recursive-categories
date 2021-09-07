const db = require("../models");
const {Op} = require("sequelize");

const findParentCategories = async () => {
    return db.Category.findAll({
        where: {
            parent_id: {
                [Op.eq]: null
            }
        }
    })
};
const findSingleCategory = async (id) => {
    return db.Category.findAll({
        where: {
            id
        }
    })
};

const findSubCategories = async (id) => {
    const categories = await db.Category.findAll({
        where: {
            parent_id: id
        }
    })
    if (categories?.length > 0) {
        return Promise.all(categories.map(async category => ({
            ...category.toJSON(),
            subcategory: await findSubCategories(category.id)
        })));
    } else {
        return null
    }
}


module.exports = {
    findSingleCategory,
    findParentCategories,
    findSubCategories
}
