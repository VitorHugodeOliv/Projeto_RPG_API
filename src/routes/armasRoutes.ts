import express from 'express';

import { getArmas, postArmas, getArmasByName, updateArmas, deleteArmas } from '../controllers/ItensController/armasController';

const router = express.Router();

router.get('/equipamentos/armas', getArmas);
router.post('/equipamentos/armas', postArmas);


export default router;
