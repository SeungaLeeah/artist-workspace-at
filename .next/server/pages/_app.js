/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/header.module.css":
/*!******************************************!*\
  !*** ./src/components/header.module.css ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header-wrap\": \"header_header-wrap__unEOp\",\n\t\"header-logo\": \"header_header-logo__uPLmf\",\n\t\"menu-item\": \"header_menu-item__RHYRi\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGVlYWhcXHByb2plY3RcXGFydGlzdC13b3Jrc3BhY2UtYXRcXHNyY1xcY29tcG9uZW50c1xcaGVhZGVyLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyLXdyYXBcIjogXCJoZWFkZXJfaGVhZGVyLXdyYXBfX3VuRU9wXCIsXG5cdFwiaGVhZGVyLWxvZ29cIjogXCJoZWFkZXJfaGVhZGVyLWxvZ29fX3VQTG1mXCIsXG5cdFwibWVudS1pdGVtXCI6IFwiaGVhZGVyX21lbnUtaXRlbV9fUkhZUmlcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.module.css\n");

/***/ }),

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module.css */ \"./src/components/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Header = ({ fontSize = '14px', menu = [] })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `${(_header_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"header-wrap\"])}`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `medium fs-20 ${(_header_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"header-logo\"])}`,\n                onClick: ()=>router.push('/menuManagement'),\n                children: \"Artist Workspace \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\header.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `fx-row`,\n                children: menu.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: `${(_header_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"menu-item\"])} ${router.pathname === item.path ? 'bold' : 'regular'}`,\n                        onClick: ()=>router.push(item.path),\n                        style: {\n                            fontSize: fontSize\n                        },\n                        children: item.name\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\header.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\header.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\header.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDZjtBQUNZO0FBWXRDLE1BQU1HLFNBQWdDLENBQUMsRUFDbkNDLFdBQVMsTUFBTSxFQUNmQyxPQUFPLEVBQUUsRUFDWjtJQUNHLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVyxHQUFHUiwwRUFBcUIsRUFBRTs7MEJBQ3RDLDhEQUFDTztnQkFBSUMsV0FBVyxDQUFDLGFBQWEsRUFBRVIsMEVBQXFCLEVBQUU7Z0JBQUVTLFNBQVMsSUFBSUgsT0FBT0ksSUFBSSxDQUFDOzBCQUFvQjs7Ozs7OzBCQUN0Ryw4REFBQ0g7Z0JBQUlDLFdBQVcsQ0FBQyxNQUFNLENBQUM7MEJBQ25CSCxLQUFLTSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2IsOERBQUNOO3dCQUFnQkMsV0FBVyxHQUFHUix3RUFBbUIsQ0FBQyxDQUFDLEVBQUVNLE9BQU9RLFFBQVEsS0FBS0YsS0FBS0csSUFBSSxHQUFHLFNBQVMsV0FBVzt3QkFBRU4sU0FBUyxJQUFJSCxPQUFPSSxJQUFJLENBQUNFLEtBQUtHLElBQUk7d0JBQUlDLE9BQU87NEJBQUNaLFVBQVNBO3dCQUFRO2tDQUFJUSxLQUFLSyxJQUFJO3VCQUE5S0o7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7QUFFQSxpRUFBZVYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxsZWVhaFxccHJvamVjdFxcYXJ0aXN0LXdvcmtzcGFjZS1hdFxcc3JjXFxjb21wb25lbnRzXFxoZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XHJcbiAgICB0eXBlPzogJ2J1dHRvbicgfCAnc3VibWl0JyB8ICdyZXNldCc7XHJcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIG1lbnU/OiB7IG5hbWU6IHN0cmluZywgcGF0aDogc3RyaW5nIH1bXTtcclxuICAgIGZvbnRTaXplPzpzdHJpbmc7XHJcbiAgICBpbWc/OnN0cmluZztcclxuICAgIGxvZ29JbWFnZT86c3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPEhlYWRlclByb3BzPiA9ICh7XHJcbiAgICBmb250U2l6ZT0nMTRweCcsXHJcbiAgICBtZW51ID0gW10sXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzWydoZWFkZXItd3JhcCddfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lZGl1bSBmcy0yMCAke3N0eWxlc1snaGVhZGVyLWxvZ28nXX1gfSBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goJy9tZW51TWFuYWdlbWVudCcpfT5BcnRpc3QgV29ya3NwYWNlIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZ4LXJvd2B9PlxyXG4gICAgICAgICAgICAgICAge21lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ21lbnUtaXRlbSddfSAke3JvdXRlci5wYXRobmFtZSA9PT0gaXRlbS5wYXRoID8gJ2JvbGQnIDogJ3JlZ3VsYXInfWB9IG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaChpdGVtLnBhdGgpfSAgc3R5bGU9e3tmb250U2l6ZTpmb250U2l6ZX19PntpdGVtLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJmb250U2l6ZSIsIm1lbnUiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBhdGhuYW1lIiwicGF0aCIsInN0eWxlIiwibmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header.tsx\n");

/***/ }),

