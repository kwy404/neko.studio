import styled from 'styled-components';
import Carrousel from './Carrousel';
import PreviewModal from './PreviewModal';
import {useState} from 'react';
import ModalStream from './modalStream';

const Home = () => {
    const [animePreview, setPreviewAnime] = useState({nome: ``});
    return <>
        <Carrousel
        animePreview={setPreviewAnime}
        animeP={animePreview}
        title={`Animes recentes`}
        ></Carrousel>
        {animePreview.nome &&
            <PreviewModal 
            animePreview={setPreviewAnime}
            anime={animePreview}></PreviewModal>
        }
        <div style={{
            position: `fixed`,
            top: `0px`,
            width: `100%`,
            zIndex: `50`,
        }}>
            <div tabindex="-1" style={{opacity: `1`, overflow: `auto`, backgroundColor: `rgba(0,0,0,.30)`}}><div class="previewModal--backDrop" tabindex="-1" data-uia="previewModal--backDrop">
            <ModalStream/>
            </div></div>
           
        </div>
    </>
}

export default Home;