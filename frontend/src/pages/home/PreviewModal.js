import {useState} from 'react';
const PreviewModal = (props) => {
    const [scale, setSale] = useState(1);
    const [nome, setNome] = useState(props.anime.nome);
    console.log(props.anime)
    return (
      <>
        {props.anime && typeof props.anime.dataCry != `undefined` && (
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
                setSale(0.75)
                setTimeout(() => {
                  props.animePreview({})
                }, 200);
              }}
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
              className="previewModal--container mini-modal has-smaller-buttons"
              data-uia="preview-modal-container-MINI_MODAL"
              style={{
                width: props.anime.width+80+`px`,
                height: props.anime.height + 200 +`px`,
                top: "243px",
                left: "-28px",
                transformOrigin: "center center",
                transform:
                  "translateX(58px) translateY(0px) scaleX(1) scaleY(1) translateZ(0px)",
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
                  <img
                    className="previewModal--boxart"
                    src={props.anime.photo}
                    alt={props.anime.nome}
                    style={{ opacity: 1 }}
                  />
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
                          <a
                            tabIndex={-1}
                          ></a>
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
                                <span className="duration">1h 57min</span>
                                <span className="player-feature-badge">HD</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="previewModal--metadatAndControls-tags-container"
                          style={{ opacity: 1 }}
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
  