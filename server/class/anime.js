import cheerio from 'cheerio';
import axios from 'axios';
import bCrypt from 'json-encrypt';

class Anime {
    constructor(Anime){
        this.Anime = Anime;
        this.API = Anime.API_ANIME;
        this.node = "";
        this.animeRecentes = [];
        this.Site = Anime.Site;
    }
    async getAnimesRecentes(){
        this.web = await axios.get(this.API+`tv`);
        this.dataWeb = await this.web.data;
        this.$ = cheerio.load(this.dataWeb);
        this.$(`#dt_contenedor #contenedor .module .content #dt-tvshows`).find(`div`).each(async (index, anime) => {
            let nome = ``
            let imagem = ``
            let link = ``
            let background = ``
            if(this.$(anime).attr(`class`) === `poster`){
                link = this.$(anime).find(`a`).attr(`href`).replace(this.API, ``)
                const arrayOfImage = this.$(anime).find(`a img`).attr(`src`).replaceAll(`https://animesonline.cc/wp-content/uploads/`, ``).split(`-`);
                imagem = arrayOfImage[0].replaceAll(`/`, `$`)+`-`+arrayOfImage[1];
                imagem = this.Site+`anime/photo/`+bCrypt.encrypt(imagem);
                nome = this.$(anime).find(`a img`).attr(`alt`);
                this.animeRecentes.push({link, imagem, nome, background});
            }
        })
        return this.animeRecentes;
    }
};

export default Anime;