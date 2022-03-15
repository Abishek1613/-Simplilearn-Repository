(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\my-movie-plan-main\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function HeaderComponent_nav_0_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Admin Panel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add Auditorium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Manage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_nav_0_ul_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_nav_0_ul_23_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (tmp_0_0 = ctx_r2.service.getUser()) == null ? null : tmp_0_0.email, " ");
} }
function HeaderComponent_nav_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/movies"]; };
function HeaderComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HeaderComponent_nav_0_li_21_Template, 13, 0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HeaderComponent_nav_0_ul_23_Template, 14, 1, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HeaderComponent_nav_0_div_24_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.service.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.service.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.service.isLoggedIn());
} }
class HeaderComponent {
    constructor(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.title = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].APP_NAME;
    }
    ngOnInit() {
        console.log(this._userService.getUser());
        this.router = this._router;
        this.service = this._userService;
    }
    onLogout() {
        if (confirm('Do you want to logout?')) {
            if (this._userService.removeToken())
                this._router.navigate(['/user/login'], { queryParams: { 'logout': 'true' } });
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 1, vars: 1, consts: [["id", "nav-bar", "class", "navbar navbar-expand-lg navbar-dark bg-show text-white px-lg-3", 4, "ngIf"], ["id", "nav-bar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-show", "text-white", "px-lg-3"], [1, "container-fluid"], ["mat-button", "", "routerLink", "/home", 1, "navbar-brand", "ms-sm-3", "fs-4"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", "text-sm-center"], [1, "nav-item", "mx-lg-2", "mx-md-auto"], ["mat-button", "", "aria-current", "page", "routerLinkActive", "active", "routerLink", "/home", 1, "nav-link"], ["mat-button", "", "routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/about", 1, "nav-link"], ["mat-button", "", "routerLinkActive", "active", "routerLink", "/contact", 1, "nav-link"], ["class", "nav-item dropdown", 4, "ngIf"], [1, "profile", "text-sm-center"], ["class", "navbar-nav col-auto", 4, "ngIf"], ["class", "btn-group p-2", 4, "ngIf"], [1, "nav-item", "dropdown"], ["href", "#", "id", "admin-panel", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "admin-panel", 1, "dropdown-menu"], ["href", "#", "routerLinkActive", "active", "routerLink", "/admin/add-auditorium", 1, "dropdown-item"], ["href", "#", "routerLinkActive", "active", "routerLink", "/admin/add-movie", 1, "dropdown-item"], ["href", "#", "routerLinkActive", "active", "routerLink", "/admin/manage", 1, "dropdown-item"], [1, "navbar-nav", "col-auto"], ["href", "#", "id", "account-links", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "fs-6", "my-2"], ["aria-labelledby", "account-links", 1, "dropdown-menu", "dropdown-menu-dark"], [1, "nav-item"], ["routerLink", "/my/profile", 1, "dropdown-item", "py-1"], ["routerLink", "/my/bookings", 1, "dropdown-item", "py-1"], [1, "nav-item", "text-center"], [1, "btn", "btn-outline-warning", "btn-sm", "col-11", "mt-2", 3, "click"], [1, "btn-group", "p-2"], ["routerLink", "/user/login", "routerLinkActive", "active", 1, "btn", "btn-primary", "btn-sm", "rounded", "mx-1"], ["routerLink", "/user/register", "routerLinkActive", "active", 1, "btn", "btn-success", "btn-sm", "rounded", "mx-1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeaderComponent_nav_0_Template, 25, 6, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.router.url !== "/select-seats");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "322t":
/*!*************************************************************!*\
  !*** ./src/app/classes/validators/application-validator.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationValidator", function() { return ApplicationValidator; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "bFed");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ApplicationValidator {
    static uniqueAuditoriumName(auditoriumNames) {
        return (control) => {
            return auditoriumNames ? auditoriumNames
                .find(name => name.toLowerCase() == control.value.toLowerCase())
                ? { 'uniqueName': true }
                : null : null;
        };
    }
    static uniqueMovieName(movieNames) {
        return (control) => {
            return movieNames ? movieNames
                .find(name => name.toLowerCase() == control.value.toLowerCase())
                ? { 'uniqueName': true }
                : null : null;
        };
    }
    static validMovieGenre(genres) {
        return (control) => {
            return genres ? genres
                .find(genre => genre.toLowerCase() == control.value.toLowerCase())
                ? null
                : { 'validGenre': true } : null;
        };
    }
    static uniqueFacility(facilities) {
        return (control) => {
            return facilities ? facilities.find(facility => facility.toLowerCase() == control.value.toLowerCase())
                ? { 'uniqueName': true }
                : null : null;
        };
    }
    static uniqueSafeties(safeties) {
        return (control) => {
            return safeties ? safeties.find(safety => safety.toLowerCase() == control.value.toLowerCase())
                ? { 'uniqueName': true }
                : null : null;
        };
    }
    static uniqueShowName(shows) {
        return (control) => {
            return shows ? shows.find(show => show.name.toLowerCase() == control.value.toLowerCase())
                ? { 'uniqueName': true }
                : null : null;
        };
    }
    static uniqueShowTime(shows) {
        return (control) => {
            var _a;
            if (shows) {
                let isNotValid = false;
                for (let i = 0; i < (shows === null || shows === void 0 ? void 0 : shows.length); i++)
                    if (!ApplicationValidator.isTimeDifferenceValid((_a = shows[i]) === null || _a === void 0 ? void 0 : _a.startTime, control.value)) {
                        isNotValid = true;
                        break;
                    }
                return isNotValid ? { 'uniqueTime': true } : null;
            }
            else
                return null;
        };
    }
    static isTimeDifferenceValid(previous, present) {
        const p_time = _util_util__WEBPACK_IMPORTED_MODULE_0__["Util"].extractTimeAndConvertToNumber(previous);
        const n_time = _util_util__WEBPACK_IMPORTED_MODULE_0__["Util"].extractTimeAndConvertToNumber(present);
        const difference = p_time - n_time;
        return difference >= 10000000 || difference <= -10000000 ? true : false;
    }
}
ApplicationValidator.ɵfac = function ApplicationValidator_Factory(t) { return new (t || ApplicationValidator)(); };
ApplicationValidator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApplicationValidator, factory: ApplicationValidator.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "578B":
/*!*************************************************!*\
  !*** ./src/app/guards/form/from-close.guard.ts ***!
  \*************************************************/
/*! exports provided: FromCloseGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromCloseGuard", function() { return FromCloseGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FromCloseGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.areYouSure();
    }
}
FromCloseGuard.ɵfac = function FromCloseGuard_Factory(t) { return new (t || FromCloseGuard)(); };
FromCloseGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FromCloseGuard, factory: FromCloseGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "618f":
/*!*************************************************************************!*\
  !*** ./src/app/components/auditorium-form/auditorium-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuditoriumFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditoriumFormComponent", function() { return AuditoriumFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/validators/application-validator */ "322t");
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "kyzu");
/* harmony import */ var src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/application/application.service */ "nlYG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global/global.service */ "Nnfz");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
















function AuditoriumFormComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Auditorium Details");
} }
function AuditoriumFormComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.nameErrors);
} }
function AuditoriumFormComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.emailErrors);
} }
function AuditoriumFormComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.customerCareNoErrors);
} }
function AuditoriumFormComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.addressErrors);
} }
function AuditoriumFormComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Add Safeties");
} }
function AuditoriumFormComponent_div_52_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const safety_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", safety_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", safety_r17, " ");
} }
function AuditoriumFormComponent_div_52_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Safety cannot be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuditoriumFormComponent_div_52_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Safety already added");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuditoriumFormComponent_div_52_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuditoriumFormComponent_div_52_mat_error_7_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AuditoriumFormComponent_div_52_mat_error_7_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const safety_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", safety_r13.errors == null ? null : safety_r13.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", safety_r13.errors == null ? null : safety_r13.errors.uniqueName);
} }
function AuditoriumFormComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Safety");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "datalist", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AuditoriumFormComponent_div_52_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AuditoriumFormComponent_div_52_mat_error_7_Template, 3, 2, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuditoriumFormComponent_div_52_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const i_r14 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.removeSafety(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("list", "safety-" + i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "safety-" + i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.allSafeties);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.safeties.touched);
} }
function AuditoriumFormComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Add Facilities");
} }
function AuditoriumFormComponent_div_64_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facility_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", facility_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", facility_r27, " ");
} }
function AuditoriumFormComponent_div_64_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Facility cannot be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuditoriumFormComponent_div_64_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Facility already added");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuditoriumFormComponent_div_64_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuditoriumFormComponent_div_64_mat_error_7_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AuditoriumFormComponent_div_64_mat_error_7_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facility_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", facility_r23.errors == null ? null : facility_r23.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", facility_r23.errors == null ? null : facility_r23.errors.uniqueName);
} }
function AuditoriumFormComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Facility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "datalist", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AuditoriumFormComponent_div_64_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AuditoriumFormComponent_div_64_mat_error_7_Template, 3, 2, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuditoriumFormComponent_div_64_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const i_r24 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.removeFacility(i_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r24 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("list", "facility-" + i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "facility-" + i_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.allFacilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.facilities.touched);
} }
function AuditoriumFormComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Add Shows");
} }
function AuditoriumFormComponent_div_75_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", show_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", show_r38, " ");
} }
function AuditoriumFormComponent_div_75_mat_error_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Show Name cannot be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuditoriumFormComponent_div_75_mat_error_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Show Name already added");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuditoriumFormComponent_div_75_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuditoriumFormComponent_div_75_mat_error_9_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AuditoriumFormComponent_div_75_mat_error_9_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = show_r33.get("name")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = show_r33.get("name")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.uniqueName);
} }
function AuditoriumFormComponent_div_75_mat_error_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Show Start Time cannot be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuditoriumFormComponent_div_75_mat_error_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Time gap between the shows must be at-least 3 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuditoriumFormComponent_div_75_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuditoriumFormComponent_div_75_mat_error_15_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AuditoriumFormComponent_div_75_mat_error_15_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = show_r33.get("startTime")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = show_r33.get("startTime")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.uniqueTime);
} }
function AuditoriumFormComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Show Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "datalist", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AuditoriumFormComponent_div_75_option_8_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AuditoriumFormComponent_div_75_mat_error_9_Template, 3, 2, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Show Timing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AuditoriumFormComponent_div_75_mat_error_15_Template, 3, 2, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuditoriumFormComponent_div_75_Template_mat_icon_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const i_r34 = ctx.index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r45.removeShow(i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r34 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("list", "show-name-" + i_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "show-name-" + i_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.showNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.shows.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.shows.touched);
} }
function AuditoriumFormComponent_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Review");
} }
class AuditoriumFormComponent {
    constructor(_fb, _alertService, _service, _router, _globalService) {
        this._fb = _fb;
        this._alertService = _alertService;
        this._service = _service;
        this._router = _router;
        this._globalService = _globalService;
        this.showNames = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].SHOW_NAMES;
    }
    areYouSure() {
        return confirm('Are you sure to leave the page?');
    }
    ngOnInit() {
        this._globalService.getAuditoriumNames()
            .subscribe(halls => this.allAuditoriumNames = halls);
        this.allFacilities = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HALL_FACILITIES;
        this.allSafeties = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].HALL_SAFETIES;
        this.auditoriumForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                uniqueAuditoriumName(this.allAuditoriumNames)
            ]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            customerCareNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            seatCapacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](100, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            facilities: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            safeties: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            shows: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([])
        });
    }
    get shows() {
        return this.auditoriumForm.get('shows');
    }
    get facilities() {
        return this.auditoriumForm.get('facilities');
    }
    get safeties() {
        return this.auditoriumForm.get('safeties');
    }
    addFacility() {
        if (this.facilities.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields');
            return;
        }
        this.facilities.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_1__["ApplicationValidator"].uniqueFacility(this.facilities.value)]));
    }
    addSafety() {
        if (this.safeties.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields');
            return;
        }
        this.safeties.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_1__["ApplicationValidator"].uniqueSafeties(this.safeties.value)]));
    }
    get nameErrors() {
        let name = this.auditoriumForm.get('name');
        if (name === null || name === void 0 ? void 0 : name.hasError('required'))
            return "Name cannot be empty";
        else if (name === null || name === void 0 ? void 0 : name.hasError('uniqueName'))
            return "Auditorium already exists";
        return '';
    }
    get addressErrors() {
        let address = this.auditoriumForm.get('address');
        if (address === null || address === void 0 ? void 0 : address.hasError('required'))
            return 'Address cannot be empty';
        return '';
    }
    get emailErrors() {
        let email = this.auditoriumForm.get('email');
        if (email === null || email === void 0 ? void 0 : email.hasError('required'))
            return 'Email cannot be empty';
        return '';
    }
    get customerCareNoErrors() {
        let customerCareNo = this.auditoriumForm.get('customerCareNo');
        if (customerCareNo === null || customerCareNo === void 0 ? void 0 : customerCareNo.hasError('required'))
            return 'Customer Care cannot be empty';
        return '';
    }
    addShow() {
        if (this.shows.status == 'INVALID') {
            this._alertService.defaultAlert('Please complete the above fields');
            return;
        }
        this.shows.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_1__["ApplicationValidator"].uniqueShowName(this.shows.value)]),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_1__["ApplicationValidator"].uniqueShowTime(this.shows.value)])
        }));
    }
    removeFacility(index) {
        if (confirm(`Do you want to remove the Facility: ${index + 1}`))
            this.facilities.removeAt(index);
    }
    removeSafety(index) {
        if (confirm(`Do you want to remove the Safety: ${index + 1}`))
            this.safeties.removeAt(index);
    }
    removeShow(index) {
        if (confirm(`Do you want to remove the show: ${index + 1}`))
            this.shows.removeAt(index);
    }
    onSubmit() {
        this._service.addAuditorium(this.auditoriumForm.value)
            .subscribe(res => {
            this._globalService.addAuditorium(res);
            this._router.navigate(['/admin/manage'], { queryParams: { 'auditorium-added': true } });
        }, err => this._alertService.postionAlert(err.error.message, 'danger-alert'));
    }
}
AuditoriumFormComponent.ɵfac = function AuditoriumFormComponent_Factory(t) { return new (t || AuditoriumFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"])); };
AuditoriumFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuditoriumFormComponent, selectors: [["app-auditorium-form"]], decls: 94, vars: 17, consts: [[1, "form-container"], [1, "mx-auto", "text-center", "bg-color"], [1, "container", "py-5"], [1, "fs-2", "text-dark", "py-5", "text-uppercase"], [1, "form-holder", "border", "border-4", "border-info", "rounded", "mx-5"], [3, "formGroup", "ngSubmit"], [3, "linear"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], [1, "row", "g-0", "my-3", "justify-content-around"], [1, "col-sm-12", "col-lg-5", "mx-lg-2"], ["appearance", "outline", 1, "d-block", "w-100", "text-dark"], ["matInput", "", "placeholder", "Auditorium Name", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "placeholder", "Image Link", "formControlName", "image"], ["matInput", "", "formControlName", "seatCapacity", "readonly", ""], ["matInput", "", "placeholder", "Email Id", "formControlName", "email"], ["matInput", "", "placeholder", "Cust Care No", "formControlName", "customerCareNo"], ["matInput", "", "placeholder", "Address", "formControlName", "address"], ["mat-button", "", "matStepperNext", "", "type", "button"], ["optional", "", 3, "stepControl"], [1, "row", "g-0", "justify-content-around"], ["class", "col-sm-12 col-lg-5 form-field", "formArrayName", "safeties", 4, "ngFor", "ngForOf"], [1, "text-center", "text-primary", "mt-4"], ["aria-hidden", "false", "matTooltip", "Add one more safety", "aria-label", "add_circle icon", 1, "pe-cursor", "fs-2", 3, "click"], ["mat-button", "", "matStepperPrevious", "", "type", "button"], ["class", "col-sm-12 col-lg-5 form-field", "formArrayName", "facilities", 4, "ngFor", "ngForOf"], ["aria-hidden", "false", "matTooltip", "Add one more facility", "aria-label", "add_circle icon", 1, "pe-cursor", "fs-2", 3, "click"], ["class", "w-100", "formArrayName", "shows", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "disabled"], ["formArrayName", "safeties", 1, "col-sm-12", "col-lg-5", "form-field"], ["matInput", "", "placeholder", "Hand Sanitizers Available", 3, "formControlName"], [3, "id"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-hidden", "false", "matTooltip", "Remove the Safety", "aria-label", "delete icon", 1, "fs-2", "w-auto", "text-danger", "delete-icon", 3, "click"], [3, "value"], ["formArrayName", "facilities", 1, "col-sm-12", "col-lg-5", "form-field"], ["matInput", "", "placeholder", "Parking Facility", 3, "formControlName"], ["aria-hidden", "false", "matTooltip", "Remove the Facility", "aria-label", "delete icon", 1, "fs-2", "w-auto", "text-danger", "delete-icon", 3, "click"], ["formArrayName", "shows", 1, "w-100"], [1, "row", "g-0", "justify-content-around", "align-content-center", "form-field", 3, "formGroupName"], [1, "col-lg-5", "col-sm-12"], ["matInput", "", "formControlName", "name"], ["type", "time", "matInput", "", "placeholder", "Matnee", "formControlName", "startTime"], ["aria-hidden", "false", "matTooltip", "Remove the Show", "aria-label", "delete icon", 1, "fs-2", "w-auto", "text-danger", "delete-icon", 3, "click"]], template: function AuditoriumFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Register New Auditorium Here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AuditoriumFormComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-vertical-stepper", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AuditoriumFormComponent_ng_template_10_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AuditoriumFormComponent_mat_error_17_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Seating Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AuditoriumFormComponent_mat_error_33_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Customer Care Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AuditoriumFormComponent_mat_error_39_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AuditoriumFormComponent_mat_error_45_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-step", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, AuditoriumFormComponent_ng_template_50_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, AuditoriumFormComponent_div_52_Template, 10, 5, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuditoriumFormComponent_Template_mat_icon_click_54_listener() { return ctx.addSafety(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-step", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, AuditoriumFormComponent_ng_template_62_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, AuditoriumFormComponent_div_64_Template, 10, 5, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuditoriumFormComponent_Template_mat_icon_click_66_listener() { return ctx.addFacility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "mat-step", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, AuditoriumFormComponent_ng_template_74_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, AuditoriumFormComponent_div_75_Template, 18, 6, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuditoriumFormComponent_Template_mat_icon_click_77_listener() { return ctx.addShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, AuditoriumFormComponent_ng_template_85_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](88, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.auditoriumForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.auditoriumForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nameErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.customerCareNoErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addressErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.auditoriumForm.get("safeties"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.safeties.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.auditoriumForm.get("facilities"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.facilities.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.auditoriumForm.get("shows"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.shows.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("            ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](88, 15, ctx.auditoriumForm.value), "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.auditoriumForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperPrevious"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"]], styles: [".bg-color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    191deg,\r\n    rgba(2, 0, 36, 1) 0%,\r\n    rgba(56, 9, 121, 1) 0%,\r\n    rgba(255, 0, 236, 1) 100%\r\n  );\r\n}\r\n\r\n.form-holder[_ngcontent-%COMP%] {\r\n  margin-top: -40px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]   .delete-icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: inherit;\r\n  right: 20px;\r\n  top: 20%;\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]:hover   .delete-icon[_ngcontent-%COMP%] {\r\n  display: inline !important;\r\n}\r\n\r\n\r\n\r\n  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: #000 !important;\r\n}\r\n\r\n\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n\r\n\r\n  .mat-input-element {\r\n  caret-color: #000 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-label {\r\n  color: #000 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #000 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #000;\r\n}\r\n\r\n  .mat-input-element::placeholder {\r\n  color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0b3JpdW0tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7Ozs7O0dBS0M7QUFDSDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxRQUFRO0VBQ1IsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsK0NBQStDOztBQUMvQzs7O0VBR0UsaUNBQWlDO0FBQ25DOztBQUVBLDhCQUE4Qjs7QUFDOUI7OztFQUdFLDRCQUE0QjtBQUM5Qjs7QUFFQSxxQ0FBcUM7O0FBQ3JDOzs7RUFHRSxxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsb0NBQW9DOztBQUNwQzs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUEsb0NBQW9DOztBQUNwQztFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBLCtCQUErQjs7QUFDL0I7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsNkJBQTZCOztBQUM3QjtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhdWRpdG9yaXVtLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTkxZGVnLFxyXG4gICAgcmdiYSgyLCAwLCAzNiwgMSkgMCUsXHJcbiAgICByZ2JhKDU2LCA5LCAxMjEsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDAsIDIzNiwgMSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbi5mb3JtLWhvbGRlciB7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tZmllbGQgLmRlbGV0ZS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogMjAlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1maWVsZDpob3ZlciAuZGVsZXRlLWljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaWNvbi1zdGVwcGVyIHNlbGVjdGVkIGNvbG9yIGNoYW5nZSAgKi9cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy9tYXQtaW5wdXQgZm9jdXNlZCBjb2xvciAqL1xyXG46Om5nLWRlZXBcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBvdXRsaW5lIGNvbG9yICovXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAvKiBvcGFjaXR5OiAwLjghaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaW5wdXQgY2FyZW50IGNvbG9yICovXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBjYXJlbnQgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCxcclxuOjpuZy1kZWVwIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWxhYmVsIG5vcm1hbCBzdGF0ZSBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvL2lucHV0IG91dGxpbmUgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLy8gbWF0LWxhYmVsIGZvY3VzZWQgc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1sYWJlbCBlcnJvciBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdCAubWF0LXNlbGVjdC10cmlnZ2VyIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbiJdfQ== */"] });
function uniqueAuditoriumName(auditoriumNames) {
    return (control) => {
        return auditoriumNames ? auditoriumNames
            .find(name => name.toLowerCase() == control.value.toLowerCase())
            ? { 'uniqueName': true }
            : null : null;
    };
}


/***/ }),

/***/ "9KET":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");




class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: #000 !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n  .mat-input-element {\r\n  caret-color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n  .mat-form-field-label {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #000;\r\n}\r\n  .mat-input-element::placeholder {\r\n  color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQzs7O0VBR0UsaUNBQWlDO0FBQ25DO0FBRUEsOEJBQThCO0FBQzlCOzs7RUFHRSw0QkFBNEI7QUFDOUI7QUFFQSxxQ0FBcUM7QUFDckM7OztFQUdFLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsMkJBQTJCO0FBQzdCO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0EsK0JBQStCO0FBQy9CO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC8vIG1hdC1pY29uLXN0ZXBwZXIgc2VsZWN0ZWQgY29sb3IgY2hhbmdlICAqL1xyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvL21hdC1pbnB1dCBmb2N1c2VkIGNvbG9yICovXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWRcclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGVycm9yIG91dGxpbmUgY29sb3IgKi9cclxuOjpuZy1kZWVwXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWRcclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIC8qIG9wYWNpdHk6IDAuOCFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBjYXJlbnQgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGVycm9yIGNhcmVudCBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LFxyXG46Om5nLWRlZXAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtbGFiZWwgbm9ybWFsIHN0YXRlIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vaW5wdXQgb3V0bGluZSBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG4vKiAvLyBtYXQtbGFiZWwgZm9jdXNlZCBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWxhYmVsIGVycm9yIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0IC5tYXQtc2VsZWN0LXRyaWdnZXIgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(_http) {
        this._http = _http;
    }
    registerUser(user) {
        return this._http.post(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].REGISTER_URL, user, { headers: { skip: "true" } });
    }
    checkUniqueness(username) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].CHECK_UNIQUENESS_URL}/${username}`, { headers: { skip: "true" } });
    }
    loginUser(credentials) {
        return this._http.post(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].AUTHENTICATE_URL, credentials, { headers: { skip: "true" } });
    }
    forgotPassword(credentials) {
        return this._http.put(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].FORGOT_PASSWORD_URL, credentials, { headers: { skip: "true" } });
    }
    updateUser(userId, user) {
        return this._http.put(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].UPDATE_USER_URL}/${userId}`, user);
    }
    getLoggedInUser() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].GET_LOGGED_IN_USER_URL);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9bhh":
/*!*******************************************!*\
  !*** ./src/app/interfaces/application.ts ***!
  \*******************************************/
