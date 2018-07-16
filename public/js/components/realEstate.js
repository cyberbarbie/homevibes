webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: '23 Dexter Hills',
    city: 'Ridgewood',
    state: 'NY',
    homeType: 'Family Home',
    rooms: 3,
    price: 2000,
    floorSpace: 1200,
    extras: ['elevator', 'gym'],
    image: 'https://www.thehousedesigners.com/images/plans/AMD/rendrngs/1168ESrd.jpg'
}, {
    address: '87 Turnberry Avenue',
    city: 'San Diego',
    state: 'CA',
    homeType: 'Apartment',
    rooms: 5,
    price: 3000,
    floorSpace: 3800,
    extras: ['elevator'],
    image: 'http://www.idesignarch.com/wp-content/uploads/Modern-Home-Johannesburg_1.jpg'
}, {
    address: '120 Haverford Way',
    city: 'New Haven',
    state: 'CT',
    homeType: 'Apartment',
    rooms: 3,
    price: 1750,
    floorSpace: 1800,
    extras: [],
    image: 'https://images1.apartments.com/i2/xK1fTqYgboEiGFIsME-ScfOhwuxbbwpjriBmpzAMsrM/117/image.jpg'
}, {
    address: '120 Whoville Hills',
    city: 'New Town',
    state: 'AZ',
    homeType: 'Family Home',
    rooms: 3,
    price: 2000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    image: 'https://media.istockphoto.com/photos/idyllic-home-with-covered-porch-picture-id479767332?k=6&m=479767332&s=612x612&w=0&h=sOZeUL84YCIEjpDFiaBg5Wb0sQt14L5kY81smoQJCu0='
}, {
    address: '152 Nipoma Drive',
    city: 'Atlanta',
    state: 'GA',
    homeType: 'Family Home',
    rooms: 2,
    price: 1700,
    floorSpace: 3000,
    extras: ['swimming pool'],
    image: 'https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/1322/files/2018/01/adv_advice-home-homeownershipcosts_img.jpg'
}, {
    address: '412 Roundabout Lane',
    city: 'SpringField',
    state: 'IL',
    homeType: 'Condo',
    rooms: 4,
    price: 2250,
    floorSpace: 3500,
    extras: ['finished basement', 'elevator', 'gym', 'swimming pool'],
    image: 'http://belmanhomes.com/wp-content/uploads/2017/06/Bayberry-Condo-big-1000x500.jpg'
}, {
    address: '412 Strong Court',
    city: 'Austin',
    state: 'TX',
    homeType: 'Condo',
    rooms: 3,
    price: 1600,
    floorSpace: 1550,
    extras: ['finished basement'],
    image: 'http://daytona-condos.com/wp-content/uploads/2015/08/IMG_9678-1024x683.jpg'
}, {
    address: '6892 Orchard Road',
    city: 'Santa Maria',
    state: 'CA',
    homeType: 'Condo',
    rooms: 4,
    price: 2650,
    floorSpace: 2200,
    extras: ['gym'],
    image: 'https://i1.wp.com/blog.extraspace.com/wp-content/uploads/2018/02/Townhomes.jpg?resize=640%2C427'
}, {
    address: '3441 Estate Drive',
    city: 'Stockton',
    state: 'CA',
    homeType: 'Apartment',
    rooms: 1,
    price: 2850,
    floorSpace: 2400,
    extras: ['elevator', 'swimming pool'],
    image: 'https://t-ec.bstatic.com/images/hotel/max1024x768/753/75380477.jpg'
}];
exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsdata = __webpack_require__(100);

