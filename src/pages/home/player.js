import axios from 'axios';
import React from 'react'
import ReactNetflixPlayer from '../../player'

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: null,
      loadingPlayer: false
    };
  }
  componentDidMount(){
    this.getPlayer()
    console.log(this.props)
  }
  async getPlayer() {
    const react = this
    try {
      if(!react.props.player.movie){
        const res = await axios.get(`http://localhost:5000/${this.props.player.episode.href}`);
        const json = res.data
        react.setState({anime: json})
        react.props.setLoadPlayer(false)
      } else{
        const data = await axios.get(`http://localhost:5000/play/${react.props.player.linker}`)
        var httpResponseMock = data.data; 
        const script = document.createElement("script");
        script.textContent = httpResponseMock;
        document.head.appendChild(script);
        react.setState({anime: {url: `https://${window['linkVideoMP4']}`}})
        react.props.setLoadPlayer(false)
      }
    } catch (error) {
      return { error };
    }
  }
  render() {
    return <div>
      <div>
        <div>
          {/* { !this.state.loadingPlayer && 
          <div className="preview">
            <i className="fas fa-spinner"></i>
          </div> } */}
          { this.state.anime != null && 
          <div className="player">
                <ReactNetflixPlayer
                // Vídeo Link - Just data is required
                src={this.state.anime.url}
                title={this.props.player.nome.replace(`undefined`,``)}
                subTitle={`${(this.props.player.movie ? `Filme` : `Serie`)}`}
                titleMedia={this.props.player.nome.replace(`undefined`,``)+` | ${(!this.props.player.movie ? this.props.player.episode.ep : ``)}`}
                extraInfoMedia={`${(this.props.player.movie ? `Filme` : `Serie`)}`}
                // Text language of player
                playerLanguage="pt"
                // Action when the button X (close) is clicked
                backButton={() => this.props.back({})}
                // The player use the all viewport
                fullPlayer
                autoPlay
                startPosition={0}
                primaryColor="#6f09e4"
                secundaryColor="#ffffff"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              />
          </div>
          }
        </div>
        
      </div>
    </div>
  }
}


export default Video