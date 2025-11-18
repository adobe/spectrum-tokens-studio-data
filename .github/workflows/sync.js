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
    // of target files and schemas in spectrum-design-data and some token name handling conventions
    TOKENS_STUDIO_DATA_SETS: { [_src_constants__WEBPACK_IMPORTED_MODULE_0__["default"].COLOR]: '-colors', [_src_constants__WEBPACK_IMPORTED_MODULE_0__["default"].LAYOUT]: '-non-colors', [_src_constants__WEBPACK_IMPORTED_MODULE_0__["default"].EVERYTHING]: '' },
    // TOKENS_SPECTRUM: path to the spectrum-design-data source json directory
    //                  override with command line option -destination=
    TOKENS_SPECTRUM: '../spectrum-design-data/packages/tokens/src/',
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
        "color": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/color.json",
        "opacity": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/opacity.json",
        "spacing": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/dimension.json",
        "borderwidth": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/dimension.json",
        "borderradius": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/dimension.json",
        "sizing": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/dimension.json",
        "letterspacing": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/dimension.json",
        "fontsizes": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/font-size.json",
        "fontweights": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/font-weight.json",
        "fontfamilies": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/font-family.json",
        "boxshadow": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/drop-shadow.json",
        "typography": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/typography.json",
        "lineheights": {
            "NUMBER": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/multiplier.json",
            "STRING": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/dimension.json",
        },
        // derived - not native to tokens studio by we can figure them out
        //         - an empty schema string ("") will cause the sync script to ignore
        //           schema related issues for this type (which we may want when introducing
        //           a new type and we don't have the schema in spectrum-design-data, yet)
        //         - alias is easy to detect, we just check the value references another tokens
        "alias": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/alias.json",
        //         - all the rest here are marked by tokens studio as being of type "other" and
        //           we should follow-up and make sure they aren't mis-typed and if there is a valid
        //           tokens studio type that accurately captures proper usage
        //           (the tokens are mix of drop-shadow and typography, fyi)
        "multiplier": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/multiplier.json",
        "dimension": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/dimension.json",
        "font-style": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/font-style.json",
        "text-transform": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/text-transform.json",
        "text-align": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/text-align.json",
        "gradient-stop": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/gradient-stop.json",
        // set schemas - we don't detect/compare/test these, but we use them when changing/adding to spectrum-design-data
        "color-set": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/color-set.json",
        "scale-set": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/scale-set.json",
        "system-set": "https://opensource.adobe.com/spectrum-design-data/schemas/token-types/system-set.json"
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(!isNaN(r) && !isNaN(g) && !isNaN(b), value + ' => ' + value.slice(1, 3) + ' ' + value.slice(3, 5) + ' ' + value.slice(5, 7));
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
            // check metadata for unhandled spectrum token data
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
        throw new Error('ERROR - unsupported set within set definition in spectrum token data');
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
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.cout)('ERROR - could not find entry in spectrum token data: ' + uuid);
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
                // a full rewrite of the original token in spectrum-design-data
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
    // !!! I don't think this actually exists in spectrum-design-data (it was for putting uuids on branch nodes and not just leaves)
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.cout)('READING spectrum-design-data: ' + (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.trimPath)(source));
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
function isPrivateCollection(themeEntry) {
    // all we got to work from is the theme entry right now...
    if (themeEntry.name.toLowerCase() === 'modeless' || themeEntry.group.charAt(0) !== '.')
        return false;
    return true;
}
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
        if (isPrivateCollection(themeEntry)) {
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
    else {
        const tokenSpectrumName = (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_1__.getTokenSpectrumName)(entry, false);
        if (tokenSpectrumName) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('WARNING - DEPRECATED SPECTRUM NAME METADATA FOUND IN: ' + entry.path.join('.'));
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
    // check the entries being split
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
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - SPECTRUM-DESIGN-DATA MISSING SCALE DEFINITION FOR ' + name + ': ' + JSON.stringify(missingScales));
}
function reportMissingThemes(name, themes, allThemes, SETS) {
    const missingThemes = [];
    for (const theme of allThemes) {
        if (!themes.includes(theme) && (!SETS.length || SETS.includes(theme))) {
            missingThemes.push(theme);
        }
    }
    if (missingThemes.length)
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cout)('WARNING - SPECTRUM-DESIGN-DATA MISSING THEME DEFINITION FOR ' + name + ': ' + JSON.stringify(missingThemes));
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.cout)('LOADED SPECTRUM TOKEN DATA: ' + getTokenCount(spectrumTokens, spectrumProblems));
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
        // index spectrum token data by set name
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
    // ??? we always check references because they could be garbage values directly from spectrum-design-data
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
    const destination = '-destination='; // path to the spectrum-design-data repo
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
    // fix missing uuids: if a token marked as new in tokens studio already has an entry in spectrum-design-data
    // then we should be using the uuids from spectrum-design-data, and *not* treating this token as new
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
    // report missing uuids in the spectrum-design-data data
    (0,_reports_reportMissingSpectrumUUIDs__WEBPACK_IMPORTED_MODULE_8__["default"])(spectrumProblems);
    // report missing tokens studio mode entries
    (0,_reports_reportMissingStudioModes__WEBPACK_IMPORTED_MODULE_21__["default"])(studioProblems);
    // we should be checking that tokens are in the same sets between tokens studio and spectrum-design-data
    (0,_reports_reportSetConflicts__WEBPACK_IMPORTED_MODULE_35__["default"])(studioTokens, spectrumTokens);
    // report missing spectrum-design-data set entries
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
    // in spectrum-design-data; likely as a result of running a sync
    // operation multiple times on the same spectrum-design-data branch
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
    // If a spectrum token was renamed, we will deprecate the original definition in spectrum-design-data
    // and forward the value of that definition to the new token definition via an alias.
    // And alias reference to the old token will be changed to reference the new token definition.
    (0,_operations_renameSpectrumTokens__WEBPACK_IMPORTED_MODULE_23__["default"])(TOKENS_SPECTRUM_SANITIZED, renamedTokens);
    // ADD
    // New token definitions will be added to spectrum-design-data.
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
    // looks to make sure the schema in spectrum-design-data for a set is correct. The value schemas
    // will be checked above, but this just verifies the theme/scale set if needed.
    (0,_operations_verifyBranchSchemas__WEBPACK_IMPORTED_MODULE_33__["default"])(studioTokens, spectrumTokens);
    // VALUE TYPES
    // We're supporting number/float & string as value types now in spectrum-design-data...
    // so verify the value type for spectrum-design-data is correct
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
            (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.cout)('ERROR - EXTRA TOKEN STUDIO DEFINITION NOT IN SPECTRUM-DESIGN-DATA: ' + studioTokens[uuid].path + ' => ' + (0,_core_tokenStuff__WEBPACK_IMPORTED_MODULE_12__.getTokenSpectrumName)(studioTokens[uuid]) + ' ' + uuid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxJQUFJLENBQUMsR0FBdUIsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBRWpILGdEQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEksdUNBQXVDO0lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDbkIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNYO0lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxD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b2tlbnMtc3R1ZGlvLXN5bmMvLi9jb25maWcudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvbXBvc2l0ZVR5cGVzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZmlsZUNhY2hpbmcudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZmluZEJyYW5jaEJ5VVVJRC50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9nZXRCcmFuY2hVVUlELnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL2dldEVxdWl2YWxlbnRTcGVjdHJ1bVJlZmVyZW5jZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZ2V0RXF1aXZhbGVudFNwZWN0cnVtVmFsdWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvZ2V0U3BlY3RydW1WYWx1ZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvY29yZS9oZWxwZXJzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9jb3JlL3ByaW50YWJsZVNldE5hbWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvc2NoZW1hU3R1ZmYudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL2NvcmUvdG9rZW5TdHVmZi50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvaGVscGVycy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9hZGRTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9hZGRVVUlEcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGFuZ2VTcGVjdHJ1bVRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja0Rlc2NyaXB0aW9uQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja0ZvckRlcHJlY2F0ZWRUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tGb3JSZWN5Y2xlZFVVSURzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrTW9kZWxlc3NUb2tlbkFsaWFzZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tNb2Rlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja05hbWVDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2NoZWNrU2NoZW1hQ2hhbmdlcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy9jaGVja1NldHMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvY2hlY2tWYWx1ZUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZGVwcmVjYXRlU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvZm9ybWF0Q2hhbmdlZFNwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2Zvcm1hdE5ld1NwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2dldE1vZGlmaWVkVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL2dldFVuaXF1ZUlkLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3Byb2Nlc3NTdHVkaW9Ub2tlbkRhdGEudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVhZFNwZWN0cnVtVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3JlYWRTdHVkaW9Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVuYW1lU3BlY3RydW1Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvcmVzb2x2ZU1lcmdlVG9rZW5zLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3Jlc29sdmVTcGxpdFRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy91cGRhdGVUb2tlbk5hbWVNZXRhZGF0YS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvb3BlcmF0aW9ucy92ZXJpZnlCcmFuY2hTY2hlbWFzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9vcGVyYXRpb25zL3ZlcmlmeVZhbHVlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL29wZXJhdGlvbnMvd3JpdGVTdHVkaW9Ub2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0RGVsZXRlZFRva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnREZXByZWNhdGVkVG9rZW5Vc2FnZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnREZXNjcmlwdGlvbkNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1NwZWN0cnVtU2V0cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3BlY3RydW1VVUlEcy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRNaXNzaW5nU3R1ZGlvTW9kZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1N0dWRpb1Rva2VuTmFtZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JlcG9ydHMvcmVwb3J0TWlzc2luZ1N0dWRpb1VVSURzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydE5hbWVDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydE5ld1Rva2Vucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRTY2hlbWFDaGFuZ2VzLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXBvcnRzL3JlcG9ydFNldENvbmZsaWN0cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRUb2tlbkNvdW50cy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRVVUlEQ29sbGlzaW9ucy50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmVwb3J0cy9yZXBvcnRWYWx1ZUNoYW5nZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvY2hlY2tUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvY2hlY2tVVUlELnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXZlcnNlL2NoZWNrVmFsdWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvY29weVN0dWRpb1Rva2VuLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9yZXZlcnNlL2dldERlc3RpbmF0aW9uRmlsZS50cyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9zcmMvcmV2ZXJzZS9nZXRTcGVjdHJ1bUVudHJpZXMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvZ2V0U3R1ZGlvVmFsdWUudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2UvaGFuZGxlQWRkZWRUb2tlbnMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3JldmVyc2Uvc29ydFRva2VuR3JvdXAudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3N5bmMudHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vc3JjL3N5bmNUb1NwZWN0cnVtLnRzIiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy8uL3NyYy9zeW5jVG9TdHVkaW8udHMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOm9zXCIiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOnByb2Nlc3NcIiIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6dHR5XCIiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3ZlbmRvci9hbnNpLXN0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3ZlbmRvci9zdXBwb3J0cy1jb2xvci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rva2Vucy1zdHVkaW8tc3luYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9rZW5zLXN0dWRpby1zeW5jL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2tlbnMtc3R1ZGlvLXN5bmMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9