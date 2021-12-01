import { useState } from "react";
import CarrouselSearch from "./CarrouselSearch";

const SearchResult = (props) => {
    return (
      <div>
         { props.animes.length > 0 &&
        <div className="mainView" id="main-view" role="main">
          <div className>
            <div className="search">
              <div />
              <div className="gallery row-with-y-columns search">
                {/* <div className="search-title-header">
                  <div className="rail">
                    <div className="suggestions">
                      <div className="ptrack-container">
                        <div className="ptrack-content" data-ui-tracking-context="%7B%22referenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22appView%22:%22searchSuggestionResults%22%7D" data-tracking-uuid="e9e65581-c958-4cf4-bcd2-2693abe469d3">
                          <div className="suggestionRailContainer">
                            <span className="suggestionsLabel">Veja títulos sobre:</span>
                            <ul>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2270076063_video%22,%22row%22:0,%22rank%22:0,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="64bbf44c-e635-4194-a92f-77da06e207be"><a href="/search?q=Naruto&suggestionId=70076063_video">Naruto: Vol. 16: Ultimate Defense</a></div>
                              </li>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2270263880_video%22,%22row%22:0,%22rank%22:1,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="bf9e8702-ef46-4305-82fe-e0ce48eb8d2f"><a href="/search?q=Naruto&suggestionId=70263880_video">Naruto Shippuden: Vol. 37</a></div>
                              </li>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2280037677_video%22,%22row%22:0,%22rank%22:2,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="5f7b22dd-5c6e-4e27-ac33-a459366329ea"><a href="/search?q=Naruto&suggestionId=80037677_video">The Last: Naruto the Movie</a></div>
                              </li>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2270097191_video%22,%22row%22:0,%22rank%22:3,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="6f6c3618-ef79-42f3-977b-2e909b4a7e8b"><a href="/search?q=Naruto&suggestionId=70097191_video">Naruto: The Lost Story</a></div>
                              </li>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2280152538_video%22,%22row%22:0,%22rank%22:4,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="5c14eeca-aba1-48ae-9d06-32190c4c508e"><a href="/search?q=Naruto&suggestionId=80152538_video">Naruto Shippuden: Road to Ninja</a></div>
                              </li>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2280075823_video%22,%22row%22:0,%22rank%22:5,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="d68b9cd6-7a68-41c5-9766-d167cf49a284"><a href="/search?q=Naruto&suggestionId=80075823_video">Boruto: Naruto the Movie</a></div>
                              </li>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2280151421_video%22,%22row%22:0,%22rank%22:6,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="21e72799-6683-4bcb-80f2-896392a5a1b4"><a href="/search?q=Naruto&suggestionId=80151421_video">NARUTO SD ロック・リーの青春フルパワー忍伝</a></div>
                              </li>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2280152537_video%22,%22row%22:0,%22rank%22:7,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="c2134c91-a0cf-4f75-bbfe-b6ff6b1c04d2"><a href="/search?q=Naruto&suggestionId=80152537_video">Naruto Shippuden the Movie: Blood Prison</a></div>
                              </li>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2280014947_video%22,%22row%22:0,%22rank%22:8,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="7d30a3f8-1ab7-40f9-bfcf-14b6d7a3c020"><a href="/search?q=Naruto&suggestionId=80014947_video">Road To Ninja -Naruto The movie-</a></div>
                              </li>
                              <li className>
                                <div className="ptrack-content" data-ui-tracking-context="%7B%22parentReferenceId%22:%22c7f015463c0c49e3077facf9483fdd313254afc3:16564a13dfe9e5ec87b420402383f6c6af811e90%22,%22trackId%22:13752290,%22entityId%22:%2270117350_video%22,%22row%22:0,%22rank%22:9,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="c3e3016a-e48f-49ea-9f1e-1a595943f96e"><a href="/search?q=Naruto&suggestionId=70117350_video">Naruto Uncut</a></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="galleryContent">
                  <div>
                    <div className="galleryLockups">
                    <CarrouselSearch
                      animes={props.animes}
                      animePreview={props.setPreviewAnime}
                      animeP={props.animePreview}
                      title={`Resultados para ${document.querySelector(`#searchInput`).value}`}
                    />
                    <CarrouselSearch
                      animes={props.filmes}
                      animePreview={props.setPreviewAnime}
                      animeP={props.animePreview}
                      title={`Resultados para ${document.querySelector(`#searchInput`).value}`}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       }
        </div>
      );
}
export default SearchResult