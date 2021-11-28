const modalStream = (props) => {
    return (
      <div
        className="focus-trap-wrapper previewModal--wrapper detail-modal has-smaller-buttons"
        tabIndex={-1}
      >
        <div
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className="previewModal--container detail-modal has-smaller-buttons"
          data-uia="preview-modal-container-DETAIL_MODAL"
          style={{
            width: "975.74px",
            top: "371px",
            left: "auto",
            transformOrigin: "center top",
            transform:
              "translateX(0px) translateY(calc(-371px + 2em)) scaleX(1) scaleY(1) translateZ(0px)",
            boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
            zIndex: 2,
            opacity: 1,
            marginBottom: "2em",
            minWidth: "850px",
          }}
        >
          <div
            className="previewModal--player_container detail-modal has-smaller-buttons"
            data-uia="previewModal--player_container"
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <div
                id={81206784}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                 { props.anime.video &&
                <video
                  src={props.anime.video}
                  data-videoid={81206784}
                  playsinline autoPlay muted loop
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                /> }
                <div
                  className="player-timedtext"
                  style={{
                    position: "absolute",
                    inset: "1px 0px",
                    display: "none",
                    direction: "ltr",
                    margin: "0px 146.4px 0px 390.4px",
                  }}
                />
              </div>
            </div>
            <div
              className="videoMerchPlayer--boxart-wrapper"
              style={{ position: "absolute" }}
            >
             
            </div>
            <div className="storyArt detail-modal has-smaller-buttons">
            { props.anime.dataCry.more &&  !props.anime.video &&
            <img
                src={`https://image.tmdb.org/t/p/original/${props.anime.dataCry.more.backdrop_path}`}
                className="playerModel--player__storyArt detail-modal has-smaller-buttons"
                style={{ opacity: 1 }}
                alt="The Seven Deadly Sins"
              /> }
             
            
            </div>
            <div style={{ opacity: 1 }}>
              <div
                className="previewModal--player-titleTreatmentWrapper"
                style={{ opacity: 1 }}
              >
                <div className="previewModal--player-titleTreatment-left previewModal--player-titleTreatment detail-modal has-smaller-buttons has-progress detail-modal has-smaller-buttons">
                  {/* <div className="previewModal-title-progress">
                    <div className="progress ">
                      <span className="progress-bar">
                        <span
                          role="presentation"
                          className="progress-completed"
                          style={{ width: "93%" }}
                        />
                      </span>
                      <span className="summary">22 de&nbsp;24min</span>
                    </div>
                  </div> */}
                  {  props.anime.dataCry.temporadas && 
                  <div
                    onClick={() => {
                      props.setLoadPlayer(true)
                      const episode = props.anime.dataCry.temporadas[0].episodes[0]
                      const anime = props.anime
                      const data = {...anime, episode }
                      props.setPlaying(data)
                    }}
                    className="buttonControls--container"
                    data-uia="mini-modal-controls"
                  >
                    <a
                      tabIndex={0}
                      toolkitsize="small"
                      listid="cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285"
                      ranknum={0}
                      requestid="2298a2b7-ace1-43c1-b364-e4b37ffdb617-179674735"
                      rownum={3}
                      trackid={14170045}
                      data-uia="play-button"
                      role="link"
                      aria-label="Assistir"
                      className="primary-button playLink isToolkit"
                    >
                      <button
                        className="color-primary hasLabel hasIcon ltr-v8pdkb"
                        tabIndex={-1}
                        type="button"
                      >
                        <div className="ltr-1ksxkn9">
                          <div className="medium ltr-18dhnor" role="presentation">
                            <svg viewBox="0 0 24 24">
                              <path d="M6 4l15 8-15 8z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                        <div className="ltr-1i33xgl" style={{ width: "1rem" }} />
                        <span className="ltr-zd4xih">Assistir</span>
                      </button>
                    </a>
                  </div>
                  }
                  <div className="buttonControls--messaging" />
                </div>
              </div>
            </div>
          </div>
          <div 
          onClick={() => {
            props.verMais({})
          }} 
          className="previewModal-close">
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
            <div className="detail-modal-container">
              <div
                className="previewModal--detailsMetadata detail-modal has-smaller-buttons"
                data-uia="previewModal--detailsMetadata"
              >
                <div className="previewModal--detailsMetadata-left">
                  <div className="previewModal--detailsMetadata-info">
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
                                  <use filter xlinkHref="#thumb-down-filled" />
                                </svg>
                              </div>
                              <div className="meta-thumb-container thumb-up">
                                <svg
                                  className="svg-icon svg-icon-thumb-up-filled thumb thumb-up-filled"
                                  focusable="true"
                                >
                                  <use filter xlinkHref="#thumb-up-filled" />
                                </svg>
                              </div>
                              { props.anime.dataCry.more && <span className="match-score">{props.anime.dataCry.more.popularity.toFixed(1)}% relevante</span>}
                              
                            </div>
                          </span>
                        </div>
                        <div className="videoMetadata--second-line">
                          {  props.anime.dataCry.more && props.anime.dataCry.more.last_air_date && <div className="year">{ props.anime.dataCry.more.last_air_date.split(`-`)[0] }</div>}
                         
                          <a href="#about">
                            <span className="maturity-rating ">
                              <span>
                                <svg
                                  className="svg-icon svg-icon-maturity-rating-500"
                                  focusable="true"
                                >
                                  <use filter xlinkHref="#maturity-rating-500" />
                                </svg>
                              </span>
                            </span>
                          </a>
                          {props.anime.dataCry.more &&
                          <span className="duration">{props.anime.dataCry.more.number_of_seasons} Temporadas</span>
                          } 
                          <span className="player-feature-badge">HD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="previewModal-episodeDetails">
                    <b>{props.anime.nome}</b>
                  </div>
                  <p
                    className="preview-modal-synopsis previewModal--text"
                    data-uia="preview-modal-synopsis"
                  >
                    { props.anime.dataCry.more &&  props.anime.dataCry.more.overview }
                  </p>
                </div>
                <div className="previewModal--detailsMetadata-right">
                  <div
                    className="previewModal--tags"
                    data-uia="previewModal--tags-genre"
                  >
                    <span className="previewModal--tags-label">Gêneros:</span>
                    { props.anime.dataCry.more && props.anime.dataCry.more.genres.map((item, i) => (
                      <span className="tag-item" data-uia="tag-item">
                      <a> {item.name}{(props.anime.dataCry.more.genres[i + 1] ? `,` : ``)} </a>
                      </span>
                    )
                    )}
                  </div>
                </div>
              </div>
              <div className="ptrack-container">
                <div
                  className="ptrack-content"
                  data-ui-tracking-context="%7B%22appView%22:%22episodesSelector%22%7D"
                  data-tracking-uuid="62a25454-c65a-488f-85c1-d6643c4e9861"
                >
                  <div className="episodeSelector" data-uia="episode-selector">
                    <div className="episodeSelector-header">
                      <h3 className="previewModal--section-header episodeSelector-label">
                        Episódios
                      </h3>
                      {/* <div className="episodeSelector-dropdown">
                        <div className="ltr-rqgsqp">
                          <button
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="dropdown-menu-trigger-button"
                            className="dropdown-toggle ltr-111bn9j"
                            data-uia="dropdown-toggle"
                          >
                            Ira Imperial dos Deuses
                          </button>
                        </div>
                      </div> */}
                    </div>
                    <div className="episodeSelector-container">
                      { props.anime.dataCry && props.anime.dataCry.error && 
                      <h1>Este anime está atualmente indisponível.</h1>
                      }
                      { props.anime.dataCry && props.anime.dataCry.temporadas && props.anime.dataCry.temporadas[0].episodes.map((ep, index) => (
                        <Episode
                        setLoadPlayer={props.setLoadPlayer}
                        setPlaying={props.setPlaying}
                        anime={props.anime}
                        index={index}
                        episode={ep}
                        />
                      ))}
                      <div 
                      style={{
                        marginTop: `140px`
                      }}
                      className="section-divider collapsed">
                        {/* <button
                          aria-label="expand section"
                          className="color-supplementary section-expandButton hasIcon round ltr-1knzl35"
                          data-uia="section-expand"
                          type="button"
                        >
                          <div className="ltr-1ksxkn9">
                            <div
                              className="small ltr-18dhnor"
                              role="presentation"
                            >
                              <svg viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M5.689 7.924L4.387 9.442 12.038 16l7.651-6.558-1.302-1.518-6.349 5.442z"
                                />
                              </svg>
                            </div>
                          </div>
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptrack-container">
                <div
                  className="ptrack-content"
                  data-ui-tracking-context="%7B%22appView%22:%22similarTitlesSelector%22%7D"
                  data-tracking-uuid="b5a74ad4-dec5-4131-8f3d-95e066792227"
                >
                  
                </div>
              </div>
              
              <div className="ptrack-container">
                <div
                  className="ptrack-content"
                  data-ui-tracking-context="%7B%22appView%22:%22mixedEvidence%22%7D"
                  data-tracking-uuid="e98a965f-4d7e-4c26-bb83-119c39c15b04"
                >
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  const Episode = (props) => {
                     return  <div
                     onClick={() => {
                       props.setLoadPlayer(true)
                       const episode = props.episode
                       const anime = props.anime
                       const data = {...anime, episode }
                       props.setPlaying(data)
                     }}
                     className="titleCardList--container episode-item"
                     tabIndex={0}
                     aria-label={props.episode.ep}
                     data-uia="titleCard--container"
                     role="button"
                   >
                     <div className="titleCard-title_index">{props.index + 1}</div>
                     <div className="titleCard-imageWrapper">
                       <div
                         className="ptrack-content"
                         data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:1,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178543,%22image_key%22:%22MERCH_STILL%7C13775640-eb80-11e9-9899-0aa03e8186f4%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                         data-tracking-uuid="d5585f86-6fdc-457b-9c09-6ae56860cf43"
                       >
                         <img
                           src={props.episode.imagem || `./no.png`}
                           onError={(e)=>{e.target.onerror = null; e.target.src="./no.png"}}
                           alt={props.episode.ep}
                         />
                       </div>
                       <div className="titleCard-playIcon">
                         <svg
                           viewBox="0 0 24 24"
                           className="titleCard-playSVG"
                         >
                           <path d="M6 4l15 8-15 8z" fill="currentColor" />
                         </svg>
                       </div>
                       <progress
                         className="titleCard-progress"
                         max={1}
                         value="0"
                       />
                     </div>
                     <div className="titleCardList--metadataWrapper">
                       <div className="titleCardList-title">
                         <span className="titleCard-title_text">
                           {props.episode.ep}
                         </span>
                         <span>
                           {/* <span className="duration ellipsized">24min</span> */}
                         </span>
                       </div>
                       <p className="titleCard-synopsis previewModal--small-text">
                       </p>
                     </div>
                   </div>
  }

  export default modalStream;