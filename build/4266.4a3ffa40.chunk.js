(self["webpackChunksmmart_cms"] = self["webpackChunksmmart_cms"] || []).push([[4266],{

/***/ 6483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ index)
/* harmony export */ });
/* unused harmony exports componentsToDebugString, getFullscreenElement, getScreenFrame, hashComponents, isAndroid, isChromium, isDesktopSafari, isEdgeHTML, isGecko, isTrident, isWebKit, load, loadSources, murmurX64Hash128, prepareForSources, sources, transformSource */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97582);
/**
 * FingerprintJS v3.4.1 - Copyright (c) FingerprintJS, Inc, 2023 (https://fingerprint.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */



var version = "3.4.1";

function wait(durationMs, resolveWith) {
    return new Promise(function (resolve) { return setTimeout(resolve, durationMs, resolveWith); });
}
function requestIdleCallbackIfAvailable(fallbackTimeout, deadlineTimeout) {
    if (deadlineTimeout === void 0) { deadlineTimeout = Infinity; }
    var requestIdleCallback = window.requestIdleCallback;
    if (requestIdleCallback) {
        // The function `requestIdleCallback` loses the binding to `window` here.
        // `globalThis` isn't always equal `window` (see https://github.com/fingerprintjs/fingerprintjs/issues/683).
        // Therefore, an error can occur. `call(window,` prevents the error.
        return new Promise(function (resolve) { return requestIdleCallback.call(window, function () { return resolve(); }, { timeout: deadlineTimeout }); });
    }
    else {
        return wait(Math.min(fallbackTimeout, deadlineTimeout));
    }
}
function isPromise(value) {
    return !!value && typeof value.then === 'function';
}
/**
 * Calls a maybe asynchronous function without creating microtasks when the function is synchronous.
 * Catches errors in both cases.
 *
 * If just you run a code like this:
 * ```
 * console.time('Action duration')
 * await action()
 * console.timeEnd('Action duration')
 * ```
 * The synchronous function time can be measured incorrectly because another microtask may run before the `await`
 * returns the control back to the code.
 */
function awaitIfAsync(action, callback) {
    try {
        var returnedValue = action();
        if (isPromise(returnedValue)) {
            returnedValue.then(function (result) { return callback(true, result); }, function (error) { return callback(false, error); });
        }
        else {
            callback(true, returnedValue);
        }
    }
    catch (error) {
        callback(false, error);
    }
}
/**
 * If you run many synchronous tasks without using this function, the JS main loop will be busy and asynchronous tasks
 * (e.g. completing a network request, rendering the page) won't be able to happen.
 * This function allows running many synchronous tasks such way that asynchronous tasks can run too in background.
 */
function forEachWithBreaks(items, callback, loopReleaseInterval) {
    if (loopReleaseInterval === void 0) { loopReleaseInterval = 16; }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
        var lastLoopReleaseTime, i, now;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lastLoopReleaseTime = Date.now();
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < items.length)) return [3 /*break*/, 4];
                    callback(items[i], i);
                    now = Date.now();
                    if (!(now >= lastLoopReleaseTime + loopReleaseInterval)) return [3 /*break*/, 3];
                    lastLoopReleaseTime = now;
                    // Allows asynchronous actions and microtasks to happen
                    return [4 /*yield*/, wait(0)];
                case 2:
                    // Allows asynchronous actions and microtasks to happen
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++i;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Makes the given promise never emit an unhandled promise rejection console warning.
 * The promise will still pass errors to the next promises.
 *
 * Otherwise, promise emits a console warning unless it has a `catch` listener.
 */
function suppressUnhandledRejectionWarning(promise) {
    promise.then(undefined, function () { return undefined; });
}

/*
 * Taken from https://github.com/karanlyons/murmurHash3.js/blob/a33d0723127e2e5415056c455f8aed2451ace208/murmurHash3.js
 */
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// added together as a 64bit int (as an array of two 32bit ints).
//
function x64Add(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// multiplied together as a 64bit int (as an array of two 32bit ints).
//
function x64Multiply(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
}
//
// Given a 64bit int (as an array of two 32bit ints) and an int
// representing a number of bit positions, returns the 64bit int (as an
// array of two 32bit ints) rotated left by that number of positions.
//
function x64Rotl(m, n) {
    n %= 64;
    if (n === 32) {
        return [m[1], m[0]];
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
    }
    else {
        n -= 32;
        return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
    }
}
//
// Given a 64bit int (as an array of two 32bit ints) and an int
// representing a number of bit positions, returns the 64bit int (as an
// array of two 32bit ints) shifted left by that number of positions.
//
function x64LeftShift(m, n) {
    n %= 64;
    if (n === 0) {
        return m;
    }
    else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
    }
    else {
        return [m[1] << (n - 32), 0];
    }
}
//
// Given two 64bit ints (as an array of two 32bit ints) returns the two
// xored together as a 64bit int (as an array of two 32bit ints).
//
function x64Xor(m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]];
}
//
// Given a block, returns murmurHash3's final x64 mix of that block.
// (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
// only place where we need to right shift 64bit ints.)
//
function x64Fmix(h) {
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    return h;
}
//
// Given a string and an optional seed as an int, returns a 128 bit
// hash using the x64 flavor of MurmurHash3, as an unsigned hex.
//
function x64hash128(key, seed) {
    key = key || '';
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [0x87c37b91, 0x114253d5];
    var c2 = [0x4cf5ad43, 0x2745937f];
    var i;
    for (i = 0; i < bytes; i = i + 16) {
        k1 = [
            (key.charCodeAt(i + 4) & 0xff) |
                ((key.charCodeAt(i + 5) & 0xff) << 8) |
                ((key.charCodeAt(i + 6) & 0xff) << 16) |
                ((key.charCodeAt(i + 7) & 0xff) << 24),
            (key.charCodeAt(i) & 0xff) |
                ((key.charCodeAt(i + 1) & 0xff) << 8) |
                ((key.charCodeAt(i + 2) & 0xff) << 16) |
                ((key.charCodeAt(i + 3) & 0xff) << 24),
        ];
        k2 = [
            (key.charCodeAt(i + 12) & 0xff) |
                ((key.charCodeAt(i + 13) & 0xff) << 8) |
                ((key.charCodeAt(i + 14) & 0xff) << 16) |
                ((key.charCodeAt(i + 15) & 0xff) << 24),
            (key.charCodeAt(i + 8) & 0xff) |
                ((key.charCodeAt(i + 9) & 0xff) << 8) |
                ((key.charCodeAt(i + 10) & 0xff) << 16) |
                ((key.charCodeAt(i + 11) & 0xff) << 24),
        ];
        k1 = x64Multiply(k1, c1);
        k1 = x64Rotl(k1, 31);
        k1 = x64Multiply(k1, c2);
        h1 = x64Xor(h1, k1);
        h1 = x64Rotl(h1, 27);
        h1 = x64Add(h1, h2);
        h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
        k2 = x64Multiply(k2, c2);
        k2 = x64Rotl(k2, 33);
        k2 = x64Multiply(k2, c1);
        h2 = x64Xor(h2, k2);
        h2 = x64Rotl(h2, 31);
        h2 = x64Add(h2, h1);
        h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
    }
    k1 = [0, 0];
    k2 = [0, 0];
    switch (remainder) {
        case 15:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
        // fallthrough
        case 14:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
        // fallthrough
        case 13:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
        // fallthrough
        case 12:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
        // fallthrough
        case 11:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
        // fallthrough
        case 10:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
        // fallthrough
        case 9:
            k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
            k2 = x64Multiply(k2, c2);
            k2 = x64Rotl(k2, 33);
            k2 = x64Multiply(k2, c1);
            h2 = x64Xor(h2, k2);
        // fallthrough
        case 8:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
        // fallthrough
        case 7:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
        // fallthrough
        case 6:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
        // fallthrough
        case 5:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
        // fallthrough
        case 4:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
        // fallthrough
        case 3:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
        // fallthrough
        case 2:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
        // fallthrough
        case 1:
            k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
            k1 = x64Multiply(k1, c1);
            k1 = x64Rotl(k1, 31);
            k1 = x64Multiply(k1, c2);
            h1 = x64Xor(h1, k1);
        // fallthrough
    }
    h1 = x64Xor(h1, [0, key.length]);
    h2 = x64Xor(h2, [0, key.length]);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    h1 = x64Fmix(h1);
    h2 = x64Fmix(h2);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    return (('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) +
        ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8));
}

/**
 * Converts an error object to a plain object that can be used with `JSON.stringify`.
 * If you just run `JSON.stringify(error)`, you'll get `'{}'`.
 */
function errorToObject(error) {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__assign */ .pi)({ name: error.name, message: error.message, stack: (_a = error.stack) === null || _a === void 0 ? void 0 : _a.split('\n') }, error);
}

/*
 * This file contains functions to work with pure data only (no browser features, DOM, side effects, etc).
 */
/**
 * Does the same as Array.prototype.includes but has better typing
 */
function includes(haystack, needle) {
    for (var i = 0, l = haystack.length; i < l; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
/**
 * Like `!includes()` but with proper typing
 */
function excludes(haystack, needle) {
    return !includes(haystack, needle);
}
/**
 * Be careful, NaN can return
 */
function toInt(value) {
    return parseInt(value);
}
/**
 * Be careful, NaN can return
 */
function toFloat(value) {
    return parseFloat(value);
}
function replaceNaN(value, replacement) {
    return typeof value === 'number' && isNaN(value) ? replacement : value;
}
function countTruthy(values) {
    return values.reduce(function (sum, value) { return sum + (value ? 1 : 0); }, 0);
}
function round(value, base) {
    if (base === void 0) { base = 1; }
    if (Math.abs(base) >= 1) {
        return Math.round(value / base) * base;
    }
    else {
        // Sometimes when a number is multiplied by a small number, precision is lost,
        // for example 1234 * 0.0001 === 0.12340000000000001, and it's more precise divide: 1234 / (1 / 0.0001) === 0.1234.
        var counterBase = 1 / base;
        return Math.round(value * counterBase) / counterBase;
    }
}
/**
 * Parses a CSS selector into tag name with HTML attributes.
 * Only single element selector are supported (without operators like space, +, >, etc).
 *
 * Multiple values can be returned for each attribute. You decide how to handle them.
 */
function parseSimpleCssSelector(selector) {
    var _a, _b;
    var errorMessage = "Unexpected syntax '".concat(selector, "'");
    var tagMatch = /^\s*([a-z-]*)(.*)$/i.exec(selector);
    var tag = tagMatch[1] || undefined;
    var attributes = {};
    var partsRegex = /([.:#][\w-]+|\[.+?\])/gi;
    var addAttribute = function (name, value) {
        attributes[name] = attributes[name] || [];
        attributes[name].push(value);
    };
    for (;;) {
        var match = partsRegex.exec(tagMatch[2]);
        if (!match) {
            break;
        }
        var part = match[0];
        switch (part[0]) {
            case '.':
                addAttribute('class', part.slice(1));
                break;
            case '#':
                addAttribute('id', part.slice(1));
                break;
            case '[': {
                var attributeMatch = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(part);
                if (attributeMatch) {
                    addAttribute(attributeMatch[1], (_b = (_a = attributeMatch[4]) !== null && _a !== void 0 ? _a : attributeMatch[5]) !== null && _b !== void 0 ? _b : '');
                }
                else {
                    throw new Error(errorMessage);
                }
                break;
            }
            default:
                throw new Error(errorMessage);
        }
    }
    return [tag, attributes];
}

function ensureErrorWithMessage(error) {
    return error && typeof error === 'object' && 'message' in error ? error : { message: error };
}
function isFinalResultLoaded(loadResult) {
    return typeof loadResult !== 'function';
}
/**
 * Loads the given entropy source. Returns a function that gets an entropy component from the source.
 *
 * The result is returned synchronously to prevent `loadSources` from
 * waiting for one source to load before getting the components from the other sources.
 */
function loadSource(source, sourceOptions) {
    var sourceLoadPromise = new Promise(function (resolveLoad) {
        var loadStartTime = Date.now();
        // `awaitIfAsync` is used instead of just `await` in order to measure the duration of synchronous sources
        // correctly (other microtasks won't affect the duration).
        awaitIfAsync(source.bind(null, sourceOptions), function () {
            var loadArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                loadArgs[_i] = arguments[_i];
            }
            var loadDuration = Date.now() - loadStartTime;
            // Source loading failed
            if (!loadArgs[0]) {
                return resolveLoad(function () { return ({ error: ensureErrorWithMessage(loadArgs[1]), duration: loadDuration }); });
            }
            var loadResult = loadArgs[1];
            // Source loaded with the final result
            if (isFinalResultLoaded(loadResult)) {
                return resolveLoad(function () { return ({ value: loadResult, duration: loadDuration }); });
            }
            // Source loaded with "get" stage
            resolveLoad(function () {
                return new Promise(function (resolveGet) {
                    var getStartTime = Date.now();
                    awaitIfAsync(loadResult, function () {
                        var getArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            getArgs[_i] = arguments[_i];
                        }
                        var duration = loadDuration + Date.now() - getStartTime;
                        // Source getting failed
                        if (!getArgs[0]) {
                            return resolveGet({ error: ensureErrorWithMessage(getArgs[1]), duration: duration });
                        }
                        // Source getting succeeded
                        resolveGet({ value: getArgs[1], duration: duration });
                    });
                });
            });
        });
    });
    suppressUnhandledRejectionWarning(sourceLoadPromise);
    return function getComponent() {
        return sourceLoadPromise.then(function (finalizeSource) { return finalizeSource(); });
    };
}
/**
 * Loads the given entropy sources. Returns a function that collects the entropy components.
 *
 * The result is returned synchronously in order to allow start getting the components
 * before the sources are loaded completely.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function loadSources(sources, sourceOptions, excludeSources) {
    var includedSources = Object.keys(sources).filter(function (sourceKey) { return excludes(excludeSources, sourceKey); });
    var sourceGetters = Array(includedSources.length);
    // Using `forEachWithBreaks` allows asynchronous sources to complete between synchronous sources
    // and measure the duration correctly
    forEachWithBreaks(includedSources, function (sourceKey, index) {
        sourceGetters[index] = loadSource(sources[sourceKey], sourceOptions);
    });
    return function getComponents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
            var components, _i, includedSources_1, sourceKey, componentPromises, _loop_1, state_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        components = {};
                        for (_i = 0, includedSources_1 = includedSources; _i < includedSources_1.length; _i++) {
                            sourceKey = includedSources_1[_i];
                            components[sourceKey] = undefined;
                        }
                        componentPromises = Array(includedSources.length);
                        _loop_1 = function () {
                            var hasAllComponentPromises;
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        hasAllComponentPromises = true;
                                        return [4 /*yield*/, forEachWithBreaks(includedSources, function (sourceKey, index) {
                                                if (!componentPromises[index]) {
                                                    // `sourceGetters` may be incomplete at this point of execution because `forEachWithBreaks` is asynchronous
                                                    if (sourceGetters[index]) {
                                                        var componentPromise = sourceGetters[index]().then(function (component) { return (components[sourceKey] = component); });
                                                        suppressUnhandledRejectionWarning(componentPromise);
                                                        componentPromises[index] = componentPromise;
                                                    }
                                                    else {
                                                        hasAllComponentPromises = false;
                                                    }
                                                }
                                            })];
                                    case 1:
                                        _b.sent();
                                        if (hasAllComponentPromises) {
                                            return [2 /*return*/, "break"];
                                        }
                                        return [4 /*yield*/, wait(1)]; // Lets the source load loop continue
                                    case 2:
                                        _b.sent(); // Lets the source load loop continue
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _a.label = 1;
                    case 1: return [5 /*yield**/, _loop_1()];
                    case 2:
                        state_1 = _a.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 4];
                        _a.label = 3;
                    case 3: return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, Promise.all(componentPromises)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, components];
                }
            });
        });
    };
}
/**
 * Modifies an entropy source by transforming its returned value with the given function.
 * Keeps the source properties: sync/async, 1/2 stages.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function transformSource(source, transformValue) {
    var transformLoadResult = function (loadResult) {
        if (isFinalResultLoaded(loadResult)) {
            return transformValue(loadResult);
        }
        return function () {
            var getResult = loadResult();
            if (isPromise(getResult)) {
                return getResult.then(transformValue);
            }
            return transformValue(getResult);
        };
    };
    return function (options) {
        var loadResult = source(options);
        if (isPromise(loadResult)) {
            return loadResult.then(transformLoadResult);
        }
        return transformLoadResult(loadResult);
    };
}

/*
 * Functions to help with features that vary through browsers
 */
/**
 * Checks whether the browser is based on Trident (the Internet Explorer engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isTrident() {
    var w = window;
    var n = navigator;
    // The properties are checked to be in IE 10, IE 11 and not to be in other browsers in October 2020
    return (countTruthy([
        'MSCSSMatrix' in w,
        'msSetImmediate' in w,
        'msIndexedDB' in w,
        'msMaxTouchPoints' in n,
        'msPointerEnabled' in n,
    ]) >= 4);
}
/**
 * Checks whether the browser is based on EdgeHTML (the pre-Chromium Edge engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isEdgeHTML() {
    // Based on research in October 2020
    var w = window;
    var n = navigator;
    return (countTruthy(['msWriteProfilerMark' in w, 'MSStream' in w, 'msLaunchUri' in n, 'msSaveBlob' in n]) >= 3 &&
        !isTrident());
}
/**
 * Checks whether the browser is based on Chromium without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isChromium() {
    // Based on research in October 2020. Tested to detect Chromium 42-86.
    var w = window;
    var n = navigator;
    return (countTruthy([
        'webkitPersistentStorage' in n,
        'webkitTemporaryStorage' in n,
        n.vendor.indexOf('Google') === 0,
        'webkitResolveLocalFileSystemURL' in w,
        'BatteryManager' in w,
        'webkitMediaStream' in w,
        'webkitSpeechGrammar' in w,
    ]) >= 5);
}
/**
 * Checks whether the browser is based on mobile or desktop Safari without using user-agent.
 * All iOS browsers use WebKit (the Safari engine).
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isWebKit() {
    // Based on research in September 2020
    var w = window;
    var n = navigator;
    return (countTruthy([
        'ApplePayError' in w,
        'CSSPrimitiveValue' in w,
        'Counter' in w,
        n.vendor.indexOf('Apple') === 0,
        'getStorageUpdates' in n,
        'WebKitMediaKeys' in w,
    ]) >= 4);
}
/**
 * Checks whether the WebKit browser is a desktop Safari.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isDesktopSafari() {
    var w = window;
    return (countTruthy([
        'safari' in w,
        !('DeviceMotionEvent' in w),
        !('ongestureend' in w),
        !('standalone' in navigator),
    ]) >= 3);
}
/**
 * Checks whether the browser is based on Gecko (Firefox engine) without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isGecko() {
    var _a, _b;
    var w = window;
    // Based on research in September 2020
    return (countTruthy([
        'buildID' in navigator,
        'MozAppearance' in ((_b = (_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.style) !== null && _b !== void 0 ? _b : {}),
        'onmozfullscreenchange' in w,
        'mozInnerScreenX' in w,
        'CSSMozDocumentRule' in w,
        'CanvasCaptureMediaStream' in w,
    ]) >= 4);
}
/**
 * Checks whether the browser is based on Chromium version ≥86 without using user-agent.
 * It doesn't check that the browser is based on Chromium, there is a separate function for this.
 */
