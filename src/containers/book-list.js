import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index';
import { bindActionsCreators } from 'redux';

class BookList extends Component {
  _renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this._renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return({
    books: state.books
  });
}

function mapDispatchToProps() {
  return bindActionsCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
