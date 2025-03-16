import { Router, Request } from "express";

interface CustomRequest extends Request {
    timestamp?: number;
}                       

export const router = Router();    
router.get('/', (req: CustomRequest, res) => {



router.get('/', (req:Request, res) => {
    throw new Error('error');   
    res.send({message : 'get all notes',
        timestamp: req.timestamp,
         data:[{id:1, title:'note 1', content: 'content 1', createdAt: '14-03-25', updatedAt: '14-03-25'}, 
router.get('/:id', (req: CustomRequest, res) => {
    ]});
});

router.get('/:id', (req:Request, res) => {
    res.send({message : 'get note by id', 
        timestamp: req.timestamp,
        id: req.params.id,
        title:'note 1', content: 'content 1',
    });
});


router.post('/', (req: CustomRequest, res) => {
    res.send({message : 'create note', 
        timestamp: req.timestamp,
        id: 1,
        title: req.body.title,
        content: req.body.content,
    });
}

router.delete('/:id', (req: CustomRequest, res) => {        
    res.send({message : 'delete note', 
        timestamp: req.timestamp,
        id: req.params.id,
    });
} );