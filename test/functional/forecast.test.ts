import supertest from "supertest"

describe("Beach forecast functional test", () => {
  it('should return a forecast with just a few times', async () => {
    const {body, status} = await supertest().get('/forecast');

    expect(status).toBe(200)
    expect(body).toEqual([])
  })
})