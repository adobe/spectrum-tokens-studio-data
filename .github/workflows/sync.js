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
        if (!REQUIRED.includes(check))
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
        if (!REQUIRED.includes(check))
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
function equivalentStringSpectrumValue(source, value) {
    // convert font style...
    if (source.includes('default-font-style') && value.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_1__["default"].STYLE_REGULAR) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__["default"].STYLE_NORMAL;
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
    const ORDER = ['x', 'y', 'blur', 'color'];
    const IGNORE = ['spread', 'type'];
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
function getEquivalentSpectrumValue(source, value) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(value)) {
        return equivalentStringSpectrumValue(source, value);
    }
    else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
        const result = [];
        for (const input of value) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_compositeTypes__WEBPACK_IMPORTED_MODULE_3__["default"])(input));
            result.push(getEquivalentSpectrumValue(source, input));
        }
        return result;
    }
    else if ((0,_compositeTypes__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
        const result = {};
        for (const key of sortValueKeys(Object.keys(value))) {
            const input = value[key];
            (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(input));
            result[key] = getEquivalentSpectrumValue(source, input);
        }
        return result;
    }
    else {
        throw new Error('getEquivalentSpectrumValue - UNHANDLED VALUE TYPE FOR: ' + source.join('.') + '\n' + JSON.stringify(value, null, 2));
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
    const spectrumValue = (0,_getEquivalentSpectrumValue__WEBPACK_IMPORTED_MODULE_0__["default"])(studioPath, studioTokens[uuid].value);
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
/* harmony export */   setTokenUUID: () => (/* binding */ setTokenUUID)
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
    if (entry.value !== undefined && !(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isString)(entry.value) && !(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(entry.value)) {
        value = spectrumNumber(entry.value);
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
    const studioProblems = { collisions: {}, merge: [], merged: {}, split: {}, uuids: [], values: [], metadata: [], usedModes: [], modes: {} };
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
                // we need to scan the public collections for composite token definition...
                publicCollections.forEach((file) => {
                    const startPath = file.slice(sources[dataSet].length).split((path__WEBPACK_IMPORTED_MODULE_1___default().sep)).slice(0, -1);
                    startPath.push(path__WEBPACK_IMPORTED_MODULE_1___default().basename(file, '.json'));
                    const data = (0,_core_fileCaching__WEBPACK_IMPORTED_MODULE_4__.getFileUncached)(file);
                    (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_3__.getTokenStyles)(dataSet, file, [getStartPath(sources[dataSet], file)], data, studioTokens, studioProblems, undefined, _compositeTypes__WEBPACK_IMPORTED_MODULE_6__.COMPOSITE_TYPES);
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
        for (const entry of entries) {
            if (!baseEntry && entry.path.join('.').indexOf('light') > 0) {
                baseEntry = entry;
            }
            if (!baseEntry && entry.path.join('.').indexOf('desktop') > 0) {
                baseEntry = entry;
            }
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
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



function cleanName(name) {
    return name.replaceAll(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].BUSTER, '').replaceAll(' ', '');
}
function checkName(entry, results) {
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(entry.value)) {
        // this should be a composite token, and we're just going to guess about the name if it isn't set
        const tokenSpectrumName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenSpectrumName)(entry);
        if (!tokenSpectrumName) {
            const name = entry.path.slice(1).join('-').replaceAll(' ', '-').toLowerCase();
            if (name !== tokenSpectrumName) {
                if (name && tokenSpectrumName) {
                    results[name] = tokenSpectrumName;
                }
                (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.setTokenSpectrumName)(entry, name);
            }
        }
    }
    else if (!(0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.isColorSet)(entry)) {
        const name = cleanName(entry.path[entry.path.length - 1]);
        const tokenSpectrumName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.getTokenSpectrumName)(entry);
        if (name !== tokenSpectrumName) {
            if (name && tokenSpectrumName) {
                results[name] = tokenSpectrumName;
            }
            (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_2__.setTokenSpectrumName)(entry, name);
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
        const token = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_0__.getTokenSpectrumName)(studioTokens[uuid]);
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
            if (!newTokens.includes(studioTokens[uuid])) {
                newTokens.push(studioTokens[uuid]);
            }
        }
    });
    // collect uuids involved in replacement, that we know about
    Object.keys(studioProblems.split).forEach((uuid) => {
        if (!Object.keys(spectrumProblems.collisions).includes(uuid) && !Object.keys(spectrumProblems.deprecated).includes(uuid)) {
            if (!newTokens.includes(studioTokens[uuid])) {
                newTokens.push(studioTokens[uuid]);
            }
        }
    });
    Object.keys(studioProblems.merged).forEach((uuid) => {
        if (!Object.keys(spectrumProblems.collisions).includes(uuid) && !Object.keys(spectrumProblems.deprecated).includes(uuid)) {
            if (!newTokens.includes(studioTokens[uuid])) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vY29uZmlnLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb21wb3NpdGVUeXBlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL2ZpbGVDYWNoaW5nLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL2ZpbmRCcmFuY2hCeVVVSUQudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZ2V0QnJhbmNoVVVJRC50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9nZXRFcXVpdmFsZW50U3BlY3RydW1SZWZlcmVuY2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL2dldEVxdWl2YWxlbnRTcGVjdHJ1bVZhbHVlLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL2dldFNwZWN0cnVtVmFsdWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvaGVscGVycy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9wcmludGFibGVTZXROYW1lLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL3NjaGVtYVN0dWZmLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL3Rva2VuU3R1ZmYudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvYWRkU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvYWRkVVVJRHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hhbmdlU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tEZXNjcmlwdGlvbkNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tGb3JEZXByZWNhdGVkVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrRm9yUmVjeWNsZWRVVUlEcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja01vZGVzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrTmFtZUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tTY2hlbWFDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrU2V0cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja1ZhbHVlQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9kZXByZWNhdGVTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9mb3JtYXRDaGFuZ2VkU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZm9ybWF0TmV3U3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZ2V0TW9kaWZpZWRUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZ2V0VW5pcXVlSWQudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcHJvY2Vzc1N0dWRpb1Rva2VuRGF0YS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9yZWFkU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVhZFN0dWRpb1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9yZW5hbWVTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9yZXNvbHZlTWVyZ2VUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVzb2x2ZVNwbGl0VG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3VwZGF0ZVRva2VuTmFtZU1ldGFkYXRhLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3ZlcmlmeUJyYW5jaFNjaGVtYXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvdmVyaWZ5VmFsdWVUeXBlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy93cml0ZVN0dWRpb1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnREZWxldGVkVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydERlcHJlY2F0ZWRUb2tlblVzYWdlLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydERlc2NyaXB0aW9uQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3BlY3RydW1TZXRzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTcGVjdHJ1bVVVSURzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydE1pc3NpbmdTdHVkaW9Nb2Rlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3R1ZGlvVG9rZW5OYW1lcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3R1ZGlvVVVJRHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TmFtZUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TmV3VG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFNjaGVtYUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0U2V0Q29uZmxpY3RzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFRva2VuQ291bnRzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFVVSURDb2xsaXNpb25zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFZhbHVlQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9jaGVja1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9jaGVja1VVSUQudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvY2hlY2tWYWx1ZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9jb3B5U3R1ZGlvVG9rZW4udHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvZ2V0RGVzdGluYXRpb25GaWxlLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXZlcnNlL2dldFNwZWN0cnVtRW50cmllcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9nZXRTdHVkaW9WYWx1ZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9oYW5kbGVBZGRlZFRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9zb3J0VG9rZW5Hcm91cC50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvc3luYy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvc3luY1RvU3BlY3RydW0udHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3N5bmNUb1N0dWRpby50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImNyeXB0b1wiIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6b3NcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6cHJvY2Vzc1wiIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTp0dHlcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdmVuZG9yL2Fuc2ktc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL25vZGVfbW9kdWxlcy9jaGFsay9zb3VyY2UvdmVuZG9yL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=