function isChromium86OrNewer() {
    // Checked in Chrome 85 vs Chrome 86 both on desktop and Android
    var w = window;
    return (countTruthy([
        !('MediaSettingsRange' in w),
        'RTCEncodedAudioFrame' in w,
        '' + w.Intl === '[object Intl]',
        '' + w.Reflect === '[object Reflect]',
    ]) >= 3);
}
/**
 * Checks whether the browser is based on WebKit version ≥606 (Safari ≥12) without using user-agent.
 * It doesn't check that the browser is based on WebKit, there is a separate function for this.
 *
 * @link https://en.wikipedia.org/wiki/Safari_version_history#Release_history Safari-WebKit versions map
 */
function isWebKit606OrNewer() {
    // Checked in Safari 9–14
    var w = window;
    return (countTruthy([
        'DOMRectList' in w,
        'RTCPeerConnectionIceEvent' in w,
        'SVGGeometryElement' in w,
        'ontransitioncancel' in w,
    ]) >= 3);
}
/**
 * Checks whether the device is an iPad.
 * It doesn't check that the engine is WebKit and that the WebKit isn't desktop.
 */
function isIPad() {
    // Checked on:
    // Safari on iPadOS (both mobile and desktop modes): 8, 11, 12, 13, 14
    // Chrome on iPadOS (both mobile and desktop modes): 11, 12, 13, 14
    // Safari on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
    // Chrome on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
    // Before iOS 13. Safari tampers the value in "request desktop site" mode since iOS 13.
    if (navigator.platform === 'iPad') {
        return true;
    }
    var s = screen;
    var screenRatio = s.width / s.height;
    return (countTruthy([
        'MediaSource' in window,
        !!Element.prototype.webkitRequestFullscreen,
        // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
        screenRatio > 0.65 && screenRatio < 1.53,
    ]) >= 2);
}
/**
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function getFullscreenElement() {
    var d = document;
    return d.fullscreenElement || d.msFullscreenElement || d.mozFullScreenElement || d.webkitFullscreenElement || null;
}
function exitFullscreen() {
    var d = document;
    // `call` is required because the function throws an error without a proper "this" context
    return (d.exitFullscreen || d.msExitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen).call(d);
}
/**
 * Checks whether the device runs on Android without using user-agent.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function isAndroid() {
    var isItChromium = isChromium();
    var isItGecko = isGecko();
    // Only 2 browser engines are presented on Android.
    // Actually, there is also Android 4.1 browser, but it's not worth detecting it at the moment.
    if (!isItChromium && !isItGecko) {
        return false;
    }
    var w = window;
    // Chrome removes all words "Android" from `navigator` when desktop version is requested
    // Firefox keeps "Android" in `navigator.appVersion` when desktop version is requested
    return (countTruthy([
        'onorientationchange' in w,
        'orientation' in w,
        isItChromium && !('SharedWorker' in w),
        isItGecko && /android/i.test(navigator.appVersion),
    ]) >= 2);
}

/**
 * A deep description: https://fingerprint.com/blog/audio-fingerprinting/
 * Inspired by and based on https://github.com/cozylife/audio-fingerprint
 */
function getAudioFingerprint() {
    var w = window;
    var AudioContext = w.OfflineAudioContext || w.webkitOfflineAudioContext;
    if (!AudioContext) {
        return -2 /* SpecialFingerprint.NotSupported */;
    }
    // In some browsers, audio context always stays suspended unless the context is started in response to a user action
    // (e.g. a click or a tap). It prevents audio fingerprint from being taken at an arbitrary moment of time.
    // Such browsers are old and unpopular, so the audio fingerprinting is just skipped in them.
    // See a similar case explanation at https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
    if (doesCurrentBrowserSuspendAudioContext()) {
        return -1 /* SpecialFingerprint.KnownToSuspend */;
    }
    var hashFromIndex = 4500;
    var hashToIndex = 5000;
    var context = new AudioContext(1, hashToIndex, 44100);
    var oscillator = context.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.value = 10000;
    var compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.attack.value = 0;
    compressor.release.value = 0.25;
    oscillator.connect(compressor);
    compressor.connect(context.destination);
    oscillator.start(0);
    var _a = startRenderingAudio(context), renderPromise = _a[0], finishRendering = _a[1];
    var fingerprintPromise = renderPromise.then(function (buffer) { return getHash(buffer.getChannelData(0).subarray(hashFromIndex)); }, function (error) {
        if (error.name === "timeout" /* InnerErrorName.Timeout */ || error.name === "suspended" /* InnerErrorName.Suspended */) {
            return -3 /* SpecialFingerprint.Timeout */;
        }
        throw error;
    });
    // Suppresses the console error message in case when the fingerprint fails before requested
    suppressUnhandledRejectionWarning(fingerprintPromise);
    return function () {
        finishRendering();
        return fingerprintPromise;
    };
}
/**
 * Checks if the current browser is known to always suspend audio context
 */
function doesCurrentBrowserSuspendAudioContext() {
    return isWebKit() && !isDesktopSafari() && !isWebKit606OrNewer();
}
/**
 * Starts rendering the audio context.
 * When the returned function is called, the render process starts finishing.
 */
function startRenderingAudio(context) {
    var renderTryMaxCount = 3;
    var renderRetryDelay = 500;
    var runningMaxAwaitTime = 500;
    var runningSufficientTime = 5000;
    var finalize = function () { return undefined; };
    var resultPromise = new Promise(function (resolve, reject) {
        var isFinalized = false;
        var renderTryCount = 0;
        var startedRunningAt = 0;
        context.oncomplete = function (event) { return resolve(event.renderedBuffer); };
        var startRunningTimeout = function () {
            setTimeout(function () { return reject(makeInnerError("timeout" /* InnerErrorName.Timeout */)); }, Math.min(runningMaxAwaitTime, startedRunningAt + runningSufficientTime - Date.now()));
        };
        var tryRender = function () {
            try {
                var renderingPromise = context.startRendering();
                // `context.startRendering` has two APIs: Promise and callback, we check that it's really a promise just in case
                if (isPromise(renderingPromise)) {
                    // Suppresses all unhadled rejections in case of scheduled redundant retries after successful rendering
                    suppressUnhandledRejectionWarning(renderingPromise);
                }
                switch (context.state) {
                    case 'running':
                        startedRunningAt = Date.now();
                        if (isFinalized) {
                            startRunningTimeout();
                        }
                        break;
                    // Sometimes the audio context doesn't start after calling `startRendering` (in addition to the cases where
                    // audio context doesn't start at all). A known case is starting an audio context when the browser tab is in
                    // background on iPhone. Retries usually help in this case.
                    case 'suspended':
                        // The audio context can reject starting until the tab is in foreground. Long fingerprint duration
                        // in background isn't a problem, therefore the retry attempts don't count in background. It can lead to
                        // a situation when a fingerprint takes very long time and finishes successfully. FYI, the audio context
                        // can be suspended when `document.hidden === false` and start running after a retry.
                        if (!document.hidden) {
                            renderTryCount++;
                        }
                        if (isFinalized && renderTryCount >= renderTryMaxCount) {
                            reject(makeInnerError("suspended" /* InnerErrorName.Suspended */));
                        }
                        else {
                            setTimeout(tryRender, renderRetryDelay);
                        }
                        break;
                }
            }
            catch (error) {
                reject(error);
            }
        };
        tryRender();
        finalize = function () {
            if (!isFinalized) {
                isFinalized = true;
                if (startedRunningAt > 0) {
                    startRunningTimeout();
                }
            }
        };
    });
    return [resultPromise, finalize];
}
function getHash(signal) {
    var hash = 0;
    for (var i = 0; i < signal.length; ++i) {
        hash += Math.abs(signal[i]);
    }
    return hash;
}
function makeInnerError(name) {
    var error = new Error(name);
    error.name = name;
    return error;
}

/**
 * Creates and keeps an invisible iframe while the given function runs.
 * The given function is called when the iframe is loaded and has a body.
 * The iframe allows to measure DOM sizes inside itself.
 *
 * Notice: passing an initial HTML code doesn't work in IE.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
function withIframe(action, initialHtml, domPollInterval) {
    var _a, _b, _c;
    if (domPollInterval === void 0) { domPollInterval = 50; }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
        var d, iframe;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    d = document;
                    _d.label = 1;
                case 1:
                    if (!!d.body) return [3 /*break*/, 3];
                    return [4 /*yield*/, wait(domPollInterval)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 1];
                case 3:
                    iframe = d.createElement('iframe');
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, , 10, 11]);
                    return [4 /*yield*/, new Promise(function (_resolve, _reject) {
                            var isComplete = false;
                            var resolve = function () {
                                isComplete = true;
                                _resolve();
                            };
                            var reject = function (error) {
                                isComplete = true;
                                _reject(error);
                            };
                            iframe.onload = resolve;
                            iframe.onerror = reject;
                            var style = iframe.style;
                            style.setProperty('display', 'block', 'important'); // Required for browsers to calculate the layout
                            style.position = 'absolute';
                            style.top = '0';
                            style.left = '0';
                            style.visibility = 'hidden';
                            if (initialHtml && 'srcdoc' in iframe) {
                                iframe.srcdoc = initialHtml;
                            }
                            else {
                                iframe.src = 'about:blank';
                            }
                            d.body.appendChild(iframe);
                            // WebKit in WeChat doesn't fire the iframe's `onload` for some reason.
                            // This code checks for the loading state manually.
                            // See https://github.com/fingerprintjs/fingerprintjs/issues/645
                            var checkReadyState = function () {
                                var _a, _b;
                                // The ready state may never become 'complete' in Firefox despite the 'load' event being fired.
                                // So an infinite setTimeout loop can happen without this check.
                                // See https://github.com/fingerprintjs/fingerprintjs/pull/716#issuecomment-986898796
                                if (isComplete) {
                                    return;
                                }
                                // Make sure iframe.contentWindow and iframe.contentWindow.document are both loaded
                                // The contentWindow.document can miss in JSDOM (https://github.com/jsdom/jsdom).
                                if (((_b = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.readyState) === 'complete') {
                                    resolve();
                                }
                                else {
                                    setTimeout(checkReadyState, 10);
                                }
                            };
                            checkReadyState();
                        })];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6:
                    if (!!((_b = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body)) return [3 /*break*/, 8];
                    return [4 /*yield*/, wait(domPollInterval)];
                case 7:
                    _d.sent();
                    return [3 /*break*/, 6];
                case 8: return [4 /*yield*/, action(iframe, iframe.contentWindow)];
                case 9: return [2 /*return*/, _d.sent()];
                case 10:
                    (_c = iframe.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(iframe);
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
}
/**
 * Creates a DOM element that matches the given selector.
 * Only single element selector are supported (without operators like space, +, >, etc).
 */
function selectorToElement(selector) {
    var _a = parseSimpleCssSelector(selector), tag = _a[0], attributes = _a[1];
    var element = document.createElement(tag !== null && tag !== void 0 ? tag : 'div');
    for (var _i = 0, _b = Object.keys(attributes); _i < _b.length; _i++) {
        var name_1 = _b[_i];
        var value = attributes[name_1].join(' ');
        // Changing the `style` attribute can cause a CSP error, therefore we change the `style.cssText` property.
        // https://github.com/fingerprintjs/fingerprintjs/issues/733
        if (name_1 === 'style') {
            addStyleString(element.style, value);
        }
        else {
            element.setAttribute(name_1, value);
        }
    }
    return element;
}
/**
 * Adds CSS styles from a string in such a way that doesn't trigger a CSP warning (unsafe-inline or unsafe-eval)
 */
function addStyleString(style, source) {
    // We don't use `style.cssText` because browsers must block it when no `unsafe-eval` CSP is presented: https://csplite.com/csp145/#w3c_note
    // Even though the browsers ignore this standard, we don't use `cssText` just in case.
    for (var _i = 0, _a = source.split(';'); _i < _a.length; _i++) {
        var property = _a[_i];
        var match = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(property);
        if (match) {
            var name_2 = match[1], value = match[2], priority = match[4];
            style.setProperty(name_2, value, priority || ''); // The last argument can't be undefined in IE11
        }
    }
}

// We use m or w because these two characters take up the maximum width.
// And we use a LLi so that the same matching fonts can get separated.
var testString = 'mmMwWLliI0O&1';
// We test using 48px font size, we may use any size. I guess larger the better.
var textSize = '48px';
// A font will be compared against all the three default fonts.
// And if for any default fonts it doesn't match, then that font is available.
var baseFonts = ['monospace', 'sans-serif', 'serif'];
var fontList = [
    // This is android-specific font from "Roboto" family
    'sans-serif-thin',
    'ARNO PRO',
    'Agency FB',
    'Arabic Typesetting',
    'Arial Unicode MS',
    'AvantGarde Bk BT',
    'BankGothic Md BT',
    'Batang',
    'Bitstream Vera Sans Mono',
    'Calibri',
    'Century',
    'Century Gothic',
    'Clarendon',
    'EUROSTILE',
    'Franklin Gothic',
    'Futura Bk BT',
    'Futura Md BT',
    'GOTHAM',
    'Gill Sans',
    'HELV',
    'Haettenschweiler',
    'Helvetica Neue',
    'Humanst521 BT',
    'Leelawadee',
    'Letter Gothic',
    'Levenim MT',
    'Lucida Bright',
    'Lucida Sans',
    'Menlo',
    'MS Mincho',
    'MS Outlook',
    'MS Reference Specialty',
    'MS UI Gothic',
    'MT Extra',
    'MYRIAD PRO',
    'Marlett',
    'Meiryo UI',
    'Microsoft Uighur',
    'Minion Pro',
    'Monotype Corsiva',
    'PMingLiU',
    'Pristina',
    'SCRIPTINA',
    'Segoe UI Light',
    'Serifa',
    'SimHei',
    'Small Fonts',
    'Staccato222 BT',
    'TRAJAN PRO',
    'Univers CE 55 Medium',
    'Vrinda',
    'ZWAdobeF',
];
// kudos to http://www.lalit.org/lab/javascript-css-font-detect/
function getFonts() {
    // Running the script in an iframe makes it not affect the page look and not be affected by the page CSS. See:
    // https://github.com/fingerprintjs/fingerprintjs/issues/592
    // https://github.com/fingerprintjs/fingerprintjs/issues/628
    return withIframe(function (_, _a) {
        var document = _a.document;
        var holder = document.body;
        holder.style.fontSize = textSize;
        // div to load spans for the default fonts and the fonts to detect
        var spansContainer = document.createElement('div');
        var defaultWidth = {};
        var defaultHeight = {};
        // creates a span where the fonts will be loaded
        var createSpan = function (fontFamily) {
            var span = document.createElement('span');
            var style = span.style;
            style.position = 'absolute';
            style.top = '0';
            style.left = '0';
            style.fontFamily = fontFamily;
            span.textContent = testString;
            spansContainer.appendChild(span);
            return span;
        };
        // creates a span and load the font to detect and a base font for fallback
        var createSpanWithFonts = function (fontToDetect, baseFont) {
            return createSpan("'".concat(fontToDetect, "',").concat(baseFont));
        };
        // creates spans for the base fonts and adds them to baseFontsDiv
        var initializeBaseFontsSpans = function () {
            return baseFonts.map(createSpan);
        };
        // creates spans for the fonts to detect and adds them to fontsDiv
        var initializeFontsSpans = function () {
            // Stores {fontName : [spans for that font]}
            var spans = {};
            var _loop_1 = function (font) {
                spans[font] = baseFonts.map(function (baseFont) { return createSpanWithFonts(font, baseFont); });
            };
            for (var _i = 0, fontList_1 = fontList; _i < fontList_1.length; _i++) {
                var font = fontList_1[_i];
                _loop_1(font);
            }
            return spans;
        };
        // checks if a font is available
        var isFontAvailable = function (fontSpans) {
            return baseFonts.some(function (baseFont, baseFontIndex) {
                return fontSpans[baseFontIndex].offsetWidth !== defaultWidth[baseFont] ||
                    fontSpans[baseFontIndex].offsetHeight !== defaultHeight[baseFont];
            });
        };
        // create spans for base fonts
        var baseFontsSpans = initializeBaseFontsSpans();
        // create spans for fonts to detect
        var fontsSpans = initializeFontsSpans();
        // add all the spans to the DOM
        holder.appendChild(spansContainer);
        // get the default width for the three base fonts
        for (var index = 0; index < baseFonts.length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
        }
        // check available fonts
        return fontList.filter(function (font) { return isFontAvailable(fontsSpans[font]); });
    });
}

function getPlugins() {
    var rawPlugins = navigator.plugins;
    if (!rawPlugins) {
        return undefined;
    }
    var plugins = [];
    // Safari 10 doesn't support iterating navigator.plugins with for...of
    for (var i = 0; i < rawPlugins.length; ++i) {
        var plugin = rawPlugins[i];
        if (!plugin) {
            continue;
        }
        var mimeTypes = [];
        for (var j = 0; j < plugin.length; ++j) {
            var mimeType = plugin[j];
            mimeTypes.push({
                type: mimeType.type,
                suffixes: mimeType.suffixes,
            });
        }
        plugins.push({
            name: plugin.name,
            description: plugin.description,
            mimeTypes: mimeTypes,
        });
    }
    return plugins;
}

// https://www.browserleaks.com/canvas#how-does-it-work
function getCanvasFingerprint() {
    var winding = false;
    var geometry;
    var text;
    var _a = makeCanvasContext(), canvas = _a[0], context = _a[1];
    if (!isSupported(canvas, context)) {
        geometry = text = ''; // The value will be 'unsupported' in v3.4
    }
    else {
        winding = doesSupportWinding(context);
        renderTextImage(canvas, context);
        var textImage1 = canvasToString(canvas);
        var textImage2 = canvasToString(canvas); // It's slightly faster to double-encode the text image
        // Some browsers add a noise to the canvas: https://github.com/fingerprintjs/fingerprintjs/issues/791
        // The canvas is excluded from the fingerprint in this case
        if (textImage1 !== textImage2) {
            geometry = text = 'unstable';
        }
        else {
            text = textImage1;
            // Text is unstable:
            // https://github.com/fingerprintjs/fingerprintjs/issues/583
            // https://github.com/fingerprintjs/fingerprintjs/issues/103
            // Therefore it's extracted into a separate image.
            renderGeometryImage(canvas, context);
            geometry = canvasToString(canvas);
        }
    }
    return { winding: winding, geometry: geometry, text: text };
}
function makeCanvasContext() {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return [canvas, canvas.getContext('2d')];
}
function isSupported(canvas, context) {
    return !!(context && canvas.toDataURL);
}
function doesSupportWinding(context) {
    // https://web.archive.org/web/20170825024655/http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
    context.rect(0, 0, 10, 10);
    context.rect(2, 2, 6, 6);
    return !context.isPointInPath(5, 5, 'evenodd');
}
function renderTextImage(canvas, context) {
    // Resizing the canvas cleans it
    canvas.width = 240;
    canvas.height = 60;
    context.textBaseline = 'alphabetic';
    context.fillStyle = '#f60';
    context.fillRect(100, 1, 62, 20);
    context.fillStyle = '#069';
    // It's important to use explicit built-in fonts in order to exclude the affect of font preferences
    // (there is a separate entropy source for them).
    context.font = '11pt "Times New Roman"';
    // The choice of emojis has a gigantic impact on rendering performance (especially in FF).
    // Some newer emojis cause it to slow down 50-200 times.
    // There must be no text to the right of the emoji, see https://github.com/fingerprintjs/fingerprintjs/issues/574
    // A bare emoji shouldn't be used because the canvas will change depending on the script encoding:
    // https://github.com/fingerprintjs/fingerprintjs/issues/66
    // Escape sequence shouldn't be used too because Terser will turn it into a bare unicode.
    var printedText = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835) /* 😃 */);
    context.fillText(printedText, 2, 15);
    context.fillStyle = 'rgba(102, 204, 0, 0.2)';
    context.font = '18pt Arial';
    context.fillText(printedText, 4, 45);
}
function renderGeometryImage(canvas, context) {
    // Resizing the canvas cleans it
    canvas.width = 122;
    canvas.height = 110;
    // Canvas blending
    // https://web.archive.org/web/20170826194121/http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
    // http://jsfiddle.net/NDYV8/16/
    context.globalCompositeOperation = 'multiply';
    for (var _i = 0, _a = [
        ['#f2f', 40, 40],
        ['#2ff', 80, 40],
        ['#ff2', 60, 80],
    ]; _i < _a.length; _i++) {
        var _b = _a[_i], color = _b[0], x = _b[1], y = _b[2];
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, 40, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }
    // Canvas winding
    // https://web.archive.org/web/20130913061632/http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // http://jsfiddle.net/NDYV8/19/
    context.fillStyle = '#f9c';
    context.arc(60, 60, 60, 0, Math.PI * 2, true);
    context.arc(60, 60, 20, 0, Math.PI * 2, true);
    context.fill('evenodd');
}
function canvasToString(canvas) {
    return canvas.toDataURL();
}

