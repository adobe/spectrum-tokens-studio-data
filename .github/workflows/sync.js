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
/* harmony export */   SPECTRUM1: () => (/* binding */ SPECTRUM1),
/* harmony export */   SPECTRUM2: () => (/* binding */ SPECTRUM2),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/constants */ "./src/constants.ts");

const SPECTRUM1 = '../spectrum-tokens-studio-data/src/tokens-studio/spectrum';
const SPECTRUM2 = '../spectrum-tokens-studio-data/src/tokens-studio/spectrum2';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // TOKENS_STUDIO: path to the tokens studio json file
    //                override with command line option -source=
    TOKENS_STUDIO: SPECTRUM2,
    SPECTRUM: {
        [_src_constants__WEBPACK_IMPORTED_MODULE_0__["default"].S1]: SPECTRUM1,
        [_src_constants__WEBPACK_IMPORTED_MODULE_0__["default"].S2]: SPECTRUM2
    },
    // TOKENS_STUDIO_DATA_SETS: the data sets we're loading and what is in them, more or less
    // the color/layout is what we'll use to differentiate how the data should be handled in terms
    // of target files and schemas in spectrum-tokens and some token name handling conventions
    TOKENS_STUDIO_DATA_SETS: { [_src_constants__WEBPACK_IMPORTED_MODULE_0__["default"].COLOR]: '-colors', [_src_constants__WEBPACK_IMPORTED_MODULE_0__["default"].LAYOUT]: '-non-colors', [_src_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EVERYTHING]: '' },
    // TOKENS_SPECTRUM: path to the spectrum-tokens source json directory
    //                  override with command line option -destination=
    TOKENS_SPECTRUM: '../spectrum-tokens/packages/tokens/src/',
    // TESTING: whether changes are written to the repo data
    //          override with command line option -test
    TESTING: false,
    // AUTOMATION: whether this is running as a github action,
    //             in which case we may curtail the cout messages
    AUTOMATION: false,
    // REVERSE: try flowing the data the opposite direction
    REVERSE: false,
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
    // whether or not we say a spectrum definition that doesn't exist
    // in tokens studio implies that the spectrum token should be deprecated
    CHECK_FOR_DELETED_TOKENS: true,
    // whether or not to write the duplicated token metadata
    DISABLE_TOKEN_DUPLICATION_METADATA: true,
    ///////////////////////////////////////////////////////////////////////////////////////
    // when checking names, we treat color mode set as having their spectrum token name
    // in metadata (otherwise it is the tokens studio entry name), with the exception of
    // these specific token studio groups
    TREAT_AS_TOKENNAMES: ['opacity.alias', 'opacity.component'],
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
    // limits the scope of this script to the specified system ex. 'spectrum', 'express', undefined
    SYSTEM: 'spectrum',
    // whether or not token value checks should be case sensitive
    CASE_SENSITIVE: true,
    // whether em values are equivalent to percentage values
    EM_IS_PERCENT: true,
    // we need to do some number <-> string conversion on floating points, and we need to cap precision
    PRECISION: 8,
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
        "fontfamilies": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/font-family.json",
        "boxshadow": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/drop-shadow.json",
        "typography": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/typography.json",
        "lineheights": {
            "NUMBER": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/multiplier.json",
            "STRING": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/dimension.json",
        },
        // derived - not native to tokens studio by we can figure them out
        //         - an empty schema string ("") will cause the sync script to ignore
        //           schema related issues for this type (which we may want when introducing
        //           a new type and we don't have the schema in spectrum-tokens, yet)
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
        "text-align": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/text-align.json",
        "gradient-stop": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/gradient-stop.json",
        // set schemas - we don't detect/compare/test these, but we use them when changing/adding to spectrum-tokens
        "color-set": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/color-set.json",
        "scale-set": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/scale-set.json",
        "system-set": "https://opensource.adobe.com/spectrum-tokens/schemas/token-types/system-set.json"
    }
});


/***/ }),

/***/ "./src/compositeTypes.ts":
/*!*******************************!*\
  !*** ./src/compositeTypes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPOSITE_TYPES: () => (/* binding */ COMPOSITE_TYPES),
/* harmony export */   "default": () => (/* binding */ isComposite),
/* harmony export */   isDropShadow: () => (/* binding */ isDropShadow),
/* harmony export */   isTypography: () => (/* binding */ isTypography)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2025 Adobe
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


const COMPOSITE_TYPES = [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].BOXSHADOW, 'typography'];
function isDropShadow(value) {
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(value))
        return false;
    const REQUIRED = ['x', 'y', 'blur', 'spread', 'color'];
    for (const check of REQUIRED) {
        if (value[check] === undefined)
            return false;
    }
    for (const check of Object.keys(value)) {
        if (!REQUIRED.includes(check) && check !== 'type')
            return false;
    }
    return true;
}
function isTypography(value) {
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(value))
        return false;
    const REQUIRED = ['fontFamily', 'fontWeight', 'fontSize', 'lineHeight', 'letterSpacing'];
    for (const check of REQUIRED) {
        if (value[check] === undefined)
            return false;
    }
    for (const check of Object.keys(value)) {
        if (!REQUIRED.includes(check) && check !== 'type')
            return false;
    }
    return true;
}
function isComposite(value) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) && (isDropShadow(value) || isTypography(value));
}


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
    DESCRIPTION: 'description',
    COLOR: 'color',
    LAYOUT: 'layout',
    EVERYTHING: 'everything',
    SYSTEMS: ['spectrum', 'express'],
    THEMES: ['light', 'dark', 'darkest', 'wireframe'],
    SCALES: ['desktop', 'mobile'],
    LIGHT: 'light',
    DESKTOP: 'desktop',
    WIREFRAME: 'wireframe',
    SCHEMA: '$schema',
    SETS: 'sets',
    COMPONENT: 'component',
    BOXSHADOW: 'boxShadow',
    DEPRECATED: 'deprecated',
    DEPRECATED_COMMENT: 'deprecated_comment',
    BUSTER: '🚫',
    S1: 'spectrum',
    S2: 'spectrum2',
    FOUNDATION: 'foundations',
    STYLE_REGULAR: 'regular',
    STYLE_NORMAL: 'normal',
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

/***/ "./src/core/fileCaching.ts":
/*!*********************************!*\
  !*** ./src/core/fileCaching.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFile: () => (/* binding */ getFile),
/* harmony export */   getFileUncached: () => (/* binding */ getFileUncached),
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
function getFile(name) {
    if (!FILECACHE[name]) {
        FILECACHE[name] = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(name, { encoding: 'utf8', flag: 'r' }));
    }
    return FILECACHE[name];
}
function getFileUncached(name) {
    return JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(name, { encoding: 'utf8', flag: 'r' }));
}
function storeFile(name, data) {
    if (!FILECACHE[name])
        throw new Error('ERROR - FILE NOT LOADED INTO CACHE');
    FILECACHE[name] = data;
    FILECHANGED[name] = true;
}
function writeFiles() {
    for (const file of Object.keys(FILECHANGED)) {
        const source = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file, { encoding: 'utf8', flag: 'r' });
        const destination = JSON.stringify(FILECACHE[file], null, 2);
        if (source.trim() !== destination.trim()) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(file, destination);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WROTE: ' + (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.trimPath)(file));
        }
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

/***/ "./src/core/getBranchUUID.ts":
/*!***********************************!*\
  !*** ./src/core/getBranchUUID.ts ***!
  \***********************************/
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
 * Copyright 2024 Adobe
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

function getBranchUUID(spectrumProblems, uuid) {
    for (const branchUUID in spectrumProblems.branches) {
        const branch = spectrumProblems.branches[branchUUID];
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assert)(branch.sets);
        // does this branch have the studio token in it's child sets?
        for (const set in branch.sets) {
            const setToken = branch.sets[set];
            if (setToken.uuid === uuid) {
                return branchUUID;
            }
        }
    }
    return undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBranchUUID);


/***/ }),

/***/ "./src/core/getEquivalentSpectrumReferences.ts":
/*!*****************************************************!*\
  !*** ./src/core/getEquivalentSpectrumReferences.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/core/helpers.ts");
/* harmony import */ var _tokenStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _compositeTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compositeTypes */ "./src/compositeTypes.ts");
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




function equivalentReferenceUUID(path, value, studioTokens) {
    if (value[0] === '{') {
        for (const entry of Object.values(studioTokens)) {
            const entryName = (0,_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenName)(entry).toLowerCase();
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.filterPath)(path.join('/').split('/'), entry.path.join('/').split('/')) && entryName === value.replace('{', '').replace('}', '').toLowerCase()) {
                return (0,_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenUUID)(entry);
            }
        }
        throw new Error('equivalentReferenceUUID: failed to resolve token alias ' + value);
    }
}
function equivalentStringReference(source, value, studioTokens) {
    const uuid = equivalentReferenceUUID(source, value, studioTokens);
    if (uuid) {
        return '{' + (0,_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenSpectrumName)(studioTokens[uuid]) + '}';
    }
    return value;
}
function getEquivalentSpectrumReferences(source, value, studioTokens) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
        return equivalentStringReference(source, value, studioTokens);
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
        const result = [];
        for (const input of value) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_compositeTypes__WEBPACK_IMPORTED_MODULE_3__["default"])(input));
            result.push(getEquivalentSpectrumReferences(source, input, studioTokens));
        }
        return result;
    }
    else if ((0,_compositeTypes__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
        const result = {};
        for (const key in value) {
            const input = value[key];
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(input));
            result[key] = getEquivalentSpectrumReferences(source, input, studioTokens);
        }
        return result;
    }
    else {
        throw new Error('getEquivalentSpectrumReferences - UNHANDLED VALUE TYPE FOR: ' + source.join('.'));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEquivalentSpectrumReferences);


/***/ }),

/***/ "./src/core/getEquivalentSpectrumValue.ts":
/*!************************************************!*\
  !*** ./src/core/getEquivalentSpectrumValue.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _compositeTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compositeTypes */ "./src/compositeTypes.ts");
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
function trimZeros(value) {
    const decimal = value.indexOf('.');
    if (decimal >= 0) {
        while (value[value.length - 1] === '0' && value.length > decimal + 1) {
            value = value.slice(0, -1);
        }
    }
    return value;
}
function equivalentStringSpectrumValue(source, value, type = undefined) {
    // convert font style...
    if (source.includes('default-font-style') && value.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_1__["default"].STYLE_REGULAR) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__["default"].STYLE_NORMAL;
    }
    // adding px to dropshadow values...
    if (type === _constants__WEBPACK_IMPORTED_MODULE_1__["default"].BOXSHADOW) {
        if (!isNaN(Number(value))) {
            return value + 'px';
        }
    }
    // convert some random property values to their spectrum equivalent
    for (const [c1, c2] of _config__WEBPACK_IMPORTED_MODULE_0__["default"].EQUIVALENT_VALUES) {
        if (c2 === value || (!_config__WEBPACK_IMPORTED_MODULE_0__["default"].CASE_SENSITIVE && c2.toLowerCase() === value.toLowerCase())) {
            return c1;
        }
    }
    // convert percent to em
    if (value[value.length - 1] === '%') {
        if (source.join('.').toLowerCase().indexOf('opacity') >= 0) {
            return trimZeros((parseInt(value) / 100).toFixed(2));
        }
        else if (source.join('.').toLowerCase().indexOf('typography') >= 0) {
            return (parseInt(value) / 100).toFixed(2) + 'em';
        }
        else {
            return value;
        }
    }
    // convert hex to rgb
    if (value.length && value[0] === '#') {
        return toRGB(value);
    }
    return value;
}
function sortValueKeys(keys) {
    const ORDER = ['x', 'y', 'blur', 'spread', 'color'];
    const IGNORE = ['type'];
    const result = [];
    keys.sort((a, b) => {
        if (a === b) {
            return 0;
        }
        if (ORDER.indexOf(a) >= 0 && ORDER.indexOf(b) >= 0) {
            return ORDER.indexOf(a) < ORDER.indexOf(b) ? -1 : 1;
        }
        if (ORDER.indexOf(a) >= 0 && ORDER.indexOf(b) === -1) {
            return -1;
        }
        if (ORDER.indexOf(b) >= 0 && ORDER.indexOf(a) === -1) {
            return 1;
        }
        return a < b ? -1 : 1;
    });
    for (const key of keys) {
        if (!IGNORE.includes(key)) {
            result.push(key);
        }
    }
    return result;
}
function getEquivalentSpectrumValue(source, value, type = undefined) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(value)) {
        return equivalentStringSpectrumValue(source, value, type);
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
        const result = [];
        for (const input of value) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_compositeTypes__WEBPACK_IMPORTED_MODULE_3__["default"])(input));
            result.push(getEquivalentSpectrumValue(source, input, type));
        }
        return result;
    }
    else if ((0,_compositeTypes__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
        const result = {};
        for (const key of sortValueKeys(Object.keys(value))) {
            const input = value[key];
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(input));
            result[key] = getEquivalentSpectrumValue(source, input, type);
        }
        return result;
    }
    else {
        throw new Error('getEquivalentSpectrumValue - UNHANDLED VALUE TYPE FOR: ' + (type ? '(' + type + ')' : '') + ' ' + source.join('.') + '\n' + JSON.stringify(value, null, 2));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEquivalentSpectrumValue);


/***/ }),

/***/ "./src/core/getSpectrumValue.ts":
/*!**************************************!*\
  !*** ./src/core/getSpectrumValue.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getEquivalentSpectrumValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEquivalentSpectrumValue */ "./src/core/getEquivalentSpectrumValue.ts");
/* harmony import */ var _getEquivalentSpectrumReferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getEquivalentSpectrumReferences */ "./src/core/getEquivalentSpectrumReferences.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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


