import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowLeft from '../internal/svg-icons/KeyboardArrowLeft';
import KeyboardArrowRight from '../internal/svg-icons/KeyboardArrowRight';
import withTheme from '../styles/withTheme';
import IconButton from '../IconButton';
/**
 * @ignore - internal component.
 */

var _ref = React.createElement(KeyboardArrowRight, null);

var _ref2 = React.createElement(KeyboardArrowLeft, null);

var _ref3 = React.createElement(KeyboardArrowLeft, null);

var _ref4 = React.createElement(KeyboardArrowRight, null);

class TablePaginationActions extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), Object.defineProperty(this, "handleBackButtonClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: event => {
        this.props.onChangePage(event, this.props.page - 1);
      }
    }), Object.defineProperty(this, "handleNextButtonClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: event => {
        this.props.onChangePage(event, this.props.page + 1);
      }
    }), _temp;
  }

  render() {
    const _props = this.props,
          {
      backIconButtonProps,
      count,
      nextIconButtonProps,
      onChangePage,
      page,
      rowsPerPage,
      theme
    } = _props,
          other = _objectWithoutProperties(_props, ["backIconButtonProps", "count", "nextIconButtonProps", "onChangePage", "page", "rowsPerPage", "theme"]);

    return React.createElement("div", other, React.createElement(IconButton, _extends({
      onClick: this.handleBackButtonClick,
      disabled: page === 0
    }, backIconButtonProps), theme.direction === 'rtl' ? _ref : _ref2), React.createElement(IconButton, _extends({
      onClick: this.handleNextButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1
    }, nextIconButtonProps), theme.direction === 'rtl' ? _ref3 : _ref4));
  }

}

TablePaginationActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Properties applied to the back arrow `IconButton` element.
   */
  backIconButtonProps: PropTypes.object,

  /**
   * The total number of rows.
   */
  count: PropTypes.number.isRequired,

  /**
   * Properties applied to the next arrow `IconButton` element.
   */
  nextIconButtonProps: PropTypes.object,

  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback
   * @param {number} page The page selected
   */
  onChangePage: PropTypes.func.isRequired,

  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number.isRequired,

  /**
   * The number of rows per page.
   */
  rowsPerPage: PropTypes.number.isRequired,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired
} : {};
export default withTheme()(TablePaginationActions);