/**
 * This is a crude and primitive touch screen detection. It's not possible to currently reliably detect the availability
 * of a touch screen with a JS, without actually subscribing to a touch event.
 *
 * @see http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
 * @see https://github.com/Modernizr/Modernizr/issues/548
 */
function getTouchSupport() {
    var n = navigator;
    var maxTouchPoints = 0;
    var touchEvent;
    if (n.maxTouchPoints !== undefined) {
        maxTouchPoints = toInt(n.maxTouchPoints);
    }
    else if (n.msMaxTouchPoints !== undefined) {
        maxTouchPoints = n.msMaxTouchPoints;
    }
    try {
        document.createEvent('TouchEvent');
        touchEvent = true;
    }
    catch (_a) {
        touchEvent = false;
    }
    var touchStart = 'ontouchstart' in window;
    return {
        maxTouchPoints: maxTouchPoints,
        touchEvent: touchEvent,
        touchStart: touchStart,
    };
}

function getOsCpu() {
    return navigator.oscpu;
}

function getLanguages() {
    var n = navigator;
    var result = [];
    var language = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
    if (language !== undefined) {
        result.push([language]);
    }
    if (Array.isArray(n.languages)) {
        // Starting from Chromium 86, there is only a single value in `navigator.language` in Incognito mode:
        // the value of `navigator.language`. Therefore the value is ignored in this browser.
        if (!(isChromium() && isChromium86OrNewer())) {
            result.push(n.languages);
        }
    }
    else if (typeof n.languages === 'string') {
        var languages = n.languages;
        if (languages) {
            result.push(languages.split(','));
        }
    }
    return result;
}

function getColorDepth() {
    return window.screen.colorDepth;
}

function getDeviceMemory() {
    // `navigator.deviceMemory` is a string containing a number in some unidentified cases
    return replaceNaN(toFloat(navigator.deviceMemory), undefined);
}

function getScreenResolution() {
    var s = screen;
    // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
    // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
    // Some browsers even return  screen resolution as not numbers.
    var parseDimension = function (value) { return replaceNaN(toInt(value), null); };
    var dimensions = [parseDimension(s.width), parseDimension(s.height)];
    dimensions.sort().reverse();
    return dimensions;
}

var screenFrameCheckInterval = 2500;
var roundingPrecision = 10;
// The type is readonly to protect from unwanted mutations
var screenFrameBackup;
var screenFrameSizeTimeoutId;
/**
 * Starts watching the screen frame size. When a non-zero size appears, the size is saved and the watch is stopped.
 * Later, when `getScreenFrame` runs, it will return the saved non-zero size if the current size is null.
 *
 * This trick is required to mitigate the fact that the screen frame turns null in some cases.
 * See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
 */
function watchScreenFrame() {
    if (screenFrameSizeTimeoutId !== undefined) {
        return;
    }
    var checkScreenFrame = function () {
        var frameSize = getCurrentScreenFrame();
        if (isFrameSizeNull(frameSize)) {
            screenFrameSizeTimeoutId = setTimeout(checkScreenFrame, screenFrameCheckInterval);
        }
        else {
            screenFrameBackup = frameSize;
            screenFrameSizeTimeoutId = undefined;
        }
    };
    checkScreenFrame();
}
function getScreenFrame() {
    var _this = this;
    watchScreenFrame();
    return function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__awaiter */ .mG)(_this, void 0, void 0, function () {
        var frameSize;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    frameSize = getCurrentScreenFrame();
                    if (!isFrameSizeNull(frameSize)) return [3 /*break*/, 2];
                    if (screenFrameBackup) {
                        return [2 /*return*/, (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__spreadArray */ .ev)([], screenFrameBackup, true)];
                    }
                    if (!getFullscreenElement()) return [3 /*break*/, 2];
                    // Some browsers set the screen frame to zero when programmatic fullscreen is on.
                    // There is a chance of getting a non-zero frame after exiting the fullscreen.
                    // See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
                    return [4 /*yield*/, exitFullscreen()];
                case 1:
                    // Some browsers set the screen frame to zero when programmatic fullscreen is on.
                    // There is a chance of getting a non-zero frame after exiting the fullscreen.
                    // See more on this at https://github.com/fingerprintjs/fingerprintjs/issues/568
                    _a.sent();
                    frameSize = getCurrentScreenFrame();
                    _a.label = 2;
                case 2:
                    if (!isFrameSizeNull(frameSize)) {
                        screenFrameBackup = frameSize;
                    }
                    return [2 /*return*/, frameSize];
            }
        });
    }); };
}
/**
 * Sometimes the available screen resolution changes a bit, e.g. 1900x1440 → 1900x1439. A possible reason: macOS Dock
 * shrinks to fit more icons when there is too little space. The rounding is used to mitigate the difference.
 */
function getRoundedScreenFrame() {
    var _this = this;
    var screenFrameGetter = getScreenFrame();
    return function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__awaiter */ .mG)(_this, void 0, void 0, function () {
        var frameSize, processSize;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, screenFrameGetter()];
                case 1:
                    frameSize = _a.sent();
                    processSize = function (sideSize) { return (sideSize === null ? null : round(sideSize, roundingPrecision)); };
                    // It might look like I don't know about `for` and `map`.
                    // In fact, such code is used to avoid TypeScript issues without using `as`.
                    return [2 /*return*/, [processSize(frameSize[0]), processSize(frameSize[1]), processSize(frameSize[2]), processSize(frameSize[3])]];
            }
        });
    }); };
}
function getCurrentScreenFrame() {
    var s = screen;
    // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
    // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
    //
    // Some browsers (IE, Edge ≤18) don't provide `screen.availLeft` and `screen.availTop`. The property values are
    // replaced with 0 in such cases to not lose the entropy from `screen.availWidth` and `screen.availHeight`.
    return [
        replaceNaN(toFloat(s.availTop), null),
        replaceNaN(toFloat(s.width) - toFloat(s.availWidth) - replaceNaN(toFloat(s.availLeft), 0), null),
        replaceNaN(toFloat(s.height) - toFloat(s.availHeight) - replaceNaN(toFloat(s.availTop), 0), null),
        replaceNaN(toFloat(s.availLeft), null),
    ];
}
function isFrameSizeNull(frameSize) {
    for (var i = 0; i < 4; ++i) {
        if (frameSize[i]) {
            return false;
        }
    }
    return true;
}

function getHardwareConcurrency() {
    // sometimes hardware concurrency is a string
    return replaceNaN(toInt(navigator.hardwareConcurrency), undefined);
}

function getTimezone() {
    var _a;
    var DateTimeFormat = (_a = window.Intl) === null || _a === void 0 ? void 0 : _a.DateTimeFormat;
    if (DateTimeFormat) {
        var timezone = new DateTimeFormat().resolvedOptions().timeZone;
        if (timezone) {
            return timezone;
        }
    }
    // For browsers that don't support timezone names
    // The minus is intentional because the JS offset is opposite to the real offset
    var offset = -getTimezoneOffset();
    return "UTC".concat(offset >= 0 ? '+' : '').concat(Math.abs(offset));
}
function getTimezoneOffset() {
    var currentYear = new Date().getFullYear();
    // The timezone offset may change over time due to daylight saving time (DST) shifts.
    // The non-DST timezone offset is used as the result timezone offset.
    // Since the DST season differs in the northern and the southern hemispheres,
    // both January and July timezones offsets are considered.
    return Math.max(
    // `getTimezoneOffset` returns a number as a string in some unidentified cases
    toFloat(new Date(currentYear, 0, 1).getTimezoneOffset()), toFloat(new Date(currentYear, 6, 1).getTimezoneOffset()));
}

function getSessionStorage() {
    try {
        return !!window.sessionStorage;
    }
    catch (error) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

// https://bugzilla.mozilla.org/show_bug.cgi?id=781447
function getLocalStorage() {
    try {
        return !!window.localStorage;
    }
    catch (e) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

function getIndexedDB() {
    // IE and Edge don't allow accessing indexedDB in private mode, therefore IE and Edge will have different
    // visitor identifier in normal and private modes.
    if (isTrident() || isEdgeHTML()) {
        return undefined;
    }
    try {
        return !!window.indexedDB;
    }
    catch (e) {
        /* SecurityError when referencing it means it exists */
        return true;
    }
}

function getOpenDatabase() {
    return !!window.openDatabase;
}

function getCpuClass() {
    return navigator.cpuClass;
}

function getPlatform() {
    // Android Chrome 86 and 87 and Android Firefox 80 and 84 don't mock the platform value when desktop mode is requested
    var platform = navigator.platform;
    // iOS mocks the platform value when desktop version is requested: https://github.com/fingerprintjs/fingerprintjs/issues/514
    // iPad uses desktop mode by default since iOS 13
    // The value is 'MacIntel' on M1 Macs
    // The value is 'iPhone' on iPod Touch
    if (platform === 'MacIntel') {
        if (isWebKit() && !isDesktopSafari()) {
            return isIPad() ? 'iPad' : 'iPhone';
        }
    }
    return platform;
}

function getVendor() {
    return navigator.vendor || '';
}

/**
 * Checks for browser-specific (not engine specific) global variables to tell browsers with the same engine apart.
 * Only somewhat popular browsers are considered.
 */
function getVendorFlavors() {
    var flavors = [];
    for (var _i = 0, _a = [
        // Blink and some browsers on iOS
        'chrome',
        // Safari on macOS
        'safari',
        // Chrome on iOS (checked in 85 on 13 and 87 on 14)
        '__crWeb',
        '__gCrWeb',
        // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
        'yandex',
        // Yandex Browser on iOS (checked in 21.2 on 14)
        '__yb',
        '__ybro',
        // Firefox on iOS (checked in 32 on 14)
        '__firefox__',
        // Edge on iOS (checked in 46 on 14)
        '__edgeTrackingPreventionStatistics',
        'webkit',
        // Opera Touch on iOS (checked in 2.6 on 14)
        'oprt',
        // Samsung Internet on Android (checked in 11.1)
        'samsungAr',
        // UC Browser on Android (checked in 12.10 and 13.0)
        'ucweb',
        'UCShellJava',
        // Puffin on Android (checked in 9.0)
        'puffinDevice',
        // UC on iOS and Opera on Android have no specific global variables
        // Edge for Android isn't checked
    ]; _i < _a.length; _i++) {
        var key = _a[_i];
        var value = window[key];
        if (value && typeof value === 'object') {
            flavors.push(key);
        }
    }
    return flavors.sort();
}

/**
 * navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking
 * cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past with
 * site-specific exceptions. Don't rely on it.
 *
 * @see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js Taken from here
 */
function areCookiesEnabled() {
    var d = document;
    // Taken from here: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cookies.js
    // navigator.cookieEnabled cannot detect custom or nuanced cookie blocking configurations. For example, when blocking
    // cookies via the Advanced Privacy Settings in IE9, it always returns true. And there have been issues in the past
    // with site-specific exceptions. Don't rely on it.
    // try..catch because some in situations `document.cookie` is exposed but throws a
    // SecurityError if you try to access it; e.g. documents created from data URIs
    // or in sandboxed iframes (depending on flags/context)
    try {
        // Create cookie
        d.cookie = 'cookietest=1; SameSite=Strict;';
        var result = d.cookie.indexOf('cookietest=') !== -1;
        // Delete cookie
        d.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT';
        return result;
    }
    catch (e) {
        return false;
    }
}

/**
 * Only single element selector are supported (no operators like space, +, >, etc).
 * `embed` and `position: fixed;` will be considered as blocked anyway because it always has no offsetParent.
 * Avoid `iframe` and anything with `[src=]` because they produce excess HTTP requests.
 *
 * The "inappropriate" selectors are obfuscated. See https://github.com/fingerprintjs/fingerprintjs/issues/734.
 * A function is used instead of a plain object to help tree-shaking.
 *
 * The function code is generated automatically. See docs/content_blockers.md to learn how to make the list.
 */
function getFilters() {
    var fromB64 = atob; // Just for better minification
    return {
        abpIndo: [
            '#Iklan-Melayang',
            '#Kolom-Iklan-728',
            '#SidebarIklan-wrapper',
            fromB64('YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld'),
            '[title="ALIENBOLA" i]',
        ],
        abpvn: [
            '#quangcaomb',
            fromB64('Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ='),
            '.quangcao',
            fromB64('W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=='),
            fromB64('W2hyZWZePSJodHRwczovL3piZXQudm4vIl0='),
        ],
        adBlockFinland: [
            '.mainostila',
            fromB64('LnNwb25zb3JpdA=='),
            '.ylamainos',
            fromB64('YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd'),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd'),
        ],
        adBlockPersian: ['#navbar_notice_50', '.kadr', 'TABLE[width="140px"]', '#divAgahi', fromB64('I2FkMl9pbmxpbmU=')],
        adBlockWarningRemoval: [
            '#adblock-honeypot',
            '.adblocker-root',
            '.wp_adblock_detect',
            fromB64('LmhlYWRlci1ibG9ja2VkLWFk'),
            fromB64('I2FkX2Jsb2NrZXI='),
        ],
        adGuardAnnoyances: [
            'amp-embed[type="zen"]',
            '.hs-sosyal',
            '#cookieconsentdiv',
            'div[class^="app_gdpr"]',
            '.as-oil',
        ],
        adGuardBase: [
            '.BetterJsPopOverlay',
            fromB64('I2FkXzMwMFgyNTA='),
            fromB64('I2Jhbm5lcmZsb2F0MjI='),
            fromB64('I2FkLWJhbm5lcg=='),
            fromB64('I2NhbXBhaWduLWJhbm5lcg=='),
        ],
        adGuardChinese: [
            fromB64('LlppX2FkX2FfSA=='),
            fromB64('YVtocmVmKj0iL29kMDA1LmNvbSJd'),
            fromB64('YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd'),
            '.qq_nr_lad',
            '#widget-quan',
        ],
        adGuardFrench: [
            fromB64('I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr'),
            '#pavePub',
            fromB64('LmFkLWRlc2t0b3AtcmVjdGFuZ2xl'),
            '.mobile_adhesion',
            '.widgetadv',
        ],
        adGuardGerman: [
            fromB64('LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=='),
            fromB64('LmJveHN0YXJ0d2VyYnVuZw=='),
            fromB64('LndlcmJ1bmcz'),
            fromB64('YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0='),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0='),
        ],
        adGuardJapanese: [
            '#kauli_yad_1',
            fromB64('YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0='),
            fromB64('Ll9wb3BJbl9pbmZpbml0ZV9hZA=='),
            fromB64('LmFkZ29vZ2xl'),
            fromB64('LmFkX3JlZ3VsYXIz'),
        ],
        adGuardMobile: [
            fromB64('YW1wLWF1dG8tYWRz'),
            fromB64('LmFtcF9hZA=='),
            'amp-embed[type="24smi"]',
            '#mgid_iframe1',
            fromB64('I2FkX2ludmlld19hcmVh'),
        ],
        adGuardRussian: [
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0='),
            fromB64('LnJlY2xhbWE='),
            'div[id^="smi2adblock"]',
            fromB64('ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd'),
            fromB64('I2FkX3NxdWFyZQ=='),
        ],
        adGuardSocial: [
            fromB64('YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0='),
            fromB64('YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0='),
            '.etsy-tweet',
            '#inlineShare',
            '.popup-social',
        ],
        adGuardSpanishPortuguese: [
            '#barraPublicidade',
            '#Publicidade',
            '#publiEspecial',
            '#queTooltip',
            fromB64('W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0='),
        ],
        adGuardTrackingProtection: [
            '#qoo-counter',
            fromB64('YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=='),
            fromB64('YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0='),
            fromB64('YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=='),
            '#top100counter',
        ],
        adGuardTurkish: [
            '#backkapat',
            fromB64('I3Jla2xhbWk='),
            fromB64('YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0='),
            fromB64('YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd'),
            fromB64('YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ=='),
        ],
        bulgarian: [
            fromB64('dGQjZnJlZW5ldF90YWJsZV9hZHM='),
            '#ea_intext_div',
            '.lapni-pop-over',
            '#xenium_hot_offers',
            fromB64('I25ld0Fk'),
        ],
        easyList: [
            fromB64('I0FEX0NPTlRST0xfMjg='),
            fromB64('LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy'),
            '.universalboxADVBOX03',
            fromB64('LmFkdmVydGlzZW1lbnQtNzI4eDkw'),
            fromB64('LnNxdWFyZV9hZHM='),
        ],
        easyListChina: [
            fromB64('YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0='),
            fromB64('LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=='),
            fromB64('LmZyb250cGFnZUFkdk0='),
            '#taotaole',
            '#aafoot.top_box',
        ],
        easyListCookie: [
            '#AdaCompliance.app-notice',
            '.text-center.rgpd',
            '.panel--cookie',
            '.js-cookies-andromeda',
            '.elxtr-consent',
        ],
        easyListCzechSlovak: [
            '#onlajny-stickers',
            fromB64('I3Jla2xhbW5pLWJveA=='),
            fromB64('LnJla2xhbWEtbWVnYWJvYXJk'),
            '.sklik',
            fromB64('W2lkXj0ic2tsaWtSZWtsYW1hIl0='),
        ],
        easyListDutch: [
            fromB64('I2FkdmVydGVudGll'),
            fromB64('I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=='),
            '.adstekst',
            fromB64('YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0='),
            '#semilo-lrectangle',
        ],
        easyListGermany: [
            fromB64('I0FkX1dpbjJkYXk='),
            fromB64('I3dlcmJ1bmdzYm94MzAw'),
            fromB64('YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd'),
            fromB64('I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu'),
            fromB64('YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0='),
        ],
        easyListItaly: [
            fromB64('LmJveF9hZHZfYW5udW5jaQ=='),
            '.sb-box-pubbliredazionale',
            fromB64('YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd'),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd'),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ=='),
        ],
        easyListLithuania: [
            fromB64('LnJla2xhbW9zX3RhcnBhcw=='),
            fromB64('LnJla2xhbW9zX251b3JvZG9z'),
            fromB64('aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd'),
            fromB64('aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd'),
            fromB64('aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd'),
        ],
        estonian: [fromB64('QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==')],
        fanboyAnnoyances: [
            '#feedback-tab',
            '#taboola-below-article',
            '.feedburnerFeedBlock',
            '.widget-feedburner-counter',
            '[title="Subscribe to our blog"]',
        ],
        fanboyAntiFacebook: ['.util-bar-module-firefly-visible'],
        fanboyEnhancedTrackers: [
            '.open.pushModal',
            '#issuem-leaky-paywall-articles-zero-remaining-nag',
            '#sovrn_container',
            'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
            '.BlockNag__Card',
        ],
        fanboySocial: [
            '.td-tags-and-social-wrapper-box',
            '.twitterContainer',
            '.youtube-social',
            'a[title^="Like us on Facebook"]',
            'img[alt^="Share on Digg"]',
        ],
        frellwitSwedish: [
            fromB64('YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=='),
            fromB64('YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=='),
            'article.category-samarbete',
            fromB64('ZGl2LmhvbGlkQWRz'),
            'ul.adsmodern',
        ],
        greekAdBlock: [
            fromB64('QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd'),
            fromB64('QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=='),
            fromB64('QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd'),
            'DIV.agores300',
            'TABLE.advright',
        ],
        hungarian: [
            '#cemp_doboz',
            '.optimonk-iframe-container',
            fromB64('LmFkX19tYWlu'),
            fromB64('W2NsYXNzKj0iR29vZ2xlQWRzIl0='),
            '#hirdetesek_box',
        ],
        iDontCareAboutCookies: [
            '.alert-info[data-block-track*="CookieNotice"]',
            '.ModuleTemplateCookieIndicator',
            '.o--cookies--container',
            '.cookie-msg-info-container',
            '#cookies-policy-sticky',
        ],
        icelandicAbp: [fromB64('QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==')],
        latvian: [
            fromB64('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0O' +
                'iA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0='),
            fromB64('YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6I' +
                'DMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ=='),
        ],
        listKr: [
            fromB64('YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0='),
            fromB64('I2xpdmVyZUFkV3JhcHBlcg=='),
            fromB64('YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=='),
            fromB64('aW5zLmZhc3R2aWV3LWFk'),
            '.revenue_unit_item.dable',
        ],
        listeAr: [
            fromB64('LmdlbWluaUxCMUFk'),
            '.right-and-left-sponsers',
            fromB64('YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=='),
            fromB64('YVtocmVmKj0iYm9vcmFxLm9yZyJd'),
            fromB64('YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd'),
        ],
        listeFr: [
            fromB64('YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=='),
            fromB64('I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=='),
            fromB64('YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0='),
            '.site-pub-interstitiel',
            'div[id^="crt-"][data-criteo-id]',
        ],
        officialPolish: [
            '#ceneo-placeholder-ceneo-12',
            fromB64('W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd'),
            fromB64('YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=='),
            fromB64('YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=='),
            fromB64('ZGl2I3NrYXBpZWNfYWQ='),
        ],
        ro: [
            fromB64('YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd'),
            'a[href^="/magazin/"]',
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd'),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0='),
            fromB64('YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd'),
        ],
        ruAd: [
            fromB64('YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd'),
            fromB64('YVtocmVmKj0iLy91dGltZy5ydS8iXQ=='),
            fromB64('YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0='),
            '#pgeldiz',
            '.yandex-rtb-block',
        ],
        thaiAds: [
            'a[href*=macau-uta-popup]',
            fromB64('I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=='),
            fromB64('LmFkczMwMHM='),
            '.bumq',
            '.img-kosana',
        ],
        webAnnoyancesUltralist: [
            '#mod-social-share-2',
            '#social-tools',
            fromB64('LmN0cGwtZnVsbGJhbm5lcg=='),
            '.zergnet-recommend',
            '.yt.btn-link.btn-md.btn',
        ],
    };
}
/**
 * The order of the returned array means nothing (it's always sorted alphabetically).
 *
 * Notice that the source is slightly unstable.
 * Safari provides a 2-taps way to disable all content blockers on a page temporarily.
 * Also content blockers can be disabled permanently for a domain, but it requires 4 taps.
 * So empty array shouldn't be treated as "no blockers", it should be treated as "no signal".
 * If you are a website owner, don't make your visitors want to disable content blockers.
 */
