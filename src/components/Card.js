import React, {Component} from 'react';
import { withStyles, Card, Modal } from '@material-ui/core';

const style = {
  img: {
    width: "100%",
  },
  card: {
    marginLeft: "5%",
    marginTop: "2%",
    height: "15vh",
    width: "90%"
  },
  modal: {
    position: 'absolute',
    width: "80%",
    height: "80%",
    outline: 'none',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform : 'translate(-50%,-50%)',
    borderRadius: '10px',
  },
  iframe: {
    position:'relative',
    width: "100%",
    height: "100%",
    outline: 'none',
    top: '50%',
    left: '50%',
    transform : 'translate(-50%,-50%)',
    borderRadius: '10px',
  }
};

class AnimeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { anime, classes, connectDragSource } = this.props;
    return connectDragSource(
      <div>
        <Card className={classes.card} onClick={this.openModal}>
          <img alt='' src={anime.image} className={classes.img}/>
        </Card>

        <Modal
          open={this.state.isOpen}
          onClose={this.openModal}
        >
          <div className={classes.modal}>
            <iframe src={anime.url} title='site' className={classes.iframe}/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(style)(AnimeCard);
