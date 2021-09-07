const request = require('supertest');
const {sequelize} = require('./models/index')
const app = require('./app')

it("should get the default state", async () => {
    return request(app).get("/").expect('Content-Type', /json/)
        .expect(200)
        .expect({healthy: true})
})

it("should get the correct full list with nested subcategories", async () => {
    const response = await request(app).get("/categories")
        .expect('Content-Type', /json/)
        .expect(200)
    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                subcategory: expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                    })
                ])
            })
        ])
    )
})

it("should get the correct category by id", async () => {
    const response = await request(app).get("/categories?id=2")
        .expect('Content-Type', /json/)
        .expect(200)
    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: 2,
                subcategory: expect.arrayContaining([
                    expect.objectContaining({
                        id: 3,
                    })
                ])
            })
        ])
    )
})

it("should get 404", async () => {
    return request(app).get("/categories?id=199999")
        .expect('Content-Type', /json/)
        .expect(404)

})

it("should get 400", async () => {
    return request(app).get("/categories?id=test")
        .expect('Content-Type', /json/)
        .expect(400)

})

afterAll(async() => {
    // Closing the DB connection allows Jest to exit successfully.
    sequelize.close()
})