function getDomBlockers(_a) {
    var _b = _a === void 0 ? {} : _a, debug = _b.debug;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
        var filters, filterNames, allSelectors, blockedSelectors, activeBlockers;
        var _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!isApplicable()) {
                        return [2 /*return*/, undefined];
                    }
                    filters = getFilters();
                    filterNames = Object.keys(filters);
                    allSelectors = (_c = []).concat.apply(_c, filterNames.map(function (filterName) { return filters[filterName]; }));
                    return [4 /*yield*/, getBlockedSelectors(allSelectors)];
                case 1:
                    blockedSelectors = _d.sent();
                    if (debug) {
                        printDebug(filters, blockedSelectors);
                    }
                    activeBlockers = filterNames.filter(function (filterName) {
                        var selectors = filters[filterName];
                        var blockedCount = countTruthy(selectors.map(function (selector) { return blockedSelectors[selector]; }));
                        return blockedCount > selectors.length * 0.6;
                    });
                    activeBlockers.sort();
                    return [2 /*return*/, activeBlockers];
            }
        });
    });
}
function isApplicable() {
    // Safari (desktop and mobile) and all Android browsers keep content blockers in both regular and private mode
    return isWebKit() || isAndroid();
}
function getBlockedSelectors(selectors) {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
        var d, root, elements, blockedSelectors, i, element, holder, i;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    d = document;
                    root = d.createElement('div');
                    elements = new Array(selectors.length);
                    blockedSelectors = {} // Set() isn't used just in case somebody need older browser support
                    ;
                    forceShow(root);
                    // First create all elements that can be blocked. If the DOM steps below are done in a single cycle,
                    // browser will alternate tree modification and layout reading, that is very slow.
                    for (i = 0; i < selectors.length; ++i) {
                        element = selectorToElement(selectors[i]);
                        holder = d.createElement('div') // Protects from unwanted effects of `+` and `~` selectors of filters
                        ;
                        forceShow(holder);
                        holder.appendChild(element);
                        root.appendChild(holder);
                        elements[i] = element;
                    }
                    _b.label = 1;
                case 1:
                    if (!!d.body) return [3 /*break*/, 3];
                    return [4 /*yield*/, wait(50)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 1];
                case 3:
                    d.body.appendChild(root);
                    try {
                        // Then check which of the elements are blocked
                        for (i = 0; i < selectors.length; ++i) {
                            if (!elements[i].offsetParent) {
                                blockedSelectors[selectors[i]] = true;
                            }
                        }
                    }
                    finally {
                        // Then remove the elements
                        (_a = root.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(root);
                    }
                    return [2 /*return*/, blockedSelectors];
            }
        });
    });
}
function forceShow(element) {
    element.style.setProperty('display', 'block', 'important');
}
function printDebug(filters, blockedSelectors) {
    var message = 'DOM blockers debug:\n```';
    for (var _i = 0, _a = Object.keys(filters); _i < _a.length; _i++) {
        var filterName = _a[_i];
        message += "\n".concat(filterName, ":");
        for (var _b = 0, _c = filters[filterName]; _b < _c.length; _b++) {
            var selector = _c[_b];
            message += "\n  ".concat(blockedSelectors[selector] ? '🚫' : '➡️', " ").concat(selector);
        }
    }
    // console.log is ok here because it's under a debug clause
    // eslint-disable-next-line no-console
    console.log("".concat(message, "\n```"));
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut
 */
function getColorGamut() {
    // rec2020 includes p3 and p3 includes srgb
    for (var _i = 0, _a = ['rec2020', 'p3', 'srgb']; _i < _a.length; _i++) {
        var gamut = _a[_i];
        if (matchMedia("(color-gamut: ".concat(gamut, ")")).matches) {
            return gamut;
        }
    }
    return undefined;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors
 */
function areColorsInverted() {
    if (doesMatch$4('inverted')) {
        return true;
    }
    if (doesMatch$4('none')) {
        return false;
    }
    return undefined;
}
function doesMatch$4(value) {
    return matchMedia("(inverted-colors: ".concat(value, ")")).matches;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors
 */
function areColorsForced() {
    if (doesMatch$3('active')) {
        return true;
    }
    if (doesMatch$3('none')) {
        return false;
    }
    return undefined;
}
function doesMatch$3(value) {
    return matchMedia("(forced-colors: ".concat(value, ")")).matches;
}

var maxValueToCheck = 100;
/**
 * If the display is monochrome (e.g. black&white), the value will be ≥0 and will mean the number of bits per pixel.
 * If the display is not monochrome, the returned value will be 0.
 * If the browser doesn't support this feature, the returned value will be undefined.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome
 */
function getMonochromeDepth() {
    if (!matchMedia('(min-monochrome: 0)').matches) {
        // The media feature isn't supported by the browser
        return undefined;
    }
    // A variation of binary search algorithm can be used here.
    // But since expected values are very small (≤10), there is no sense in adding the complexity.
    for (var i = 0; i <= maxValueToCheck; ++i) {
        if (matchMedia("(max-monochrome: ".concat(i, ")")).matches) {
            return i;
        }
    }
    throw new Error('Too high value');
}

/**
 * @see https://www.w3.org/TR/mediaqueries-5/#prefers-contrast
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
 */
function getContrastPreference() {
    if (doesMatch$2('no-preference')) {
        return 0 /* ContrastPreference.None */;
    }
    // The sources contradict on the keywords. Probably 'high' and 'low' will never be implemented.
    // Need to check it when all browsers implement the feature.
    if (doesMatch$2('high') || doesMatch$2('more')) {
        return 1 /* ContrastPreference.More */;
    }
    if (doesMatch$2('low') || doesMatch$2('less')) {
        return -1 /* ContrastPreference.Less */;
    }
    if (doesMatch$2('forced')) {
        return 10 /* ContrastPreference.ForcedColors */;
    }
    return undefined;
}
function doesMatch$2(value) {
    return matchMedia("(prefers-contrast: ".concat(value, ")")).matches;
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
function isMotionReduced() {
    if (doesMatch$1('reduce')) {
        return true;
    }
    if (doesMatch$1('no-preference')) {
        return false;
    }
    return undefined;
}
function doesMatch$1(value) {
    return matchMedia("(prefers-reduced-motion: ".concat(value, ")")).matches;
}

/**
 * @see https://www.w3.org/TR/mediaqueries-5/#dynamic-range
 */
function isHDR() {
    if (doesMatch('high')) {
        return true;
    }
    if (doesMatch('standard')) {
        return false;
    }
    return undefined;
}
function doesMatch(value) {
    return matchMedia("(dynamic-range: ".concat(value, ")")).matches;
}

var M = Math; // To reduce the minified code size
var fallbackFn = function () { return 0; };
/**
 * @see https://gitlab.torproject.org/legacy/trac/-/issues/13018
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=531915
 */
function getMathFingerprint() {
    // Native operations
    var acos = M.acos || fallbackFn;
    var acosh = M.acosh || fallbackFn;
    var asin = M.asin || fallbackFn;
    var asinh = M.asinh || fallbackFn;
    var atanh = M.atanh || fallbackFn;
    var atan = M.atan || fallbackFn;
    var sin = M.sin || fallbackFn;
    var sinh = M.sinh || fallbackFn;
    var cos = M.cos || fallbackFn;
    var cosh = M.cosh || fallbackFn;
    var tan = M.tan || fallbackFn;
    var tanh = M.tanh || fallbackFn;
    var exp = M.exp || fallbackFn;
    var expm1 = M.expm1 || fallbackFn;
    var log1p = M.log1p || fallbackFn;
    // Operation polyfills
    var powPI = function (value) { return M.pow(M.PI, value); };
    var acoshPf = function (value) { return M.log(value + M.sqrt(value * value - 1)); };
    var asinhPf = function (value) { return M.log(value + M.sqrt(value * value + 1)); };
    var atanhPf = function (value) { return M.log((1 + value) / (1 - value)) / 2; };
    var sinhPf = function (value) { return M.exp(value) - 1 / M.exp(value) / 2; };
    var coshPf = function (value) { return (M.exp(value) + 1 / M.exp(value)) / 2; };
    var expm1Pf = function (value) { return M.exp(value) - 1; };
    var tanhPf = function (value) { return (M.exp(2 * value) - 1) / (M.exp(2 * value) + 1); };
    var log1pPf = function (value) { return M.log(1 + value); };
    // Note: constant values are empirical
    return {
        acos: acos(0.123124234234234242),
        acosh: acosh(1e308),
        acoshPf: acoshPf(1e154),
        asin: asin(0.123124234234234242),
        asinh: asinh(1),
        asinhPf: asinhPf(1),
        atanh: atanh(0.5),
        atanhPf: atanhPf(0.5),
        atan: atan(0.5),
        sin: sin(-1e300),
        sinh: sinh(1),
        sinhPf: sinhPf(1),
        cos: cos(10.000000000123),
        cosh: cosh(1),
        coshPf: coshPf(1),
        tan: tan(-1e300),
        tanh: tanh(1),
        tanhPf: tanhPf(1),
        exp: exp(1),
        expm1: expm1(1),
        expm1Pf: expm1Pf(1),
        log1p: log1p(10),
        log1pPf: log1pPf(10),
        powPI: powPI(-100),
    };
}

/**
 * We use m or w because these two characters take up the maximum width.
 * Also there are a couple of ligatures.
 */
var defaultText = 'mmMwWLliI0fiflO&1';
/**
 * Settings of text blocks to measure. The keys are random but persistent words.
 */
var presets = {
    /**
     * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
     * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
     */
    default: [],
    /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
    apple: [{ font: '-apple-system-body' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    serif: [{ fontFamily: 'serif' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    sans: [{ fontFamily: 'sans-serif' }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    mono: [{ fontFamily: 'monospace' }],
    /**
     * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
     * The height can be 0 in Chrome on a retina display.
     */
    min: [{ fontSize: '1px' }],
    /** Tells one OS from another in desktop Chrome. */
    system: [{ fontFamily: 'system-ui' }],
};
/**
 * The result is a dictionary of the width of the text samples.
 * Heights aren't included because they give no extra entropy and are unstable.
 *
 * The result is very stable in IE 11, Edge 18 and Safari 14.
 * The result changes when the OS pixel density changes in Chromium 87. The real pixel density is required to solve,
 * but seems like it's impossible: https://stackoverflow.com/q/1713771/1118709.
 * The "min" and the "mono" (only on Windows) value may change when the page is zoomed in Firefox 87.
 */
function getFontPreferences() {
    return withNaturalFonts(function (document, container) {
        var elements = {};
        var sizes = {};
        // First create all elements to measure. If the DOM steps below are done in a single cycle,
        // browser will alternate tree modification and layout reading, that is very slow.
        for (var _i = 0, _a = Object.keys(presets); _i < _a.length; _i++) {
            var key = _a[_i];
            var _b = presets[key], _c = _b[0], style = _c === void 0 ? {} : _c, _d = _b[1], text = _d === void 0 ? defaultText : _d;
            var element = document.createElement('span');
            element.textContent = text;
            element.style.whiteSpace = 'nowrap';
            for (var _e = 0, _f = Object.keys(style); _e < _f.length; _e++) {
                var name_1 = _f[_e];
                var value = style[name_1];
                if (value !== undefined) {
                    element.style[name_1] = value;
                }
            }
            elements[key] = element;
            container.appendChild(document.createElement('br'));
            container.appendChild(element);
        }
        // Then measure the created elements
        for (var _g = 0, _h = Object.keys(presets); _g < _h.length; _g++) {
            var key = _h[_g];
            sizes[key] = elements[key].getBoundingClientRect().width;
        }
        return sizes;
    });
}
/**
 * Creates a DOM environment that provides the most natural font available, including Android OS font.
 * Measurements of the elements are zoom-independent.
 * Don't put a content to measure inside an absolutely positioned element.
 */
function withNaturalFonts(action, containerWidthPx) {
    if (containerWidthPx === void 0) { containerWidthPx = 4000; }
    /*
     * Requirements for Android Chrome to apply the system font size to a text inside an iframe:
     * - The iframe mustn't have a `display: none;` style;
     * - The text mustn't be positioned absolutely;
     * - The text block must be wide enough.
     *   2560px on some devices in portrait orientation for the biggest font size option (32px);
     * - There must be much enough text to form a few lines (I don't know the exact numbers);
     * - The text must have the `text-size-adjust: none` style. Otherwise the text will scale in "Desktop site" mode;
     *
     * Requirements for Android Firefox to apply the system font size to a text inside an iframe:
     * - The iframe document must have a header: `<meta name="viewport" content="width=device-width, initial-scale=1" />`.
     *   The only way to set it is to use the `srcdoc` attribute of the iframe;
     * - The iframe content must get loaded before adding extra content with JavaScript;
     *
     * https://example.com as the iframe target always inherits Android font settings so it can be used as a reference.
     *
     * Observations on how page zoom affects the measurements:
     * - macOS Safari 11.1, 12.1, 13.1, 14.0: zoom reset + offsetWidth = 100% reliable;
     * - macOS Safari 11.1, 12.1, 13.1, 14.0: zoom reset + getBoundingClientRect = 100% reliable;
     * - macOS Safari 14.0: offsetWidth = 5% fluctuation;
     * - macOS Safari 14.0: getBoundingClientRect = 5% fluctuation;
     * - iOS Safari 9, 10, 11.0, 12.0: haven't found a way to zoom a page (pinch doesn't change layout);
     * - iOS Safari 13.1, 14.0: zoom reset + offsetWidth = 100% reliable;
     * - iOS Safari 13.1, 14.0: zoom reset + getBoundingClientRect = 100% reliable;
     * - iOS Safari 14.0: offsetWidth = 100% reliable;
     * - iOS Safari 14.0: getBoundingClientRect = 100% reliable;
     * - Chrome 42, 65, 80, 87: zoom 1/devicePixelRatio + offsetWidth = 1px fluctuation;
     * - Chrome 42, 65, 80, 87: zoom 1/devicePixelRatio + getBoundingClientRect = 100% reliable;
     * - Chrome 87: offsetWidth = 1px fluctuation;
     * - Chrome 87: getBoundingClientRect = 0.7px fluctuation;
     * - Firefox 48, 51: offsetWidth = 10% fluctuation;
     * - Firefox 48, 51: getBoundingClientRect = 10% fluctuation;
     * - Firefox 52, 53, 57, 62, 66, 67, 68, 71, 75, 80, 84: offsetWidth = width 100% reliable, height 10% fluctuation;
     * - Firefox 52, 53, 57, 62, 66, 67, 68, 71, 75, 80, 84: getBoundingClientRect = width 100% reliable, height 10%
     *   fluctuation;
     * - Android Chrome 86: haven't found a way to zoom a page (pinch doesn't change layout);
     * - Android Firefox 84: font size in accessibility settings changes all the CSS sizes, but offsetWidth and
     *   getBoundingClientRect keep measuring with regular units, so the size reflects the font size setting and doesn't
     *   fluctuate;
     * - IE 11, Edge 18: zoom 1/devicePixelRatio + offsetWidth = 100% reliable;
     * - IE 11, Edge 18: zoom 1/devicePixelRatio + getBoundingClientRect = reflects the zoom level;
     * - IE 11, Edge 18: offsetWidth = 100% reliable;
     * - IE 11, Edge 18: getBoundingClientRect = 100% reliable;
     */
    return withIframe(function (_, iframeWindow) {
        var iframeDocument = iframeWindow.document;
        var iframeBody = iframeDocument.body;
        var bodyStyle = iframeBody.style;
        bodyStyle.width = "".concat(containerWidthPx, "px");
        bodyStyle.webkitTextSizeAdjust = bodyStyle.textSizeAdjust = 'none';
        // See the big comment above
        if (isChromium()) {
            iframeBody.style.zoom = "".concat(1 / iframeWindow.devicePixelRatio);
        }
        else if (isWebKit()) {
            iframeBody.style.zoom = 'reset';
        }
        // See the big comment above
        var linesOfText = iframeDocument.createElement('div');
        linesOfText.textContent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__spreadArray */ .ev)([], Array((containerWidthPx / 20) << 0), true).map(function () { return 'word'; }).join(' ');
        iframeBody.appendChild(linesOfText);
        return action(iframeDocument, iframeBody);
    }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
}

/**
 * @see Credits: https://stackoverflow.com/a/49267844
 */
function getVideoCard() {
    var _a;
    var canvas = document.createElement('canvas');
    var gl = (_a = canvas.getContext('webgl')) !== null && _a !== void 0 ? _a : canvas.getContext('experimental-webgl');
    if (gl && 'getExtension' in gl) {
        var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            return {
                vendor: (gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || '').toString(),
                renderer: (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '').toString(),
            };
        }
    }
    return undefined;
}

function isPdfViewerEnabled() {
    return navigator.pdfViewerEnabled;
}

/**
 * Unlike most other architectures, on x86/x86-64 when floating-point instructions
 * have no NaN arguments, but produce NaN output, the output NaN has sign bit set.
 * We use it to distinguish x86/x86-64 from other architectures, by doing subtraction
 * of two infinities (must produce NaN per IEEE 754 standard).
 *
 * See https://codebrowser.bddppq.com/pytorch/pytorch/third_party/XNNPACK/src/init.c.html#79
 */
function getArchitecture() {
    var f = new Float32Array(1);
    var u8 = new Uint8Array(f.buffer);
    f[0] = Infinity;
    f[0] = f[0] - f[0];
    return u8[3];
}

/**
 * The list of entropy sources used to make visitor identifiers.
 *
 * This value isn't restricted by Semantic Versioning, i.e. it may be changed without bumping minor or major version of
 * this package.
 *
 * Note: Rollup and Webpack are smart enough to remove unused properties of this object during tree-shaking, so there is
 * no need to export the sources individually.
 */
var sources = {
    // READ FIRST:
    // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
    // to learn how entropy source works and how to make your own.
    // The sources run in this exact order.
    // The asynchronous sources are at the start to run in parallel with other sources.
    fonts: getFonts,
    domBlockers: getDomBlockers,
    fontPreferences: getFontPreferences,
    audio: getAudioFingerprint,
    screenFrame: getRoundedScreenFrame,
    osCpu: getOsCpu,
    languages: getLanguages,
    colorDepth: getColorDepth,
    deviceMemory: getDeviceMemory,
    screenResolution: getScreenResolution,
    hardwareConcurrency: getHardwareConcurrency,
    timezone: getTimezone,
    sessionStorage: getSessionStorage,
    localStorage: getLocalStorage,
    indexedDB: getIndexedDB,
    openDatabase: getOpenDatabase,
    cpuClass: getCpuClass,
    platform: getPlatform,
    plugins: getPlugins,
    canvas: getCanvasFingerprint,
    touchSupport: getTouchSupport,
    vendor: getVendor,
    vendorFlavors: getVendorFlavors,
    cookiesEnabled: areCookiesEnabled,
    colorGamut: getColorGamut,
    invertedColors: areColorsInverted,
    forcedColors: areColorsForced,
    monochrome: getMonochromeDepth,
    contrast: getContrastPreference,
    reducedMotion: isMotionReduced,
    hdr: isHDR,
    math: getMathFingerprint,
    videoCard: getVideoCard,
    pdfViewerEnabled: isPdfViewerEnabled,
    architecture: getArchitecture,
};
/**
 * Loads the built-in entropy sources.
 * Returns a function that collects the entropy components to make the visitor identifier.
 */
function loadBuiltinSources(options) {
    return loadSources(sources, options, []);
}

var commentTemplate = '$ if upgrade to Pro: https://fpjs.dev/pro';
function getConfidence(components) {
    var openConfidenceScore = getOpenConfidenceScore(components);
    var proConfidenceScore = deriveProConfidenceScore(openConfidenceScore);
    return { score: openConfidenceScore, comment: commentTemplate.replace(/\$/g, "".concat(proConfidenceScore)) };
}
function getOpenConfidenceScore(components) {
    // In order to calculate the true probability of the visitor identifier being correct, we need to know the number of
    // website visitors (the higher the number, the less the probability because the fingerprint entropy is limited).
    // JS agent doesn't know the number of visitors, so we can only do an approximate assessment.
    if (isAndroid()) {
        return 0.4;
    }
    // Safari (mobile and desktop)
    if (isWebKit()) {
        return isDesktopSafari() ? 0.5 : 0.3;
    }
    var platform = components.platform.value || '';
    // Windows
    if (/^Win/.test(platform)) {
        // The score is greater than on macOS because of the higher variety of devices running Windows.
        // Chrome provides more entropy than Firefox according too
        // https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22platform%22%3A%7B%22%24in%22%3A%5B%22Windows%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-11%22%2C%22dateEnd%22%3A%222020-10%22%2C%22segments%22%3A%22-1000%22%7D
        // So we assign the same score to them.
        return 0.6;
    }
    // macOS
    if (/^Mac/.test(platform)) {
        // Chrome provides more entropy than Safari and Safari provides more entropy than Firefox.
        // Chrome is more popular than Safari and Safari is more popular than Firefox according to
        // https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22platform%22%3A%7B%22%24in%22%3A%5B%22Mac%20OS%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-11%22%2C%22dateEnd%22%3A%222020-10%22%2C%22segments%22%3A%22-1000%22%7D
        // So we assign the same score to them.
        return 0.5;
    }
    // Another platform, e.g. a desktop Linux. It's rare, so it should be pretty unique.
    return 0.7;
}
function deriveProConfidenceScore(openConfidenceScore) {
    return round(0.99 + 0.01 * openConfidenceScore, 0.0001);
}

function componentsToCanonicalString(components) {
    var result = '';
    for (var _i = 0, _a = Object.keys(components).sort(); _i < _a.length; _i++) {
        var componentKey = _a[_i];
        var component = components[componentKey];
        var value = component.error ? 'error' : JSON.stringify(component.value);
        result += "".concat(result ? '|' : '').concat(componentKey.replace(/([:|\\])/g, '\\$1'), ":").concat(value);
    }
    return result;
}
function componentsToDebugString(components) {
    return JSON.stringify(components, function (_key, value) {
        if (value instanceof Error) {
            return errorToObject(value);
        }
        return value;
    }, 2);
}
function hashComponents(components) {
    return x64hash128(componentsToCanonicalString(components));
}
/**
 * Makes a GetResult implementation that calculates the visitor id hash on demand.
 * Designed for optimisation.
 */
function makeLazyGetResult(components) {
    var visitorIdCache;
    // This function runs very fast, so there is no need to make it lazy
    var confidence = getConfidence(components);
    // A plain class isn't used because its getters and setters aren't enumerable.
    return {
        get visitorId() {
            if (visitorIdCache === undefined) {
                visitorIdCache = hashComponents(this.components);
            }
            return visitorIdCache;
        },
        set visitorId(visitorId) {
            visitorIdCache = visitorId;
        },
        confidence: confidence,
        components: components,
        version: version,
    };
}
/**
 * A delay is required to ensure consistent entropy components.
 * See https://github.com/fingerprintjs/fingerprintjs/issues/254
 * and https://github.com/fingerprintjs/fingerprintjs/issues/307
 * and https://github.com/fingerprintjs/fingerprintjs/commit/945633e7c5f67ae38eb0fea37349712f0e669b18
 */
function prepareForSources(delayFallback) {
    if (delayFallback === void 0) { delayFallback = 50; }
    // A proper deadline is unknown. Let it be twice the fallback timeout so that both cases have the same average time.
    return requestIdleCallbackIfAvailable(delayFallback, delayFallback * 2);
}
/**
 * The function isn't exported from the index file to not allow to call it without `load()`.
 * The hiding gives more freedom for future non-breaking updates.
 *
 * A factory function is used instead of a class to shorten the attribute names in the minified code.
 * Native private class fields could've been used, but TypeScript doesn't allow them with `"target": "es5"`.
 */
function makeAgent(getComponents, debug) {
    var creationTime = Date.now();
    return {
        get: function (options) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
                var startTime, components, result;
                return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            startTime = Date.now();
                            return [4 /*yield*/, getComponents()];
                        case 1:
                            components = _a.sent();
                            result = makeLazyGetResult(components);
                            if (debug || (options === null || options === void 0 ? void 0 : options.debug)) {
                                // console.log is ok here because it's under a debug clause
                                // eslint-disable-next-line no-console
                                console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(result.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(startTime - creationTime, "\nvisitorId: ").concat(result.visitorId, "\ncomponents: ").concat(componentsToDebugString(components), "\n```"));
                            }
                            return [2 /*return*/, result];
                    }
                });
            });
        },
    };
}
/**
 * Sends an unpersonalized AJAX request to collect installation statistics
 */
function monitor() {
    // The FingerprintJS CDN (https://github.com/fingerprintjs/cdn) replaces `window.__fpjs_d_m` with `true`
    if (window.__fpjs_d_m || Math.random() >= 0.001) {
        return;
    }
    try {
        var request = new XMLHttpRequest();
        request.open('get', "https://m1.openfpcdn.io/fingerprintjs/v".concat(version, "/npm-monitoring"), true);
        request.send();
    }
    catch (error) {
        // console.error is ok here because it's an unexpected error handler
        // eslint-disable-next-line no-console
        console.error(error);
    }
}
/**
 * Builds an instance of Agent and waits a delay required for a proper operation.
 */
function load(_a) {
    var _b = _a === void 0 ? {} : _a, delayFallback = _b.delayFallback, debug = _b.debug, _c = _b.monitoring, monitoring = _c === void 0 ? true : _c;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
        var getComponents;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__generator */ .Jh)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (monitoring) {
                        monitor();
                    }
                    return [4 /*yield*/, prepareForSources(delayFallback)];
                case 1:
                    _d.sent();
                    getComponents = loadBuiltinSources({ debug: debug });
                    return [2 /*return*/, makeAgent(getComponents, debug)];
            }
        });
    });
}

