"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    exports.router.get('/', (req, res) => {
        throw new Error('error');
        res.send({ message: 'get all notes',
            timestamp: req.timestamp,
            data: [{ id: 1, title: 'note 1', content: 'content 1', createdAt: '14-03-25', updatedAt: '14-03-25' },
                exports.router.get('/:id', (req, res) => {
                })
            ] });
    });
    exports.router.get('/:id', (req, res) => {
        res.send({ message: 'get note by id',
            timestamp: req.timestamp,
            id: req.params.id,
            title: 'note 1', content: 'content 1',
        });
    });
    exports.router.post('/', (req, res) => {
        res.send({ message: 'create note',
            timestamp: req.timestamp,
            id: 1,
            title: req.body.title,
            content: req.body.content,
        });
    }, exports.router.delete('/:id', (req, res) => {
        res.send({ message: 'delete note',
            timestamp: req.timestamp,
            id: req.params.id,
        });
    }));
});
