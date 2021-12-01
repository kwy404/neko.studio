
import {useState} from 'react';
import axios from 'axios';
import { getInitialProps } from 'react-i18next';

const Destaque = (props) => {
    const [previewEp, setPreviewEp] = useState(null)
    const [viewMore, setMoreVideo] = useState(null)
    const [set, setV] = useState(false)
    const getVideo = async () => {
        if(!previewEp){
          setV(true)
          const data = await axios.get(`http://localhost:5000/episodio/saihate-no-paladin-episodio-1/`)
          setPreviewEp(data.data.url)
          const anime = await axios.get(`http://localhost:5000/anime/saihate-no-paladin/`)
          const dataT = await anime.data
          const dataCry = dataT
          setMoreVideo({dataCry, nome: `Saihate no Paladin`})
        }
      }
      if(!set){
        getVideo()
      }
    return <span className="volatile-billboard-animations-container">
    <div className="billboard-row" role="region" aria-label="Conteúdo em destaque">
    <div className="ptrack-container billboard-presentation-tracking">
    <div className="billboard-presentation-tracking ptrack-content" data-ui-tracking-context="%7B%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%22296226af-9e70-48c2-8206-9d3aa6cd79e3-129397439%22,%22row%22:0,%22track_id%22:254015180,%22video_id%22:81261630,%22image_key%22:%22BILLBOARD%7C4cd86720-e3d2-11eb-bf4b-0a502368cd95%7Cen%7C4c3%7C81504394%22,%22supp_video_id%22:81462570,%22lolomo_id%22:%220cf38d8c-b5be-4dc2-90df-b42d817b1991_ROOT%22,%22list_id%22:%220cf38d8c-b5be-4dc2-90df-b42d817b1991_84793621X20XX1637868863383%22,%22appView%22:%22billboard%22%7D" data-tracking-uuid="221f8b60-9f27-4278-9adc-29ef4ddfe74a">
       <div className="billboard-presentation-tracking ptrack-content" data-ui-tracking-context="%7B%22list_id%22:%220cf38d8c-b5be-4dc2-90df-b42d817b1991_84793621X20XX1637868863383%22,%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%22296226af-9e70-48c2-8206-9d3aa6cd79e3-129397439%22,%22row%22:0,%22track_id%22:254015180,%22video_id%22:81261630,%22image_key%22:%22BILLBOARD%7C4cd86720-e3d2-11eb-bf4b-0a502368cd95%7Cen%7C4c3%7C81504394%22,%22supp_video_id%22:81462570,%22lolomo_id%22:%220cf38d8c-b5be-4dc2-90df-b42d817b1991_ROOT%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="e435620f-59d9-4ca9-8194-cfa4f6a9766d">
          <div className="billboard billboard-pane billboard-originals trailer-billboard video-playing">
             <div className="billboard-motion dismiss-mask dismiss-static">
                <div className="nfp nf-player-container notranslate inactive NFPlayer" tabIndex={-1}>
                   <div className="VideoContainer VideoContainer--use-element-dimensions" aria-hidden="true" role="presentation" data-uia="player" data-videoid={81462570}>
                      <div style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}><div id={81462570} style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}>
                      <video onLoad={(e)=>{e.target.onLoad = null; e.target.play()}}
                            playsinline autoPlay muted loop
                            src={previewEp}/>
                      <div className="player-timedtext" style={{display: 'none', direction: 'ltr'}} />
                   </div>
                </div>
             </div>
             <div className="PlayerControlsNeo__layout PlayerControlsNeo__layout--inactive">
                <div className="PlayerControlsNeo__all-controls PlayerControlsNeo__all-controls--low-power">
                   <div className="PlayerControlsNeo__gradient-top" />
                      <div className="PlayerControlsNeo__gradient-bottom" />
                         <div className="PlayerControlsNeo__core-controls">
                            <div data-uia="nfplayer-bottom-controls" className="PlayerControlsNeo__bottom-controls PlayerControlsNeo__bottom-controls--faded">
                               <div className="PlayerControlsNeo__progress-control-row PlayerControlsNeo__progress-control-row--row-standard">
                                  <div className="PlayerControlsNeo__progress-container" /></div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="motion-background-component bottom-layer full-screen">
                      <div className="hero-image-wrapper">
                         <img className="hero static-image image-layer" src="" alt="" />
                         <div className="trailer-vignette vignette-layer" />
                            <div className="hero-vignette vignette-layer" />
                               <div className="embedded-components button-layer" /></div>
                            </div>
                         </div>
                         <div className="fill-container">
                            <div className="info meta-layer">
                               <div className="logo-and-text meta-layer">
                                  <div className="titleWrapper" style={{transformOrigin: 'left bottom', transform: 'scale(0.6) translate3d(0px, 255.417px, 0px)', transitionDuration: '1300ms', transitionDelay: '5000ms'}}>
                                  <div className="billboard-title"><img alt="EDENS ZERO" className="title-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Saihate_no_Paladin_logo.png/1200px-Saihate_no_Paladin_logo.png" title="EDENS ZERO" /></div>
                               </div>
                               <div className="info-wrapper" style={{transform: 'translate3d(0px, 153.25px, 0px)', transitionDuration: '1300ms', transitionDelay: '5000ms'}}><div className="info-wrapper-fade" style={{opacity: 0, transitionDuration: '500ms', transitionDelay: '5000ms'}}>
                               <div className="supplemental-message">Assista a toda a temporada 1 agora</div>
                               <div className="episode-title-container" />
                                  <div className="synopsis-fade-container">
                                     <div className="synopsis"> A bordo da Edens Zero, um garoto solitário com o poder de controlar a gravidade parte em uma aventura para encontrar a lendária deusa conhecida como Mãe. </div>
                                  </div>
                               </div>
                            </div>
                            <div
                            onClick={async () => {
                                    const anime = await axios.get(`http://localhost:5000/anime/saihate-no-paladin/`)
                                    const dataT = await anime.data
                                    const dataCry = dataT
                                    console.log(dataT)
                                     props.verMais({dataCry, nome: `Saihate no Paladin`, photo: ``})
                                }} 
                                className="billboard-links button-layer forward-leaning">
                               <button className="color-secondary hasLabel hasIcon ltr-v8pdkb" data-uia="billboard-more-info" type="button">
                                  <div className="ltr-1ksxkn9">
                                     <div className="medium ltr-18dhnor" role="presentation">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                           <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor" />
                                        </svg>
                                     </div>
                                  </div>
                                  <div
                                  className="ltr-1i33xgl" style={{width: '1rem'}} /><span className="ltr-zd4xih">Mais informações</span>
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </span>
}

export default Destaque