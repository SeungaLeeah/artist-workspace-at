"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/workManagement/[id]",{

/***/ "./src/components/editor.tsx":
/*!***********************************!*\
  !*** ./src/components/editor.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"components\\\\editor.tsx -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactQuill;\nvar Editor = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), 2), editorValue = _useState[0], setEditorValue = _useState[1];\n    var handleChange = function(value) {\n        setEditorValue(value);\n        console.log(value, 'value');\n    };\n    var modules = {\n        toolbar: [\n            [\n                {\n                    header: '1'\n                },\n                {\n                    header: '2'\n                },\n                {\n                    header: '3'\n                },\n                {\n                    header: '4'\n                },\n                {\n                    header: '5'\n                },\n                {\n                    header: '6'\n                }\n            ],\n            [\n                {\n                    list: 'ordered'\n                },\n                {\n                    list: 'bullet'\n                }\n            ],\n            [\n                'bold',\n                'italic',\n                'underline'\n            ],\n            [\n                'link',\n                'image'\n            ],\n            [\n                'blockquote'\n            ],\n            [\n                {\n                    align: []\n                }\n            ]\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'w-100',\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactQuill, {\n                value: editorValue,\n                onChange: handleChange,\n                modules: modules,\n                style: {\n                    minHeight: '500px',\n                    padding: '10px'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\editor.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"미리보기\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\editor.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"preview\",\n                dangerouslySetInnerHTML: {\n                    __html: editorValue\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\editor.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leeah\\\\project\\\\artist-workspace-at\\\\src\\\\components\\\\editor.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, _this);\n};\n_s(Editor, \"3tfBEcIX78qGzIDs1ztRSJTBb4E=\");\n_c1 = Editor;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactQuill\");\n$RefreshReg$(_c1, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lZGl0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0U7QUFDTTtBQUV6QyxJQUFNRSxhQUFhRCxtREFBT0EsQ0FBQztXQUFNLHNNQUFxQjs7Ozs7OztJQUFJRSxLQUFLOztLQUF6REQ7QUFFTixJQUFNRSxTQUFTOztJQUNYLElBQXNDSixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBeENLLGNBQStCTCxjQUFsQk0saUJBQWtCTjtJQUV0QyxJQUFNTyxlQUFlLFNBQUNDO1FBQ2xCRixlQUFlRTtRQUNmQyxRQUFRQyxHQUFHLENBQUNGLE9BQU07SUFDdEI7SUFFQSxJQUFNRyxVQUFVO1FBQ1pDLFNBQVM7WUFDTDtnQkFBQztvQkFBRUMsUUFBUTtnQkFBSTtnQkFBRztvQkFBRUEsUUFBUTtnQkFBSTtnQkFBRztvQkFBRUEsUUFBUTtnQkFBSTtnQkFBRztvQkFBRUEsUUFBUTtnQkFBSTtnQkFBRTtvQkFBRUEsUUFBUTtnQkFBSTtnQkFBRztvQkFBRUEsUUFBUTtnQkFBSTthQUFFO1lBQ3JHO2dCQUFDO29CQUFFQyxNQUFNO2dCQUFVO2dCQUFHO29CQUFFQSxNQUFNO2dCQUFTO2FBQUU7WUFDekM7Z0JBQUM7Z0JBQVE7Z0JBQVU7YUFBWTtZQUMvQjtnQkFBQztnQkFBUTthQUFRO1lBQ2pCO2dCQUFDO2FBQWE7WUFDZDtnQkFBQztvQkFBRUMsT0FBTyxFQUFFO2dCQUFDO2FBQUU7U0FDbEI7SUFDTDtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXOzswQkFDWiw4REFBQ2Y7Z0JBQ0dNLE9BQU9IO2dCQUNQYSxVQUFVWDtnQkFDVkksU0FBU0E7Z0JBQ1RRLE9BQU87b0JBQ0hDLFdBQVc7b0JBQ1hDLFNBQVM7Z0JBQ2I7Ozs7OzswQkFFSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ047Z0JBQ0dDLFdBQVU7Z0JBQ1ZNLHlCQUF5QjtvQkFBQ0MsUUFBUW5CO2dCQUFXOzs7Ozs7Ozs7Ozs7QUFJN0Q7R0FyQ01EO01BQUFBO0FBdUNOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGxlZWFoXFxwcm9qZWN0XFxhcnRpc3Qtd29ya3NwYWNlLWF0XFxzcmNcXGNvbXBvbmVudHNcXGVkaXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcblxyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbmNvbnN0IEVkaXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlZGl0b3JWYWx1ZSwgc2V0RWRpdG9yVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdG9yVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLCd2YWx1ZScpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1vZHVsZXMgPSB7XHJcbiAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICBbeyBoZWFkZXI6ICcxJyB9LCB7IGhlYWRlcjogJzInIH0sIHsgaGVhZGVyOiAnMycgfSwgeyBoZWFkZXI6ICc0JyB9LHsgaGVhZGVyOiAnNScgfSwgeyBoZWFkZXI6ICc2JyB9XSxcclxuICAgICAgICAgICAgW3sgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfV0sXHJcbiAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXHJcbiAgICAgICAgICAgIFsnbGluaycsICdpbWFnZSddLFxyXG4gICAgICAgICAgICBbJ2Jsb2NrcXVvdGUnXSxcclxuICAgICAgICAgICAgW3sgYWxpZ246IFtdIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd3LTEwMCd9PlxyXG4gICAgICAgICAgICA8UmVhY3RRdWlsbFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRvclZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzUwMHB4JywgIC8vIOyXkOuUlO2EsCDsmIHsl60g7LWc7IaMIOuGkuydtCDshKTsoJVcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDI+66+466as67O06riwPC9oMj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJldmlld1wiXHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZWRpdG9yVmFsdWV9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZHluYW1pYyIsIlJlYWN0UXVpbGwiLCJzc3IiLCJFZGl0b3IiLCJlZGl0b3JWYWx1ZSIsInNldEVkaXRvclZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJsaXN0IiwiYWxpZ24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInN0eWxlIiwibWluSGVpZ2h0IiwicGFkZGluZyIsImgyIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/editor.tsx\n"));

/***/ })

});