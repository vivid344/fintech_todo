import React, {Component} from 'react';
import { withStyles, AppBar, Typography, Toolbar } from '@material-ui/core';
import Search from '../containers/Search';
import ToDo from '../containers/ToDo';
import Doing from '../containers/Doing'
import Done from '../containers/Done'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {flow} from 'lodash'

const style = {
  app: {
    width: '100vw',
    height: '100%',
    padding: 0
  },
  title: {
    flexGrow: 1,
  },
};

class App extends Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change(e) {
        this.props.changeValue(e.target.value)
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.app}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                かっこいいからツールバーつけた
              </Typography>
            </Toolbar>
          </AppBar>
          <Search/>
          <ToDo/>
          <Doing/>
          <Done/>
        </div>
      );
    }
}

export default flow(withStyles(style), DragDropContext(HTML5Backend))(App);
