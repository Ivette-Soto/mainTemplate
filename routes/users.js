import * as db from '../db/index'
import { Router } from 'express'

const router = Router()

router.get("/", async (req, res)=>{
    try{
        const text = 'SELECT * FROM users'
        const result = await db.query(text)

        res.send(result)
        }
        catch(error){
            console.log(error)
            res.send(error)
    }
})

export { router }