"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
exports.app.listen(3000, () => {
    console.log("Server is listening to port 3000 :)");
});
exports.app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
}));
exports.app.get("/api/hi", (req, res) => res.send("yo baduk"));
