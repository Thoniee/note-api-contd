"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(middlewares_1.addTimestamp);
app.use(middlewares_1.logger);
app.use('/note', routers_1.noteRouter);
app.use(middlewares_1.errorHandler);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
