import 'regenerator-runtime/runtime'

const app = require("../src/server/server");
const supertest = require("supertest");
const request = supertest(app);

describe('Post Endpoints', () => {
  it("gets the test endpoint", async done => {
    const response = await request.get("/url");

    expect(response.body).toHaveProperty("baseGeonames");
    expect(response.body).toHaveProperty("imageType");
    done();
  });
});