import React, {Component} from 'react';
import { withStyles } from '@material-ui/core';
import AnimeCard from "../containers/Card";

const style = {
  content: {
    width: '25%',
    height: '90%',
    float: 'left',
    textAlign: 'center',
    marginTop: '2%',
    borderLeft: 'solid 1px #000000',
    overflowY: 'scroll'
  }
};

class Done extends Component {
  constructor(props) {
    super(props);
    this.done = this.done.bind(this);
  }
  done() {
    const {done, moveCard, removeCard} = this.props;
    return done.map((anime, index) => {
      return (
        <AnimeCard
          key={index}
          anime={anime}
          place={'done'}
          moveCard={moveCard}
          removeCard={removeCard}
        />
      )
    })
  }

  render() {
    const {connectDropTarget} = this.props;
    return connectDropTarget(
      <div className={this.props.classes.content}>
        見終わった
        {this.done()}
      </div>
    );
  }
}

export default withStyles(style)(Done);
