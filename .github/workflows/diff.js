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
    // AUTOMATION: whether this is running as a github action,
    //             in which case we may curtail the cout messages
    AUTOMATION: false,
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
    SUPPORT_SCHEMAS: true,
    SCHEMA_TYPES: {
        // native - tokens studio has these types
        "color": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/color.json",
        "opacity": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/opacity.json",
        "spacing": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/dimension.json",
        "borderwidth": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/dimension.json",
        "borderradius": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/dimension.json",
        "sizing": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/dimension.json",
        "letterspacing": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/dimension.json",
        "fontsizes": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/font-size.json",
        "fontweights": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/font-weight.json",
        "lineheights": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/multiplier.json",
        "fontfamilies": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/font-family.json",
        // derived - not native to tokens studio by we can figure them out
        //         - alias is easy to detect, we just check the value references another tokens
        "alias": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/alias.json",
        //         - all the rest here are marked by tokens studio as being of type "other" and
        //           we should follow-up and make sure they aren't mis-typed and if there is a valid
        //           tokens studio type that accurately captures proper usage
        //           (the tokens are mix of drop-shadow and typography, fyi)
        "multiplier": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/multiplier.json",
        "dimension": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/dimension.json",
        "font-style": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/font-style.json",
        "text-transform": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/text-transform.json",
        // set schemas - we don't detect/compare/test these, but we use them when changing/adding to spectrum-tokens
        "color-set": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/color-set.json",
        "scale-set": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/scale-set.json"
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _tokenStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenStuff */ "./src/core/tokenStuff.ts");
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



const MULTIPLIER = 'multiplier';
const DIMENSION = 'dimension';
const TYPOGRAPHY = 'typography';
const FONT_STYLE = 'font-style';
const TEXT_TRANSFORM = 'text-transform';
function getSchemaType(studioToken) {
    let type = studioToken.type.toLowerCase();
    const tokenName = (0,_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenName)(studioToken).toLowerCase();
    if (studioToken.value[0] === '{') {
        type = 'alias';
    }
    if (tokenName.indexOf('-' + MULTIPLIER) > 0 && tokenName.indexOf('-' + MULTIPLIER) === tokenName.length - MULTIPLIER.length - 1) {
        type = MULTIPLIER;
    }
    if (type === 'other') {
        const value = studioToken.value;
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(value) || ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(value) && !isNaN(parseInt(value)))) {
            type = DIMENSION;
        }
        else if (studioToken.path.join('.').toLowerCase().includes(TYPOGRAPHY)) {
            switch (value.toLowerCase()) {
                case 'normal':
                case 'italic':
                    type = FONT_STYLE;
                    break;
                case 'uppercase':
                    type = TEXT_TRANSFORM;
                    break;
                default:
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - TYPE IS UNHANDLED OTHER: ' + tokenName + ' = ' + studioToken.value);
            }
        }
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
/* harmony import */ var _operations_resolveReplacedTokens__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./operations/resolveReplacedTokens */ "./src/operations/resolveReplacedTokens.ts");
/* harmony import */ var _operations_writeStudioTokens__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./operations/writeStudioTokens */ "./src/operations/writeStudioTokens.ts");
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

































let TOKENS_SPECTRUM_SANITIZED;
let TOKENS_STUDIO_SANITIZED;
function syncToSpectrum() {
    // sanitize the source/destination paths - these will be used in various read/write operations
    TOKENS_SPECTRUM_SANITIZED = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_SPECTRUM);
    TOKENS_STUDIO_SANITIZED = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_STUDIO);
    // make sure the output log directory exists
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS))) {
        fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS));
    }
    // load token data from the data sets
    const { spectrumTokens, spectrumProblems } = (0,_operations_readSpectrumTokens__WEBPACK_IMPORTED_MODULE_4__["default"])(TOKENS_SPECTRUM_SANITIZED, _config__WEBPACK_IMPORTED_MODULE_1__["default"].SYSTEM);
    const { studioTokens, studioProblems } = (0,_operations_readStudioTokens__WEBPACK_IMPORTED_MODULE_3__.readStudioTokens)(TOKENS_STUDIO_SANITIZED);
    // report token data type
    if (studioProblems.colorOnly) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('TOKENS STUDIO DATA IS COLOR ONLY');
    }
    else {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('TOKENS STUDIO DATA IS NON-COLOR ONLY');
    }
    // we'll need to keep track of some things...
    let addedUUIDs = [];
    // resolve token replacement (a duplicated token probably became non-duplicated)
    if (Object.keys(studioProblems.replace).length) {
        addedUUIDs = addedUUIDs.concat((0,_operations_resolveReplacedTokens__WEBPACK_IMPORTED_MODULE_31__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems));
    }
    // report uuid collisions (there are multiple entries in a data set for a single uuid)
    (0,_reports_reportUUIDCollisions__WEBPACK_IMPORTED_MODULE_6__["default"])(studioProblems, spectrumProblems);
    // report missing uuids in the spectrum-tokens data
    (0,_reports_reportMissingSpectrumUUIDs__WEBPACK_IMPORTED_MODULE_8__["default"])(spectrumProblems);
    // report missing tokens studio mode entries
    (0,_reports_reportMissingStudioModes__WEBPACK_IMPORTED_MODULE_21__["default"])(studioProblems);
    // report missing spectrum-tokens set entries
    (0,_reports_reportMissingSpectrumSets__WEBPACK_IMPORTED_MODULE_20__["default"])(spectrumTokens, spectrumProblems, studioProblems.usedModes);
    // collect token name changes (from the tokens studio extension metadata)
    let tokenMetadataNameChanges = {};
    if (!studioProblems.colorOnly) {
        // tokens studio names match spectrum-token names, so we should first align
        // the tokens studio metadata name in the extension data to the token name
        // before checking for name changes
        tokenMetadataNameChanges = (0,_operations_updateTokenNameMetadata__WEBPACK_IMPORTED_MODULE_30__["default"])(studioTokens, studioProblems);
    }
    const renamedTokens = (0,_operations_checkNameChanges__WEBPACK_IMPORTED_MODULE_17__["default"])(spectrumTokens, studioTokens, studioProblems);
    // deal with missing uuids in token studio data: create them or report them
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_UUIDS_FOR_TOKENS_STUDIO) {
        addedUUIDs = addedUUIDs.concat((0,_operations_addUUIDs__WEBPACK_IMPORTED_MODULE_15__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, _config__WEBPACK_IMPORTED_MODULE_1__["default"].IGNORED));
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
    // report token counts
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_VERBOSE) {
        (0,_reports_reportTokenCounts__WEBPACK_IMPORTED_MODULE_5__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems);
    }
    // collect new uuids
    const newTokens = [];
    Object.keys(studioTokens).forEach((uuid) => {
        if (!Object.keys(spectrumTokens).includes(uuid) && !Object.keys(spectrumProblems.collisions).includes(uuid) && !Object.keys(spectrumProblems.deprecated).includes(uuid)) {
            newTokens.push(studioTokens[uuid]);
        }
    });
    Object.keys(studioProblems.replace).forEach((uuid) => {
        if (!Object.keys(spectrumProblems.collisions).includes(uuid) && !Object.keys(spectrumProblems.deprecated).includes(uuid)) {
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
    // report studio change summaries
    if (addedUUIDs.length || Object.keys(tokenMetadataNameChanges).length) {
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].AUTOMATION) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('\nSTUDIO SYNC SUMMARY');
        }
        else {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('\n<details><summary>STUDIO SYNC SUMMARY</summary><p>\n\n```');
        }
        for (const addedUUID of addedUUIDs) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('UPDATED METADATA - SPECTRUM UUID: ' + addedUUID);
        }
        for (const tokenName of Object.keys(tokenMetadataNameChanges)) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('UPDATED METADATA - SPECTRUM NAME: ' + tokenName + ' => ' + tokenMetadataNameChanges[tokenName]);
        }
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].AUTOMATION) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('```\n</p></details>');
        }
    }
    // report spectrum change summaries
    if (newTokens.length || Object.keys(renamedTokens).length || deprecatedTokens.length || Object.keys(outdatedValues).length) {
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].AUTOMATION) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('\nSPECTRUM SYNC SUMMARY');
        }
        else {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('\n<details><summary>SPECTRUM SYNC SUMMARY</summary><p>\n\n```');
        }
        if (newTokens.length) {
            (0,_reports_reportNewTokens__WEBPACK_IMPORTED_MODULE_12__["default"])(newTokens, spectrumTokens);
        }
        if (Object.keys(renamedTokens).length) {
            (0,_reports_reportNameChanges__WEBPACK_IMPORTED_MODULE_10__["default"])(renamedTokens);
        }
        if (deprecatedTokens.length) {
            (0,_reports_reportDeletedTokens__WEBPACK_IMPORTED_MODULE_19__["default"])(deprecatedTokens);
        }
        if (Object.keys(outdatedValues).length) {
            (0,_reports_reportValueChanges__WEBPACK_IMPORTED_MODULE_9__["default"])(studioTokens, spectrumTokens, outdatedValues);
        }
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].AUTOMATION) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('```\n</p></details>');
        }
    }
    // store studio token changes
    (0,_operations_writeStudioTokens__WEBPACK_IMPORTED_MODULE_32__["default"])(studioTokens);
    // output deprecated tokens object
    if (deprecatedTokens.length) {
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED), JSON.stringify(deprecatedTokens, null, 2), { encoding: 'utf8', flag: 'w' });
        }
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED))) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_DEPRECATED));
        }
    }
    // output renamed tokens object
    if (Object.keys(renamedTokens).length) {
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED), JSON.stringify(renamedTokens, null, 2), { encoding: 'utf8', flag: 'w' });
        }
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED))) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_RENAMED));
        }
    }
    // collect & output new tokens data object
    let newTokenData = {};
    if (newTokens.length) {
        newTokenData = (0,_operations_formatNewSpectrumTokens__WEBPACK_IMPORTED_MODULE_13__["default"])(newTokens, renamedTokens, studioTokens, studioProblems, spectrumTokens, spectrumProblems);
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW), JSON.stringify(newTokenData, null, 2), { encoding: 'utf8', flag: 'w' });
        }
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW))) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_NEW));
        }
    }
    // collect & output changed token data object
    let changedTokenData = {};
    if (Object.keys(outdatedValues).length) {
        changedTokenData = (0,_operations_formatChangedSpectrumTokens__WEBPACK_IMPORTED_MODULE_14__["default"])(outdatedValues, renamedTokens, studioTokens, studioProblems, spectrumTokens, spectrumProblems);
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED), JSON.stringify(changedTokenData, null, 2), { encoding: 'utf8', flag: 'w' });
        }
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED))) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED));
        }
    }
    (0,_operations_renameSpectrumTokens__WEBPACK_IMPORTED_MODULE_23__["default"])(TOKENS_SPECTRUM_SANITIZED, renamedTokens);
    (0,_operations_deprecateSpectrumTokens__WEBPACK_IMPORTED_MODULE_22__["default"])(spectrumTokens, spectrumProblems, deprecatedTokens);
    (0,_operations_addSpectrumTokens__WEBPACK_IMPORTED_MODULE_25__["default"])(TOKENS_SPECTRUM_SANITIZED, studioTokens, studioProblems, spectrumTokens, spectrumProblems, newTokenData, renamedTokens);
    (0,_operations_changeSpectrumTokens__WEBPACK_IMPORTED_MODULE_24__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, changedTokenData);
    if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].TESTING) {
        (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_29__.writeFiles)();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('\nSYNC COMPLETE');
    }
    else {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('\nTEST COMPLETE');
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
                _config__WEBPACK_IMPORTED_MODULE_1__["default"].AUTOMATION = true; // in case we want to format output for github
                break;
        }
    }
}
function writeCoutLog() {
    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].COUT_LOG), (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getcout)().join('\n') + '\n', { encoding: 'utf8', flag: 'w' });
}
async function main() {
    try {
        syncToSpectrum();
    }
    finally {
        writeCoutLog();
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
/* harmony export */   sanitizePath: () => (/* binding */ sanitizePath),
/* harmony export */   timeout: () => (/* binding */ timeout),
/* harmony export */   trimPath: () => (/* binding */ trimPath)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chalk */ "./node_modules/chalk/source/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:process */ "node:process");
/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_process__WEBPACK_IMPORTED_MODULE_2__);
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




const ISSUEMARK = '  > ';
const WARNING = 'WARNING - ';
const ERROR = 'ERROR - ';
const LOG = [];
function cout(msg) {
    // eslint-disable-next-line no-prototype-builtins
    if (msg && msg.hasOwnProperty && msg.hasOwnProperty('stack') && msg.stack.length) {
        msg = msg.stack;
    }
    if (isString(msg)) {
        const previousLineWasIssue = LOG.length && (LOG[LOG.length - 1].indexOf(ISSUEMARK) === 0 || LOG[LOG.length - 1].indexOf(ISSUEMARK) === 1) ? true : false;
        if (msg.indexOf(ERROR) === 0) {
            msg = ISSUEMARK + msg.split('\n').join('\n' + ISSUEMARK + ' '.repeat(ERROR.length));
            msg = previousLineWasIssue ? msg : '\n' + msg;
        }
        else if (msg.indexOf(WARNING) === 0) {
            msg = ISSUEMARK + msg.split('\n').join('\n' + ISSUEMARK + ' '.repeat(WARNING.length));
            msg = previousLineWasIssue ? msg : '\n' + msg;
        }
        else {
            msg = previousLineWasIssue ? '\n' + msg : msg;
        }
        LOG.push(msg);
        if (!_config__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPRESS_COUT) {
            if (msg.indexOf(ERROR) >= 0) {
                // eslint-disable-next-line no-console
                console.log(chalk__WEBPACK_IMPORTED_MODULE_3__["default"].red(msg));
            }
            else if (msg.indexOf(WARNING) >= 0) {
                // eslint-disable-next-line no-console
                console.log(chalk__WEBPACK_IMPORTED_MODULE_3__["default"].yellow(msg));
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
function sanitizePath(filePath) {
    if (filePath.indexOf('\0') !== -1) {
        throw new Error('ACCESS DENIED');
    }
    let result = path__WEBPACK_IMPORTED_MODULE_1___default().normalize(filePath).replace(/^(\.\.(\/|\\|$))+/, '');
    if (filePath.indexOf('../') === 0) {
        const dir = (0,node_process__WEBPACK_IMPORTED_MODULE_2__.cwd)().split((path__WEBPACK_IMPORTED_MODULE_1___default().sep)).slice(0, -1).join((path__WEBPACK_IMPORTED_MODULE_1___default().sep));
        if (dir) {
            // going to allow a bump up to the parent directory for local runs
            // ... but that's as far as we'll allow
            result = path__WEBPACK_IMPORTED_MODULE_1___default().join(dir, result);
            if (result.indexOf(dir) !== 0) {
                throw new Error('ACCESS DENIED');
            }
        }
        else {
            throw new Error('ACCESS DENIED');
        }
    }
    else {
        // requires paths from the command line to be relative to the current working directory
        // this should always be true when running as a git action
        result = path__WEBPACK_IMPORTED_MODULE_1___default().join((0,node_process__WEBPACK_IMPORTED_MODULE_2__.cwd)(), result);
        if (result.indexOf((0,node_process__WEBPACK_IMPORTED_MODULE_2__.cwd)()) !== 0) {
            throw new Error('ACCESS DENIED');
        }
    }
    return result;
}
function trimPath(path) {
    let result = path;
    if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].AUTOMATION) {
        if (result.indexOf((0,node_process__WEBPACK_IMPORTED_MODULE_2__.cwd)()) === 0) {
            result = '`' + result.slice((0,node_process__WEBPACK_IMPORTED_MODULE_2__.cwd)().length) + '`';
        }
    }
    return result;
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
function addTokens(tokens, path, renamedTokens) {
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
            // a token is transitioning from being without sets to being one with sets,
            // so we'll replace the whole thing - that should be fine
            data[tokenName] = tokens[tokenName];
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
function isLayoutToken(path, name) {
    // we're going to make a guess regarding the name whether it is layout token or a layout-component token
    const layoutData = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(path + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT);
    const componentData = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(path + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT_COMPONENT);
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
function addSpectrumTokens(tokensPath, studioTokens, studioProblems, spectrumTokens, spectrumProblems, newTokens, renamedTokens) {
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
                const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES[file]);
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
                // the token already exist in a file, so we'll add this
                // where we found it, already
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
                else if (isLayoutToken(tokensPath, tokenName)) {
                    layout[tokenName] = tokenEntry;
                }
                else {
                    layoutComponent[tokenName] = tokenEntry;
                }
            }
        }
        if (Object.keys(colorPalette).length) {
            addTokens(colorPalette, tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_PALETTE, renamedTokens);
        }
        if (Object.keys(colorSemantic).length) {
            addTokens(colorSemantic, tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_SEMANTIC, renamedTokens);
        }
        if (Object.keys(colorAlias).length) {
            addTokens(colorAlias, tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_ALIASES, renamedTokens);
        }
        if (Object.keys(colorComponent).length) {
            addTokens(colorComponent, tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.COLOR_COMPONENT, renamedTokens);
        }
        if (Object.keys(icons).length) {
            addTokens(icons, tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.ICONS, renamedTokens);
        }
        if (Object.keys(typography).length) {
            addTokens(typography, tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.TYPOGRAPHY, renamedTokens);
        }
        if (Object.keys(layout).length) {
            addTokens(layout, tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT, renamedTokens);
        }
        if (Object.keys(layoutComponent).length) {
            addTokens(layoutComponent, tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT_COMPONENT, renamedTokens);
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
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _getUniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getUniqueId */ "./src/operations/getUniqueId.ts");
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


function addUUIDs(studioTokens, studioProblems, spectrumTokens, spectrumProblems, ignored = []) {
    const results = [];
    for (const entry of studioProblems.uuids) {
        if (!(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.ignoreToken)(entry.path, ignored)) {
            const uuid = (0,_getUniqueId__WEBPACK_IMPORTED_MODULE_1__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, entry);
            const currentUUID = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenUUID)(entry);
            if (currentUUID && (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenUUID)(entry) !== uuid) {
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.setTokenDeprecations)(entry, currentUUID);
            }
            (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.setTokenUUID)(entry, uuid);
            studioTokens[uuid] = entry;
            studioProblems.uuids.splice(studioProblems.uuids.indexOf(entry), 1);
            results.push(entry.path.join('.'));
        }
    }
    return results;
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
            if (deprecations) {
                const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(entry);
                if (tokenName) {
                    if (spectrumTokens[deprecations]) {
                        // we found a non-deprecated spectrum-token entry that will
                        // be replaced by a studio token entry - adding it the results
                        // will ensure the spectrum token is properly deprecated due
                        // to a name change
                        result[spectrumTokens[deprecations].name] = tokenName;
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
            let root = result[name];
            for (let i = 0; i < sets.length; ++i) {
                const set = sets[i];
                if (!root.sets) {
                    root.sets = {};
                }
                if (!root.sets[set]) {
                    root.sets[set] = {};
                }
                root = root.sets[set];
            }
            const leaf = root;
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _core_getStudioReference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/getStudioReference */ "./src/core/getStudioReference.ts");
/* harmony import */ var _core_handleNameChanges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/handleNameChanges */ "./src/core/handleNameChanges.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_equivalentValues__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/equivalentValues */ "./src/core/equivalentValues.ts");
/* harmony import */ var _core_schemaStuff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/schemaStuff */ "./src/core/schemaStuff.ts");
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








const COLOR_SET = 'color-set';
const SCALE_SET = 'scale-set';
function createSpectrumTokensEntry(uuid, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    let value = undefined;
    const schema = _config__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPORT_SCHEMAS ? (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_7__.getSchemaFromType)((0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_7__.getSchemaType)(studioTokens[uuid])) : undefined;
    const valueUUID = (0,_core_getStudioReference__WEBPACK_IMPORTED_MODULE_3__["default"])(studioTokens, studioProblems, uuid);
    if (!valueUUID) {
        value = (0,_core_equivalentValues__WEBPACK_IMPORTED_MODULE_6__.equivalentValue)(studioTokens[uuid].value);
    }
    else {
        if (spectrumTokens[valueUUID]) {
            value = (0,_core_handleNameChanges__WEBPACK_IMPORTED_MODULE_4__["default"])('{' + spectrumTokens[valueUUID].name + '}', nameChanges);
        }
        else {
            value = '{' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenSpectrumName)(studioTokens[valueUUID]) + '}';
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
        const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenUUID)(entry);
        if (!uuid)
            throw new Error('ERROR - MISSING UUID FOR: ' + entry.path.join('.'));
        sets[(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getSpectrumTokenSetName)(entry)] = createSpectrumTokensEntry(uuid, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems);
        if (!types.includes(entry.type)) {
            types.push(entry.type);
        }
    }
    if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].SUPPORT_SCHEMAS) {
        const setNames = [];
        for (const entry of entries) {
            const setName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getSpectrumTokenSetName)(entry).toLowerCase();
            if (!setNames.includes(setName)) {
                setNames.push(setName);
            }
        }
        let scaleNames = 0;
        let themeNames = 0;
        for (const setName of setNames) {
            if (_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCALES.includes(setName)) {
                scaleNames++;
            }
            if (_constants__WEBPACK_IMPORTED_MODULE_1__["default"].THEMES.includes(setName)) {
                themeNames++;
            }
        }
        if (scaleNames && !themeNames) {
            schema = _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES[SCALE_SET];
        }
        else if (!scaleNames && themeNames) {
            schema = _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES[COLOR_SET];
        }
        if (!schema) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('WARNING - could not determine schema for set with set names of: ' + setNames);
        }
    }
    return { $schema: schema, sets: sets };
}
function isPartOfSet(entry, studioTokens) {
    // we have an extra check in case we are adding a new token to an existing set
    const path = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenName)(entry);
    for (const compare of Object.values(studioTokens)) {
        if (entry !== compare && path === (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenName)(compare)) {
            return true;
        }
    }
    return false;
}
function formatNewSpectrumTokens(exports, nameChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const collection = {};
    const result = {};
    for (const entry of exports) {
        const name = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenSpectrumName)(entry);
        if (name) {
            if (!collection[name]) {
                collection[name] = [];
            }
            collection[name].push(entry);
        }
        else {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('ERROR - studio token definition missing spectrum token name: ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenName)(entry));
        }
    }
    for (const name of Object.keys(collection)) {
        const tokenData = collection[name];
        if (tokenData.length === 1 && !isPartOfSet(tokenData[0], studioTokens)) {
            const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenUUID)(tokenData[0]);
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

/***/ "./src/operations/getUniqueId.ts":
/*!***************************************!*\
  !*** ./src/operations/getUniqueId.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
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
                (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('tWARNING - COULD NOT COMPARE SET NAMES BECAUSE I DID NOT PROGRAM IN SUPPORT FOR MULTIPLE SETS (fix this): ' + spectrumEntry.name); // !!! haha
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUniqueId);


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
function verifyEntries(entries, checkUUIDs = true, checkValues = true) {
    let value;
    let type;
    let path;
    let token;
    let uuid;
    for (let i = 0; i < entries.length; ++i) {
        const entry = entries[i];
        if (checkValues) {
            if (i === 0 || value === entry.value) {
                value = entry.value;
            }
            else {
                return false;
            }
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
                delete studioProblems.collisions[uuid];
                studioTokens[uuid] = combineEntries(entries);
            }
        }
    }
    // handle tokens that are transitioning from being duplicated to non-duplicated
    for (const uuid of Object.keys(studioProblems.collisions)) {
        const entries = studioProblems.collisions[uuid];
        if (verifyNoDuplicates(entries) || (verifyEntries(entries, true, false) && verifyAllDuplicates(entries))) {
            studioProblems.replace[uuid] = studioProblems.collisions[uuid];
            delete studioProblems.collisions[uuid];
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('READING spectrum-tokens: ' + (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.trimPath)(source));
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
    const studioProblems = { collisions: {}, replace: {}, uuids: [], mismatches: [], values: [], colorOnly: true, metadata: [], usedModes: [], modes: {} };
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('READING   tokens studio: ' + (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.trimPath)(source));
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
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
        else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isObject)(data[key])) {
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
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isObject)(data[key])) {
            changed = changeTokenName(data[key], originalToken, updatedToken, false) || changed;
        }
    }
    return changed;
}
function renameSpectrumTokens(tokensPath, renamedTokens) {
    fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(tokensPath).forEach((file) => {
        if (path__WEBPACK_IMPORTED_MODULE_1___default().extname(file).toLowerCase() === '.json') {
            const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.getFile)(tokensPath + file);
            let changed = false;
            for (const originalToken of Object.keys(renamedTokens)) {
                changed = changeTokenName(data, originalToken, renamedTokens[originalToken]) || changed;
            }
            if (changed) {
                (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.storeFile)(tokensPath + file, data);
            }
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renameSpectrumTokens);


/***/ }),