function getSpectrumValue(uuid, studioTokens) {
    const studioPath = studioTokens[uuid].path;
    const spectrumValue = (0,_getEquivalentSpectrumValue__WEBPACK_IMPORTED_MODULE_0__["default"])(studioPath, studioTokens[uuid].value, studioTokens[uuid].type);
    return (0,_getEquivalentSpectrumReferences__WEBPACK_IMPORTED_MODULE_1__["default"])(studioPath, spectrumValue, studioTokens);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSpectrumValue);


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
/* harmony import */ var _operations_checkValueChanges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operations/checkValueChanges */ "./src/operations/checkValueChanges.ts");
/* harmony import */ var _tokenStuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenStuff */ "./src/core/tokenStuff.ts");
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
const RATIO = 'ratio';
const DIMENSION = 'dimension';
const TYPOGRAPHY = 'typography';
const GRADIENT_STOP = 'gradient-stop';
const FONT_STYLE = 'font-style';
const TEXT_TRANSFORM = 'text-transform';
const TEXT_ALIGN = 'text-align';
function getSchemaType(studioToken) {
    let type = studioToken.type.toLowerCase();
    const tokenName = (0,_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenName)(studioToken).toLowerCase();
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(studioToken.value) && studioToken.value[0] === '{') {
        type = 'alias';
    }
    if (tokenName.indexOf('-' + MULTIPLIER) > 0 && (tokenName.indexOf('-' + MULTIPLIER + '-') > 0 || tokenName.indexOf('-' + MULTIPLIER) === tokenName.length - MULTIPLIER.length - 1)) {
        type = MULTIPLIER;
    }
    if (tokenName.indexOf('-' + RATIO) > 0 && (tokenName.indexOf('-' + RATIO + '-') > 0 || tokenName.indexOf('-' + RATIO) === tokenName.length - RATIO.length - 1)) {
        type = MULTIPLIER;
    }
    const checkName = tokenName.split('.').slice(-1).join();
    switch (checkName) {
        case 'time-field-minimum-width':
            type = MULTIPLIER;
            break;
    }
    if (type === 'number' && (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(studioToken.value)) {
        const valueAsNumber = parseFloat(studioToken.value);
        if (!isNaN(valueAsNumber) && valueAsNumber <= 1 && valueAsNumber >= 0) {
            if (studioToken.path.join('.').toLowerCase().includes(GRADIENT_STOP)) {
                type = GRADIENT_STOP;
            }
            else {
                type = MULTIPLIER;
            }
        }
    }
    if (type === 'text' && (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(studioToken.value)) {
        const value = studioToken.value;
        if (studioToken.path.join('.').toLowerCase().includes(TYPOGRAPHY)) {
            switch (value.toLowerCase()) {
                case 'regular':
                case 'normal':
                case 'italic':
                    type = FONT_STYLE;
                    break;
                default:
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - TYPE IS UNHANDLED STRING: ' + tokenName + ' = ' + studioToken.value);
            }
        }
    }
    if (type === 'other' && (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(studioToken.value)) {
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
                case 'start':
                case 'center':
                case 'end':
                    type = TEXT_ALIGN;
                    break;
                default:
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - TYPE IS UNHANDLED OTHER: ' + tokenName + ' = ' + studioToken.value);
            }
        }
    }
    return type;
}
function getSchemaFromType(type, studioToken) {
    if (Object.keys(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES).includes(type)) {
        const result = _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES[type];
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(result)) {
            return result;
        }
        else {
            const valueType = (0,_operations_checkValueChanges__WEBPACK_IMPORTED_MODULE_2__.getValueType)(studioToken);
            if (valueType && Object.keys(result).includes(valueType)) {
                return result[valueType];
            }
        }
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
/* harmony export */   cleanName: () => (/* binding */ cleanName),
/* harmony export */   combineTokenEntries: () => (/* binding */ combineTokenEntries),
/* harmony export */   getCleanedPath: () => (/* binding */ getCleanedPath),
/* harmony export */   getSets: () => (/* binding */ getSets),
/* harmony export */   getSpectrumTokenSetName: () => (/* binding */ getSpectrumTokenSetName),
/* harmony export */   getTokenDeprecations: () => (/* binding */ getTokenDeprecations),
/* harmony export */   getTokenDuplicated: () => (/* binding */ getTokenDuplicated),
/* harmony export */   getTokenName: () => (/* binding */ getTokenName),
/* harmony export */   getTokenSpectrumName: () => (/* binding */ getTokenSpectrumName),
/* harmony export */   getTokenStyles: () => (/* binding */ getTokenStyles),
/* harmony export */   getTokenUUID: () => (/* binding */ getTokenUUID),
/* harmony export */   getTypeKey: () => (/* binding */ getTypeKey),
/* harmony export */   getValidSpectrumTokenSets: () => (/* binding */ getValidSpectrumTokenSets),
/* harmony export */   getValueKey: () => (/* binding */ getValueKey),
/* harmony export */   isColorSet: () => (/* binding */ isColorSet),
/* harmony export */   setTokenDeprecations: () => (/* binding */ setTokenDeprecations),
/* harmony export */   setTokenDuplicated: () => (/* binding */ setTokenDuplicated),
/* harmony export */   setTokenSpectrumName: () => (/* binding */ setTokenSpectrumName),
/* harmony export */   setTokenUUID: () => (/* binding */ setTokenUUID),
/* harmony export */   verifyTokenAliases: () => (/* binding */ verifyTokenAliases)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
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
    return theme ? filterName(theme, name, _constants__WEBPACK_IMPORTED_MODULE_2__["default"].THEMES) : true;
}
function getValueKey(data) {
    let valueKey;
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(data)) {
        if (data[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALUE]) {
            valueKey = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALUE;
        }
        else if (data['$' + _constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALUE]) {
            valueKey = '$' + _constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALUE;
        }
    }
    return valueKey;
}
function getTypeKey(data) {
    let typeKey;
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(data)) {
        if (data[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE]) {
            typeKey = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE;
        }
        else if (data['$' + _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE]) {
            typeKey = '$' + _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE;
        }
    }
    return typeKey;
}
function getDescriptionKey(data) {
    let descriptionKey;
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(data)) {
        if (data[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].DESCRIPTION]) {
            descriptionKey = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].DESCRIPTION;
        }
        else if (data['$' + _constants__WEBPACK_IMPORTED_MODULE_2__["default"].DESCRIPTION]) {
            descriptionKey = '$' + _constants__WEBPACK_IMPORTED_MODULE_2__["default"].DESCRIPTION;
        }
    }
    return descriptionKey;
}
function getTokenStyles(dataSet, file, startPath, data, studioTokens, studioProblems, theme = undefined, types = undefined) {
    // depth first...
    function traverseTokenStyles(root, path) {
        const valueKey = getValueKey(root);
        const typeKey = getTypeKey(root);
        const descriptionKey = getDescriptionKey(root);
        if (valueKey && typeKey) {
            const uuid = getTokenUUID(root);
            const extensions = root[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS];
            const tokenEntry = { value: root[valueKey], type: root[typeKey], description: descriptionKey ? root[descriptionKey] : undefined, files: [file], path: path, [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS]: extensions, dataSet: dataSet };
            // type filtering first
            if (types && tokenEntry.type && !types.includes(tokenEntry.type)) {
                return;
            }
            // check metadata for unhandled tokens studio data
            if (extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_STUDIO]) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('WARNING - UNHANDLED MODIFIER: ' + path.join('.') + '\n' + JSON.stringify(extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_STUDIO]));
                studioProblems.metadata.push(tokenEntry);
            }
            // check metadata for unhandled spectrum tokens data
            if (extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM]) {
                const spectrumExtensionData = extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM];
                if (spectrumExtensionData) {
                    for (const key of Object.keys(spectrumExtensionData)) {
                        if (![_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME, _constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID, _constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE, _constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED].includes(key.toLowerCase())) {
                            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('WARNING - UNHANDLED SPECTRUM METADATA: ' + path.join('.') + ' => ' + key);
                            studioProblems.metadata.push(tokenEntry);
                        }
                    }
                }
            }
            // check for unhandled extension metadata entries
            if (extensions) {
                for (const key of Object.keys(extensions)) {
                    if (![_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM, _constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_STUDIO].includes(key.toLowerCase())) {
                        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('WARNING - UNHANDLED EXTENSION METADATA: ' + path.join('.') + ' => ' + key);
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
            studioTokens[uuid] = tokenEntry;
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
function verifyTokenAliases(startPath, data, studioTokens) {
    const result = { unresolved: [], typeError: [] };
    function findReferences(value, studioTokens) {
        const result = [];
        const alias = value.replaceAll('{', '').replaceAll('}', '').toLowerCase().trim();
        for (const uuid in studioTokens) {
            const entry = studioTokens[uuid];
            const checkPath = entry.path.slice(1).join('.').toLowerCase().trim();
            if (checkPath === alias) {
                result.push(entry);
            }
        }
        return result;
    }
    function traverseTokenStyles(root, path) {
        const valueKey = getValueKey(root);
        const typeKey = getTypeKey(root);
        if (valueKey && typeKey) {
            const value = root[valueKey];
            const type = root[typeKey];
            if (!value || !(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isString)(value) || !value.length || value.charAt(0) !== '{') {
                return; // not an alias
            }
            const references = findReferences(value, studioTokens);
            if (!references.length) {
                result.unresolved.push({ path: path.join('.'), value: value });
                return;
            }
            const types = [type.toLowerCase()];
            for (const reference of references) {
                const t = reference.type.toLowerCase();
                if (!types.includes(t)) {
                    types.push(t);
                }
            }
            if (types.length > 1) {
                result.typeError.push({ path: path.join('.'), types: types });
            }
        }
        else {
            Object.keys(root).forEach((child) => {
                if (child[0] !== '$') {
                    traverseTokenStyles(root[child], path.concat([child]));
                }
            });
        }
    }
    traverseTokenStyles(data, startPath);
    return result;
}
function initializeExtensions(entry) {
    let result = entry[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS];
    if (!result) {
        result = {
            [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_STUDIO]: undefined,
            [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM]: { [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME]: undefined, [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID]: undefined, [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE]: undefined, [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED]: undefined }
        };
        entry[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS] = result;
    }
    if (result) {
        if (!result[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM]) {
            result[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM] = {
                [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME]: undefined,
                [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID]: undefined,
                [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE]: undefined,
                [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED]: undefined
            };
        }
        return result;
    }
    throw new Error();
}
function getTokenDuplicated(entry) {
    const extensions = entry[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS];
    const extensions_spectrum = extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM] ? extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM] : undefined;
    return extensions_spectrum && extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE] !== undefined ? extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE] : undefined;
}
function setTokenDuplicated(entry, duplicate) {
    const extensions = initializeExtensions(entry);
    const extensions_spectrum = extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM];
    if (extensions_spectrum) {
        extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE] = duplicate;
    }
}
function getTokenUUID(entry) {
    const extensions = entry[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS];
    const extensions_spectrum = extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM] ? extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM] : undefined;
    return extensions_spectrum && extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID] !== undefined ? extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID] : undefined;
}
function setTokenUUID(entry, uuid) {
    const extensions = initializeExtensions(entry);
    const extensions_spectrum = extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM];
    if (extensions_spectrum) {
        extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID] = uuid;
    }
}
function getTokenSpectrumName(entry, allowFallback = true) {
    const extensions = entry[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS];
    const extensions_spectrum = extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM] ? extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM] : undefined;
    const extensions_spectrum_name = extensions_spectrum && extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME] ? extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME] : undefined;
    const result = extensions_spectrum_name && extensions_spectrum_name.length ? extensions_spectrum_name : undefined;
    if (!result && allowFallback && entry.path && entry.path.length) {
        const uuid = getTokenUUID(entry);
        if (uuid) {
            return entry.path.at(entry.path.length - 1);
        }
    }
    return result;
}
function setTokenSpectrumName(entry, name) {
    const extensions = initializeExtensions(entry);
    const extensions_spectrum = extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM];
    if (extensions_spectrum) {
        extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME] = name;
    }
}
function getTokenDeprecations(entry) {
    const extensions = entry[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS];
    const extensions_spectrum = extensions && extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM] ? extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM] : undefined;
    return extensions_spectrum && extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED] !== undefined ? extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED] : undefined;
}
function setTokenDeprecations(entry, deprecations) {
    const extensions = initializeExtensions(entry);
    const extensions_spectrum = extensions[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM];
    if (extensions_spectrum) {
        extensions_spectrum[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED] = deprecations;
    }
}
function getTokenName(token) {
    return token.path.slice().splice(1).join('.');
}
function getSpectrumTokenSetName(entry) {
    const result = [];
    for (let bit of entry.path[0].split('/')) {
        bit = bit.toLowerCase();
        if (_constants__WEBPACK_IMPORTED_MODULE_2__["default"].THEMES.includes(bit) || _constants__WEBPACK_IMPORTED_MODULE_2__["default"].SCALES.includes(bit)) {
            result.push(bit);
        }
    }
    if (result.length >= 2) {
        throw new Error('ERROR - unsupported set within set definition in spectrum tokens data');
    }
    return result.length ? result[0] : '';
}
function getValidSpectrumTokenSets(entry) {
    // these should match the sets filtered in getSpectrumTokenSetName()
    // and should be used whenever we are comparing the set information
    // from the two data sources
    const spectrumSets = [];
    for (let set of entry.sets) {
        set = set.toLowerCase();
        if (_constants__WEBPACK_IMPORTED_MODULE_2__["default"].SCALES.includes(set) || _constants__WEBPACK_IMPORTED_MODULE_2__["default"].THEMES.includes(set)) {
            spectrumSets.push(set);
        }
    }
    return spectrumSets;
}
// !!! we would be better off creating a new entry object,
// not recycling the one from the merge list, right?
// otherwise the .merge object contains invalid object data
function combineTokenEntries(entries) {
    let files = [];
    for (const entry of entries) {
        files = files.concat(entry.files);
    }
    const entry = entries[0];
    entry.path = getCleanedPath(entry.path);
    entry.files = files;
    setTokenDuplicated(entry, true);
    return entry;
}
function getCleanedPath(path) {
    // path name w/out set information really
    const pathHead = path[0].split('/').slice(0, -1).join('/');
    return [pathHead].concat(path.slice(1));
}
function getSets(studioToken) {
    const sets = [];
    for (const file of studioToken.files) {
        sets.push(path__WEBPACK_IMPORTED_MODULE_0___default().basename(file).split('.')[0]);
    }
    return sets;
}
function isColorSet(studioToken) {
    const sets = getSets(studioToken);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.assert)(sets.length);
    let treatAsTokenNames = false;
    for (const group of _config__WEBPACK_IMPORTED_MODULE_1__["default"].TREAT_AS_TOKENNAMES) {
        if (studioToken.path.join('.').includes(group)) {
            // !!! not the greatest check - should check for delimiters...
            treatAsTokenNames = true;
        }
    }
    if (_constants__WEBPACK_IMPORTED_MODULE_2__["default"].THEMES.includes(sets[0]) && !treatAsTokenNames) {
        // the token is part of the color set, as far as we know
        return true;
    }
    return false;
}
function cleanName(name) {
    return name.replaceAll(_constants__WEBPACK_IMPORTED_MODULE_2__["default"].BUSTER, '').replaceAll(' ', '');
}
// function isValueKey(key:string):boolean {
//     return key === CONSTANTS.VALUE || key === '$' + CONSTANTS.VALUE;
// }
// function isTypeKey(key:string):boolean {
//     return key === CONSTANTS.TYPE || key === '$' + CONSTANTS.TYPE;
// }



/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert),
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
function assert(condition, message) {
    if (!condition)
        throw new Error(message ? message : undefined);
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
        // otherwise requires paths from the command line to be relative to the current working directory
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
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





const PERSIST = ['private', 'deprecated', 'deprecated_comment'];
function presistMetadata(source, destination) {
    for (const metadata of PERSIST) {
        if (source[metadata] !== undefined) {
            destination[metadata] = source[metadata];
        }
    }
}
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
function addTokens(tokens, path, renamedTokens) {
    const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.getFile)(path);
    // !!! deal with onloaded set information not in the tokens data, but just in the file
    // --- S2 wireframe (keep existing if there are sets in the new data)
    // --- S1 express (always keep, should be able to keep top level system set)
    for (const tokenName of Object.keys(tokens)) {
        let merged;
        if (!data[tokenName]) {
            // it is a new token entry, don't need to worry about existing data
            data[tokenName] = tokens[tokenName];
            merged = true;
        }
        else if (data[tokenName] && data[tokenName].sets && tokens[tokenName].sets) {
            // both exist and have sets, we merge by overwriting existing set data
            // ??? this won't remove sets that are uncaptured by the tokens studio data
            //     like  pre-existing wireframe entries in S2
            let root = data[tokenName];
            if (data[tokenName].sets[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SPECTRUM]) {
                root = data[tokenName].sets[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SPECTRUM];
            }
            for (const set of Object.keys(tokens[tokenName].sets)) {
                root.sets[set] = tokens[tokenName].sets[set];
            }
            merged = true;
        }
        else if (data[tokenName] && !data[tokenName].sets && tokens[tokenName].sets) {
            // a token is transitioning from being without sets to being one with sets,
            // so we'll replace the whole thing, don't need to worry about existing data
            if (data[tokenName].component) {
                tokens[tokenName] = Object.assign({ component: data[tokenName].component }, tokens[tokenName]);
            }
            presistMetadata(data[tokenName], tokens[tokenName]);
            data[tokenName] = tokens[tokenName];
            merged = true;
        }
        else if (data[tokenName] && data[tokenName].sets && !tokens[tokenName].sets) {
            // we're wiping out the original set information since our new data doesn't have any
            // but we need to worry about uncaptured system set data
            const tokenDefinition = {};
            const hasSpectrumSet = data[tokenName].sets[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SPECTRUM] ? true : false;
            // if we're updating the root, make sure we preserve component information
            if (!hasSpectrumSet && data[tokenName].component) {
                tokenDefinition.component = data[tokenName].component;
            }
            // store all the token stuff in the new token definition
            for (const key of Object.keys(tokens[tokenName])) {
                tokenDefinition[key] = tokens[tokenName][key];
            }
            // place the new token definition in the appropriate place
            if (!hasSpectrumSet) {
                presistMetadata(data[tokenName], tokenDefinition);
                data[tokenName] = tokenDefinition;
            }
            else {
                data[tokenName].sets[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SPECTRUM] = tokenDefinition;
            }
            merged = true;
        }
        if (!merged) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('ERROR - could not merge new token definition: ' + tokenName);
        }
    }
    (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.storeFile)(path, sortTokens(data, renamedTokens));
}
function findUUID(data) {
    if (data.uuid) {
        return data.uuid;
    }
    for (const key of Object.keys(data)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isObject)(data[key])) {
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
    const layoutData = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.getFile)(path + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT);
    const componentData = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.getFile)(path + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES.LAYOUT_COMPONENT);
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
                (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('ERROR - missing uuid: ' + tokenName);
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
                const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.getFile)(tokensPath + _config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM_FILES[file]);
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
            if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.isColorSet)(studioToken)) {
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
                else if (path.includes('typography') || studioToken.type === 'typography') {
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
    for (const entry of Object.values(studioProblems.uuids)) {
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_findBranchByUUID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/findBranchByUUID */ "./src/core/findBranchByUUID.ts");
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




function changeToken(data, uuid, value, schema, description) {
    const path = [];
    if ((0,_core_findBranchByUUID__WEBPACK_IMPORTED_MODULE_1__["default"])(data, uuid, path)) {
        let root = data;
        for (let i = 0; i < path.length - 1; ++i) {
            root = root[path[i]];
        }
        // we want to preserve the key order,
        // so we make a new object and construct
        // it in the order we want the value to
        // be in the token definition - makes things
        // more complicated, but whatever
        const key = path[path.length - 1];
        const newObject = {};
        if (root[key][_constants__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT]) {
            newObject[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT] = root[key][_constants__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT];
        }
        newObject[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA] = schema;
        newObject.value = value;
        newObject[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].DESCRIPTION] = description;
        newObject.uuid = uuid;
        for (const bit of Object.keys(root[key])) {
            if (!newObject[bit] && bit !== _constants__WEBPACK_IMPORTED_MODULE_0__["default"].DESCRIPTION) {
                newObject[bit] = root[key][bit];
            }
        }
        root[key] = newObject;
    }
    else {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('ERROR - could not find entry in spectrum tokens: ' + uuid);
    }
}
function getChanges(data) {
    let results = [];
    if (data.value && data.uuid && data.schema) {
        results.push({ value: data.value, uuid: data.uuid, schema: data.schema, description: data.description ? data.description : undefined });
    }
    for (const key of Object.keys(data)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(data[key])) {
            results = results.concat(getChanges(data[key]));
        }
    }
    return results;
}
function changeSpectrumTokens(spectrumTokens, changedTokens) {
    const changes = getChanges(changedTokens);
    for (const change of changes) {
        const file = spectrumTokens[change.uuid].file;
        const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(file);
        changeToken(data, change.uuid, change.value, change.schema, change.description);
        (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.storeFile)(file, data);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeSpectrumTokens);


/***/ }),

