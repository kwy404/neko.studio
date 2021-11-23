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
                const arrayOfImage = this.$(anime).find(`a img`).attr(`src`).replace(`https://animesonline.cc/wp-content/uploads/`, ``).split(`-`);
                imagem = arrayOfImage[0].replace(`/`, `$`)+`-`+arrayOfImage[1];
                imagem = this.Site+`anime/photo/`+bCrypt.encrypt(imagem);
                nome = this.$(anime).find(`a img`).attr(`alt`);
                this.animeRecentes.push({link, imagem, nome, background, created: `kaway404`});
            }
        })
        return this.animeRecentes;
    }
    async getAnime(animeT){
        const anime = {generoAnime: [], episodes: [], nomeAnime: ``}
        this.web = await axios.get(this.API+`anime/${animeT}/`);
        this.dataWeb = await this.web.data;
        this.$ = cheerio.load(this.dataWeb);
        const nomeAnime =  this.$(`#dt_contenedor #contenedor .yoastbread #breadcrumbs span span span span`).text()
        anime.nomeAnime = nomeAnime
        this.$(`#single .content .sheader .data .sgeneros`).find(`a`).each(async (index, genero) => {
            anime.generoAnime.push(
                {
                    genero: this.$(genero).text(),
                    href:  this.$(genero).attr(`href`).replace(`https://animesonline.cc/`, ``)
                }
            )
        })
        this.$(`#single .content .tempep #serie_contenido #seasons`).find(`.se-c`).each(async (index, season) => {
            const temporada = this.$(season).find(`.se-q .se-o`).text()
            this.$(season).find(`.se-a .episodios`).find(`li`).each(async (i, episode) => {
                const arrayOfImage =  this.$(episode).find(`.imagen a img`).attr(`src`).replaceAll(`https://animesonline.cc/wp-content/uploads/`, ``).split(`-`);
                let imagem = arrayOfImage[0].replaceAll(`/`, `$`)+`-`+arrayOfImage[1];
                imagem = this.Site+`anime/photo/`+bCrypt.encrypt(imagem);
                const ep = this.$(episode).find(`.numerando`).text()
                const href = this.$(episode).find(`.episodiotitle a`).attr(`href`).replace(`https://animesonline.cc/`, ``)
                const date = this.$(episode).find(`.episodiotitle .date`).text()
                anime.episodes.push({temporada, imagem, ep, href, date})
            })
        })
        return anime;
    }
    async getVideo(animeT){
        const video = {video: ``, created: `kaway404`}
        this.web = await axios.get(this.API+`episodio/${animeT}/`);
        this.dataWeb = await this.web.data;
        this.$ = cheerio.load(this.dataWeb);
        const iframe = this.$(`#dt_contenedor #contenedor #single .content #playex .playex #option-1`).find(`iframe`).attr(`src`)
        video.video = iframe
        return video;
    }
};

export default Anime;