/***/ "./src/operations/resolveReplacedTokens.ts":
/*!*************************************************!*\
  !*** ./src/operations/resolveReplacedTokens.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _getUniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getUniqueId */ "./src/operations/getUniqueId.ts");
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


function resolveReplacedTokens(studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const result = [];
    for (const uuid of Object.keys(studioProblems.replace)) {
        let baseEntry;
        for (const entry of studioProblems.replace[uuid]) {
            (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.setTokenDuplicated)(entry, false);
            // !!! bad string checks
            if (!baseEntry && entry.path.join('.').indexOf('light') > 0) {
                baseEntry = entry;
            }
            if (!baseEntry && entry.path.join('.').indexOf('desktop') > 0) {
                baseEntry = entry;
            }
        }
        if (!baseEntry) {
            baseEntry = studioProblems.replace[uuid][0];
        }
        for (const entry of studioProblems.replace[uuid]) {
            if (entry === baseEntry) {
                studioTokens[uuid] = entry;
            }
            else {
                const newUUID = (0,_getUniqueId__WEBPACK_IMPORTED_MODULE_1__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, entry);
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.setTokenUUID)(entry, newUUID);
                studioTokens[newUUID] = entry;
                result.push(entry.path.join('.'));
            }
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveReplacedTokens);


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
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
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


function cleanName(name) {
    return name.replaceAll(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].BUSTER, '').replaceAll(' ', '');
}
function updateTokenNameMetadata(studioTokens, studioProblems) {
    const results = {};
    // get name changes
    for (const uuid of Object.keys(studioTokens)) {
        const entry = studioTokens[uuid];
        const name = cleanName(entry.path[entry.path.length - 1]);
        const tokenSpectrumName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(entry);
        if (name !== tokenSpectrumName) {
            if (name && tokenSpectrumName) {
                results[name] = tokenSpectrumName;
            }
            (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenSpectrumName)(entry, name);
        }
    }
    return results;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTokenNameMetadata);


/***/ }),

