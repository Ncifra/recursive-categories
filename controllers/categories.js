const UserService = require("../services/categories");

const getCategories = async (req, res, next) => {
    try {
        const {id} = req.query;
        if(id && isNaN(id)){
            const error = new Error("Category id is not a number");
            error.status = 400;
            return next(error);
        }
        const categories = id ? await UserService.findSingleCategory(id) : await UserService.findParentCategories();
        if (categories?.length > 0) {
            const populatedCategories = await Promise.all(categories.map(async category => ({
                ...category.toJSON(),
                subcategory: await UserService.findSubCategories(category.id)
            })));
            return res.json(populatedCategories);
        } else {
            const error = new Error("No categories found");
            error.status = 404;
            return next(error);
        }
    } catch (err) {
        return next(err);
    }
};


module.exports = {
    getCategories
};
