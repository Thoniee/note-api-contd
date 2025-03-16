import express from 'express';
import { noteRouter } from './routers';
import { addTimestamp, errorHandler, logger } from './middlewares';
const app = express();
const port = 3000;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);

app.use('/note', noteRouter);

app.use(errorHandler);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`); 
});
