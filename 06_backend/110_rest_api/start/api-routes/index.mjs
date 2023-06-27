import express from 'express'
import productRouter from './products.mjs'

const apiRouter = express.Router();
apiRouter.use('/products', productRouter);

export default apiRouter;
