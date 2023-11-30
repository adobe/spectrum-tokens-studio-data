/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // TOKENS_STUDIO: path to the tokens studio json file
    //                override with command line option -source=
    TOKENS_STUDIO: '../spectrum-tokens-studio-data/src/tokens-studio/spectrum2-colors/',
    // TOKENS_SPECTRUM: path to the spectrum-tokens source json directory
    //                  override with command line option -destination=
    TOKENS_SPECTRUM: '../spectrum-tokens/packages/tokens/src/',
    // TESTING: whether changes are written to the repo data
    //          override with command line option -test
    TESTING: false,
    ///////////////////////////////////////////////////////////////////////////////////////
    // directory to store the log files
    OUTPUT_LOGS: './logs/',
    // OUTPUT: when testing, this will write out the cout log so we can append to a pr
    COUT_LOG: 'cout.log',
    // OUTPUT: file to write new token definitions too: [path | undefined]
    TOKENS_OUT_NEW: 'newTokens.json',
    // OUTPUT: file to write changed token definitions too: [path | undefined]
    TOKENS_OUT_CHANGED: 'changedTokens.json',
    // OUTPUT: file to write changed token definitions too: [path | undefined]
    TOKENS_OUT_RENAMED: 'renamedTokens.json',
    // OUTPUT: file to write deleted token definitions too: [path | undefined]
    TOKENS_OUT_DEPRECATED: 'deprecatedTokens.json',
    // WHETHER EMPTY LOGS ARE WRITTEN OR NOT (sorta useful when debugging)
    WRITE_EMPTY_LOGS: false,
    ///////////////////////////////////////////////////////////////////////////////////////
    // CONSOLE LOGGING - can suppress this (on for jest tests, and git actions)
    SUPPRESS_COUT: false,
    // REPORTING: dumps change details to the console
    REPORT_VERBOSE: false,
    // AUTO-UPDATE: adds uuids to to token studio entries that do not have them
    CREATE_UUIDS_FOR_TOKENS_STUDIO: true,
    // WHEN A TOKEN IS DEFINED WITH DIFFERENT VALUES PER SET AND IS CHANGED TO BE
    // ONLY ONE CONSTANT VALUE, THIS DETERMINES WHETHER TO DEPRECATE OR DELETE THE
    // PRE-EXISTING SET TOKEN DEFINITIONS
    DELETE_DEPRECATED_LEAFS: true,
    // whether or not we say a spectrum definition that doesn't exist
    // in tokens studio implies that the spectrum token should be deprecated
    CHECK_FOR_DELETED_TOKENS: true,
    ///////////////////////////////////////////////////////////////////////////////////////
    // when adding tokens we need to have some specific mapping to the destination files
    SPECTRUM_FILES: {
        COLOR_PALETTE: 'color-palette.json',
        COLOR_SEMANTIC: 'semantic-color-palette.json',
        COLOR_ALIASES: 'color-aliases.json',
        COLOR_COMPONENT: 'color-component.json',
        ICONS: 'icons.json',
        LAYOUT: 'layout.json',
        LAYOUT_COMPONENT: 'layout-component.json',
        TYPOGRAPHY: 'typography.json',
    },
    // tokens studio has definitions for compound tokens and/or tokens defined from
    // a combination of other tokens with no comparable definition in spectrum-tokens
    // required or wanted, so we'll need to filter those out when checking for uuids
    //  depending on what we actually need to ignore we may need to change
    //  these and/or change the function that uses them: ignoreToken()
    IGNORED: ['desktop-generated', 'mobile-generated'],
    // limits the scope of this script to the specified system ex. 'spectrum', 'express', undefined
    SYSTEM: 'spectrum',
    // whether or not token value checks should be case sensitive
    CASE_SENSITIVE: true,
    // whether em values are equivalent to percentage values
    EM_IS_PERCENT: true,
    // value equivalency map - used to whitelist differences when comparing token values
    EQUIVALENT_VALUES: new Map([
        ["bold", "Bold"],
        ["regular", "Regular"],
        ["italic", "Italic"],
        ["extra-bold", "ExtraBold"],
        ["medium", "Medium"],
        ["normal", "Normal"],
        ["light", "Light"],
        ["extra-light", "ExtraLight"],
        ["black", "Black"],
    ]),
    // we use this stuff during value type verification and/or when creating new token entries
    // !!! very short on schema types, right now - these aren't be used to validate values, either
    SUPPORT_SCHEMAS: false,
    SCHEMA_TYPES: {
        "alias": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/alias.json",
        "color-set": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/color-set.json",
        "color": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/color.json"
    }
});


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    UUID: 'UUID',
    SPECTRUM: 'spectrum',
    STYLE: 'style',
    SYSTEM: 'SYSTEM',
    THEME: 'THEME',
    VALUE: 'value',
    TYPE: 'type',
    COLOR: 'color',
    SYSTEMS: ['spectrum', 'express'],
    THEMES: ['wireframe', 'light', 'dark', 'darkest'],
    SCALES: ['mobile', 'desktop'],
    BUSTER: '🚫',
    // these get used as object keys in type definitions
    EXTENSIONS: '$extensions',
    EXTENSIONS_STUDIO: 'studio.tokens',
    EXTENSIONS_SPECTRUM: 'spectrum-tokens',
    EXTENSIONS_SPECTRUM_NAME: 'name',
    EXTENSIONS_SPECTRUM_UUID: 'uuid',
    EXTENSIONS_SPECTRUM_DUPLICATE: 'constant-token-duplicate',
    EXTENSIONS_SPECTRUM_DEPRECATED: 'deprecated-uuids'
});


/***/ }),

/***/ "./src/core/equivalentValues.ts":
/*!**************************************!*\
  !*** ./src/core/equivalentValues.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareEquivalentValues: () => (/* binding */ compareEquivalentValues),
/* harmony export */   equivalentValue: () => (/* binding */ equivalentValue)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function equivalentValue(value) {
    for (const [c1, c2] of _config__WEBPACK_IMPORTED_MODULE_0__["default"].EQUIVALENT_VALUES) {
        if (c2 === value || (!_config__WEBPACK_IMPORTED_MODULE_0__["default"].CASE_SENSITIVE && c2.toLowerCase() === value.toLowerCase())) {
            return c1;
        }
    }
    if (value[value.length - 1] === '%') {
        return (parseInt(value) / 100).toFixed(2) + 'em';
    }
    // convert hex to rgb
    if (value.length && value[0] === '#') {
        return toRGB(value);
    }
    return value;
}
function compareEquivalentValues(v1, v2) {
    for (let [c1, c2] of _config__WEBPACK_IMPORTED_MODULE_0__["default"].EQUIVALENT_VALUES) {
        if (!_config__WEBPACK_IMPORTED_MODULE_0__["default"].CASE_SENSITIVE) {
            c1 = c1.toLowerCase();
            c2 = c2.toLowerCase();
            v1 = v1.toLowerCase();
            v2 = v2.toLowerCase();
        }
        if ((c1 === v1 && c2 === v2) || (c2 === v1 && c1 === v2)) {
            return true;
        }
    }
    // make sure hex/rgba is checked correctly
    if ((v1.length && v1[0] === '#') || (v2.length && v2[0] === '#')) {
        return toRGB(v1) === toRGB(v2);
    }
    return false;
}
function toRGB(value) {
    if (!value.length || value[0] !== '#') {
        return value;
    }
    const r = Number('0x' + value.slice(1, 3));
    const g = Number('0x' + value.slice(3, 5));
    const b = Number('0x' + value.slice(5, 7));
    let a = value.length === 9 ? (Number('0x' + value.slice(7, 9)) / 255).toFixed(2) : undefined;
    // dealing with alpha number formatting
    if (a && a === '0.00') {
        a = '0';
    }
    if (a && a !== '0' && a[a.length - 1] === '0') {
        a = a.substring(0, a.length - 1);
    }
    if (a !== undefined) {
        value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
    }
    else {
        value = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    return value;
}



/***/ }),

/***/ "./src/core/fileCaching.ts":
/*!*********************************!*\
  !*** ./src/core/fileCaching.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFile: () => (/* binding */ getFile),
/* harmony export */   storeFile: () => (/* binding */ storeFile),
/* harmony export */   writeFiles: () => (/* binding */ writeFiles)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
/* istanbul ignore file */


let FILECHANGED = {};
let FILECACHE = {};
function getFile(name, clean = false) {
    if (!FILECACHE[name] || clean) {
        FILECACHE[name] = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(name, { encoding: 'utf8', flag: 'r' }));
    }
    return FILECACHE[name];
}
function storeFile(name, data) {
    if (!FILECACHE[name])
        throw new Error('ERROR - FILE NOT LOADED INTO CACHE');
    FILECACHE[name] = data;
    FILECHANGED[name] = true;
}
function writeFiles() {
    for (const file of Object.keys(FILECHANGED)) {
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(file, JSON.stringify(FILECACHE[file], null, 2) + '\n');
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WROTE: ' + file);
    }
    FILECACHE = {};
    FILECHANGED = {};
}



/***/ }),

/***/ "./src/core/findBranchByUUID.ts":
/*!**************************************!*\
  !*** ./src/core/findBranchByUUID.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function findBranchByUUID(branch, uuid, path) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(branch)) {
        if (branch.uuid === uuid) {
            return true;
        }
        for (const key of Object.keys(branch)) {
            path.push(key);
            if (findBranchByUUID(branch[key], uuid, path)) {
                return true;
            }
            else {
                path.pop();
            }
        }
    }
    return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findBranchByUUID);


/***/ }),

/***/ "./src/core/getSpectrumReference.ts":
/*!******************************************!*\
  !*** ./src/core/getSpectrumReference.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/core/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function getSpectrumReference(spectrumTokens, uuid) {
    const value = spectrumTokens[uuid].value;
    if (value[0] === '{') {
        for (const entry of Object.values(spectrumTokens)) {
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.filterPath)(spectrumTokens[uuid].sets, spectrumTokens[entry.uuid].sets) && entry.name === value.replace('{', '').replace('}', '')) {
                return entry.uuid;
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSpectrumReference);


/***/ }),

/***/ "./src/core/getStudioReference.ts":
/*!****************************************!*\
  !*** ./src/core/getStudioReference.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/core/helpers.ts");
/* harmony import */ var _tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenStuff */ "./src/core/tokenStuff.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/


function getStudioReference(studioTokens, studioProblems, uuid) {
    const path = studioTokens[uuid].path;
    const value = studioTokens[uuid].value;
    if (value[0] === '{') {
        for (const entry of Object.values(studioTokens)) {
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.filterPath)(path.join('/').split('/'), entry.path.join('/').split('/')) && entry.path.slice().splice(1).join('.') === value.replace('{', '').replace('}', '')) {
                return (0,_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry);
            }
        }
        for (const entries of Object.values(studioProblems.collisions)) {
            for (const entry of entries) {
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.filterPath)(path.join('/').split('/'), entry.path.join('/').split('/')) && entry.path.slice().splice(1).join('.') === value.replace('{', '').replace('}', '')) {
                    return (0,_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry);
                }
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStudioReference);


/***/ }),

/***/ "./src/core/handleNameChanges.ts":
/*!***************************************!*\
  !*** ./src/core/handleNameChanges.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
function handleNameChanges(value, nameChanges) {
    if (value[0] === '{') {
        const reference = value.slice(1, -1);
        return nameChanges[reference] ? '{' + nameChanges[reference] + '}' : value;
    }
    return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleNameChanges);


/***/ }),

/***/ "./src/core/helpers.ts":
/*!*****************************!*\
  !*** ./src/core/helpers.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterPath: () => (/* binding */ filterPath),
/* harmony export */   isDeprecated: () => (/* binding */ isDeprecated),
/* harmony export */   toHex: () => (/* binding */ toHex)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function filterPath(source, check) {
    // ??? rename function
    let system;
    _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SYSTEMS.forEach((sys) => {
        if (source.includes(sys)) {
            system = sys;
        }
    });
    let theme;
    _constants__WEBPACK_IMPORTED_MODULE_0__["default"].THEMES.forEach((them) => {
        if (source.includes(them)) {
            theme = them;
        }
    });
    let scale;
    _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SCALES.forEach((scal) => {
        if (source.includes(scal)) {
            scale = scal;
        }
    });
    if (system) {
        for (const sys of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SYSTEMS) {
            if (check.includes(sys)) {
                if (sys !== system) {
                    return false;
                }
                else {
                    break;
                }
            }
        }
    }
    if (theme) {
        for (const them of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].THEMES) {
            if (check.includes(them)) {
                if (them !== theme) {
                    return false;
                }
                else {
                    break;
                }
            }
        }
    }
    if (scale) {
        for (const scal of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SCALES) {
            if (check.includes(scal)) {
                if (scal !== scale) {
                    return false;
                }
                else {
                    break;
                }
            }
        }
    }
    return true;
}
function toHex(color) {
    const r = Number(color.r).toString(16).toUpperCase().padStart(2, '0');
    const g = Number(color.g).toString(16).toUpperCase().padStart(2, '0');
    const b = Number(color.b).toString(16).toUpperCase().padStart(2, '0');
    const a = (Number(color.a) / 255).toFixed(2);
    return '#' + r + g + b + (Number(color.a) === 255 ? '' : ' ' + a.replace('0.', '') + '%');
}
function isDeprecated(path) {
    return path.join('.').indexOf(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].BUSTER) >= 0 ? true : false;
}



/***/ }),

/***/ "./src/core/printableSetName.ts":
/*!**************************************!*\
  !*** ./src/core/printableSetName.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
function printableSetName(spectrumToken) {
    if (spectrumToken.sets.length) {
        return '/' + spectrumToken.sets.join('/');
    }
    return '';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printableSetName);


/***/ }),

/***/ "./src/core/schemaStuff.ts":
/*!*********************************!*\
  !*** ./src/core/schemaStuff.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSchemaFromType: () => (/* binding */ getSchemaFromType),
/* harmony export */   getSchemaType: () => (/* binding */ getSchemaType)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function getSchemaType(studioToken) {
    let type = studioToken.type;
    if (studioToken.value[0] === '{') {
        type = 'alias';
    }
    return type;
}
function getSchemaFromType(type) {
    if (Object.keys(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES).includes(type)) {
        return _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES[type];
    }
    return undefined;
}



/***/ }),

/***/ "./src/core/tokenStuff.ts":
/*!********************************!*\
  !*** ./src/core/tokenStuff.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSpectrumTokenSetName: () => (/* binding */ getSpectrumTokenSetName),
