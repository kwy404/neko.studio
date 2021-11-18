import styled from 'styled-components';
import Carrousel from './Carrousel';
import PreviewModal from './PreviewModal';
import {useState} from 'react';

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
    </>
}

export default Home;