import express from 'express';
import logger from './middleware/logger.middleware';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = 3000;

app.use('/', [albumsRouter, artistsRouter]);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.listen(port, () => {
    console.log(`Example app listening at http:localhost:${port}`)
});

if (process.env.NODE_ENV == 'development'){
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}