import { Router } from "express";
import { diasemana, fatorial, semaforo } from './services.js';
const server = Router();


server.get('/semaforo/:cor' , (req, resp) => {
    try{
        const { cor } = req.params;
        const farol = semaforo(cor);

       resp.send({
            farol : farol
        });
    }
    catch(err){
        resp.send({
            erro : err.message
        })
    }
})

server.get('/diasemana' , (req, resp) => {
    try{
        const { dia } = req.query;
        const semana = diasemana(dia);

        resp.send({
            semana : semana
        });
    }
    catch(err){
        resp.send({
            erro : err.message
        })
    }
} )

server.post('/fatorial', (req, resp) => {
    try{
        const { numero } = req.query;
        const fator = fatorial(numero);

        resp.send ({
            fator : fator
        })
    }
    catch(err){
        resp.send({
            erro : err.message
        })
    }
})

server.post('/sequenciaPAR', (req, resp) => {
    try{
        const { numero } = req.body;
        const parr = sequenciaPar (numero);

        resp.send ({
            parr : parr
        })
    }
    catch(err){
        resp.send({
            erro : err.message
        })
    }
})




export default server;