/***/ "./src/layouts/mainLayout.tsx":
/*!************************************!*\
  !*** ./src/layouts/mainLayout.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.tsx\");\n\n\n\nconst MainLayout = ({ children, showHeader = true })=>{\n    const menu = [\n        {\n            name: '메뉴관리',\n            path: '/menuManagement'\n        },\n        {\n            name: '전시관리',\n            path: '/exhibitionManagement'\n        },\n        {\n            name: '작품관리',\n            path: '/workManagement'\n        },\n        {\n            name: '프로필관리',\n            path: '/profileManagement'\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            showHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                menu: menu\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\layouts\\\\mainLayout.tsx\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\layouts\\\\mainLayout.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\layouts\\\\mainLayout.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9tYWluTGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ2U7QUFPekMsTUFBTUUsYUFBd0MsQ0FBQyxFQUFFQyxRQUFRLEVBQUNDLGFBQWEsSUFBSSxFQUFFO0lBQ3pFLE1BQU1DLE9BQU07UUFDSjtZQUFDQyxNQUFNO1lBQVFDLE1BQU07UUFBaUI7UUFDdEM7WUFBQ0QsTUFBTTtZQUFRQyxNQUFNO1FBQXVCO1FBQzVDO1lBQUNELE1BQU07WUFBUUMsTUFBTTtRQUFpQjtRQUN0QztZQUFDRCxNQUFNO1lBQVNDLE1BQU07UUFBb0I7S0FDN0M7SUFFTCxxQkFDSSw4REFBQ0M7O1lBQ0lKLDRCQUNHLDhEQUFDSCwwREFBTUE7Z0JBQUNJLE1BQU1BOzs7Ozs7MEJBRWxCLDhEQUFDSTswQkFBTU47Ozs7Ozs7Ozs7OztBQUduQjtBQUVBLGlFQUFlRCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGxlZWFoXFxwcm9qZWN0XFxhcnRpc3Qtd29ya3NwYWNlLWF0XFxzcmNcXGxheW91dHNcXG1haW5MYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcblxyXG5pbnRlcmZhY2UgTWFpbkxheW91dFByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBzaG93SGVhZGVyPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgTWFpbkxheW91dDogUmVhY3QuRkM8TWFpbkxheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuLHNob3dIZWFkZXIgPSB0cnVlIH0pID0+IHtcclxuICAgIGNvbnN0IG1lbnU9IFtcclxuICAgICAgICAgICAge25hbWU6ICfrqZTribTqtIDrpqwnLCBwYXRoOiAnL21lbnVNYW5hZ2VtZW50J30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAn7KCE7Iuc6rSA66asJywgcGF0aDogJy9leGhpYml0aW9uTWFuYWdlbWVudCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ+yeke2SiOq0gOumrCcsIHBhdGg6ICcvd29ya01hbmFnZW1lbnQnfSxcclxuICAgICAgICAgICAge25hbWU6ICftlITroZztlYTqtIDrpqwnLCBwYXRoOiAnL3Byb2ZpbGVNYW5hZ2VtZW50J31cclxuICAgICAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0hlYWRlciAmJlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBtZW51PXttZW51fS8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJzaG93SGVhZGVyIiwibWVudSIsIm5hbWUiLCJwYXRoIiwiZGl2IiwibWFpbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/mainLayout.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/globals.css */ \"./src/assets/styles/globals.css\");\n/* harmony import */ var _assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_styles_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/styles/fonts.css */ \"./src/assets/styles/fonts.css\");\n/* harmony import */ var _assets_styles_fonts_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_fonts_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_styles_colors_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/styles/colors.css */ \"./src/assets/styles/colors.css\");\n/* harmony import */ var _assets_styles_colors_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_colors_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_styles_mgPd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/styles/mgPd.css */ \"./src/assets/styles/mgPd.css\");\n/* harmony import */ var _assets_styles_mgPd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_mgPd_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _layouts_mainLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/mainLayout */ \"./src/layouts/mainLayout.tsx\");\n\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>{\n    const getLayout = Component.getLayout || ((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_mainLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: page\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 57\n        }, undefined));\n    return getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 19,\n        columnNumber: 22\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBR1k7QUFDRjtBQUNDO0FBQ0Y7QUFDWTtBQU8vQyxNQUFNRSxNQUFNLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQXNCO0lBRXJELE1BQU1DLFlBQVlGLFVBQVVFLFNBQVMsSUFBSyxFQUFDQyxxQkFBUyw4REFBQ0wsMkRBQVVBO3NCQUFFSzs7Ozs7cUJBQWlCO0lBRWxGLE9BQU9ELHdCQUFVLDhEQUFDRjtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUM3QztBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGxlZWFoXFxwcm9qZWN0XFxhcnRpc3Qtd29ya3NwYWNlLWF0XFxzcmNcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2ZvbnRzLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9jb2xvcnMuY3NzJztcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL21nUGQuY3NzJztcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9tYWluTGF5b3V0JztcclxuXHJcblxyXG50eXBlIEFwcFByb3BzV2l0aExheW91dCA9IEFwcFByb3BzICYge1xyXG4gICAgQ29tcG9uZW50OiBOZXh0UGFnZSAmIHsgZ2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0LlJlYWN0Tm9kZSkgPT4gUmVhY3QuUmVhY3ROb2RlIH07XHJcbn07XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wc1dpdGhMYXlvdXQpID0+IHtcclxuXHJcbiAgICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0IHx8ICgocGFnZSkgPT4gPE1haW5MYXlvdXQ+e3BhZ2V9PC9NYWluTGF5b3V0Pik7XHJcblxyXG4gICAgcmV0dXJuIGdldExheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWFpbkxheW91dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/assets/styles/colors.css":
/*!**************************************!*\
  !*** ./src/assets/styles/colors.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/styles/fonts.css":
/*!*************************************!*\
  !*** ./src/assets/styles/fonts.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/styles/globals.css":
/*!***************************************!*\
  !*** ./src/assets/styles/globals.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/styles/mgPd.css":
/*!************************************!*\
  !*** ./src/assets/styles/mgPd.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();