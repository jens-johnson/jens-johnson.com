import React, { Component } from 'react';

/**
 * Pagination component
 *
 * @component
 * @description Provides <ul> with page links over page items.
 * @copyright Credit to Brad Traversey for his React Pagination tutorial: https://github.com/bradtraversy/simple_react_pagination
 */
class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pages = [];
    for (let i = 1; i <= Math.ceil(this.props.totalElements / this.props.elementsPerPage); i++) {
      pages.push(i);
    }

    return(
      <div className="col-sm-12 mh-pagination">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
          {
            pages.map((pageNumber) => (
              <li className={pageNumber == this.props.currentPage ? 'page-item active' : 'page-item'} key={pageNumber}>
                <a className="page-link" onClick={() => this.props.paginate(pageNumber)}>{pageNumber}</a>
              </li>
            ))
          }
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
