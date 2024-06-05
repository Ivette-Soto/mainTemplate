import express from 'express'
import { router as users } from './routes/users.js'

const app = express()

app.use(express.json())
app.use("/users", users)

app.listen(3000, ()=>{
    console.log("App listening at port 3000")
})