// The default export is a syntax sugar (`import * as FP from '...' → import FP from '...'`).
// It should contain all the public exported values.
var index = { load: load, hashComponents: hashComponents, componentsToDebugString: componentsToDebugString };
// The exports below are for private usage. They may change unexpectedly. Use them at your own risk.
/** Not documented, out of Semantic Versioning, usage is at your own risk */
var murmurX64Hash128 = (/* unused pure expression or super */ null && (x64hash128));




/***/ }),

/***/ 25970:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePickBy = __webpack_require__(63012),
    hasIn = __webpack_require__(79095);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ 92052:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(42980),
    isObject = __webpack_require__(13218);

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

module.exports = customDefaultsMerge;


/***/ }),

/***/ 66913:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(96874),
    baseRest = __webpack_require__(5976),
    customDefaultsMerge = __webpack_require__(92052),
    mergeWith = __webpack_require__(30236);

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;


/***/ }),

/***/ 30236:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(42980),
    createAssigner = __webpack_require__(21463);

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),

/***/ 78718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePick = __webpack_require__(25970),
    flatRest = __webpack_require__(99021);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ 98601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUnset = __webpack_require__(57406);

/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 7 } }] };
 * _.unset(object, 'a[0].b.c');
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 *
 * _.unset(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 */
function unset(object, path) {
  return object == null ? true : baseUnset(object, path);
}

module.exports = unset;


/***/ }),

/***/ 54423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ provider)
});

// UNUSED EXPORTS: createIntl

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(97582);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/injectIntl.js
var injectIntl = __webpack_require__(74806);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/utils.js + 1 modules
var utils = __webpack_require__(77184);
;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/node_modules/@formatjs/ecma402-abstract/lib/utils.js
/**
 * Cannot do Math.log(x) / Math.log(10) bc if IEEE floating point issue
 * @param x number
 */
function getMagnitude(x) {
    // Cannot count string length via Number.toString because it may use scientific notation
    // for very small or very large numbers.
    return Math.floor(Math.log(x) * Math.LOG10E);
}
function repeat(s, times) {
    if (typeof s.repeat === 'function') {
        return s.repeat(times);
    }
    var arr = new Array(times);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = s;
    }
    return arr.join('');
}
function setInternalSlot(map, pl, field, value) {
    if (!map.get(pl)) {
        map.set(pl, Object.create(null));
    }
    var slots = map.get(pl);
    slots[field] = value;
}
function setMultiInternalSlots(map, pl, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var k = _a[_i];
        setInternalSlot(map, pl, k, props[k]);
    }
}
function getInternalSlot(map, pl, field) {
    return getMultiInternalSlots(map, pl, field)[field];
}
function getMultiInternalSlots(map, pl) {
    var fields = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        fields[_i - 2] = arguments[_i];
    }
    var slots = map.get(pl);
    if (!slots) {
        throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
    }
    return fields.reduce(function (all, f) {
        all[f] = slots[f];
        return all;
    }, Object.create(null));
}
function isLiteralPart(patternPart) {
    return patternPart.type === 'literal';
}
/*
  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
*/
function defineProperty(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value,
    });
}
var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}

// EXTERNAL MODULE: ./node_modules/@formatjs/intl/node_modules/intl-messageformat/lib/src/core.js + 1 modules
var core = __webpack_require__(42244);
// EXTERNAL MODULE: ./node_modules/@formatjs/intl/lib/src/error.js
var error = __webpack_require__(88222);
// EXTERNAL MODULE: ./node_modules/@formatjs/intl/node_modules/@formatjs/icu-messageformat-parser/lib/index.js + 9 modules
var lib = __webpack_require__(60572);
;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/message.js