/***/ "./src/operations/checkDescriptionChanges.ts":
/*!***************************************************!*\
  !*** ./src/operations/checkDescriptionChanges.ts ***!
  \***************************************************/
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
function checkDescriptionChanges(studioTokens, spectrumTokens) {
    const changes = {};
    for (const uuid of Object.keys(studioTokens)) {
        if (spectrumTokens[uuid]) {
            if (studioTokens[uuid].description !== spectrumTokens[uuid].description) {
                const description = studioTokens[uuid].description;
                changes[uuid] = description && description.length ? description : null;
            }
        }
    }
    return changes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkDescriptionChanges);


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
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/helpers */ "./src/core/helpers.ts");
/* harmony import */ var _core_printableSetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/printableSetName */ "./src/core/printableSetName.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
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




function validSpectrumToken(spectrumToken, validScales, validThemes) {
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
function checkForDeprecatedTokens(studioTokens, studioProblems, spectrumTokens, spectrumProblems, newTokens) {
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
        if (validSpectrumToken(spectrumTokens[uuid], validScales, validThemes)) {
            if (!Object.keys(studioTokens).includes(uuid) && !Object.keys(studioProblems.collisions).includes(uuid)) {
                result.push({ uuid: uuid, token: spectrumTokens[uuid].name + (0,_core_printableSetName__WEBPACK_IMPORTED_MODULE_2__["default"])(spectrumTokens[uuid]) });
            }
            else if (Object.keys(studioTokens).includes(uuid) && (0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.isDeprecated)(studioTokens[uuid].path)) {
                result.push({ uuid: uuid, token: spectrumTokens[uuid].name + (0,_core_printableSetName__WEBPACK_IMPORTED_MODULE_2__["default"])(spectrumTokens[uuid]) });
            }
        }
    }
    for (const uuid in studioTokens) {
        // we need to check for deprecation on tokens that don't exist in spectrum
        // but are being added or modified (set split/merge) in these changes
        const studioToken = studioTokens[uuid];
        if ((0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.isDeprecated)(studioTokens[uuid].path) && newTokens.includes(studioToken)) {
            const setName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getSpectrumTokenSetName)(studioToken);
            result.push({ uuid: uuid, token: (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenSpectrumName)(studioToken) + (setName.length ? '/' + setName : '') });
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkForDeprecatedTokens);


/***/ }),

/***/ "./src/operations/checkForRecycledUUIDs.ts":
/*!*************************************************!*\
  !*** ./src/operations/checkForRecycledUUIDs.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
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

function checkForRecycledUUIDs(studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const result = [];
    for (const entry of Object.values(studioProblems.uuids)) {
        const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(entry);
        const tokenSetName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getSpectrumTokenSetName)(entry);
        let found;
        const uuids = Object.keys(spectrumTokens);
        while (uuids.length && !found) {
            const uuid = uuids.pop();
            if (uuid && spectrumTokens[uuid].name === tokenName) {
                const spectrumSets = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getValidSpectrumTokenSets)(spectrumTokens[uuid]);
                if (tokenSetName.length && spectrumSets.length === 1 && tokenSetName === spectrumSets[0]) {
                    found = uuid;
                }
                else if (!tokenSetName.length && !spectrumSets.length) {
                    found = uuid;
                }
            }
        }
        if (found) {
            if (!studioTokens[found]) {
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.setTokenUUID)(entry, found);
                studioProblems.uuids.splice(studioProblems.uuids.indexOf(entry), 1);
                studioTokens[found] = entry;
                result.push(entry.path.join('.'));
            }
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkForRecycledUUIDs);


/***/ }),

/***/ "./src/operations/checkModelessTokenAliases.ts":
/*!*****************************************************!*\
  !*** ./src/operations/checkModelessTokenAliases.ts ***!
  \*****************************************************/
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
 * Copyright 2025 Adobe
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


function checkModelessTokenAliases(studioTokens, studioProblems) {
    const result = { unresolved: [], typeError: [] };
    if (studioProblems.modeless) {
        for (const modeless of studioProblems.modeless) {
            const found = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.verifyTokenAliases)(modeless.startPath, modeless.data, studioTokens);
            result.unresolved = result.unresolved.concat(found.unresolved);
            result.typeError = result.typeError.concat(found.typeError);
        }
    }
    for (const unresolved of result.unresolved) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - FAILED TO RESOLVE VALUE: ' + unresolved.path + ' ' + unresolved.value);
    }
    for (const typeError of result.typeError) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - TYPE CONFLICT: ' + typeError.path + ' (' + typeError.types[0] + ' => ' + typeError.types.slice(1).join(', ') + ')');
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkModelessTokenAliases);


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
function checkMode(entry, collection, allScales, allThemes) {
    let name = entry.path.join('/');
    for (const scale of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SCALES) {
        const check = '/' + scale + '/';
        if (name.indexOf(check) !== -1) {
            name = name.substring(0, name.indexOf(check)) + name.substring(name.indexOf(check) + check.length - 1);
        }
    }
    for (const theme of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].THEMES) {
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
    for (const scale of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].SCALES) {
        if (path.includes(scale)) {
            collection[name].push(scale);
            if (!allScales.includes(scale)) {
                allScales.push(scale);
            }
        }
    }
    for (const theme of _constants__WEBPACK_IMPORTED_MODULE_0__["default"].THEMES) {
        if (path.includes(theme)) {
            collection[name].push(theme);
            if (!allThemes.includes(theme)) {
                allThemes.push(theme);
            }
        }
    }
}
function checkModes(studioTokens, studioProblems) {
    const collection = {};
    const allScales = [];
    const allThemes = [];
    for (const uuid of Object.keys(studioTokens)) {
        checkMode(studioTokens[uuid], collection, allScales, allThemes);
    }
    for (const uuid of Object.keys(studioProblems.split)) {
        for (const entry of studioProblems.split[uuid]) {
            checkMode(entry, collection, allScales, allThemes);
        }
    }
    for (const uuid in studioProblems.merged) {
        const entry = studioProblems.merged[uuid];
        checkMode(entry, collection, allScales, allThemes);
    }
    for (const entry of studioProblems.uuids) {
        checkMode(entry, collection, allScales, allThemes);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkModes);


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
        let tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(entry);
        if (tokenName) {
            tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.cleanName)(tokenName);
        }
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

/***/ "./src/operations/checkSchemaChanges.ts":
/*!**********************************************!*\
  !*** ./src/operations/checkSchemaChanges.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_schemaStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/schemaStuff */ "./src/core/schemaStuff.ts");
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


function getChangedSchema(studioToken, spectrumToken, unsupportedTypes) {
    const studioType = (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_1__.getSchemaType)(studioToken);
    const schema = (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_1__.getSchemaFromType)(studioType, studioToken);
    if (!schema) {
        if (studioType) {
            if (!unsupportedTypes[studioType]) {
                unsupportedTypes[studioType] = [];
            }
            unsupportedTypes[studioType].push(studioToken.path.join('.'));
        }
        return;
    }
    if (schema && (!spectrumToken.schema || schema !== spectrumToken.schema)) {
        return schema;
    }
}
function checkSchemaChanges(studioTokens, spectrumTokens) {
    const changes = {};
    const unsupportedTypes = {};
    for (const uuid of Object.keys(studioTokens)) {
        if (spectrumTokens[uuid]) {
            const schema = getChangedSchema(studioTokens[uuid], spectrumTokens[uuid], unsupportedTypes);
            if (schema) {
                changes[uuid] = schema;
            }
        }
    }
    for (const unsupportedType in unsupportedTypes) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - checkSchemaChanges - UNSUPPORTED STUDIO TYPE: ' + unsupportedType + ' => ' + unsupportedTypes[unsupportedType].join(', '));
    }
    return changes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkSchemaChanges);


/***/ }),

/***/ "./src/operations/checkSets.ts":
/*!*************************************!*\
  !*** ./src/operations/checkSets.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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

function checkSets(studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    for (const uuid of Object.keys(studioTokens)) {
        if (spectrumTokens[uuid]) {
            const studioEntry = studioTokens[uuid];
            const spectrumEntry = spectrumTokens[uuid];
            const spectrumSets = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getValidSpectrumTokenSets)(spectrumEntry);
            const studioSetName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getSpectrumTokenSetName)(studioEntry);
            // if (studioSetName.length && spectrumSets.length === 1 && studioSetName !== spectrumSets[0]) {
            //      !!! same number of sets but they differ... huh
            // } else
            if (studioSetName.length && !spectrumSets.length) {
                // ??? this seems to work already, because a split will trigger
                // a full rewrite of the original token in spectrum-tokens
            }
            else if (!studioSetName.length && spectrumSets.length) {
                studioProblems.merged[uuid] = studioEntry;
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkSets);


/***/ }),

/***/ "./src/operations/checkValueChanges.ts":
/*!*********************************************!*\
  !*** ./src/operations/checkValueChanges.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getValueType: () => (/* binding */ getValueType)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_getSpectrumValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/getSpectrumValue */ "./src/core/getSpectrumValue.ts");
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



function getValueType(studioToken) {
    const value = studioToken.value;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assert)(value);
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
        return 'OBJECT';
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
        return 'ARRAY';
    }
    else if (!isNaN(Number(value))) {
        return 'NUMBER';
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
        if (value.charAt(0) === '#') {
            return 'COLOR';
        }
        else if (value.slice(0, 3) === 'RGB') {
            return 'COLOR';
        }
        if (value.charAt(0) === '{' && value.charAt(value.length - 1) === '}') {
            return 'ALIAS';
        }
        return 'STRING';
    }
    return undefined;
}
function getValueSchema(uuid, studioTokens) {
    const schemaType = (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_2__.getSchemaType)(studioTokens[uuid]);
    const schema = (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_2__.getSchemaFromType)(schemaType, studioTokens[uuid]);
    if (schema) {
        // this pulls the schema file name out of the config stuff, so we can check it
        // against the value type and value in 'checkTypeStuff'
        return schema.slice(schema.lastIndexOf('/') + 1, schema.lastIndexOf('.json'));
    }
    else {
        return undefined;
    }
}
function checkTypeStuff(token, valueType, schemaType) {
    if (valueType === 'ALIAS' && schemaType === 'alias') {
        return;
    }
    else if (valueType === 'COLOR' && schemaType === 'color') {
        return;
    }
    else if (valueType === 'NUMBER' && (schemaType === 'multiplier' || schemaType === 'opacity' || schemaType === 'dimension' || schemaType === 'gradient-stop')) {
        return;
    }
    else if (valueType === 'STRING' &&
        schemaType === 'dimension' &&
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(token.value) &&
        (token.value.toLowerCase().indexOf('px') > 0 || token.value.toLowerCase().indexOf('em') > 0 || token.value.toLowerCase().indexOf('dp') > 0 || token.value.charAt(token.value.length - 1) === '%')) {
        return;
    }
    else if (valueType === 'STRING' && (schemaType === 'font-family' || schemaType === 'font-style' || schemaType === 'font-size' || schemaType === 'font-weight' || schemaType === 'text-align')) {
        return;
    }
    else {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(token.value)) {
            if (token.value.indexOf('-') > 0) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - VALUE TYPE MISMATCH: ' + token.path.join('/') + ' => ' + token.type + ' / ' + token.value + ' (should this be an alias?)');
            }
            else {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - VALUE TYPE MISMATCH: ' + token.path.join('/') + ' => ' + token.type + ' (' + schemaType + ') / ' + token.value + ' (' + valueType + ')');
            }
        }
    }
}
function checkValueChanges(studioTokens, spectrumTokens) {
    const changes = {};
    for (const uuid in studioTokens) {
        if (!spectrumTokens[uuid]) {
            continue;
        }
        const tokenValue = (0,_core_getSpectrumValue__WEBPACK_IMPORTED_MODULE_1__["default"])(uuid, studioTokens);
        const spectrumValue = spectrumTokens[uuid].value;
        if (JSON.stringify(tokenValue) !== JSON.stringify(spectrumValue)) {
            changes[uuid] = tokenValue;
        }
        // let's double check the types...
        const tokenValueType = getValueType(studioTokens[uuid]);
        if (tokenValueType) {
            const valueSchema = getValueSchema(uuid, studioTokens);
            if (valueSchema) {
                checkTypeStuff(studioTokens[uuid], tokenValueType, valueSchema);
            }
            else {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - UNKNOWN SCHEMA TYPE: ' + studioTokens[uuid].path.join('/'));
            }
        }
        else {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - UNKNOWN VALUE TYPE: ' + studioTokens[uuid].path.join('/'));
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
/* harmony import */ var _core_getBranchUUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/getBranchUUID */ "./src/core/getBranchUUID.ts");
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
function deprecateSpectrumTokens(studioTokens, spectrumTokens, spectrumProblems, deprecatedTokens) {
    let failedDeprecation = [];
    for (const entry of deprecatedTokens) {
        let uuid = entry.uuid;
        if (uuid && !spectrumTokens[uuid]) {
            uuid = (0,_core_getBranchUUID__WEBPACK_IMPORTED_MODULE_2__["default"])(spectrumProblems, uuid);
        }
        if (uuid) {
            const file = spectrumTokens[uuid].file;
            const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_0__.getFile)(file);
            deprecateToken(data, entry.token, uuid);
            (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_0__.storeFile)(file, data);
        }
        else {
            failedDeprecation.push(entry);
        }
    }
    // with the branch uuids, now, we'll double check some other stuff
    if (failedDeprecation.length) {
        const groups = {};
        // ... group unresolved deprecation tokens by name
        for (const entry of failedDeprecation) {
            const name = entry.token.split('/')[0];
            if (!groups[name])
                groups[name] = [];
            groups[name].push(entry.uuid);
        }
        // ... look them up by token name in spectrumTokens / ??? deprecated (should probably look here, too)
        for (const tokenName in groups) {
            const matchingTokens = Object.values(spectrumTokens).filter((token) => token.name === tokenName);
            if (matchingTokens.length === 1) {
                const spectrumToken = matchingTokens[0];
                const file = spectrumToken.file;
                const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_0__.getFile)(file);
                deprecateToken(data, spectrumToken.name, spectrumToken.uuid);
                (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_0__.storeFile)(file, data);
                failedDeprecation = failedDeprecation.filter((entry) => !groups[tokenName].includes(entry.uuid));
            }
        }
    }
    for (const entry of failedDeprecation) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('ERROR - FAILED TO DEPRECATE TOKEN: ' + entry.uuid + ' ' + entry.token);
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
function formatChangedSpectrumTokens(valueChanges, schemaChanges, descriptionChanges, studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const result = {};
    const changed = Object.keys(valueChanges).concat(Object.keys(schemaChanges)).concat(Object.keys(descriptionChanges));
    for (const uuid of changed) {
        const value = valueChanges[uuid] ? valueChanges[uuid] : spectrumTokens[uuid].value;
        const schema = schemaChanges[uuid] ? schemaChanges[uuid] : spectrumTokens[uuid].schema;
        const description = descriptionChanges[uuid] || descriptionChanges[uuid] === null ? descriptionChanges[uuid] : spectrumTokens[uuid].description;
        const name = spectrumTokens[uuid].name;
        const sets = spectrumTokens[uuid].sets;
        if (!result[name]) {
            result[name] = {};
        }
        if (!sets.length) {
            result[name].schema = schema;
            result[name].value = value;
            result[name].description = description;
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
            leaf.schema = schema;
            leaf.value = value;
            leaf.description = description;
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_schemaStuff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/schemaStuff */ "./src/core/schemaStuff.ts");
/* harmony import */ var _core_getSpectrumValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/getSpectrumValue */ "./src/core/getSpectrumValue.ts");
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/helpers */ "./src/core/helpers.ts");
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
function createSpectrumTokensEntry(uuid, studioTokens) {
    const schema = (0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_4__.getSchemaFromType)((0,_core_schemaStuff__WEBPACK_IMPORTED_MODULE_4__.getSchemaType)(studioTokens[uuid]), studioTokens[uuid]);
    const value = (0,_core_getSpectrumValue__WEBPACK_IMPORTED_MODULE_5__["default"])(uuid, studioTokens);
    if (!schema) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('WARNING - MISSING SPECTRUM SCHEMA FOR (' + studioTokens[uuid].type + ') ' + studioTokens[uuid].path.join('.'));
    }
    return { [_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCHEMA]: schema && schema.length ? schema : undefined, value: value, uuid: uuid, deprecated: (0,_core_helpers__WEBPACK_IMPORTED_MODULE_6__.isDeprecated)(studioTokens[uuid].path) ? true : undefined };
}
function sortSets(input) {
    const output = {};
    for (const theme of _constants__WEBPACK_IMPORTED_MODULE_1__["default"].THEMES) {
        if (input[theme]) {
            output[theme] = input[theme];
        }
    }
    for (const scale of _constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCALES) {
        if (input[scale]) {
            output[scale] = input[scale];
        }
    }
    for (const set of Object.keys(input)) {
        if (!_constants__WEBPACK_IMPORTED_MODULE_1__["default"].THEMES.includes(set) && !_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCALES.includes(set)) {
            output[set] = input[set];
        }
    }
    return output;
}
function getSpectrumTokenSet(entries, studioTokens) {
    let sets = {};
    const types = [];
    let schema = undefined;
    for (const entry of entries) {
        const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenUUID)(entry);
        if (!uuid)
            throw new Error('ERROR - MISSING UUID FOR: ' + entry.path.join('.'));
        sets[(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getSpectrumTokenSetName)(entry)] = createSpectrumTokensEntry(uuid, studioTokens);
        if (!types.includes(entry.type)) {
            types.push(entry.type);
        }
    }
    sets = sortSets(sets);
    {
        // jump through some hoops to assign the appriopriate set schema
        const setNames = [];
        for (const entry of entries) {
            const setName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getSpectrumTokenSetName)(entry);
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
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('WARNING - could not determine schema for set with set names of: ' + setNames);
        }
    }
    return { [_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCHEMA]: schema && schema.length ? schema : undefined, sets: sets };
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
function formatNewSpectrumTokens(exports, studioTokens) {
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
            (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('ERROR - studio token definition missing spectrum token name: ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenName)(entry));
        }
    }
    for (const name of Object.keys(collection)) {
        const tokenData = collection[name];
        if (tokenData.length === 1 && !isPartOfSet(tokenData[0], studioTokens)) {
            const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenUUID)(tokenData[0]);
            if (!uuid)
                throw new Error('ERROR - MISSING UUID FOR: ' + tokenData[0].path.join('.'));
            result[name] = createSpectrumTokensEntry(uuid, studioTokens);
        }
        else {
            result[name] = getSpectrumTokenSet(tokenData, studioTokens);
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatNewSpectrumTokens);


/***/ }),

