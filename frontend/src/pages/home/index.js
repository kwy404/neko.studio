import Carrousel from './Carrousel';
import PreviewModal from './PreviewModal';
import {useState} from 'react';
import ModalStream from './modalStream';
import Player from './player';
import Destaque from './Destaque';
import Splash from './Splash';
import SearchResult from './Search';
import Header from './Header';

const Home = () => {
    const [animePreview, setPreviewAnime] = useState({nome: ``});
    const [verMais, setVerMais] = useState({});
    const [playing, setPlaying] = useState({})
    const [loadPlayer, setLoadPlayer] = useState(false)
    const [animes, setAnimes] = useState([])

    const carrousels = [{
        animePreview:setPreviewAnime,
        animeP:animePreview,
        url:`anime`,
        title:`Animes recentes`,

    },{
        animePreview:setPreviewAnime,
        animeP:animePreview,
        url:`genero/acao/1`,
        title:`Animes de Ação`,

    },{
        animePreview:setPreviewAnime,
        animeP:animePreview,
        url:`genero/artes-marciais/1`,
        title:`Animes de Artes Marciais`,

    },{
        animePreview:setPreviewAnime,
        animeP:animePreview,
        url:`genero/comedia/1`,
        title:`Animes de Comédia`,

    },{
        animePreview:setPreviewAnime,
        animeP:animePreview,
        url:`genero/drama/1`,
        title:`Animes de Drama`,

    }]
    return <>
        <Header
        setAnimes={setAnimes}
        />
        <SearchResult
        setPreviewAnime={setPreviewAnime}
        animeP={animePreview}
        animes={animes}
        />
        { animes.length == 0 && 
        <>
        <Destaque
        verMais={setVerMais}
        />
         { loadPlayer && <div
        style={{
            position:`fixed`,
            zIndex: `50000`,
            top: `0%`,
            background: `#000`
        }}
        className="watch-video--loading-view" data-uia="watch-video-loading-view"><div className="player-loading"><div className="player-loading-background-image player-loading-background-image-loading" /><div className="gradient" /><div><div className="loading-children-container"><div className="nf-loading-spinner" /><div className="nfp-control-row top-right-controls"></div></div></div></div></div> }
        <div>
            {carrousels.map((props)=><Carrousel
             {...props}  
             setLoadPlayer={setLoadPlayer}
             setPlaying={setPlaying}
             anime={verMais}
            ></Carrousel>)}
        </div>
        </>
        }
        { animePreview.nome &&
            <PreviewModal 
            animePreview={setPreviewAnime}
            verMais={setVerMais}
            anime={animePreview}></PreviewModal>
        }
        { verMais.nome &&
            <div style={{
                position: `fixed`,
                top: `0px`,
                width: `100%`,
                zIndex: `5000`,
            }}>
            <div tabindex="-1" style={{opacity: `1`, overflow: `auto`, backgroundColor: `rgba(0,0,0,.30)`}}><div class="previewModal--backDrop" tabindex="-1" data-uia="previewModal--backDrop">
                <ModalStream 
                setLoadPlayer={setLoadPlayer}
                setPlaying={setPlaying}
                verMais={setVerMais}
                anime={verMais}/>
                </div></div>
            </div>
        }
        { playing.dataCry && <Player 
        back={setPlaying}
        setLoadPlayer={setLoadPlayer}
        player={playing}></Player> }
        
        <Splash/>
    </>
}

export default Home;