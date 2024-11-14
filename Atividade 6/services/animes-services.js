import AnimeRepo from "../repository/animes-repo.js"
import {animes} from "../data/animes.js"

const animeRepo = new AnimeRepo()
export default class animesService{

    constructor(){}
    
    atualizar(anime){
        
        return animeRepo.atualiza(anime)
    }

    criar (anime){

        return animeRepo.cria(anime)
    }

    deletar (id){

        return animeRepo.deleta(id)
    }

    getAnime (id){
        
        return animeRepo.getOne(id)
    }

    getAnimes(){

        return animeRepo.getAll()
    }
}


