

import {animes, reescreverLista} from "../data/animes.js"
import animesService from "../services/animes-services.js";

export default class AnimeRepo {
    

    getAll() {
        return animes;
    }

    getOne(id) {
        const anime = animes.find(anime => anime.id === id);
        if (!anime) {return false}
        return anime
    }

    deleta(id) {
        const animeIndex = animes.findIndex(desenho => desenho.id === id)
        if (animeIndex!==-1) {
            animes.splice(animeIndex,1)
            reescreverLista()
            return true;
        }
        return false;
    }
     

    atualiza (atualizaAnime) {
        const anime = animes.find(desenho => desenho.id === atualizaAnime.idAnime)
        console.log(anime)
        if (anime) {
            anime.name = atualizaAnime.name  || anime.name
            anime.genre = atualizaAnime.genre || anime.genre
            anime.studio = atualizaAnime.studio || anime.studio
            
            reescreverLista()
            return true;
        }
        return false;
    }

    cria(anime){
        anime.id = animes.length ? animes[animes.length - 1].id + 1 : 1
        console.log(anime)
        animes.push(anime)
        reescreverLista()
        return anime
    }
    
    
}
