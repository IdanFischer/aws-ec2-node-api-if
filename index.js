import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen('5002', () => console.log('listening on port 5002'))

app.get('/', (req, res) => res.json("Api Working"))
