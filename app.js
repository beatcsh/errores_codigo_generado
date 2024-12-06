import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { testCompaniesController } from './controllers/CompaniesController.js'
import { testWrestlersController } from './controllers/WrestlersController.js'

dotenv.config()

mongoose.connect(process.env.url)
    .then(() => {
        console.log("la conexion funciona")
    })
    .catch((error) => {
        console.log("la conexion fallo")
    })

const app = express()
app.use(cors())

app.listen(4000, () => console.log("servidor funcionando"))

testCompaniesController()
testWrestlersController()


/*

lo corrigio Eduardo Lara

en el export de companies la M en model era mayuscula

faltaba js en el import de wrestler model

el import en companies model esta escrito de otra manera 

faltaba el js en el import de esa misma pestaña

en el .env no estaba escrita por completo la palabra urlBD

en wrestlersModel la palabra schema era con minúscula

en esa misma pestaña la palabra age estaba incompleta

en el controlador wrestlers la edad de la segunda columna estaba como string

en el app la palabra error no estaba escrita del todo

la palabra wrestler estaba mal escita en el export del controller



*/