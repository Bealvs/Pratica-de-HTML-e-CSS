import express from "express"
import animesServic from "../services/animes-services.js"


const router = express.Router()
const animesService = new animesServic ()

router.get("/animes",(req,res)=>{res.send(animesService.getAnimes())})

router.get("/animes/:id", (req,res)=>{
    const idAnime = parseInt(req.params.id)
    const sucess = animesService.getAnime(idAnime)
   if (sucess!==false){
   return res.status(200).send(sucess)
   }
return res.status(404)
})



router.post("/animes",(req,res)=>{
    
    const {name,genre,studio} = req.body

    const novoAnime = {
        id: 0,
        name,
        genre,
        studio
    }
    
    
    return res.status(201).json(animesService.criar(novoAnime))
    
    
})



 router.put("/animes/:id", (req,res)=>{
    const idAnime = parseInt(req.params.id)
    const {name, genre, studio} = req.body
    const anime = {idAnime,name,genre,studio}
    console.log(anime)
    if (animesService.atualizar(anime)) { 
    return res.status(201).send("O anime foi atualizado!")}

    return res.status(404).json({ error: "O anime não foi achado!" })}
)



 router.delete("/animes/:id",(req,res)=>{
    const idAnime = parseInt(req.params.id)
    if (animesService.deletar(idAnime)) { 
        return res.status(201).send("O anime foi deletado!")
    }
    return res.status(404).json({ error: "O anime não foi achado!" })


 }

 
)
export default router 