/***/ "./src/operations/getModifiedTokens.ts":
/*!*********************************************!*\
  !*** ./src/operations/getModifiedTokens.ts ***!
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


function getModifiedTokens(studioTokens, spectrumTokens, newTokens) {
    for (const entry of Object.values(newTokens)) {
        const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry);
        if (!uuid) {
            throw new Error('ERROR - missing uuid: ' + JSON.stringify(entry));
        }
        const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(entry);
        if (tokenName) {
            let spectrumFile;
            for (const spectrum of Object.values(spectrumTokens)) {
                if (spectrum.name === tokenName) {
                    spectrumFile = spectrum.file;
                    break;
                }
            }
            if (spectrumFile) {
                const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_0__.getFile)(spectrumFile);
                if (data[tokenName]) {
                    if (data[tokenName].uuid && studioTokens[data[tokenName].uuid]) {
                        const addToken = studioTokens[data[tokenName].uuid];
                        if (!newTokens.includes(addToken)) {
                            newTokens.push(studioTokens[data[tokenName].uuid]);
                        }
                    }
                }
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getModifiedTokens);


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
    // !!! I don't think this actually exists in spectrum-tokens (it was for putting uuids on branch nodes and not just leaves)
    for (const spectrumEntry of spectrumProblems.empty) {
        if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDuplicated)(studioEntry) && (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(studioEntry) === spectrumEntry.name) {
            uuid = spectrumEntry.uuid;
            break;
        }
    }
    // ??? retrieve a deprecated uuid... I'm not sure we should care about this either
    for (const spectrumEntry of Object.values(spectrumProblems.deprecated)) {
        if (!(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenDuplicated)(studioEntry) && (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(studioEntry) === spectrumEntry.name) {
            const spectrumSets = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getValidSpectrumTokenSets)(spectrumEntry);
            if (spectrumSets.length === 1 && spectrumSets[0] === (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getSpectrumTokenSetName)(studioEntry)) {
                uuid = spectrumEntry.uuid;
                break;
            }
            else if (spectrumSets.length > 1) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('WARNING - COULD NOT COMPARE SET NAMES BECAUSE WE HAVE NOT SUPPORTED SETS WITHIN SETS: ' + spectrumEntry.name); // !!! haha
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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
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



function stringifyObject(value) {
    const result = {};
    const keys = Object.keys(value).sort();
    for (const k of keys) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(value[k]));
        result[k.toLowerCase()] = value[k].toLowerCase();
    }
    return JSON.stringify(result);
}
function stringifyValue(value) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(value)) {
        return value;
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isObject)(value)) {
        return stringifyObject(value);
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
        const result = [];
        for (const v of value) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isObject)(v));
            result.push(stringifyObject(v));
        }
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(result.length);
        return JSON.stringify(result);
    }
    return undefined;
}
function verifyEntries(entries, checkUUIDs, checkValues) {
    let value;
    let type;
    let path;
    let token;
    let uuid;
    for (let i = 0; i < entries.length; ++i) {
        const entry = entries[i];
        if (checkValues) {
            const entryValue = stringifyValue(entry.value);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(entryValue, 'failed to read value of tokens studio entry: ' + JSON.stringify(entry.path));
            if (i === 0 || (value && value.toLowerCase() === entryValue.toLowerCase())) {
                value = entryValue;
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
            const u = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry);
            if (i === 0 || uuid === u) {
                uuid = u;
            }
            else {
                return false;
            }
        }
        const p = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getCleanedPath)(entry.path).join('.');
        if (i === 0 || path === p) {
            path = p;
        }
        else {
            return false;
        }
        const t = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(entry);
        if (i === 0 || token === t) {
            token = t;
        }
        else {
            return false;
        }
    }
    return true;
}
function processStudioTokenData(studioTokens, studioProblems) {
    // intentionally duplicated token definitions will start off
    // being listed as uuid collisions: check for and move them
    for (const uuid of Object.keys(studioProblems.collisions)) {
        const entries = studioProblems.collisions[uuid];
        // they have the same uuid and value
        if (verifyEntries(entries, true, true)) {
            studioTokens[uuid] = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.combineTokenEntries)(entries);
            delete studioProblems.collisions[uuid];
        }
    }
    for (const uuid of Object.keys(studioProblems.collisions)) {
        const entries = studioProblems.collisions[uuid];
        // they are the same but have different values
        // (otherwise they would have been removed in the step above)
        if (verifyEntries(entries, true, false)) {
            studioProblems.split[uuid] = entries;
            delete studioProblems.collisions[uuid];
        }
    }
    // we'll also want to check tokens without a uuid TEST
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
            if (tokenGroups[name].length > 1 && verifyEntries(tokenGroups[name], true, true)) {
                needUUIDs.push((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.combineTokenEntries)(tokenGroups[name]));
            }
            else {
                for (const entry of tokenGroups[name]) {
                    needUUIDs.push(entry);
                }
            }
        }
        studioProblems.uuids = needUUIDs;
    }
    const tokenTable = {};
    for (const uuid of Object.keys(studioTokens)) {
        const name = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(studioTokens[uuid]);
        if (name && !tokenTable[name]) {
            tokenTable[name] = [];
        }
        if (name) {
            tokenTable[name].push(studioTokens[uuid]);
        }
    }
    for (const token of Object.keys(tokenTable)) {
        const entries = tokenTable[token];
        if (entries.length > 1 && verifyEntries(entries, false, true)) {
            // entries are duplicates but have unique ids, add them to the problem pile
            studioProblems.merge.push(entries);
            // ... and remove the token entries from the okay pile
            for (const originalEntry of entries) {
                const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(originalEntry);
                if (uuid)
                    delete studioTokens[uuid];
            }
        }
        else if (entries.length > 1 && !verifyEntries(entries, false, true)) {
            // they aren't duplicates... but we need to make sure each entry isn't defined in
            // multiple files - each file should have it's own uuid if there's any entry
            // differences
            for (const entry of entries) {
                if (entry.files.length > 1) {
                    const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry);
                    if (uuid) {
                        delete studioTokens[uuid];
                        studioProblems.split[uuid] = [];
                        for (const file of entry.files) {
                            const newEntry = JSON.parse(JSON.stringify(entry));
                            newEntry.files = [file];
                            newEntry.path[0] += '/' + path__WEBPACK_IMPORTED_MODULE_0___default().basename(file, '.json');
                            studioProblems.split[uuid].push(newEntry);
                        }
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
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
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(branch)) {
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
    path = path.filter((set) => set !== _constants__WEBPACK_IMPORTED_MODULE_3__["default"].SETS);
    return path;
}
function spectrumNumber(value) {
    let result = value.toFixed(_config__WEBPACK_IMPORTED_MODULE_2__["default"].PRECISION);
    if (result.indexOf('.') !== -1) {
        while (result.charAt(result.length - 1) === '0') {
            result = result.slice(0, -1);
        }
        if (result.charAt(result.length - 1) === '.') {
            result = result.slice(0, -1);
        }
    }
    return result;
}
function parseTokenData(file, tokens, problems, entry, system, name, tokenDefinition, deprecated = false) {
    const uuid = entry.uuid;
    const description = entry.description;
    let value;
    if (entry.value !== undefined && !(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isString)(entry.value) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(entry.value) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isArray)(entry.value)) {
        try {
            value = spectrumNumber(entry.value);
        }
        catch (error) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('parseTokenData: FAILED TO IDENTIFY VALUE FOR\n' + JSON.stringify(entry));
            throw error;
        }
    }
    else {
        value = entry.value;
    }
    const isDeprecated = deprecated || entry.deprecated === true;
    const passDeprecation = value === undefined ? isDeprecated : false; // ??? deprecation setting is implied on children
    const problemEntry = Object.assign({ file: file, name: name }, entry);
    if (uuid && value) {
        if (tokens[uuid] || problems.collisions[uuid]) {
            if (!problems.collisions[uuid]) {
                problems.collisions[uuid] = [];
                problems.collisions[uuid].push({
                    file: tokens[uuid].file,
                    name: tokens[uuid].name,
                    uuid: tokens[uuid].uuid,
                    value: tokens[uuid].value,
                    description: tokens[uuid].description,
                    sets: getSetNames(tokenDefinition, uuid),
                    schema: entry[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].SCHEMA]
                });
                delete tokens[uuid];
            }
            problems.collisions[uuid].push(problemEntry);
        }
        else if (isDeprecated) {
            problems.deprecated[uuid] = { file: file, uuid: uuid, value: value, name: name, description: description, sets: getSetNames(tokenDefinition, uuid), schema: entry[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].SCHEMA] };
        }
        else {
            tokens[uuid] = { file: file, uuid: uuid, value: value, name: name, description: description, sets: getSetNames(tokenDefinition, uuid), schema: entry[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].SCHEMA] };
        }
    }
    else if ((uuid && !value) || (!uuid && value)) {
        if (!uuid) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('WARNING - missing uuid => ' + name);
            problems.uuids.push(problemEntry);
        }
        if (!value && (!problemEntry[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].SETS] || !Object.keys(problemEntry[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].SETS]).length)) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('WARNING - unhandled token entry => ' + name);
            problems.empty.push(problemEntry);
        }
        if (!value && problemEntry[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].SETS] && Object.keys(problemEntry[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].SETS]).length) {
            problems.branches[uuid] = problemEntry;
        }
    }
    for (const key of Object.keys(entry)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(entry[key])) {
            if (system && _constants__WEBPACK_IMPORTED_MODULE_3__["default"].SYSTEMS.includes(key) && key !== system)
                continue;
            parseTokenData(file, tokens, problems, entry[key], system, name, tokenDefinition, passDeprecation);
        }
    }
}
function parseSpectrumTokens(file, tokens, problems, data, system) {
    for (const tokenName of Object.keys(data)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(data[tokenName])) {
            parseTokenData(file, tokens, problems, data[tokenName], system, tokenName, data[tokenName]);
        }
    }
}
function readSpectrumTokens(source, system) {
    const spectrumTokens = {};
    const spectrumProblems = { collisions: {}, uuids: [], empty: [], deprecated: {}, branches: {} };
    (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('READING spectrum-tokens: ' + (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.trimPath)(source));
    fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(source).forEach((file) => {
        if (path__WEBPACK_IMPORTED_MODULE_1___default().extname(file).toLowerCase() === '.json') {
            const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_5__.getFile)(source + file);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _processStudioTokenData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processStudioTokenData */ "./src/operations/processStudioTokenData.ts");
/* harmony import */ var _compositeTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../compositeTypes */ "./src/compositeTypes.ts");
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







const THEMES = '$themes.json';
const JSON_EXT = '.json';
function getSourceFiles(source) {
    const themesFile = path__WEBPACK_IMPORTED_MODULE_1___default().join(source, THEMES);
    const themes = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(themesFile, { encoding: 'utf8', flag: 'r' });
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(themes && themes.length, themesFile);
    const themesData = JSON.parse(themes);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(themesData && (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(themesData), themesFile);
    let privateCollections = [];
    let publicCollections = [];
    for (const themeEntry of themesData) {
        let themeGroup = themeEntry.group;
        themeGroup = themeGroup.toLowerCase();
        let themeName = themeEntry.name;
        themeName = themeName.toLowerCase();
        const tokenSets = [];
        for (const tokenSet of Object.keys(themeEntry.selectedTokenSets)) {
            if (themeEntry.selectedTokenSets[tokenSet] === 'enabled') {
                tokenSets.push(path__WEBPACK_IMPORTED_MODULE_1___default().join(source, tokenSet) + JSON_EXT);
            }
        }
        if (themeGroup.charAt(0) === '.') {
            privateCollections = privateCollections.concat(tokenSets);
        }
        else {
            publicCollections = publicCollections.concat(tokenSets);
        }
    }
    return { privateCollections: privateCollections, publicCollections: publicCollections };
}
function getStartPath(source, file) {
    const startPath = file.slice(source.length).split((path__WEBPACK_IMPORTED_MODULE_1___default().sep)).slice(0, -1);
    startPath.push(path__WEBPACK_IMPORTED_MODULE_1___default().basename(file, '.json'));
    return startPath.join('/');
}
function readStudioTokens(sources) {
    const studioTokens = {};
    const studioProblems = { collisions: {}, merge: [], merged: {}, split: {}, uuids: [], values: [], metadata: [], usedModes: [], modes: {}, modeless: undefined };
    for (const dataSet in sources) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(sources[dataSet]) && fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(sources[dataSet]).isDirectory()) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('READING   tokens studio: ' + (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.trimPath)(sources[dataSet]));
            const { privateCollections, publicCollections } = getSourceFiles(sources[dataSet]);
            const coreCollections = privateCollections.length ? privateCollections : publicCollections;
            coreCollections.forEach((file) => {
                const startPath = file.slice(sources[dataSet].length).split((path__WEBPACK_IMPORTED_MODULE_1___default().sep)).slice(0, -1);
                startPath.push(path__WEBPACK_IMPORTED_MODULE_1___default().basename(file, '.json'));
                const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_4__.getFileUncached)(file); // ??? don't use a cached version since we're directly re-using the data objects as token data :/
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenStyles)(dataSet, file, [getStartPath(sources[dataSet], file)], data, studioTokens, studioProblems);
            });
            if (coreCollections !== publicCollections) {
                // we need to scan the public collections for composite token definition... and store them for later alias verification :(
                publicCollections.forEach((file) => {
                    const startPath = file.slice(sources[dataSet].length).split((path__WEBPACK_IMPORTED_MODULE_1___default().sep)).slice(0, -1);
                    startPath.push(path__WEBPACK_IMPORTED_MODULE_1___default().basename(file, '.json'));
                    const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_4__.getFileUncached)(file);
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenStyles)(dataSet, file, [getStartPath(sources[dataSet], file)], data, studioTokens, studioProblems, undefined, _compositeTypes__WEBPACK_IMPORTED_MODULE_6__.COMPOSITE_TYPES);
                    if (coreCollections && coreCollections.length) {
                        if (!studioProblems.modeless) {
                            studioProblems.modeless = [];
                        }
                        studioProblems.modeless.push({ startPath: [getStartPath(sources[dataSet], file)], data });
                    }
                });
            }
        }
    }
    (0,_processStudioTokenData__WEBPACK_IMPORTED_MODULE_5__["default"])(studioTokens, studioProblems); // resolve token duplication and a bunch of other stuff
    return { studioTokens, studioProblems };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readStudioTokens);


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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
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






const ALIAS = 'alias';
function redirectAllValues(data, reference) {
    // this should skip redirecting within arrays and objects,
    // but still update string values and values in sets
    for (const key of Object.keys(data)) {
        if (key === _constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE && (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isString)(data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE])) {
            data[key] = '{' + reference + '}';
            data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].SCHEMA] = _config__WEBPACK_IMPORTED_MODULE_2__["default"].SCHEMA_TYPES[ALIAS];
        }
        else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(data[key])) {
            redirectAllValues(data[key], reference);
        }
    }
}
function updateReferences(data, originalToken, updatedToken) {
    let changed = false;
    // we're looking for references to the token name in the value, and swapping it to the new one
    if (data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE]) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isString)(data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE])) {
            if (data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE] === '{' + originalToken + '}') {
                data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE] = '{' + updatedToken + '}';
                changed = true;
            }
        }
        else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isArray)(data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE])) {
            for (const entry of data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE]) {
                changed = updateReferences(entry, originalToken, updatedToken) || changed;
            }
        }
        else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE])) {
            changed = updateReferences(data[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].VALUE], originalToken, updatedToken) || changed;
        }
    }
    return changed;
}
function changeTokenName(data, originalToken, updatedToken, root = true) {
    let changed = false;
    for (const token of Object.keys(data)) {
        if (token === originalToken) {
            // we found the defininition for the renamed tokens
            const definition = data[token];
            // ... mark it is deprecated
            definition[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].DEPRECATED] = true;
            definition[_constants__WEBPACK_IMPORTED_MODULE_3__["default"].DEPRECATED_COMMENT] = 'This token has been deprecated, use ' + updatedToken + ' instead.';
            // ... and if possible we'll redirect the value or set values to the new token definition
            redirectAllValues(definition, updatedToken);
            changed = true;
        }
        else {
            // any other token in the definition, we'll update any reference to the old token name to the new token name
            changed = updateReferences(data[token], originalToken, updatedToken) || changed;
        }
    }
    return changed;
}
function renameSpectrumTokens(tokensPath, renamedTokens) {
    fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(tokensPath).forEach((file) => {
        if (path__WEBPACK_IMPORTED_MODULE_1___default().extname(file).toLowerCase() === '.json') {
            const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_5__.getFile)(tokensPath + file);
            let changed = false;
            for (const originalToken of Object.keys(renamedTokens)) {
                // we check each file for the definition and references to the renamed token
                changed = changeTokenName(data, originalToken, renamedTokens[originalToken]) || changed;
            }
            if (changed) {
                (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_5__.storeFile)(tokensPath + file, data);
            }
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renameSpectrumTokens);


/***/ }),

