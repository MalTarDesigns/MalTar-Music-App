webpackJsonp([1,4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    // post sends the data 
    // get retrieves the data
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:5000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); }); //returns the json data from the new registered user (api)
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:5000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken(); //gets the user data from this function
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:5000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token); // Storing the token to localStorage
        localStorage.setItem('user', JSON.stringify(user)); // Storing the user to localStorage
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token'); // retrives the user data from localStorage
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        // https://github.com/auth0/angular2-jwt
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/auth.service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl)
            .map(function (res) { return res.json(); }); //returns the json from the spotify (api)
    };
    SpotifyService.prototype.getArtist = function (id) {
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistUrl)
            .map(function (res) { return res.json(); }); //returns the json from the spotify (api)
    };
    SpotifyService.prototype.getAlbums = function (artistId) {
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
        return this._http.get(this.albumsUrl)
            .map(function (res) { return res.json(); }); //returns the json from the spotify (api)
    };
    SpotifyService.prototype.getAlbum = function (id) {
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
        return this._http.get(this.albumUrl)
            .map(function (res) { return res.json(); }); //returns the json from the spotify (api)
    };
    SpotifyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], SpotifyService);
    return SpotifyService;
    var _a;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/spotify.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/MalTarMusicApp/view/src/polyfills.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(712),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/app.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_spotify_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumComponent = (function () {
    function AlbumComponent(_spotifyService, _route) {
        this._spotifyService = _spotifyService;
        this._route = _route;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._spotifyService.getAlbum(id)
                .subscribe(function (album) {
                _this.album = album;
            });
        });
    };
    AlbumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'album',
            template: __webpack_require__(713),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_spotify_service__["a" /* SpotifyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_spotify_spotify_service__["a" /* SpotifyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], AlbumComponent);
    return AlbumComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/album.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_spotify_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistComponent = (function () {
    function ArtistComponent(_spotifyService, _route) {
        this._spotifyService = _spotifyService;
        this._route = _route;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._spotifyService.getArtist(id)
                .subscribe(function (artist) {
                _this.artist = artist;
            });
            _this._spotifyService.getAlbums(id)
                .subscribe(function (albums) {
                _this.albums = albums.items;
            });
        });
    };
    ArtistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'artist',
            template: __webpack_require__(714),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_spotify_service__["a" /* SpotifyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_spotify_spotify_service__["a" /* SpotifyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ArtistComponent);
    return ArtistComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/artist.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(717),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/dashboard.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_authService, _router, _flashMessage) {
        this._authService = _authService;
        this._router = _router;
        this._flashMessage = _flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        //debugger;
        var user = {
            username: this.username,
            password: this.password
        };
        this._authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this._authService.storeUserData(data.token, data.user);
                _this._flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this._router.navigate(['dashboard']);
            }
            else {
                _this._flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this._router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__(719),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/login.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about',
            template: __webpack_require__(722),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/about.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact',
            template: __webpack_require__(723),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/contact.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__(724),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/home.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pricing',
            template: __webpack_require__(725),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [])
    ], PricingComponent);
    return PricingComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/pricing.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__(727),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/profile.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_validate_service__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(_validateService, _flashMessage, _authService, _router) {
        this._validateService = _validateService;
        this._flashMessage = _flashMessage;
        this._authService = _authService;
        this._router = _router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this._validateService.validateRegister(user)) {
            console.log('Please fill in all fields');
            this._flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this._validateService.validateEmail(user.email)) {
            //console.log('Please use a valid email');
            this._flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this._authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this._flashMessage.show('Your registration was successful', { cssClass: 'alert-success', timeout: 3000 });
                _this._router.navigate(['login']);
            }
            else {
                _this._flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this._router.navigate(['register']);
            }
        });
    }; // onRegisterSubmit() - end
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register',
            template: __webpack_require__(728),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validate_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/register.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_spotify_service__ = __webpack_require__(218);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    //creates a intance of the service
    function SearchComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(function (res) {
            _this.searchRes = res.artists.items;
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search',
            template: __webpack_require__(729),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_spotify_service__["a" /* SpotifyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_spotify_spotify_service__["a" /* SpotifyService */]) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/search.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    // Guard that will protect the links from users that are not signed links
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/auth.guard.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeatsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BeatsService = (function () {
    function BeatsService() {
    }
    BeatsService.prototype.getBeats = function () {
        return [
            {
                id: '1',
                title: 'fire beat',
                producer: 'Live',
                cover: 'http://placehold.it/50x50',
                duration: '5.02',
                bpm: '100',
                genre: 'hip-hop',
                price: '29.95',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
            },
            {
                id: '2',
                title: 'two step',
                producer: 'Live',
                cover: 'http://placehold.it/50x50',
                duration: '5.02',
                bpm: '85',
                genre: 'hip-hop',
                price: '19.95',
                url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
            },
            {
                id: '3',
                title: 'make love',
                producer: 'Live',
                cover: 'http://placehold.it/50x50',
                duration: '5.02',
                bpm: '98',
                genre: 'R&B',
                price: '39.95',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
            },
            {
                id: '4',
                title: 'sweet time',
                producer: 'MalTar',
                cover: 'http://placehold.it/50x50',
                duration: '5.02',
                bpm: '108',
                genre: 'R&B',
                price: '29.95',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
            },
            {
                id: '5',
                title: 'dirty time',
                producer: 'Dirty D',
                cover: 'http://placehold.it/50x50',
                duration: '2.50',
                bpm: '98',
                genre: 'R&B',
                price: '99.95',
                url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
            },
            {
                id: '6',
                title: 'Lean on fire',
                producer: 'Justin',
                cover: 'http://placehold.it/50x50',
                duration: '3.25',
                bpm: '95',
                genre: 'Hip-Hop',
                price: '3000.00',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
            },
            {
                id: '7',
                title: 'Lean on fire',
                producer: 'Justin',
                cover: 'http://placehold.it/50x50',
                duration: '3.25',
                bpm: '95',
                genre: 'Hip-Hop',
                price: '3000.00',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
            }
        ];
    }; /* end getBeats(); */ // - move this data to it's own Json file 
    BeatsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], BeatsService);
    return BeatsService;
}()); /* end class */
//# sourceMappingURL=C:/MalTarMusicApp/view/src/beats.service.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/validate.service.js.map

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 557;