/* harmony export */   getTokenDeprecations: () => (/* binding */ getTokenDeprecations),
/* harmony export */   getTokenDescription: () => (/* binding */ getTokenDescription),
/* harmony export */   getTokenDuplicated: () => (/* binding */ getTokenDuplicated),
/* harmony export */   getTokenName: () => (/* binding */ getTokenName),
/* harmony export */   getTokenReference: () => (/* binding */ getTokenReference),
/* harmony export */   getTokenSpectrumName: () => (/* binding */ getTokenSpectrumName),
/* harmony export */   getTokenStyles: () => (/* binding */ getTokenStyles),
/* harmony export */   getTokenUUID: () => (/* binding */ getTokenUUID),
/* harmony export */   getTokenValue: () => (/* binding */ getTokenValue),
/* harmony export */   ignoreToken: () => (/* binding */ ignoreToken),
/* harmony export */   setTokenDeprecations: () => (/* binding */ setTokenDeprecations),
/* harmony export */   setTokenDuplicated: () => (/* binding */ setTokenDuplicated),
/* harmony export */   setTokenSpectrumName: () => (/* binding */ setTokenSpectrumName),
/* harmony export */   setTokenUUID: () => (/* binding */ setTokenUUID)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/core/helpers.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/



function filterName(allowed, name, filter) {
    const bits = name.split('/');
    for (const bit of bits) {
        for (const check of filter) {
            if (bit.toLowerCase() === check.toLowerCase() && check.toLowerCase() !== allowed.toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}
function filterTheme(theme, name) {
    return theme ? filterName(theme, name, _constants__WEBPACK_IMPORTED_MODULE_0__["default"].THEMES) : true;
}
function getTokenStyles(file, startPath, data, studioTokens, studioProblems, theme = undefined, type = undefined) {
    // depth first...
    function traverseTokenStyles(root, path) {
        if (root[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].VALUE]) {
            const uuid = getTokenUUID(root);
            const extensions = root[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS];
            const tokenEntry = { value: root.value, type: root.type, files: [file], path: path, [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS]: extensions };
            // check metadata for unhandled tokens studio data
            if (extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_STUDIO]) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('WARNING - UNHANDLED MODIFIER: ' + path.join('.') + '\n' + JSON.stringify(extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_STUDIO]));
                studioProblems.metadata.push(tokenEntry);
            }
            // check metadata for unhandled spectrum tokens data
            if (extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM]) {
                const spectrumExtensionData = extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM];
                if (spectrumExtensionData) {
                    for (const key of Object.keys(spectrumExtensionData)) {
                        if (![_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_NAME, _constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_UUID, _constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DUPLICATE, _constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DEPRECATED].includes(key.toLowerCase())) {
                            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('WARNING - UNHANDLED SPECTRUM METADATA: ' + path.join('.') + ' => ' + key);
                            studioProblems.metadata.push(tokenEntry);
                        }
                    }
                }
            }
            // check for unhandled extension metadata entries
            if (extensions) {
                for (const key of Object.keys(extensions)) {
                    if (![_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM, _constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_STUDIO].includes(key.toLowerCase())) {
                        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('WARNING - UNHANDLED EXTENSION METADATA: ' + path.join('.') + ' => ' + key);
                        studioProblems.metadata.push(tokenEntry);
                    }
                }
            }
            // entry is missing a uuid
            if (!uuid) {
                studioProblems.uuids.push(tokenEntry);
                return;
            }
            if (studioTokens[uuid]) {
                // we're going to have a collision, so get prepared
                studioProblems.collisions[uuid] = [];
                studioProblems.collisions[uuid].push(studioTokens[uuid]);
                delete studioTokens[uuid];
            }
            if (studioProblems.collisions[uuid]) {
                studioProblems.collisions[uuid].push(tokenEntry);
                return;
            }
            if (!type || (tokenEntry.type && tokenEntry.type === type)) {
                studioTokens[uuid] = tokenEntry;
            }
        }
        else {
            Object.keys(root).forEach((child) => {
                if (child[0] !== '$') {
                    if (filterTheme(theme, child)) {
                        traverseTokenStyles(root[child], path.concat([child]));
                    }
                }
            });
        }
    }
    traverseTokenStyles(data, startPath);
}
function initializeExtensions(entry) {
    let result = entry[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS];
    if (!result) {
        result = {
            [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_STUDIO]: undefined,
            [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM]: { [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_NAME]: undefined, [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_UUID]: undefined, [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DUPLICATE]: undefined, [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DEPRECATED]: undefined }
        };
        entry[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS] = result;
    }
    if (result) {
        if (!result[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM]) {
            result[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM] = {
                [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_NAME]: undefined,
                [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_UUID]: undefined,
                [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DUPLICATE]: undefined,
                [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DEPRECATED]: undefined
            };
        }
        return result;
    }
    throw new Error();
}
function getTokenDuplicated(entry) {
    const extensions = entry[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS];
    const extensions_spectrum = extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM] ? extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM] : undefined;
    return extensions_spectrum && extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DUPLICATE] !== undefined ? extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DUPLICATE] : undefined;
}
function setTokenDuplicated(entry, duplicate) {
    const extensions = initializeExtensions(entry);
    const extensions_spectrum = extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM];
    if (extensions_spectrum) {
        extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DUPLICATE] = duplicate;
    }
}
function getTokenUUID(entry) {
    const extensions = entry[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS];
    const extensions_spectrum = extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM] ? extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM] : undefined;
    return extensions_spectrum && extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_UUID] !== undefined ? extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_UUID] : undefined;
}
function setTokenUUID(entry, uuid) {
    const extensions = initializeExtensions(entry);
    const extensions_spectrum = extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM];
    if (extensions_spectrum) {
        extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_UUID] = uuid;
    }
}
function getTokenSpectrumName(entry) {
    const extensions = entry[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS];
    const extensions_spectrum = extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM] ? extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM] : undefined;
    const extensions_spectrum_name = extensions_spectrum && extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_NAME] ? extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_NAME] : undefined;
    return extensions_spectrum_name && extensions_spectrum_name.length ? extensions_spectrum_name : undefined;
}
function setTokenSpectrumName(entry, name) {
    const extensions = initializeExtensions(entry);
    const extensions_spectrum = extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM];
    if (extensions_spectrum) {
        extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_NAME] = name;
    }
}
function getTokenDeprecations(entry) {
    const extensions = entry[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS];
    const extensions_spectrum = extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM] ? extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM] : undefined;
    return extensions_spectrum && extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DEPRECATED] !== undefined ? extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DEPRECATED] : undefined;
}
function setTokenDeprecations(entry, deprecations) {
    const extensions = initializeExtensions(entry);
    const extensions_spectrum = extensions[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM];
    if (extensions_spectrum) {
        extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS_SPECTRUM_DEPRECATED] = deprecations;
    }
}
function getTokenValue(tokenEntries, value) {
    while (value[0] === '{') {
        // need to look up a reference...
        let result = undefined;
        const tokens = Object.values(tokenEntries);
        while (!result && tokens.length) {
            const token = tokens.pop();
            if (token) {
                const ref = '{' + token.path.slice().splice(1).join('.') + '}';
                if (ref.toLowerCase() === value.toLowerCase()) {
                    result = token.value;
                }
            }
        }
        if (result) {
            value = result;
        }
        else {
            throw new Error('getTokenValue: failed to resolve reference => ' + value);
        }
    }
    return value;
}
function getTokenName(token) {
    return token.path.slice().splice(1).join('/');
}
function getTokenReference(token) {
    if (token.value[0] === '{') {
        return token.value.replaceAll('{', '').replaceAll('}', '');
    }
    else {
        return token.path.slice().splice(1).join('.');
    }
}
function getTokenDescription(token, color) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toHex)(color) + '\n' + getTokenReference(token);
}
function ignoreToken(token, ignored) {
    // we're going to split up the current group names even further
    // but the different separators we use for the names
    let tokenBits = [];
    token.forEach((bit) => {
        const bits = bit.split('/');
        bits.forEach((anotherBit) => {
            tokenBits = tokenBits.concat(anotherBit.split('.'));
        });
    });
    for (const ignore of ignored) {
        if (tokenBits.includes(ignore)) {
            return true;
        }
    }
    return false;
}
function getSpectrumTokenSetName(entry) {
    const setName = entry.path[0].split('/').pop();
    return setName ? setName : '';
}



/***/ }),

/***/ "./src/diff.ts":
/*!*********************!*\
  !*** ./src/diff.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _operations_readStudioTokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations/readStudioTokens */ "./src/operations/readStudioTokens.ts");
/* harmony import */ var _operations_readSpectrumTokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operations/readSpectrumTokens */ "./src/operations/readSpectrumTokens.ts");
/* harmony import */ var _reports_reportTokenCounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports/reportTokenCounts */ "./src/reports/reportTokenCounts.ts");
/* harmony import */ var _reports_reportUUIDCollisions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports/reportUUIDCollisions */ "./src/reports/reportUUIDCollisions.ts");
/* harmony import */ var _reports_reportMissingStudioUUIDs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/reportMissingStudioUUIDs */ "./src/reports/reportMissingStudioUUIDs.ts");
/* harmony import */ var _reports_reportMissingSpectrumUUIDs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reports/reportMissingSpectrumUUIDs */ "./src/reports/reportMissingSpectrumUUIDs.ts");
/* harmony import */ var _reports_reportValueChanges__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports/reportValueChanges */ "./src/reports/reportValueChanges.ts");
/* harmony import */ var _reports_reportNameChanges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/reportNameChanges */ "./src/reports/reportNameChanges.ts");
/* harmony import */ var _reports_reportMissingStudioTokenNames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports/reportMissingStudioTokenNames */ "./src/reports/reportMissingStudioTokenNames.ts");
/* harmony import */ var _reports_reportNewTokens__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/reportNewTokens */ "./src/reports/reportNewTokens.ts");
/* harmony import */ var _operations_formatNewSpectrumTokens__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operations/formatNewSpectrumTokens */ "./src/operations/formatNewSpectrumTokens.ts");
/* harmony import */ var _operations_formatChangedSpectrumTokens__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./operations/formatChangedSpectrumTokens */ "./src/operations/formatChangedSpectrumTokens.ts");
/* harmony import */ var _operations_addUUIDs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./operations/addUUIDs */ "./src/operations/addUUIDs.ts");
/* harmony import */ var _operations_checkValueChanges__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./operations/checkValueChanges */ "./src/operations/checkValueChanges.ts");
/* harmony import */ var _operations_checkNameChanges__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./operations/checkNameChanges */ "./src/operations/checkNameChanges.ts");
/* harmony import */ var _operations_checkForDeprecatedTokens__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./operations/checkForDeprecatedTokens */ "./src/operations/checkForDeprecatedTokens.ts");
/* harmony import */ var _reports_reportDeletedTokens__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reports/reportDeletedTokens */ "./src/reports/reportDeletedTokens.ts");
/* harmony import */ var _reports_reportMissingSpectrumSets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./reports/reportMissingSpectrumSets */ "./src/reports/reportMissingSpectrumSets.ts");
/* harmony import */ var _reports_reportMissingStudioModes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reports/reportMissingStudioModes */ "./src/reports/reportMissingStudioModes.ts");
/* harmony import */ var _operations_deprecateSpectrumTokens__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./operations/deprecateSpectrumTokens */ "./src/operations/deprecateSpectrumTokens.ts");
/* harmony import */ var _operations_renameSpectrumTokens__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./operations/renameSpectrumTokens */ "./src/operations/renameSpectrumTokens.ts");
/* harmony import */ var _operations_changeSpectrumTokens__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./operations/changeSpectrumTokens */ "./src/operations/changeSpectrumTokens.ts");
/* harmony import */ var _operations_addSpectrumTokens__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./operations/addSpectrumTokens */ "./src/operations/addSpectrumTokens.ts");
/* harmony import */ var _reports_reportDeprecatedTokenUsage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./reports/reportDeprecatedTokenUsage */ "./src/reports/reportDeprecatedTokenUsage.ts");
/* harmony import */ var _reports_reportTypeConflicts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./reports/reportTypeConflicts */ "./src/reports/reportTypeConflicts.ts");
/* harmony import */ var _reports_reportOtherProblems__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./reports/reportOtherProblems */ "./src/reports/reportOtherProblems.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _operations_updateTokenNameMetadata__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./operations/updateTokenNameMetadata */ "./src/operations/updateTokenNameMetadata.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/































