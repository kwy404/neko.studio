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
  }
  async getPlayer() {
    const react = this
    try {
      if(!react.props.player.movie){
        const res = await axios.get(`http://localhost:5000/${this.props.player.episode.href}`);
        const json = res.data
        react.setState({anime: json})
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
                src={this.props.player.movie ? this.props.player.episode : this.state.anime.url}
                title={this.props.player.nome}
                subTitle="Anime"
                titleMedia={this.props.player.nome+` | ${(!this.props.player.movie ? this.props.player.episode.ep : ``)}`}
                extraInfoMedia="Anime"
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