import {useState} from 'react';
import axios from 'axios';

const PreviewModal = (props) => {
    const [scale, setSale] = useState(1);
    const [previewEp, setPreviewEp] = useState(null)
    const [set, setV] = useState(false)
    const getVideo = async () => {
      setV(true)
      if(!previewEp && props.anime.dataCry && props.anime.dataCry.temporadas){
        const data = await axios.get(`http://localhost:5000/`+props.anime.dataCry.temporadas[0].episodes[0].href)
        setPreviewEp(data.data.url)
      }
    }
    if(!set){
      getVideo()
    }
    return (
      <>
        {props.anime && typeof props.anime.dataCry != `undefined` &&  (
          <div
            style={{
              position: `fixed`,
              left: props.anime.posX + `px`,
              top: props.anime.posY + `px`,
              transform: `translateX(0px) translateY(0px) scale(${scale}) translateZ(0px)`,
              zIndex: 2000
            }}
            className="previewFocuskaway focus-trap-wrapper previewModal--wrapper mini-modal has-smaller-buttons"
            tabIndex={-1}
          >
            <div
              onMouseLeave={() => {
                setSale(0.92)
                setTimeout(() => {
                  props.animePreview({})
                }, 600);
              }}
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
              className="previewModal--container mini-modal has-smaller-buttons"
              data-uia="preview-modal-container-MINI_MODAL"
              style={{
                width: document.querySelector('.title-card').offsetWidth +80+`px`,
                height: document.querySelector('.title-card').offsetHeight + 180 +`px`,
                top: "243px",
                left: "-28px",
                transformOrigin: "center center",
                transform:
                  "translateX(58px) translateY(-3px) scaleX(1) scaleY(1) translateZ(0px)",
                zIndex: 3,
                opacity: 1,
                boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
              }}
            >
              <div
                className="previewModal--player_container mini-modal has-smaller-buttons"
                data-uia="previewModal--player_container"
              >
                <div
                  className="videoMerchPlayer--boxart-wrapper"
                  style={{
                    position: "static",
                    objectFit: `cover`,
                    transform: `scale(1)`,
                  }}
                >
                  <video
                  className="previewModal--boxart"
                  onLoad={(e)=>{e.target.onLoad = null; e.target.play()}}
                  playsinline autoPlay muted loop
                  src={previewEp}/>
                  { !previewEp && <img
                    className="previewModal--boxart"
                    src={props.anime.photo}
                    alt={props.anime.nome}
                    style={{ opacity: 1 }}
                  />}
                  
                </div>
              </div>
              <div className="previewModal-close">
                <svg
                  viewBox="0 0 24 24"
                  data-uia="previewModal-closebtn"
                  role="button"
                  aria-label="close"
                  tabIndex={0}
                >
                  <path
                    d="M12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12 3.293 4.707l1.414-1.414L12 10.586z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className="previewModal--info"
                style={{ opacity: 1, transform: "none" }}
              >
                <a
                  
                  tabIndex={-1}
                ></a>
                <div className="mini-modal-container">
                  <a
                    tabIndex={-1}
                  ></a>
                  <div
                    data-uia="previewModal--info-container"
                    className="previewModal--info-container"
                  >
                    <a
                      tabIndex={-1}
                    ></a>
                    <div
                      className="previewModal--metadatAndControls mini-modal has-smaller-buttons"
                      data-uia="previewModal--metadatAndControls"
                    >
                      <a
                        tabIndex={-1}
                      ></a>
                      <div className="previewModal--metadatAndControls-container">
                        
                        <a
                          tabIndex={-1}
                        ></a>
                        <div
                        className="buttonControls--container mini-modal has-smaller-buttons"
                        data-uia="mini-modal-controls"
                      >
                        <div className="ltr-79elbk">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:15035895,%22video_id%22:80098202,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="6db4ec9f-4923-42ee-a73f-b2578c32272e"
                          >
                            <button
                              aria-label="Adicionar à Minha lista"
                              className="color-supplementary hasIcon round ltr-1knzl35"
                              data-uia="add-to-my-list"
                              type="button"
                            >
                              <div className="ltr-1ksxkn9">
                                <div className="small ltr-18dhnor" role="presentation">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="Hawkins-Icon Hawkins-Icon-Standard"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="ltr-79elbk">
                          <button
                            aria-label="Classificar como faz meu gênero"
                            className="color-supplementary hasIcon round ltr-1knzl35"
                            data-uia="thumbsUp-button"
                            type="button"
                          >
                            <div className="ltr-1ksxkn9">
                              <div className="small ltr-18dhnor" role="presentation">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="Hawkins-Icon Hawkins-Icon-Standard"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.97014 1C8.88206 1 8 1.88206 8 2.97014V5.76393L5.8023 10.1593L2.72528 11.0385C2.29598 11.1611 2 11.5535 2 12V19C2 19.4465 2.29598 19.8389 2.72528 19.9615L6.17609 20.9475L6.84053 21.2132C8.13985 21.733 9.52641 22 10.9258 22H16.7086C18.5124 22 20.0931 20.7927 20.5677 19.0525L21.9313 14.0525C22.6253 11.5079 20.7097 9 18.0722 9H14.2808L14.7276 7.21268C14.9267 6.41648 14.9267 5.58352 14.7276 4.78732L14.705 4.69686C14.1618 2.52419 12.2097 1 9.97014 1ZM9.78885 6.65836C9.92771 6.38065 10 6.07442 10 5.76393V3.00015C11.3093 3.01358 12.4465 3.90926 12.7647 5.18193L12.7873 5.27239C12.9068 5.75011 12.9068 6.24989 12.7873 6.72761L12.0299 9.75746L11.7192 11H13H18.0722C19.391 11 20.3488 12.254 20.0018 13.5262L18.6381 18.5262C18.4008 19.3964 17.6105 20 16.7086 20H10.9258C9.78085 20 8.64639 19.7815 7.58331 19.3563L6.87139 19.0715C6.83975 19.0589 6.80749 19.0478 6.77472 19.0385L4 18.2457V12.7543L6.35174 12.0824C6.89079 11.9284 7.34044 11.5552 7.59116 11.0538L9.78885 6.65836Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="ltr-79elbk">
                          <button
                            aria-label="Classificar como não faz meu gênero"
                            className="color-supplementary hasIcon round ltr-1knzl35"
                            data-uia="thumbsDown-button"
                            type="button"
                          >
                            <div className="ltr-1ksxkn9">
                              <div className="small ltr-18dhnor" role="presentation">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="Hawkins-Icon Hawkins-Icon-Standard"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.0302 23C15.1182 23 16.0003 22.1179 16.0003 21.0299V18.2361L18.198 13.8407L21.275 12.9615C21.7043 12.8389 22.0003 12.4465 22.0003 12V5C22.0003 4.55352 21.7043 4.16113 21.275 4.03848L17.8242 3.05253L17.1598 2.78676C15.8604 2.26703 14.4739 2 13.0745 2H7.29168C5.48788 2 3.90724 3.20728 3.43263 4.94753L2.06899 9.94753C1.37502 12.4921 3.29055 15 5.92805 15H9.71952L9.27269 16.7873C9.07364 17.5835 9.07364 18.4165 9.27269 19.2127L9.2953 19.3031C9.83847 21.4758 11.7906 23 14.0302 23ZM14.2114 17.3416C14.0726 17.6194 14.0003 17.9256 14.0003 18.2361V20.9998C12.691 20.9864 11.5538 20.0907 11.2356 18.8181L11.213 18.7276C11.0935 18.2499 11.0935 17.7501 11.213 17.2724L11.9704 14.2425L12.2811 13H11.0003H5.92805C4.6093 13 3.65153 11.746 3.99852 10.4738L5.36215 5.47376C5.59946 4.60364 6.38978 4 7.29168 4H13.0745C14.2194 4 15.3539 4.21848 16.417 4.64371L17.1289 4.92848C17.1605 4.94113 17.1928 4.95216 17.2256 4.96152L20.0003 5.7543V11.2457L17.6485 11.9176C17.1095 12.0716 16.6599 12.4448 16.4091 12.9462L14.2114 17.3416Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="buttonControls--expand-button ltr-79elbk">
                          <button
                            aria-label="expand to detail modal"
                            className="color-supplementary hasIcon round ltr-1knzl35"
                            data-uia="expand-to-detail-button"
                            type="button"
                            onClick={() => {
                              var oldAnime = props.anime
                              oldAnime[`video`] = previewEp
                              props.verMais(props.anime)
                              console.log(props.anime)
                            }} 
                          >
                            <div className="ltr-1ksxkn9">
                              <div className="small ltr-18dhnor" role="presentation">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="Hawkins-Icon Hawkins-Icon-Standard"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                        <div
                          className="previewModal--metadatAndControls-info"
                          style={{ opacity: 1 }}
                        >
                          <div className>
                            <div
                              data-uia="videoMetadata--container"
                              className="videoMetadata--container"
                            >
                              <div className="videoMetadata--first-line">
                                <span className="match-score-wrapper">
                                  <div className="show-match-score rating-inner">
                                    <div className="meta-thumb-container thumb-down">
                                      <svg
                                        className="svg-icon svg-icon-thumb-down-filled thumb thumb-down-filled"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#thumb-down-filled"
                                        />
                                      </svg>
                                    </div>
                                    <div className="meta-thumb-container thumb-up">
                                      <svg
                                        className="svg-icon svg-icon-thumb-up-filled thumb thumb-up-filled"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#thumb-up-filled"
                                        />
                                      </svg>
                                    </div>
                                    <span className="match-score">Novo</span>
                                  </div>
                                </span>
                              </div>
                              <div className="videoMetadata--second-line">
                                <span className="maturity-rating ">
                                  <span>
                                    <svg
                                      className="svg-icon svg-icon-maturity-rating-499"
                                      focusable="true"
                                    >
                                      <use
                                        filter
                                        xlinkHref="#maturity-rating-499"
                                      />
                                    </svg>
                                  </span>
                                </span>
                                <span className="player-feature-badge">HD</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="previewModal--metadatAndControls-tags-container"
                          style={{ opacity: 0 }}
                        >
                          <div className="evidence-tags">
                            <div className="evidence-list">
                              <div className="evidence-item">
                                <span className="evidence-text">Esperto</span>
                              </div>
                              <div className="evidence-item">
                                <span className="evidence-separator" />
                                <span className="evidence-text">
                                  Irreverentes
                                </span>
                              </div>
                              <div className="evidence-item">
                                <span className="evidence-separator" />
                                <span className="evidence-text">Empolgantes</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default PreviewModal;
  