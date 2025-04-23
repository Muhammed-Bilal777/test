"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.test.ts
const supertest_1 = __importDefault(require("supertest"));
const _1 = __importDefault(require("."));
describe("GET /", () => {
    process.env.NODE_ENV = "test";
    it('responds with "Hello from Express + TypeScript!"', async () => {
        const res = await (0, supertest_1.default)(_1.default).get("/");
        expect(res.status).toBe(200);
        expect(res.text).toBe("Hello from Express + TypeScript!");
    });
    it('responds with "Hello from Express + TypeScript!"', async () => {
        const res = await (0, supertest_1.default)(_1.default).get("/test");
        expect(res.status).toBe(200);
        expect(res.text).toBe("test file setup!");
        //setting test
    });
});