function syncToSpectrum() {
    // load token data from the data sets
    const { spectrumTokens, spectrumProblems } = (0,_operations_readSpectrumTokens__WEBPACK_IMPORTED_MODULE_4__["default"])(_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_SPECTRUM, _config__WEBPACK_IMPORTED_MODULE_1__["default"].SYSTEM);
    const { studioTokens, studioProblems } = (0,_operations_readStudioTokens__WEBPACK_IMPORTED_MODULE_3__.readStudioTokens)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_STUDIO);
    // report uuid collisions (there are multiple entries in a data set for a single uuid)
    (0,_reports_reportUUIDCollisions__WEBPACK_IMPORTED_MODULE_6__["default"])(studioProblems, spectrumProblems);
    // report missing uuids in the spectrum-tokens data
    (0,_reports_reportMissingSpectrumUUIDs__WEBPACK_IMPORTED_MODULE_8__["default"])(spectrumProblems);
    // report missing tokens studio mode entries
    (0,_reports_reportMissingStudioModes__WEBPACK_IMPORTED_MODULE_21__["default"])(studioProblems);
    // report missing spectrum-tokens set entries
    (0,_reports_reportMissingSpectrumSets__WEBPACK_IMPORTED_MODULE_20__["default"])(spectrumTokens, spectrumProblems, studioProblems.usedModes);
    // collect token name changes (from the tokens studio extension metadata)
    if (!studioProblems.colorOnly) {
        // tokens studio names match spectrum-token names, so we should first align
        // the tokens studio metadata name in the extension data to the token name
        // before checking for name changes
        (0,_operations_updateTokenNameMetadata__WEBPACK_IMPORTED_MODULE_30__["default"])(studioTokens, studioProblems);
    }
    const renamedTokens = (0,_operations_checkNameChanges__WEBPACK_IMPORTED_MODULE_17__["default"])(spectrumTokens, studioTokens, studioProblems);
    // deal with missing uuids in token studio data: create them or report them
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_UUIDS_FOR_TOKENS_STUDIO) {
        (0,_operations_addUUIDs__WEBPACK_IMPORTED_MODULE_15__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, _config__WEBPACK_IMPORTED_MODULE_1__["default"].IGNORED);
    }
    else {
        (0,_reports_reportMissingStudioUUIDs__WEBPACK_IMPORTED_MODULE_7__["default"])(studioProblems, _config__WEBPACK_IMPORTED_MODULE_1__["default"].IGNORED);
    }
    // report type conflicts
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].SUPPORT_SCHEMAS) {
        (0,_reports_reportTypeConflicts__WEBPACK_IMPORTED_MODULE_27__["default"])(studioTokens, spectrumTokens);
    }
    // report deprecated token usage in tokens studio data
    (0,_reports_reportDeprecatedTokenUsage__WEBPACK_IMPORTED_MODULE_26__["default"])(studioTokens, spectrumTokens, spectrumProblems);
    // report missing token name in metadata
    (0,_reports_reportMissingStudioTokenNames__WEBPACK_IMPORTED_MODULE_11__["default"])(studioTokens);
    // report... other problems
    (0,_reports_reportOtherProblems__WEBPACK_IMPORTED_MODULE_28__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems);
    // report token data type
    if (studioProblems.colorOnly) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('TOKENS STUDIO DATA IS COLOR ONLY');
    }
    else {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('TOKENS STUDIO DATA IS NON-COLOR ONLY');
    }
    // report token counts
    (0,_reports_reportTokenCounts__WEBPACK_IMPORTED_MODULE_5__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems);
    // collect new uuids
    const newTokens = [];
    Object.keys(studioTokens).forEach((uuid) => {
        if (!Object.keys(spectrumTokens).includes(uuid) && !Object.keys(spectrumProblems.collisions).includes(uuid) && !Object.keys(spectrumProblems.deprecated).includes(uuid)) {
            newTokens.push(studioTokens[uuid]);
        }
    });
    // collect deleted tokens
    let deprecatedTokens = [];
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].CHECK_FOR_DELETED_TOKENS) {
        deprecatedTokens = (0,_operations_checkForDeprecatedTokens__WEBPACK_IMPORTED_MODULE_18__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems);
    }
    // collect value changes
    const outdatedValues = (0,_operations_checkValueChanges__WEBPACK_IMPORTED_MODULE_16__["default"])(studioTokens, studioProblems, spectrumTokens);
    // report change summary
    if (newTokens.length) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('NEW TOKEN VALUES:     ' + newTokens.length);
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_VERBOSE) {
            (0,_reports_reportNewTokens__WEBPACK_IMPORTED_MODULE_12__["default"])(newTokens);
        }
    }
    if (Object.keys(renamedTokens).length) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('RENAMED TOKENS: ' + Object.keys(renamedTokens).length);
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_VERBOSE) {
            (0,_reports_reportNameChanges__WEBPACK_IMPORTED_MODULE_10__["default"])(renamedTokens);
        }
    }
    if (deprecatedTokens.length) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('DEPRECATED TOKENS: ' + deprecatedTokens.length);
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_VERBOSE) {
            (0,_reports_reportDeletedTokens__WEBPACK_IMPORTED_MODULE_19__["default"])(deprecatedTokens);
        }
    }
    if (Object.keys(outdatedValues).length) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('CHANGED VALUES: ' + Object.keys(outdatedValues).length);
        // report value changes in detail
        (0,_reports_reportValueChanges__WEBPACK_IMPORTED_MODULE_9__["default"])(studioTokens, spectrumTokens, outdatedValues);
    }
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS) {
        // make sure the log directory exists
        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS)) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS);
        }
    }
    // output deprecated tokens object
    if (deprecatedTokens.length) {
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED, JSON.stringify(deprecatedTokens, null, 2), { encoding: 'utf8', flag: 'w' });
            // cout('WROTE DEPRECATED TOKENS: +' + deprecatedTokens.length + ' => ' + CONFIG.OUTPUT_LOGS + CONFIG.TOKENS_OUT_DEPRECATED);
        }
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED && _config__WEBPACK_IMPORTED_MODULE_1__["default"].WRITE_EMPTY_LOGS) {
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED, JSON.stringify({}, null, 2), { encoding: 'utf8', flag: 'w' });
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED && !_config__WEBPACK_IMPORTED_MODULE_1__["default"].WRITE_EMPTY_LOGS) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED)) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED);
        }
    }
    // output renamed tokens object
    if (Object.keys(renamedTokens).length) {
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED, JSON.stringify(renamedTokens, null, 2), { encoding: 'utf8', flag: 'w' });
            // cout('WROTE RENAMED TOKENS: +' + Object.keys(renamedTokens).length + ' => ' + CONFIG.OUTPUT_LOGS + CONFIG.TOKENS_OUT_RENAMED);
        }
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED && _config__WEBPACK_IMPORTED_MODULE_1__["default"].WRITE_EMPTY_LOGS) {
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED, JSON.stringify({}, null, 2), { encoding: 'utf8', flag: 'w' });
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED && !_config__WEBPACK_IMPORTED_MODULE_1__["default"].WRITE_EMPTY_LOGS) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED)) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED);
        }
    }
    // collect & output new tokens data object
    let newTokenData = {};
    if (newTokens.length) {
        newTokenData = (0,_operations_formatNewSpectrumTokens__WEBPACK_IMPORTED_MODULE_13__["default"])(newTokens, renamedTokens, studioTokens, studioProblems, spectrumTokens, spectrumProblems);
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW, JSON.stringify(newTokenData, null, 2), { encoding: 'utf8', flag: 'w' });
            // cout('WROTE NEW TOKENS: +' + Object.keys(newTokenData).length + ' => ' + CONFIG.OUTPUT_LOGS + CONFIG.TOKENS_OUT_NEW);
        }
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW && _config__WEBPACK_IMPORTED_MODULE_1__["default"].WRITE_EMPTY_LOGS) {
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW, JSON.stringify({}, null, 2), { encoding: 'utf8', flag: 'w' });
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW && !_config__WEBPACK_IMPORTED_MODULE_1__["default"].WRITE_EMPTY_LOGS) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW)) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW);
        }
    }
    // collect & output changed token data object
    let changedTokenData = {};
    if (Object.keys(outdatedValues).length) {
        changedTokenData = (0,_operations_formatChangedSpectrumTokens__WEBPACK_IMPORTED_MODULE_14__["default"])(outdatedValues, renamedTokens, studioTokens, studioProblems, spectrumTokens, spectrumProblems);
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED, JSON.stringify(changedTokenData, null, 2), { encoding: 'utf8', flag: 'w' });
            // cout('WROTE CHANGED TOKENS: +' + Object.keys(changedTokenData).length + ' => ' + CONFIG.OUTPUT_LOGS + CONFIG.TOKENS_OUT_CHANGED);
        }
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED && _config__WEBPACK_IMPORTED_MODULE_1__["default"].WRITE_EMPTY_LOGS) {
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED, JSON.stringify({}, null, 2), { encoding: 'utf8', flag: 'w' });
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED && !_config__WEBPACK_IMPORTED_MODULE_1__["default"].WRITE_EMPTY_LOGS) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED)) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED);
        }
    }
    (0,_operations_renameSpectrumTokens__WEBPACK_IMPORTED_MODULE_23__["default"])(renamedTokens);
    (0,_operations_deprecateSpectrumTokens__WEBPACK_IMPORTED_MODULE_22__["default"])(spectrumTokens, spectrumProblems, deprecatedTokens);
    (0,_operations_addSpectrumTokens__WEBPACK_IMPORTED_MODULE_25__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, newTokenData, renamedTokens);
    (0,_operations_changeSpectrumTokens__WEBPACK_IMPORTED_MODULE_24__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, changedTokenData);
    if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].TESTING) {
        (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_29__.writeFiles)();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('SYNC COMPLETE');
    }
    else {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('TEST COMPLETE');
    }
}
function parseArgs() {
    const source = '-source='; // path to the tokens-studio-data repo
    const destination = '-destination='; // path to the spectrum-tokens repo
    const test = '-test'; // whether this is a test run, and changes will not be written to the repos
    const action = '-action'; // whether this is running as an action
    const args = {};
    process.argv.forEach((arg) => {
        if (arg.indexOf(source) === 0) {
            args.source = arg.slice(source.length);
        }
        if (arg.indexOf(destination) === 0) {
            args.destination = arg.slice(destination.length);
        }
        if (arg.indexOf(test) === 0) {
            args.test = true;
        }
        if (arg.indexOf(action) === 0) {
            args.action = true;
        }
    });
    for (const arg of Object.keys(args)) {
        switch (arg) {
            case 'source':
                _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_STUDIO = args[arg];
                break;
            case 'destination':
                _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_SPECTRUM = args[arg];
                break;
            case 'test':
                _config__WEBPACK_IMPORTED_MODULE_1__["default"].TESTING = args[arg];
                break;
            case 'action':
                _config__WEBPACK_IMPORTED_MODULE_1__["default"].SUPPRESS_COUT = true; // console log will be written to the action summary, instead
                break;
        }
    }
}
function writeCoutLog() {
    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(_config__WEBPACK_IMPORTED_MODULE_1__["default"].COUT_LOG, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getcout)().join('\n') + '\n', { encoding: 'utf8', flag: 'w' });
}
async function main() {
    try {
        syncToSpectrum();
        writeCoutLog();
    }
    catch (error) {
        writeCoutLog();
        throw error;
    }
}
parseArgs();
await main();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cout: () => (/* binding */ cout),
/* harmony export */   getcout: () => (/* binding */ getcout),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ "./node_modules/chalk/source/index.js");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
/* istanbul ignore file */ // jest coverage ignore, fyi


const WARNING = 'WARNING - ';
const ERROR = 'ERROR - ';
const LOG = [];
function cout(msg) {
    // eslint-disable-next-line no-prototype-builtins
    if (msg && msg.hasOwnProperty && msg.hasOwnProperty('stack') && msg.stack.length) {
        msg = msg.stack;
    }
    if (isString(msg)) {
        if (msg.indexOf(ERROR) === 0) {
            msg = '\n  > ' + msg.split('\n').join('\n  > ' + ' '.repeat(ERROR.length)) + '\n';
        }
        else if (msg.indexOf(WARNING) === 0) {
            msg = '\n  > ' + msg.split('\n').join('\n  > ' + ' '.repeat(WARNING.length)) + '\n';
        }
        LOG.push(msg);
        if (!_config__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPRESS_COUT) {
            if (msg.indexOf(ERROR) >= 0) {
                // eslint-disable-next-line no-console
                console.log(chalk__WEBPACK_IMPORTED_MODULE_1__["default"].red(msg));
            }
            else if (msg.indexOf(WARNING) >= 0) {
                // eslint-disable-next-line no-console
                console.log(chalk__WEBPACK_IMPORTED_MODULE_1__["default"].yellow(msg));
            }
            else {
                // eslint-disable-next-line no-console
                console.log(msg);
            }
        }
    }
    else {
        try {
            if (isObject(msg) || (isArray(msg) && msg.length && (isObject(msg[0]) || isArray(msg[0])))) {
                // for objects and arrays of objects and arrays of arrays
                msg = JSON.stringify(msg, null, 2);
            }
            else if (isArray(msg)) {
                // for simple arrays
                msg = JSON.stringify(msg);
            }
            LOG.push(msg);
        }
        catch (error) {
            // the json.stringify failed, so just output something lame into the log
            // could happen if there's a circular reference or something
            LOG.push(typeof msg);
        }
        if (!_config__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPRESS_COUT) {
            // eslint-disable-next-line no-console
            console.log(msg);
        }
    }
}
function getcout() {
    return LOG;
}
// used to force a delay
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function isObject(a) {
    return !!a && a.constructor && (a.constructor === Object || a.constructor.name === 'Object');
}
function isArray(a) {
    return !!a && a.constructor && (a.constructor === Array || a.constructor.name === 'Array');
}
function isString(a) {
    return typeof a === 'string' || a instanceof String;
}



/***/ }),

