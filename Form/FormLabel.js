"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var styles = function styles(theme) {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light']
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },
    focused: {},
    disabled: {},
    error: {},
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  };
};

exports.styles = styles;

function FormLabel(props, context) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      disabledProp = props.disabled,
      errorProp = props.error,
      focusedProp = props.focused,
      requiredProp = props.required,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "component", "disabled", "error", "focused", "required"]);
  var muiFormControl = context.muiFormControl;
  var required = requiredProp;
  var focused = focusedProp;
  var disabled = disabledProp;
  var error = errorProp;

  if (muiFormControl) {
    if (typeof required === 'undefined') {
      required = muiFormControl.required;
    }

    if (typeof focused === 'undefined') {
      focused = muiFormControl.focused;
    }

    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }

    if (typeof error === 'undefined') {
      error = muiFormControl.error;
    }
  }

  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.focused, focused), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.error, error), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other), children, required && _react.default.createElement("span", {
    className: (0, _classnames.default)(classes.asterisk, (0, _defineProperty2.default)({}, classes.error, error))
  }, "\u2009*"));
}

FormLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: _propTypes.default.bool,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: _propTypes.default.bool
} : {};
FormLabel.defaultProps = {
  component: 'label'
};
FormLabel.contextTypes = {
  muiFormControl: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormLabel'
})(FormLabel);

exports.default = _default;