(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/VictorHD/toSSD/Documents/Developer/Medium/angular-minimus/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/fb/fb.service */ "SVGU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/add-card/add-card.component */ "f9Pb");
/* harmony import */ var _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/weather-card/weather-card.component */ "S7FI");





function HomeComponent_app_weather_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather-card", 2);
} if (rf & 2) {
    const city_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("city", city_r1 == null ? null : city_r1.name);
} }
class HomeComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.cities = this.fb.getCities();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_1__["FbService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 3, consts: [[1, "main__container"], [3, "city", 4, "ngFor", "ngForOf"], [3, "city"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_weather_card_1_Template, 1, 1, "app-weather-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-add-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.cities));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ui_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_3__["AddCardComponent"], _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_4__["WeatherCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".main__container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    min-height: 90vh;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWluLWhlaWdodDogOTB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    appID: 'ec71e147f66279341df796f4b263254c',
    config: {
        apiKey: 'AIzaSyAKZZlybiA044THfuJbrh-M28f7MGE4Umc',
        authDomain: 'angular-minimus-70a8c.firebaseapp.com',
        databaseURL: 'https://angular-minimus-70a8c-default-rtdb.europe-west1.firebasedatabase.app',
        projectId: 'angular-minimus-70a8c',
        storageBucket: 'angular-minimus-70a8c.appspot.com',
        messagingSenderId: '703044698747',
        appId: "1:703044698747:web:41786aa2d6d60f6be818de"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/fb/fb.service */ "SVGU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/error/error.component */ "dzIq");






class LoginComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    login(e) {
        this.fb.signin(e.target.email.value, e.target.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
            .subscribe(() => this.router.navigateByUrl(''), err => {
            this.errorMessage = err;
            setTimeout(() => this.errorMessage = '', 2000);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__["FbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 4, consts: [[1, "main__container"], [1, "login-card"], [1, "login-content"], [1, "login-header"], [1, "login-form", 3, "ngSubmit"], ["authform", "ngForm"], ["ngModel", "", "type", "email", "autoficus", "", "placeholder", "Email", "name", "email", "required", "", 1, "login-input"], ["ngModel", "", "type", "password", "placeholder", "Password", "name", "password", "minlength", "6", "required", "", 1, "login-input"], ["type", "submit", "name", "submit", "value", "Login", 1, "login-btn", 3, "disabled"], [1, "signup-link-wrapper"], [1, "signup-notice"], ["routerLink", "/signup", 1, "signup-link"], [1, "login-aside"], [1, "login-aside-overlay"], [1, "login-welcome-text"], [1, "login-aside-hr"], [3, "message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener($event) { return ctx.login($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Don't have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "aside", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Welcome Back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-error", 16);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ui_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]], styles: [".main__container[_ngcontent-%COMP%] {\n  min-height: 90vh;\n  width: 90vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.login-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  background-color: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  width: 85%;\n  min-height: 80vh;\n  animation: fadein 1s ease-in-out;\n}\n.login-header[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 2rem;\n  color: #0c1066;\n  letter-spacing: 0.2rem;\n  font-weight: 700;\n  animation: fadein 1.75s ease-in-out;\n}\n.login-content[_ngcontent-%COMP%] {\n  flex: 2 2;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  animation: fadein 1.5s ease-in-out;\n  min-height: 100%;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  width: 80%;\n  align-items: center;\n  animation: slidedown 2s ease-in-out;\n}\n.login-aside[_ngcontent-%COMP%] {\n  animation: fadein 2.25s ease-in-out;\n  flex: 3 3;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: column;\n  min-height: 100%;\n  border-radius: 0 10px 10px 0;\n  background: url(\"https://source.unsplash.com/random/1200x900?mountain\") no-repeat center center;\n  background-size: cover;\n  position: relative;\n}\n.login-aside-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color:rgba(0, 0, 0, 0.15);\n  border-radius: 0 10px 10px 0;\n}\n.login-aside-hr[_ngcontent-%COMP%] {\n  height: 0.5em;\n  width: 8rem;\n  border: none;\n  outline: none;\n  background-color: white;\n  position: relative;\n  z-index: 5;\n  margin: 0 0 8rem 3rem;\n  animation: slideright 4s ease-out;\n}\n.login-welcome-text[_ngcontent-%COMP%] {\n  color: white;\n  letter-spacing: 0.03rem;\n  margin: 0 0 2rem 3rem;\n  font-size: 2.75rem;\n  position: relative;\n  z-index: 5;\n  animation: slideright 2s ease-out;\n}\n.login-input[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  padding: 1.5rem;\n  border-radius: 2rem;\n  outline: none;\n  border: none;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.3);\n  width: 80%;\n}\n.login-btn[_ngcontent-%COMP%] {\n  background-color: #00ff9b;\n  padding: 1rem;\n  border-radius: 2rem;\n  outline: none;\n  border: none;\n  color: white;\n  font-size: 1.1rem;\n  cursor: pointer;\n  margin-top: 1.5rem;\n  width: 50%;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n}\n.login-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #03a9f4, #00ff9b);\n}\n.login-input[_ngcontent-%COMP%]::placeholder {\n  color: #30437a;\n  font-size: 0.9rem;\n}\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: lightgray;\n}\n.btn-disabled[_ngcontent-%COMP%]:hover {\n  background: lightgray;\n}\n.signup-link-wrapper[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  animation: slideup 1s ease-in-out;\n}\n.signup-link[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-top: 1rem;\n  text-decoration: none;\n  color: #ff3a82;\n  margin-left: 1rem;\n}\n@media screen and (max-width: 959px) {\n  .login-aside[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QiwrRkFBK0Y7RUFDL0Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX19jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogOTB2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubG9naW4tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogODUlO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xuICBhbmltYXRpb246IGZhZGVpbiAxcyBlYXNlLWluLW91dDtcbn1cbi5sb2dpbi1oZWFkZXIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGNvbG9yOiAjMGMxMDY2O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBhbmltYXRpb246IGZhZGVpbiAxLjc1cyBlYXNlLWluLW91dDtcbn1cbi5sb2dpbi1jb250ZW50IHtcbiAgZmxleDogMiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZWluIDEuNXMgZWFzZS1pbi1vdXQ7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IHNsaWRlZG93biAycyBlYXNlLWluLW91dDtcbn1cbi5sb2dpbi1hc2lkZSB7XG4gIGFuaW1hdGlvbjogZmFkZWluIDIuMjVzIGVhc2UtaW4tb3V0O1xuICBmbGV4OiAzIDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tLzEyMDB4OTAwP21vdW50YWluXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9naW4tYXNpZGUtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG59XG4ubG9naW4tYXNpZGUtaHIge1xuICBoZWlnaHQ6IDAuNWVtO1xuICB3aWR0aDogOHJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBtYXJnaW46IDAgMCA4cmVtIDNyZW07XG4gIGFuaW1hdGlvbjogc2xpZGVyaWdodCA0cyBlYXNlLW91dDtcbn1cbi5sb2dpbi13ZWxjb21lLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xuICBtYXJnaW46IDAgMCAycmVtIDNyZW07XG4gIGZvbnQtc2l6ZTogMi43NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBhbmltYXRpb246IHNsaWRlcmlnaHQgMnMgZWFzZS1vdXQ7XG59XG4ubG9naW4taW5wdXQge1xuICBtYXJnaW46IDFyZW0gMDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xuICB3aWR0aDogODAlO1xufVxuLmxvZ2luLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmOWI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIHdpZHRoOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xufVxuLmxvZ2luLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAzYTlmNCwgIzAwZmY5Yik7XG59XG4ubG9naW4taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMzMDQzN2E7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmJ0bi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5idG4tZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG4uc2lnbnVwLWxpbmstd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIGFuaW1hdGlvbjogc2xpZGV1cCAxcyBlYXNlLWluLW91dDtcbn1cbi5zaWdudXAtbGluayB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZjNhODI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAubG9naW4tYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "GBQI":
/*!****************************************************!*\
  !*** ./src/app/service/weather/weather.service.ts ***!
  \****************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class WeatherService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
        this.forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
        this.appID = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appID;
    }
    getWeather(city, metric = 'metric') {
        return this.http.get(`${this.baseUrl}${city}&units=${metric}&appid=${this.appID}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
    }
    getForecast(city, metric = 'metric') {
        return this.http.get(`${this.forecastURL}${city}&units=${metric}&appid=${this.appID}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(weather => weather['list']));
    }
}
WeatherService.ɵfac = function WeatherService_Factory(t) { return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
WeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WeatherService, factory: WeatherService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PrF6":
/*!*************************************!*\
  !*** ./src/app/guards/app.guard.ts ***!
  \*************************************/
/*! exports provided: AppGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGuard", function() { return AppGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/fb/fb.service */ "SVGU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppGuard {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    canActivate(route, state) {
        return this.fb.isAuth()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(auth => {
            if (auth) {
                return true;
            }
            else {
                this.router.navigate(['/login']);
                return false;
            }
        }));
    }
}
AppGuard.ɵfac = function AppGuard_Factory(t) { return new (t || AppGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__["FbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppGuard, factory: AppGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "S7FI":
/*!***********************************************************!*\
  !*** ./src/app/ui/weather-card/weather-card.component.ts ***!
  \***********************************************************/
/*! exports provided: WeatherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardComponent", function() { return WeatherCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_service_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/weather/weather.service */ "GBQI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/ui/ui.service */ "VVIe");
/* harmony import */ var src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/fb/fb.service */ "SVGU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error/error.component */ "dzIq");









function WeatherCardComponent_section_0__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherCardComponent_section_0__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherCardComponent_section_0__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherCardComponent_section_0__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherCardComponent_section_0__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ellipse", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ellipse", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ellipse", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ellipse", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ellipse", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ellipse", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherCardComponent_section_0_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherCardComponent_section_0_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addCity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADD CITY +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "weather__card-dark": a0, "weather__card-add": a1 }; };
function WeatherCardComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherCardComponent_section_0_Template_section_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeatherCardComponent_section_0__svg_svg_4_Template, 2, 0, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeatherCardComponent_section_0__svg_svg_5_Template, 4, 0, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeatherCardComponent_section_0__svg_svg_6_Template, 5, 0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WeatherCardComponent_section_0__svg_svg_7_Template, 2, 0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WeatherCardComponent_section_0__svg_svg_8_Template, 12, 0, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, WeatherCardComponent_section_0_button_31_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx_r0.darkMode, ctx_r0.addMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.state === "Sunny" || ctx_r0.state === "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.state === "Clouds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.state === "Rain" || ctx_r0.state === "Drizzle" || ctx_r0.state === "Mist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.state === "Haze" || ctx_r0.state === "Fog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.state === "Storm" || ctx_r0.state === "Thunderstorm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.citesWeather);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.temp, "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.minTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.maxTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.addMode);
} }
function WeatherCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City has been successfully added!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WeatherCardComponent {
    constructor(weather, router, ui, fb) {
        this.weather = weather;
        this.router = router;
        this.ui = ui;
        this.fb = fb;
        this.cityStored = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cityAdded = false;
    }
    set city(city) {
        this.cityName = city;
        this.weather.getWeather(city)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(payload => {
            this.state = payload.weather[0].main;
            this.temp = Math.ceil(payload.main.temp);
        }, err => {
            this.errorMessage = err.error.message;
            setTimeout(() => this.errorMessage = '', 3000);
        });
        this.weather.getForecast(city)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(payload => {
            this.maxTemp = Math.round(payload[0].main.temp_max);
            this.minTemp = Math.round(payload[0].main.temp_min);
            for (const res of payload) {
                if (new Date().toLocaleTimeString('en-GB') === new Date(res.dt_txt).toLocaleDateString('en-Gb')) {
                    this.maxTemp = res.main.temp > this.maxTemp ? Math.round(res.main.temp) : this.maxTemp;
                    this.minTemp = res.main.temp < this.minTemp ? Math.round(res.main.temp) : this.minTemp;
                }
            }
        }, err => {
            this.errorMessage = err.error.message;
            setTimeout(() => this.errorMessage = '', 3000);
        });
    }
    ngOnInit() {
        this.sub1 = this.ui.darkModeState.subscribe(isDark => this.darkMode = isDark);
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
    openDetails() {
        if (!this.addMode) {
            this.router.navigateByUrl('/details/' + this.cityName);
        }
    }
    addCity() {
        this.fb.addCity(this.cityName).subscribe(() => {
            this.cityName = null;
            this.maxTemp = null;
            this.minTemp = null;
            this.state = null;
            this.temp = null;
            this.cityAdded = true;
            this.cityStored.emit();
            setTimeout(() => this.cityAdded = false, 2000);
        });
    }
}
WeatherCardComponent.ɵfac = function WeatherCardComponent_Factory(t) { return new (t || WeatherCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_5__["FbService"])); };
WeatherCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherCardComponent, selectors: [["app-weather-card"]], inputs: { city: "city", addMode: "addMode" }, outputs: { cityStored: "cityStored" }, decls: 3, vars: 3, consts: [["class", "weather__card", 3, "ngClass", "click", 4, "ngIf"], ["class", "city-added-note", 4, "ngIf"], [3, "message"], [1, "weather__card", 3, "ngClass", "click"], [1, "city-name__text"], [1, "weather-icon__container", 3, "ngSwitch"], ["viewBox", "2050 -845 262 262", 4, "ngSwitchCase"], ["viewBox", "2436.9 -843.1 275.5 274.1", 4, "ngSwitchCase"], ["viewBox", "3170 -843.1 163.5 242.7", 4, "ngSwitchCase"], ["viewBox", "0 0 454 366", 4, "ngSwitchCase"], ["viewBox", "3487.9 -810.7 291.2 200.3", 4, "ngSwitchCase"], [1, "temperature-text__container"], [1, "temperature__text"], [1, "temperature-metric__text"], [1, "temperature-condition__text"], [1, "min-max__container"], [1, "min__container"], ["viewBox", "188.5 807 21 21", 1, "min-arrow__icon"], ["fill", "#00ff9b", "d", "M209.5 817.5h-21L199 828z", "data-name", "Min Arrow"], [1, "min-temperature__text"], [1, "min__text"], [1, "max__container"], ["viewBox", "449.5 820 21 21", 1, "max-arrow__icon"], ["fill", "red", "d", "M449.5 830.5h21L460 820z", "data-name", "Max Arrow"], [1, "max-temperature__text"], [1, "max__text"], ["class", "add-city-btn", 3, "click", 4, "ngIf"], ["viewBox", "2050 -845 262 262"], ["cx", "131", "cy", "131", "r", "131", "fill", "#ffde17", "data-name", "Sun Icon", "transform", "translate(2050 -845)"], ["viewBox", "2436.9 -843.1 275.5 274.1"], ["data-name", "cloudy icon", "transform", "translate(84 790)"], ["cx", "137", "cy", "137", "r", "137", "fill", "#fff", "data-name", "Ellipse 23", "transform", "translate(2354 -1633)"], ["fill", "#ffde17", "d", "M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z", "data-name", "Subtraction 1"], ["viewBox", "3170 -843.1 163.5 242.7"], ["data-name", "Rain Icon"], ["data-name", "Water Drops"], ["fill", "#0032cc", "d", "M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z", "data-name", "Path 7"], ["fill", "#003eff", "d", "M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z", "data-name", "Path 3"], ["viewBox", "0 0 454 366"], ["fill", "#12bcff", "d", "M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z"], ["viewBox", "3487.9 -810.7 291.2 200.3"], ["data-name", "Strom icon", "transform", "translate(1959 -1260.7)"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 14", "rx", "55.3", "ry", "51.7", "transform", "translate(1529 490.4)", 1, "cls-99"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 15", "rx", "55.3", "ry", "51.7", "transform", "translate(1569.6 467.8)", 1, "cls-99"], ["cx", "55.3", "cy", "55.3", "r", "55.3", "data-name", "Ellipse 16", "transform", "translate(1618.9 476.8)", 1, "cls-99"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 17", "rx", "55.3", "ry", "51.7", "transform", "translate(1631.8 450)", 1, "cls-99"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 18", "rx", "55.3", "ry", "51.7", "transform", "translate(1687.1 477.5)", 1, "cls-99"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 19", "rx", "55.3", "ry", "51.7", "transform", "translate(1709.6 507.3)", 1, "cls-99"], ["cx", "55.3", "cy", "55.3", "r", "55.3", "data-name", "Ellipse 20", "transform", "translate(1639.6 500.1)", 1, "cls-99"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 21", "rx", "55.3", "ry", "51.7", "transform", "translate(1569.6 507.3)", 1, "cls-99"], ["fill", "none", "stroke", "#fd0", "stroke-width", "18", "d", "M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2", "data-name", "Path 59"], ["fill", "none", "stroke", "#fd0", "stroke-width", "15", "d", "M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2", "data-name", "Path 60"], [1, "add-city-btn", 3, "click"], [1, "city-added-note"], [1, "add-success-text"], ["viewBox", "0 0 50 50", "height", "5rem"], ["cx", "25", "cy", "25", "r", "25", "fill", "#25ae88"], ["fill", "none", "stroke", "#fff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "stroke-width", "2", "d", "M38 15L22 33l-10-8"]], template: function WeatherCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeatherCardComponent_section_0_Template, 32, 17, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherCardComponent_div_1_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-error", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addMode ? !ctx.cityAdded && ctx.cityName : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cityAdded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"]], styles: [".weather__card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  justify-items: center;\n  padding: 2rem;\n  margin: 2rem;\n  width: 19rem;\n  height: 30rem;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 1.75rem;\n  animation: slideup 1s ease-in-out, fadein 1.25s ease-in-out 0ms 1;\n}\n.weather__card-add[_ngcontent-%COMP%] {\n  cursor: auto;\n  margin: 0 auto;\n  box-shadow:rgba(0, 0, 255, 0.5);\n  width: 80%;\n}\n.weather__card-dark[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #372865, #000000);\n  color: white;\n}\n.city-name__text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  letter-spacing: 0.1rem;\n  margin-bottom: 1rem;\n}\n.temperature-text__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  text-align: start;\n}\n.temperature__text[_ngcontent-%COMP%] {\n  align-self: end;\n  width: 100%;\n  font-size: 4rem;\n  font-weight: 100;\n  letter-spacing: 0.1rem;\n}\n.temperature-condition__text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.temperature-metric__text[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 3rem;\n}\n.min-max__container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n}\n.min__container[_ngcontent-%COMP%], .max__container[_ngcontent-%COMP%] {\n  margin: 1rem 3rem;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n.min-arrow__icon[_ngcontent-%COMP%], .max-arrow__icon[_ngcontent-%COMP%] {\n  height: 1.25rem;\n  margin: auto;\n}\n.max-arrow__icon[_ngcontent-%COMP%] {\n  margin-bottom: -0.05rem;\n}\n.weather-condition__text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  text-align: center;\n}\n.max__text[_ngcontent-%COMP%] {\n  color: #ff0070;\n}\n.min__text[_ngcontent-%COMP%] {\n  color: #00ff9b;\n}\n.max__text[_ngcontent-%COMP%], .min__text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-align: center;\n}\n.max-temperature__text[_ngcontent-%COMP%], .min-temperature__text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n}\n.weather-icon__container[_ngcontent-%COMP%] {\n  width: 10rem;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.weather-icon__container[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n.add-city-btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  border-radius: 3rem;\n  padding: 1rem 2rem;\n  color: white;\n  margin-top: 2rem;\n  background-color: #2b244d;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.add-city-btn[_ngcontent-%COMP%]:hover {\n  background-color: #31feae;\n}\n.city-added-note[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  animation: fadein 1s ease-in-out;\n  width: 100%;\n}\n.add-success-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLHlDQUF5QztFQUN6QyxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGlFQUFpRTtBQUNuRTtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSx3REFBd0Q7RUFDeEQsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6IndlYXRoZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV2VhdGhlciBjYXJkIHN0eWxpbmcgKi9cbi53ZWF0aGVyX19jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbjogMnJlbTtcbiAgd2lkdGg6IDE5cmVtO1xuICBoZWlnaHQ6IDMwcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xuICBhbmltYXRpb246IHNsaWRldXAgMXMgZWFzZS1pbi1vdXQsIGZhZGVpbiAxLjI1cyBlYXNlLWluLW91dCAwbXMgMTtcbn1cbi53ZWF0aGVyX19jYXJkLWFkZCB7XG4gIGN1cnNvcjogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaGFkb3c6cmdiYSgwLCAwLCAyNTUsIDAuNSk7XG4gIHdpZHRoOiA4MCU7XG59XG4ud2VhdGhlcl9fY2FyZC1kYXJrIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM3Mjg2NSwgIzAwMDAwMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jaXR5LW5hbWVfX3RleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50ZW1wZXJhdHVyZS10ZXh0X19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4udGVtcGVyYXR1cmVfX3RleHQge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG59XG4udGVtcGVyYXR1cmUtY29uZGl0aW9uX190ZXh0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4udGVtcGVyYXR1cmUtbWV0cmljX190ZXh0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5taW4tbWF4X19jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1pbl9fY29udGFpbmVyLCAubWF4X19jb250YWluZXIge1xuICBtYXJnaW46IDFyZW0gM3JlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cbi5taW4tYXJyb3dfX2ljb24sIC5tYXgtYXJyb3dfX2ljb24ge1xuICBoZWlnaHQ6IDEuMjVyZW07XG4gIG1hcmdpbjogYXV0bztcbn1cbi5tYXgtYXJyb3dfX2ljb24ge1xuICBtYXJnaW4tYm90dG9tOiAtMC4wNXJlbTtcbn1cbi53ZWF0aGVyLWNvbmRpdGlvbl9fdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXhfX3RleHQge1xuICBjb2xvcjogI2ZmMDA3MDtcbn1cbi5taW5fX3RleHQge1xuICBjb2xvcjogIzAwZmY5Yjtcbn1cbi5tYXhfX3RleHQsIC5taW5fX3RleHQge1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXgtdGVtcGVyYXR1cmVfX3RleHQsIC5taW4tdGVtcGVyYXR1cmVfX3RleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi53ZWF0aGVyLWljb25fX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2VhdGhlci1pY29uX19jb250YWluZXIgPiBzdmcge1xuICB3aWR0aDogMTByZW07XG59XG4uYWRkLWNpdHktYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyNDRkO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYWRkLWNpdHktYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxZmVhZTtcbn1cbi5jaXR5LWFkZGVkLW5vdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZWluIDFzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hZGQtc3VjY2Vzcy10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufSJdfQ== */"] });


/***/ }),

/***/ "SVGU":
/*!******************************************!*\
  !*** ./src/app/service/fb/fb.service.ts ***!
  \******************************************/
/*! exports provided: FbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbService", function() { return FbService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularfire_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire-lite */ "4clS");



class FbService {
    constructor(auth, fs) {
        this.auth = auth;
        this.fs = fs;
    }
    isAuth() {
        return this.auth.isAuthenticated();
    }
    signin(email, pass) {
        return this.auth.signin(email, pass);
    }
    signup(email, pass) {
        return this.auth.signup(email, pass);
    }
    getCities() {
        return this.auth.uid()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(uid => this.fs.read(`${uid}`)));
    }
    addCity(name) {
        return this.auth.uid()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((uid) => {
            return this.fs
                .write(`${uid}/${name}`, { name, added: new Date() })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
}
FbService.ɵfac = function FbService_Factory(t) { return new (t || FbService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angularfire_lite__WEBPACK_IMPORTED_MODULE_2__["AngularFireLiteAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angularfire_lite__WEBPACK_IMPORTED_MODULE_2__["AngularFireLiteFirestore"])); };
FbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FbService, factory: FbService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/ui/ui.service */ "VVIe");
/* harmony import */ var _service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/fb/fb.service */ "SVGU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "main__header-dark": a0 }; };
const _c1 = function (a0) { return { "hamburger__icon__fill-dark": a0 }; };
const _c2 = function (a0) { return { "logo__text-dark": a0 }; };
const _c3 = function (a0) { return { "mode-toggle__bg-checked": a0 }; };
const _c4 = function (a0) { return { "mode-toggle__circle-checked": a0 }; };
function AppComponent_header_24_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_header_24_Template__svg_svg_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " .hamburger__icon__fill { fill: #594e78 } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tspan", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Minimus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_header_24_Template_input_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.modeToggleSwitch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.darkModeActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r0.darkModeActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx_r0.darkModeActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx_r0.darkModeActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx_r0.darkModeActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx_r0.darkModeActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c4, ctx_r0.darkModeActive));
} }
const _c5 = function (a0) { return { "side-menu__container-active": a0 }; };
const _c6 = function (a0, a1) { return { "slide-menu-active": a0, "slide-menu-active-dark": a1 }; };
const _c7 = function (a0) { return { "menu-header-dark": a0 }; };
const _c8 = function (a0) { return { "menu-links-dark": a0 }; };
const _c9 = function () { return { exact: true }; };
const _c10 = function (a0) { return { "root__container-dark": a0 }; };
class AppComponent {
    constructor(ui, fb, router) {
        this.ui = ui;
        this.fb = fb;
        this.router = router;
        this.showMenu = false;
        this.userEmail = '';
        this.today = new Date(Date.now()).toDateString();
        this.loggedIn = this.fb.isAuth();
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
    ngOnInit() {
        this.sub1 = this.ui.darkModeState.subscribe(value => this.darkModeActive = value);
        this.fb.auth.userData().subscribe(user => this.userEmail = user.email);
    }
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
    modeToggleSwitch() {
        this.ui.darkModeState.next(!this.darkModeActive);
    }
    logout() {
        this.toggleMenu();
        this.router.navigateByUrl('/login');
        this.fb.auth.signout();
        this.loggedIn = this.fb.isAuth();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__["FbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 28, vars: 24, consts: [[1, "side-menu__container", 3, "ngClass", "click"], [1, "slide-menu", 3, "ngClass", "click"], [1, "menu-header", 3, "ngClass"], [1, "greeting__text"], [1, "profile-image__container"], ["src", "../assets/generic-user-purple.png", "alt", "profile-image", 1, "profile__image"], [1, "account-details"], [1, "name__text"], [1, "email__text"], [1, "menu-body"], [1, "menu-links", 3, "ngClass"], ["routerLink", "", "routerLinkActive", "link-active", 1, "menu-link", 3, "routerLinkActiveOptions", "click"], ["routerLink", "/add", "routerLinkActive", "link-active", 1, "menu-link", 3, "routerLinkActiveOptions", "click"], [1, "menu-link", 3, "click"], [1, "menu-footer"], [1, "copyrite__text"], [1, "root__container", 3, "ngClass"], ["class", "main__header", 3, "ngClass", 4, "ngIf"], [1, "main-container__bg"], [1, "main__header", 3, "ngClass"], [1, "left__section"], ["id", "Menu_Burger_Icon", "data-name", "Menu Burger Icon", "viewBox", "31.5 30 49.9 32", 1, "hamburger__icon", 3, "click"], ["id", "Rectangle_9", "width", "49.9", "height", "4", "data-name", "Rectangle 9", "rx", "2", "transform", "translate(31.5 58)", 1, "hamburger__icon__fill", 3, "ngClass"], ["id", "Rectangle_10", "width", "49.9", "height", "4", "data-name", "Rectangle 10", "rx", "2", "transform", "translate(31.5 44)", 1, "hamburger__icon__fill", 3, "ngClass"], ["id", "Rectangle_11", "width", "49.9", "height", "4", "data-name", "Rectangle 11", "rx", "2", "transform", "translate(31.5 30)", 1, "hamburger__icon__fill", 3, "ngClass"], ["viewBox", "150.3 22.2 213.7 42.8", 1, "logo__icon"], ["fill", "#00ff9b", "d", "M150.3 65V22.2L193 65z", "data-name", "Path 1"], ["fill", "#003eff", "d", "M193.1 65h-42.8L193 22.2z", "data-name", "Path 2"], ["fill", "#432c85", "font-family", "SegoeUI-Semibold,Segoe UI", "font-size", "30", "font-weight", "600", "letter-spacing", ".1em", "transform", "translate(220 56)", 1, "logo__text", 3, "ngClass"], ["x", "0", "y", "0"], [1, "date__text"], [1, "mode-toggle__container"], [1, "mode-toggle__text"], [1, "toggle-button__container"], ["type", "checkbox", 1, "mode-toggle__input", 3, "click"], [1, "mode-toggle__bg", 3, "ngClass"], [1, "mode-toggle__circle", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_aside_click_0_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_nav_click_1_listener($event) { return $event.stopImmediatePropagation; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Free Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_14_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_16_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_18_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Copyrite \u00A9 2021 Angular Minimus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "main", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_header_24_Template, 26, 22, "header", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c5, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c6, ctx.showMenu, ctx.darkModeActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c7, ctx.darkModeActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c8, ctx.darkModeActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c10, ctx.darkModeActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 9, ctx.loggedIn));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".root__container[_ngcontent-%COMP%] {\n    width: 100vw;\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    flex-flow: column;\n    transition: background 300ms linear;\n    background-image: linear-gradient(to top, #5ee7df 0%, #66a6ff 100%);\n}\n.root__container-dark[_ngcontent-%COMP%] {\n    background: linear-gradient(to bottom, #372865, #000000);\n}\n\n\n.side-menu__container[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    z-index: 50;\n}\n.side-menu__container-active[_ngcontent-%COMP%] {\n    pointer-events: auto;\n}\n.side-menu__container[_ngcontent-%COMP%]::before {\n    content: '';\n    cursor: pointer;\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #0c1066;\n    opacity: 0;\n    transition: opacity 300ms linear;\n    will-change: opacity;\n}\n.side-menu__container-active[_ngcontent-%COMP%]::before {\n    opacity: 0.3;\n}\n.slide-menu[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    transform: translateX(-200%);\n    position: relative;\n    top: 0;\n    left: 0;\n    z-index: 50;\n    min-height: 100vh;\n    width: 90%;\n    max-width: 26rem;\n    background-color: white;\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 4fr 1fr;\n    grid-gap: 1rem;\n    transition: transform 300ms linear;\n    will-change: transform;\n}\n.slide-menu-active[_ngcontent-%COMP%] {\n    transform: none;\n}\n.slide-menu-active-dark[_ngcontent-%COMP%] {\n    background-color: #2b244d;\n}\n.menu-header[_ngcontent-%COMP%] {\n    background: linear-gradient(to right, #00ff9b, #5f84fb);\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    grid-template-columns: 1fr 4fr;\n    grid-template-areas: \"greeting greeting\" \"image details\";\n    box-sizing: border-box;\n    width: 100%;\n    align-content: center;\n    color: white;\n    box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2);\n}\n.menu-header-dark[_ngcontent-%COMP%] {\n    background: linear-gradient(to top, #30cfd0 0%, #330867 100%);\n}\n.greeting__text[_ngcontent-%COMP%] {\n    grid-area: greeting;\n    font-size: 1.25rem;\n    letter-spacing: 0.15rem;\n    text-transform: uppercase;\n    margin-top: 1rem;\n    justify-self: center;\n    align-self: center;\n}\n.account-details[_ngcontent-%COMP%] {\n    grid-area: details;\n    display: flex;\n    flex-flow: column;\n    margin-left: 1rem;\n    align-self: center;\n}\n.name__text[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n    margin-bottom: 0.5rem;\n}\n.email__text[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    letter-spacing: 0.1rem;\n}\n.menu-body[_ngcontent-%COMP%] {\n    display: grid;\n    width: 100%;\n}\n.menu-links[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column;\n    list-style: none;\n}\n.menu-links-dark[_ngcontent-%COMP%] {\n    color: white;\n}\n.link-active[_ngcontent-%COMP%] {\n    color: #495cfc;\n    border-bottom: 1px solid #495cfc;\n}\n.menu-link[_ngcontent-%COMP%] {\n    outline: none;\n    font-size: 1rem;\n    padding: 1rem 0;\n    margin: 0.5rem 0;\n    cursor: pointer;\n}\n.profile-image__container[_ngcontent-%COMP%] {\n    grid-area: image;\n    margin-right: 0.5rem;\n    border-radius: 50%;\n    height: 4rem;\n    width: 4rem;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    align-self: center;\n    margin-left: 2rem;\n}\n.profile__image[_ngcontent-%COMP%] {\n    max-width: 4rem;\n}\n\n.main__header[_ngcontent-%COMP%] {\n    background-color: #fff;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 0.25fr;\n    grid-template-rows: 1fr;\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n    min-height: 4rem;\n    margin: 0;\n    align-items: center;\n    animation: slidedown 0.5s ease-in-out, fadein 1s ease-in-out;\n}\n.main__header-dark[_ngcontent-%COMP%] {\n    background-color: #2b244d;\n    color: white;\n}\n.toggle-button__container[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    margin: 0 0.75rem 0 0.25rem;\n    display: inline-flex;\n}\n.mode-toggle__container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n}\n.mode-toggle__input[_ngcontent-%COMP%] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n.mode-toggle__bg[_ngcontent-%COMP%] {\n    height: 1rem;\n    width: 2rem;\n    border-radius: 0.5rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: inline-block;\n    transition: background-color 300ms linear;\n}\n.mode-toggle__circle[_ngcontent-%COMP%] {\n    height: 1.3rem;\n    width: 1.3rem;\n    background-color: #2b244d;\n    position: absolute;\n    top: -0.18rem;\n    border-radius: 50%;\n    box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);\n    transition: left 300ms linear;\n    left: 0.2rem;\n}\n.mode-toggle__circle-checked[_ngcontent-%COMP%] {\n    background-color: white;\n    left: 1.25rem;\n}\n.mode-toggle__bg-checked[_ngcontent-%COMP%] {\n    background-color: #ff0070;\n}\n.mode-toggle__text[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n}\n\n.left__section[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr;\n    max-width: 5rem;\n}\n.date__text[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n    display: inline;\n    margin: 0.5rem 0;\n}\n\n.hamburger__icon[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 50;\n    height: 1rem;\n    padding: 0.5rem 1.5rem;\n    margin-right: 1rem;\n    cursor: pointer;\n}\n.logo__icon[_ngcontent-%COMP%] {\n    height: 2rem;\n    margin-left: 1rem;\n}\n.logo__text[_ngcontent-%COMP%] {\n    fill: #2b244d;\n}\n.logo__text-dark[_ngcontent-%COMP%] {\n    fill: #fff;\n}\n.humburger__icon__fill[_ngcontent-%COMP%] {\n    fill: #2b244d;\n}\n.humburger__icon__fill-dark[_ngcontent-%COMP%] {\n    fill: #ffff;\n}\n\n.main-container__bg[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.copyrite__text[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n}\n@media screen and (max-width: 959px) {\n    .main__header[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n        justify-items: center;\n        padding: 1rem 0;\n        min-height: 8rem;\n    }\n    .logo__icon[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n    .hamburger__icon[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        flex-flow: column;\n        align-items: center;\n        justify-content: space-around;\n    }\n}\n@media only screen and (max-width: 300px) {\n    .slide-menu[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsbUVBQW1FO0FBQ3ZFO0FBQ0E7SUFDSSx3REFBd0Q7QUFDNUQ7QUFFQTs7OztDQUlDO0FBRUQsZUFBZTtBQUNmO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVEQUF1RDtJQUN2RCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qix3REFBd0Q7SUFDeEQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksNkRBQTZEO0FBQ2pFO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQSxXQUFXO0FBQ1g7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQiw0REFBNEQ7QUFDaEU7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjtBQUVBLFlBQVk7QUFDWjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBLFNBQVM7QUFDVDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTs7OztDQUlDO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3RfX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zIGxpbmVhcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNWVlN2RmIDAlLCAjNjZhNmZmIDEwMCUpO1xufVxuLnJvb3RfX2NvbnRhaW5lci1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzcyODY1LCAjMDAwMDAwKTtcbn1cblxuLypcbi0tLS0tLS0tLS0tLS0tXG4gICAgSGVhZGVyXG4tLS0tLS0tLS0tLS0tLVxuKi9cblxuLyogU2xpZGUgTWVudSAqL1xuLnNpZGUtbWVudV9fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiA1MDtcbn1cbi5zaWRlLW1lbnVfX2NvbnRhaW5lci1hY3RpdmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnNpZGUtbWVudV9fY29udGFpbmVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzEwNjY7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbn1cbi5zaWRlLW1lbnVfX2NvbnRhaW5lci1hY3RpdmU6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuLnNsaWRlLW1lbnUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogNTA7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDI2cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgNGZyIDFmcjtcbiAgICBncmlkLWdhcDogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgbGluZWFyO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG4uc2xpZGUtbWVudS1hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZS1tZW51LWFjdGl2ZS1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyNDRkO1xufVxuLm1lbnUtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGZmOWIsICM1Zjg0ZmIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImdyZWV0aW5nIGdyZWV0aW5nXCIgXCJpbWFnZSBkZXRhaWxzXCI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMik7XG59XG4ubWVudS1oZWFkZXItZGFyayB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzMwY2ZkMCAwJSwgIzMzMDg2NyAxMDAlKTtcbn1cbi5ncmVldGluZ19fdGV4dCB7XG4gICAgZ3JpZC1hcmVhOiBncmVldGluZztcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5hY2NvdW50LWRldGFpbHMge1xuICAgIGdyaWQtYXJlYTogZGV0YWlscztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5uYW1lX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmVtYWlsX190ZXh0IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xufVxuLm1lbnUtYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5tZW51LWxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWVudS1saW5rcy1kYXJrIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubGluay1hY3RpdmUge1xuICAgIGNvbG9yOiAjNDk1Y2ZjO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDk1Y2ZjO1xufVxuLm1lbnUtbGluayB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2ZpbGUtaW1hZ2VfX2NvbnRhaW5lciB7XG4gICAgZ3JpZC1hcmVhOiBpbWFnZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbi5wcm9maWxlX19pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiA0cmVtO1xufVxuXG4vKiBIZWFkZXIgKi9cbi5tYWluX19oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMC4yNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xuICAgIG1pbi1oZWlnaHQ6IDRyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiBzbGlkZWRvd24gMC41cyBlYXNlLWluLW91dCwgZmFkZWluIDFzIGVhc2UtaW4tb3V0O1xufVxuLm1haW5fX2hlYWRlci1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyNDRkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50b2dnbGUtYnV0dG9uX19jb250YWluZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDAuNzVyZW0gMCAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLm1vZGUtdG9nZ2xlX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5tb2RlLXRvZ2dsZV9faW5wdXQge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4ubW9kZS10b2dnbGVfX2JnIHtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBsaW5lYXI7XG59XG4ubW9kZS10b2dnbGVfX2NpcmNsZSB7XG4gICAgaGVpZ2h0OiAxLjNyZW07XG4gICAgd2lkdGg6IDEuM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyNDRkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0wLjE4cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDAsIDI1NSwgMC41KTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDMwMG1zIGxpbmVhcjtcbiAgICBsZWZ0OiAwLjJyZW07XG59XG4ubW9kZS10b2dnbGVfX2NpcmNsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBsZWZ0OiAxLjI1cmVtO1xufVxuLm1vZGUtdG9nZ2xlX19iZy1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDcwO1xufVxuLm1vZGUtdG9nZ2xlX190ZXh0IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xufVxuXG4vKiBDb250ZW50ICovXG4ubGVmdF9fc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgbWF4LXdpZHRoOiA1cmVtO1xufVxuLmRhdGVfX3RleHQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cbi8qIFNWR3MgKi9cbi5oYW1idXJnZXJfX2ljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA1MDtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ29fX2ljb24ge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5sb2dvX190ZXh0IHtcbiAgICBmaWxsOiAjMmIyNDRkO1xufVxuLmxvZ29fX3RleHQtZGFyayB7XG4gICAgZmlsbDogI2ZmZjtcbn1cbi5odW1idXJnZXJfX2ljb25fX2ZpbGwge1xuICAgIGZpbGw6ICMyYjI0NGQ7XG59XG4uaHVtYnVyZ2VyX19pY29uX19maWxsLWRhcmsge1xuICAgIGZpbGw6ICNmZmZmO1xufVxuXG4vKiBcbi0tLS0tLS0tLS0tLS0tXG4gICAgQm9keVxuLS0tLS0tLS0tLS0tLS1cbiovXG4ubWFpbi1jb250YWluZXJfX2JnIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvcHlyaXRlX190ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgLm1haW5fX2hlYWRlciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgbWluLWhlaWdodDogOHJlbTtcbiAgICB9XG4gICAgLmxvZ29fX2ljb24ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmhhbWJ1cmdlcl9faWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgIC5zbGlkZS1tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/fb/fb.service */ "SVGU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    canActivate(route, state) {
        return this.fb.isAuth()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(auth => {
            if (!auth) {
                return true;
            }
            else {
                this.router.navigate(['/']);
                return false;
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__["FbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VVIe":
/*!******************************************!*\
  !*** ./src/app/service/ui/ui.service.ts ***!
  \******************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UiService {
    constructor() {
        // TODO: if user is signed in get the default value from Firebase
        this.darkModeState = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
}
UiService.ɵfac = function UiService_Factory(t) { return new (t || UiService)(); };
UiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UiService, factory: UiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angularfire_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire-lite */ "4clS");
/* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngui/auto-complete */ "EzuI");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/weather-card/weather-card.component */ "S7FI");
/* harmony import */ var _ui_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/add-card/add-card.component */ "f9Pb");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/details/details.component */ "b7v9");
/* harmony import */ var _pages_add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/add/add.component */ "vu4U");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _ui_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/error/error.component */ "dzIq");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_4__["NguiAutoCompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            angularfire_lite__WEBPACK_IMPORTED_MODULE_3__["AngularFireLite"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].config)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__["WeatherCardComponent"],
        _ui_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_9__["AddCardComponent"],
        _pages_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
        _pages_add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
        _ui_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_4__["NguiAutoCompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angularfire_lite__WEBPACK_IMPORTED_MODULE_3__["AngularFireLite"]] }); })();


/***/ }),

/***/ "b7v9":
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_weather_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/weather/weather.service */ "GBQI");
/* harmony import */ var src_app_service_ui_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/ui/ui.service */ "VVIe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/error/error.component */ "dzIq");








function DetailsComponent_div_55__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "circle", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_55__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_55__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_55__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ellipse", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ellipse", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "circle", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ellipse", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ellipse", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ellipse", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "circle", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ellipse", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "path", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_55__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "circle", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DetailsComponent_div_55__svg_svg_3_Template, 4, 0, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DetailsComponent_div_55__svg_svg_4_Template, 2, 0, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DetailsComponent_div_55__svg_svg_5_Template, 5, 0, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DetailsComponent_div_55__svg_svg_6_Template, 12, 0, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DetailsComponent_div_55__svg_svg_7_Template, 2, 0, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](day_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", day_r1.value.state === "Clouds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", day_r1.value.state === "Haze" || day_r1.value.state === "Fog");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", day_r1.value.state === "Rain" || day_r1.value.state === "Drizzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", day_r1.value.state === "Storm" || day_r1.value.state === "Thunderstorm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", day_r1.value.state === "Sunny" || day_r1.value.state === "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", day_r1.value.temp, "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](day_r1.value.state);
} }
const _c0 = function (a0) { return { "details-page__wrapper-dark": a0 }; };
const _c1 = function (a0) { return { "backgroung-gradient__circle-dark": a0 }; };
class DetailsComponent {
    // tweets$: Observable<any>;
    constructor(activateRouter, weather, ui) {
        this.activateRouter = activateRouter;
        this.weather = weather;
        this.ui = ui;
    }
    ngOnInit() {
        this.sub1 = this.ui.darkModeState.subscribe(isDark => this.darkMode = isDark);
        const todayNumberinWeek = new Date().getDay();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.today = days[todayNumberinWeek];
        this.sub2 = this.activateRouter.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])((route) => {
            this.city = route.params.city;
            switch (this.city.toLowerCase()) {
                case 'paris':
                    this.cityIllustrationPath = '../../../assets/cities/france.svg';
                    break;
                case 'doha':
                    this.cityIllustrationPath = '../../../assets/cities/qatar.svg';
                    break;
                case 'rabat':
                    this.cityIllustrationPath = '../../../assets/cities/rabat.svg';
                    break;
                case 'tunis':
                    this.cityIllustrationPath = '../../../assets/cities/tunis.svg';
                    break;
                case 'tokyo':
                    this.cityIllustrationPath = '../../../assets/cities/japan.svg';
                    break;
                default:
                    this.cityIllustrationPath = '../../../assets/cities/default.svg';
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(this.weather.getWeather(this.city), this.weather.getForecast(this.city));
        })).subscribe((payload) => {
            this.state = payload[0].weather[0].main;
            this.temp = Math.ceil(Number(payload[0].main.temp));
            this.hum = payload[0].main.humidity;
            this.wind = Math.round(Math.round(payload[0].wind.speed));
            const dates = {};
            for (const res of payload[1]) {
                const date = new Date(res.dt_txt.split(' ')[0]).toDateString().split(' ')[0];
                if (dates[date]) {
                    dates[date].counter += 1;
                    dates[date].temp += res.main.temp;
                }
                else {
                    dates[date] = {
                        state: res.weather[0].main,
                        temp: res.main.temp,
                        counter: 1
                    };
                }
            }
            Object.keys(dates).forEach(day => dates[day].temp = Math.round(dates[day].temp / dates[day].counter));
            delete dates[Object.keys(dates)[0]];
            this.daysForecast = dates;
        }, err => {
            this.errorMessage = err.error.message;
            setTimeout(() => this.errorMessage = '', 2500);
        });
        // this.tweets$ = this.twitter.fetchTweets(this.city);
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_weather_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_ui_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 58, vars: 18, consts: [[1, "details-page__wrapper", 3, "ngClass"], [1, "background-gradient__circle", 3, "ngClass"], ["routerLink", "", "viewBox", "4085 152 98.5 126", "tabindex", "0", 1, "back__button"], ["transform", "translate(3980)"], ["cx", "39", "cy", "39", "r", "39", "transform", "translate(105 152)", 1, "a"], ["transform", "translate(123.5 190.5)", "x1", "80", 1, "b"], ["transform", "translate(123.5 164.5)", "x2", "26", "y1", "26", 1, "b"], ["transform", "translate(123.5 190.5)", "x1", "26", "y1", "27", 1, "c"], ["transform", "translate(117 274)", 1, "d"], ["x", "0", "y", "0"], [1, "main-weather__card"], [1, "card-header__container-dark", 3, "ngSwitch"], ["alt", "sity-image", 1, "city__illustration", 3, "src"], [1, "header-content__wrapper"], [1, "today-weather__container"], [1, "temp-state__container"], [1, "temperature__text"], [1, "weather-state__text"], [1, "hum-wind__container"], [1, "hum__container"], [1, "hun__text"], [1, "hum-value__text"], [1, "hum-wind__separator"], [1, "wind__container"], [1, "wind__text"], [1, "wind-value__text"], [1, "city-name__container"], [1, "city-name__underline"], [1, "city-name__text"], [1, "body-content__wrapper"], [1, "twitter-feed__container"], [1, "twitter-feed__header"], ["viewBox", "4332 625.812 30 24.375", 1, "twitter__icon"], ["d", "M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z", "transform", "translate(4332 577.812)", 1, "twitter-icon-fill"], [1, "twitter-feed__text"], [1, "twitter-feed-tag__text"], [1, "twitter-feed__body"], [1, "forecast__container"], ["class", "day-weather__container", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "message"], [1, "day-weather__container", 3, "ngSwitch"], [1, "day-name__text"], ["class", "forecast-condition__icon", "viewBox", "2436.9 -843.1 275.5 274.1", 4, "ngSwitchCase"], ["viewBox", "0 0 454 366", 4, "ngSwitchCase"], ["class", "forecast-condition__icon", "viewBox", "3170 -843.1 163.5 242.7", 4, "ngSwitchCase"], ["class", "forecast-condition__icon", "viewBox", "3487.9 -810.7 291.2 200.3", 4, "ngSwitchCase"], ["class", "forecast-condition__icon", "viewBox", "2050 -845 262 262", 4, "ngSwitchCase"], [1, "day-temp__text"], [1, "day-state__text"], ["viewBox", "2436.9 -843.1 275.5 274.1", 1, "forecast-condition__icon"], ["data-name", "cloudy icon", "transform", "translate(84 790)"], ["cx", "137", "cy", "137", "r", "137", "fill", "#fff", "data-name", "Ellipse 23", "transform", "translate(2354 -1633)"], ["fill", "#ffde17", "d", "M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z", "data-name", "Subtraction 1"], ["viewBox", "0 0 454 366"], ["fill", "#12bcff", "d", "M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z"], ["viewBox", "3170 -843.1 163.5 242.7", 1, "forecast-condition__icon"], ["data-name", "Rain Icon"], ["data-name", "Water Drops"], ["fill", "#0032cc", "d", "M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z", "data-name", "Path 7"], ["fill", "#003eff", "d", "M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z", "data-name", "Path 3"], ["viewBox", "3487.9 -810.7 291.2 200.3", 1, "forecast-condition__icon"], ["data-name", "Strom icon", "transform", "translate(1959 -1260.7)"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 14", "rx", "55.3", "ry", "51.7", "transform", "translate(1529 490.4)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 15", "rx", "55.3", "ry", "51.7", "transform", "translate(1569.6 467.8)", 1, "cls-1"], ["cx", "55.3", "cy", "55.3", "r", "55.3", "data-name", "Ellipse 16", "transform", "translate(1618.9 476.8)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 17", "rx", "55.3", "ry", "51.7", "transform", "translate(1631.8 450)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 18", "rx", "55.3", "ry", "51.7", "transform", "translate(1687.1 477.5)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 19", "rx", "55.3", "ry", "51.7", "transform", "translate(1709.6 507.3)", 1, "cls-1"], ["cx", "55.3", "cy", "55.3", "r", "55.3", "data-name", "Ellipse 20", "transform", "translate(1639.6 500.1)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 21", "rx", "55.3", "ry", "51.7", "transform", "translate(1569.6 507.3)", 1, "cls-1"], ["fill", "none", "stroke", "#fd0", "stroke-width", "18", "d", "M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2", "data-name", "Path 59"], ["fill", "none", "stroke", "#fd0", "stroke-width", "15", "d", "M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2", "data-name", "Path 60"], ["viewBox", "2050 -845 262 262", 1, "forecast-condition__icon"], ["cx", "131", "cy", "131", "r", "131", "fill", "#ffde17", "data-name", "Sun Icon", "transform", "translate(2050 -845)"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " .a { fill: #2b244d; } .b { fill: rgba(0, 0, 0, 0); } .b, .c { stroke: #fff; stroke-width: 2px; } .c { fill: none; } .d { fill: #fff; font-size: 15px; font-family: SegoeUI, Segoe UI, sans-serif; letter-spacing: 0.4em; } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "line", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "line", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "line", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tspan", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "humidity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "wind");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "main", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " .twitter-icon-fill { fill: #03a9f4; } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Twitter Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, DetailsComponent_div_55_Template, 12, 9, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "app-error", 39);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.cityIllustrationPath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.temp, "\u02DA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.hum, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.wind, " K/M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", ctx.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 12, ctx.daysForecast));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("message", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ui_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: [".details-page__wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(to top, #86DBFF 0%, #e0c3fc 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  min-height: 100vh;\n  padding: 2rem 0;\n  width: 100vw;\n}\n\n.details-page__wrapper-dark[_ngcontent-%COMP%] {\n  background: linear-gradient(#FC7DB8, #495CFC);\n}\n\n.background-gradient__circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  z-index: 1;\n  height: 100rem;\n  width: 100rem;\n  border-radius: 50%;\n  background: linear-gradient(-225deg, #ffffff 0%, #FFE29F 10%, #FFA99F 48%, #ffd1ff 100%);\n  animation: scaleup-circle 900ms ease-in-out forwards;\n  transition: background 1s ease-in-out;\n\n}\n\n.background-gradient__circle-dark[_ngcontent-%COMP%] {\n  transition: background 1s ease-in-out;\n  background: linear-gradient(to bottom, #FF8B8B, #6676FF);\n}\n\n.main-weather__card[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 80%;\n  width: 65%;\n  border-radius: 1rem;\n  position: relative;\n  z-index: 3;\n  justify-items: center;\n  opacity: 0;\n  animation: scaleup 1s ease-out 300ms, fadein 1.25s ease-out 300ms forwards;\n}\n\n.card-header__container-dark[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.back__button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3rem;\n  left: 3.25rem;\n  width: 5rem;\n  cursor: pointer;\n  z-index: 6;\n  margin-top: 2rem;\n}\n\n.city__illustration[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 510px;\n  border-radius: 1rem 1rem 0 0;\n  position: relative;\n  object-fit: cover;\n  display: block;\n}\n\n.header-content__wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  color: white;\n  top: 3rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: repeat(2, 1fr);\n  width: 100%;\n\n}\n\n.temperature__text[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  letter-spacing: 0.75rem;\n}\n\n.city-name__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 25%;\n}\n\n.city-name__underline[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 5px;\n  height: 5px;\n  box-shadow: 0 3rem 0 0 #ffffff;\n}\n\n.city-name__text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.3rem;\n  font-size: 1.75rem;\n  padding-bottom: 2rem;\n}\n\n.today-weather__container[_ngcontent-%COMP%] {\n  align-self: center;\n  justify-self: center;\n  display: grid;\n  width: 100%;\n  grid-template-rows: 3fr 1fr;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  grid-gap: 2rem;\n}\n\n.temp-state__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-flow: column;\n}\n\n.weather-state__text[_ngcontent-%COMP%] {\n  letter-spacing: 0.5rem;\n  font-size: 1.15rem;\n  text-transform: uppercase;\n  margin-top: 0.25rem;\n}\n\n.hum-wind__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: -4rem;\n}\n\n.hum-wind__separator[_ngcontent-%COMP%] {\n  margin: 0 2rem;\n  width: 2px;\n  height: 2.5rem;\n  background-color: white;\n}\n\n.hum__text[_ngcontent-%COMP%], .wind__text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  font-size: 0.8rem;\n  margin-bottom: 1rem;\n}\n\n.hum__container[_ngcontent-%COMP%], .wind__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n.body-content__wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  grid-template-rows: 1fr;\n  justify-items: center;\n  justify-content: center;\n  align-content: start;\n  align-items: start;\n  box-sizing: border-box;\n  grid-column-gap: 1rem;\n  width: 100%;\n  padding: 2rem;\n}\n\n.forecast__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  margin-left: 1rem;\n  flex-wrap: wrap;\n}\n\n.twitter-feed__container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 100%;\n}\n\n.twitter-feed__body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-flow: column;\n}\n\n.twitter__loader[_ngcontent-%COMP%] {\n  border: 3px solid hsla(185, 100%, 62%, 0.2);\n  border-top-color: #3cefff;\n  border-radius: 50%;\n  width: 3em;\n  height: 3em;\n  animation: spin 1s linear infinite;\n  justify-self: center;\n  align-self: center;\n  margin-top: 3rem;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.twitter-no-tweets__text[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  text-align: center;\n}\n\n.twitter-feed__text[_ngcontent-%COMP%] {\n  color: #0c1066;\n  font-size: 1.25rem;\n}\n\n.twitter__icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n}\n\n.twitter-feed-tag__text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #5f84fb;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n}\n\n.twitter-feed__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 2rem;\n  grid-template-columns: 0.5fr 1.5fr 1fr;\n  align-items: center;\n  justify-items: center;\n  width: 100%;\n}\n\n.twitter-tweet__container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.tweet-user__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.5rem;\n}\n\n.tweet-avatar__image[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  border-radius: 50%;\n  height: 3rem;\n  width: 3rem;\n}\n\n.tweet-username__text[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n}\n\n.tweet__text[_ngcontent-%COMP%] {\n  margin-top: 0\n}\n\n.day-weather__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  margin: 2rem 1.5rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.day-name__text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #39437a;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n\n.forecast-condition__icon[_ngcontent-%COMP%] {\n  height: 4rem;\n}\n\n.day-temp__text[_ngcontent-%COMP%] {\n  font-size: 1.85rem;\n  color: #0c1066;\n  letter-spacing: 0.25rem;\n  margin: 0.75rem 0;\n  text-align: center;\n  padding-left: 0.35rem;\n}\n\n.day-state__text[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  color: #2B244D;\n}\n\n\n\n@media screen and (max-width: 1919px) {\n  .main-weather__card[_ngcontent-%COMP%] {\n    height: 80%;\n    width: 75%;\n  }\n}\n\n\n\n@media screen and (max-width: 1279px) {\n  .back__button[_ngcontent-%COMP%] {\n    top: 1rem;\n  }\n\n  .main-weather__card[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .body-content__wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n\n@media screen and (max-width: 959px) {\n\n  .header-content__wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 1fr;\n  }\n\n  .back__button[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 1rem;\n  }\n\n  .details-page__wrapper[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n\n  .hum-wind__container[_ngcontent-%COMP%], .temp-state__container[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .city-name__container[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZEQUE2RDtFQUM3RCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdGQUF3RjtFQUN4RixvREFBb0Q7RUFDcEQscUNBQXFDOztBQUV2Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUEsMkJBQTJCOztBQUMzQjtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNGOztBQUVBLDBCQUEwQjs7QUFDMUI7RUFDRTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBLDJCQUEyQjs7QUFDM0I7O0VBRUU7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUYiLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtcGFnZV9fd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM4NkRCRkYgMCUsICNlMGMzZmMgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmRldGFpbHMtcGFnZV9fd3JhcHBlci1kYXJrIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNGQzdEQjgsICM0OTVDRkMpO1xufVxuXG4uYmFja2dyb3VuZC1ncmFkaWVudF9fY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogMTAwcmVtO1xuICB3aWR0aDogMTAwcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjI1ZGVnLCAjZmZmZmZmIDAlLCAjRkZFMjlGIDEwJSwgI0ZGQTk5RiA0OCUsICNmZmQxZmYgMTAwJSk7XG4gIGFuaW1hdGlvbjogc2NhbGV1cC1jaXJjbGUgOTAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgZWFzZS1pbi1vdXQ7XG5cbn1cblxuLmJhY2tncm91bmQtZ3JhZGllbnRfX2NpcmNsZS1kYXJrIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGOEI4QiwgIzY2NzZGRik7XG59XG5cbi5tYWluLXdlYXRoZXJfX2NhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA2NSU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNjYWxldXAgMXMgZWFzZS1vdXQgMzAwbXMsIGZhZGVpbiAxLjI1cyBlYXNlLW91dCAzMDBtcyBmb3J3YXJkcztcbn1cblxuLmNhcmQtaGVhZGVyX19jb250YWluZXItZGFyayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWNrX19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3JlbTtcbiAgbGVmdDogMy4yNXJlbTtcbiAgd2lkdGg6IDVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogNjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmNpdHlfX2lsbHVzdHJhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRlci1jb250ZW50X193cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogM3JlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG5cbi50ZW1wZXJhdHVyZV9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVyZW07XG59XG5cbi5jaXR5LW5hbWVfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjUlO1xufVxuXG4uY2l0eS1uYW1lX191bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm94LXNoYWRvdzogMCAzcmVtIDAgMCAjZmZmZmZmO1xufVxuXG4uY2l0eS1uYW1lX190ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLnRvZGF5LXdlYXRoZXJfX2NvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAycmVtO1xufVxuXG4udGVtcC1zdGF0ZV9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4ud2VhdGhlci1zdGF0ZV9fdGV4dCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLmh1bS13aW5kX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTRyZW07XG59XG5cbi5odW0td2luZF9fc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwIDJyZW07XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMi41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmh1bV9fdGV4dCwgLndpbmRfX3RleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmh1bV9fY29udGFpbmVyLCAud2luZF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKlxuPT09PT09PT09PT09PT09PVxuICAgICBCT0RZXG49PT09PT09PT09PT09PT09XG4qL1xuXG4uYm9keS1jb250ZW50X193cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZm9yZWNhc3RfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udHdpdHRlci1mZWVkX19jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnR3aXR0ZXItZmVlZF9fYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4udHdpdHRlcl9fbG9hZGVyIHtcbiAgYm9yZGVyOiAzcHggc29saWQgaHNsYSgxODUsIDEwMCUsIDYyJSwgMC4yKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzNjZWZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogM2VtO1xuICBoZWlnaHQ6IDNlbTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuXG4udHdpdHRlci1uby10d2VldHNfX3RleHQge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50d2l0dGVyLWZlZWRfX3RleHQge1xuICBjb2xvcjogIzBjMTA2NjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udHdpdHRlcl9faWNvbiB7XG4gIHdpZHRoOiAxLjVyZW07XG59XG5cbi50d2l0dGVyLWZlZWQtdGFnX190ZXh0IHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogIzVmODRmYjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnR3aXR0ZXItZmVlZF9faGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4udHdpdHRlci10d2VldF9fY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnR3ZWV0LXVzZXJfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi50d2VldC1hdmF0YXJfX2ltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogM3JlbTtcbn1cblxuLnR3ZWV0LXVzZXJuYW1lX190ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHdlZXRfX3RleHQge1xuICBtYXJnaW4tdG9wOiAwXG59XG5cbi5kYXktd2VhdGhlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIG1hcmdpbjogMnJlbSAxLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF5LW5hbWVfX3RleHQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMzOTQzN2E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5mb3JlY2FzdC1jb25kaXRpb25fX2ljb24ge1xuICBoZWlnaHQ6IDRyZW07XG59XG5cbi5kYXktdGVtcF9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS44NXJlbTtcbiAgY29sb3I6ICMwYzEwNjY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xuICBtYXJnaW46IDAuNzVyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XG59XG5cbi5kYXktc3RhdGVfX3RleHQge1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gIGNvbG9yOiAjMkIyNDREO1xufVxuXG4vKiBNZWRpYSBRdWVyeTogICBMVC1YTCAgICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgLm1haW4td2VhdGhlcl9fY2FyZCB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxufVxuXG4vKiBNZWRpYSBRdWVyeTogICBMVC1MRyAgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAuYmFja19fYnV0dG9uIHtcbiAgICB0b3A6IDFyZW07XG4gIH1cblxuICAubWFpbi13ZWF0aGVyX19jYXJkIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgLmJvZHktY29udGVudF9fd3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuLyogTWVkaWEgUXVlcnk6ICAgTFQtTUQgICAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcblxuICAuaGVhZGVyLWNvbnRlbnRfX3dyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcbiAgfVxuXG4gIC5iYWNrX19idXR0b24ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5kZXRhaWxzLXBhZ2VfX3dyYXBwZXIge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICB9XG5cbiAgLmh1bS13aW5kX19jb250YWluZXIsIC50ZW1wLXN0YXRlX19jb250YWluZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmNpdHktbmFtZV9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuXG59Il19 */"] });


/***/ }),

/***/ "dzIq":
/*!*********************************************!*\
  !*** ./src/app/ui/error/error.component.ts ***!
  \*********************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "error-wrapper-active": a0 }; };
class ErrorComponent {
    constructor() {
        this.action = 'GOT IT';
    }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], inputs: { message: "message", action: "action" }, decls: 5, vars: 5, consts: [[1, "error-wrapper", 3, "ngClass"], [1, "error-message"], [1, "error-btn"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.message));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".error-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 5rem);\n  width: 70%;\n  background-color: crimson;\n  color: white;\n  height: 4rem;\n  border-radius: 0.25rem 0.25rem 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 3rem;\n  transition: transform 1s ease-in-out;\n  z-index: 99999999;\n}\n.error-wrapper-active[_ngcontent-%COMP%] {\n  transform: translate(-50%, 0);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  letter-spacing: 0.1rem;\n  text-transform: capitalize;\n  line-height: 1.25rem;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 80%;\n}\n.error-btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 1rem 1.5rem;\n  background-color: rgba(255, 255, 255, 0.3);\n  font-size: 1rem;\n  font-weight: 500;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1cmVtKTtcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMC4yNXJlbSAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogOTk5OTk5OTk7XG59XG4uZXJyb3Itd3JhcHBlci1hY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDgwJTtcbn1cbi5lcnJvci1idG4ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });


/***/ }),