/***/ "./src/operations/addSpectrumTokens.ts":
/*!*********************************************!*\
  !*** ./src/operations/addSpectrumTokens.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/



function sortTokens(data, renamedTokens) {
    const result = {};
    const allTokens = Object.keys(data).reverse();
    function getSortedTokens(token) {
        const head = token.split('-').slice(0, -1).join('-');
        const tokens = [token];
        for (const t of allTokens) {
            const tokenBits = t.split('-');
            if (!isNaN(Number(tokenBits[tokenBits.length - 1]))) {
                if (t.split('-').slice(0, -1).join('-') === head) {
                    tokens.push(t);
                }
            }
        }
        tokens.sort((a, b) => {
            const aValue = Number(a.split('-').pop());
            const bValue = Number(b.split('-').pop());
            if (aValue < bValue) {
                return -1;
            }
            if (aValue > bValue) {
                return 1;
            }
            return 0;
        });
        return tokens;
    }
    do {
        const token = allTokens.pop();
        if (token && !result[token]) {
            const tokenBits = token.split('-');
            if (!isNaN(Number(tokenBits[tokenBits.length - 1]))) {
                const sorted = getSortedTokens(token);
                for (const sortedToken of sorted) {
                    result[sortedToken] = data[sortedToken];
                }
            }
            else if (Object.keys(renamedTokens).includes(token) && data[renamedTokens[token]]) {
                result[token] = data[token];
                result[renamedTokens[token]] = data[renamedTokens[token]];
            }
            else {
                result[token] = data[token];
            }
        }
    } while (allTokens.length);
    return result;
}
function deprecateSets(branch) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(branch)) {
        if (branch.value !== undefined) {
            branch.deprecated = true;
        }
        for (const key of Object.keys(branch)) {
            deprecateSets(branch[key]);
        }
    }
}
function addTokens(tokens, file, renamedTokens) {
    const path = _config__WEBPACK_IMPORTED_MODULE_0__["default"].TOKENS_SPECTRUM + file;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)(path);
    const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(path);
    for (const tokenName of Object.keys(tokens)) {
        let merged;
        if (!data[tokenName]) {
            data[tokenName] = tokens[tokenName];
            merged = true;
        }
        else if (data[tokenName] && data[tokenName].sets && tokens[tokenName].sets) {
            for (const set of Object.keys(tokens[tokenName].sets)) {
                if (!data[tokenName].sets[set] && merged !== false) {
                    data[tokenName].sets[set] = tokens[tokenName].sets[set];
                    merged = true;
                }
                else {
                    merged = false;
                }
            }
        }
        else if (data[tokenName] && !data[tokenName].sets && tokens[tokenName].sets) {
            data[tokenName].sets = tokens[tokenName].sets;
            merged = true;
        }
        else if (data[tokenName] && data[tokenName].sets && !tokens[tokenName].sets) {
            const tokenDefinition = {};
            for (const key of Object.keys(tokens[tokenName])) {
                tokenDefinition[key] = tokens[tokenName][key];
            }
            if (!_config__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_DEPRECATED_LEAFS) {
                tokenDefinition.sets = data[tokenName].sets;
                deprecateSets(tokenDefinition.sets);
            }
            data[tokenName] = tokenDefinition;
            merged = true;
        }
        if (!merged) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('ERROR - could not merge new token definition: ' + tokenName);
        }
    }
    (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.storeFile)(path, sortTokens(data, renamedTokens));
}
function findUUID(data) {
    if (data.uuid) {
        return data.uuid;
    }
    for (const key of Object.keys(data)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(data[key])) {
            const uuid = findUUID(data[key]);
            if (uuid) {
                return uuid;
            }
        }
    }
    return undefined;
}
function filterKeys(keys, bit) {
    const result = [];
    for (const key of keys) {
        const bits = key.split('-');
        if (bits[0] === bit) {
            result.push(bits.slice(1).join('-'));
        }
    }
    return result;
}
function isLayoutToken(name) {
    // we're going to make a guess regarding the name whether it is layout token or a layout-component token
    const layoutData = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(_config__WEBPACK_IMPORTED_MODULE_0__["default"].TOKENS_SPECTRUM + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT);
    const componentData = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(_config__WEBPACK_IMPORTED_MODULE_0__["default"].TOKENS_SPECTRUM + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT_COMPONENT);
    let layoutKeys = Object.keys(layoutData);
    let componentKeys = Object.keys(componentData);
    const bits = name.split('-').reverse();
    while (bits.length && layoutKeys.length && componentKeys.length) {
        const bit = bits.pop();
        if (bit) {
            layoutKeys = filterKeys(layoutKeys, bit);
            componentKeys = filterKeys(componentKeys, bit);
        }
    }
    if (layoutKeys.length && !componentKeys.length) {
        return true;
    }
    return false;
}
function addSpectrumTokens(studioTokens, studioProblems, spectrumTokens, spectrumProblems, newTokens, renamedTokens) {
    if (Object.keys(newTokens).length) {
        const colorPalette = {};
        const colorAlias = {};
        const colorSemantic = {};
        const colorComponent = {};
        const icons = {};
        const layout = {};
        const layoutComponent = {};
        const typography = {};
        for (const tokenName of Object.keys(newTokens)) {
            const tokenEntry = newTokens[tokenName];
            const uuid = findUUID(tokenEntry);
            if (!uuid) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('ERROR - missing uuid: ' + tokenName);
                continue;
            }
            // look for existing reference to the token name in the
            // spectrum files, likely a deprecated reference
            // ... or look for the renamed reference
            let oldTokenName = undefined;
            for (const name of Object.keys(renamedTokens)) {
                if (renamedTokens[name] === tokenName) {
                    oldTokenName = name;
                }
            }
            let found = false;
            for (const file of Object.keys(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES)) {
                const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(_config__WEBPACK_IMPORTED_MODULE_0__["default"].TOKENS_SPECTRUM + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES[file]);
                if (data && (data[tokenName] || (oldTokenName && data[oldTokenName]))) {
                    switch (_config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES[file]) {
                        case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_PALETTE:
                            colorPalette[tokenName] = tokenEntry;
                            break;
                        case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_SEMANTIC:
                            colorSemantic[tokenName] = tokenEntry;
                            break;
                        case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_ALIASES:
                            colorAlias[tokenName] = tokenEntry;
                            break;
                        case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_COMPONENT:
                            colorComponent[tokenName] = tokenEntry;
                            break;
                        case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.ICONS:
                            icons[tokenName] = tokenEntry;
                            break;
                        case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT:
                            layout[tokenName] = tokenEntry;
                            break;
                        case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT_COMPONENT:
                            layoutComponent[tokenName] = tokenEntry;
                            break;
                        case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.TYPOGRAPHY:
                            typography[tokenName] = tokenEntry;
                            break;
                    }
                    found = true;
                    break;
                }
            }
            if (found) {
                // there was likely a deprecated reference, and we'll stick this
                // definition into the same file
                continue;
            }
            const studioToken = studioTokens[uuid];
            const path = [];
            studioToken.path.forEach((p) => {
                path.push(p.toLowerCase());
            });
            if (studioProblems.colorOnly) {
                // everything color related
                if (path.includes('palette')) {
                    colorPalette[tokenName] = tokenEntry;
                }
                else if (path.includes('semantic')) {
                    colorSemantic[tokenName] = tokenEntry;
                }
                else if (path.includes('icon')) {
                    icons[tokenName] = tokenEntry;
                }
                else if (path.includes('component')) {
                    colorComponent[tokenName] = tokenEntry;
                }
                else {
                    colorAlias[tokenName] = tokenEntry;
                }
            }
            else {
                // everything not color related
                if (path.includes('icon')) {
                    icons[tokenName] = tokenEntry;
                }
                else if (path.includes('typography')) {
                    typography[tokenName] = tokenEntry;
                }
                else if (isLayoutToken(tokenName)) {
                    layout[tokenName] = tokenEntry;
                }
                else {
                    layoutComponent[tokenName] = tokenEntry;
                }
            }
        }
        if (Object.keys(colorPalette).length) {
            addTokens(colorPalette, _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_PALETTE, renamedTokens);
        }
        if (Object.keys(colorSemantic).length) {
            addTokens(colorSemantic, _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_SEMANTIC, renamedTokens);
        }
        if (Object.keys(colorAlias).length) {
            addTokens(colorAlias, _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_ALIASES, renamedTokens);
        }
        if (Object.keys(colorComponent).length) {
            addTokens(colorComponent, _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_COMPONENT, renamedTokens);
        }
        if (Object.keys(icons).length) {
            addTokens(icons, _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.ICONS, renamedTokens);
        }
        if (Object.keys(typography).length) {
            addTokens(typography, _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.TYPOGRAPHY, renamedTokens);
        }
        if (Object.keys(layout).length) {
            addTokens(layout, _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT, renamedTokens);
        }
        if (Object.keys(layoutComponent).length) {
            addTokens(layoutComponent, _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT_COMPONENT, renamedTokens);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addSpectrumTokens);


/***/ }),

/***/ "./src/operations/addUUIDs.ts":
/*!************************************!*\
  !*** ./src/operations/addUUIDs.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/




function getUniqueId(studioTokens, studioProblems, spectrumTokens, spectrumProblems, studioEntry) {
    let uuid;
    for (const spectrumEntry of spectrumProblems.empty) {
        if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDuplicated)(studioEntry) && (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(studioEntry) === spectrumEntry.name) {
            uuid = spectrumEntry.uuid;
            break;
        }
    }
    for (const spectrumEntry of Object.values(spectrumProblems.deprecated)) {
        if (!(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDuplicated)(studioEntry) && (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(studioEntry) === spectrumEntry.name) {
            if (spectrumEntry.sets.length === 1 && spectrumEntry.sets[0] === (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getSpectrumTokenSetName)(studioEntry)) {
                uuid = spectrumEntry.uuid;
                break;
            }
            else if (spectrumEntry.sets.length > 1) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('tWARNING - COULD NOT COMPARE SET NAMES BECAUSE I DID NOT PROGRAM IN SUPPORT FOR MULTIPLE SETS (fix this): ' + spectrumEntry.name); // !!! haha
            }
        }
    }
    if (!uuid) {
        do {
            uuid = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID();
        } while (!uuid || studioTokens[uuid] || studioProblems.collisions[uuid] || spectrumTokens[uuid] || spectrumProblems.collisions[uuid]);
    }
    return uuid;
}
function getFiles(result, entry) {
    for (const file of entry.files) {
        if (!Object.keys(result).includes(file)) {
            result[file] = [];
        }
        result[file].push(entry);
    }
}
function addUUIDs(studioTokens, studioProblems, spectrumTokens, spectrumProblems, ignored = []) {
    const filesToProcess = {};
    for (const entry of studioProblems.uuids) {
        if (!(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.ignoreToken)(entry.path, ignored)) {
            getFiles(filesToProcess, entry);
            const uuid = getUniqueId(studioTokens, studioProblems, spectrumTokens, spectrumProblems, entry);
            const currentUUID = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry);
            if (currentUUID && (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry) !== uuid) {
                let deprecations = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDeprecations)(entry);
                if (!deprecations) {
                    deprecations = [];
                }
                if (!deprecations.includes(currentUUID)) {
                    deprecations.push(currentUUID);
                }
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenDeprecations)(entry, deprecations);
            }
            (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenUUID)(entry, uuid);
        }
    }
    for (const file of Object.keys(filesToProcess)) {
        // read file
        const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(file, true);
        let changed = false;
        // update token entries with uuids
        const entries = filesToProcess[file];
        for (const entry of entries) {
            const path = entry.path.slice(1);
            let definition = data;
            while (path.length) {
                const p = path.shift();
                if (p) {
                    definition = definition[p];
                }
            }
            if (!definition) {
                throw new Error('ERROR - failed to add UUID to ' + entry);
            }
            const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry);
            if (uuid) {
                const duplicated = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDuplicated)(entry) ? true : false;
                if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(definition) !== uuid) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenUUID)(definition, uuid);
                    changed = true;
                }
                if (JSON.stringify((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDeprecations)(definition)) !== JSON.stringify((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDeprecations)(entry))) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenDeprecations)(definition, (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDeprecations)(entry));
                    changed = true;
                }
                if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDuplicated)(definition) !== duplicated) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenDuplicated)(definition, duplicated);
                    changed = true;
                }
                // now move it from the problem bucket to the token bucket
                studioTokens[uuid] = entry;
                studioProblems.uuids.splice(studioProblems.uuids.indexOf(entry), 1);
                (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('ADDING UUID: ' + entry.path.join(',') + ' => ' + uuid); // ??? we may be repeating this message
            }
            else {
                throw new Error('ERROR - MISSING UUID ... SOMEHOW');
            }
        }
        if (changed) {
            (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.storeFile)(file, data);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addUUIDs);


/***/ }),

/***/ "./src/operations/changeSpectrumTokens.ts":
/*!************************************************!*\
  !*** ./src/operations/changeSpectrumTokens.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_findBranchByUUID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/findBranchByUUID */ "./src/core/findBranchByUUID.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/



function changeValue(data, uuid, value) {
    const path = [];
    if ((0,_core_findBranchByUUID__WEBPACK_IMPORTED_MODULE_0__["default"])(data, uuid, path)) {
        let root = data;
        for (let i = 0; i < path.length; ++i) {
            root = root[path[i]];
        }
        root.value = value;
    }
    else {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('ERROR - could not find entry in spectrum tokens: ' + uuid);
    }
}
function getChanges(data) {
    let results = [];
    if (data.value && data.uuid) {
        results.push({ value: data.value, uuid: data.uuid });
    }
    for (const key of Object.keys(data)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isObject)(data[key])) {
            results = results.concat(getChanges(data[key]));
        }
    }
    return results;
}
function changeSpectrumTokens(studioTokens, studioProblems, spectrumTokens, spectrumProblems, changedTokens) {
    const changes = getChanges(changedTokens);
    for (const change of changes) {
        const file = spectrumTokens[change.uuid].file;
        const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_1__.getFile)(file);
        changeValue(data, change.uuid, change.value);
        (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_1__.storeFile)(file, data);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeSpectrumTokens);


/***/ }),

/***/ "./src/operations/checkForDeprecatedTokens.ts":
/*!****************************************************!*\
  !*** ./src/operations/checkForDeprecatedTokens.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_getSpectrumReference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/getSpectrumReference */ "./src/core/getSpectrumReference.ts");
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/helpers */ "./src/core/helpers.ts");
/* harmony import */ var _core_printableSetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/printableSetName */ "./src/core/printableSetName.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/




function validToken(spectrumToken, validScales, validThemes) {
    if (!spectrumToken.sets.length) {
        return true;
    }
    for (const set of spectrumToken.sets) {
        if (validScales.includes(set) || validThemes.includes(set)) {
            return true;
        }
    }
    return false;
}
function isSpectrumColor(spectrumToken, spectrumTokens) {
    let value = spectrumToken.value;
    while (value[0] === '{') {
        const uuid = (0,_core_getSpectrumReference__WEBPACK_IMPORTED_MODULE_1__["default"])(spectrumTokens, spectrumToken.uuid); // !!! can this fail???
        if (uuid) {
            spectrumToken = spectrumTokens[uuid];
            value = spectrumToken.value;
        }
        else {
            throw new Error('ERROR - spectrum data reference is orphaned => ' + spectrumToken.uuid);
        }
    }
    return spectrumToken.value.indexOf('rgb') === 0 || spectrumToken.value.indexOf('#') === 0 ? true : false;
}
function checkForDeprecatedTokens(studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const result = [];
    // only deprecate tokens in themes/scales found in the studio token data
    const validScales = [];
    const validThemes = [];
    for (const uuid of Object.keys(studioTokens)) {
        let set = studioTokens[uuid].path[0].split('/').pop();
        if (set) {
            set = set.toLowerCase();
            for (const scale of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SCALES) {
                if (scale === set && !validScales.includes(scale)) {
                    validScales.push(scale);
                }
            }
            for (const theme of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].THEMES) {
                if (theme === set && !validThemes.includes(theme)) {
                    validThemes.push(theme);
                }
            }
        }
    }
    for (const uuid of Object.keys(spectrumTokens)) {
        if (validToken(spectrumTokens[uuid], validScales, validThemes)) {
            if (!Object.keys(studioTokens).includes(uuid) && !Object.keys(studioProblems.collisions).includes(uuid)) {
                if ((!studioProblems.colorOnly && !isSpectrumColor(spectrumTokens[uuid], spectrumTokens)) || (studioProblems.colorOnly && isSpectrumColor(spectrumTokens[uuid], spectrumTokens))) {
                    result.push({ uuid: uuid, token: spectrumTokens[uuid].name + (0,_core_printableSetName__WEBPACK_IMPORTED_MODULE_3__["default"])(spectrumTokens[uuid]) });
                }
            }
            else if (Object.keys(studioTokens).includes(uuid) && (0,_core_helpers__WEBPACK_IMPORTED_MODULE_2__.isDeprecated)(studioTokens[uuid].path)) {
                result.push({ uuid: uuid, token: spectrumTokens[uuid].name + (0,_core_printableSetName__WEBPACK_IMPORTED_MODULE_3__["default"])(spectrumTokens[uuid]) });
            }
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkForDeprecatedTokens);


/***/ }),