/***/ "./src/operations/resolveMergeTokens.ts":
/*!**********************************************!*\
  !*** ./src/operations/resolveMergeTokens.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _core_getBranchUUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/getBranchUUID */ "./src/core/getBranchUUID.ts");
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/helpers */ "./src/core/helpers.ts");
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




function resolveMergeTokens(studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const result = [];
    for (const entries of studioProblems.merge) {
        let baseEntry;
        let deprecated = false;
        for (const entry of entries) {
            if ((0,_core_helpers__WEBPACK_IMPORTED_MODULE_3__.isDeprecated)(entry.path)) {
                const uuid = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(entry);
                if (uuid) {
                    studioTokens[uuid] = entry;
                }
                deprecated = true;
                continue;
            }
            if (!baseEntry && entry.path.join('.').indexOf('light') > 0) {
                baseEntry = entry;
            }
            if (!baseEntry && entry.path.join('.').indexOf('desktop') > 0) {
                baseEntry = entry;
            }
        }
        if (deprecated) {
            continue;
        }
        if (!baseEntry) {
            baseEntry = entries[0];
        }
        let targetUUID;
        if (Object.keys(spectrumProblems.branches).length) {
            const findUUID = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(baseEntry);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assert)(findUUID);
            targetUUID = (0,_core_getBranchUUID__WEBPACK_IMPORTED_MODULE_2__["default"])(spectrumProblems, findUUID);
        }
        else {
            targetUUID = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(baseEntry);
        }
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assert)(targetUUID);
        const newEntry = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.combineTokenEntries)(entries);
        (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenUUID)(newEntry, targetUUID);
        studioTokens[targetUUID] = newEntry;
        studioProblems.merged[targetUUID] = newEntry;
        result.push(newEntry.path.join('.'));
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveMergeTokens);


/***/ }),

/***/ "./src/operations/resolveSplitTokens.ts":
/*!**********************************************!*\
  !*** ./src/operations/resolveSplitTokens.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _getUniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getUniqueId */ "./src/operations/getUniqueId.ts");
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



function resolveSplitTokens(studioTokens, studioProblems, spectrumTokens, spectrumProblems) {
    const result = [];
    for (const uuid of Object.keys(studioProblems.split)) {
        if (Object.keys(spectrumProblems.branches).length) {
            for (const entry of studioProblems.split[uuid]) {
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenDuplicated)(entry, false);
                const newUUID = (0,_getUniqueId__WEBPACK_IMPORTED_MODULE_2__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, entry);
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenUUID)(entry, newUUID);
                studioTokens[newUUID] = entry;
                result.push(entry.path.join('.'));
            }
            delete studioProblems.split[uuid];
            delete studioTokens[uuid];
        }
        else if (studioProblems.split[uuid].length > 1) {
            let baseEntry;
            for (const entry of studioProblems.split[uuid]) {
                if (!baseEntry && entry.path.join('/').indexOf('/' + _constants__WEBPACK_IMPORTED_MODULE_0__["default"].LIGHT + '/') > 0) {
                    baseEntry = entry;
                }
                if (!baseEntry && entry.path.join('/').indexOf('/' + _constants__WEBPACK_IMPORTED_MODULE_0__["default"].DESKTOP + '/') > 0) {
                    baseEntry = entry;
                }
            }
            if (!baseEntry) {
                baseEntry = studioProblems.split[uuid][0];
            }
            for (const entry of studioProblems.split[uuid]) {
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenDuplicated)(entry, false);
                if (entry === baseEntry) {
                    studioTokens[uuid] = entry;
                }
                else {
                    const newUUID = (0,_getUniqueId__WEBPACK_IMPORTED_MODULE_2__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, entry);
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenUUID)(entry, newUUID);
                    studioTokens[newUUID] = entry;
                    result.push(entry.path.join('.'));
                }
            }
        }
        else if (studioProblems.split[uuid].length === 1) {
            throw new Error('UNHANDLED UUID SPLIT: ' + uuid);
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveSplitTokens);


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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
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


function checkName(entry, results) {
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(entry.value)) {
        // this should be a composite token, and we're just going to guess about the name if it isn't set
        const tokenSpectrumName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(entry);
        if (!tokenSpectrumName) {
            const name = entry.path.slice(1).join('-').replaceAll(' ', '-').toLowerCase();
            if (name !== tokenSpectrumName) {
                if (name && tokenSpectrumName) {
                    results[name] = tokenSpectrumName;
                }
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenSpectrumName)(entry, name);
            }
        }
    }
    else if (!(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.isColorSet)(entry)) {
        const name = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.cleanName)(entry.path[entry.path.length - 1]);
        let tokenSpectrumName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(entry);
        if (tokenSpectrumName) {
            tokenSpectrumName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.cleanName)(tokenSpectrumName);
            if (name !== tokenSpectrumName) {
                if (name && tokenSpectrumName) {
                    results[name] = tokenSpectrumName;
                }
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenSpectrumName)(entry, name);
            }
        }
    }
}
function updateTokenNameMetadata(studioTokens, studioProblems) {
    const results = {};
    // get name changes for existing entries
    for (const uuid of Object.keys(studioTokens)) {
        checkName(studioTokens[uuid], results);
    }
    // check the entries being added
    for (const entry of studioProblems.uuids) {
        checkName(entry, results);
    }
    // check the entries being merged
    for (const entries of studioProblems.merge) {
        for (const entry of entries) {
            checkName(entry, results);
        }
    }
    // check the entries being splt
    for (const uuid of Object.keys(studioProblems.split)) {
        for (const entry of studioProblems.split[uuid]) {
            checkName(entry, results);
        }
    }
    return results;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTokenNameMetadata);


/***/ }),

/***/ "./src/operations/verifyBranchSchemas.ts":
/*!***********************************************!*\
  !*** ./src/operations/verifyBranchSchemas.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _core_findBranchByUUID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/findBranchByUUID */ "./src/core/findBranchByUUID.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
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





function getTargetSetSchema(k, data) {
    const sets = Object.keys(data);
    let systems = 0;
    let themes = 0;
    let scales = 0;
    for (const set of sets) {
        _constants__WEBPACK_IMPORTED_MODULE_1__["default"].SYSTEMS.includes(set) && ++systems;
        _constants__WEBPACK_IMPORTED_MODULE_1__["default"].THEMES.includes(set) && ++themes;
        _constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCALES.includes(set) && ++scales;
    }
    if (systems && !themes && !scales) {
        return _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES['system-set'];
    }
    else if (!systems && themes && !scales) {
        return _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES['color-set'];
    }
    else if (!systems && !themes && scales) {
        return _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES['scale-set'];
    }
    else {
        throw new Error('UNHANDLED SET DATA: ' + k);
    }
}
function setBranchSchema(k, data) {
    let changes = 0;
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(data)) {
        if (data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SETS] && (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SETS])) {
            const schema = getTargetSetSchema(k, data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SETS]);
            if (!data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCHEMA] || (data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCHEMA] !== schema && data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCHEMA] !== _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES['system-set'])) {
                const newObject = {};
                if (data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].COMPONENT]) {
                    newObject[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].COMPONENT] = data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].COMPONENT];
                }
                newObject[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCHEMA] = schema;
                for (const key of Object.keys(data)) {
                    if (key !== _constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCHEMA) {
                        newObject[key] = data[key];
                    }
                    delete data[key];
                }
                for (const key of Object.keys(newObject)) {
                    data[key] = newObject[key];
                }
                changes++;
            }
        }
        for (const key of Object.keys(data)) {
            changes += setBranchSchema(key, data[key]);
        }
    }
    return changes;
}
function verifyBranchSchemas(studioTokens, spectrumTokens) {
    let totalSetSchemaChanges = 0;
    for (const uuid of Object.keys(studioTokens)) {
        if (spectrumTokens[uuid]) {
            // only update pre-existing entries
            const file = spectrumTokens[uuid].file;
            const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(file);
            const path = [];
            if ((0,_core_findBranchByUUID__WEBPACK_IMPORTED_MODULE_3__["default"])(data, uuid, path)) {
                const changes = setBranchSchema(path[0], data[path[0]]);
                if (changes) {
                    totalSetSchemaChanges += changes;
                    (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.storeFile)(file, data);
                }
            }
        }
    }
    if (totalSetSchemaChanges) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('\nUPDATED SET SCHEMAS: ' + totalSetSchemaChanges);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyBranchSchemas);


/***/ }),

/***/ "./src/operations/verifyValueTypes.ts":
/*!********************************************!*\
  !*** ./src/operations/verifyValueTypes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyValueTypes)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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




function checkValueTypes(data, key = undefined) {
    let changed = false;
    if (data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].VALUE] !== undefined && data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCHEMA]) {
        const value = data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].VALUE];
        const schema = data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCHEMA];
        // values are string by default, so just check for non-strings
        switch (schema.toLowerCase()) {
            case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES['gradient-stop']:
            case _config__WEBPACK_IMPORTED_MODULE_0__["default"].SCHEMA_TYPES['multiplier']:
                data[_constants__WEBPACK_IMPORTED_MODULE_1__["default"].VALUE] = Number(value);
                changed = true;
                break;
            default:
        }
    }
    for (const key of Object.keys(data)) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isObject)(data[key])) {
            changed = checkValueTypes(data[key], key) || changed;
        }
    }
    return changed;
}
function verifyValueTypes(spectrumTokens) {
    const files = [];
    for (const uuid in spectrumTokens) {
        const token = spectrumTokens[uuid];
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.assert)(token);
        if (!files.includes(token.file)) {
            files.push(token.file);
        }
    }
    for (const file of files) {
        const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.getFile)(file);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.assert)(data);
        if (checkValueTypes(data)) {
            (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_2__.storeFile)(file, data);
        }
    }
}


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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _reverse_sortTokenGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reverse/sortTokenGroup */ "./src/reverse/sortTokenGroup.ts");
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
            const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.getFile)(file);
            let changed = false;
            // a quick data format check...
            let valueKey = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALUE;
            let typeKey = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE;
            if (JSON.stringify(data).includes('$' + _constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALUE)) {
                valueKey = '$' + _constants__WEBPACK_IMPORTED_MODULE_2__["default"].VALUE;
                typeKey = '$' + _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE;
            }
            // check... stuff
            {
                const currentPath = [];
                const filePath = entry.path.slice(1);
                let definition = data;
                while (filePath.length) {
                    const p = filePath.shift();
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(p);
                    if (definition[p]) {
                        currentPath.push(p);
                        definition = definition[p];
                    }
                    else {
                        filePath.unshift(p);
                        break;
                    }
                }
                if (!definition || filePath.length) {
                    if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].REVERSE) {
                        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('ERROR - failed to find definition for ' + entry.path.join('.') + ' in ' + path__WEBPACK_IMPORTED_MODULE_0___default().basename(file));
                        continue;
                    }
                    else {
                        // we could be replacing a deprecated definition with a group,
                        // so... delete the definition data from the definition
                        if (definition[valueKey] !== undefined) {
                            for (const key of Object.keys(definition)) {
                                delete definition[key];
                            }
                        }
                        let root = undefined;
                        while (filePath.length) {
                            if (root) {
                                currentPath.push(root);
                                definition = definition[root];
                            }
                            root = filePath.shift();
                            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(root);
                            definition[root] = {};
                        }
                        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isObject)(definition));
                        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(root);
                        definition[root][valueKey] = entry.value;
                        definition[root][typeKey] = entry.type;
                        definition[root][_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS] = entry[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS];
                        (0,_reverse_sortTokenGroup__WEBPACK_IMPORTED_MODULE_6__["default"])(data, currentPath, file);
                        (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.storeFile)(file, data);
                        continue;
                    }
                }
                else if (definition[valueKey] === undefined) {
                    // if there's a token definition that isn't new but isn't already defined,
                    // it was probably deprecated - we can just skip it
                    continue;
                }
                const duplicated = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.getTokenDuplicated)(entry) ? true : false;
                const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.getTokenSpectrumName)(entry);
                if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.getTokenUUID)(definition) !== uuid) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.setTokenUUID)(definition, uuid);
                    changed = true;
                }
                // we only want to update the spectrum token name in the metadata if
                // it already exists in the metadata
                const tokenSpectrumName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.getTokenSpectrumName)(definition, false);
                if (tokenName && tokenSpectrumName && tokenSpectrumName !== tokenName) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.setTokenSpectrumName)(definition, tokenName);
                    changed = true;
                }
                if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.getTokenDeprecations)(definition) !== (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.getTokenDeprecations)(entry)) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.setTokenDeprecations)(definition, (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.getTokenDeprecations)(entry));
                    changed = true;
                }
                if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].DISABLE_TOKEN_DUPLICATION_METADATA) {
                    if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.getTokenDuplicated)(definition) !== duplicated) {
                        (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.setTokenDuplicated)(definition, duplicated);
                        changed = true;
                    }
                }
                else if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.getTokenDuplicated)(definition) !== undefined) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_4__.setTokenDuplicated)(definition, undefined);
                    changed = true;
                }
                if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].REVERSE) {
                    if (definition[valueKey] !== entry.value) {
                        definition[valueKey] = entry.value;
                        changed = true;
                    }
                }
            }
            // store file
            if (changed) {
                (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_3__.storeFile)(file, data);
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

/***/ "./src/reports/reportDescriptionChanges.ts":
/*!*************************************************!*\
  !*** ./src/reports/reportDescriptionChanges.ts ***!
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


function reportDescriptionChanges(studioTokens, spectrumTokens, changes) {
    const tokensChanged = [];
    for (const uuid of Object.keys(changes)) {
        const token = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(studioTokens[uuid]);
        if (token && !tokensChanged.includes(token)) {
            tokensChanged.push(token);
        }
    }
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('CHANGED DESCRIPTIONS: (' + tokensChanged.length + ') ' + tokensChanged.join(', '));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportDescriptionChanges);


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

function reportMissingStudioUUIDs(studioProblems) {
    for (const nouuid of studioProblems.uuids) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - studio definition missing uuid: ' + nouuid.path.join(','));
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
    if (newOnes.length)
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('NEW TOKENS: (' + newOnes.length + ') ' + newOnes.join(', '));
    if (changedOnes.length)
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('MODIFIED TOKENS: (' + changedOnes.length + ') ' + changedOnes.join(', '));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportNewTokens);


/***/ }),

/***/ "./src/reports/reportSchemaChanges.ts":
/*!********************************************!*\
  !*** ./src/reports/reportSchemaChanges.ts ***!
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


function reportSchemaChanges(studioTokens, spectrumTokens, changes) {
    const tokensChanged = [];
    for (const uuid of Object.keys(changes)) {
        let token = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(studioTokens[uuid]);
        if (token) {
            token = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.cleanName)(token);
        }
        if (token && !tokensChanged.includes(token)) {
            tokensChanged.push(token);
        }
    }
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('CHANGED SCHEMAS: (' + tokensChanged.length + ') ' + tokensChanged.join(', '));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportSchemaChanges);


/***/ }),

/***/ "./src/reports/reportSetConflicts.ts":
/*!*******************************************!*\
  !*** ./src/reports/reportSetConflicts.ts ***!
  \*******************************************/
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


