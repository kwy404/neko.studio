import dotenv from 'dotenv'
import Server from './server.js';
dotenv.config();
const Production = process.env.Production;
const ApiAnime = process.env.Api_anime;
const Site = process.env.Site;

//Create a new Server
const Api = new Server({Production, ApiAnime, Site});