/***/ "./src/operations/checkModes.ts":
/*!**************************************!*\
  !*** ./src/operations/checkModes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/



function checkMissingModes(name, sets, allScales, allThemes) {
    let result = [];
    const missingScales = [];
    const missingThemes = [];
    for (const scale of allScales) {
        if (!sets.includes(scale)) {
            missingScales.push(scale);
        }
    }
    for (const theme of allThemes) {
        if (!sets.includes(theme)) {
            missingThemes.push(theme);
        }
    }
    if (missingScales.length && missingScales.length !== allScales.length) {
        result = result.concat(missingScales);
    }
    if (missingThemes.length && missingThemes.length !== allThemes.length) {
        result = result.concat(missingThemes);
    }
    return result;
}
function getFoundModes(studioTokens, studioProblems) {
    const collection = {};
    const allScales = [];
    const allThemes = [];
    for (const uuid of Object.keys(studioTokens)) {
        const entry = studioTokens[uuid];
        if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.ignoreToken)(entry.path, _config__WEBPACK_IMPORTED_MODULE_0__["default"].IGNORED)) {
            continue;
        }
        let name = entry.path.join('/');
        for (const scale of _constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCALES) {
            const check = '/' + scale + '/';
            if (name.indexOf(check) !== -1) {
                name = name.substring(0, name.indexOf(check)) + name.substring(name.indexOf(check) + check.length - 1);
            }
        }
        for (const theme of _constants__WEBPACK_IMPORTED_MODULE_1__["default"].THEMES) {
            const check = '/' + theme + '/';
            if (name.indexOf(check) !== -1) {
                name = name.substring(0, name.indexOf(check)) + name.substring(name.indexOf(check) + check.length - 1);
            }
        }
        let path = [];
        for (const i in entry.path) {
            path = path.concat(entry.path[i].toLowerCase().split('/'));
        }
        if (!collection[name]) {
            collection[name] = [];
        }
        for (const scale of _constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCALES) {
            if (path.includes(scale)) {
                collection[name].push(scale);
                if (!allScales.includes(scale)) {
                    allScales.push(scale);
                }
            }
        }
        for (const theme of _constants__WEBPACK_IMPORTED_MODULE_1__["default"].THEMES) {
            if (path.includes(theme)) {
                collection[name].push(theme);
                if (!allThemes.includes(theme)) {
                    allThemes.push(theme);
                }
            }
        }
    }
    for (const name of Object.keys(collection)) {
        if (collection[name].length) {
            collection[name] = checkMissingModes(name, collection[name], allScales, allThemes);
        }
        if (!collection[name].length) {
            delete collection[name];
        }
    }
    studioProblems.usedModes = allScales.concat(allThemes);
    studioProblems.modes = collection;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFoundModes);


/***/ }),

/***/ "./src/operations/checkNameChanges.ts":
/*!********************************************!*\
  !*** ./src/operations/checkNameChanges.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/


function checkNameChanges(spectrumTokens, studioTokens, studioProblems) {
    const result = {};
    // the most common case: the metadata was changed to reflect a new token name
    for (const uuid of Object.keys(studioTokens)) {
        const entry = studioTokens[uuid];
        const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(entry);
        if (tokenName && spectrumTokens[uuid] && spectrumTokens[uuid].name !== tokenName) {
            result[spectrumTokens[uuid].name] = tokenName;
            studioProblems.uuids.push(entry);
            delete studioTokens[uuid];
        }
        else if (!tokenName) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('ERROR - could not find for spectrum token name for: ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenName)(entry));
        }
    }
    // check if there's a new entry already defined in tokens studio that will replace an existing spectrum token
    // --- this only happens if the sync operation is re-run on the same tokens studio changes
    for (const uuid of Object.keys(studioTokens)) {
        if (!spectrumTokens[uuid]) {
            const entry = studioTokens[uuid];
            const deprecations = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenDeprecations)(entry);
            if (deprecations && deprecations.length) {
                const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(entry);
                if (tokenName) {
                    for (const spectrumUUID of deprecations) {
                        if (spectrumTokens[spectrumUUID]) {
                            // we found a non-deprecated spectrum-token entry that will
                            // be replaced by a studio token entry - adding it the results
                            // will ensure the spectrum token is properly deprecated due
                            // to a name change
                            result[spectrumTokens[spectrumUUID].name] = tokenName;
                        }
                    }
                }
            }
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkNameChanges);


/***/ }),

/***/ "./src/operations/checkValueChanges.ts":
/*!*********************************************!*\
  !*** ./src/operations/checkValueChanges.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _core_getStudioReference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/getStudioReference */ "./src/core/getStudioReference.ts");
/* harmony import */ var _core_getSpectrumReference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/getSpectrumReference */ "./src/core/getSpectrumReference.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _core_equivalentValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/equivalentValues */ "./src/core/equivalentValues.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/






function compareEMtoPercentage(v1, v2) {
    if ((v1.toLowerCase().indexOf('em') > 0 && v2.indexOf('%') > 0) || (v2.toLowerCase().indexOf('em') > 0 && v1.indexOf('%') > 0)) {
        const v1_match = v1.match(/\d/g);
        const v2_match = v2.match(/\d/g);
        if (v1_match && v2_match) {
            const v1_number = Number(v1_match.join(''));
            const v2_number = Number(v2_match.join(''));
            if (v1_number === v2_number) {
                return true;
            }
        }
    }
    return false;
}
function checkValueChanges(studioTokens, studioProblems, spectrumTokens) {
    const changes = {};
    for (const uuid in studioTokens) {
        if (!spectrumTokens[uuid]) {
            continue;
        }
        const tokenValue = studioTokens[uuid].value;
        if (tokenValue[0] === '{') {
            // lookup the tokens studio reference
            const studioReference = (0,_core_getStudioReference__WEBPACK_IMPORTED_MODULE_1__["default"])(studioTokens, studioProblems, uuid);
            if (!studioReference) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('WARNING - ORPHANED REFERENCE => ' + tokenValue + ' in ' + studioTokens[uuid].path.join('.'));
                continue;
            }
            // lookup the spectrum-tokens reference
            const spectrumReference = (0,_core_getSpectrumReference__WEBPACK_IMPORTED_MODULE_2__["default"])(spectrumTokens, uuid);
            // update if there's a disagreement about the reference
            if ((!spectrumReference || spectrumReference !== studioReference) && spectrumTokens[studioReference]) {
                const referenceName = '{' + spectrumTokens[studioReference].name + '}';
                if (spectrumTokens[uuid].value !== referenceName) {
                    changes[uuid] = referenceName;
                }
            }
            else if ((!spectrumReference || spectrumReference !== studioReference) && !spectrumTokens[studioReference]) {
                changes[uuid] = '{' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenSpectrumName)(studioTokens[studioReference]) + '}';
            }
        }
        else if ((_config__WEBPACK_IMPORTED_MODULE_0__["default"].CASE_SENSITIVE && tokenValue !== spectrumTokens[uuid].value) || (!_config__WEBPACK_IMPORTED_MODULE_0__["default"].CASE_SENSITIVE && tokenValue.toLowerCase() !== spectrumTokens[uuid].value.toLowerCase())) {
            if (!compareEMtoPercentage(tokenValue, spectrumTokens[uuid].value) && !(0,_core_equivalentValues__WEBPACK_IMPORTED_MODULE_4__.compareEquivalentValues)(tokenValue, spectrumTokens[uuid].value)) {
                changes[uuid] = (0,_core_equivalentValues__WEBPACK_IMPORTED_MODULE_4__.equivalentValue)(tokenValue);
            }
        }
    }
    return changes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkValueChanges);


/***/ }),

/***/ "./src/operations/deprecateSpectrumTokens.ts":
/*!***************************************************!*\
  !*** ./src/operations/deprecateSpectrumTokens.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _core_findBranchByUUID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/findBranchByUUID */ "./src/core/findBranchByUUID.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/


function deprecate(data, path) {
    let root = data;
    let alreadyDeprecated = false;
    for (let i = 0; i < path.length; ++i) {
        if (root.deprecated && root.value === undefined) {
            alreadyDeprecated = true;
        }
        root = root[path[i]];
    }
    if (!alreadyDeprecated) {
        root.deprecated = true;
    }
}
function deprecateToken(data, token, uuid) {
    const result = [];
    const tokenName = token.split('/')[0];
    if (data[tokenName]) {
        result.push(tokenName);
        const branch = data[tokenName];
        if (!branch.uuid || branch.uuid !== uuid) {
            if ((0,_core_findBranchByUUID__WEBPACK_IMPORTED_MODULE_1__["default"])(branch, uuid, result)) {
                deprecate(data, result);
            }
        }
        else if (branch.uuid && branch.uuid === uuid) {
            deprecate(data, result);
        }
    }
}
function deprecateSpectrumTokens(spectrumTokens, spectrumProblems, deprecatedTokens) {
    for (const entry of deprecatedTokens) {
        const file = spectrumTokens[entry.uuid].file;
        const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_0__.getFile)(file);
        deprecateToken(data, entry.token, entry.uuid);
        (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_0__.storeFile)(file, data);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecateSpectrumTokens);


/***/ }),

/***/ "./src/operations/formatChangedSpectrumTokens.ts":
/*!*******************************************************!*\
  !*** ./src/operations/formatChangedSpectrumTokens.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_handleNameChanges__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/handleNameChanges */ "./src/core/handleNameChanges.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function formatChangedSpectrumTokens(changes, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const result = {};
    for (const uuid of Object.keys(changes)) {
        const value = (0,_core_handleNameChanges__WEBPACK_IMPORTED_MODULE_0__["default"])(changes[uuid], nameChanges);
        const name = spectrumTokens[uuid].name;
        const sets = spectrumTokens[uuid].sets;
        if (!result[name]) {
            result[name] = {};
        }
        if (!sets.length) {
            result[name].value = value;
            result[name].uuid = uuid;
        }
        else {
            if (!result[name].sets) {
                result[name].sets = {};
            }
            let leaf = result[name].sets;
            for (const set of sets) {
                leaf[set] = {};
                leaf = leaf[set];
            }
            leaf.value = value;
            leaf.uuid = uuid;
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatChangedSpectrumTokens);


/***/ }),

/***/ "./src/operations/formatNewSpectrumTokens.ts":
/*!***************************************************!*\
  !*** ./src/operations/formatNewSpectrumTokens.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _core_getStudioReference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/getStudioReference */ "./src/core/getStudioReference.ts");
/* harmony import */ var _core_handleNameChanges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/handleNameChanges */ "./src/core/handleNameChanges.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_equivalentValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/equivalentValues */ "./src/core/equivalentValues.ts");
/* harmony import */ var _core_schemaStuff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/schemaStuff */ "./src/core/schemaStuff.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/