function reportSetConflicts(studioTokens, spectrumTokens) {
    for (const uuid of Object.keys(studioTokens)) {
        if (spectrumTokens[uuid]) {
            const studioEntry = studioTokens[uuid];
            const spectrumEntry = spectrumTokens[uuid];
            const spectrumSets = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getValidSpectrumTokenSets)(spectrumEntry);
            const studioSetName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getSpectrumTokenSetName)(studioEntry);
            const warning = 'WARNING - MISMATCHED SET INFORMATION: ' + studioEntry.path + ' => ' + spectrumSets;
            // if (studioSetName.length && spectrumSets.length === 1 && studioSetName !== spectrumSets[0]) {
            //     cout(warning); // same number of sets but they differ
            // } else if (studioSetName.length && !spectrumSets.length) {
            //     cout(warning); // studio has a set but spectrum does not
            // } else if (!studioSetName.length && spectrumSets.length) {
            //     cout(warning); // no studio set but spectrum does
            // } else
            if (studioSetName.length && spectrumSets.length > 1) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)(warning); // spectrum has sets in sets
            }
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportSetConflicts);


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
    const types = [];
    entries.forEach((entry) => {
        const type = entry.type.toLowerCase();
        if (!types.includes(type)) {
            types.push(type);
        }
    });
    if (types.length) {
        msg = 'WARNING - studio token type collision: (' + uuid + ')';
    }
    else {
        msg = 'WARNING - studio token uuid collision: (' + uuid + ')';
    }
    entries.forEach((entry) => {
        msg += '\n' + entry.path + (types.length ? ' => ' + entry.type : '');
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
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)(formatStudioCollisionMessage(collision, studioProblems.collisions[collision]));
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

/***/ "./src/reverse/checkTokens.ts":
/*!************************************!*\
  !*** ./src/reverse/checkTokens.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _getSpectrumEntries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getSpectrumEntries */ "./src/reverse/getSpectrumEntries.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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



function checkTokens(studioTokens, spectrumTokens, spectrumProblems, checkCallback) {
    let valuesChanged = 0;
    // index our data by the token name
    const studioTokensByTokenName = {};
    const spectrumTokensByTokenName = {};
    for (const uuid in studioTokens) {
        const entry = studioTokens[uuid];
        const token = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(entry);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)(token);
        if (!spectrumTokensByTokenName[token]) {
            const spectrumEntries = (0,_getSpectrumEntries__WEBPACK_IMPORTED_MODULE_2__["default"])(spectrumTokens, spectrumProblems, token);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)(spectrumEntries.length);
            spectrumTokensByTokenName[token] = spectrumEntries;
        }
        if (!studioTokensByTokenName[token]) {
            studioTokensByTokenName[token] = [];
        }
        studioTokensByTokenName[token].push(entry);
    }
    for (const token in spectrumTokensByTokenName) {
        // index studio tokens by set name
        const studioTokenBySet = {};
        for (const studioToken of studioTokensByTokenName[token]) {
            const sets = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getSets)(studioToken);
            for (const set of sets) {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)(!studioTokenBySet[set]);
                studioTokenBySet[set] = studioToken;
            }
        }
        // index spectrum tokens by set name
        const spectrumTokenBySet = {};
        for (const spectrumToken of spectrumTokensByTokenName[token]) {
            if (!spectrumToken.sets.length) {
                for (const set in studioTokenBySet) {
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)(!spectrumTokenBySet[set]);
                    spectrumTokenBySet[set] = spectrumToken;
                }
            }
            else {
                for (const set of spectrumToken.sets) {
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)(!spectrumTokenBySet[set]);
                    spectrumTokenBySet[set] = spectrumToken;
                }
            }
        }
        // !!! we dupe so much, that this whole thing should just be a callback, same as the uuid checks
        // check if the tokens align or not per set
        for (const set in studioTokenBySet) {
            const studioToken = studioTokenBySet[set];
            const spectrumToken = spectrumTokenBySet[set];
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)(studioToken);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)(spectrumToken);
            valuesChanged += checkCallback(studioToken, spectrumToken, set, token) ? 1 : 0;
        }
    }
    return valuesChanged;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTokens);


/***/ }),

/***/ "./src/reverse/checkUUID.ts":
/*!**********************************!*\
  !*** ./src/reverse/checkUUID.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _getDestinationFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDestinationFile */ "./src/reverse/getDestinationFile.ts");
/* harmony import */ var _copyStudioToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copyStudioToken */ "./src/reverse/copyStudioToken.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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





function checkUUID(studioTokens, studioToken, spectrumToken, set, token) {
    const studioTokenUUID = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(studioToken);
    const spectrumTokenUUID = spectrumToken.uuid;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(studioTokenUUID);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(spectrumTokenUUID);
    // update the uuid if necessary
    if (studioTokenUUID !== spectrumTokenUUID) {
        if (!studioTokens[spectrumTokenUUID]) {
            // remove this set from the existing studio uuid entry
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(studioToken.files.length);
            if (studioToken.files.length === 1) {
                // REPLACE
                (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getSets)(studioToken)[0] === set);
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenUUID)(studioToken, spectrumTokenUUID);
                studioTokens[spectrumTokenUUID] = studioToken;
                delete studioTokens[studioTokenUUID];
                return true;
            }
            else if (studioToken.files.length > 1) {
                // REMOVE FROM THE EXISTING TOKEN DEFINITION
                // & CREATE A NEW TOKEN DEFINITION FOR IT
                const files = studioToken.files.filter((f) => f.includes((path__WEBPACK_IMPORTED_MODULE_0___default().sep) + set + '.json'));
                (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(files && files.length === 1);
                const file = files[0];
                studioToken.files.splice(studioToken.files.indexOf(file), 1);
                if (studioToken.files.length === 1) {
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenDuplicated)(studioToken, false);
                }
                const newStudioToken = (0,_copyStudioToken__WEBPACK_IMPORTED_MODULE_4__["default"])(studioToken);
                newStudioToken.files = [file];
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenUUID)(newStudioToken, spectrumTokenUUID);
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.setTokenDuplicated)(newStudioToken, false);
                studioTokens[spectrumTokenUUID] = newStudioToken;
                return true;
            }
        }
        else {
            const destStudioToken = studioTokens[spectrumTokenUUID];
            const destinationFile = (0,_getDestinationFile__WEBPACK_IMPORTED_MODULE_3__["default"])(studioToken, set);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(destinationFile);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(!destStudioToken.files.includes(destinationFile));
            destStudioToken.files.push(destinationFile);
            if (studioToken.files.length === 1) {
                delete studioTokens[studioTokenUUID];
            }
            else {
                throw new Error('REMOVE: UNSUPPORTED! => ' + set + ':' + token);
            }
            return true;
        }
    }
    return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkUUID);


/***/ }),

/***/ "./src/reverse/checkValue.ts":
/*!***********************************!*\
  !*** ./src/reverse/checkValue.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_getSpectrumValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/getSpectrumValue */ "./src/core/getSpectrumValue.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _getStudioValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getStudioValue */ "./src/reverse/getStudioValue.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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




function checkValue(studioTokens, studioToken, spectrumToken, set, token) {
    const studioTokenUUID = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenUUID)(studioToken);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(studioTokenUUID);
    // update the value if necessary
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(spectrumToken.value));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(studioToken.value));
    // ??? we always check references because they could be garbage values directly from spectrum-tokens
    //     and because we're using getSpectrumValue at the top level, these won't be caught correctly
    //     and I'm too lazy to update getStudioValue with all the same value transforms that the spectrum value has
    // ??? and we're also using this to conver rgb() values to hex
    if (studioToken.value.indexOf('rgb(') === 0 || spectrumToken.value[0] === '{' || (0,_core_getSpectrumValue__WEBPACK_IMPORTED_MODULE_0__["default"])(studioTokenUUID, studioTokens) !== spectrumToken.value) {
        const studioValue = (0,_getStudioValue__WEBPACK_IMPORTED_MODULE_3__["default"])(spectrumToken.value, set, studioTokens);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(studioValue));
        if (studioToken.value !== studioValue) {
            studioToken.value = studioValue;
            return true;
        }
    }
    return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkValue);


/***/ }),

/***/ "./src/reverse/copyStudioToken.ts":
/*!****************************************!*\
  !*** ./src/reverse/copyStudioToken.ts ***!
  \****************************************/
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
 * Copyright 2024 Adobe
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


function copyObject(obj) {
    const result = {};
    for (const key in obj) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj[key])) {
            result[key] = copyObject(obj[key]);
        }
        else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(obj[key])) {
            result[key] = obj[key].slice();
        }
        else {
            result[key] = obj[key];
        }
    }
    return result;
}
function copyStudioToken(studioToken) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(studioToken.value));
    const extensionData = copyObject(studioToken[_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS]);
    const result = { value: studioToken.value, type: studioToken.type, description: studioToken.description, path: studioToken.path.slice(), files: studioToken.files.slice(), dataSet: studioToken.dataSet, [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EXTENSIONS]: extensionData };
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyStudioToken);


/***/ }),

/***/ "./src/reverse/getDestinationFile.ts":
/*!*******************************************!*\
  !*** ./src/reverse/getDestinationFile.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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

function getDestinationFile(studioToken, set) {
    for (const file of studioToken.files) {
        if (set === path__WEBPACK_IMPORTED_MODULE_0___default().basename(file).split('.')[0]) {
            return file;
        }
    }
    return undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDestinationFile);


/***/ }),

/***/ "./src/reverse/getSpectrumEntries.ts":
/*!*******************************************!*\
  !*** ./src/reverse/getSpectrumEntries.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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
function getSpectrumEntries(spectrumTokens, spectrumProblems, token) {
    const result = [];
    for (const uuid in spectrumTokens) {
        if (spectrumTokens[uuid].name === token) {
            result.push(spectrumTokens[uuid]);
        }
    }
    for (const uuid in spectrumProblems.deprecated) {
        if (spectrumProblems.deprecated[uuid].name === token) {
            result.push(spectrumProblems.deprecated[uuid]);
        }
    }
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSpectrumEntries);


/***/ }),

/***/ "./src/reverse/getStudioValue.ts":
/*!***************************************!*\
  !*** ./src/reverse/getStudioValue.ts ***!
  \***************************************/
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
 * Copyright 2024 Adobe
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


function getStudioReference(value, set, studioTokens) {
    const token = value.replace('{', '').replace('}', '');
    let result = null;
    for (const uuid in studioTokens) {
        const studioToken = studioTokens[uuid];
        const sets = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getSets)(studioToken);
        if (sets.includes(set)) {
            if ((0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(studioToken) === token) {
                result = '{' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenName)(studioToken) + '}';
                break;
            }
        }
    }
    return result;
}
function toHex(color) {
    const bits = color.replace('rgb', '').replace('(', '').replace(')', '').split(',');
    const r = Math.round(Number(bits[0].trim())).toString(16).toUpperCase().padStart(2, '0');
    const g = Math.round(Number(bits[1].trim())).toString(16).toUpperCase().padStart(2, '0');
    const b = Math.round(Number(bits[2].trim())).toString(16).toUpperCase().padStart(2, '0');
    return '#' + r + g + b;
}
function getStudioValue(value, set, studioTokens) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(value));
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)(value.length);
    if (value[0] === '{') {
        const reference = getStudioReference(value, set, studioTokens);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.assert)(reference);
        value = reference ? reference : value;
    }
    else if (value.indexOf('rgb(') === 0) {
        value = toHex(value);
    }
    else if (value.indexOf('rgba(') === 0) {
        // rgba color
    }
    else if (value[0] === '#') {
        // hex color
    }
    else if (value.toLowerCase().indexOf('px') === value.length - 2) {
        // px value
    }
    else {
        // ??? we would handle other value type conversion stuff here if we needed to, but we don't
        throw new Error('VALUE IS NEITHER A COLOR OR REFERENCE: ' + value);
    }
    return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStudioValue);


/***/ }),

/***/ "./src/reverse/handleAddedTokens.ts":
/*!******************************************!*\
  !*** ./src/reverse/handleAddedTokens.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/tokenStuff */ "./src/core/tokenStuff.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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





function getCategoryFromFileName(file) {
    const fileName = path__WEBPACK_IMPORTED_MODULE_0___default().basename(file);
    let result = undefined;
    for (const category in _config__WEBPACK_IMPORTED_MODULE_1__["default"].SPECTRUM_FILES) {
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].SPECTRUM_FILES[category] === fileName) {
            result = category;
            break;
        }
    }
    return result;
}
function getNumericIndex(token) {
    const tokenBits = token.split('-');
    const lastBit = Number(tokenBits[tokenBits.length - 1]);
    if (!isNaN(lastBit)) {
        return lastBit.toString();
    }
    return false;
}
function findSiblingToken(studioTokens, token) {
    if (getNumericIndex(token) !== false) {
        const baseName = token.split('-').slice(0, -1).join('-');
        for (const uuid in studioTokens) {
            const studioToken = studioTokens[uuid];
            const tokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenSpectrumName)(studioToken);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)(tokenName);
            if (getNumericIndex(tokenName) !== false) {
                const baseTokenName = tokenName.split('-').slice(0, -1).join('-');
                if (baseTokenName === baseName) {
                    return studioToken;
                }
            }
        }
    }
    return null;
}
function getTokenFromSpectrum2(studioTokensS2, token) {
    for (const uuid in studioTokensS2) {
        const studioToken = studioTokensS2[uuid];
        const studioTokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenSpectrumName)(studioToken);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)(studioTokenName);
        if (token === studioTokenName) {
            return studioToken;
        }
    }
    return null;
}
function getTokenStudioTargets(token, category, tokenStudioFiles, studioTokensS2) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)(Object.keys(_config__WEBPACK_IMPORTED_MODULE_1__["default"].SPECTRUM_FILES).includes(category));
    let targetPath = null;
    let targetFile = null;
    let targetType = null;
    let targetDescription = undefined;
    let targetDataSet = null;
    // !!! lots of hard coding to spectrum version and path structure, fyi
    const studioTokenS2 = getTokenFromSpectrum2(studioTokensS2, token);
    targetPath = studioTokenS2 ? studioTokenS2.path : null;
    if (targetPath) {
        targetPath.shift();
    }
    targetType = studioTokenS2 ? studioTokenS2.type : null;
    targetDescription = studioTokenS2 ? studioTokenS2.description : undefined;
    targetDataSet = studioTokenS2 ? studioTokenS2.dataSet : null;
    switch (category) {
        case 'COLOR_PALETTE':
            {
                if (targetDataSet) {
                    targetFile = path__WEBPACK_IMPORTED_MODULE_0___default().join(tokenStudioFiles[targetDataSet], 'spectrum', 'palette');
                }
                if (targetPath) {
                    targetPath.unshift('spectrum/palette');
                }
            }
            break;
        case 'COLOR_ALIASES':
        case 'COLOR_SEMANTIC':
            {
                if (targetDataSet) {
                    targetFile = path__WEBPACK_IMPORTED_MODULE_0___default().join(tokenStudioFiles[targetDataSet], 'spectrum', 'alias');
                }
                if (targetPath) {
                    targetPath.unshift('spectrum/alias');
                }
            }
            break;
        case 'LAYOUT':
            {
                if (targetDataSet) {
                    targetFile = path__WEBPACK_IMPORTED_MODULE_0___default().join(tokenStudioFiles[targetDataSet], 'spectrum', 'layout');
                }
                if (targetPath) {
                    targetPath.unshift('spectrum/layout');
                }
            }
            break;
        default:
            throw new Error('getTokenStudioTargets: unhandled token type => ' + token + ' ' + category);
    }
    return { targetPath: targetPath, targetFile: targetFile, targetType: targetType, targetDescription: targetDescription, targetDataSet: targetDataSet, targetSets: studioTokenS2 ? (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getSets)(studioTokenS2) : [] };
}
function handleAddedTokens(studioTokens, spectrumTokens, studioTokensS2, tokenStudioFiles) {
    const missingSetTokens = {};
    const missingTokens = {};
    const COLOR_SETS = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].THEMES;
    const LAYOUT_SETS = _constants__WEBPACK_IMPORTED_MODULE_2__["default"].SCALES;
    for (const uuid in spectrumTokens) {
        if (!studioTokens[uuid]) {
            const tokenName = spectrumTokens[uuid].name;
            const sets = spectrumTokens[uuid].sets;
            if (sets.length) {
                for (const set of sets) {
                    if (!missingSetTokens[tokenName]) {
                        missingSetTokens[tokenName] = {};
                    }
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)(!missingSetTokens[tokenName][set]);
                    missingSetTokens[tokenName][set] = spectrumTokens[uuid];
                }
            }
            else {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)(!missingTokens[tokenName]);
                missingTokens[tokenName] = spectrumTokens[uuid];
            }
        }
    }
    let handled = 0;
    for (const token in missingSetTokens) {
        const sibling = findSiblingToken(studioTokens, token);
        if (sibling) {
            const numericIndex = getNumericIndex(token);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isString)(numericIndex));
            const targetPath = sibling.path.slice(0, -1);
            const siblingTokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenSpectrumName)(sibling);
            if (siblingTokenName && sibling.path.includes(siblingTokenName)) {
                targetPath.push(token);
            }
            else {
                targetPath.push(numericIndex);
            }
            const siblingFile = sibling.files[0];
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isString)(siblingFile));
            const targetFile = siblingFile.slice(0, siblingFile.lastIndexOf((path__WEBPACK_IMPORTED_MODULE_0___default().sep)) + 1);
            for (const set in missingSetTokens[token]) {
                const spectrumToken = missingSetTokens[token][set];
                const targetFiles = [];
                targetFiles.push(targetFile + set + '.json');
                const extensions = {
                    [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_STUDIO]: undefined,
                    [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM]: {
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME]: spectrumToken.name,
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID]: spectrumToken.uuid,
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE]: undefined,
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED]: undefined
                    }
                };
                const studioToken = { type: sibling.type, description: sibling.description, dataSet: sibling.dataSet, value: spectrumToken.value, files: targetFiles, path: targetPath, [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS]: extensions };
                studioTokens[spectrumToken.uuid] = studioToken;
            }
            handled++;
        }
        else {
            const category = getCategoryFromFileName(missingSetTokens[token][Object.keys(missingSetTokens[token])[0]].file);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)(category);
            const { targetPath, targetFile, targetType, targetDescription, targetDataSet } = getTokenStudioTargets(token, category, tokenStudioFiles, studioTokensS2);
            if (targetPath && targetFile && targetType && targetDataSet) {
                for (const set in missingSetTokens[token]) {
                    const spectrumToken = missingSetTokens[token][set];
                    const targetFiles = [];
                    targetFiles.push(path__WEBPACK_IMPORTED_MODULE_0___default().join(targetFile, set + '.json'));
                    const extensions = {
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_STUDIO]: undefined,
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM]: {
                            [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME]: spectrumToken.name,
                            [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID]: spectrumToken.uuid,
                            [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE]: undefined,
                            [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED]: undefined
                        }
                    };
                    const studioToken = { type: targetType, description: targetDescription, dataSet: targetDataSet, value: spectrumToken.value, files: targetFiles, path: targetPath, [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS]: extensions };
                    studioTokens[spectrumToken.uuid] = studioToken;
                }
                handled++;
            }
            else {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('WARNING - UNMERGED TOKEN: ' + token);
            }
        }
    }
    for (const token in missingTokens) {
        const sibling = findSiblingToken(studioTokens, token);
        if (sibling) {
            const numericIndex = getNumericIndex(token);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isString)(numericIndex));
            const targetPath = sibling.path.slice(0, -1);
            const siblingTokenName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenSpectrumName)(sibling);
            if (siblingTokenName && sibling.path.includes(siblingTokenName)) {
                targetPath.push(token);
            }
            else {
                targetPath.push(numericIndex);
            }
            const siblingFile = sibling.files[0];
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isString)(siblingFile));
            const targetFile = siblingFile.slice(0, siblingFile.lastIndexOf((path__WEBPACK_IMPORTED_MODULE_0___default().sep)) + 1);
            const targetFiles = [];
            const siblingSets = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getSets)(sibling);
            const activeSets = COLOR_SETS.includes(siblingSets[0]) ? COLOR_SETS : LAYOUT_SETS;
            for (const theme of activeSets) {
                targetFiles.push(targetFile + theme + '.json');
            }
            const spectrumToken = missingTokens[token];
            const extensions = {
                [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_STUDIO]: undefined,
                [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM]: {
                    [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME]: spectrumToken.name,
                    [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID]: spectrumToken.uuid,
                    [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE]: undefined,
                    [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED]: undefined
                }
            };
            const studioToken = { type: sibling.type, description: sibling.description, dataSet: sibling.dataSet, value: spectrumToken.value, files: targetFiles, path: targetPath, [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS]: extensions };
            studioTokens[spectrumToken.uuid] = studioToken;
            handled++;
        }
        else {
            const category = getCategoryFromFileName(missingTokens[token].file);
            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)(category);
            const { targetPath, targetFile, targetType, targetDescription, targetDataSet, targetSets } = getTokenStudioTargets(token, category, tokenStudioFiles, studioTokensS2);
            if (targetPath && targetFile && targetType && targetDataSet) {
                const targetFiles = [];
                (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)(targetSets.length);
                const activeSets = COLOR_SETS.includes(targetSets[0]) ? COLOR_SETS : LAYOUT_SETS;
                for (const set of activeSets) {
                    targetFiles.push(path__WEBPACK_IMPORTED_MODULE_0___default().join(targetFile, set + '.json'));
                }
                const spectrumToken = missingTokens[token];
                const extensions = {
                    [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_STUDIO]: undefined,
                    [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM]: {
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_NAME]: spectrumToken.name,
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_UUID]: spectrumToken.uuid,
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DUPLICATE]: undefined,
                        [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS_SPECTRUM_DEPRECATED]: undefined
                    }
                };
                const studioToken = { type: targetType, description: targetDescription, dataSet: targetDataSet, value: spectrumToken.value, files: targetFiles, path: targetPath, [_constants__WEBPACK_IMPORTED_MODULE_2__["default"].EXTENSIONS]: extensions };
                studioTokens[spectrumToken.uuid] = studioToken;
                handled++;
            }
            else {
                (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('WARNING - FAILED TO ADD TOKEN: ' + token);
            }
        }
    }
    const totalKeys = Object.keys(missingTokens).length + Object.keys(missingSetTokens).length;
    if (handled !== totalKeys) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('WARNING - FAILED TO ADD TOKENS: ' + (totalKeys - handled));
    }
    return handled;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleAddedTokens);