/***/ "f9Pb":
/*!***************************************************!*\
  !*** ./src/app/ui/add-card/add-card.component.ts ***!
  \***************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/ui/ui.service */ "VVIe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AddCardComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .cls-299 { fill: #7effcc } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "filter", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "feOffset", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "feGaussianBlur", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feFlood", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feComposite", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feComposite", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "circle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCardComponent__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "filter", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "feOffset", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "feGaussianBlur", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "feFlood", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "feComposite", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feComposite", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "linearGradient", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "stop", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "linearGradient", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "stop", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "stop", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "rect", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rect", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCardComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .cls-1 { fill: #a1ffd9 } .cls-2 { fill: #f5f5f5 } .cls-3 { fill: #c4d1fe } .cls-6 { fill: #bffee6 } .cls-7 { fill: #31feae } .cls-11 { fill: #7d9cff } .cls-14 { fill: #5f84fb } .cls-17, .cls-19 { fill: none } .cls-17 { stroke: #fff; stroke-width: 2px } .cls-18 { fill: #606cb9 } .cls-19 { stroke: #a1ffd9; stroke-width: 3px } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "g", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "g", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "rect", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "rect", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "rect", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "rect", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rect", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "rect", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCardComponent__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .cls-6 { fill: #404170 } .cls-8 { fill: #bffee6 } .cls-9 { fill: #31feae } .cls-13 { fill: #7d9cff } .cls-16 { fill: #5f84fb } .cls-20, .cls-22 { fill: none } .cls-20 { stroke: #fff; stroke-width: 2px } .cls-21 { fill: #606cb9 } .cls-22 { stroke: #a1ffd9; stroke-width: 3px } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "linearGradient", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "g", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rect", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "rect", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "rect", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "rect", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "rect", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "rect", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "g", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "add__card-dark": a0 }; };
class AddCardComponent {
    constructor(ui) {
        this.ui = ui;
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
    ngOnInit() {
        this.sub1 = this.ui.darkModeState.subscribe(isDark => this.darkMode = isDark);
    }
}
AddCardComponent.ɵfac = function AddCardComponent_Factory(t) { return new (t || AddCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"])); };
AddCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCardComponent, selectors: [["app-add-card"]], decls: 9, vars: 7, consts: [["routerLink", "/add", 1, "add__card", 3, "ngClass"], [1, "header__container"], [1, "card__title"], [1, "body__container"], ["class", "add__icon", "id", "Plus_Icon", "data-name", "Plus Icon", "viewBox", "1454.4 326.4 209.1 209.1", 4, "ngIf"], ["class", "add__icon", "viewBox", "0 0 209.1 209.1", 4, "ngIf"], ["class", "city__illustration", "id", "City_Illustration", "data-name", "City Illustration", "viewBox", "1367.8 616.6 403.6 331.4", 4, "ngIf"], ["class", "city__illustration", "viewBox", "0 0 405.6 331.4", 4, "ngIf"], ["id", "Plus_Icon", "data-name", "Plus Icon", "viewBox", "1454.4 326.4 209.1 209.1", 1, "add__icon"], ["id", "Ellipse_7", "width", "209.1", "height", "209.1", "x", "1454.4", "y", "326.4", "filterUnits", "userSpaceOnUse"], ["dy", "3"], ["result", "blur", "stdDeviation", "3"], ["flood-color", "#333", "flood-opacity", ".1"], ["in2", "blur", "operator", "in"], ["in", "SourceGraphic"], ["filter", "url(#Ellipse_7)"], ["id", "Ellipse_7-2", "cx", "95.6", "cy", "95.6", "r", "95.6", "fill", "#f5f8ff", "data-name", "Ellipse 7", "transform", "translate(1463.4 332.4)"], ["id", "Rectangle_3", "width", "12.8", "height", "142.9", "data-name", "Rectangle 3", "rx", "5", "transform", "translate(1552.6 358.1)", 1, "cls-299"], ["id", "Rectangle_4", "width", "12.8", "height", "142.9", "data-name", "Rectangle 4", "rx", "5", "transform", "rotate(90 603.6 1026.8)", 1, "cls-299"], ["viewBox", "0 0 209.1 209.1", 1, "add__icon"], ["id", "a", "width", "209.1", "height", "209.1", "x", "0", "y", "0", "filterUnits", "userSpaceOnUse"], ["id", "b", "x1", ".5", "x2", ".5", "y2", "1", "gradientUnits", "objectBoundingBox"], ["offset", "0", "stop-color", "#f41878"], ["offset", "1", "stop-color", "#0e008b"], ["id", "c", "x1", ".5", "x2", ".5", "y2", "1", "gradientUnits", "objectBoundingBox"], ["offset", "1", "stop-color", "#18058c"], ["data-name", "Plus Icon", "transform", "translate(-1454.4 -326.4)"], ["cx", "95.6", "cy", "95.6", "r", "95.6", "fill", "#39518a", "data-name", "Ellipse 7", "filter", "url(#a)", "transform", "translate(1463.4 332.4)"], ["width", "12.8", "height", "142.9", "fill", "url(#b)", "data-name", "Rectangle 3", "rx", "5", "transform", "translate(1552.6 358.1)"], ["width", "12.8", "height", "142.9", "fill", "url(#c)", "data-name", "Rectangle 4", "rx", "5", "transform", "rotate(90 603.6 1026.8)"], ["id", "City_Illustration", "data-name", "City Illustration", "viewBox", "1367.8 616.6 403.6 331.4", 1, "city__illustration"], ["id", "City_grass", "d", "M1488.3 646.3v-30H1892v30z", "data-name", "City grass", "transform", "translate(-120.5 301.7)", 1, "cls-1"], ["id", "Buidings"], ["id", "Buiding_Shadow", "data-name", "Buiding Shadow"], ["id", "Path_23", "d", "M1488.3 777.8V616.3h26.6v161.5z", "data-name", "Path 23", "transform", "translate(-120.5 48.4)", 1, "cls-2"], ["id", "Path_29", "d", "M1488.3 788.9V616.3h26.6V789z", "data-name", "Path 29", "transform", "translate(-30.5 5.3)", 1, "cls-2"], ["id", "Path_21", "d", "M1488.3 783.8V616.3h96.8v167.5z", "data-name", "Path 21", "transform", "translate(176.5 45.4)", 1, "cls-2"], ["id", "Path_30", "d", "M1488.3 735V616.3h34.3V735z", "data-name", "Path 30", "transform", "translate(128.5 48.2)", 1, "cls-2"], ["id", "Path_31", "d", "M1488.3 811V616.3h34.3V811z", "data-name", "Path 31", "transform", "translate(28.5 5.2)", 1, "cls-2"], ["id", "Core"], ["id", "Path_8", "d", "M1488.3 771.2V616.3h59.7v154.9z", "data-name", "Path 8", "transform", "translate(-112 54)", 1, "cls-3"], ["id", "Path_9", "d", "M1488.3 825V616.2h96.8V825z", "data-name", "Path 9", "transform", "translate(-43.5 .3)", 1, "cls-1"], ["id", "Path_10", "fill", "#7affcb", "d", "M1488.3 660.7v-44.4h96.8v44.4z", "data-name", "Path 10", "transform", "translate(62.5 164.4)"], ["id", "Path_11", "d", "M1488.3 771.2V616.3h96.8v154.9z", "data-name", "Path 11", "transform", "translate(168.5 54)", 1, "cls-3"], ["id", "City_water", "fill", "#8091ff", "d", "M1488.3 692.6v-76.3H1892v76.3z", "data-name", "City water", "transform", "translate(-120.5 217.2)"], ["id", "Windows", "transform", "translate(8 40)"], ["id", "Path_13", "d", "M1488.3 628.5v-12.2h36.6v12.2z", "data-name", "Path 13", "transform", "translate(-43.2 -19.8)", 1, "cls-6"], ["id", "Path_14", "d", "M1488.3 628.5v-12.2h36.6v12.2z", "data-name", "Path 14", "transform", "translate(-43.2 2.2)", 1, "cls-7"], ["id", "Path_25", "d", "M1488.3 628.5v-12.2h83.7v12.2z", "data-name", "Path 25", "transform", "translate(168.2 110.2)", 1, "cls-7"], ["id", "Path_26", "d", "M1488.3 628.5v-12.2h83.7v12.2z", "data-name", "Path 26", "transform", "translate(169.2 132.2)", 1, "cls-7"], ["id", "Path_18", "fill", "#a1feda", "d", "M1488.3 628.5v-12.2h36.6v12.2z", "data-name", "Path 18", "transform", "translate(-108.2 26.2)"], ["id", "Path_20", "fill", "#3564fb", "d", "M1488.3 628.5v-12.2h36.6v12.2z", "data-name", "Path 20", "transform", "translate(-108.2 146.2)"], ["id", "Path_19", "fill", "#a2b8ff", "d", "M1488.3 665.4v-49h36.6v49z", "data-name", "Path 19", "transform", "translate(-108.2 54.3)"], ["id", "Path_15", "d", "M1488.3 651v-34.7h36.6V651z", "data-name", "Path 15", "transform", "translate(-3.2 47.2)", 1, "cls-11"], ["id", "Path_16", "fill", "#3b5dca", "d", "M1488.3 651v-34.7h36.6V651z", "data-name", "Path 16", "transform", "translate(-46.2 46.2)"], ["id", "Path_17", "fill", "#597ff7", "d", "M1488.3 651v-34.7h36.6V651z", "data-name", "Path 17", "transform", "translate(-12.2 117.2)"], ["id", "Path_27", "d", "M1488.3 641.2v-24.9h62.9v24.9z", "data-name", "Path 27", "transform", "translate(169.1 28.2)", 1, "cls-6"], ["id", "Path_28", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 28", "transform", "translate(194.4 56)", 1, "cls-14"], ["id", "Path_46", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 46", "transform", "translate(194.4 82)", 1, "cls-14"], ["id", "Path_47", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 47", "transform", "translate(169.4 82)", 1, "cls-14"], ["id", "Path_48", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 48", "transform", "translate(169.4 56)", 1, "cls-7"], ["id", "Path_44", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 44", "transform", "translate(232.4 56)", 1, "cls-11"], ["id", "Path_45", "fill", "#aebff7", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 45", "transform", "translate(232.4 84)"], ["id", "Bridge", "fill", "#ccc8ff", "d", "M1580.5 875.5c1-.3-17.9-39 .2-85.3h40s-11.4 42.6 5.5 85.3c-47.4-1.7-46.7.3-45.7 0z", "transform", "translate(8 40)"], ["id", "Water_Turbulence", "data-name", "Water Turbulence", "transform", "translate(8 40)"], ["id", "Group_4", "data-name", "Group 4"], ["id", "Path_42", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-17"], ["id", "Path_43", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-17"], ["id", "Group_5", "data-name", "Group 5", "transform", "translate(74 -14)"], ["id", "Path_42-2", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-17"], ["id", "Path_43-2", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-17"], ["id", "Group_8", "data-name", "Group 8", "transform", "translate(85 17)"], ["id", "Path_42-3", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-17"], ["id", "Path_43-3", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-17"], ["id", "Group_17", "data-name", "Group 17", "transform", "translate(315 14)"], ["id", "Path_42-4", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-17"], ["id", "Path_43-4", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-17"], ["id", "Group_18", "data-name", "Group 18", "transform", "translate(245 -17)"], ["id", "Path_42-5", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-17"], ["id", "Path_43-5", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-17"], ["id", "Fence", "transform", "translate(8 40)"], ["id", "Poles"], ["id", "Rectangle_13", "width", "5", "height", "25", "data-name", "Rectangle 13", "rx", "2", "transform", "translate(1375 858)", 1, "cls-18"], ["id", "Rectangle_18", "width", "5", "height", "25", "data-name", "Rectangle 18", "rx", "2", "transform", "translate(1450 858)", 1, "cls-18"], ["id", "Rectangle_21", "width", "5", "height", "25", "data-name", "Rectangle 21", "rx", "2", "transform", "translate(1525 858)", 1, "cls-18"], ["id", "Rectangle_14", "width", "5", "height", "25", "data-name", "Rectangle 14", "rx", "2", "transform", "translate(1400 858)", 1, "cls-18"], ["id", "Rectangle_17", "width", "5", "height", "25", "data-name", "Rectangle 17", "rx", "2", "transform", "translate(1475 858)", 1, "cls-18"], ["id", "Rectangle_20", "width", "5", "height", "25", "data-name", "Rectangle 20", "rx", "2", "transform", "translate(1550 858)", 1, "cls-18"], ["id", "Rectangle_15", "width", "5", "height", "25", "data-name", "Rectangle 15", "rx", "2", "transform", "translate(1425 858)", 1, "cls-18"], ["id", "Rectangle_16", "width", "5", "height", "25", "data-name", "Rectangle 16", "rx", "2", "transform", "translate(1500 858)", 1, "cls-18"], ["id", "Ropes"], ["id", "Path_45-2", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 45", "transform", "translate(0 4)", 1, "cls-19"], ["id", "Path_46-2", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 46", "transform", "translate(25 5)", 1, "cls-19"], ["id", "Path_47-2", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 47", "transform", "translate(50 3)", 1, "cls-19"], ["id", "Path_48-2", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 48", "transform", "translate(75 5)", 1, "cls-19"], ["id", "Path_49", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 49", "transform", "translate(101 3)", 1, "cls-19"], ["id", "Path_50", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 50", "transform", "translate(125 7)", 1, "cls-19"], ["id", "Path_51", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 51", "transform", "translate(150 5)", 1, "cls-19"], ["viewBox", "0 0 405.6 331.4", 1, "city__illustration"], ["id", "linear-gradient", "x1", ".5", "x2", ".5", "y2", "1", "gradientUnits", "objectBoundingBox"], ["offset", "0", "stop-color", "#43aaaa"], ["offset", "1", "stop-color", "#364ac5"], ["id", "City_Illustration", "data-name", "City Illustration", "transform", "translate(-1365.8 -616.6)"], ["id", "City_grass", "fill", "#0fd", "d", "M1488.3 646.3v-30H1892v30z", "data-name", "City grass", "transform", "translate(-120.5 301.7)"], ["id", "Buiding_Shadow", "fill", "#f5f5f5", "data-name", "Buiding Shadow"], ["id", "Path_23", "d", "M1488.3 777.8V616.3h26.6v161.5z", "data-name", "Path 23", "opacity", ".3", "transform", "translate(-122.5 45.4)"], ["id", "Path_29", "d", "M1488.3 788.9V616.3h26.6V789z", "data-name", "Path 29", "transform", "translate(-30.5 5.3)"], ["id", "Path_21", "d", "M1488.3 783.8V616.3h96.8v167.5z", "data-name", "Path 21", "opacity", ".3", "transform", "translate(176.5 45.4)"], ["id", "Path_31", "d", "M1488.3 811V616.3h34.3V811z", "data-name", "Path 31", "opacity", ".1", "transform", "translate(28.5 5.2)"], ["id", "Path_8", "d", "M1488.3 771.2V616.3h59.7v154.9z", "data-name", "Path 8", "transform", "translate(-112 54)", 1, "cls-6"], ["id", "Path_9", "d", "M1488.3 825V616.2h96.8V825z", "data-name", "Path 9", "transform", "translate(-43.5 .3)", 1, "cls-6"], ["id", "Path_10", "d", "M1488.3 660.7v-44.4h96.8v44.4z", "data-name", "Path 10", "transform", "translate(68.5 164.4)", 1, "cls-6"], ["id", "Path_11", "d", "M1488.3 771.2V616.3h96.8v154.9z", "data-name", "Path 11", "transform", "translate(168.5 54)", 1, "cls-6"], ["id", "City_water", "fill", "url(#linear-gradient)", "d", "M1488.3 692.6v-76.3H1892v76.3z", "data-name", "City water", "transform", "translate(-120.5 217.2)"], ["id", "Path_13", "d", "M1488.3 628.5v-12.2h36.6v12.2z", "data-name", "Path 13", "transform", "translate(-43.2 -19.8)", 1, "cls-8"], ["id", "Path_14", "d", "M1488.3 628.5v-12.2h36.6v12.2z", "data-name", "Path 14", "transform", "translate(-43.2 2.2)", 1, "cls-9"], ["id", "Path_25", "d", "M1488.3 628.5v-12.2h83.7v12.2z", "data-name", "Path 25", "transform", "translate(168.2 110.2)", 1, "cls-9"], ["id", "Path_26", "d", "M1488.3 628.5v-12.2h83.7v12.2z", "data-name", "Path 26", "transform", "translate(169.2 132.2)", 1, "cls-9"], ["id", "Path_15", "d", "M1488.3 651v-34.7h36.6V651z", "data-name", "Path 15", "transform", "translate(-3.2 47.2)", 1, "cls-13"], ["id", "Path_27", "d", "M1488.3 641.2v-24.9h62.9v24.9z", "data-name", "Path 27", "transform", "translate(169.1 28.2)", 1, "cls-8"], ["id", "Path_28", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 28", "transform", "translate(194.4 56)", 1, "cls-16"], ["id", "Path_46", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 46", "transform", "translate(194.4 82)", 1, "cls-16"], ["id", "Path_47", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 47", "transform", "translate(169.4 82)", 1, "cls-16"], ["id", "Path_48", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 48", "transform", "translate(169.4 56)", 1, "cls-9"], ["id", "Path_65", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 65", "transform", "translate(126.4 135)", 1, "cls-9"], ["id", "Path_66", "fill", "#8331fe", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 66", "transform", "translate(102.4 135)"], ["id", "Path_44", "d", "M1488.3 634.3v-18h17.5v18z", "data-name", "Path 44", "transform", "translate(232.4 56)", 1, "cls-13"], ["id", "Bridge", "fill", "#615e8a", "d", "M1580.5 875.5c1-.3-17.9-39 .2-85.3h40s-11.4 42.6 5.5 85.3c-47.4-1.7-46.7.3-45.7 0z", "transform", "translate(8 40)"], ["id", "Path_42", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-20"], ["id", "Path_43", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-20"], ["id", "Path_42-2", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-20"], ["id", "Path_43-2", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-20"], ["id", "Path_42-3", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-20"], ["id", "Path_43-3", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-20"], ["id", "Path_42-4", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-20"], ["id", "Path_43-4", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-20"], ["id", "Path_42-5", "d", "M1386.3 831.3s18.2 3.5 21.8-5.2", "data-name", "Path 42", "transform", "translate(11.8 2)", 1, "cls-20"], ["id", "Path_43-5", "d", "M1401.3 831.3a23 23 0 0 1-3.7.7c-3.8.3-9.7-.2-11.3-5.9", "data-name", "Path 43", "transform", "translate(32.1 2)", 1, "cls-20"], ["id", "Rectangle_13", "width", "5", "height", "25", "data-name", "Rectangle 13", "rx", "2", "transform", "translate(1375 858)", 1, "cls-21"], ["id", "Rectangle_18", "width", "5", "height", "25", "data-name", "Rectangle 18", "rx", "2", "transform", "translate(1450 858)", 1, "cls-21"], ["id", "Rectangle_21", "width", "5", "height", "25", "data-name", "Rectangle 21", "rx", "2", "transform", "translate(1525 858)", 1, "cls-21"], ["id", "Rectangle_14", "width", "5", "height", "25", "data-name", "Rectangle 14", "rx", "2", "transform", "translate(1400 858)", 1, "cls-21"], ["id", "Rectangle_17", "width", "5", "height", "25", "data-name", "Rectangle 17", "rx", "2", "transform", "translate(1475 858)", 1, "cls-21"], ["id", "Rectangle_20", "width", "5", "height", "25", "data-name", "Rectangle 20", "rx", "2", "transform", "translate(1550 858)", 1, "cls-21"], ["id", "Rectangle_15", "width", "5", "height", "25", "data-name", "Rectangle 15", "rx", "2", "transform", "translate(1425 858)", 1, "cls-21"], ["id", "Rectangle_16", "width", "5", "height", "25", "data-name", "Rectangle 16", "rx", "2", "transform", "translate(1500 858)", 1, "cls-21"], ["id", "Path_45-2", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 45", "transform", "translate(0 4)", 1, "cls-22"], ["id", "Path_46-2", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 46", "transform", "translate(25 5)", 1, "cls-22"], ["id", "Path_47-2", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 47", "transform", "translate(50 3)", 1, "cls-22"], ["id", "Path_48-2", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 48", "transform", "translate(75 5)", 1, "cls-22"], ["id", "Path_49", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 49", "transform", "translate(101 3)", 1, "cls-22"], ["id", "Path_50", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 50", "transform", "translate(125 7)", 1, "cls-22"], ["id", "Path_51", "d", "M1377.5 858c.4-1 14.2 17 25.4 0", "data-name", "Path 51", "transform", "translate(150 5)", 1, "cls-22"]], template: function AddCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddCardComponent__svg_svg_5_Template, 14, 0, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddCardComponent__svg_svg_6_Template, 18, 0, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddCardComponent__svg_svg_7_Template, 71, 0, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddCardComponent__svg_svg_8_Template, 76, 0, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.darkMode);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".add__card[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  padding: 2rem;\n  margin: 2rem;\n  width: 19rem;\n  height: 30rem;\n  justify-items: center;\n  cursor: pointer;\n  border-radius: 1.75rem;\n  animation: slideup 1s ease-in-out, fadein 1.5s ease-in-out 0ms 1;\n  color: #443282;\n}\n.add__card-dark[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #711b86, #00057a);\n  color: white;\n}\n.card__title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n}\n.city__illustration[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.body__container[_ngcontent-%COMP%] {\n  align-self: end;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: column;\n}\n.add__icon[_ngcontent-%COMP%] {\n  width: 10rem;\n  margin-bottom: 1.15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnRUFBZ0U7RUFDaEUsY0FBYztBQUNoQjtBQUNBO0VBQ0Usd0RBQXdEO0VBQ3hELFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFkZC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkX19jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbjogMnJlbTtcbiAgd2lkdGg6IDE5cmVtO1xuICBoZWlnaHQ6IDMwcmVtO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMS43NXJlbTtcbiAgYW5pbWF0aW9uOiBzbGlkZXVwIDFzIGVhc2UtaW4tb3V0LCBmYWRlaW4gMS41cyBlYXNlLWluLW91dCAwbXMgMTtcbiAgY29sb3I6ICM0NDMyODI7XG59XG4uYWRkX19jYXJkLWRhcmsge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzExYjg2LCAjMDAwNTdhKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmRfX3RpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbn1cbi5jaXR5X19pbGx1c3RyYXRpb24ge1xuICB3aWR0aDogMjByZW07XG59XG4uYm9keV9fY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuLmFkZF9faWNvbiB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4xNWVtO1xufSJdfQ== */"] });


/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/fb/fb.service */ "SVGU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/error/error.component */ "dzIq");






class SignupComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    ngOnInit() {
    }
    signup(e) {
        this.fb.signup(e.target.email.value, e.target.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
            .subscribe(() => this.router.navigateByUrl(''), err => {
            this.errorMessage = err;
            setTimeout(() => this.errorMessage = '', 2000);
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__["FbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 21, vars: 4, consts: [[1, "main__container"], [1, "signup-card"], [1, "signup-content"], [1, "signup-header"], [1, "signup-form", 3, "ngSubmit"], ["authform", "ngForm"], ["type", "email", "placeholder", "Email", "autoficus", "", "ngModel", "", "name", "email", "required", "", 1, "signup-input"], ["type", "password", "placeholder", "Password", "ngModel", "", "name", "password", "minlength", "6", "required", "", 1, "signup-input"], ["type", "submit", "name", "submit", "value", "Signup", 1, "signup-btn", 3, "disabled"], [1, "login-link-wrapper"], [1, "login-notice"], ["routerLink", "/login", 1, "login-link"], [1, "signup-aside"], [1, "signup-aside-overlay"], [1, "signup-welcome-text"], [1, "signup-aside-hr"], [3, "message"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_5_listener($event) { return ctx.signup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Already Have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "aside", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Join Angular Minimus Today!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-error", 16);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ui_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"]], styles: [".main__container[_ngcontent-%COMP%] {\n  min-height: 90vh;\n  width: 90vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.signup-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  background-color: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  width: 85%;\n  min-height: 80vh;\n  animation: fadein 1s ease-in-out;\n}\n.signup-header[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 2rem;\n  color: #0c1066;\n  letter-spacing: 0.2rem;\n  font-weight: 700;\n  animation: fadein 1.75s ease-in-out;\n\n  \n}\n.signup-content[_ngcontent-%COMP%] {\n  flex: 2 2;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  animation: fadein 1.5s ease-in-out;\n  min-height: 100%;\n}\n.signup-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  width: 80%;\n  align-items: center;\n  animation: slidedown 2s ease-in-out;\n}\n.signup-aside[_ngcontent-%COMP%] {\n  animation: fadein 2.25s ease-in-out;\n  flex: 3 3;\n  display: flex;\n  justify-content: flex-end;\n  flex-flow: column;\n  min-height: 100%;\n  border-radius: 0 10px 10px 0;\n  background: url(\"https://source.unsplash.com/random/1200x900?mountain\") no-repeat center center;\n  background-size: cover;\n  position: relative;\n}\n.signup-aside-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.15);\n  border-radius: 0 10px 10px 0;\n}\n.signup-aside-hr[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  width: 8rem;\n  border: none;\n  outline: none;\n  background-color: white;\n  position: relative;\n  z-index: 5;\n  margin: 0 0 8rem 3rem;\n  animation: slideright 4s ease-out;\n}\n.signup-welcome-text[_ngcontent-%COMP%] {\n  color: white;\n  letter-spacing: 0.03rem;\n  margin: 0 0 2rem 3rem;\n  font-size: 2.75rem;\n  position: relative;\n  z-index: 5;\n  animation: slideright 2s ease-out;\n}\n.signup-input[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  padding: 1.5rem;\n  border-radius: 2rem;\n  outline: none;\n  border: none;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.3);\n  width: 80%;\n}\n.signup-btn[_ngcontent-%COMP%] {\n  background-color: #00ff9b;\n  padding: 1rem;\n  border-radius: 2rem;\n  outline: none;\n  border: none;\n  color: white;\n  font-size: 1.1rem;\n  cursor: pointer;\n  margin-top: 1.5rem;\n  width: 50%;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n}\n.signup-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #03a9f4, #00ff9b);\n}\n.signup-input[_ngcontent-%COMP%]::placeholder {\n  color: #39437a;\n  font-size: 0.9rem;\n}\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: lightgray;\n}\n.btn-disabled[_ngcontent-%COMP%]:hover {\n  background: lightgray;\n}\n.login-link-wrapper[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  animation: slideup 1s ease-in-out;\n}\n.login-link[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-top: 1rem;\n  text-decoration: none;\n  color: #ff3a82;\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQzs7RUFFbkM7Ozs7OzswQ0FNd0M7QUFDMUM7QUFDQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLFNBQVM7RUFDVCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLCtGQUErRjtFQUMvRixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHFDQUFxQztFQUNyQyw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsdURBQXVEO0FBQ3pEO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX19jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogOTB2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2lnbnVwLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDg1JTtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXMgZWFzZS1pbi1vdXQ7XG59XG4uc2lnbnVwLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6ICMwYzEwNjY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGFuaW1hdGlvbjogZmFkZWluIDEuNzVzIGVhc2UtaW4tb3V0O1xuXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6ICMwYzEwNjY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGFuaW1hdGlvbjogc2xpZGVkb3duIDEuNXMgZWFzZS1pbi1vdXQ7ICovXG59XG4uc2lnbnVwLWNvbnRlbnQge1xuICBmbGV4OiAyIDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMS41cyBlYXNlLWluLW91dDtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5zaWdudXAtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICB3aWR0aDogODAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IHNsaWRlZG93biAycyBlYXNlLWluLW91dDtcbn1cbi5zaWdudXAtYXNpZGUge1xuICBhbmltYXRpb246IGZhZGVpbiAyLjI1cyBlYXNlLWluLW91dDtcbiAgZmxleDogMyAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS8xMjAweDkwMD9tb3VudGFpblwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNpZ251cC1hc2lkZS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG59XG4uc2lnbnVwLWFzaWRlLWhyIHtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIHdpZHRoOiA4cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIG1hcmdpbjogMCAwIDhyZW0gM3JlbTtcbiAgYW5pbWF0aW9uOiBzbGlkZXJpZ2h0IDRzIGVhc2Utb3V0O1xufVxuLnNpZ251cC13ZWxjb21lLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzcmVtO1xuICBtYXJnaW46IDAgMCAycmVtIDNyZW07XG4gIGZvbnQtc2l6ZTogMi43NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBhbmltYXRpb246IHNsaWRlcmlnaHQgMnMgZWFzZS1vdXQ7XG59XG4uc2lnbnVwLWlucHV0IHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcbiAgd2lkdGg6IDgwJTtcbn1cbi5zaWdudXAtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmY5YjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG59XG4uc2lnbnVwLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAzYTlmNCwgIzAwZmY5Yik7XG59XG4uc2lnbnVwLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMzk0MzdhO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5idG4tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG4uYnRuLWRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuLmxvZ2luLWxpbmstd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIGFuaW1hdGlvbjogc2xpZGV1cCAxcyBlYXNlLWluLW91dDtcbn1cbi5sb2dpbi1saW5rIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmM2E4MjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_app_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/app.guard */ "PrF6");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _pages_add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/add/add.component */ "vu4U");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/details/details.component */ "b7v9");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_guards_app_guard__WEBPACK_IMPORTED_MODULE_1__["AppGuard"]] },
    { path: 'details/:city', component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"], canActivate: [_guards_app_guard__WEBPACK_IMPORTED_MODULE_1__["AppGuard"]] },
    { path: 'add', component: _pages_add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"], canActivate: [_guards_app_guard__WEBPACK_IMPORTED_MODULE_1__["AppGuard"]] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vu4U":
/*!********************************************!*\
  !*** ./src/app/pages/add/add.component.ts ***!
  \********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_service_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/weather/weather.service */ "GBQI");
/* harmony import */ var src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/fb/fb.service */ "SVGU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngui/auto-complete */ "EzuI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/weather-card/weather-card.component */ "S7FI");









function AddComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "City name is not valid. Note: only capital cities are supported for now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddComponent_app_weather_card_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-weather-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cityStored", function AddComponent_app_weather_card_16_Template_app_weather_card_cityStored_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.selectedCity = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("city", ctx_r2.cardCity)("addMode", true);
} }
function AddComponent__svg_svg_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "circle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddComponent__svg_svg_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddComponent__svg_svg_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ellipse", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ellipse", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "circle", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ellipse", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ellipse", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ellipse", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "circle", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ellipse", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddComponent__svg_svg_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "circle", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddComponent__svg_svg_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "fav-city-added-btn": a0 }; };
class AddComponent {
    constructor(http, weather, fb) {
        this.http = http;
        this.weather = weather;
        this.fb = fb;
        this.city = 'Paris';
        this.capitals = [];
        this.showNote = false;
        this.followedCM = false;
    }
    ngOnInit() {
        this.weather.getWeather(this.city).subscribe((payload) => {
            this.state = payload.weather[0].main;
            this.temp = Math.ceil(Number(payload.main.temp));
        });
        this.http.get('https://restcountries.eu/rest/v2/all')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])())
            .subscribe((countries) => {
            countries.forEach((country) => {
                if (country.capital.length) {
                    this.capitals.push(country.capital);
                }
            });
            this.capitals.sort();
        });
        this.sub1 = this.fb.getCities().subscribe(cities => {
            Object.values(cities).forEach((city) => {
                if (city.name === 'Paris') {
                    this.followedCM = true;
                }
            });
        });
    }
    selectCity(city) {
        if (this.capitals.includes(city)) {
            this.cardCity = city;
            this.showNote = false;
        }
        else if (city.leading > 0) {
            this.showNote = true;
        }
    }
    addCityOfTheMonth() {
        this.fb.addCity('Paris').subscribe(() => this.followedCM = true);
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_fb_fb_service__WEBPACK_IMPORTED_MODULE_4__["FbService"])); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 47, vars: 19, consts: [[1, "add-wrapper"], [1, "main-card"], [1, "city-search-wrapper"], [1, "city-search-header"], [1, "city-search-title"], [1, "search-city-input-wrapper"], ["auto-complete-placeholder", "search city", "placeholder", "search city", "auto-complete", "", 1, "search-city-input", 3, "ngModel", "source", "max-num-list", "close-on-focusout", "ngModelChange", "keyup.enter"], ["input", ""], [1, "search-city-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 451 451", 1, "search-icon"], ["fill", "#FFF", "d", "M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z"], [1, "city-search-hr"], [1, "city-search-body"], ["class", "city-invalid-note", 4, "ngIf"], [3, "city", "addMode", "cityStored", 4, "ngIf"], [1, "fav-city-wrapper"], ["src", "assets/chris-karidis-nnzkZNYWHaU-unsplash.jpg", "alt", "city", 1, "fav-city-image"], [1, "fav-city-image-overlay"], [1, "fav-city-header"], [1, "fav-city-title"], [1, "fav-city-hr"], [1, "fav-citydate"], [1, "fav-city-body"], [1, "fav-city-body-subwrapper"], [1, "fav-weather-icon", 3, "ngSwitch"], ["viewBox", "2436.9 -843.1 275.5 274.1", 4, "ngSwitchCase"], ["viewBox", "3170 -843.1 163.5 242.7", 4, "ngSwitchCase"], ["viewBox", "3487.9 -810.7 291.2 200.3", 4, "ngSwitchCase"], ["viewBox", "2050 -845 262 262", 4, "ngSwitchCase"], ["viewBox", "0 0 454 366", 4, "ngSwitchCase"], [1, "fav-city-info"], [1, "fav-city-temp"], [1, "fav-city-name-wrapper"], [1, "fav-city-name"], [1, "fav-city-country"], [1, "fav-city-state"], [1, "fav-city-add-btn", 3, "ngClass", "disabled", "click"], [1, "city-invalid-note"], [3, "city", "addMode", "cityStored"], ["viewBox", "2436.9 -843.1 275.5 274.1"], ["data-name", "cloudy icon", "transform", "translate(84 790)"], ["cx", "137", "cy", "137", "r", "137", "fill", "#fff", "data-name", "Ellipse 23", "transform", "translate(2354 -1633)"], ["fill", "#ffde17", "d", "M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z", "data-name", "Subtraction 1"], ["viewBox", "3170 -843.1 163.5 242.7"], ["data-name", "Rain Icon"], ["data-name", "Water Drops"], ["fill", "#0032cc", "d", "M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z", "data-name", "Path 7"], ["fill", "#003eff", "d", "M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z", "data-name", "Path 3"], ["viewBox", "3487.9 -810.7 291.2 200.3"], ["data-name", "Strom icon", "transform", "translate(1959 -1260.7)"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 14", "rx", "55.3", "ry", "51.7", "transform", "translate(1529 490.4)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 15", "rx", "55.3", "ry", "51.7", "transform", "translate(1569.6 467.8)", 1, "cls-1"], ["cx", "55.3", "cy", "55.3", "r", "55.3", "data-name", "Ellipse 16", "transform", "translate(1618.9 476.8)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 17", "rx", "55.3", "ry", "51.7", "transform", "translate(1631.8 450)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 18", "rx", "55.3", "ry", "51.7", "transform", "translate(1687.1 477.5)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 19", "rx", "55.3", "ry", "51.7", "transform", "translate(1709.6 507.3)", 1, "cls-1"], ["cx", "55.3", "cy", "55.3", "r", "55.3", "data-name", "Ellipse 20", "transform", "translate(1639.6 500.1)", 1, "cls-1"], ["cx", "55.3", "cy", "51.7", "data-name", "Ellipse 21", "rx", "55.3", "ry", "51.7", "transform", "translate(1569.6 507.3)", 1, "cls-1"], ["fill", "none", "stroke", "#fd0", "stroke-width", "18", "d", "M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2", "data-name", "Path 59"], ["fill", "none", "stroke", "#fd0", "stroke-width", "15", "d", "M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2", "data-name", "Path 60"], ["viewBox", "2050 -845 262 262"], ["cx", "131", "cy", "131", "r", "131", "fill", "#ffde17", "data-name", "Sun Icon", "transform", "translate(2050 -845)"], ["viewBox", "0 0 454 366"], ["fill", "#12bcff", "d", "M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SEARCH CITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_7_listener($event) { return ctx.selectedCity = $event; })("keyup.enter", function AddComponent_Template_input_keyup_enter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx.selectCity(_r0.value); })("ngModelChange", function AddComponent_Template_input_ngModelChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx.selectCity(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx.selectCity(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "0 0 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddComponent_span_15_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddComponent_app_weather_card_16_Template, 1, 2, "app-weather-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "CITY OF THE MONTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Sunday, 31th July");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddComponent__svg_svg_29_Template, 4, 0, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AddComponent__svg_svg_30_Template, 5, 0, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddComponent__svg_svg_31_Template, 12, 0, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AddComponent__svg_svg_32_Template, 2, 0, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AddComponent__svg_svg_33_Template, 2, 0, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "PARIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "FR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddComponent_Template_button_click_45_listener() { return ctx.addCityOfTheMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedCity)("source", ctx.capitals)("max-num-list", 5)("close-on-focusout", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.state === "Clouds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.state === "Rain" || ctx.state === "Drizzle" || ctx.state === "Mist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.state === "Storm" || ctx.state === "Thunderstorm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.state === "Sunny" || ctx.state === "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.state === "Haze" || ctx.state === "Fog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.temp, "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.followedCM))("disabled", ctx.followedCM);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.followedCM ? "FOLLOWED" : "FOLLOW");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_6__["NguiAutoCompleteDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__["WeatherCardComponent"]], styles: [".add-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.main-card[_ngcontent-%COMP%] {\n  height: 87vh;\n  width: 90vw;\n  background-color: #fff;\n  border-radius: 1rem;\n  display: flex;\n  margin-top: -4rem;\n}\n\n\n.add-city-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  background-color: #003EFF;\n  outline: none;\n  border: none;\n  color: white;\n  border-radius: 2rem;\n  font-size: 1rem;\n}\n\n\n.city-search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1;\n  position: relative;;\n  overflow-y: auto;\n}\n\n\n.city-search-header[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 40%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: column;\n}\n\n\n.city-search-body[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 60%;\n  display: flex;\n  justify-content: center;\n}\n\n\n.city-search-hr[_ngcontent-%COMP%] {\n  word-spacing: 1rem;\n  margin: 2rem;\n}\n\n\n.search-city-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  box-sizing: border-box;\n}\n\n\n.search-city-input[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 1.5rem;\n  border-radius: 3rem;\n  outline: none;\n  border: none;\n  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);\n  font-size: 1rem;\n  color: #131F69;\n  text-transform: uppercase;\n}\n\n\n.search-city-input[_ngcontent-%COMP%]::placeholder {\n  font-size: 1rem;\n  color: #131F69;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n}\n\n\n.search-city-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  background-color: #31feae;\n  height: 5rem;\n  width: 5rem;\n  border-radius: 50%;\n  right: 0;\n  top: -0.35rem;\n  outline: none;\n  border: none;\n  z-index: 5;\n  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);\n}\n\n\n.search-icon[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 50%;\n}\n\n\n.fav-city-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1;\n  position: relative;;\n  overflow: hidden;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  height: 100%;\n}\n\n\n.fav-city-image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border-radius: 0 1rem 1rem 0;\n  height: 100%;\n}\n\n\n.fav-city-image-overlay[_ngcontent-%COMP%] {\n  min-height: 100%;\n  width: 100%;\n  position: absolute;\n  background: rgba(43, 36, 77, 0.5);\n  border-radius: 0 1rem 1rem 0;\n}\n\n\n.fav-city-body[_ngcontent-%COMP%], .fav-city-header[_ngcontent-%COMP%] {\n  position: relative;\n  color: white;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n\n.fav-city-body-subwrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n\n.fav-city-hr[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n\n\n.fav-city-title[_ngcontent-%COMP%], .city-search-title[_ngcontent-%COMP%] {\n  font-size: 1.85rem;\n  letter-spacing: 0.1rem;\n  word-break: break-all;\n}\n\n\n.fav-city-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  margin-top: 1rem;\n}\n\n\n.city-search-title[_ngcontent-%COMP%] {\n  color: #0c1066;\n  margin: 4rem 0 3rem 0;\n}\n\n\n.fav-city-date[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n\n.fav-city-temp[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  text-align: center;\n}\n\n\n.fav-city-name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  letter-spacing: 0.1rem;\n}\n\n\n.fav-weather-icon[_ngcontent-%COMP%] {\n  width: 7rem;\n  margin-bottom: 4rem;\n}\n\n\n.fav-city-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  text-align: center;\n  margin-top: -2rem;\n}\n\n\n.fav-city-state[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5rem;\n  margin-bottom: 2rem;\n}\n\n\n.fav-city-country[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n\n\n.fav-city-name-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n\n.fav-city-add-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  margin-bottom: 2rem;\n  border: 2px solid white;\n  border-radius: 3rem;\n  padding: 1.25rem 2rem;\n  background-color: transparent;\n  color: white;\n  font-weight: bold;\n}\n\n\n.fav-city-add-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n\n.fav-city-added-btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n\napp-weather-card[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  min-width: 28rem;\n}\n\n\n\n\n\n@media screen and (max-width: 1919px) {\n  .add-city-btn[_ngcontent-%COMP%] {\n    height: 80%;\n    width: 75%;\n  }\n}\n\n\n@media screen and (max-width: 1200px) {\n\n  app-weather-card[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-bottom: 1rem;\n  }\n\n  .fav-city-wrapper[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .add-wrapper[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n\n  .main-card[_ngcontent-%COMP%] {\n    flex-flow: column;\n    margin-left: -1rem;\n    margin-bottom: 2rem;\n    height: auto;\n  }\n\n  .city-search-title[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n\n  .fav-city-wrapper[_ngcontent-%COMP%], .city-search-wrapper[_ngcontent-%COMP%], .city-search-header[_ngcontent-%COMP%], .city-search-body[_ngcontent-%COMP%], .fav-city-header[_ngcontent-%COMP%], .fav-city-body[_ngcontent-%COMP%], .fav-city-body[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .fav-city-wrapper[_ngcontent-%COMP%], .fav-city-image[_ngcontent-%COMP%], .fav-city-image-overlay[_ngcontent-%COMP%] {\n    border-radius: 0 0 1rem 1rem;\n  }\n\n  .fav-city-image[_ngcontent-%COMP%] {\n    background-size: cover;\n    background: no-repeat 50% 50%;\n  }\n\n}\n\n\n\n\n\n@media screen and (max-width: 959px) {\n\n  app-weather-card[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-bottom: 2rem;\n  }\n\n  .fav-city-wrapper[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .add-wrapper[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n\n  .main-card[_ngcontent-%COMP%] {\n    flex-flow: column;\n    margin-left: -1rem;\n    margin-bottom: 2rem;\n    height: auto;\n  }\n\n  .city-search-title[_ngcontent-%COMP%] {\n    margin: 2rem;\n  }\n\n  .fav-city-wrapper[_ngcontent-%COMP%], .city-search-wrapper[_ngcontent-%COMP%], .city-search-header[_ngcontent-%COMP%], .city-search-body[_ngcontent-%COMP%], .fav-city-header[_ngcontent-%COMP%], .fav-city-body[_ngcontent-%COMP%], .fav-city-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .fav-city-wrapper[_ngcontent-%COMP%], .fav-city-image[_ngcontent-%COMP%], .fav-city-image-overlay[_ngcontent-%COMP%] {\n    border-radius: 0 0 1rem 1rem;\n  }\n\n  .fav-city-image[_ngcontent-%COMP%] {\n    background-size: cover;\n    background: no-repeat 50% 50%;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixpREFBaUQ7RUFDakQsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YsaURBQWlEO0FBQ25EOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLDRCQUE0QjtBQUM5Qjs7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7OztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0FBQzVDOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7OztBQUVBLDBCQUEwQjs7O0FBQzFCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBQ0Y7OztBQUVBOztFQUVFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qiw2QkFBNkI7RUFDL0I7O0FBRUY7OztBQUVFLDJCQUEyQjs7O0FBQzdCOztFQUVFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qiw2QkFBNkI7RUFDL0I7O0FBRUYiLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5tYWluLWNhcmQge1xuICBoZWlnaHQ6IDg3dmg7XG4gIHdpZHRoOiA5MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtNHJlbTtcbn1cblxuLmFkZC1jaXR5LWJ0biB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzRUZGO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY2l0eS1zZWFyY2gtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBmbGV4OiAxIDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTs7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jaXR5LXNlYXJjaC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4uY2l0eS1zZWFyY2gtYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA2MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2l0eS1zZWFyY2gtaHIge1xuICB3b3JkLXNwYWNpbmc6IDFyZW07XG4gIG1hcmdpbjogMnJlbTtcbn1cblxuXG4uc2VhcmNoLWNpdHktaW5wdXQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlYXJjaC1jaXR5LWlucHV0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMnJlbSAwLjE1cmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMTMxRjY5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2VhcmNoLWNpdHktaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzEzMUY2OTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbn1cblxuLnNlYXJjaC1jaXR5LWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzFmZWFlO1xuICBoZWlnaHQ6IDVyZW07XG4gIHdpZHRoOiA1cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC0wLjM1cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHotaW5kZXg6IDU7XG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIDAuMTVyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNTAlO1xufVxuXG4uZmF2LWNpdHktd3JhcHBlciB7XG4gIGZsZXg6IDEgMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mYXYtY2l0eS1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMCAxcmVtIDFyZW0gMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5mYXYtY2l0eS1pbWFnZS1vdmVybGF5IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSg0MywgMzYsIDc3LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xufVxuXG5cblxuLmZhdi1jaXR5LWJvZHksIC5mYXYtY2l0eS1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mYXYtY2l0eS1ib2R5LXN1YndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mYXYtY2l0eS1ociB7XG4gIHdpZHRoOiAzcmVtO1xufVxuXG4uZmF2LWNpdHktdGl0bGUsIC5jaXR5LXNlYXJjaC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZmF2LWNpdHktdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jaXR5LXNlYXJjaC10aXRsZSB7XG4gIGNvbG9yOiAjMGMxMDY2O1xuICBtYXJnaW46IDRyZW0gMCAzcmVtIDA7XG59XG5cblxuLmZhdi1jaXR5LWRhdGUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5mYXYtY2l0eS10ZW1wIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYXYtY2l0eS1uYW1lIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xufVxuXG4uZmF2LXdlYXRoZXItaWNvbiB7XG4gIHdpZHRoOiA3cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG5cbi5mYXYtY2l0eS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTJyZW07XG59XG5cbi5mYXYtY2l0eS1zdGF0ZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmZhdi1jaXR5LWNvdW50cnkge1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbn1cblxuLmZhdi1jaXR5LW5hbWUtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5mYXYtY2l0eS1hZGQtYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZhdi1jaXR5LWFkZC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5mYXYtY2l0eS1hZGRlZC1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuYXBwLXdlYXRoZXItY2FyZCB7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBtaW4td2lkdGg6IDI4cmVtO1xufVxuXG4vKiBNZWRpYSBRdWVyeTogICBMVC1YTCAgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAuYWRkLWNpdHktYnRuIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogNzUlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXG4gIGFwcC13ZWF0aGVyLWNhcmQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5mYXYtY2l0eS13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuYWRkLXdyYXBwZXIge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICB9XG5cbiAgLm1haW4tY2FyZCB7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmNpdHktc2VhcmNoLXRpdGxlIHtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cblxuICAuZmF2LWNpdHktd3JhcHBlciwgLmNpdHktc2VhcmNoLXdyYXBwZXIsIC5jaXR5LXNlYXJjaC1oZWFkZXIsIC5jaXR5LXNlYXJjaC1ib2R5LCAuZmF2LWNpdHktaGVhZGVyLCAuZmF2LWNpdHktYm9keSwgLmZhdi1jaXR5LWJvZHkge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuZmF2LWNpdHktd3JhcHBlciwgLmZhdi1jaXR5LWltYWdlLCAuZmF2LWNpdHktaW1hZ2Utb3ZlcmxheSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDFyZW0gMXJlbTtcbiAgfVxuXG4gIC5mYXYtY2l0eS1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgNTAlIDUwJTtcbiAgfVxuXG59XG5cbiAgLyogTWVkaWEgUXVlcnk6ICAgTFQtTUQgICAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcblxuICBhcHAtd2VhdGhlci1jYXJkIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAuZmF2LWNpdHktd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmFkZC13cmFwcGVyIHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgfVxuXG4gIC5tYWluLWNhcmQge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAtMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jaXR5LXNlYXJjaC10aXRsZSB7XG4gICAgbWFyZ2luOiAycmVtO1xuICB9XG5cbiAgLmZhdi1jaXR5LXdyYXBwZXIsIC5jaXR5LXNlYXJjaC13cmFwcGVyLCAuY2l0eS1zZWFyY2gtaGVhZGVyLCAuY2l0eS1zZWFyY2gtYm9keSwgLmZhdi1jaXR5LWhlYWRlciwgLmZhdi1jaXR5LWJvZHksIC5mYXYtY2l0eS1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5mYXYtY2l0eS13cmFwcGVyLCAuZmF2LWNpdHktaW1hZ2UsIC5mYXYtY2l0eS1pbWFnZS1vdmVybGF5IHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAxcmVtO1xuICB9XG5cbiAgLmZhdi1jaXR5LWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUgNTAlO1xuICB9XG5cbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map