import express from 'express';
import Crawler from './crawler/anime.js';
import bCrypt from 'json-encrypt';
import Animes from './class/anime.js';
import Anime from './class/anime.js';
import request from 'request';
import cors from 'cors';

class Server {
    constructor(object){
        this.Production = object.Production;
        this.anime = object.ApiAnime || null;
        this.start(object.Site);
    }
    jCrypt(json){
        if(this.Production == 1){
            return bCrypt.encrypt(json);
        } else{
            return json;
        }
    }
    start(Site){
        const app = express();
        const port = process.env.PORT || 5000;
        const API_ANIME = this.anime;
        app.use(cors());
        app.get(`/`, (req, res) => {
            res.send(this.jCrypt({message: `hello`}));
        });
        app.get(`/anime`, async (req, res) => {
            const animes = {}
            const anime = new Anime({
                API_ANIME,
                Site
            });
            const animesRecentes = await anime.getAnimesRecentes();
            animes[`recentes`] = animesRecentes;
            res.send(this.jCrypt(animes));
        });
        app.get(`/anime/photo/:photo`, (req, res) => {
            const decrypt = bCrypt.decrypt(req.params.photo);
            let url = `https://animesonline.cc/wp-content/uploads/`+decrypt.replaceAll(`"`, ``);
            url = url.replaceAll(`$`, `/`);
            request({
                url: url,
                encoding: null
            }, 
            (err, resp, buffer) => {
                if (!err && resp.statusCode === 200){
                res.set("Content-Type", "image/jpeg");
                res.send(resp.body);
                }
            });
        });
        app.get(`/anime/background/:photo`, (req, res) => {
            const decrypt = bCrypt.decrypt(req.params.photo);
            let url = decrypt.replaceAll(`"`, ``);
            url = url.replaceAll(`$`, `/`);
            console.log(url);
            request({
                url: url,
                encoding: null
            }, 
            (err, resp, buffer) => {
                if (!err && resp.statusCode === 200){
                res.set("Content-Type", "image/jpeg");
                res.send(resp.body);
                }
            });
        });
        app.listen(port, () => {
            console.log(`Api listada em http://localhost:${port}`);
        })
    }
};

export default Server;