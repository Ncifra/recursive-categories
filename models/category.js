module.exports = (sequelize, Sequelize) => {

    const Category = sequelize.define('Category', {
        // Model attributes are defined here
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        parent_id: {
            type: Sequelize.INTEGER
            // allowNull defaults to true
        }
    })
    Category.hasMany(Category, {
        foreignKey: 'parent_id'
    });
    return Category;
};