function createSpectrumTokensEntry(uuid, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    let value = undefined;
    const schema = _config__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPORT_SCHEMAS ? (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_6__.getSchemaFromType)((0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_6__.getSchemaType)(studioTokens[uuid])) : undefined;
    const valueUUID = (0,_core_getStudioReference__WEBPACK_IMPORTED_MODULE_2__["default"])(studioTokens, studioProblems, uuid);
    if (!valueUUID) {
        value = (0,_core_equivalentValues__WEBPACK_IMPORTED_MODULE_5__.equivalentValue)(studioTokens[uuid].value);
    }
    else {
        if (spectrumTokens[valueUUID]) {
            value = (0,_core_handleNameChanges__WEBPACK_IMPORTED_MODULE_3__["default"])('{' + spectrumTokens[valueUUID].name + '}', nameChanges);
        }
        else {
            value = '{' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(studioTokens[valueUUID]) + '}';
        }
    }
    // !!! check the value against the schema definition... someday
    if (schema) {
        return { $schema: schema, value: value, uuid: uuid };
    }
    else {
        return { value: value, uuid: uuid };
    }
}
function getSpectrumTokenSet(entries, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const sets = {};
    const types = [];
    let schema = undefined;
    for (const entry of entries) {
        const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry);
        if (!uuid)
            throw new Error('ERROR - MISSING UUID FOR: ' + entry.path.join('.'));
        sets[(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getSpectrumTokenSetName)(entry)] = createSpectrumTokensEntry(uuid, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems);
        if (!types.includes(entry.type)) {
            types.push(entry.type);
        }
    }
    if (types.length === 1 && _config__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPORT_SCHEMAS) {
        switch (types[0]) {
            case 'color':
                schema = _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES['color-set'];
                break;
            default:
                (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('WARNING - UNHANDLED SET CHILD TYPE: ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenName)(entries[0]) + ' => ' + types[0]);
        }
    }
    else if (types.length > 1) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('WARNING - MISMATCHED SET CHILD TYPES: ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenName)(entries[0]) + ' => ' + types.join(', '));
    }
    return { $schema: schema, sets: sets };
}
function isPartOfSet(entry, studioTokens) {
    // we have an extra check in case we are adding a new token to an existing set
    const path = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenName)(entry);
    for (const compare of Object.values(studioTokens)) {
        if (entry !== compare && path === (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenName)(compare)) {
            return true;
        }
    }
    return false;
}
function formatNewSpectrumTokens(exports, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const collection = {};
    const result = {};
    for (const entry of exports) {
        const name = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(entry);
        if (name) {
            if (!collection[name]) {
                collection[name] = [];
            }
            collection[name].push(entry);
        }
        else {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('ERROR - studio token definition mising spectrum token name: ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenName)(entry));
        }
    }
    for (const name of Object.keys(collection)) {
        const tokenData = collection[name];
        if (tokenData.length === 1 && !isPartOfSet(tokenData[0], studioTokens)) {
            const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(tokenData[0]);
            if (!uuid)
                throw new Error('ERROR - MISSING UUID FOR: ' + tokenData[0].path.join('.'));
            result[name] = createSpectrumTokensEntry(uuid, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems);
        }
        else {
            result[name] = getSpectrumTokenSet(tokenData, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems);
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatNewSpectrumTokens);


/***/ }),

/***/ "./src/operations/processStudioTokenData.ts":
/*!**************************************************!*\
  !*** ./src/operations/processStudioTokenData.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/


function getUpdatedPath(path) {
    const pathHead = path[0].split('/').slice(0, -1).join('/');
    return [pathHead].concat(path.slice(1));
}
function verifyEntries(entries, checkUUIDs = true) {
    let value;
    let type;
    let path;
    let token;
    let uuid;
    for (let i = 0; i < entries.length; ++i) {
        const entry = entries[i];
        if (i === 0 || value === entry.value) {
            value = entry.value;
        }
        else {
            return false;
        }
        if (i === 0 || type === entry.type) {
            type = entry.type;
        }
        else {
            return false;
        }
        if (checkUUIDs) {
            const u = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenUUID)(entry);
            if (i === 0 || uuid === u) {
                uuid = u;
            }
            else {
                return false;
            }
        }
        const p = getUpdatedPath(entry.path).join('.');
        if (i === 0 || path === p) {
            path = p;
        }
        else {
            return false;
        }
        const t = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(entry);
        if (i === 0 || token === t) {
            token = t;
        }
        else {
            return false;
        }
        if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenDuplicated)(entry) === false) {
            return false;
        }
    }
    return true;
}
function verifyAllDuplicates(entries) {
    let allDuplicates = true;
    for (const entry of entries) {
        if (!(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenDuplicated)(entry)) {
            allDuplicates = false;
        }
    }
    return allDuplicates;
}
function verifyNoDuplicates(entries) {
    let noDuplicates = true;
    for (const entry of entries) {
        if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenDuplicated)(entry)) {
            noDuplicates = false;
        }
    }
    return noDuplicates;
}
function combineEntries(entries) {
    let files = [];
    for (const entry of entries) {
        files = files.concat(entry.files);
    }
    // add to tokens
    const entry = entries[0];
    entry.path = getUpdatedPath(entry.path);
    entry.files = files;
    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.setTokenDuplicated)(entry, true);
    return entry;
}
function processStudioTokenData(studioTokens, studioProblems) {
    // intentionally duplicated token definitions will start off
    // being listed as uuid collisions: check for and move them
    for (const uuid of Object.keys(studioProblems.collisions)) {
        const entries = studioProblems.collisions[uuid];
        if (verifyAllDuplicates(entries)) {
            if (verifyEntries(entries)) {
                // remove from collisions
                delete studioProblems.collisions[uuid];
                studioTokens[uuid] = combineEntries(entries);
            }
        }
    }
    // tokens that are transitioning from being duplicated to non-duplicated
    // will initially register with their old uuid: move them to the new uuid list
    for (const uuid of Object.keys(studioProblems.collisions)) {
        const entries = studioProblems.collisions[uuid];
        if (verifyNoDuplicates(entries)) {
            // remove from collisions
            delete studioProblems.collisions[uuid];
            entries.forEach((entry) => {
                studioProblems.uuids.push(entry);
            });
        }
    }
    // we'll also want to check tokens without a uuid
    if (studioProblems.uuids.length) {
        const needUUIDs = [];
        const tokenGroups = {};
        for (const entry of studioProblems.uuids) {
            const name = entry.path.slice(1).join('.');
            if (!tokenGroups[name]) {
                tokenGroups[name] = [];
            }
            tokenGroups[name].push(entry);
        }
        for (const name of Object.keys(tokenGroups)) {
            if (tokenGroups[name].length > 1 && verifyEntries(tokenGroups[name])) {
                needUUIDs.push(combineEntries(tokenGroups[name]));
            }
            else {
                for (const entry of tokenGroups[name]) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.setTokenDuplicated)(entry, false);
                    needUUIDs.push(entry);
                }
            }
        }
        studioProblems.uuids = needUUIDs;
    }
    // we need to check for mismatches in token entries wrt the duplicate setting
    const tokenTable = {};
    for (const uuid of Object.keys(studioTokens)) {
        const name = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(studioTokens[uuid]);
        if (name && !tokenTable[name]) {
            tokenTable[name] = [];
        }
        if (name) {
            tokenTable[name].push(studioTokens[uuid]);
        }
    }
    // !!! need a bunch of checks against non-duplicates? mismatch types... anything else?
    // !!! test for duplicates with no duplicates?
    for (const token of Object.keys(tokenTable)) {
        const entries = tokenTable[token];
        if (entries.length > 1) {
            if (!verifyAllDuplicates(entries) && !verifyNoDuplicates(entries)) {
                // we want to make sure that all like-named entries have the same duplication setting
                (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('ERROR - MISMATCHED DUPLICATE SETTING FOR ' + entries[0].path.slice(1).join('.').toLowerCase());
                studioProblems.mismatches.push(entries);
                for (const originalEntry of entries) {
                    const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenUUID)(originalEntry);
                    if (uuid)
                        delete studioTokens[uuid];
                }
            }
            else if (verifyAllDuplicates(entries) && !verifyEntries(entries)) {
                // there's an edge case where we want to create new uuids for tokens when
                // they are marked duplicated but have mismatched ids - for example,
                // when transitioning a token to being duplicated
                if (verifyEntries(entries, false)) {
                    studioProblems.uuids.push(combineEntries(entries));
                    for (const originalEntry of entries) {
                        const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenUUID)(originalEntry);
                        if (uuid)
                            delete studioTokens[uuid];
                    }
                }
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processStudioTokenData);


/***/ }),

/***/ "./src/operations/readSpectrumTokens.ts":
/*!**********************************************!*\
  !*** ./src/operations/readSpectrumTokens.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/





function getSetNames(tokenDefinition, uuid) {
    function findUUID(branch, uuid, path) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(branch)) {
            if (branch.uuid === uuid) {
                return true;
            }
            for (const key of Object.keys(branch)) {
                path.push(key);
                if (findUUID(branch[key], uuid, path)) {
                    return true;
                }
                else {
                    path.pop();
                }
            }
        }
        return false;
    }
    let path = [];
    if (tokenDefinition.uuid !== uuid) {
        findUUID(tokenDefinition, uuid, path);
    }
    path = path.filter((set) => set !== 'sets');
    return path;
}
function parseTokenData(file, tokens, problems, entry, system, name, tokenDefinition, deprecated = false) {
    const uuid = entry.uuid;
    const value = entry.value;
    const isDeprecated = deprecated || entry.deprecated === true;
    const passDeprecation = value === undefined ? isDeprecated : false; // ??? deprecation setting is implied on children
    const problemEntry = Object.assign({ file: file, name: name }, entry);
    if (uuid && value) {
        if (tokens[uuid] || problems.collisions[uuid]) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('WARNING - uuid collision => ' + name);
            if (!problems.collisions[uuid]) {
                problems.collisions[uuid] = [];
                problems.collisions[uuid].push({ file: tokens[uuid].file, name: tokens[uuid].name, uuid: tokens[uuid].uuid, value: tokens[uuid].value, sets: getSetNames(tokenDefinition, uuid), schema: undefined });
                delete tokens[uuid];
            }
            problems.collisions[uuid].push(problemEntry);
        }
        else if (isDeprecated) {
            problems.deprecated[uuid] = { file: file, uuid: uuid, value: value, name: name, sets: getSetNames(tokenDefinition, uuid), schema: undefined };
        }
        else {
            tokens[uuid] = { file: file, uuid: uuid, value: value, name: name, sets: getSetNames(tokenDefinition, uuid), schema: entry['$schema'] };
        }
    }
    else if ((uuid && !value) || (!uuid && value)) {
        if (!uuid) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('WARNING - missing uuid => ' + name);
            problems.uuids.push(problemEntry);
        }
        if (!value) {
            problems.empty.push(problemEntry);
        }
    }
    for (const key of Object.keys(entry)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(entry[key])) {
            if (system && _constants__WEBPACK_IMPORTED_MODULE_2__["default"].SYSTEMS.includes(key) && key !== system)
                continue;
            parseTokenData(file, tokens, problems, entry[key], system, name, tokenDefinition, passDeprecation);
        }
    }
}
function parseSpectrumTokens(file, tokens, problems, data, system) {
    for (const tokenName of Object.keys(data)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(data[tokenName])) {
            parseTokenData(file, tokens, problems, data[tokenName], system, tokenName, data[tokenName]);
        }
    }
}
function readSpectrumTokens(source, system) {
    const spectrumTokens = {};
    const spectrumProblems = { collisions: {}, uuids: [], empty: [], deprecated: {} };
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('READING spectrum-tokens: ' + source);
    fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(source).forEach((file) => {
        if (path__WEBPACK_IMPORTED_MODULE_1___default().extname(file).toLowerCase() === '.json') {
            const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_4__.getFile)(source + file);
            parseSpectrumTokens(source + file, spectrumTokens, spectrumProblems, data, system);
        }
    });
    return { spectrumTokens, spectrumProblems };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readSpectrumTokens);


/***/ }),

/***/ "./src/operations/readStudioTokens.ts":
/*!********************************************!*\
  !*** ./src/operations/readStudioTokens.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSourceFiles: () => (/* binding */ getSourceFiles),
/* harmony export */   getStartPath: () => (/* binding */ getStartPath),
/* harmony export */   readStudioTokens: () => (/* binding */ readStudioTokens)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _processStudioTokenData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./processStudioTokenData */ "./src/operations/processStudioTokenData.ts");
/* harmony import */ var _checkModes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkModes */ "./src/operations/checkModes.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/








function getSourceFiles(source, result = []) {
    fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(source, { recursive: true }).forEach((file) => {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(source + file).isDirectory()) {
            getSourceFiles(source + file + (path__WEBPACK_IMPORTED_MODULE_1___default().sep), result);
        }
        else if (path__WEBPACK_IMPORTED_MODULE_1___default().extname(source + file).toLowerCase() === '.json' && path__WEBPACK_IMPORTED_MODULE_1___default().basename(source + file)[0] !== '$') {
            result.push(source + file);
        }
    });
    return result;
}
function getStartPath(source, file) {
    const startPath = file.slice(source.length).split((path__WEBPACK_IMPORTED_MODULE_1___default().sep)).slice(0, -1);
    startPath.push(path__WEBPACK_IMPORTED_MODULE_1___default().basename(file, '.json'));
    return startPath.join('/');
}
function readStudioTokens(source) {
    const studioTokens = {};
    const studioProblems = { collisions: {}, uuids: [], mismatches: [], values: [], colorOnly: true, metadata: [], usedModes: [], modes: {} };
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('READING  tokens studio: ' + source);
    getSourceFiles(source).forEach((file) => {
        const startPath = file.slice(source.length).split((path__WEBPACK_IMPORTED_MODULE_1___default().sep)).slice(0, -1);
        startPath.push(path__WEBPACK_IMPORTED_MODULE_1___default().basename(file, '.json'));
        const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_5__.getFile)(file);
        (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenStyles)(file, [getStartPath(source, file)], data, studioTokens, studioProblems);
        if (!_constants__WEBPACK_IMPORTED_MODULE_4__["default"].THEMES.includes(path__WEBPACK_IMPORTED_MODULE_1___default().basename(file)
            .toLowerCase()
            .substring(0, path__WEBPACK_IMPORTED_MODULE_1___default().basename(file).length - path__WEBPACK_IMPORTED_MODULE_1___default().extname(file).length))) {
            studioProblems.colorOnly = false;
        }
    });
    (0,_processStudioTokenData__WEBPACK_IMPORTED_MODULE_6__["default"])(studioTokens, studioProblems); // resolve token duplication and a bunch of other stuff
    (0,_checkModes__WEBPACK_IMPORTED_MODULE_7__["default"])(studioTokens, studioProblems); // checks all the tokens for proper mode usage
    return { studioTokens, studioProblems };
}



/***/ }),

/***/ "./src/operations/renameSpectrumTokens.ts":
/*!************************************************!*\
  !*** ./src/operations/renameSpectrumTokens.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/





function redirectAllValues(data, reference) {
    for (const key of Object.keys(data)) {
        if (key === 'value') {
            data[key] = '{' + reference + '}';
        }
        else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(data[key])) {
            redirectAllValues(data[key], reference);
        }
    }
}
function changeTokenName(data, originalToken, updatedToken, root = true) {
    let changed = false;
    if (root && Object.keys(data).includes(originalToken)) {
        const originalDefinition = data[originalToken];
        const updatedDefinition = { deprecated: true };
        for (const key of Object.keys(originalDefinition)) {
            if (key !== 'deprecated') {
                updatedDefinition[key] = originalDefinition[key];
            }
        }
        redirectAllValues(updatedDefinition, updatedToken);
        data[originalToken] = updatedDefinition;
        changed = true;
    }
    for (const key of Object.keys(data)) {
        if (key === 'value' && data[key] === '{' + originalToken + '}') {
            data[key] = '{' + updatedToken + '}';
            changed = true;
        }
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(data[key])) {
            changed = changeTokenName(data[key], originalToken, updatedToken, false) || changed;
        }
    }
    return changed;
}
function renameSpectrumTokens(renamedTokens) {
    fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(_config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_SPECTRUM).forEach((file) => {
        if (path__WEBPACK_IMPORTED_MODULE_1___default().extname(file).toLowerCase() === '.json') {
            const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_4__.getFile)(_config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_SPECTRUM + file);
            let changed = false;
            for (const originalToken of Object.keys(renamedTokens)) {
                changed = changeTokenName(data, originalToken, renamedTokens[originalToken]) || changed;
            }
            if (changed) {
                (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_4__.storeFile)(_config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_SPECTRUM + file, data);
            }
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renameSpectrumTokens);


/***/ }),

/***/ "./src/operations/updateTokenNameMetadata.ts":
/*!***************************************************!*\
  !*** ./src/operations/updateTokenNameMetadata.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/




function getFiles(result, entry) {
    for (const file of entry.files) {
        if (!Object.keys(result).includes(file)) {
            result[file] = [];
        }
        result[file].push(entry);
    }
}
function cleanName(name) {
    return name.replaceAll(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].BUSTER, '').replaceAll(' ', '');
}
function updateTokenNameMetadata(studioTokens, studioProblems) {
    const filesToProcess = {};
    // get name changes
    for (const uuid of Object.keys(studioTokens)) {
        const entry = studioTokens[uuid];
        const name = cleanName(entry.path[entry.path.length - 1]);
        const tokenSpectrumName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenSpectrumName)(entry);
        if (name !== tokenSpectrumName) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('updateTokenNameMetadata: ' + name + ' => ' + tokenSpectrumName);
            getFiles(filesToProcess, entry);
            (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.setTokenSpectrumName)(entry, name);
        }
    }
    // store name changes
    for (const file of Object.keys(filesToProcess)) {
        // read file
        const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_1__.getFile)(file, true);
        let changed = false;
        // update token entries with uuids
        const entries = filesToProcess[file];
        for (const entry of entries) {
            const path = entry.path.slice(1);
            let definition = data;
            while (path.length) {
                const p = path.shift();
                if (p) {
                    definition = definition[p];
                }
            }
            if (!definition) {
                throw new Error('ERROR - failed to handle token rename ' + JSON.stringify(entry.path));
            }
            const name = cleanName(entry.path[entry.path.length - 1]);
            if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenSpectrumName)(definition) !== name) {
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.setTokenSpectrumName)(definition, name);
                changed = true;
            }
        }
        if (changed) {
            (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_1__.storeFile)(file, data);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTokenNameMetadata);


/***/ }),