/***/ }),

/***/ "./src/reverse/sortTokenGroup.ts":
/*!***************************************!*\
  !*** ./src/reverse/sortTokenGroup.ts ***!
  \***************************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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






function sortTokenGroup(data, triggerPath, file) {
    // get the file name in s2
    let s2File = file.replace(_constants__WEBPACK_IMPORTED_MODULE_3__["default"].FOUNDATION, _constants__WEBPACK_IMPORTED_MODULE_3__["default"].S2).replace((path__WEBPACK_IMPORTED_MODULE_1___default().sep) + 'spectrum' + (path__WEBPACK_IMPORTED_MODULE_1___default().sep), (path__WEBPACK_IMPORTED_MODULE_1___default().sep) + 'spectrum2' + (path__WEBPACK_IMPORTED_MODULE_1___default().sep));
    if (path__WEBPACK_IMPORTED_MODULE_1___default().basename(s2File) === 'wireframe.json') {
        s2File = s2File.replace('wireframe.json', 'light.json');
    }
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(s2File)) {
        for (const dataSet in _config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_STUDIO_DATA_SETS) {
            const s2FileDataSet = s2File.replace((path__WEBPACK_IMPORTED_MODULE_1___default().sep) + 'spectrum2' + (path__WEBPACK_IMPORTED_MODULE_1___default().sep), (path__WEBPACK_IMPORTED_MODULE_1___default().sep) + 'spectrum2' + _config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_STUDIO_DATA_SETS[dataSet] + (path__WEBPACK_IMPORTED_MODULE_1___default().sep));
            if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(s2FileDataSet)) {
                s2File = s2FileDataSet;
                break;
            }
        }
    }
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(s2File !== file);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(s2File), s2File);
    // get the file data for s2
    const s2Tokens = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_4__.getFile)(s2File);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(s2Tokens);
    // figure out all the paths we need to sort
    const allPaths = [];
    for (let i = 1; i <= triggerPath.length; ++i) {
        allPaths.push(triggerPath.slice(0, i));
    }
    for (const currentPath of allPaths) {
        // find the corresponding group in s2
        let s2Group = s2Tokens;
        const s2Path = currentPath.slice();
        while (s2Group && s2Path.length) {
            const p = s2Path.shift();
            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(p);
            if (s2Group[p]) {
                s2Group = s2Group[p];
            }
            else {
                break;
            }
        }
        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(s2Group);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!s2Path.length);
        // get the token order in s2 for the group
        const tokenOrder = Object.keys(s2Group);
        // find the corresponding group in foundations
        let sortGroup = data;
        const sortPath = currentPath.slice();
        while (sortGroup && sortPath.length) {
            const p = sortPath.shift();
            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(p);
            if (sortGroup[p]) {
                sortGroup = sortGroup[p];
            }
            else {
                break;
            }
        }
        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(sortGroup);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!sortPath.length);
        // store the foundation tokens in a temp object
        // and clear the foundation parent object
        const temp = {};
        for (const key in sortGroup) {
            temp[key] = sortGroup[key];
            delete sortGroup[key];
        }
        // add back the foundation tokens in proper order
        for (const key of Object.keys(temp).sort((a, b) => {
            return tokenSort(a, b, tokenOrder);
        })) {
            sortGroup[key] = temp[key];
        }
    }
    // custom sorting function
    function tokenSort(a, b, order) {
        if (a === b) {
            return 0;
        }
        if (!order.includes(a) && !order.includes(b)) {
            return a < b ? -1 : 1;
        }
        else if (order.includes(a) && !order.includes(b)) {
            return -1;
        }
        else if (!order.includes(a) && order.includes(b)) {
            return 1;
        }
        if (order.indexOf(a) === order.indexOf(b)) {
            return 0;
        }
        else if (order.indexOf(a) < order.indexOf(b)) {
            return -1;
        }
        else if (order.indexOf(a) > order.indexOf(b)) {
            return 1;
        }
        return a < b ? -1 : 1;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortTokenGroup);


/***/ }),

/***/ "./src/sync.ts":
/*!*********************!*\
  !*** ./src/sync.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _syncToSpectrum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syncToSpectrum */ "./src/syncToSpectrum.ts");
/* harmony import */ var _syncToStudio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syncToStudio */ "./src/syncToStudio.ts");
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
                _config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_STUDIO = args[arg];
                break;
            case 'destination':
                _config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_SPECTRUM = args[arg];
                break;
            case 'test':
                _config__WEBPACK_IMPORTED_MODULE_2__["default"].TESTING = args[arg];
                break;
            case 'action':
                _config__WEBPACK_IMPORTED_MODULE_2__["default"].SUPPRESS_COUT = true; // console log will be written to the action summary, instead
                _config__WEBPACK_IMPORTED_MODULE_2__["default"].AUTOMATION = true; // in case we want to format output for github
                break;
        }
    }
}
function writeCoutLog() {
    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_2__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_2__["default"].COUT_LOG), (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getcout)().join('\n') + '\n', { encoding: 'utf8', flag: 'w' });
}
async function main() {
    try {
        // sanitize the source/destination paths - these will be used in various read/write operations
        const TOKENS_SPECTRUM_SANITIZED = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_SPECTRUM);
        const TOKENS_STUDIO_SANITIZED = {};
        for (const dataset in _config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_STUDIO_DATA_SETS) {
            TOKENS_STUDIO_SANITIZED[dataset] = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_STUDIO + _config__WEBPACK_IMPORTED_MODULE_2__["default"].TOKENS_STUDIO_DATA_SETS[dataset] + (path__WEBPACK_IMPORTED_MODULE_1___default().sep));
        }
        // make sure the output log directory exists
        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_2__["default"].OUTPUT_LOGS))) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_2__["default"].OUTPUT_LOGS));
        }
        if (!_config__WEBPACK_IMPORTED_MODULE_2__["default"].REVERSE) {
            (0,_syncToSpectrum__WEBPACK_IMPORTED_MODULE_4__["default"])(TOKENS_SPECTRUM_SANITIZED, TOKENS_STUDIO_SANITIZED);
        }
        else {
            (0,_syncToStudio__WEBPACK_IMPORTED_MODULE_5__["default"])(TOKENS_SPECTRUM_SANITIZED, TOKENS_STUDIO_SANITIZED);
        }
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

/***/ "./src/syncToSpectrum.ts":
/*!*******************************!*\
  !*** ./src/syncToSpectrum.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony import */ var _operations_updateTokenNameMetadata__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./operations/updateTokenNameMetadata */ "./src/operations/updateTokenNameMetadata.ts");
/* harmony import */ var _operations_resolveSplitTokens__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./operations/resolveSplitTokens */ "./src/operations/resolveSplitTokens.ts");
/* harmony import */ var _operations_writeStudioTokens__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./operations/writeStudioTokens */ "./src/operations/writeStudioTokens.ts");
/* harmony import */ var _operations_getModifiedTokens__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./operations/getModifiedTokens */ "./src/operations/getModifiedTokens.ts");
/* harmony import */ var _operations_checkSchemaChanges__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./operations/checkSchemaChanges */ "./src/operations/checkSchemaChanges.ts");
/* harmony import */ var _reports_reportSchemaChanges__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./reports/reportSchemaChanges */ "./src/reports/reportSchemaChanges.ts");
/* harmony import */ var _operations_verifyBranchSchemas__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./operations/verifyBranchSchemas */ "./src/operations/verifyBranchSchemas.ts");
/* harmony import */ var _operations_checkForRecycledUUIDs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./operations/checkForRecycledUUIDs */ "./src/operations/checkForRecycledUUIDs.ts");
/* harmony import */ var _reports_reportSetConflicts__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./reports/reportSetConflicts */ "./src/reports/reportSetConflicts.ts");
/* harmony import */ var _operations_checkModes__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./operations/checkModes */ "./src/operations/checkModes.ts");
/* harmony import */ var _operations_resolveMergeTokens__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./operations/resolveMergeTokens */ "./src/operations/resolveMergeTokens.ts");
/* harmony import */ var _operations_checkSets__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./operations/checkSets */ "./src/operations/checkSets.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _operations_verifyValueTypes__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./operations/verifyValueTypes */ "./src/operations/verifyValueTypes.ts");
/* harmony import */ var _operations_checkDescriptionChanges__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./operations/checkDescriptionChanges */ "./src/operations/checkDescriptionChanges.ts");
/* harmony import */ var _reports_reportDescriptionChanges__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./reports/reportDescriptionChanges */ "./src/reports/reportDescriptionChanges.ts");
/* harmony import */ var _operations_checkModelessTokenAliases__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./operations/checkModelessTokenAliases */ "./src/operations/checkModelessTokenAliases.ts");
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./core/helpers */ "./src/core/helpers.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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













































