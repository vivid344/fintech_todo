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

class Doing extends Component {
  constructor(props) {
    super(props);
    this.doing = this.doing.bind(this);
  }

  doing() {
    const {doing, moveCard, removeCard} = this.props;
    return doing.map((anime, index) => {
      return (
        <AnimeCard
          key={index}
          anime={anime}
          place={'doing'}
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
        見てる
        {this.doing()}
      </div>
    );
  }
}

export default withStyles(style)(Doing);
