'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Categories', // name of Source model
        'parent_id', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Categories', // name of Source model
        'parent_id' // key we want to remove
    );
  }
};