/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(684);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/MalTarMusicApp/view/src/main.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_music_player_music_player_module__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_beats_beats_service__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_spotify_spotify_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_auth_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validate_validate_service__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pages_home_home_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_carousel_carousel_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_posts_posts_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pages_about_about_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_search_search_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pages_contact_contact_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_artist_artist_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_album_album_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_audio_player_audio_player_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_subscribe_subscribe_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_dashboard_dashboard_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_pages_pricing_pricing_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_profile_profile_component__ = __webpack_require__(533);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_artist_artist_component__["a" /* ArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_album_album_component__["a" /* AlbumComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_audio_player_audio_player_component__["a" /* AudioPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_subscribe_subscribe_component__["a" /* SubscribeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_pages_pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* RoutesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_music_player_music_player_module__["a" /* MusicPlayerModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_beats_beats_service__["a" /* BeatsService */],
                __WEBPACK_IMPORTED_MODULE_8__services_spotify_spotify_service__["a" /* SpotifyService */],
                __WEBPACK_IMPORTED_MODULE_9__services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__services_validate_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/app.module.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pages_home_home_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_about_about_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_search_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pages_contact_contact_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_artist_artist_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_album_album_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_pages_pricing_pricing_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__(536);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var RoutesModule = (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_pages_home_home_component__["a" /* HomeComponent */] },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
                    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__components_pages_about_about_component__["a" /* AboutComponent */] },
                    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__components_search_search_component__["a" /* SearchComponent */] },
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
                    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_11__components_pages_pricing_pricing_component__["a" /* PricingComponent */] },
                    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__components_pages_contact_contact_component__["a" /* ContactComponent */] },
                    { path: 'artist/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_artist_artist_component__["a" /* ArtistComponent */] },
                    { path: 'album/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_album_album_component__["a" /* AlbumComponent */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RoutesModule);
    return RoutesModule;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/app.routes.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AudioPlayerComponent = (function () {
    function AudioPlayerComponent() {
    }
    AudioPlayerComponent.prototype.ngOnInit = function () {
    };
    AudioPlayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'audio-player',
            template: __webpack_require__(715),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], AudioPlayerComponent);
    return AudioPlayerComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/audio-player.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'carousel',
            template: __webpack_require__(716),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/carousel.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-app',
            template: __webpack_require__(718),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/footer.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_beats_beats_service__ = __webpack_require__(537);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MusicPlayerComponent = (function () {
    //creates a intance of the service
    function MusicPlayerComponent(_beatService) {
        //this.songs = _beatService.getSongs(); // this should be placed in ngOnInit
        this._beatService = _beatService;
        this.audio = new Audio();
        this.is_playing = false;
        this.audio_folder = "audio/";
        this.audio_ext = ".mp3";
        this.audio_index = 1;
    }
    MusicPlayerComponent.prototype.playAudio = function (event) {
        event.preventDefault();
        if (this.playingtrack != event.target) {
            this.is_playing = true;
            event.target.classList.add("fa-pause");
            if (typeof (this.playingtrack) != 'undefined') {
                this.playingtrack.classList.remove("fa-pause");
            }
            this.audio.pause();
            this.audio.src = event.target.href;
            this.audio.load();
            this.audio.play();
        }
        else {
            if (this.is_playing) {
                this.audio.pause();
                this.is_playing = false;
                this.playingtrack.classList.remove("fa-pause");
            }
            else {
                this.audio.play();
                this.is_playing = true;
                this.playingtrack.classList.add("fa-pause");
            }
        }
        this.playingtrack = event.target;
    };
    MusicPlayerComponent.prototype.ngOnInit = function () {
        this.beats = this._beatService.getBeats();
    };
    MusicPlayerComponent = __decorate([
        // This allows you to use jQuery below
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'music-player',
            template: __webpack_require__(720),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_beats_beats_service__["a" /* BeatsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_beats_beats_service__["a" /* BeatsService */]) === 'function' && _a) || Object])
    ], MusicPlayerComponent);
    return MusicPlayerComponent;
    var _a;
}()); /* ends export class */
//# sourceMappingURL=C:/MalTarMusicApp/view/src/music-player.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_player_component__ = __webpack_require__(679);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicPlayerModule = (function () {
    function MusicPlayerModule() {
    }
    MusicPlayerModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__music_player_component__["a" /* MusicPlayerComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__music_player_component__["a" /* MusicPlayerComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MusicPlayerModule);
    return MusicPlayerModule;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/music-player.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(_authService, _router, _flashMessage) {
        this._authService = _authService;
        this._router = _router;
        this._flashMessage = _flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this._authService.logout();
        this._flashMessage.show('You are now logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this._router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(721),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/navbar.component.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsComponent = (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'posts',
            template: __webpack_require__(726),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [])
    ], PostsComponent);
    return PostsComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/posts.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubscribeComponent = (function () {
    function SubscribeComponent() {
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'subscribe',
            template: __webpack_require__(730),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [])
    ], SubscribeComponent);
    return SubscribeComponent;
}());
//# sourceMappingURL=C:/MalTarMusicApp/view/src/subscribe.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(524);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(674);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/MalTarMusicApp/view/src/index.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/MalTarMusicApp/view/src/environment.js.map

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ".album-header {\n    margin: 20px 0;\n}\n\n.album-thumb {\n    height: auto;\n    width: 100%;\n}\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ".artist-header {\n    height: 120px;\n    border-bottom: 1px solid #000;\n    margin-bottom: 50px;\n}\n\n.artist-thumb {\n    float: left;\n    height: auto;\n    width: 90px;\n    margin-right: 20px;\n}\n\n.artist-albums .well {\n    margin-bottom: 20px;\n    overflow: auto;\n    min-height: 400px\n}\n\n.album {\n    text-align: center;\n    padding: 10px 20px;\n}\n\n.album-thumb {\n    width:100%;\n}"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "#audio-player-col {\n    height:1000px;\n    padding: 0;\n    box-shadow: -8px 8px 6px -6px #999;\n}\n\n#audio-player-col dd {\n    margin-left: 20px;\n}\n\n.time-start,\n.time-end,\n.repeat,\n.shuffle {\n    display: inline-block;\n}\n\n.time-end,\n.shuffle {\n    float: right;\n}\n\n.progress {\n    height: 5px;\n}\n\n.progress-bar {\n    background-color: red;\n}\n\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "/* Carousel base class */\n.carousel {\n  height: 500px;\n  margin-bottom: 60px;\n}\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n  z-index: 10;\n}\n\n/* Declare heights because of positioning of img element */\n.carousel .item {\n  height: 500px;\n  background-color: #777;\n}\n.carousel-inner > .item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 500px;\n}"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "footer {\n    height: 50px;\n}\n\n.copyright {\n    text-align: center;\n    margin-top: 25px;\n}"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "h1.title { \r\n\tfont-size: 50px;\r\n\tfont-weight: 400; \r\n}\r\n\r\n.form-signin\r\n{\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading, .form-signin .checkbox\r\n{\r\n    margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox\r\n{\r\n    font-weight: normal;\r\n}\r\n.form-signin .form-control\r\n{\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus\r\n{\r\n    z-index: 2;\r\n}\r\n.form-signin input[type=\"text\"]\r\n{\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"]\r\n{\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n.account-wall\r\n{\r\n    margin-top: 20px;\r\n    padding: 40px 0px 20px 0px;\r\n    background-color: #f7f7f7;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.login-title\r\n{\r\n    color: #555;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    display: block;\r\n}\r\n.profile-img\r\n{\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n.need-help\r\n{\r\n    margin-top: 10px;\r\n}\r\n.new-account\r\n{\r\n    display: block;\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ".table > tbody > tr > td, \n.table > tbody > tr > th, \n.table > tfoot > tr > td, \n.table > tfoot > tr > th, \n.table > thead > tr > td, \n.table > thead > tr > th {\n    border-bottom: 1px solid #ddd !important; /*Not sure why this is not working*/\n}\n\n.add-button {\n    margin-left: 10px;\n}\n\n\n\n\n\n#music-player {\n    margin-top: 25px;\n    height: 500px;\n    width: 100%;\n}\n\n.music-player-header {\n    height: 50px;\n    background-color: black;\n}\n\n.music-player-info {\n    height: 150px;\n    background-color: #eee;\n}\n\n.track-cover {\n    float: left;\n    margin: 20px 0 0 15px;\n}\n\n.track-info {\n    display: inline-block;\n    margin-left: 20px;\n}\n\n#music-search {\n    width: 100%;\n    height: 30px;\n}\n\n.tracklist {\n    background-color: #F5F5F5;\n    max-height: 300px;\n    overflow-y:scroll; \n}\n\n.tracklist > ul {\n    padding: 0;\n    margin: 0;\n}\n\n.tracklist > ul > li {\n    list-style: none;\n}\n\n.pic-play-title,\n.track-obj,\n.track-action {\n    display: inline-block;\n}\n\n.pic-play-title {\n    width: 35%\n}\n.track-obj {\n    width: 35%;\n}\n\n.track-action {\n    width: 20%;\n} \n\n.tracklist > ul > li > * > span {\n    margin-left: 10px;\n}\n\n.add-to-cart {\n    margin-left: 10px;\n}\n\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ".navbar {\n  margin: 0;\n  background-color: #fff;\n  box-shadow: 0 8px 6px -6px #999;\n}\n\n.navbar-nav {\n  float: right;\n}"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "#pricing {\r\n    margin-top: 20px;\r\n}\r\n.panel\r\n{\r\n    text-align: center;\r\n}\r\n.panel:hover { box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4), 0 1px 5px rgba(130, 130, 130, 0.35); }\r\n.panel-body\r\n{\r\n    padding: 0px;\r\n    text-align: center;\r\n}\r\n\r\n.the-price\r\n{\r\n    background-color: rgba(220,220,220,.17);\r\n    box-shadow: 0 1px 0 #dcdcdc, inset 0 1px 0 #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n}\r\n\r\n.the-price h1\r\n{\r\n    line-height: 1em;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.subscript\r\n{\r\n    font-size: 25px;\r\n}\r\n\r\n/* CSS-only ribbon styles    */\r\n.cnrflash\r\n{\r\n    /*Position correctly within container*/\r\n    position: absolute;\r\n    top: -9px;\r\n    right: 4px;\r\n    z-index: 1; /*Set overflow to hidden, to mask inner square*/\r\n    overflow: hidden; /*Set size and add subtle rounding  \t\tto soften edges*/\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 3px 5px 3px 0;\r\n}\r\n.cnrflash-inner\r\n{\r\n    /*Set position, make larger then \t\t\tcontainer and rotate 45 degrees*/\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 145px;\r\n    height: 145px;\r\n    -ms-transform: rotate(45deg); /* IE 9 */\r\n    -o-transform: rotate(45deg); /* Opera */\r\n    -moz-transform: rotate(45deg); /* Firefox */\r\n    -webkit-transform: rotate(45deg); /* Safari and Chrome */\r\n    -webkit-transform-origin: 100% 100%; /*Purely decorative effects to add texture and stuff*/ /* Safari and Chrome */\r\n    -ms-transform-origin: 100% 100%;  /* IE 9 */\r\n    -o-transform-origin: 100% 100%; /* Opera */\r\n    -moz-transform-origin: 100% 100%; /* Firefox */\r\n    background-image: -webkit-linear-gradient(left, transparent 50%, rgba(255,255,255,.1) 50%), -webkit-linear-gradient(bottom, transparent 0%, rgba(1,1,1,.2) 50%);\r\n    background-image: linear-gradient(90deg, transparent 50%, rgba(255,255,255,.1) 50%), linear-gradient(0deg, transparent 0%, rgba(1,1,1,.2) 50%);\r\n    background-size: 4px,auto, auto,auto;\r\n    background-color: #aa0101;\r\n    box-shadow: 0 3px 3px 0 rgba(1,1,1,.5), 0 1px 0 0 rgba(1,1,1,.5), inset 0 -1px 8px 0 rgba(255,255,255,.3), inset 0 -1px 0 0 rgba(255,255,255,.2);\r\n}\r\n.cnrflash-inner:before, .cnrflash-inner:after\r\n{\r\n    /*Use the border triangle trick to make  \t\t\t\tit look like the ribbon wraps round it's \t\t\t\tcontainer*/\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    bottom: -16px;\r\n    width: 0;\r\n    height: 0;\r\n    border: 8px solid #800000;\r\n}\r\n.cnrflash-inner:before\r\n{\r\n    left: 1px;\r\n    border-bottom-color: transparent;\r\n    border-right-color: transparent;\r\n}\r\n.cnrflash-inner:after\r\n{\r\n    right: 0;\r\n    border-bottom-color: transparent;\r\n    border-left-color: transparent;\r\n}\r\n.cnrflash-label\r\n{\r\n    /*Make the label look nice*/\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    padding-bottom: 5px;\r\n    color: #fff;\r\n    text-shadow: 0 1px 1px rgba(1,1,1,.8);\r\n    font-size: 0.95em;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "#posts {\n    padding: 0 150px 0 150px;\n    margin-bottom: 60px;\n}\n\n.posts {\n    margin-bottom: 10px; \n}\n\n.posts .img-responsive {\n    margin: 0 auto;\n}\n\n\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "#profile {\r\n    padding: 5% 0;\r\n}\r\n\r\n.glyphicon {  margin-bottom: 10px;margin-right: 10px;}\r\n\r\nsmall {\r\ndisplay: block;\r\nline-height: 1.428571429;\r\ncolor: #999;\r\n}"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "h1.title { \r\n\tfont-size: 50px;\r\n\tfont-weight: 400; \r\n}\r\n\r\nhr{\r\n\twidth: 10%;\r\n\tcolor: #fff;\r\n}\r\n\r\n.form-group{\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\nlabel{\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n    font-size: 11px;\r\n    padding-top: 3px;\r\n}\r\n\r\n.main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n\r\n.main-center{\r\n \tmargin-top: 30px;\r\n \tmargin: 0 auto;\r\n \tmax-width: 330px;\r\n\t/*padding: 40px 40px;*/\r\n}\r\n\r\n.login-button{\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.login-register{\r\n\tfont-size: 11px;\r\n\ttext-align: center;\r\n}\r\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "#subscribe {\n    background-color: black;\n    text-transform: uppercase;\n    padding: 5% 0;\n}\n\n#subscribe h4 {\n    text-transform: uppercase;\n}\n\n#subscribe .subscribe-btn-box {\n    text-align: center;\n    padding: 5% 2%;\n}\n\n#subscribe input {\n    width: 100%;\n    height: 45px;\n    background-color: transparent;\n    border: 1px solid gray;\n    padding: 10px;\n}\n\n#subscribe .btn-default {\n    text-transform: uppercase;\n    color: black;\n    background-color: #fff;\n    font-weight: 600;\n    border-radius: 0;\n    width: 70%; \n}"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n\n<subscribe></subscribe>\n<footer-app></footer-app>"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"album\" *ngIf=\"album\">\n        <header class=\"album-header\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div *ngIf=\"album.images.length > 0\">\n                        <img class=\"album-thumb\" src=\"{{album.images[0].url}}\">\n                    </div>\n                </div>\n                <div class=\"col-md-8\">\n                    <h4 *ngIf=\"album.artists.length > 0\"><span *ngFor=\"let artist of album.artists\">\n                    {{artist.name}}\n                    </span></h4>\n                    <h2>{{album.name}}</h2>\n                    <h5>Release Date: {{album.release_date}}</h5>\n                    <a class=\"btn btn-primary\" target=\"_blank\" href=\"{{album.external_urls.spotify}}\">View In Spotify</a> \n                </div>    \n            </div>    \n        </header>\n        \n        <div class=\"album-tracks\">\n            <h2>Album Tracks</h2>\n            <div *ngFor=\"let track of album.tracks.items\">\n                <div class=\"well\">\n                    <h5>{{track.track_number}} - {{track.name}}</h5>\n                    <a href=\"{{track.preview_url}}\" target=\"_blank\">Preview Track</a>    \n                </div>    \n            </div>    \n        </div> \n    </div>\n</div>"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<section id=\"artists-profile\">\n  <div class=\"container\">\n    <div *ngIf=\"artist\">\n        <header class=\"artist-header\">\n            <div *ngIf=\"artist.images.length > 0\">\n                <img class=\"artist-thumb img-circle\" src=\"{{artist.images[0].url}}\">    \n            </div>\n            <h1>{{artist.name}}</h1>\n            <p *ngIf=\"artist.genres.length > 0\">\n                Genres: <span *ngFor=\"let genre of artist.genres\">{{genre}}</span>\n            </p>\n        </header> \n        \n        <div class=\"artist-albums\">\n            <div class=\"row\">\n                <div *ngFor=\"let album of albums\">\n                    <div class=\"col-md-3\">\n                        <div class=\"well album\">\n                            <div *ngIf=\"album.images.length > 0\">\n                                <img class=\"album-thumb img-thumbnail\" src=\"{{album.images[0].url}}\">    \n                                <h4>{{album.name}}</h4>\n                                <a class=\"btn btn-default btn-block\" routerLink=\"/album/{{album.id}}\">Album Details</a>\n                            </div>   \n                        </div>    \n                    </div>\n                </div>    \n            </div>    \n        </div>\n    </div> \n  </div>\n</section>"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div id=\"audio-player-col\" class=\"col-md-12 col-md-push-3\" >\n  <img class=\"img-responsive\" src=\"http://placehold.it/350x200\" alt=\"\">\n  <h3 class=\"text-center\">Louie Castro</h3>\n\n  <div class=\"col-md-12\">\n\n    <div class=\"time-start\">0.00</div>\n    <div class=\"time-end\">3.25</div>\n\n    <div class=\"progress progress-striped active\">\n      <div class=\"progress-bar\"  role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\">\n        <span class=\"sr-only\">45% Complete</span>\n      </div>\n    </div>\n\n    <div class=\"repeat\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"shuffle\">\n      <i class=\"fa fa-random\" aria-hidden=\"true\"></i>\n    </div>\n\n\n    <div class=\"audio-controls text-center\">\n      <div class=\"play-buttons\">\n        <i class=\"fa fa-backward\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-pause hidden\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-forward\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <dl>\n      <dt>Genre</dt>\n        <dd>Hip-Hop</dd>\n        <dd>R$B</dd>\n        <dd>PopHip-Hop</dd>\n        <dd>Hip-Hop</dd>\n        <dd>Hip-Hop</dd>\n        <dd>Hip-Hop</dd>\n        <dd>Hip-Hop</dd>\n        <dd>Hip-Hop</dd>\n        <dd>Hip-Hop</dd>\n        <dd>Hip-Hop</dd>\n    </dl> \n\n\n  </div><!--/ .col-md-12 -->\n</div><!--/ .col-md-3 -->\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "\n    <!-- Carousel\n    ================================================== -->\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n      <!-- Indicators -->\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"item active\">\n          <img class=\"first-slide\" src=\"http://placehold.it/1265x500\" alt=\"First slide\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1>MalTar Music</h1>\n              <p>Best Collections</p>\n              <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Upcoming Events</a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <img class=\"second-slide\" src=\"http://placehold.it/1265x500\" alt=\"Second slide\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1>Another example headline.</h1>\n              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n              <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <img class=\"third-slide\" src=\"http://placehold.it/1265x500\" alt=\"Third slide\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1>One more for good measure.</h1>\n              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n              <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div><!-- /.carousel -->\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n        <div class=\"row\">\n\n            <div class=\"col-lg-12\">\n                <h2 class=\"page-header\">Dashboard</h2>\n                <h4>Welcome to your dashboard</h4>\n            </div>\n\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"http://placehold.it/400x300\" alt=\"\">\n                </a>\n            </div>\n        </div>"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"copyright\">\n          Copyright 2016 | MalTar Music\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <h1 class=\"text-center title\">Login</h1>\n            <div class=\"account-wall\">\n                <img class=\"profile-img\" src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\"\n                    alt=\"\">\n                <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n                <!--<input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\"  autofocus>-->\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\"  autofocus>\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" >\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                    Sign in</button>\n                <label class=\"checkbox pull-left\">\n                    <input type=\"checkbox\" value=\"remember-me\">\n                    Remember me\n                </label>\n                <a href=\"#\" class=\"pull-right need-help\">Need help? </a><span class=\"clearfix\"></span>\n                </form>\n            </div>\n            <a routerLink=\"/register\" routerLinkActive=\"active\" class=\"text-center new-account\">Create an account </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"section-heading-top\"></div>\n  <h2 class=\"text-center\">Latest Beats</h2>\n  <div class=\"section-heading-bottom\"></div>\n  <table class=\"table\"> \n    <tbody>\n      <tr *ngFor = \"let beat of beats\"> \n        <th scope=\"row\"><a id=\"{{beat.id}}\" class=\"fa fa-play\" (click)=\"playAudio($event)\" href=\"{{beat.url}}\"></a></th> \n        <td>{{beat.title}}</td>\n        <td>{{beat.duration}}</td>\n        <td>{{beat.bpm}}</td>\n        <td>{{beat.genre}}</td>\n        <td>{{beat.price | currency:'USD':true}}</td>\n        <td class=\"text-right\"><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i><button class=\"add-button\">Add</button></td>\n      </tr>  \n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\">MalTar Music</a>\n      </div>\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav navbar-left\">\n          <li class=\"active\"><a  routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n          <li><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n          <li><a routerLink=\"/search\" routerLinkActive=\"active\">Spotify Search</a></li>\n          <li><a routerLink=\"/pricing\" routerLinkActive=\"active\">Pricing</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a *ngIf=\"_authService.loggedIn()\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a></li>\n          <li><a *ngIf=\"_authService.loggedIn()\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a></li>\n          <li><a *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n          <li><a *ngIf=\"!_authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\">Sign up</a></li>\n          <li><a *ngIf=\"_authService.loggedIn()\" (click)=\"onLogoutClick()\">Logout</a></li>\n        </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-9\">\n            <posts></posts>\n            <music-player></music-player>\n        </div>\n        <div class=\"col-md-3\">\n            <audio-player></audio-player>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<div id=\"pricing\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-xs-12 col-md-4\">\n              <div class=\"panel panel-primary\">\n                  <div class=\"panel-heading\">\n                      <h3 class=\"panel-title\">Free</h3>\n                  </div>\n                  <div class=\"panel-body\">\n                      <div class=\"the-price\">\n                          <h1>\n                              $0<span class=\"subscript\">/mo</span></h1>\n                      </div>\n                      <table class=\"table\">\n                          <tr>\n                              <td>\n                                  1 Account\n                              </td>\n                          </tr>\n                          <tr class=\"active\">\n                              <td>\n                                  1 Project\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  100K API Access\n                              </td>\n                          </tr>\n                          <tr class=\"active\">\n                              <td>\n                                  100MB Storage\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  Custom Cloud Services\n                              </td>\n                          </tr>\n                          <tr class=\"active\">\n                              <td>\n                                  Weekly Reports\n                              </td>\n                          </tr>\n                      </table>\n                  </div>\n                  <div class=\"panel-footer\">\n                      <a href=\"#\" class=\"btn btn-success\" role=\"button\">Sign Up</a>\n                    </div>\n              </div>\n          </div>\n          <div class=\"col-xs-12 col-md-4\">\n              <div class=\"panel panel-success\">\n                  <div class=\"cnrflash\">\n                      <div class=\"cnrflash-inner\">\n                          <span class=\"cnrflash-label\">MOST\n                              <br>\n                              POPULR</span>\n                      </div>\n                  </div>\n                  <div class=\"panel-heading\">\n                      <h3 class=\"panel-title\">Unlimited</h3>\n                  </div>\n                  <div class=\"panel-body\">\n                      <div class=\"the-price\">\n                          <h1>\n                              $19.99<span class=\"subscript\">/mo</span></h1>\n                      </div>\n                      <table class=\"table\">\n                          <tr>\n                              <td>\n                                  2 Account\n                              </td>\n                          </tr>\n                          <tr class=\"active\">\n                              <td>\n                                  5 Project\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  100K API Access\n                              </td>\n                          </tr>\n                          <tr class=\"active\">\n                              <td>\n                                  200MB Storage\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  Custom Cloud Services\n                              </td>\n                          </tr>\n                          <tr class=\"active\">\n                              <td>\n                                  Weekly Reports\n                              </td>\n                          </tr>\n                      </table>\n                  </div>\n                  <div class=\"panel-footer\">\n                      <a href=\"#\" class=\"btn btn-success\" role=\"button\">Sign Up</a>\n                    </div>\n              </div>\n          </div>\n          <div class=\"col-xs-12 col-md-4\">\n              <div class=\"panel panel-info\">\n                  <div class=\"panel-heading\">\n                      <h3 class=\"panel-title\">Pro</h3>\n                  </div>\n                  <div class=\"panel-body\">\n                      <div class=\"the-price\">\n                          <h1>\n                              $9.99<span class=\"subscript\">/mo</span></h1>\n                      </div>\n                      <table class=\"table\">\n                          <tr>\n                              <td>\n                                  5 Account\n                              </td>\n                          </tr>\n                          <tr class=\"active\">\n                              <td>\n                                  20 Project\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  300K API Access\n                              </td>\n                          </tr>\n                          <tr class=\"active\">\n                              <td>\n                                  500MB Storage\n                              </td>\n                          </tr>\n                          <tr>\n                              <td>\n                                  Custom Cloud Services\n                              </td>\n                          </tr>\n                          <tr class=\"active\">\n                              <td>\n                                  Weekly Reports\n                              </td>\n                          </tr>\n                      </table>\n                  </div>\n                  <div class=\"panel-footer\">\n                      <a href=\"#\" class=\"btn btn-success\" role=\"button\">Sign Up</a></div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"section-heading-top\"></div>\n  <h2 class=\"text-center\">Top Posts</h2>\n  <div class=\"section-heading-bottom\"></div>\n\n  <div class=\"col-xs-4 col-md-4 posts\">\n      <img class=\"img-responsive\" src=\"http://placehold.it/500x550\" alt=\"...\">\n  </div>\n    <div class=\"col-xs-4 col-md-4 posts\">\n      <img class=\"img-responsive\" src=\"http://placehold.it/500x550\" alt=\"...\">\n  </div>\n    <div class=\"col-xs-4 col-md-4 posts\">\n      <img class=\"img-responsive\" src=\"http://placehold.it/500x550\" alt=\"...\">\n  </div>\n  <div class=\"col-xs-4 col-md-4 posts\">\n      <img class=\"img-responsive\" src=\"http://placehold.it/500x550\" alt=\"...\">\n  </div>\n    <div class=\"col-xs-4 col-md-4 posts\">\n      <img class=\"img-responsive\" src=\"http://placehold.it/500x550\" alt=\"...\">\n  </div>\n    <div class=\"col-xs-4 col-md-4 posts\">\n      <img class=\"img-responsive\" src=\"http://placehold.it/500x550\" alt=\"...\">\n  </div>\n</div><!--/ .col -->\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div id=\"profile\" *ngIf=\"user\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6\">\n              <div class=\"well well-sm\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6 col-md-4\">\n                          <img src=\"http://placehold.it/380x500\" alt=\"\" class=\"img-rounded img-responsive\" />\n                      </div>\n                      <div class=\"col-sm-6 col-md-8\">\n                          <h4>{{user.name}}</h4>\n                          <small><cite title=\"San Francisco, USA\">New York, USA <i class=\"glyphicon glyphicon-map-marker\">\n                          </i></cite></small>\n                          <p>\n                              <i class=\"glyphicon glyphicon-envelope\"></i>{{user.email}}\n                              <i class=\"glyphicon glyphicon-globe\"></i><a href=\"#\">www.maltarmusic.com</a>\n                              <br />\n                              <i class=\"glyphicon glyphicon-gift\"></i>June 02, 1988</p>\n                          <!-- Split button -->\n                          <div class=\"btn-group\">\n                              <button type=\"button\" class=\"btn btn-primary\">\n                                  Social</button>\n                              <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                                  <span class=\"caret\"></span><span class=\"sr-only\">Social</span>\n                              </button>\n                              <ul class=\"dropdown-menu\" role=\"menu\">\n                                  <li><a href=\"#\">Twitter</a></li>\n                                  <li><a href=\"https://plus.google.com/+Jquery2dotnet/posts\">Google +</a></li>\n                                  <li><a href=\"https://www.facebook.com/jquery2dotnet\">Facebook</a></li>\n                                  <li class=\"divider\"></li>\n                                  <li><a href=\"#\">Github</a></li>\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div class=\"row main\">\n  <div class=\"panel-heading\">\n            <div class=\"panel-title text-center\">\n              <h1 class=\"title\">Register</h1>\n            </div>\n        </div> \n  <div class=\"main-login main-center\">\n    <form class=\"form-horizontal\" (submit)=\"onRegisterSubmit()\">\n      \n      <div class=\"form-group\">\n        <label for=\"name\" class=\"cols-sm-2 control-label\">Your Name</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"name\"  placeholder=\"Enter your Name\"/>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email\"  placeholder=\"Enter your Email\"/>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" id=\"username\"  placeholder=\"Enter your Username\"/>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"password\"  placeholder=\"Enter your Password\"/>\n          </div>\n        </div>\n      </div>\n\n      <!--<div class=\"form-group\">\n        <label for=\"confirm\" class=\"cols-sm-2 control-label\">Confirm Password</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n            <input type=\"password\" class=\"form-control\" name=\"confirm\" id=\"confirm\"  placeholder=\"Confirm your Password\"/>\n          </div>\n        </div>\n      </div>-->\n\n      <div class=\"form-group \">\n        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block login-button\">Submit</button>\n      </div>\n      <!--<div class=\"login-register\">\n        <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n      </div>-->\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<section class=\"search\">\n  <div class=\"container\">\n    <h2>New Music?</h2>\n    <p>Use the search to find any artist you want on Spotify</p>\n    <form>\n      <div class=\"form-group\">\n        <input \n          type=\"searchStr\" \n          name=\"searchStr\"\n          class=\"form-control\" \n          placeholder=\"Search Music\"\n          [(ngModel)]=\"searchStr\"\n          (keyup)=\"searchMusic()\"\n        >\n      </div>\n    </form>\n  \n\n\n<div *ngIf=\"searchRes\">\n    <div *ngFor=\"let res of searchRes\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"search-res well\">\n                    <h4><a routerLink=\"/artist/{{res.id}}\">{{res.name}}</a></h4> \n                    <div>\n                        <strong>Genres: </strong>\n                        <span *ngFor=\"let genre of res.genres\">{{genre}}</span>    \n                    </div>   \n                </div>    \n            </div>    \n        </div>\n    </div>\n</div>\n\n\n\n  </div><!--/ .container -->\n\n</section>\n\n\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<section id=\"subscribe\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-7\">\n        <h4>Subscribe to our newsletter</h4>\n        <input type=\"text\" placeholder=\"Email Address\">\n      </div>\n      <div class=\"col-sm-5 subscribe-btn-box\">\n        <button class=\"btn btn-default\">Subscribe</button>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(558);


/***/ })

},[752]);
//# sourceMappingURL=main.bundle.map