/***/ "./src/reports/reportDeletedTokens.ts":
/*!********************************************!*\
  !*** ./src/reports/reportDeletedTokens.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function reportDeprecatedTokens(changes) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)(changes);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportDeprecatedTokens);


/***/ }),

/***/ "./src/reports/reportDeprecatedTokenUsage.ts":
/*!***************************************************!*\
  !*** ./src/reports/reportDeprecatedTokenUsage.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_printableSetName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/printableSetName */ "./src/core/printableSetName.ts");
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/helpers */ "./src/core/helpers.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/



function reportDeprecatedTokenUsage(studioTokens, spectrumTokens, spectrumProblems) {
    const deprecated = Object.keys(spectrumProblems.deprecated);
    if (deprecated.length) {
        for (const uuid of Object.keys(studioTokens)) {
            if (deprecated.includes(uuid) && !(0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.isDeprecated)(studioTokens[uuid].path)) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('WARNING - STUDIO INCLUDES DEPRECATED TOKEN: ' + spectrumProblems.deprecated[uuid].name + (0,_core_printableSetName__WEBPACK_IMPORTED_MODULE_0__["default"])(spectrumProblems.deprecated[uuid]) + ' [' + uuid + ']');
                spectrumTokens[uuid] = spectrumProblems.deprecated[uuid];
                delete spectrumProblems.deprecated[uuid];
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportDeprecatedTokenUsage);


/***/ }),

/***/ "./src/reports/reportMissingSpectrumSets.ts":
/*!**************************************************!*\
  !*** ./src/reports/reportMissingSpectrumSets.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/


function reportMissingScales(name, scales, allScales, SETS) {
    const missingScales = [];
    for (const scale of allScales) {
        if (!scales.includes(scale) && (!SETS.length || SETS.includes(scale))) {
            missingScales.push(scale);
        }
    }
    if (missingScales.length)
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - SPECTRUM-TOKENS MISSING SCALE DEFINITION FOR ' + name + ': ' + JSON.stringify(missingScales));
}
function reportMissingThemes(name, themes, allThemes, SETS) {
    const missingThemes = [];
    for (const theme of allThemes) {
        if (!themes.includes(theme) && (!SETS.length || SETS.includes(theme))) {
            missingThemes.push(theme);
        }
    }
    if (missingThemes.length)
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - SPECTRUM-TOKENS MISSING THEME DEFINITION FOR ' + name + ': ' + JSON.stringify(missingThemes));
}
function reportMissingSpectrumSets(spectrumTokens, spectrumProblems, SETS = []) {
    const collection = {};
    for (const token of Object.values(spectrumTokens)) {
        if (token.sets.length) {
            if (!collection[token.name]) {
                collection[token.name] = [];
            }
            for (const set of token.sets) {
                if (!collection[token.name].includes(set)) {
                    collection[token.name].push(set);
                }
            }
        }
    }
    const allScales = [];
    const allThemes = [];
    for (const tokenName of Object.keys(collection)) {
        for (const sets of collection[tokenName]) {
            for (const set of sets) {
                for (const scale of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SCALES) {
                    if (set === scale && !allScales.includes(scale)) {
                        allScales.push(scale);
                    }
                }
                for (const theme of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].THEMES) {
                    if (set === theme && !allThemes.includes(theme)) {
                        allThemes.push(theme);
                    }
                }
            }
        }
    }
    for (const tokenName of Object.keys(collection)) {
        const foundScales = [];
        const foundThemes = [];
        for (const sets of collection[tokenName]) {
            for (const set of sets) {
                for (const scale of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SCALES) {
                    if (set === scale) {
                        foundScales.push(scale);
                    }
                }
                for (const theme of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].THEMES) {
                    if (set === theme) {
                        foundThemes.push(theme);
                    }
                }
            }
        }
        if (foundScales.length && allScales.length !== foundScales.length) {
            reportMissingScales(tokenName, foundScales, allScales, SETS);
        }
        if (foundThemes.length && allThemes.length !== foundThemes.length) {
            reportMissingThemes(tokenName, foundThemes, allThemes, SETS);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportMissingSpectrumSets);


/***/ }),

/***/ "./src/reports/reportMissingSpectrumUUIDs.ts":
/*!***************************************************!*\
  !*** ./src/reports/reportMissingSpectrumUUIDs.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
/* istanbul ignore file */

function reportMissingSpectrumUUIDs(spectrumProblems) {
    for (const nouuid of spectrumProblems.uuids) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - spectrum definition missing uuid: ' + nouuid.name + ' in ' + nouuid.file);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportMissingSpectrumUUIDs);


/***/ }),

/***/ "./src/reports/reportMissingStudioModes.ts":
/*!*************************************************!*\
  !*** ./src/reports/reportMissingStudioModes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function reportMissingStudioModes(studioProblems) {
    for (const name of Object.keys(studioProblems.modes)) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - STUDIO MISSING MODE DEFINITION FOR ' + name + ': ' + JSON.stringify(studioProblems.modes[name]));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportMissingStudioModes);


/***/ }),

/***/ "./src/reports/reportMissingStudioTokenNames.ts":
/*!******************************************************!*\
  !*** ./src/reports/reportMissingStudioTokenNames.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/


function reportMissingStudioTokenNames(studioTokens) {
    for (const uuid of Object.keys(studioTokens)) {
        const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(studioTokens[uuid]);
        if (!tokenName) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - studio definition metadata missing spectrum token name: ' + studioTokens[uuid].path.join(','));
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportMissingStudioTokenNames);


/***/ }),

/***/ "./src/reports/reportMissingStudioUUIDs.ts":
/*!*************************************************!*\
  !*** ./src/reports/reportMissingStudioUUIDs.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/


function reportMissingStudioUUIDs(studioProblems, ignored) {
    for (const nouuid of studioProblems.uuids) {
        if (!(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.ignoreToken)(nouuid.path, ignored)) {
            // ??? ignoring typography tokens for now
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - studio definition missing uuid: ' + nouuid.path.join(','));
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportMissingStudioUUIDs);


/***/ }),

/***/ "./src/reports/reportNameChanges.ts":
/*!******************************************!*\
  !*** ./src/reports/reportNameChanges.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function reportNameChanges(changes) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)(changes);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportNameChanges);


/***/ }),

/***/ "./src/reports/reportNewTokens.ts":
/*!****************************************!*\
  !*** ./src/reports/reportNewTokens.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function reportNewTokens(tokens) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)(JSON.stringify(tokens, null, 2));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportNewTokens);


/***/ }),

/***/ "./src/reports/reportOtherProblems.ts":
/*!********************************************!*\
  !*** ./src/reports/reportOtherProblems.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_printableSetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/printableSetName */ "./src/core/printableSetName.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/




function isSystemSet(sets) {
    for (const set of sets) {
        if (_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYSTEMS.includes(set)) {
            return true;
        }
    }
    return false;
}
function reportOtherProblems(studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    for (const uuid of Object.keys(spectrumTokens)) {
        const spectrumToken = spectrumTokens[uuid];
        const studioToken = studioTokens[uuid];
        if (spectrumToken && studioToken && spectrumToken.sets.length && (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenDuplicated)(studioToken) && !isSystemSet(spectrumToken.sets)) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('ERROR - duplicate token defined in a set: ' + spectrumToken.name + (0,_core_printableSetName__WEBPACK_IMPORTED_MODULE_3__["default"])(spectrumToken));
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportOtherProblems);


/***/ }),

/***/ "./src/reports/reportTokenCounts.ts":
/*!******************************************!*\
  !*** ./src/reports/reportTokenCounts.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

function getTokenCount(tokens, problems) {
    let result = Object.keys(tokens).length;
    for (const entries of Object.values(problems.collisions)) {
        result += entries.length;
    }
    return result;
}
function reportTokenCounts(studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('LOADED SPECTRUM TOKENS: ' + getTokenCount(spectrumTokens, spectrumProblems));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('LOADED STUDIO TOKENS:   ' + getTokenCount(studioTokens, studioProblems));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportTokenCounts);


/***/ }),

/***/ "./src/reports/reportTypeConflicts.ts":
/*!********************************************!*\
  !*** ./src/reports/reportTypeConflicts.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_schemaStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/schemaStuff */ "./src/core/schemaStuff.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/



// !!! this is basic and isn't checking much, yet
function matchingTypes(studioToken, spectrumToken) {
    const studioType = (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(studioToken);
    const schema = (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_2__.getSchemaFromType)(studioType);
    if (!schema) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - UNSUPPORTED STUDIO TYPE: ' + (studioType ? studioType : 'undefined'));
        return;
    }
    if (schema !== spectrumToken.schema) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - MISMATCHED TYPE: ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenName)(studioToken) + ' => ' + studioToken.type);
        return;
    }
    // !!! check the value against the schema definition
}
function reportTypeConflicts(studioTokens, spectrumTokens) {
    for (const uuid of Object.keys(studioTokens)) {
        if (spectrumTokens[uuid]) {
            const spectrumType = spectrumTokens[uuid].schema;
            if (spectrumType) {
                matchingTypes(studioTokens[uuid], spectrumTokens[uuid]);
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportTypeConflicts);


/***/ }),

/***/ "./src/reports/reportUUIDCollisions.ts":
/*!*********************************************!*\
  !*** ./src/reports/reportUUIDCollisions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
/* istanbul ignore file */

function formatStudioCollisionMessage(uuid, entries) {
    let msg = '';
    entries.forEach((entry) => {
        msg += '\n' + entry.path;
    });
    return msg;
}
function formatSpectrumCollisionMessage(uuid, entries) {
    let msg = '';
    entries.forEach((entry) => {
        msg += '\n' + entry.name + ' in ' + entry.file;
    });
    return msg;
}
function reportUUIDCollisions(studioProblems, spectrumProblems) {
    Object.keys(studioProblems.collisions).forEach((collision) => {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - studio token uuid collision: (' + collision + ')' + formatStudioCollisionMessage(collision, studioProblems.collisions[collision]));
    });
    Object.keys(spectrumProblems.collisions).forEach((collision) => {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - spectrum token uuid collision: (' + collision + ')' + formatSpectrumCollisionMessage(collision, spectrumProblems.collisions[collision]));
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportUUIDCollisions);


/***/ }),

/***/ "./src/reports/reportValueChanges.ts":
/*!*******************************************!*\
  !*** ./src/reports/reportValueChanges.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/helpers */ "./src/core/helpers.ts");
/* harmony import */ var _core_printableSetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/printableSetName */ "./src/core/printableSetName.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/



function findTokensWithReference(spectrumTokens, uuid, filter = []) {
    const results = {};
    const referenceName = '{' + spectrumTokens[uuid].name + '}';
    const updatedFilter = filter.concat(spectrumTokens[uuid].sets);
    Object.values(spectrumTokens).forEach((entry) => {
        if ((0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.filterPath)(updatedFilter, spectrumTokens[entry.uuid].sets) && entry.value === referenceName) {
            results[entry.uuid] = findTokensWithReference(spectrumTokens, entry.uuid, updatedFilter);
        }
    });
    return results;
}
function reportReferences(spectrumTokens, references, result = {}) {
    Object.keys(references).forEach((uuid) => {
        result[uuid] = spectrumTokens[uuid].name + (0,_core_printableSetName__WEBPACK_IMPORTED_MODULE_2__["default"])(spectrumTokens[uuid]);
        reportReferences(spectrumTokens, references[uuid], result);
    });
    return result;
}
function reportValueChanges(studioTokens, spectrumTokens, changes) {
    const report = [];
    const allChangedTokens = {};
    Object.keys(changes).forEach((uuid) => {
        const changelog = {};
        changelog.uuid = uuid;
        changelog.nameSource = studioTokens[uuid].path.join('.');
        changelog.nameSpectrum = spectrumTokens[uuid].name + (0,_core_printableSetName__WEBPACK_IMPORTED_MODULE_2__["default"])(spectrumTokens[uuid]);
        changelog.valueFrom = spectrumTokens[uuid].value;
        changelog.valueTo = changes[uuid];
        allChangedTokens[spectrumTokens[uuid].name] = true;
        const referenced = reportReferences(spectrumTokens, findTokensWithReference(spectrumTokens, uuid));
        if (Object.keys(referenced).length) {
            changelog.referenced = referenced;
            for (const spectrumName of Object.values(referenced)) {
                allChangedTokens[spectrumName.split('/')[0]] = true;
            }
        }
        report.push(changelog);
    });
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('CHANGED TOKENS: ' + Object.keys(allChangedTokens).length);
}
// function outputReport(report: CHANGELOG[]) {
//     if (report.length) {
//         cout(report);
//     }
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportValueChanges);


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:os");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ "node:tty":
/*!***************************!*\
  !*** external "node:tty" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:tty");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./node_modules/chalk/source/index.js":
/*!********************************************!*\
  !*** ./node_modules/chalk/source/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chalk: () => (/* binding */ Chalk),
/* harmony export */   backgroundColorNames: () => (/* reexport safe */ _ansi_styles__WEBPACK_IMPORTED_MODULE_1__.backgroundColorNames),
/* harmony export */   backgroundColors: () => (/* reexport safe */ _ansi_styles__WEBPACK_IMPORTED_MODULE_1__.backgroundColorNames),
/* harmony export */   chalkStderr: () => (/* binding */ chalkStderr),
/* harmony export */   colorNames: () => (/* reexport safe */ _ansi_styles__WEBPACK_IMPORTED_MODULE_1__.colorNames),
/* harmony export */   colors: () => (/* reexport safe */ _ansi_styles__WEBPACK_IMPORTED_MODULE_1__.colorNames),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   foregroundColorNames: () => (/* reexport safe */ _ansi_styles__WEBPACK_IMPORTED_MODULE_1__.foregroundColorNames),
/* harmony export */   foregroundColors: () => (/* reexport safe */ _ansi_styles__WEBPACK_IMPORTED_MODULE_1__.foregroundColorNames),
/* harmony export */   modifierNames: () => (/* reexport safe */ _ansi_styles__WEBPACK_IMPORTED_MODULE_1__.modifierNames),
/* harmony export */   modifiers: () => (/* reexport safe */ _ansi_styles__WEBPACK_IMPORTED_MODULE_1__.modifierNames),
/* harmony export */   supportsColor: () => (/* binding */ stdoutColor),
/* harmony export */   supportsColorStderr: () => (/* binding */ stderrColor)
/* harmony export */ });
/* harmony import */ var _ansi_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/ansi-styles/index.js */ "./node_modules/chalk/source/vendor/ansi-styles/index.js");
/* harmony import */ var _supports_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #supports-color */ "./node_modules/chalk/source/vendor/supports-color/index.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities.js */ "./node_modules/chalk/source/utilities.js");




