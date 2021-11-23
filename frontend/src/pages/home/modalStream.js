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
                <video
                  src="blob:https://www.netflix.com/2ee2fff6-aec6-4df9-a9ed-7b59efc39222"
                  data-videoid={81206784}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
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
              <img
                className="previewModal--boxart"
                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSX26ZHAP7fsWCOU8LpBa1BMB9yk5HC34aCgyqE7LvehxhNzHmuJDqbP0IIzlQaQJiY3bYQH2PkYZBrkXxRK8DWk9JvXCwD-GG7DaokSVDY8x8RzuKZBoYX2vFAIkw.jpg?r=dc5"
                aria-hidden="true"
                alt="The Seven Deadly Sins"
                style={{ opacity: 0 }}
              />
              <img
                alt=""
                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSX26ZHAP7fsWCOU8LpBa1BMB9yk5HC34aCgyqE7LvehxhNzHmuJDqbP0IIzlQaQJiY3bYQH2PkYZBrkXxRK8DWk9JvXCwD-GG7DaokSVDY8x8RzuKZBoYX2vFAIkw.jpg?r=dc5"
                aria-hidden="true"
                style={{ display: "none" }}
              />
            </div>
            <div className="storyArt detail-modal has-smaller-buttons">
              <img
                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb_mkfxB9I2iR54g7K7dX_hx7xgY14M_s7586K5uSaS13VfEuqnbXoj712x3pkCZGHnf0oRm4qAtwToK_PIUky8B1Nldzy96T8-9SGEn7vYUfk142Q.webp?r=3f2"
                className="playerModel--player__storyArt detail-modal has-smaller-buttons"
                style={{ opacity: 1 }}
                alt="The Seven Deadly Sins"
              />
              <img
                alt=""
                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb_mkfxB9I2iR54g7K7dX_hx7xgY14M_s7586K5uSaS13VfEuqnbXoj712x3pkCZGHnf0oRm4qAtwToK_PIUky8B1Nldzy96T8-9SGEn7vYUfk142Q.webp?r=3f2"
                aria-hidden="true"
                style={{ display: "none" }}
              />
            </div>
            <div style={{ opacity: 1 }}>
              <div
                className="previewModal--player-titleTreatmentWrapper"
                style={{ opacity: 1 }}
              >
                <div className="previewModal--player-titleTreatment-left previewModal--player-titleTreatment detail-modal has-smaller-buttons has-progress detail-modal has-smaller-buttons">
                  <img
                    alt=""
                    src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfu672BOr91WJCoeH98ioQ09bO-5-cBwalmwy-wZo28YetsHGT5VY5RyVysw4WlJxSC5CcN0ik2JASOYAbiPNH9-rO5xxUKvPmdhF8FQFcbgxDpFSK7ZkqHO4DMksa6hBuy5_GZnjFfZCHaSOGENJd3NwV73Sb-VBVz2AMGTxq1t.webp?r=272"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  />
                  <img
                    className="previewModal--player-titleTreatment-logo"
                    alt="The Seven Deadly Sins"
                    title="The Seven Deadly Sins"
                    src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfu672BOr91WJCoeH98ioQ09bO-5-cBwalmwy-wZo28YetsHGT5VY5RyVysw4WlJxSC5CcN0ik2JASOYAbiPNH9-rO5xxUKvPmdhF8FQFcbgxDpFSK7ZkqHO4DMksa6hBuy5_GZnjFfZCHaSOGENJd3NwV73Sb-VBVz2AMGTxq1t.webp?r=272"
                    style={{ width: "100%", opacity: 1 }}
                  />
                  <div className="previewModal-title-progress">
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
                  </div>
                  <div
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
                      aria-label="Continuar"
                      className="primary-button playLink isToolkit"
                      href="/watch/81178565?trackId=14170045&tctx=3%2C0%2C2298a2b7-ace1-43c1-b364-e4b37ffdb617-179674735%2Ccfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%2C%2C"
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
                        <span className="ltr-zd4xih">Continuar</span>
                      </button>
                    </a>
                  </div>
                  <div className="buttonControls--messaging" />
                </div>
              </div>
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
                              <span className="match-score">98% relevante</span>
                            </div>
                          </span>
                        </div>
                        <div className="videoMetadata--second-line">
                          <div className="year">2021</div>
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
                          <span className="duration">5 Temporadas</span>
                          <span className="player-feature-badge">HD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="previewModal-episodeDetails">
                    <b>T4:E23</b> "O distorcido pela escuridão"
                  </div>
                  <p
                    className="preview-modal-synopsis previewModal--text"
                    data-uia="preview-modal-synopsis"
                  >
                    Sentindo o poder mágico de Elizabeth, Derieri aparece perante
                    o exército da Stigma. Estarossa a segue, mas Sariel e Tarmiel
                    têm outros planos para ele.
                  </p>
                </div>
                <div className="previewModal--detailsMetadata-right">
                  <div
                    className="previewModal--tags"
                    data-uia="previewModal--tags-person"
                  >
                    <span className="previewModal--tags-label">Elenco:</span>
                    <span className="tag-item" data-uia="tag-item">
                      <a href="/browse/m/person/40005439"> Yuki Kaji, </a>
                    </span>
                    <span className="tag-item" data-uia="tag-item">
                      <a href="/browse/m/person/40007514">Sora Amamiya, </a>
                    </span>
                    <span className="tag-item" data-uia="tag-item">
                      <a href="/browse/m/person/40039841">Misaki Kuno, </a>
                    </span>
                    <span className="tag-more" data-uia="tag-more">
                      <a href="#about">mais</a>
                    </span>
                  </div>
                  <div
                    className="previewModal--tags"
                    data-uia="previewModal--tags-genre"
                  >
                    <span className="previewModal--tags-label">Gêneros:</span>
                    <span className="tag-item" data-uia="tag-item">
                      <a href="/browse/m/genre/81418687"> Japonês, </a>
                    </span>
                    <span className="tag-item" data-uia="tag-item">
                      <a href="/browse/m/genre/2951909">
                        Séries baseadas em mangá,{" "}
                      </a>
                    </span>
                    <span className="tag-item" data-uia="tag-item">
                      <a href="/browse/m/genre/2867624">Animes Shounen</a>
                    </span>
                  </div>
                  <div
                    className="previewModal--tags"
                    data-uia="previewModal--tags-genre"
                  >
                    <span className="previewModal--tags-label">
                      Cenas e momentos:
                    </span>
                    <span className="tag-item" data-uia="tag-item">
                      <a href="/browse/m/genre/100041"> Empolgantes</a>
                    </span>
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
                      <div className="episodeSelector-dropdown">
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
                      </div>
                    </div>
                    <div className="episodeSelector-container">
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="A luz que repele a escuridão"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">1</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:1,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178543,%22image_key%22:%22MERCH_STILL%7C13775640-eb80-11e9-9899-0aa03e8186f4%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="d5585f86-6fdc-457b-9c09-6ae56860cf43"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfi2SoMWBbcu6QfJP-Oiqpjj1bRT6uZrO7WkBAb3X3VxP-7sIHx0_nQRX757gLn7965K8rO0IkAcNktvLB0AvR7tHjLiQ_896tIGhS2WyJLxdbla.jpg?r=2a6"
                              alt="A luz que repele a escuridão"
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
                            value="0.9074446680080482"
                          />
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              A luz que repele a escuridão
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            Meliodas e Ban interceptam uma caravana que transporta
                            prisioneiros para os Dez Mandamentos, mas os demônios
                            ainda ameaçam outras vilas da Britânia.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="Memórias da Guerra Santa"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">2</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:2,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178544,%22image_key%22:%22MERCH_STILL%7C46d6f2f0-ef8d-11e9-8ad1-0a9270bcc546%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="075b1369-3d2f-4c32-8042-d1c639415736"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaYHKIp0wtgmcFrZ6QXbzu1ICv98KPhYmBmFNSu_at65tMfYXB3ZiKibvoYiVhOb5n1WCDKTwZrjjYXd4ZW2eBFH0FKz2_0wmuJfBFcltmB8nd1M.jpg?r=a2a"
                              alt="Memórias da Guerra Santa"
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
                            value="0.16230717639168343"
                          />
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              Memórias da Guerra Santa
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            King e Diane fogem para a Floresta do Rei das Fadas
                            para escapar dos Dez Mandamentos, mas Gloxinia e Drole
                            os encontram depois de um breve interlúdio.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="Faça-se a luz"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">3</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:3,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178545,%22image_key%22:%22MERCH_STILL%7C06f63f60-f5c3-11e9-9bf9-1203b2feb7c4%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="9cd1527d-e9b4-4009-a39e-be6d9be61a0a"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdqMueGPGZuJL0D-rzfwa27HbRl5IxI03GeIiW5tEetDfG1IXWC_5ouUWhJzCthRIfk8lhn9WY6ELsW_xrjIvYQP1f0OWlTdgySEqCqLh9SMq80M.jpg?r=4fb"
                              alt="Faça-se a luz"
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
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              Faça-se a luz
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            King e Diane são transformados em Gloxinia e Drole e
                            enviados para a Britânia de três mil anos atrás. Lá,
                            eles encontram Meliodas, que se tornou guerreiro da
                            Stigma.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="Os dez mandamentos contra os quatro arcanjos"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">4</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:4,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178546,%22image_key%22:%22MERCH_STILL%7C68e58df0-fa6b-11e9-9180-0e285e0edd30%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="0a2d7de0-77c0-4047-9cb1-e6ca0074d386"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTdQPIB_g0UmjwHmvTIAbGTavo_utMv5gPlZUj0X3gFW5PQz8oDamE_f2J71SoOsNW1VLe-IRGrXCnWuua8CNyytzFk3l9hgkqAxJPSAzh4UzjVD.jpg?r=6cc"
                              alt="Os dez mandamentos contra os quatro arcanjos"
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
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              Os dez mandamentos contra os quatro arcanjos
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            Liderados por Ludociel, os Quatro Arcanjos derrotam os
                            Dez Mandamentos. Sem alternativa, Derieri e Monspiet
                            recorrem a medidas extremas.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="Turbilhão emocional"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">5</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:5,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178547,%22image_key%22:%22MERCH_STILL%7C840d47f0-027a-11ea-9ee3-120468d63594%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="97732f13-912a-40b2-922d-fe6d235138f8"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdRkTC2Ft5QbmRhn0Ak_aWagFRV7x6YCQqwPDCbpolWKUoihvBbKxCfOhiryv26RJO3nT4Kp2otRZv0BdInrN9FXuXRNz38gVEEEk9lUqp8LFoqq.jpg?r=87d"
                              alt="Turbilhão emocional"
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
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              Turbilhão emocional
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            Elizabeth tenta salvar Derieri e Monspiet da
                            transformação em Indura. Sariel e Tarmiel a ajudam
                            contra a vontade de Ludociel.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="Isso se chama amor"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">6</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:6,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178548,%22image_key%22:%22MERCH_STILL%7Cda1bb8c0-0658-11ea-ae33-1252a14bc99a%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="8e1db472-8a7a-47ac-9eab-33527e65e5f2"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQgVzFQnPJNTZblTuyu7xbIjgLKSXe7sArJDMaRahsHzVU9fv8GLfQMZQxiV8ARqDiVTYZXMxqgkD0gqLZpbc6kXohF16apRg9Ud_Rbl35MB35pY.jpg?r=70b"
                              alt="Isso se chama amor"
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
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              Isso se chama amor
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            O verdadeiro Gowther procura Diane e King para fazer
                            um pedido. King descobre que os humanos se revoltaram
                            contra a Stigma e se apressa para proteger Gerheade.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="Pecados capitais, unam-se!"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">7</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:7,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178549,%22image_key%22:%22MERCH_STILL%7Cff4bd1d0-0b11-11ea-9674-0af72db1ad35%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="1802ce7e-b5dc-45fd-a259-35169e29ab5f"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZfqS1AqQMbmug8tL-BwxeFiB3flEmHsaxjxssu6CT-gQ7LvUiMKqbwdEnAoBzT5b7pukATpmRMo-vj3ATV7aIoU1rUpdSjaucdbJYpj34nJ9ATa.jpg?r=5e5"
                              alt="Pecados capitais, unam-se!"
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
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              Pecados capitais, unam-se!
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            King volta para o presente, mas Diane continua presa
                            no passado e precisa enfrentar Zeldris. Drole assiste
                            a tudo com tranquilidade, mas King está desesperado.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="O boneco busca o amor"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">8</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:8,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178550,%22image_key%22:%22MERCH_STILL%7Cd17c0520-1077-11ea-9ff7-0ea8ab30c000%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="48d30f74-f1a1-44cb-ada0-f80cb18eceb9"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUsKwdn7X0LNT3dcv2UqGvUJavG6BViH7bWmVuhE1EtWQ0khnOzaa71o42NmgQCXdc5I3abaumud-d1cFxprVIYem5Dz4vXGnJcNi37v1fT818Vd.jpg?r=dc7"
                              alt="O boneco busca o amor"
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
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              O boneco busca o amor
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            Os acontecimentos que fizeram Gowther apagar suas
                            memórias vêm à tona enquanto King e os outros procuram
                            por ele. Depois, ele conhece Nadja.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="Os amantes amaldiçoados"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">9</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:9,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178551,%22image_key%22:%22MERCH_STILL%7Cfa469520-17c4-11ea-9475-0e1387033224%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="c891b5f0-2b07-432d-9464-148e85573aa7"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTEhsygRwAmgnpKuBjO-dKhhPQa-Lxf2paes02e7vhmVWhDttYs85t7EZGdQ3FzT5hSkly5vR9zWkTNd898ZXFDmX8J8b6tf3EZgMryF87GzfmoA.jpg?r=6b5"
                              alt="Os amantes amaldiçoados"
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
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              Os amantes amaldiçoados
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            Meliodas diz não saber de nada quando Diane conta a
                            Elizabeth que conheceu alguém igual a ela no passado.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCardList--container episode-item"
                        tabIndex={0}
                        aria-label="A vida que vivemos"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-title_index">10</div>
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:10,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170047,%22video_id%22:81178552,%22image_key%22:%22MERCH_STILL%7C88514900-1c3e-11ea-9ff7-0ea8ab30c000%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="f2239c0a-2a62-4e31-9596-c39dd91047c3"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVCsdT9zPHODzrpGYLPjXFVPJ0UQ_SYXF2CREnGcxvR0UzO6gOxLL3rMwlNWBWyRbLmHO0cDeV30FADLNXrFBZ1aNWLAoru7V5TyPbCQpK0DQTPg.jpg?r=a1f"
                              alt="A vida que vivemos"
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
                            value="0.9004837595024188"
                          />
                        </div>
                        <div className="titleCardList--metadataWrapper">
                          <div className="titleCardList-title">
                            <span className="titleCard-title_text">
                              A vida que vivemos
                            </span>
                            <span>
                              <span className="duration ellipsized">24min</span>
                            </span>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            A caminho para libertar Camelot, Meliodas revela aos
                            companheiros que ele e Elizabeth foram amaldiçoados
                            por dois deuses há três mil anos.
                          </p>
                        </div>
                      </div>
                      <div className="section-divider collapsed">
                        <button
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
                        </button>
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
                  <div className="titleGroup--wrapper">
                    <p className="previewModal--section-header titleGroup--header">
                      <svg viewBox="0 0 26 26" className="title-group-collection">
                        <rect
                          fillOpacity={0}
                          fill="currentColor"
                          x={0}
                          y={0}
                          width={26}
                          height={26}
                        />
                        <path
                          d="M11,7 L13,7 L13,19 L11,19 L11,7 Z M13.8647451,7.73415226 L15.7668581,7.11611827 L19.475062,18.5287965 L17.572949,19.1468305 L13.8647451,7.73415226 Z M7,7 L9,7 L9,19 L7,19 L7,7 Z M3,3 L23,3 L23,23 L3,23 L3,3 Z M5,5 L5,21 L21,21 L21,5 L5,5 Z"
                          fill="currentColor"
                        />
                      </svg>
                      Coleção The Seven Deadly Sins
                    </p>
                    <div
                      className="titleGroup--container"
                      data-uia="titleGroup--container"
                    >
                      <div
                        className="titleCard--container title-group-item"
                        tabIndex={0}
                        aria-label="The Seven Deadly Sins"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-imageWrapper has-duration">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:0,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:1,%22video_id%22:80050063,%22image_key%22:%22sdp%7C1af7c101-fc5b-11eb-8ccb-0ac102fe15fd%7Cpt-BR%7C3WR%7C81503463%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="f5d2551d-e384-4979-8721-03d3da886838"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQosRcF0WgSf204M7-QMEqFhysqQkl6ayuibSn_UgWSCn0RZDOgrzxK4IwcickQWb10iyxjJnXfgolOpZHvMQyZFVI0HCrRm9wImi_yhMD1emzSbUa3lKDxvAQE3.jpg?r=dc5"
                              alt="The Seven Deadly Sins"
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
                          <span className="duration ellipsized">
                            <span className="test_dur_str">5 temporadas</span>
                          </span>
                        </div>
                        <div className="titleCard--metadataWrapper">
                          <div className>
                            <div
                              data-uia="videoMetadata--container"
                              className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                    <span className="match-score">
                                      98% relevante
                                    </span>
                                  </div>
                                </span>
                              </div>
                              <div className="videoMetadata--second-line">
                                <div className="year">2021</div>
                                <span className="maturity-rating ">
                                  <span>
                                    <svg
                                      className="svg-icon svg-icon-maturity-rating-500"
                                      focusable="true"
                                    >
                                      <use
                                        filter
                                        xlinkHref="#maturity-rating-500"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            Depois que seu reino é dominado por tiranos, uma
                            princesa tenta encontrar um grupo de cavaleiros
                            perigosos para ajudá-la a recuperar suas terras.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCard--container title-group-item"
                        tabIndex={0}
                        aria-label="The Seven Deadly Sins: Cursed by Light"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-imageWrapper has-duration">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:1,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:1,%22video_id%22:81263946,%22image_key%22:%22sdp%7C1ed33040-058c-11ec-8ccc-0e43901d8f17%7Cpt-BR%7C3WR%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="5ca070b2-6692-4e3b-802a-9424a656c74f"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWsOIYPirGt8EJV3lTHF5umhj9ID-cTV24ML8H7QfmLbKRTlfjaO-Aac591vkOYJtgfEFs5mEtaKGPfzXBQlUeVAijBy8Th_Ic6BHdKYwF0IJ_wLMIhjfWbyV76Q.jpg?r=67c"
                              alt="The Seven Deadly Sins: Cursed by Light"
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
                          <span className="duration ellipsized">1h 20min</span>
                        </div>
                        <div className="titleCard--metadataWrapper">
                          <div className>
                            <div
                              data-uia="videoMetadata--container"
                              className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                    <span className="match-score">
                                      82% relevante
                                    </span>
                                  </div>
                                </span>
                              </div>
                              <div className="videoMetadata--second-line">
                                <div className="year">2021</div>
                                <span className="maturity-rating ">
                                  <span>
                                    <svg
                                      className="svg-icon svg-icon-maturity-rating-500"
                                      focusable="true"
                                    >
                                      <use
                                        filter
                                        xlinkHref="#maturity-rating-500"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            Uma poderosa aliança mágica que pode significar o fim
                            de tudo ameaça a nova era de paz. É hora de Meliodas e
                            seus amigos entrarem em ação.
                          </p>
                        </div>
                      </div>
                      <div
                        className="titleCard--container title-group-item"
                        tabIndex={0}
                        aria-label="The Seven Deadly Sins - Prisioneiros do Céu"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-imageWrapper has-duration">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:2,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:1,%22video_id%22:81006261,%22image_key%22:%22sdp%7C687f0da0-025a-11e9-8ac8-0ab068f918ea%7Cpt-BR%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="a7ed8390-dd0b-4802-8141-4758c72ecef3"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQk2hUJVaGEP2jTRx7ESIB7SyeEYMvR0NZHxWNr2N1lt380izsj2s34dfYag25sFUE5wrUwGnaRovqUJOjwADC2Nc5k.webp?r=897"
                              alt="The Seven Deadly Sins - Prisioneiros do Céu"
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
                          <span className="duration ellipsized">1h 39min</span>
                        </div>
                        <div className="titleCard--metadataWrapper">
                          <div className>
                            <div
                              data-uia="videoMetadata--container"
                              className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                            >
                              <div className="videoMetadata--first-line">
                                <span className="match-score-wrapper no-rating">
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
                                  </div>
                                </span>
                              </div>
                              <div className="videoMetadata--second-line">
                                <div className="year">2018</div>
                                <span className="maturity-rating ">
                                  <span>
                                    <svg
                                      className="svg-icon svg-icon-maturity-rating-500"
                                      focusable="true"
                                    >
                                      <use
                                        filter
                                        xlinkHref="#maturity-rating-500"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="titleCard-synopsis previewModal--small-text">
                            Os Sete Pecados Mortais ajudam o Povo do Céu contra um
                            poderoso grupo de demônios determinado a ressuscitar
                            uma besta demoníaca adormecida há mais de 3.000 anos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptrack-container">
                <div
                  className="ptrack-content"
                  data-ui-tracking-context="%7B%22appView%22:%22similarTitlesSelector%22%7D"
                  data-tracking-uuid="cd4c9966-3630-46df-a43e-f765fad7cdf5"
                >
                  <div className="moreLikeThis--wrapper">
                    <h3 className="previewModal--section-header moreLikeThis--header">
                      Títulos semelhantes
                    </h3>
                    <div
                      className="section-container collapsed"
                      data-uia="section-container"
                      style={{ maxHeight: "65em" }}
                    >
                      <div
                        className="moreLikeThis--container"
                        data-uia="moreLikeThis--container"
                      >
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={0}
                          aria-label="JoJo's Bizarre Adventure"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:0,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:80179831,%22image_key%22:%22sdp%7Cfc4bf4a0-32f6-11e8-a734-126acf8e1a60%7Cen%7C3WR%7C80179833%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="ba579cd5-0a1c-440a-acfa-7277aa337ff4"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYtT5rA4ACRCUvdQiC7NIZrB3Thm5AEfCuhawOL54SEEQNNmeolBL9kygf2jQchsNU93Tjq-pNA35hzBTZTK-uADLnA.jpg?r=f5b"
                                alt="JoJo's Bizarre Adventure"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">3 temporadas</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                      <span className="match-score">
                                        97% relevante
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2016</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-502"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-502"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:80179831,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="6fdf44b2-ccfb-42f2-8b80-a8f37ae29973"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Várias gerações da família Joestar enfrentam vilões
                              sobrenaturais ao longo dos tempos, sempre com o
                              mesmo apelido.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={0}
                          aria-label="The Promised Neverland"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:1,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81145640,%22image_key%22:%22sdp%7C7069a860-64cc-11ea-8dd9-0af231b9590b%7Cpt-BR%7C3WR%7C81145641%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="50d4aa60-966b-4b47-b5ee-9f699e185716"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRMPf1bnUFyrEAcJmBnJbFiHkypDrJRkm9V87YIm4BZ_d3r8Td4GKIPSj40VoF1ZeaNAa08G3V3-lbHG5uL6sUJXLUc.webp?r=6b2"
                                alt="The Promised Neverland"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                      <span className="match-score">
                                        77% relevante
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2019</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-501"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-501"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81145640,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="c1131619-6b4d-4431-ada7-5aee0307d0aa"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Três crianças descobrem que o orfanato onde vivem
                              não é nada do que eles pensavam. Agora, têm que
                              liderar o grupo todo num arriscado plano de fuga.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={0}
                          aria-label="Record of Ragnarok"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:2,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81281579,%22image_key%22:%22sdp%7C97fc4450-b7c3-11eb-8bb9-0a02baaf6d6d%7Cpt-BR%7C3WR%7C81281580%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="ef373395-9054-4eba-9d7a-77844572084e"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeZN7tIAUSIRegLRK-uyr_8KQvjdGnp3w6gHOrEn2x6z92uAzTM8BOPk9yWcTURMwLg6YVYNWdjPEuGWJ2Y5TItfPasNQIxulk6CvOsHioVMhrFi08LGQgecNe4r.jpg?r=f54"
                                alt="Record of Ragnarok"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2021</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-501"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-501"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81281579,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="7dc1c5ad-5c2f-4f6c-8587-bf932777ab7a"
                                  >
                                    <button
                                      aria-label="Remover da Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list-added"
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
                                              d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Antes de serem erradicados pelos deuses, os humanos
                              têm uma última chance de provar que merecem viver.
                              Que comecem as batalhas do Ragnarok!
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={0}
                          aria-label="Baki - O Campeão"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:3,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:80204451,%22image_key%22:%22sdp%7C73522140-8f1c-11ea-a7e7-0ae6473b79e9%7Cpt-BR%7C3WR%7C81161460%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="4934bc80-b61d-4841-bffa-a46278279205"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABenHzdvpEW_WnOeZtz6VI7av4q9SckSB91P2XW1k0ctQ8u3lDlfgjUaubU6lDjVaxTYQI4RgOz3LogLco4WaZDNE7XsJ36f7Xduw5GjO1Gm5vbB5Rc5wyzRCeAof.jpg?r=628"
                                alt="Baki - O Campeão"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">3 temporadas</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2020</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-502"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-502"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:80204451,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="6c0ad276-fe99-4d8c-b9e2-eae24dff8a04"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Enquanto o campeão de artes marciais Baki Hanma
                              treina duro para superar seu lendário pai, cinco
                              condenados à pena de morte partem para Tóquio para
                              acabar com ele.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={0}
                          aria-label="Demon Slayer: Kimetsu no Yaiba"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:4,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81091393,%22image_key%22:%22sdp%7C0e7c0a90-5f3f-11ea-9475-0e1387033224%7Cpt-BR%7C3WR%7C81091394%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="38f39684-a6c5-4b89-aac3-0765083c6627"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdf2KFy6CBevyb-vmY6clW7X8DVitKSbAnWl4wwu21IyDP__yIHBWjqC_XwbLFAPY6LCsTghmxQ0SXewRuCAXbmwf3U.webp?r=720"
                                alt="Demon Slayer: Kimetsu no Yaiba"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2019</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-501"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-501"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81091393,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="e22af357-af41-4ca1-8f22-bb2c8bfca5ba"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Demônios massacraram sua família e amaldiçoaram sua
                              irmã. Agora Tanjiro inicia sua jornada para
                              encontrar a cura e se vingar.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={0}
                          aria-label="Bleach"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:5,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:70204957,%22image_key%22:%22sdp%7C3f051a61-1f72-11e5-9d7c-f7b608af7106%7Cpt-BR%7C3WR%7C80091079%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="3b4820ad-ac66-41e1-8cef-e86c0536182e"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdM3YH5mxp_AdnLJ2Utkp7dUNizJKaZbKVgCzkhV3mlnbDww9m61IXGuMQRWw3G8b1B3xtAoMqlpoOaWpiD6SIG6kGQ.webp?r=437"
                                alt="Bleach"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">5 temporadas</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2006</div>
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
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:70204957,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="277a8391-98ea-4372-ba40-8aa2b3bae355"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Após o jovem Ichigo Kurosaki adquirir superpoderes
                              da ceifeira de almas Rukia Kuchiki, os dois unem
                              forças para ajudar almas perdidas.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Baki Hanma"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:6,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81236338,%22image_key%22:%22sdp%7Ca74ba9d1-f573-11eb-abea-0e84dc91b5bb%7Cpt-BR%7C3WR%7C81236339%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="e9bb5f4b-4f8d-482f-9605-ff4db9e4ab41"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUlZqjox6UTaSxFj-DT7B2GEPBF5xvziw5wBNY3tLRHOD_dhnZS4roBeEgQxllIleTfyHU1AF8-wHtFelKtDZPFdKBYL7w0XI8TghSf95dRUOZPCFuKU-GlqsGdo.jpg?r=a08"
                                alt="Baki Hanma"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                      <span className="match-score">
                                        97% relevante
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2021</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-502"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-502"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81236338,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="f7a33488-d6da-4a50-8d29-d8d80454cbe8"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Para ganhar as habilidades de que precisa para
                              superar o pai, Baki entra na Prisão Estadual do
                              Arizona e enfrenta um famoso detento conhecido como
                              Sr. Indomável.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Kakegurui"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:7,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:80175351,%22image_key%22:%22sdp%7Ca86b8a80-6860-11e9-a8d8-124bf1e73cce%7Cpt-BR%7C3WR%7C80196049%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="68dda401-2ead-4c17-91b5-6658e3bae48d"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVZViJoT9iFhsYPYeVbyRSyvaTfdle5LVBoYFLB6t3hTnGiXNsSEi9EXcwvzZAT-vIINeqIDQdTGqna2TWeW3624F33gwqzDqAeZpxOeuh_HbdX0xtIJ0KzKUCTk.jpg?r=b8c"
                                alt="Kakegurui"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">2 temporadas</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2019</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-500"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-500"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:80175351,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="15e29873-189c-42d2-a866-a5f4a8565e84"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Yumeko Jabami aposta alto e quer ganhar todas na
                              Academia Hyakkaou, uma escola onde os alunos são
                              avaliados só por suas habilidades no jogo.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Erased"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:8,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:80114225,%22image_key%22:%22sdp%7C59e76350-c21f-11e6-9935-0e094703c7fa%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="a3d9419f-83ed-4180-9c37-8998f150330c"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTF3VppPT-245IFiXkr_Ozy8UVbDm0lipHc-_46PPZwqmzEW41ezsMCgOVlGE7PcVlaO2KlNHbPVl9gVHXCbk4izgAc.webp?r=0b7"
                                alt="Erased"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                      <span className="match-score">
                                        66% relevante
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2016</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-501"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-501"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:80114225,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="e1f5bd1a-e9c3-4cec-918d-8cd048ed3524"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Satoru Fujinuma volta no tempo para salvar as vidas
                              dos outros. Quando ele acorda há 18 anos do tempo
                              atual, é hora de salvar seus colegas assassinados.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="ONE PIECE"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:9,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:80107103,%22image_key%22:%22sdp%7Cdea842e1-61b7-11ea-b844-129c8429bf40%7Cen%7C3WR%7C80234581%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="b43f77e9-3a1b-49fa-9e09-cc206f103ac0"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaby8in1iyMYc2Q6CkGd0CTscWJhY8xAf6tB4Xpn0pGLZF_Ro6hTUlLfRllJO7KWcJybo6YbOMlNr-syY51VzLHJdlU.webp?r=5ca"
                                alt="ONE PIECE"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">4 temporadas</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2002</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-498"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-498"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:80107103,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="74d0a8dc-1cd9-4327-8462-092bf6516074"
                                  >
                                    <button
                                      aria-label="Remover da Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list-added"
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
                                              d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              O capitão Luffy navega com sua tripulação à procura
                              de um tesouro que pode torná-lo o novo rei dos
                              piratas.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="One-Punch Man"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:10,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:80117291,%22image_key%22:%22sdp%7Cf89353c0-05e3-11e8-96d7-0e50ffb238c8%7Cpt-BR%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="eaf7e83a-4516-48db-8d72-62b148771239"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTxxzZ6xk6rD0u5yOi3koXddXVBytYj-G6QJHSUv50ZKD_7UmVcF-bt4MfwbvgkW33OsVIQydbLHjumkjNLP4gQaStk.webp?r=e9c"
                                alt="One-Punch Man"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                  <div className="year">2015</div>
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
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:80117291,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="d08ede07-f9f7-497b-b042-db5f225dcb74"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              O super-herói mais forte do mundo pode matar
                              qualquer um com um só golpe. Mas, com uma vida sem
                              desafios, ele sofre com o tédio e a depressão.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="The Daily Life of the Immortal King"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:11,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81364944,%22image_key%22:%22sdp%7C7ce3c581-259c-11eb-ac8c-0e3527f697d3%7Cen%7C3WR%7C81364950%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="7202b0e8-3bec-442c-af07-ce23b50f8bea"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZsMmhdOKl2NHwUZg01xE9sC-beLQSt6g3yvFU53-GPBbdGer0tAvvDPgKBg9IUhBxcAIvoYsA-eX-54KOJk7In0JVo.webp?r=440"
                                alt="The Daily Life of the Immortal King"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2020</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-500"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-500"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81364944,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="10d3db47-4240-438d-bbf5-f187986d38d2"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Com 6 anos, ele derrotou um poderoso demônio. Agora,
                              o feiticeiro Wang Ling deve enfrentar a maior de
                              todas as dificuldades: a vida escolar como um
                              adolescente comum.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Heaven Official's Blessing"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:12,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81364887,%22image_key%22:%22sdp%7Ceafb6590-8899-11eb-ab84-0e3fde0655f5%7Cpt-BR%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="41192517-0cac-4e83-b226-7c494ac9c8ff"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSZFWpO3rXba9G0tn1iOFqN00toX-KVlOFtVoOSNMR2sxNQEWe064SiDMDlbS-38sXE9uRpVm_mRrDI0AJiN4fMaVqU.webp?r=dfc"
                                alt="Heaven Official's Blessing"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                      <span className="match-score">
                                        57% relevante
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2020</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-500"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-500"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81364887,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="1ee1639c-9b5c-40bc-9ae0-06174d068be0"
                                  >
                                    <button
                                      aria-label="Remover da Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list-added"
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
                                              d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Banido para o reino mortal com a missão de exorcizar
                              fantasmas, um ex-príncipe logo descobre um obscuro
                              segredo envolvendo os deuses celestes.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Parasyte: The Maxim"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:13,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:80191008,%22image_key%22:%22sdp%7C1f6bd3d0-e8ac-11e9-ae2b-12909576d2e2%7Cpt-BR%7C3WR%7C80191009%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="4aa635af-2efb-4c23-978a-d47f354b4a8d"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbbYWSRBB9MFAHs1LTze6-PqcR2kwFKj4K8yprJt92cuhELnNP_yVuXnrDPi8FM6KhxZEYnSyob9pH4CVWAhamEiC6Y.webp?r=c47"
                                alt="Parasyte: The Maxim"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2014</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-502"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-502"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:80191008,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="7f57bd7e-a403-4db7-85e5-c77a1f77c8f2"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Um adolescente luta contra um ataque de parasitas do
                              espaço com a ajuda de Migi, uma criatura parasita
                              dócil que vive em sua mão direita.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Tenku Shinpan - Sem Saída"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:14,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81043571,%22image_key%22:%22sdp%7Ca80066f0-5bbc-11eb-bc7d-0e4809bdf8c5%7Cpt-BR%7C3WR%7C81043572%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="ca5ab387-3bff-4781-bf5d-a74c7c6d6e98"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfnF-q6Zm4MUwbDV4qKg6t9q5svoIO85T4k_z5SYPJN0MSSY0sXUBQeLWvejG4BxUbHgHELnyKXaK8Izy8q6wztiUdNVXfEl0CdYRyOo-Kv4oYRavYxiFcs0BdSs.jpg?r=129"
                                alt="Tenku Shinpan - Sem Saída"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2021</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-502"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-502"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81043571,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="99cf2809-b773-436c-856d-ab5e6c7ec878"
                                  >
                                    <button
                                      aria-label="Remover da Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list-added"
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
                                              d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              A estudante Yuri se vê no alto de um arranha-céu em
                              um mundo onde precisa enfrentar assassinos
                              mascarados dispostos a tudo para matar suas vítimas.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="SHAMAN KING"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:15,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81239555,%22image_key%22:%22sdp%7Ccf944630-d25b-11eb-9d48-122ef7a62c01%7Cpt-BR%7C3WR%7C81239556%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="c6b0a12b-ddda-464a-a415-137eaf2f7964"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQMEYFPYEHV0zh8XEbmdBDHPeGU9OyHln75S-BESlVMTf02r_6Kwqg3PAiwec2TJj57C5i_RP42yIdnfAozRd6rqWK8g9IlvOjjLndzPwWGGkNJxODNR6-gh8tBK.jpg?r=a3c"
                                alt="SHAMAN KING"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                      <span className="match-score">
                                        89% relevante
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2021</div>
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
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81239555,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="f9df70f0-6fc6-4a93-95c5-365b7715e0a4"
                                  >
                                    <button
                                      aria-label="Remover da Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list-added"
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
                                              d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              O médium Yoh Asakura entra em um torneio que
                              acontece a cada quinhentos anos para coroar o rei
                              dos xamãs.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="BEASTARS - O Lobo Bom"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:16,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81054847,%22image_key%22:%22sdp%7C3ed61ba0-d9d6-11eb-8f06-0a56d05f8cfb%7Cpt-BR%7C3WR%7C81164216%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="23f07967-00d0-4463-821a-de991e4d6307"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYqsuw4MkPeQoZjpjrE1jDajOlUuqvnCnNk2QpY-R409seGy8Ba9Maur1OfFF1i9M4ZTWn4gOkI5w6oTmoCK4A6eRn8ten7--wNd6KGceRq0jX0DLO17hMHfckox.jpg?r=d63"
                                alt="BEASTARS - O Lobo Bom"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">2 temporadas</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                      <span className="match-score">
                                        69% relevante
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2021</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-501"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-501"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81054847,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="c79bfd59-d3aa-4e0e-9171-543a948bd968"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Em um mundo onde convivem animais de todo tipo, um
                              lobo manso começa a descobrir seus instintos
                              predatórios justamente quando acontece um
                              assassinato na escola.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Gokushufudou: Tatsu Imortal"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:17,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81261669,%22image_key%22:%22sdp%7C2a3054f0-0abd-11ec-848d-0ef3337b38ef%7Cpt-BR%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="9fe46031-a16a-401f-9c7d-a17b61b59e24"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABetL6hQY7-VkTNEQudAAoAOGblwmxVx07crd0wkwO3lvguBTk0FLgRSnFgZR_DOnIwVZY3YVXYKzjAeJIy0maygPmKqL1waEEw59hTd06vlrDcSAPCkBW3Ux7Vsz.jpg?r=eae"
                                alt="Gokushufudou: Tatsu Imortal"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                      <span className="match-score">
                                        73% relevante
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2021</div>
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
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81261669,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="1597bb85-c04b-483b-ad82-f166aa0b9e17"
                                  >
                                    <button
                                      aria-label="Remover da Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list-added"
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
                                              d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              O lendário yakuza Tatsu, "o Dragão Imortal",
                              desaparece do submundo — só para retornar como um
                              marido dedicado.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="DEATH NOTE"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:18,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:70204970,%22image_key%22:%22sdp%7C5c5a9210-c323-11e6-9935-0e094703c7fa%7Cen%7C3WR%7C70081003%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="ef514fd5-2561-4331-8eb3-e57b9561bf7a"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYrwQZBRIGLQZ6cS1NbnSoItYAscSfzcvRFucQmesnZZJmhts-3uVkVzZQHVbKfjaMaqNBtER2VehgP4jJeP9LbMXV8.webp?r=bc9"
                                alt="DEATH NOTE"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2006</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-502"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-502"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:70204970,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="a4b05f4b-fe73-4331-993a-c46f0ba7f3cd"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Um estudante japonês encontra um caderno misterioso
                              e descobre ter poderes para matar todas as pessoas
                              cujos nomes forem escritos no caderno.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Assim Falava Kishibe Rohan"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:19,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81280998,%22image_key%22:%22sdp%7Ccc7001f1-5a9d-11eb-88ac-0ed29b64ee17%7Cpt-BR%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="77e4b070-27a5-4b1f-baff-c13e5417f4fd"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR6jAFL_PXnz8AlDOxQAcLKdqJk4kmz4v6oGfc-1WZl1dkZTvwwZCizFwGMQwk6LuqXoENF7D0M5ZlFuWwmdZPFwQDkZPaViU-YCnnRNF6ctYiK6xU7mLPBHqQcz.jpg?r=ea8"
                                alt="Assim Falava Kishibe Rohan"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2021</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-502"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-502"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81280998,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="94120f29-45da-4b8e-823a-91bfd775a04c"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Um famoso criador de mangás se envolve em eventos
                              paranormais durante uma pesquisa. O Stand User
                              Kishibe Rohan visita a Itália, vai à falência e
                              muito mais.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Great Pretender"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:20,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81220435,%22image_key%22:%22sdp%7C1560b9f0-0818-11eb-82ef-0e7b3328fd9d%7Cpt-BR%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="73f892d2-fa8d-4c24-8ed5-4317ebf64f38"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXkMyMEux3vGwg4li6whZsfAOIdXGB1AMLp18vCE9hLOBs0bN53wUYkM_Qhjloa63jzOgTIPRkIYyy0dBAX3dGv_EE0pAa353dLGnarvy-dBV7M3x5LhkX_vjWgm.jpg?r=5cd"
                                alt="Great Pretender"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">2 temporadas</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2020</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-502"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-502"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81220435,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="dfe7f163-b91c-4426-8a96-e39ba93a0cf8"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Makoto Edamura se achava o maior trapaceiro do
                              Japão, até tentar um golpe em um vigarista
                              internacional. Sua vida nunca mais vai ser a mesma.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="2020 - Japão Submerso"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:21,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:80993018,%22image_key%22:%22sdp%7Cc7a30550-9ad6-11ea-a747-0a86c376f437%7Cpt-BR%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="4dce1514-d7fd-42ba-9513-3349272d7150"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2kc_5klXu3Z5ycQn0TpAV9TFEiNUOQQ9FmXnbRneQmLyG_CtXKUuU-tJo2OP1fum25vBsLS5A9AjRLrvmn-V-yG5QfriDeolNW2xqCSsqnJA47WY5vAtx6yi48.jpg?r=54c"
                                alt="2020 - Japão Submerso"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2020</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-502"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-502"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:80993018,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="ee723013-cae7-48dc-93ba-dcf0b4d78e07"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Uma família luta para sobreviver a terremotos
                              catastróficos que estão afundando o Japão.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Cells at Work!"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:22,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:81028791,%22image_key%22:%22sdp%7C2cbb7470-415c-11e9-8c42-0a9b3bc3e13e%7Cpt-BR%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="ca75e218-f21c-4fc4-868d-dbb8c96a8d1d"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVlzY5MZRR1HBu8iFbVsGTD_DXEq-7pBIFNw16kPhm-AZHwul4jYQnocrzXFlzwaBNP2dfeWMn32BAputtq3oHYKKWU.webp?r=0c6"
                                alt="Cells at Work!"
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
                            <span className="duration ellipsized">
                              <span className="test_dur_str">1 temporada</span>
                            </span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
                              >
                                <div className="videoMetadata--first-line">
                                  <span className="match-score-wrapper no-rating">
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
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2018</div>
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
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:81028791,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="9b6cb670-3fef-4330-abfa-64b7bd745338"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              E se as células humanas fossem pessoas? Conheça este
                              mundo em que glóbulos vermelhos e glóbulos brancos
                              precisam fazer seu trabalho em meio a invasões
                              bacterianas.
                            </p>
                          </div>
                        </div>
                        <div
                          className="titleCard--container more-like-this-item"
                          tabIndex={-1}
                          aria-label="Kuroko's Basketball: Last Game"
                          data-uia="titleCard--container"
                          role="button"
                        >
                          <div className="titleCard-imageWrapper has-duration">
                            <div
                              className="ptrack-content"
                              data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22movieDetails%22,%22rank%22:23,%22request_id%22:%22ea098066-ec7b-4605-838c-27f156586fa2-82800024%22,%22row%22:0,%22track_id%22:13212365,%22video_id%22:80991755,%22image_key%22:%22sdp%7C2337bf40-8b97-11ea-a3e2-0ea85b8e9a8b%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                              data-tracking-uuid="4ea10835-2b42-4b5e-ba50-71fbff2b40f4"
                            >
                              <img
                                src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXWS28UcebmEIq_aMiBNnkvaRHDT9a5dKgb3Q7C1RB7pcmGQ_RUmP3BH48ZgGGacQOYtuJlsTyt1KjlEyl461D9DAMk.webp?r=59d"
                                alt="Kuroko's Basketball: Last Game"
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
                            <span className="duration ellipsized">1h 30min</span>
                          </div>
                          <div className="titleCard--metadataWrapper">
                            <div className="videoMetadata--container-container">
                              <div
                                data-uia="videoMetadata--container"
                                className="videoMetadata--container titlecard-videoMetadata videoMetadata--two-lines"
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
                                      <span className="match-score">
                                        85% relevante
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="videoMetadata--second-line">
                                  <div className="year">2017</div>
                                  <span className="maturity-rating ">
                                    <span>
                                      <svg
                                        className="svg-icon svg-icon-maturity-rating-498"
                                        focusable="true"
                                      >
                                        <use
                                          filter
                                          xlinkHref="#maturity-rating-498"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="ltr-79elbk">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22lolomo_id%22:%22unknown%22,%22list_id%22:%22unknown%22,%22location%22:%22homeScreen%22,%22rank%22:-99,%22request_id%22:%22unknown%22,%22row%22:-99,%22track_id%22:13212365,%22video_id%22:80991755,%22supp_video_id%22:1,%22appView%22:%22addToMyListButton%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="43f7cd49-22ba-4eea-82d9-30019b631f7f"
                                  >
                                    <button
                                      aria-label="Adicionar à Minha lista"
                                      className="color-supplementary hasIcon round ltr-1knzl35"
                                      data-uia="add-to-my-list"
                                      type="button"
                                    >
                                      <div className="ltr-1ksxkn9">
                                        <div
                                          className="small ltr-18dhnor"
                                          role="presentation"
                                        >
                                          <svg viewBox="0 0 24 24">
                                            <path
                                              d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="titleCard-synopsis previewModal--small-text">
                              Kuroko volta à quadra quando ex-rivais são
                              humilhados num jogo amistoso contra um time de
                              basquete de rua famoso.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section-divider collapsed">
                      <button
                        aria-label="expand section"
                        className="color-supplementary section-expandButton hasIcon round ltr-1knzl35"
                        data-uia="section-expand"
                        type="button"
                      >
                        <div className="ltr-1ksxkn9">
                          <div className="small ltr-18dhnor" role="presentation">
                            <svg viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M5.689 7.924L4.387 9.442 12.038 16l7.651-6.558-1.302-1.518-6.349 5.442z"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptrack-container">
                <div
                  className="ptrack-content"
                  data-ui-tracking-context="%7B%22appView%22:%22trailersSelector%22%7D"
                  data-tracking-uuid="245ec7c3-5e94-43fe-b8c8-607cb4c0b0ae"
                >
                  <div className="trailersAndMore--wrapper">
                    <div className="trailersAndMore--header">
                      <h3 className="previewModal--section-header">
                        Trailers e mais
                      </h3>
                    </div>
                    <div
                      className="trailersAndMore--container"
                      data-uia="trailersAndMore--container"
                    >
                      <div
                        className="titleCard--container trailers-and-more-item"
                        tabIndex={0}
                        aria-label="The Seven Deadly Sins: O Julgamento do Dragão (Trailer)"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170049,%22video_id%22:81333405,%22image_key%22:%22MERCH_STILL%7C8afd9a41-b2b6-11eb-8ea7-0e534b114d6b%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="4e9bdb9d-60dc-4dbc-a01d-9813d38bec0d"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSacFkqnCdF2mLMI6vu_rPYbQz5QBi0-muZl5zFT6Mo7bU2USZdDX4l_8K2tebeVwUBqc_CME4QXeDDbzOZoRoXVMPgMdPiGjCCvY9YafiPSTRGr.webp?r=5ca"
                              alt="The Seven Deadly Sins: O Julgamento do Dragão (Trailer)"
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
                        </div>
                        <div className="titleCard--metadataWrapper">
                          <div className="titleCard-title">
                            <span className="titleCard-title_text">
                              The Seven Deadly Sins: O Julgamento do Dragão
                              (Trailer)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="titleCard--container trailers-and-more-item"
                        tabIndex={0}
                        aria-label="The Seven Deadly Sins: Ira Imperial dos Deuses (Trailer)"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:1,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170049,%22video_id%22:81206784,%22image_key%22:%22MERCH_STILL%7Ce7a59260-b678-11ea-822f-129b06abdb55%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="54f8b39a-960e-4bc0-bc88-062f16f5fca6"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcIjbbAFRVxoz9G9eLbXRyXT0vDienR_VPv247AnVTXaDnK-tGL-UWkPC91pjPZJw27E52MHL6DR-p3yazi806_CHPLAcOXfUJ4NsWTiD_mkjxp9.webp?r=9a2"
                              alt="The Seven Deadly Sins: Ira Imperial dos Deuses (Trailer)"
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
                        </div>
                        <div className="titleCard--metadataWrapper">
                          <div className="titleCard-title">
                            <span className="titleCard-title_text">
                              The Seven Deadly Sins: Ira Imperial dos Deuses
                              (Trailer)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="titleCard--container trailers-and-more-item"
                        tabIndex={0}
                        aria-label="The Seven Deadly Sins: Ressurreição dos Dez Mandamentos (Trailer)"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:2,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170049,%22video_id%22:81009511,%22image_key%22:%22MERCH_STILL%7C46d92620-bc4d-11e8-b4cf-126747d43d9e%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="2295d2ec-acfd-446c-9403-229345be85a4"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX_qvxoMkt-Mhbx8sKfrnHQYN5fowazg6oD_j6GNzVN7q0FM_QdlDuMubRDYveXgaz-Cyp4a_CirZ8AZ-KXbrAkY5JIGIiWJfEuoctdb0E70Fb4z.webp?r=641"
                              alt="The Seven Deadly Sins: Ressurreição dos Dez Mandamentos (Trailer)"
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
                        </div>
                        <div className="titleCard--metadataWrapper">
                          <div className="titleCard-title">
                            <span className="titleCard-title_text">
                              The Seven Deadly Sins: Ressurreição dos Dez
                              Mandamentos (Trailer)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="titleCard--container trailers-and-more-item"
                        tabIndex={0}
                        aria-label="The Seven Deadly Sins: Temporada 2 (Trailer)"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:3,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170049,%22video_id%22:80171703,%22image_key%22:%22MERCH_STILL%7C92937cb0-ef20-11e6-9a23-0e2def47c5ca%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="64aee1c4-af14-43cf-bd49-42ac123ca770"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdPuO5Dju1b1pBprZjevDlJrtbmsNhXYx_NsM7Fsm9pRb2Yezuf2wIUmVdsFPkHrwqTOxLd49WKEGgDqVtKbyMme3C1WBSwYz7TChlXqTzqRzL8M.webp?r=fdf"
                              alt="The Seven Deadly Sins: Temporada 2 (Trailer)"
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
                        </div>
                        <div className="titleCard--metadataWrapper">
                          <div className="titleCard-title">
                            <span className="titleCard-title_text">
                              The Seven Deadly Sins: Temporada 2 (Trailer)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="titleCard--container trailers-and-more-item"
                        tabIndex={0}
                        aria-label="The Seven Deadly Sins (Trailer)"
                        data-uia="titleCard--container"
                        role="button"
                      >
                        <div className="titleCard-imageWrapper">
                          <div
                            className="ptrack-content"
                            data-ui-tracking-context="%7B%22list_id%22:%22cfe239e0-8837-403c-88ca-12333bc4e981_70957223X6XX1637680320285%22,%22location%22:%22homeScreen%22,%22rank%22:4,%22request_id%22:%22unknown%22,%22row%22:0,%22track_id%22:14170049,%22video_id%22:80083591,%22image_key%22:%22MERCH_STILL%7C7e0c1080-6f9c-11e6-a6fc-0e2ab01e74a3%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                            data-tracking-uuid="73c95b24-37bb-4f0a-9131-ec125e1e7345"
                          >
                            <img
                              src="https://occ-0-219-185.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWEi8u2hIAS7nHFYWgsW4Ov4e68g3m8zRV6zHX3TCrO-Hb0S-aSpWG1Q3U_VgQr_itQVPuf5gB3DKxBYKQ6MqhSZG8HNxR_gP0ch3FnDq8kMhWA0.webp?r=c03"
                              alt="The Seven Deadly Sins (Trailer)"
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
                        </div>
                        <div className="titleCard--metadataWrapper">
                          <div className="titleCard-title">
                            <span className="titleCard-title_text">
                              The Seven Deadly Sins (Trailer)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptrack-container">
                <div
                  className="ptrack-content"
                  data-ui-tracking-context="%7B%22appView%22:%22mixedEvidence%22%7D"
                  data-tracking-uuid="e98a965f-4d7e-4c26-bb83-119c39c15b04"
                >
                  <div className="about-wrapper">
                    <div className="about-header">
                      <h3 id className="previewModal--section-header" data-uia>
                        Sobre <strong>The Seven Deadly Sins</strong>
                      </h3>
                    </div>
                    <div className="about-container" data-uia="about-container">
                      <div
                        className="previewModal--tags"
                        data-uia="previewModal--tags-person"
                      >
                        <span className="previewModal--tags-label">Elenco:</span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40005439"> Yuki Kaji, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40007514">Sora Amamiya, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40039841">Misaki Kuno, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40078667">Aoi Yuki, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30143888">
                            Tatsuhisa Suzuki,{" "}
                          </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/20065332">Jun Fukuyama, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/20064195">Mamoru Miyano, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/20018430">Maaya Sakamoto, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40092059">Yuhei Takagi, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/20058583">
                            Tomokazu Sugita,{" "}
                          </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30146415">Ryohei Kimura, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30019986">
                            Takahiro Sakurai,{" "}
                          </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30004534">Yuuya Uchida, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30021833">
                            Katsuyuki Konishi,{" "}
                          </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30017810">Rina Satou, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30052570">Hiroki Touchi, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30080192">
                            Hiroshi Iwasaki,{" "}
                          </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40023036">M・A・O, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30069297">Daisuke Ono, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40047639">
                            Yusuke Kobayashi,{" "}
                          </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30053842">Kenjiro Tsuda, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30081177">Ayahi Takagaki, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/60051731">Shinshu Fuji, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/20014396">Jouji Nakata, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/20034251">Akira Ishida, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40110612">Shun Horie, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40049611">
                            Satoshi Tsuruoka,{" "}
                          </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30096748">Rintarou Nishi, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/30048154">Nana Mizuki, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40037568">Kotori Koiwai, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/person/40007669">Sachi Kokuryu</a>
                        </span>
                      </div>
                      <div
                        className="previewModal--tags"
                        data-uia="previewModal--tags-genre"
                      >
                        <span className="previewModal--tags-label">Gêneros:</span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/genre/81418687"> Japonês, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/genre/2951909">
                            Séries baseadas em mangá,{" "}
                          </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/genre/2867624">Animes Shounen, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/genre/2653">Animes de ação, </a>
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/genre/1433679">
                            Animes de ficção científica e fantasia
                          </a>
                        </span>
                      </div>
                      <div
                        className="previewModal--tags"
                        data-uia="previewModal--tags-genre"
                      >
                        <span className="previewModal--tags-label">
                          Cenas e momentos:
                        </span>
                        <span className="tag-item" data-uia="tag-item">
                          <a href="/browse/m/genre/100041"> Empolgantes</a>
                        </span>
                      </div>
                      <div className="maturity-rating-wrapper">
                        <span className="title">Classificação etária:</span>
                        <span className="maturity-rating ">
                          <a
                            href="https://help.netflix.com/support/2064"
                            aria-label="Para maiores de 14 anos"
                          >
                            <svg
                              className="svg-icon svg-icon-maturity-rating-500"
                              focusable="true"
                            >
                              <use filter xlinkHref="#maturity-rating-500" />
                            </svg>
                          </a>
                          <p className="maturityDescription">
                            Para maiores de 14 anos
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default modalStream;