(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-header></app-header>\r\n<app-breadcrumb></app-breadcrumb>\r\n<div class=\"wrapper\">\r\n    <app-loader></app-loader>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/loader/loader.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/loader/loader.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading | async\" class=\"overlay\">\r\n    <mat-progress-spinner class=\"spinner\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\r\n    </mat-progress-spinner>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-raisanissue/dialog-raisanissue.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-raisanissue/dialog-raisanissue.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <mat-icon class=\"check\">check_circle_outline</mat-icon>\r\n  You’ve raised an issue\r\n  <mat-icon class=\"dialogClose\" (click)=\"closeDialog()\">close</mat-icon>\r\n</div>\r\n<div mat-dialog-content>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <p>Issue <b>{{data.issueTitle}} </b><span class=\"green\">has been created.</span></p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label>Assigned to</label>\r\n      Amanda Jenkins\r\n      <label>Note: Responder may re-assign, if needed.</label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label>Expected Response time</label>\r\n      <ng-container *ngIf=\"data.priority === '10100'\">5 Days</ng-container>\r\n      <ng-container *ngIf=\"data.priority === '10101'\">3 Days</ng-container>\r\n      <ng-container *ngIf=\"data.priority === '10102'\">2 Days</ng-container>\r\n    </div>\r\n  </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-details/issue-details.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/issue-details/issue-details.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"issue && issue.fields\" class=\"page-container issue-details\">\r\n  <section class=\"title-section\">\r\n    <h3 class=\"page-header\">\r\n      <span>{{ issue.key }}</span>\r\n      <ng-container *ngIf=\"issue.fields.summary\">\r\n        {{ issue.fields.summary }}\r\n      </ng-container>\r\n    </h3>\r\n  </section>\r\n  <section class=\"details-section\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">Created on</span>\r\n        {{ issue.CreatedDate | date: \"dd MMM y\" }}\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <span class=\"section-head\">Study Number & Title</span>\r\n        {{ issue.StudyNumber }} - Assessing Patient and Provider Perspectives on\r\n        SDM Tools Used in Lung Cancer Screening\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">Molecule</span>\r\n        Alcensa\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">Created by</span>\r\n        {{ issue.Creator }}\r\n        <!-- Christiano Macgregor - DM -->\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <span class=\"section-head\">Therapeutic Area</span>\r\n        ONC\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">Study Phase</span>\r\n        Phase IV\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">Priority</span>\r\n        <img src=\"{{ issue.PriorityIcoPath }}\" alt=\"priority_ico\" />\r\n        {{ issue.Priority }}\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <span class=\"section-head\">Indication</span>\r\n        Malignant neoplasm of bronchus and lung\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">First Participant First Visit</span>\r\n        12 Mar 2019\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">Business Impact</span>\r\n        {{ issue.BusinessImpact }}\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">Issue Category</span>\r\n        {{ issue.Category }}\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">Vendor</span>\r\n        {{ issue.VendorName }}\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <span class=\"section-head\">Database Lock</span>\r\n        14 Apr 2019\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <!-- <span class=\"section-head\">Expected Response Time</span> -->\r\n        <span class=\"section-head\">Elapsed days</span>\r\n        2 work days\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <span class=\"section-head\">Description</span>\r\n        <p\r\n          *ngIf=\"issue.fields.description\"\r\n          [innerHTML]=\"issue.fields.description\"\r\n        ></p>\r\n        <!-- 1. Instrument (COA) name: Adapted InhibQoL with Aspects of Caregiver\r\n        Burden<br />\r\n        2. Instrument (COA) endpoint: secondary <br />\r\n        3. eCOA modality: digital pen<br />\r\n        4. eCOA Administration: site<br />\r\n        We need to investigate whether this is due to poor thermometer battery\r\n        performance. -->\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- #region COMMENTS -->\r\n  <section class=\"comments-section\">\r\n    <h4>Comment <span class=\"required\">*</span></h4>\r\n\r\n    <textarea\r\n      class=\"comments-box\"\r\n      [(ngModel)]=\"issueComment\"\r\n      maxlength=\"4000\"\r\n      placeholder=\"Please put a comment here for Resolver, Reporter or resolution text as appropriate\"\r\n    ></textarea>\r\n    <span class=\"float-right char\">\r\n      {{ 4000 - issueComment.length }} / 4000\r\n    </span>\r\n\r\n    <!-- comments list -->\r\n    <div class=\"comments-container\">\r\n      <ng-container *ngIf=\"issue.CommentsList.length\">\r\n        <article\r\n          *ngFor=\"\r\n            let comment of issue.CommentsList.slice(0, currentLastCommentNum)\r\n          \"\r\n          class=\"comment\"\r\n        >\r\n          <caption class=\"avatar\">\r\n            <!-- <img src=\"./assets/images/avatar-thumb.svg\" alt=\"Ava\" /> -->\r\n            <img src=\"{{ comment.AuthAvatarIco }}\" alt=\"Ava\" />\r\n          </caption>\r\n          <div class=\"text\">\r\n            <a href=\"javascript:;\">{{ comment.AuthName }}</a>\r\n            <p [innerHTML]=\"comment.Content\"></p>\r\n          </div>\r\n        </article>\r\n      </ng-container>\r\n\r\n      <h5 *ngIf=\"!issue.CommentsList.length\">There are no comments yet</h5>\r\n\r\n      <div\r\n        class=\"view-more\"\r\n        *ngIf=\"issue.CommentsList.length > currentLastCommentNum\"\r\n      >\r\n        <a href=\"javascript:;\" (click)=\"getMoreComments()\"\r\n          >View More Comments</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- #endregion COMMENTS -->\r\n\r\n  <!-- #region bottom form -->\r\n  <section class=\"issue-update-section\">\r\n    <form [formGroup]=\"editForm\">\r\n      <div class=\"row\">\r\n        <div class=\"assignee col-md-12\">\r\n          <h4>Change Status</h4>\r\n          <p class=\"status_info\"> (to remove) CURRENT STATUS: {{ issue.Status }} </p>\r\n          <select formControlName=\"status\" (change)=\"changeStatusHandler()\">\r\n            <option\r\n              *ngFor=\"let stat of issueStatusesOptions\"\r\n              value=\"{{ stat.label }}\"\r\n            >\r\n              {{ stat.label }}\r\n            </option>\r\n          </select>\r\n          <!-- <mat-form-field>\r\n            <mat-select\r\n              name=\"education_level\"\r\n              (selectionChange)=\"changeStatusHandler()\"\r\n            >\r\n              <mat-option\r\n                *ngFor=\"let stat of issueStatusesList\"\r\n                [value]=\"stat.label\"\r\n                >{{ stat.label }}</mat-option\r\n              >\r\n            </mat-select>\r\n          </mat-form-field> -->\r\n\r\n          <ng-container\r\n            *ngIf=\"StatusCtrl.value === issueStatuses.PENDING_CLOSURE\"\r\n          >\r\n            <p class=\"status_info\">\r\n              You have chosen to close this issue. There will be info text about\r\n              what is needed and what happens next. This issue will be\r\n              reassigned to [name] (Issue Reporter).\r\n            </p>\r\n\r\n            <!-- #region downstream sctivities -->\r\n            <h4>Downstream Activities <span class=\"required\">*</span></h4>\r\n            <div class=\"form-group\">\r\n              <div\r\n                *ngFor=\"let act of DownstreamActs.controls; let i = index\"\r\n                class=\"custom-control custom-checkbox mb10\"\r\n              >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  [formControl]=\"act\"\r\n                  name=\"name_act_{{ i }}\"\r\n                  id=\"act_{{ i }}\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"act_{{ i }}\">\r\n                  {{ getActivityTitle(i) }}\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <!-- #endregion downstream activities -->\r\n\r\n            <!-- #region root cause category -->\r\n            <h4>Root Cause Category <span class=\"required\">*</span></h4>\r\n            <p class=\"status_info mb-4 mt-1\">\r\n              Reported issue category was <b>Device failure.</b> Please select\r\n              all issue sources that apply.\r\n            </p>\r\n\r\n            <div class=\"form-group root-cause\">\r\n              <div\r\n                *ngFor=\"let act of RootCauseCats.controls; let i = index\"\r\n                class=\"custom-control custom-checkbox mb10\"\r\n              >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  [formControl]=\"act\"\r\n                  name=\"cause_cat_{{ i }}\"\r\n                  id=\"cause_cat_{{ i }}\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"cause_cat_{{ i }}\">\r\n                  {{ getCategoryTitle(i) }}\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <!-- #endregion root cause category -->\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <!-- row end -->\r\n      <div\r\n        class=\"row\"\r\n        *ngIf=\"StatusCtrl.value !== issueStatuses.PENDING_CLOSURE\"\r\n      >\r\n        <div class=\"col-md-7\">\r\n          <h4>Re-assign to</h4>\r\n          <select>\r\n            <option default hidden disabled>Select Resolver or Reporter</option>\r\n            <option\r\n              *ngFor=\"let resolver of resolversList\"\r\n              value=\"{{ resolver.id }}\"\r\n            >\r\n              {{ resolver.displayName }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </section>\r\n  <!-- #endregion bottom form -->\r\n\r\n  <!-- buttons -->\r\n  <div class=\"text-right\">\r\n    <button class=\"btn btn-secondary mr-2\" type=\"reset\" [routerLink]=\"''\">\r\n      BACK\r\n    </button>\r\n    <button class=\"btn btn-primary \" (click)=\"submitForm()\">SUBMIT</button>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/issues/issues.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/issues/issues.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-8\">\n            <h3>Issues</h3>\n        </div>\n        <div class=\"col-4 text-right\">\n            <button type=\"button\" class=\"btn btn-light mr-2 border\">View Reports</button>\n            <button [routerLink] = \"'/rais-an-issue'\" type=\"button\" class=\"btn btn-primary\">Raise an issue</button>\n        </div>\n    </div>\n\n    <div class=\"row mt-2\">\n        <div class=\"col-12 tabs-container\">\n            <mat-tab-group animationDuration=\"0ms\" [selectedIndex]=\"2\">\n                <mat-tab label=\"Assigned to me\"> \n                    <div class=\"tab-container\">\n                        <app-table-list sectionType=\"assignedToMe\"></app-table-list>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Reported by me\"> \n                    <div class=\"tab-container\">\n                        <app-table-list sectionType=\"reportedByMe\"></app-table-list>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n        </div>\n    </div>\n        \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/popover-component/popover-component.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popover-component/popover-component.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">Created on</span>\r\n            {{data.fields.created | date : 'dd MMM y'}}\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <span class=\"section-head\">Study Number & Title</span>\r\n            {{data.key}} - {{data.fields.summary}}\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">Molecule</span>\r\n            Alcensa\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">Created by</span>\r\n           {{data.fields.reporter.displayName}}\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <span class=\"section-head\">Therapeutic Area</span>\r\n            ONC\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">Study Phase</span>\r\n            Phase IV\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">Priority</span>\r\n            <svg  *ngIf=\"data.fields.priority.name === 'High'\" width=\"14\" height=\"12\" viewBox=\"0 0 14 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.875812 8.95181C0.0557871 10.2843 1.01449 12 2.57913 12H11.4209C12.9855 12 13.9442 10.2843 13.1242 8.95181L8.70332 1.76789C7.92235 0.498815 6.07765 0.498816 5.29668 1.76789L0.875812 8.95181Z\" fill=\"#CC0033\"/>\r\n            </svg>\r\n            <svg *ngIf=\"data.fields.priority.name === 'Medium'\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <circle cx=\"6\" cy=\"6\" r=\"6\" fill=\"#FFC414\"/>\r\n            </svg>\r\n            <svg *ngIf=\"data.fields.priority.name === 'Low'\"  width=\"14\" height=\"12\" viewBox=\"0 0 14 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.1242 3.04819C13.9442 1.71565 12.9855 -1.76112e-07 11.4209 -3.12897e-07L2.57913 -1.08587e-06C1.01449 -1.22265e-06 0.0557881 1.71565 0.875812 3.04819L5.29668 10.2321C6.07765 11.5012 7.92235 11.5012 8.70332 10.2321L13.1242 3.04819Z\" fill=\"#A5D2FF\"/>\r\n            </svg> \r\n            {{data.fields.priority.name}}   \r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <span class=\"section-head\">Indication</span>\r\n            Malignant neoplasm of bronchus and lung\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">First Participant First Visit</span>\r\n            12 Mar 2019\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">Business Impact</span>\r\n            <ul>\r\n                <li>Study timeline delay</li>\r\n                <li>Study cost increase</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">Issue Category</span>\r\n            Device failure\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">Vendor</span>\r\n            Signant Health\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <span class=\"section-head\">Database Lock</span>\r\n            14 Apr 2019\r\n        </div>\r\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/raise-an-issue/raise-an-issue.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/raise-an-issue/raise-an-issue.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-container page-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 \">\r\n      <h3 class=\"page-header\">Raise an Issue</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 \">\r\n        <form [formGroup]=\"raiseAnIssueForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-5\">\r\n                    <label>Study Number</label>\r\n                    <i class=\"material-icons autocomplete-down-arrow\">\r\n                        arrow_drop_down\r\n                        </i>\r\n                    <mat-form-field class=\"form-select-box\" [ngClass]=\"{ 'is-invalid': submitted && f.studyNumber.errors }\">\r\n                        <input type=\"text\"  aria-label=\"Number\" matInput formControlName=\"studyNumber\" [matAutocomplete]=\"studyNumberAuto\">\r\n                        <mat-autocomplete autoActiveFirstOption #studyNumberAuto=\"matAutocomplete\">\r\n                          <mat-option *ngFor=\"let option of filteredStudyNumberOptions | async\" [value]=\"option\">\r\n                            {{option}}\r\n                          </mat-option>\r\n                        </mat-autocomplete>\r\n                      </mat-form-field>\r\n                    <div *ngIf=\"submitted && f.studyNumber.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.studyNumber.errors.required\">Study Number is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row align-bottom\" >\r\n                <div class=\"form-group col-md-5\">\r\n                    <label>Vendor</label>\r\n                    <i class=\"material-icons autocomplete-down-arrow\">\r\n                        arrow_drop_down\r\n                        </i>\r\n                    <mat-form-field class=\"form-select-box\" [ngClass]=\"{ 'is-invalid': submitted && f.vendor.errors }\">\r\n                        <input type=\"text\"  aria-label=\"Number\" matInput  formControlName=\"vendor\" [matAutocomplete]=\"vendorAuto\">\r\n                        <mat-autocomplete autoActiveFirstOption #vendorAuto=\"matAutocomplete\">\r\n                          <mat-option *ngFor=\"let vendor of filteredVendorOptions | async\" [value]=\"vendor\">\r\n                            {{vendor}}\r\n                          </mat-option>\r\n                        </mat-autocomplete>\r\n                      </mat-form-field>\r\n                    <div *ngIf=\"submitted && f.vendor.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.vendor.errors.required\">Vendor is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-7 field-info\">\r\n                  I can’t find vendor on the list, I need to <a href=\"#\"> add a new vendor</a>.\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row form-radio\">\r\n                <div class=\"form-group col-md-5\">\r\n                  <div>\r\n                      <label>Issue Category</label>\r\n                  </div>\r\n                  <div class=\"custom-control custom-radio\">\r\n                      <input type=\"radio\" value=\"Device failure or device sync\" class=\"custom-control-input\" id=\"device-failure\" name=\"issueCategory\" formControlName=\"issueCategory\"  mdbInput>\r\n                      <label class=\"custom-control-label\" for=\"device-failure\">Device failure or device sync</label>\r\n                  </div>\r\n                  <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" value=\"Lack of device functionality\" class=\"custom-control-input\" id=\"lack-device\" name=\"issueCategory\" formControlName=\"issueCategory\"  mdbInput>\r\n                    <label class=\"custom-control-label\" for=\"lack-device\">Lack of device functionality</label>\r\n                  </div>\r\n                  <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" value=\"Vendor portal or helpdesk\" class=\"custom-control-input\" id=\"vendor-portal\" name=\"issueCategory\" formControlName=\"issueCategory\"  mdbInput>\r\n                    <label class=\"custom-control-label\" for=\"vendor-portal\">Vendor portal or helpdesk</label>\r\n                  </div>\r\n                  <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" value=\"Vendor performance\" id=\"vendor-performance\" class=\"custom-control-input\"  name=\"issueCategory\" formControlName=\"issueCategory\"  mdbInput>\r\n                    <label class=\"custom-control-label\" for=\"vendor-performance\">Vendor performance</label>\r\n                  </div>\r\n                  <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" value=\"Data security\" id=\"data-security\" class=\"custom-control-input\"  name=\"issueCategory\" formControlName=\"issueCategory\"  mdbInput>\r\n                    <label class=\"custom-control-label\" for=\"data-security\">Data security</label>\r\n                  </div>\r\n                  <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" value=\"Data quality\" id=\"data-quality\" class=\"custom-control-input\"  name=\"issueCategory\" formControlName=\"issueCategory\"  mdbInput>\r\n                    <label class=\"custom-control-label\" for=\"data-quality\">Data quality</label>\r\n                  </div>\r\n                  <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" value=\"Instrument licensing and usage\" id=\"instrument-licensing\" class=\"custom-control-input\"  name=\"issueCategory\" formControlName=\"issueCategory\"  mdbInput>\r\n                    <label class=\"custom-control-label\" for=\"instrument-licensing\">Instrument licensing and usage</label>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"submitted && f.issueCategory.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.issueCategory.errors.required\">Issue Category is required</div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label>Issue Title</label>\r\n                <input type=\"text\" placeholder=\"Type the title for the issue\" formControlName=\"issueTitle\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.issueTitle.errors }\" />\r\n                <div *ngIf=\"submitted && f.issueTitle.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.issueTitle.errors.required\">Issue Title is required</div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label>Issue Description\r\n                      <div class=\"field-info\">Make sure to include information for the following (type the COA name and delete unnecessary options):</div>\r\n                    </label>\r\n                    <textarea style=\"height: 140px;\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\"  >\r\n                      \r\n                    </textarea>\r\n                    <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.description.errors.required\">Description is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <div>\r\n                    <label>Priority</label>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"btn-group btn-group-toggle col-md-5\" ngbRadioGroup name=\"radioBasic\" formControlName=\"priority\">\r\n                      <label ngbButtonLabel class=\"btn-check with-custom-label\">\r\n                        <input ngbButton type=\"radio\" value=\"10100\">\r\n                          <i class=\"material-icons\">check</i> \r\n                          LOW\r\n                          <span class=\"custom-label\">Expected response time: 5 days</span>\r\n                      </label>\r\n                      <label ngbButtonLabel class=\"btn-check with-custom-label\">\r\n                        <input ngbButton type=\"radio\" value=\"10101\"> \r\n                          <i class=\"material-icons\"> check </i> \r\n                          MEDIUM\r\n                          <span class=\"custom-label\">Expected response time: 3 days</span>\r\n                      </label>  \r\n                      <label ngbButtonLabel class=\"btn-check with-custom-label\">\r\n                        <input ngbButton type=\"radio\" value=\"10102\"> \r\n                          <i class=\"material-icons\">check</i>\r\n                          HIGH\r\n                          <span class=\"custom-label\">Expected response time: 2 days</span>\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"col-md-7 field-info\">\r\n                        The Resolver is expected to response in 2 days.<br>\r\n                        The resolution time may take longer.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <div>\r\n                        <label>Select as many as required.</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox\"  formArrayName=\"impacts\"   *ngFor=\"let impact of raiseAnIssueForm.controls.impacts.controls; let i = index\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" [formControlName]=\"i\" id=\"{{i}}\" >\r\n                      <label class=\"custom-control-label\" for=\"{{i}}\" >{{IssueImpacts[i].name}}</label>\r\n                    </div>\r\n                                     \r\n  \r\n                    <div *ngIf=\"submitted && f.impacts.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.impacts.errors.required\">Issue Category is required</div>\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n            <div class=\"text-right\">\r\n              <button class=\"btn btn-secondary mr-1\" type=\"reset\" [routerLink] = \"''\" >Back</button>\r\n              <button class=\"btn btn-primary \" >Raise an issue</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"app-breadcrumb\">\r\n    <ul>\r\n        <li><a [routerLink] = \"'/'\">Home</a></li>\r\n        <li class=\"app-breadcrumb__arrow\"><mat-icon class=\"arrow\" aria-hidden=\"false\" aria-label=\"chevron right\">chevron_right</mat-icon></li>\r\n        <li>Issues</li>\r\n    </ul>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog/dialog-overview-example-dialog.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog/dialog-overview-example-dialog.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <mat-icon class=\"sync\">cached</mat-icon>\r\n  You’ve made changes to an issue\r\n  <mat-icon class=\"dialogClose\" (click)=\"closeDialog()\">close</mat-icon>\r\n</div>\r\n<div mat-dialog-content>\r\n  <p>Issue Oxygen breathing apparatus has too thin breathing tubes has been changed:</p>\r\n  <ul>\r\n    <li>\r\n      <label>Comment</label>\r\n      I need more details about the focus group, I will discuss this with Steve in hangout.\r\n    </li>\r\n    <li>\r\n      <label>Change Status</label>\r\n      In progress\r\n    </li>\r\n  </ul>\r\n  <label>Expected Response time</label>\r\n  <p>3 days</p>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer></footer>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header class=\"app-header\">\r\n    <div class=\"app-header__ims-logo\">\r\n        <svg width=\"145\" height=\"45\" viewBox=\"0 0 145 31\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path d=\"M84.73 8V0.94H83.77V8H84.73ZM90.05 4.43V4.37C90.05 3.25 89.2 2.89 88.33 2.89C86.97 2.89 86.55 3.66 86.55 4.38C86.55 5.32 87.41 5.57 87.72 5.66L88.36 5.85C88.82 5.99 89.31 6.14 89.31 6.76C89.31 7.16 89.08 7.54 88.34 7.54C87.46 7.54 87.27 7.01 87.27 6.58V6.45H86.41V6.58C86.41 7.41 86.86 8.1 88.26 8.1C89.68 8.1 90.15 7.34 90.15 6.59C90.15 5.79 89.67 5.37 88.83 5.13L88.31 4.98C87.85 4.85 87.34 4.65 87.34 4.17C87.34 3.8 87.63 3.42 88.3 3.42C89.07 3.42 89.24 3.95 89.24 4.29V4.43H90.05ZM95.0152 4.43V4.37C95.0152 3.25 94.1652 2.89 93.2952 2.89C91.9352 2.89 91.5152 3.66 91.5152 4.38C91.5152 5.32 92.3752 5.57 92.6852 5.66L93.3252 5.85C93.7852 5.99 94.2752 6.14 94.2752 6.76C94.2752 7.16 94.0452 7.54 93.3052 7.54C92.4252 7.54 92.2352 7.01 92.2352 6.58V6.45H91.3752V6.58C91.3752 7.41 91.8252 8.1 93.2252 8.1C94.6452 8.1 95.1152 7.34 95.1152 6.59C95.1152 5.79 94.6352 5.37 93.7952 5.13L93.2752 4.98C92.8152 4.85 92.3052 4.65 92.3052 4.17C92.3052 3.8 92.5952 3.42 93.2652 3.42C94.0352 3.42 94.2052 3.95 94.2052 4.29V4.43H95.0152ZM100.72 8V3H99.8705V6.38C99.8705 6.7 99.8305 6.92 99.5805 7.18C99.3605 7.41 98.9205 7.54 98.5905 7.54C97.6305 7.54 97.5605 6.74 97.5605 6.05V3H96.7105V6.28C96.7105 6.85 96.7505 7.42 97.2605 7.81C97.5905 8.06 97.9105 8.1 98.2205 8.1C99.0605 8.1 99.6105 7.66 99.8705 7.42V8H100.72ZM103.36 5.48H106.69V5.23C106.69 3.63 105.97 2.89 104.69 2.89C103.1 2.89 102.45 4.01 102.45 5.64C102.45 7.08 103.06 8.1 104.63 8.1C105.98 8.1 106.67 7.32 106.67 6.47H105.82C105.76 7.41 104.99 7.54 104.67 7.54C103.38 7.54 103.36 6.15 103.36 5.53V5.48ZM103.39 4.96C103.45 3.96 103.98 3.45 104.7 3.45C105.8 3.45 105.83 4.65 105.84 4.96H103.39ZM91.07 18C91.07 18 91 11.06 91 10.94H89.41L87.36 16.76L85.36 10.94H83.79C83.79 10.94 83.64 17.83 83.64 18H84.49C84.49 17.84 84.59 11.42 84.59 11.42L86.94 18H87.7L90.08 11.42C90.08 11.42 90.16 17.81 90.16 18H91.07ZM96.86 18V17.88C96.68 17.85 96.63 17.65 96.63 17.27V14.54C96.63 14.16 96.59 13.73 96.4 13.46C96.17 13.13 95.7 12.89 94.9 12.89C93.93 12.89 92.92 13.25 92.92 14.44V14.59H93.73V14.52C93.73 13.49 94.53 13.45 94.84 13.45C95.51 13.45 95.79 13.78 95.79 14.45V14.98C94.18 15.13 93.71 15.29 93.37 15.48C93.14 15.61 92.74 15.97 92.74 16.65C92.74 17.61 93.35 18.1 94.31 18.1C94.78 18.1 95.36 17.94 95.79 17.45V17.59C95.79 17.89 95.87 18 96.2 18H96.86ZM95.79 16.2C95.79 16.57 95.76 17.04 95.33 17.32C95.13 17.45 94.87 17.53 94.56 17.53C93.98 17.53 93.65 17.19 93.65 16.63C93.65 16.33 93.76 16.02 94.1 15.82C94.32 15.69 94.76 15.57 95.79 15.45V16.2ZM102.64 18V14.61C102.64 14 102.59 13.43 101.99 13.09C101.65 12.9 101.3 12.89 101.16 12.89C100.29 12.89 99.76 13.34 99.52 13.56V13H98.67V18H99.52V14.59C99.52 13.86 100.08 13.45 100.78 13.45C100.91 13.45 101.24 13.45 101.5 13.72C101.74 13.97 101.79 14.29 101.79 14.88V18H102.64ZM108.48 18V17.88C108.3 17.85 108.25 17.65 108.25 17.27V14.54C108.25 14.16 108.21 13.73 108.02 13.46C107.79 13.13 107.32 12.89 106.52 12.89C105.55 12.89 104.54 13.25 104.54 14.44V14.59H105.35V14.52C105.35 13.49 106.15 13.45 106.46 13.45C107.13 13.45 107.41 13.78 107.41 14.45V14.98C105.8 15.13 105.33 15.29 104.99 15.48C104.76 15.61 104.36 15.97 104.36 16.65C104.36 17.61 104.97 18.1 105.93 18.1C106.4 18.1 106.98 17.94 107.41 17.45V17.59C107.41 17.89 107.49 18 107.82 18H108.48ZM107.41 16.2C107.41 16.57 107.38 17.04 106.95 17.32C106.75 17.45 106.49 17.53 106.18 17.53C105.6 17.53 105.27 17.19 105.27 16.63C105.27 16.33 105.38 16.02 105.72 15.82C105.94 15.69 106.38 15.57 107.41 15.45V16.2ZM114.27 13H113.44V13.53C113.21 13.29 112.83 12.89 112.03 12.89C110.69 12.89 109.98 13.95 109.98 15.52C109.98 16.48 110.26 18 111.88 18C112.45 18 113.05 17.79 113.43 17.35V17.8C113.43 18.49 113.27 19.52 112.03 19.52C111.25 19.52 110.82 19.1 110.82 18.42H110.01V18.56C110.01 19.75 111.04 20.08 111.95 20.08C113.27 20.08 114.27 19.49 114.27 17.69V13ZM113.44 16.2C113.44 17.03 112.86 17.44 112.18 17.44C111.24 17.44 110.87 16.73 110.87 15.42C110.87 13.93 111.55 13.45 112.25 13.45C113.01 13.45 113.44 13.99 113.44 14.71V16.2ZM116.9 15.48H120.23V15.23C120.23 13.63 119.51 12.89 118.23 12.89C116.64 12.89 115.99 14.01 115.99 15.64C115.99 17.08 116.6 18.1 118.17 18.1C119.52 18.1 120.21 17.32 120.21 16.47H119.36C119.3 17.41 118.53 17.54 118.21 17.54C116.92 17.54 116.9 16.15 116.9 15.53V15.48ZM116.93 14.96C116.99 13.96 117.52 13.45 118.24 13.45C119.34 13.45 119.37 14.65 119.38 14.96H116.93ZM128.38 18V14.38C128.38 13.52 128 12.89 127.06 12.89C126.27 12.89 125.72 13.41 125.48 13.67C125.43 13.51 125.19 12.89 124.25 12.89C123.48 12.89 122.99 13.36 122.77 13.57V13H121.91V18H122.77V14.84C122.77 14.37 122.78 13.96 123.23 13.65C123.33 13.58 123.54 13.45 123.86 13.45C124.67 13.45 124.72 14.24 124.72 14.59V18H125.58V14.59C125.58 14.35 125.6 13.86 126.16 13.58C126.39 13.46 126.58 13.45 126.68 13.45C127.39 13.45 127.53 14.06 127.53 14.61V18H128.38ZM131.02 15.48H134.35V15.23C134.35 13.63 133.63 12.89 132.35 12.89C130.76 12.89 130.11 14.01 130.11 15.64C130.11 17.08 130.72 18.1 132.29 18.1C133.64 18.1 134.33 17.32 134.33 16.47H133.48C133.42 17.41 132.65 17.54 132.33 17.54C131.04 17.54 131.02 16.15 131.02 15.53V15.48ZM131.05 14.96C131.11 13.96 131.64 13.45 132.36 13.45C133.46 13.45 133.49 14.65 133.5 14.96H131.05ZM140 18V14.61C140 14 139.95 13.43 139.35 13.09C139.01 12.9 138.66 12.89 138.52 12.89C137.65 12.89 137.12 13.34 136.88 13.56V13H136.03V18H136.88V14.59C136.88 13.86 137.44 13.45 138.14 13.45C138.27 13.45 138.6 13.45 138.86 13.72C139.1 13.97 139.15 14.29 139.15 14.88V18H140ZM143.04 13.51H143.98V13H143.04V11.76L142.17 11.91V13H141.42V13.51H142.17C142.16 13.87 142.15 16.51 142.15 16.51C142.15 17.31 142.18 17.61 142.53 17.87C142.83 18.09 143.19 18.09 143.31 18.09C143.75 18.09 144.07 17.98 144.25 17.92V17.34C144.16 17.37 143.95 17.46 143.68 17.46C143.1 17.46 143.03 17.06 143.03 16.53L143.04 13.51ZM87.9 22.79C87.91 22.72 87.91 22.66 87.91 22.6C87.91 22.08 87.72 21.72 87.61 21.56C87.33 21.13 86.84 20.82 85.8 20.82C85.05 20.82 84.26 20.96 83.78 21.61C83.45 22.05 83.44 22.52 83.44 22.71C83.44 23.93 84.44 24.34 85.13 24.61L85.73 24.84C86.4 25.1 87.09 25.38 87.09 26.2C87.09 26.8 86.77 27.51 85.65 27.51C85.26 27.51 84.15 27.43 84.15 26.08V25.92H83.19V26.05C83.19 27.38 83.97 28.12 85.6 28.12C87.96 28.12 88.05 26.44 88.05 26.08C88.05 25.07 87.52 24.55 86.21 24.03L85.73 23.84C84.91 23.52 84.38 23.29 84.38 22.57C84.38 22.44 84.39 22.15 84.61 21.88C84.89 21.54 85.33 21.42 85.75 21.42C86.5 21.42 87.01 21.81 87.01 22.79H87.9ZM93.3999 23H92.6099L91.3099 26.97L89.9799 23H89.0199L90.8599 28.04L90.7199 28.44C90.5299 28.98 90.3199 29.37 89.6899 29.37C89.4199 29.37 89.2399 29.31 89.1199 29.28V29.97C89.4099 30.05 89.5899 30.05 89.7399 30.05C90.8099 30.05 91.1099 29.39 91.3699 28.66L93.3999 23ZM97.9352 24.43V24.37C97.9352 23.25 97.0852 22.89 96.2152 22.89C94.8552 22.89 94.4352 23.66 94.4352 24.38C94.4352 25.32 95.2952 25.57 95.6052 25.66L96.2452 25.85C96.7052 25.99 97.1952 26.14 97.1952 26.76C97.1952 27.16 96.9652 27.54 96.2252 27.54C95.3452 27.54 95.1552 27.01 95.1552 26.58V26.45H94.2952V26.58C94.2952 27.41 94.7452 28.1 96.1452 28.1C97.5652 28.1 98.0352 27.34 98.0352 26.59C98.0352 25.79 97.5552 25.37 96.7152 25.13L96.1952 24.98C95.7352 24.85 95.2252 24.65 95.2252 24.17C95.2252 23.8 95.5152 23.42 96.1852 23.42C96.9552 23.42 97.1252 23.95 97.1252 24.29V24.43H97.9352ZM100.66 23.51H101.6V23H100.66V21.76L99.7904 21.91V23H99.0404V23.51H99.7904C99.7804 23.87 99.7704 26.51 99.7704 26.51C99.7704 27.31 99.8004 27.61 100.15 27.87C100.45 28.09 100.81 28.09 100.93 28.09C101.37 28.09 101.69 27.98 101.87 27.92V27.34C101.78 27.37 101.57 27.46 101.3 27.46C100.72 27.46 100.65 27.06 100.65 26.53L100.66 23.51ZM103.78 25.48H107.11V25.23C107.11 23.63 106.39 22.89 105.11 22.89C103.52 22.89 102.87 24.01 102.87 25.64C102.87 27.08 103.48 28.1 105.05 28.1C106.4 28.1 107.09 27.32 107.09 26.47H106.24C106.18 27.41 105.41 27.54 105.09 27.54C103.8 27.54 103.78 26.15 103.78 25.53V25.48ZM103.81 24.96C103.87 23.96 104.4 23.45 105.12 23.45C106.22 23.45 106.25 24.65 106.26 24.96H103.81ZM115.26 28V24.38C115.26 23.52 114.88 22.89 113.94 22.89C113.15 22.89 112.6 23.41 112.36 23.67C112.31 23.51 112.07 22.89 111.13 22.89C110.36 22.89 109.87 23.36 109.65 23.57V23H108.79V28H109.65V24.84C109.65 24.37 109.66 23.96 110.11 23.65C110.21 23.58 110.42 23.45 110.74 23.45C111.55 23.45 111.6 24.24 111.6 24.59V28H112.46V24.59C112.46 24.35 112.48 23.86 113.04 23.58C113.27 23.46 113.46 23.45 113.56 23.45C114.27 23.45 114.41 24.06 114.41 24.61V28H115.26Z\" fill=\"#737373\"/>\r\n            <path d=\"M7.92 29V0.759999H0.6V29H7.92ZM46.4491 29C46.4491 29 46.2091 1.32 46.2091 0.759999H35.4491L29.8891 19.68L24.4091 0.759999H13.6491C13.6491 1.32 13.2891 29 13.2891 29H19.9291C19.9291 27.12 20.0491 8.64 20.0491 5.6C21.3291 10.4 27.1291 29 27.1291 29H32.4891C32.4891 29 39.1691 7.12 39.5691 5.52C39.5691 12.4 39.6491 29 39.6491 29H46.4491ZM72.1994 8C72.1994 2.6 69.1194 0.159999 62.0794 0.159999C55.3994 0.159999 51.1594 2.84 51.1594 8.68C51.1594 13.72 54.3994 15.4 59.4794 17.04L61.3194 17.64C64.4794 18.68 66.0394 19.32 66.0394 21.8C66.0394 22.76 65.7194 25.84 61.7594 25.84C57.9194 25.84 57.1994 23.16 57.1994 20.88V20.56C56.4794 20.56 51.7194 20.52 50.3194 20.48V21.12C50.3194 26.68 53.8794 29.6 61.9594 29.6C67.4794 29.6 72.7994 27.24 72.7994 20.4C72.7994 15.56 70.0394 13.44 64.7994 11.8L62.4794 11.08C60.1994 10.36 57.9594 9.48 57.9594 7.24C57.9594 6.12 58.7194 3.88 61.9594 3.88C65.3594 3.88 65.8394 6.24 65.8394 8.32C67.1594 8.32 72.1994 8.4 72.1994 8.4V8Z\" fill=\"#0066CC\"/>\r\n        </svg>   \r\n    </div>\r\n    <div class=\"app-header__right-section\">\r\n        <!-- <div class=\"app-header__search\">\r\n            <mat-icon aria-hidden=\"false\" aria-label=\"search\">search</mat-icon>\r\n            <input type=\"search\" placeholder=\"Type to search\" />\r\n        </div> -->\r\n        <div class=\"app-header__user-info\">\r\n            John Deo <span>J</span>\r\n        </div>\r\n        <div class=\"app-header__roche-logo\">\r\n            <img src=\"../../assets/roche-logo.png\" alt=\"roche\">\r\n        </div>\r\n    </div>\r\n</header>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-container\">\r\n  <div\r\n    class=\"table-header\"\r\n    *ngIf=\"tableData.issues && tableData.issues.length === 1\"\r\n  >\r\n    {{ tableData.total }} ISSUE\r\n  </div>\r\n  <div\r\n    class=\"table-header\"\r\n    *ngIf=\"tableData.issues && tableData.issues.length > 1\"\r\n  >\r\n    {{ tableData.total }} ISSUES\r\n  </div>\r\n  <div\r\n    class=\"table-header\"\r\n    *ngIf=\"tableData.issues && tableData.issues.length === 0\"\r\n  >\r\n    No Issues Assigned to you\r\n  </div>\r\n  <table\r\n    mat-table\r\n    [dataSource]=\"dataSource\"\r\n    matSort\r\n    *ngIf=\"tableData.issues && tableData.issues.length >= 1\"\r\n  >\r\n    <!-- #region HEADERS -->\r\n\r\n    <!-- PRIORITY -->\r\n    <ng-container matColumnDef=\"priority\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Priority</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <ng-container *ngIf=\"element.fields.priority\">\r\n          <svg\r\n            *ngIf=\"element.fields.priority.name === 'High'\"\r\n            width=\"14\"\r\n            height=\"12\"\r\n            viewBox=\"0 0 14 12\"\r\n            fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n          >\r\n            <path\r\n              fill-rule=\"evenodd\"\r\n              clip-rule=\"evenodd\"\r\n              d=\"M0.875812 8.95181C0.0557871 10.2843 1.01449 12 2.57913 12H11.4209C12.9855 12 13.9442 10.2843 13.1242 8.95181L8.70332 1.76789C7.92235 0.498815 6.07765 0.498816 5.29668 1.76789L0.875812 8.95181Z\"\r\n              fill=\"#CC0033\"\r\n            />\r\n          </svg>\r\n          <svg\r\n            *ngIf=\"element.fields.priority.name === 'Medium'\"\r\n            width=\"12\"\r\n            height=\"12\"\r\n            viewBox=\"0 0 12 12\"\r\n            fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n          >\r\n            <circle cx=\"6\" cy=\"6\" r=\"6\" fill=\"#FFC414\" />\r\n          </svg>\r\n          <svg\r\n            *ngIf=\"element.fields.priority.name === 'Low'\"\r\n            width=\"14\"\r\n            height=\"12\"\r\n            viewBox=\"0 0 14 12\"\r\n            fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n          >\r\n            <path\r\n              fill-rule=\"evenodd\"\r\n              clip-rule=\"evenodd\"\r\n              d=\"M13.1242 3.04819C13.9442 1.71565 12.9855 -1.76112e-07 11.4209 -3.12897e-07L2.57913 -1.08587e-06C1.01449 -1.22265e-06 0.0557881 1.71565 0.875812 3.04819L5.29668 10.2321C6.07765 11.5012 7.92235 11.5012 8.70332 10.2321L13.1242 3.04819Z\"\r\n              fill=\"#A5D2FF\"\r\n            />\r\n          </svg>\r\n          {{ element.fields.priority.name }}\r\n        </ng-container>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"ElapsedDays\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Elapsed days</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.responseIn }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"title\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Issue title</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.fields.summary }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ element.fields.status.name }}\r\n      </td>\r\n    </ng-container>\r\n    <!-- Issue category Column -->\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Issue category</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.category }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Issue category Column -->\r\n    <ng-container matColumnDef=\"ta\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>TA</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.ta }}</td>\r\n    </ng-container>\r\n    <!-- Issue category Column -->\r\n    <ng-container matColumnDef=\"studyNo\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Study no.</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.studyNo }}</td>\r\n    </ng-container>\r\n    <!-- Issue category Column -->\r\n    <ng-container matColumnDef=\"vendor\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Vendor</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.vendor }}</td>\r\n    </ng-container>\r\n    <!-- #endregion HEADERS -->\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr\r\n      mat-row\r\n      *matRowDef=\"let row; columns: displayedColumns\"\r\n      [ngbPopover]=\"popContent\"\r\n      [popoverTitle]=\"popTitle\"\r\n      triggers=\"manual\"\r\n      #p1=\"ngbPopover\"\r\n      (mouseenter)=\"showTicketDetails(p1, row)\"\r\n      (mouseleave)=\"showTicketDetails(p1)\"\r\n      [routerLink]=\"'/issue-details/' + row.id\"\r\n    ></tr>\r\n  </table>\r\n  <p *ngIf=\"tableData.issues && tableData.issues.length >= 1\" class=\"priority-info\"> Response time for given priority (working days): Low(5days) Medium(3days) High(2days)</p>\r\n  <!-- <mat-paginator [pageSizeOptions]=\"[ 10, 25, 100]\" ></mat-paginator> -->\r\n\r\n  <ng-template class=\"app-popover\" #popContent let-row=\"row\">\r\n    <app-popover-component [data]=\"row\"></app-popover-component>\r\n  </ng-template>\r\n  <ng-template #popTitle let-row=\"row\"\r\n    ><span>{{ row.key }}</span> <br />\r\n    {{ row.fields.summary }}</ng-template\r\n  >\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./issues/issues.component */ "./src/app/issues/issues.component.ts");
            /* harmony import */ var _raise_an_issue_raise_an_issue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raise-an-issue/raise-an-issue.component */ "./src/app/raise-an-issue/raise-an-issue.component.ts");
            /* harmony import */ var _issue_details_issue_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issue-details/issue-details.component */ "./src/app/issue-details/issue-details.component.ts");
            /* harmony import */ var _shared_components_not_found_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/not-found-route.component */ "./src/app/shared/components/not-found-route.component.ts");
            var routes = [
                { path: "", component: _issues_issues_component__WEBPACK_IMPORTED_MODULE_3__["IssuesComponent"] },
                { path: "rais-an-issue", component: _raise_an_issue_raise_an_issue_component__WEBPACK_IMPORTED_MODULE_4__["RaiseAnIssueComponent"] },
                { path: "issue-details/:id", component: _issue_details_issue_details_component__WEBPACK_IMPORTED_MODULE_5__["IssueDetailsComponent"] },
                { path: "**", component: _shared_components_not_found_route_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'ims';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/services/constants.service */ "./src/app/common/services/constants.service.ts");
            /* harmony import */ var _dialog_raisanissue_dialog_raisanissue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-raisanissue/dialog-raisanissue.component */ "./src/app/dialog-raisanissue/dialog-raisanissue.component.ts");
            /* harmony import */ var _shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
            /* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./issues/issues.component */ "./src/app/issues/issues.component.ts");
            /* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./table-list/table-list.component */ "./src/app/table-list/table-list.component.ts");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _raise_an_issue_raise_an_issue_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./raise-an-issue/raise-an-issue.component */ "./src/app/raise-an-issue/raise-an-issue.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _issue_details_issue_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./issue-details/issue-details.component */ "./src/app/issue-details/issue-details.component.ts");
            /* harmony import */ var _popover_component_popover_component_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./popover-component/popover-component.component */ "./src/app/popover-component/popover-component.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./common/loader/loader.component */ "./src/app/common/loader/loader.component.ts");
            /* harmony import */ var _common_services_loader_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./common/services/loader.service */ "./src/app/common/services/loader.service.ts");
            /* harmony import */ var _common_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./common/interceptors/loader.interceptor */ "./src/app/common/interceptors/loader.interceptor.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                        _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"],
                        _issues_issues_component__WEBPACK_IMPORTED_MODULE_18__["IssuesComponent"],
                        _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_19__["TableListComponent"],
                        _raise_an_issue_raise_an_issue_component__WEBPACK_IMPORTED_MODULE_23__["RaiseAnIssueComponent"],
                        _issue_details_issue_details_component__WEBPACK_IMPORTED_MODULE_25__["IssueDetailsComponent"],
                        _shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogOverviewExampleDialog"],
                        _dialog_raisanissue_dialog_raisanissue_component__WEBPACK_IMPORTED_MODULE_2__["DialogRaisanissueComponent"],
                        _popover_component_popover_component_component__WEBPACK_IMPORTED_MODULE_26__["PopoverComponentComponent"],
                        _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_28__["LoaderComponent"]
                    ],
                    entryComponents: [_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogOverviewExampleDialog"], _dialog_raisanissue_dialog_raisanissue_component__WEBPACK_IMPORTED_MODULE_2__["DialogRaisanissueComponent"]],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]
                    ],
                    providers: [_common_services_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantsService"], _common_services_loader_service__WEBPACK_IMPORTED_MODULE_29__["LoaderService"],
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"], useClass: _common_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_30__["LoaderInterceptor"], multi: true }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/common/interceptors/loader.interceptor.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/common/interceptors/loader.interceptor.ts ***!
          \***********************************************************/
        /*! exports provided: LoaderInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function () { return LoaderInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/common/services/loader.service.ts");
            var LoaderInterceptor = /** @class */ (function () {
                function LoaderInterceptor(loaderService) {
                    this.loaderService = loaderService;
                }
                LoaderInterceptor.prototype.intercept = function (req, next) {
                    var _this = this;
                    this.loaderService.show();
                    return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loaderService.hide(); }));
                };
                return LoaderInterceptor;
            }());
            LoaderInterceptor.ctorParameters = function () { return [
                { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
            ]; };
            LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], LoaderInterceptor);
            /***/ 
        }),
        /***/ "./src/app/common/loader/loader.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/common/loader/loader.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".overlay {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(122, 122, 122, 0.596);\n  z-index: 99999;\n}\n\n.spinner {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xvYWRlci9DOlxcSENMLXByb2pcXGVDT0FcXHByb2plY3RcXGltc1xcSU1TLUFwcC9zcmNcXGFwcFxcY29tbW9uXFxsb2FkZXJcXGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw0Q0FBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMjIsIDEyMiwgMTIyLCAwLjU5Nik7XHJcbiAgICB6LWluZGV4Ojk5OTk5O1xyXG4gIH1cclxuICAuc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfSIsIi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuNTk2KTtcbiAgei1pbmRleDogOTk5OTk7XG59XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/common/loader/loader.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/common/loader/loader.component.ts ***!
          \***************************************************/
        /*! exports provided: LoaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () { return LoaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/common/services/loader.service.ts");
            var LoaderComponent = /** @class */ (function () {
                function LoaderComponent(loaderService) {
                    this.loaderService = loaderService;
                    this.color = 'primary';
                    this.mode = 'indeterminate';
                    this.value = 30;
                    this.isLoading = this.loaderService.isLoading;
                }
                LoaderComponent.prototype.ngOnInit = function () {
                };
                return LoaderComponent;
            }());
            LoaderComponent.ctorParameters = function () { return [
                { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
            ]; };
            LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loader',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/loader/loader.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/common/loader/loader.component.scss")).default]
                })
            ], LoaderComponent);
            /***/ 
        }),
        /***/ "./src/app/common/services/constants.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/common/services/constants.service.ts ***!
          \******************************************************/
        /*! exports provided: ConstantsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function () { return ConstantsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ConstantsService = /** @class */ (function () {
                function ConstantsService() {
                    this.jiraAPI = "https://jira.intranet.roche.com/jira/rest/api/2/";
                    this.nodeServerApi = "http://localhost:3000/";
                    this.nodeGetIssuesApi = this.nodeServerApi + "getIssues";
                    this.nodeGetOneIssue = this.nodeServerApi + "getIssue";
                    this.nodeRaiseAnIssue = this.nodeServerApi + "raiseAnIssue";
                    this.getResolverList = this.nodeServerApi + "getResolvers";
                    this.jiraProjectKey = "IMSS";
                    // to move on serve side
                    this.jiraGetAllAssignedTicket = this.jiraAPI +
                        "search/?jql=project = IMSS AND resolution = Unresolved AND assignee in (currentUser()) order by updated DESC";
                    this.jiraGetAllReportedByMeTicket = this.jiraAPI +
                        "search/?jql=project = IMSS AND reporter in (currentUser()) order by updated DESC";
                    this.jiraCreateIssue = this.jiraAPI + "issue/";
                    this.jiraGetOneIssue = this.jiraAPI + "issue/";
                }
                return ConstantsService;
            }());
            ConstantsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], ConstantsService);
            /***/ 
        }),
        /***/ "./src/app/common/services/loader.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/common/services/loader.service.ts ***!
          \***************************************************/
        /*! exports provided: LoaderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function () { return LoaderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var LoaderService = /** @class */ (function () {
                function LoaderService() {
                    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                }
                LoaderService.prototype.show = function () {
                    this.isLoading.next(true);
                };
                LoaderService.prototype.hide = function () {
                    this.isLoading.next(false);
                };
                return LoaderService;
            }());
            LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoaderService);
            /***/ 
        }),
        /***/ "./src/app/common/services/rest-api.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/common/services/rest-api.service.ts ***!
          \*****************************************************/
        /*! exports provided: IssuesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesService", function () { return IssuesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.service */ "./src/app/common/services/constants.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_app_shared_models_issue_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/issue.model */ "./src/app/shared/models/issue.model.ts");
            /* harmony import */ var src_app_shared_models_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/custom-issue-fields.enum */ "./src/app/shared/models/custom-issue-fields.enum.ts");
            var IssuesService = /** @class */ (function () {
                function IssuesService(http, _constant) {
                    this.http = http;
                    this._constant = _constant;
                }
                IssuesService.prototype.getAllAssignedTicket = function () {
                    return this.http.get(this._constant.nodeGetIssuesApi, {
                        params: {
                            url: this._constant.jiraGetAllAssignedTicket
                        }
                    });
                };
                IssuesService.prototype.getAllTicketReportedByme = function () {
                    return this.http.get(this._constant.nodeGetIssuesApi, {
                        params: {
                            url: this._constant.jiraGetAllReportedByMeTicket
                        }
                    });
                };
                IssuesService.prototype.getOneIssue = function (id, fieldsString) {
                    var _this = this;
                    return this.http
                        .get(this._constant.nodeGetOneIssue, {
                        params: {
                            url: "" + this._constant.jiraGetOneIssue + id + (fieldsString ? fieldsString : "")
                        }
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (r) {
                        return new src_app_shared_models_issue_model__WEBPACK_IMPORTED_MODULE_5__["Issue"](_this.clearCustomFields(r));
                    }));
                };
                IssuesService.prototype.getResolversList = function () {
                    return this.http.get(this._constant.getResolverList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (r) {
                        return r;
                    }));
                };
                IssuesService.prototype.raiseAnIssue = function (data) {
                    console.log("from service", data);
                    return this.http.post(this._constant.nodeRaiseAnIssue, data);
                };
                IssuesService.prototype.errorHandler = function (err) {
                    console.error(err);
                };
                IssuesService.prototype.clearCustomFields = function (resp) {
                    var customFieldName = "customfield";
                    var nObject = {};
                    // not necessary var
                    var numberOfCustomFields = 0;
                    Object.keys(resp.fields).forEach(function (k) {
                        if (k.indexOf(customFieldName) === -1 || Object(src_app_shared_models_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_6__["ifDefinedCustomField"])(k)) {
                            nObject[k] = resp.fields[k];
                        }
                        else {
                            numberOfCustomFields++;
                        }
                    });
                    resp.fields = nObject;
                    // not necessary log
                    console.log("numberOfCustomFields: ", numberOfCustomFields);
                    return resp;
                };
                return IssuesService;
            }());
            IssuesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"] }
            ]; };
            IssuesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], IssuesService);
            /***/ 
        }),
        /***/ "./src/app/dialog-raisanissue/dialog-raisanissue.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/dialog-raisanissue/dialog-raisanissue.component.ts ***!
          \********************************************************************/
        /*! exports provided: DialogRaisanissueComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogRaisanissueComponent", function () { return DialogRaisanissueComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var DialogRaisanissueComponent = /** @class */ (function () {
                function DialogRaisanissueComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                DialogRaisanissueComponent.prototype.closeDialog = function () {
                    this.dialogRef.close();
                };
                return DialogRaisanissueComponent;
            }());
            DialogRaisanissueComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DialogRaisanissueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'dialog-raisanissue',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-raisanissue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-raisanissue/dialog-raisanissue.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DialogRaisanissueComponent);
            /***/ 
        }),
        /***/ "./src/app/issue-details/issue-details.component.scss": 
        /*!************************************************************!*\
          !*** ./src/app/issue-details/issue-details.component.scss ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/**\n * Convert font-size from px to rem with px fallback\n *\n * @param $size - the value in pixel you want to convert\n *\n * e.g. p {@include fontSize(12px);}\n * \n */\n.issue-details .mb10 {\n  margin-bottom: 10px;\n}\n.issue-details h4 {\n  margin-top: 25px;\n  height: 25px;\n  line-height: 23px;\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n}\n.issue-details .title-section {\n  padding: 0 25px;\n}\n.issue-details .title-section .page-header {\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n}\n.issue-details .title-section .page-header span {\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 24px;\n  line-height: 1.5rem;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.0015em;\n  color: #0066CC;\n  padding-bottom: 8px;\n}\n.issue-details .details-section {\n  background: #F2F7FC;\n  padding: 25px;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n.issue-details .details-section .section-head {\n  display: inline-block;\n  width: 100%;\n  color: #8A8A8A;\n  font-size: 12px;\n  font-size: 0.75rem;\n}\n.issue-details .details-section .row {\n  margin-bottom: 20px;\n}\n.issue-details .comments-section {\n  padding: 25px 25px 0;\n}\n.issue-details .comments-section textarea.comments-box {\n  background-color: #EFEFEF;\n  border: none;\n  border-bottom: 1px solid #C4C4C4;\n  height: 130px;\n  font-size: 14px;\n  font-size: 0.875rem;\n  border-radius: 4px;\n  width: 100%;\n  resize: none;\n  padding: 12px;\n}\n.issue-details .comments-section textarea.comments-box:hover, .issue-details .comments-section textarea.comments-box:focus {\n  border-bottom-color: #0066CC;\n  outline: none;\n}\n.issue-details .comments-section .char {\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 14px;\n  line-height: 0.875rem;\n  /* identical to box height */\n  text-align: right;\n  color: #737373;\n}\n.issue-details .comments-section .comments-container {\n  padding: 50px 0 25px;\n}\n.issue-details .comments-section .comments-container .comment {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 15px;\n}\n.issue-details .comments-section .comments-container .comment .avatar {\n  padding-top: 0;\n  padding-right: 15px;\n  padding-bottom: 0;\n}\n.issue-details .comments-section .comments-container .comment .avatar img {\n  width: 36px;\n  height: 36px;\n}\n.issue-details .comments-section .comments-container .comment .text {\n  padding: 10px 15px;\n  background: #F2F7FC;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 20px;\n  line-height: 1.25rem;\n}\n.issue-details .comments-section .comments-container .comment .text a {\n  margin-right: 10px;\n}\n.issue-details .comments-section .comments-container .comment .text p {\n  display: inline;\n}\n.issue-details .comments-section .comments-container .view-more {\n  text-align: center;\n  font-weight: 500;\n  padding-top: 10px;\n}\n.issue-details .issue-update-section {\n  padding: 0 25px 25px;\n}\n.issue-details .issue-update-section .assignee {\n  padding-bottom: 25px;\n}\n.issue-details .issue-update-section select {\n  width: 100%;\n  max-width: 424px;\n  background: #E8E8E8;\n  border-radius: 4px;\n  padding: 12px;\n  height: 48px;\n  border: none;\n  color: #737373;\n}\n.issue-details .status_info {\n  margin-top: 10px;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 20px;\n  line-height: 1.25rem;\n  color: #737373;\n}\n.issue-details .form-group {\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n.issue-details .form-group.root-cause {\n  max-height: 330px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUtZGV0YWlscy9DOlxcSENMLXByb2pcXGVDT0FcXHByb2plY3RcXGltc1xcSU1TLUFwcC9zcmNcXHNjc3NcXG1peGluLnNjc3MiLCJzcmMvYXBwL2lzc3VlLWRldGFpbHMvQzpcXEhDTC1wcm9qXFxlQ09BXFxwcm9qZWN0XFxpbXNcXElNUy1BcHAvc3JjXFxhcHBcXGlzc3VlLWRldGFpbHNcXGlzc3VlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lzc3VlLWRldGFpbHMvaXNzdWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaXNzdWUtZGV0YWlscy9DOlxcSENMLXByb2pcXGVDT0FcXHByb2plY3RcXGltc1xcSU1TLUFwcC9zcmNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBQUE7QUNJRTtFQUNFLG1CQUFBO0FDS0o7QURIRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREhFO0VBQ0UsZUFBQTtBQ0tKO0FESkk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDTU47QURMTTtFREZGLGVDR3NCO0VERnRCLGVBQUE7RUFLQSxpQkNGd0I7RURHeEIsbUJBQUE7RUNGSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNFMUJXO0VGMkJYLG1CQUFBO0FDU1I7QURKRTtFQUNFLG1CRTFCaUI7RUYyQmpCLGFBQUE7RURoQkEsZUNpQmtCO0VEaEJsQixtQkFBQTtBRXVCSjtBRE5JO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0VsQkk7RUhITixlQ3NCb0I7RURyQnBCLGtCQUFBO0FFOEJKO0FEUEk7RUFDRSxtQkFBQTtBQ1NOO0FETEU7RUFDRSxvQkFBQTtBQ09KO0FETkk7RUFDRSx5QkUxQkk7RUYyQkosWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFRG5DRixlQ29Db0I7RURuQ3BCLG1CQUFBO0VDb0NFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDU047QURSTTtFQUVFLDRCRTdEVztFRjhEWCxhQUFBO0FDU1I7QUROSTtFRC9DQSxlQ2dEb0I7RUQvQ3BCLGtCQUFBO0VBS0EsaUJDMkNzQjtFRDFDdEIscUJBQUE7RUMyQ0UsNEJBQUE7RUFFQSxpQkFBQTtFQUNBLGNFbkRJO0FENERWO0FEUEk7RUFDRSxvQkFBQTtBQ1NOO0FEUk07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1VSO0FEVFE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1dWO0FEVlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1laO0FEVFE7RUFDRSxrQkFBQTtFQUNBLG1CRW5GVztFRm9GWCxrQkFBQTtFQUNBLHFCQUFBO0VEMUVOLGVDMkV3QjtFRDFFeEIsbUJBQUE7RUFLQSxpQkNzRTBCO0VEckUxQixvQkFBQTtBRWtGSjtBRFpVO0VBQ0Usa0JBQUE7QUNjWjtBRFpVO0VBQ0UsZUFBQTtBQ2NaO0FEVk07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNZUjtBRFJFO0VBQ0Usb0JBQUE7QUNVSjtBRFRJO0VBQ0Usb0JBQUE7QUNXTjtBRFRJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJFM0ZJO0VGNEZKLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0V2R0k7QURrSFY7QURSRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUQ5R0EsZUMrR2tCO0VEOUdsQixtQkFBQTtFQUtBLGlCQzBHb0I7RUR6R3BCLG9CQUFBO0VDMEdBLGNFL0dNO0FEMkhWO0FEVkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDWUo7QURWRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvaXNzdWUtZGV0YWlscy9pc3N1ZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbnZlcnQgZm9udC1zaXplIGZyb20gcHggdG8gcmVtIHdpdGggcHggZmFsbGJhY2tcclxuICpcclxuICogQHBhcmFtICRzaXplIC0gdGhlIHZhbHVlIGluIHBpeGVsIHlvdSB3YW50IHRvIGNvbnZlcnRcclxuICpcclxuICogZS5nLiBwIHtAaW5jbHVkZSBmb250U2l6ZSgxMnB4KTt9XHJcbiAqIFxyXG4gKi9cclxuXHJcbi8vIEZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIGEgcHggYmFzZWQgZm9udC1zaXplIHRvIHJlbS5cclxuQGZ1bmN0aW9uIGNhbGN1bGF0ZVJlbSgkc2l6ZSkge1xyXG4gICAgJHJlbVNpemU6ICRzaXplIC8gMTZweDtcclxuICAgIC8vRGVmYXVsdCBmb250IHNpemUgb24gaHRtbCBlbGVtZW50IGlzIDEwMCUsIGVxdWl2YWxlbnQgdG8gMTZweDtcclxuICAgIEByZXR1cm4gI3skcmVtU2l6ZX1yZW07XHJcbn1cclxuXHJcbi8vIE1peGluIHRoYXQgd2lsbCBpbmNsdWRlIHRoZSBmYWxsIGJhY2sgcHggZGVjbGFyYXRpb24gYXMgd2VsbCBhcyB0aGUgY2FsY3VsYXRlZCByZW0gdmFsdWUuXHJcbkBtaXhpbiBmb250U2l6ZSgkc2l6ZSkge1xyXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKCRzaXplKTtcclxufVxyXG5cclxuLy8gTWl4aW4gdGhhdCB3aWxsIGluY2x1ZGUgdGhlIGZhbGwgYmFjayBweCBkZWNsYXJhdGlvbiBhcyB3ZWxsIGFzIHRoZSBjYWxjdWxhdGVkIHJlbSB2YWx1ZS5cclxuQG1peGluIGxpbmVIZWlnaHQoJHNpemUpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjdWxhdGVSZW0oJHNpemUpO1xyXG59IiwiQGltcG9ydCAnLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9zY3NzL21peGluJztcclxuXHJcbi5pc3N1ZS1kZXRhaWxzIHtcclxuICAubWIxMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBoNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIC50aXRsZS1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgIC5wYWdlLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBAaW5jbHVkZSBmb250U2l6ZSgxNnB4KTtcclxuICAgICAgICBAaW5jbHVkZSBsaW5lSGVpZ2h0KDI0cHgpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDE1ZW07XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yLTAxO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXRhaWxzLXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvci0wNDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBAaW5jbHVkZSBmb250U2l6ZSgxNHB4KTtcclxuICAgIC5zZWN0aW9uLWhlYWQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogJEdyYXktMDU7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnRTaXplKDEycHgpO1xyXG4gICAgfVxyXG4gICAgLnJvdyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29tbWVudHMtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHggMDtcclxuICAgIHRleHRhcmVhLmNvbW1lbnRzLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRHcmF5LTA4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkR3JheS0xMDtcclxuICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgQGluY2x1ZGUgZm9udFNpemUoMTRweCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgJjpob3ZlcixcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHByaW1hcnktY29sb3ItMDE7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoYXIge1xyXG4gICAgICBAaW5jbHVkZSBmb250U2l6ZSgxMnB4KTtcclxuICAgICAgQGluY2x1ZGUgbGluZUhlaWdodCgxNHB4KTtcclxuICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogJEdyYXktMDQ7XHJcbiAgICB9XHJcbiAgICAuY29tbWVudHMtY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogNTBweCAwIDI1cHg7XHJcbiAgICAgIC5jb21tZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3ItMDQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmb250U2l6ZSgxNHB4KTtcclxuICAgICAgICAgIEBpbmNsdWRlIGxpbmVIZWlnaHQoMjBweCk7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnZpZXctbW9yZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmlzc3VlLXVwZGF0ZS1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAgMjVweCAyNXB4O1xyXG4gICAgLmFzc2lnbmVlIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiA0MjRweDtcclxuICAgICAgYmFja2dyb3VuZDogJEdyYXktMTE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkR3JheS0wNDtcclxuICAgIH1cclxuICB9XHJcbiAgLnN0YXR1c19pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplKDE0cHgpO1xyXG4gICAgQGluY2x1ZGUgbGluZUhlaWdodCgyMHB4KTtcclxuICAgIGNvbG9yOiAkR3JheS0wNDtcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXAucm9vdC1jYXVzZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxufVxyXG4iLCIvKipcbiAqIENvbnZlcnQgZm9udC1zaXplIGZyb20gcHggdG8gcmVtIHdpdGggcHggZmFsbGJhY2tcbiAqXG4gKiBAcGFyYW0gJHNpemUgLSB0aGUgdmFsdWUgaW4gcGl4ZWwgeW91IHdhbnQgdG8gY29udmVydFxuICpcbiAqIGUuZy4gcCB7QGluY2x1ZGUgZm9udFNpemUoMTJweCk7fVxuICogXG4gKi9cbi5pc3N1ZS1kZXRhaWxzIC5tYjEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pc3N1ZS1kZXRhaWxzIGg0IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5pc3N1ZS1kZXRhaWxzIC50aXRsZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuLmlzc3VlLWRldGFpbHMgLnRpdGxlLXNlY3Rpb24gLnBhZ2UtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaXNzdWUtZGV0YWlscyAudGl0bGUtc2VjdGlvbiAucGFnZS1oZWFkZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDAxNWVtO1xuICBjb2xvcjogIzAwNjZDQztcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5pc3N1ZS1kZXRhaWxzIC5kZXRhaWxzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjRjJGN0ZDO1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uaXNzdWUtZGV0YWlscyAuZGV0YWlscy1zZWN0aW9uIC5zZWN0aW9uLWhlYWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzhBOEE4QTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4uaXNzdWUtZGV0YWlscyAuZGV0YWlscy1zZWN0aW9uIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmlzc3VlLWRldGFpbHMgLmNvbW1lbnRzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAyNXB4IDI1cHggMDtcbn1cbi5pc3N1ZS1kZXRhaWxzIC5jb21tZW50cy1zZWN0aW9uIHRleHRhcmVhLmNvbW1lbnRzLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDNEM0QzQ7XG4gIGhlaWdodDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmlzc3VlLWRldGFpbHMgLmNvbW1lbnRzLXNlY3Rpb24gdGV4dGFyZWEuY29tbWVudHMtYm94OmhvdmVyLCAuaXNzdWUtZGV0YWlscyAuY29tbWVudHMtc2VjdGlvbiB0ZXh0YXJlYS5jb21tZW50cy1ib3g6Zm9jdXMge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDA2NkNDO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmlzc3VlLWRldGFpbHMgLmNvbW1lbnRzLXNlY3Rpb24gLmNoYXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAwLjg3NXJlbTtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuLmlzc3VlLWRldGFpbHMgLmNvbW1lbnRzLXNlY3Rpb24gLmNvbW1lbnRzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUwcHggMCAyNXB4O1xufVxuLmlzc3VlLWRldGFpbHMgLmNvbW1lbnRzLXNlY3Rpb24gLmNvbW1lbnRzLWNvbnRhaW5lciAuY29tbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmlzc3VlLWRldGFpbHMgLmNvbW1lbnRzLXNlY3Rpb24gLmNvbW1lbnRzLWNvbnRhaW5lciAuY29tbWVudCAuYXZhdGFyIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmlzc3VlLWRldGFpbHMgLmNvbW1lbnRzLXNlY3Rpb24gLmNvbW1lbnRzLWNvbnRhaW5lciAuY29tbWVudCAuYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG4uaXNzdWUtZGV0YWlscyAuY29tbWVudHMtc2VjdGlvbiAuY29tbWVudHMtY29udGFpbmVyIC5jb21tZW50IC50ZXh0IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGN0ZDO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG59XG4uaXNzdWUtZGV0YWlscyAuY29tbWVudHMtc2VjdGlvbiAuY29tbWVudHMtY29udGFpbmVyIC5jb21tZW50IC50ZXh0IGEge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaXNzdWUtZGV0YWlscyAuY29tbWVudHMtc2VjdGlvbiAuY29tbWVudHMtY29udGFpbmVyIC5jb21tZW50IC50ZXh0IHAge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uaXNzdWUtZGV0YWlscyAuY29tbWVudHMtc2VjdGlvbiAuY29tbWVudHMtY29udGFpbmVyIC52aWV3LW1vcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmlzc3VlLWRldGFpbHMgLmlzc3VlLXVwZGF0ZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMCAyNXB4IDI1cHg7XG59XG4uaXNzdWUtZGV0YWlscyAuaXNzdWUtdXBkYXRlLXNlY3Rpb24gLmFzc2lnbmVlIHtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG4uaXNzdWUtZGV0YWlscyAuaXNzdWUtdXBkYXRlLXNlY3Rpb24gc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDI0cHg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMTJweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuLmlzc3VlLWRldGFpbHMgLnN0YXR1c19pbmZvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBjb2xvcjogIzczNzM3Mztcbn1cbi5pc3N1ZS1kZXRhaWxzIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5pc3N1ZS1kZXRhaWxzIC5mb3JtLWdyb3VwLnJvb3QtY2F1c2Uge1xuICBtYXgtaGVpZ2h0OiAzMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xufSIsIiRwcmltYXJ5LWNvbG9yLTAxOiAjMDA2NkNDO1xyXG4kcHJpbWFyeS1jb2xvci0wMjogIzMzMzMzMztcclxuJHByaW1hcnktY29sb3ItMDM6ICNGRkZGRkY7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yLTAxOiAjNTM5Q0U1O1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTAyOiAjODBCM0U2O1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTAzOiAjQkZEOUYyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA0OiAjRjJGN0ZDO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA1OiAjQTVEMkZGO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA2OiAjRDJFOUZGO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA3OiAjRTlGNEZGO1xyXG5cclxuXHJcbiRhbGVydC1ncmVlbjogIzAwODc1QTtcclxuJGFsZXJ0LXllbGxvdzogI0ZGQzQxNDtcclxuJGFsZXJ0LXJlZDojQ0MwMDMzO1xyXG5cclxuJEdyYXktMDE6ICMwMDAwMDA7XHJcbiRHcmF5LTAyOiAjMTkxOTE5O1xyXG4kR3JheS0wMzogIzRENEQ0RDtcclxuJEdyYXktMDQ6ICM3MzczNzM7XHJcbiRHcmF5LTA1OiAjOEE4QThBO1xyXG4kR3JheS0wNjogI0JBQkFCQTtcclxuJEdyYXktMDc6ICNEM0QzRDM7XHJcbiRHcmF5LTA4OiAjRUZFRkVGO1xyXG4kR3JheS0wOTogI0ZBRkFGQTtcclxuJEdyYXktMTA6ICNDNEM0QzQ7XHJcbiRHcmF5LTExOiAjRThFOEU4OyJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/issue-details/issue-details.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/issue-details/issue-details.component.ts ***!
          \**********************************************************/
        /*! exports provided: IssueDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueDetailsComponent", function () { return IssueDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
            /* harmony import */ var _common_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/rest-api.service */ "./src/app/common/services/rest-api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_models_issue_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/models/issue.model */ "./src/app/shared/models/issue.model.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_models_downstream_activities_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/models/downstream-activities.model */ "./src/app/shared/models/downstream-activities.model.ts");
            /* harmony import */ var _shared_models_root_cause_categories_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/models/root-cause-categories.model */ "./src/app/shared/models/root-cause-categories.model.ts");
            /* harmony import */ var _shared_models_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/models/custom-issue-fields.enum */ "./src/app/shared/models/custom-issue-fields.enum.ts");
            var IssueDetailsComponent = /** @class */ (function () {
                function IssueDetailsComponent(fb, dialog, _restApi, activatedRoute) {
                    this.fb = fb;
                    this.dialog = dialog;
                    this._restApi = _restApi;
                    this.activatedRoute = activatedRoute;
                    this.issueComment = "";
                    this.issue = null;
                    this.currentLastCommentNum = 4;
                    this.commentPerPage = 4;
                    // TODO resolver class
                    this.resolversList = null;
                    this.issueStatusesOptions = [
                        {
                            label: _shared_models_issue_model__WEBPACK_IMPORTED_MODULE_6__["IssueStatuses"].IN_PROGRESS
                        },
                        {
                            label: _shared_models_issue_model__WEBPACK_IMPORTED_MODULE_6__["IssueStatuses"].PENDING_CLOSURE
                        }
                    ];
                    this.issueStatuses = _shared_models_issue_model__WEBPACK_IMPORTED_MODULE_6__["IssueStatuses"];
                    this.downstreamActivities = _shared_models_downstream_activities_model__WEBPACK_IMPORTED_MODULE_8__["DownstreamActivities"];
                    this.rootCauseCategory = _shared_models_root_cause_categories_model__WEBPACK_IMPORTED_MODULE_9__["RootCauseCategories"];
                }
                IssueDetailsComponent.prototype.ngOnInit = function () {
                    this.getDetails();
                    this.getResolversList();
                    this.createForm();
                };
                IssueDetailsComponent.prototype.getDetails = function () {
                    var _this = this;
                    var fieldsString = "?fields=" + Object.keys(new _shared_models_issue_model__WEBPACK_IMPORTED_MODULE_6__["IssueFields"]()).join(",") + "," + Object.keys(_shared_models_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_10__["CustomFields"])
                        .map(function (k) { return _shared_models_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_10__["CustomFields"][k]; })
                        .join(",");
                    Object.keys(new _shared_models_issue_model__WEBPACK_IMPORTED_MODULE_6__["IssueFields"]()).forEach(function (r) { return console.log(r); });
                    console.log(fieldsString);
                    this._restApi
                        .getOneIssue(this.activatedRoute.snapshot.params.id, fieldsString)
                        .subscribe(function (issueData) {
                        console.log("issue: ", issueData);
                        _this.issue = issueData;
                        console.log(_this.editForm.get("status"));
                        _this.StatusCtrl.setValue(_this.issue.Status);
                    }, function (err) { return _this._restApi.errorHandler(err); });
                };
                IssueDetailsComponent.prototype.getResolversList = function () {
                    var _this = this;
                    this._restApi.getResolversList().subscribe(function (r) {
                        // TODO response interface
                        console.log("resoveler list: ", r);
                        _this.resolversList = r.actors;
                    }, function (err) { return _this._restApi.errorHandler(err); });
                };
                // #region ACTION HANDLER
                IssueDetailsComponent.prototype.getMoreComments = function () {
                    console.log("getMoreComments! last num ", this.currentLastCommentNum);
                    this.currentLastCommentNum += this.commentPerPage;
                };
                IssueDetailsComponent.prototype.changeStatusHandler = function () {
                    console.log("change status: ", this.StatusCtrl.value);
                };
                // #endregion ACTION HANDLERs
                // submit form
                IssueDetailsComponent.prototype.submitForm = function () {
                    console.log("SubmitForm");
                    var downstreamActs = this.editForm.get("downStreamActs").value;
                    console.log("values d.acts: ", downstreamActs);
                    var dialogRef = this.dialog.open(_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogOverviewExampleDialog"], {
                        width: "870px",
                        panelClass: "custom-modalbox"
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log("The dialog was closed");
                    });
                };
                IssueDetailsComponent.prototype.createForm = function () {
                    this.editForm = this.fb.group({
                        status: [],
                        assignee: [],
                        downStreamActs: this.createDownStreamActivities(),
                        rootCauseCats: this.createRootCauseCategories()
                    });
                    console.log(this.DownstreamActs);
                };
                IssueDetailsComponent.prototype.createDownStreamActivities = function () {
                    var _this = this;
                    var arr = [];
                    console.log(this.downstreamActivities);
                    Object.keys(this.downstreamActivities).forEach(function (act) {
                        arr.push(_this.fb.control(false));
                    });
                    console.log(arr);
                    return this.fb.array(arr);
                };
                IssueDetailsComponent.prototype.createRootCauseCategories = function () {
                    var _this = this;
                    var arr = [];
                    Object.keys(this.rootCauseCategory).forEach(function (act) {
                        arr.push(_this.fb.control(false));
                    });
                    console.log(arr);
                    return this.fb.array(arr);
                };
                Object.defineProperty(IssueDetailsComponent.prototype, "StatusCtrl", {
                    // getters
                    get: function () {
                        return this.editForm.get("status");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(IssueDetailsComponent.prototype, "Assignee", {
                    get: function () {
                        return this.editForm.get("assignee");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(IssueDetailsComponent.prototype, "DownstreamActs", {
                    get: function () {
                        return this.editForm.get("downStreamActs");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(IssueDetailsComponent.prototype, "RootCauseCats", {
                    get: function () {
                        return this.editForm.get("rootCauseCats");
                    },
                    enumerable: true,
                    configurable: true
                });
                IssueDetailsComponent.prototype.getActivityTitle = function (index) {
                    return this.downstreamActivities[Object.keys(this.downstreamActivities).filter(function (v, i) {
                        if (i === index)
                            return v;
                    })[0]];
                };
                IssueDetailsComponent.prototype.getCategoryTitle = function (index) {
                    return this.rootCauseCategory[Object.keys(this.rootCauseCategory).filter(function (v, i) {
                        if (i === index)
                            return v;
                    })[0]];
                };
                return IssueDetailsComponent;
            }());
            IssueDetailsComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _common_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["IssuesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
            ]; };
            IssueDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-issue-details",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./issue-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-details/issue-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./issue-details.component.scss */ "./src/app/issue-details/issue-details.component.scss")).default]
                })
            ], IssueDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/issues/issues.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/issues/issues.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".tabs-container .mat-tab-body-wrapper, .tabs-container .mat-tab-body.mat-tab-body-active {\n  overflow: visible;\n}\n.tabs-container .mat-tab-label {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWVzL0M6XFxIQ0wtcHJvalxcZUNPQVxccHJvamVjdFxcaW1zXFxJTVMtQXBwL3NyY1xcYXBwXFxpc3N1ZXNcXGlzc3Vlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaXNzdWVzL2lzc3Vlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy9pc3N1ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy1jb250YWluZXJ7XHJcbiAgICAubWF0LXRhYi1ib2R5LXdyYXBwZXIsIC5tYXQtdGFiLWJvZHkubWF0LXRhYi1ib2R5LWFjdGl2ZXtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxuICAgIC5tYXQtdGFiLWxhYmVse1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICBcclxufSIsIi50YWJzLWNvbnRhaW5lciAubWF0LXRhYi1ib2R5LXdyYXBwZXIsIC50YWJzLWNvbnRhaW5lciAubWF0LXRhYi1ib2R5Lm1hdC10YWItYm9keS1hY3RpdmUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi50YWJzLWNvbnRhaW5lciAubWF0LXRhYi1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/issues/issues.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/issues/issues.component.ts ***!
          \********************************************/
        /*! exports provided: IssuesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function () { return IssuesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var IssuesComponent = /** @class */ (function () {
                function IssuesComponent() {
                }
                IssuesComponent.prototype.ngOnInit = function () {
                };
                return IssuesComponent;
            }());
            IssuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-issues',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./issues.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/issues/issues.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./issues.component.scss */ "./src/app/issues/issues.component.scss")).default]
                })
            ], IssuesComponent);
            /***/ 
        }),
        /***/ "./src/app/popover-component/popover-component.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/popover-component/popover-component.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXItY29tcG9uZW50L3BvcG92ZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/popover-component/popover-component.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/popover-component/popover-component.component.ts ***!
          \******************************************************************/
        /*! exports provided: PopoverComponentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponentComponent", function () { return PopoverComponentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PopoverComponentComponent = /** @class */ (function () {
                function PopoverComponentComponent() {
                }
                PopoverComponentComponent.prototype.ngOnInit = function () {
                };
                return PopoverComponentComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopoverComponentComponent.prototype, "data", void 0);
            PopoverComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popover-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popover-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/popover-component/popover-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popover-component.component.scss */ "./src/app/popover-component/popover-component.component.scss")).default]
                })
            ], PopoverComponentComponent);
            /***/ 
        }),
        /***/ "./src/app/raise-an-issue/raise-an-issue.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/raise-an-issue/raise-an-issue.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/**\n * Convert font-size from px to rem with px fallback\n *\n * @param $size - the value in pixel you want to convert\n *\n * e.g. p {@include fontSize(12px);}\n * \n */\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding: 0;\n  background: #E8E8E8;\n  border-radius: 4px;\n}\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 0;\n  display: none;\n}\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 15px 10px;\n  border: none;\n  position: relative;\n}\n.form-container .form-group {\n  margin-bottom: 25px;\n}\n.form-container .form-select-box {\n  width: 100%;\n}\n.form-container .form-select-box.is-invalid {\n  border: 1px solid #CC0033;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\");\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n  background-position: center right calc(0.375em + 0.1875rem);\n  background-repeat: no-repeat;\n}\n.form-container .form-control {\n  background-color: #EFEFEF;\n  border: none;\n  border-bottom: 1px solid #C4C4C4;\n  height: 48px;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n.form-container .autocomplete-down-arrow {\n  position: absolute;\n  top: 43px;\n  right: 20px;\n  z-index: 1;\n}\n.form-container .btn-group {\n  align-items: center;\n}\n.form-container .btn-check {\n  background-color: #FAFAFA;\n  border: 1px solid #BABABA;\n  box-sizing: border-box;\n}\n.form-container .btn-check i {\n  display: none;\n  position: absolute;\n  left: 22%;\n  font-size: 22px;\n  font-size: 1.375rem;\n}\n.form-container .btn-check:first-child {\n  border-radius: 4px 0 0 4px;\n}\n.form-container .btn-check:first-child.active {\n  margin-right: -2px;\n}\n.form-container .btn-check:last-child {\n  border-radius: 0px 4px 4px 0;\n}\n.form-container .btn-check:last-child.active {\n  margin-left: -2px;\n}\n.form-container .btn-check.active {\n  border-radius: 4px;\n  margin: 0 -2px;\n  background: #0066CC;\n  color: #FFFFFF;\n}\n.form-container .btn-check.active i {\n  display: inline;\n}\n.form-container .with-custom-label {\n  margin-bottom: 45px;\n}\n.form-container .with-custom-label.active {\n  margin-bottom: 45px;\n}\n.form-container .with-custom-label .custom-label {\n  position: absolute;\n  left: 0;\n  top: 45px;\n  font-size: 12px;\n  line-height: 14px;\n  /* Gray 04 - #737373 */\n  color: #737373;\n  padding: 0 10px;\n}\n.align-bottom {\n  align-items: flex-end;\n}\n.field-info {\n  color: #737373;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n.custom-control-label {\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFpc2UtYW4taXNzdWUvQzpcXEhDTC1wcm9qXFxlQ09BXFxwcm9qZWN0XFxpbXNcXElNUy1BcHAvc3JjXFxzY3NzXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9yYWlzZS1hbi1pc3N1ZS9DOlxcSENMLXByb2pcXGVDT0FcXHByb2plY3RcXGltc1xcSU1TLUFwcC9zcmNcXGFwcFxccmFpc2UtYW4taXNzdWVcXHJhaXNlLWFuLWlzc3VlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yYWlzZS1hbi1pc3N1ZS9DOlxcSENMLXByb2pcXGVDT0FcXHByb2plY3RcXGltc1xcSU1TLUFwcC9zcmNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9yYWlzZS1hbi1pc3N1ZS9yYWlzZS1hbi1pc3N1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztFQUFBO0FDSUk7RUFDSSxVQUFBO0VBQ0EsbUJDcUJFO0VEcEJGLGtCQUFBO0FFS1I7QUZISTtFQUNJLFNBQUE7RUFBVyxhQUFBO0FFTW5CO0FGSkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRU1SO0FGREk7RUFDSSxtQkFBQTtBRUlSO0FGRkk7RUFDSSxXQUFBO0FFSVI7QUZIUTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzU0FBQTtFQUNBLGdFQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtBRUtaO0FGRkk7RUFDSSx5QkNYRTtFRFlGLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RURwQkosZUNxQnNCO0VEcEJ0QixtQkFBQTtBR3lCSjtBRkhJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUVLUjtBRkhJO0VBQ0ksbUJBQUE7QUVLUjtBRkhJO0VBQ0kseUJDMUJFO0VEMkJGLHlCQUFBO0VBQ0Esc0JBQUE7QUVLUjtBRkpRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFRHZDUixlQ3dDMEI7RUR2QzFCLG1CQUFBO0FHOENKO0FGTFE7RUFDSSwwQkFBQTtBRU9aO0FGTlk7RUFDSSxrQkFBQTtBRVFoQjtBRkxRO0VBQ0ksNEJBQUE7QUVPWjtBRk5ZO0VBQ0ksaUJBQUE7QUVRaEI7QUZMUTtFQUNHLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQzNFUTtFRDRFUixjQzFFUTtBQ2lGbkI7QUZOVztFQUNJLGVBQUE7QUVRZjtBRkpJO0VBQ0ksbUJBQUE7QUVNUjtBRkxRO0VBQ0ksbUJBQUE7QUVPWjtBRkxRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUVPWjtBRkZBO0VBQ0kscUJBQUE7QUVLSjtBRkhBO0VBQ0ksY0NwRk07RUZGTixlQ3VGa0I7RUR0RmxCLG1CQUFBO0FHNkZKO0FGTEE7RUR6RkksZUMwRmtCO0VEekZsQixtQkFBQTtBR2tHSiIsImZpbGUiOiJzcmMvYXBwL3JhaXNlLWFuLWlzc3VlL3JhaXNlLWFuLWlzc3VlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbnZlcnQgZm9udC1zaXplIGZyb20gcHggdG8gcmVtIHdpdGggcHggZmFsbGJhY2tcclxuICpcclxuICogQHBhcmFtICRzaXplIC0gdGhlIHZhbHVlIGluIHBpeGVsIHlvdSB3YW50IHRvIGNvbnZlcnRcclxuICpcclxuICogZS5nLiBwIHtAaW5jbHVkZSBmb250U2l6ZSgxMnB4KTt9XHJcbiAqIFxyXG4gKi9cclxuXHJcbi8vIEZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIGEgcHggYmFzZWQgZm9udC1zaXplIHRvIHJlbS5cclxuQGZ1bmN0aW9uIGNhbGN1bGF0ZVJlbSgkc2l6ZSkge1xyXG4gICAgJHJlbVNpemU6ICRzaXplIC8gMTZweDtcclxuICAgIC8vRGVmYXVsdCBmb250IHNpemUgb24gaHRtbCBlbGVtZW50IGlzIDEwMCUsIGVxdWl2YWxlbnQgdG8gMTZweDtcclxuICAgIEByZXR1cm4gI3skcmVtU2l6ZX1yZW07XHJcbn1cclxuXHJcbi8vIE1peGluIHRoYXQgd2lsbCBpbmNsdWRlIHRoZSBmYWxsIGJhY2sgcHggZGVjbGFyYXRpb24gYXMgd2VsbCBhcyB0aGUgY2FsY3VsYXRlZCByZW0gdmFsdWUuXHJcbkBtaXhpbiBmb250U2l6ZSgkc2l6ZSkge1xyXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKCRzaXplKTtcclxufVxyXG5cclxuLy8gTWl4aW4gdGhhdCB3aWxsIGluY2x1ZGUgdGhlIGZhbGwgYmFjayBweCBkZWNsYXJhdGlvbiBhcyB3ZWxsIGFzIHRoZSBjYWxjdWxhdGVkIHJlbSB2YWx1ZS5cclxuQG1peGluIGxpbmVIZWlnaHQoJHNpemUpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjdWxhdGVSZW0oJHNpemUpO1xyXG59IiwiQGltcG9ydCAnLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9zY3NzL21peGluJztcclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xyXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkR3JheS0xMSA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICAgICAgICBib3R0b206IDA7IGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbn1cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICBcclxuICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1zZWxlY3QtYm94e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICYuaXMtaW52YWxpZHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGFsZXJ0LXJlZDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nJTIzZGMzNTQ1JyB2aWV3Qm94PSctMiAtMiA3IDcnJTNlJTNjcGF0aCBzdHJva2U9JyUyM2RjMzU0NScgZD0nTTAgMGwzIDNtMC0zTDAgMycvJTNlJTNjY2lyY2xlIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3k9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIGN5PSczJyByPScuNScvJTNlJTNjL3N2ZyUzRVwiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKSBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0IGNhbGMoMC4zNzVlbSArIDAuMTg3NXJlbSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkR3JheS0wODtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRHcmF5LTEwO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBAaW5jbHVkZSBmb250U2l6ZSgxNHB4KTtcclxuICAgIH1cclxuICAgIC5hdXRvY29tcGxldGUtZG93bi1hcnJvd3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0M3B4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAuYnRuLWdyb3Vwe1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNoZWNre1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRHcmF5LTA5O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRHcmF5LTA2O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAyMiU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvbnRTaXplKDIycHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6LTJweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0ycHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICBtYXJnaW46IDAgLTJweDtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiRwcmltYXJ5LWNvbG9yLTAxOyAgXHJcbiAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yLTAzOyAgXHJcbiAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndpdGgtY3VzdG9tLWxhYmVse1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20tbGFiZWx7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAvKiBHcmF5IDA0IC0gIzczNzM3MyAqL1xyXG4gICAgICAgICAgICBjb2xvcjogIzczNzM3MztcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFsaWduLWJvdHRvbXtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4uZmllbGQtaW5mb3tcclxuICAgIGNvbG9yOiAkR3JheS0wNDtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplKDE0cHgpO1xyXG59XHJcbi5jdXN0b20tY29udHJvbC1sYWJlbHtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplKDE0cHgpO1xyXG59IiwiJHByaW1hcnktY29sb3ItMDE6ICMwMDY2Q0M7XHJcbiRwcmltYXJ5LWNvbG9yLTAyOiAjMzMzMzMzO1xyXG4kcHJpbWFyeS1jb2xvci0wMzogI0ZGRkZGRjtcclxuXHJcbiRzZWNvbmRhcnktY29sb3ItMDE6ICM1MzlDRTU7XHJcbiRzZWNvbmRhcnktY29sb3ItMDI6ICM4MEIzRTY7XHJcbiRzZWNvbmRhcnktY29sb3ItMDM6ICNCRkQ5RjI7XHJcbiRzZWNvbmRhcnktY29sb3ItMDQ6ICNGMkY3RkM7XHJcbiRzZWNvbmRhcnktY29sb3ItMDU6ICNBNUQyRkY7XHJcbiRzZWNvbmRhcnktY29sb3ItMDY6ICNEMkU5RkY7XHJcbiRzZWNvbmRhcnktY29sb3ItMDc6ICNFOUY0RkY7XHJcblxyXG5cclxuJGFsZXJ0LWdyZWVuOiAjMDA4NzVBO1xyXG4kYWxlcnQteWVsbG93OiAjRkZDNDE0O1xyXG4kYWxlcnQtcmVkOiNDQzAwMzM7XHJcblxyXG4kR3JheS0wMTogIzAwMDAwMDtcclxuJEdyYXktMDI6ICMxOTE5MTk7XHJcbiRHcmF5LTAzOiAjNEQ0RDREO1xyXG4kR3JheS0wNDogIzczNzM3MztcclxuJEdyYXktMDU6ICM4QThBOEE7XHJcbiRHcmF5LTA2OiAjQkFCQUJBO1xyXG4kR3JheS0wNzogI0QzRDNEMztcclxuJEdyYXktMDg6ICNFRkVGRUY7XHJcbiRHcmF5LTA5OiAjRkFGQUZBO1xyXG4kR3JheS0xMDogI0M0QzRDNDtcclxuJEdyYXktMTE6ICNFOEU4RTg7IiwiLyoqXG4gKiBDb252ZXJ0IGZvbnQtc2l6ZSBmcm9tIHB4IHRvIHJlbSB3aXRoIHB4IGZhbGxiYWNrXG4gKlxuICogQHBhcmFtICRzaXplIC0gdGhlIHZhbHVlIGluIHBpeGVsIHlvdSB3YW50IHRvIGNvbnZlcnRcbiAqXG4gKiBlLmcuIHAge0BpbmNsdWRlIGZvbnRTaXplKDEycHgpO31cbiAqIFxuICovXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI0U4RThFODtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybS1jb250YWluZXIgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5mb3JtLXNlbGVjdC1ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWNvbnRhaW5lciAuZm9ybS1zZWxlY3QtYm94LmlzLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0MwMDMzO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjNkYzM1NDUnIHZpZXdCb3g9Jy0yIC0yIDcgNyclM2UlM2NwYXRoIHN0cm9rZT0nJTIzZGMzNTQ1JyBkPSdNMCAwbDMgM20wLTNMMCAzJy8lM2UlM2NjaXJjbGUgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeT0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgY3k9JzMnIHI9Jy41Jy8lM2UlM2Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNhbGMoMC43NWVtICsgMC4zNzVyZW0pIGNhbGMoMC43NWVtICsgMC4zNzVyZW0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgY2FsYygwLjM3NWVtICsgMC4xODc1cmVtKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5mb3JtLWNvbnRhaW5lciAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0M0QzRDNDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uZm9ybS1jb250YWluZXIgLmF1dG9jb21wbGV0ZS1kb3duLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQzcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLmZvcm0tY29udGFpbmVyIC5idG4tZ3JvdXAge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcm0tY29udGFpbmVyIC5idG4tY2hlY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkFCQUJBO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmZvcm0tY29udGFpbmVyIC5idG4tY2hlY2sgaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjIlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG59XG4uZm9ybS1jb250YWluZXIgLmJ0bi1jaGVjazpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5idG4tY2hlY2s6Zmlyc3QtY2hpbGQuYWN0aXZlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5idG4tY2hlY2s6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDA7XG59XG4uZm9ybS1jb250YWluZXIgLmJ0bi1jaGVjazpsYXN0LWNoaWxkLmFjdGl2ZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5idG4tY2hlY2suYWN0aXZlIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDAgLTJweDtcbiAgYmFja2dyb3VuZDogIzAwNjZDQztcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZm9ybS1jb250YWluZXIgLmJ0bi1jaGVjay5hY3RpdmUgaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5mb3JtLWNvbnRhaW5lciAud2l0aC1jdXN0b20tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLmZvcm0tY29udGFpbmVyIC53aXRoLWN1c3RvbS1sYWJlbC5hY3RpdmUge1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLmZvcm0tY29udGFpbmVyIC53aXRoLWN1c3RvbS1sYWJlbCAuY3VzdG9tLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIC8qIEdyYXkgMDQgLSAjNzM3MzczICovXG4gIGNvbG9yOiAjNzM3MzczO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5hbGlnbi1ib3R0b20ge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5maWVsZC1pbmZvIHtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/raise-an-issue/raise-an-issue.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/raise-an-issue/raise-an-issue.component.ts ***!
          \************************************************************/
        /*! exports provided: RaiseAnIssueComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaiseAnIssueComponent", function () { return RaiseAnIssueComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/services/constants.service */ "./src/app/common/services/constants.service.ts");
            /* harmony import */ var _common_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/services/rest-api.service */ "./src/app/common/services/rest-api.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _dialog_raisanissue_dialog_raisanissue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog-raisanissue/dialog-raisanissue.component */ "./src/app/dialog-raisanissue/dialog-raisanissue.component.ts");
            var RaiseAnIssueComponent = /** @class */ (function () {
                function RaiseAnIssueComponent(formBuilder, dialog, _constant, _restAPI, router) {
                    this.formBuilder = formBuilder;
                    this.dialog = dialog;
                    this._constant = _constant;
                    this._restAPI = _restAPI;
                    this.router = router;
                    this.submitted = false;
                    this.studyNumberVal = '';
                    this.studyNumberoptions = ["BA12345", "BA12346", "BA12347", "BA12348", "BA12349", "BA12350", "DF12351", "DF12352", "DF 12353 - Example", "DF 12354 - Acronym", "DF 12355 - Word", "DF 12356 - Example", "DF 12353 - Example", "DF 12354 - Acronym", "DF 12355 - Word", "DF 12356 - Example", "DF 12353 - Example", "DF 12354 - Acronym", "DF 12355 - Word", "DF 12356 - Example"];
                    this.vendorVal = '';
                    this.vendorOptions = ["Signant Health", "ER", "Kayentis", "Madidata", "YPrime"];
                    this.IssueImpacts = [
                        {
                            name: "Study timeline delay",
                            value: "Study timeline delay"
                        },
                        {
                            name: "Study cost increase",
                            value: "Study cost increase",
                        },
                        {
                            name: "Risk of not meeting primary or secondary endpoint",
                            value: "Risk of not meeting primary or secondary endpoint",
                        },
                        {
                            name: "Risk of not meeting other endpoints",
                            value: "Risk of not meeting other endpoints"
                        },
                        {
                            name: "Risk of not meeting regulatory data standards/submission requirements",
                            value: "Risk of not meeting regulatory data standards/submission requirements"
                        },
                        {
                            name: "Risk of compromising access and payer strategy",
                            value: "Risk of compromising access and payer strategy"
                        },
                        {
                            name: "None",
                            value: "None"
                        }
                    ];
                }
                RaiseAnIssueComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var descriptioanPlaceHolder = "1. Instrument (COA) name:\n2. Instrument (COA) endpoint: primary / secondary / other\n3. eCOA modality: digital pen / handheld / tablet / web-based\n4. eCOA Administration: site/ home/ site and home";
                    this.raiseAnIssueForm = this.formBuilder.group({
                        studyNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        vendor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        issueCategory: [''],
                        issueTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                        description: [descriptioanPlaceHolder, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                        priority: ['10101', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        impacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
                    });
                    this.filteredStudyNumberOptions = this.raiseAnIssueForm.get("studyNumber").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return _this._filterOptions(value, _this.studyNumberoptions); }));
                    this.filteredVendorOptions = this.raiseAnIssueForm.get("vendor").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return _this._filterOptions(value, _this.vendorOptions); }));
                    this.addImpactsCheckboxes();
                };
                Object.defineProperty(RaiseAnIssueComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.raiseAnIssueForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                RaiseAnIssueComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    // stop here if form is invalid
                    if (this.raiseAnIssueForm.invalid) {
                        return;
                    }
                    var selectedIssueImpact = this._getSelectedIssueImpact();
                    var data = {
                        "url": this._constant.jiraCreateIssue,
                        "postData": { "fields": {
                                "project": {
                                    "key": this._constant.jiraProjectKey
                                },
                                "summary": this.raiseAnIssueForm.value.issueTitle,
                                "description": this.raiseAnIssueForm.value.description,
                                "issuetype": {
                                    "name": "Task"
                                },
                                "priority": {
                                    "id": this.raiseAnIssueForm.value.priority
                                }
                            }
                        }
                    };
                    this._restAPI.raiseAnIssue(data)
                        .subscribe(function (response) {
                        _this.raiseAnIssueForm.reset();
                        _this.openDialog();
                    });
                };
                RaiseAnIssueComponent.prototype.onReset = function () {
                    this.submitted = false;
                    this.raiseAnIssueForm.reset();
                };
                RaiseAnIssueComponent.prototype.openDialog = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_dialog_raisanissue_dialog_raisanissue_component__WEBPACK_IMPORTED_MODULE_8__["DialogRaisanissueComponent"], {
                        width: '870px',
                        panelClass: 'success-modalbox',
                        data: this.raiseAnIssueForm.value
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        _this.router.navigateByUrl('/');
                    });
                };
                RaiseAnIssueComponent.prototype._filterOptions = function (value, Listoptions) {
                    var filterValue = value.toLowerCase();
                    return Listoptions.filter(function (option) { return option.toLowerCase().includes(filterValue); });
                };
                RaiseAnIssueComponent.prototype._getSelectedIssueImpact = function () {
                    var _this = this;
                    return this.raiseAnIssueForm.value.impacts
                        .map(function (v, i) { return v ? _this.IssueImpacts[i].value : null; })
                        .filter(function (v) { return v !== null; });
                };
                RaiseAnIssueComponent.prototype.addImpactsCheckboxes = function () {
                    var _this = this;
                    this.IssueImpacts.forEach(function (_o, i) {
                        var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
                        _this.raiseAnIssueForm.controls.impacts.push(control);
                    });
                };
                return RaiseAnIssueComponent;
            }());
            RaiseAnIssueComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _common_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"] },
                { type: _common_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["IssuesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            RaiseAnIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-raise-an-issue',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./raise-an-issue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/raise-an-issue/raise-an-issue.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./raise-an-issue.component.scss */ "./src/app/raise-an-issue/raise-an-issue.component.scss")).default]
                })
            ], RaiseAnIssueComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/**\n * Convert font-size from px to rem with px fallback\n *\n * @param $size - the value in pixel you want to convert\n *\n * e.g. p {@include fontSize(12px);}\n * \n */\n.app-breadcrumb {\n  padding: 15px 30px 30px;\n}\n.app-breadcrumb ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  color: #737373;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n.app-breadcrumb__arrow {\n  padding: 0 10px;\n}\n.app-breadcrumb .arrow {\n  color: #80B3E6;\n  margin-top: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9DOlxcSENMLXByb2pcXGVDT0FcXHByb2plY3RcXGltc1xcSU1TLUFwcC9zcmNcXHNjc3NcXG1peGluLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvQzpcXEhDTC1wcm9qXFxlQ09BXFxwcm9qZWN0XFxpbXNcXElNUy1BcHAvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9icmVhZGNydW1iL0M6XFxIQ0wtcHJvalxcZUNPQVxccHJvamVjdFxcaW1zXFxJTVMtQXBwL3NyY1xcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7RUFBQTtBQ0dBO0VBQ0ksdUJBQUE7QUNNSjtBRExJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjRVVFO0VIRk4sZUNQc0I7RURRdEIsbUJBQUE7QUVBSjtBRE5JO0VBQ0ksZUFBQTtBQ1FSO0FETkk7RUFDSSxjRVphO0VGYWIsZ0JBQUE7QUNRUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb252ZXJ0IGZvbnQtc2l6ZSBmcm9tIHB4IHRvIHJlbSB3aXRoIHB4IGZhbGxiYWNrXHJcbiAqXHJcbiAqIEBwYXJhbSAkc2l6ZSAtIHRoZSB2YWx1ZSBpbiBwaXhlbCB5b3Ugd2FudCB0byBjb252ZXJ0XHJcbiAqXHJcbiAqIGUuZy4gcCB7QGluY2x1ZGUgZm9udFNpemUoMTJweCk7fVxyXG4gKiBcclxuICovXHJcblxyXG4vLyBGdW5jdGlvbiBmb3IgY29udmVydGluZyBhIHB4IGJhc2VkIGZvbnQtc2l6ZSB0byByZW0uXHJcbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcclxuICAgICRyZW1TaXplOiAkc2l6ZSAvIDE2cHg7XHJcbiAgICAvL0RlZmF1bHQgZm9udCBzaXplIG9uIGh0bWwgZWxlbWVudCBpcyAxMDAlLCBlcXVpdmFsZW50IHRvIDE2cHg7XHJcbiAgICBAcmV0dXJuICN7JHJlbVNpemV9cmVtO1xyXG59XHJcblxyXG4vLyBNaXhpbiB0aGF0IHdpbGwgaW5jbHVkZSB0aGUgZmFsbCBiYWNrIHB4IGRlY2xhcmF0aW9uIGFzIHdlbGwgYXMgdGhlIGNhbGN1bGF0ZWQgcmVtIHZhbHVlLlxyXG5AbWl4aW4gZm9udFNpemUoJHNpemUpIHtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgkc2l6ZSk7XHJcbn1cclxuXHJcbi8vIE1peGluIHRoYXQgd2lsbCBpbmNsdWRlIHRoZSBmYWxsIGJhY2sgcHggZGVjbGFyYXRpb24gYXMgd2VsbCBhcyB0aGUgY2FsY3VsYXRlZCByZW0gdmFsdWUuXHJcbkBtaXhpbiBsaW5lSGVpZ2h0KCRzaXplKSB7XHJcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogY2FsY3VsYXRlUmVtKCRzaXplKTtcclxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy9taXhpbic7XHJcblxyXG4uYXBwLWJyZWFkY3J1bWJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweDtcclxuICAgIHVse1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogJEdyYXktMDQ7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udFNpemUoMTRweCk7XHJcbiAgICB9XHJcbiAgICAmX19hcnJvd3tcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYXJyb3d7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3ItMDI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIH1cclxufSIsIi8qKlxuICogQ29udmVydCBmb250LXNpemUgZnJvbSBweCB0byByZW0gd2l0aCBweCBmYWxsYmFja1xuICpcbiAqIEBwYXJhbSAkc2l6ZSAtIHRoZSB2YWx1ZSBpbiBwaXhlbCB5b3Ugd2FudCB0byBjb252ZXJ0XG4gKlxuICogZS5nLiBwIHtAaW5jbHVkZSBmb250U2l6ZSgxMnB4KTt9XG4gKiBcbiAqL1xuLmFwcC1icmVhZGNydW1iIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDMwcHg7XG59XG4uYXBwLWJyZWFkY3J1bWIgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uYXBwLWJyZWFkY3J1bWJfX2Fycm93IHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmFwcC1icmVhZGNydW1iIC5hcnJvdyB7XG4gIGNvbG9yOiAjODBCM0U2O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufSIsIiRwcmltYXJ5LWNvbG9yLTAxOiAjMDA2NkNDO1xyXG4kcHJpbWFyeS1jb2xvci0wMjogIzMzMzMzMztcclxuJHByaW1hcnktY29sb3ItMDM6ICNGRkZGRkY7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yLTAxOiAjNTM5Q0U1O1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTAyOiAjODBCM0U2O1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTAzOiAjQkZEOUYyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA0OiAjRjJGN0ZDO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA1OiAjQTVEMkZGO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA2OiAjRDJFOUZGO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA3OiAjRTlGNEZGO1xyXG5cclxuXHJcbiRhbGVydC1ncmVlbjogIzAwODc1QTtcclxuJGFsZXJ0LXllbGxvdzogI0ZGQzQxNDtcclxuJGFsZXJ0LXJlZDojQ0MwMDMzO1xyXG5cclxuJEdyYXktMDE6ICMwMDAwMDA7XHJcbiRHcmF5LTAyOiAjMTkxOTE5O1xyXG4kR3JheS0wMzogIzRENEQ0RDtcclxuJEdyYXktMDQ6ICM3MzczNzM7XHJcbiRHcmF5LTA1OiAjOEE4QThBO1xyXG4kR3JheS0wNjogI0JBQkFCQTtcclxuJEdyYXktMDc6ICNEM0QzRDM7XHJcbiRHcmF5LTA4OiAjRUZFRkVGO1xyXG4kR3JheS0wOTogI0ZBRkFGQTtcclxuJEdyYXktMTA6ICNDNEM0QzQ7XHJcbiRHcmF5LTExOiAjRThFOEU4OyJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
          \**********************************************************************/
        /*! exports provided: BreadcrumbComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () { return BreadcrumbComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BreadcrumbComponent = /** @class */ (function () {
                function BreadcrumbComponent() {
                }
                BreadcrumbComponent.prototype.ngOnInit = function () {
                };
                return BreadcrumbComponent;
            }());
            BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-breadcrumb',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss")).default]
                })
            ], BreadcrumbComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/dialog/dialog.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/components/dialog/dialog.component.ts ***!
          \**************************************************************/
        /*! exports provided: DialogOverviewExampleDialog */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function () { return DialogOverviewExampleDialog; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var DialogOverviewExampleDialog = /** @class */ (function () {
                function DialogOverviewExampleDialog(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                DialogOverviewExampleDialog.prototype.closeDialog = function () {
                    this.dialogRef.close();
                };
                return DialogOverviewExampleDialog;
            }());
            DialogOverviewExampleDialog.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'dialog-overview-example-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog/dialog-overview-example-dialog.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DialogOverviewExampleDialog);
            /***/ 
        }),
        /***/ "./src/app/shared/components/footer/footer.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/components/footer/footer.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("footer {\n  min-height: 75px;\n  margin-top: 50px;\n  background-color: #EFEFEF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxIQ0wtcHJvalxcZUNPQVxccHJvamVjdFxcaW1zXFxJTVMtQXBwL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvQzpcXEhDTC1wcm9qXFxlQ09BXFxwcm9qZWN0XFxpbXNcXElNUy1BcHAvc3JjXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNtQk07QUNwQlYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuZm9vdGVye1xyXG4gICAgbWluLWhlaWdodDogNzVweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkR3JheS0wODtcclxufSIsIiRwcmltYXJ5LWNvbG9yLTAxOiAjMDA2NkNDO1xyXG4kcHJpbWFyeS1jb2xvci0wMjogIzMzMzMzMztcclxuJHByaW1hcnktY29sb3ItMDM6ICNGRkZGRkY7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yLTAxOiAjNTM5Q0U1O1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTAyOiAjODBCM0U2O1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTAzOiAjQkZEOUYyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA0OiAjRjJGN0ZDO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA1OiAjQTVEMkZGO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA2OiAjRDJFOUZGO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA3OiAjRTlGNEZGO1xyXG5cclxuXHJcbiRhbGVydC1ncmVlbjogIzAwODc1QTtcclxuJGFsZXJ0LXllbGxvdzogI0ZGQzQxNDtcclxuJGFsZXJ0LXJlZDojQ0MwMDMzO1xyXG5cclxuJEdyYXktMDE6ICMwMDAwMDA7XHJcbiRHcmF5LTAyOiAjMTkxOTE5O1xyXG4kR3JheS0wMzogIzRENEQ0RDtcclxuJEdyYXktMDQ6ICM3MzczNzM7XHJcbiRHcmF5LTA1OiAjOEE4QThBO1xyXG4kR3JheS0wNjogI0JBQkFCQTtcclxuJEdyYXktMDc6ICNEM0QzRDM7XHJcbiRHcmF5LTA4OiAjRUZFRkVGO1xyXG4kR3JheS0wOTogI0ZBRkFGQTtcclxuJEdyYXktMTA6ICNDNEM0QzQ7XHJcbiRHcmF5LTExOiAjRThFOEU4OyIsImZvb3RlciB7XG4gIG1pbi1oZWlnaHQ6IDc1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/footer/footer.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/components/footer/footer.component.ts ***!
          \**************************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/header/header.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/components/header/header.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-header {\n  padding: 15px 30px;\n  background: #FFFFFF;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.149);\n}\n.app-header__ims-logo {\n  display: inline;\n}\n.app-header__right-section {\n  float: right;\n  display: flex;\n  align-items: center;\n}\n.app-header__right-section img {\n  height: 40px;\n  padding-left: 15px;\n}\n.app-header__user-info {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.app-header__user-info span {\n  width: 40px;\n  height: 40px;\n  padding: 10px 0;\n  background-color: #80B3E6;\n  border-radius: 100%;\n  margin-left: 10px;\n  color: #FFFFFF;\n  text-align: center;\n}\n.app-header__search {\n  width: 240px;\n  height: 40px;\n  padding: 10px 15px;\n  border-radius: 30px;\n  background-color: #EFEFEF;\n  display: flex;\n  align-items: center;\n}\n.app-header__search input {\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxIQ0wtcHJvalxcZUNPQVxccHJvamVjdFxcaW1zXFxJTVMtQXBwL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvQzpcXEhDTC1wcm9qXFxlQ09BXFxwcm9qZWN0XFxpbXNcXElNUy1BcHAvc3JjXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJDRmU7RURLZiw0Q0FBQTtBRURKO0FGR0k7RUFDSSxlQUFBO0FFRFI7QUZHSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUVEUjtBRkdRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FFRFo7QUZJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FFRlI7QUZHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQ3pCUztFRDBCVCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0MvQk87RURnQ1Asa0JBQUE7QUVEWjtBRklJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDbEJFO0VEbUJGLGFBQUE7RUFDQSxtQkFBQTtBRUZSO0FGR1E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FFRFoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uYXBwLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yLTAzO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAgMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE0OSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTQ5KTtcclxuICAgIGJveC1zaGFkb3c6ICAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTQ5KTtcclxuXHJcbiAgICAmX19pbXMtbG9nb3tcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICAmX19yaWdodC1zZWN0aW9ue1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdXNlci1pbmZve1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRzZWNvbmRhcnktY29sb3ItMDI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjokcHJpbWFyeS1jb2xvci0wMztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3NlYXJjaHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRHcmF5LTA4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3ItMDE6ICMwMDY2Q0M7XHJcbiRwcmltYXJ5LWNvbG9yLTAyOiAjMzMzMzMzO1xyXG4kcHJpbWFyeS1jb2xvci0wMzogI0ZGRkZGRjtcclxuXHJcbiRzZWNvbmRhcnktY29sb3ItMDE6ICM1MzlDRTU7XHJcbiRzZWNvbmRhcnktY29sb3ItMDI6ICM4MEIzRTY7XHJcbiRzZWNvbmRhcnktY29sb3ItMDM6ICNCRkQ5RjI7XHJcbiRzZWNvbmRhcnktY29sb3ItMDQ6ICNGMkY3RkM7XHJcbiRzZWNvbmRhcnktY29sb3ItMDU6ICNBNUQyRkY7XHJcbiRzZWNvbmRhcnktY29sb3ItMDY6ICNEMkU5RkY7XHJcbiRzZWNvbmRhcnktY29sb3ItMDc6ICNFOUY0RkY7XHJcblxyXG5cclxuJGFsZXJ0LWdyZWVuOiAjMDA4NzVBO1xyXG4kYWxlcnQteWVsbG93OiAjRkZDNDE0O1xyXG4kYWxlcnQtcmVkOiNDQzAwMzM7XHJcblxyXG4kR3JheS0wMTogIzAwMDAwMDtcclxuJEdyYXktMDI6ICMxOTE5MTk7XHJcbiRHcmF5LTAzOiAjNEQ0RDREO1xyXG4kR3JheS0wNDogIzczNzM3MztcclxuJEdyYXktMDU6ICM4QThBOEE7XHJcbiRHcmF5LTA2OiAjQkFCQUJBO1xyXG4kR3JheS0wNzogI0QzRDNEMztcclxuJEdyYXktMDg6ICNFRkVGRUY7XHJcbiRHcmF5LTA5OiAjRkFGQUZBO1xyXG4kR3JheS0xMDogI0M0QzRDNDtcclxuJEdyYXktMTE6ICNFOEU4RTg7IiwiLmFwcC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE0OSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE0OSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNDkpO1xufVxuLmFwcC1oZWFkZXJfX2ltcy1sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmFwcC1oZWFkZXJfX3JpZ2h0LXNlY3Rpb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwLWhlYWRlcl9fcmlnaHQtc2VjdGlvbiBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5hcHAtaGVhZGVyX191c2VyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uYXBwLWhlYWRlcl9fdXNlci1pbmZvIHNwYW4ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MEIzRTY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwcC1oZWFkZXJfX3NlYXJjaCB7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwLWhlYWRlcl9fc2VhcmNoIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/header/header.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/components/header/header.component.ts ***!
          \**************************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/not-found-route.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/shared/components/not-found-route.component.ts ***!
          \****************************************************************/
        /*! exports provided: NotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () { return NotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent() {
                }
                return NotFoundComponent;
            }());
            NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: "<h2>Not found url</h2>"
                })
            ], NotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/models/custom-issue-fields.enum.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/shared/models/custom-issue-fields.enum.ts ***!
          \***********************************************************/
        /*! exports provided: CustomFields, ifDefinedCustomField */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFields", function () { return CustomFields; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefinedCustomField", function () { return ifDefinedCustomField; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // enum of custom fields
            var CustomFields;
            (function (CustomFields) {
                CustomFields["category"] = "customfield_30781";
                CustomFields["root_cause"] = "customfield_13794";
                CustomFields["business_impact"] = "customfield_13835";
                CustomFields["vendor"] = "customfield_19566";
                CustomFields["study_number"] = "customfield_22072";
                CustomFields["submitter"] = "customfield_13999";
                CustomFields["submitter_role"] = "customfield_30861";
                CustomFields["vendor_instrument"] = "customfield_30862";
                CustomFields["ecoa_endpoiont"] = "customfield_30863";
                CustomFields["ecoa_modality"] = "customfield_30864";
                CustomFields["downstream_impact"] = "customfield_30871";
            })(CustomFields || (CustomFields = {}));
            var ifDefinedCustomField = function (fieldName) {
                return Object.keys(CustomFields).some(function (k) { return CustomFields[k] === fieldName; });
            };
            /***/ 
        }),
        /***/ "./src/app/shared/models/downstream-activities.model.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/models/downstream-activities.model.ts ***!
          \**************************************************************/
        /*! exports provided: DownstreamActivities */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownstreamActivities", function () { return DownstreamActivities; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DownstreamActivities = {
                ecoaProcUpdate: "eCOA process update",
                ecoaVendorFollowUp: "eCOA Vendor follow-up/GCM Action",
                ste: "STE update (Vendor requirements)",
                quality_CAPA: "Quality CAPA Investigation",
                supporting_doc_update: "Supporting doc update",
                none: "None"
            };
            /***/ 
        }),
        /***/ "./src/app/shared/models/issue.model.ts": 
        /*!**********************************************!*\
          !*** ./src/app/shared/models/issue.model.ts ***!
          \**********************************************/
        /*! exports provided: Issue, IssueFields, Comment, IssuePriority, IssueStatuses */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Issue", function () { return Issue; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueFields", function () { return IssueFields; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function () { return Comment; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuePriority", function () { return IssuePriority; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueStatuses", function () { return IssueStatuses; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-issue-fields.enum */ "./src/app/shared/models/custom-issue-fields.enum.ts");
            var Issue = /** @class */ (function () {
                function Issue(issue) {
                    if (issue)
                        this.deserialize(issue);
                }
                Issue.prototype.deserialize = function (issue) {
                    Object.assign(this, issue);
                    if (issue.fields.comment &&
                        issue.fields.comment.comments &&
                        issue.fields.comment.comments.length)
                        this.fields.comment.comments = issue.fields.comment.comments.map(function (comment) { return new Comment(comment); });
                    // console.log("deserialized: ", this.fields, this, this.fields.status);
                };
                Object.defineProperty(Issue.prototype, "CreatedDate", {
                    get: function () {
                        if (this.fields && this.fields.created)
                            return this.fields.created;
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Issue.prototype, "Creator", {
                    get: function () {
                        if (this.fields && this.fields.creator)
                            return this.fields.creator.displayName;
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Issue.prototype, "Priority", {
                    get: function () {
                        if (this.fields && this.fields.priority)
                            return this.fields.priority.name;
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Issue.prototype, "Status", {
                    get: function () {
                        if (this.fields && this.fields.status && this.fields.status.name)
                            return this.fields.status.name;
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Issue.prototype, "PriorityIcoPath", {
                    get: function () {
                        switch (this.Priority) {
                            case IssuePriority.HIGH:
                                return "./assets/images/ico_high_prior.svg";
                            case IssuePriority.LOW:
                                return "./assets/images/ico_low_prior.svg";
                            case IssuePriority.MEDIUM:
                                return "./assets/images/ico_medium_prior.svg";
                            default:
                                return "";
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Issue.prototype, "CommentsList", {
                    get: function () {
                        if (this.fields && this.fields.comment && this.fields.comment.comments)
                            return this.fields.comment.comments;
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Issue.prototype, "VendorName", {
                    // custom fields getters
                    get: function () {
                        if (this.fields && this.fields[_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_1__["CustomFields"].vendor])
                            return this.fields[_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_1__["CustomFields"].vendor];
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Issue.prototype, "Category", {
                    get: function () {
                        if (this.fields && this.fields[_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_1__["CustomFields"].category])
                            return this.fields[_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_1__["CustomFields"].category];
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Issue.prototype, "BusinessImpact", {
                    get: function () {
                        if (this.fields && this.fields[_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_1__["CustomFields"].business_impact])
                            return this.fields[_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_1__["CustomFields"].business_impact];
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Issue.prototype, "StudyNumber", {
                    get: function () {
                        if (this.fields && this.fields[_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_1__["CustomFields"].study_number])
                            return this.fields[_custom_issue_fields_enum__WEBPACK_IMPORTED_MODULE_1__["CustomFields"].study_number];
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                return Issue;
            }());
            var IssueFields = /** @class */ (function () {
                function IssueFields() {
                    // and defined custom fields
                    this.resolution = null;
                    this.lastViewed = null;
                    this.aggregatetimeoriginalestimate = null;
                    this.issuelinks = null;
                    this.subtasks = null;
                    this.issuetype = null;
                    this.timetracking = null;
                    this.environment = null;
                    this.timeestimate = null;
                    this.aggregatetimespent = null;
                    this.workratio = null;
                    this.labels = null;
                    this.reporter = null;
                    this.watches = null;
                    this.updated = null;
                    this.timeoriginalestimate = null;
                    this.description = null;
                    this.fixVersions = null;
                    this.priority = null;
                    this.created = null;
                    this.attachment = null;
                    this.assignee = null;
                    this.votes = null;
                    this.worklog = null;
                    this.duedate = null;
                    this.status = null;
                    this.aggregatetimeestimate = null;
                    this.creator = null;
                    this.timespent = null;
                    this.components = null;
                    this.progress = null;
                    this.project = null;
                    this.resolutiondate = null;
                    this.summary = null;
                    this.comment = null;
                    this.versions = null;
                    this.aggregateprogress = null;
                }
                return IssueFields;
            }());
            var Comment = /** @class */ (function () {
                function Comment(fields) {
                    if (fields)
                        this.deserialize(fields);
                }
                Comment.prototype.deserialize = function (fields) {
                    Object.assign(this, fields);
                };
                Object.defineProperty(Comment.prototype, "AuthName", {
                    get: function () {
                        if (this.author && this.author.name)
                            return this.author.name;
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Comment.prototype, "AuthFullName", {
                    get: function () {
                        if (this.author && this.author.displayName)
                            return this.author.displayName;
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Comment.prototype, "AuthAvatarIco", {
                    get: function () {
                        if (this.author &&
                            this.author.avatarUrls &&
                            this.author.avatarUrls["48x48"])
                            return this.author.avatarUrls["48x48"];
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Comment.prototype, "Content", {
                    get: function () {
                        if (this.body)
                            return this.body;
                        return "";
                    },
                    enumerable: true,
                    configurable: true
                });
                return Comment;
            }());
            var IssuePriority;
            (function (IssuePriority) {
                IssuePriority["MEDIUM"] = "Medium";
                IssuePriority["HIGH"] = "High";
                IssuePriority["LOW"] = "Low";
            })(IssuePriority || (IssuePriority = {}));
            var IssueStatuses;
            (function (IssueStatuses) {
                IssueStatuses["IN_PROGRESS"] = "In Progress";
                IssueStatuses["PENDING_CLOSURE"] = "Pending Closure";
            })(IssueStatuses || (IssueStatuses = {}));
            /***/ 
        }),
        /***/ "./src/app/shared/models/root-cause-categories.model.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/shared/models/root-cause-categories.model.ts ***!
          \**************************************************************/
        /*! exports provided: RootCauseCategories */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootCauseCategories", function () { return RootCauseCategories; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var RootCauseCategories = {
                backupPlan: "Backup plan",
                dataCollection: "Data collection",
                dataCorrection: "Data correction",
                dataSecurity: "Data security",
                dataTransfer: "Data transfer",
                deviceCap: "Device capability and functionality",
                deviceSync: "Device sync",
                deviceFailure: "Device failure",
                instrumentEthics: "Instrument ethics/IRM submission",
                intrumentLicensingAndUsage: "Instrument licensing and usage",
                instrumentTranslation: "Instrument translation and linguistic validation",
                softBug: "Software bug",
                traningGap: "Training gap",
                vendorContracting: "Vendor contracting",
                vendorHelpdesk: "Vendor helpdesk",
                vendorPerformance: "Vendor performance",
                vendorPortal: "Vendor portal",
                rootNotAvailable: "Root cause category not available"
            };
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _components_not_found_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/not-found-route.component */ "./src/app/shared/components/not-found-route.component.ts");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
            /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                        _components_not_found_route_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
                    ],
                    exports: [
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                        _components_not_found_route_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
                    ]
                })
            ], SharedModule);
            /***/ 
        }),
        /***/ "./src/app/table-list/table-list.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/table-list/table-list.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/**\n * Convert font-size from px to rem with px fallback\n *\n * @param $size - the value in pixel you want to convert\n *\n * e.g. p {@include fontSize(12px);}\n * \n */\n.table-container .popover {\n  width: 80%;\n  max-width: 1048px;\n}\n.table-container .popover .popover-header {\n  padding: 15px 25px;\n  background-color: #0066CC;\n  color: #FFFFFF;\n}\n.table-container .popover .popover-header span {\n  font-family: 14px;\n}\n.table-container .popover .popover-body {\n  font-size: 14px;\n  font-size: 0.875rem;\n  padding: 10px 25px 15px;\n  background-color: #FAFAFA;\n  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.302);\n}\n.table-container .popover .popover-body .section-head {\n  display: inline-block;\n  width: 100%;\n  color: #8A8A8A;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n.table-container .popover .popover-body ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.table-container .popover .popover-body .row {\n  margin-bottom: 20px;\n}\n.table-header {\n  padding: 20px 15px;\n  font-weight: 500;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 24px;\n  line-height: 1.5rem;\n}\n.priority-info {\n  padding: 10px 0;\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 16px;\n  line-height: 1rem;\n  color: #4D4D4D;\n}\ntable {\n  width: 100%;\n}\ntable tr.mat-header-row {\n  height: 32px;\n  background: #EFEFEF;\n  border: 1px solid #D3D3D3;\n}\ntable tr.mat-row {\n  background: #FFFFFF;\n  border: 1px solid #D3D3D3;\n}\ntable tr.mat-row:hover {\n  background: #E9F4FF;\n  border-top: 2px solid #A5D2FF;\n  border-bottom: 2px solid #A5D2FF;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUtbGlzdC9DOlxcSENMLXByb2pcXGVDT0FcXHByb2plY3RcXGltc1xcSU1TLUFwcC9zcmNcXHNjc3NcXG1peGluLnNjc3MiLCJzcmMvYXBwL3RhYmxlLWxpc3QvQzpcXEhDTC1wcm9qXFxlQ09BXFxwcm9qZWN0XFxpbXNcXElNUy1BcHAvc3JjXFxhcHBcXHRhYmxlLWxpc3RcXHRhYmxlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFibGUtbGlzdC9DOlxcSENMLXByb2pcXGVDT0FcXHByb2plY3RcXGltc1xcSU1TLUFwcC9zcmNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBQUE7QUNHRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ01KO0FETEk7RUFDRSxrQkFBQTtFQUNBLHlCRVJhO0VGU2IsY0VQYTtBRGNuQjtBRExNO0VBQ0UsaUJBQUE7QUNPUjtBREpJO0VER0EsZUNGb0I7RURHcEIsbUJBQUE7RUNGRSx1QkFBQTtFQUNBLHlCRU9JO0VGTkosOENBQUE7QUNPTjtBRE5NO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0VGRTtFSEhOLGVDTXNCO0VETHRCLG1CQUFBO0FFY0o7QURQTTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNTUjtBRFBNO0VBQ0UsbUJBQUE7QUNTUjtBREpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFRHJCRSxlQ3NCZ0I7RURyQmhCLGVBQUE7RUFLQSxpQkNpQmtCO0VEaEJsQixtQkFBQTtBRXlCSjtBRFBBO0VBQ0UsZUFBQTtFRDFCRSxlQzJCZ0I7RUQxQmhCLGtCQUFBO0VBS0EsaUJDc0JrQjtFRHJCbEIsaUJBQUE7RUNzQkYsY0U1QlE7QUR3Q1Y7QURWQTtFQUNFLFdBQUE7QUNhRjtBRFhFO0VBQ0UsWUFBQTtFQUNBLG1CRTlCTTtFRitCTix5QkFBQTtBQ2FKO0FEWEU7RUFDRSxtQkV4RGU7RUZ5RGYseUJBQUE7QUNhSjtBRFpJO0VBQ0UsbUJFbkRlO0VGb0RmLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDY04iLCJmaWxlIjoic3JjL2FwcC90YWJsZS1saXN0L3RhYmxlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29udmVydCBmb250LXNpemUgZnJvbSBweCB0byByZW0gd2l0aCBweCBmYWxsYmFja1xyXG4gKlxyXG4gKiBAcGFyYW0gJHNpemUgLSB0aGUgdmFsdWUgaW4gcGl4ZWwgeW91IHdhbnQgdG8gY29udmVydFxyXG4gKlxyXG4gKiBlLmcuIHAge0BpbmNsdWRlIGZvbnRTaXplKDEycHgpO31cclxuICogXHJcbiAqL1xyXG5cclxuLy8gRnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgYSBweCBiYXNlZCBmb250LXNpemUgdG8gcmVtLlxyXG5AZnVuY3Rpb24gY2FsY3VsYXRlUmVtKCRzaXplKSB7XHJcbiAgICAkcmVtU2l6ZTogJHNpemUgLyAxNnB4O1xyXG4gICAgLy9EZWZhdWx0IGZvbnQgc2l6ZSBvbiBodG1sIGVsZW1lbnQgaXMgMTAwJSwgZXF1aXZhbGVudCB0byAxNnB4O1xyXG4gICAgQHJldHVybiAjeyRyZW1TaXplfXJlbTtcclxufVxyXG5cclxuLy8gTWl4aW4gdGhhdCB3aWxsIGluY2x1ZGUgdGhlIGZhbGwgYmFjayBweCBkZWNsYXJhdGlvbiBhcyB3ZWxsIGFzIHRoZSBjYWxjdWxhdGVkIHJlbSB2YWx1ZS5cclxuQG1peGluIGZvbnRTaXplKCRzaXplKSB7XHJcbiAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgZm9udC1zaXplOiBjYWxjdWxhdGVSZW0oJHNpemUpO1xyXG59XHJcblxyXG4vLyBNaXhpbiB0aGF0IHdpbGwgaW5jbHVkZSB0aGUgZmFsbCBiYWNrIHB4IGRlY2xhcmF0aW9uIGFzIHdlbGwgYXMgdGhlIGNhbGN1bGF0ZWQgcmVtIHZhbHVlLlxyXG5AbWl4aW4gbGluZUhlaWdodCgkc2l6ZSkge1xyXG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6IGNhbGN1bGF0ZVJlbSgkc2l6ZSk7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uL3Njc3MvbWl4aW5cIjtcclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgLnBvcG92ZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogMTA0OHB4O1xyXG4gICAgLnBvcG92ZXItaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci0wMTtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yLTAzO1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wb3BvdmVyLWJvZHkge1xyXG4gICAgICBAaW5jbHVkZSBmb250U2l6ZSgxNHB4KTtcclxuICAgICAgcGFkZGluZzogMTBweCAyNXB4IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6JEdyYXktMDk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjMwMik7XHJcbiAgICAgIC5zZWN0aW9uLWhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogJEdyYXktMDU7XHJcbiAgICAgICAgQGluY2x1ZGUgZm9udFNpemUoMTRweCk7XHJcbiAgICAgIH1cclxuICAgICAgdWx7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICAucm93IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50YWJsZS1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIEBpbmNsdWRlIGZvbnRTaXplKDE2cHgpO1xyXG4gIEBpbmNsdWRlIGxpbmVIZWlnaHQoMjRweCk7XHJcbn1cclxuLnByaW9yaXR5LWluZm97XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIEBpbmNsdWRlIGZvbnRTaXplKDEycHgpO1xyXG4gIEBpbmNsdWRlIGxpbmVIZWlnaHQoMTZweCk7XHJcbiAgY29sb3I6ICRHcmF5LTAzO1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgdHIubWF0LWhlYWRlci1yb3cge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZDogJEdyYXktMDg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkR3JheS0wNztcclxuICB9XHJcbiAgdHIubWF0LXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiRwcmltYXJ5LWNvbG9yLTAzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJEdyYXktMDc7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvci0wNztcclxuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3ItMDU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yLTA1O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxuICogQ29udmVydCBmb250LXNpemUgZnJvbSBweCB0byByZW0gd2l0aCBweCBmYWxsYmFja1xuICpcbiAqIEBwYXJhbSAkc2l6ZSAtIHRoZSB2YWx1ZSBpbiBwaXhlbCB5b3Ugd2FudCB0byBjb252ZXJ0XG4gKlxuICogZS5nLiBwIHtAaW5jbHVkZSBmb250U2l6ZSgxMnB4KTt9XG4gKiBcbiAqL1xuLnRhYmxlLWNvbnRhaW5lciAucG9wb3ZlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogMTA0OHB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciAucG9wb3ZlciAucG9wb3Zlci1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2Q0M7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRhYmxlLWNvbnRhaW5lciAucG9wb3ZlciAucG9wb3Zlci1oZWFkZXIgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiAxNHB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciAucG9wb3ZlciAucG9wb3Zlci1ib2R5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBwYWRkaW5nOiAxMHB4IDI1cHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgYm94LXNoYWRvdzogMHB4IDE2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMzAyKTtcbn1cbi50YWJsZS1jb250YWluZXIgLnBvcG92ZXIgLnBvcG92ZXItYm9keSAuc2VjdGlvbi1oZWFkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM4QThBOEE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi50YWJsZS1jb250YWluZXIgLnBvcG92ZXIgLnBvcG92ZXItYm9keSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi50YWJsZS1jb250YWluZXIgLnBvcG92ZXIgLnBvcG92ZXItYm9keSAucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4ucHJpb3JpdHktaW5mbyB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgY29sb3I6ICM0RDRENEQ7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSB0ci5tYXQtaGVhZGVyLXJvdyB7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZDogI0VGRUZFRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcbn1cbnRhYmxlIHRyLm1hdC1yb3cge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDNEM0QzO1xufVxudGFibGUgdHIubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNFOUY0RkY7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjQTVEMkZGO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0E1RDJGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIiRwcmltYXJ5LWNvbG9yLTAxOiAjMDA2NkNDO1xyXG4kcHJpbWFyeS1jb2xvci0wMjogIzMzMzMzMztcclxuJHByaW1hcnktY29sb3ItMDM6ICNGRkZGRkY7XHJcblxyXG4kc2Vjb25kYXJ5LWNvbG9yLTAxOiAjNTM5Q0U1O1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTAyOiAjODBCM0U2O1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTAzOiAjQkZEOUYyO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA0OiAjRjJGN0ZDO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA1OiAjQTVEMkZGO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA2OiAjRDJFOUZGO1xyXG4kc2Vjb25kYXJ5LWNvbG9yLTA3OiAjRTlGNEZGO1xyXG5cclxuXHJcbiRhbGVydC1ncmVlbjogIzAwODc1QTtcclxuJGFsZXJ0LXllbGxvdzogI0ZGQzQxNDtcclxuJGFsZXJ0LXJlZDojQ0MwMDMzO1xyXG5cclxuJEdyYXktMDE6ICMwMDAwMDA7XHJcbiRHcmF5LTAyOiAjMTkxOTE5O1xyXG4kR3JheS0wMzogIzRENEQ0RDtcclxuJEdyYXktMDQ6ICM3MzczNzM7XHJcbiRHcmF5LTA1OiAjOEE4QThBO1xyXG4kR3JheS0wNjogI0JBQkFCQTtcclxuJEdyYXktMDc6ICNEM0QzRDM7XHJcbiRHcmF5LTA4OiAjRUZFRkVGO1xyXG4kR3JheS0wOTogI0ZBRkFGQTtcclxuJEdyYXktMTA6ICNDNEM0QzQ7XHJcbiRHcmF5LTExOiAjRThFOEU4OyJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/table-list/table-list.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/table-list/table-list.component.ts ***!
          \****************************************************/
        /*! exports provided: TableListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function () { return TableListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _common_services_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/services/constants.service */ "./src/app/common/services/constants.service.ts");
            /* harmony import */ var _common_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/services/rest-api.service */ "./src/app/common/services/rest-api.service.ts");
            var TableListComponent = /** @class */ (function () {
                function TableListComponent(_restAPI, _constant) {
                    this._restAPI = _restAPI;
                    this._constant = _constant;
                    this.displayedColumns = [
                        "priority",
                        "ElapsedDays",
                        "title",
                        "status",
                        "category",
                        "ta",
                        "studyNo",
                        "vendor"
                    ];
                    this.tableData = [];
                }
                TableListComponent.prototype.ngOnInit = function () {
                    if (this.sectionType === "assignedToMe") {
                        this.getAllassignedData();
                    }
                    else {
                        this.getAllTicketReportedByme();
                    }
                    console.log("const", this.jiraAPI);
                    console.log("section", this.sectionType);
                };
                TableListComponent.prototype.showTicketDetails = function (popover, row) {
                    if (popover.isOpen()) {
                        popover.close();
                    }
                    else {
                        popover.open({ row: row });
                    }
                };
                TableListComponent.prototype.getAllassignedData = function () {
                    var _this = this;
                    this._restAPI.getAllAssignedTicket().subscribe(function (data) {
                        _this.tableData = data;
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.tableData.issues);
                        console.log("this.dataSource: ", _this.dataSource);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                    });
                };
                TableListComponent.prototype.getAllTicketReportedByme = function () {
                    var _this = this;
                    this._restAPI.getAllTicketReportedByme().subscribe(function (data) {
                        _this.tableData = data;
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.tableData.issues);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                    });
                };
                TableListComponent.prototype.rowLink = function (row) {
                    console.log('row link: ', row);
                    return "/issue-details/" + 1;
                };
                return TableListComponent;
            }());
            TableListComponent.ctorParameters = function () { return [
                { type: _common_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["IssuesService"] },
                { type: _common_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
            ], TableListComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
            ], TableListComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TableListComponent.prototype, "sectionType", void 0);
            TableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-table-list",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table-list.component.scss */ "./src/app/table-list/table-list.component.scss")).default]
                })
            ], TableListComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\HCL-proj\eCOA\project\ims\IMS-App\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map