import { Router } from "express";
import { createTable, insertCliente, updateCliente, selectCliente, selectClienteOnly, deleteCliente } from './controller/Cliente.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statuscode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/cliente-only', selectClienteOnly);
router.get('/cliente', selectCliente);
router.post('/cliente', insertCliente);
router.put('/cliente', updateCliente);
router.delete('/cliente', deleteCliente)

export default router;