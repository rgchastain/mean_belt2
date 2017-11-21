webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_new_user_new_component__ = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trivia_trivia_component__ = __webpack_require__("../../../../../src/app/trivia/trivia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trivia_trivia_list_trivia_list_component__ = __webpack_require__("../../../../../src/app/trivia/trivia-list/trivia-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_question_new_question_new_component__ = __webpack_require__("../../../../../src/app/question/question-new/question-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trivia_trivia_new_trivia_new_component__ = __webpack_require__("../../../../../src/app/trivia/trivia-new/trivia-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */], children: [
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__user_user_new_user_new_component__["a" /* UserNewComponent */] }
        ] },
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__user_user_new_user_new_component__["a" /* UserNewComponent */] }
        ] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__trivia_trivia_component__["a" /* TriviaComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__trivia_trivia_list_trivia_list_component__["a" /* TriviaListComponent */] },
            { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_8__trivia_trivia_new_trivia_new_component__["a" /* TriviaNewComponent */] }
        ] },
    { path: 'question', component: __WEBPACK_IMPORTED_MODULE_6__question_question_component__["a" /* QuestionComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__question_question_new_question_new_component__["a" /* QuestionNewComponent */] }
        ] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
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
    function AppComponent(_userService, _route, _location) {
        this._userService = _userService;
        this._route = _route;
        this._location = _location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.setCurrentUser(function (user) {
            if (!user) {
                _this._route.navigateByUrl('/');
                return;
            }
            _this._location.back();
        }, console.log);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trivia_trivia_component__ = __webpack_require__("../../../../../src/app/trivia/trivia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_new_user_new_component__ = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_question_new_question_new_component__ = __webpack_require__("../../../../../src/app/question/question-new/question-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__trivia_trivia_new_trivia_new_component__ = __webpack_require__("../../../../../src/app/trivia/trivia-new/trivia-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__trivia_service__ = __webpack_require__("../../../../../src/app/trivia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_user_logout_user_logout_component__ = __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trivia_trivia_list_trivia_list_component__ = __webpack_require__("../../../../../src/app/trivia/trivia-list/trivia-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_user_new_user_new_component__["a" /* UserNewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_user_logout_user_logout_component__["a" /* UserLogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__question_question_new_question_new_component__["a" /* QuestionNewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__trivia_trivia_component__["a" /* TriviaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__trivia_trivia_new_trivia_new_component__["a" /* TriviaNewComponent */],
                __WEBPACK_IMPORTED_MODULE_16__trivia_trivia_list_trivia_list_component__["a" /* TriviaListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_14__trivia_service__["a" /* TriviaService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService(_http, _userService) {
        this._http = _http;
        this._userService = _userService;
        this.questions = [];
    }
    QuestionService.prototype.createQuestion = function (question, callback) {
        var _this = this;
        this._http.post('/questions', question).subscribe(function (res) {
            var question = res.json();
            console.log(_this.questions);
            _this.questions.push(question);
            callback(question);
        }, function (err) {
        });
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
        this.quest = "";
        this.correct = "";
        this.wrong1 = "";
        this.wrong2 = "";
    }
    return Question;
}());



/***/ }),

/***/ "../../../../../src/app/question/question-new/question-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question-new/question-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a [routerLink]=\"['/dashboard']\">Home</a>\n\n<div class=\"app-div\">\n\t<h2>New Question</h2>\n\t<form (submit)=\"onSubmit(); createQuestion.resetForm()\" #createQuestion=\"ngForm\">\n\t\t<p>\n\t\t<small [hidden]=\"quest.valid || (quest.untouched && !createQuestion.submitted)\">\n\t\t\t*Question is required and must be at least 15 characters.\n\t\t</small>\n\t\t</p>\n\t\t<p>\n\t\t<small\n\t\t\t[hidden]=\"correct.valid || (correct.untouched && !createQuestion.submitted)\">\n\t\t\t*Correct Answer is required.\n\t\t</small>\n\t\t</p>\n\t\t<p>\n\t\t<small\n\t\t\t[hidden]=\"wrong1.valid || (wrong1.untouched && !createQuestion.submitted)\">\n\t\t\t*Fake Answer 1 is required.\n\t\t</small>\n\t\t</p>\n\t\t<p>\n\t\t<small\n\t\t\t[hidden]=\"wrong2.valid || (wrong2.untouched && !createQuestion.submitted)\">\n\t\t\t*Fake Answer 2 is required.\n\t\t</small>\n\t\t</p>\n\t\t<p> Question\n\t\t<textarea \n\t\t\ttype=\"text\" \n\t\t\tname=\"quest\"\n\t\t\trequired\n\t\t\tminlength=\"15\"\n\t\t\t[(ngModel)]=\"question.quest\"\n\t\t\t#quest=\"ngModel\" \n\t\t></textarea>\n\t\t</p>\n\t\t\n\t\t<p>\n\t\t\t<label>Correct Answer: </label>\n\t\t\t<input \n\t\t\t\ttype=\"text\"\n\t\t\t\tname=\"correct\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"question.correct\"\n\t\t\t\t#correct=\"ngModel\"\n\t\t\t>\n\t\t</p>\n\t\t<p>\n\t\t\t<label>Fake Answer 1: </label>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tname=\"wrong1\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"question.wrong1\"\n\t\t\t\t#wrong1=\"ngModel\"\n\t\t\t>\n\t\t</p>\n\t\t<p>\n\t\t\t<label>Fake Answer 2: </label>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tname=\"wrong2\"\n\t\t\t\trequired\n\t\t\t\t[(ngModel)]=\"question.wrong2\"\n\t\t\t\t#wrong2=\"ngModel\"\n\t\t\t>\n\t\t</p>\n\t\t\n\n\t\t<button type=\"submit\" [disabled]=\"!createQuestion.valid\">Add Question</button>\n\t\t\n\t</form>\n\t<p><button onclick=\"history.back()\">Cancel</button> \n</div>"

/***/ }),

/***/ "../../../../../src/app/question/question-new/question-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionNewComponent = (function () {
    function QuestionNewComponent(_questionService, _router) {
        this._questionService = _questionService;
        this._router = _router;
    }
    QuestionNewComponent.prototype.ngOnInit = function () {
        this.question = new __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]();
    };
    QuestionNewComponent.prototype.onSubmit = function () {
        this._questionService.createQuestion(this.question, function (question) {
            console.log;
        });
        this.question = new __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]();
        this._router.navigateByUrl('/dashboard');
    };
    QuestionNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question-new',
            template: __webpack_require__("../../../../../src/app/question/question-new/question-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question-new/question-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], QuestionNewComponent);
    return QuestionNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-logout></app-user-logout>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = (function () {
    function QuestionComponent(_userService) {
        this._userService = _userService;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.user = this._userService.currentUser;
    };
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trivia.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriviaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TriviaService = (function () {
    function TriviaService(_http, _userService, _questionService) {
        this._http = _http;
        this._userService = _userService;
        this._questionService = _questionService;
        this.trivias = [];
        this.questions = [];
    }
    TriviaService.prototype.retrieveQuestions = function (callback, errorback) {
        var _this = this;
        this._http.get('/questions').subscribe(function (res) {
            _this.questions = res.json();
            callback(_this.questions);
        }, function (err) {
            errorback(err);
        });
    };
    TriviaService.prototype.createTrivia = function (trivia, callback) {
        var _this = this;
        this._http.post('/trivias', trivia).subscribe(function (res) {
            var trivia = res.json();
            console.log(_this.trivias);
            _this.trivias.push(trivia);
            callback(trivia);
        }, function (err) {
        });
    };
    TriviaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__question_service__["a" /* QuestionService */]])
    ], TriviaService);
    return TriviaService;
}());