/***/ "./src/operations/writeStudioTokens.ts":
/*!*********************************************!*\
  !*** ./src/operations/writeStudioTokens.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
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


function writeStudioTokens(studioTokens) {
    for (const uuid of Object.keys(studioTokens)) {
        const entry = studioTokens[uuid];
        for (const file of entry.files) {
            // read file
            const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_0__.getFile)(file, true);
            let changed = false;
            // check... stuff
            {
                const path = entry.path.slice(1);
                let definition = data;
                while (path.length) {
                    const p = path.shift();
                    if (p) {
                        definition = definition[p];
                    }
                }
                if (!definition) {
                    throw new Error('ERROR - failed to find definition for ' + entry.path.join('.'));
                }
                const duplicated = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDuplicated)(entry) ? true : false;
                const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(entry);
                if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(definition) !== uuid) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenUUID)(definition, uuid);
                    changed = true;
                }
                if (tokenName && (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(definition) !== tokenName) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenSpectrumName)(definition, tokenName);
                    changed = true;
                }
                if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDeprecations)(definition) !== (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDeprecations)(entry)) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenDeprecations)(definition, (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDeprecations)(entry));
                    changed = true;
                }
                if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDuplicated)(definition) !== duplicated) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenDuplicated)(definition, duplicated);
                    changed = true;
                }
            }
            // store file
            if (changed) {
                (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_0__.storeFile)(file, data);
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (writeStudioTokens);


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
    const output = [];
    for (const deprecated of changes) {
        output.push(deprecated.token);
    }
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('DEPRECATED TOKENS: (' + output.length + ') ' + output.join(', '));
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
    const output = [];
    for (const token of Object.keys(changes)) {
        output.push(token);
    }
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('RENAMED TOKENS: (' + output.length + ') ' + output.join(', '));
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


function reportNewTokens(tokens, spectrumTokens) {
    const newOnes = [];
    const changedOnes = [];
    for (const token of tokens) {
        const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenUUID)(token);
        if (uuid) {
            const setName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getSpectrumTokenSetName)(token);
            const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(token) + (setName.length ? '/' + setName : '');
            if (tokenName) {
                if (!spectrumTokens[uuid] && !newOnes.includes(tokenName)) {
                    newOnes.push(tokenName);
                }
                else if (spectrumTokens[uuid] && !changedOnes.includes(tokenName)) {
                    changedOnes.push(tokenName);
                }
            }
        }
    }
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('NEW TOKENS: (' + newOnes.length + ') ' + newOnes.join(', '));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('MODIFIED TOKENS: (' + changedOnes.length + ') ' + changedOnes.join(', '));
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
function matchingTypes(studioToken, spectrumToken, unsupportedTypes) {
    const studioType = (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(studioToken);
    const schema = (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_2__.getSchemaFromType)(studioType);
    if (!schema) {
        if (studioType && !unsupportedTypes.includes(studioType)) {
            unsupportedTypes.push(studioType);
        }
        return;
    }
    if (schema !== spectrumToken.schema && spectrumToken.schema) {
        const sourceSchemaName = schema.slice(schema.lastIndexOf('/') + 1);
        const targetSchemeName = spectrumToken.schema.slice(spectrumToken.schema.lastIndexOf('/') + 1);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - MISMATCHED TYPE: ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenName)(studioToken) + ' (' + studioToken.type + ') ' + sourceSchemaName + ' != ' + targetSchemeName);
        return;
    }
    // !!! check the value against the schema definition
}
function reportTypeConflicts(studioTokens, spectrumTokens) {
    const unsupportedTypes = [];
    for (const uuid of Object.keys(studioTokens)) {
        if (spectrumTokens[uuid]) {
            const spectrumType = spectrumTokens[uuid].schema;
            if (spectrumType) {
                matchingTypes(studioTokens[uuid], spectrumTokens[uuid], unsupportedTypes);
            }
        }
    }
    if (unsupportedTypes.length) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - UNSUPPORTED STUDIO TYPES: ' + unsupportedTypes.join(', '));
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
    const tokensChanged = [];
    for (const change of report) {
        tokensChanged.push(change.nameSpectrum);
    }
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('CHANGED VALUES: (' + Object.keys(changes).length + ') ' + tokensChanged.join(', ') + (tokensChanged.length !== Object.keys(allChangedTokens).length ? ' impacting ' + Object.keys(allChangedTokens).length + ' tokens' : ''));
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ1gscURBQXFEO0lBQ3JELDREQUE0RDtJQUM1RCxhQUFhLEVBQUUsb0VBQW9FO0lBRW5GLHFFQUFxRTtJQUNyRSxtRUFBbUU7SUFDbkUsZUFBZSxFQUFFLHlDQUF5QztJQUUxRCx3REFBd0Q7SUFDeEQsbURBQW1EO0lBQ25ELE9BQU8sRUFBRSxLQUFLO0lBRWQsMERBQTBEO0lBQzFELDZEQUE2RDtJQUM3RCxVQUFVLEVBQUUsS0FBSztJQUVqQix1RkFBdUY7SUFFdkYsbUNBQW1DO0lBQ25DLFdBQVcsRUFBRSxTQUFTO0lBRXRCLGtGQUFrRjtJQUNsRixRQUFRLEVBQUUsVUFBVTtJQUVwQixzRUFBc0U7SUFDdEUsY0FBYyxFQUFFLGdCQUFnQjtJQUVoQywwRUFBMEU7SUFDMUUsa0JBQWtCLEVBQUUsb0JBQW9CO0lBRXhDLDBFQUEwRTtJQUMxRSxrQkFBa0IsRUFBRSxvQkFBb0I7SUFFeEMsMEVBQTBFO0lBQzFFLHFCQUFxQixFQUFFLHVCQUF1QjtJQUU5Qyx1RkFBdUY7SUFFdkYsMkVBQTJFO0lBQzNFLGFBQWEsRUFBRSxLQUFLO0lBRXBCLGlEQUFpRDtJQUNqRCxjQUFjLEVBQUUsS0FBSztJQUVyQiwyRUFBMkU7SUFDM0UsOEJBQThCLEVBQUUsSUFBSTtJQUVwQyw2RUFBNkU7SUFDN0UsOEVBQThFO0lBQzlFLHFDQUFxQztJQUNyQyx1QkFBdUIsRUFBRSxJQUFJO0lBRTdCLGlFQUFpRTtJQUNqRSx3RUFBd0U7SUFDeEUsd0JBQXdCLEVBQUUsSUFBSTtJQUc5Qix1RkFBdUY7SUFFdkYsb0ZBQW9GO0lBQ3BGLGNBQWMsRUFBRTtRQUNkLGFBQWEsRUFBRSxvQkFBb0I7UUFDbkMsY0FBYyxFQUFFLDZCQUE2QjtRQUM3QyxhQUFhLEVBQUUsb0JBQW9CO1FBQ25DLGVBQWUsRUFBRSxzQkFBc0I7UUFDdkMsS0FBSyxFQUFFLFlBQVk7UUFDbkIsTUFBTSxFQUFFLGFBQWE7UUFDckIsZ0JBQWdCLEVBQUUsdUJBQXVCO1FBQ3pDLFVBQVUsRUFBRSxpQkFBaUI7S0FDOUI7SUFFRCwrRUFBK0U7SUFDL0UsaUZBQWlGO0lBQ2pGLGdGQUFnRjtJQUNoRixzRUFBc0U7SUFDdEUsa0VBQWtFO0lBQ2xFLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDO0lBRWxELCtGQUErRjtJQUMvRixNQUFNLEVBQUUsVUFBVTtJQUVsQiw2REFBNkQ7SUFDN0QsY0FBYyxFQUFFLElBQUk7SUFFcEIsd0RBQXdEO0lBQ3hELGFBQWEsRUFBRSxJQUFJO0lBRW5CLG9GQUFvRjtJQUNwRixpQkFBaUIsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUN2QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDaEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO1FBQ3RCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUNwQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7UUFDM0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUNwQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDbEIsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO1FBQzdCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztLQUNyQixDQUFDO0lBRUYsMEZBQTBGO0lBQzFGLDhGQUE4RjtJQUM5RixlQUFlLEVBQUUsSUFBSTtJQUNyQixZQUFZLEVBQUU7UUFDWix5Q0FBeUM7UUFDekMsT0FBTyxFQUFFLDZFQUE2RTtRQUN0RixTQUFTLEVBQUUsK0VBQStFO1FBQzFGLFNBQVMsRUFBRSxpRkFBaUY7UUFDNUYsYUFBYSxFQUFFLGlGQUFpRjtRQUNoRyxjQUFjLEVBQUUsaUZBQWlGO1FBQ2pHLFFBQVEsRUFBRSxpRkFBaUY7UUFDM0YsZUFBZSxFQUFFLGlGQUFpRjtRQUNsRyxXQUFXLEVBQUUsaUZBQWlGO1FBQzlGLGFBQWEsRUFBRSxtRkFBbUY7UUFDbEcsYUFBYSxFQUFFLGtGQUFrRjtRQUNqRyxjQUFjLEVBQUUsbUZBQW1GO1FBRW5HLGtFQUFrRTtRQUNsRSx1RkFBdUY7UUFDdkYsT0FBTyxFQUFFLDZFQUE2RTtRQUN0Rix1RkFBdUY7UUFDdkYsNEZBQTRGO1FBQzVGLHFFQUFxRTtRQUNyRSxvRUFBb0U7UUFDcEUsWUFBWSxFQUFFLGtGQUFrRjtRQUNoRyxXQUFXLEVBQUUsaUZBQWlGO1FBQzlGLFlBQVksRUFBRSxrRkFBa0Y7UUFDaEcsZ0JBQWdCLEVBQUUsc0ZBQXNGO1FBRXhHLDRHQUE0RztRQUM1RyxXQUFXLEVBQUUsaUZBQWlGO1FBQzlGLFdBQVcsRUFBRSxpRkFBaUY7S0FDL0Y7Q0FDSixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0SUY7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFNUUsaUVBQWU7SUFDWCxJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDO0lBQ2hDLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztJQUNqRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO0lBRTdCLE1BQU0sRUFBRSxJQUFJO0lBRVosb0RBQW9EO0lBQ3BELFVBQVUsRUFBRSxhQUFzQjtJQUNsQyxpQkFBaUIsRUFBRSxlQUF3QjtJQUMzQyxtQkFBbUIsRUFBRSxpQkFBMEI7SUFDL0Msd0JBQXdCLEVBQUUsTUFBZTtJQUN6Qyx3QkFBd0IsRUFBRSxNQUFlO0lBQ3pDLDZCQUE2QixFQUFFLDBCQUFtQztJQUNsRSw4QkFBOEIsRUFBRSxrQkFBMkI7Q0FDOUQsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Y7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFMUM7QUFFbEMsU0FBUyxlQUFlLENBQUMsS0FBYTtJQUNsQyxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksK0NBQU0sQ0FBQyxpQkFBaUIsRUFBRTtRQUM3QyxJQUFJLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLCtDQUFNLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUN0RixPQUFPLEVBQUUsQ0FBQztTQUNiO0tBQ0o7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDcEQ7SUFFRCxxQkFBcUI7SUFDckIsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDbEMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkI7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxFQUFVLEVBQUUsRUFBVTtJQUNuRCxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksK0NBQU0sQ0FBQyxpQkFBaUIsRUFBRTtRQUMzQyxJQUFJLENBQUMsK0NBQU0sQ0FBQyxjQUFjLEVBQUU7WUFDeEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXRCLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7S0FDSjtJQUVELDBDQUEwQztJQUMxQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUM5RCxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEM7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsS0FBYTtJQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ25DLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDLEdBQXVCLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUVqSCx1Q0FBdUM7SUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFBRTtRQUNuQixDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ1g7SUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNqQixLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDOUQ7U0FBTTtRQUNILEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDbEQ7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGbEQ7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFNUUsMEJBQTBCO0FBRU47QUFDWTtBQUVoQyxJQUFJLFdBQVcsR0FBNkIsRUFBRSxDQUFDO0FBQy9DLElBQUksU0FBUyxHQUF5QixFQUFFLENBQUM7QUFDekMsU0FBUyxPQUFPLENBQUMsSUFBWSxFQUFFLFFBQWlCLEtBQUs7SUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsc0RBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEY7SUFFRCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBWSxFQUFFLElBQVM7SUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFFNUUsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN2QixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzdCLENBQUM7QUFFRCxTQUFTLFVBQVU7SUFDZixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDekMsdURBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN4RSw4Q0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUMxQjtJQUVELFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLENBQUM7QUFFdUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHhDOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBRXhDO0FBR3BDLFNBQVMsZ0JBQWdCLENBQUMsTUFBZ0IsRUFBRSxJQUFVLEVBQUUsSUFBYztJQUNsRSxJQUFJLGtEQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2Q7U0FDSjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENoQzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUd2QztBQUVyQyxTQUFTLG9CQUFvQixDQUFDLGNBQThCLEVBQUUsSUFBVTtJQUNwRSxNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUNsQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxvREFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ2xJLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQzthQUNyQjtTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBRUQsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JwQzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUd2QztBQUNLO0FBRTFDLFNBQVMsa0JBQWtCLENBQUMsWUFBMEIsRUFBRSxjQUE4QixFQUFFLElBQVU7SUFDOUYsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUNsQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxvREFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUM5SixPQUFPLHlEQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUNELEtBQUssTUFBTSxPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDNUQsS0FBSyxNQUFNLEtBQUssSUFBSSxPQUFPLEVBQUU7Z0JBQ3pCLElBQUksb0RBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDOUosT0FBTyx5REFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5QjthQUNKO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFFRCxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeENsQzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUU1RSxTQUFTLGlCQUFpQixDQUFDLEtBQWEsRUFBRSxXQUFvQztJQUMxRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDbEIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUM5RTtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJqQzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUV2QztBQUdyQyxTQUFTLFVBQVUsQ0FBQyxNQUFnQixFQUFFLEtBQWU7SUFDakQsc0JBQXNCO0lBQ3RCLElBQUksTUFBMEIsQ0FBQztJQUMvQixrREFBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUNoQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxLQUF5QixDQUFDO0lBQzlCLGtEQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzlCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLEtBQXlCLENBQUM7SUFDOUIsa0RBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDaEI7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksTUFBTSxFQUFFO1FBQ1IsS0FBSyxNQUFNLEdBQUcsSUFBSSxrREFBUyxDQUFDLE9BQU8sRUFBRTtZQUNqQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtvQkFDaEIsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO3FCQUFNO29CQUNILE1BQU07aUJBQ1Q7YUFDSjtTQUNKO0tBQ0o7SUFFRCxJQUFJLEtBQUssRUFBRTtRQUNQLEtBQUssTUFBTSxJQUFJLElBQUksa0RBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDakMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7b0JBQ2hCLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDSCxNQUFNO2lCQUNUO2FBQ0o7U0FDSjtLQUNKO0lBRUQsSUFBSSxLQUFLLEVBQUU7UUFDUCxLQUFLLE1BQU0sSUFBSSxJQUFJLGtEQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2pDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFO29CQUNoQixPQUFPLEtBQUssQ0FBQztpQkFDaEI7cUJBQU07b0JBQ0gsTUFBTTtpQkFDVDthQUNKO1NBQ0o7S0FDSjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxLQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEUsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RSxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0MsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUYsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLElBQWM7SUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrREFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDeEUsQ0FBQztBQUV3Qzs7Ozs7Ozs7Ozs7Ozs7O0FDL0Z6Qzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUk1RSxTQUFTLGdCQUFnQixDQUFDLGFBQTRCO0lBQ2xELElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDM0IsT0FBTyxHQUFHLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDN0M7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFRCxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCaEM7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFMUM7QUFDUTtBQUVBO0FBRTFDLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQztBQUNoQyxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7QUFDOUIsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO0FBQ2hDLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQztBQUNoQyxNQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztBQUV4QyxTQUFTLGFBQWEsQ0FBQyxXQUF3QjtJQUMzQyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFDLE1BQU0sU0FBUyxHQUFHLHlEQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFMUQsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUM5QixJQUFJLEdBQUcsT0FBTyxDQUFDO0tBQ2xCO0lBRUQsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM3SCxJQUFJLEdBQUcsVUFBVSxDQUFDO0tBQ3JCO0lBRUQsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ2xCLE1BQU0sS0FBSyxHQUFvQixXQUFXLENBQUMsS0FBSyxDQUFDO1FBRWpELElBQUksQ0FBQyxrREFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0RBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xFLElBQUksR0FBRyxTQUFTLENBQUM7U0FDcEI7YUFBTSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0RSxRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDekIsS0FBSyxRQUFRLENBQUM7Z0JBQ2QsS0FBSyxRQUFRO29CQUNULElBQUksR0FBRyxVQUFVLENBQUM7b0JBQ2xCLE1BQU07Z0JBRVYsS0FBSyxXQUFXO29CQUNaLElBQUksR0FBRyxjQUFjLENBQUM7b0JBQ3RCLE1BQU07Z0JBRVY7b0JBQ0ksOENBQUksQ0FBQyxxQ0FBcUMsR0FBRyxTQUFTLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzRjtTQUNKO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxJQUFZO0lBQ25DLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQywrQ0FBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqRCxPQUFPLCtDQUFNLENBQUMsWUFBWSxDQUFtQyxJQUFJLENBQUMsQ0FBQztLQUN0RTtJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekUxQzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUV2QztBQUVMO0FBQ0E7QUFFaEMsU0FBUyxVQUFVLENBQUMsT0FBZSxFQUFFLElBQVksRUFBRSxNQUFnQjtJQUMvRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTdCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3hCLElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUM1RixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBeUIsRUFBRSxJQUFZO0lBQ3hELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxrREFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDcEUsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLElBQVksRUFBRSxTQUFtQixFQUFFLElBQWMsRUFBRSxZQUEwQixFQUFFLGNBQThCLEVBQUUsUUFBNEIsU0FBUyxFQUFFLE9BQTJCLFNBQVM7SUFDOU0saUJBQWlCO0lBQ2pCLFNBQVMsbUJBQW1CLENBQUMsSUFBYyxFQUFFLElBQWM7UUFDdkQsSUFBSSxJQUFJLENBQUMsa0RBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixNQUFNLElBQUksR0FBcUIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELE1BQU0sVUFBVSxHQUFrQixJQUFJLENBQUMsa0RBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUU3RCxNQUFNLFVBQVUsR0FBZ0IsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsa0RBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUMsQ0FBQztZQUVwSSxrREFBa0Q7WUFDbEQsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLGtEQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDdkQsOENBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxrREFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6SCxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM1QztZQUVELG9EQUFvRDtZQUNwRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsa0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO2dCQUN6RCxNQUFNLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxrREFBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ3hFLElBQUkscUJBQXFCLEVBQUU7b0JBQ3ZCLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO3dCQUNsRCxJQUFJLENBQUMsQ0FBQyxrREFBUyxDQUFDLHdCQUFrQyxFQUFFLGtEQUFTLENBQUMsd0JBQWtDLEVBQUUsa0RBQVMsQ0FBQyw2QkFBdUMsRUFBRSxrREFBUyxDQUFDLDhCQUF3QyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFOzRCQUNsTyw4Q0FBSSxDQUFDLHlDQUF5QyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDOzRCQUNoRixjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDNUM7cUJBQ0o7aUJBQ0o7YUFDSjtZQUVELGlEQUFpRDtZQUNqRCxJQUFJLFVBQVUsRUFBRTtnQkFDWixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxDQUFDLGtEQUFTLENBQUMsbUJBQTZCLEVBQUUsa0RBQVMsQ0FBQyxpQkFBMkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTt3QkFDL0csOENBQUksQ0FBQywwQ0FBMEMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDakYsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzVDO2lCQUNKO2FBQ0o7WUFFRCwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsT0FBTzthQUNWO1lBRUQsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLG1EQUFtRDtnQkFDbkQsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3JDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtZQUVELElBQUksY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2pELE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ3hELFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDbkM7U0FDSjthQUFNO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUNsQixJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQzNCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUMxRDtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxTQUFTLG9CQUFvQixDQUFDLEtBQWtCO0lBQzVDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxrREFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXpDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDVCxNQUFNLEdBQUc7WUFDTCxDQUFDLGtEQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBRSxTQUFTO1lBQ3hDLENBQUMsa0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxrREFBUyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsa0RBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLGtEQUFTLENBQUMsNkJBQTZCLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxrREFBUyxDQUFDLDhCQUE4QixDQUFDLEVBQUUsU0FBUyxFQUFDO1NBQ25QLENBQUM7UUFDRixLQUFLLENBQUMsa0RBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDeEM7SUFFRCxJQUFJLE1BQU0sRUFBRTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsa0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sQ0FBQyxrREFBUyxDQUFDLG1CQUFtQixDQUFDLEdBQUc7Z0JBQ3BDLENBQUMsa0RBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFNBQVM7Z0JBQy9DLENBQUMsa0RBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFNBQVM7Z0JBQy9DLENBQUMsa0RBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFLFNBQVM7Z0JBQ3BELENBQUMsa0RBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLFNBQVM7YUFDeEQsQ0FBQztTQUNMO1FBRUQsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsS0FBa0I7SUFDMUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLGtEQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsTUFBTSxtQkFBbUIsR0FBRyxVQUFVLElBQUksVUFBVSxDQUFDLGtEQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGtEQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVJLE9BQU8sbUJBQW1CLElBQUksbUJBQW1CLENBQUMsa0RBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsa0RBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDeEwsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsS0FBa0IsRUFBRSxTQUFrQjtJQUM5RCxNQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxNQUFNLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxrREFBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEUsSUFBSSxtQkFBbUIsRUFBRTtRQUNyQixtQkFBbUIsQ0FBQyxrREFBUyxDQUFDLDZCQUE2QixDQUFDLEdBQUcsU0FBUyxDQUFDO0tBQzVFO0FBQ0wsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEtBQWtCO0lBQ3BDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxrREFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxJQUFJLFVBQVUsQ0FBQyxrREFBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrREFBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1SSxPQUFPLG1CQUFtQixJQUFJLG1CQUFtQixDQUFDLGtEQUFTLENBQUMsd0JBQXdCLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLGtEQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQzlLLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFrQixFQUFFLElBQVk7SUFDbEQsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsTUFBTSxtQkFBbUIsR0FBRyxVQUFVLENBQUMsa0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RFLElBQUksbUJBQW1CLEVBQUU7UUFDckIsbUJBQW1CLENBQUMsa0RBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNsRTtBQUNMLENBQUM7QUFFRCxTQUFTLG9CQUFvQixDQUFDLEtBQWtCO0lBQzVDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxrREFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxJQUFJLFVBQVUsQ0FBQyxrREFBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrREFBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1SSxNQUFNLHdCQUF3QixHQUFHLG1CQUFtQixJQUFJLG1CQUFtQixDQUFDLGtEQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsa0RBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEwsT0FBTyx3QkFBd0IsSUFBSSx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDOUcsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsS0FBa0IsRUFBRSxJQUFZO0lBQzFELE1BQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDLGtEQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RSxJQUFJLG1CQUFtQixFQUFFO1FBQ3JCLG1CQUFtQixDQUFDLGtEQUFTLENBQUMsd0JBQXdCLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDbEU7QUFDTCxDQUFDO0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxLQUFrQjtJQUM1QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsa0RBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxNQUFNLG1CQUFtQixHQUFHLFVBQVUsSUFBSSxVQUFVLENBQUMsa0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsa0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUksT0FBTyxtQkFBbUIsSUFBSSxtQkFBbUIsQ0FBQyxrREFBUyxDQUFDLDhCQUE4QixDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxrREFBUyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUMxTCxDQUFDO0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxLQUFrQixFQUFFLFlBQThCO0lBQzVFLE1BQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDLGtEQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RSxJQUFJLG1CQUFtQixFQUFFO1FBQ3JCLG1CQUFtQixDQUFDLGtEQUFTLENBQUMsOEJBQThCLENBQUMsR0FBRyxZQUFZLENBQUM7S0FDaEY7QUFDTCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsWUFBMEIsRUFBRSxLQUFhO0lBQzVELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUNyQixpQ0FBaUM7UUFDakMsSUFBSSxNQUFNLEdBQXVCLFNBQVMsQ0FBQztRQUMzQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTNDLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDM0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQy9ELElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDM0MsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ3hCO2FBQ0o7U0FDSjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1IsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNsQjthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUM3RTtLQUNKO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEtBQWtCO0lBQ3BDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEtBQWtCO0lBQ3pDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDeEIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUM5RDtTQUFNO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakQ7QUFDTCxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUFrQixFQUFFLEtBQVk7SUFDekQsT0FBTywrQ0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBZSxFQUFFLE9BQWlCO0lBQ25ELCtEQUErRDtJQUMvRCxvREFBb0Q7SUFDcEQsSUFBSSxTQUFTLEdBQWEsRUFBRSxDQUFDO0lBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNsQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN4QixTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1FBQzFCLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxLQUFrQjtJQUMvQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbEMsQ0FBQztBQWtCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UkY7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFeEQ7QUFFVztBQUV1QjtBQUlTO0FBQ0U7QUFFTDtBQUNNO0FBQ1E7QUFDSTtBQUNoQjtBQUNGO0FBQ3dCO0FBQzVCO0FBRW1CO0FBQ1E7QUFFdEM7QUFDa0I7QUFDRjtBQUNnQjtBQUNWO0FBQ1M7QUFDRjtBQUNDO0FBQ047QUFDQTtBQUNOO0FBQ2U7QUFDZDtBQUNBO0FBQ2xCO0FBQzZCO0FBQ0o7QUFDUjtBQUUvRCxJQUFJLHlCQUFpQyxDQUFDO0FBQ3RDLElBQUksdUJBQStCLENBQUM7QUFFcEMsU0FBUyxjQUFjO0lBQ25CLDhGQUE4RjtJQUM5Rix5QkFBeUIsR0FBRyxzREFBWSxDQUFDLCtDQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsdUJBQXVCLEdBQUcsc0RBQVksQ0FBQywrQ0FBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTdELDRDQUE0QztJQUM1QyxJQUFJLENBQUMsb0RBQWEsQ0FBQyxzREFBWSxDQUFDLCtDQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRTtRQUNsRCxtREFBWSxDQUFDLHNEQUFZLENBQUMsK0NBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQ2xEO0lBRUQscUNBQXFDO0lBQ3JDLE1BQU0sRUFBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUMsR0FBRywwRUFBa0IsQ0FBQyx5QkFBeUIsRUFBRSwrQ0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hHLE1BQU0sRUFBQyxZQUFZLEVBQUUsY0FBYyxFQUFDLEdBQUcsOEVBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUVqRix5QkFBeUI7SUFDekIsSUFBSSxjQUFjLENBQUMsU0FBUyxFQUFFO1FBQzFCLDhDQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUM1QztTQUFNO1FBQ0gsOENBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0tBQ2hEO0lBRUQsNkNBQTZDO0lBQzdDLElBQUksVUFBVSxHQUFhLEVBQUUsQ0FBQztJQUU5QixnRkFBZ0Y7SUFDaEYsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDNUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsOEVBQXFCLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0tBQ3pIO0lBRUQsc0ZBQXNGO0lBQ3RGLHlFQUFvQixDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXZELG1EQUFtRDtJQUNuRCwrRUFBMEIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTdDLDRDQUE0QztJQUM1Qyw4RUFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV6Qyw2Q0FBNkM7SUFDN0MsK0VBQXlCLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV0Rix5RUFBeUU7SUFDekUsSUFBSSx3QkFBd0IsR0FBNEIsRUFBRSxDQUFDO0lBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFO1FBQzNCLDJFQUEyRTtRQUMzRSwwRUFBMEU7UUFDMUUsbUNBQW1DO1FBQ25DLHdCQUF3QixHQUFHLGdGQUF1QixDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztLQUNwRjtJQUNELE1BQU0sYUFBYSxHQUFHLHlFQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFckYsMkVBQTJFO0lBQzNFLElBQUksK0NBQU0sQ0FBQyw4QkFBOEIsRUFBRTtRQUN2QyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxpRUFBUSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLCtDQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUM1SDtTQUFNO1FBQ0gsNkVBQXdCLENBQUMsY0FBYyxFQUFFLCtDQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDNUQ7SUFFRCx3QkFBd0I7SUFDeEIsSUFBSSwrQ0FBTSxDQUFDLGVBQWUsRUFBRTtRQUN4Qix5RUFBbUIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDckQ7SUFFRCxzREFBc0Q7SUFDdEQsZ0ZBQTBCLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTNFLHdDQUF3QztJQUN4QyxtRkFBNkIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUU1QywyQkFBMkI7SUFDM0IseUVBQW1CLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUVwRixzQkFBc0I7SUFDdEIsSUFBSSwrQ0FBTSxDQUFDLGNBQWMsRUFBRTtRQUN2QixzRUFBaUIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3JGO0lBRUQsb0JBQW9CO0lBQ3BCLE1BQU0sU0FBUyxHQUFrQixFQUFFLENBQUM7SUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JLLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RILFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILHlCQUF5QjtJQUN6QixJQUFJLGdCQUFnQixHQUFVLEVBQUUsQ0FBQztJQUNqQyxJQUFJLCtDQUFNLENBQUMsd0JBQXdCLEVBQUU7UUFDakMsZ0JBQWdCLEdBQUcsaUZBQXdCLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztLQUMvRztJQUVELHdCQUF3QjtJQUN4QixNQUFNLGNBQWMsR0FBRywwRUFBaUIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBRXZGLGlDQUFpQztJQUNqQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUNuRSxJQUFJLENBQUMsK0NBQU0sQ0FBQyxVQUFVLEVBQUU7WUFDcEIsOENBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDSCw4Q0FBSSxDQUFDLDZEQUE2RCxDQUFDLENBQUM7U0FDdkU7UUFFRCxLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNoQyw4Q0FBSSxDQUFDLG9DQUFvQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsS0FBSyxNQUFNLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7WUFDM0QsOENBQUksQ0FBQyxvQ0FBb0MsR0FBRyxTQUFTLEdBQUcsTUFBTSxHQUFHLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDekc7UUFFRCxJQUFJLCtDQUFNLENBQUMsVUFBVSxFQUFFO1lBQ25CLDhDQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMvQjtLQUNKO0lBRUQsbUNBQW1DO0lBQ25DLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDeEgsSUFBSSxDQUFDLCtDQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3BCLDhDQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0gsOENBQUksQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2xCLHFFQUFlLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNuQyx1RUFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNwQztRQUVELElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ3pCLHlFQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDNUM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3BDLHVFQUFrQixDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDcEU7UUFFRCxJQUFJLCtDQUFNLENBQUMsVUFBVSxFQUFFO1lBQ25CLDhDQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUMvQjtLQUNKO0lBRUQsNkJBQTZCO0lBQzdCLDBFQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRWhDLGtDQUFrQztJQUNsQyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUN6QixJQUFJLCtDQUFNLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsdURBQWdCLENBQUMsc0RBQVksQ0FBQywrQ0FBTSxDQUFDLFdBQVcsR0FBRywrQ0FBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1NBQy9KO0tBQ0o7U0FBTSxJQUFJLCtDQUFNLENBQUMscUJBQXFCLEVBQUU7UUFDckMsSUFBSSxvREFBYSxDQUFDLHNEQUFZLENBQUMsK0NBQU0sQ0FBQyxXQUFXLEdBQUcsK0NBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUU7WUFDaEYsZ0RBQVMsQ0FBQyxzREFBWSxDQUFDLCtDQUFNLENBQUMsV0FBVyxHQUFHLCtDQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1NBQzlFO0tBQ0o7SUFFRCwrQkFBK0I7SUFDL0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUNuQyxJQUFJLCtDQUFNLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsdURBQWdCLENBQUMsc0RBQVksQ0FBQywrQ0FBTSxDQUFDLFdBQVcsR0FBRywrQ0FBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUN6SjtLQUNKO1NBQU0sSUFBSSwrQ0FBTSxDQUFDLGtCQUFrQixFQUFFO1FBQ2xDLElBQUksb0RBQWEsQ0FBQyxzREFBWSxDQUFDLCtDQUFNLENBQUMsV0FBVyxHQUFHLCtDQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFO1lBQzdFLGdEQUFTLENBQUMsc0RBQVksQ0FBQywrQ0FBTSxDQUFDLFdBQVcsR0FBRywrQ0FBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztTQUMzRTtLQUNKO0lBRUQsMENBQTBDO0lBQzFDLElBQUksWUFBWSxHQUFRLEVBQUUsQ0FBQztJQUMzQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7UUFDbEIsWUFBWSxHQUFHLGdGQUF1QixDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNqSSxJQUFJLCtDQUFNLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLHVEQUFnQixDQUFDLHNEQUFZLENBQUMsK0NBQU0sQ0FBQyxXQUFXLEdBQUcsK0NBQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1NBQ3BKO0tBQ0o7U0FBTSxJQUFJLCtDQUFNLENBQUMsY0FBYyxFQUFFO1FBQzlCLElBQUksb0RBQWEsQ0FBQyxzREFBWSxDQUFDLCtDQUFNLENBQUMsV0FBVyxHQUFHLCtDQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRTtZQUN6RSxnREFBUyxDQUFDLHNEQUFZLENBQUMsK0NBQU0sQ0FBQyxXQUFXLEdBQUcsK0NBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO0tBQ0o7SUFFRCw2Q0FBNkM7SUFDN0MsSUFBSSxnQkFBZ0IsR0FBUSxFQUFFLENBQUM7SUFDL0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUNwQyxnQkFBZ0IsR0FBRyxvRkFBMkIsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDOUksSUFBSSwrQ0FBTSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLHVEQUFnQixDQUFDLHNEQUFZLENBQUMsK0NBQU0sQ0FBQyxXQUFXLEdBQUcsK0NBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztTQUM1SjtLQUNKO1NBQU0sSUFBSSwrQ0FBTSxDQUFDLGtCQUFrQixFQUFFO1FBQ2xDLElBQUksb0RBQWEsQ0FBQyxzREFBWSxDQUFDLCtDQUFNLENBQUMsV0FBVyxHQUFHLCtDQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFO1lBQzdFLGdEQUFTLENBQUMsc0RBQVksQ0FBQywrQ0FBTSxDQUFDLFdBQVcsR0FBRywrQ0FBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztTQUMzRTtLQUNKO0lBRUQsNkVBQW9CLENBQUMseUJBQXlCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDL0QsZ0ZBQXVCLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDNUUsMEVBQWlCLENBQUMseUJBQXlCLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzFJLDZFQUFvQixDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFdkcsSUFBSSxDQUFDLCtDQUFNLENBQUMsT0FBTyxFQUFFO1FBQ2pCLDhEQUFVLEVBQUUsQ0FBQztRQUNiLDhDQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUMzQjtTQUFNO1FBQ0gsOENBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQzNCO0FBQ0wsQ0FBQztBQUVELFNBQVMsU0FBUztJQUNkLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLHNDQUFzQztJQUNqRSxNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsQ0FBQyxtQ0FBbUM7SUFDeEUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsMkVBQTJFO0lBQ2pHLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLHVDQUF1QztJQUVqRSxNQUFNLElBQUksR0FBUSxFQUFFLENBQUM7SUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN6QixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pDLFFBQVEsR0FBRyxFQUFFO1lBQ1QsS0FBSyxRQUFRO2dCQUNULCtDQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUVWLEtBQUssYUFBYTtnQkFDZCwrQ0FBTSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLE1BQU07WUFFVixLQUFLLE1BQU07Z0JBQ1AsK0NBQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixNQUFNO1lBRVYsS0FBSyxRQUFRO2dCQUNULCtDQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLDZEQUE2RDtnQkFDMUYsK0NBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsOENBQThDO2dCQUN4RSxNQUFNO1NBQ2I7S0FDSjtBQUNMLENBQUM7QUFFRCxTQUFTLFlBQVk7SUFDakIsdURBQWdCLENBQUMsc0RBQVksQ0FBQywrQ0FBTSxDQUFDLFdBQVcsR0FBRywrQ0FBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGlEQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztBQUNySSxDQUFDO0FBRUQsS0FBSyxVQUFVLElBQUk7SUFDZixJQUFJO1FBQ0EsY0FBYyxFQUFFLENBQUM7S0FDcEI7WUFBUztRQUNOLFlBQVksRUFBRSxDQUFDO0tBQ2xCO0FBQ0wsQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDO0FBQ1osTUFBTSxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVViOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBRTVFLDBCQUEwQixDQUFDLDRCQUE0QjtBQUV4QjtBQUVMO0FBQ0Y7QUFFUztBQUVqQyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDekIsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUV6QixNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7QUFFekIsU0FBUyxJQUFJLENBQUMsR0FBUTtJQUNsQixpREFBaUQ7SUFDakQsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzlFLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0tBQ25CO0lBRUQsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDZixNQUFNLG9CQUFvQixHQUFZLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFbEssSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwRixHQUFHLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNqRDthQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkMsR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEYsR0FBRyxHQUFHLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7U0FDakQ7YUFBTTtZQUNILEdBQUcsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ2pEO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVkLElBQUksQ0FBQywrQ0FBTSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QixzQ0FBc0M7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMvQjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQyxzQ0FBc0M7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDSCxzQ0FBc0M7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FDSjtLQUNKO1NBQU07UUFDSCxJQUFJO1lBQ0EsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4Rix5REFBeUQ7Z0JBQ3pELEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdEM7aUJBQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLG9CQUFvQjtnQkFDcEIsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWix3RUFBd0U7WUFDeEUsNERBQTREO1lBQzVELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQywrQ0FBTSxDQUFDLGFBQWEsRUFBRTtZQUN2QixzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtLQUNKO0FBQ0wsQ0FBQztBQUVELFNBQVMsT0FBTztJQUNaLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELHdCQUF3QjtBQUN4QixTQUFTLE9BQU8sQ0FBQyxFQUFVO0lBQ3ZCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsQ0FBTTtJQUNwQixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0FBQ2pHLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxDQUFNO0lBQ25CLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7QUFDL0YsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLENBQU07SUFDcEIsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxZQUFZLE1BQU0sQ0FBQztBQUN4RCxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsUUFBZ0I7SUFDbEMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLE1BQU0sR0FBRyxxREFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV2RSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQy9CLE1BQU0sR0FBRyxHQUFHLGlEQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaURBQVEsQ0FBQyxDQUFDO1FBQzlELElBQUksR0FBRyxFQUFFO1lBQ0wsa0VBQWtFO1lBQ2xFLHVDQUF1QztZQUN2QyxNQUFNLEdBQUcsZ0RBQVMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNwQztTQUNKO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3BDO0tBQ0o7U0FBTTtRQUNILHVGQUF1RjtRQUN2RiwwREFBMEQ7UUFFMUQsTUFBTSxHQUFHLGdEQUFTLENBQUMsaURBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxpREFBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNwQztLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLElBQVk7SUFDMUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBRWxCLElBQUksK0NBQU0sQ0FBQyxVQUFVLEVBQUU7UUFDbkIsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGlEQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsaURBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUNuRDtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVvRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUpyRjs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUUxQztBQUVRO0FBQ2E7QUFFdkQsU0FBUyxVQUFVLENBQUMsSUFBUyxFQUFFLGFBQXNDO0lBQ2pFLE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUN2QixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRTlDLFNBQVMsZUFBZSxDQUFDLEtBQWE7UUFDbEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkIsS0FBSyxNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFDdkIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbEI7YUFDSjtTQUNKO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRTtZQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFMUMsSUFBSSxNQUFNLEdBQUcsTUFBTSxFQUFFO2dCQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2I7WUFFRCxJQUFJLE1BQU0sR0FBRyxNQUFNLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7WUFFRCxPQUFPLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELEdBQUc7UUFDQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxNQUFNLFdBQVcsSUFBSSxNQUFNLEVBQUU7b0JBQzlCLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzNDO2FBQ0o7aUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pGLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDN0Q7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQjtTQUNKO0tBQ0osUUFBUSxTQUFTLENBQUMsTUFBTSxFQUFFO0lBRTNCLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxNQUFXO0lBQzlCLElBQUksa0RBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25DLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5QjtLQUNKO0FBQ0wsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFZLEVBQUUsYUFBc0M7SUFDaEYsTUFBTSxJQUFJLEdBQUcsMERBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUzQixLQUFLLE1BQU0sU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekMsSUFBSSxNQUEyQixDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQzFFLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7b0JBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEQsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDakI7cUJBQU07b0JBQ0gsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDbEI7YUFDSjtTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDM0UsMkVBQTJFO1lBQzNFLHlEQUF5RDtZQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDakI7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRTtZQUMzRSxNQUFNLGVBQWUsR0FBUSxFQUFFLENBQUM7WUFDaEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO2dCQUM5QyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pEO1lBRUQsSUFBSSxDQUFDLCtDQUFNLENBQUMsdUJBQXVCLEVBQUU7Z0JBQ2pDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDNUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztZQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxlQUFlLENBQUM7WUFDbEMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUVELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCw4Q0FBSSxDQUFDLGdEQUFnRCxHQUFHLFNBQVMsQ0FBQyxDQUFDO1NBQ3RFO0tBQ0o7SUFFRCw0REFBUyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLElBQVM7SUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ3BCO0lBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pDLElBQUksa0RBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNyQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO0tBQ0o7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsSUFBYyxFQUFFLEdBQVc7SUFDM0MsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBRTVCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLElBQVksRUFBRSxJQUFZO0lBQzdDLHdHQUF3RztJQUN4RyxNQUFNLFVBQVUsR0FBRywwREFBTyxDQUFDLElBQUksR0FBRywrQ0FBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRSxNQUFNLGFBQWEsR0FBRywwREFBTyxDQUFDLElBQUksR0FBRywrQ0FBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTdFLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUUvQyxNQUFNLElBQUksR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pELE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFDN0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksR0FBRyxFQUFFO1lBQ0wsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEQ7S0FDSjtJQUVELElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLFVBQWtCLEVBQUUsWUFBMEIsRUFBRSxjQUE4QixFQUFFLGNBQThCLEVBQUUsZ0JBQWtDLEVBQUUsU0FBYyxFQUFFLGFBQXNDO0lBQ2pPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDL0IsTUFBTSxZQUFZLEdBQVEsRUFBRSxDQUFDO1FBQzdCLE1BQU0sVUFBVSxHQUFRLEVBQUUsQ0FBQztRQUMzQixNQUFNLGFBQWEsR0FBUSxFQUFFLENBQUM7UUFDOUIsTUFBTSxjQUFjLEdBQVEsRUFBRSxDQUFDO1FBQy9CLE1BQU0sS0FBSyxHQUFRLEVBQUUsQ0FBQztRQUN0QixNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDdkIsTUFBTSxlQUFlLEdBQVEsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sVUFBVSxHQUFRLEVBQUUsQ0FBQztRQUUzQixLQUFLLE1BQU0sU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUMsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sSUFBSSxHQUFxQixRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFcEQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCw4Q0FBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxTQUFTO2FBQ1o7WUFFRCx1REFBdUQ7WUFDdkQsZ0RBQWdEO1lBQ2hELHdDQUF3QztZQUN4QyxJQUFJLFlBQVksR0FBdUIsU0FBUyxDQUFDO1lBQ2pELEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUNuQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2lCQUN2QjthQUNKO1lBRUQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQywrQ0FBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNuRCxNQUFNLElBQUksR0FBRywwREFBTyxDQUFDLFVBQVUsR0FBRywrQ0FBTSxDQUFDLGNBQWMsQ0FBcUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkcsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkUsUUFBUSwrQ0FBTSxDQUFDLGNBQWMsQ0FBcUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3JFLEtBQUssK0NBQU0sQ0FBQyxjQUFjLENBQUMsYUFBYTs0QkFDcEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQzs0QkFDckMsTUFBTTt3QkFFVixLQUFLLCtDQUFNLENBQUMsY0FBYyxDQUFDLGNBQWM7NEJBQ3JDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7NEJBQ3RDLE1BQU07d0JBRVYsS0FBSywrQ0FBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhOzRCQUNwQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDOzRCQUNuQyxNQUFNO3dCQUVWLEtBQUssK0NBQU0sQ0FBQyxjQUFjLENBQUMsZUFBZTs0QkFDdEMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQzs0QkFDdkMsTUFBTTt3QkFFVixLQUFLLCtDQUFNLENBQUMsY0FBYyxDQUFDLEtBQUs7NEJBQzVCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7NEJBQzlCLE1BQU07d0JBRVYsS0FBSywrQ0FBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNOzRCQUM3QixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDOzRCQUMvQixNQUFNO3dCQUVWLEtBQUssK0NBQU0sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCOzRCQUN2QyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDOzRCQUN4QyxNQUFNO3dCQUVWLEtBQUssK0NBQU0sQ0FBQyxjQUFjLENBQUMsVUFBVTs0QkFDakMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQzs0QkFDbkMsTUFBTTtxQkFDYjtvQkFFRCxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNiLE1BQU07aUJBQ1Q7YUFDSjtZQUVELElBQUksS0FBSyxFQUFFO2dCQUNQLHVEQUF1RDtnQkFDdkQsNkJBQTZCO2dCQUM3QixTQUFTO2FBQ1o7WUFFRCxNQUFNLFdBQVcsR0FBZ0IsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBELE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUUxQixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxjQUFjLENBQUMsU0FBUyxFQUFFO2dCQUMxQiwyQkFBMkI7Z0JBQzNCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDMUIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztpQkFDeEM7cUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNsQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDO2lCQUN6QztxQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQzlCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7aUJBQ2pDO3FCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDbkMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztpQkFDMUM7cUJBQU07b0JBQ0gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztpQkFDdEM7YUFDSjtpQkFBTTtnQkFDSCwrQkFBK0I7Z0JBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDdkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztpQkFDakM7cUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNwQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDO2lCQUN0QztxQkFBTSxJQUFJLGFBQWEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUU7b0JBQzdDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNILGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7aUJBQzNDO2FBQ0o7U0FDSjtRQUVELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFVLEdBQUcsK0NBQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQzVGO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxTQUFTLENBQUMsYUFBYSxFQUFFLFVBQVUsR0FBRywrQ0FBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDOUY7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxHQUFHLCtDQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUMxRjtRQUVELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsU0FBUyxDQUFDLGNBQWMsRUFBRSxVQUFVLEdBQUcsK0NBQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2hHO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMzQixTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsR0FBRywrQ0FBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDN0U7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2hDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxHQUFHLCtDQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN2RjtRQUVELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDNUIsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLEdBQUcsK0NBQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQy9FO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxTQUFTLENBQUMsZUFBZSxFQUFFLFVBQVUsR0FBRywrQ0FBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNsRztLQUNKO0FBQ0wsQ0FBQztBQUVELGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JWakM7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFHcUI7QUFDekQ7QUFFeEMsU0FBUyxRQUFRLENBQUMsWUFBMEIsRUFBRSxjQUE4QixFQUFFLGNBQThCLEVBQUUsZ0JBQWtDLEVBQUUsVUFBb0IsRUFBRTtJQUNwSyxNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFFN0IsS0FBSyxNQUFNLEtBQUssSUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFO1FBQ3RDLElBQUksQ0FBQyw2REFBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDbkMsTUFBTSxJQUFJLEdBQUcsd0RBQVcsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoRyxNQUFNLFdBQVcsR0FBRyw4REFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksV0FBVyxJQUFJLDhEQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUM3QyxzRUFBb0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDNUM7WUFDRCw4REFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUUxQixZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzNCLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXBFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0QztLQUNKO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVELGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0N4Qjs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUdwQjtBQUNEO0FBQ2I7QUFFMUMsU0FBUyxXQUFXLENBQUMsSUFBYyxFQUFFLElBQVUsRUFBRSxLQUFhO0lBQzFELE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztJQUMxQixJQUFJLGtFQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0QjtTQUFNO1FBQ0gsOENBQUksQ0FBQyxtREFBbUQsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNwRTtBQUNMLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFTO0lBQ3pCLElBQUksT0FBTyxHQUFvQyxFQUFFLENBQUM7SUFFbEQsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztLQUN0RDtJQUVELEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQyxJQUFJLGtEQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDckIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7S0FDSjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLG9CQUFvQixDQUFDLFlBQTBCLEVBQUUsY0FBOEIsRUFBRSxjQUE4QixFQUFFLGdCQUFrQyxFQUFFLGFBQWtCO0lBQzVLLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUUxQyxLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtRQUMxQixNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5QyxNQUFNLElBQUksR0FBRywwREFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsNERBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDekI7QUFDTCxDQUFDO0FBRUQsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRHBDOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBRXZDO0FBQzJCO0FBQ25CO0FBQ1c7QUFHeEQsU0FBUyxVQUFVLENBQUMsYUFBNEIsRUFBRSxXQUFxQixFQUFFLFdBQXFCO0lBQzFGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUM1QixPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFO1FBQ2xDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7S0FDSjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxhQUE0QixFQUFFLGNBQThCO0lBQ2pGLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFFaEMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLHNFQUFvQixDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7UUFDOUYsSUFBSSxJQUFJLEVBQUU7WUFDTixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO1NBQy9CO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzRjtLQUNKO0lBRUQsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM3RyxDQUFDO0FBRUQsU0FBUyx3QkFBd0IsQ0FBQyxZQUEwQixFQUFFLGNBQThCLEVBQUUsY0FBOEIsRUFBRSxnQkFBa0M7SUFDNUosTUFBTSxNQUFNLEdBQXNCLEVBQUUsQ0FBQztJQUVyQyx3RUFBd0U7SUFDeEUsTUFBTSxXQUFXLEdBQWEsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sV0FBVyxHQUFhLEVBQUUsQ0FBQztJQUVqQyxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDMUMsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEQsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXhCLEtBQUssTUFBTSxLQUFLLElBQUksa0RBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQy9DLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNCO2FBQ0o7WUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLGtEQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMvQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMzQjthQUNKO1NBQ0o7S0FDSjtJQUVELEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUM1QyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDckcsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLElBQUksZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFFO29CQUM5SyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxrRUFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ3hHO2FBQ0o7aUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSwyREFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsa0VBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ3hHO1NBQ0o7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZ4Qzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUUxQztBQUNHO0FBQ1U7QUFHL0MsU0FBUyxpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsSUFBYyxFQUFFLFNBQW1CLEVBQUUsU0FBbUI7SUFDN0YsSUFBSSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBRTFCLE1BQU0sYUFBYSxHQUFhLEVBQUUsQ0FBQztJQUNuQyxNQUFNLGFBQWEsR0FBYSxFQUFFLENBQUM7SUFFbkMsS0FBSyxNQUFNLEtBQUssSUFBSSxTQUFTLEVBQUU7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtLQUNKO0lBRUQsS0FBSyxNQUFNLEtBQUssSUFBSSxTQUFTLEVBQUU7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtLQUNKO0lBRUQsSUFBSSxhQUFhLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUNuRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUN6QztJQUVELElBQUksYUFBYSxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUU7UUFDbkUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDekM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsWUFBMEIsRUFBRSxjQUE4QjtJQUM3RSxNQUFNLFVBQVUsR0FBYyxFQUFFLENBQUM7SUFFakMsTUFBTSxTQUFTLEdBQWEsRUFBRSxDQUFDO0lBQy9CLE1BQU0sU0FBUyxHQUFhLEVBQUUsQ0FBQztJQUUvQixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDMUMsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksNkRBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLCtDQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekMsU0FBUztTQUNaO1FBRUQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsS0FBSyxNQUFNLEtBQUssSUFBSSxrREFBUyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxNQUFNLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDMUc7U0FDSjtRQUVELEtBQUssTUFBTSxLQUFLLElBQUksa0RBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsTUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzFHO1NBQ0o7UUFFRCxJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7UUFDeEIsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDekI7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLGtEQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdEIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzVCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3pCO2FBQ0o7U0FDSjtRQUVELEtBQUssTUFBTSxLQUFLLElBQUksa0RBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDNUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekI7YUFDSjtTQUNKO0tBQ0o7SUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDeEMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN0RjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQzFCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0tBQ0o7SUFFRCxjQUFjLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsY0FBYyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7QUFDdEMsQ0FBQztBQUVELGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SDdCOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBR2dCO0FBQzVEO0FBRWhDLFNBQVMsZ0JBQWdCLENBQUMsY0FBOEIsRUFBRSxZQUEwQixFQUFFLGNBQThCO0lBQ2hILE1BQU0sTUFBTSxHQUE0QixFQUFFLENBQUM7SUFFM0MsNkVBQTZFO0lBQzdFLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUMxQyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsTUFBTSxTQUFTLEdBQUcsc0VBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsSUFBSSxTQUFTLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzlFLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQzlDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQiw4Q0FBSSxDQUFDLHNEQUFzRCxHQUFHLDhEQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN0RjtLQUNKO0lBRUQsNkdBQTZHO0lBQzdHLDBGQUEwRjtJQUMxRixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsTUFBTSxZQUFZLEdBQUcsc0VBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsTUFBTSxTQUFTLEdBQUcsc0VBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLElBQUksU0FBUyxFQUFFO29CQUNYLElBQUksY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO3dCQUM5QiwyREFBMkQ7d0JBQzNELDhEQUE4RDt3QkFDOUQsNERBQTREO3dCQUM1RCxtQkFBbUI7d0JBQ25CLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO3FCQUN6RDtpQkFDSjthQUNKO1NBQ0o7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURoQzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUUxQztBQUcwQjtBQUNJO0FBQ1I7QUFDMEI7QUFDbEQ7QUFFaEMsU0FBUyxxQkFBcUIsQ0FBQyxFQUFVLEVBQUUsRUFBVTtJQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDNUgsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUN0QixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFNUMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUN6QixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7S0FDSjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLFlBQTBCLEVBQUUsY0FBOEIsRUFBRSxjQUE4QjtJQUNqSCxNQUFNLE9BQU8sR0FBMEIsRUFBRSxDQUFDO0lBRTFDLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsU0FBUztTQUNaO1FBRUQsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDdkIscUNBQXFDO1lBQ3JDLE1BQU0sZUFBZSxHQUFHLG9FQUFrQixDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDbEIsOENBQUksQ0FBQyxrQ0FBa0MsR0FBRyxVQUFVLEdBQUcsTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25HLFNBQVM7YUFDWjtZQUVELHVDQUF1QztZQUN2QyxNQUFNLGlCQUFpQixHQUFHLHNFQUFvQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVyRSx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLENBQUMsaUJBQWlCLElBQUksaUJBQWlCLEtBQUssZUFBZSxDQUFDLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUNsRyxNQUFNLGFBQWEsR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ3ZFLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxhQUFhLEVBQUU7b0JBQzlDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUM7aUJBQ2pDO2FBQ0o7aUJBQU0sSUFBSSxDQUFDLENBQUMsaUJBQWlCLElBQUksaUJBQWlCLEtBQUssZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsc0VBQW9CLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ25GO1NBQ0o7YUFBTSxJQUFJLENBQUMsK0NBQU0sQ0FBQyxjQUFjLElBQUksVUFBVSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsK0NBQU0sQ0FBQyxjQUFjLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUNsTCxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLCtFQUF1QixDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyx1RUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQy9DO1NBQ0o7S0FDSjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmpDOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBRXJCO0FBRUM7QUFFeEQsU0FBUyxTQUFTLENBQUMsSUFBYyxFQUFFLElBQWM7SUFDN0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ2xDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM3QyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCO0lBRUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQzFCO0FBQ0wsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLElBQWMsRUFBRSxLQUFhLEVBQUUsSUFBVTtJQUM3RCxNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFFNUIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUN0QyxJQUFJLGtFQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ3hDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDM0I7U0FDSjthQUFNLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUM1QyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNCO0tBQ0o7QUFDTCxDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxjQUE4QixFQUFFLGdCQUFrQyxFQUFFLGdCQUFtQztJQUNwSSxLQUFLLE1BQU0sS0FBSyxJQUFJLGdCQUFnQixFQUFFO1FBQ2xDLE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdDLE1BQU0sSUFBSSxHQUFHLDBEQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0IsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5Qyw0REFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN6QjtBQUNMLENBQUM7QUFFRCxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFdkM7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFHbEI7QUFFMUQsU0FBUywyQkFBMkIsQ0FBQyxPQUE4QixFQUFFLFdBQW9DLEVBQUUsWUFBMEIsRUFBRSxjQUE4QixFQUFFLGNBQThCLEVBQUUsZ0JBQWtDO0lBQ3JPLE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUV2QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDckMsTUFBTSxLQUFLLEdBQUcsbUVBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVELE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkMsTUFBTSxJQUFJLEdBQWEsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDNUI7YUFBTTtZQUNILElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDWixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztpQkFDbEI7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUN2QjtnQkFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6QjtZQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELGlFQUFlLDJCQUEyQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEM0M7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFMUM7QUFDRztBQUV3RTtBQUNqRDtBQUNGO0FBQzFCO0FBQ3lCO0FBQ1k7QUFFckUsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBQzlCLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUU5QixTQUFTLHlCQUF5QixDQUFDLElBQVUsRUFBRSxXQUFvQyxFQUFFLFlBQTBCLEVBQUUsY0FBOEIsRUFBRSxjQUE4QixFQUFFLGdCQUFrQztJQUMvTSxJQUFJLEtBQUssR0FBdUIsU0FBUyxDQUFDO0lBQzFDLE1BQU0sTUFBTSxHQUF1QiwrQ0FBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsb0VBQWlCLENBQUMsZ0VBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFFN0gsTUFBTSxTQUFTLEdBQUcsb0VBQWtCLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ1osS0FBSyxHQUFHLHVFQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JEO1NBQU07UUFDSCxJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMzQixLQUFLLEdBQUcsbUVBQWlCLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RGO2FBQU07WUFDSCxLQUFLLEdBQUcsR0FBRyxHQUFHLHNFQUFvQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUNyRTtLQUNKO0lBRUQsK0RBQStEO0lBRS9ELElBQUksTUFBTSxFQUFFO1FBQ1IsT0FBTyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7S0FDdEQ7U0FBTTtRQUNILE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUNyQztBQUNMLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLE9BQXNCLEVBQUUsV0FBb0MsRUFBRSxZQUEwQixFQUFFLGNBQThCLEVBQUUsY0FBOEIsRUFBRSxnQkFBa0M7SUFDck4sTUFBTSxJQUFJLEdBQVEsRUFBRSxDQUFDO0lBQ3JCLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUMzQixJQUFJLE1BQU0sR0FBdUIsU0FBUyxDQUFDO0lBRTNDLEtBQUssTUFBTSxLQUFLLElBQUksT0FBTyxFQUFFO1FBQ3pCLE1BQU0sSUFBSSxHQUFHLDhEQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLHlFQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcseUJBQXlCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BKLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtLQUNKO0lBRUQsSUFBSSwrQ0FBTSxDQUFDLGVBQWUsRUFBRTtRQUN4QixNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsS0FBSyxNQUFNLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDekIsTUFBTSxPQUFPLEdBQUcseUVBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUI7U0FDSjtRQUVELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFbkIsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDNUIsSUFBSSxrREFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3BDLFVBQVUsRUFBRSxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxrREFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3BDLFVBQVUsRUFBRSxDQUFDO2FBQ2hCO1NBQ0o7UUFFRCxJQUFJLFVBQVUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMzQixNQUFNLEdBQUcsK0NBQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7YUFBTSxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsRUFBRTtZQUNsQyxNQUFNLEdBQUcsK0NBQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsOENBQUksQ0FBQyxrRUFBa0UsR0FBRyxRQUFRLENBQUMsQ0FBQztTQUN2RjtLQUNKO0lBRUQsT0FBTyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFrQixFQUFFLFlBQTBCO0lBQy9ELDhFQUE4RTtJQUM5RSxNQUFNLElBQUksR0FBRyw4REFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLEtBQUssTUFBTSxPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUMvQyxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLDhEQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckQsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQVMsdUJBQXVCLENBQUMsT0FBc0IsRUFBRSxXQUFvQyxFQUFFLFlBQTBCLEVBQUUsY0FBOEIsRUFBRSxjQUE4QixFQUFFLGdCQUFrQztJQUN6TixNQUFNLFVBQVUsR0FBbUMsRUFBRSxDQUFDO0lBQ3RELE1BQU0sTUFBTSxHQUF5QixFQUFFLENBQUM7SUFFeEMsS0FBSyxNQUFNLEtBQUssSUFBSSxPQUFPLEVBQUU7UUFDekIsTUFBTSxJQUFJLEdBQUcsc0VBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO1lBRUQsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0gsOENBQUksQ0FBQywrREFBK0QsR0FBRyw4REFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDL0Y7S0FDSjtJQUVELEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUN4QyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDcEUsTUFBTSxJQUFJLEdBQUcsOERBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkYsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLHlCQUF5QixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUMvSDthQUFNO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUM5SDtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEp2Qzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUVoRDtBQUd5RTtBQUNyRTtBQUVoQyxTQUFTLFdBQVcsQ0FBQyxZQUEwQixFQUFFLGNBQThCLEVBQUUsY0FBOEIsRUFBRSxnQkFBa0MsRUFBRSxXQUF3QjtJQUN6SyxJQUFJLElBQXNCLENBQUM7SUFFM0IsS0FBSyxNQUFNLGFBQWEsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7UUFDaEQsSUFBSSxvRUFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxzRUFBb0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQzdGLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQzFCLE1BQU07U0FDVDtLQUNKO0lBRUQsS0FBSyxNQUFNLGFBQWEsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3BFLElBQUksQ0FBQyxvRUFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxzRUFBb0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQzlGLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUsseUVBQXVCLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ25HLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUMxQixNQUFNO2FBQ1Q7aUJBQU0sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3RDLDhDQUFJLENBQUMsNEdBQTRHLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVzthQUN2SjtTQUNKO0tBQ0o7SUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1AsR0FBRztZQUNDLElBQUksR0FBRyx3REFBaUIsRUFBRSxDQUFDO1NBQzlCLFFBQVEsQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtLQUN6STtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckQzQjs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUVrQztBQUU5RTtBQUVoQyxTQUFTLGNBQWMsQ0FBQyxJQUFjO0lBQ2xDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsT0FBc0IsRUFBRSxhQUFzQixJQUFJLEVBQUUsY0FBdUIsSUFBSTtJQUNsRyxJQUFJLEtBQXlCLENBQUM7SUFDOUIsSUFBSSxJQUF3QixDQUFDO0lBQzdCLElBQUksSUFBd0IsQ0FBQztJQUM3QixJQUFJLEtBQXlCLENBQUM7SUFDOUIsSUFBSSxJQUF3QixDQUFDO0lBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ3JDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6QixJQUFJLFdBQVcsRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTtZQUNoQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztTQUNyQjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNaLE1BQU0sQ0FBQyxHQUFHLDhEQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksR0FBRyxDQUFDLENBQUM7YUFDWjtpQkFBTTtnQkFDSCxPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBRUQsTUFBTSxDQUFDLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNaO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE1BQU0sQ0FBQyxHQUFHLHNFQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDYjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLG9FQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsT0FBc0I7SUFDL0MsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLEtBQUssTUFBTSxLQUFLLElBQUksT0FBTyxFQUFFO1FBQ3pCLElBQUksQ0FBQyxvRUFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QixhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0tBQ0o7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxPQUFzQjtJQUM5QyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDeEIsS0FBSyxNQUFNLEtBQUssSUFBSSxPQUFPLEVBQUU7UUFDekIsSUFBSSxvRUFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0tBQ0o7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN4QixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsT0FBc0I7SUFDMUMsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQ3pCLEtBQUssTUFBTSxLQUFLLElBQUksT0FBTyxFQUFFO1FBQ3pCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQztJQUVELGdCQUFnQjtJQUNoQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsS0FBSyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLG9FQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVoQyxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyxzQkFBc0IsQ0FBQyxZQUEwQixFQUFFLGNBQThCO0lBQ3RGLDREQUE0RDtJQUM1RCwyREFBMkQ7SUFDM0QsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUN2RCxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoRDtTQUNKO0tBQ0o7SUFFRCwrRUFBK0U7SUFDL0UsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUN2RCxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhELElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO1lBQ3RHLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUM7S0FDSjtJQUVELGlEQUFpRDtJQUNqRCxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzdCLE1BQU0sU0FBUyxHQUFrQixFQUFFLENBQUM7UUFFcEMsTUFBTSxXQUFXLEdBQW1DLEVBQUUsQ0FBQztRQUN2RCxLQUFLLE1BQU0sS0FBSyxJQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUU7WUFDdEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDMUI7WUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3pDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNsRSxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JEO2lCQUFNO2dCQUNILEtBQUssTUFBTSxLQUFLLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQyxvRUFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3pCO2FBQ0o7U0FDSjtRQUVELGNBQWMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0tBQ3BDO0lBRUQsNkVBQTZFO0lBQzdFLE1BQU0sVUFBVSxHQUFvQyxFQUFFLENBQUM7SUFDdkQsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzFDLE1BQU0sSUFBSSxHQUFHLHNFQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNOLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDN0M7S0FDSjtJQUVELHNGQUFzRjtJQUN0Riw4Q0FBOEM7SUFFOUMsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3pDLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMvRCxxRkFBcUY7Z0JBQ3JGLDhDQUFJLENBQUMsMkNBQTJDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQ3JHLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxLQUFLLE1BQU0sYUFBYSxJQUFJLE9BQU8sRUFBRTtvQkFDakMsTUFBTSxJQUFJLEdBQUcsOERBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDekMsSUFBSSxJQUFJO3dCQUFFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN2QzthQUNKO2lCQUFNLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2hFLHlFQUF5RTtnQkFDekUsb0VBQW9FO2dCQUNwRSxpREFBaUQ7Z0JBQ2pELElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDL0IsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ25ELEtBQUssTUFBTSxhQUFhLElBQUksT0FBTyxFQUFFO3dCQUNqQyxNQUFNLElBQUksR0FBRyw4REFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLElBQUk7NEJBQUUsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3ZDO2lCQUNKO2FBQ0o7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQUVELGlFQUFlLHNCQUFzQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck50Qzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUV4RDtBQUNJO0FBRWE7QUFFZTtBQUNSO0FBRTVDLFNBQVMsV0FBVyxDQUFDLGVBQXlCLEVBQUUsSUFBVTtJQUN0RCxTQUFTLFFBQVEsQ0FBQyxNQUFnQixFQUFFLElBQVUsRUFBRSxJQUFjO1FBQzFELElBQUksa0RBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUN0QixPQUFPLElBQUksQ0FBQzthQUNmO1lBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7b0JBQ25DLE9BQU8sSUFBSSxDQUFDO2lCQUNmO3FCQUFNO29CQUNILElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDZDthQUNKO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBSSxJQUFJLEdBQWEsRUFBRSxDQUFDO0lBRXhCLElBQUksZUFBZSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDL0IsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDekM7SUFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDO0lBRTVDLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxJQUFZLEVBQUUsTUFBc0IsRUFBRSxRQUEwQixFQUFFLEtBQWUsRUFBRSxNQUEwQixFQUFFLElBQVksRUFBRSxlQUF5QixFQUFFLGFBQXNCLEtBQUs7SUFDdk0sTUFBTSxJQUFJLEdBQVMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBRTFCLE1BQU0sWUFBWSxHQUFHLFVBQVUsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQztJQUM3RCxNQUFNLGVBQWUsR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlEQUFpRDtJQUVySCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFcEUsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO1FBQ2YsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQyw4Q0FBSSxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDL0IsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztnQkFDcE0sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFFRCxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDthQUFNLElBQUksWUFBWSxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQztTQUMvSTthQUFNO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7U0FDekk7S0FDSjtTQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQzdDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCw4Q0FBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JDO0tBQ0o7SUFFRCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEMsSUFBSSxrREFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksTUFBTSxJQUFJLGtEQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssTUFBTTtnQkFBRSxTQUFTO1lBQzFFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDdEc7S0FDSjtBQUNMLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLElBQVksRUFBRSxNQUFzQixFQUFFLFFBQTBCLEVBQUUsSUFBYyxFQUFFLE1BQWM7SUFDekgsS0FBSyxNQUFNLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLElBQUksa0RBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtZQUMzQixjQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDL0Y7S0FDSjtBQUNMLENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLE1BQWMsRUFBRSxNQUFjO0lBQ3RELE1BQU0sY0FBYyxHQUFtQixFQUFFLENBQUM7SUFDMUMsTUFBTSxnQkFBZ0IsR0FBcUIsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFFbEcsOENBQUksQ0FBQywyQkFBMkIsR0FBRyxrREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFckQscURBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNwQyxJQUFJLG1EQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQzlDLE1BQU0sSUFBSSxHQUFHLDBEQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3BDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0RjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxFQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0FBQzlDLENBQUM7QUFFRCxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hsQzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUV4RDtBQUNJO0FBRWtCO0FBQ1E7QUFHYjtBQUNPO0FBQ2tCO0FBQ3JCO0FBRXpDLFNBQVMsY0FBYyxDQUFDLE1BQWMsRUFBRSxTQUFtQixFQUFFO0lBQ3pELHFEQUFjLENBQUMsTUFBTSxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDdkQsSUFBSSxrREFBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUMxQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxpREFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3BEO2FBQU0sSUFBSSxtREFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLElBQUksb0RBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ3pHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsTUFBYyxFQUFFLElBQVk7SUFDOUMsTUFBTSxTQUFTLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGlEQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsU0FBUyxDQUFDLElBQUksQ0FBQyxvREFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRTdDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFjO0lBQ3BDLE1BQU0sWUFBWSxHQUFpQixFQUFFLENBQUM7SUFDdEMsTUFBTSxjQUFjLEdBQW1CLEVBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUVySyw4Q0FBSSxDQUFDLDJCQUEyQixHQUFHLGtEQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVyRCxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDcEMsTUFBTSxTQUFTLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGlEQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsU0FBUyxDQUFDLElBQUksQ0FBQyxvREFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sSUFBSSxHQUFHLDBEQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsZ0VBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV2RixJQUNJLENBQUMsa0RBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUN0QixvREFDYSxDQUFDLElBQUksQ0FBQzthQUNkLFdBQVcsRUFBRTthQUNiLFNBQVMsQ0FBQyxDQUFDLEVBQUUsb0RBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsbURBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FDNUUsRUFDSDtZQUNFLGNBQWMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxtRUFBc0IsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyx1REFBdUQ7SUFDN0csdURBQWEsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyw4Q0FBOEM7SUFFM0YsT0FBTyxFQUFDLFlBQVksRUFBRSxjQUFjLEVBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRXhEOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBRXhEO0FBQ0k7QUFFWTtBQUNtQjtBQUV2RCxTQUFTLGlCQUFpQixDQUFDLElBQVMsRUFBRSxTQUFpQjtJQUNuRCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDakMsSUFBSSxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUNyQzthQUFNLElBQUksa0RBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM1QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDM0M7S0FDSjtBQUNMLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxJQUFTLEVBQUUsYUFBcUIsRUFBRSxZQUFvQixFQUFFLE9BQWdCLElBQUk7SUFDakcsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBRXBCLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ25ELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLE1BQU0saUJBQWlCLEdBQXlCLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBRW5FLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQy9DLElBQUksR0FBRyxLQUFLLFlBQVksRUFBRTtnQkFDdEIsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEQ7U0FDSjtRQUVELGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxpQkFBaUIsQ0FBQztRQUN4QyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ2xCO0lBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pDLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLGFBQWEsR0FBRyxHQUFHLEVBQUU7WUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxJQUFJLGtEQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDckIsT0FBTyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUM7U0FDdkY7S0FDSjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFTLG9CQUFvQixDQUFDLFVBQWtCLEVBQUUsYUFBc0M7SUFDcEYscURBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN4QyxJQUFJLG1EQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQzlDLE1BQU0sSUFBSSxHQUFHLDBEQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztZQUVwQixLQUFLLE1BQU0sYUFBYSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3BELE9BQU8sR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUM7YUFDM0Y7WUFFRCxJQUFJLE9BQU8sRUFBRTtnQkFDVCw0REFBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDdEM7U0FDSjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELGlFQUFlLG9CQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25GcEM7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFUjtBQUU1QjtBQUV4QyxTQUFTLHFCQUFxQixDQUFDLFlBQTBCLEVBQUUsY0FBOEIsRUFBRSxjQUE4QixFQUFFLGdCQUFrQztJQUN6SixNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFFNUIsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNwRCxJQUFJLFNBQWtDLENBQUM7UUFFdkMsS0FBSyxNQUFNLEtBQUssSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlDLG9FQUFrQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVqQyx3QkFBd0I7WUFDeEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN6RCxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBRUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMzRCxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1NBQ0o7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUNyQixZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNILE1BQU0sT0FBTyxHQUFHLHdEQUFXLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ25HLDhEQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckM7U0FDSjtLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELGlFQUFlLHFCQUFxQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEckM7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFdkM7QUFDeUM7QUFHOUUsU0FBUyxTQUFTLENBQUMsSUFBWTtJQUMzQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsa0RBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxZQUEwQixFQUFFLGNBQThCO0lBQ3ZGLE1BQU0sT0FBTyxHQUE0QixFQUFFLENBQUM7SUFFNUMsbUJBQW1CO0lBQ25CLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUMxQyxNQUFNLEtBQUssR0FBZ0IsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxpQkFBaUIsR0FBRyxzRUFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxJQUFJLElBQUksS0FBSyxpQkFBaUIsRUFBRTtZQUM1QixJQUFJLElBQUksSUFBSSxpQkFBaUIsRUFBRTtnQkFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLGlCQUFpQixDQUFDO2FBQ3JDO1lBRUQsc0VBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0tBQ0o7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0N2Qzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUVyQjtBQUN1STtBQUc5TCxTQUFTLGlCQUFpQixDQUFDLFlBQTBCO0lBQ2pELEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUMxQyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQzVCLFlBQVk7WUFDWixNQUFNLElBQUksR0FBRywwREFBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFFcEIsaUJBQWlCO1lBQ2pCO2dCQUNJLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBRXRCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsRUFBRTt3QkFDSCxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM5QjtpQkFDSjtnQkFFRCxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDcEY7Z0JBRUQsTUFBTSxVQUFVLEdBQUcsb0VBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUM1RCxNQUFNLFNBQVMsR0FBRyxzRUFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFOUMsSUFBSSw4REFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDbkMsOERBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQ2xCO2dCQUVELElBQUksU0FBUyxJQUFJLHNFQUFvQixDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDN0Qsc0VBQW9CLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUM1QyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUNsQjtnQkFFRCxJQUFJLHNFQUFvQixDQUFDLFVBQVUsQ0FBQyxLQUFLLHNFQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNsRSxzRUFBb0IsQ0FBQyxVQUFVLEVBQUUsc0VBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDOUQsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDbEI7Z0JBRUQsSUFBSSxvRUFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxVQUFVLEVBQUU7b0JBQy9DLG9FQUFrQixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDM0MsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDbEI7YUFDSjtZQUVELGFBQWE7WUFDYixJQUFJLE9BQU8sRUFBRTtnQkFDVCw0REFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN6QjtTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBRUQsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RWpDOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBRTVDO0FBR2hDLFNBQVMsc0JBQXNCLENBQUMsT0FBMEI7SUFDdEQsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLEtBQUssTUFBTSxVQUFVLElBQUksT0FBTyxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDO0lBQ0QsOENBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUUsQ0FBQztBQUVELGlFQUFlLHNCQUFzQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnRDOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBR3BCO0FBQ1g7QUFDYjtBQUVoQyxTQUFTLDBCQUEwQixDQUFDLFlBQTBCLEVBQUUsY0FBOEIsRUFBRSxnQkFBa0M7SUFDOUgsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDbkIsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJEQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyRSw4Q0FBSSxDQUFDLDhDQUE4QyxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsa0VBQWdCLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDeEssY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekQsT0FBTyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUM7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQUVELGlFQUFlLDBCQUEwQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25DMUM7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFdkM7QUFFTDtBQUVoQyxTQUFTLG1CQUFtQixDQUFDLElBQVksRUFBRSxNQUFnQixFQUFFLFNBQW1CLEVBQUUsSUFBYztJQUM1RixNQUFNLGFBQWEsR0FBYSxFQUFFLENBQUM7SUFFbkMsS0FBSyxNQUFNLEtBQUssSUFBSSxTQUFTLEVBQUU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ25FLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7S0FDSjtJQUVELElBQUksYUFBYSxDQUFDLE1BQU07UUFBRSw4Q0FBSSxDQUFDLHlEQUF5RCxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzVJLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLElBQVksRUFBRSxNQUFnQixFQUFFLFNBQW1CLEVBQUUsSUFBYztJQUM1RixNQUFNLGFBQWEsR0FBYSxFQUFFLENBQUM7SUFFbkMsS0FBSyxNQUFNLEtBQUssSUFBSSxTQUFTLEVBQUU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ25FLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7S0FDSjtJQUVELElBQUksYUFBYSxDQUFDLE1BQU07UUFBRSw4Q0FBSSxDQUFDLHlEQUF5RCxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzVJLENBQUM7QUFFRCxTQUFTLHlCQUF5QixDQUFDLGNBQThCLEVBQUUsZ0JBQWtDLEVBQUUsT0FBaUIsRUFBRTtJQUN0SCxNQUFNLFVBQVUsR0FBOEIsRUFBRSxDQUFDO0lBRWpELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUMvQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QixVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUMvQjtZQUVELEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN2QyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEM7YUFDSjtTQUNKO0tBQ0o7SUFFRCxNQUFNLFNBQVMsR0FBYSxFQUFFLENBQUM7SUFDL0IsTUFBTSxTQUFTLEdBQWEsRUFBRSxDQUFDO0lBRS9CLEtBQUssTUFBTSxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUM3QyxLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDcEIsS0FBSyxNQUFNLEtBQUssSUFBSSxrREFBUyxDQUFDLE1BQU0sRUFBRTtvQkFDbEMsSUFBSSxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDN0MsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDekI7aUJBQ0o7Z0JBRUQsS0FBSyxNQUFNLEtBQUssSUFBSSxrREFBUyxDQUFDLE1BQU0sRUFBRTtvQkFDbEMsSUFBSSxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDN0MsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDekI7aUJBQ0o7YUFDSjtTQUNKO0tBQ0o7SUFFRCxLQUFLLE1BQU0sU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDN0MsTUFBTSxXQUFXLEdBQWEsRUFBRSxDQUFDO1FBQ2pDLE1BQU0sV0FBVyxHQUFhLEVBQUUsQ0FBQztRQUVqQyxLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDcEIsS0FBSyxNQUFNLEtBQUssSUFBSSxrREFBUyxDQUFDLE1BQU0sRUFBRTtvQkFDbEMsSUFBSSxHQUFHLEtBQUssS0FBSyxFQUFFO3dCQUNmLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzNCO2lCQUNKO2dCQUVELEtBQUssTUFBTSxLQUFLLElBQUksa0RBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQ2xDLElBQUksR0FBRyxLQUFLLEtBQUssRUFBRTt3QkFDZixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMzQjtpQkFDSjthQUNKO1NBQ0o7UUFFRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQy9ELG1CQUFtQixDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRTtLQUNKO0FBQ0wsQ0FBQztBQUVELGlFQUFlLHlCQUF5QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakh6Qzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUU1RSwwQkFBMEI7QUFFTTtBQUdoQyxTQUFTLDBCQUEwQixDQUFDLGdCQUFrQztJQUNsRSxLQUFLLE1BQU0sTUFBTSxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRTtRQUN6Qyw4Q0FBSSxDQUFDLDhDQUE4QyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3RjtBQUNMLENBQUM7QUFFRCxpRUFBZSwwQkFBMEIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCMUM7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFLNUM7QUFFaEMsU0FBUyx3QkFBd0IsQ0FBQyxjQUE4QjtJQUM1RCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xELDhDQUFJLENBQUMsK0NBQStDLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BIO0FBQ0wsQ0FBQztBQUVELGlFQUFlLHdCQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCeEM7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFcEI7QUFDeEI7QUFHaEMsU0FBUyw2QkFBNkIsQ0FBQyxZQUEwQjtJQUM3RCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDMUMsTUFBTSxTQUFTLEdBQUcsc0VBQW9CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLDhDQUFJLENBQUMsb0VBQW9FLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsSDtLQUNKO0FBQ0wsQ0FBQztBQUVELGlFQUFlLDZCQUE2QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CN0M7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFN0I7QUFDZjtBQUdoQyxTQUFTLHdCQUF3QixDQUFDLGNBQThCLEVBQUUsT0FBaUI7SUFDL0UsS0FBSyxNQUFNLE1BQU0sSUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFO1FBQ3ZDLElBQUksQ0FBQyw2REFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDcEMseUNBQXlDO1lBQ3pDLDhDQUFJLENBQUMsNENBQTRDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5RTtLQUNKO0FBQ0wsQ0FBQztBQUVELGlFQUFlLHdCQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ4Qzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUU1QztBQUVoQyxTQUFTLGlCQUFpQixDQUFDLE9BQWdDO0lBQ3ZELE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtJQUNELDhDQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFFRCxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmpDOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBRW1CO0FBQy9EO0FBR2hDLFNBQVMsZUFBZSxDQUFDLE1BQXFCLEVBQUUsY0FBOEI7SUFDMUUsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO0lBQzdCLE1BQU0sV0FBVyxHQUFhLEVBQUUsQ0FBQztJQUNqQyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtRQUN4QixNQUFNLElBQUksR0FBRyw4REFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxFQUFFO1lBQ04sTUFBTSxPQUFPLEdBQUcseUVBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsTUFBTSxTQUFTLEdBQUcsc0VBQW9CLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0RixJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDM0I7cUJBQU0sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUNqRSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUMvQjthQUNKO1NBQ0o7S0FDSjtJQUNELDhDQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSw4Q0FBSSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNwRixDQUFDO0FBRUQsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUMvQjs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUV0QjtBQUVqQjtBQUNMO0FBQ3dCO0FBRXhELFNBQVMsV0FBVyxDQUFDLElBQWM7SUFDL0IsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDcEIsSUFBSSxrREFBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsWUFBMEIsRUFBRSxjQUE4QixFQUFFLGNBQThCLEVBQUUsZ0JBQWtDO0lBQ3ZKLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUM1QyxNQUFNLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLElBQUksYUFBYSxJQUFJLFdBQVcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxvRUFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEksOENBQUksQ0FBQyw0Q0FBNEMsR0FBRyxhQUFhLENBQUMsSUFBSSxHQUFHLGtFQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDN0c7S0FDSjtBQUNMLENBQUM7QUFFRCxpRUFBZSxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDbkM7Ozs7Ozs7Ozs7Ozs7Ozs0RUFlNEU7QUFFNUM7QUFHaEMsU0FBUyxhQUFhLENBQUMsTUFBcUMsRUFBRSxRQUEyQztJQUNyRyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUV4QyxLQUFLLE1BQU0sT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3RELE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDO0tBQzVCO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsWUFBMEIsRUFBRSxjQUE4QixFQUFFLGNBQThCLEVBQUUsZ0JBQWtDO0lBQ3JKLDhDQUFJLENBQUMsMEJBQTBCLEdBQUcsYUFBYSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDbkYsOENBQUksQ0FBQywwQkFBMEIsR0FBRyxhQUFhLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDbkYsQ0FBQztBQUVELGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ2pDOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBRzVCO0FBQ2hCO0FBQ3FDO0FBRXJFLGlEQUFpRDtBQUVqRCxTQUFTLGFBQWEsQ0FBQyxXQUF3QixFQUFFLGFBQTRCLEVBQUUsZ0JBQTBCO0lBQ3JHLE1BQU0sVUFBVSxHQUFHLGdFQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsTUFBTSxNQUFNLEdBQUcsb0VBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFN0MsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNULElBQUksVUFBVSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RELGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU87S0FDVjtJQUVELElBQUksTUFBTSxLQUFLLGFBQWEsQ0FBQyxNQUFNLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtRQUN6RCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9GLDhDQUFJLENBQUMsNkJBQTZCLEdBQUcsOERBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsTUFBTSxHQUFHLGdCQUFnQixDQUFDLENBQUM7UUFDaEosT0FBTztLQUNWO0lBRUQsb0RBQW9EO0FBQ3hELENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLFlBQTBCLEVBQUUsY0FBOEI7SUFDbkYsTUFBTSxnQkFBZ0IsR0FBYSxFQUFFLENBQUM7SUFFdEMsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUM3RTtTQUNKO0tBQ0o7SUFFRCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtRQUN6Qiw4Q0FBSSxDQUFDLHNDQUFzQyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzlFO0FBQ0wsQ0FBQztBQUVELGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOURuQzs7Ozs7Ozs7Ozs7Ozs7OzRFQWU0RTtBQUU1RSwwQkFBMEI7QUFFTTtBQUdoQyxTQUFTLDRCQUE0QixDQUFDLElBQVksRUFBRSxPQUFzQjtJQUN0RSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFYixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdEIsR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyw4QkFBOEIsQ0FBQyxJQUFZLEVBQUUsT0FBd0I7SUFDMUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBRWIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3RCLEdBQUcsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsY0FBOEIsRUFBRSxnQkFBa0M7SUFDNUYsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDekQsOENBQUksQ0FBQywwQ0FBMEMsR0FBRyxTQUFTLEdBQUcsR0FBRyxHQUFHLDRCQUE0QixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2SixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDM0QsOENBQUksQ0FBQyw0Q0FBNEMsR0FBRyxTQUFTLEdBQUcsR0FBRyxHQUFHLDhCQUE4QixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdKLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELGlFQUFlLG9CQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRHBDOzs7Ozs7Ozs7Ozs7Ozs7NEVBZTRFO0FBRzVDO0FBRVc7QUFDYTtBQUl4RCxTQUFTLHVCQUF1QixDQUFDLGNBQThCLEVBQUUsSUFBVSxFQUFFLFNBQW1CLEVBQUU7SUFDOUYsTUFBTSxPQUFPLEdBQWUsRUFBRSxDQUFDO0lBQy9CLE1BQU0sYUFBYSxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUU1RCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvRCxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQzVDLElBQUkseURBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLGFBQWEsRUFBRTtZQUM3RixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQzVGO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxjQUE4QixFQUFFLFVBQXNCLEVBQUUsU0FBZ0MsRUFBRTtJQUNoSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLGtFQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBSUQsU0FBUyxrQkFBa0IsQ0FBQyxZQUEwQixFQUFFLGNBQThCLEVBQUUsT0FBOEI7SUFDbEgsTUFBTSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUUvQixNQUFNLGdCQUFnQixHQUFRLEVBQUUsQ0FBQztJQUVqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2xDLE1BQU0sU0FBUyxHQUFjLEVBQUUsQ0FBQztRQUNoQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixTQUFTLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELFNBQVMsQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxrRUFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RixTQUFTLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakQsU0FBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUVuRCxNQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsdUJBQXVCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUVsQyxLQUFLLE1BQU0sWUFBWSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2xELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDdkQ7U0FDSjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLGFBQWEsR0FBYSxFQUFFLENBQUM7SUFDbkMsS0FBSyxNQUFNLE1BQU0sSUFBSSxNQUFNLEVBQUU7UUFDekIsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDM0M7SUFFRCw4Q0FBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeE8sQ0FBQztBQUVELGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7OztBQ3RGbEM7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQztBQUNNO0FBSXBCOztBQUV4QixPQUFPLDBDQUEwQyxFQUFFLHVEQUFhOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdEQUFnRCxvREFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZUFBZTtBQUMxRDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxlQUFlO0FBQ3pEO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0RBQVU7QUFDcEI7O0FBRUE7QUFDQSxVQUFVLG9EQUFVLGVBQWUsb0RBQVU7QUFDN0M7O0FBRUEsU0FBUyxvREFBVSxZQUFZLG9EQUFVO0FBQ3pDOztBQUVBO0FBQ0EsNkNBQTZDLG9EQUFVO0FBQ3ZEOztBQUVBLFFBQVEsb0RBQVU7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0Esa0dBQWtHLG9EQUFVO0FBQzVHO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0Esb0dBQW9HLG9EQUFVO0FBQzlHO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsbUJBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtEQUFnQjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZFQUE4QjtBQUN6Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ08saUNBQWlDLDJDQUEyQzs7QUFhNUM7O0FBS3JDOztBQUVGLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hPckI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBOztBQUVBLHFEQUFxRCxjQUFjOztBQUVuRSxzREFBc0QsYUFBYSxFQUFFLEVBQUUsS0FBSzs7QUFFNUUsb0VBQW9FLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSzs7QUFFMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVPO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0IscUJBQXFCLFNBQVM7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLEVBQUUsU0FBUyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOU5TO0FBQ1Y7QUFDRTs7QUFFM0I7QUFDQTtBQUNBLHVFQUF1RSw4Q0FBWTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sS0FBSyxFQUFFLHlDQUFPOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsZ0NBQWdDLElBQUk7QUFDekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSyxrREFBZ0I7QUFDckI7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxHQUFHO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTyxpREFBaUQ7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLE9BQU8sNENBQVUsSUFBSTtBQUNuRCw4QkFBOEIsT0FBTyw0Q0FBVSxJQUFJO0FBQ25EOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7OztVQ3JMN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBLHNHQUFzRztXQUN0RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDaEVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vY29uZmlnLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL2NvcmUvZXF1aXZhbGVudFZhbHVlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvY29yZS9maWxlQ2FjaGluZy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvY29yZS9maW5kQnJhbmNoQnlVVUlELnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9jb3JlL2dldFNwZWN0cnVtUmVmZXJlbmNlLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9jb3JlL2dldFN0dWRpb1JlZmVyZW5jZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvY29yZS9oYW5kbGVOYW1lQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvY29yZS9oZWxwZXJzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9jb3JlL3ByaW50YWJsZVNldE5hbWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL2NvcmUvc2NoZW1hU3R1ZmYudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL2NvcmUvdG9rZW5TdHVmZi50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvZGlmZi50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvaGVscGVycy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9hZGRTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9hZGRVVUlEcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9jaGFuZ2VTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9jaGVja0ZvckRlcHJlY2F0ZWRUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tNb2Rlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9jaGVja05hbWVDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9vcGVyYXRpb25zL2NoZWNrVmFsdWVDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9vcGVyYXRpb25zL2RlcHJlY2F0ZVNwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9vcGVyYXRpb25zL2Zvcm1hdENoYW5nZWRTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9mb3JtYXROZXdTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9nZXRVbmlxdWVJZC50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9wcm9jZXNzU3R1ZGlvVG9rZW5EYXRhLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9vcGVyYXRpb25zL3JlYWRTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy9yZWFkU3R1ZGlvVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9vcGVyYXRpb25zL3JlbmFtZVNwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9vcGVyYXRpb25zL3Jlc29sdmVSZXBsYWNlZFRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy91cGRhdGVUb2tlbk5hbWVNZXRhZGF0YS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvb3BlcmF0aW9ucy93cml0ZVN0dWRpb1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnREZWxldGVkVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydERlcHJlY2F0ZWRUb2tlblVzYWdlLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTcGVjdHJ1bVNldHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1NwZWN0cnVtVVVJRHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1N0dWRpb01vZGVzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTdHVkaW9Ub2tlbk5hbWVzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTdHVkaW9VVUlEcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnROYW1lQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnROZXdUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmLy4vc3JjL3JlcG9ydHMvcmVwb3J0T3RoZXJQcm9ibGVtcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnRUb2tlbkNvdW50cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9zcmMvcmVwb3J0cy9yZXBvcnRUeXBlQ29uZmxpY3RzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydFVVSURDb2xsaXNpb25zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL3NyYy9yZXBvcnRzL3JlcG9ydFZhbHVlQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImNyeXB0b1wiIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6b3NcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6cHJvY2Vzc1wiIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTp0dHlcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdmVuZG9yL2Fuc2ktc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdmVuZG9yL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1kaWZmL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLWRpZmYvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tZGlmZi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=