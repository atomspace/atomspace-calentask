import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchForm.css';

class SearchForm extends React.Component {
  render() {
    return (
      <div className={s.SearchForm}></div>
    );
  }
}

export default withStyles(s)(SearchForm);