function setTimeZoneInOptions(opts, timeZone) {
    return Object.keys(opts).reduce(function (all, k) {
        all[k] = (0,tslib_es6/* __assign */.pi)({ timeZone: timeZone }, opts[k]);
        return all;
    }, {});
}
function deepMergeOptions(opts1, opts2) {
    var keys = Object.keys((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, opts1), opts2));
    return keys.reduce(function (all, k) {
        all[k] = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, (opts1[k] || {})), (opts2[k] || {}));
        return all;
    }, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
    if (!timeZone) {
        return f1;
    }
    var mfFormats = core/* IntlMessageFormat */.C.formats;
    return (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, mfFormats), f1), { date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)), time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone)) });
}
var formatMessage = function (_a, state, messageDescriptor, values, opts) {
    var locale = _a.locale, formats = _a.formats, messages = _a.messages, defaultLocale = _a.defaultLocale, defaultFormats = _a.defaultFormats, fallbackOnEmptyString = _a.fallbackOnEmptyString, onError = _a.onError, timeZone = _a.timeZone, defaultRichTextElements = _a.defaultRichTextElements;
    if (messageDescriptor === void 0) { messageDescriptor = { id: '' }; }
    var msgId = messageDescriptor.id, defaultMessage = messageDescriptor.defaultMessage;
    // `id` is a required field of a Message Descriptor.
    invariant(!!msgId, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
    var id = String(msgId);
    var message = 
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    messages &&
        Object.prototype.hasOwnProperty.call(messages, id) &&
        messages[id];
    // IMPORTANT: Hot path if `message` is AST with a single literal node
    if (Array.isArray(message) &&
        message.length === 1 &&
        message[0].type === lib/* TYPE */.wD.literal) {
        return message[0].value;
    }
    // IMPORTANT: Hot path straight lookup for performance
    if (!values &&
        message &&
        typeof message === 'string' &&
        !defaultRichTextElements) {
        return message.replace(/'\{(.*?)\}'/gi, "{$1}");
    }
    values = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, defaultRichTextElements), (values || {}));
    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
    if (!message) {
        if (fallbackOnEmptyString === false && message === '') {
            return message;
        }
        if (!defaultMessage ||
            (locale && locale.toLowerCase() !== defaultLocale.toLowerCase())) {
            // This prevents warnings from littering the console in development
            // when no `messages` are passed into the <IntlProvider> for the
            // default locale.
            onError(new error/* MissingTranslationError */.$6(messageDescriptor, locale));
        }
        if (defaultMessage) {
            try {
                var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
                return formatter.format(values);
            }
            catch (e) {
                onError(new error/* MessageFormatError */.X9("Error formatting default message for: \"".concat(id, "\", rendering default message verbatim"), locale, messageDescriptor, e));
                return typeof defaultMessage === 'string' ? defaultMessage : id;
            }
        }
        return id;
    }
    // We have the translated message
    try {
        var formatter = state.getMessageFormat(message, locale, formats, (0,tslib_es6/* __assign */.pi)({ formatters: state }, (opts || {})));
        return formatter.format(values);
    }
    catch (e) {
        onError(new error/* MessageFormatError */.X9("Error formatting message: \"".concat(id, "\", using ").concat(defaultMessage ? 'default message' : 'id', " as fallback."), locale, messageDescriptor, e));
    }
    if (defaultMessage) {
        try {
            var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
            return formatter.format(values);
        }
        catch (e) {
            onError(new error/* MessageFormatError */.X9("Error formatting the default message for: \"".concat(id, "\", rendering message verbatim"), locale, messageDescriptor, e));
        }
    }
    if (typeof message === 'string') {
        return message;
    }
    if (typeof defaultMessage === 'string') {
        return defaultMessage;
    }
    return id;
};

// EXTERNAL MODULE: ./node_modules/@formatjs/intl/lib/src/utils.js
var src_utils = __webpack_require__(82644);
;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/number.js


var NUMBER_FORMAT_OPTIONS = [
    'style',
    'currency',
    'currencyDisplay',
    'unit',
    'unitDisplay',
    'useGrouping',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    // ES2020 NumberFormat
    'compactDisplay',
    'currencyDisplay',
    'currencySign',
    'notation',
    'signDisplay',
    'unit',
    'unitDisplay',
    'numberingSystem',
];
function getFormatter(_a, getNumberFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = ((format &&
        (0,src_utils/* getNamedFormat */.TB)(formats, 'number', format, onError)) ||
        {});
    var filteredOptions = (0,src_utils/* filterProps */.L6)(options, NUMBER_FORMAT_OPTIONS, defaults);
    return getNumberFormat(locale, filteredOptions);
}
function formatNumber(config, getNumberFormat, value, options) {
    if (options === void 0) { options = {}; }
    try {
        return getFormatter(config, getNumberFormat, options).format(value);
    }
    catch (e) {
        config.onError(new error/* IntlFormatError */.Qe('Error formatting number.', config.locale, e));
    }
    return String(value);
}
function formatNumberToParts(config, getNumberFormat, value, options) {
    if (options === void 0) { options = {}; }
    try {
        return getFormatter(config, getNumberFormat, options).formatToParts(value);
    }
    catch (e) {
        config.onError(new error/* IntlFormatError */.Qe('Error formatting number.', config.locale, e));
    }
    return [];
}

// EXTERNAL MODULE: ./node_modules/@formatjs/intl/node_modules/intl-messageformat/lib/src/error.js
var src_error = __webpack_require__(20494);
;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/relativeTime.js



var RELATIVE_TIME_FORMAT_OPTIONS = ['numeric', 'style'];
function relativeTime_getFormatter(_a, getRelativeTimeFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = (!!format && (0,src_utils/* getNamedFormat */.TB)(formats, 'relative', format, onError)) || {};
    var filteredOptions = (0,src_utils/* filterProps */.L6)(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
    return getRelativeTimeFormat(locale, filteredOptions);
}
function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options) {
    if (options === void 0) { options = {}; }
    if (!unit) {
        unit = 'second';
    }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    if (!RelativeTimeFormat) {
        config.onError(new src_error/* FormatError */.u_("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", src_error/* ErrorCode */.jK.MISSING_INTL_API));
    }
    try {
        return relativeTime_getFormatter(config, getRelativeTimeFormat, options).format(value, unit);
    }
    catch (e) {
        config.onError(new error/* IntlFormatError */.Qe('Error formatting relative time.', config.locale, e));
    }
    return String(value);
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/dateTime.js



var DATE_TIME_FORMAT_OPTIONS = [
    'formatMatcher',
    'timeZone',
    'hour12',
    'weekday',
    'era',
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'timeZoneName',
    'hourCycle',
    'dateStyle',
    'timeStyle',
    'calendar',
    // 'dayPeriod',
    'numberingSystem',
    'fractionalSecondDigits',
];
function dateTime_getFormatter(_a, type, getDateTimeFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError, timeZone = _a.timeZone;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, (timeZone && { timeZone: timeZone })), (format && (0,src_utils/* getNamedFormat */.TB)(formats, type, format, onError)));
    var filteredOptions = (0,src_utils/* filterProps */.L6)(options, DATE_TIME_FORMAT_OPTIONS, defaults);
    if (type === 'time' &&
        !filteredOptions.hour &&
        !filteredOptions.minute &&
        !filteredOptions.second &&
        !filteredOptions.timeStyle &&
        !filteredOptions.dateStyle) {
        // Add default formatting options if hour, minute, or second isn't defined.
        filteredOptions = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, filteredOptions), { hour: 'numeric', minute: 'numeric' });
    }
    return getDateTimeFormat(locale, filteredOptions);
}
function formatDate(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return dateTime_getFormatter(config, 'date', getDateTimeFormat, options).format(date);
    }
    catch (e) {
        config.onError(new error/* IntlFormatError */.Qe('Error formatting date.', config.locale, e));
    }
    return String(date);
}
function formatTime(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return dateTime_getFormatter(config, 'time', getDateTimeFormat, options).format(date);
    }
    catch (e) {
        config.onError(new error/* IntlFormatError */.Qe('Error formatting time.', config.locale, e));
    }
    return String(date);
}
function formatDateTimeRange(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var from = _a[0], to = _a[1], _b = _a[2], options = _b === void 0 ? {} : _b;
    var timeZone = config.timeZone, locale = config.locale, onError = config.onError;
    var filteredOptions = (0,src_utils/* filterProps */.L6)(options, DATE_TIME_FORMAT_OPTIONS, timeZone ? { timeZone: timeZone } : {});
    try {
        return getDateTimeFormat(locale, filteredOptions).formatRange(from, to);
    }
    catch (e) {
        onError(new error/* IntlFormatError */.Qe('Error formatting date time range.', config.locale, e));
    }
    return String(from);
}
function formatDateToParts(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return dateTime_getFormatter(config, 'date', getDateTimeFormat, options).formatToParts(date); // TODO: remove this when https://github.com/microsoft/TypeScript/pull/50402 is merged
    }
    catch (e) {
        config.onError(new error/* IntlFormatError */.Qe('Error formatting date.', config.locale, e));
    }
    return [];
}
function formatTimeToParts(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return dateTime_getFormatter(config, 'time', getDateTimeFormat, options).formatToParts(date); // TODO: remove this when https://github.com/microsoft/TypeScript/pull/50402 is merged
    }
    catch (e) {
        config.onError(new error/* IntlFormatError */.Qe('Error formatting time.', config.locale, e));
    }
    return [];
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/plural.js



var PLURAL_FORMAT_OPTIONS = ['type'];
function formatPlural(_a, getPluralRules, value, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    if (!Intl.PluralRules) {
        onError(new src_error/* FormatError */.u_("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", src_error/* ErrorCode */.jK.MISSING_INTL_API));
    }
    var filteredOptions = (0,src_utils/* filterProps */.L6)(options, PLURAL_FORMAT_OPTIONS);
    try {
        return getPluralRules(locale, filteredOptions).select(value);
    }
    catch (e) {
        onError(new error/* IntlFormatError */.Qe('Error formatting plural.', locale, e));
    }
    return 'other';
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/list.js




var LIST_FORMAT_OPTIONS = [
    'type',
    'style',
];
var now = Date.now();
function generateToken(i) {
    return "".concat(now, "_").concat(i, "_").concat(now);
}
function formatList(opts, getListFormat, values, options) {
    if (options === void 0) { options = {}; }
    var results = formatListToParts(opts, getListFormat, values, options).reduce(function (all, el) {
        var val = el.value;
        if (typeof val !== 'string') {
            all.push(val);
        }
        else if (typeof all[all.length - 1] === 'string') {
            all[all.length - 1] += val;
        }
        else {
            all.push(val);
        }
        return all;
    }, []);
    return results.length === 1 ? results[0] : results.length === 0 ? '' : results;
}
function formatListToParts(_a, getListFormat, values, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var ListFormat = Intl.ListFormat;
    if (!ListFormat) {
        onError(new src_error/* FormatError */.u_("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", src_error/* ErrorCode */.jK.MISSING_INTL_API));
    }
    var filteredOptions = (0,src_utils/* filterProps */.L6)(options, LIST_FORMAT_OPTIONS);
    try {
        var richValues_1 = {};
        var serializedValues = values.map(function (v, i) {
            if (typeof v === 'object') {
                var id = generateToken(i);
                richValues_1[id] = v;
                return id;
            }
            return String(v);
        });
        return getListFormat(locale, filteredOptions)
            .formatToParts(serializedValues)
            .map(function (part) {
            return part.type === 'literal'
                ? part
                : (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, part), { value: richValues_1[part.value] || part.value });
        });
    }
    catch (e) {
        onError(new error/* IntlFormatError */.Qe('Error formatting list.', locale, e));
    }
    // @ts-ignore
    return values;
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/displayName.js



var DISPLAY_NAMES_OPTONS = [
    'style',
    'type',
    'fallback',
    'languageDisplay',
];
function formatDisplayName(_a, getDisplayNames, value, options) {
    var locale = _a.locale, onError = _a.onError;
    var DisplayNames = Intl.DisplayNames;
    if (!DisplayNames) {
        onError(new src_error/* FormatError */.u_("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", src_error/* ErrorCode */.jK.MISSING_INTL_API));
    }
    var filteredOptions = (0,src_utils/* filterProps */.L6)(options, DISPLAY_NAMES_OPTONS);
    try {
        return getDisplayNames(locale, filteredOptions).of(value);
    }
    catch (e) {
        onError(new error/* IntlFormatError */.Qe('Error formatting display name.', locale, e));
    }
}

;// CONCATENATED MODULE: ./node_modules/@formatjs/intl/lib/src/create-intl.js










function messagesContainString(messages) {
    var firstMessage = messages ? messages[Object.keys(messages)[0]] : undefined;
    return typeof firstMessage === 'string';
}
function verifyConfigMessages(config) {
    if (config.onWarn &&
        config.defaultRichTextElements &&
        messagesContainString(config.messages || {})) {
        config.onWarn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
    }
}
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
function createIntl(config, cache) {
    var formatters = (0,src_utils/* createFormatters */.ax)(cache);
    var resolvedConfig = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, src_utils/* DEFAULT_INTL_CONFIG */.Z0), config);
    var locale = resolvedConfig.locale, defaultLocale = resolvedConfig.defaultLocale, onError = resolvedConfig.onError;
    if (!locale) {
        if (onError) {
            onError(new error/* InvalidConfigError */.OV("\"locale\" was not configured, using \"".concat(defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details")));
        }
        // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.
        resolvedConfig.locale = resolvedConfig.defaultLocale || 'en';
    }
    else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) {
        onError(new error/* MissingDataError */.gb("Missing locale data for locale: \"".concat(locale, "\" in Intl.NumberFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details")));
    }
    else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length &&
        onError) {
        onError(new error/* MissingDataError */.gb("Missing locale data for locale: \"".concat(locale, "\" in Intl.DateTimeFormat. Using default locale: \"").concat(defaultLocale, "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details")));
    }
    verifyConfigMessages(resolvedConfig);
    return (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, resolvedConfig), { formatters: formatters, formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat), formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat), formatRelativeTime: formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat), formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateTimeRange: formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules), 
        // @ts-expect-error TODO: will get to this later
        formatMessage: formatMessage.bind(null, resolvedConfig, formatters), 
        // @ts-expect-error TODO: will get to this later
        $t: formatMessage.bind(null, resolvedConfig, formatters), formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat), formatListToParts: formatListToParts.bind(null, resolvedConfig, formatters.getListFormat), formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames) });
}

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-messageformat-parser/lib/error.js
var error_ErrorKind;
(function (ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */
    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */
    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */
    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */
    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */
    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */
    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(error_ErrorKind || (error_ErrorKind = {}));

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-messageformat-parser/lib/types.js
var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */
    TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function types_isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function types_isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function types_isNumberElement(el) {
    return el.type === TYPE.number;
}
function types_isDateElement(el) {
    return el.type === TYPE.date;
}
function types_isTimeElement(el) {
    return el.type === TYPE.time;
}
function types_isSelectElement(el) {
    return el.type === TYPE.select;
}
function types_isPluralElement(el) {
    return el.type === TYPE.plural;
}
function types_isPoundElement(el) {
    return el.type === TYPE.pound;
}
function types_isTagElement(el) {
    return el.type === TYPE.tag;
}
function types_isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function types_isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
    return {
        type: TYPE.literal,
        value: value,
    };
}
function createNumberElement(value, style) {
    return {
        type: TYPE.number,
        value: value,
        style: style,
    };
}

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: miliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js
// @generated from regex-gen.ts
var regex_generated_WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-skeleton-parser/lib/number.js


function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton
        .split(regex_generated_WHITE_SPACE_REGEX)
        .filter(function (x) { return x.length > 0; });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({ stem: stem, options: options });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === 'r') {
        result.roundingPriority = 'morePrecision';
    }
    else if (str[str.length - 1] === 's') {
        result.roundingPriority = 'lessPrecision';
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never',
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering',
        };
        stem = stem.slice(2);
    }
    else if (stem[0] === 'E') {
        result = {
            notation: 'scientific',
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        }
        else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return ((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return ((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    }
                    else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    }
                    else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                }
                // .### case
                else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                }
                // .00## case
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                }
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            var opt = token.options[0];
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#trailing-zero-display
            if (opt === 'w') {
                result = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, result), { trailingZeroDisplay: 'stripIfInteger' });
            }
            else if (opt) {
                result = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, result), parseSignificantPrecision(opt));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
