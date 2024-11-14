import fs from 'fs';

import express from 'express'

const  app = express ()
const porta = 3000

app.use(express.json())

app.listen(porta,()=>{console.log(`O servidor está rodando na porta: ${porta}`)})

const reescreverLista = (animes) => {fs.writeFileSync('animes.json', JSON.stringify(animes, null, 2));
}

let animes = [];

if (fs.existsSync('animes.json')) {
    const data = fs.readFileSync('animes.json', 'utf-8');
    animes = JSON.parse(data);
} 


app.get("/animes",(req,res)=>{res.send(animes)})

app.get("/animes/:id", (req,res)=>{
    const idAnime = parseInt(req.params.id)
    const anime = animes.find(desenho => desenho.id === idAnime)
    if (!anime) { 
    return res.status(404).json({ error: "O anime não foi achado!" })}
  
    res.json(anime)
})



app.post("/animes",(req,res)=>{
    const {name,genre,studio} = req.body

    const novoAnime = {
        id: animes.length ? animes[animes.length - 1].id + 1 : 1,
        name,
        genre,
        studio
    }
    
    animes.push(novoAnime)
   
    reescreverLista(animes)
    res.json(animes)
})



 app.put("/animes/:id", (req,res)=>{
    const idAnime = parseInt(req.params.id)
    const anime = animes.find(desenho => desenho.id === idAnime)
    if (!anime) { 
    return res.status(404).json({ error: "O anime não foi achado!" })}
        
    const {name,genre,studio} = req.body

    anime.name = name  || anime.name
    anime.genre = genre || anime.genre
    anime.studio = studio || anime.studio

    reescreverLista(animes)
    res.json(anime)
})



 app.delete("/animes/:id",(req,res)=>{
    const idAnime = parseInt(req.params.id)
    const anime = animes.find(desenho => desenho.id === idAnime)
    if (!anime) { 
    return res.status(404).json({ error: "O anime não foi achado!" })}
    
    const animeDeletado =  animes.splice(anime.id-1,1)
    
    reescreverLista(animes)
    res.json(animeDeletado)


 }

 
)