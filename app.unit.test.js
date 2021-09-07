const service = require('./services/categories');

//mock for main model that my controller function uses
// jest.mock('./models/category', () => {
//     const SequelizeMock = require('sequelize-mock');
//     const dbMock = new SequelizeMock();
//     return dbMock.define('Category', [
//         {
//             id: 1,
//             name: 'Cat 1',
//             parent_id: null,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         },
//         {
//             id: 2,
//             name: 'Cat 2',
//             parent_id: null,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         },
//         {
//             id: 3,
//             name: 'Cat 3',
//             parent_id: 2,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         },
//         {
//             id: 4,
//             name: 'Cat 4',
//             parent_id: 2,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         },
//         {
//             id: 5,
//             name: 'Cat 5',
//             parent_id: 2,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         },
//         {
//             id: 6,
//             name: 'Cat 6',
//             parent_id: 3,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         }
//     ])
// });

describe('categories service', () => {
    it('should get more than one parent category', async () => {
        const category = await service.findParentCategories()
        expect(category.length).toBeGreaterThan(1);
    });
    it('should get single category based on id', async () => {
        const category = await service.findSingleCategory(1)
        expect(category).toHaveLength(1);
        expect(category[0].id).toEqual(1);
    });
    it('should not get any category', async () => {
        const category = await service.findSingleCategory(199999)
        expect(category).toHaveLength(0);
    });
    it('should get a category subcategories', async () => {
        const category = await service.findSubCategories(2)
        expect(category).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: 3,
                    subcategory: expect.arrayContaining([
                        expect.objectContaining({
                            id: 6,
                        })
                    ])
                })
            ]));
    });
    it('should get a category subcategories', async () => {
        const category = await service.findSubCategories(1)
        expect(category).toEqual(null);
    });
});
