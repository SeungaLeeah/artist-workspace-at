"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/workManagement/detail/[id]",{

/***/ "./src/components/editor.tsx":
/*!***********************************!*\
  !*** ./src/components/editor.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"components\\\\editor.tsx -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactQuill;\nvar Editor = function(param) {\n    var editorValue = param.editorValue, onChange = param.onChange;\n    var handleChange = function(value) {\n        onChange(value);\n        console.log(value, 'value');\n    };\n    var modules = {\n        toolbar: [\n            [\n                {\n                    header: '1'\n                },\n                {\n                    header: '2'\n                },\n                {\n                    header: '3'\n                },\n                {\n                    header: '4'\n                },\n                {\n                    header: '5'\n                },\n                {\n                    header: '6'\n                }\n            ],\n            [\n                {\n                    list: 'ordered'\n                },\n                {\n                    list: 'bullet'\n                }\n            ],\n            [\n                'bold',\n                'italic',\n                'underline'\n            ],\n            [\n                'link',\n                'image'\n            ],\n            [\n                'blockquote'\n            ],\n            [\n                {\n                    align: []\n                }\n            ]\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactQuill, {\n                value: editorValue,\n                onChange: handleChange,\n                modules: modules\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\editor.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"미리보기\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\editor.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"preview\",\n                dangerouslySetInnerHTML: {\n                    __html: editorValue\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\editor.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\editor.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = Editor;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactQuill\");\n$RefreshReg$(_c1, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lZGl0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNtQztBQUNNO0FBRXpDLElBQU1DLGFBQWFELG1EQUFPQSxDQUFDO1dBQU0sc01BQXFCOzs7Ozs7O0lBQUlFLEtBQUs7O0tBQXpERDtBQU9OLElBQU1FLFNBQTBCO1FBQUdDLG9CQUFBQSxhQUFhQyxpQkFBQUE7SUFDNUMsSUFBTUMsZUFBZSxTQUFDQztRQUNsQkYsU0FBU0U7UUFDVEMsUUFBUUMsR0FBRyxDQUFDRixPQUFPO0lBQ3ZCO0lBRUEsSUFBTUcsVUFBVTtRQUNaQyxTQUFTO1lBQ0w7Z0JBQUM7b0JBQUVDLFFBQVE7Z0JBQUk7Z0JBQUc7b0JBQUVBLFFBQVE7Z0JBQUk7Z0JBQUc7b0JBQUVBLFFBQVE7Z0JBQUk7Z0JBQUc7b0JBQUVBLFFBQVE7Z0JBQUk7Z0JBQUc7b0JBQUVBLFFBQVE7Z0JBQUk7Z0JBQUc7b0JBQUVBLFFBQVE7Z0JBQUk7YUFBRTtZQUN0RztnQkFBQztvQkFBRUMsTUFBTTtnQkFBVTtnQkFBRztvQkFBRUEsTUFBTTtnQkFBUzthQUFFO1lBQ3pDO2dCQUFDO2dCQUFRO2dCQUFVO2FBQVk7WUFDL0I7Z0JBQUM7Z0JBQVE7YUFBUTtZQUNqQjtnQkFBQzthQUFhO1lBQ2Q7Z0JBQUM7b0JBQUVDLE9BQU8sRUFBRTtnQkFBQzthQUFFO1NBQ2xCO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNmO2dCQUNHTSxPQUFPSDtnQkFDUEMsVUFBVUM7Z0JBQ1ZJLFNBQVNBOzs7Ozs7MEJBRWIsOERBQUNPOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNGO2dCQUNHQyxXQUFVO2dCQUNWRSx5QkFBeUI7b0JBQUVDLFFBQVFmO2dCQUFZOzs7Ozs7Ozs7Ozs7QUFJL0Q7TUEvQk1EO0FBaUNOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGxlZWFoXFxwcm9qZWN0XFxhcnRpc3Qtd29ya3NwYWNlLWF0XFxzcmNcXGNvbXBvbmVudHNcXGVkaXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcblxyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbmludGVyZmFjZSBFZGl0b3JQcm9wcyB7XHJcbiAgICBlZGl0b3JWYWx1ZTogc3RyaW5nO1xyXG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBFZGl0b3I6IEZDPEVkaXRvclByb3BzPiA9ICh7IGVkaXRvclZhbHVlLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSwgJ3ZhbHVlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1vZHVsZXMgPSB7XHJcbiAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgaGVhZGVyOiAnMycgfSwgeyBoZWFkZXI6ICc0JyB9LCB7IGhlYWRlcjogJzUnIH0sIHsgaGVhZGVyOiAnNicgfV0sXHJcbiAgICAgICAgICAgIFt7IGxpc3Q6ICdvcmRlcmVkJyB9LCB7IGxpc3Q6ICdidWxsZXQnIH1dLFxyXG4gICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddLFxyXG4gICAgICAgICAgICBbJ2xpbmsnLCAnaW1hZ2UnXSxcclxuICAgICAgICAgICAgWydibG9ja3F1b3RlJ10sXHJcbiAgICAgICAgICAgIFt7IGFsaWduOiBbXSB9XSxcclxuICAgICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgPFJlYWN0UXVpbGxcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlZGl0b3JWYWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDI+66+466as67O06riwPC9oMj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlld1wiXHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGVkaXRvclZhbHVlIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xyXG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIlJlYWN0UXVpbGwiLCJzc3IiLCJFZGl0b3IiLCJlZGl0b3JWYWx1ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJsaXN0IiwiYWxpZ24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/editor.tsx\n"));

/***/ })

});