const {stdout: stdoutColor, stderr: stderrColor} = _supports_color__WEBPACK_IMPORTED_MODULE_0__["default"];

const GENERATOR = Symbol('GENERATOR');
const STYLER = Symbol('STYLER');
const IS_EMPTY = Symbol('IS_EMPTY');

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m',
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class Chalk {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = (...strings) => strings.join(' ');
	applyOptions(chalk, options);

	Object.setPrototypeOf(chalk, createChalk.prototype);

	return chalk;
};

function createChalk(options) {
	return chalkFactory(options);
}

Object.setPrototypeOf(createChalk.prototype, Function.prototype);

for (const [styleName, style] of Object.entries(_ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"])) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		},
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this[STYLER], true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	},
};

const getModelAnsi = (model, level, type, ...arguments_) => {
	if (model === 'rgb') {
		if (level === 'ansi16m') {
			return _ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"][type].ansi16m(...arguments_);
		}

		if (level === 'ansi256') {
			return _ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"][type].ansi256(_ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"].rgbToAnsi256(...arguments_));
		}

		return _ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"][type].ansi(_ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"].rgbToAnsi(...arguments_));
	}

	if (model === 'hex') {
		return getModelAnsi('rgb', level, type, ..._ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"].hexToRgb(...arguments_));
	}

	return _ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"][type][model](...arguments_);
};

const usedModels = ['rgb', 'hex', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(getModelAnsi(model, levelMapping[level], 'color', ...arguments_), _ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"].color.close, this[STYLER]);
				return createBuilder(this, styler, this[IS_EMPTY]);
			};
		},
	};

	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(getModelAnsi(model, levelMapping[level], 'bgColor', ...arguments_), _ansi_styles__WEBPACK_IMPORTED_MODULE_1__["default"].bgColor.close, this[STYLER]);
				return createBuilder(this, styler, this[IS_EMPTY]);
			};
		},
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this[GENERATOR].level;
		},
		set(level) {
			this[GENERATOR].level = level;
		},
	},
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent,
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	// Single argument is hot path, implicit coercion is faster than anything
	// eslint-disable-next-line no-implicit-coercion
	const builder = (...arguments_) => applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder[GENERATOR] = self;
	builder[STYLER] = _styler;
	builder[IS_EMPTY] = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self[IS_EMPTY] ? '' : string;
	}

	let styler = self[STYLER];

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.includes('\u001B')) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.stringReplaceAll)(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.stringEncaseCRLFWithFirstIndex)(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

Object.defineProperties(createChalk.prototype, styles);

const chalk = createChalk();
const chalkStderr = createChalk({level: stderrColor ? stderrColor.level : 0});





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chalk);


/***/ }),

/***/ "./node_modules/chalk/source/utilities.js":
/*!************************************************!*\
  !*** ./node_modules/chalk/source/utilities.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stringEncaseCRLFWithFirstIndex: () => (/* binding */ stringEncaseCRLFWithFirstIndex),
/* harmony export */   stringReplaceAll: () => (/* binding */ stringReplaceAll)
/* harmony export */ });
// TODO: When targeting Node.js 16, use `String.prototype.replaceAll`.
function stringReplaceAll(string, substring, replacer) {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.slice(endIndex, index) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.slice(endIndex);
	return returnValue;
}

function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.slice(endIndex, (gotCR ? index - 1 : index)) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.slice(endIndex);
	return returnValue;
}


/***/ }),

/***/ "./node_modules/chalk/source/vendor/ansi-styles/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chalk/source/vendor/ansi-styles/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundColorNames: () => (/* binding */ backgroundColorNames),
/* harmony export */   colorNames: () => (/* binding */ colorNames),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   foregroundColorNames: () => (/* binding */ foregroundColorNames),
/* harmony export */   modifierNames: () => (/* binding */ modifierNames)
/* harmony export */ });
const ANSI_BACKGROUND_OFFSET = 10;

const wrapAnsi16 = (offset = 0) => code => `\u001B[${code + offset}m`;

const wrapAnsi256 = (offset = 0) => code => `\u001B[${38 + offset};5;${code}m`;

const wrapAnsi16m = (offset = 0) => (red, green, blue) => `\u001B[${38 + offset};2;${red};${green};${blue}m`;

const styles = {
	modifier: {
		reset: [0, 0],
		// 21 isn't widely supported and 22 does the same thing
		bold: [1, 22],
		dim: [2, 22],
		italic: [3, 23],
		underline: [4, 24],
		overline: [53, 55],
		inverse: [7, 27],
		hidden: [8, 28],
		strikethrough: [9, 29],
	},
	color: {
		black: [30, 39],
		red: [31, 39],
		green: [32, 39],
		yellow: [33, 39],
		blue: [34, 39],
		magenta: [35, 39],
		cyan: [36, 39],
		white: [37, 39],

		// Bright color
		blackBright: [90, 39],
		gray: [90, 39], // Alias of `blackBright`
		grey: [90, 39], // Alias of `blackBright`
		redBright: [91, 39],
		greenBright: [92, 39],
		yellowBright: [93, 39],
		blueBright: [94, 39],
		magentaBright: [95, 39],
		cyanBright: [96, 39],
		whiteBright: [97, 39],
	},
	bgColor: {
		bgBlack: [40, 49],
		bgRed: [41, 49],
		bgGreen: [42, 49],
		bgYellow: [43, 49],
		bgBlue: [44, 49],
		bgMagenta: [45, 49],
		bgCyan: [46, 49],
		bgWhite: [47, 49],

		// Bright color
		bgBlackBright: [100, 49],
		bgGray: [100, 49], // Alias of `bgBlackBright`
		bgGrey: [100, 49], // Alias of `bgBlackBright`
		bgRedBright: [101, 49],
		bgGreenBright: [102, 49],
		bgYellowBright: [103, 49],
		bgBlueBright: [104, 49],
		bgMagentaBright: [105, 49],
		bgCyanBright: [106, 49],
		bgWhiteBright: [107, 49],
	},
};

const modifierNames = Object.keys(styles.modifier);
const foregroundColorNames = Object.keys(styles.color);
const backgroundColorNames = Object.keys(styles.bgColor);
const colorNames = [...foregroundColorNames, ...backgroundColorNames];

function assembleStyles() {
	const codes = new Map();

	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`,
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false,
		});
	}

	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false,
	});

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	styles.color.ansi = wrapAnsi16();
	styles.color.ansi256 = wrapAnsi256();
	styles.color.ansi16m = wrapAnsi16m();
	styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
	styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
	styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);

	// From https://github.com/Qix-/color-convert/blob/3f0e0d4e92e235796ccb17f6e85c72094a651f49/conversions.js
	Object.defineProperties(styles, {
		rgbToAnsi256: {
			value(red, green, blue) {
				// We use the extended greyscale palette here, with the exception of
				// black and white. normal palette only has 4 greyscale shades.
				if (red === green && green === blue) {
					if (red < 8) {
						return 16;
					}

					if (red > 248) {
						return 231;
					}

					return Math.round(((red - 8) / 247) * 24) + 232;
				}

				return 16
					+ (36 * Math.round(red / 255 * 5))
					+ (6 * Math.round(green / 255 * 5))
					+ Math.round(blue / 255 * 5);
			},
			enumerable: false,
		},
		hexToRgb: {
			value(hex) {
				const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
				if (!matches) {
					return [0, 0, 0];
				}

				let [colorString] = matches;

				if (colorString.length === 3) {
					colorString = [...colorString].map(character => character + character).join('');
				}

				const integer = Number.parseInt(colorString, 16);

				return [
					/* eslint-disable no-bitwise */
					(integer >> 16) & 0xFF,
					(integer >> 8) & 0xFF,
					integer & 0xFF,
					/* eslint-enable no-bitwise */
				];
			},
			enumerable: false,
		},
		hexToAnsi256: {
			value: hex => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
			enumerable: false,
		},
		ansi256ToAnsi: {
			value(code) {
				if (code < 8) {
					return 30 + code;
				}

				if (code < 16) {
					return 90 + (code - 8);
				}

				let red;
				let green;
				let blue;

				if (code >= 232) {
					red = (((code - 232) * 10) + 8) / 255;
					green = red;
					blue = red;
				} else {
					code -= 16;

					const remainder = code % 36;

					red = Math.floor(code / 36) / 5;
					green = Math.floor(remainder / 6) / 5;
					blue = (remainder % 6) / 5;
				}

				const value = Math.max(red, green, blue) * 2;

				if (value === 0) {
					return 30;
				}

				// eslint-disable-next-line no-bitwise
				let result = 30 + ((Math.round(blue) << 2) | (Math.round(green) << 1) | Math.round(red));

				if (value === 2) {
					result += 60;
				}

				return result;
			},
			enumerable: false,
		},
		rgbToAnsi: {
			value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
			enumerable: false,
		},
		hexToAnsi: {
			value: hex => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
			enumerable: false,
		},
	});

	return styles;
}

const ansiStyles = assembleStyles();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ansiStyles);


/***/ }),

/***/ "./node_modules/chalk/source/vendor/supports-color/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/chalk/source/vendor/supports-color/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSupportsColor: () => (/* binding */ createSupportsColor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:process */ "node:process");
/* harmony import */ var node_os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:os */ "node:os");
/* harmony import */ var node_tty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:tty */ "node:tty");




// From: https://github.com/sindresorhus/has-flag/blob/main/index.js
/// function hasFlag(flag, argv = globalThis.Deno?.args ?? process.argv) {
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : node_process__WEBPACK_IMPORTED_MODULE_0__.argv) {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}

const {env} = node_process__WEBPACK_IMPORTED_MODULE_0__;

let flagForceColor;
if (
	hasFlag('no-color')
	|| hasFlag('no-colors')
	|| hasFlag('color=false')
	|| hasFlag('color=never')
) {
	flagForceColor = 0;
} else if (
	hasFlag('color')
	|| hasFlag('colors')
	|| hasFlag('color=true')
	|| hasFlag('color=always')
) {
	flagForceColor = 1;
}

function envForceColor() {
	if ('FORCE_COLOR' in env) {
		if (env.FORCE_COLOR === 'true') {
			return 1;
		}

		if (env.FORCE_COLOR === 'false') {
			return 0;
		}

		return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3,
	};
}

function _supportsColor(haveStream, {streamIsTTY, sniffFlags = true} = {}) {
	const noFlagForceColor = envForceColor();
	if (noFlagForceColor !== undefined) {
		flagForceColor = noFlagForceColor;
	}

	const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;

	if (forceColor === 0) {
		return 0;
	}

	if (sniffFlags) {
		if (hasFlag('color=16m')
			|| hasFlag('color=full')
			|| hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}
	}

	// Check for Azure DevOps pipelines.
	// Has to be above the `!streamIsTTY` check.
	if ('TF_BUILD' in env && 'AGENT_NAME' in env) {
		return 1;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (node_process__WEBPACK_IMPORTED_MODULE_0__.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = node_os__WEBPACK_IMPORTED_MODULE_1__.release().split('.');
		if (
			Number(osRelease[0]) >= 10
			&& Number(osRelease[2]) >= 10_586
		) {
			return Number(osRelease[2]) >= 14_931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if ('GITHUB_ACTIONS' in env || 'GITEA_ACTIONS' in env) {
			return 3;
		}

		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'BUILDKITE', 'DRONE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if (env.TERM === 'xterm-kitty') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = Number.parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app': {
				return version >= 3 ? 3 : 2;
			}

			case 'Apple_Terminal': {
				return 2;
			}
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function createSupportsColor(stream, options = {}) {
	const level = _supportsColor(stream, {
		streamIsTTY: stream && stream.isTTY,
		...options,
	});

	return translateLevel(level);
}

const supportsColor = {
	stdout: createSupportsColor({isTTY: node_tty__WEBPACK_IMPORTED_MODULE_2__.isatty(1)}),
	stderr: createSupportsColor({isTTY: node_tty__WEBPACK_IMPORTED_MODULE_2__.isatty(2)}),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supportsColor);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/diff.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxzR0FBc0c7V0FDdEc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ2hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL2NvbmZpZy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9jb3JlL2VxdWl2YWxlbnRWYWx1ZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL2NvcmUvZmlsZUNhY2hpbmcudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL2NvcmUvZmluZEJyYW5jaEJ5VVVJRC50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvY29yZS9nZXRTcGVjdHJ1bVJlZmVyZW5jZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvY29yZS9nZXRTdHVkaW9SZWZlcmVuY2UudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL2NvcmUvaGFuZGxlTmFtZUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL2NvcmUvaGVscGVycy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvY29yZS9wcmludGFibGVTZXROYW1lLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9jb3JlL3NjaGVtYVN0dWZmLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9jb3JlL3Rva2VuU3R1ZmYudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL2RpZmYudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL29wZXJhdGlvbnMvYWRkU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL29wZXJhdGlvbnMvYWRkVVVJRHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL29wZXJhdGlvbnMvY2hhbmdlU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tGb3JEZXByZWNhdGVkVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9vcGVyYXRpb25zL2NoZWNrTW9kZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tOYW1lQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9jaGVja1ZhbHVlQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9kZXByZWNhdGVTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9mb3JtYXRDaGFuZ2VkU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL29wZXJhdGlvbnMvZm9ybWF0TmV3U3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL29wZXJhdGlvbnMvcHJvY2Vzc1N0dWRpb1Rva2VuRGF0YS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9yZWFkU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL29wZXJhdGlvbnMvcmVhZFN0dWRpb1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9yZW5hbWVTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy91cGRhdGVUb2tlbk5hbWVNZXRhZGF0YS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnREZWxldGVkVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydERlcHJlY2F0ZWRUb2tlblVzYWdlLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTcGVjdHJ1bVNldHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1NwZWN0cnVtVVVJRHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1N0dWRpb01vZGVzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTdHVkaW9Ub2tlbk5hbWVzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTdHVkaW9VVUlEcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnROYW1lQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnROZXdUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL3JlcG9ydHMvcmVwb3J0T3RoZXJQcm9ibGVtcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnRUb2tlbkNvdW50cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnRUeXBlQ29uZmxpY3RzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydFVVSURDb2xsaXNpb25zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydFZhbHVlQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImNyeXB0b1wiIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6b3NcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6cHJvY2Vzc1wiIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTp0dHlcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdmVuZG9yL2Fuc2ktc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdmVuZG9yL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=