/*! exports provided: UserImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImpl", function() { return UserImpl; });
class UserImpl {
    constructor() {
        this.id = '';
        this.name = '';
        this.email = '';
        this.mobile = '';
        this.gender = '';
        this.terms = true;
        this.password = '';
        this.userRole = '';
    }
}


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
    production: false
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

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UserService {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    getUser() {
        const user_email = localStorage.getItem('user-email');
        const user_role = localStorage.getItem('user-role');
        const user_id = localStorage.getItem('user-id');
        // if (this.getToken() != null && user_email == null)
        //   this.setToken(this.getToken()!);
        if (user_email && user_role && user_id) {
            const user = {
                email: user_email,
                userRole: user_role,
                id: user_id
            };
            return user;
        }
        else
            return null;
    }
    setUser(user) {
        localStorage.setItem('user-email', user.email);
        localStorage.setItem('user-role', user.userRole);
        localStorage.setItem('user-id', user.id);
    }
    removeUser() {
        localStorage.removeItem('user-email');
        localStorage.removeItem('user-role');
        localStorage.removeItem('user-id');
        return true;
    }
    isLoggedIn() {
        return !!this.getUser();
    }
    isAdmin() {
        const user = this.getUser();
        return !!(user === null || user === void 0 ? void 0 : user.userRole) && ((user === null || user === void 0 ? void 0 : user.userRole) == 'ROLE_ADMIN' || (user === null || user === void 0 ? void 0 : user.userRole) == 'ROLE_SUPER_ADMIN');
    }
    setToken(token) {
        console.warn('from set Token');
        localStorage.setItem('token', token);
        this._authService.getLoggedInUser().subscribe(user => {
            this.setUser(user);
        });
        return true;
    }
    getToken() {
        const token = localStorage.getItem('token');
        // if (!token) {
        //   this._router.navigate(['/user/login'], { queryParams: { 'wrong': true } });
        //   return;
        // }
        return token;
    }
    removeToken() {
        console.warn('from remove token');
        localStorage.removeItem('token');
        this.removeUser();
        return true;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_interfaces_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/application */ "9bhh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







class ProfileComponent {
    constructor(_authService) {
        this._authService = _authService;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new src_app_interfaces_application__WEBPACK_IMPORTED_MODULE_1__["UserImpl"]());
        this.user$ = this.user.asObservable();
    }
    ngOnInit() {
        this._authService.getLoggedInUser().subscribe(user => this.user.next(user));
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 31, vars: 12, consts: [[1, "h-80vh"], [1, "col-10", "mx-auto", "my-4"], ["color", "primary", 1, "rounded", "text-center"], [1, "col-10", "mx-auto"], [1, "table"], ["scope", "row"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Your profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 4, ctx.user)) == null ? null : tmp_0_0.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 6, ctx.user)) == null ? null : tmp_1_0.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 8, ctx.user)) == null ? null : tmp_2_0.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 10, ctx.user)) == null ? null : tmp_3_0.gender);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "HEqX":
/*!*******************************************************!*\
  !*** ./src/app/components/manage/manage.component.ts ***!
  \*******************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/util/util */ "bFed");
/* harmony import */ var _templates_add_movie_to_show_form_add_movie_to_show_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/add-movie-to-show-form/add-movie-to-show-form.component */ "io+b");
/* harmony import */ var _templates_show_form_show_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/show-form/show-form.component */ "sXLo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/application/application.service */ "nlYG");
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global/global.service */ "Nnfz");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "kyzu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");














function ManageComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cinema Hall list is empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { highlight: a0 }; };
function ManageComponent_mat_list_7_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_mat_list_7_mat_list_item_1_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const hall_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.onCinemaHallSelect(hall_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_mat_list_7_mat_list_item_1_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const hall_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r13.onEditCinemaHall(hall_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_mat_list_7_mat_list_item_1_Template_mat_icon_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const hall_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r14.onDeleteCinemaHall(hall_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hall_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, hall_r10.id == ctx_r9.selectedCinemaHallId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, hall_r10.name), " ");
} }
function ManageComponent_mat_list_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageComponent_mat_list_7_mat_list_item_1_Template, 9, 6, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.allAuditoriums);
} }
function ManageComponent_h1_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Select a Cinema Hall ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageComponent_mat_list_15_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_mat_list_15_mat_list_item_1_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const show_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.onShowSelect(show_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_mat_list_15_mat_list_item_1_Template_mat_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const show_r16 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.onEditShow(show_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_mat_list_15_mat_list_item_1_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const show_r16 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.onDeleteShow(show_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, show_r16.id == ctx_r15.selectedShowId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, show_r16.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", "Time: " + ctx_r15.formatTime(show_r16.startTime), " ");
} }
function ManageComponent_mat_list_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageComponent_mat_list_15_mat_list_item_1_Template, 13, 7, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.selectedShows);
} }
function ManageComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.onAddShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Add Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageComponent_h1_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Selected Show has no movies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageComponent_h1_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Select a Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ManageComponent_mat_list_23_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_mat_list_23_mat_list_item_1_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const shows_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.onEditMovie(shows_r24.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_mat_list_23_mat_list_item_1_Template_mat_icon_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const shows_r24 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r27.onDeleteMovie(shows_r24.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shows_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r23.getMovieImage(shows_r24.movieId), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, ctx_r23.getShowMovieName(shows_r24.movieId)) + " | lang: " + ctx_r23.getShowMovieLanguage(shows_r24.movieId) + " | start: " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 4, shows_r24.start, "longDate") + " | end: " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 7, shows_r24.end, "longDate"), " ");
} }
function ManageComponent_mat_list_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManageComponent_mat_list_23_mat_list_item_1_Template, 12, 10, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.selectedMovieShows);
} }
function ManageComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.onAddMovieToTheShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Add movie to the show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ManageComponent {
    constructor(_router, _dialog, _service, _globalService, _alertService, _activeRoute) {
        this._router = _router;
        this._dialog = _dialog;
        this._service = _service;
        this._globalService = _globalService;
        this._alertService = _alertService;
        this._activeRoute = _activeRoute;
    }
    ngOnInit() {
        this._globalService.getAllAuditoriums()
            .subscribe(halls => this.allAuditoriums = halls);
        this._globalService.getAllMovies()
            .subscribe(movies => this.allMovies = movies);
        this._activeRoute.queryParams
            .subscribe(param => {
            if (param['movie-added'])
                this._alertService.postionAlert('Movie Added');
            else if (param['auditorium-added'])
                this._alertService.postionAlert('Auditorium Added');
            // else if (param['show-added'])
            //   this._alertService.postionAlert('Show Added');
            // else if (param['movie-show-added'])
            //   this._alertService.postionAlert('Movie Show Added');
        });
    }
    onCinemaHallSelect(auditoriumId) {
        var _a;
        this.selectedCinemaHallId = auditoriumId;
        this.selectedShows = (_a = this.allAuditoriums.find((hall) => hall.id == auditoriumId)) === null || _a === void 0 ? void 0 : _a.shows;
        this.selectedShowId = 0;
        this.selectedMovieShows = [];
    }
    onShowSelect(showId) {
        var _a;
        this.selectedShowId = showId;
        this.selectedMovieShows = (_a = this.selectedShows.find((show) => show.id == showId)) === null || _a === void 0 ? void 0 : _a.movieShows;
    }
    getShowMovieName(movieId) {
        var _a;
        return (_a = this.allMovies.find(movie => movie.id == movieId)) === null || _a === void 0 ? void 0 : _a.name;
    }
    getShowMovieLanguage(movieId) {
        var _a;
        return (_a = this.allMovies.find(movie => movie.id == movieId)) === null || _a === void 0 ? void 0 : _a.language;
    }
    getMovieImage(movieId) {
        var _a;
        return (_a = this.allMovies.find(movie => movie.id == movieId)) === null || _a === void 0 ? void 0 : _a.image;
    }
    onAddCinemaHall() {
        this._router.navigate(['./add-auditorium']);
    }
    onAddMovie() {
        this._router.navigate(['./add-movie']);
    }
    onAddShow() {
        const dialog = this._dialog.open(_templates_show_form_show_form_component__WEBPACK_IMPORTED_MODULE_2__["ShowFormComponent"], {
            width: '80%',
            data: this.selectedShows
        });
        dialog.afterClosed().subscribe(result => {
            if (result === null || result === void 0 ? void 0 : result.show) {
                this._service.addShow(this.selectedCinemaHallId, result.show)
                    .subscribe(res => {
                    this._globalService.addShow(this.selectedCinemaHallId, res);
                    this._alertService.postionAlert('Show Added');
                    // this.selectedShows.push(res);
                }, err => this._alertService.postionAlert(err.error.message, 'danger-alert'));
            }
        }, (error) => console.log(error));
    }
    onAddMovieToTheShow() {
        var _a;
        const movieShows = (_a = this.selectedShows.
            find(show => show.id == this.selectedShowId)) === null || _a === void 0 ? void 0 : _a.movieShows;
        const dialog = this._dialog.open(_templates_add_movie_to_show_form_add_movie_to_show_form_component__WEBPACK_IMPORTED_MODULE_1__["AddMovieToShowFormComponent"], {
            width: '90%',
            data: {
                shows: movieShows,
                movies: this.allMovies
            }
        });
        dialog.afterClosed().subscribe(result => {
            if (result === null || result === void 0 ? void 0 : result.movieShow) {
                this._service.addMovieShow(this.selectedCinemaHallId, this.selectedShowId, result.movieShow)
                    .subscribe(res => {
                    if (res) {
                        this._globalService.addMovieShows(this.selectedCinemaHallId, this.selectedShowId, res);
                        this._alertService.postionAlert('Movie Show Added');
                    }
                    // this.selectedShows.find(show => show.id == this.selectedShowId)?.movieShows?.push(res);
                }, err => this._alertService.postionAlert(err.error.message, 'danger-alert'));
            }
        });
    }
    formatTime(time) {
        return src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_0__["Util"].formatTimeToAmOrPm(time);
    }
    onEditCinemaHall(auditoriumId) {
        alert(`edit ${auditoriumId}`);
    }
    onDeleteCinemaHall(auditoriumId) {
        alert(`delete ${auditoriumId}`);
    }
    onEditShow(showId) {
        alert(`edit show ${showId}`);
    }
    onDeleteShow(showId) {
        alert(`delete show: ${showId}`);
    }
    onEditMovie(movieId) {
        alert(`edit movie ${movieId}`);
    }
    onDeleteMovie(movieId) {
        alert(`delete movie ${movieId}`);
    }
}
ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManageComponent, selectors: [["app-manage"]], decls: 28, vars: 9, consts: [[1, "wrapper", "w-100", "my-2"], [1, "container-fluid", "row", "g-0", "h-90vh"], [1, "col-lg-3", "px-2", "border-3", "border-end", "row", "g-0"], [1, "py-2", "rounded", "text-center", "text-dark", "shadow-sm", "border", "border-2", "border-dark", "align-self-start"], [1, "overflow-auto", "h-70vh"], ["class", "text-danger text-center", 4, "ngIf"], ["role", "list", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "routerLink", "../add-auditorium", 1, "align-self-end", "mt-auto", "w-100", "d-block"], [1, "py-2", "rounded", "text-center", "text-dark", "shadow-sm", "align-self-start", "border", "border-2", "border-dark"], ["mat-raised-button", "", "class", "align-self-end mt-auto w-100 d-block", "color", "accent", 3, "click", 4, "ngIf"], [1, "col-lg-6", "px-2", "row", "g-0"], ["class", "text-warning text-center", 4, "ngIf"], [1, "row", "g-0", "align-self-end", "mt-auto", "col-12", "justify-content-between"], ["mat-raised-button", "", "routerLink", "../add-movie", "color", "primary", 1, "col-5", "text-capitalize"], ["mat-raised-button", "", "class", "col-5 text-capitalize", "color", "warn", 3, "click", 4, "ngIf"], [1, "text-danger", "text-center"], ["role", "list"], ["role", "listitem", "class", "position-relative options pe-cursor rounded", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["role", "listitem", 1, "position-relative", "options", "pe-cursor", "rounded", 3, "ngClass", "click"], [1, "w-100"], [1, "icon-holder", "w-auto"], ["aria-hidden", "false", "matTooltip", "Edit Cinema Hall", "aria-label", "edit icon", 1, "w-auto", "text-info", "me-1", "pe-cursor", "edit-icon", 3, "click"], ["aria-hidden", "false", "matTooltip", "Delete Cinema Hall", "aria-label", "delete icon", 1, "w-auto", "text-danger", "ms-1", "pe-cursor", "delete-icon", 3, "click"], [1, "w-100", "row", "g-0", "justify-content-around"], [1, "col-5"], ["aria-hidden", "false", "matTooltip", "Edit Show", "aria-label", "edit icon", 1, "w-auto", "text-info", "me-1", "pe-cursor", "edit-icon", 3, "click"], ["aria-hidden", "false", "matTooltip", "Delete Show", "aria-label", "delete icon", 1, "w-auto", "text-danger", "ms-1", "pe-cursor", "delete-icon", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "align-self-end", "mt-auto", "w-100", "d-block", 3, "click"], [1, "text-warning", "text-center"], ["role", "listitem", "class", "position-relative show-options pe-cursor rounded h-auto py-2", 4, "ngFor", "ngForOf"], ["role", "listitem", 1, "position-relative", "show-options", "pe-cursor", "rounded", "h-auto", "py-2"], ["aria-hidden", "", "height", "120", "width", "120", 1, "example-option-img", "me-2", "rounded", "d-inline-block", 3, "src"], ["aria-hidden", "false", "matTooltip", "Edit Movie Show", "aria-label", "edit icon", 1, "w-auto", "text-info", "me-1", "pe-cursor", "edit-icon", 3, "click"], ["aria-hidden", "false", "matTooltip", "Delete Movie Show", "aria-label", "delete icon", 1, "w-auto", "text-danger", "ms-1", "pe-cursor", "delete-icon", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "col-5", "text-capitalize", 3, "click"]], template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Cinema Halls ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ManageComponent_h1_6_Template, 2, 0, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ManageComponent_mat_list_7_Template, 2, 1, "mat-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Add Cinema Hall ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Shows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ManageComponent_h1_14_Template, 2, 0, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ManageComponent_mat_list_15_Template, 2, 1, "mat-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ManageComponent_button_16_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ManageComponent_h1_21_Template, 2, 0, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ManageComponent_h1_22_Template, 2, 0, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ManageComponent_mat_list_23_Template, 2, 1, "mat-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Add New Movie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ManageComponent_button_27_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.allAuditoriums);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.allAuditoriums);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedShowId && !ctx.selectedMovieShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedShowId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedShowId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedShowId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: radial-gradient(\r\n    circle,\r\n    rgba(63, 94, 251, 1) 0%,\r\n    rgba(252, 70, 107, 1) 100%\r\n  );\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFDVjtFQUNFLFVBQVU7QUFDWjtBQUVBLFVBQVU7QUFDVjtFQUNFOzs7O0dBSUM7QUFDSDtBQUVBLFdBQVc7QUFDWDtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJtYW5hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgIGNpcmNsZSxcclxuICAgIHJnYmEoNjMsIDk0LCAyNTEsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTIsIDcwLCAxMDcsIDEpIDEwMCVcclxuICApO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1, a2, a3) { return { "bg-dark": a0, bgColor: a1, "text-white": a2, textColor: a3 }; };
function FooterComponent_footer_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Designed & Developed by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Abishek S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.fixed ? "fixed-bottom" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c0, !ctx_r0.bgColor, ctx_r0.bgColor, !ctx_r0.textColor, ctx_r0.textColor));
} }
class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { fixed: "fixed", bgColor: "bgColor", textColor: "textColor" }, decls: 1, vars: 1, consts: [["class", "row w-100 justify-content-around mx-0 footer", 3, "ngClass", 4, "ngIf"], [1, "row", "w-100", "justify-content-around", "mx-0", "footer", 3, "ngClass"], [1, "text-center", "text-white", 2, "height", "50px", "line-height", "50px", 3, "ngClass"], ["target", "_blank", 1, "text-decoration-none", "mx-2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_footer_0_Template, 6, 7, "footer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url !== "/select-seats");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: white !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n  .mat-input-element {\r\n  caret-color: #fff !important;\r\n}\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n  .mat-form-field-label {\r\n  color: #fff !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #fff !important;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #fff;\r\n}\r\n  .mat-input-element::placeholder {\r\n  color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQzs7O0VBR0Usa0NBQWtDO0FBQ3BDO0FBRUEsOEJBQThCO0FBQzlCOzs7RUFHRSw0QkFBNEI7QUFDOUI7QUFFQSxxQ0FBcUM7QUFDckM7OztFQUdFLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsMkJBQTJCO0FBQzdCO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0EsK0JBQStCO0FBQy9CO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC8vIG1hdC1pY29uLXN0ZXBwZXIgc2VsZWN0ZWQgY29sb3IgY2hhbmdlICAqL1xyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy9tYXQtaW5wdXQgZm9jdXNlZCBjb2xvciAqL1xyXG46Om5nLWRlZXBcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBvdXRsaW5lIGNvbG9yICovXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAvKiBvcGFjaXR5OiAwLjghaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaW5wdXQgY2FyZW50IGNvbG9yICovXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBjYXJlbnQgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCxcclxuOjpuZy1kZWVwIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWxhYmVsIG5vcm1hbCBzdGF0ZSBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvL2lucHV0IG91dGxpbmUgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLy8gbWF0LWxhYmVsIGZvY3VzZWQgc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1sYWJlbCBlcnJvciBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdCAubWF0LXNlbGVjdC10cmlnZ2VyIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Nnfz":
/*!***************************************************!*\
  !*** ./src/app/services/global/global.service.ts ***!
  \***************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _application_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application/application.service */ "nlYG");




class GlobalService {
    constructor(_service) {
        this._service = _service;
        this.auditoriums = [];
        this.movies = [];
        this.movieShows = [];
        this.nowPlayingMovies = [];
        this.upComingMovies = [];
    }
    getAllAuditoriums() {
        if (!this.auditoriums || this.auditoriums.length < 1) {
            console.warn("Calling All Auditoriums");
            return this._service.getAllAuditoriums().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(halls => {
                this.auditoriums = halls;
                console.table(this.auditoriums);
                return this.auditoriums;
            }));
        }
        else
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.auditoriums);
    }
    getAllMovies() {
        if (!this.movies || this.movies.length < 1) {
            console.warn("Calling All Movies");
            return this._service.getAllMovies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(movies => {
                this.movies = movies;
                return this.movies;
            }));
        }
        else
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.movies);
    }
    getAllMovieShows() {
        if (!this.movieShows || this.movieShows.length < 1) {
            console.warn("Calling All Movie Shows");
            return this._service.getAllMovieShows().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(m_shows => {
                this.movieShows = m_shows;
                return this.movieShows;
            }));
        }
        else
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.movieShows);
    }
    getAllUpComingMovies() {
        return this._service.getAllUpComingMovieShows().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(m_shows => {
            this.upComingMovies = [];
            m_shows.forEach(m_show => {
                this.getAllMovies().subscribe(movies => {
                    this.upComingMovies.push(movies.find(movie => movie.id == m_show.movieId));
                });
            });
            console.error(this.upComingMovies);
            return this.upComingMovies;
        }));
    }
    getAllNowPlayingMovies() {
        return this._service.getAllNowPlayingMovieShows().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(m_shows => {
            this.nowPlayingMovies = [];
            m_shows.forEach(m_show => {
                this.getAllMovies().subscribe(movies => {
                    this.nowPlayingMovies.push(movies.find(movie => movie.id == m_show.movieId));
                });
            });
            return this.nowPlayingMovies;
        }));
    }
    getAllNowPlayingAndUpComing() {
        return this._service.getAllNowPlayingAndUpComingMovieShows().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(m_shows => {
            this.nowPlayingMovies = [];
            m_shows.forEach(m_show => {
                this.getAllMovies().subscribe(movies => {
                    this.nowPlayingMovies.push(movies.find(movie => movie.id == m_show.movieId));
                });
            });
            return this.nowPlayingMovies;
        }));
    }
    getFewNowPlayingMovies() {
        return this._service.getFewNowPlayingMovieShows().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(m_shows => {
            this.nowPlayingMovies = [];
            m_shows.forEach(m_show => {
                this.getAllMovies().subscribe(movies => {
                    this.nowPlayingMovies.push(movies.find(movie => movie.id == m_show.movieId));
                });
            });
            return this.nowPlayingMovies;
        }));
    }
    getFewUpComingMovies() {
        return this._service.getFewUpComingMovieShows().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(m_shows => {
            this.nowPlayingMovies = [];
            m_shows.forEach(m_show => {
                this.getAllMovies().subscribe(movies => {
                    this.nowPlayingMovies.push(movies.find(movie => movie.id == m_show.movieId));
                });
            });
            return this.nowPlayingMovies;
        }));
    }
    addMovie(movie) {
        this.movies.push(movie);
        console.table(this.movies);
    }
    addAuditorium(auditorium) {
        this.auditoriums.push(auditorium);
        console.table(this.auditoriums);
    }
    addShow(auditoriumId, show) {
        var _a;
        let shows = (_a = this.auditoriums.find(hall => hall.id == auditoriumId)) === null || _a === void 0 ? void 0 : _a.shows;
        if (!shows)
            shows = [];
        shows.push(show);
        console.table(shows);
    }
    addMovieShows(auditoriumId, showId, movieShow) {
        var _a, _b;
        let m_shows = (_b = (_a = this.auditoriums.find(hall => hall.id == auditoriumId)) === null || _a === void 0 ? void 0 : _a.shows.find(show => show.id == showId)) === null || _b === void 0 ? void 0 : _b.movieShows;
        if (!m_shows)
            m_shows = [];
        m_shows.push(movieShow);
        console.table(m_shows);
    }
    addBooking(auditoriumId, showId, movieShowId, booking) {
        var _a, _b, _c, _d;
        let bookings = (_d = (_c = (_b = (_a = this.auditoriums
            .find(hall => hall.id == auditoriumId)) === null || _a === void 0 ? void 0 : _a.shows.find(show => show.id == showId)) === null || _b === void 0 ? void 0 : _b.movieShows) === null || _c === void 0 ? void 0 : _c.find(m_show => m_show.id == movieShowId)) === null || _d === void 0 ? void 0 : _d.bookings;
        bookings.push(booking);
        console.table(bookings);
    }
    getAuditoriumNames() {
        return this.getAllAuditoriums().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((halls) => {
            return halls ? [...new Set(halls.map(hall => hall.name))] : [];
        }));
    }
    getMovieNames() {
        return this.getAllMovies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((movies) => {
            return movies ? [...new Set(movies.map(movie => movie.name))] : [];
        }));
    }
    setTempSelectMembers(tempSelectMembers) {
        this.tempSelectMembers = tempSelectMembers;
    }
    getTempSelectMembers() {
        return this.tempSelectMembers;
    }
    setTempScreen(tempScreen) {
        this.tempScreen = tempScreen;
    }
    getTempScreen() {
        return this.tempScreen;
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_application_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"])); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NujD":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-bookings/my-bookings.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBookingsComponent", function() { return MyBookingsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/util/util */ "bFed");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/application/application.service */ "nlYG");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global/global.service */ "Nnfz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");










const _c0 = function (a0, a1) { return { "btn-dark text-white": a0, "btn-info": a1 }; };
function MyBookingsComponent_mat_card_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MyBookingsComponent_mat_card_4_div_3_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const booking_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r4.onBookingChange(booking_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const booking_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", booking_r2.id == ctx_r1.selectedBookingId)("id", "booking-" + i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", "booking-" + i_r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, booking_r2.id == ctx_r1.selectedBookingId, booking_r2.id != ctx_r1.selectedBookingId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("Booking " + (i_r3 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](booking_r2.bookedOn);
} }
function MyBookingsComponent_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MyBookingsComponent_mat_card_4_div_3_Template, 7, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Movie Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Total seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Seat No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_7_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 11, ctx_r0.allBookings$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 13, ctx_r0.movieImage$), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 15, ctx_r0.movieName$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 19, ctx_r0.movieName$)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 21, ctx_r0.auditoriumName$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 23, ctx_r0.movieLanguage$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 25, ctx_r0.noOfTickets$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 27, ctx_r0.selectedSeats$)) == null ? null : tmp_7_0.join(", "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](50, 29, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 32, ctx_r0.amount$), "INR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](58, 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 37, ctx_r0.dateOfBooking$), "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.formatTime(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 39, ctx_r0.showTiming$)), " ");
} }
class MyBookingsComponent {
    constructor(_appService, _userService, _globalService) {
        this._appService = _appService;
        this._userService = _userService;
        this._globalService = _globalService;
        this.present = true;
        this.heading = 'Your booking list';
        this.allBookings = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.bookings);
        this.allBookings$ = this.allBookings.asObservable();
        this.auditoriumName$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.showName$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.showTiming$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.movieName$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.movieLanguage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.dateOfBooking$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](new Date());
        this.movieImage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.noOfTickets$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.selectedSeats$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.amount$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.selectedBookingId = 0;
    }
    ngOnInit() {
        var _a;
        const userId = (_a = this._userService.getUser()) === null || _a === void 0 ? void 0 : _a.id;
        this._appService.getAllUserBooking(userId).subscribe(bookings => {
            if (bookings.length < 1) {
                this.heading = 'Booking list is empty';
                this.present = false;
            }
            const all_bookings = bookings.sort((booking1, booking2) => src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_2__["Util"].sortByDates(booking1.dateOfBooking, booking2.dateOfBooking));
            this.allBookings.next(all_bookings);
            this.setBooking(all_bookings[0]);
        });
    }
    formatTime(time) {
        return src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_2__["Util"].formatTimeToAmOrPm(time);
    }
    onBookingChange(bookingId) {
        if (this.selectedBookingId != bookingId) {
            this.allBookings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(bookings => {
                const booking = bookings.find(booking => booking.id == bookingId);
                this.setBooking(booking);
            }));
        }
    }
    setBooking(booking) {
        this.selectedBookingId = booking === null || booking === void 0 ? void 0 : booking.id;
        this.amount$.next(booking === null || booking === void 0 ? void 0 : booking.amount);
        this.dateOfBooking$.next(booking === null || booking === void 0 ? void 0 : booking.dateOfBooking);
        this.noOfTickets$.next(booking === null || booking === void 0 ? void 0 : booking.totalSeats);
        this.selectedSeats$.next(booking === null || booking === void 0 ? void 0 : booking.seatNumbers);
        this._globalService.getAllAuditoriums().subscribe(halls => {
            const auditorium = halls.find(hall => hall.id == (booking === null || booking === void 0 ? void 0 : booking.bookingDetails.auditoriumId));
            this.auditoriumName$.next(auditorium === null || auditorium === void 0 ? void 0 : auditorium.name);
            const show = auditorium === null || auditorium === void 0 ? void 0 : auditorium.shows.find(show => show.id == (booking === null || booking === void 0 ? void 0 : booking.bookingDetails.showId));
            this.showName$.next(show === null || show === void 0 ? void 0 : show.name);
            this.showTiming$.next(show === null || show === void 0 ? void 0 : show.startTime);
        });
        this._globalService.getAllMovies().subscribe(movies => {
            const movie = movies.find(movie => movie.id == (booking === null || booking === void 0 ? void 0 : booking.bookingDetails.movieId));
            this.movieImage$.next(movie === null || movie === void 0 ? void 0 : movie.image);
            this.movieLanguage$.next(movie === null || movie === void 0 ? void 0 : movie.language);
            this.movieName$.next(movie === null || movie === void 0 ? void 0 : movie.name);
        });
    }
}
MyBookingsComponent.ɵfac = function MyBookingsComponent_Factory(t) { return new (t || MyBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"])); };
MyBookingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MyBookingsComponent, selectors: [["app-my-bookings"]], decls: 5, vars: 3, consts: [[1, "col-10", "mx-auto", "my-4", "h-80vh"], ["color", "primary", 1, "rounded", "text-center"], [1, "text-center", "mx-auto", 3, "ngClass"], [4, "ngIf"], [1, "row", "g-0", "col-12"], [1, "col-2", "p-2"], ["class", "my-2 col-12 text-start", 4, "ngFor", "ngForOf"], [1, "col-10", "px-2"], [1, "row", "g-0", "m-3", "p-2", "shadow-sm", "border"], [1, "col-4", "mx-auto", "text-center", "px-1", "position-relative", "overflow-hidden"], ["height", "400", "width", "300", 3, "src", "alt"], [1, "movie-name", "position-absolute", "w-100", "py-2", "fs-5", "bg-dark", "text-white", "start-0", "bottom-0"], [1, "col-8", "px-2", "details", "h-100", "my-auto"], [1, "table", "ms-3"], ["scope", "col", "colspan", "2", 1, "text-center", "fs-4", "text-capitalize"], ["scope", "row"], [1, "m-0", "d-inline-block"], [1, "text-muted", "text-success"], [1, "my-2", "col-12", "text-start"], ["type", "radio", "autocomplete", "off", "name", "booking", 1, "btn-check", 3, "checked", "id", "change"], [1, "btn", "btn-sm", "w-100", "clearfix", 3, "for", "ngClass"], [1, "d-inline-block", "float-start"], [1, "d-inline-block", "float-end"]], template: function MyBookingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MyBookingsComponent_mat_card_4_Template, 73, 41, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.present ? "" : "text-danger h-80vh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.present);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1ib29raW5ncy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "RYOk":
/*!*************************************************************************!*\
  !*** ./src/app/services/token-interceptor/token-interceptor.service.ts ***!
  \*************************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "CFL1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class TokenInterceptorService {
    constructor(_injector, _router) {
        this._injector = _injector;
        this._router = _router;
    }
    intercept(req, next) {
        const userService = this._injector.get(_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]);
        const token = userService.getToken();
        if (req.headers.get('skip') && token) {
            req.headers.delete('skip');
            req = this.setToken(req, token);
        }
        else if (!req.headers.get("skip")) {
            req = this.setToken(req, token);
        }
        // return next.handle(req);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            var _a;
            const error = err || ((_a = err.error) === null || _a === void 0 ? void 0 : _a.message) || err.statusText;
            if (error == 'Invalid Token') {
                console.warn(error);
                userService.removeToken();
                this._router.navigate(['/user/login'], { queryParams: { 'error': `${error}` } });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
    setToken(req, token) {
        if (!token)
            this._router.navigate(['/user/login'], { queryParams: { 'login': true } });
        return req.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _commons_global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = _commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].APP_NAME;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UyxY":
/*!*****************************************************************!*\
  !*** ./src/app/components/templates/screen/screen.component.ts ***!
  \*****************************************************************/
/*! exports provided: ScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenComponent", function() { return ScreenComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/util/util */ "bFed");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global/global.service */ "Nnfz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/application/application.service */ "nlYG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function ScreenComponent_ng_container_34_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" EXECUTIVE ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r3.generalPrice$), "INR"), " ");
} }
function ScreenComponent_ng_container_34_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" SILVER ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r4.silverPrice$), "INR"), " ");
} }
function ScreenComponent_ng_container_34_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" GOLD ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r5.goldPrice$), "INR"), " ");
} }
function ScreenComponent_ng_container_34_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 24);
} }
const _c0 = function (a0, a1, a2) { return { "text-white": a0, "text-info": a1, "text-danger": a2 }; };
function ScreenComponent_ng_container_34_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ScreenComponent_ng_container_34_ng_container_9_div_1_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScreenComponent_ng_container_34_ng_container_9_Template_input_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.addSeat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "chair ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const seat_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r8 == 3 || i_r8 == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", item_r1 + seat_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.isAdded(item_r1 + seat_r7))("disabled", ctx_r6.isSeatAlreadySelected(item_r1 + seat_r7))("id", item_r1 + seat_r7)("value", item_r1 + seat_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", item_r1 + seat_r7)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](8, _c0, !ctx_r6.isAdded(item_r1 + seat_r7), ctx_r6.isAdded(item_r1 + seat_r7), ctx_r6.isSeatAlreadySelected(item_r1 + seat_r7)));
} }
function ScreenComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ScreenComponent_ng_container_34_h3_1_Template, 4, 6, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ScreenComponent_ng_container_34_h3_2_Template, 4, 6, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ScreenComponent_ng_container_34_h3_3_Template, 4, 6, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ScreenComponent_ng_container_34_ng_container_9_Template, 6, 12, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.tempSeatRows);
} }
class ScreenComponent {
    constructor(_service, _router, _appService) {
        this._service = _service;
        this._router = _router;
        this._appService = _appService;
        this.tempSeatColumns = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
        ];
        this.tempSeatRows = [...Array(11).keys()].filter(num => num > 0);
        this.goldPrice$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.silverPrice$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.generalPrice$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.auditoriumName$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.nowSelectedSeats = new Set();
        this.totalAmount = 0;
        this.gold = 0;
        this.silver = 0;
        this.general = 0;
    }
    ngOnInit() {
        this.selectMembers = this._service.getTempSelectMembers();
        if (!this.selectMembers)
            this._router.navigate(['/home'], { queryParams: { 'booking': 'false' } });
        // this.selectedDate$.next(data.date);
        // this.showTiming$.next(data.showTime);
        // this.selectedMovieName$.next(data.movieName);
        // this.selectedMovieLanguage$.next(data.movieLanguage);
        this.seatsToBeSelected = this.selectMembers.seats;
        // this.avalibleSeats = 100 - data.bookedSeats;
        // this.alreadySelectedSeats = data.bookedSeatNumbers;
        this._appService.getMovieShow(this.selectMembers.movieShowId).subscribe(m_show => {
            var _a, _b, _c;
            this.goldPrice$.next((_a = m_show.price) === null || _a === void 0 ? void 0 : _a.gold);
            this.silverPrice$.next((_b = m_show.price) === null || _b === void 0 ? void 0 : _b.silver);
            this.generalPrice$.next((_c = m_show.price) === null || _c === void 0 ? void 0 : _c.general);
        });
    }
    addSeat(event) {
        const value = event.target.value;
        if (this.selectMembers.bookedSeatNumbers.indexOf(value) >= 0)
            return false;
        const seats = this.nowSelectedSeats;
        if (seats.has(value) && seats.delete(value)) {
            if (value.startsWith('J') || value.startsWith('I') || value.startsWith('H'))
                this.totalAmount -= this.goldPrice$.value;
            else if (value.startsWith('A') || value.startsWith('B') || value.startsWith('C'))
                this.totalAmount -= this.generalPrice$.value;
            else
                this.totalAmount -= this.silverPrice$.value;
            this.seatsToBeSelected++;
            return false;
        }
        else {
            if (this.seatsToBeSelected == 0)
                return false;
            seats.add(value);
            if (value.startsWith('J') || value.startsWith('I') || value.startsWith('H'))
                this.totalAmount += this.goldPrice$.value;
            else if (value.startsWith('A') || value.startsWith('B') || value.startsWith('C'))
                this.totalAmount += this.generalPrice$.value;
            else
                this.totalAmount += this.silverPrice$.value;
            this.seatsToBeSelected--;
            return true;
        }
    }
    isAdded(value) {
        return this.nowSelectedSeats.has(value) ? true : false;
    }
    isSeatAlreadySelected(value) {
        return this.selectMembers.bookedSeatNumbers.indexOf(value) >= 0 ? true : false;
    }
    getSelectedSeats() {
        return [...this.nowSelectedSeats].join(', ');
    }
    formatTime(time) {
        return src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatTimeToAmOrPm(time);
    }
    onProceed() {
        const tempScreen = {
            amount: this.totalAmount,
            selectedSeatNumbers: [...this.nowSelectedSeats],
            selectedSeats: this.selectMembers.seats,
        };
        this._service.setTempScreen(tempScreen);
        this._router.navigate(['./payment']);
    }
}
ScreenComponent.ɵfac = function ScreenComponent_Factory(t) { return new (t || ScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"])); };
ScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ScreenComponent, selectors: [["app-screen"]], decls: 37, vars: 12, consts: [[1, "screen-container", "w-100", "py-3", "bg-dark", "text-white"], [1, "d-inline-block", "text-warning", "mx-auto", "text-center", "py-2", "w-100"], [1, "my-auto", "row", "g-0", "align-content-center"], [1, "ticket-details", "mb-3", "row", "g-0", "justify-content-between"], [1, "col-4", "text-center"], [1, "lead", "text-white"], [1, "lead"], [1, "lead", "text-danger"], ["mat-raised-button", "", "type", "submit", 3, "disabled", "click"], [1, "screen-layout", "position-relative", "w-100", "bg-dark", "text-white", "p-sm-0"], [1, "bg-dark", "text-white", "text-center"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], [1, "screen", "col-10", "mx-auto", "py-3", "text-white", "bg-danger", "text-center", "mt-sm-1", "mt-lg-4"], ["class", "text-danger m-1", 4, "ngIf"], [1, "justify-content-center", "py-1", "h-auto", "px-sm-0"], [1, "row", "col-12", "g-0", "mx-auto", "justify-content-center", "px-sm-0", "text-center"], [1, "col-1", "text-center", "text-info", "fs-3"], [1, "col-auto"], [1, "text-danger", "m-1"], ["class", "me-sm-1 mx-lg-4 d-inline", 4, "ngIf"], ["type", "checkbox", 1, "btn-check", 3, "name", "checked", "disabled", "id", "value", "click"], [1, "col-auto", "p-sm-0", "me-sm-1", "ms-sm-0", "mx-lg-2", "pe-cursor", "h-auto", 3, "for", "ngClass"], ["aria-hidden", "false", "aria-label", "Example home icon", 1, "fs-sm-5", "fs-lg-3", "w-auto", "h-auto"], [1, "me-sm-1", "mx-lg-4", "d-inline"]], template: function ScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "NOTE: do not refresh the page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Movie: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Time: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Date: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Seats Selected: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Amount: \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScreenComponent_Template_button_click_29_listener() { return ctx.onProceed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Proceed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ScreenComponent_ng_container_34_Template, 10, 5, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Screen is this way ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, ctx.selectMembers.movieName));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.formatTime(ctx.selectMembers.showTime));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 9, ctx.selectMembers.date, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getSelectedSeats());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.seatsToBeSelected != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tempSeatColumns.reverse());
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["body[_ngcontent-%COMP%], header[_ngcontent-%COMP%] {\r\n  background-color: #212529 !important;\r\n  margin: 0px !important;\r\n}\r\n\r\n.text-white.text-danger[_ngcontent-%COMP%] {\r\n  color: red !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC13aGl0ZS50ZXh0LWRhbmdlciB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function LoginComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r0.alertDanger$) ? "alert-danger" : "alert-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r0.alertMessage$), " ");
} }
function LoginComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.usernameErrors);
} }
function LoginComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.passwordErrors);
} }
class LoginComponent {
    constructor(_fb, _authService, _userService, _router, _activeRoute) {
        this._fb = _fb;
        this._authService = _authService;
        this._userService = _userService;
        this._router = _router;
        this._activeRoute = _activeRoute;
        this.showAlert$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.alertDanger$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.alertMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.hidePassword = true;
    }
    ngOnInit() {
        var _a;
        this.redirect = (_a = window.history.state) === null || _a === void 0 ? void 0 : _a.redirect;
        // console.log(this._globalService.isLoggedIn());
        if (this._userService.isLoggedIn())
            this._router.navigate(['/home'], { queryParams: { 'logged-in': true } });
        this._activeRoute.queryParams
            .subscribe(param => {
            if (param['sign-up']) {
                this.showAlert$.next(true);
                this.alertDanger$.next(false);
                this.alertMessage$.next('Registration successful. Please login');
            }
            else if (param['logout']) {
                this.showAlert$.next(true);
                this.alertDanger$.next(false);
                this.alertMessage$.next('Logout successful.');
            }
            else if (param['booking']) {
                this.showAlert$.next(true);
                this.alertDanger$.next(true);
                this.alertMessage$.next('Please Login to book tickets.');
            }
            else if (param['wrong']) {
                this.showAlert$.next(true);
                this.alertDanger$.next(true);
                this.alertMessage$.next('Something went wrong please login.');
            }
            else if (param['error']) {
                this.showAlert$.next(true);
                this.alertDanger$.next(true);
                this.alertMessage$.next(param['error']);
            }
            else if (param['login']) {
                this.showAlert$.next(true);
                this.alertDanger$.next(true);
                this.alertMessage$.next(param['error']);
            }
        });
        this.loginForm = this._fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)])
        });
    }
    get usernameErrors() {
        var _a;
        const username = this.loginForm.get('username');
        if (username === null || username === void 0 ? void 0 : username.hasError('required'))
            return 'Username cannot be empty';
        else if (username === null || username === void 0 ? void 0 : username.hasError('minlength'))
            return `Username should at-least be ${(_a = username === null || username === void 0 ? void 0 : username.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength} characters`;
        return '';
    }
    get passwordErrors() {
        var _a;
        const password = this.loginForm.get('password');
        if (password === null || password === void 0 ? void 0 : password.hasError('required'))
            return 'Password cannot be empty';
        else if (password === null || password === void 0 ? void 0 : password.hasError('minlength'))
            return `Password should at-least be ${(_a = password === null || password === void 0 ? void 0 : password.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength} characters`;
        return '';
    }
    onSubmit() {
        if (this.loginForm.valid)
            this._authService.loginUser(this.loginForm.value)
                .subscribe(res => {
                if (res.token)
                    if (this._userService.setToken(res.token))
                        this._router.navigate([this.redirect ? this.redirect : '/home'], { queryParams: { 'login': true } });
                    else
                        this._router.navigate(['/home'], { queryParams: { 'logged-in': true } });
            }, err => {
                this.alertMessage$.next(err);
                console.warn(err);
                this.showAlert$.next(true);
                this.alertDanger$.next(true);
            });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 11, consts: [[1, "px-3", "my-auto"], ["class", "lead mb-2 p-2 rounded", 3, "ngClass", 4, "ngIf"], [1, "fs-2", "py-4"], [1, "example-container"], ["action", "#", 1, "row", "w-100", "g-0", 3, "formGroup", "ngSubmit"], [1, "col-12", "mb-3"], ["appearance", "outline", 1, "text-white", "d-block"], ["matInput", "", "type", "text", "formControlName", "username", 1, "fs-5"], [4, "ngIf"], ["matInput", "", "formControlName", "password", 1, "fs-5", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "col-12", 3, "color"], [1, "lead", "mb-2", "p-2", "rounded", 3, "ngClass"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_p_1_Template, 4, 6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Enter your username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LoginComponent_mat_error_12_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() { return ctx.hidePassword = !ctx.hidePassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, ctx.showAlert$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.usernameErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", !ctx.loginForm.valid ? "accent" : "primary");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_classes_validators_user_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/validators/user-validator */ "reY5");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function RegisterComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r0.alertDanger$) ? "alert-danger" : "alert-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r0.alertMessage$), " ");
} }
function RegisterComponent_mat_hint_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Checking For uniqueness...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.emailErrors);
} }
function RegisterComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.nameErrors);
} }
function RegisterComponent_mat_hint_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Checking For uniqueness...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.mobileErrors);
} }
function RegisterComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.passwordErrors);
} }
function RegisterComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sex_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", sex_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sex_r10.name, " ");
} }
function RegisterComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.passwordErrors);
} }
function RegisterComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.termsErrors);
} }
class RegisterComponent {
    constructor(_fb, _router, _auth, _validator, _userService) {
        this._fb = _fb;
        this._router = _router;
        this._auth = _auth;
        this._validator = _validator;
        this._userService = _userService;
        this.showAlert$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.alertDanger$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.alertMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.hidePassword = true;
        this.genders = [
            { name: 'Male', selected: true },
            { name: 'Female', selected: false }
        ];
    }
    ngOnInit() {
        if (this._userService.isLoggedIn())
            this._router.navigate(['/home'], { queryParams: { 'logged-in': true } });
        this.registerForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-zA-Z ]+$')
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
            ], this._validator.uniqueEmail),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50),
            ]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]{10}$')
            ], this._validator.uniqueMobile),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Male', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)
            ]),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](true, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue)
        });
    }
    get nameErrors() {
        var _a, _b;
        const name = this.registerForm.get('name');
        if (name === null || name === void 0 ? void 0 : name.hasError('required'))
            return 'Name cannot be empty';
        else if (name === null || name === void 0 ? void 0 : name.hasError('minlength'))
            return `Name should at-least be ${(_a = name === null || name === void 0 ? void 0 : name.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength} characters`;
        else if (name === null || name === void 0 ? void 0 : name.hasError('maxlength'))
            return `Name should not exceed ${(_b = name === null || name === void 0 ? void 0 : name.errors) === null || _b === void 0 ? void 0 : _b.minlength.requiredLength} characters`;
        else if (name === null || name === void 0 ? void 0 : name.hasError('pattern'))
            return 'Invalid Name';
        return '';
    }
    get emailErrors() {
        var _a, _b;
        const email = this.registerForm.get('email');
        if (email === null || email === void 0 ? void 0 : email.hasError('required'))
            return 'Email cannot be empty';
        else if (email === null || email === void 0 ? void 0 : email.hasError('minlength'))
            return `Email should at-least be ${(_a = email === null || email === void 0 ? void 0 : email.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength} characters`;
        else if (email === null || email === void 0 ? void 0 : email.hasError('maxlength'))
            return `Email should not exceed ${(_b = email === null || email === void 0 ? void 0 : email.errors) === null || _b === void 0 ? void 0 : _b.minlength.requiredLength} characters`;
        else if (email === null || email === void 0 ? void 0 : email.hasError('email'))
            return 'Invalid Email';
        else if (email === null || email === void 0 ? void 0 : email.hasError('unique'))
            return 'Email already exists';
        return '';
    }
    get passwordErrors() {
        var _a, _b;
        const password = this.registerForm.get('password');
        if (password === null || password === void 0 ? void 0 : password.hasError('required'))
            return 'Password cannot be empty';
        else if (password === null || password === void 0 ? void 0 : password.hasError('minlength'))
            return `Password should at-least be ${(_a = password === null || password === void 0 ? void 0 : password.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength} characters`;
        else if (password === null || password === void 0 ? void 0 : password.hasError('maxlength'))
            return `Password should not exceed ${(_b = password === null || password === void 0 ? void 0 : password.errors) === null || _b === void 0 ? void 0 : _b.minlength.requiredLength} characters`;
        return '';
    }
    get mobileErrors() {
        var _a, _b, _c, _d;
        const mobile = this.registerForm.get('mobile');
        if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('required'))
            return 'Mobile cannot be empty';
        else if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('minlength'))
            return `Mobile should at-least be ${(_b = (_a = mobile === null || mobile === void 0 ? void 0 : mobile.errors) === null || _a === void 0 ? void 0 : _a.minlength) === null || _b === void 0 ? void 0 : _b.requiredLength} characters`;
        else if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('maxlength'))
            return `Mobile should not exceed ${(_d = (_c = mobile === null || mobile === void 0 ? void 0 : mobile.errors) === null || _c === void 0 ? void 0 : _c.maxlength) === null || _d === void 0 ? void 0 : _d.requiredLength} characters`;
        else if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('pattern'))
            return `Invalid mobile number`;
        else if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('unique'))
            return 'Mobile already exists';
        return '';
    }
    get termsErrors() {
        const terms = this.registerForm.get('terms');
        if ((terms === null || terms === void 0 ? void 0 : terms.hasError('required')) && this.registerForm.touched)
            return 'Please accept terms and conditions';
        return '';
    }
    get email() {
        return this.registerForm.get('email');
    }
    get mobile() {
        return this.registerForm.get('mobile');
    }
    onSubmit() {
        const sub = this._auth.registerUser(this.registerForm.value)
            .subscribe(res => this._router.navigate(['/user/login'], { queryParams: { 'sign-up': true } }), err => {
            this.showAlert$.next(true);
            this.alertDanger$.next(true);
            this.alertMessage$.next('Something went wrong');
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_classes_validators_user_validator__WEBPACK_IMPORTED_MODULE_5__["UserValidator"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 51, vars: 18, consts: [[1, "px-3", "my-auto"], ["class", "lead mb-2 p-2 rounded", 3, "ngClass", 4, "ngIf"], [1, "fs-2", "py-4"], [1, "example-container"], [1, "row", "w-100", "g-0", 3, "formGroup", "ngSubmit"], [1, "col-12", "mb-2", "px-lg-1"], ["appearance", "outline", 1, "d-block", "text-white"], ["matInput", "", "type", "email", "formControlName", "email", 1, "fs-5"], ["class", "text-warning", 4, "ngIf"], [4, "ngIf"], [1, "col-sm-12", "col-md-12", "col-lg-6", "mb-2", "px-lg-1"], ["matInput", "", "type", "text", "formControlName", "name", 1, "fs-5"], ["matPrefix", ""], ["matInput", "", "type", "text", "formControlName", "mobile", 1, "fs-5"], ["matInput", "", "formControlName", "password", 1, "fs-5", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["formControlName", "gender", 1, "text-white", "fs-5"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-md-12", "mb-2"], ["formControlName", "terms", 1, "example-margin"], ["mat-raised-button", "", "type", "submit", 1, "col-12", 3, "color"], [1, "lead", "mb-2", "p-2", "rounded", 3, "ngClass"], [1, "text-warning"], [3, "value"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_p_1_Template, 4, 6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Register Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Enter your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RegisterComponent_mat_hint_12_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RegisterComponent_mat_error_13_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Enter your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RegisterComponent_mat_error_19_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Enter your Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "+91 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RegisterComponent_mat_hint_27_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, RegisterComponent_mat_error_28_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, RegisterComponent_mat_error_34_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_35_listener() { return ctx.hidePassword = !ctx.hidePassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Select Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, RegisterComponent_mat_option_43_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, RegisterComponent_mat_error_44_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Agree to terms & conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, RegisterComponent_mat_error_48_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 16, ctx.showAlert$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.email.pending);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nameErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile.pending);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobileErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.termsErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", !ctx.registerForm.valid ? "accent" : "primary");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: white !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n  .mat-input-element {\r\n  caret-color: #fff !important;\r\n}\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n  .mat-form-field-label {\r\n  color: #fff !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #fff !important;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #fff;\r\n}\r\n  .mat-input-element::placeholder {\r\n  color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DOzs7RUFHRSxrQ0FBa0M7QUFDcEM7QUFFQSw4QkFBOEI7QUFDOUI7OztFQUdFLDRCQUE0QjtBQUM5QjtBQUVBLHFDQUFxQztBQUNyQzs7O0VBR0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5QjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSwyQkFBMkI7QUFDN0I7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQSwrQkFBK0I7QUFDL0I7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvLyBtYXQtaWNvbi1zdGVwcGVyIHNlbGVjdGVkIGNvbG9yIGNoYW5nZSAgKi9cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vbWF0LWlucHV0IGZvY3VzZWQgY29sb3IgKi9cclxuOjpuZy1kZWVwXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZFxyXG4gIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogYmx1ZXZpb2xldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaW5wdXQgZXJyb3Igb3V0bGluZSBjb2xvciAqL1xyXG46Om5nLWRlZXBcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZFxyXG4gIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgLyogb3BhY2l0eTogMC44IWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGNhcmVudCBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjYXJldC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaW5wdXQgZXJyb3IgY2FyZW50IGNvbG9yICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsXHJcbjo6bmctZGVlcCAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjYXJldC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1sYWJlbCBub3JtYWwgc3RhdGUgc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy9pbnB1dCBvdXRsaW5lIGNvbG9yICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC8vIG1hdC1sYWJlbCBmb2N1c2VkIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogYmx1ZXZpb2xldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtbGFiZWwgZXJyb3Igc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtbGFiZWwgZXJyb3Igc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QgLm1hdC1zZWxlY3QtdHJpZ2dlciAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/movie/movie.component */ "qO9b");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/layout/layout.component */ "9KET");
/* harmony import */ var _commons_global_constants__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./commons/global-constants */ "tdVz");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/login-layout/login-layout.component */ "oyq9");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "nAxv");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "ukFw");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "pO+s");
/* harmony import */ var _components_auditorium_form_auditorium_form_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/auditorium-form/auditorium-form.component */ "618f");
/* harmony import */ var _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/movie-form/movie-form.component */ "wcJZ");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/manage/manage.component */ "HEqX");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/movies/movies.component */ "xVd8");
/* harmony import */ var _components_templates_screen_screen_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/templates/screen/screen.component */ "UyxY");
/* harmony import */ var _components_templates_show_form_show_form_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/templates/show-form/show-form.component */ "sXLo");
/* harmony import */ var _components_templates_select_members_select_members_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/templates/select-members/select-members.component */ "xNL9");
/* harmony import */ var _components_templates_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/templates/payment-form/payment-form.component */ "v/pu");
/* harmony import */ var _components_templates_add_movie_to_show_form_add_movie_to_show_form_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/templates/add-movie-to-show-form/add-movie-to-show-form.component */ "io+b");
/* harmony import */ var _components_my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/my-bookings/my-bookings.component */ "NujD");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");
/* harmony import */ var _services_global_global_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/global/global.service */ "Nnfz");
/* harmony import */ var _services_token_interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./services/token-interceptor/token-interceptor.service */ "RYOk");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./services/user/user.service */ "CFL1");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./pipes/search.pipe */ "xaSU");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./guards/auth/auth.guard */ "fEFe");
/* harmony import */ var _guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./guards/admin/admin.guard */ "lNyY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/core */ "fXoL");




























































