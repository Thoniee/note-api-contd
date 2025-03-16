"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.send({ message: 'get all notes', data: [{ id: 1, title: 'note 1', content: 'content 1', createdAt: '14-03-25', updatedAt: '14-03-25' },
            { id: 2, title: 'note 2', content: 'content 2', createdAt: '14-03-25', updatedAt: '14-03-25' }
        ] });
});
exports.router.get('/:id', (req, res) => {
    res.send({ message: 'get note by id',
        id: req.params.id,
        title: 'note 1', content: 'content 1', createdAt: '14-03-25', updatedAt: '14-03-25'
    });
});
