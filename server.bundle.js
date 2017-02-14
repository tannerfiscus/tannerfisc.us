/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _bodyParser = __webpack_require__(1);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _compression = __webpack_require__(2);

	var _compression2 = _interopRequireDefault(_compression);

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _render = __webpack_require__(5);

	var _render2 = _interopRequireDefault(_render);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.disable('x-powered-by');

	// Allows gzipping
	app.use((0, _compression2.default)({
	    filter: function filter(args) {
	        return true;
	    }
	}));

	app.use(_bodyParser2.default.json());

	app.use('/assets', _express2.default.static(_path2.default.join(__dirname, '..', '/static/assets')));
	app.use('/public', _express2.default.static(_path2.default.join(__dirname, '..', '/build'), { maxAge: '1y' }));

	app.use(_render2.default);

	// Error handling
	app.use(function (err, req, res, next) {
	    console.log('500 ERROR!', err);
	    res.status(500).sendFile('/500.html', { root: __dirname });
	});

	app.listen(3001, function (err) {
	    console.log('Listening on port: ', 3001, '\n');
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _redux = __webpack_require__(6);

	var _asyncProps = __webpack_require__(7);

	var _asyncProps2 = _interopRequireDefault(_asyncProps);

	var _Html = __webpack_require__(8);

	var _Html2 = _interopRequireDefault(_Html);

	var _server = __webpack_require__(12);

	var _reactRouter = __webpack_require__(13);

	var _reactRedux = __webpack_require__(14);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reducers = __webpack_require__(15);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _routes = __webpack_require__(27);

	var _routes2 = _interopRequireDefault(_routes);

	var _reduxThunk = __webpack_require__(85);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (req, res, next) {

	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.originalUrl }, function (error, redirectLocation, renderProps) {

	        if (error) {
	            var appError = new Error(error);
	            appError.statusCode = 500;
	            next(appError);
	        } else if (redirectLocation) {
	            var redirectError = new Error('Redirecting user to ' + redirectLocation.pathname + redirectLocation.search);
	            redirectError.statusCode = 302;
	            next(redirectError);
	        } else if (renderProps) {
	            (function () {
	                var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default)),
	                    preloadedState = store.getState();

	                var loadContext = {};
	                (0, _asyncProps.loadPropsOnServer)(renderProps, loadContext, function (err, asyncProps, scriptTag) {

	                    var markup = (0, _server.renderToString)(_react2.default.createElement(
	                        _reactRedux.Provider,
	                        { store: store },
	                        _react2.default.createElement(_asyncProps2.default, _extends({}, renderProps, asyncProps))
	                    ));

	                    res.status(200).send((0, _server.renderToStaticMarkup)(_react2.default.createElement(_Html2.default, { markup: markup,
	                        preloadedState: preloadedState })));
	                    return;
	                });
	            })();
	        } else {
	            var pageNotFoundError = new Error('Page Not Found');
	            pageNotFoundError.statusCode = 404;
	            next(pageNotFoundError);
	        }
	    });
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("async-props");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var assets = __webpack_require__(11);

	var Html = function (_React$Component) {
	    _inherits(Html, _React$Component);

	    function Html() {
	        _classCallCheck(this, Html);

	        return _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
	    }

	    _createClass(Html, [{
	        key: 'render',
	        value: function render() {
	            var head = _reactHelmet2.default.rewind();

	            return _react2.default.createElement(
	                'html',
	                null,
	                _react2.default.createElement(
	                    'head',
	                    null,
	                    head.title.toComponent(),
	                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
	                    _react2.default.createElement('meta', { content: 'IE=edge,chrome=1', httpEquiv: 'X-UA-Compatible' }),
	                    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
	                    _react2.default.createElement('meta', { name: 'author', content: 'Tanner Fiscus' }),
	                    _react2.default.createElement('meta', { name: 'keywords', content: 'Tanner,Tanner Fiscus,Fiscus,Web design,Web Designer,Web developer,Front-end,Front end,Pittsburgh front end, Pittsburgh front-end, Pittsburgh website,Pittsburgh Web Design,Pittsburgh Website,Pittsburgh Web,Pittsburgh Web Designer,Front-end designer,Front-end developer,React.js developer,ReactJS developer' }),
	                    head.meta.toComponent(),
	                    _react2.default.createElement('link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }),
	                    _react2.default.createElement('link', { rel: 'icon', sizes: '16x16 32x32 64x64', href: '/assets/favicons/favicon.ico' }),
	                    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/assets/favicons/favicon-192.png' }),
	                    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '160x160', href: '/assets/favicons/favicon-160.png' }),
	                    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/favicons/favicon-96.png' }),
	                    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/assets/favicons/favicon-64.png' }),
	                    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32.png' }),
	                    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16.png' }),
	                    _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/assets/favicons/favicon-57.png' }),
	                    _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/assets/favicons/favicon-60.png' }),
	                    _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/assets/favicons/favicon-72.png' }),
	                    _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/assets/favicons/favicon-76.png' }),
	                    _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/assets/favicons/favicon-114.png' }),
	                    _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/assets/favicons/favicon-120.png' }),
	                    _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/assets/favicons/favicon-144.png' }),
	                    _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/favicons/favicon-152.png' }),
	                    _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/favicon-180.png' }),
	                    _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: assets.style.css }),
	                    _react2.default.createElement('script', {
	                        dangerouslySetInnerHTML: { __html: '\n                        (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n                        })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n\n                        ga(\'create\', \'UA-88460716-1\', \'auto\');\n                        ga(\'send\', \'pageview\');\n                        ' } })
	                ),
	                _react2.default.createElement(
	                    'body',
	                    null,
	                    _react2.default.createElement('div', { className: 'app-wrapper', id: 'app',
	                        dangerouslySetInnerHTML: { __html: this.props.markup } }),
	                    _react2.default.createElement('script', {
	                        dangerouslySetInnerHTML: { __html: '\n                            window.__PRELOADED_STATE__ = ' + JSON.stringify(this.props.preloadedState) } }),
	                    _react2.default.createElement('script', { src: assets.client.js })
	                )
	            );
	        }
	    }]);

	    return Html;
	}(_react2.default.Component);

	exports.default = Html;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
		"client": {
			"js": "/public/client-6f8802ed435d3abef05c.js"
		},
		"style": {
			"js": "/public/style-6f8802ed435d3abef05c.js",
			"css": "/public/style-6f8802ed435d3abef05c.css"
		}
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                          value: true
	});
	exports.reducers = undefined;

	var _redux = __webpack_require__(6);

	var _modal = __webpack_require__(16);

	var _modal2 = _interopRequireDefault(_modal);

	var _portfolio = __webpack_require__(18);

	var _portfolio2 = _interopRequireDefault(_portfolio);

	var _projects = __webpack_require__(23);

	var _projects2 = _interopRequireDefault(_projects);

	var _reduxForm = __webpack_require__(25);

	var _reactRouterRedux = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducers = exports.reducers = (0, _redux.combineReducers)({ form: _reduxForm.reducer,
	                                          modal: _modal2.default,
	                                          portfolio: _portfolio2.default,
	                                          projects: _projects2.default,
	                                          routing: _reactRouterRedux.routerReducer });
	exports.default = reducers;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _modal = __webpack_require__(17);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];


	    switch (action.type) {
	        case _modal.CLOSE_MODAL_BEGIN:
	            return _extends({}, state, _defineProperty({}, action.name, _extends({}, state[action.name], {
	                isClosing: true,
	                isVisible: false
	            })));
	        case _modal.CLOSE_MODAL_END:
	            return _extends({}, state, _defineProperty({}, action.name, _extends({}, state[action.name], {
	                isClosing: false,
	                isVisible: false
	            })));
	        case _modal.INIT_MODAL:
	            return _extends({}, state, _defineProperty({}, action.name, {
	                isClosing: false,
	                isVisible: false
	            }));
	        case _modal.OPEN_MODAL:
	            return _extends({}, state, _defineProperty({}, action.name, _extends({}, state[action.name], {
	                isVisible: true
	            })));
	        default:
	            return state;
	    }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var CLOSE_MODAL_BEGIN = exports.CLOSE_MODAL_BEGIN = 'CLOSE_MODAL_BEGIN';
	var CLOSE_MODAL_END = exports.CLOSE_MODAL_END = 'CLOSE_MODAL_END';
	var INIT_MODAL = exports.INIT_MODAL = 'INIT_MODAL';
	var OPEN_MODAL = exports.OPEN_MODAL = 'OPEN_MODAL';

	var closeModal = exports.closeModal = function closeModal(name) {
	    return function (dispatch) {
	        dispatch({
	            name: name,
	            type: CLOSE_MODAL_BEGIN
	        });

	        setTimeout(function () {
	            return dispatch({
	                name: name,
	                type: CLOSE_MODAL_END
	            });
	        }, 400);
	    };
	};

	var initModal = exports.initModal = function initModal(name) {
	    return {
	        name: name,
	        type: INIT_MODAL
	    };
	};

	var openModal = exports.openModal = function openModal(name) {
	    return {
	        name: name,
	        type: OPEN_MODAL
	    };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _portfolio = __webpack_require__(19);

	var defaultState = {
	    hasLoaded: false,
	    hasLoadedError: false,
	    isLoading: false,
	    projects: []
	};

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	    var action = arguments[1];


	    switch (action.type) {
	        case _portfolio.FETCH_PORTFOLIO:
	            return _extends({}, state, {
	                isLoading: true
	            });
	        case _portfolio.RECEIVE_PORTFOLIO:
	            return {
	                hasLoaded: true,
	                hasLoadedError: false,
	                isLoading: false,
	                projects: action.projects
	            };
	        case _portfolio.RECEIVE_PORTFOLIO_ERROR:
	            return _extends({}, state, {
	                hasLoaded: false,
	                hasLoadedError: true,
	                isLoading: false
	            });
	        default:
	            return state;
	    }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchPortfolio = exports.RECEIVE_PORTFOLIO_ERROR = exports.RECEIVE_PORTFOLIO = exports.FETCH_PORTFOLIO = undefined;

	var _portfolio = __webpack_require__(20);

	var FETCH_PORTFOLIO = exports.FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
	var RECEIVE_PORTFOLIO = exports.RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
	var RECEIVE_PORTFOLIO_ERROR = exports.RECEIVE_PORTFOLIO_ERROR = 'RECEIVE_PORTFOLIO_ERROR';

	var fetchPortfolio = exports.fetchPortfolio = function fetchPortfolio() {
	    return function (dispatch) {

	        dispatch({ type: FETCH_PORTFOLIO });

	        (0, _portfolio.getPortfolio)(true).then(function (projects) {
	            return dispatch({
	                projects: projects,
	                type: RECEIVE_PORTFOLIO
	            });
	        }).catch(function () {
	            return dispatch({ type: RECEIVE_PORTFOLIO_ERROR });
	        });
	    };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _config = __webpack_require__(21);

	var _superagent = __webpack_require__(22);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {

	    getPortfolio: function getPortfolio() {
	        var isResume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	        var param = isResume ? '?format=resume' : '';
	        return new Promise(function (resolve, reject) {
	            _superagent2.default.get(_config.API_URL + '/api/portfolio/' + param).end(function (err, res) {
	                if (err) {
	                    reject(err);
	                }

	                var items = void 0;
	                try {
	                    items = res && res.text ? JSON.parse(res.text) : '';
	                } catch (error) {
	                    reject('Error parsing JSON: ' + error);
	                }

	                if (Array.isArray(items)) {
	                    resolve(items);
	                } else {
	                    reject('An unexpected error occurred');
	                }
	            });
	        });
	    },

	    getPortfolioItem: function getPortfolioItem(uri) {
	        return new Promise(function (resolve, reject) {
	            _superagent2.default.get(_config.API_URL + '/api/portfolio/item/' + uri).end(function (err, res) {
	                // Not found
	                if (!res) {
	                    var notFound = new Error('Invalid portfolio item');
	                    notFound.status = 404;
	                    reject(notFound);
	                }

	                if (err) {
	                    reject(err);
	                }

	                var projectData = void 0;
	                try {
	                    projectData = res && res.text ? JSON.parse(res.text) : '';
	                } catch (error) {
	                    reject('Error parsing JSON: ' + error);
	                }

	                if ((typeof projectData === 'undefined' ? 'undefined' : _typeof(projectData)) === 'object') {
	                    resolve(projectData);
	                } else {
	                    // TODO - 404 handling
	                    reject('An unexpected error occurred');
	                }
	            });
	        });
	    }

	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    API_URL: 'https://app.tannerfiscus.com',
	    PROJECT_STATIC_ASSET_URL: 'https://app.tannerfiscus.com/static/portfolio/graphics'
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("superagent");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _modal = __webpack_require__(17);

	var _projects = __webpack_require__(24);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _fetchProject = function _fetchProject(state, _ref) {
	    var urlPath = _ref.urlPath;
	    return _extends({}, state, _defineProperty({}, urlPath, {
	        hasLoaded: false,
	        hasLoadedError: false,
	        isLoading: true,
	        isVisible: true
	    }));
	};

	// For resume projects, when the modal is closed. If
	// this is 'resumeProject', then we can set `isVisible`
	// to false for all projects
	var _hideProjectIfNeeded = function _hideProjectIfNeeded(state, _ref2) {
	    var name = _ref2.name;


	    if (name === 'resumeProject') {
	        var _ret = function () {
	            var updatedState = {};

	            Object.keys(state).forEach(function (projectKey) {
	                updatedState[projectKey] = _extends({}, state[projectKey], {
	                    isVisible: false
	                });
	            });

	            return {
	                v: updatedState
	            };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    return state;
	};

	var _receiveProject = function _receiveProject(state, _ref3) {
	    var data = _ref3.data,
	        urlPath = _ref3.urlPath;
	    return _extends({}, state, _defineProperty({}, urlPath, {
	        data: data,
	        hasLoaded: true,
	        hasLoadedError: false,
	        isLoading: false,
	        isVisible: true
	    }));
	};

	var _receiveProjectError = function _receiveProjectError(state, _ref4) {
	    var urlPath = _ref4.urlPath;
	    return _extends({}, state, _defineProperty({}, urlPath, {
	        hasLoaded: false,
	        hasLoadedError: true,
	        isLoading: false,
	        isVisible: true
	    }));
	};

	var _showProject = function _showProject(state, _ref5) {
	    var urlPath = _ref5.urlPath;
	    return _extends({}, state, _defineProperty({}, urlPath, _extends({}, state[urlPath], {
	        isVisible: true
	    })));
	};

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];


	    switch (action.type) {
	        case _modal.CLOSE_MODAL_BEGIN:
	            return _hideProjectIfNeeded(state, action);
	        case _projects.FETCH_PROJECT:
	            return _fetchProject(state, action);
	        case _projects.RECEIVE_PROJECT:
	            return _receiveProject(state, action);
	        case _projects.RECEIVE_PROJECT_ERROR:
	            return _receiveProjectError(state, action);
	        case _projects.SHOW_PROJECT:
	            return _showProject(state, action);
	        default:
	            return state;
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchProject = exports.SHOW_PROJECT = exports.RECEIVE_PROJECT_ERROR = exports.RECEIVE_PROJECT = exports.FETCH_PROJECT = undefined;

	var _portfolio = __webpack_require__(20);

	var FETCH_PROJECT = exports.FETCH_PROJECT = 'FETCH_PROJECT';
	var RECEIVE_PROJECT = exports.RECEIVE_PROJECT = 'RECEIVE_PROJECT';
	var RECEIVE_PROJECT_ERROR = exports.RECEIVE_PROJECT_ERROR = 'RECEIVE_PROJECT_ERROR';
	var SHOW_PROJECT = exports.SHOW_PROJECT = 'SHOW_PROJECT';

	var _fetchProject = function _fetchProject(urlPath) {
	    return {
	        type: FETCH_PROJECT,
	        urlPath: urlPath
	    };
	};

	var _receiveProject = function _receiveProject(data, urlPath) {
	    return {
	        data: data,
	        type: RECEIVE_PROJECT,
	        urlPath: urlPath
	    };
	};

	var _receiveProjectError = function _receiveProjectError(urlPath) {
	    return {
	        type: RECEIVE_PROJECT_ERROR,
	        urlPath: urlPath
	    };
	};

	var _showProject = function _showProject(urlPath) {
	    return {
	        type: SHOW_PROJECT,
	        urlPath: urlPath
	    };
	};

	var fetchProject = exports.fetchProject = function fetchProject(urlPath) {
	    return function (dispatch, getState) {
	        var _getState = getState(),
	            projects = _getState.projects;

	        // Was already retrieved successfully


	        if (projects[urlPath] && !projects[urlPath].hasLoadedError) {
	            return dispatch(_showProject(urlPath));
	        }

	        dispatch(_fetchProject(urlPath));

	        (0, _portfolio.getPortfolioItem)(urlPath).then(function (project) {
	            return dispatch(_receiveProject(project, urlPath));
	        }).catch(function (err) {
	            console.log('err', err);return dispatch(_receiveProjectError(urlPath));
	        });
	    };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("redux-form");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _About = __webpack_require__(28);

	var _About2 = _interopRequireDefault(_About);

	var _App = __webpack_require__(38);

	var _App2 = _interopRequireDefault(_App);

	var _Blog = __webpack_require__(45);

	var _Blog2 = _interopRequireDefault(_Blog);

	var _BlogCategory = __webpack_require__(51);

	var _BlogCategory2 = _interopRequireDefault(_BlogCategory);

	var _BlogPost = __webpack_require__(53);

	var _BlogPost2 = _interopRequireDefault(_BlogPost);

	var _Contact = __webpack_require__(54);

	var _Contact2 = _interopRequireDefault(_Contact);

	var _Freelance = __webpack_require__(57);

	var _Freelance2 = _interopRequireDefault(_Freelance);

	var _Home = __webpack_require__(58);

	var _Home2 = _interopRequireDefault(_Home);

	var _reactRouter = __webpack_require__(13);

	var _NotFound = __webpack_require__(52);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Portfolio = __webpack_require__(60);

	var _Portfolio2 = _interopRequireDefault(_Portfolio);

	var _Project = __webpack_require__(61);

	var _Project2 = _interopRequireDefault(_Project);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _Resume = __webpack_require__(70);

	var _Resume2 = _interopRequireDefault(_Resume);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/portfolio', component: _Portfolio2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/:itemId', component: _Project2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/freelance', component: _Freelance2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/freelance/hire', component: _Freelance2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/resume', component: _Resume2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/thoughts', component: _Blog2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/thoughts/:category', component: _BlogCategory2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/thoughts/:category/:postFragment', component: _BlogPost2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
	);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AboutBio = __webpack_require__(29);

	var _AboutBio2 = _interopRequireDefault(_AboutBio);

	var _AboutCallouts = __webpack_require__(30);

	var _AboutCallouts2 = _interopRequireDefault(_AboutCallouts);

	var _Cover = __webpack_require__(32);

	var _Cover2 = _interopRequireDefault(_Cover);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _AboutIntro = __webpack_require__(33);

	var _AboutIntro2 = _interopRequireDefault(_AboutIntro);

	var _PageContent = __webpack_require__(34);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _AboutTimeline = __webpack_require__(35);

	var _AboutTimeline2 = _interopRequireDefault(_AboutTimeline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var About = function About() {
	    return _react2.default.createElement(
	        'section',
	        { className: 'page-about' },
	        _react2.default.createElement(_reactHelmet2.default, {
	            meta: [{ name: 'description', content: 'View my experience, find out a little bit about me, and see why I have a passion for building a better web.' }, { property: 'og:title', content: 'About Tanner Fiscus' }, { property: 'og:description', content: 'I\'m passionate about building a better web' }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://tannerfisc.us/about/' }, { property: 'og:image', content: 'https://tannerfisc.us/assets/og/about-me.jpg' }],
	            title: 'About Me \u2013 Tanner Fiscus' }),
	        _react2.default.createElement(_Cover2.default, { title: 'Hi, I\'m Tanner',
	            backgroundImage: '/assets/about-graphic.jpg' }),
	        _react2.default.createElement(
	            _PageContent2.default,
	            null,
	            _react2.default.createElement(_AboutIntro2.default, null),
	            _react2.default.createElement(_AboutTimeline2.default, null),
	            _react2.default.createElement(_AboutBio2.default, null),
	            _react2.default.createElement(_AboutCallouts2.default, null)
	        )
	    );
	};

	exports.default = About;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AboutBio = function AboutBio() {
	    return _react2.default.createElement(
	        'section',
	        { className: 'pad-section-large' },
	        _react2.default.createElement(
	            'h5',
	            { className: 'align-center' },
	            'A Little More About Me'
	        ),
	        _react2.default.createElement(
	            'ul',
	            { className: 'about-me-bio align-center' },
	            _react2.default.createElement(
	                'li',
	                null,
	                'I work with an extraordinarily talented team building the future of Niche.com. ',
	                _react2.default.createElement('i', { className: 'twa twa-school' }),
	                _react2.default.createElement('i', { className: 'twa twa-house-with-garden' })
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                'React ',
	                _react2.default.createElement('i', { className: 'twa twa-heart' }),
	                ', Sass, and LESS are just a few of the things I work with every day.'
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                'I\'m currently designing and developing from Pittsburgh, PA. ',
	                _react2.default.createElement('i', { className: 'twa twa-computer' })
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                'I write a bunch of cool things with vanilla Javascript. ',
	                _react2.default.createElement('i', { className: 'twa twa-heart-eyes' })
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                'I\'m always learning something new. #juniordevforlife'
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                'I\'m fluent in Javascript, CSS, and HTML.'
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                'I\'m determined to travel the world. ',
	                _react2.default.createElement('i', { className: 'twa twa-airplane' })
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                'I couldn\'t survive without coffee. ',
	                _react2.default.createElement('i', { className: 'twa twa-coffee' })
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                'I have an adorable fur baby. ',
	                _react2.default.createElement('i', { className: 'twa twa-dog' })
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                'I enjoy vegan eats. ',
	                _react2.default.createElement('i', { className: 'twa twa-fork-and-knife' })
	            )
	        )
	    );
	};

	exports.default = AboutBio;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRouter = __webpack_require__(13);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _scroll = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AboutCallouts = function AboutCallouts() {
	    return _react2.default.createElement(
	        'section',
	        { className: 'pad-section-large' },
	        _react2.default.createElement(
	            'div',
	            { className: 'grid' },
	            _react2.default.createElement(
	                'div',
	                { className: 'grid-spread-6 grid-flex-3 grid-pad-3' },
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { className: 'button button-inflate button-block',
	                        onClick: _scroll.scrollToTop,
	                        to: '/portfolio' },
	                    'View My Work \u2192'
	                )
	            )
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: 'grid' },
	            _react2.default.createElement(
	                'div',
	                { className: 'grid-spread-6 grid-flex-3 grid-pad-3' },
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { className: 'button button-inverted button-inflate button-block',
	                        onClick: _scroll.scrollToTop,
	                        to: '/resume' },
	                    'View My Resume \u2192'
	                )
	            )
	        )
	    );
	};

	exports.default = AboutCallouts;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var scrollToTop = exports.scrollToTop = function scrollToTop() {
	    document.body.scrollTop = document.documentElement.scrollTop = 0;
	};

	exports.default = {
	    scrollToTop: scrollToTop
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getClasses = function getClasses(coverImage, coverPortfolio, coverHomePage, coverWithTitle) {
		var classes = ['cover'];

		if (!!coverImage) {
			classes.push('cover-image');
		}
		if (!!coverPortfolio) {
			classes.push('cover-portfolio');
		}
		if (!!coverHomePage) {
			classes.push('cover-home-page');
		}
		if (!!coverWithTitle) {
			classes.push('cover-with-title');
		}

		return classes.join(' ');
	};

	var renderImage = function renderImage(image) {
		var imageData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		return _react2.default.createElement('img', _extends({ src: image }, imageData));
	};

	var renderTitle = function renderTitle(title) {
		return _react2.default.createElement(
			'h1',
			null,
			title
		);
	};

	var Cover = function Cover(props, context) {
		var classes = getClasses(props.coverImage, props.coverPortfolio, props.coverHomePage, !!props.title);

		// Background image
		var styles = props.backgroundImage ? { backgroundImage: 'url(\'' + props.backgroundImage + '\')' } : {};
		// Background color
		styles = props.background ? _extends({}, styles, { backgroundColor: props.background }) : styles;

		return _react2.default.createElement(
			'section',
			{ className: classes, style: styles },
			props.title && renderTitle(props.title),
			props.image && renderImage(props.image, props.imageData)
		);
	};

	exports.default = Cover;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AboutIntro = function AboutIntro() {
	    return _react2.default.createElement(
	        'section',
	        { className: 'pad-section-large' },
	        _react2.default.createElement(
	            'h2',
	            { className: 'align-center' },
	            'I\'m passionate about building a better web.'
	        )
	    );
	};

	exports.default = AboutIntro;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PageContent = function PageContent(_ref) {
		var children = _ref.children;


		return _react2.default.createElement(
			'div',
			{ className: 'contain main' },
			children
		);
	};

	exports.default = PageContent;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _aboutTimelineItems = __webpack_require__(36);

	var _aboutTimelineItems2 = _interopRequireDefault(_aboutTimelineItems);

	var _Timeline = __webpack_require__(37);

	var _Timeline2 = _interopRequireDefault(_Timeline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AboutTimeline = function AboutTimeline() {
	    return _react2.default.createElement(
	        'section',
	        { className: 'pad-section-large' },
	        _react2.default.createElement(
	            'h5',
	            { className: 'align-center' },
	            'Experience Timeline'
	        ),
	        _react2.default.createElement(_Timeline2.default, {
	            items: _aboutTimelineItems2.default })
	    );
	};

	exports.default = AboutTimeline;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	module.exports = [{
	    date: 'August 2015 - Present',
	    description: 'Building the future of Niche.com with React. I\'m learning something new everyday.',
	    subtitle: 'Niche.com, Inc.',
	    title: 'Front End Engineer'
	}, {
	    date: 'December 2014 - August 2015',
	    description: 'Focused on improving the overall user experience of the intranet with a mobile-first approach.',
	    subtitle: 'Robert Morris University',
	    title: 'Lead User Experience Developer'
	}, {
	    date: 'May 2015',
	    description: 'After completing the "integrated" program at RMU, I obtained both my Masters of Science in Internet Information Systems and Bachelors of Science in Computer Information Systems.',
	    subtitle: 'Robert Morris University',
	    title: 'Graduated <i class="twa twa-mortar-board"></i>'
	}, {
	    date: 'August 2013 - December 2014',
	    description: 'Worked closely with other developers to build modern web applications with a focus on design.',
	    subtitle: 'Robert Morris University',
	    title: 'Associate Programmer Analyst'
	}];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renderTimeline = function renderTimeline(items) {
		return items.map(function (item, i) {
			return renderTimelineItem(item, i);
		});
	};

	var renderTimelineItem = function renderTimelineItem(item, key) {
		return _react2.default.createElement(
			'li',
			{ className: 'timeline-item', key: key },
			_react2.default.createElement(
				'div',
				{ className: 'timeline-blob' },
				_react2.default.createElement('h5', { className: 'timeline-heading', dangerouslySetInnerHTML: { __html: item.title } }),
				_react2.default.createElement(
					'span',
					{ className: 'timeline-subtitle' },
					item.subtitle
				),
				_react2.default.createElement(
					'p',
					null,
					item.description
				),
				_react2.default.createElement(
					'span',
					{ className: 'timeline-date' },
					item.date
				)
			)
		);
	};

	var Timeline = function Timeline(_ref, context) {
		var minimized = _ref.minimized,
		    items = _ref.items;


		var modifier = !!minimized ? ' timeline-minimized' : '';

		return _react2.default.createElement(
			'ul',
			{ className: 'timeline' + modifier },
			items && items.length > 0 && renderTimeline(items)
		);
	};

	exports.default = Timeline;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRedux = __webpack_require__(14);

	var _Footer = __webpack_require__(39);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Header = __webpack_require__(40);

	var _Header2 = _interopRequireDefault(_Header);

	var _storeUtils = __webpack_require__(43);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(44);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _getClasses = function _getClasses(pageName, mounted) {

		var classes = ['app'];

		if (pageName) {
			classes.push('app-page' + pageName);
		}
		if (mounted) {
			classes.push('app-mounted');
		}

		return classes.join(' ');
	};

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props, context) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

			_this.app = null;

			_this.state = {
				mounted: false
			};
			return _this;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var touch = window !== 'undefined' && 'ontouchstart' in document.documentElement;

				if (touch) {
					this.app.classList.remove('app');
					this.app.classList.add('app-touch');
				}

				this.setState({ mounted: true });
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var location = this.props.location;
				var pathname = location.pathname;

				var path = pathname.slice(-1) === '/' ? pathname.substr(0, pathname.length - 1) : pathname;
				var pageHomeModifier = !path ? ' page-home' : '';
				var pageName = path ? path.replace(/\//g, '-') : '-home';

				return _react2.default.createElement(
					'div',
					{ className: _getClasses(pageName, this.state.mounted), ref: function ref(app) {
							return _this2.app = app;
						} },
					_react2.default.createElement(
						_reactAddonsCssTransitionGroup2.default,
						{
							className: 'page' + pageHomeModifier,
							component: 'div',
							transitionAppear: true,
							transitionAppearTimeout: 1000,
							transitionEnterTimeout: 1000,
							transitionLeaveTimeout: 400,
							transitionName: 'page' },
						_react2.default.createElement(_Header2.default, { key: 'header' }),
						_react2.default.cloneElement(this.props.children, _extends({}, this.props, { key: pathname })),
						_react2.default.createElement(_Footer2.default, { key: 'footer' })
					)
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	App = (0, _reactRedux.connect)(_storeUtils.mapStateToProps, _storeUtils.mapDispatchToProps)(App);

	exports.default = App;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = function Footer(props, context) {
		return _react2.default.createElement(
			'footer',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'contain' },
				_react2.default.createElement(
					'div',
					{ className: 'logo logo-inverted' },
					_react2.default.createElement('div', { className: 'logo-shape' }),
					_react2.default.createElement(
						'div',
						{ className: 'logo-text' },
						'TF'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'grid' },
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-3 padded' },
						_react2.default.createElement(
							'strong',
							null,
							'\xA9 2016'
						),
						_react2.default.createElement('br', null),
						'Tanner Fiscus ',
						_react2.default.createElement('i', { className: 'twa twa-v' }),
						_react2.default.createElement('i', { className: 'twa twa-sunny' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-3 padded' },
						_react2.default.createElement(
							'strong',
							null,
							'Find Me Online'
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'a',
							{ href: 'http://twitter.com/tannerfiscus' },
							'Twitter'
						),
						' \xB7 ',
						_react2.default.createElement(
							'a',
							{ href: 'http://linkedin.com/in/tannerfiscus' },
							'LinkedIn'
						),
						' \xB7 ',
						_react2.default.createElement(
							'a',
							{ href: 'https://github.com/tannerfiscus' },
							'Github'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-6 padded' },
						_react2.default.createElement(
							'strong',
							null,
							'Made with'
						),
						' ',
						_react2.default.createElement('i', { className: 'twa twa-heart' }),
						_react2.default.createElement('br', null),
						'in Pittsburgh, PA'
					)
				)
			)
		);
	};

	exports.default = Footer;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Menu = __webpack_require__(41);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(13);

	var _scroll = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);

		function Header(props, context) {
			_classCallCheck(this, Header);

			var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props, context));

			_this.handleFixedHeader = _this.handleFixedHeader.bind(_this);
			_this.header = null;
			return _this;
		}

		_createClass(Header, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				window.addEventListener('scroll', this.handleFixedHeader, false);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'header',
					{ ref: function ref(h) {
							return _this2.header = h;
						} },
					_react2.default.createElement(
						'div',
						{ className: 'contain' },
						_react2.default.createElement(
							'h5',
							{ className: 'branding' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/',
									onClick: _scroll.scrollToTop },
								_react2.default.createElement(
									'div',
									{ className: 'logo' },
									_react2.default.createElement('div', { className: 'logo-shape' }),
									_react2.default.createElement(
										'div',
										{ className: 'logo-text' },
										'TF'
									)
								)
							)
						),
						_react2.default.createElement(_Menu2.default, null)
					)
				);
			}
		}, {
			key: 'handleFixedHeader',
			value: function handleFixedHeader() {
				var offset = window.pageYOffset;

				if (this.header && offset > 0 && !this.header.classList.contains('header-fixed')) {
					this.header.classList.add('header-fixed');
				} else if (this.header && offset === 0 && this.header.classList.contains('header-fixed')) {
					this.header.classList.remove('header-fixed');
				}
			}
		}]);

		return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(13);

	var _scroll = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PAGES = [{ url: '/', title: { desktop: 'Home', mobile: '' } }, { url: '/about/', title: { desktop: 'About Me', mobile: 'About' } }, { url: '/portfolio/', title: { desktop: 'My Work', mobile: 'Work' } }, { url: '/contact/', title: { desktop: 'Get In Touch', mobile: 'Contact' } }];

	var _renderMenuItems = function _renderMenuItems() {
		return PAGES.map(function (page) {
			return _react2.default.createElement(
				'li',
				{ key: page.url },
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: page.url,
						onClick: _scroll.scrollToTop },
					_react2.default.createElement(
						'span',
						{ className: 'navigation-list-item--desktop' },
						page.title.desktop
					),
					_react2.default.createElement(
						'span',
						{ className: 'navigation-list-item--mobile' },
						page.title.mobile
					)
				)
			);
		});
	};

	var Menu = function Menu() {
		return _react2.default.createElement(
			'menu',
			{ className: 'navigation' },
			_react2.default.createElement(
				'ul',
				{ className: 'navigation-list' },
				_react2.default.createElement(
					'li',
					{ className: 'navigation-list-title' },
					_react2.default.createElement(
						'h5',
						null,
						'Pages'
					)
				),
				_renderMenuItems()
			)
		);
	};

	exports.default = Menu;

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mapStateToProps = exports.mapDispatchToProps = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _redux = __webpack_require__(6);

	var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    // Empty object since there aren't currently any specific actions for this app
	    var actions = {};
	    return (0, _redux.bindActionCreators)(actions, dispatch);
	};

	var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
	    // Return everything in the state as
	    // a prop except for `routing`, since
	    // that is only consumed by the router
	    var props = _extends({}, state);
	    delete props.routing;

	    return props;
	};

	exports.default = {
	    mapDispatchToProps: mapDispatchToProps,
	    mapStateToProps: mapStateToProps
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("react-addons-css-transition-group");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _APIError = __webpack_require__(46);

	var _APIError2 = _interopRequireDefault(_APIError);

	var _Collection = __webpack_require__(47);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _CollectionItem = __webpack_require__(48);

	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);

	var _Cover = __webpack_require__(32);

	var _Cover2 = _interopRequireDefault(_Cover);

	var _blog = __webpack_require__(49);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactRouter = __webpack_require__(13);

	var _Loading = __webpack_require__(50);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _PageContent = __webpack_require__(34);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _scroll = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Blog = function (_React$Component) {
		_inherits(Blog, _React$Component);

		function Blog(props, context) {
			_classCallCheck(this, Blog);

			var _this = _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).call(this, props, context));

			_this.state = { error: false, blog: {} };
			return _this;
		}

		_createClass(Blog, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'section',
					{ className: 'page-blog' },
					_react2.default.createElement(_reactHelmet2.default, {
						meta: [{ name: 'description', content: 'Thoughts is my online notebook (blog) for sharing what\'s on my mind.' }, { property: 'og:title', content: 'Thoughts' }, { property: 'og:description', content: 'An online notebook by Tanner Fiscus' }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://tannerfisc.us/thoughts/' }, { property: 'og:image', content: 'https://tannerfisc.us/assets/og/thoughts.jpg' }],
						title: 'Thoughts \u2013 An Online Notebook by Tanner Fiscus' }),
					_react2.default.createElement(_Cover2.default, {
						backgroundImage: '/assets/blog-graphic.jpg',
						title: 'Thoughts' }),
					_react2.default.createElement(
						_PageContent2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'pad-section' },
							Object.keys(this.props.blog).length < 1 && !this.props.error && _react2.default.createElement(_Loading2.default, null),
							!!this.props.error && _react2.default.createElement(_APIError2.default, { content: 'my blog' }),
							Object.keys(this.props.blog).length > 0 && this.renderBlog(this.props.blog)
						)
					)
				);
			}
		}, {
			key: 'renderBlog',
			value: function renderBlog(blogData) {
				return _react2.default.createElement(
					'div',
					{ className: 'grid padded' },
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-12 padded' },
						_react2.default.createElement(
							'h5',
							null,
							'Categories'
						),
						_react2.default.createElement(
							'div',
							{ className: 'blog-categories' },
							this.renderCategories(blogData.categories)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-12 padded' },
						_react2.default.createElement(
							'h5',
							{ className: 'blog-recent-posts-title' },
							'Recent Posts'
						),
						_react2.default.createElement(
							_Collection2.default,
							null,
							this.renderBlogPosts(blogData.posts)
						)
					)
				);
			}
		}, {
			key: 'renderBlogPosts',
			value: function renderBlogPosts(posts) {
				return posts.map(function (post, i) {
					var tagline = post.date + ' \xB7 ' + (0, _blog.formatCategoryTitle)(post.category);
					return _react2.default.createElement(_CollectionItem2.default, {
						description: post.body.substring(0, 500),
						image: (0, _blog.buildBlogImageUrl)(post.cover),
						key: i,
						tagline: tagline,
						title: post.title,
						url: '/thoughts/' + post.category + '/' + post.url + '/' });
				});
			}
		}, {
			key: 'renderCategories',
			value: function renderCategories(categories) {
				return categories.map(function (category) {
					return _react2.default.createElement(
						_reactRouter.Link,
						{ className: 'button button-deflate button-inverted',
							onClick: _scroll.scrollToTop,
							to: '/thoughts/' + category.name + '/',
							key: category.name },
						(0, _blog.formatCategoryTitle)(category.name).toUpperCase()
					);
				});
			}
		}], [{
			key: 'loadProps',
			value: function loadProps(params, cb) {
				(0, _blog.getBlog)().then(function (blogData) {
					cb(null, { blog: blogData, error: false });
				}).catch(function (err) {
					cb(null, { blog: {}, error: true });
				});
			}
		}]);

		return Blog;
	}(_react2.default.Component);

	exports.default = Blog;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var APIError = function APIError(_ref) {
	    var content = _ref.content;


	    return _react2.default.createElement(
	        'div',
	        { className: 'api-error align-center' },
	        _react2.default.createElement(
	            'h2',
	            null,
	            _react2.default.createElement('i', { className: 'twa twa-confused' })
	        ),
	        _react2.default.createElement(
	            'h3',
	            null,
	            'There was a problem loading ',
	            content,
	            '.'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            'Mistakes happen, right? I\'m very sorry that this had to happen to you.'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	                'a',
	                { className: 'button', href: '/contact/' },
	                'Report a Problem'
	            )
	        )
	    );
	};

	exports.default = APIError;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Collection = function Collection(_ref, context) {
		var children = _ref.children;
		return _react2.default.createElement(
			'section',
			{ className: 'collection' },
			children
		);
	};

	exports.default = Collection;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRouter = __webpack_require__(13);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _scroll = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CollectionItem = function CollectionItem(_ref) {
	    var description = _ref.description,
	        image = _ref.image,
	        tagline = _ref.tagline,
	        title = _ref.title,
	        url = _ref.url;


	    return _react2.default.createElement(
	        'figure',
	        { className: 'collection-item' },
	        _react2.default.createElement(
	            _reactRouter.Link,
	            { className: 'collection-item-link',
	                onClick: _scroll.scrollToTop,
	                to: url },
	            _react2.default.createElement('img', { src: image, className: 'collection-item-image' }),
	            _react2.default.createElement(
	                'figcaption',
	                null,
	                _react2.default.createElement(
	                    'h6',
	                    { className: 'collection-item-tagline' },
	                    tagline
	                ),
	                _react2.default.createElement(
	                    'h5',
	                    null,
	                    title
	                ),
	                _react2.default.createElement('p', { className: 'collection-item-description',
	                    dangerouslySetInnerHTML: { __html: description } }),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'More \u2192'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { className: 'button button-inflate' },
	                    'More \u2192'
	                )
	            )
	        ),
	        _react2.default.createElement('div', { className: 'border-box-left' }),
	        _react2.default.createElement('div', { className: 'border-box-top' }),
	        _react2.default.createElement('div', { className: 'border-box-right' }),
	        _react2.default.createElement('div', { className: 'border-box-bottom' })
	    );
	};

	exports.default = CollectionItem;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _config = __webpack_require__(21);

	var _superagent = __webpack_require__(22);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {

	    buildBlogImageUrl: function buildBlogImageUrl(imageUrl) {
	        return _config.API_URL + '/assets/blog/graphics/' + imageUrl;
	    },

	    formatCategoryTitle: function formatCategoryTitle(category) {
	        // Remove - and make following letter uppercase
	        var categoryTitle = category.replace(/-([a-z0-9])/ig, function (all, letter) {
	            return ' ' + letter.toUpperCase();
	        });
	        // Make first letter uppercase
	        return categoryTitle.charAt(0).toUpperCase() + categoryTitle.substring(1, categoryTitle.length);
	    },

	    getBlog: function getBlog() {
	        return new Promise(function (resolve, reject) {
	            _superagent2.default.get(_config.API_URL + '/api/blog/').end(function (err, res) {
	                if (err) {
	                    reject(err);
	                }

	                var response = void 0;
	                try {
	                    response = res && res.text ? JSON.parse(res.text) : '';
	                } catch (error) {
	                    reject('Error parsing JSON: ' + error);
	                }

	                if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) === 'object') {
	                    resolve(response);
	                } else {
	                    reject('An unexpected error occurred');
	                }
	            });
	        });
	    },

	    getBlogCategory: function getBlogCategory(category) {
	        return new Promise(function (resolve, reject) {
	            _superagent2.default.get(_config.API_URL + '/api/blog/category/' + category).end(function (err, res) {
	                if (err) {
	                    reject(err);
	                }

	                var response = void 0;
	                try {
	                    response = res && res.text ? JSON.parse(res.text) : '';
	                } catch (error) {
	                    reject('Error parsing JSON: ' + error);
	                }

	                if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) === 'object') {
	                    resolve(response);
	                } else {
	                    reject('An unexpected error occurred');
	                }
	            });
	        });
	    },

	    getBlogPost: function getBlogPost(category, postFragment) {
	        return new Promise(function (resolve, reject) {
	            _superagent2.default.get(_config.API_URL + '/api/blog/post/' + category + '/' + postFragment).end(function (err, res) {
	                if (err) {
	                    reject(err);
	                }

	                var response = void 0;
	                try {
	                    response = res && res.text ? JSON.parse(res.text) : '';
	                } catch (error) {
	                    reject('Error parsing JSON: ' + error);
	                }

	                if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) === 'object') {
	                    resolve(response);
	                } else {
	                    reject('An unexpected error occurred');
	                }
	            });
	        });
	    }

	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Loading = function Loading() {

		return _react2.default.createElement(
			'figure',
			{ className: 'loading' },
			_react2.default.createElement(
				'ul',
				{ className: 'loading-circles' },
				_react2.default.createElement('li', { className: 'loading-circle-1' }),
				_react2.default.createElement('li', { className: 'loading-circle-2' }),
				_react2.default.createElement('li', { className: 'loading-circle-3' })
			),
			_react2.default.createElement(
				'figcaption',
				null,
				'Loading...'
			)
		);
	};

	exports.default = Loading;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _APIError = __webpack_require__(46);

	var _APIError2 = _interopRequireDefault(_APIError);

	var _Collection = __webpack_require__(47);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _CollectionItem = __webpack_require__(48);

	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);

	var _blog = __webpack_require__(49);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Loading = __webpack_require__(50);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _NotFound = __webpack_require__(52);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _PageContent = __webpack_require__(34);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BlogCategory = function (_React$Component) {
		_inherits(BlogCategory, _React$Component);

		function BlogCategory() {
			_classCallCheck(this, BlogCategory);

			return _possibleConstructorReturn(this, (BlogCategory.__proto__ || Object.getPrototypeOf(BlogCategory)).apply(this, arguments));
		}

		_createClass(BlogCategory, [{
			key: 'render',
			value: function render() {
				var category = this.props.params.category;
				var _props$category = this.props.category,
				    error = _props$category.error,
				    notFound = _props$category.notFound,
				    posts = _props$category.posts;

				var formattedCategory = (0, _blog.formatCategoryTitle)(category);

				if (Boolean(notFound)) {
					return _react2.default.createElement(_NotFound2.default, null);
				}

				return _react2.default.createElement(
					'section',
					{ className: 'page-blog-category' },
					_react2.default.createElement(_reactHelmet2.default, {
						meta: [{ name: 'description', content: 'A collection of posts regarding my thoughts on ' + formattedCategory + '.' }, { property: 'og:title', content: 'Thoughts on ' + formattedCategory }, { property: 'og:description', content: 'An online notebook by Tanner Fiscus' }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://tannerfisc.us/thoughts/' + category + '/' }, { property: 'og:image', content: 'https://tannerfisc.us/assets/og/thoughts.jpg' }],
						title: 'Thoughts on ' + formattedCategory + ' \u2013 An Online Notebook by Tanner Fiscus' }),
					_react2.default.createElement(
						_PageContent2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'pad-section blog-category-header' },
							_react2.default.createElement(
								'h6',
								null,
								'Category'
							),
							_react2.default.createElement(
								'h1',
								null,
								(0, _blog.formatCategoryTitle)(category)
							)
						),
						Object.keys(posts).length < 1 && !error && _react2.default.createElement(_Loading2.default, null),
						Boolean(error) && _react2.default.createElement(_APIError2.default, { content: 'my blog' }),
						Object.keys(posts).length > 0 && this.renderPosts(posts)
					)
				);
			}
		}, {
			key: 'renderPosts',
			value: function renderPosts(posts) {
				return _react2.default.createElement(
					_Collection2.default,
					null,
					this.renderBlogPosts(posts)
				);
			}
		}, {
			key: 'renderBlogPosts',
			value: function renderBlogPosts(posts) {
				return posts.map(function (post, i) {
					var tagline = post.date + ' \xB7 ' + (0, _blog.formatCategoryTitle)(post.category);
					return _react2.default.createElement(_CollectionItem2.default, {
						description: post.body.substring(0, 500),
						image: (0, _blog.buildBlogImageUrl)(post.cover),
						key: i,
						tagline: tagline,
						title: post.title,
						url: './' + post.url + '/' });
				});
			}
		}], [{
			key: 'loadProps',
			value: function loadProps(_ref, cb) {
				var category = _ref.params.category;

				(0, _blog.getBlogCategory)(category).then(function (posts) {
					var notFound = Array.isArray(posts) && posts.length ? false : true;

					cb(null, {
						category: {
							error: false,
							notFound: notFound,
							posts: notFound ? [] : posts
						}
					});
				}).catch(function (err) {
					cb(null, {
						category: {
							error: true,
							notFound: false,
							posts: []
						}
					});
				});
			}
		}]);

		return BlogCategory;
	}(_react2.default.Component);

	exports.default = BlogCategory;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotFound = function NotFound(props, context) {
		return _react2.default.createElement(
			'section',
			{ className: 'page-not-found min-vh' },
			_react2.default.createElement(
				'div',
				{ className: 'align-center' },
				_react2.default.createElement(
					'h1',
					null,
					_react2.default.createElement('i', { className: 'twa twa-anguished' }),
					_react2.default.createElement('br', null),
					'There\'s nothing here.'
				),
				_react2.default.createElement(
					'h5',
					null,
					'The page you were looking for was not found.'
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'a',
						{ className: 'button button-inflate button-inverted', href: '/' },
						'\u2190 Back to tannerfisc.us'
					)
				)
			)
		);
	};

	exports.default = NotFound;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _APIError = __webpack_require__(46);

	var _APIError2 = _interopRequireDefault(_APIError);

	var _Collection = __webpack_require__(47);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _CollectionItem = __webpack_require__(48);

	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);

	var _Cover = __webpack_require__(32);

	var _Cover2 = _interopRequireDefault(_Cover);

	var _blog = __webpack_require__(49);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactRouter = __webpack_require__(13);

	var _Loading = __webpack_require__(50);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _NotFound = __webpack_require__(52);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _PageContent = __webpack_require__(34);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _scroll = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BlogCategory = function (_React$Component) {
		_inherits(BlogCategory, _React$Component);

		function BlogCategory() {
			_classCallCheck(this, BlogCategory);

			return _possibleConstructorReturn(this, (BlogCategory.__proto__ || Object.getPrototypeOf(BlogCategory)).apply(this, arguments));
		}

		_createClass(BlogCategory, [{
			key: 'render',
			value: function render() {
				var _props$params = this.props.params,
				    category = _props$params.category,
				    postFragment = _props$params.postFragment;
				var _props$post = this.props.post,
				    data = _props$post.data,
				    error = _props$post.error,
				    notFound = _props$post.notFound;


				if (!!notFound) {
					return _react2.default.createElement(_NotFound2.default, null);
				}
				return _react2.default.createElement(
					'section',
					{ className: 'page-blog-post' },
					_react2.default.createElement(_reactHelmet2.default, {
						meta: [{ name: 'description', content: 'A blog post by Tanner Fiscus' }, { property: 'og:title', content: '' + data.title }, { property: 'og:description', content: 'An online notebook entry by Tanner Fiscus' }, { property: 'og:type', content: 'article' }, { property: 'og:url', content: 'https://tannerfisc.us/thoughts/' + category + '/' + postFragment + '/' }, { property: 'og:image', content: (0, _blog.buildBlogImageUrl)(data.cover) }],
						title: '' + data.title }),
					Object.keys(data).length < 1 && !error && _react2.default.createElement(_Loading2.default, null),
					error && _react2.default.createElement(_APIError2.default, { content: 'this blog post' }),
					Object.keys(data).length > 0 && this.renderPost(data)
				);
			}
		}, {
			key: 'renderPost',
			value: function renderPost(post) {
				return _react2.default.createElement(
					'div',
					{ className: 'blog-post' },
					_react2.default.createElement(_Cover2.default, {
						backgroundImage: (0, _blog.buildBlogImageUrl)(post.cover),
						title: post.title }),
					_react2.default.createElement(
						_PageContent2.default,
						null,
						_react2.default.createElement(
							'div',
							{ className: 'pad-section blog-post-wrapper' },
							_react2.default.createElement(
								'div',
								{ className: 'blog-post-breadcrumbs' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/thoughts/', onClick: _scroll.scrollToTop },
									'Thoughts'
								),
								' about ',
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/thoughts/' + post.category + '/', onClick: _scroll.scrollToTop },
									(0, _blog.formatCategoryTitle)(post.category)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'blog-post-date' },
								post.date
							),
							_react2.default.createElement('section', { className: 'blog-post-content',
								dangerouslySetInnerHTML: { __html: post.body } })
						)
					)
				);
			}
		}], [{
			key: 'loadProps',
			value: function loadProps(_ref, cb) {
				var _ref$params = _ref.params,
				    category = _ref$params.category,
				    postFragment = _ref$params.postFragment;

				(0, _blog.getBlogPost)(category, postFragment).then(function (data) {
					var post = data.post && data.post[0] ? data.post[0] : null;

					cb(null, {
						post: {
							data: post,
							error: false,
							notFound: post ? false : true
						}
					});
				}).catch(function (err) {
					cb(null, {
						post: {
							data: {},
							error: true,
							notFound: false
						}
					});
				});
			}
		}]);

		return BlogCategory;
	}(_react2.default.Component);

	exports.default = BlogCategory;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ContactForm = __webpack_require__(55);

	var _ContactForm2 = _interopRequireDefault(_ContactForm);

	var _Cover = __webpack_require__(32);

	var _Cover2 = _interopRequireDefault(_Cover);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _PageContent = __webpack_require__(34);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Contact = function Contact(props, context) {
		return _react2.default.createElement(
			'section',
			{ className: 'page-about' },
			_react2.default.createElement(_reactHelmet2.default, {
				meta: [{ name: 'description', content: 'An online form for connecting with me.' }],
				title: 'Get In Touch \u2013 Tanner Fiscus' }),
			_react2.default.createElement(_Cover2.default, {
				backgroundImage: '/assets/contact-graphic.jpg',
				title: 'Let\'s Connect' }),
			_react2.default.createElement(
				_PageContent2.default,
				null,
				_react2.default.createElement(
					'div',
					{ className: 'pad-section grid' },
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-8 grid-flex-2 grid-pad-2' },
						_react2.default.createElement(
							'h3',
							{ className: 'contact-title' },
							_react2.default.createElement('i', { className: 'twa twa-wave' }),
							' Breaking the ice can be awkward, right?'
						),
						_react2.default.createElement(
							'h5',
							{ className: 'contact-subtitle' },
							'No need to worry. Just fill out the form and I\'ll take it from there.'
						),
						_react2.default.createElement(_ContactForm2.default, null)
					)
				)
			)
		);
	};

	exports.default = Contact;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(21);

	var _reduxForm = __webpack_require__(25);

	var _Loading = __webpack_require__(50);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _superagent = __webpack_require__(22);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _contact = __webpack_require__(56);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactForm = function (_React$Component) {
		_inherits(ContactForm, _React$Component);

		function ContactForm(props, context) {
			_classCallCheck(this, ContactForm);

			var _this = _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call(this, props, context));

			_this.state = {
				submitted: {},
				submitting: false
			};

			_this.handleSubmisson = _this.handleSubmisson.bind(_this);
			_this.renderField = _this.renderField.bind(_this);
			return _this;
		}

		_createClass(ContactForm, [{
			key: 'render',
			value: function render() {
				var _props = this.props,
				    handleSubmit = _props.handleSubmit,
				    pristine = _props.pristine,
				    reset = _props.reset;


				return _react2.default.createElement(
					'div',
					{ className: 'contact-form' },
					!!this.state.submitting && _react2.default.createElement(_Loading2.default, null),
					_react2.default.createElement(
						'form',
						{ onSubmit: handleSubmit(this.handleSubmisson) },
						_react2.default.createElement(_reduxForm.Field, { name: 'name', type: 'text', component: this.renderField, label: 'Name' }),
						_react2.default.createElement(_reduxForm.Field, { name: 'email', type: 'email', component: this.renderField, label: 'Email' }),
						_react2.default.createElement(_reduxForm.Field, { name: 'message', type: 'textarea', component: this.renderField, label: 'Message' }),
						!!this.state.submitted.error && this.renderSubmitError(),
						_react2.default.createElement(
							'div',
							{ className: 'grid' },
							_react2.default.createElement(
								'div',
								{ className: 'grid-spread-3 grid-flex-9 form-group' },
								_react2.default.createElement(
									'button',
									{ type: 'submit', className: 'button button-block' },
									'Send'
								)
							)
						)
					),
					!!this.state.submitted.success && this.renderSuccessMessage()
				);
			}
		}, {
			key: 'getFixedState',
			value: function getFixedState(e) {
				if (e.target.value) {
					e.target.parentElement.classList.add('fixed');
				} else {
					e.target.parentElement.classList.remove('fixed');
				}
			}
		}, {
			key: 'handleSubmisson',
			value: function handleSubmisson(formData) {
				var _this2 = this;

				this.setState({ submitting: true });

				_superagent2.default.get(_config.API_URL + '/api/contact/?name=' + formData.name + '&email=' + formData.email + '&message=' + formData.message).end(function (err, res) {

					_this2.setState({ submitting: false });

					if (err || res.error) {
						_this2.setState({ submitted: { error: true } });
					} else {
						_this2.setState({ submitted: { success: true } });
					}
				});
			}
		}, {
			key: 'renderField',
			value: function renderField(_ref) {
				var name = _ref.name,
				    input = _ref.input,
				    label = _ref.label,
				    type = _ref.type,
				    _ref$meta = _ref.meta,
				    touched = _ref$meta.touched,
				    error = _ref$meta.error;

				return _react2.default.createElement(
					'div',
					{ className: 'form-group' },
					['email', 'text'].includes(type) && _react2.default.createElement('input', _extends({}, input, { className: 'input', type: type, onBlur: this.getFixedState })),
					type === 'textarea' && _react2.default.createElement('textarea', _extends({}, input, { onBlur: this.getFixedState })),
					_react2.default.createElement(
						'label',
						{ htmlFor: name },
						label
					),
					touched && error && _react2.default.createElement(
						'span',
						{ className: 'input-error' },
						error
					)
				);
			}
		}, {
			key: 'renderSubmitError',
			value: function renderSubmitError() {
				return _react2.default.createElement(
					'h6',
					{ className: 'input-submit-error' },
					_react2.default.createElement('i', { className: 'twa twa-disappointed' }),
					' ',
					_react2.default.createElement(
						'strong',
						null,
						'An error occurred'
					),
					' during submission. Please ensure you have filled out the entire form and try again.'
				);
			}
		}, {
			key: 'renderSuccessMessage',
			value: function renderSuccessMessage() {
				return _react2.default.createElement(
					'div',
					{ className: 'input-submit-success' },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'ul',
							{ className: 'icon-heading' },
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement('i', { className: 'twa twa-e-mail' })
							)
						),
						_react2.default.createElement(
							'h2',
							null,
							'Thanks for reaching out!'
						),
						_react2.default.createElement(
							'h5',
							null,
							'I will get back to you as soon as possible.'
						)
					)
				);
			}
		}]);

		return ContactForm;
	}(_react2.default.Component);

	ContactForm = (0, _reduxForm.reduxForm)({
		form: 'contact',
		validate: _contact.validateForm
	})(ContactForm);

	exports.default = ContactForm;

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    validateForm: function validateForm(values) {
	        var errors = {};

	        if (!values.name) {
	            errors.name = 'Please provide your name.';
	        }

	        var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        if (!values.email) {
	            errors.email = 'Please provide your email address.';
	        } else if (!validEmail.test(values.email)) {
	            errors.email = 'Please provide a valid email address.';
	        }

	        var noHtml = /^((?!\0|<([a-zA-z]|!|\/|\?)|(&#)).)*$/;
	        if (!values.message) {
	            errors.message = 'Please provide a message.';
	        } else if (!noHtml.test(values.message)) {
	            errors.message = 'Please provide only unformatted text.';
	        }

	        return errors;
	    }
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Cover = __webpack_require__(32);

	var _Cover2 = _interopRequireDefault(_Cover);

	var _PageContent = __webpack_require__(34);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Freelance = function Freelance() {

		return _react2.default.createElement(
			'section',
			{ className: 'page-about' },
			_react2.default.createElement(_Cover2.default, { backgroundImage: '/assets/freelance-graphic.jpg' }),
			_react2.default.createElement(
				_PageContent2.default,
				null,
				_react2.default.createElement(
					'section',
					{ className: 'pad-section-large' },
					_react2.default.createElement(
						'h1',
						{ className: 'align-center' },
						'Want to work together?'
					),
					_react2.default.createElement(
						'h5',
						{ className: 'align-center' },
						'Unfortunately, I\'m not accepting new work at this time.'
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'pad-section-large grid' },
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-6 grid-flex-3 grid-pad-3' },
						_react2.default.createElement(
							'p',
							{ className: 'align-center' },
							'If you\'d like to work together on a project and have a flexible deadline, please feel free to get in touch with me. I\'m not currently accepting new work, but will consider requests that do not have an immediate deadline. Cheers, friends. ',
							_react2.default.createElement('i', { className: 'twa twa-beers' })
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'pad-section-large grid' },
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-4 grid-flex-4 grid-pad-4' },
						_react2.default.createElement(
							'a',
							{ className: 'button button-inflate button-block',
								href: '/contact/' },
							'Let\'s Get In Touch'
						)
					)
				)
			)
		);
	};

	exports.default = Freelance;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Intro = __webpack_require__(59);

	var _Intro2 = _interopRequireDefault(_Intro);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function Home(props, context) {

		return _react2.default.createElement(
			'section',
			{ className: 'page-home' },
			_react2.default.createElement(_reactHelmet2.default, {
				meta: [{ name: 'description', content: 'Hi, I\'m Tanner. I\'m a front-end developer and designer living in Pittsburgh, PA. I have a passion for building a better web.' }, { property: 'og:title', content: 'Tanner Fiscus' }, { property: 'og:description', content: 'Front-end developer and designer living in Pittsburgh, PA' }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://tannerfisc.us' }, { property: 'og:image', content: 'https://tannerfisc.us/assets/og/home.jpg' }],
				title: 'Tanner Fiscus \u2013 Front-end Developer and Designer' }),
			_react2.default.createElement(_Intro2.default, null)
		);
	};

	exports.default = Home;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cover = function (_React$Component) {
		_inherits(Cover, _React$Component);

		function Cover() {
			_classCallCheck(this, Cover);

			return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).apply(this, arguments));
		}

		_createClass(Cover, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (document && document.getElementsByClassName('page')[0]) {
					setTimeout(function () {
						document.getElementsByClassName('page')[0].classList.add('page-home-enter');
					}, 100);
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				if (document && document.getElementsByClassName('page')[0]) {
					document.getElementsByClassName('page')[0].classList.remove('page-home-enter');
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'section',
					{ className: 'intro' },
					_react2.default.createElement(
						'h1',
						{ className: 'intro-text' },
						_react2.default.createElement(
							'div',
							{ className: 'intro-text-group' },
							_react2.default.createElement(
								'div',
								{ className: 'intro-text-top' },
								'Developer.'
							),
							_react2.default.createElement(
								'div',
								{ className: 'intro-text-bottom' },
								'Designer.'
							)
						)
					),
					_react2.default.createElement('div', { className: 'intro-image' })
				);
			}
		}]);

		return Cover;
	}(_react2.default.Component);

	exports.default = Cover;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _APIError = __webpack_require__(46);

	var _APIError2 = _interopRequireDefault(_APIError);

	var _Cover = __webpack_require__(32);

	var _Cover2 = _interopRequireDefault(_Cover);

	var _portfolio = __webpack_require__(20);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Loading = __webpack_require__(50);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _PageContent = __webpack_require__(34);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Portfolio = function (_React$Component) {
		_inherits(Portfolio, _React$Component);

		function Portfolio() {
			_classCallCheck(this, Portfolio);

			return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
		}

		_createClass(Portfolio, [{
			key: 'render',
			value: function render() {
				var _props$portfolio = this.props.portfolio,
				    error = _props$portfolio.error,
				    items = _props$portfolio.items;


				return _react2.default.createElement(
					'section',
					{ className: 'page-portfolio' },
					_react2.default.createElement(_reactHelmet2.default, {
						meta: [{ name: 'description', content: 'Travel through time and catch a glimpse of the work that I\'ve developed over the years.' },, { property: 'og:title', content: 'My Work' }, { property: 'og:description', content: 'Online portfolio showcasing experiences built and designed by Tanner Fiscus' }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://tannerfisc.us/portfolio/' }, { property: 'og:image', content: 'https://tannerfisc.us/assets/og/portfolio.jpg' }],
						title: 'My Work \u2013 Experiences Built and Designed by Tanner Fiscus' }),
					_react2.default.createElement(_Cover2.default, {
						backgroundImage: '/assets/portfolio-graphic.jpg',
						title: 'My Work' }),
					_react2.default.createElement(
						_PageContent2.default,
						null,
						items.length < 1 && !error && _react2.default.createElement(_Loading2.default, null),
						error && _react2.default.createElement(_APIError2.default, { content: 'my portfolio' }),
						_react2.default.createElement(
							'section',
							{ className: 'portfolio' },
							items.length > 0 && this.renderItems(items)
						)
					)
				);
			}
		}, {
			key: 'renderItems',
			value: function renderItems(items) {
				return items.map(function (item) {
					return _react2.default.createElement(
						'figure',
						{ className: 'portfolio-list-item', key: item.url },
						_react2.default.createElement(
							'a',
							{ className: 'portfolio-list-item-link', href: item.url },
							_react2.default.createElement('img', { src: 'https://app.tannerfiscus.com/static' + item.photo, className: 'portfolio-list-item-image' }),
							_react2.default.createElement(
								'figcaption',
								null,
								_react2.default.createElement(
									'h6',
									{ className: 'portfolio-list-item-tagline' },
									item.tagline
								),
								_react2.default.createElement(
									'h5',
									null,
									item.title
								),
								_react2.default.createElement('p', { className: 'portfolio-list-item-description',
									dangerouslySetInnerHTML: { __html: item.text } }),
								_react2.default.createElement(
									'span',
									null,
									'More \u2192'
								),
								_react2.default.createElement(
									'button',
									{ className: 'button button-inflate' },
									'More \u2192'
								)
							)
						),
						_react2.default.createElement('div', { className: 'border-box-left' }),
						_react2.default.createElement('div', { className: 'border-box-top' }),
						_react2.default.createElement('div', { className: 'border-box-right' }),
						_react2.default.createElement('div', { className: 'border-box-bottom' })
					);
				});
			}
		}], [{
			key: 'loadProps',
			value: function loadProps(params, cb) {
				(0, _portfolio.getPortfolio)().then(function (items) {
					cb(null, {
						portfolio: {
							error: false,
							items: items
						}
					});
				}).catch(function (err) {
					cb(null, {
						portfolio: {
							error: true,
							items: []
						}
					});
				});
			}
		}]);

		return Portfolio;
	}(_react2.default.Component);

	exports.default = Portfolio;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _APIError = __webpack_require__(46);

	var _APIError2 = _interopRequireDefault(_APIError);

	var _url = __webpack_require__(62);

	var _portfolio = __webpack_require__(20);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Loading = __webpack_require__(50);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _NotFound = __webpack_require__(52);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _ProjectContent = __webpack_require__(63);

	var _ProjectContent2 = _interopRequireDefault(_ProjectContent);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Project = function (_React$Component) {
		_inherits(Project, _React$Component);

		function Project() {
			_classCallCheck(this, Project);

			return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
		}

		_createClass(Project, [{
			key: 'render',
			value: function render() {
				var itemId = this.props.params.itemId;
				var _props$portfolioItem = this.props.portfolioItem,
				    data = _props$portfolioItem.data,
				    error = _props$portfolioItem.error,
				    notFound = _props$portfolioItem.notFound;

				var isLoading = Object.keys(data).length < 1 && !error;

				if (!!notFound) {
					return _react2.default.createElement(_NotFound2.default, null);
				}

				if (error) {
					return _react2.default.createElement(_APIError2.default, { content: 'this page' });
				}

				return _react2.default.createElement(
					'section',
					{ className: 'page-portfolio-item' },
					_react2.default.createElement(_reactHelmet2.default, {
						meta: [{ name: 'description', content: 'Discover the details about my design and build process for the ' + data.meta.name + ' project.' }, { property: 'og:title', content: data.meta.name }, { property: 'og:description', content: 'Discover the process behind building and designing the ' + data.meta.name + ' project.' }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://tannerfisc.us/portfolio/' + itemId + '/' }, { property: 'og:image', content: data.photos.cover ? (0, _url.buildProjectImageURL)(data.photos.cover.url) : 'https://tannerfisc.us/assets/og/portfolio.jpg' }],
						title: data.meta.name + ' \u2013 Project Details' }),
					isLoading && _react2.default.createElement(_Loading2.default, null),
					!isLoading && _react2.default.createElement(_ProjectContent2.default, {
						data: data })
				);
			}
		}], [{
			key: 'loadProps',
			value: function loadProps(_ref, cb) {
				var itemId = _ref.params.itemId;


				(0, _portfolio.getPortfolioItem)(itemId).then(function (data) {
					cb(null, {
						portfolioItem: {
							data: data,
							error: false,
							notFound: false
						}
					});
				}).catch(function (err) {
					var notFound = err.status && err.status === 404;
					var error = notFound ? false : true;

					cb(null, {
						portfolioItem: {
							data: {},
							error: error,
							notFound: notFound
						}
					});
				});
			}
		}]);

		return Project;
	}(_react2.default.Component);

	exports.default = Project;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(21);

	module.exports = {

	    buildProjectImageURL: function buildProjectImageURL(uri) {
	        if (uri) {
	            return _config.PROJECT_STATIC_ASSET_URL + '/' + uri;
	        }
	        return '';
	    }

	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _PageContent = __webpack_require__(34);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _ProjectCallout = __webpack_require__(64);

	var _ProjectCallout2 = _interopRequireDefault(_ProjectCallout);

	var _ProjectCategories = __webpack_require__(65);

	var _ProjectCategories2 = _interopRequireDefault(_ProjectCategories);

	var _ProjectCover = __webpack_require__(67);

	var _ProjectCover2 = _interopRequireDefault(_ProjectCover);

	var _ProjectDescriptions = __webpack_require__(68);

	var _ProjectDescriptions2 = _interopRequireDefault(_ProjectDescriptions);

	var _ProjectTimeline = __webpack_require__(69);

	var _ProjectTimeline2 = _interopRequireDefault(_ProjectTimeline);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProjectContent = function ProjectContent(_ref) {
	    var data = _ref.data;
	    var categories = data.categories,
	        descriptions = data.descriptions,
	        meta = data.meta,
	        photos = data.photos,
	        timeline = data.timeline;


	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_ProjectCover2.default, {
	            meta: meta,
	            photos: photos }),
	        _react2.default.createElement(
	            _PageContent2.default,
	            null,
	            _react2.default.createElement(
	                'section',
	                { className: 'project' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'grid padded' },
	                    _react2.default.createElement(_ProjectDescriptions2.default, {
	                        descriptions: descriptions }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'grid-spread-4 project-right-pane' },
	                        _react2.default.createElement(
	                            'section',
	                            { className: 'project-right-pane-popout' },
	                            _react2.default.createElement(_ProjectTimeline2.default, {
	                                timeline: timeline }),
	                            _react2.default.createElement(_ProjectCategories2.default, {
	                                categories: categories }),
	                            _react2.default.createElement(_ProjectCallout2.default, {
	                                url: meta && meta.url })
	                        )
	                    )
	                )
	            )
	        )
	    );
	};

	exports.default = ProjectContent;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProjectCallout = function ProjectCallout(_ref) {
	    var url = _ref.url;


	    if (!url) {
	        return null;
	    }

	    return _react2.default.createElement(
	        'div',
	        { className: 'project-callout' },
	        _react2.default.createElement(
	            'a',
	            { className: 'button button-inverted button-inflate button-block',
	                href: url,
	                target: '_blank' },
	            'Visit Project Website\xA0\u2192'
	        )
	    );
	};

	ProjectCallout.propTypes = {
	    url: _react2.default.PropTypes.string
	};

	exports.default = ProjectCallout;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Pills = __webpack_require__(66);

	var _Pills2 = _interopRequireDefault(_Pills);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProjectCategories = function ProjectCategories(_ref) {
	    var categories = _ref.categories;


	    if (!categories || !categories.length) {
	        return null;
	    }

	    return _react2.default.createElement(
	        'div',
	        { className: 'project-categories' },
	        _react2.default.createElement(
	            'div',
	            { className: 'project-pane-title' },
	            _react2.default.createElement(
	                'h5',
	                null,
	                'Technologies / Skills'
	            )
	        ),
	        _react2.default.createElement(_Pills2.default, {
	            items: categories })
	    );
	};

	ProjectCategories.propTypes = {
	    categories: _react2.default.PropTypes.array
	};

	exports.default = ProjectCategories;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Pills = function Pills(_ref) {
		var items = _ref.items;


		var renderPills = function renderPills(items) {
			return items.map(function (item) {
				return _react2.default.createElement(
					"li",
					{ className: "pill", key: item },
					item
				);
			});
		};

		return _react2.default.createElement(
			"ul",
			{ className: "pill-container" },
			renderPills(items)
		);
	};

	exports.default = Pills;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _url = __webpack_require__(62);

	var _Cover = __webpack_require__(32);

	var _Cover2 = _interopRequireDefault(_Cover);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProjectCover = function ProjectCover(_ref) {
	    var meta = _ref.meta,
	        photos = _ref.photos;


	    if (!meta || !photos) {
	        return null;
	    }

	    var coverPhoto = photos.cover && photos.cover.url;

	    return _react2.default.createElement(_Cover2.default, {
	        backgroundImage: (0, _url.buildProjectImageURL)(coverPhoto),
	        coverImage: true,
	        title: meta.name });
	};

	ProjectCover.propTypes = {
	    meta: _react2.default.PropTypes.object,
	    photos: _react2.default.PropTypes.object
	};

	exports.default = ProjectCover;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProjectDescriptions = function ProjectDescriptions(_ref) {
		var descriptions = _ref.descriptions;


		if (!descriptions || !descriptions.length) {
			return null;
		}

		return _react2.default.createElement(
			'div',
			{ className: 'grid-spread-8' },
			descriptions.map(function (description, i) {
				return _react2.default.createElement(
					'div',
					{ className: 'project-description', key: i },
					_react2.default.createElement(
						'h5',
						{ className: 'project-description-heading' },
						description.heading
					),
					_react2.default.createElement('p', { className: 'project-description-text',
						dangerouslySetInnerHTML: { __html: description.text } })
				);
			})
		);
	};

	ProjectDescriptions.propTypes = {
		descriptions: _react2.default.PropTypes.array
	};

	exports.default = ProjectDescriptions;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _Timeline = __webpack_require__(37);

	var _Timeline2 = _interopRequireDefault(_Timeline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _formatTimelineData = function _formatTimelineData(timeline) {
	    return timeline.map(function (item) {
	        return {
	            title: item.text,
	            date: item.time
	        };
	    });
	};

	var ProjectTimeline = function ProjectTimeline(_ref) {
	    var timeline = _ref.timeline;


	    if (!timeline || !timeline.length) {
	        return null;
	    }

	    var items = _formatTimelineData(timeline);

	    return _react2.default.createElement(
	        'div',
	        { className: 'project-timeline' },
	        _react2.default.createElement(
	            'div',
	            { className: 'project-pane-title' },
	            _react2.default.createElement(
	                'h5',
	                null,
	                'Project Timeline'
	            )
	        ),
	        _react2.default.createElement(_Timeline2.default, {
	            items: items,
	            minimized: true })
	    );
	};

	ProjectTimeline.propTypes = {
	    timeline: _react2.default.PropTypes.array
	};

	exports.default = ProjectTimeline;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _About = __webpack_require__(71);

	var _About2 = _interopRequireDefault(_About);

	var _Education = __webpack_require__(73);

	var _Education2 = _interopRequireDefault(_Education);

	var _Experience = __webpack_require__(74);

	var _Experience2 = _interopRequireDefault(_Experience);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Modals = __webpack_require__(75);

	var _Modals2 = _interopRequireDefault(_Modals);

	var _OnlinePortfolio = __webpack_require__(80);

	var _OnlinePortfolio2 = _interopRequireDefault(_OnlinePortfolio);

	var _PageContent = __webpack_require__(34);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _Portfolio = __webpack_require__(81);

	var _Portfolio2 = _interopRequireDefault(_Portfolio);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _References = __webpack_require__(82);

	var _References2 = _interopRequireDefault(_References);

	var _ResumeBackLink = __webpack_require__(83);

	var _ResumeBackLink2 = _interopRequireDefault(_ResumeBackLink);

	var _ResumeHeader = __webpack_require__(84);

	var _ResumeHeader2 = _interopRequireDefault(_ResumeHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Resume = function Resume() {
		return _react2.default.createElement(
			'section',
			{ className: 'page-resume' },
			_react2.default.createElement(_reactHelmet2.default, {
				meta: [{ property: 'og:title', content: 'Resume – Tanner Fiscus' }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://tannerfisc.us/resume/' }, { property: 'og:image', content: 'https://tannerfisc.us/assets/og/portfolio.jpg' }],
				title: 'Resume \u2013 Tanner Fiscus' }),
			_react2.default.createElement(_ResumeBackLink2.default, { isFixed: true }),
			_react2.default.createElement(
				_PageContent2.default,
				null,
				_react2.default.createElement(_ResumeHeader2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'grid' },
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-4 padded' },
						_react2.default.createElement(_About2.default, null),
						_react2.default.createElement(
							'div',
							{ className: 'resume-screen' },
							_react2.default.createElement(_Portfolio2.default, null)
						),
						_react2.default.createElement(_Education2.default, null),
						_react2.default.createElement(
							'div',
							{ className: 'resume-print' },
							_react2.default.createElement(_OnlinePortfolio2.default, null)
						),
						_react2.default.createElement(
							'div',
							{ className: 'resume-desktop' },
							_react2.default.createElement(_References2.default, null)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'grid-spread-8 padded' },
						_react2.default.createElement(_Experience2.default, null),
						_react2.default.createElement(
							'div',
							{ className: 'resume-mobile' },
							_react2.default.createElement(_References2.default, null)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'resume-logo' },
					_react2.default.createElement(
						'div',
						{ className: 'logo' },
						_react2.default.createElement('div', { className: 'logo-shape' }),
						_react2.default.createElement(
							'div',
							{ className: 'logo-text' },
							'TF'
						)
					)
				)
			),
			_react2.default.createElement(_ResumeBackLink2.default, null),
			_react2.default.createElement(_Modals2.default, null)
		);
	};

	exports.default = Resume;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _ResumeSection = __webpack_require__(72);

	var _ResumeSection2 = _interopRequireDefault(_ResumeSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var About = function About() {
	    return _react2.default.createElement(
	        _ResumeSection2.default,
	        {
	            title: 'About Me' },
	        _react2.default.createElement(
	            'p',
	            null,
	            'Hard-working, enthusiastic, and driven front end engineer. 6+ years experience with front end technologies. Creative developer with an eye for design. Passionate about building intuitive web interfaces with industry best practices. Team player who enjoys collaborative planning while also working well autonomously. Focused on delivering quality code geared toward accessibility and maintainability through code structure and documentation. Experienced assisting agile teams design and build large scale web applications.'
	        )
	    );
	};

	exports.default = About;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ResumeSection = function ResumeSection(props, context) {
	    return _react2.default.createElement(
	        'section',
	        { className: 'resume-section' },
	        _react2.default.createElement(
	            'h5',
	            { className: 'resume-section-header' },
	            props.title
	        ),
	        props.children
	    );
	};

	exports.default = ResumeSection;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _ResumeSection = __webpack_require__(72);

	var _ResumeSection2 = _interopRequireDefault(_ResumeSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Education = function Education() {
	    return _react2.default.createElement(
	        _ResumeSection2.default,
	        {
	            title: 'Education' },
	        _react2.default.createElement(
	            'ul',
	            { className: 'resume-list' },
	            _react2.default.createElement(
	                'li',
	                { className: 'resume-list-item' },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'resume-list-item-small' },
	                        '2015'
	                    ),
	                    _react2.default.createElement(
	                        'h4',
	                        { className: 'resume-list-item-title' },
	                        'Internet Information Systems'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'resume-list-item-description' },
	                        'Master of Science (M.S.)',
	                        _react2.default.createElement('br', null),
	                        'Robert Morris University'
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'li',
	                { className: 'resume-list-item' },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'resume-list-item-small' },
	                        '2015'
	                    ),
	                    _react2.default.createElement(
	                        'h4',
	                        { className: 'resume-list-item-title' },
	                        'Computer Information Systems'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'resume-list-item-description' },
	                        'Bachelor of Science (B.S.)',
	                        _react2.default.createElement('br', null),
	                        'Robert Morris University'
	                    )
	                )
	            )
	        )
	    );
	};

	exports.default = Education;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _ResumeSection = __webpack_require__(72);

	var _ResumeSection2 = _interopRequireDefault(_ResumeSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Experience = function Experience() {
	    return _react2.default.createElement(
	        _ResumeSection2.default,
	        {
	            title: 'Experience' },
	        _react2.default.createElement(
	            'ul',
	            { className: 'resume-list' },
	            _react2.default.createElement(
	                'li',
	                { className: 'resume-list-item' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'resume-list-item-left' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'resume-list-item-employer niche' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'resume-list-item-small' },
	                            'Aug 2015 - Present'
	                        ),
	                        _react2.default.createElement(
	                            'h5',
	                            null,
	                            'Niche.com'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'resume-list-item-right' },
	                    _react2.default.createElement(
	                        'h4',
	                        { className: 'resume-list-item-title' },
	                        'Front End Engineer'
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'resume-list-item-bullets' },
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Collaborated with other front end engineers to forge a modern, scalable, cross-browser, mobile-first platform for niche.com, which went from prototype to production in 15 months.'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Implemented a set of Javascript standards with other front end developers to create code uniformity.'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Delivered reliable code quality by writing unit tests with Mocha and enzyme, covering over 40% of the codebase.'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Efficiently implemented changes during QA and design review to ensure a timely completion of deliverables.'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Worked with back-end developers to shape API responses to best fit front end implementation.'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Researched best practices to independently design and build an internal web application for managing data.'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'resume-list-item-skills' },
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Javascript (ES6)'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'React'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'fluxible'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'redux'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Mocha'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Enzyme'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Eslint'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Webpack'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'BEM'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'LESS'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'SASS'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'HTML'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Node'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Express'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'npm'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Yarn'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Git'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Jira'
	                        )
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'li',
	                { className: 'resume-list-item' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'resume-list-item-left' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'resume-list-item-employer rmu' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'resume-list-item-small' },
	                            'Dec 2014 - Aug 2015'
	                        ),
	                        _react2.default.createElement(
	                            'h5',
	                            null,
	                            'Robert Morris University'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'resume-list-item-right' },
	                    _react2.default.createElement(
	                        'h4',
	                        { className: 'resume-list-item-title' },
	                        'Lead User Experience Developer'
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'resume-list-item-bullets' },
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Formed a new position to champion user experience for RMU\u2019s website.'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Researched, analyzed, and designed web patterns to improve UX within legacy web apps.'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Assumed a greater responsibility of overseeing both internal and external websites, as well as designing and developing a mobile app.'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'resume-list-item-skills' },
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'HTML'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'SASS'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Javascript'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'jQuery'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Sketch'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Photoshop'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Google Analytics'
	                        )
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'li',
	                { className: 'resume-list-item' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'resume-list-item-left' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'resume-list-item-employer rmu' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'resume-list-item-small' },
	                            'Aug 2013 - Dec 2014'
	                        ),
	                        _react2.default.createElement(
	                            'h5',
	                            null,
	                            'Robert Morris University'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'resume-list-item-right' },
	                    _react2.default.createElement(
	                        'h4',
	                        { className: 'resume-list-item-title' },
	                        'Associate Programmer Analyst'
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'resume-list-item-bullets' },
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Worked with back-end developers to bring modern functionality and design to internal web applications.'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Created, maintained, and enhanced code for internal webpages and custom applications while assisting with university-wide migration of content management systems (CMS).'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Implemented an internal training program to provide documentation and conducted presentations on how to effectively use the new CMS.'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'resume-list-item-skills' },
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'HTML'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'CSS'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'Javascript'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'jQuery'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'SQL'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            'PL/SQL'
	                        )
	                    )
	                )
	            )
	        )
	    );
	};

	exports.default = Experience;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ContactForm = __webpack_require__(55);

	var _ContactForm2 = _interopRequireDefault(_ContactForm);

	var _Modal = __webpack_require__(76);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _ResumePortfolio = __webpack_require__(77);

	var _ResumePortfolio2 = _interopRequireDefault(_ResumePortfolio);

	var _ResumeProject = __webpack_require__(79);

	var _ResumeProject2 = _interopRequireDefault(_ResumeProject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Modals = function Modals() {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            _Modal2.default,
	            { name: 'contact' },
	            _react2.default.createElement(
	                'div',
	                { className: 'grid resume-contact-form' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'grid-spread-8 grid-flex-2 grid-pad-2' },
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        'Contact Me'
	                    ),
	                    _react2.default.createElement(_ContactForm2.default, null)
	                )
	            )
	        ),
	        _react2.default.createElement(
	            _Modal2.default,
	            { name: 'portfolio' },
	            _react2.default.createElement(_ResumePortfolio2.default, null)
	        ),
	        _react2.default.createElement(
	            _Modal2.default,
	            { name: 'resumeProject' },
	            _react2.default.createElement(_ResumeProject2.default, null)
	        )
	    );
	};

	exports.default = Modals;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRedux = __webpack_require__(14);

	var _modal = __webpack_require__(17);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _getClasses = function _getClasses() {
		var modal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var isClosing = modal.isClosing,
		    isVisible = modal.isVisible;

		var classes = ['modal'];

		if (isClosing) {
			classes.push('modal-closing');
		}

		if (isVisible) {
			classes.push('modal-open');
		}

		return classes.join(' ');
	};

	var Modal = function (_React$Component) {
		_inherits(Modal, _React$Component);

		function Modal() {
			var _ref;

			_classCallCheck(this, Modal);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args)));

			_this.handleCloseClick = _this.handleCloseClick.bind(_this);
			return _this;
		}

		_createClass(Modal, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _props = this.props,
				    dispatch = _props.dispatch,
				    name = _props.name;

				dispatch((0, _modal.initModal)(name));
			}
		}, {
			key: 'render',
			value: function render() {
				var _props2 = this.props,
				    children = _props2.children,
				    modals = _props2.modals,
				    name = _props2.name;

				var modal = modals[name];

				return _react2.default.createElement(
					'div',
					{ className: _getClasses(modal) },
					_react2.default.createElement(
						'div',
						{ className: 'modal-header' },
						_react2.default.createElement(
							'a',
							{ className: 'modal-header-button', onClick: this.handleCloseClick, role: 'button' },
							_react2.default.createElement(
								'span',
								{ className: 'modal-header-button-text' },
								'Close'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'modal-content' },
						children
					)
				);
			}
		}, {
			key: 'handleCloseClick',
			value: function handleCloseClick(e) {
				e.preventDefault();

				var _props3 = this.props,
				    dispatch = _props3.dispatch,
				    name = _props3.name;

				dispatch((0, _modal.closeModal)(name));
			}
		}]);

		return Modal;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			modals: state.modal
		};
	})(Modal);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _APIError = __webpack_require__(46);

	var _APIError2 = _interopRequireDefault(_APIError);

	var _reactRedux = __webpack_require__(14);

	var _portfolio = __webpack_require__(19);

	var _projects = __webpack_require__(24);

	var _Loading = __webpack_require__(50);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _PortfolioList = __webpack_require__(78);

	var _PortfolioList2 = _interopRequireDefault(_PortfolioList);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResumePortfolio = function (_React$Component) {
		_inherits(ResumePortfolio, _React$Component);

		function ResumePortfolio(props, context) {
			_classCallCheck(this, ResumePortfolio);

			var _this = _possibleConstructorReturn(this, (ResumePortfolio.__proto__ || Object.getPrototypeOf(ResumePortfolio)).call(this, props, context));

			_this.onProjectClick = _this.onProjectClick.bind(_this);
			return _this;
		}

		_createClass(ResumePortfolio, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var dispatch = this.props.dispatch;

				dispatch((0, _portfolio.fetchPortfolio)());
			}
		}, {
			key: 'onProjectClick',
			value: function onProjectClick(projectPath) {
				var dispatch = this.props.dispatch;
				// projectPath contains /portfolio/, which we don't need here

				var urlPath = projectPath.replace('/portfolio/', '');

				dispatch((0, _projects.fetchProject)(urlPath));
			}
		}, {
			key: 'render',
			value: function render() {
				var _props$portfolio = this.props.portfolio,
				    hasLoaded = _props$portfolio.hasLoaded,
				    hasLoadedError = _props$portfolio.hasLoadedError,
				    isLoading = _props$portfolio.isLoading,
				    projects = _props$portfolio.projects;


				return _react2.default.createElement(
					'section',
					{ className: 'resume-portfolio' },
					isLoading && _react2.default.createElement(_Loading2.default, null),
					hasLoadedError && _react2.default.createElement(_APIError2.default, { content: 'my portfolio' }),
					hasLoaded && _react2.default.createElement(_PortfolioList2.default, {
						onProjectClick: this.onProjectClick,
						projects: projects })
				);
			}
		}]);

		return ResumePortfolio;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			portfolio: state.portfolio
		};
	})(ResumePortfolio);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _handleClick = function _handleClick(e, onProjectClick, url) {

	    if (typeof onProjectClick === 'function') {
	        e.preventDefault();
	        onProjectClick(url);
	    }
	};

	var PortfolioList = function PortfolioList(_ref) {
	    var onProjectClick = _ref.onProjectClick,
	        projects = _ref.projects;


	    return _react2.default.createElement(
	        'div',
	        { className: 'portfolio-list' },
	        projects.map(function (project) {
	            return _react2.default.createElement(
	                'figure',
	                { className: 'portfolio-list-item', key: project.url },
	                _react2.default.createElement(
	                    'a',
	                    { className: 'portfolio-list-item-link',
	                        href: project.url,
	                        onClick: function onClick(e) {
	                            return _handleClick(e, onProjectClick, project.url);
	                        } },
	                    _react2.default.createElement('img', { src: 'https://app.tannerfiscus.com/static' + project.photo, className: 'portfolio-list-item-image' }),
	                    _react2.default.createElement(
	                        'figcaption',
	                        null,
	                        _react2.default.createElement(
	                            'h6',
	                            { className: 'portfolio-list-item-tagline' },
	                            project.tagline
	                        ),
	                        _react2.default.createElement(
	                            'h5',
	                            null,
	                            project.title
	                        ),
	                        _react2.default.createElement('p', { className: 'portfolio-list-item-description',
	                            dangerouslySetInnerHTML: { __html: project.text } }),
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'More \u2192'
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'button button-inflate' },
	                            'More \u2192'
	                        )
	                    )
	                ),
	                _react2.default.createElement('div', { className: 'border-box-left' }),
	                _react2.default.createElement('div', { className: 'border-box-top' }),
	                _react2.default.createElement('div', { className: 'border-box-right' }),
	                _react2.default.createElement('div', { className: 'border-box-bottom' })
	            );
	        })
	    );
	};

	PortfolioList.propTypes = {
	    projects: _react2.default.PropTypes.array.isRequired
	};

	exports.default = PortfolioList;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _APIError = __webpack_require__(46);

	var _APIError2 = _interopRequireDefault(_APIError);

	var _reactRedux = __webpack_require__(14);

	var _Loading = __webpack_require__(50);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _modal = __webpack_require__(17);

	var _ProjectContent = __webpack_require__(63);

	var _ProjectContent2 = _interopRequireDefault(_ProjectContent);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResumeProject = function (_React$Component) {
		_inherits(ResumeProject, _React$Component);

		function ResumeProject(props, context) {
			_classCallCheck(this, ResumeProject);

			var _this = _possibleConstructorReturn(this, (ResumeProject.__proto__ || Object.getPrototypeOf(ResumeProject)).call(this, props, context));

			_this.state = { activeProject: null };
			return _this;
		}

		_createClass(ResumeProject, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(_ref) {
				var dispatch = _ref.dispatch,
				    projects = _ref.projects;


				var activeProject = Object.keys(projects).find(function (projectKey) {
					return projects[projectKey].isVisible;
				});

				// If we have a new active project, we need to open the modal
				if (activeProject !== this.state.activeProject) {
					this.setState({ activeProject: activeProject });

					if (activeProject) {
						dispatch((0, _modal.openModal)('resumeProject'));
					}
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var activeProject = this.state.activeProject;
				var projects = this.props.projects;

				var project = projects && projects[activeProject];

				return _react2.default.createElement(
					'section',
					{ className: 'resume-project' },
					project && project.isLoading && _react2.default.createElement(_Loading2.default, null),
					project && project.hasLoadedError && _react2.default.createElement(_APIError2.default, { content: 'my portfolio' }),
					project && project.hasLoaded && _react2.default.createElement(_ProjectContent2.default, { data: project.data })
				);
			}
		}]);

		return ResumeProject;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			projects: state.projects
		};
	})(ResumeProject);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _ResumeSection = __webpack_require__(72);

	var _ResumeSection2 = _interopRequireDefault(_ResumeSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var OnlinePortfolio = function OnlinePortfolio() {
	    return _react2.default.createElement(
	        _ResumeSection2.default,
	        {
	            title: 'Portfolio' },
	        _react2.default.createElement(
	            'p',
	            null,
	            'My portfolio is available online at ',
	            _react2.default.createElement(
	                'strong',
	                null,
	                'tannerfiscus.com/resume'
	            ),
	            '.'
	        )
	    );
	};

	exports.default = OnlinePortfolio;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(14);

	var _modal = __webpack_require__(17);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _ResumeSection = __webpack_require__(72);

	var _ResumeSection2 = _interopRequireDefault(_ResumeSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Portfolio = function Portfolio(_ref) {
	    var dispatch = _ref.dispatch;


	    var _handleClick = function _handleClick(e) {
	        e.preventDefault();
	        dispatch((0, _modal.openModal)('portfolio'));
	    };

	    return _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	            'a',
	            { className: 'button button-block',
	                href: '/portfolio/',
	                onClick: _handleClick },
	            'View My Work \u2192'
	        )
	    );
	};

	exports.default = (0, _reactRedux.connect)()(Portfolio);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(14);

	var _modal = __webpack_require__(17);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _ResumeSection = __webpack_require__(72);

	var _ResumeSection2 = _interopRequireDefault(_ResumeSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var References = function References(_ref) {
	    var dispatch = _ref.dispatch;


	    var _handleClick = function _handleClick(e) {
	        e.preventDefault();
	        dispatch((0, _modal.openModal)('contact'));
	    };

	    return _react2.default.createElement(
	        _ResumeSection2.default,
	        {
	            title: 'References' },
	        _react2.default.createElement(
	            'p',
	            null,
	            'References are available upon request.'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	                'a',
	                { className: 'button button-inverted',
	                    href: '/contact/',
	                    onClick: _handleClick },
	                'Contact Me'
	            )
	        )
	    );
	};

	exports.default = (0, _reactRedux.connect)()(References);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRouter = __webpack_require__(13);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ResumeBackLink = function ResumeBackLink(_ref) {
	    var isFixed = _ref.isFixed;


	    var classList = isFixed ? 'resume-back-link resume-back-link-fixed' : 'resume-back-link';

	    return _react2.default.createElement(
	        _reactRouter.Link,
	        { className: classList, to: '/about/' },
	        _react2.default.createElement(
	            'div',
	            { className: 'resume-back-link-contain' },
	            '\u2190 Back to Website'
	        )
	    );
	};

	ResumeBackLink.propTypes = {
	    isFixed: _react2.default.PropTypes.bool
	};

	exports.default = ResumeBackLink;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ResumeHeader = function ResumeHeader() {
	    return _react2.default.createElement(
	        'figure',
	        { className: 'resume-header' },
	        _react2.default.createElement('img', { className: 'resume-header-image', src: '/assets/resume-graphic.jpg' }),
	        _react2.default.createElement(
	            'figcaption',
	            null,
	            _react2.default.createElement(
	                'h1',
	                null,
	                'Hi, I\'m Tanner'
	            )
	        )
	    );
	};

	exports.default = ResumeHeader;

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }
/******/ ]);