const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__["MatBottomSheetModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"]
];
const templates = [
    _components_templates_select_members_select_members_component__WEBPACK_IMPORTED_MODULE_47__["SelectMembersComponent"],
    _components_templates_show_form_show_form_component__WEBPACK_IMPORTED_MODULE_46__["ShowFormComponent"],
    _components_templates_screen_screen_component__WEBPACK_IMPORTED_MODULE_45__["ScreenComponent"],
    _components_templates_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_48__["PaymentFormComponent"],
    _components_templates_add_movie_to_show_form_add_movie_to_show_form_component__WEBPACK_IMPORTED_MODULE_49__["AddMovieToShowFormComponent"]
];
const components = [
    _app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"],
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_29__["HeaderComponent"],
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"],
    _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_31__["HomePageComponent"],
    _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_32__["MovieComponent"],
    _components_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
    _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_34__["LayoutComponent"],
    _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__["RegisterComponent"],
    _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_37__["LoginLayoutComponent"],
    _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_38__["ForgotPasswordComponent"],
    _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_39__["AboutUsComponent"],
    _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_40__["ContactUsComponent"],
    _components_auditorium_form_auditorium_form_component__WEBPACK_IMPORTED_MODULE_41__["AuditoriumFormComponent"],
    _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_42__["MovieFormComponent"],
    _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_43__["ManageComponent"],
    _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_44__["MoviesComponent"],
    _components_my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_50__["MyBookingsComponent"],
    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_51__["ProfileComponent"],
    templates
];
const angularModules = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
    _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"],
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
];
const services = [
    _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_52__["AuthService"],
    _services_global_global_service__WEBPACK_IMPORTED_MODULE_53__["GlobalService"],
    _services_user_user_service__WEBPACK_IMPORTED_MODULE_55__["UserService"]
];
const providers = [
    _commons_global_constants__WEBPACK_IMPORTED_MODULE_35__["GlobalConstants"],
    _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_57__["AuthGuard"],
    _guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_58__["AdminGuard"],
    services
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_59__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_59__["ɵɵdefineInjector"]({ providers: [providers, { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_token_interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_54__["TokenInterceptorService"], multi: true }], imports: [[angularModules, materialModules, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_59__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_29__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_31__["HomePageComponent"],
        _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_32__["MovieComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_34__["LayoutComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__["RegisterComponent"],
        _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_37__["LoginLayoutComponent"],
        _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_38__["ForgotPasswordComponent"],
        _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_39__["AboutUsComponent"],
        _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_40__["ContactUsComponent"],
        _components_auditorium_form_auditorium_form_component__WEBPACK_IMPORTED_MODULE_41__["AuditoriumFormComponent"],
        _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_42__["MovieFormComponent"],
        _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_43__["ManageComponent"],
        _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_44__["MoviesComponent"],
        _components_my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_50__["MyBookingsComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_51__["ProfileComponent"], _components_templates_select_members_select_members_component__WEBPACK_IMPORTED_MODULE_47__["SelectMembersComponent"],
        _components_templates_show_form_show_form_component__WEBPACK_IMPORTED_MODULE_46__["ShowFormComponent"],
        _components_templates_screen_screen_component__WEBPACK_IMPORTED_MODULE_45__["ScreenComponent"],
        _components_templates_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_48__["PaymentFormComponent"],
        _components_templates_add_movie_to_show_form_add_movie_to_show_form_component__WEBPACK_IMPORTED_MODULE_49__["AddMovieToShowFormComponent"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_56__["SearchPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__["MatBottomSheetModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "atC9":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/util/util */ "bFed");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/application/application.service */ "nlYG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "kyzu");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function HomePageComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Movie List is empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomePageComponent_ng_container_3_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "button", 16);
} if (rf & 2) {
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", i_r7 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-current", i_r7 == 0 ? true : false)("data-bs-slide-to", i_r7)("aria-label", "Slide " + i_r7);
} }
function HomePageComponent_ng_container_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", i_r9 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", movie_r8.bgImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", movie_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, movie_r8.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, movie_r8.language) + " | " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, movie_r8.genres == null ? null : movie_r8.genres.join(" - ")) + " | " + movie_r8.year, " ");
} }
function HomePageComponent_ng_container_3_section_16_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", movie_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", movie_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.formatRelease(movie_r11.release), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "../movie/", movie_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, movie_r11.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 8, movie_r11.language), " ");
} }
const _c0 = function () { return { show: "now-playing" }; };
function HomePageComponent_ng_container_3_section_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Now Playing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "view all");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomePageComponent_ng_container_3_section_16_div_8_Template, 13, 10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 2, ctx_r4.nowPlaying$));
} }
function HomePageComponent_ng_container_3_section_18_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", movie_r13.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", movie_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.formatRelease(movie_r13.release), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "../movie/", movie_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, movie_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 8, movie_r13.language), " ");
} }
const _c1 = function () { return { show: "up-coming" }; };
function HomePageComponent_ng_container_3_section_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Up Coming");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "view all");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomePageComponent_ng_container_3_section_18_div_8_Template, 13, 10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 2, ctx_r5.upComing$));
} }
function HomePageComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomePageComponent_ng_container_3_button_3_Template, 1, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomePageComponent_ng_container_3_div_6_Template, 10, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HomePageComponent_ng_container_3_section_16_Template, 10, 5, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, HomePageComponent_ng_container_3_section_18_Template, 10, 5, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx_r1.carousel$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 6, ctx_r1.carousel$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 8, ctx_r1.nowPlaying$)) == null ? null : tmp_2_0.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 10, ctx_r1.upComing$)) == null ? null : tmp_3_0.length) > 0);
} }
class HomePageComponent {
    constructor(_appService, _activeRoute, _alertService, _userService) {
        this._appService = _appService;
        this._activeRoute = _activeRoute;
        this._alertService = _alertService;
        this._userService = _userService;
        this.carousel = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.movies);
        this.carousel$ = this.carousel.asObservable();
        this.nowPlaying = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.movies);
        this.nowPlaying$ = this.nowPlaying.asObservable();
        this.upComing = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.movies);
        this.upComing$ = this.upComing.asObservable();
    }
    ngOnInit() {
        this._activeRoute.queryParams
            .subscribe(param => {
            if (param.login)
                this._alertService.postionAlert('Login Success');
            else if (param['logged-in'])
                this._alertService.postionAlert('You are already logged in', 'OK', 'danger-alert');
            else if (param['un-authorized'])
                this._alertService.postionAlert('You are Un-Authorized', 'OK', 'danger-alert');
            else if (param['payment'] == 'false')
                this._alertService.postionAlert('Payment failed', 'OK', 'danger-alert');
            else if (param['booking'] == 'false')
                this._alertService.postionAlert('Booking failed', 'OK', 'danger-alert');
        });
        console.log(this._userService.getUser());
        this._appService.getFewNowPlayingMovies().subscribe(movies => this.nowPlaying.next(movies));
        this._appService.getFewUpComingMovies().subscribe(movies => this.upComing.next(movies));
        this._appService.getAllNowPlayingAndUpComingMovies().subscribe(movies => this.carousel.next(movies));
    }
    formatRelease(release) {
        if (new Date(release) > new Date())
            return 'Releasing on ' + src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDate(release);
        return 'Now Playing';
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 5, vars: 6, consts: [[1, "container-fluid", "my-2", "pb-5"], ["class", "text-center text-warning h-100vh mx-auto", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "text-warning", "h-100vh", "mx-auto"], ["id", "movies-carousel", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#movies-carousel", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#movies-carousel", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#movies-carousel", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["class", "now-showing my-5 bg-dark text-white p-lg-5", 4, "ngIf"], ["class", "up-coming my-5 p-lg-5", 4, "ngIf"], ["type", "button", "data-bs-target", "#movies-carousel", 3, "ngClass"], [1, "carousel-item", 3, "ngClass"], ["height", "550", 1, "d-block", "w-100", 3, "src", "alt"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "fs-1", "mb-3"], [1, "lead"], [1, "now-showing", "my-5", "bg-dark", "text-white", "p-lg-5"], [1, "row", "g-0", "mb-5", "justify-content-around"], [1, "text-uppercase", "fs-2", "col-11"], ["routerLink", "../movies", 1, "d-block", "col-1", "text-end", 3, "queryParams"], [1, "now-showing-movies"], [1, "card-group", "row", "g-0", "justify-content-around"], ["class", "col-sm-11 col-md-5 col-lg-3 col-xxl-2 px-2 position-relative", 4, "ngFor", "ngForOf"], [1, "col-sm-11", "col-md-5", "col-lg-3", "col-xxl-2", "px-2", "position-relative"], [1, "image-card", "postion-relative", "rounded-5", "overflow-hidden"], ["height", "400", "width", "284", 1, "card-img-top", 3, "src", "alt"], [1, "image-release", "postion-absolute", "bottom-0", "start-0", "bg-white", "text-dark", "w-100", "text-center", "py-2"], [1, "card-body", "text-center"], [1, "card-title", "fs-4", "mb-0"], [1, "stretched-link", 3, "routerLink"], [1, "card-text", "text-muted"], [1, "up-coming", "my-5", "p-lg-5"], [1, "up-coming-movies"], [1, "image-release", "postion-absolute", "bottom-0", "start-0", "bg-dark", "text-white", "w-100", "text-center", "py-2"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomePageComponent_h1_1_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomePageComponent_ng_container_3_Template, 20, 12, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx.carousel$)) == null ? null : tmp_0_0.length) < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx.carousel$)) == null ? null : tmp_1_0.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "bFed":
/*!**************************************!*\
  !*** ./src/app/classes/util/util.ts ***!
  \**************************************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
class Util {
    static formatTimeToAmOrPm(time) {
        return new Date(`${Util.date} ${time}`).toLocaleTimeString('en-Us', { hour: '2-digit', minute: '2-digit' });
    }
    static extractTimeAndConvertToNumber(time) {
        return new Date(`${Util.date} ${time}`).getTime();
    }
    static formatDate(date) {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }
    static findEndDate(dates) {
        let tempDate = new Date();
        if (dates)
            for (let i = 0; i < dates.length; i++)
                if (new Date(dates[i]) > tempDate)
                    tempDate = new Date(dates[i]);
        return tempDate;
    }
    static getTomarrow(date) {
        const temp = new Date(date);
        // const day = 60 * 60 * 24 * 1000;
        // const day = 86400000;
        // return new Date(temp.getTime() + day);
        return new Date(temp.getFullYear(), temp.getMonth(), (temp.getDate() + 1));
    }
    static getYestarday(date) {
        const day = 86400000;
        const temp = new Date(date);
        return new Date(temp.getTime() - day);
    }
    static sortByDates(date1, date2) {
        return new Date(date1).getTime() - new Date(date2).getTime();
    }
    static numberField(event) {
        // Number(value);
        // parseInt(value);
        // parseFloat('364.585');
        let charCode = event.keyCode;
        return (charCode > 31 && (charCode < 48 || charCode > 57)) ? false : true;
    }
    static getFormatedtime(date) {
        return new Date(date).toLocaleTimeString('en-US');
    }
}
Util.date = '15 May 2021';


/***/ }),

/***/ "fEFe":
/*!*******************************************!*\
  !*** ./src/app/guards/auth/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    canActivate() {
        if (this._userService.isLoggedIn())
            return true;
        else
            this._router.navigate(['/user/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "io+b":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/templates/add-movie-to-show-form/add-movie-to-show-form.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddMovieToShowFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieToShowFormComponent", function() { return AddMovieToShowFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/util/util */ "bFed");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function AddMovieToShowFormComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", movie_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", movie_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, movie_r8.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 8, movie_r8.language));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Release: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 10, movie_r8.release, "fullDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Added: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 13, movie_r8.addedOn, "fullDate"), "");
} }
function AddMovieToShowFormComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.movieIdErrors);
} }
function AddMovieToShowFormComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.startDateErrors);
} }
function AddMovieToShowFormComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.endDateErrors);
} }
function AddMovieToShowFormComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.goldPriceErrors);
} }
function AddMovieToShowFormComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.silverPriceErrors);
} }
function AddMovieToShowFormComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.generalPriceErrors);
} }
class AddMovieToShowFormComponent {
    constructor(_fb, _dialog, _data) {
        this._fb = _fb;
        this._dialog = _dialog;
        this._data = _data;
        this.movieId = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            uniqueName(this._data.shows),
        ]);
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
        this._dialog.disableClose = true;
        this.filteredMovies = this.movieId.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((movie) => (movie ? this._filterMovies(movie) : this.movies.slice())));
    }
    ngOnInit() {
        var _a;
        this.movies = this._data.movies;
        this.movieShows = this._data.shows;
        this.tempEndDate = ((_a = this.movieShows) === null || _a === void 0 ? void 0 : _a.length) > 0 ? src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getTomarrow(src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_3__["Util"].findEndDate(this.movieShows.map(m_show => m_show.end))) : new Date();
        this.movieShowForm = this._fb.group({
            movieId: this.movieId,
            range: this.range,
            gold: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]{3}$')]),
            silver: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]{3}$')]),
            general: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]{3}$')]),
        });
    }
    get movieIdErrors() {
        if (this.movieId.hasError('required'))
            return 'Please select a movie';
        else if (this.movieId.hasError('uniqueName'))
            return 'Movie is already screening on this show. select different move';
        return '';
    }
    get startDateErrors() {
        let start = this.range.get('start');
        if (start === null || start === void 0 ? void 0 : start.hasError('required'))
            return 'Start Date cannot be empty';
        return '';
    }
    get endDateErrors() {
        let end = this.range.get('end');
        if (end === null || end === void 0 ? void 0 : end.hasError('required'))
            return 'End date cannot be empty';
        return '';
    }
    get goldPriceErrors() {
        let gold = this.movieShowForm.get('gold');
        if (gold === null || gold === void 0 ? void 0 : gold.hasError('required'))
            return 'Gold section price cannot be empty';
        else if (gold === null || gold === void 0 ? void 0 : gold.hasError('pattern'))
            return 'Price must be between 100 and 999';
        return '';
    }
    get silverPriceErrors() {
        let silver = this.movieShowForm.get('silver');
        if (silver === null || silver === void 0 ? void 0 : silver.hasError('required'))
            return 'Silver section price cannot be empty';
        else if (silver === null || silver === void 0 ? void 0 : silver.hasError('pattern'))
            return 'Price must be between 100 and 999';
        return '';
    }
    get generalPriceErrors() {
        let general = this.movieShowForm.get('general');
        if (general === null || general === void 0 ? void 0 : general.hasError('required'))
            return 'General section price cannot be empty';
        else if (general === null || general === void 0 ? void 0 : general.hasError('pattern'))
            return 'Price must be between 100 and 999';
        return '';
    }
    _filterMovies(value) {
        return this.movies.filter((movie) => movie.id == value);
    }
    onMovieChange(event) {
        var _a, _b;
        const releaseDate = (_b = (_a = this.movies) === null || _a === void 0 ? void 0 : _a.find(movie => movie.id == event.value)) === null || _b === void 0 ? void 0 : _b.release;
        this.startDate = (new Date(this.tempEndDate) > new Date(releaseDate)) ? this.tempEndDate : releaseDate;
        if (!this.startDate)
            this.startDate = new Date();
    }
    onCancel() {
        this._dialog.close();
    }
    onSubmit() {
        const values = this.movieShowForm.value;
        const data = {
            movieId: values.movieId,
            start: values.range.start,
            end: values.range.end,
            price: {
                gold: values.gold,
                silver: values.silver,
                general: values.general,
            },
        };
        this._dialog.close({ movieShow: data });
    }
}
AddMovieToShowFormComponent.ɵfac = function AddMovieToShowFormComponent_Factory(t) { return new (t || AddMovieToShowFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AddMovieToShowFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddMovieToShowFormComponent, selectors: [["app-add-movie-to-show-form"]], decls: 45, vars: 17, consts: [[1, "wrapper"], [1, "text-center", "mb-3", "p-2", "rounded", "border", "border-2", "shadow-sm"], [1, "example-form", "p-4", 3, "formGroup"], ["appearance", "outline", 1, "d-block", "w-100", "text-dark"], ["aria-label", "State", 3, "formControl", "click", "selectionChange"], ["class", "h-auto py-1", 3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "formGroup", "rangePicker", "min", "max"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], ["class", "d-inline-block mx-1", 4, "ngIf"], [1, "lead"], [1, "row", "g-0", "justify-content-around"], ["appearance", "outline", 1, "d-block", "col-4", "px-1", "text-dark"], ["type", "number", "matInput", "", "formControlName", "gold"], ["type", "number", "matInput", "", "formControlName", "silver"], ["type", "number", "matInput", "", "formControlName", "general"], ["mat-raised-button", "", 1, "me-2", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "ms-2", 3, "disabled", "click"], [1, "h-auto", "py-1", 3, "value"], ["aria-hidden", "", "height", "120", "width", "120", 1, "example-option-img", "me-2", "rounded", 3, "src"], [1, "me-1"], [1, "d-inline-block", "mx-1"]], template: function AddMovieToShowFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Add Movie To Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Select Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddMovieToShowFormComponent_Template_mat_select_click_7_listener() { return ctx.movieId.reset(); })("selectionChange", function AddMovieToShowFormComponent_Template_mat_select_selectionChange_7_listener($event) { return ctx.onMovieChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AddMovieToShowFormComponent_mat_option_8_Template, 17, 16, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AddMovieToShowFormComponent_mat_error_10_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-date-range-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-date-range-picker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AddMovieToShowFormComponent_mat_error_20_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AddMovieToShowFormComponent_mat_error_21_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "legend", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Price details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Gold Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, AddMovieToShowFormComponent_mat_error_30_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Silver Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AddMovieToShowFormComponent_mat_error_35_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "General Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, AddMovieToShowFormComponent_mat_error_40_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddMovieToShowFormComponent_Template_button_click_41_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddMovieToShowFormComponent_Template_button_click_43_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.movieShowForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.movieId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 15, ctx.filteredMovies));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.movieIdErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r2)("min", ctx.startDate)("max", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.startDateErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.endDateErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.goldPriceErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.silverPriceErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.generalPriceErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.movieShowForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDateRangePicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: #000 !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n  .mat-input-element {\r\n  caret-color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n  .mat-form-field-label {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #000;\r\n}\r\n  .mat-input-element::placeholder {\r\n  color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tb3ZpZS10by1zaG93LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0M7OztFQUdFLGlDQUFpQztBQUNuQztBQUVBLDhCQUE4QjtBQUM5Qjs7O0VBR0UsNEJBQTRCO0FBQzlCO0FBRUEscUNBQXFDO0FBQ3JDOzs7RUFHRSxxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLDJCQUEyQjtBQUM3QjtBQUVBLG9DQUFvQztBQUNwQztFQUNFLHNCQUFzQjtBQUN4QjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBLCtCQUErQjtBQUMvQjtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiYWRkLW1vdmllLXRvLXNob3ctZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLy8gbWF0LWljb24tc3RlcHBlciBzZWxlY3RlZCBjb2xvciBjaGFuZ2UgICovXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vbWF0LWlucHV0IGZvY3VzZWQgY29sb3IgKi9cclxuOjpuZy1kZWVwXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZFxyXG4gIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogYmx1ZXZpb2xldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaW5wdXQgZXJyb3Igb3V0bGluZSBjb2xvciAqL1xyXG46Om5nLWRlZXBcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZFxyXG4gIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgLyogb3BhY2l0eTogMC44IWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGNhcmVudCBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjYXJldC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaW5wdXQgZXJyb3IgY2FyZW50IGNvbG9yICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsXHJcbjo6bmctZGVlcCAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjYXJldC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1sYWJlbCBub3JtYWwgc3RhdGUgc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy9pbnB1dCBvdXRsaW5lIGNvbG9yICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC8vIG1hdC1sYWJlbCBmb2N1c2VkIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogYmx1ZXZpb2xldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtbGFiZWwgZXJyb3Igc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QgLm1hdC1zZWxlY3QtdHJpZ2dlciAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4iXX0= */"] });
function uniqueName(movieShows) {
    return (control) => {
        return movieShows ? movieShows.find(mShow => mShow.movieId == control.value)
            ? { uniqueName: true }
            : null : null;
    };
}


