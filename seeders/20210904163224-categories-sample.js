module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [
            {
                id: 1,
                name: 'Cat 1',
                parent_id: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                name: 'Cat 2',
				parent_id: null,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                name: 'Cat 3',
				parent_id: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 4,
                name: 'Cat 4',
                parent_id: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 5,
                name: 'Cat 5',
                parent_id: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 6,
                name: 'Cat 6',
                parent_id: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};
