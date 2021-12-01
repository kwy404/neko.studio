import cheerio from 'cheerio';
import axios from 'axios';
import bCrypt from 'json-encrypt';
import PopCorn from 'popcorn-api';

class Filme {
    constructor(Anime){
        this.movies = [];
    }
    async getMovie(genero,page){
        this.web = await axios.get(`https://filmesonlines.org/filmes/genero/${genero}/${page}`);
        this.dataWeb = await this.web.data;
        this.$ = cheerio.load(this.dataWeb);
        this.$(`.wrap .generalMoviesList`).find(`a`).each(async (index, filme) => {
            let nome = this.$(filme).find(`.inner .p .e h3`).text().replace(`Assistir `, ``).replace(` Online`)
            let imagem = `https://filmesonlines.org`+this.$(filme).find(`.inner .p img`).attr(`src`)
            let link = this.$(filme).attr(`href`)
            let background = ``
            this.movies.push({link, imagem, nome, background, created: `kaway404`});
        })
        return this.movies;
    }
    async getVideo(link){
        try {
            this.web = await axios.get(`https://filmesonlines.org/${link}`);
            this.dataWeb = await this.web.data;
            this.$ = cheerio.load(this.dataWeb);
            
            const playerOne = await this.$(`#moviePage .wrap #playerArea .list .listing .playerBtn`).attr(`onclick`).replace(`getPlayer(`, ``).replace(`)`, ``)
            this.web = await axios.get(`https://embed.warezcdn.net/video.php?id=${playerOne}`)
            this.dataWeb = await this.web.data;
            this.$ = cheerio.load(this.dataWeb);
            const dataEmbed = this.$(`.streamtape`).attr(`data-load-embed`)
            const dataLoadEmbedHost = this.$(`.streamtape`).attr(`data-load-embed-host`)
            this.web = await axios.get(`https://embed.warezcdn.net/getPlay.php?id=${dataEmbed}&sv=streamtape`);
            this.dataWeb = await this.web.data;
            this.$ = cheerio.load(this.dataWeb);
            const href = this.dataWeb.split(`window.location.href=`)[1].replace(`"`, ``).replace(`;`, ``).replace(`"`, ``)
            this.web = await axios.get(href);
            this.dataWeb = await this.web.data;
            this.$ = cheerio.load(this.dataWeb);
            let ideoolink = this.$(`#ideoolink`).text()
            let robotlink = this.$(`#robotlink`).text()
            let script = this.$(`script`)
            script = script[7].children[0].data.replaceAll(`document.getElementById('ideoolink').innerHTML`, `ideoolink`)
            const ata = script.replaceAll(`document.getElementById('robotlink').innerHTML`, `robotlink`)
            return `
                var ideoolink = '${ideoolink}'; var robotlink = '${robotlink}';
                ${ata.replaceAll('"', "'")}
                window['linkVideoMP4'] = robotlink
            `
        } catch (error) {
            return `error`   
        }
        
    }

    async getFilmeUnico(filme){
        try {
            this.web = await axios.get(`https://filmesonlines.org/${filme}`);
            this.dataWeb = await this.web.data;
            this.$ = cheerio.load(this.dataWeb);
            const nome = this.$(`.tit`).text()
            const imagem = ``
            const background = ``
            const link = ``
            return {link, imagem, nome, background, created: `kaway404`}
        } catch (error) {
            return `error`   
        }
        
    }

    async getMoreMovie(nome){
        nome = nome.replaceAll(`…`, ``)
        nome = nome.replace(/[ÀÁÂÃÄÅ]/g,"A");
        nome = nome.replace(/[àáâãäå]/g,"a");
        nome = nome.replace(/[ÈÉÊË]/g,"E");
        nome = nome.replace(/[ū]/g,"u");
        nome = nome.replace(`Dublado`, ``)
        nome = nome.replace(`Legendado`, ``)
        console.log(`https://www.themoviedb.org/search?query=${nome}&language=pt-BR`)
        try {
            const data = await axios.get(`https://www.themoviedb.org/search?query=${nome}&language=pt-BR`)
            this.$ = cheerio.load(data.data);
            const href = this.$(`.results a`).attr(`href`)
            const id = href.split(`?`)[0].split(`/`)[2]
            let anime = null
            try {
                anime = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=ccc818e2030b429ec7c400dd6cc5551e&language=pt-BR`)
            } catch (error) {
                anime = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ccc818e2030b429ec7c400dd6cc5551e&language=pt-BR`)
            }
            return anime.data
        } catch (error) {
            return error
        }
    }
};

export default Filme;