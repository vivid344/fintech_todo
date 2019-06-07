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

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.todo = this.todo.bind(this);
  }

  todo() {
    const {todo, moveCard, removeCard} = this.props;
    return todo.map((anime, index) => {
      return (
        <AnimeCard
          key={index}
          anime={anime}
          place={'todo'}
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
        見る
        {this.todo()}
      </div>
    );
  }
}

export default withStyles(style)(ToDo);
