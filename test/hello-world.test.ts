import { helloWorld } from "../src/controllers/hello.controller";

describe("User routes", () => {
    it("should return success response for hello world", async () => {
        const response = helloWorld();
        expect(response).toEqual("hello world");
    });
});
