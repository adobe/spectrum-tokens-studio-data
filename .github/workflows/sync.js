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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
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

const COMPOSITE_TYPES = ['dropShadow', 'typography'];
function isDropShadow(value) {
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(value))
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
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(value))
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
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && (isDropShadow(value) || isTypography(value));
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
            if (types && tokenEntry.type && !types.includes(tokenEntry.type.toLowerCase())) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDLEdBQXVCLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUVqSCx1Q0FBdUM7SUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFBRTtRQUNuQixDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ1g7SUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNqQixLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDOUQ7U0FBTTtRQUNILEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDbEQ7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMs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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NoRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9jb25maWcudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvbXBvc2l0ZVR5cGVzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZmlsZUNhY2hpbmcudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZmluZEJyYW5jaEJ5VVVJRC50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9nZXRCcmFuY2hVVUlELnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL2dldEVxdWl2YWxlbnRTcGVjdHJ1bVJlZmVyZW5jZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZ2V0RXF1aXZhbGVudFNwZWN0cnVtVmFsdWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZ2V0U3BlY3RydW1WYWx1ZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9oZWxwZXJzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL3ByaW50YWJsZVNldE5hbWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvc2NoZW1hU3R1ZmYudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvdG9rZW5TdHVmZi50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvaGVscGVycy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9hZGRTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9hZGRVVUlEcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGFuZ2VTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja0Rlc2NyaXB0aW9uQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja0ZvckRlcHJlY2F0ZWRUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tGb3JSZWN5Y2xlZFVVSURzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrTW9kZWxlc3NUb2tlbkFsaWFzZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tNb2Rlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja05hbWVDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrU2NoZW1hQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja1NldHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tWYWx1ZUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZGVwcmVjYXRlU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZm9ybWF0Q2hhbmdlZFNwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2Zvcm1hdE5ld1NwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2dldE1vZGlmaWVkVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2dldFVuaXF1ZUlkLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3Byb2Nlc3NTdHVkaW9Ub2tlbkRhdGEudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVhZFNwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3JlYWRTdHVkaW9Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVuYW1lU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVzb2x2ZU1lcmdlVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3Jlc29sdmVTcGxpdFRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy91cGRhdGVUb2tlbk5hbWVNZXRhZGF0YS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy92ZXJpZnlCcmFuY2hTY2hlbWFzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3ZlcmlmeVZhbHVlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvd3JpdGVTdHVkaW9Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0RGVsZXRlZFRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnREZXByZWNhdGVkVG9rZW5Vc2FnZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnREZXNjcmlwdGlvbkNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1NwZWN0cnVtU2V0cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3BlY3RydW1VVUlEcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3R1ZGlvTW9kZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1N0dWRpb1Rva2VuTmFtZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1N0dWRpb1VVSURzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydE5hbWVDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydE5ld1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRTY2hlbWFDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFNldENvbmZsaWN0cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRUb2tlbkNvdW50cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRVVUlEQ29sbGlzaW9ucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRWYWx1ZUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvY2hlY2tUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvY2hlY2tVVUlELnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXZlcnNlL2NoZWNrVmFsdWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvY29weVN0dWRpb1Rva2VuLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXZlcnNlL2dldERlc3RpbmF0aW9uRmlsZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9nZXRTcGVjdHJ1bUVudHJpZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvZ2V0U3R1ZGlvVmFsdWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvaGFuZGxlQWRkZWRUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2Uvc29ydFRva2VuR3JvdXAudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3N5bmMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3N5bmNUb1NwZWN0cnVtLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9zeW5jVG9TdHVkaW8udHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOm9zXCIiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOnByb2Nlc3NcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6dHR5XCIiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3ZlbmRvci9hbnNpLXN0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3ZlbmRvci9zdXBwb3J0cy1jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9