/***/ }),

/***/ "../../../../../src/app/trivia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trivia; });
var Trivia = (function () {
    function Trivia() {
        this.a1 = "";
        this.a2 = "";
        this.a3 = "";
    }
    return Trivia;
}());



/***/ }),

/***/ "../../../../../src/app/trivia/trivia-list/trivia-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".play {\n\tborder: solid black 1px;\n\ttext-align: center;\n\tmargin-left: 300px;\n\theight: 100px;\n\twidth: 300px;\n}\n.play button {\n\tmargin-top: 10px;\n\twidth: 100px;\n\theight: 30px;\n\tbackground-color: blue;\n}\n\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    padding: 8px 8px 8px 18px;\n}\n\n\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trivia/trivia-list/trivia-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a [routerLink]=\"['/question']\">Add a Question</a>\n<div class=\"play\">\n\t<button [routerLink]=\"['/dashboard', 'quiz']\">Play!</button>\n\t<p>Click the button above to start the trivia game.</p>\n</div>\n\n<table>\n\t<tr>\n\t\t<th>Name</th>\n\t\t<th>Score</th>\n\t\t<th>Percentage</th>\t\t\n\t</tr>\n\t<tr >\n\t\t<td>Robbie</td>\n\t\t<td>2/3</td>\n\t\t<td>66.7%</td>\n\t</tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/trivia/trivia-list/trivia-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriviaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TriviaListComponent = (function () {
    function TriviaListComponent() {
    }
    TriviaListComponent.prototype.ngOnInit = function () {
    };
    TriviaListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trivia-list',
            template: __webpack_require__("../../../../../src/app/trivia/trivia-list/trivia-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trivia/trivia-list/trivia-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TriviaListComponent);
    return TriviaListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trivia/trivia-new/trivia-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trivia/trivia-new/trivia-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Hi, {{currentUser.name}}</p>\n<p>Choose an answer for each of the questions and submit the test once done. GOOD LUCK!!!</p>\n<form (submit)=\"onSubmit(); createTrivia.resetForm()\" #createTrivia=\"ngForm\">\n<small [hidden]=\"a1.valid || !createTrivia.submitted\">\n*All answers must be filled out.\n</small>\n<table *ngFor=\"let question of questions\">\n\t<p>{{question.quest}}</p>\n\t<p><input type=\"radio\" name=\"a1\" value=\"{{question.wrong1}}\">{{question.wrong1}}</p>\n\t<p><input type=\"radio\" name=\"a2\" value=\"{{question.correct}}\">{{question.correct}}</p>\n\t<p><input type=\"radio\" name=\"a3\" value=\"{{question.wrong2}}\">{{question.wrong2}}</p>\n</table>\n<button type=\"submit\" [disabled]=\"!createTrivia.valid\">Submit</button>\n</form>\n\n<button onclick=\"history.back()\">Cancel</button>\n"

/***/ }),