function syncToSpectrum(TOKENS_SPECTRUM_SANITIZED, TOKENS_STUDIO_SANITIZED) {
    // load token data from the data sets
    const { spectrumTokens, spectrumProblems } = (0,_operations_readSpectrumTokens__WEBPACK_IMPORTED_MODULE_4__["default"])(TOKENS_SPECTRUM_SANITIZED, _config__WEBPACK_IMPORTED_MODULE_1__["default"].SYSTEM);
    const { studioTokens, studioProblems } = (0,_operations_readStudioTokens__WEBPACK_IMPORTED_MODULE_3__["default"])(TOKENS_STUDIO_SANITIZED);
    // ensure that the token metadata has the proper spectrum token name
    // ... this will only check tokens from the non-color set, the color set
    // needs to be explicitly defined since those differ, currently
    const tokenMetadataNameChanges = (0,_operations_updateTokenNameMetadata__WEBPACK_IMPORTED_MODULE_27__["default"])(studioTokens, studioProblems);
    // ??? we do this before doing any further processing of the token data just
    // in case there are dependencies on the spectrum token name in any of the
    // following operations, but this end up being cumbersome, as we need to check
    // a bunch of entries in studioProblems :/
    // we'll need to keep track of these...
    let addedUUIDs = [];
    // fix missing uuids: if a token marked as new in tokens studio already has an entry in spectrum-tokens
    // then we should be using the uuids from spectrum-tokens, and *not* treating this token as new
    addedUUIDs = addedUUIDs.concat((0,_operations_checkForRecycledUUIDs__WEBPACK_IMPORTED_MODULE_34__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems));
    // resolve splitting a single token definition into a set of token definitions
    if (Object.keys(studioProblems.split).length) {
        addedUUIDs = addedUUIDs.concat((0,_operations_resolveSplitTokens__WEBPACK_IMPORTED_MODULE_28__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems));
    }
    // resolve merging multiple token definitions into a single token definition
    if (Object.keys(studioProblems.merge).length) {
        addedUUIDs = addedUUIDs.concat((0,_operations_resolveMergeTokens__WEBPACK_IMPORTED_MODULE_37__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems));
    }
    // collect token name changes (from the tokens studio extension metadata)
    // ... this operation can identify and register tokens that need new uuids
    // because of name changes, so ensure this happens before addUUIDs is called
    const renamedTokens = (0,_operations_checkNameChanges__WEBPACK_IMPORTED_MODULE_17__["default"])(spectrumTokens, studioTokens, studioProblems);
    // deal with missing uuids in token studio data: create them or report them
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_UUIDS_FOR_TOKENS_STUDIO) {
        addedUUIDs = addedUUIDs.concat((0,_operations_addUUIDs__WEBPACK_IMPORTED_MODULE_15__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems));
    }
    else {
        (0,_reports_reportMissingStudioUUIDs__WEBPACK_IMPORTED_MODULE_7__["default"])(studioProblems);
    }
    // make sure we actually have tokens studio data...
    if (!Object.keys(studioTokens).length) {
        throw new Error('MISSING TOKENS STUDIO DATA');
    }
    // need to check that token definitions not already captured by split/merge
    // need to also have a split merge done to them, too
    (0,_operations_checkSets__WEBPACK_IMPORTED_MODULE_38__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems);
    // check mode/set usage in studio tokens now that all our token juggling is complete
    (0,_operations_checkModes__WEBPACK_IMPORTED_MODULE_36__["default"])(studioTokens, studioProblems);
    // report uuid collisions (there are multiple entries in a data set for a single uuid)
    (0,_reports_reportUUIDCollisions__WEBPACK_IMPORTED_MODULE_6__["default"])(studioProblems, spectrumProblems);
    // report missing uuids in the spectrum-tokens data
    (0,_reports_reportMissingSpectrumUUIDs__WEBPACK_IMPORTED_MODULE_8__["default"])(spectrumProblems);
    // report missing tokens studio mode entries
    (0,_reports_reportMissingStudioModes__WEBPACK_IMPORTED_MODULE_21__["default"])(studioProblems);
    // we should be checking that tokens are in the same sets between tokens studio and spectrum-tokens
    (0,_reports_reportSetConflicts__WEBPACK_IMPORTED_MODULE_35__["default"])(studioTokens, spectrumTokens);
    // report missing spectrum-tokens set entries
    (0,_reports_reportMissingSpectrumSets__WEBPACK_IMPORTED_MODULE_20__["default"])(spectrumTokens, spectrumProblems, studioProblems.usedModes);
    // report deprecated token usage in tokens studio data
    (0,_reports_reportDeprecatedTokenUsage__WEBPACK_IMPORTED_MODULE_26__["default"])(studioTokens, spectrumTokens, spectrumProblems);
    // report missing token name in metadata
    (0,_reports_reportMissingStudioTokenNames__WEBPACK_IMPORTED_MODULE_11__["default"])(studioTokens);
    // report token counts
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_VERBOSE) {
        (0,_reports_reportTokenCounts__WEBPACK_IMPORTED_MODULE_5__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems);
    }
    // we want to gather all the tokens that will
    // need to be added/re-added to spectrum
    const newTokens = [];
    // collect actual new uuids
    Object.keys(studioTokens).forEach((uuid) => {
        if (!Object.keys(spectrumTokens).includes(uuid) && !Object.keys(spectrumProblems.collisions).includes(uuid) && !Object.keys(spectrumProblems.deprecated).includes(uuid)) {
            if (studioTokens[uuid] && !(0,_core_helpers__WEBPACK_IMPORTED_MODULE_44__.isDeprecated)(studioTokens[uuid].path) && !newTokens.includes(studioTokens[uuid])) {
                newTokens.push(studioTokens[uuid]);
            }
        }
    });
    // collect uuids involved in replacement, that we know about
    Object.keys(studioProblems.split).forEach((uuid) => {
        if (!Object.keys(spectrumProblems.collisions).includes(uuid) && !Object.keys(spectrumProblems.deprecated).includes(uuid)) {
            if (studioTokens[uuid] && !(0,_core_helpers__WEBPACK_IMPORTED_MODULE_44__.isDeprecated)(studioTokens[uuid].path) && !newTokens.includes(studioTokens[uuid])) {
                newTokens.push(studioTokens[uuid]);
            }
        }
    });
    Object.keys(studioProblems.merged).forEach((uuid) => {
        if (!Object.keys(spectrumProblems.collisions).includes(uuid) && !Object.keys(spectrumProblems.deprecated).includes(uuid)) {
            if (studioTokens[uuid] && !(0,_core_helpers__WEBPACK_IMPORTED_MODULE_44__.isDeprecated)(studioTokens[uuid].path) && !newTokens.includes(studioTokens[uuid])) {
                newTokens.push(studioTokens[uuid]);
            }
        }
    });
    // this searches for tokens that are considered new from the
    // tokens studio data perspective but have pre-existing definitions
    // in spectrum-tokens; likely as a result of running a sync
    // operation multiple times on the same spectrum-tokens branch
    // (which could happen if we created a branch for engineers to test)
    (0,_operations_getModifiedTokens__WEBPACK_IMPORTED_MODULE_30__["default"])(studioTokens, spectrumTokens, newTokens);
    // collect deleted tokens
    let deprecatedTokens = [];
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].CHECK_FOR_DELETED_TOKENS) {
        deprecatedTokens = (0,_operations_checkForDeprecatedTokens__WEBPACK_IMPORTED_MODULE_18__["default"])(studioTokens, studioProblems, spectrumTokens, spectrumProblems, newTokens);
    }
    // collect value changes
    const outdatedValues = (0,_operations_checkValueChanges__WEBPACK_IMPORTED_MODULE_16__["default"])(studioTokens, spectrumTokens);
    // collect schema changes
    const outdatedSchemas = (0,_operations_checkSchemaChanges__WEBPACK_IMPORTED_MODULE_31__["default"])(studioTokens, spectrumTokens);
    // collect description changes
    const outdatedDescriptions = (0,_operations_checkDescriptionChanges__WEBPACK_IMPORTED_MODULE_41__["default"])(studioTokens, spectrumTokens);
    // collect modeless alias errors
    (0,_operations_checkModelessTokenAliases__WEBPACK_IMPORTED_MODULE_43__["default"])(studioTokens, studioProblems);
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
    if (newTokens.length || Object.keys(renamedTokens).length || deprecatedTokens.length || Object.keys(outdatedValues).length || Object.keys(outdatedSchemas).length || Object.keys(outdatedDescriptions).length) {
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
        if (Object.keys(outdatedSchemas).length) {
            (0,_reports_reportSchemaChanges__WEBPACK_IMPORTED_MODULE_32__["default"])(studioTokens, spectrumTokens, outdatedSchemas);
        }
        if (Object.keys(outdatedDescriptions).length) {
            (0,_reports_reportDescriptionChanges__WEBPACK_IMPORTED_MODULE_42__["default"])(studioTokens, spectrumTokens, outdatedDescriptions);
        }
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].AUTOMATION) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('```\n</p></details>');
        }
    }
    // store studio token changes
    (0,_operations_writeStudioTokens__WEBPACK_IMPORTED_MODULE_29__["default"])(studioTokens);
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
        newTokenData = (0,_operations_formatNewSpectrumTokens__WEBPACK_IMPORTED_MODULE_13__["default"])(newTokens, studioTokens);
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
    if (Object.keys(outdatedValues).length || Object.keys(outdatedSchemas).length || Object.keys(outdatedDescriptions).length) {
        changedTokenData = (0,_operations_formatChangedSpectrumTokens__WEBPACK_IMPORTED_MODULE_14__["default"])(outdatedValues, outdatedSchemas, outdatedDescriptions, studioTokens, studioProblems, spectrumTokens, spectrumProblems);
        if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED), JSON.stringify(changedTokenData, null, 2), { encoding: 'utf8', flag: 'w' });
        }
    }
    else if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED) {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED))) {
            fs__WEBPACK_IMPORTED_MODULE_0___default().rmSync((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].OUTPUT_LOGS + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_OUT_CHANGED));
        }
    }
    // RENAME
    // If a spectrum token was renamed, we will deprecate the original definition in spectrum-tokens
    // and forward the value of that definition to the new token definition via an alias.
    // And alias reference to the old token will be changed to reference the new token definition.
    (0,_operations_renameSpectrumTokens__WEBPACK_IMPORTED_MODULE_23__["default"])(TOKENS_SPECTRUM_SANITIZED, renamedTokens);
    // ADD
    // New token definitions will be added to spectrum-tokens.
    // Also, tokens that were renamed will get their new token definition added here.
    // Also, tokens whose sets were merged will have their definition replaced here.
    // Also, Tokens whose value was split into sets will have their definition replaced here.
    // (The rename data is used to target the location for new tokens created as part of a rename operation.)
    (0,_operations_addSpectrumTokens__WEBPACK_IMPORTED_MODULE_25__["default"])(TOKENS_SPECTRUM_SANITIZED, studioTokens, studioProblems, spectrumTokens, spectrumProblems, newTokenData, renamedTokens);
    // CHANGE
    // This will update the value and/or schema of existing tokens.
    // I think there is some likelihood of references both being changed as part of a rename and here, though.
    (0,_operations_changeSpectrumTokens__WEBPACK_IMPORTED_MODULE_24__["default"])(spectrumTokens, changedTokenData);
    // DEPRECATE
    // There's a couple group of tokens here: ones that aren't found in tokens studio,
    // and ones that have the buster symbol in their path name. Those will be marked
    // as deprecated if they aren't already.
    (0,_operations_deprecateSpectrumTokens__WEBPACK_IMPORTED_MODULE_22__["default"])(studioTokens, spectrumTokens, spectrumProblems, deprecatedTokens);
    // SCHEMAS
    // This is a check that runs through all the definitions in tokens studio and specifically
    // looks to make sure the schema in spectrum-tokens for a set is correct. The value schemas
    // will be checked above, but this just verifies the theme/scale set if needed.
    (0,_operations_verifyBranchSchemas__WEBPACK_IMPORTED_MODULE_33__["default"])(studioTokens, spectrumTokens);
    // VALUE TYPES
    // We're supporting number/float & string as value types now in spectrum-tokens...
    // so verify the value type for spectrum-tokens is correct
    if (_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_STUDIO === _config__WEBPACK_IMPORTED_MODULE_1__.SPECTRUM2) {
        (0,_operations_verifyValueTypes__WEBPACK_IMPORTED_MODULE_40__["default"])(spectrumTokens);
    }
    // all done!
    if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].TESTING) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('');
        (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_39__.writeFiles)();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('\nSYNC COMPLETE');
    }
    else {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.cout)('\nTEST COMPLETE');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (syncToSpectrum);


/***/ }),

/***/ "./src/syncToStudio.ts":
/*!*****************************!*\
  !*** ./src/syncToStudio.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _operations_readSpectrumTokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations/readSpectrumTokens */ "./src/operations/readSpectrumTokens.ts");
/* harmony import */ var _operations_readStudioTokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operations/readStudioTokens */ "./src/operations/readStudioTokens.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _reverse_checkTokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reverse/checkTokens */ "./src/reverse/checkTokens.ts");
/* harmony import */ var _reverse_checkUUID__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reverse/checkUUID */ "./src/reverse/checkUUID.ts");
/* harmony import */ var _reverse_checkValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reverse/checkValue */ "./src/reverse/checkValue.ts");
/* harmony import */ var _reverse_handleAddedTokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reverse/handleAddedTokens */ "./src/reverse/handleAddedTokens.ts");
/* harmony import */ var _operations_writeStudioTokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./operations/writeStudioTokens */ "./src/operations/writeStudioTokens.ts");
/* harmony import */ var _core_fileCaching__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/fileCaching */ "./src/core/fileCaching.ts");
/* harmony import */ var _core_tokenStuff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/tokenStuff */ "./src/core/tokenStuff.ts");
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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













function syncToStudio(TOKENS_SPECTRUM_SANITIZED, TOKENS_STUDIO_SANITIZED) {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].AUTOMATION === false); // we should only run this locally
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_STUDIO === _config__WEBPACK_IMPORTED_MODULE_1__["default"].SPECTRUM[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].FOUNDATION]); // ensure we're modifiying the foundation data
    const SPECTRUM2_SANITIZED = {};
    for (const dataset in _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_STUDIO_DATA_SETS) {
        SPECTRUM2_SANITIZED[dataset] = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.sanitizePath)(_config__WEBPACK_IMPORTED_MODULE_1__["default"].SPECTRUM[_constants__WEBPACK_IMPORTED_MODULE_2__["default"].S2] + _config__WEBPACK_IMPORTED_MODULE_1__["default"].TOKENS_STUDIO_DATA_SETS[dataset] + (path__WEBPACK_IMPORTED_MODULE_0___default().sep));
    }
    const { spectrumTokens, spectrumProblems } = (0,_operations_readSpectrumTokens__WEBPACK_IMPORTED_MODULE_3__["default"])(TOKENS_SPECTRUM_SANITIZED, _config__WEBPACK_IMPORTED_MODULE_1__["default"].SYSTEM);
    const { studioTokens, studioProblems } = (0,_operations_readStudioTokens__WEBPACK_IMPORTED_MODULE_4__["default"])(TOKENS_STUDIO_SANITIZED);
    const { studioTokens: studioTokensS2, studioProblems: studioProblemsS2 } = (0,_operations_readStudioTokens__WEBPACK_IMPORTED_MODULE_4__["default"])(SPECTRUM2_SANITIZED); // we're going to leverage this for S2 token paths
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!Object.keys(studioProblems.collisions).length);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!Object.keys(studioProblems.split).length);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!studioProblems.merge.length);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!studioProblems.uuids.length);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!Object.keys(studioProblemsS2.collisions).length);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!Object.keys(studioProblemsS2.split).length);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!studioProblemsS2.merge.length);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(!studioProblemsS2.uuids.length);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.assert)(Object.keys(studioTokensS2).length);
    function checkUUIDCallback(studioToken, spectrumToken, set, token) {
        return (0,_reverse_checkUUID__WEBPACK_IMPORTED_MODULE_7__["default"])(studioTokens, studioToken, spectrumToken, set, token);
    }
    function checkValueCallback(studioToken, spectrumToken, set, token) {
        return (0,_reverse_checkValue__WEBPACK_IMPORTED_MODULE_8__["default"])(studioTokens, studioToken, spectrumToken, set, token);
    }
    const uuidUpdated = (0,_reverse_checkTokens__WEBPACK_IMPORTED_MODULE_6__["default"])(studioTokens, spectrumTokens, spectrumProblems, checkUUIDCallback);
    const tokensAdded = (0,_reverse_handleAddedTokens__WEBPACK_IMPORTED_MODULE_9__["default"])(studioTokens, spectrumTokens, studioTokensS2, TOKENS_STUDIO_SANITIZED);
    const valuesChanged = (0,_reverse_checkTokens__WEBPACK_IMPORTED_MODULE_6__["default"])(studioTokens, spectrumTokens, spectrumProblems, checkValueCallback);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('UUID Updated: ' + uuidUpdated);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('TOKENS Added: ' + tokensAdded);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('VALUES Changed: ' + valuesChanged);
    // ??? fix all the file paths...
    for (const uuid in studioTokens) {
        studioTokens[uuid].files = studioTokens[uuid].files.map((f) => {
            return f.replace('-non-colors', '').replace('-colors', '');
        });
    }
    ///////////////////////////////////////////////////////////
    for (const uuid in spectrumTokens) {
        if (!studioTokens[uuid]) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('WARNING - FAILED TO MERGE TOKEN DEFINITION FOR: ' + spectrumTokens[uuid].name + ' ' + uuid + (spectrumTokens[uuid].sets.length ? ' (' + spectrumTokens[uuid].sets + ')' : ''));
        }
    }
    for (const uuid in studioTokens) {
        if (!spectrumTokens[uuid] && !spectrumProblems.deprecated[uuid]) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('ERROR - EXTRA TOKEN STUDIO DEFINITION NOT IN SPECTRUM-TOKENS: ' + studioTokens[uuid].path + ' => ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_12__.getTokenSpectrumName)(studioTokens[uuid]) + ' ' + uuid);
        }
    }
    ///////////////////////////////////////////////////////////
    // !!! RGB VALUES NEED TO BE HEX
    if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].TESTING) {
        (0,_operations_writeStudioTokens__WEBPACK_IMPORTED_MODULE_10__["default"])(studioTokens);
        (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_11__.writeFiles)();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('SYNC COMPLETE');
    }
    else {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('TEST COMPLETE');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (syncToStudio);


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sync.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUMsR0FBdUIsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBRWpILHVDQUF1QztJQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssTUFBTSxFQUFFO1FBQ25CLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDWDtJQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQzNDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQ2pCLEtBQUssR0FBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUM5RDtTQUFNO1FBQ0gsS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNsRDtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFF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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxzR0FBc0c7V0FDdEc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ2hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL2NvbmZpZy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29tcG9zaXRlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9maWxlQ2FjaGluZy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9maW5kQnJhbmNoQnlVVUlELnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL2dldEJyYW5jaFVVSUQudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZ2V0RXF1aXZhbGVudFNwZWN0cnVtUmVmZXJlbmNlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9nZXRFcXVpdmFsZW50U3BlY3RydW1WYWx1ZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9nZXRTcGVjdHJ1bVZhbHVlLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvcHJpbnRhYmxlU2V0TmFtZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9zY2hlbWFTdHVmZi50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS90b2tlblN0dWZmLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2FkZFNwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2FkZFVVSURzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoYW5nZVNwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrRGVzY3JpcHRpb25DaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrRm9yRGVwcmVjYXRlZFRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja0ZvclJlY3ljbGVkVVVJRHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tNb2RlbGVzc1Rva2VuQWxpYXNlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja01vZGVzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrTmFtZUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tTY2hlbWFDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrU2V0cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja1ZhbHVlQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9kZXByZWNhdGVTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9mb3JtYXRDaGFuZ2VkU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZm9ybWF0TmV3U3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZ2V0TW9kaWZpZWRUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZ2V0VW5pcXVlSWQudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcHJvY2Vzc1N0dWRpb1Rva2VuRGF0YS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9yZWFkU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVhZFN0dWRpb1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9yZW5hbWVTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9yZXNvbHZlTWVyZ2VUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVzb2x2ZVNwbGl0VG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3VwZGF0ZVRva2VuTmFtZU1ldGFkYXRhLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3ZlcmlmeUJyYW5jaFNjaGVtYXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvdmVyaWZ5VmFsdWVUeXBlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy93cml0ZVN0dWRpb1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnREZWxldGVkVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydERlcHJlY2F0ZWRUb2tlblVzYWdlLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydERlc2NyaXB0aW9uQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3BlY3RydW1TZXRzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTcGVjdHJ1bVVVSURzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTdHVkaW9Nb2Rlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3R1ZGlvVG9rZW5OYW1lcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3R1ZGlvVVVJRHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TmFtZUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TmV3VG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFNjaGVtYUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0U2V0Q29uZmxpY3RzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFRva2VuQ291bnRzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFVVSURDb2xsaXNpb25zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFZhbHVlQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9jaGVja1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9jaGVja1VVSUQudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvY2hlY2tWYWx1ZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9jb3B5U3R1ZGlvVG9rZW4udHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvZ2V0RGVzdGluYXRpb25GaWxlLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXZlcnNlL2dldFNwZWN0cnVtRW50cmllcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9nZXRTdHVkaW9WYWx1ZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9oYW5kbGVBZGRlZFRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9zb3J0VG9rZW5Hcm91cC50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvc3luYy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvc3luY1RvU3BlY3RydW0udHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3N5bmNUb1N0dWRpby50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImNyeXB0b1wiIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6b3NcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6cHJvY2Vzc1wiIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTp0dHlcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdmVuZG9yL2Fuc2ktc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdmVuZG9yL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=