// @generated from time-data-gen.ts
// prettier-ignore  
var timeData = {
    "AX": [
        "H"
    ],
    "BQ": [
        "H"
    ],
    "CP": [
        "H"
    ],
    "CZ": [
        "H"
    ],
    "DK": [
        "H"
    ],
    "FI": [
        "H"
    ],
    "ID": [
        "H"
    ],
    "IS": [
        "H"
    ],
    "ML": [
        "H"
    ],
    "NE": [
        "H"
    ],
    "RU": [
        "H"
    ],
    "SE": [
        "H"
    ],
    "SJ": [
        "H"
    ],
    "SK": [
        "H"
    ],
    "AS": [
        "h",
        "H"
    ],
    "BT": [
        "h",
        "H"
    ],
    "DJ": [
        "h",
        "H"
    ],
    "ER": [
        "h",
        "H"
    ],
    "GH": [
        "h",
        "H"
    ],
    "IN": [
        "h",
        "H"
    ],
    "LS": [
        "h",
        "H"
    ],
    "PG": [
        "h",
        "H"
    ],
    "PW": [
        "h",
        "H"
    ],
    "SO": [
        "h",
        "H"
    ],
    "TO": [
        "h",
        "H"
    ],
    "VU": [
        "h",
        "H"
    ],
    "WS": [
        "h",
        "H"
    ],
    "001": [
        "H",
        "h"
    ],
    "AL": [
        "h",
        "H",
        "hB"
    ],
    "TD": [
        "h",
        "H",
        "hB"
    ],
    "ca-ES": [
        "H",
        "h",
        "hB"
    ],
    "CF": [
        "H",
        "h",
        "hB"
    ],
    "CM": [
        "H",
        "h",
        "hB"
    ],
    "fr-CA": [
        "H",
        "h",
        "hB"
    ],
    "gl-ES": [
        "H",
        "h",
        "hB"
    ],
    "it-CH": [
        "H",
        "h",
        "hB"
    ],
    "it-IT": [
        "H",
        "h",
        "hB"
    ],
    "LU": [
        "H",
        "h",
        "hB"
    ],
    "NP": [
        "H",
        "h",
        "hB"
    ],
    "PF": [
        "H",
        "h",
        "hB"
    ],
    "SC": [
        "H",
        "h",
        "hB"
    ],
    "SM": [
        "H",
        "h",
        "hB"
    ],
    "SN": [
        "H",
        "h",
        "hB"
    ],
    "TF": [
        "H",
        "h",
        "hB"
    ],
    "VA": [
        "H",
        "h",
        "hB"
    ],
    "CY": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "GR": [
        "h",
        "H",
        "hb",
        "hB"
    ],
    "CO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "DO": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KP": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "KR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "NA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PA": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "PR": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "VE": [
        "h",
        "H",
        "hB",
        "hb"
    ],
    "AC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "AI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BW": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "BZ": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CC": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "CX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "DG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "FK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GB": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "GI": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IM": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "IO": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "JE": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "LT": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MK": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "MS": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NF": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NG": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NR": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "NU": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "PN": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SH": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "SX": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "TA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "ZA": [
        "H",
        "h",
        "hb",
        "hB"
    ],
    "af-ZA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "AR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CL": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "CU": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "EA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BO": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-BR": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-EC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-ES": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-GQ": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "es-PE": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "GT": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "HN": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "IC": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KG": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "KM": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "LK": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MA": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "MX": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "NI": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "PY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "SV": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "UY": [
        "H",
        "h",
        "hB",
        "hb"
    ],
    "JP": [
        "H",
        "h",
        "K"
    ],
    "AD": [
        "H",
        "hB"
    ],
    "AM": [
        "H",
        "hB"
    ],
    "AO": [
        "H",
        "hB"
    ],
    "AT": [
        "H",
        "hB"
    ],
    "AW": [
        "H",
        "hB"
    ],
    "BE": [
        "H",
        "hB"
    ],
    "BF": [
        "H",
        "hB"
    ],
    "BJ": [
        "H",
        "hB"
    ],
    "BL": [
        "H",
        "hB"
    ],
    "BR": [
        "H",
        "hB"
    ],
    "CG": [
        "H",
        "hB"
    ],
    "CI": [
        "H",
        "hB"
    ],
    "CV": [
        "H",
        "hB"
    ],
    "DE": [
        "H",
        "hB"
    ],
    "EE": [
        "H",
        "hB"
    ],
    "FR": [
        "H",
        "hB"
    ],
    "GA": [
        "H",
        "hB"
    ],
    "GF": [
        "H",
        "hB"
    ],
    "GN": [
        "H",
        "hB"
    ],
    "GP": [
        "H",
        "hB"
    ],
    "GW": [
        "H",
        "hB"
    ],
    "HR": [
        "H",
        "hB"
    ],
    "IL": [
        "H",
        "hB"
    ],
    "IT": [
        "H",
        "hB"
    ],
    "KZ": [
        "H",
        "hB"
    ],
    "MC": [
        "H",
        "hB"
    ],
    "MD": [
        "H",
        "hB"
    ],
    "MF": [
        "H",
        "hB"
    ],
    "MQ": [
        "H",
        "hB"
    ],
    "MZ": [
        "H",
        "hB"
    ],
    "NC": [
        "H",
        "hB"
    ],
    "NL": [
        "H",
        "hB"
    ],
    "PM": [
        "H",
        "hB"
    ],
    "PT": [
        "H",
        "hB"
    ],
    "RE": [
        "H",
        "hB"
    ],
    "RO": [
        "H",
        "hB"
    ],
    "SI": [
        "H",
        "hB"
    ],
    "SR": [
        "H",
        "hB"
    ],
    "ST": [
        "H",
        "hB"
    ],
    "TG": [
        "H",
        "hB"
    ],
    "TR": [
        "H",
        "hB"
    ],
    "WF": [
        "H",
        "hB"
    ],
    "YT": [
        "H",
        "hB"
    ],
    "BD": [
        "h",
        "hB",
        "H"
    ],
    "PK": [
        "h",
        "hB",
        "H"
    ],
    "AZ": [
        "H",
        "hB",
        "h"
    ],
    "BA": [
        "H",
        "hB",
        "h"
    ],
    "BG": [
        "H",
        "hB",
        "h"
    ],
    "CH": [
        "H",
        "hB",
        "h"
    ],
    "GE": [
        "H",
        "hB",
        "h"
    ],
    "LI": [
        "H",
        "hB",
        "h"
    ],
    "ME": [
        "H",
        "hB",
        "h"
    ],
    "RS": [
        "H",
        "hB",
        "h"
    ],
    "UA": [
        "H",
        "hB",
        "h"
    ],
    "UZ": [
        "H",
        "hB",
        "h"
    ],
    "XK": [
        "H",
        "hB",
        "h"
    ],
    "AG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "AU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "CA": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "DM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "en-001": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FJ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "FM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GD": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GU": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "GY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "JM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KN": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "KY": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "LR": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MH": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MP": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "MW": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "NZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SB": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SL": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SS": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "SZ": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "TT": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "UM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "US": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VC": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VG": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "VI": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "ZM": [
        "h",
        "hb",
        "H",
        "hB"
    ],
    "BO": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "EC": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "ES": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "GQ": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "PE": [
        "H",
        "hB",
        "h",
        "hb"
    ],
    "AE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "ar-001": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "BH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "DZ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EG": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "EH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "HK": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "IQ": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "JO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "KW": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LB": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "LY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MO": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "MR": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "OM": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PH": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "PS": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "QA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SA": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SD": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "SY": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "TN": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "YE": [
        "h",
        "hB",
        "hb",
        "H"
    ],
    "AF": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "LA": [
        "H",
        "hb",
        "hB",
        "h"
    ],
    "CN": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "LV": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "TL": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "zu-ZA": [
        "H",
        "hB",
        "hb",
        "h"
    ],
    "CD": [
        "hB",
        "H"
    ],
    "IR": [
        "hB",
        "H"
    ],
    "hi-IN": [
        "hB",
        "h",
        "H"
    ],
    "kn-IN": [
        "hB",
        "h",
        "H"
    ],
    "ml-IN": [
        "hB",
        "h",
        "H"
    ],
    "te-IN": [
        "hB",
        "h",
        "H"
    ],
    "KH": [
        "hB",
        "h",
        "H",
        "hb"
    ],
    "ta-IN": [
        "hB",
        "h",
        "hb",
        "H"
    ],
    "BN": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "MY": [
        "hb",
        "hB",
        "h",
        "H"
    ],
    "ET": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "gu-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "mr-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "pa-IN": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "TW": [
        "hB",
        "hb",
        "h",
        "H"
    ],
    "KE": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "MM": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "TZ": [
        "hB",
        "hb",
        "H",
        "h"
    ],
    "UG": [
        "hB",
        "hb",
        "H",
        "h"
    ]
};

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js

/**
 * Returns the best matching date time pattern if a date time skeleton
 * pattern is provided with a locale. Follows the Unicode specification:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
 * @param skeleton date time skeleton pattern that possibly includes j, J or C
 * @param locale
 */
function getBestPattern(skeleton, locale) {
    var skeletonCopy = '';
    for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
        var patternChar = skeleton.charAt(patternPos);
        if (patternChar === 'j') {
            var extraLength = 0;
            while (patternPos + 1 < skeleton.length &&
                skeleton.charAt(patternPos + 1) === patternChar) {
                extraLength++;
                patternPos++;
            }
            var hourLen = 1 + (extraLength & 1);
            var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
            var dayPeriodChar = 'a';
            var hourChar = getDefaultHourSymbolFromLocale(locale);
            if (hourChar == 'H' || hourChar == 'k') {
                dayPeriodLen = 0;
            }
            while (dayPeriodLen-- > 0) {
                skeletonCopy += dayPeriodChar;
            }
            while (hourLen-- > 0) {
                skeletonCopy = hourChar + skeletonCopy;
            }
        }
        else if (patternChar === 'J') {
            skeletonCopy += 'H';
        }
        else {
            skeletonCopy += patternChar;
        }
    }
    return skeletonCopy;
}
/**
 * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
 * of the given `locale` to the corresponding time pattern.
 * @param locale
 */
function getDefaultHourSymbolFromLocale(locale) {
    var hourCycle = locale.hourCycle;
    if (hourCycle === undefined &&
        // @ts-ignore hourCycle(s) is not identified yet
        locale.hourCycles &&
        // @ts-ignore
        locale.hourCycles.length) {
        // @ts-ignore
        hourCycle = locale.hourCycles[0];
    }
    if (hourCycle) {
        switch (hourCycle) {
            case 'h24':
                return 'k';
            case 'h23':
                return 'H';
            case 'h12':
                return 'h';
            case 'h11':
                return 'K';
            default:
                throw new Error('Invalid hourCycle');
        }
    }
    // TODO: Once hourCycle is fully supported remove the following with data generation
    var languageTag = locale.language;
    var regionTag;
    if (languageTag !== 'root') {
        regionTag = locale.maximize().region;
    }
    var hourCycles = timeData[regionTag || ''] ||
        timeData[languageTag || ''] ||
        timeData["".concat(languageTag, "-001")] ||
        timeData['001'];
    return hourCycles[0];
}

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
var _a;






var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
function createLocation(start, end) {
    return { start: start, end: end };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n &&
            Math.abs(n) <= 0x1fffffffffffff);
    };
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */
    REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
}
catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith
    ? // Native
        function startsWith(s, search, position) {
            return s.startsWith(search, position);
        }
    : // For IE11
        function startsWith(s, search, position) {
            return s.slice(position, position + search.length) === search;
        };
var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : // IE11
        function fromCodePoint() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            var elements = '';
            var length = codePoints.length;
            var i = 0;
            var code;
            while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff)
                    throw RangeError(code + ' is not a valid code point');
                elements +=
                    code < 0x10000
                        ? String.fromCharCode(code)
                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
            }
            return elements;
        };
var fromEntries = 
// native
hasNativeFromEntries
    ? Object.fromEntries
    : // Ponyfill
        function fromEntries(entries) {
            var obj = {};
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                obj[k] = v;
            }
            return obj;
        };
var codePointAt = hasNativeCodePointAt
    ? // Native
        function codePointAt(s, index) {
            return s.codePointAt(index);
        }
    : // IE 11
        function codePointAt(s, index) {
            var size = s.length;
            if (index < 0 || index >= size) {
                return undefined;
            }
            var first = s.charCodeAt(index);
            var second;
            return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
        };
var trimStart = hasTrimStart
    ? // Native
        function trimStart(s) {
            return s.trimStart();
        }
    : // Ponyfill
        function trimStart(s) {
            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
        };
