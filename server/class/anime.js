import cheerio from 'cheerio';
import axios from 'axios';
import bCrypt from 'json-encrypt';
import PopCorn from 'popcorn-api';

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
    async getMoreAnime(nome){
        nome = nome.replace(` `, `%20`)
        nome = nome.replace(/[ÀÁÂÃÄÅ]/g,"A");
        nome = nome.replace(/[àáâãäå]/g,"a");
        nome = nome.replace(/[ÈÉÊË]/g,"E");
        nome = nome.replace(/[ū]/g,"u");
        try {
            const data = await axios.get(`https://www.themoviedb.org/search?query=${nome}&language=pt-BR`)
            this.$ = cheerio.load(data.data);
            const href = this.$(`.results a`).attr(`href`)
            const id = href.split(`?`)[0].split(`/`)[2]
            let anime = null
            try {
                anime = await axios.get(`ttps://api.themoviedb.org/3/tv/${id}?api_key=ccc818e2030b429ec7c400dd6cc5551e&language=pt-BR`)
            } catch (error) {
                anime = await axios.get(`ttps://api.themoviedb.org/3/movie/${id}?api_key=ccc818e2030b429ec7c400dd6cc5551e&language=pt-BR`)
            }
            return anime.data
        } catch (error) {
            return {}
        }
        
    }
    async getAnime(animeT){
        const anime = {temporadas: [], generoAnime: []}
        this.web = await axios.get(this.API+`anime/${animeT}/`);
        this.dataWeb = await this.web.data;
        this.$ = cheerio.load(this.dataWeb);
        const nomeAnime =  this.$(`#dt_contenedor #contenedor .yoastbread #breadcrumbs .breadcrumb_last`).text()
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
            anime.temporadas.push({temp: temporada, episodes: []})
            this.$(season).find(`.se-a .episodios`).find(`li`).each(async (i, episode) => {
                const arrayOfImage =  this.$(episode).find(`.imagen a img`).attr(`src`).replace(`https://animesonline.cc/wp-content/uploads/`, ``).split(`-`);
                let imagem = arrayOfImage[0].replace(`/`, `$`)+`-`+arrayOfImage[1];
                imagem = this.Site+`anime/photo/`+bCrypt.encrypt(imagem);
                const ep = this.$(episode).find(`.numerando`).text()
                const href = this.$(episode).find(`.episodiotitle a`).attr(`href`).replace(`https://animesonline.cc/`, ``)
                const date = this.$(episode).find(`.episodiotitle .date`).text()
                const foundTemporada = anime.temporadas.find(e => e.temp == temporada)
                if(foundTemporada){
                    const indexTemp = anime.temporadas.indexOf(foundTemporada)
                    anime.temporadas[indexTemp].episodes.push({temporada, imagem, ep, href, date})
                }
                
            })
        })
        return anime;
    }
    async getGenero(genero, page){
        this.web = await axios.get(this.API+`genero/${genero}/page/${page}/`);
        this.dataWeb = await this.web.data;
        this.$ = cheerio.load(this.dataWeb);
        this.$(`#dt_contenedor #contenedor .module .items article`).find(`div`).each(async (index, anime) => {
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
    async getSearch(search, page){
        this.web = await axios.get(this.API+`search/${search}/page/${page}/`);
        this.dataWeb = await this.web.data;
        this.$ = cheerio.load(this.dataWeb);
        this.$(`#dt_contenedor #contenedor .module .content #archive-content .item`).find(`div`).each(async (index, anime) => {
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
    async getVideo(animeT){
        let video = {}
        try {
            this.web = await axios.get(this.API+`episodio/${animeT}/`);
            this.dataWeb = await this.web.data;
            this.$ = cheerio.load(this.dataWeb);
            const iframe = this.$(`#dt_contenedor #contenedor #single .content #playex .playex #option-1`).find(`iframe`).attr(`src`)
            const iframePlayer = await axios.get(iframe)
            const array = iframePlayer.data.split(`var VIDEO_CONFIG = `)
            const config = array[1].split(`</script>`)[0]
            video = JSON.parse(array[1].split(`</script>`)[0])
            const qualidades = video.streams.length
            video = video.streams[qualidades - 1].play_url
        } catch (error) {
            console.log(error)
            video = {'error': 505}
        }
        return video;
    }
};

export default Anime;