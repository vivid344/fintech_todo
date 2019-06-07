import React, {Component} from 'react';
import { withStyles, TextField } from '@material-ui/core';
import AnimeCard from '../containers/Card'

const style = {
  content: {
    width: '24%',
    height: '90%',
    float: 'left'
  },
  textField: {
    marginLeft: "5%",
    width: "90%"
  }
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.resultSearch = this.resultSearch.bind(this);
  }

  change(e){
    this.props.changeValue(e.target.value);
  }

  resultSearch(){
    const { data, moveCard, removeCard } = this.props;
    return data.map((anime) => {
      return(
        <AnimeCard
          anime={anime}
          place={'search'}
          moveCard={moveCard}
          removeCard={removeCard}
        />
      )
    })
  }

  render() {
    const { classes, connectDropTarget } = this.props;
    return connectDropTarget(
      <div className={classes.content}>
        <TextField
          id="standard-name"
          label="アニメ名"
          className={classes.textField}
          onChange={this.change}
          value={this.props.inputValue}
          margin="normal"
        />
        {this.resultSearch()}
      </div>
    );
  }
}

export default withStyles(style)(Search);