/***/ "../../../../../src/app/trivia/trivia-new/trivia-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriviaNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trivia_service__ = __webpack_require__("../../../../../src/app/trivia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trivia__ = __webpack_require__("../../../../../src/app/trivia.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriviaNewComponent = (function () {
    function TriviaNewComponent(_userService, _triviaService, _router) {
        this._userService = _userService;
        this._triviaService = _triviaService;
        this._router = _router;
        this.currentUser = this._userService.currentUser;
        this.questions = [];
    }
    TriviaNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trivia = new __WEBPACK_IMPORTED_MODULE_4__trivia__["a" /* Trivia */]();
        this._triviaService.retrieveQuestions(function (questions) {
            _this.questions = questions.questions;
        }, console.log);
    };
    TriviaNewComponent.prototype.onSubmit = function () {
        this._triviaService.createTrivia(this.trivia, function (trivia) {
            console.log;
        });
        this.trivia = new __WEBPACK_IMPORTED_MODULE_4__trivia__["a" /* Trivia */]();
        this._router.navigateByUrl('/dashboard');
    };
    TriviaNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trivia-new',
            template: __webpack_require__("../../../../../src/app/trivia/trivia-new/trivia-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trivia/trivia-new/trivia-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__trivia_service__["a" /* TriviaService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], TriviaNewComponent);
    return TriviaNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trivia/trivia.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trivia/trivia.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-logout></app-user-logout>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/trivia/trivia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriviaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TriviaComponent = (function () {
    function TriviaComponent() {
    }
    TriviaComponent.prototype.ngOnInit = function () {
    };
    TriviaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trivia',
            template: __webpack_require__("../../../../../src/app/trivia/trivia.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trivia/trivia.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TriviaComponent);
    return TriviaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.createUser = function (user, callback, errorback) {
        var _this = this;
        this._http.post('/users', user).subscribe(function (res) {
            var user = res.json();
            _this.currentUser = user;
            callback(_this.currentUser);
        }, function (err) {
            errorback(err);
        });
    };
    UserService.prototype.setCurrentUser = function (callback, errorback) {
        var _this = this;
        this._http.get('/sessions').subscribe(function (res) {
            var user = res.json();
            if (user) {
                _this.currentUser = user;
            }
            callback(user);
        }, function (err) {
            errorback(err);
        });
    };
    UserService.prototype.logout = function (callback, errorback) {
        var _this = this;
        this._http.delete('/sessions').subscribe(function (res) {
            _this.currentUser = null;
            callback(res.json());
        }, function (err) {
            errorback(err);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.name = "";
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"logout()\">Logout</button>"

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLogoutComponent = (function () {
    function UserLogoutComponent(_route, _userService) {
        this._route = _route;
        this._userService = _userService;
    }
    UserLogoutComponent.prototype.ngOnInit = function () {
    };
    UserLogoutComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            _this._route.navigateByUrl('/');
            console.log(res);
        }, console.log);
    };
    UserLogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-logout',
            template: __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], UserLogoutComponent);
    return UserLogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onSubmit(); createUser.resetForm()\" #createUser=\"ngForm\">\n\t<label>Name: </label>\n\t<input \n\t\ttype=\"text\" \n\t\tname=\"name\"\n\t\trequired\n\t\tminlength=\"2\"\n\t\t[(ngModel)]=\"user.name\"\n\t\t#name=\"ngModel\" \n\t>\n\t<small [hidden]=\"name.valid || (name.untouched && !createUser.submitted)\">\n\t\t*Name is required and must be at least 2 characters.\n\t</small>\n\t<button type=\"submit\" [disabled]=\"!createUser.valid\">Login</button>\t\n</form>"

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserNewComponent = (function () {
    function UserNewComponent(_route, _userService) {
        this._route = _route;
        this._userService = _userService;
    }
    UserNewComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        if (this._userService.createUser) {
            // this._route.navigateByUrl('/dashboard')
        }
    };
    UserNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.createUser(this.user, function (user) {
            _this._route.navigateByUrl('/dashboard');
        }, function (err) {
            console.log(err);
        });
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    };
    UserNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-new',
            template: __webpack_require__("../../../../../src/app/user/user-new/user-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-new/user-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], UserNewComponent);
    return UserNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map