import { openDb } from "../configDB.js";
import router from "../routes.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Cliente ( id INTEGER PRIMARY KEY, nome TEXT)')
    });
}
export async function insertCliente(req, res){
    let cliente = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Cliente (nome, saldo) VALUES (?,?)', [cliente.nome]);
    });
    res.json({
        "statuscode": 200
    })
}
export async function updateCliente(req, res){
    let cliente = req.body
    openDb().then(db=>{
        db.run('UPDATE Cliente SET nome=?, saldo=? WHERE id=?', [cliente.nome, cliente.id]);
    });
    res.json({
        "statuscode": 200
});
}
export async function selectCliente(req, res){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Cliente',)
        .then(cliente => res.json(cliente))
    });
}
export async function selectClienteOnly(req, res){
    let id = req.body.id
    return openDb().then(db=>{
        return db.get('SELECT * FROM Cliente WHERE id=?', [id])
        .then(cliente => res.json(cliente));
    });
}
export async function deleteCliente(req, res){
    let id = req.body.id
    return openDb().then(db=>{
        return db.get('DELETE FROM Cliente WHERE id=?', [id])
        .then(cliente => res.json(cliente));
    });
    res.json({
        "statuscode": 200
});
}