/***/ }),

/***/ "kyzu":
/*!*************************************************!*\
  !*** ./src/app/services/alert/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");


class AlertService {
    constructor(_bar) {
        this._bar = _bar;
    }
    postionAlert(message, action = 'OK', alertClass = 'success-alert', duration = 5000, verticalPosition = 'top', horizontalPosition = 'end') {
        this._bar.open(message, action, {
            duration: 5000,
            verticalPosition: verticalPosition,
            horizontalPosition: horizontalPosition,
            panelClass: [alertClass],
        });
    }
    defaultAlert(message, action = 'OK', duration = 3000) {
        this._bar.open(message, action, { duration: duration });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lNyY":
/*!*********************************************!*\
  !*** ./src/app/guards/admin/admin.guard.ts ***!
  \*********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminGuard {
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    canActivate() {
        if (this._userService.isAdmin())
            return true;
        else
            this._router.navigate(['/home'], { queryParams: { 'un-authorized': true } });
        return false;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nAxv":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_classes_validators_user_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/validators/user-validator */ "reY5");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function ForgotPasswordComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r0.alertDanger$) ? "alert-danger" : "alert-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r0.alertMessage$), " ");
} }
function ForgotPasswordComponent_mat_hint_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Checking for username...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.usernameErrors);
} }
function ForgotPasswordComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.passwordErrors);
} }
class ForgotPasswordComponent {
    constructor(_fb, _auth, _validator, _userService, _router) {
        this._fb = _fb;
        this._auth = _auth;
        this._validator = _validator;
        this._userService = _userService;
        this._router = _router;
        this.showAlert$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.alertDanger$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.alertMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.hidePassword = true;
    }
    ngOnInit() {
        if (this._userService.isLoggedIn())
            this._router.navigate(['/home'], { queryParams: { 'logged-in': true } });
        this.forgotPasswordForm = this._fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)], this._validator.isEmailOrMobilePresent),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)])
        });
    }
    get username() {
        return this.forgotPasswordForm.get('username');
    }
    get usernameErrors() {
        var _a;
        const username = this.forgotPasswordForm.get('username');
        if (username === null || username === void 0 ? void 0 : username.hasError('required'))
            return 'Username cannot be empty';
        else if (username === null || username === void 0 ? void 0 : username.hasError('present'))
            return "Username doesn't exists";
        else if (username === null || username === void 0 ? void 0 : username.hasError('minlength'))
            return `Username should at-least be ${(_a = username === null || username === void 0 ? void 0 : username.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength} characters`;
        return '';
    }
    get passwordErrors() {
        var _a;
        const password = this.forgotPasswordForm.get('password');
        if (password === null || password === void 0 ? void 0 : password.hasError('required'))
            return 'Password cannot be empty';
        else if (password === null || password === void 0 ? void 0 : password.hasError('minlength'))
            return `Password should at-least be ${(_a = password === null || password === void 0 ? void 0 : password.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength} characters`;
        return '';
    }
    onSubmit() {
        this._auth.forgotPassword(this.forgotPasswordForm.value)
            .subscribe(res => {
            this.showAlert$.next(true);
            this.alertDanger$.next(false);
            this.alertMessage$.next(res.message);
            if (res.statusCode == 200)
                this.passwordForm.resetForm();
        }, err => {
            this.showAlert$.next(true);
            this.alertDanger$.next(true);
            this.alertMessage$.next('Something went wrong');
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_classes_validators_user_validator__WEBPACK_IMPORTED_MODULE_4__["UserValidator"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], viewQuery: function ForgotPasswordComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.passwordForm = _t.first);
    } }, decls: 26, vars: 12, consts: [[1, "px-3", "my-auto"], ["class", "lead mb-2 p-2 rounded", 3, "ngClass", 4, "ngIf"], [1, "fs-2", "py-4"], [1, "example-container"], [1, "row", "w-100", "g-0", 3, "formGroup", "ngSubmit"], ["passwordForm", ""], [1, "col-12", "mb-3"], ["appearance", "outline", 1, "text-white", "d-block"], ["matInput", "", "type", "text", "placeholder", "nms@cinemas.com", "formControlName", "username", 1, "fs-5"], ["class", "text-warning", 4, "ngIf"], [4, "ngIf"], ["matInput", "", "formControlName", "password", 1, "fs-5", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "col-12", 3, "color"], [1, "lead", "mb-2", "p-2", "rounded", 3, "ngClass"], [1, "text-warning"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ForgotPasswordComponent_p_1_Template, 4, 6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Change Password Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Enter your username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ForgotPasswordComponent_mat_hint_13_Template, 2, 0, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ForgotPasswordComponent_mat_error_14_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ForgotPasswordComponent_mat_error_20_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_21_listener() { return ctx.hidePassword = !ctx.hidePassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 10, ctx.showAlert$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.username.pending);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.usernameErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", !ctx.forgotPasswordForm.valid ? "accent" : "primary");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "nlYG":
/*!*************************************************************!*\
  !*** ./src/app/services/application/application.service.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ApplicationService {
    constructor(_http) {
        this._http = _http;
    }
    getAuditorium(auditoriumId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}`);
    }
    getAllAuditoriums() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].GET_ALL_AUDITORIUMS_URL);
    }
    addAuditorium(auditorium) {
        return this._http.post(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].ADD_AUDITORIUM_URL, auditorium);
    }
    updateAuditorium(auditorium) {
        return this._http.put(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].UPDATE_AUDITORIUM_URL, auditorium);
    }
    deleteAuditorium(auditoriumId) {
        return this._http.delete(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].DELETE_AUDITORIUM_URL}/${auditoriumId}`);
    }
    /*
      ================= Movie Service ====================
    */
    getMovie(movieId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].MOVIE_URL}/${movieId}`, { headers: { skip: "true" } });
    }
    getAllNowPlayingAndUpComingMovies() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].NOW_PLAYING_AND_UP_COMING_MOVIES_URL, { headers: { skip: "true" } });
    }
    getAllNowPlayingMovies() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].NOW_PLAYING_MOVIES_URL, { headers: { skip: "true" } });
    }
    getFewNowPlayingMovies() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('records', '4');
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].NOW_PLAYING_MOVIES_URL, { params, headers: { skip: 'true' } });
    }
    getFewUpComingMovies() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('records', '4');
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].UP_COMING_MOVIES_URL, { params: { 'records': '4' }, headers: { skip: 'true' } });
    }
    getAllUpComingMovies() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].UP_COMING_MOVIES_URL, { headers: { skip: "true" } });
    }
    getAllNotPlayingMovies() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].NOT_PLAYING_MOVIES_URL, { headers: { skip: "true" } });
    }
    getAllMovies() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].GET_ALL_MOVIES_URL, { headers: { skip: "true" } });
    }
    addMovie(movie) {
        return this._http.post(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].ADD_MOVIE_URL, movie);
    }
    updateMovie(movie) {
        return this._http.put(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].UPDATE_MOVIE_URL, movie);
    }
    deleteMovie(movieId) {
        return this._http.delete(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].DELETE_MOVIE_URL}/${movieId}`);
    }
    /*
      ================= Show Service ====================
    */
    getShowsByMovieId(auditoriumId, movieId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/movie/${movieId}`);
    }
    getShow(showId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].SHOW_URL}/${showId}`);
    }
    getAuditoriumShow(auditoriumId, showId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/${showId}`);
    }
    getAllShows() {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].SHOW_URL}/all`);
    }
    getAllAuditoriumShows(auditoriumId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/all`);
    }
    addShow(auditoriumId, show) {
        return this._http.post(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/add`, show);
    }
    updateShow(auditoriumId, show) {
        return this._http.put(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/update`, show);
    }
    deleteShow(showId) {
        return this._http.delete(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].SHOW_URL}/delete/${showId}`);
    }
    /*
      ================= Movie Show Service ====================
    */
    getAuditoriumsByMovieId(movieId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/movie/${movieId}`);
    }
    getMovieShow(movieShowId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].MOVIESHOWS_URL}/${movieShowId}`);
    }
    getAuditoriumShowMovieShow(auditoriumId, showId, movieShowId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/${showId}/movie-show/${movieShowId}`);
    }
    getAllMovieShows() {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].MOVIESHOWS_URL}/all`);
    }
    getAllAuditoriumShowMovieShows(auditoriumId, showId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/${showId}/movie-show/all`);
    }
    addMovieShow(auditoriumId, showId, movieShow) {
        return this._http.post(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/${showId}/movie-show/add`, movieShow);
    }
    updateMovieShow(auditoriumId, showId, movieShow) {
        return this._http.put(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/${showId}/movie-show/update`, movieShow);
    }
    deleteMovieShow(movieShowId) {
        return this._http.delete(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].MOVIESHOWS_URL}/delete/${movieShowId}`);
    }
    /*
      ================= Booking Service ====================
    */
    getBooking(bookingId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].BOOKING_URL}/${bookingId}`);
    }
    getAuditoriumShowMovieShowBooking(auditoriumId, showId, movieShowId, bookingId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/${showId}/movie-show/${movieShowId}/booking/${bookingId}`);
    }
    getAllBookings() {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].BOOKING_URL}/all`);
    }
    getAllAuditoriumShowMovieShowBookings(auditoriumId, showId, movieShowId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/${showId}/movie-show/${movieShowId}/booking/all`);
    }
    addBooking(auditoriumId, showId, movieShowId, booking) {
        return this._http.post(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/${showId}/movie-show/${movieShowId}/booking/add`, booking);
    }
    updateBooking(auditoriumId, showId, movieShowId, booking) {
        return this._http.put(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].AUDITORIUM_URL}/${auditoriumId}/show/${showId}/movie-show/${movieShowId}/booking/update`, booking);
    }
    deleteBooking(bookingId) {
        return this._http.delete(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].BOOKING_URL}/delete/${bookingId}`);
    }
    getAllUserBooking(userId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].BOOKING_URL}/${userId}/all`);
    }
    /*
      ================= Now Playing, Up Coming and Not Playing Movie Shows Service ====================
    */
    getAllNowPlayingAndUpComingMovieShows() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].NOW_PLAYING_AND_UP_COMING_MOVIE_SHOWS_URL, { headers: { skip: "true" } });
    }
    getAllNowPlayingMovieShows() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].NOW_PLAYING_MOVIE_SHOWS_URL, { headers: { skip: "true" } });
    }
    getFewNowPlayingMovieShows() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('records', '4');
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].NOW_PLAYING_MOVIE_SHOWS_URL, { params, headers: { skip: "true" } });
    }
    getFewUpComingMovieShows() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('records', '4');
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].UP_COMING_MOVIE_SHOWS_URL, { params: { 'records': '4' }, headers: { skip: "true" } });
    }
    getAllUpComingMovieShows() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].UP_COMING_MOVIE_SHOWS_URL, { headers: { skip: "true" } });
    }
    getAllNotPlayingMovieShows() {
        return this._http.get(src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].NOT_PLAYING_MOVIE_SHOWS_URL, { headers: { skip: "true" } });
    }
    // todo: create this endpoint
    getAllBookedSeats(movieShowId, on) {
        // new Date('Sun May 11,2014').toLocaleDateString('fr-CA')    2014-05-11
        // let params = new HttpParams().set('on', on.toISOString().slice(0, 10));
        // let params = new HttpParams().set('on', o);
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].MOVIESHOWS_URL}/${movieShowId}/booked-seats/${on.toLocaleDateString('fr-CA')}`);
    }
    /*
    ================= Booking Details ====================
    */
    getBookingDetails(bookingId) {
        return this._http.get(`${src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].BOOKING_URL}/${bookingId}/details`);
    }
}
ApplicationService.ɵfac = function ApplicationService_Factory(t) { return new (t || ApplicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApplicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApplicationService, factory: ApplicationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oyq9":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-layout/login-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");




class LoginLayoutComponent {
    constructor() {
        this.title = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].APP_NAME;
    }
    ngOnInit() {
    }
}
LoginLayoutComponent.ɵfac = function LoginLayoutComponent_Factory(t) { return new (t || LoginLayoutComponent)(); };
LoginLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginLayoutComponent, selectors: [["app-login-layout"]], decls: 17, vars: 2, consts: [[1, "d-flex", "h-100", "text-center", "text-white", "bg-dark", "cover-page", "mb-5"], [1, "cover-container", "d-flex", "w-100", "p-3", "mx-auto", "flex-column"], [1, "mb-5"], [1, "clearfix"], [1, "float-md-start", "mb-0", "fs-4", "text-md-center"], [1, "nav", "nav-masthead", "justify-content-center", "float-md-end"], ["aria-current", "page", "routerLink", "/home", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/user/login", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/user/register", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/user/forgot-password", 1, "nav-link"], [3, "fixed"]], template: function LoginLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-footer", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixed", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".btn-secondary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]:focus {\r\n  color: #333;\r\n  text-shadow: none; \r\n}\r\n\r\n.bd-placeholder-img[_ngcontent-%COMP%] {\r\n  font-size: 1.125rem;\r\n  text-anchor: middle;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\r\n    font-size: 3.5rem;\r\n  }\r\n}\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);\r\n  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.cover-page[_ngcontent-%COMP%] {\r\n  font-family: sans-serif !important;\r\n}\r\n\r\n.cover-container[_ngcontent-%COMP%] {\r\n  max-width: 50%;\r\n}\r\n\r\n\r\n\r\n.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  padding: 0.25rem 0;\r\n  font-weight: 700;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  background-color: transparent;\r\n  border-bottom: 0.25rem solid transparent;\r\n}\r\n\r\n.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\r\n  border-bottom-color: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]    + .nav-link[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.nav-masthead[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n\r\n\r\n  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: white !important;\r\n}\r\n\r\n\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n\r\n\r\n  .mat-input-element {\r\n  caret-color: #fff !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-label {\r\n  color: #fff !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #fff !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #fff;\r\n}\r\n\r\n  .mat-input-element::placeholder {\r\n  color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFOztBQUVGLDBCQUEwQjs7QUFDMUI7OztFQUdFLFdBQVc7RUFDWCxpQkFBaUIsRUFBRSxvQ0FBb0M7QUFDekQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUV6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0RBQWdEO0VBQ2hELDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0Isd0NBQXdDO0FBQzFDOztBQUVBOztFQUVFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUEsK0NBQStDOztBQUMvQzs7O0VBR0Usa0NBQWtDO0FBQ3BDOztBQUVBLDhCQUE4Qjs7QUFDOUI7OztFQUdFLDRCQUE0QjtBQUM5Qjs7QUFFQSxxQ0FBcUM7O0FBQ3JDOzs7RUFHRSxxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsb0NBQW9DOztBQUNwQzs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUEsb0NBQW9DOztBQUNwQztFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBLCtCQUErQjs7QUFDL0I7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsNkJBQTZCOztBQUM3QjtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSw2QkFBNkI7O0FBQzdCO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImxvZ2luLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogR2xvYmFsc1xyXG4gKi9cclxuXHJcbi8qIEN1c3RvbSBkZWZhdWx0IGJ1dHRvbiAqL1xyXG4uYnRuLXNlY29uZGFyeSxcclxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIsXHJcbi5idG4tc2Vjb25kYXJ5OmZvY3VzIHtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LXNoYWRvdzogbm9uZTsgLyogUHJldmVudCBpbmhlcml0YW5jZSBmcm9tIGBib2R5YCAqL1xyXG59XHJcblxyXG4uYmQtcGxhY2Vob2xkZXItaW1nIHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuYmQtcGxhY2Vob2xkZXItaW1nLWxnIHtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICogQmFzZSBzdHJ1Y3R1cmVcclxuICovXHJcblxyXG5ib2R5IHtcclxuICB0ZXh0LXNoYWRvdzogMCAwLjA1cmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY292ZXItcGFnZSB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvdmVyLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEhlYWRlclxyXG4gKi9cclxuXHJcbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rOmhvdmVyLFxyXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbmsgKyAubmF2LWxpbmsge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ubmF2LW1hc3RoZWFkIC5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pY29uLXN0ZXBwZXIgc2VsZWN0ZWQgY29sb3IgY2hhbmdlICAqL1xyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy9tYXQtaW5wdXQgZm9jdXNlZCBjb2xvciAqL1xyXG46Om5nLWRlZXBcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBvdXRsaW5lIGNvbG9yICovXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAvKiBvcGFjaXR5OiAwLjghaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaW5wdXQgY2FyZW50IGNvbG9yICovXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBjYXJlbnQgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCxcclxuOjpuZy1kZWVwIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWxhYmVsIG5vcm1hbCBzdGF0ZSBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvL2lucHV0IG91dGxpbmUgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLy8gbWF0LWxhYmVsIGZvY3VzZWQgc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1sYWJlbCBlcnJvciBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1sYWJlbCBlcnJvciBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdCAubWF0LXNlbGVjdC10cmlnZ2VyIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "pO+s":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");









class ContactUsComponent {
    constructor() {
        this.title = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].APP_NAME;
    }
    ngOnInit() {
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 53, vars: 0, consts: [[1, "contact-us-container"], [1, "contact-us-wrapper", "postion-relative"], [1, "contact-us-banner"], [1, "contact-us-banner-text", "h-100"], [1, "fs-1"], [1, "fs-2", "text-uppercase"], [1, "get-in-touch", "my-5"], [1, "row", "g-0", "justify-content-around"], [1, "write-to-us", "col-sm-12", "col-md-12", "col-lg-7"], [1, "fs-2"], [1, "underline"], [1, "form-container"], [1, "example-form", "col-sm-12", "col-lg-8", "mx-auto"], ["appearance", "standard", 1, "example-full-width", "d-block", "text-dark"], [1, "text-dark"], ["type", "text", "matInput", "", 1, "fs-5", "text-dark"], ["appearance", "standard", 1, "example-full-width", "d-block", "w-100", "text-dark"], ["type", "email", "matInput", "", 1, "fs-5", "text-dark"], ["matInput", "", "placeholder", "How can we help you!"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [1, "address", "col-sm-12", "col-md-12", "col-lg-4"], [1, "underline", "text-success"], [1, "contact-address"], ["role", "listitem", 1, "py-2", "h-auto"], [1, "d-inline-block"], [1, "address", "ms-3", "text-muted", "col-10"], [1, "d-inline-block", "col-1"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Drop us a line, get in touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Write to us by filling in the form below");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " place ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " SPI Network Limited, 25, Mamatha Complex, 5th Floor, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "ABC@cinemas.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " support_agent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "1800-894-4059");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"]], styles: [".contact-us-banner[_ngcontent-%COMP%] {\r\n  background: url(//in.bmscdn.com/webin/static/aboutus/bg.jpg) no-repeat;\r\n  background-size: cover;\r\n  height: 500px;\r\n}\r\n.contact-us-banner-text[_ngcontent-%COMP%] {\r\n  padding-top: 180px;\r\n  background-color: transparent;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNFQUFzRTtFQUN0RSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC11cy1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybCgvL2luLmJtc2Nkbi5jb20vd2ViaW4vc3RhdGljL2Fib3V0dXMvYmcuanBnKSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5jb250YWN0LXVzLWJhbm5lci10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogMTgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "qO9b":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/util/util */ "bFed");
/* harmony import */ var _templates_select_members_select_members_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/select-members/select-members.component */ "xNL9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global/global.service */ "Nnfz");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ "CFL1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function MovieComponent_div_41_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", cast_r3.name)("src", cast_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cast_r3.name);
} }
function MovieComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MovieComponent_div_41_div_4_Template, 6, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r0.cast$));
} }
function MovieComponent_div_43_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crew_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", crew_r5.name)("src", crew_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](crew_r5.name);
} }
function MovieComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MovieComponent_div_43_div_4_Template, 6, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r1.crew$));
} }
class MovieComponent {
    constructor(_mbs, _globalService, _userService, _router, _activeRoute) {
        this._mbs = _mbs;
        this._globalService = _globalService;
        this._userService = _userService;
        this._router = _router;
        this._activeRoute = _activeRoute;
        this.casts = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.actors);
        this.cast$ = this.casts.asObservable();
        this.crews = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.actors);
        this.crew$ = this.crews.asObservable();
    }
    ngOnInit() {
        this.movieId = this._activeRoute.snapshot.params.movieId;
        this._globalService.getAllMovies()
            .subscribe(movies => {
            var _a, _b;
            const movie = movies.find(movie => movie.id == this.movieId);
            this.selectedMovie$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(movie);
            this.casts.next((_a = movie === null || movie === void 0 ? void 0 : movie.casts) === null || _a === void 0 ? void 0 : _a.filter(cast => cast.isCast == 'yes'));
            this.crews.next((_b = movie === null || movie === void 0 ? void 0 : movie.crews) === null || _b === void 0 ? void 0 : _b.filter(cast => cast.isCast == 'no'));
        });
    }
    openBottomSheet() {
        if (!this._userService.isLoggedIn()) {
            this._router.navigate(['/user/login'], { state: { redirect: this._router.url }, queryParams: { 'booking': true } });
            return;
        }
        else {
            let sheet = this._mbs.open(_templates_select_members_select_members_component__WEBPACK_IMPORTED_MODULE_2__["SelectMembersComponent"], { data: { movieId: this.movieId, movie: this.selectedMovie$ } });
            sheet.afterDismissed().subscribe(data => {
                if (data === null || data === void 0 ? void 0 : data.tempSelectMembers) {
                    this._globalService.setTempSelectMembers(data.tempSelectMembers);
                    this._router.navigate(['/select-seats']);
                }
            });
        }
    }
    formatRelease(release) {
        if (new Date(release) > new Date())
            return 'Releasing on ' + src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDate(release);
        return 'Now Playing';
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 45, vars: 42, consts: [[1, "movie-section"], [1, "position-relative", "poster-wrapper", "p-3"], [1, "movie-banner", 2, "background", "linear-gradient(\n            90deg,\n            rgb(201, 18, 18) 24.97%,\n            rgb(212, 206, 206) 38.3%,\n            rgba(168, 97, 97, 0.04) 97.47%,\n            rgb(161, 111, 111) 100%\n          )\n          no-repeat center center", "background-size", "cover"], [1, "movie-poster", "row", "g-0"], [1, "movie-image", "col-lg-3", "col-md-6", "col-sm-10", "rounded-5"], ["width", "100%", "height", "100%", 3, "src", "alt"], [1, "movie-release", "position-absolute", "bottom-0", "start-0", "py-2", "w-100", "bg-white", "text-center"], [1, "movie-details", "text-white", "mx-3", "px-3", "col-lg-5", "col-sm-12"], [1, "movie-title", "mb-lg-5", "fs-lg-1"], [1, "movie-format", "my-3"], [1, "btn", "btn-light", "btn-sm", "diabled", "mx-1"], [1, "movie-duration", "my-3"], [2, "font", "unset", "font-size", "20px"], [1, "links", "mt-4", "align-self-end"], ["mat-raised-button", "", "color", "accent", 1, "me-2", 3, "click"], [1, "about-movie", "text-dark", "p-4"], [1, "lead", 2, "font-family", "sans-serif"], ["class", "movie-cast ms-5 my-4", 4, "ngIf"], ["class", "movie-crew ms-5 my-4 pb-5", 4, "ngIf"], [1, "movie-cast", "ms-5", "my-4"], [1, "fs-lg-2"], [1, "row", "g-0"], ["class", "cast text-center col-sm-12 col-md-6 col-lg-3", 4, "ngFor", "ngForOf"], [1, "cast", "text-center", "col-sm-12", "col-md-6", "col-lg-3"], [1, "image", "rounded-circle", "mx-auto", "mb-3"], ["width", "120px", "height", "120px", 3, "alt", "src"], [1, "cast-name"], [1, "fs-5"], [1, "movie-crew", "ms-5", "my-4", "pb-5"], ["class", "crew text-center col-sm-12 col-md-6 col-lg-3", 4, "ngFor", "ngForOf"], [1, "crew", "text-center", "col-sm-12", "col-md-6", "col-lg-3"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieComponent_Template_a_click_33_listener() { return ctx.openBottomSheet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Book Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "About the Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, MovieComponent_div_41_Template, 6, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, MovieComponent_div_43_Template, 6, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstylePropInterpolate1"]("background-image", "linear-gradient(\n        90deg,\n        rgb(34, 34, 34) 24.97%,\n        rgb(34, 34, 34) 38.3%,\n        rgba(34, 34, 34, 0.04) 97.47%,\n        rgb(34, 34, 34) 100%\n      ), url(", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 12, ctx.selectedMovie$)) == null ? null : tmp_0_0.bgImage, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 14, ctx.selectedMovie$)) == null ? null : tmp_1_0.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 16, ctx.selectedMovie$)) == null ? null : tmp_2_0.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.formatRelease((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 18, ctx.selectedMovie$)) == null ? null : tmp_3_0.release), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 20, (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 22, ctx.selectedMovie$)) == null ? null : tmp_4_0.name) + " : " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 24, (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 26, ctx.selectedMovie$)) == null ? null : tmp_4_0.caption), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 28, ctx.selectedMovie$)) == null ? null : tmp_5_0.language, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 30, (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 32, ctx.selectedMovie$)) == null ? null : tmp_6_0.duration) + " . " + ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 34, ctx.selectedMovie$)) == null ? null : tmp_6_0.genres == null ? null : tmp_6_0.genres.join(", ")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 36, ctx.selectedMovie$)) == null ? null : tmp_7_0.story, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 38, ctx.cast$)) == null ? null : tmp_8_0.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 40, ctx.crew$)) == null ? null : tmp_9_0.length) > 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]], styles: [".poster-wrapper[_ngcontent-%COMP%] {\r\n  background-color: rgb(34, 34, 34);\r\n}\r\n.movie-banner[_ngcontent-%COMP%] {\r\n  min-height: 480px;\r\n  width: 92%;\r\n  padding: 32px 0px;\r\n  box-sizing: border-box;\r\n  align-items: center;\r\n  background-repeat: no-repeat;\r\n  background-position: right center;\r\n  background-color: rgb(34, 34, 34);\r\n  margin: 0px auto;\r\n  max-width: 1440px;\r\n}\r\n.movie-poster[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  max-width: 1240px;\r\n  margin: 0px auto;\r\n  position: relative;\r\n  width: 100%;\r\n  background: transparent;\r\n}\r\n.movie-image[_ngcontent-%COMP%] {\r\n  height: 430px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  align-items: center;\r\n  background: transparent;\r\n  padding: 0;\r\n}\r\n.movie-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n}\r\n.movie-details[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n.movie-cast[_ngcontent-%COMP%]   .cast[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .movie-crew[_ngcontent-%COMP%]   .crew[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  max-width: 120px;\r\n  min-width: 120px;\r\n  min-height: 120px;\r\n  max-height: 120px;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0ZXItd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xyXG59XHJcbi5tb3ZpZS1iYW5uZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgcGFkZGluZzogMzJweCAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTQ0MHB4O1xyXG59XHJcbi5tb3ZpZS1wb3N0ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMjQwcHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm1vdmllLWltYWdlIHtcclxuICBoZWlnaHQ6IDQzMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ubW92aWUtaW1hZ2UgaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4ubW92aWUtZGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm1vdmllLWNhc3QgLmNhc3QgLmltYWdlLFxyXG4ubW92aWUtY3JldyAuY3JldyAuaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTIwcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "reY5":
/*!******************************************************!*\
  !*** ./src/app/classes/validators/user-validator.ts ***!
  \******************************************************/
/*! exports provided: UserValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserValidator", function() { return UserValidator; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");



class UserValidator {
    constructor(_service) {
        this._service = _service;
    }
    static required(control) {
        return control.value.length <= 0 ? { 'required': true } : null;
    }
    get uniqueEmail() {
        return (control) => {
            return this._service.checkUniqueness(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
                console.log(res.token);
                return res.token ? { unique: true } : null;
            }));
        };
    }
    get uniqueMobile() {
        return (control) => {
            return this._service.checkUniqueness(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
                console.log(res.token);
                return res.token ? { unique: true } : null;
            }));
        };
    }
    get isEmailOrMobilePresent() {
        return (control) => {
            return this._service.checkUniqueness(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
                console.log(res.token);
                return res.token ? null : { present: true };
            }));
        };
    }
}
UserValidator.ɵfac = function UserValidator_Factory(t) { return new (t || UserValidator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UserValidator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserValidator, factory: UserValidator.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sXLo":
/*!***********************************************************************!*\
  !*** ./src/app/components/templates/show-form/show-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: ShowFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormComponent", function() { return ShowFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/validators/application-validator */ "322t");
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function ShowFormComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", show_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", show_r3, " ");
} }
function ShowFormComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.nameErrors, " ");
} }
function ShowFormComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r2.startTimeErrors, " ");
} }
class ShowFormComponent {
    constructor(_fb, _dialog, _data) {
        this._fb = _fb;
        this._dialog = _dialog;
        this._data = _data;
        this.showNames = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].SHOW_NAMES;
        this._dialog.disableClose = true;
    }
    ngOnInit() {
        this.auditoriumShows = this._data;
        this.showForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, uniqueName(this.auditoriumShows)]),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_2__["ApplicationValidator"].uniqueShowTime(this.auditoriumShows)])
        });
    }
    get nameErrors() {
        let name = this.showForm.get('name');
        if (name === null || name === void 0 ? void 0 : name.hasError('required'))
            return 'Name cannot be null';
        else if (name === null || name === void 0 ? void 0 : name.hasError('uniqueName'))
            return 'Show name must be unique';
        return '';
    }
    get startTimeErrors() {
        let time = this.showForm.get('startTime');
        if (time === null || time === void 0 ? void 0 : time.hasError('required'))
            return 'Time cannot be null';
        else if (time === null || time === void 0 ? void 0 : time.hasError('uniqueTime'))
            return 'Time gap between the shows must be at-least 3 hours';
        return '';
    }
    onCancel() {
        this._dialog.close();
    }
    onSubmit() {
        this._dialog.close({ show: this.showForm.value });
    }
}
ShowFormComponent.ɵfac = function ShowFormComponent_Factory(t) { return new (t || ShowFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ShowFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ShowFormComponent, selectors: [["app-show-form"]], decls: 20, vars: 5, consts: [[1, "wrapper"], [1, "text-center", "mb-3", "p-2", "rounded", "border", "border-2", "shadow-sm"], [1, "example-form", "p-4", 3, "formGroup"], ["appearance", "outline", 1, "d-block", "w-100", "text-dark"], ["matInput", "", "formControlName", "name", "list", "show-name"], ["id", "show-name"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "time", "matInput", "", "placeholder", "1H 20M", "formControlName", "startTime"], ["color", "accent", 4, "ngIf"], ["mat-raised-button", "", 1, "me-2", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "ms-2", 3, "disabled", "click"], [3, "value"], ["color", "accent"]], template: function ShowFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Add New Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Show Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "datalist", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ShowFormComponent_option_9_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ShowFormComponent_mat_error_10_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Show Timing");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ShowFormComponent_mat_error_15_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShowFormComponent_Template_button_click_16_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShowFormComponent_Template_button_click_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.showForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.showNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nameErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.startTimeErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.showForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: #000 !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n  .mat-input-element {\r\n  caret-color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n  .mat-form-field-label {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #000;\r\n}\r\n  .mat-input-element::placeholder {\r\n  color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQzs7O0VBR0UsaUNBQWlDO0FBQ25DO0FBRUEsOEJBQThCO0FBQzlCOzs7RUFHRSw0QkFBNEI7QUFDOUI7QUFFQSxxQ0FBcUM7QUFDckM7OztFQUdFLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsMkJBQTJCO0FBQzdCO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0EsK0JBQStCO0FBQy9CO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzaG93LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC8vIG1hdC1pY29uLXN0ZXBwZXIgc2VsZWN0ZWQgY29sb3IgY2hhbmdlICAqL1xyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvL21hdC1pbnB1dCBmb2N1c2VkIGNvbG9yICovXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWRcclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGVycm9yIG91dGxpbmUgY29sb3IgKi9cclxuOjpuZy1kZWVwXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWRcclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIC8qIG9wYWNpdHk6IDAuOCFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBjYXJlbnQgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGVycm9yIGNhcmVudCBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LFxyXG46Om5nLWRlZXAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtbGFiZWwgbm9ybWFsIHN0YXRlIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vaW5wdXQgb3V0bGluZSBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG4vKiAvLyBtYXQtbGFiZWwgZm9jdXNlZCBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWxhYmVsIGVycm9yIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0IC5tYXQtc2VsZWN0LXRyaWdnZXIgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuIl19 */"] });
// https://www.infragistics.com/community/blogs/b/infragistics/posts/how-to-create-custom-validators-for-angular-reactive-forms
function uniqueName(shows) {
    return (control) => {
        return shows ? shows.find(show => show.name.toLocaleLowerCase() == control.value.toLocaleLowerCase())
            ? { 'uniqueName': true }
            : null : null;
    };
}


/***/ }),

/***/ "tdVz":
/*!*********************************************!*\
  !*** ./src/app/commons/global-constants.ts ***!
  \*********************************************/
/*! exports provided: GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
class GlobalConstants {
}
GlobalConstants.APP_NAME = 'NMS Cinemas';
GlobalConstants.SHOW_NAMES = ['Morning Show', 'Matinee', 'First Show', 'Second Show'];
GlobalConstants.ALL_GENERS = ['Comedy', 'Romance', 'Action', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Crime', 'War'];
GlobalConstants.ALL_LANGUAGES = ['English', 'Hindi', 'Telugu', 'Kanada', 'Tamil', 'Malayalam', 'Urdu', 'Marathi', 'Punjabi'];
GlobalConstants.HALL_SAFETIES = ['Thermal Scanning', 'Contactless Security ChecK', 'Hand Sanitizers Available',
    'Sanitization Before Every Show', 'In-Cinema Social Distancing',
    'Contactless Food Service', 'Packaged Food and Beverage', 'Daily Temperature Checks for Staff',
    'Deep Cleaning of Restrooms', 'Limited Occupancy In Restrooms', 'Sanitized / Sterilized 3D Glasses'];
GlobalConstants.HALL_FACILITIES = ['MTicket', 'Wheel Chair Facility', 'Recliner Seats', 'Parking Facility', 'Food Court', 'Ticket Cancellation', 'f & B'];
GlobalConstants.ROOT_URL = 'http://34.204.2.214:5555/my-movie-plan';
GlobalConstants.REGISTER_URL = `${GlobalConstants.ROOT_URL}/user/sign-up`;
GlobalConstants.CHECK_UNIQUENESS_URL = `${GlobalConstants.ROOT_URL}/user/check`;
GlobalConstants.UPDATE_USER_URL = `${GlobalConstants.ROOT_URL}/user/update`;
GlobalConstants.GET_LOGGED_IN_USER_URL = `${GlobalConstants.ROOT_URL}/user/get-user`;
GlobalConstants.AUTHENTICATE_URL = `${GlobalConstants.ROOT_URL}/user/authenticate`;
GlobalConstants.UNIQUE_USER_URL = `${GlobalConstants.ROOT_URL}/user/check`;
GlobalConstants.FORGOT_PASSWORD_URL = `${GlobalConstants.ROOT_URL}/user/forgot-password`;
GlobalConstants.AUDITORIUM_URL = `${GlobalConstants.ROOT_URL}/auditorium`;
GlobalConstants.GET_ALL_AUDITORIUMS_URL = `${GlobalConstants.ROOT_URL}/auditorium/all`;
GlobalConstants.ADD_AUDITORIUM_URL = `${GlobalConstants.ROOT_URL}/auditorium/add`;
GlobalConstants.UPDATE_AUDITORIUM_URL = `${GlobalConstants.ROOT_URL}/auditorium/update`;
GlobalConstants.DELETE_AUDITORIUM_URL = `${GlobalConstants.ROOT_URL}/auditorium/delete`;
GlobalConstants.MOVIE_URL = `${GlobalConstants.ROOT_URL}/movie`;
GlobalConstants.NOW_PLAYING_AND_UP_COMING_MOVIES_URL = `${GlobalConstants.MOVIE_URL}/now-playing-up-coming`;
GlobalConstants.NOW_PLAYING_MOVIES_URL = `${GlobalConstants.MOVIE_URL}/now-playing`;
GlobalConstants.UP_COMING_MOVIES_URL = `${GlobalConstants.MOVIE_URL}/up-coming`;
GlobalConstants.NOT_PLAYING_MOVIES_URL = `${GlobalConstants.MOVIE_URL}/not-playing`;
GlobalConstants.GET_ALL_MOVIES_URL = `${GlobalConstants.ROOT_URL}/movie/all`;
GlobalConstants.ADD_MOVIE_URL = `${GlobalConstants.ROOT_URL}/movie/add`;
GlobalConstants.UPDATE_MOVIE_URL = `${GlobalConstants.ROOT_URL}/movie/update`;
GlobalConstants.DELETE_MOVIE_URL = `${GlobalConstants.ROOT_URL}/movie/delete`;
GlobalConstants.SHOW_URL = `${GlobalConstants.ROOT_URL}/show`;
GlobalConstants.MOVIESHOWS_URL = `${GlobalConstants.ROOT_URL}/movie-show`;
GlobalConstants.NOW_PLAYING_AND_UP_COMING_MOVIE_SHOWS_URL = `${GlobalConstants.ROOT_URL}/movie-show/now-playing-up-coming`;
GlobalConstants.NOW_PLAYING_MOVIE_SHOWS_URL = `${GlobalConstants.MOVIESHOWS_URL}/now-playing`;
GlobalConstants.UP_COMING_MOVIE_SHOWS_URL = `${GlobalConstants.MOVIESHOWS_URL}/up-coming`;
GlobalConstants.NOT_PLAYING_MOVIE_SHOWS_URL = `${GlobalConstants.MOVIESHOWS_URL}/not-playing`;
GlobalConstants.BOOKING_URL = `${GlobalConstants.ROOT_URL}/booking`;


/***/ }),

/***/ "ukFw":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class AboutUsComponent {
    constructor() {
        this.title = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].APP_NAME;
    }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 64, vars: 1, consts: [[1, "about-us-container"], [1, "about-us-wrapper", "postion-relative"], [1, "about-us-banner"], [1, "about-us-banner-text", "h-100"], [1, "fs-1"], [1, "fs-2", "text-uppercase"], [1, "description", "mt-4"], [1, "mx-4"], [1, "fs-2"], [1, "underline", "text-warning"], [1, "text-muted", "text-start", "px-3", "p-lg-4", "p-md-3"], [1, "testimonials", "p-lg-5", "bg-dark", "text-white", "p-md-3", "mt-4"], [1, "fs-2", "pb-5", "text-center"], [1, "testimonials-list", "row", "g-0"], [1, "testimonial-card", "col-4", "px-4", "my-4"], [1, "testimonial", "text-center"], [1, "image", "mb-2", "col-3", "mx-auto"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu", "height", "120", "width", "120", 1, "mat-card-image", "rounded-circle"], [1, "comments"], [1, "fs-3", "user"], [1, "text-muted", "text-start"], [1, "text-muted", "text-start", "px-3"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu", "height", "120", "width", "120", 1, "mat-card-image", "rounded-circle", "border-1", "border-info"], [1, "branches", "mt-4", "py-5"], [1, "underline"], [1, "row", "g-0", "justify-content-around", "align-content-center"], ["color", "accent", 1, "col-3", "mx-3", "my-3", "bg-warning"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "WE provide entertainment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " 22 years ago in South Africa a seed of an idea was planted, a dream was shared. Inception happened. 22 years on, we look back at what we've built. Leave it up to us, and we'd love to do it all over again. Here's our story ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Our Happy Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "User 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " 22 years ago in South Africa a seed of an idea was planted, a dream was shared. Inception happened. 22 years on, we look back at what we've built. Leave it up to us, and we'd love to do it all over again. Here's our story ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "User 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " 22 years ago in South Africa a seed of an idea was planted, a dream was shared. Inception happened. 22 years on, we look back at what we've built. Leave it up to us, and we'd love to do it all over again. Here's our story ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "User 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " 22 years ago in South Africa a seed of an idea was planted, a dream was shared. Inception happened. 22 years on, we look back at what we've built. Leave it up to us, and we'd love to do it all over again. Here's our story ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Our Branches");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Chennai");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Coimbatore");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Hyderabad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Goa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Kochi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"]], styles: [".about-us-banner[_ngcontent-%COMP%] {\r\n  background: url(//in.bmscdn.com/webin/static/aboutus/bg.jpg) no-repeat;\r\n  background-size: cover;\r\n  height: 500px;\r\n}\r\n.about-us-banner-text[_ngcontent-%COMP%] {\r\n  padding-top: 180px;\r\n  background-color: transparent;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzRUFBc0U7RUFDdEUsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC11cy1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybCgvL2luLmJtc2Nkbi5jb20vd2ViaW4vc3RhdGljL2Fib3V0dXMvYmcuanBnKSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5hYm91dC11cy1iYW5uZXItdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "v/pu":
/*!*****************************************************************************!*\
  !*** ./src/app/components/templates/payment-form/payment-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MY_FORMATS, PaymentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFormComponent", function() { return PaymentFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/util/util */ "bFed");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global/global.service */ "Nnfz");
/* harmony import */ var src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/application/application.service */ "nlYG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














const _c0 = ["ccNumber"];
function PaymentFormComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.cardNumberErrors);
} }
function PaymentFormComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", month_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", month_r7, " ");
} }
function PaymentFormComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.monthErrors);
} }
function PaymentFormComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", year_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", year_r8, " ");
} }
function PaymentFormComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.yearErrors);
} }
function PaymentFormComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.cvvErrors);
} }
const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class PaymentFormComponent {
    constructor(_fb, _global, _appService, _router) {
        this._fb = _fb;
        this._global = _global;
        this._appService = _appService;
        this._router = _router;
        this.cvvHide = true;
        this.tempMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.tempYears = [];
    }
    ngOnInit() {
        this.tempScreen = this._global.getTempScreen();
        this.selectedMembers = this._global.getTempSelectMembers();
        if (!this.tempScreen && !this.selectedMembers)
            this._router.navigate(['/home'], { queryParams: { payment: 'false' } });
        [...Array(9).keys()].forEach(num => this.tempYears.push(new Date().getFullYear() + num));
        // this.amountToBePaid = this.tempScreen.amount;
        this.paymentForm = this._fb.group({
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[ 0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(17)]),
            cardExpiryMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            cardExpiryYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            cardCVV: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[0-9]{3}$')])
        });
    }
    get cardNumberErrors() {
        let card = this.paymentForm.get('cardNumber');
        if (card === null || card === void 0 ? void 0 : card.hasError('required'))
            return 'Card Number cannot be empty';
        else if (card === null || card === void 0 ? void 0 : card.hasError('pattern'))
            return 'Invalid card number';
        return '';
    }
    get monthErrors() {
        let month = this.paymentForm.get('cardExpiryMonth');
        return (month === null || month === void 0 ? void 0 : month.hasError('required')) ? 'Month cannot be empty' : '';
    }
    get yearErrors() {
        let year = this.paymentForm.get('cardExpiryYear');
        return (year === null || year === void 0 ? void 0 : year.hasError('required')) ? 'Year cannot be empty' : '';
    }
    get cvvErrors() {
        let cvv = this.paymentForm.get('cardCVV');
        if (cvv === null || cvv === void 0 ? void 0 : cvv.hasError('required'))
            return 'CVV Number cannot be empty';
        else if (cvv === null || cvv === void 0 ? void 0 : cvv.hasError('pattern'))
            return 'Invalid CVV number';
        return '';
    }
    /* Insert spaces to enhance legibility of credit card numbers */
    creditCardNumberSpacing() {
        const input = this.ccNumberField.nativeElement;
        const { selectionStart } = input;
        const { cardNumber } = this.paymentForm.controls;
        let trimmedCardNum = cardNumber.value.replace(/\s+/g, '');
        if (trimmedCardNum.length > 16) {
            trimmedCardNum = trimmedCardNum.substr(0, 16);
        }
        /* Handle American Express 4-6-5 spacing */
        const partitions = trimmedCardNum.startsWith('34') || trimmedCardNum.startsWith('37')
            ? [4, 6, 5]
            : [4, 4, 4, 4];
        const numbers = [];
        let position = 0;
        partitions.forEach(partition => {
            const part = trimmedCardNum.substr(position, partition);
            if (part)
                numbers.push(part);
            position += partition;
        });
        cardNumber.setValue(numbers.join(' '));
        /* Handle caret position if user edits the number later */
        if (selectionStart < cardNumber.value.length - 1) {
            input.setSelectionRange(selectionStart, selectionStart, 'none');
        }
    }
    formatTime(time) {
        return src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatTimeToAmOrPm(time);
    }
    onSubmit() {
        const members = this.selectedMembers;
        if (this.tempScreen && members && this.paymentForm.value) {
            const paymentData = this.paymentForm.value;
            paymentData.paymentDate = new Date();
            paymentData.amount = this.tempScreen.amount;
            const b_details = {
                auditoriumId: members.auditoriumId,
                showId: members.showId,
                movieShowId: members.movieShowId,
                movieId: members.movieId,
            };
            const booking = {
                amount: this.tempScreen.amount,
                bookedOn: new Date(),
                dateOfBooking: members.date,
                totalSeats: this.tempScreen.selectedSeats,
                seatNumbers: this.tempScreen.selectedSeatNumbers,
                bookingDetails: b_details,
                payment: paymentData,
            };
            this._appService.addBooking(members.auditoriumId, members.showId, members.movieShowId, booking)
                .subscribe(booking => {
                if (booking) {
                    this._router.navigate(['/my/bookings'], { queryParams: { 'payment': true } });
                }
            });
        }
    }
}
PaymentFormComponent.ɵfac = function PaymentFormComponent_Factory(t) { return new (t || PaymentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PaymentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentFormComponent, selectors: [["app-payment-form"]], viewQuery: function PaymentFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ccNumberField = _t.first);
    } }, decls: 86, vars: 27, consts: [[1, "wrapper", "p-5"], [1, "text-center", "mb-3", "p-2", "rounded", "border", "border-2", "shadow-sm"], [1, "text-center", "d-inline-block", "my-2"], [1, "text-danger", "d-inline-block", "my-2"], [1, "my-auto", "h-70vh", "row", "g-0", "justify-content-around"], [1, "col-6", "px-2", "mx-auto", "order-2"], [1, "example-form", "p-4", 3, "formGroup"], ["appearance", "outline", 1, "d-block", "w-100", "text-dark"], ["matInput", "", "formControlName", "cardNumber", "type", "tel", 1, "fs-3", "bolder", "col-12", 3, "keyup"], ["ccNumber", ""], [4, "ngIf"], [1, "row", "g-0", "justify-content-around"], ["appearance", "outline", 1, "d-block", "text-dark", "col-sm-12", "col-lg-4", "px-1"], ["formControlName", "cardExpiryMonth"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "cardExpiryYear"], ["matInput", "", "formControlName", "cardCVV", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "col-12", "my-3", 3, "disabled", "click"], [1, "col-6", "px-2", "mx-auto", "order-1"], [1, "table"], ["scope", "col", "colspan", "2"], ["scope", "row"], [3, "value"]], template: function PaymentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Payment Gateway");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Do not refresh the page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function PaymentFormComponent_Template_input_keyup_14_listener() { return ctx.creditCardNumberSpacing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "16 digit card number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PaymentFormComponent_mat_error_18_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, PaymentFormComponent_mat_option_24_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Select card expiry month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, PaymentFormComponent_mat_error_27_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, PaymentFormComponent_mat_option_32_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "select card expiry year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, PaymentFormComponent_mat_error_35_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentFormComponent_Template_button_click_40_listener() { return ctx.cvvHide = !ctx.cvvHide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, PaymentFormComponent_mat_error_43_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentFormComponent_Template_button_click_44_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Booking Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Auditorium");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Show Timing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Movie Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](74, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Movie Lang");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](85, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.paymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cardNumberErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tempMonths);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.monthErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tempYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.yearErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.cvvHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.cvvHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cvvHide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cvvErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.paymentForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Pay ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](46, 19, ctx.tempScreen.amount, "INR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedMembers.auditoriumName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectedMembers.showName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.formatTime(ctx.selectedMembers.showTime), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](74, 22, ctx.selectedMembers.movieName));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedMembers.movieLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](85, 24, ctx.selectedMembers.date, "mediumDate"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: #000 !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n  .mat-input-element {\r\n  caret-color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n  .mat-form-field-label {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #000;\r\n}\r\n  .mat-input-element::placeholder {\r\n  color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQzs7O0VBR0UsaUNBQWlDO0FBQ25DO0FBRUEsOEJBQThCO0FBQzlCOzs7RUFHRSw0QkFBNEI7QUFDOUI7QUFFQSxxQ0FBcUM7QUFDckM7OztFQUdFLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsMkJBQTJCO0FBQzdCO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0EsK0JBQStCO0FBQy9CO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJwYXltZW50LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC8vIG1hdC1pY29uLXN0ZXBwZXIgc2VsZWN0ZWQgY29sb3IgY2hhbmdlICAqL1xyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvL21hdC1pbnB1dCBmb2N1c2VkIGNvbG9yICovXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWRcclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGVycm9yIG91dGxpbmUgY29sb3IgKi9cclxuOjpuZy1kZWVwXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWRcclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIC8qIG9wYWNpdHk6IDAuOCFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBjYXJlbnQgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGVycm9yIGNhcmVudCBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LFxyXG46Om5nLWRlZXAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtbGFiZWwgbm9ybWFsIHN0YXRlIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vaW5wdXQgb3V0bGluZSBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG4vKiAvLyBtYXQtbGFiZWwgZm9jdXNlZCBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWxhYmVsIGVycm9yIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0IC5tYXQtc2VsZWN0LXRyaWdnZXIgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "ukFw");
/* harmony import */ var _components_auditorium_form_auditorium_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auditorium-form/auditorium-form.component */ "618f");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "pO+s");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "nAxv");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/layout.component */ "9KET");
/* harmony import */ var _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login-layout/login-layout.component */ "oyq9");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/manage/manage.component */ "HEqX");
/* harmony import */ var _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movie-form/movie-form.component */ "wcJZ");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movie/movie.component */ "qO9b");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/movies/movies.component */ "xVd8");
/* harmony import */ var _components_my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/my-bookings/my-bookings.component */ "NujD");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_templates_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/templates/payment-form/payment-form.component */ "v/pu");
/* harmony import */ var _components_templates_screen_screen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/templates/screen/screen.component */ "UyxY");
/* harmony import */ var _guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/admin/admin.guard */ "lNyY");
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth/auth.guard */ "fEFe");
/* harmony import */ var _guards_form_from_close_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/form/from-close.guard */ "578B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























const routes = [
    {
        path: '', component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
            { path: 'movies', component: _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_12__["MoviesComponent"] },
            { path: 'movie/:movieId', component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_11__["MovieComponent"] },
            { path: 'about', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__["AboutUsComponent"] },
            { path: 'contact', component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
            { path: 'select-seats', component: _components_templates_screen_screen_component__WEBPACK_IMPORTED_MODULE_17__["ScreenComponent"], canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
            { path: 'payment', component: _components_templates_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_16__["PaymentFormComponent"], canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
            {
                path: 'my', children: [
                    { path: '', redirectTo: '/my/profile', pathMatch: 'full' },
                    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"] },
                    { path: 'bookings', component: _components_my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_13__["MyBookingsComponent"] }
                ]
            },
        ]
    },
    {
        path: 'admin', component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], _guards_admin_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"]], children: [
            { path: '', redirectTo: '/admin/manage', pathMatch: 'full' },
            { path: 'manage', component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_9__["ManageComponent"] },
            { path: 'add-auditorium', component: _components_auditorium_form_auditorium_form_component__WEBPACK_IMPORTED_MODULE_2__["AuditoriumFormComponent"], canDeactivate: [_guards_form_from_close_guard__WEBPACK_IMPORTED_MODULE_20__["FromCloseGuard"]] },
            { path: 'add-movie', component: _components_movie_form_movie_form_component__WEBPACK_IMPORTED_MODULE_10__["MovieFormComponent"], canDeactivate: [_guards_form_from_close_guard__WEBPACK_IMPORTED_MODULE_20__["FromCloseGuard"]] }
        ]
    },
    {
        path: 'user', component: _components_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_7__["LoginLayoutComponent"], children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"] },
            { path: 'forgot-password', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"] }
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wcJZ":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-form/movie-form.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFormComponent", function() { return MovieFormComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/validators/application-validator */ "322t");
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/application/application.service */ "nlYG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/global/global.service */ "Nnfz");
/* harmony import */ var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert/alert.service */ "kyzu");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















const _c0 = ["languageInput"];
const _c1 = ["auto"];
function MovieFormComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Movie Details");
} }
function MovieFormComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.nameErrors);
} }
function MovieFormComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.releaseErrors);
} }
function MovieFormComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.imageErrors);
} }
function MovieFormComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.bgImageErrors);
} }
function MovieFormComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.durationErrors);
} }
function MovieFormComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.storyErrors);
} }
function MovieFormComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Add Language");
} }
function MovieFormComponent_mat_chip_67_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_mat_chip_67_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function MovieFormComponent_mat_chip_67_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const language_r23 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.removeLanguage(language_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MovieFormComponent_mat_chip_67_mat_icon_2_Template, 2, 0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", language_r23, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
} }
function MovieFormComponent_mat_error_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Language cannot be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_mat_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", language_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", language_r27, " ");
} }
function MovieFormComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Add Language");
} }
function MovieFormComponent_div_83_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", genre_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", genre_r32, " ");
} }
function MovieFormComponent_div_83_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Genre cannot be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_div_83_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Invalid movie genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_div_83_mat_error_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Genre already added");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_div_83_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MovieFormComponent_div_83_mat_error_7_span_1_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MovieFormComponent_div_83_mat_error_7_span_2_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MovieFormComponent_div_83_mat_error_7_span_3_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genres_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", genres_r28.errors == null ? null : genres_r28.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", genres_r28.errors == null ? null : genres_r28.errors.validGenre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", genres_r28.errors == null ? null : genres_r28.errors.uniqueName);
} }
function MovieFormComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "datalist", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, MovieFormComponent_div_83_option_6_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MovieFormComponent_div_83_mat_error_7_Template, 4, 3, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MovieFormComponent_div_83_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r37.removeGenre(i_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genres_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("list", "genres-" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "genres-" + i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r17.allGenres);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", genres_r28.touched);
} }
function MovieFormComponent_ng_template_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Add Cast Details");
} }
function MovieFormComponent_div_94_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_div_94_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Actor role cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_div_94_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Actor image cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Actor Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MovieFormComponent_div_94_mat_error_7_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Actor Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, MovieFormComponent_div_94_mat_error_13_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Actor Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, MovieFormComponent_div_94_mat_error_19_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MovieFormComponent_div_94_Template_mat_icon_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const i_r40 = ctx.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r44.removeCast(i_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = cast_r39.get("name")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required) && cast_r39.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = cast_r39.get("role")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required) && cast_r39.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = cast_r39.get("image")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required) && cast_r39.touched);
} }
function MovieFormComponent_ng_template_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Add Crew Details");
} }
function MovieFormComponent_div_105_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_div_105_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Crew role cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_div_105_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Crew image cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MovieFormComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Crew Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, MovieFormComponent_div_105_mat_error_7_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Crew Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, MovieFormComponent_div_105_mat_error_13_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Crew Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, MovieFormComponent_div_105_mat_error_19_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MovieFormComponent_div_105_Template_mat_icon_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52); const i_r47 = ctx.index; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r51.removeCrew(i_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crew_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = crew_r46.get("name")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.required) && crew_r46.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = crew_r46.get("role")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required) && crew_r46.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = crew_r46.get("image")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required) && crew_r46.touched);
} }
function MovieFormComponent_ng_template_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Review");
} }
class MovieFormComponent {
    constructor(_fb, _service, _router, _globalService, _alertService) {
        this._fb = _fb;
        this._service = _service;
        this._router = _router;
        this._globalService = _globalService;
        this._alertService = _alertService;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.languageField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.languages = ['English'];
        this.todayDate = new Date();
        this.filteredLanguages = this.languageField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((genre) => genre ? this._filter(genre) : this.allLanguages.slice()));
    }
    areYouSure() {
        return confirm('Are you sure to leave the page?');
    }
    ngOnInit() {
        this._globalService.getMovieNames()
            .subscribe(movieNames => this.allMovieNames = movieNames);
        this.allLanguages = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].ALL_LANGUAGES;
        this.allGenres = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_4__["GlobalConstants"].ALL_GENERS;
        this.movieForm = this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_3__["ApplicationValidator"].uniqueMovieName(this.allMovieNames)
            ]),
            release: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bgImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            story: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            // genres: new FormArray([new FormControl('', Validators.required)]),
            languages: this.languageField,
            genres: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_3__["ApplicationValidator"].validMovieGenre(this.allGenres)])]),
            casts: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    isCast: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('yes'),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                })]),
            crews: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    isCast: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('no'),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                })])
        });
    }
    addLanguage(event) {
        const value = (event.value || '').trim();
        let canAdd = true;
        // Add our genre
        if (!value) {
            canAdd = false;
            this._alertService.defaultAlert('Cannot add empty value');
        }
        if (this.languages.find(language => language.toLowerCase() == value.toLowerCase())) {
            canAdd = false;
            this._alertService.defaultAlert('Language already added');
        }
        if (!this.allLanguages.find(language => language.toLowerCase() == value.toLowerCase())) {
            canAdd = false;
            this._alertService.defaultAlert('Unknown language. Please select language from the list');
        }
        if (canAdd)
            this.languages.push(value);
        // Clear the input value
        // event.chipInput!.clear();
        event.input.value = '';
        this.languageField.setValue(null);
    }
    removeLanguage(genre) {
        if (!(this.languages.length <= 1)) {
            const index = this.languages.indexOf(genre);
            if (index >= 0) {
                this.languages.splice(index, 1);
            }
        }
        else
            this._alertService.defaultAlert('At least one Language must be provided');
    }
    selectedLanguage(event) {
        if (this.allLanguages.find(language => language.toLowerCase() == event.option.viewValue.toLowerCase())) {
            if (!this.languages.find(language => language.toLowerCase() == event.option.viewValue.toLowerCase())) {
                this.languages.push(event.option.viewValue);
                this.languageInput.nativeElement.value = '';
                this.languageField.setValue(null);
            }
            else
                this._alertService.defaultAlert('Language already added');
        }
        else
            this._alertService.defaultAlert('Unknown language. Please select language from the list');
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.allLanguages.filter(language => language.toLowerCase().indexOf(filterValue) === 0);
    }
    get validMovieDetails() {
        const movie = this.movieForm;
        return (movie.get('name') && movie.get('release') && movie.get('image') &&
            movie.get('bgImage') && movie.get('story') && movie.get('duration'));
    }
    ;
    get nameErrors() {
        let name = this.movieForm.get('name');
        if (name === null || name === void 0 ? void 0 : name.hasError('required'))
            return 'Name cannot be null';
        else if (name === null || name === void 0 ? void 0 : name.hasError('uniqueName'))
            return 'Movie name already exists';
        return '';
    }
    get releaseErrors() {
        let release = this.movieForm.get('release');
        if (release === null || release === void 0 ? void 0 : release.hasError('required'))
            return 'Release Date cannot be null';
        return '';
    }
    get storyErrors() {
        let story = this.movieForm.get('story');
        if (story === null || story === void 0 ? void 0 : story.hasError('required'))
            return 'Story cannot be null';
        return '';
    }
    get durationErrors() {
        let duration = this.movieForm.get('duration');
        if (duration === null || duration === void 0 ? void 0 : duration.hasError('required'))
            return 'Duration cannot be null';
        return '';
    }
    get imageErrors() {
        let image = this.movieForm.get('image');
        if (image === null || image === void 0 ? void 0 : image.hasError('required'))
            return 'Image field cannot be null';
        return '';
    }
    get bgImageErrors() {
        let bgImage = this.movieForm.get('bgImage');
        if (bgImage === null || bgImage === void 0 ? void 0 : bgImage.hasError('required'))
            return 'Background Image cannot be null';
        return '';
    }
    get genres() {
        return this.movieForm.get('genres');
    }
    get crews() {
        return this.movieForm.get('crews');
    }
    get casts() {
        return this.movieForm.get('casts');
    }
    addGenre() {
        if (this.genres.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields first');
            return;
        }
        this.genres.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_3__["ApplicationValidator"].validMovieGenre(this.allGenres),
            src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_3__["ApplicationValidator"].uniqueFacility(this.genres.value)]));
    }
    removeGenre(index) {
        if (this.genres.length <= 1) {
            this._alertService.defaultAlert('At least one Genre must be provided');
            return;
        }
        if (confirm('Do you want to remove the Genre?'))
            this.genres.removeAt(index);
    }
    // addLanguage(): void {
    //   if (this.languages.status == "INVALID") {
    //     this._alertService.defaultAlert('Please complete the above fields first');
    //     return;
    //   }
    //   this.languages.push(new FormControl('', [Validators.required, this._validator.validMovieLanguage]));
    // }
    // removeLanguage(index: number): void {
    //   if (this.languages.length <= 1) {
    //     this._alertService.defaultAlert('At least one language must be provided');
    //     // this._bar.open('At least one language must be provided', 'OK', { duration: 3000 });
    //     return
    //   }
    //   if (confirm('Do you want to remove the Language?'))
    //     this.languages.removeAt(index);
    // }
    addCrew() {
        if (this.crews.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields first');
            return;
        }
        this.crews.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            isCast: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('no'),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }));
    }
    removeCrew(index) {
        if (this.crews.length <= 1) {
            this._alertService.defaultAlert('At least one Crew details must be provided');
            return;
        }
        if (confirm('Do you want to remove the Crew?'))
            this.crews.removeAt(index);
    }
    addCast() {
        if (this.casts.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields first');
            return;
        }
        this.casts.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            isCast: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('yes'),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }));
    }
    removeCast(index) {
        if (this.casts.length <= 1) {
            this._alertService.defaultAlert('At least one Cast details must be provided');
            return;
        }
        if (confirm('Do you want to remove the Cast?'))
            this.casts.removeAt(index);
    }
    onSubmit() {
        var _a;
        let count = 0;
        const movie = this.movieForm.value;
        movie.addedOn = new Date();
        movie.year = (_a = movie.release) === null || _a === void 0 ? void 0 : _a.getFullYear().toString();
        this.languages.forEach(language => {
            movie.language = language;
            this._service.addMovie(movie)
                .subscribe(res => this._globalService.addMovie(res), err => this._alertService.postionAlert(err.error.message, 'danger-alert'));
            count++;
        });
        if (count >= this.languages.length)
            this._router.navigate(['/admin/manage'], { queryParams: { 'movie-added': true } });
    }
}
MovieFormComponent.ɵfac = function MovieFormComponent_Factory(t) { return new (t || MovieFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"])); };
MovieFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MovieFormComponent, selectors: [["app-movie-form"]], viewQuery: function MovieFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.languageInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_classes_validators_application_validator__WEBPACK_IMPORTED_MODULE_3__["ApplicationValidator"]])], decls: 124, vars: 32, consts: [[1, "form-container"], [1, "mx-auto", "text-center", "bg-color"], [1, "container", "py-5"], [1, "fs-2", "text-dark", "py-5", "text-uppercase"], [1, "form-holder", "border", "border-4", "border-warning", "rounded", "mx-5"], [3, "formGroup", "ngSubmit"], [3, "linear"], ["stepper", ""], ["errorMessage", "Movie details required", 3, "stepControl"], ["matStepLabel", ""], [1, "row", "g-0", "my-3", "justify-content-around"], [1, "col-sm-12", "col-lg-5", "mx-lg-2"], ["appearance", "outline", 1, "d-block", "w-100", "text-dark"], ["matInput", "", "placeholder", "Movie Name", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "placeholder", "Release Date", "formControlName", "release", 3, "min", "matDatepicker"], ["picker", ""], ["matSuffix", "", 3, "for"], ["matInput", "", "placeholder", "Image Link", "formControlName", "image"], ["matInput", "", "placeholder", "Background Image Link", "formControlName", "bgImage"], ["matInput", "", "placeholder", "2h 25m", "formControlName", "duration"], ["matInput", "", "formControlName", "caption"], [1, "col-sm-12", "col-lg-11"], ["matInput", "", "formControlName", "story", "placeholder", "Narrate the story here"], ["mat-button", "", "matStepperNext", "", "type", "button", 3, "disabled"], [3, "stepControl"], [1, "col-12", "my-4", "px-sm-1", "px", "xl-4"], [1, "d-block", "w-100", "text-dark"], ["aria-label", "language selection"], ["languageList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New Language...", "formControlName", "languages", 3, "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["languageInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperPrevious", "", "type", "button"], ["mat-button", "", "matStepperNext", "", "type", "button"], [1, "row", "g-0", "justify-content-around"], ["class", "col-sm-12 col-lg-5 form-field", "formArrayName", "genres", 4, "ngFor", "ngForOf"], [1, "text-center", "text-primary", "mt-4"], ["aria-hidden", "false", "matTooltip", "Add one more Genre", "aria-label", "add_circle icon", 1, "pe-cursor", "fs-2", 3, "click"], ["class", "w-100", "formArrayName", "casts", 4, "ngFor", "ngForOf"], ["aria-hidden", "false", "matTooltip", "Add one more Cast", "aria-label", "add_circle icon", 1, "pe-cursor", "fs-2", 3, "click"], ["class", "w-100", "formArrayName", "crews", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "text-success", 3, "disabled"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"], ["formArrayName", "genres", 1, "col-sm-12", "col-lg-5", "form-field"], ["matInput", "", "placeholder", "Comedy", 3, "formControlName"], [3, "id"], ["aria-hidden", "false", "matTooltip", "Remove the Genre", "aria-label", "delete icon", 1, "fs-2", "w-auto", "text-danger", "delete-icon", 3, "click"], ["class", "mx-1", 4, "ngIf"], [1, "mx-1"], ["formArrayName", "casts", 1, "w-100"], [1, "row", "g-0", "justify-content-around", "align-content-center", "form-field", 3, "formGroupName"], [1, "col-lg-3", "col-sm-6"], ["matInput", "", "placeholder", "Actor Name", "formControlName", "name"], ["matInput", "", "placeholder", "Hero", "formControlName", "role"], ["matInput", "", "placeholder", "Actor image", "formControlName", "image"], ["aria-hidden", "false", "matTooltip", "Remove the Cast", "aria-label", "delete icon", 1, "fs-2", "w-auto", "text-danger", "delete-icon", 3, "click"], ["formArrayName", "crews", 1, "w-100"], ["matInput", "", "placeholder", "Crew Name", "formControlName", "name"], ["matInput", "", "placeholder", "Director", "formControlName", "role"], ["matInput", "", "placeholder", "Crew image", "formControlName", "image"]], template: function MovieFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Add New Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function MovieFormComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-horizontal-stepper", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, MovieFormComponent_ng_template_10_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, MovieFormComponent_mat_error_17_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Release Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "mat-datepicker-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, MovieFormComponent_mat_error_26_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, MovieFormComponent_mat_error_32_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Background Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, MovieFormComponent_mat_error_38_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, MovieFormComponent_mat_error_44_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Movie Caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, MovieFormComponent_mat_error_55_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-step", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, MovieFormComponent_ng_template_60_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Add Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "mat-chip-list", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, MovieFormComponent_mat_chip_67_Template, 3, 4, "mat-chip", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matChipInputTokenEnd", function MovieFormComponent_Template_input_matChipInputTokenEnd_68_listener($event) { return ctx.addLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, MovieFormComponent_mat_error_70_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "mat-autocomplete", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("optionSelected", function MovieFormComponent_Template_mat_autocomplete_optionSelected_71_listener($event) { return ctx.selectedLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, MovieFormComponent_mat_option_73_Template, 2, 2, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](74, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "mat-step", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, MovieFormComponent_ng_template_81_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, MovieFormComponent_div_83_Template, 10, 5, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "mat-icon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MovieFormComponent_Template_mat_icon_click_85_listener() { return ctx.addGenre(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "mat-step", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, MovieFormComponent_ng_template_93_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, MovieFormComponent_div_94_Template, 22, 4, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "mat-icon", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MovieFormComponent_Template_mat_icon_click_96_listener() { return ctx.addCast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "mat-step", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](104, MovieFormComponent_ng_template_104_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](105, MovieFormComponent_div_105_Template, 22, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "mat-icon", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MovieFormComponent_Template_mat_icon_click_107_listener() { return ctx.addCrew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](115, MovieFormComponent_ng_template_115_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](118, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](66);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](72);
        let tmp_18_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.movieForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.validMovieDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.nameErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx.todayDate)("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.releaseErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.imageErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bgImageErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.durationErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.storyErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.validMovieDetails.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.movieForm.get("languages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r14)("matChipInputFor", _r10)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx.movieForm.get("languages")) == null ? null : tmp_18_0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](74, 28, ctx.filteredLanguages));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.movieForm.get("genres"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.genres.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.movieForm.get("casts"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.casts.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.movieForm.get("crews"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.crews.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("              ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](118, 30, ctx.movieForm.value), "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.movieForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperNext"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperPrevious"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["JsonPipe"]], styles: [".bg-color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    191deg,\r\n    rgba(131, 58, 180, 1) 0%,\r\n    rgba(253, 29, 29, 1) 50%,\r\n    rgba(252, 176, 69, 1) 100%\r\n  );\r\n}\r\n\r\n.form-holder[_ngcontent-%COMP%] {\r\n  margin-top: -40px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]   .delete-icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: inherit;\r\n  right: 20px;\r\n  top: 20%;\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]:hover   .delete-icon[_ngcontent-%COMP%] {\r\n  display: inline !important;\r\n}\r\n\r\n\r\n\r\n  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: #000 !important;\r\n}\r\n\r\n\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n\r\n\r\n  .mat-input-element {\r\n  caret-color: #000 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-label {\r\n  color: #000 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #000 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #000;\r\n}\r\n\r\n  .mat-input-element::placeholder {\r\n  color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzs7OztHQUtDO0FBQ0g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBLCtDQUErQzs7QUFDL0M7OztFQUdFLGlDQUFpQztBQUNuQzs7QUFFQSw4QkFBOEI7O0FBQzlCOzs7RUFHRSw0QkFBNEI7QUFDOUI7O0FBRUEscUNBQXFDOztBQUNyQzs7O0VBR0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBLG9DQUFvQzs7QUFDcEM7O0VBRUUsMkJBQTJCO0FBQzdCOztBQUVBLG9DQUFvQzs7QUFDcEM7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsMEJBQTBCOztBQUMxQjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQSwrQkFBK0I7O0FBQy9CO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBLDZCQUE2Qjs7QUFDN0I7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoibW92aWUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxOTFkZWcsXHJcbiAgICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMCUsXHJcbiAgICByZ2JhKDI1MywgMjksIDI5LCAxKSA1MCUsXHJcbiAgICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbi5mb3JtLWhvbGRlciB7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tZmllbGQgLmRlbGV0ZS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogMjAlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1maWVsZDpob3ZlciAuZGVsZXRlLWljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC8vIG1hdC1pY29uLXN0ZXBwZXIgc2VsZWN0ZWQgY29sb3IgY2hhbmdlICAqL1xyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvL21hdC1pbnB1dCBmb2N1c2VkIGNvbG9yICovXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWRcclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGVycm9yIG91dGxpbmUgY29sb3IgKi9cclxuOjpuZy1kZWVwXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWRcclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIC8qIG9wYWNpdHk6IDAuOCFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBjYXJlbnQgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWlucHV0IGVycm9yIGNhcmVudCBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LFxyXG46Om5nLWRlZXAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvLyBtYXQtbGFiZWwgbm9ybWFsIHN0YXRlIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vaW5wdXQgb3V0bGluZSBjb2xvciAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG4vKiAvLyBtYXQtbGFiZWwgZm9jdXNlZCBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWxhYmVsIGVycm9yIHN0eWxlICovXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0IC5tYXQtc2VsZWN0LXRyaWdnZXIgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "xNL9":
/*!*********************************************************************************!*\
  !*** ./src/app/components/templates/select-members/select-members.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMembersComponent", function() { return SelectMembersComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/util/util */ "bFed");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global/global.service */ "Nnfz");
/* harmony import */ var src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/application/application.service */ "nlYG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function SelectMembersComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Select the Cinema Hall");
} }
function SelectMembersComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectionChange", function SelectMembersComponent_mat_option_10_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const hall_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.onAuditoriumSelect(hall_r11.id, hall_r11.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hall_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", hall_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", hall_r11.name, " ");
} }
function SelectMembersComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.auditoriumErrors);
} }
function SelectMembersComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectionChange", function SelectMembersComponent_mat_option_21_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const show_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.onShowSelect(show_r14.id, show_r14.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", show_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", show_r14.name + " | Time: " + ctx_r4.formatTime(show_r14.startTime), " ");
} }
function SelectMembersComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.showErrors);
} }
function SelectMembersComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.dateErrors);
} }
function SelectMembersComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No Seats avaliable, please select different show timing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SelectMembersComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SelectMembersComponent_div_50_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const seat_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r19.onSeatsChange(seat_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seat_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", seat_r18 == ctx_r17.selectedSeats)("id", seat_r18)("value", seat_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", seat_r18)("ngClass", seat_r18 == ctx_r17.selectedSeats ? "text-success, border-success" : "text-warning, border-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", seat_r18, " ");
} }
function SelectMembersComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SelectMembersComponent_div_50_div_1_Template, 4, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r9.avaliableSeats$));
} }
function SelectMembersComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Review");
} }
class SelectMembers {
    constructor() {
        this.auditoriumId = 0;
        this.auditoriumName = '';
        this.showId = 0;
        this.showName = '';
        this.showTime = '';
        this.movieShowId = 0;
        this.bookedSeats = 0;
        this.bookedSeatNumbers = [];
        this.date = new Date();
        this.movieName = '';
        this.movieId = 0;
        this.movieLanguage = '';
        this.seats = 0;
    }
}
class SelectMembersComponent {
    // bookedSeats!: number;
    // bookedSeatNumber!: string[];
    constructor(_data, _sheet, _fb, _service, _appService) {
        this._data = _data;
        this._sheet = _sheet;
        this._fb = _fb;
        this._service = _service;
        this._appService = _appService;
        // selectedMovieLanguage!: string;
        // movieShowId!: number;
        // selectedShowTiming!: string;
        // selectedAuditoriumId!: number;
        // selectedShowId!: number;
        this.selectedSeats = 0;
        // this._sheet._openedBottomSheetRef?.disableClose = true;
    }
    ngOnInit() {
        console.log(this._data.movie);
        console.log(this._data.movieId);
        this.selectMembers = new SelectMembers();
        this.allAuditoriums$ = this._appService.getAuditoriumsByMovieId(this._data.movieId);
        this._data.movie.subscribe(movie => {
            this.selectMembers.movieName = movie === null || movie === void 0 ? void 0 : movie.name;
            this.selectMembers.movieLanguage = movie.language;
            // this.selectedMovieName = movie.name!;
            // this.selectedMovieLanguage = movie.language!;
            this.selectedMovieId = movie.id;
        });
        this.ticketsForm = this._fb.group({
            auditoriumName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            showName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            seats: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    resolveArray(seats) {
        if (seats > 5)
            return [...Array(6).keys()].filter(num => num > 0);
        else if (seats > 0 && seats < 5)
            return [...Array(seats + 1).keys()].filter(num => num > 0);
        else
            return new Array();
    }
    onAuditoriumSelect(hallId, hallName) {
        var _a, _b;
        if (hallName != ((_a = this.ticketsForm.get('auditoriumName')) === null || _a === void 0 ? void 0 : _a.value)) {
            this.selectMembers.auditoriumId = hallId;
            this.selectMembers.auditoriumName = hallName;
            this.allShows$ = this._appService.getShowsByMovieId(hallId, this.selectedMovieId);
            (_b = this.ticketsForm.get('showName')) === null || _b === void 0 ? void 0 : _b.reset;
        }
    }
    onShowSelect(showId, showName) {
        var _a, _b;
        if (showName != ((_a = this.ticketsForm.get('showName')) === null || _a === void 0 ? void 0 : _a.value)) {
            // this.selectedShowId = showId;
            this.selectMembers.showId = showId;
            this.selectMembers.showName = showName;
            this.allShows$.subscribe(shows => {
                var _a;
                const show = shows.find(show => show.name == showName);
                const movieShow = (_a = show === null || show === void 0 ? void 0 : show.movieShows) === null || _a === void 0 ? void 0 : _a.find(m_show => m_show.movieId == this.selectedMovieId);
                this.startDate$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])((new Date(movieShow === null || movieShow === void 0 ? void 0 : movieShow.start) < new Date()) ? new Date() : movieShow === null || movieShow === void 0 ? void 0 : movieShow.start);
                this.endDate$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(movieShow === null || movieShow === void 0 ? void 0 : movieShow.end);
                this.selectMembers.showTime = show === null || show === void 0 ? void 0 : show.startTime;
                this.selectMembers.movieShowId = movieShow === null || movieShow === void 0 ? void 0 : movieShow.id;
                this.selectMembers.movieId = this._data.movieId;
            });
            (_b = this.ticketsForm.get('date')) === null || _b === void 0 ? void 0 : _b.reset;
        }
    }
    onDateSelect(event) {
        var _a;
        const value = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        console.log(value);
        this._appService.getAllBookedSeats(this.selectMembers.movieShowId, value).subscribe(seats => {
            const count = this.resolveArray(100 - seats.count);
            this.avaliableSeats$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(count);
            this.selectedSeats = (count.length > 0 ? 1 : 0);
            this.selectMembers.bookedSeatNumbers = seats.seats;
            this.selectMembers.bookedSeats = seats.count;
        });
    }
    get auditoriumErrors() {
        let auditorium = this.ticketsForm.get('auditoriumId');
        if (auditorium === null || auditorium === void 0 ? void 0 : auditorium.hasError('require'))
            return 'Please select the Cinema Hall';
        return '';
    }
    get showErrors() {
        let timing = this.ticketsForm.get('showName');
        if (timing === null || timing === void 0 ? void 0 : timing.hasError('required'))
            return 'Please select the timing';
        return '';
    }
    get dateErrors() {
        var _a;
        if ((_a = this.ticketsForm.get('date')) === null || _a === void 0 ? void 0 : _a.hasError('required'))
            return 'Please select the date';
        return '';
    }
    onSeatsChange(seat) {
        this.selectedSeats = seat;
    }
    get icon() {
        let seats = this.selectedSeats;
        if (seats == 1)
            return 'directions_bike';
        else if (seats == 2)
            return 'two_wheeler';
        else if (seats == 3)
            return 'electric_rickshaw';
        else if (seats == 4)
            return 'time_to_leave';
        else if (seats == 5)
            return 'airport_shuttle';
        return 'error';
    }
    formatTime(time) {
        return src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_3__["Util"].formatTimeToAmOrPm(time);
    }
    proceed() {
        var _a, _b;
        // const data: TempSelectMembers = this.ticketsForm.value;
        this.selectMembers.date = (_a = this.ticketsForm.get('date')) === null || _a === void 0 ? void 0 : _a.value;
        this.selectMembers.seats = (_b = this.ticketsForm.get('seats')) === null || _b === void 0 ? void 0 : _b.value;
        this._sheet.dismiss({ tempSelectMembers: this.selectMembers });
    }
}
SelectMembersComponent.ɵfac = function SelectMembersComponent_Factory(t) { return new (t || SelectMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"])); };
SelectMembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SelectMembersComponent, selectors: [["app-select-members"]], decls: 85, vars: 36, consts: [[3, "formGroup", "ngSubmit"], ["labelPosition", "bottom", 3, "linear"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], [1, "d-block", "w-100", "mt-2"], ["formControlName", "auditoriumName", 1, "text-dark"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-button", "", "matStepperNext", "", "type", "button"], ["label", "Select the Show Timing", 3, "stepControl"], [1, "text-dark"], ["formControlName", "showName", 1, "text-dark"], ["mat-button", "", "matStepperPrevious", "", "type", "button"], ["label", "Select the Date", 3, "stepControl"], ["formControlName", "date", "matInput", "", 1, "text-dark", 3, "matDatepicker", "min", "max", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["label", "Select No.of seats", 3, "stepControl"], [1, "col-12", "my-4", "text-center", 3, "ngClass"], ["aria-hidden", "false", "aria-label", "Example home icon", 1, "fs-1"], ["class", "text-center text-danger", 4, "ngIf"], ["class", "row g-0 justify-content-around mb-4", 4, "ngIf"], ["mat-button", "", "matStepperNext", "", "type", "button", 3, "disabled"], [1, "table", "table-striped"], ["scope", "col"], ["mat-button", "", "color", "primary", 3, "disabled"], [3, "value", "onSelectionChange"], [1, "text-center", "text-danger"], [1, "row", "g-0", "justify-content-around", "mb-4"], ["class", "col-auto mx-2", 4, "ngFor", "ngForOf"], [1, "col-auto", "mx-2"], ["type", "radio", "formControlName", "seats", 1, "btn-check", 3, "checked", "id", "value", "change"], [1, "px-3", "py-2", "rounded-circle", "border", "border-4", "pe-cursor", "fs-5", 3, "for", "ngClass"]], template: function SelectMembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SelectMembersComponent_Template_form_ngSubmit_1_listener() { return ctx.proceed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SelectMembersComponent_ng_template_5_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Cinema Hall Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SelectMembersComponent_mat_option_10_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SelectMembersComponent_mat_error_12_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Show Timing");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, SelectMembersComponent_mat_option_21_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SelectMembersComponent_mat_error_23_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-step", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dateChange", function SelectMembersComponent_Template_input_dateChange_33_listener($event) { return ctx.onDateSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "mat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "mat-datepicker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, SelectMembersComponent_mat_error_39_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-step", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, SelectMembersComponent_div_49_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, SelectMembersComponent_div_50_Template, 3, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, SelectMembersComponent_ng_template_57_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Auditorium");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](74, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Seats");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, " Proceed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](38);
        let tmp_20_0 = null;
        let tmp_21_0 = null;
        let tmp_22_0 = null;
        let tmp_23_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.ticketsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.ticketsForm.get("auditoriumName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 25, ctx.allAuditoriums$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.auditoriumErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.ticketsForm.get("showName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 27, ctx.allShows$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.ticketsForm.get("date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r6)("min", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 29, ctx.startDate$))("max", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 31, ctx.endDate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dateErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.ticketsForm.get("seats"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.selectedSeats > 0 ? "text-primary" : "text-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.icon, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSeats < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSeats > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.selectedSeats < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_20_0 = ctx.ticketsForm.get("auditoriumName")) == null ? null : tmp_20_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ((tmp_21_0 = ctx.ticketsForm.get("showName")) == null ? null : tmp_21_0.value) + " | Time: " + ctx.formatTime(ctx.selectMembers == null ? null : ctx.selectMembers.showTime), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](74, 33, (tmp_22_0 = ctx.ticketsForm.get("date")) == null ? null : tmp_22_0.value, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_23_0 = ctx.ticketsForm.get("seats")) == null ? null : tmp_23_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.ticketsForm.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperPrevious"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: #000 !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n  .mat-input-element {\r\n  caret-color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n  .mat-form-field-label {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #000 !important;\r\n}\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #000;\r\n}\r\n  .mat-input-element::placeholder {\r\n  color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1tZW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DOzs7RUFHRSxpQ0FBaUM7QUFDbkM7QUFFQSw4QkFBOEI7QUFDOUI7OztFQUdFLDRCQUE0QjtBQUM5QjtBQUVBLHFDQUFxQztBQUNyQzs7O0VBR0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5QjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSwyQkFBMkI7QUFDN0I7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQSwrQkFBK0I7QUFDL0I7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNlbGVjdC1tZW1iZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvLyBtYXQtaWNvbi1zdGVwcGVyIHNlbGVjdGVkIGNvbG9yIGNoYW5nZSAgKi9cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy9tYXQtaW5wdXQgZm9jdXNlZCBjb2xvciAqL1xyXG46Om5nLWRlZXBcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBvdXRsaW5lIGNvbG9yICovXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAvKiBvcGFjaXR5OiAwLjghaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaW5wdXQgY2FyZW50IGNvbG9yICovXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBjYXJlbnQgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCxcclxuOjpuZy1kZWVwIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWxhYmVsIG5vcm1hbCBzdGF0ZSBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvL2lucHV0IG91dGxpbmUgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLy8gbWF0LWxhYmVsIGZvY3VzZWQgc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1sYWJlbCBlcnJvciBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdCAubWF0LXNlbGVjdC10cmlnZ2VyIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "xVd8":
/*!*******************************************************!*\
  !*** ./src/app/components/movies/movies.component.ts ***!
  \*******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/util/util */ "bFed");
/* harmony import */ var src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commons/global-constants */ "tdVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/application/application.service */ "nlYG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/search.pipe */ "xaSU");














function MoviesComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelectionChange", function MoviesComponent_mat_option_10_Template_mat_option_onSelectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const type_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onTypeChange(type_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r5);
} }
const _c0 = function (a0, a1) { return { "btn-warning": a0, "btn-info": a1 }; };
function MoviesComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MoviesComponent_div_24_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const language_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.handleLanguageChange(language_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", language_r8 == ctx_r1.languageFilter)("id", language_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", language_r8)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c0, language_r8 == ctx_r1.languageFilter, language_r8 != ctx_r1.languageFilter));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](language_r8);
} }
function MoviesComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MoviesComponent_div_32_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const genre_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.handleGenreChange(genre_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", genre_r11 == ctx_r2.genreFilter)("id", genre_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", genre_r11)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c0, genre_r11 == ctx_r2.genreFilter, genre_r11 != ctx_r2.genreFilter));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](genre_r11);
} }
function MoviesComponent_h1_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No movies found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MoviesComponent_div_43_ng_container_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No result found with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", ctx_r16.search, "", " " + ctx_r16.languageFilter, "", " " + ctx_r16.genreFilter, "");
} }
function MoviesComponent_div_43_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", movie_r18.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", movie_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.formatRelease(movie_r18.release), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "../movie/", movie_r18.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, movie_r18.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 8, movie_r18.language), " ");
} }
function MoviesComponent_div_43_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MoviesComponent_div_43_ng_container_2_p_1_Template, 4, 3, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MoviesComponent_div_43_ng_container_2_div_2_Template, 13, 10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", result_r15.length < 1 || !result_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", result_r15);
} }
function MoviesComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MoviesComponent_div_43_ng_container_2_Template, 3, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, ctx_r4.moviesList$), ctx_r4.search, ctx_r4.genreFilter, ctx_r4.languageFilter));
} }
const _c1 = function (a0) { return { "text-danger": a0 }; };
class MoviesComponent {
    constructor(_appService, _activeRoute, _router) {
        this._appService = _appService;
        this._activeRoute = _activeRoute;
        this._router = _router;
        this.showText = 'Now Playing';
        this.allLanguages = [];
        this.allGenres = [];
        this.types = [
            'Now Playing',
            'Up Coming',
        ];
        this.moviesList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.movies);
        this.moviesList$ = this.moviesList.asObservable();
    }
    ngOnInit() {
        this._activeRoute.queryParams
            .subscribe(param => {
            const show = param['show'];
            if (show && show == 'up-coming') {
                this.showText = 'Up Coming';
                this._appService.getAllUpComingMovies().subscribe(movies => this.moviesList.next(movies ? movies : this.movies));
            }
            else
                this._appService.getAllNowPlayingMovies().subscribe(movies => this.moviesList.next(movies));
        });
        this.allLanguages = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].ALL_LANGUAGES;
        this.allGenres = src_app_commons_global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].ALL_GENERS;
    }
    onTypeChange(type) {
        if (!(type == this.showText)) {
            const show = type == "Now Playing" ? 'now-playing' : 'up-coming';
            this._router.navigate(['../movies'], { queryParams: { 'show': show } });
        }
    }
    handleLanguageChange(language) {
        if (language && language != this.languageFilter)
            this.languageFilter = language;
    }
    handleGenreChange(genre) {
        if (genre && genre != this.genreFilter)
            this.genreFilter = genre;
    }
    clearLanguageFilter() {
        this.languageFilter = '';
    }
    clearGenreFilter() {
        this.genreFilter = '';
    }
    formatRelease(release) {
        if (new Date(release) > new Date())
            return 'Releasing on ' + src_app_classes_util_util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDate(release);
        return 'Now Playing';
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_application_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 45, vars: 25, consts: [[1, "px-lg-5", "row", "g-0", "my-5", "justify-content-around", "position-relative"], [1, "col-3"], [1, "sorting", "text-center", "mb-3", "align-self-center"], [1, "fs-2", "text-center", "text-dark", "text-uppercase"], ["appearance", "outline", 1, "d-block", "w-100"], ["name", "showText", 3, "ngModel", "ngModelChange"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "filter"], ["multi", "", "togglePosition", "before", 1, "example-headers-align"], [1, "rounded", "my-1"], [3, "ngClass"], [1, "clear-filter", 3, "ngClass", "click"], [1, "row", "g-0", "justify-content-around"], ["class", "my-2 col-4 text-start", 4, "ngFor", "ngForOf"], [1, "col-8", "movies"], [1, "now-showing"], [1, "rounded", 3, "color"], [1, "row", "g-0", "justify-content-around", "w-100", "h-auto", "py-3"], [1, "col-sm-12", "col-lg-3", "text-center"], [1, "col-sm-12", "col-lg-9"], ["type", "search", "placeholder", "Search for movie, genre or language", "aria-label", "Search", "name", "search", 1, "form-control", "me-2", "w-100", 3, "ngModel", "ngModelChange"], ["class", "text-center text-warning my-4", 4, "ngIf"], ["class", "now-showing-movies my-4", 4, "ngIf"], [3, "value", "onSelectionChange"], [1, "my-2", "col-4", "text-start"], ["type", "radio", "autocomplete", "off", "name", "selectedLanguage", 1, "btn-check", 3, "checked", "id", "change"], [1, "btn", "btn-sm", 3, "for", "ngClass"], ["type", "radio", "autocomplete", "off", "name", "selectedGenre", 1, "btn-check", 3, "checked", "id", "change"], [1, "text-center", "text-warning", "my-4"], [1, "now-showing-movies", "my-4"], [1, "card-group", "justify-content-around"], [4, "ngIf"], ["class", "lead my-2 p-2 rounded alert-danger", 4, "ngIf"], ["class", "col-4 px-2 position-relative", 4, "ngFor", "ngForOf"], [1, "lead", "my-2", "p-2", "rounded", "alert-danger"], [1, "text-danger"], [1, "col-4", "px-2", "position-relative"], [1, "image-card", "position-relative", "rounded-5", "overflow-hidden"], ["height", "400", "width", "280", 1, "card-img-top", 3, "src", "alt"], [1, "image-release", "position-absolute", "bottom-0", "start-0", "bg-dark", "text-white", "w-100", "text-center", "py-2"], [1, "card-body", "text-center"], [1, "card-title", "fs-4", "mb-0"], [1, "stretched-link", 3, "routerLink"], [1, "card-text", "text-muted"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MoviesComponent_Template_mat_select_ngModelChange_9_listener($event) { return ctx.showText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MoviesComponent_mat_option_10_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-accordion", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-expansion-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-panel-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Language ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-panel-description", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoviesComponent_Template_mat_panel_description_click_21_listener() { return ctx.clearLanguageFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, MoviesComponent_div_24_Template, 4, 8, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-expansion-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-panel-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Genre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-panel-description", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoviesComponent_Template_mat_panel_description_click_29_listener() { return ctx.clearGenreFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, MoviesComponent_div_32_Template, 4, 8, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-toolbar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MoviesComponent_Template_input_ngModelChange_40_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, MoviesComponent_h1_41_Template, 2, 0, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, MoviesComponent_div_43_Template, 5, 8, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.showText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c1, ctx.languageFilter != null && ctx.languageFilter != ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c1, ctx.languageFilter != null && ctx.languageFilter != ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allLanguages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c1, ctx.genreFilter != null && ctx.genreFilter != ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c1, ctx.genreFilter != null && ctx.genreFilter != ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allGenres);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.showText == "Now Playing" ? "primary" : "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.showText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 13, ctx.moviesList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 15, ctx.moviesList$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_13__["SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]], styles: [".clear-filter[_ngcontent-%COMP%] {\r\n  z-index: 1000;\r\n  cursor: pointer;\r\n  text-align: end;\r\n  display: inline-block;\r\n}\r\n\r\n  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-done,   .mat-step-header .mat-step-icon-state-edit {\r\n  background-color: #000 !important;\r\n}\r\n\r\n\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-focused\r\n  .mat-form-field-outline-thick {\r\n  color: blueviolet !important;\r\n}\r\n\r\n\r\n\r\n \r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: red !important;\r\n  \r\n}\r\n\r\n\r\n\r\n  .mat-input-element {\r\n  caret-color: #000 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-invalid .mat-input-element,   .mat-warn .mat-input-element {\r\n  caret-color: red !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-label {\r\n  color: #000 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: #000 !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: blueviolet !important;\r\n}\r\n\r\n\r\n\r\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: red !important;\r\n}\r\n\r\n  .mat-select .mat-select-trigger .mat-select-value {\r\n  color: #000;\r\n}\r\n\r\n  .mat-input-element::placeholder {\r\n  color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBOzs7RUFHRSxpQ0FBaUM7QUFDbkM7O0FBRUEsOEJBQThCOztBQUM5Qjs7O0VBR0UsNEJBQTRCO0FBQzlCOztBQUVBLHFDQUFxQzs7QUFDckM7OztFQUdFLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUEsOEJBQThCOztBQUM5QjtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSxvQ0FBb0M7O0FBQ3BDOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjs7QUFDMUI7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0EsK0JBQStCOztBQUMvQjtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSw2QkFBNkI7O0FBQzdCO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6Im1vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFyLWZpbHRlciB7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy9tYXQtaW5wdXQgZm9jdXNlZCBjb2xvciAqL1xyXG46Om5nLWRlZXBcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBvdXRsaW5lIGNvbG9yICovXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAvKiBvcGFjaXR5OiAwLjghaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4vKiAvLyBtYXQtaW5wdXQgY2FyZW50IGNvbG9yICovXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1pbnB1dCBlcnJvciBjYXJlbnQgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCxcclxuOjpuZy1kZWVwIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLy8gbWF0LWxhYmVsIG5vcm1hbCBzdGF0ZSBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAvL2lucHV0IG91dGxpbmUgY29sb3IgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLy8gbWF0LWxhYmVsIGZvY3VzZWQgc3R5bGUgKi9cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC8vIG1hdC1sYWJlbCBlcnJvciBzdHlsZSAqL1xyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdCAubWF0LXNlbGVjdC10cmlnZ2VyIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "xaSU":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchPipe {
    transform(movies, search, genre, language) {
        // return value.pipe(
        //   map(movies => {
        //     if (search)
        //       movies = movies.filter(movie => movie.name.toLowerCase == search.toLowerCase || movie.genres?.includes(search) || movie.language?.toLowerCase == search.toLowerCase);
        //     if (genre)
        //       movies = movies.filter(movie => movie.genres?.includes(genre));
        //     if (language)
        //       movies = movies.filter(movie => movie.language?.toLowerCase == language.toLowerCase);
        //     return movies;
        //   })
        // return [];
        // );
        if ((movies === null || movies === void 0 ? void 0 : movies.length) > 0) {
            if (search) {
                const s = search.toLowerCase();
                movies = movies === null || movies === void 0 ? void 0 : movies.filter(movie => { var _a, _b; return movie.name.toLowerCase().indexOf(s) > -1 || ((_a = movie.genres) === null || _a === void 0 ? void 0 : _a.includes(search)) || ((_b = movie.language) === null || _b === void 0 ? void 0 : _b.toLowerCase().indexOf(s)) > -1; });
            }
            if (genre)
                movies = movies === null || movies === void 0 ? void 0 : movies.filter(movie => { var _a; return (_a = movie.genres) === null || _a === void 0 ? void 0 : _a.includes(genre); });
            if (language)
                movies = movies === null || movies === void 0 ? void 0 : movies.filter(movie => { var _a; return ((_a = movie.language) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == language.toLowerCase(); });
        }
        return movies;
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });


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