var _listingsdata2 = _interopRequireDefault(_listingsdata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            listingsData: _listingsdata2.default,
            city: 'All',
            homeType: 'All',
            bedrooms: 0,
            min_price: 0,
            max_price: 5000,
            min_floorspace: 0,
            max_floorspace: 5000,
            elevator: false,
            swimming_pool: false,
            finished_basement: false,
            gym: false,
            filteredData: _listingsdata2.default,
            populateFormsData: '',
            sortby: 'price-dsc',
            view: 'box',
            search: ''
        };
        _this.change = _this.change.bind(_this);
        _this.filteredData = _this.filteredData.bind(_this);
        _this.populateForms = _this.populateForms.bind(_this);
        _this.changeView = _this.changeView.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var listingsData = this.state.listingsData.sort(function (a, b) {
                return a.price - b.price;
            });
            this.setState({
                listingsData: listingsData
            });
        }
    }, {
        key: 'change',
        value: function change(event) {
            var _this2 = this;

            var name = event.target.name;
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
            this.setState(_defineProperty({}, name, value), function () {
                console.log(_this2.state);
                _this2.filteredData();
            });
        }
    }, {
        key: 'changeView',
        value: function changeView(viewName) {
            this.setState({
                view: viewName
            });
        }
    }, {
        key: 'filteredData',
        value: function filteredData() {
            var _this3 = this;

            var newData = this.state.listingsData.filter(function (item) {
                return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floorspace && item.floorSpace <= _this3.state.max_floorspace && item.rooms >= _this3.state.bedrooms;
            });
            if (this.state.city != 'All') {
                newData = newData.filter(function (item) {
                    return item.city == _this3.state.city;
                });
            }
            if (this.state.homeType != 'All') {
                newData = newData.filter(function (item) {
                    return item.homeType == _this3.state.homeType;
                });
            }
            if (this.state.sortby == 'price-dsc') {
                newData.sort(function (a, b) {
                    return a.price - b.price;
                });
            }
            if (this.state.sortby == 'price-asc') {
                newData.sort(function (a, b) {
                    return b.price - a.price;
                });
            }
            if (this.state.elevator) {
                newData = newData.filter(function (item) {
                    return item.extras.includes('elevator');
                });
            }
            if (this.state.swimming_pool) {
                newData = newData.filter(function (item) {
                    return item.extras.includes('swimming pool');
                });
            }
            if (this.state.finished_basement) {
                newData = newData.filter(function (item) {
                    return item.extras.includes('finished basement');
                });
            }
            if (this.state.gym) {
                newData = newData.filter(function (item) {
                    return item.extras.includes('gym');
                });
            }
            if (this.state.search != '') {
                newData = newData.filter(function (item) {
                    var city = item.city.toLowerCase();
                    var address = item.address.toLowerCase();
                    var state = item.state.toLowerCase();
                    var searchText = _this3.state.search.toLowerCase();

                    var cityMatch = city.match(searchText);
                    var addressMatch = address.match(searchText);
                    var stateMatch = state.match(searchText);
                    if (cityMatch != null || addressMatch != null || stateMatch != null) {
                        return true;
                    }
                });
            }

            this.setState({
                filteredData: newData
            });
        }
    }, {
        key: 'populateForms',
        value: function populateForms() {
            //City
            var cities = this.state.listingsData.map(function (item) {
                return item.city;
            });
            cities = new Set(cities);
            cities = [].concat(_toConsumableArray(cities));
            cities = cities.sort();
            //HomeType
            var homeTypes = this.state.listingsData.map(function (item) {
                return item.homeType;
            });
            homeTypes = new Set(homeTypes);
            homeTypes = [].concat(_toConsumableArray(homeTypes));
            homeTypes = homeTypes.sort();

            //Bedrooms
            var bedrooms = this.state.listingsData.map(function (item) {
                return item.rooms;
            });
            bedrooms = new Set(bedrooms);
            bedrooms = [].concat(_toConsumableArray(bedrooms));
            bedrooms = bedrooms.sort();
            this.setState({

                populateFormsData: {
                    homeTypes: homeTypes,
                    bedrooms: bedrooms,
                    cities: cities
                }
            }, console.log(this.state));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'content-area' },
                    _react2.default.createElement(
                        'section',
                        { className: 'landing' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'positioningtext' },
                            'HomeVibes'
                        ),
                        _react2.default.createElement(
                            'h5',
                            { className: 'sub-positioningtext' },
                            'Find your next dream home'
                        ),
                        _react2.default.createElement(
                            'a',
                            { 'class': 'smoothScroll', href: '#content' },
                            ' ',
                            _react2.default.createElement('i', { className: 'fas fa-chevron-down fa-3x' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'content' },
                        _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
                        _react2.default.createElement(_Listings2.default, { filteredData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
                    )
                ),
                _react2.default.createElement(
                    'footer',
                    null,
                    _react2.default.createElement(
                        'section',
                        { className: 'mobile' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Download the HomeVibes App'
                            ),
                            _react2.default.createElement(
                                'button',
                                null,
                                _react2.default.createElement('i', { className: 'fab fa-google-play' }),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Playstore'
                                )
                            ),
                            _react2.default.createElement(
                                'button',
                                null,
                                _react2.default.createElement('i', { className: 'fab fa-apple' }),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'AppStore'
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'copyrighttext' },
                                '2006-2018 HomeVibes.com'
                            )
                        ),
                        _react2.default.createElement('img', { src: '/img/localhomes.png' })
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'additionalinfo' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#top' },
                                    'HomeVibes.com'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'About HomeVibes.com'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'Meet the realtors'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'HomeVibes App'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'Work with Us'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {

          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'homeTypes',
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;

        return homeTypes.map(function (item) {

          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'bedrooms',
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;

        return bedrooms.map(function (item) {

          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            '+ Bedrooms'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'div',
            { className: 'responsiveFilter' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'city', className: 'title' },
              'City'
            ),
            _react2.default.createElement(
              'select',
              { name: 'city', className: 'neighborhood', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'All' },
                'All Cities'
              ),
              this.cities()
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'homeType', className: 'title' },
              'Home Type'
            ),
            _react2.default.createElement(
              'select',
              { name: 'homeType', className: 'housetype', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'All' },
                'All Homes'
              ),
              this.homeTypes()
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'bedrooms', className: 'title' },
              'Bedroom'
            ),
            _react2.default.createElement(
              'select',
              { name: 'bedrooms', className: 'bedrooms', onChange: this.props.change },
              this.bedrooms()
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'responsiveFilter' },
            _react2.default.createElement(
              'div',
              { className: 'filters price' },
              _react2.default.createElement(
                'span',
                { className: 'title' },
                'Price'
              ),
              _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', value: this.props.globalState.min_price, onChange: this.props.change }),
              _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', value: this.props.globalState.max_price, onChange: this.props.change })
            ),
            _react2.default.createElement(
              'div',
              { className: 'filters floor-space' },
              _react2.default.createElement(
                'span',
                { className: 'title' },
                'Floor Space'
              ),
              _react2.default.createElement('input', { type: 'text', name: 'min_floorspace', className: 'min-floor-space', value: this.props.globalState.min_floorspace, onChange: this.props.change }),
              _react2.default.createElement('input', { type: 'text', name: 'max_floorspace', className: 'max-floor-space', value: this.props.globalState.max_floorspace, onChange: this.props.change })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'responsiveFilter' },
            _react2.default.createElement(
              'div',
              { className: 'filters extras' },
              _react2.default.createElement(
                'span',
                { className: 'title' },
                'Extras'
              ),
              _react2.default.createElement(
                'label',
                { htmlFor: 'extras' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Elevators'
                ),
                _react2.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
              ),
              _react2.default.createElement(
                'label',
                { htmlFor: 'extras' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Swimming Pool'
                ),
                _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming-pool', type: 'checkbox', onChange: this.props.change })
              ),
              _react2.default.createElement(
                'label',
                { htmlFor: 'extras' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Finished Basement'
                ),
                _react2.default.createElement('input', { name: 'finished_basement', value: 'finished-basement', type: 'checkbox', onChange: this.props.change })
              ),
              _react2.default.createElement(
                'label',
                { htmlFor: 'extras' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Gym'
                ),
                _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
              )
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          ' HomeVibes.com '
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Login'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.state = {};
        _this.loopListings = _this.loopListings.bind(_this);
        return _this;
    }

    _createClass(Listings, [{
        key: 'loopListings',
        value: function loopListings() {
            var _this2 = this;

            var listingsData = this.props.filteredData;
            var noResult = 'No Results Found.';
            if (listingsData == undefined || listingsData.length == 0) {
                return noResult;
            }
            return listingsData.map(function (listing, index) {

                if (_this2.props.globalState.view == 'box') {
                    // THIS IS THE BOX VIEW
                    return _react2.default.createElement(
                        'div',
                        { id: 'responsivegrid', className: 'listing', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                            _react2.default.createElement(
                                'span',
                                { className: 'address' },
                                listing.address
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement('div', { className: 'user-img' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'user-details' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'user-name' },
                                        'John Smith'
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'post-date' },
                                        '05/08/2017'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'listing-details' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'floor-space' },
                                        _react2.default.createElement('i', { className: 'far fa-square' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            listing.floorSpace,
                                            ' ft\xB2'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'bedrooms' },
                                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            listing.rooms,
                                            ' Bedrooms'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'view-listing' },
                                        'View Listing'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bottom-info' },
                            _react2.default.createElement(
                                'span',
                                { id: 'rent-price' },
                                '$',
                                listing.price,
                                ' / month'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('i', { className: 'fas fa-map-marker' }),
                                listing.city,
                                ', ',
                                listing.state
                            )
                        )
                    );
                } else {
                    // THIS IS THE LONG LIST VIEW
                    return _react2.default.createElement(
                        'div',
                        { id: 'longview', className: 'listing', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                            _react2.default.createElement(
                                'span',
                                { className: 'address' },
                                listing.address
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement('div', { className: 'user-img' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'user-details' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'user-name' },
                                        'John Smith'
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'post-date' },
                                        '05/08/2017'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'listing-details' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'floor-space' },
                                        _react2.default.createElement('i', { className: 'far fa-square' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            listing.floorSpace,
                                            ' ft\xB2'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'bedrooms' },
                                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            listing.rooms,
                                            ' Bedrooms'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'view-listing' },
                                        'View Listing'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bottom-info' },
                            _react2.default.createElement(
                                'span',
                                { id: 'rent-price' },
                                '$',
                                listing.price,
                                ' / month'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('i', { className: 'fas fa-map-marker' }),
                                listing.city,
                                ', ',
                                listing.state
                            )
                        )
                    );
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'listings' },
                _react2.default.createElement(
                    'section',
                    { className: 'search-area' },
                    _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Enter an address, neighborhood, or city', onChange: this.props.change })
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'sortby-area' },
                    _react2.default.createElement(
                        'div',
                        { className: 'results' },
                        this.props.globalState.filteredData.length,
                        ' results found'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sort-options' },
                        _react2.default.createElement(
                            'select',
                            { name: 'sortby', className: 'sortby', onChange: this.props.change },
                            _react2.default.createElement(
                                'option',
                                { value: 'price-dsc' },
                                'Lowest Price'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'price-asc' },
                                'Highest Price'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'view' },
                            _react2.default.createElement('i', { className: 'fas fa-th-list', onClick: this.props.changeView.bind(null, 'long') }),
                            _react2.default.createElement('i', { className: 'fas fa-th', onClick: this.props.changeView.bind(null, 'box') })
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'listings-results' },
                    this.loopListings()
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'pagination' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'pages' },
                        _react2.default.createElement(
                            'li',
                            null,
                            'Prev'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'active' },
                            '1'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '2'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '3'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '4'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '5'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Next'
                        )
                    )
                )
            );
        }
    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);