var trimEnd = hasTrimEnd
    ? // Native
        function trimEnd(s) {
            return s.trimEnd();
        }
    : // Ponyfill
        function trimEnd(s) {
            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
        };
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
}
else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while (true) {
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var parser_Parser = /** @class */ (function () {
    function Parser(message, options) {
        if (options === void 0) { options = {}; }
        this.message = message;
        this.position = { offset: 0, line: 1, column: 1 };
        this.ignoreTag = !!options.ignoreTag;
        this.locale = options.locale;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function () {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while (!this.isEOF()) {
            var char = this.char();
            if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
            }
            else if (char === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: TYPE.pound,
                    location: createLocation(position, this.clonePosition()),
                });
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                }
                else {
                    return this.error(error_ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return { val: elements, err: null };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */
    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: TYPE.literal,
                    value: "<".concat(tagName, "/>"),
                    location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
            };
        }
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(error_ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(error_ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(error_ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: TYPE.tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            else {
                return this.error(error_ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        }
        else {
            return this.error(error_ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */
    Parser.prototype.parseTagName = function () {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while (true) {
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: { type: TYPE.literal, value: value, location: location },
            err: null,
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function () {
        if (!this.isEOF() &&
            this.char() === 60 /* `<` */ &&
            (this.ignoreTag ||
                // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */
    Parser.prototype.tryParseQuote = function (parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch (this.peek()) {
            case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35: // '#'
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [this.char()]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                }
                else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            }
            else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */ ||
            ch === 123 /* `{` */ ||
            (ch === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
            (ch === 125 /* `}` */ && nestingLevel > 0)) {
            return null;
        }
        else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(error_ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */) {
            this.bump();
            return this.error(error_ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(error_ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(error_ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch (this.char()) {
            // Simple argument: `{name}`
            case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                    val: {
                        type: TYPE.argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: createLocation(openingBracePosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                    return this.error(error_ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            }
            default:
                return this.error(error_ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */
    Parser.prototype.parseIdentifierIfPossible = function () {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return { value: value, location: location };
    };
    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch (argType) {
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(error_ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) {
                        return result;
                    }
                    var style = trimEnd(result.val);
                    if (style.length === 0) {
                        return this.error(error_ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = { style: style, styleLocation: styleLocation };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) {
                            return result;
                        }
                        return {
                            val: { type: TYPE.number, value: value, location: location_1, style: result.val },
                            err: null,
                        };
                    }
                    else {
                        if (skeleton.length === 0) {
                            return this.error(error_ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
                        }
                        var dateTimePattern = skeleton;
                        // Get "best match" pattern only if locale is passed, if not, let it
                        // pass as-is where `parseDateTimeSkeleton()` will throw an error
                        // for unsupported patterns.
                        if (this.locale) {
                            dateTimePattern = getBestPattern(skeleton, this.locale);
                        }
                        var style = {
                            type: SKELETON_TYPE.dateTime,
                            pattern: dateTimePattern,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? parseDateTimeSkeleton(dateTimePattern)
                                : {},
                        };
                        var type = argType === 'date' ? TYPE.date : TYPE.time;
                        return {
                            val: { type: type, value: value, location: location_1, style: style },
                            err: null,
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number'
                            ? TYPE.number
                            : argType === 'date'
                                ? TYPE.date
                                : TYPE.time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                    },
                    err: null,
                };
            }
            case 'plural':
            case 'selectordinal':
            case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                    return this.error(error_ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, (0,tslib_es6/* __assign */.pi)({}, typeEndPosition_1)));
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) {
                        return this.error(error_ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger(error_ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, error_ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) {
                        return result;
                    }
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) {
                    return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                    return {
                        val: {
                            type: TYPE.select,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            location: location_2,
                        },
                        err: null,
                    };
                }
                else {
                    return {
                        val: {
                            type: TYPE.plural,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                            location: location_2,
                        },
                        err: null,
                    };
                }
            }
            default:
                return this.error(error_ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */) {
            return this.error(error_ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return { val: true, err: null };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */
    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while (!this.isEOF()) {
            var ch = this.char();
            switch (ch) {
                case 39 /* `'` */: {
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) {
                        return this.error(error_ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    }
                    this.bump();
                    break;
                }
                case 123 /* `{` */: {
                    nestedBraces += 1;
                    this.bump();
                    break;
                }
                case 125 /* `}` */: {
                    if (nestedBraces > 0) {
                        nestedBraces -= 1;
                    }
                    else {
                        return {
                            val: this.message.slice(startPosition.offset, this.offset()),
                            err: null,
                        };
                    }
                    break;
                }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null,
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
        var tokens = [];
        try {
            tokens = parseNumberSkeletonFromString(skeleton);
        }
        catch (e) {
            return this.error(error_ErrorKind.INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: SKELETON_TYPE.number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                    ? parseNumberSkeleton(tokens)
                    : {},
            },
            err: null,
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */
    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while (true) {
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(error_ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, error_ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                }
                else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select'
                    ? error_ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : error_ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select'
                    ? error_ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : error_ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                },
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select'
                ? error_ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
                : error_ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(error_ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return { val: options, err: null };
    };
    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) {
        }
        else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            }
            else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return { val: decimal, err: null };
    };
    Parser.prototype.offset = function () {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function () {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function () {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */
    Parser.prototype.char = function () {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
        }
        return code;
    };
    Parser.prototype.error = function (kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location,
            },
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */
    Parser.prototype.bump = function () {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        }
        else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */
    Parser.prototype.bumpIf = function (prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for (var i = 0; i < prefix.length; i++) {
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */
    Parser.prototype.bumpUntil = function (pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        }
        else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */
    Parser.prototype.bumpTo = function (targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while (true) {
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */
    Parser.prototype.bumpSpace = function () {
        while (!this.isEOF() && _isWhiteSpace(this.char())) {
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */
    Parser.prototype.peek = function () {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}());

/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
    return ((codepoint >= 97 && codepoint <= 122) ||
        (codepoint >= 65 && codepoint <= 90));
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
    return (c === 45 /* '-' */ ||
        c === 46 /* '.' */ ||
        (c >= 48 && c <= 57) /* 0..9 */ ||
        c === 95 /* '_' */ ||
        (c >= 97 && c <= 122) /** a..z */ ||
        (c >= 65 && c <= 90) /* A..Z */ ||
        c == 0xb7 ||
        (c >= 0xc0 && c <= 0xd6) ||
        (c >= 0xd8 && c <= 0xf6) ||
        (c >= 0xf8 && c <= 0x37d) ||
        (c >= 0x37f && c <= 0x1fff) ||
        (c >= 0x200c && c <= 0x200d) ||
        (c >= 0x203f && c <= 0x2040) ||
        (c >= 0x2070 && c <= 0x218f) ||
        (c >= 0x2c00 && c <= 0x2fef) ||
        (c >= 0x3001 && c <= 0xd7ff) ||
        (c >= 0xf900 && c <= 0xfdcf) ||
        (c >= 0xfdf0 && c <= 0xfffd) ||
        (c >= 0x10000 && c <= 0xeffff));
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
    return ((c >= 0x0009 && c <= 0x000d) ||
        c === 0x0020 ||
        c === 0x0085 ||
        (c >= 0x200e && c <= 0x200f) ||
        c === 0x2028 ||
        c === 0x2029);
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
    return ((c >= 0x0021 && c <= 0x0023) ||
        c === 0x0024 ||
        (c >= 0x0025 && c <= 0x0027) ||
        c === 0x0028 ||
        c === 0x0029 ||
        c === 0x002a ||
        c === 0x002b ||
        c === 0x002c ||
        c === 0x002d ||
        (c >= 0x002e && c <= 0x002f) ||
        (c >= 0x003a && c <= 0x003b) ||
        (c >= 0x003c && c <= 0x003e) ||
        (c >= 0x003f && c <= 0x0040) ||
        c === 0x005b ||
        c === 0x005c ||
        c === 0x005d ||
        c === 0x005e ||
        c === 0x0060 ||
        c === 0x007b ||
        c === 0x007c ||
        c === 0x007d ||
        c === 0x007e ||
        c === 0x00a1 ||
        (c >= 0x00a2 && c <= 0x00a5) ||
        c === 0x00a6 ||
        c === 0x00a7 ||
        c === 0x00a9 ||
        c === 0x00ab ||
        c === 0x00ac ||
        c === 0x00ae ||
        c === 0x00b0 ||
        c === 0x00b1 ||
        c === 0x00b6 ||
        c === 0x00bb ||
        c === 0x00bf ||
        c === 0x00d7 ||
        c === 0x00f7 ||
        (c >= 0x2010 && c <= 0x2015) ||
        (c >= 0x2016 && c <= 0x2017) ||
        c === 0x2018 ||
        c === 0x2019 ||
        c === 0x201a ||
        (c >= 0x201b && c <= 0x201c) ||
        c === 0x201d ||
        c === 0x201e ||
        c === 0x201f ||
        (c >= 0x2020 && c <= 0x2027) ||
        (c >= 0x2030 && c <= 0x2038) ||
        c === 0x2039 ||
        c === 0x203a ||
        (c >= 0x203b && c <= 0x203e) ||
        (c >= 0x2041 && c <= 0x2043) ||
        c === 0x2044 ||
        c === 0x2045 ||
        c === 0x2046 ||
        (c >= 0x2047 && c <= 0x2051) ||
        c === 0x2052 ||
        c === 0x2053 ||
        (c >= 0x2055 && c <= 0x205e) ||
        (c >= 0x2190 && c <= 0x2194) ||
        (c >= 0x2195 && c <= 0x2199) ||
        (c >= 0x219a && c <= 0x219b) ||
        (c >= 0x219c && c <= 0x219f) ||
        c === 0x21a0 ||
        (c >= 0x21a1 && c <= 0x21a2) ||
        c === 0x21a3 ||
        (c >= 0x21a4 && c <= 0x21a5) ||
        c === 0x21a6 ||
        (c >= 0x21a7 && c <= 0x21ad) ||
        c === 0x21ae ||
        (c >= 0x21af && c <= 0x21cd) ||
        (c >= 0x21ce && c <= 0x21cf) ||
        (c >= 0x21d0 && c <= 0x21d1) ||
        c === 0x21d2 ||
        c === 0x21d3 ||
        c === 0x21d4 ||
        (c >= 0x21d5 && c <= 0x21f3) ||
        (c >= 0x21f4 && c <= 0x22ff) ||
        (c >= 0x2300 && c <= 0x2307) ||
        c === 0x2308 ||
        c === 0x2309 ||
        c === 0x230a ||
        c === 0x230b ||
        (c >= 0x230c && c <= 0x231f) ||
        (c >= 0x2320 && c <= 0x2321) ||
        (c >= 0x2322 && c <= 0x2328) ||
        c === 0x2329 ||
        c === 0x232a ||
        (c >= 0x232b && c <= 0x237b) ||
        c === 0x237c ||
        (c >= 0x237d && c <= 0x239a) ||
        (c >= 0x239b && c <= 0x23b3) ||
        (c >= 0x23b4 && c <= 0x23db) ||
        (c >= 0x23dc && c <= 0x23e1) ||
        (c >= 0x23e2 && c <= 0x2426) ||
        (c >= 0x2427 && c <= 0x243f) ||
        (c >= 0x2440 && c <= 0x244a) ||
        (c >= 0x244b && c <= 0x245f) ||
        (c >= 0x2500 && c <= 0x25b6) ||
        c === 0x25b7 ||
        (c >= 0x25b8 && c <= 0x25c0) ||
        c === 0x25c1 ||
        (c >= 0x25c2 && c <= 0x25f7) ||
        (c >= 0x25f8 && c <= 0x25ff) ||
        (c >= 0x2600 && c <= 0x266e) ||
        c === 0x266f ||
        (c >= 0x2670 && c <= 0x2767) ||
        c === 0x2768 ||
        c === 0x2769 ||
        c === 0x276a ||
        c === 0x276b ||
        c === 0x276c ||
        c === 0x276d ||
        c === 0x276e ||
        c === 0x276f ||
        c === 0x2770 ||
        c === 0x2771 ||
        c === 0x2772 ||
        c === 0x2773 ||
        c === 0x2774 ||
        c === 0x2775 ||
        (c >= 0x2794 && c <= 0x27bf) ||
        (c >= 0x27c0 && c <= 0x27c4) ||
        c === 0x27c5 ||
        c === 0x27c6 ||
        (c >= 0x27c7 && c <= 0x27e5) ||
        c === 0x27e6 ||
        c === 0x27e7 ||
        c === 0x27e8 ||
        c === 0x27e9 ||
        c === 0x27ea ||
        c === 0x27eb ||
        c === 0x27ec ||
        c === 0x27ed ||
        c === 0x27ee ||
        c === 0x27ef ||
        (c >= 0x27f0 && c <= 0x27ff) ||
        (c >= 0x2800 && c <= 0x28ff) ||
        (c >= 0x2900 && c <= 0x2982) ||
        c === 0x2983 ||
        c === 0x2984 ||
        c === 0x2985 ||
        c === 0x2986 ||
        c === 0x2987 ||
        c === 0x2988 ||
        c === 0x2989 ||
        c === 0x298a ||
        c === 0x298b ||
        c === 0x298c ||
        c === 0x298d ||
        c === 0x298e ||
        c === 0x298f ||
        c === 0x2990 ||
        c === 0x2991 ||
        c === 0x2992 ||
        c === 0x2993 ||
        c === 0x2994 ||
        c === 0x2995 ||
        c === 0x2996 ||
        c === 0x2997 ||
        c === 0x2998 ||
        (c >= 0x2999 && c <= 0x29d7) ||
        c === 0x29d8 ||
        c === 0x29d9 ||
        c === 0x29da ||
        c === 0x29db ||
        (c >= 0x29dc && c <= 0x29fb) ||
        c === 0x29fc ||
        c === 0x29fd ||
        (c >= 0x29fe && c <= 0x2aff) ||
        (c >= 0x2b00 && c <= 0x2b2f) ||
        (c >= 0x2b30 && c <= 0x2b44) ||
        (c >= 0x2b45 && c <= 0x2b46) ||
        (c >= 0x2b47 && c <= 0x2b4c) ||
        (c >= 0x2b4d && c <= 0x2b73) ||
        (c >= 0x2b74 && c <= 0x2b75) ||
        (c >= 0x2b76 && c <= 0x2b95) ||
        c === 0x2b96 ||
        (c >= 0x2b97 && c <= 0x2bff) ||
        (c >= 0x2e00 && c <= 0x2e01) ||
        c === 0x2e02 ||
        c === 0x2e03 ||
        c === 0x2e04 ||
        c === 0x2e05 ||
        (c >= 0x2e06 && c <= 0x2e08) ||
        c === 0x2e09 ||
        c === 0x2e0a ||
        c === 0x2e0b ||
        c === 0x2e0c ||
        c === 0x2e0d ||
        (c >= 0x2e0e && c <= 0x2e16) ||
        c === 0x2e17 ||
        (c >= 0x2e18 && c <= 0x2e19) ||
        c === 0x2e1a ||
        c === 0x2e1b ||
        c === 0x2e1c ||
        c === 0x2e1d ||
        (c >= 0x2e1e && c <= 0x2e1f) ||
        c === 0x2e20 ||
        c === 0x2e21 ||
        c === 0x2e22 ||
        c === 0x2e23 ||
        c === 0x2e24 ||
        c === 0x2e25 ||
        c === 0x2e26 ||
        c === 0x2e27 ||
        c === 0x2e28 ||
        c === 0x2e29 ||
        (c >= 0x2e2a && c <= 0x2e2e) ||
        c === 0x2e2f ||
        (c >= 0x2e30 && c <= 0x2e39) ||
        (c >= 0x2e3a && c <= 0x2e3b) ||
        (c >= 0x2e3c && c <= 0x2e3f) ||
        c === 0x2e40 ||
        c === 0x2e41 ||
        c === 0x2e42 ||
        (c >= 0x2e43 && c <= 0x2e4f) ||
        (c >= 0x2e50 && c <= 0x2e51) ||
        c === 0x2e52 ||
        (c >= 0x2e53 && c <= 0x2e7f) ||
        (c >= 0x3001 && c <= 0x3003) ||
        c === 0x3008 ||
        c === 0x3009 ||
        c === 0x300a ||
        c === 0x300b ||
        c === 0x300c ||
        c === 0x300d ||
        c === 0x300e ||
        c === 0x300f ||
        c === 0x3010 ||
        c === 0x3011 ||
        (c >= 0x3012 && c <= 0x3013) ||
        c === 0x3014 ||
        c === 0x3015 ||
        c === 0x3016 ||
        c === 0x3017 ||
        c === 0x3018 ||
        c === 0x3019 ||
        c === 0x301a ||
        c === 0x301b ||
        c === 0x301c ||
        c === 0x301d ||
        (c >= 0x301e && c <= 0x301f) ||
        c === 0x3020 ||
        c === 0x3030 ||
        c === 0xfd3e ||
        c === 0xfd3f ||
        (c >= 0xfe45 && c <= 0xfe46));
}

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/@formatjs/icu-messageformat-parser/lib/index.js




function pruneLocation(els) {
    els.forEach(function (el) {
        delete el.location;
        if (isSelectElement(el) || isPluralElement(el)) {
            for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        }
        else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
            delete el.style.location;
        }
        else if ((isDateElement(el) || isTimeElement(el)) &&
            isDateTimeSkeleton(el.style)) {
            delete el.style.location;
        }
        else if (isTagElement(el)) {
            pruneLocation(el.children);
        }
    });
}
function parse(message, opts) {
    if (opts === void 0) { opts = {}; }
    opts = __assign({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new Parser(message, opts).parse();
    if (result.err) {
        var error = SyntaxError(ErrorKind[result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}

// only for testing
var _Parser = (/* unused pure expression or super */ null && (Parser));

;// CONCATENATED MODULE: ./node_modules/react-intl/node_modules/intl-messageformat/lib/src/formatters.js


var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && isLiteralElement(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if (isLiteralElement(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if (isPoundElement(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new MissingValueError(varName, originalMessage);
        }
        var value = values[varName];
        if (isArgumentElement(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (isDateElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTimeElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : isDateTimeSkeleton(el.style)
                    ? el.style.parsedOptions
                    : formats.time.medium;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isNumberElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : isNumberSkeleton(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTagElement(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new InvalidValueTypeError(value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if (isSelectElement(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if (isPluralElement(el)) {
            var opt = el.options["=".concat(value)];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}

;// CONCATENATED MODULE: ./node_modules/react-intl/lib/src/components/provider.js
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */






function processIntlConfig(config) {
    return {
        locale: config.locale,
        timeZone: config.timeZone,
        fallbackOnEmptyString: config.fallbackOnEmptyString,
        formats: config.formats,
        textComponent: config.textComponent,
        messages: config.messages,
        defaultLocale: config.defaultLocale,
        defaultFormats: config.defaultFormats,
        onError: config.onError,
        onWarn: config.onWarn,
        wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
        defaultRichTextElements: config.defaultRichTextElements,
    };
}
function assignUniqueKeysToFormatXMLElementFnArgument(values) {
    if (!values) {
        return values;
    }
    return Object.keys(values).reduce(function (acc, k) {
        var v = values[k];
        acc[k] = isFormatXMLElementFn(v)
            ? (0,utils/* assignUniqueKeysToParts */.dt)(v)
            : v;
        return acc;
    }, {});
}
var provider_formatMessage = function (config, formatters, descriptor, rawValues) {
    var rest = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        rest[_i - 4] = arguments[_i];
    }
    var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues);
    var chunks = formatMessage.apply(void 0, (0,tslib_es6/* __spreadArray */.ev)([config,
        formatters,
        descriptor,
        values], rest, false));
    if (Array.isArray(chunks)) {
        return react.Children.toArray(chunks);
    }
    return chunks;
};
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
var provider_createIntl = function (_a, cache) {
    var rawDefaultRichTextElements = _a.defaultRichTextElements, config = (0,tslib_es6/* __rest */._T)(_a, ["defaultRichTextElements"]);
    var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
    var coreIntl = createIntl((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, utils/* DEFAULT_INTL_CONFIG */.Z0), config), { defaultRichTextElements: defaultRichTextElements }), cache);
    var resolvedConfig = {
        locale: coreIntl.locale,
        timeZone: coreIntl.timeZone,
        fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
        formats: coreIntl.formats,
        defaultLocale: coreIntl.defaultLocale,
        defaultFormats: coreIntl.defaultFormats,
        messages: coreIntl.messages,
        onError: coreIntl.onError,
        defaultRichTextElements: defaultRichTextElements,
    };
    return (0,tslib_es6/* __assign */.pi)((0,tslib_es6/* __assign */.pi)({}, coreIntl), { 
        // @ts-expect-error fix this
        formatMessage: provider_formatMessage.bind(null, resolvedConfig, coreIntl.formatters), 
        // @ts-expect-error fix this
        $t: provider_formatMessage.bind(null, resolvedConfig, coreIntl.formatters) });
};
var IntlProvider = /** @class */ (function (_super) {
    (0,tslib_es6/* __extends */.ZT)(IntlProvider, _super);
    function IntlProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cache = (0,src_utils/* createIntlCache */.Sn)();
        _this.state = {
            cache: _this.cache,
            intl: provider_createIntl(processIntlConfig(_this.props), _this.cache),
            prevConfig: processIntlConfig(_this.props),
        };
        return _this;
    }
    IntlProvider.getDerivedStateFromProps = function (props, _a) {
        var prevConfig = _a.prevConfig, cache = _a.cache;
        var config = processIntlConfig(props);
        if (!(0,utils/* shallowEqual */.wU)(prevConfig, config)) {
            return {
                intl: provider_createIntl(config, cache),
                prevConfig: config,
            };
        }
        return null;
    };
    IntlProvider.prototype.render = function () {
        (0,utils/* invariantIntlContext */.lq)(this.state.intl);
        return react.createElement(injectIntl/* Provider */.zt, { value: this.state.intl }, this.props.children);
    };
    IntlProvider.displayName = 'IntlProvider';
    IntlProvider.defaultProps = utils/* DEFAULT_INTL_CONFIG */.Z0;
    return IntlProvider;
}(react.PureComponent));
/* harmony default export */ const provider = (IntlProvider);


/***/ }),

/***/ 49066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41580);


const d = ({ children: t }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10, children: t });



/***/ }),

/***/ 53979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ p),
  T: () => (/* binding */ HeaderLayout_b)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(71997);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(79698);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist/* useCallbackRef */.W)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const HeaderLayout_b = (r) => {
  const t = (0,react.useRef)(null), [i, d] = (0,react.useState)(null), [a, h] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(a, () => {
    a.current && d(a.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    t.current && d(t.current.getBoundingClientRect());
  }, [t]), (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: i?.height }, ref: a, children: h && (0,jsx_runtime.jsx)(p, { ref: t, ...r }) }), !h && (0,jsx_runtime.jsx)(p, { ...r, sticky: !0, width: i?.width })] });
};
HeaderLayout_b.displayName = "HeaderLayout";
const C = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${({ width: r }) => r ? `${r / 16}rem` : void 0};
  z-index: ${({ theme: r }) => r.zIndices[1]};
`, p = react.forwardRef(({ navigationAction: r, primaryAction: t, secondaryAction: i, subtitle: d, title: a, sticky: h, width: c, ...s }, g) => {
  const f = typeof d == "string";
  return h ? (0,jsx_runtime.jsx)(C, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: c, "data-strapi-header-sticky": !0, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [r && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: r }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...s, children: a }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: d }) : d] }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: t ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: t }) : void 0 })] }) }) : (0,jsx_runtime.jsxs)(Box/* Box */.x, { ref: g, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: r ? 6 : 8, background: "neutral100", "data-strapi-header": !0, children: [r ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: r }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...s, children: a }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), t] }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: d }) : d] });
});



/***/ }),

/***/ 185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71997);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);



const a = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, m = ({ labelledBy: o = "main-content-title", ...n }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, { "aria-labelledby": o, as: "main", id: "main-content", tabIndex: -1, ...n });



/***/ }),

/***/ 727:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71997);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);



const n = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  text-decoration: none;

  &:focus {
    left: ${({ theme: o }) => o.spaces[3]};
    top: ${({ theme: o }) => o.spaces[3]};
  }
`, p = ({ children: o }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, { as: "a", href: "#main-content", background: "primary600", color: "neutral0", left: "-100%", padding: 3, position: "absolute", top: "-100%", hasRadius: !0, zIndex: 9999, children: o });



/***/ }),

/***/ 38992:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ c)
});

;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/themes/darkTheme/dark-colors.js
const a = {
  color: {
    alternative100: "#181826",
    alternative200: "#4a4a6a",
    alternative500: "#ac73e6",
    alternative600: "#ac73e6",
    alternative700: "#e0c1f4",
    buttonNeutral0: "#ffffff",
    buttonPrimary500: "#7b79ff",
    buttonPrimary600: "#4945ff",
    danger100: "#181826",
    danger200: "#4a4a6a",
    danger500: "#ee5e52",
    danger600: "#ee5e52",
    danger700: "#ee5e52",
    neutral0: "#212134",
    neutral100: "#181826",
    neutral1000: "#ffffff",
    neutral150: "#32324d",
    neutral200: "#4a4a6a",
    neutral300: "#666687",
    neutral400: "#a5a5ba",
    neutral500: "#c0c0cf",
    neutral600: "#a5a5ba",
    neutral700: "#eaeaef",
    neutral800: "#ffffff",
    neutral900: "#ffffff",
    primary100: "#181826",
    primary200: "#4a4a6a",
    primary500: "#4945ff",
    primary600: "#7b79ff",
    primary700: "#7b79ff",
    secondary100: "#181826",
    secondary200: "#4a4a6a",
    secondary500: "#66b7f1",
    secondary600: "#66b7f1",
    secondary700: "#b8e1ff",
    success100: "#181826",
    success200: "#4a4a6a",
    success500: "#5cb176",
    success600: "#5cb176",
    success700: "#c6f0c2",
    warning100: "#181826",
    warning200: "#4a4a6a",
    warning500: "#f29d41",
    warning600: "#f29d41",
    warning700: "#fae7b9"
  }
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/themes/darkTheme/dark-shadows.js
const p = {
  shadow: {
    filterShadow: "1px 1px 10px rgba(3, 3, 5, 0.35)",
    focus: "inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",
    focusShadow: "0px 0px 6px rgba(76, 191, 255, 0.75)",
    popupShadow: "1px 1px 10px rgba(3, 3, 5, 0.35)",
    tableShadow: "1px 1px 10px rgba(3, 3, 5, 0.2)"
  }
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/common-theme.js + 1 modules
var common_theme = __webpack_require__(2128);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/themes/darkTheme/index.js



const c = {
  colors: a.color,
  shadows: p.shadow,
  ...common_theme/* commonTheme */.x
};



/***/ })

}]);