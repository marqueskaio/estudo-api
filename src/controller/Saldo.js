import { openDb } from "../configDB";
import router from "../routes";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Saldo ( id INTEGER PRIMARY KEY, saldo INTEGER)')
    });
}
export async function showSaldo(req, res){
    let cliente = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Saldo (id, saldo) VALUES (?,?)', [saldo.id, saldo.saldo]);
    });
    res.json({
        "statuscode": 200
    })
}