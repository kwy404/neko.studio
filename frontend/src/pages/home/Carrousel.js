import axios from 'axios';
import {useState, useRef} from 'react';
import bCrypt from 'json-encrypt';

const Carrousel = (props) => {
    const [animesRecentes, setAnimesRecentes] = useState([]);
    const [api, setApi] = useState(false);
    const getAnimes = async () => {
      const anime = await axios.get(`http://localhost:5000/anime`)
      const data = await anime.data
      setAnimesRecentes(JSON.parse(bCrypt.decrypt(data)));
      setApi(true)
    }
    if(!api){
      setApi(true)
      getAnimes();
    }
    return <div className="lolomoRow lolomoRow_title_card ltr-0" data-list-context="recentlyAdded">
    <h2 className="rowHeader ltr-0">
      <a className="rowTitle ltr-0" href="#">  
        <div className="row-header-title">{ props.title }</div>
        <div className="aro-row-header more-visible">
          <div className="see-all-link">Ver tudo</div>
          <div className="aro-row-chevron icon-akiraCaretRight" />
        </div>
      </a>
    </h2>
    <div className="rowContainer rowContainer_title_card" id="row-1">
      <div className="ptrack-container">
        <div className="rowContent slider-hover-trigger-layer">
          <div className="slider">
            <ul className="pagination-indicator">
              <li className="active" />
            </ul>
            <div className="sliderMask showPeek">
              <div className="sliderContent row-with-x-columns" style={{WebkitTransform: '', msTransform: '', transform: ''}}>
                { animesRecentes.recentes && animesRecentes.recentes.map((anime, index) => (
                   <ItemSlide
                   setPreviewAnime={props.animePreview}
                   animeP={props.animeP}
                   anime={anime} />
                ))}
                <div className="slider-item slider-item-">
                  <div className="smallTitleCard loadingTitle fullWidth">
                    <div className="ratio-16x9 no-pulsate" />
                  </div>
                </div>
              </div>
            </div>
            <span className="handle handleNext active" tabIndex={0} role="button" aria-label="Ver mais títulos"><b className="indicator-icon icon-rightCaret" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
}


const ItemSlide = (props) => {
  const boxRef = useRef(null);
  return <div
  className="slider-item slider-item-0"
  style={{
    marginLeft: `${(props.anime == props.animeP ? '100px' : '0px')}`
  }}
  >
  <div className="title-card-container ltr-0">
    <div id="title-card-1-0" className="title-card">
      <div className="ptrack-content" data-ui-tracking-context="%7B%22list_id%22:%22eac855f7-d5de-4c25-b464-09619487be28_25837353X35XX1637189231949%22,%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%2216c13d0e-3f75-43a5-81e9-94a2e977a701-33470907%22,%22row%22:1,%22track_id%22:14170034,%22video_id%22:81161626,%22image_key%22:%22sdp%7C0024dde0-3c02-11ec-a15a-0a11d6d820cb%7Cpt-BR%7C3zg%22,%22supp_video_id%22:1,%22lolomo_id%22:%22eac855f7-d5de-4c25-b464-09619487be28_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="5a9ab7fc-e9f9-45d0-bea2-da1275c2f449">
        <a
        href="#" role="link" aria-label={props.anime.nome} tabIndex={0} aria-hidden="false" className="slider-refocus">
          <div className="boxart-size-16x9 boxart-container boxart-rounded">
            <img 
            ref={boxRef}
            onMouseEnter={
              async e => {
                if(props.animeP.nome != props.anime.nome){
                  const posX = boxRef.current.x - 45
                  const posY = boxRef.current.y - 316
                  const height = document.querySelector('.ratio-16x9').offsetHeight
                  const width = document.querySelector('.ratio-16x9').offsetWidth
                  const link = props.anime.link
                  const anime = await axios.get(`http://localhost:5000/${link}`)
                  const data = await anime.data
                  const dataCry = JSON.parse(bCrypt.decrypt(data))
                  props.setPreviewAnime({posX, posY, dataCry, nome: props.anime.nome, photo: props.anime.imagem, height, width})
                }
              }
            }
            className="boxart-image boxart-image-in-padded-container" src={props.anime.imagem} alt="" />
            <div className="fallback-text-container" aria-hidden="true">
              <p className="fallback-text">{props.anime.nome}</p>
            </div>
          </div>
          <div className="click-to-change-JAW-indicator">
            <div className="bob-jawbone-chevron">
              <svg className="svg-icon svg-icon-chevron-down" focusable="true">
                <use filter xlinkHref="#chevron-down" />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="bob-container" />
    </div>
  </div>
</div>
}

export default Carrousel;