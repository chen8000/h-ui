module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "0463":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa94");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0928":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c0a4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3b60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6ebd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "408a":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var inheritIfRequired = __webpack_require__("7156");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNames = __webpack_require__("241c").f;
var isRegExp = __webpack_require__("44e7");
var getFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var setInternalState = __webpack_require__("69f3").set;
var setSpecies = __webpack_require__("2626");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "61b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f6be");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "64d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d7fe");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6669":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_5d306fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a611");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_5d306fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_5d306fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_5d306fda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6e0e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45b1c3dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a761");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45b1c3dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45b1c3dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_45b1c3dd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6ebd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "77df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d64c4be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0928");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d64c4be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d64c4be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d64c4be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "91fb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a611":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a761":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "aa94":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b352":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5166ea39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("91fb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5166ea39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5166ea39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5166ea39_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b680":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toInteger = __webpack_require__("a691");
var thisNumberValue = __webpack_require__("408a");
var repeat = __webpack_require__("1148");
var fails = __webpack_require__("d039");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c0a4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d7fe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da75":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_04af87fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fecf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_04af87fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_04af87fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_04af87fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "f6be":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e0ff510a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Button/src/index.vue?vue&type=template&id=5d306fda&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{ref:"hButton",class:[
  'h--button', 
  ("" + (_vm.type ? ("h--button--" + _vm.type) : '')),
  ("" + (_vm.hollow ? ("h--button--" + _vm.type + "--hollow") : '')),
  ("" + (_vm.disabled ? "h--button--disabled" : '')),
  ("" + (_vm.medium ? 'h--button--medium' : '')),
  ("" + (_vm.small ? 'h--button--small' : '')),
  ("" + (_vm.mini ? 'h--button--mini' : '')),
  ("" + (_vm.long ? 'h--button--long' : ''))
],attrs:{"disabled":_vm.disabled}},[_c('span',[(_vm.icon)?_c('i',{class:['h--button--icon', _vm.icon]}):_vm._e(),_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Button/src/index.vue?vue&type=template&id=5d306fda&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("4d63");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./packages/tools/index.js






/*
 * @Date: 2020-07-02 10:24:25
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 16:00:11
 */
// import { province } from './pcc/province'
// import { city } from './pcc/city'
// import { county } from './pcc/county'
// // 省市区
// export const pcc = {
//   province,
//   city,
//   county
// }

/**
 * @name: coordinate
 * @msg: 获取元素left top 间距， 元素内鼠标的xy点
 * @param {type} Object
 * @return: <Number> top, left, pageX, pageY
 */
var getCoordinate = function getCoordinate(_ref) {
  var event = _ref.event,
      target = _ref.target;
  var position = {
    top: 0,
    left: 0
  },
      ele = document.documentElement;
  'undefined' != typeof target.getBoundingClientRect && (position = target.getBoundingClientRect());
  var top = position.top + window.pageYOffset - ele.clientTop;
  var left = position.left + window.pageXOffset - ele.clientLeft;
  var pageX = event.pageX - left;
  var pageY = event.pageY - top;
  return {
    top: top,
    left: left,
    pageX: pageX,
    pageY: pageY
  };
}; // 检查

var hasClass = function hasClass(elem, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length === 0) return false;
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}; // 增加    

var addClass = function addClass(elem, cls) {
  if (!hasClass(elem, cls)) {
    elem.className = elem.className === '' ? cls : elem.className + ' ' + cls;
  }
}; // 删除    

var removeClass = function removeClass(elem, cls) {
  if (hasClass(elem, cls)) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';

    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }

    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};
/**
 * @name: transTime
 * @msg: 格式化分钟数： 把秒转为 00:00
 * @param {type} Number
 * @return: String  --> 00:00
 */

var transTime = function transTime(t) {
  var d = parseInt(t);
  var m = parseInt(d / 60);
  var sec = d % 60 + '';
  var isM0 = ':';

  if (m == 0) {
    m = '00';
  } else if (m < 10) {
    m = '0' + m;
  }

  if (sec.length == 1) {
    sec = '0' + sec;
  }

  return m + isM0 + sec;
};
// CONCATENATED MODULE: ./packages/modules/index.js
/*
 * @Date: 2020-07-02 15:16:53
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-07 14:16:12
 */

/**
 * @name: ripples
 * @msg: 点击涟漪效果
 * @param {type} Object
 */

var modules_ripples = function ripples(_ref) {
  var object = _ref.object,
      color = _ref.color;
  object.addEventListener('mousedown', function (event) {
    var _this = this;

    addClass(this, 'h--ripples--parent');
    var span = document.createElement('span');
    addClass(span, 'h--ripples');
    this.appendChild(span); // 坐标点

    var _getCoordinate = getCoordinate({
      event: event,
      target: this
    }),
        pageX = _getCoordinate.pageX,
        pageY = _getCoordinate.pageY; // span 的宽高


    var w = this.offsetWidth;
    var h = this.offsetHeight;
    var inaccWH = w > h ? w : h;
    var inaccXY = pageX > pageY ? pageX : pageY;
    var radius = inaccWH - inaccXY;
    var scalMultiple = radius > inaccXY ? radius : inaccXY;
    span.style.left = "".concat(pageX, "px");
    span.style.top = "".concat(pageY, "px");
    span.style.background = color;
    span.style.transition = "all .3s linear";
    span.style.transform = "scale(".concat(scalMultiple * 2, ")");
    span.style.opacity = 0;
    setTimeout(function () {
      _this.removeChild(span);
    }, 300);
  }, !1);
};
// CONCATENATED MODULE: ./packages/assets/ripple.config.js
/*
 * @Date: 2020-07-02 10:40:26
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-03 15:35:37
 */

/**
 * @name: ripples
 * @msg: 配置按钮等，点击水波纹效果颜色
 */
var ripplesColor = {
  /**
     * @name: primary
     * @msg: 主题色水波纹颜色
     */
  // primary: '#5074b8',
  primary: 'rgba(255, 255, 255, 1)',
  default: 'rgba(255, 255, 255, 1)',
  success: 'rgba(255, 255, 255, 1)'
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Button/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'h-button',
  props: {
    // 类型
    type: {
      type: String,
      default: 'default'
    },
    // 空心
    hollow: {
      type: Boolean,
      default: false
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // icon
    icon: {
      type: String
    },
    // 大小 medium / small / mini
    medium: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    // 长按钮
    long: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.$nextTick(this.handleRipples);
  },
  methods: {
    handleRipples: function handleRipples() {
      // 涟漪效果
      this.type !== 'text' && modules_ripples({
        object: this.$refs.hButton,
        color: !ripplesColor[this.type] ? ripplesColor.default : ripplesColor[this.type]
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/components/Button/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/Button/src/index.vue?vue&type=style&index=0&lang=scss&
var srcvue_type_style_index_0_lang_scss_ = __webpack_require__("61b6");

// EXTERNAL MODULE: ./packages/components/Button/src/index.vue?vue&type=style&index=1&id=5d306fda&lang=scss&scoped=true&
var srcvue_type_style_index_1_id_5d306fda_lang_scss_scoped_true_ = __webpack_require__("6669");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/components/Button/src/index.vue







/* normalize component */

var component = normalizeComponent(
  Button_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5d306fda",
  null
  
)

/* harmony default export */ var Button_src = (component.exports);
// CONCATENATED MODULE: ./packages/components/Button/index.js


/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-01 15:45:25
 */


Button_src.install = function (Vue) {
  Vue.component(Button_src.name, Button_src);
};

/* harmony default export */ var Button = (Button_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e0ff510a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Table/src/index.vue?vue&type=template&id=0acb5e31&
var srcvue_type_template_id_0acb5e31_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    ("" + (_vm.yplTable && 'h--table h--table--default')),
    ("" + (_vm.yplTable && _vm.isBg && 'h--table--bg')),
    ("" + (_vm.yplTable && _vm.shadow && 'h--table--hover--shadow'))
    ],style:({'height': _vm.tableHeight}),attrs:{"id":"tableBox"}},[_c('div',{ref:"table"},[_vm._t("default")],2)])}
var srcvue_type_template_id_0acb5e31_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Table/src/index.vue?vue&type=template&id=0acb5e31&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Table/src/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Table_srcvue_type_script_lang_js_ = ({
  name: 'h-table',
  props: {
    // 是否使用ypl table
    yplTable: {
      type: Boolean,
      default: false
    },
    // 表格tr是否带背景 is-bg
    isBg: {
      type: Boolean,
      default: false
    },
    // 是否带阴影
    shadow: {
      type: Boolean,
      default: false
    },
    // 显示的数据条数 :data-length="5"
    dataLength: {
      type: Number,
      default: 0
    },
    // 表格每列的高度 :tr-height="50"
    trHeight: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      tableHeight: 0,
      // inter: 0,
      loading: true
    };
  },
  watch: {
    dataLength: function dataLength() {
      this.setTableHeight();
    }
  },
  mounted: function mounted() {
    // 计算table的高度
    this.setTableHeight();
  },
  methods: {
    setTableHeight: function setTableHeight() {
      this.dataLength && (this.tableHeight = (this.dataLength + 1) * this.trHeight + 'px');
    }
  }
});
// CONCATENATED MODULE: ./packages/components/Table/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Table_srcvue_type_script_lang_js_ = (Table_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/Table/src/index.vue?vue&type=style&index=0&lang=scss&
var Table_srcvue_type_style_index_0_lang_scss_ = __webpack_require__("0463");

// CONCATENATED MODULE: ./packages/components/Table/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  components_Table_srcvue_type_script_lang_js_,
  srcvue_type_template_id_0acb5e31_render,
  srcvue_type_template_id_0acb5e31_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Table_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/components/Table/index.js


/*
 * @Date: 2020-07-07 14:35:59
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-07 14:39:04
 */


Table_src.install = function (Vue) {
  Vue.component(Table_src.name, Table_src);
};

/* harmony default export */ var Table = (Table_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e0ff510a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Pagination/src/index.vue?vue&type=template&id=737d6232&
var srcvue_type_template_id_737d6232_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['h--pagin', {'h--pagin--right':_vm.right}]},[(_vm.total > _vm.pageSize)?_c('span',{staticClass:"el-pagination__jump"},[_vm._v(" 前往 "),_c('div',{staticClass:"el-input el-pagination__editor is-in-pagination"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.toPages),expression:"toPages"}],staticClass:"el-input__inner",attrs:{"type":"text","autocomplete":"off"},domProps:{"value":(_vm.toPages)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleToPage($event)},"input":function($event){if($event.target.composing){ return; }_vm.toPages=$event.target.value}}})]),_vm._v(" 页 ")]):_vm._e(),_c('el-pagination',{attrs:{"background":"","page-size":_vm.pageSize,"current-page":_vm.currentPage,"layout":"slot, prev, pager, next","hide-on-single-page":true,"total":_vm.total},on:{"update:currentPage":function($event){_vm.currentPage=$event},"update:current-page":function($event){_vm.currentPage=$event}}},[_c('span',{class:['home-page', {'page-disable': _vm.currentPage === 1}],on:{"click":_vm.handleHomePage}},[_vm._v("首页")])]),(_vm.total > _vm.pageSize)?_c('span',{class:['last-page', {'page-disable': _vm.currentPage === _vm.cPagins}],on:{"click":_vm.handleLastPage}},[_vm._v("末页")]):_vm._e()],1)}
var srcvue_type_template_id_737d6232_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Pagination/src/index.vue?vue&type=template&id=737d6232&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Pagination/src/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Pagination_srcvue_type_script_lang_js_ = ({
  name: 'h-pagination',
  props: {
    // 每页显示条目
    pageSize: {
      type: Number,
      default: 10
    },
    // 总条目数
    total: {
      type: Number,
      default: 100
    },
    // 靠右
    right: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentPage: 1,
      // 页码
      toPages: ''
    };
  },
  computed: {
    cPagins: function cPagins() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  watch: {
    currentPage: function currentPage() {
      this.$emit('change', this.currentPage);
    },
    // 限制 + - easdasd 不准输入
    toPages: function toPages(newVal) {
      var reg = /^[+-]?(0|([1-9]\d*))?$/g;

      if (!(reg.test(newVal) && newVal > 0)) {
        this.toPages = this.toPages.substring(0, this.toPages.length - 1);
      }
    }
  },
  methods: {
    // 首页
    handleHomePage: function handleHomePage() {
      this.currentPage = 1;
    },
    // 末页
    handleLastPage: function handleLastPage() {
      this.currentPage = this.cPagins;
    },
    // 前往____页 + 验证
    handleToPage: function handleToPage() {
      var _this = this;

      if (!this.toPages) {
        return;
      }

      if (+this.toPages > 0 && +this.toPages < this.cPagins) {
        // if (+this.toPages <= this.cPagins)
        if (this.currentPage < this.cPagins || +this.toPages < this.cPagins) {
          this.currentPage = +this.toPages;
          setTimeout(function () {
            _this.toPages = _this.currentPage;
          });
        } else {
          this.toPages = this.currentPage;
        }
      } else {
        this.toPages = this.cPagins;
        this.currentPage = +this.toPages;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/components/Pagination/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pagination_srcvue_type_script_lang_js_ = (Pagination_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/Pagination/src/index.vue?vue&type=style&index=0&lang=scss&
var Pagination_srcvue_type_style_index_0_lang_scss_ = __webpack_require__("3b60");

// CONCATENATED MODULE: ./packages/components/Pagination/src/index.vue






/* normalize component */

var Pagination_src_component = normalizeComponent(
  components_Pagination_srcvue_type_script_lang_js_,
  srcvue_type_template_id_737d6232_render,
  srcvue_type_template_id_737d6232_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pagination_src = (Pagination_src_component.exports);
// CONCATENATED MODULE: ./packages/components/Pagination/index.js


/*
 * @Date: 2020-07-08 16:32:10
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 16:32:49
 */


Pagination_src.install = function (Vue) {
  Vue.component(Pagination_src.name, Pagination_src);
};

/* harmony default export */ var Pagination = (Pagination_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e0ff510a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Audio/src/index.vue?vue&type=template&id=e6660a8c&
var srcvue_type_template_id_e6660a8c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['h--audio-box', ("h--audio--layout-" + _vm.layout)]},[_c('audio',{directives:[{name:"show",rawName:"v-show",value:(true),expression:"true"}],ref:"audio",attrs:{"src":_vm.src},on:{"loadedmetadata":_vm.getTimeTotal,"timeupdate":_vm.audioTimeUpDate,"error":_vm.loadError,"ended":_vm.handleEnd}}),_c('div',{class:['audio-container', {'h--radius': _vm.radius}, {'h--volume-l1': _vm.volumeButton && ['l1'].includes(_vm.layout)}]},[_c('div',{staticClass:"btn-group",on:{"mouseover":_vm.playOver,"mouseleave":_vm.playLeave}},[(!_vm.playStatus)?_c('i',{staticClass:"iconfont iconbofang",on:{"click":_vm.handlePlay}}):_vm._e(),(_vm.playStatus)?_c('i',{staticClass:"iconfont iconzantingtingzhi",on:{"click":_vm.handlePause}}):_vm._e()]),_c('p',{staticClass:"currentTime"},[(['l1'].includes(_vm.layout))?_c('span',{staticClass:"audio-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "+_vm._s(_vm.currentTimes)+"/"+_vm._s(_vm.total)+" ")]),_c('el-slider',{ref:"slider",staticClass:"ele-progress",attrs:{"format-tooltip":_vm.formatTooltip},on:{"change":_vm.sliderUp,"input":_vm.progressChange},model:{value:(_vm.progress),callback:function ($$v) {_vm.progress=$$v},expression:"progress"}}),(_vm.volumeButton)?_c('div',{staticClass:"sound",on:{"mouseover":_vm.soundOver,"mouseleave":_vm.soundLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.soundClass),expression:"soundClass"}],class:['sound-box', {'h--radius': _vm.radius}]},[_c('el-slider',{attrs:{"vertical":"","show-tooltip":false},on:{"input":_vm.soundChange},model:{value:(_vm.sound),callback:function ($$v) {_vm.sound=$$v},expression:"sound"}})],1),(_vm.resSound > 0.0)?_c('i',{staticClass:"iconfont iconjingyin1"}):_vm._e(),(_vm.resSound === '0.0')?_c('i',{staticClass:"iconfont iconjingyin"}):_vm._e()]):_vm._e()],1)])}
var srcvue_type_template_id_e6660a8c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Audio/src/index.vue?vue&type=template&id=e6660a8c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Audio/src/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Audio_srcvue_type_script_lang_js_ = ({
  name: 'h-audio',
  props: {
    // audio 的src
    src: {
      type: String,
      required: true
    },
    // 默认音量  默认40
    volume: {
      type: Number,
      default: 40
    },
    // 是否显示音量按钮
    volumeButton: {
      type: Boolean,
      default: false
    },
    // radius 是否要圆角，默认不要
    radius: {
      type: Boolean,
      default: false
    },
    // 布局
    layout: {
      type: String,
      default: '--'
    },
    // 目前只有 layout 为 l1 时有效
    title: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      progress: 0,
      // 进度条当前的位置
      progressType: false,
      // 防止重复触发
      currentTimes: '00:00',
      // 当前播放的进度
      sound: 40,
      // 音量
      aObj: null,
      // audio 对象
      total: 0,
      // 总时长
      playStatus: false,
      // true 正在播放，  false 暂停
      hoverClass: false,
      // 样式
      soundClass: false
    };
  },
  computed: {
    resSound: function resSound() {
      return (this.sound / 100).toFixed(1);
    }
  },
  mounted: function mounted() {
    this.aObj = this.$refs.audio;
    this.getTimeTotal();
    this.addEvent();
    this.init();
  },
  methods: {
    init: function init() {
      // 初始化音量
      this.sound = this.volume || 40;
    },
    addEvent: function addEvent() {
      var _this = this;

      this.$refs.slider.$el.addEventListener('mousedown', function () {
        _this.progressType = true;
      });
      this.$refs.slider.$el.addEventListener('mouseup', this.sliderUp);
    },
    // 鼠标抬起事件
    sliderUp: function sliderUp() {
      var _this2 = this;

      setTimeout(function () {
        _this2.progressType = false;
      }, 500);
    },
    // 播放
    handlePlay: function handlePlay() {
      this.aObj.play();
      this.playStatus = true;
    },
    // 暂停
    handlePause: function handlePause() {
      this.aObj.pause();
      this.playStatus = false;
    },
    // 获取总时长
    getTimeTotal: function getTimeTotal() {
      this.total = transTime(this.aObj.duration) === 'NaN:NaN' ? '00:00' : transTime(this.aObj.duration);
    },
    // 视频播放进度改变时
    audioTimeUpDate: function audioTimeUpDate() {
      this.progress = Math.round(Math.floor(this.aObj.currentTime) / Math.floor(this.aObj.duration) * 100, 0);
      this.currentTimes = transTime(this.aObj.currentTime);
    },
    // 拖动
    // 点下走   抬起不走
    progressChange: function progressChange() {
      if (this.aObj.duration && this.progressType) {
        this.aObj.currentTime = this.progress / 100 * this.aObj.duration;
      }
    },
    // 拖动进度条：--音量
    soundChange: function soundChange() {
      this.aObj.volume = (this.sound / 100).toFixed(1);
    },
    // hover提示时间
    formatTooltip: function formatTooltip(val) {
      var tooltip = this.progress > 0 ? transTime(val / 100 * this.aObj.duration) : '00:00';
      return tooltip === 'NaN:NaN' ? '00:00' : tooltip;
    },
    // 音频加载失败
    loadError: function loadError() {
      this.total = '00:00';
    },
    // 播放完成事件
    handleEnd: function handleEnd() {
      this.aObj.currentTime = 0;
      this.playStatus = false;
    },
    // 播放按钮鼠标移入移出
    playOver: function playOver() {
      this.hoverClass = true;
    },
    playLeave: function playLeave() {
      this.hoverClass = false;
    },
    // 喇叭
    soundOver: function soundOver() {
      this.soundClass = true;
    },
    soundLeave: function soundLeave() {
      this.soundClass = false;
    }
  }
});
// CONCATENATED MODULE: ./packages/components/Audio/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Audio_srcvue_type_script_lang_js_ = (Audio_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/Audio/src/index.vue?vue&type=style&index=0&lang=scss&
var Audio_srcvue_type_style_index_0_lang_scss_ = __webpack_require__("35d3");

// CONCATENATED MODULE: ./packages/components/Audio/src/index.vue






/* normalize component */

var Audio_src_component = normalizeComponent(
  components_Audio_srcvue_type_script_lang_js_,
  srcvue_type_template_id_e6660a8c_render,
  srcvue_type_template_id_e6660a8c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Audio_src = (Audio_src_component.exports);
// CONCATENATED MODULE: ./packages/components/Audio/index.js


/*
 * @Date: 2020-07-08 18:03:08
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-08 18:07:40
 */


Audio_src.install = function (Vue) {
  Vue.component(Audio_src.name, Audio_src);
};

/* harmony default export */ var Audio = (Audio_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e0ff510a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Input/src/index.vue?vue&type=template&id=5166ea39&scoped=true&
var srcvue_type_template_id_5166ea39_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h--input",style:({'height': _vm.height}),on:{"mouseenter":function($event){_vm.iconOpacity = '1'},"mouseleave":function($event){_vm.iconOpacity = '0'}}},[_c('div',{class:{'h--left--icon--container': _vm.$slots['left-icon'] || _vm.leftIcon}},[_vm._t("left-icon",[(_vm.leftIcon)?_c('i',{class:_vm.leftIcon}):_vm._e()])],2),_c('input',{ref:"input",class:[
      'h--input--ele',
      {'h--input--radius': _vm.radius && !_vm.bottomLine},
      {'h--input--ele-shadow': _vm.shadow && !_vm.bottomLine},
      {'h--input--danger': _vm.danger},
      {'h--input--danger--shadow': _vm.shadow && _vm.danger && !_vm.bottomLine},
      {'h--input--disabled': _vm.disabled},
      {'h--input--left--icon': _vm.$slots['left-icon'] || _vm.leftIcon},
      {'h--input--right--icon': _vm.rightIconClass},
      {'h--input--bottom--line': _vm.bottomLine},
      {'h--input--bottom--maxlength': _vm.isMaxlength}
    ],attrs:{"type":_vm.showPwd ? 'text': _vm.type,"disabled":_vm.disabled,"placeholder":_vm.placeholder,"maxlength":_vm.maxlength},on:{"blur":function($event){return _vm.$emit('blur', $event)},"focus":function($event){return _vm.$emit('focus', $event)},"input":_vm.handleInput}}),_c('div',{class:{'h--right--icon--container': _vm.rightJud}},[(!_vm.iconCross)?_vm._t("right-icon",[(_vm.rightIcon)?_c('i',{class:_vm.rightIcon}):_vm._e()]):_vm._e(),(_vm.clearable && _vm.inputVal && !_vm.showPassword)?_c('i',{staticClass:"h--input--clearable iconfont iconqingkong",style:({'opacity': _vm.iconOpacity}),on:{"click":_vm.handleClearable}}):_vm._e(),(_vm.showPassword && _vm.inputVal && _vm.type === 'password')?_c('i',{class:[
        'h--input--show-pwd iconfont',
        {'iconyanjing': !_vm.showPwd},
        {'iconyanjing-zhengkai': _vm.showPwd }
      ],style:({'opacity': _vm.iconOpacity}),on:{"click":_vm.handleShowPwd}}):_vm._e(),(_vm.maxlength && !_vm.iconCross)?_c('span',{staticClass:"h--maxlength"},[_vm._v(" "+_vm._s(_vm.areaLen)+"/"+_vm._s(_vm.maxlength)+" ")]):_vm._e()],2)])}
var srcvue_type_template_id_5166ea39_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Input/src/index.vue?vue&type=template&id=5166ea39&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Input/src/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Input_srcvue_type_script_lang_js_ = ({
  name: 'h-input',
  props: {
    // 双向数据绑定 v-model
    value: {
      default: ''
    },
    // 输入框类型
    type: {
      type: String,
      default: 'text'
    },
    // input的高度，默认30px
    height: {
      type: String,
      default: '30px'
    },
    // 是否带圆角  bottom-line 为false时有效
    radius: {
      type: Boolean,
      default: true
    },
    // 获取焦点后是否带阴影 bottom-line 为false时有效
    shadow: {
      type: Boolean,
      default: false
    },
    // 危险提示
    danger: {
      type: Boolean,
      default: false
    },
    // 输入框占位文本
    placeholder: {
      type: String,
      default: ''
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 左右icon class
    // left-icon="iconfont iconbianji3"
    // right-icon="iconfont iconbianji3"
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    // 是否可清空 show-password 时无效
    clearable: {
      type: Boolean,
      default: false
    },
    // 密码是否可看 只在 type="password" 时有效
    showPassword: {
      type: Boolean,
      default: false
    },
    // 只有一条下划线, radius / shadow 会因此失效
    bottomLine: {
      type: Boolean,
      default: false
    },
    // maxlength 限制最大输入值
    maxlength: Number // 左右icon slot插入
    // <!-- <i slot="left-icon" class="iconfont iconbianji3"></i> -->
    // <!-- <i slot="right-icon" class="iconfont iconbianji3"></i> -->
    // 事件
    // blur

  },
  data: function data() {
    return {
      // 视图动态标记
      inputVal: '',
      showPwd: false,
      iconOpacity: '0'
    };
  },
  computed: {
    rightJud: function rightJud() {
      return this.$slots['right-icon'] || this.rightIcon || this.clearable || this.showPassword && this.type === 'password';
    },
    iconCross: function iconCross() {
      return this.inputVal && this.iconOpacity === '1' && (this.clearable || this.showPassword && this.type === 'password');
    },
    isMaxlength: function isMaxlength() {
      return this.maxlength === 0 || this.maxlength;
    },
    areaLen: function areaLen() {
      return this.inputVal.length > this.maxlength ? this.maxlength : this.inputVal.length;
    },
    rightIconClass: function rightIconClass() {
      return this.$slots['right-icon'] || this.rightIcon || this.clearable || this.isMaxlength;
    }
  },
  mounted: function mounted() {
    // 提示参数错误
    this.handleConsoleAttributesWarning();
  },
  methods: {
    handleInput: function handleInput(event) {
      this.inputVal = event.target.value;
      this.$emit('input', event.target.value);
    },
    // 清空value
    handleClearable: function handleClearable() {
      this.$emit('input', '');
      this.$refs.input.value = '';
      this.inputVal = '';
    },
    // 密码是否可看
    handleShowPwd: function handleShowPwd() {
      this.showPwd = !this.showPwd;
    },
    // 提示参数错误
    handleConsoleAttributesWarning: function handleConsoleAttributesWarning() {
      if (this.showPassword && this.type !== 'password') {
        console.warn('Attributes异常，show-password只在type="password"时有效！');
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/components/Input/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Input_srcvue_type_script_lang_js_ = (Input_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/Input/src/index.vue?vue&type=style&index=0&id=5166ea39&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_5166ea39_lang_scss_scoped_true_ = __webpack_require__("b352");

// CONCATENATED MODULE: ./packages/components/Input/src/index.vue






/* normalize component */

var Input_src_component = normalizeComponent(
  components_Input_srcvue_type_script_lang_js_,
  srcvue_type_template_id_5166ea39_scoped_true_render,
  srcvue_type_template_id_5166ea39_scoped_true_staticRenderFns,
  false,
  null,
  "5166ea39",
  null
  
)

/* harmony default export */ var Input_src = (Input_src_component.exports);
// CONCATENATED MODULE: ./packages/components/Input/index.js


/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-15 16:04:22
 */


Input_src.install = function (Vue) {
  Vue.component(Input_src.name, Input_src);
};

/* harmony default export */ var Input = (Input_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e0ff510a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/FormItem/src/index.vue?vue&type=template&id=5d64c4be&scoped=true&
var srcvue_type_template_id_5d64c4be_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['h--form--item',("h--form--item--" + _vm.layout)]},[_c('div',{class:[
        'h--form--item--layout',
        ("h--form--item--layout--" + _vm.layout)],style:({'width' :_vm.labelWidth,'text-align': _vm.labelAlign})},[_c('span',{class:_vm.required && ("h--form--item--required--" + _vm.required)},[_vm._v(" "+_vm._s(_vm.label)+" ")])]),_vm._t("default")],2)}
var srcvue_type_template_id_5d64c4be_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/FormItem/src/index.vue?vue&type=template&id=5d64c4be&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/FormItem/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FormItem_srcvue_type_script_lang_js_ = ({
  name: 'h-form-item',
  props: {
    label: {
      type: String,
      default: ''
    },
    // top / left / bottom 默认top
    layout: {
      type: String,
      default: 'top'
    },
    // label-width label的宽度
    labelWidth: {
      type: String,
      default: 'auto'
    },
    // label的对齐方式 left / right   默认left
    labelAlign: {
      type: String,
      default: 'left'
    },
    // 是否带必填标识  left / right 指定必选标识的位置
    required: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./packages/components/FormItem/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormItem_srcvue_type_script_lang_js_ = (FormItem_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/FormItem/src/index.vue?vue&type=style&index=0&id=5d64c4be&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_5d64c4be_lang_scss_scoped_true_ = __webpack_require__("77df");

// CONCATENATED MODULE: ./packages/components/FormItem/src/index.vue






/* normalize component */

var FormItem_src_component = normalizeComponent(
  components_FormItem_srcvue_type_script_lang_js_,
  srcvue_type_template_id_5d64c4be_scoped_true_render,
  srcvue_type_template_id_5d64c4be_scoped_true_staticRenderFns,
  false,
  null,
  "5d64c4be",
  null
  
)

/* harmony default export */ var FormItem_src = (FormItem_src_component.exports);
// CONCATENATED MODULE: ./packages/components/FormItem/index.js


/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:41:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 14:02:18
 */


FormItem_src.install = function (Vue) {
  Vue.component(FormItem_src.name, FormItem_src);
};

/* harmony default export */ var FormItem = (FormItem_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e0ff510a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/PccLink/src/index.vue?vue&type=template&id=04af87fd&scoped=true&
var srcvue_type_template_id_04af87fd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h--pcc--link"},[_c('h-form-item',{attrs:{"label":_vm.label,"layout":_vm.layout,"label-align":_vm.labelAlign,"required":_vm.required,"label-width":_vm.labelWidth}},[_c('div',{staticClass:"h--pcc--link--container"},[_c('h-select',{attrs:{"height":_vm.height}},[_c('el-select',{on:{"change":_vm.handleProvinceVal},model:{value:(_vm.provinceVal),callback:function ($$v) {_vm.provinceVal=$$v},expression:"provinceVal"}},[_c('el-option',{attrs:{"label":"全部","value":""}}),_vm._l((_vm.province),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})],2)],1),(_vm.hideNotSelected ? _vm.city : true)?_c('span',{staticClass:"h--connect--symbol"},[_vm._v(_vm._s(_vm.connectSymbol))]):_vm._e(),(_vm.hideNotSelected ? _vm.city: true)?_c('h-select',{attrs:{"height":_vm.height}},[_c('el-select',{on:{"change":_vm.handleCityVal},model:{value:(_vm.cityVal),callback:function ($$v) {_vm.cityVal=$$v},expression:"cityVal"}},[_c('el-option',{attrs:{"label":"全部","value":""}}),_vm._l((_vm.city),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})],2)],1):_vm._e(),(_vm.hideNotSelected ? _vm.county : true)?_c('span',{staticClass:"h--connect--symbol"},[_vm._v(_vm._s(_vm.connectSymbol))]):_vm._e(),(_vm.hideNotSelected ? _vm.county : true)?_c('h-select',{attrs:{"height":_vm.height}},[_c('el-select',{on:{"change":_vm.handleCountyVal},model:{value:(_vm.countyVal),callback:function ($$v) {_vm.countyVal=$$v},expression:"countyVal"}},[_c('el-option',{attrs:{"label":"全部","value":""}}),_vm._l((_vm.county),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})],2)],1):_vm._e()],1)])],1)}
var srcvue_type_template_id_04af87fd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/PccLink/src/index.vue?vue&type=template&id=04af87fd&scoped=true&

// CONCATENATED MODULE: ./packages/tools/pcc/province.js
/*
 * @Date: 2020-07-29 15:42:51
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 15:54:50
 */
var province_province = [{
  "name": "北京市",
  "id": "110000000000"
}, {
  "name": "天津市",
  "id": "120000000000"
}, {
  "name": "河北省",
  "id": "130000000000"
}, {
  "name": "山西省",
  "id": "140000000000"
}, {
  "name": "内蒙古自治区",
  "id": "150000000000"
}, {
  "name": "辽宁省",
  "id": "210000000000"
}, {
  "name": "吉林省",
  "id": "220000000000"
}, {
  "name": "黑龙江省",
  "id": "230000000000"
}, {
  "name": "上海市",
  "id": "310000000000"
}, {
  "name": "江苏省",
  "id": "320000000000"
}, {
  "name": "浙江省",
  "id": "330000000000"
}, {
  "name": "安徽省",
  "id": "340000000000"
}, {
  "name": "福建省",
  "id": "350000000000"
}, {
  "name": "江西省",
  "id": "360000000000"
}, {
  "name": "山东省",
  "id": "370000000000"
}, {
  "name": "河南省",
  "id": "410000000000"
}, {
  "name": "湖北省",
  "id": "420000000000"
}, {
  "name": "湖南省",
  "id": "430000000000"
}, {
  "name": "广东省",
  "id": "440000000000"
}, {
  "name": "广西壮族自治区",
  "id": "450000000000"
}, {
  "name": "海南省",
  "id": "460000000000"
}, {
  "name": "重庆市",
  "id": "500000000000"
}, {
  "name": "四川省",
  "id": "510000000000"
}, {
  "name": "贵州省",
  "id": "520000000000"
}, {
  "name": "云南省",
  "id": "530000000000"
}, {
  "name": "西藏自治区",
  "id": "540000000000"
}, {
  "name": "陕西省",
  "id": "610000000000"
}, {
  "name": "甘肃省",
  "id": "620000000000"
}, {
  "name": "青海省",
  "id": "630000000000"
}, {
  "name": "宁夏回族自治区",
  "id": "640000000000"
}, {
  "name": "新疆维吾尔自治区",
  "id": "650000000000"
}];
// CONCATENATED MODULE: ./packages/tools/pcc/city.js
var city_city = {
  "110000000000": [{
    "province": "北京市",
    "name": "市辖区",
    "id": "110100000000"
  }],
  "120000000000": [{
    "province": "天津市",
    "name": "市辖区",
    "id": "120100000000"
  }],
  "130000000000": [{
    "province": "河北省",
    "name": "石家庄市",
    "id": "130100000000"
  }, {
    "province": "河北省",
    "name": "唐山市",
    "id": "130200000000"
  }, {
    "province": "河北省",
    "name": "秦皇岛市",
    "id": "130300000000"
  }, {
    "province": "河北省",
    "name": "邯郸市",
    "id": "130400000000"
  }, {
    "province": "河北省",
    "name": "邢台市",
    "id": "130500000000"
  }, {
    "province": "河北省",
    "name": "保定市",
    "id": "130600000000"
  }, {
    "province": "河北省",
    "name": "张家口市",
    "id": "130700000000"
  }, {
    "province": "河北省",
    "name": "承德市",
    "id": "130800000000"
  }, {
    "province": "河北省",
    "name": "沧州市",
    "id": "130900000000"
  }, {
    "province": "河北省",
    "name": "廊坊市",
    "id": "131000000000"
  }, {
    "province": "河北省",
    "name": "衡水市",
    "id": "131100000000"
  }],
  "140000000000": [{
    "province": "山西省",
    "name": "太原市",
    "id": "140100000000"
  }, {
    "province": "山西省",
    "name": "大同市",
    "id": "140200000000"
  }, {
    "province": "山西省",
    "name": "阳泉市",
    "id": "140300000000"
  }, {
    "province": "山西省",
    "name": "长治市",
    "id": "140400000000"
  }, {
    "province": "山西省",
    "name": "晋城市",
    "id": "140500000000"
  }, {
    "province": "山西省",
    "name": "朔州市",
    "id": "140600000000"
  }, {
    "province": "山西省",
    "name": "晋中市",
    "id": "140700000000"
  }, {
    "province": "山西省",
    "name": "运城市",
    "id": "140800000000"
  }, {
    "province": "山西省",
    "name": "忻州市",
    "id": "140900000000"
  }, {
    "province": "山西省",
    "name": "临汾市",
    "id": "141000000000"
  }, {
    "province": "山西省",
    "name": "吕梁市",
    "id": "141100000000"
  }],
  "150000000000": [{
    "province": "内蒙古自治区",
    "name": "呼和浩特市",
    "id": "150100000000"
  }, {
    "province": "内蒙古自治区",
    "name": "包头市",
    "id": "150200000000"
  }, {
    "province": "内蒙古自治区",
    "name": "乌海市",
    "id": "150300000000"
  }, {
    "province": "内蒙古自治区",
    "name": "赤峰市",
    "id": "150400000000"
  }, {
    "province": "内蒙古自治区",
    "name": "通辽市",
    "id": "150500000000"
  }, {
    "province": "内蒙古自治区",
    "name": "鄂尔多斯市",
    "id": "150600000000"
  }, {
    "province": "内蒙古自治区",
    "name": "呼伦贝尔市",
    "id": "150700000000"
  }, {
    "province": "内蒙古自治区",
    "name": "巴彦淖尔市",
    "id": "150800000000"
  }, {
    "province": "内蒙古自治区",
    "name": "乌兰察布市",
    "id": "150900000000"
  }, {
    "province": "内蒙古自治区",
    "name": "兴安盟",
    "id": "152200000000"
  }, {
    "province": "内蒙古自治区",
    "name": "锡林郭勒盟",
    "id": "152500000000"
  }, {
    "province": "内蒙古自治区",
    "name": "阿拉善盟",
    "id": "152900000000"
  }],
  "210000000000": [{
    "province": "辽宁省",
    "name": "沈阳市",
    "id": "210100000000"
  }, {
    "province": "辽宁省",
    "name": "大连市",
    "id": "210200000000"
  }, {
    "province": "辽宁省",
    "name": "鞍山市",
    "id": "210300000000"
  }, {
    "province": "辽宁省",
    "name": "抚顺市",
    "id": "210400000000"
  }, {
    "province": "辽宁省",
    "name": "本溪市",
    "id": "210500000000"
  }, {
    "province": "辽宁省",
    "name": "丹东市",
    "id": "210600000000"
  }, {
    "province": "辽宁省",
    "name": "锦州市",
    "id": "210700000000"
  }, {
    "province": "辽宁省",
    "name": "营口市",
    "id": "210800000000"
  }, {
    "province": "辽宁省",
    "name": "阜新市",
    "id": "210900000000"
  }, {
    "province": "辽宁省",
    "name": "辽阳市",
    "id": "211000000000"
  }, {
    "province": "辽宁省",
    "name": "盘锦市",
    "id": "211100000000"
  }, {
    "province": "辽宁省",
    "name": "铁岭市",
    "id": "211200000000"
  }, {
    "province": "辽宁省",
    "name": "朝阳市",
    "id": "211300000000"
  }, {
    "province": "辽宁省",
    "name": "葫芦岛市",
    "id": "211400000000"
  }],
  "220000000000": [{
    "province": "吉林省",
    "name": "长春市",
    "id": "220100000000"
  }, {
    "province": "吉林省",
    "name": "吉林市",
    "id": "220200000000"
  }, {
    "province": "吉林省",
    "name": "四平市",
    "id": "220300000000"
  }, {
    "province": "吉林省",
    "name": "辽源市",
    "id": "220400000000"
  }, {
    "province": "吉林省",
    "name": "通化市",
    "id": "220500000000"
  }, {
    "province": "吉林省",
    "name": "白山市",
    "id": "220600000000"
  }, {
    "province": "吉林省",
    "name": "松原市",
    "id": "220700000000"
  }, {
    "province": "吉林省",
    "name": "白城市",
    "id": "220800000000"
  }, {
    "province": "吉林省",
    "name": "延边朝鲜族自治州",
    "id": "222400000000"
  }],
  "230000000000": [{
    "province": "黑龙江省",
    "name": "哈尔滨市",
    "id": "230100000000"
  }, {
    "province": "黑龙江省",
    "name": "齐齐哈尔市",
    "id": "230200000000"
  }, {
    "province": "黑龙江省",
    "name": "鸡西市",
    "id": "230300000000"
  }, {
    "province": "黑龙江省",
    "name": "鹤岗市",
    "id": "230400000000"
  }, {
    "province": "黑龙江省",
    "name": "双鸭山市",
    "id": "230500000000"
  }, {
    "province": "黑龙江省",
    "name": "大庆市",
    "id": "230600000000"
  }, {
    "province": "黑龙江省",
    "name": "伊春市",
    "id": "230700000000"
  }, {
    "province": "黑龙江省",
    "name": "佳木斯市",
    "id": "230800000000"
  }, {
    "province": "黑龙江省",
    "name": "七台河市",
    "id": "230900000000"
  }, {
    "province": "黑龙江省",
    "name": "牡丹江市",
    "id": "231000000000"
  }, {
    "province": "黑龙江省",
    "name": "黑河市",
    "id": "231100000000"
  }, {
    "province": "黑龙江省",
    "name": "绥化市",
    "id": "231200000000"
  }, {
    "province": "黑龙江省",
    "name": "大兴安岭地区",
    "id": "232700000000"
  }],
  "310000000000": [{
    "province": "上海市",
    "name": "市辖区",
    "id": "310100000000"
  }],
  "320000000000": [{
    "province": "江苏省",
    "name": "南京市",
    "id": "320100000000"
  }, {
    "province": "江苏省",
    "name": "无锡市",
    "id": "320200000000"
  }, {
    "province": "江苏省",
    "name": "徐州市",
    "id": "320300000000"
  }, {
    "province": "江苏省",
    "name": "常州市",
    "id": "320400000000"
  }, {
    "province": "江苏省",
    "name": "苏州市",
    "id": "320500000000"
  }, {
    "province": "江苏省",
    "name": "南通市",
    "id": "320600000000"
  }, {
    "province": "江苏省",
    "name": "连云港市",
    "id": "320700000000"
  }, {
    "province": "江苏省",
    "name": "淮安市",
    "id": "320800000000"
  }, {
    "province": "江苏省",
    "name": "盐城市",
    "id": "320900000000"
  }, {
    "province": "江苏省",
    "name": "扬州市",
    "id": "321000000000"
  }, {
    "province": "江苏省",
    "name": "镇江市",
    "id": "321100000000"
  }, {
    "province": "江苏省",
    "name": "泰州市",
    "id": "321200000000"
  }, {
    "province": "江苏省",
    "name": "宿迁市",
    "id": "321300000000"
  }],
  "330000000000": [{
    "province": "浙江省",
    "name": "杭州市",
    "id": "330100000000"
  }, {
    "province": "浙江省",
    "name": "宁波市",
    "id": "330200000000"
  }, {
    "province": "浙江省",
    "name": "温州市",
    "id": "330300000000"
  }, {
    "province": "浙江省",
    "name": "嘉兴市",
    "id": "330400000000"
  }, {
    "province": "浙江省",
    "name": "湖州市",
    "id": "330500000000"
  }, {
    "province": "浙江省",
    "name": "绍兴市",
    "id": "330600000000"
  }, {
    "province": "浙江省",
    "name": "金华市",
    "id": "330700000000"
  }, {
    "province": "浙江省",
    "name": "衢州市",
    "id": "330800000000"
  }, {
    "province": "浙江省",
    "name": "舟山市",
    "id": "330900000000"
  }, {
    "province": "浙江省",
    "name": "台州市",
    "id": "331000000000"
  }, {
    "province": "浙江省",
    "name": "丽水市",
    "id": "331100000000"
  }],
  "340000000000": [{
    "province": "安徽省",
    "name": "合肥市",
    "id": "340100000000"
  }, {
    "province": "安徽省",
    "name": "芜湖市",
    "id": "340200000000"
  }, {
    "province": "安徽省",
    "name": "蚌埠市",
    "id": "340300000000"
  }, {
    "province": "安徽省",
    "name": "淮南市",
    "id": "340400000000"
  }, {
    "province": "安徽省",
    "name": "马鞍山市",
    "id": "340500000000"
  }, {
    "province": "安徽省",
    "name": "淮北市",
    "id": "340600000000"
  }, {
    "province": "安徽省",
    "name": "铜陵市",
    "id": "340700000000"
  }, {
    "province": "安徽省",
    "name": "安庆市",
    "id": "340800000000"
  }, {
    "province": "安徽省",
    "name": "黄山市",
    "id": "341000000000"
  }, {
    "province": "安徽省",
    "name": "滁州市",
    "id": "341100000000"
  }, {
    "province": "安徽省",
    "name": "阜阳市",
    "id": "341200000000"
  }, {
    "province": "安徽省",
    "name": "宿州市",
    "id": "341300000000"
  }, {
    "province": "安徽省",
    "name": "六安市",
    "id": "341500000000"
  }, {
    "province": "安徽省",
    "name": "亳州市",
    "id": "341600000000"
  }, {
    "province": "安徽省",
    "name": "池州市",
    "id": "341700000000"
  }, {
    "province": "安徽省",
    "name": "宣城市",
    "id": "341800000000"
  }],
  "350000000000": [{
    "province": "福建省",
    "name": "福州市",
    "id": "350100000000"
  }, {
    "province": "福建省",
    "name": "厦门市",
    "id": "350200000000"
  }, {
    "province": "福建省",
    "name": "莆田市",
    "id": "350300000000"
  }, {
    "province": "福建省",
    "name": "三明市",
    "id": "350400000000"
  }, {
    "province": "福建省",
    "name": "泉州市",
    "id": "350500000000"
  }, {
    "province": "福建省",
    "name": "漳州市",
    "id": "350600000000"
  }, {
    "province": "福建省",
    "name": "南平市",
    "id": "350700000000"
  }, {
    "province": "福建省",
    "name": "龙岩市",
    "id": "350800000000"
  }, {
    "province": "福建省",
    "name": "宁德市",
    "id": "350900000000"
  }],
  "360000000000": [{
    "province": "江西省",
    "name": "南昌市",
    "id": "360100000000"
  }, {
    "province": "江西省",
    "name": "景德镇市",
    "id": "360200000000"
  }, {
    "province": "江西省",
    "name": "萍乡市",
    "id": "360300000000"
  }, {
    "province": "江西省",
    "name": "九江市",
    "id": "360400000000"
  }, {
    "province": "江西省",
    "name": "新余市",
    "id": "360500000000"
  }, {
    "province": "江西省",
    "name": "鹰潭市",
    "id": "360600000000"
  }, {
    "province": "江西省",
    "name": "赣州市",
    "id": "360700000000"
  }, {
    "province": "江西省",
    "name": "吉安市",
    "id": "360800000000"
  }, {
    "province": "江西省",
    "name": "宜春市",
    "id": "360900000000"
  }, {
    "province": "江西省",
    "name": "抚州市",
    "id": "361000000000"
  }, {
    "province": "江西省",
    "name": "上饶市",
    "id": "361100000000"
  }],
  "370000000000": [{
    "province": "山东省",
    "name": "济南市",
    "id": "370100000000"
  }, {
    "province": "山东省",
    "name": "青岛市",
    "id": "370200000000"
  }, {
    "province": "山东省",
    "name": "淄博市",
    "id": "370300000000"
  }, {
    "province": "山东省",
    "name": "枣庄市",
    "id": "370400000000"
  }, {
    "province": "山东省",
    "name": "东营市",
    "id": "370500000000"
  }, {
    "province": "山东省",
    "name": "烟台市",
    "id": "370600000000"
  }, {
    "province": "山东省",
    "name": "潍坊市",
    "id": "370700000000"
  }, {
    "province": "山东省",
    "name": "济宁市",
    "id": "370800000000"
  }, {
    "province": "山东省",
    "name": "泰安市",
    "id": "370900000000"
  }, {
    "province": "山东省",
    "name": "威海市",
    "id": "371000000000"
  }, {
    "province": "山东省",
    "name": "日照市",
    "id": "371100000000"
  }, {
    "province": "山东省",
    "name": "莱芜市",
    "id": "371200000000"
  }, {
    "province": "山东省",
    "name": "临沂市",
    "id": "371300000000"
  }, {
    "province": "山东省",
    "name": "德州市",
    "id": "371400000000"
  }, {
    "province": "山东省",
    "name": "聊城市",
    "id": "371500000000"
  }, {
    "province": "山东省",
    "name": "滨州市",
    "id": "371600000000"
  }, {
    "province": "山东省",
    "name": "菏泽市",
    "id": "371700000000"
  }],
  "410000000000": [{
    "province": "河南省",
    "name": "郑州市",
    "id": "410100000000"
  }, {
    "province": "河南省",
    "name": "开封市",
    "id": "410200000000"
  }, {
    "province": "河南省",
    "name": "洛阳市",
    "id": "410300000000"
  }, {
    "province": "河南省",
    "name": "平顶山市",
    "id": "410400000000"
  }, {
    "province": "河南省",
    "name": "安阳市",
    "id": "410500000000"
  }, {
    "province": "河南省",
    "name": "鹤壁市",
    "id": "410600000000"
  }, {
    "province": "河南省",
    "name": "新乡市",
    "id": "410700000000"
  }, {
    "province": "河南省",
    "name": "焦作市",
    "id": "410800000000"
  }, {
    "province": "河南省",
    "name": "濮阳市",
    "id": "410900000000"
  }, {
    "province": "河南省",
    "name": "许昌市",
    "id": "411000000000"
  }, {
    "province": "河南省",
    "name": "漯河市",
    "id": "411100000000"
  }, {
    "province": "河南省",
    "name": "三门峡市",
    "id": "411200000000"
  }, {
    "province": "河南省",
    "name": "南阳市",
    "id": "411300000000"
  }, {
    "province": "河南省",
    "name": "商丘市",
    "id": "411400000000"
  }, {
    "province": "河南省",
    "name": "信阳市",
    "id": "411500000000"
  }, {
    "province": "河南省",
    "name": "周口市",
    "id": "411600000000"
  }, {
    "province": "河南省",
    "name": "驻马店市",
    "id": "411700000000"
  }, {
    "province": "河南省",
    "name": "省直辖县级行政区划",
    "id": "419000000000"
  }],
  "420000000000": [{
    "province": "湖北省",
    "name": "武汉市",
    "id": "420100000000"
  }, {
    "province": "湖北省",
    "name": "黄石市",
    "id": "420200000000"
  }, {
    "province": "湖北省",
    "name": "十堰市",
    "id": "420300000000"
  }, {
    "province": "湖北省",
    "name": "宜昌市",
    "id": "420500000000"
  }, {
    "province": "湖北省",
    "name": "襄阳市",
    "id": "420600000000"
  }, {
    "province": "湖北省",
    "name": "鄂州市",
    "id": "420700000000"
  }, {
    "province": "湖北省",
    "name": "荆门市",
    "id": "420800000000"
  }, {
    "province": "湖北省",
    "name": "孝感市",
    "id": "420900000000"
  }, {
    "province": "湖北省",
    "name": "荆州市",
    "id": "421000000000"
  }, {
    "province": "湖北省",
    "name": "黄冈市",
    "id": "421100000000"
  }, {
    "province": "湖北省",
    "name": "咸宁市",
    "id": "421200000000"
  }, {
    "province": "湖北省",
    "name": "随州市",
    "id": "421300000000"
  }, {
    "province": "湖北省",
    "name": "恩施土家族苗族自治州",
    "id": "422800000000"
  }, {
    "province": "湖北省",
    "name": "省直辖县级行政区划",
    "id": "429000000000"
  }],
  "430000000000": [{
    "province": "湖南省",
    "name": "长沙市",
    "id": "430100000000"
  }, {
    "province": "湖南省",
    "name": "株洲市",
    "id": "430200000000"
  }, {
    "province": "湖南省",
    "name": "湘潭市",
    "id": "430300000000"
  }, {
    "province": "湖南省",
    "name": "衡阳市",
    "id": "430400000000"
  }, {
    "province": "湖南省",
    "name": "邵阳市",
    "id": "430500000000"
  }, {
    "province": "湖南省",
    "name": "岳阳市",
    "id": "430600000000"
  }, {
    "province": "湖南省",
    "name": "常德市",
    "id": "430700000000"
  }, {
    "province": "湖南省",
    "name": "张家界市",
    "id": "430800000000"
  }, {
    "province": "湖南省",
    "name": "益阳市",
    "id": "430900000000"
  }, {
    "province": "湖南省",
    "name": "郴州市",
    "id": "431000000000"
  }, {
    "province": "湖南省",
    "name": "永州市",
    "id": "431100000000"
  }, {
    "province": "湖南省",
    "name": "怀化市",
    "id": "431200000000"
  }, {
    "province": "湖南省",
    "name": "娄底市",
    "id": "431300000000"
  }, {
    "province": "湖南省",
    "name": "湘西土家族苗族自治州",
    "id": "433100000000"
  }],
  "440000000000": [{
    "province": "广东省",
    "name": "广州市",
    "id": "440100000000"
  }, {
    "province": "广东省",
    "name": "韶关市",
    "id": "440200000000"
  }, {
    "province": "广东省",
    "name": "深圳市",
    "id": "440300000000"
  }, {
    "province": "广东省",
    "name": "珠海市",
    "id": "440400000000"
  }, {
    "province": "广东省",
    "name": "汕头市",
    "id": "440500000000"
  }, {
    "province": "广东省",
    "name": "佛山市",
    "id": "440600000000"
  }, {
    "province": "广东省",
    "name": "江门市",
    "id": "440700000000"
  }, {
    "province": "广东省",
    "name": "湛江市",
    "id": "440800000000"
  }, {
    "province": "广东省",
    "name": "茂名市",
    "id": "440900000000"
  }, {
    "province": "广东省",
    "name": "肇庆市",
    "id": "441200000000"
  }, {
    "province": "广东省",
    "name": "惠州市",
    "id": "441300000000"
  }, {
    "province": "广东省",
    "name": "梅州市",
    "id": "441400000000"
  }, {
    "province": "广东省",
    "name": "汕尾市",
    "id": "441500000000"
  }, {
    "province": "广东省",
    "name": "河源市",
    "id": "441600000000"
  }, {
    "province": "广东省",
    "name": "阳江市",
    "id": "441700000000"
  }, {
    "province": "广东省",
    "name": "清远市",
    "id": "441800000000"
  }, {
    "province": "广东省",
    "name": "东莞市",
    "id": "441900000000"
  }, {
    "province": "广东省",
    "name": "中山市",
    "id": "442000000000"
  }, {
    "province": "广东省",
    "name": "潮州市",
    "id": "445100000000"
  }, {
    "province": "广东省",
    "name": "揭阳市",
    "id": "445200000000"
  }, {
    "province": "广东省",
    "name": "云浮市",
    "id": "445300000000"
  }],
  "450000000000": [{
    "province": "广西壮族自治区",
    "name": "南宁市",
    "id": "450100000000"
  }, {
    "province": "广西壮族自治区",
    "name": "柳州市",
    "id": "450200000000"
  }, {
    "province": "广西壮族自治区",
    "name": "桂林市",
    "id": "450300000000"
  }, {
    "province": "广西壮族自治区",
    "name": "梧州市",
    "id": "450400000000"
  }, {
    "province": "广西壮族自治区",
    "name": "北海市",
    "id": "450500000000"
  }, {
    "province": "广西壮族自治区",
    "name": "防城港市",
    "id": "450600000000"
  }, {
    "province": "广西壮族自治区",
    "name": "钦州市",
    "id": "450700000000"
  }, {
    "province": "广西壮族自治区",
    "name": "贵港市",
    "id": "450800000000"
  }, {
    "province": "广西壮族自治区",
    "name": "玉林市",
    "id": "450900000000"
  }, {
    "province": "广西壮族自治区",
    "name": "百色市",
    "id": "451000000000"
  }, {
    "province": "广西壮族自治区",
    "name": "贺州市",
    "id": "451100000000"
  }, {
    "province": "广西壮族自治区",
    "name": "河池市",
    "id": "451200000000"
  }, {
    "province": "广西壮族自治区",
    "name": "来宾市",
    "id": "451300000000"
  }, {
    "province": "广西壮族自治区",
    "name": "崇左市",
    "id": "451400000000"
  }],
  "460000000000": [{
    "province": "海南省",
    "name": "海口市",
    "id": "460100000000"
  }, {
    "province": "海南省",
    "name": "三亚市",
    "id": "460200000000"
  }, {
    "province": "海南省",
    "name": "三沙市",
    "id": "460300000000"
  }, {
    "province": "海南省",
    "name": "儋州市",
    "id": "460400000000"
  }, {
    "province": "海南省",
    "name": "省直辖县级行政区划",
    "id": "469000000000"
  }],
  "500000000000": [{
    "province": "重庆市",
    "name": "市辖区",
    "id": "500100000000"
  }, {
    "province": "重庆市",
    "name": "县",
    "id": "500200000000"
  }],
  "510000000000": [{
    "province": "四川省",
    "name": "成都市",
    "id": "510100000000"
  }, {
    "province": "四川省",
    "name": "自贡市",
    "id": "510300000000"
  }, {
    "province": "四川省",
    "name": "攀枝花市",
    "id": "510400000000"
  }, {
    "province": "四川省",
    "name": "泸州市",
    "id": "510500000000"
  }, {
    "province": "四川省",
    "name": "德阳市",
    "id": "510600000000"
  }, {
    "province": "四川省",
    "name": "绵阳市",
    "id": "510700000000"
  }, {
    "province": "四川省",
    "name": "广元市",
    "id": "510800000000"
  }, {
    "province": "四川省",
    "name": "遂宁市",
    "id": "510900000000"
  }, {
    "province": "四川省",
    "name": "内江市",
    "id": "511000000000"
  }, {
    "province": "四川省",
    "name": "乐山市",
    "id": "511100000000"
  }, {
    "province": "四川省",
    "name": "南充市",
    "id": "511300000000"
  }, {
    "province": "四川省",
    "name": "眉山市",
    "id": "511400000000"
  }, {
    "province": "四川省",
    "name": "宜宾市",
    "id": "511500000000"
  }, {
    "province": "四川省",
    "name": "广安市",
    "id": "511600000000"
  }, {
    "province": "四川省",
    "name": "达州市",
    "id": "511700000000"
  }, {
    "province": "四川省",
    "name": "雅安市",
    "id": "511800000000"
  }, {
    "province": "四川省",
    "name": "巴中市",
    "id": "511900000000"
  }, {
    "province": "四川省",
    "name": "资阳市",
    "id": "512000000000"
  }, {
    "province": "四川省",
    "name": "阿坝藏族羌族自治州",
    "id": "513200000000"
  }, {
    "province": "四川省",
    "name": "甘孜藏族自治州",
    "id": "513300000000"
  }, {
    "province": "四川省",
    "name": "凉山彝族自治州",
    "id": "513400000000"
  }],
  "520000000000": [{
    "province": "贵州省",
    "name": "贵阳市",
    "id": "520100000000"
  }, {
    "province": "贵州省",
    "name": "六盘水市",
    "id": "520200000000"
  }, {
    "province": "贵州省",
    "name": "遵义市",
    "id": "520300000000"
  }, {
    "province": "贵州省",
    "name": "安顺市",
    "id": "520400000000"
  }, {
    "province": "贵州省",
    "name": "毕节市",
    "id": "520500000000"
  }, {
    "province": "贵州省",
    "name": "铜仁市",
    "id": "520600000000"
  }, {
    "province": "贵州省",
    "name": "黔西南布依族苗族自治州",
    "id": "522300000000"
  }, {
    "province": "贵州省",
    "name": "黔东南苗族侗族自治州",
    "id": "522600000000"
  }, {
    "province": "贵州省",
    "name": "黔南布依族苗族自治州",
    "id": "522700000000"
  }],
  "530000000000": [{
    "province": "云南省",
    "name": "昆明市",
    "id": "530100000000"
  }, {
    "province": "云南省",
    "name": "曲靖市",
    "id": "530300000000"
  }, {
    "province": "云南省",
    "name": "玉溪市",
    "id": "530400000000"
  }, {
    "province": "云南省",
    "name": "保山市",
    "id": "530500000000"
  }, {
    "province": "云南省",
    "name": "昭通市",
    "id": "530600000000"
  }, {
    "province": "云南省",
    "name": "丽江市",
    "id": "530700000000"
  }, {
    "province": "云南省",
    "name": "普洱市",
    "id": "530800000000"
  }, {
    "province": "云南省",
    "name": "临沧市",
    "id": "530900000000"
  }, {
    "province": "云南省",
    "name": "楚雄彝族自治州",
    "id": "532300000000"
  }, {
    "province": "云南省",
    "name": "红河哈尼族彝族自治州",
    "id": "532500000000"
  }, {
    "province": "云南省",
    "name": "文山壮族苗族自治州",
    "id": "532600000000"
  }, {
    "province": "云南省",
    "name": "西双版纳傣族自治州",
    "id": "532800000000"
  }, {
    "province": "云南省",
    "name": "大理白族自治州",
    "id": "532900000000"
  }, {
    "province": "云南省",
    "name": "德宏傣族景颇族自治州",
    "id": "533100000000"
  }, {
    "province": "云南省",
    "name": "怒江傈僳族自治州",
    "id": "533300000000"
  }, {
    "province": "云南省",
    "name": "迪庆藏族自治州",
    "id": "533400000000"
  }],
  "540000000000": [{
    "province": "西藏自治区",
    "name": "拉萨市",
    "id": "540100000000"
  }, {
    "province": "西藏自治区",
    "name": "日喀则市",
    "id": "540200000000"
  }, {
    "province": "西藏自治区",
    "name": "昌都市",
    "id": "540300000000"
  }, {
    "province": "西藏自治区",
    "name": "林芝市",
    "id": "540400000000"
  }, {
    "province": "西藏自治区",
    "name": "山南市",
    "id": "540500000000"
  }, {
    "province": "西藏自治区",
    "name": "那曲市",
    "id": "540600000000"
  }, {
    "province": "西藏自治区",
    "name": "阿里地区",
    "id": "542500000000"
  }],
  "610000000000": [{
    "province": "陕西省",
    "name": "西安市",
    "id": "610100000000"
  }, {
    "province": "陕西省",
    "name": "铜川市",
    "id": "610200000000"
  }, {
    "province": "陕西省",
    "name": "宝鸡市",
    "id": "610300000000"
  }, {
    "province": "陕西省",
    "name": "咸阳市",
    "id": "610400000000"
  }, {
    "province": "陕西省",
    "name": "渭南市",
    "id": "610500000000"
  }, {
    "province": "陕西省",
    "name": "延安市",
    "id": "610600000000"
  }, {
    "province": "陕西省",
    "name": "汉中市",
    "id": "610700000000"
  }, {
    "province": "陕西省",
    "name": "榆林市",
    "id": "610800000000"
  }, {
    "province": "陕西省",
    "name": "安康市",
    "id": "610900000000"
  }, {
    "province": "陕西省",
    "name": "商洛市",
    "id": "611000000000"
  }],
  "620000000000": [{
    "province": "甘肃省",
    "name": "兰州市",
    "id": "620100000000"
  }, {
    "province": "甘肃省",
    "name": "嘉峪关市",
    "id": "620200000000"
  }, {
    "province": "甘肃省",
    "name": "金昌市",
    "id": "620300000000"
  }, {
    "province": "甘肃省",
    "name": "白银市",
    "id": "620400000000"
  }, {
    "province": "甘肃省",
    "name": "天水市",
    "id": "620500000000"
  }, {
    "province": "甘肃省",
    "name": "武威市",
    "id": "620600000000"
  }, {
    "province": "甘肃省",
    "name": "张掖市",
    "id": "620700000000"
  }, {
    "province": "甘肃省",
    "name": "平凉市",
    "id": "620800000000"
  }, {
    "province": "甘肃省",
    "name": "酒泉市",
    "id": "620900000000"
  }, {
    "province": "甘肃省",
    "name": "庆阳市",
    "id": "621000000000"
  }, {
    "province": "甘肃省",
    "name": "定西市",
    "id": "621100000000"
  }, {
    "province": "甘肃省",
    "name": "陇南市",
    "id": "621200000000"
  }, {
    "province": "甘肃省",
    "name": "临夏回族自治州",
    "id": "622900000000"
  }, {
    "province": "甘肃省",
    "name": "甘南藏族自治州",
    "id": "623000000000"
  }],
  "630000000000": [{
    "province": "青海省",
    "name": "西宁市",
    "id": "630100000000"
  }, {
    "province": "青海省",
    "name": "海东市",
    "id": "630200000000"
  }, {
    "province": "青海省",
    "name": "海北藏族自治州",
    "id": "632200000000"
  }, {
    "province": "青海省",
    "name": "黄南藏族自治州",
    "id": "632300000000"
  }, {
    "province": "青海省",
    "name": "海南藏族自治州",
    "id": "632500000000"
  }, {
    "province": "青海省",
    "name": "果洛藏族自治州",
    "id": "632600000000"
  }, {
    "province": "青海省",
    "name": "玉树藏族自治州",
    "id": "632700000000"
  }, {
    "province": "青海省",
    "name": "海西蒙古族藏族自治州",
    "id": "632800000000"
  }],
  "640000000000": [{
    "province": "宁夏回族自治区",
    "name": "银川市",
    "id": "640100000000"
  }, {
    "province": "宁夏回族自治区",
    "name": "石嘴山市",
    "id": "640200000000"
  }, {
    "province": "宁夏回族自治区",
    "name": "吴忠市",
    "id": "640300000000"
  }, {
    "province": "宁夏回族自治区",
    "name": "固原市",
    "id": "640400000000"
  }, {
    "province": "宁夏回族自治区",
    "name": "中卫市",
    "id": "640500000000"
  }],
  "650000000000": [{
    "province": "新疆维吾尔自治区",
    "name": "乌鲁木齐市",
    "id": "650100000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "克拉玛依市",
    "id": "650200000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "吐鲁番市",
    "id": "650400000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "哈密市",
    "id": "650500000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "昌吉回族自治州",
    "id": "652300000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "博尔塔拉蒙古自治州",
    "id": "652700000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "巴音郭楞蒙古自治州",
    "id": "652800000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "阿克苏地区",
    "id": "652900000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "克孜勒苏柯尔克孜自治州",
    "id": "653000000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "喀什地区",
    "id": "653100000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "和田地区",
    "id": "653200000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "伊犁哈萨克自治州",
    "id": "654000000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "塔城地区",
    "id": "654200000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "阿勒泰地区",
    "id": "654300000000"
  }, {
    "province": "新疆维吾尔自治区",
    "name": "自治区直辖县级行政区划",
    "id": "659000000000"
  }]
};
// CONCATENATED MODULE: ./packages/tools/pcc/county.js
var county_county = {
  "110100000000": [{
    "city": "市辖区",
    "name": "东城区",
    "id": "110101000000"
  }, {
    "city": "市辖区",
    "name": "西城区",
    "id": "110102000000"
  }, {
    "city": "市辖区",
    "name": "朝阳区",
    "id": "110105000000"
  }, {
    "city": "市辖区",
    "name": "丰台区",
    "id": "110106000000"
  }, {
    "city": "市辖区",
    "name": "石景山区",
    "id": "110107000000"
  }, {
    "city": "市辖区",
    "name": "海淀区",
    "id": "110108000000"
  }, {
    "city": "市辖区",
    "name": "门头沟区",
    "id": "110109000000"
  }, {
    "city": "市辖区",
    "name": "房山区",
    "id": "110111000000"
  }, {
    "city": "市辖区",
    "name": "通州区",
    "id": "110112000000"
  }, {
    "city": "市辖区",
    "name": "顺义区",
    "id": "110113000000"
  }, {
    "city": "市辖区",
    "name": "昌平区",
    "id": "110114000000"
  }, {
    "city": "市辖区",
    "name": "大兴区",
    "id": "110115000000"
  }, {
    "city": "市辖区",
    "name": "怀柔区",
    "id": "110116000000"
  }, {
    "city": "市辖区",
    "name": "平谷区",
    "id": "110117000000"
  }, {
    "city": "市辖区",
    "name": "密云区",
    "id": "110118000000"
  }, {
    "city": "市辖区",
    "name": "延庆区",
    "id": "110119000000"
  }],
  "120100000000": [{
    "city": "市辖区",
    "name": "和平区",
    "id": "120101000000"
  }, {
    "city": "市辖区",
    "name": "河东区",
    "id": "120102000000"
  }, {
    "city": "市辖区",
    "name": "河西区",
    "id": "120103000000"
  }, {
    "city": "市辖区",
    "name": "南开区",
    "id": "120104000000"
  }, {
    "city": "市辖区",
    "name": "河北区",
    "id": "120105000000"
  }, {
    "city": "市辖区",
    "name": "红桥区",
    "id": "120106000000"
  }, {
    "city": "市辖区",
    "name": "东丽区",
    "id": "120110000000"
  }, {
    "city": "市辖区",
    "name": "西青区",
    "id": "120111000000"
  }, {
    "city": "市辖区",
    "name": "津南区",
    "id": "120112000000"
  }, {
    "city": "市辖区",
    "name": "北辰区",
    "id": "120113000000"
  }, {
    "city": "市辖区",
    "name": "武清区",
    "id": "120114000000"
  }, {
    "city": "市辖区",
    "name": "宝坻区",
    "id": "120115000000"
  }, {
    "city": "市辖区",
    "name": "滨海新区",
    "id": "120116000000"
  }, {
    "city": "市辖区",
    "name": "宁河区",
    "id": "120117000000"
  }, {
    "city": "市辖区",
    "name": "静海区",
    "id": "120118000000"
  }, {
    "city": "市辖区",
    "name": "蓟州区",
    "id": "120119000000"
  }],
  "130100000000": [{
    "city": "石家庄市",
    "name": "市辖区",
    "id": "130101000000"
  }, {
    "city": "石家庄市",
    "name": "长安区",
    "id": "130102000000"
  }, {
    "city": "石家庄市",
    "name": "桥西区",
    "id": "130104000000"
  }, {
    "city": "石家庄市",
    "name": "新华区",
    "id": "130105000000"
  }, {
    "city": "石家庄市",
    "name": "井陉矿区",
    "id": "130107000000"
  }, {
    "city": "石家庄市",
    "name": "裕华区",
    "id": "130108000000"
  }, {
    "city": "石家庄市",
    "name": "藁城区",
    "id": "130109000000"
  }, {
    "city": "石家庄市",
    "name": "鹿泉区",
    "id": "130110000000"
  }, {
    "city": "石家庄市",
    "name": "栾城区",
    "id": "130111000000"
  }, {
    "city": "石家庄市",
    "name": "井陉县",
    "id": "130121000000"
  }, {
    "city": "石家庄市",
    "name": "正定县",
    "id": "130123000000"
  }, {
    "city": "石家庄市",
    "name": "行唐县",
    "id": "130125000000"
  }, {
    "city": "石家庄市",
    "name": "灵寿县",
    "id": "130126000000"
  }, {
    "city": "石家庄市",
    "name": "高邑县",
    "id": "130127000000"
  }, {
    "city": "石家庄市",
    "name": "深泽县",
    "id": "130128000000"
  }, {
    "city": "石家庄市",
    "name": "赞皇县",
    "id": "130129000000"
  }, {
    "city": "石家庄市",
    "name": "无极县",
    "id": "130130000000"
  }, {
    "city": "石家庄市",
    "name": "平山县",
    "id": "130131000000"
  }, {
    "city": "石家庄市",
    "name": "元氏县",
    "id": "130132000000"
  }, {
    "city": "石家庄市",
    "name": "赵县",
    "id": "130133000000"
  }, {
    "city": "石家庄市",
    "name": "石家庄高新技术产业开发区",
    "id": "130171000000"
  }, {
    "city": "石家庄市",
    "name": "石家庄循环化工园区",
    "id": "130172000000"
  }, {
    "city": "石家庄市",
    "name": "辛集市",
    "id": "130181000000"
  }, {
    "city": "石家庄市",
    "name": "晋州市",
    "id": "130183000000"
  }, {
    "city": "石家庄市",
    "name": "新乐市",
    "id": "130184000000"
  }],
  "130200000000": [{
    "city": "唐山市",
    "name": "市辖区",
    "id": "130201000000"
  }, {
    "city": "唐山市",
    "name": "路南区",
    "id": "130202000000"
  }, {
    "city": "唐山市",
    "name": "路北区",
    "id": "130203000000"
  }, {
    "city": "唐山市",
    "name": "古冶区",
    "id": "130204000000"
  }, {
    "city": "唐山市",
    "name": "开平区",
    "id": "130205000000"
  }, {
    "city": "唐山市",
    "name": "丰南区",
    "id": "130207000000"
  }, {
    "city": "唐山市",
    "name": "丰润区",
    "id": "130208000000"
  }, {
    "city": "唐山市",
    "name": "曹妃甸区",
    "id": "130209000000"
  }, {
    "city": "唐山市",
    "name": "滦南县",
    "id": "130224000000"
  }, {
    "city": "唐山市",
    "name": "乐亭县",
    "id": "130225000000"
  }, {
    "city": "唐山市",
    "name": "迁西县",
    "id": "130227000000"
  }, {
    "city": "唐山市",
    "name": "玉田县",
    "id": "130229000000"
  }, {
    "city": "唐山市",
    "name": "唐山市芦台经济技术开发区",
    "id": "130271000000"
  }, {
    "city": "唐山市",
    "name": "唐山市汉沽管理区",
    "id": "130272000000"
  }, {
    "city": "唐山市",
    "name": "唐山高新技术产业开发区",
    "id": "130273000000"
  }, {
    "city": "唐山市",
    "name": "河北唐山海港经济开发区",
    "id": "130274000000"
  }, {
    "city": "唐山市",
    "name": "遵化市",
    "id": "130281000000"
  }, {
    "city": "唐山市",
    "name": "迁安市",
    "id": "130283000000"
  }, {
    "city": "唐山市",
    "name": "滦州市",
    "id": "130284000000"
  }],
  "130300000000": [{
    "city": "秦皇岛市",
    "name": "市辖区",
    "id": "130301000000"
  }, {
    "city": "秦皇岛市",
    "name": "海港区",
    "id": "130302000000"
  }, {
    "city": "秦皇岛市",
    "name": "山海关区",
    "id": "130303000000"
  }, {
    "city": "秦皇岛市",
    "name": "北戴河区",
    "id": "130304000000"
  }, {
    "city": "秦皇岛市",
    "name": "抚宁区",
    "id": "130306000000"
  }, {
    "city": "秦皇岛市",
    "name": "青龙满族自治县",
    "id": "130321000000"
  }, {
    "city": "秦皇岛市",
    "name": "昌黎县",
    "id": "130322000000"
  }, {
    "city": "秦皇岛市",
    "name": "卢龙县",
    "id": "130324000000"
  }, {
    "city": "秦皇岛市",
    "name": "秦皇岛市经济技术开发区",
    "id": "130371000000"
  }, {
    "city": "秦皇岛市",
    "name": "北戴河新区",
    "id": "130372000000"
  }],
  "130400000000": [{
    "city": "邯郸市",
    "name": "市辖区",
    "id": "130401000000"
  }, {
    "city": "邯郸市",
    "name": "邯山区",
    "id": "130402000000"
  }, {
    "city": "邯郸市",
    "name": "丛台区",
    "id": "130403000000"
  }, {
    "city": "邯郸市",
    "name": "复兴区",
    "id": "130404000000"
  }, {
    "city": "邯郸市",
    "name": "峰峰矿区",
    "id": "130406000000"
  }, {
    "city": "邯郸市",
    "name": "肥乡区",
    "id": "130407000000"
  }, {
    "city": "邯郸市",
    "name": "永年区",
    "id": "130408000000"
  }, {
    "city": "邯郸市",
    "name": "临漳县",
    "id": "130423000000"
  }, {
    "city": "邯郸市",
    "name": "成安县",
    "id": "130424000000"
  }, {
    "city": "邯郸市",
    "name": "大名县",
    "id": "130425000000"
  }, {
    "city": "邯郸市",
    "name": "涉县",
    "id": "130426000000"
  }, {
    "city": "邯郸市",
    "name": "磁县",
    "id": "130427000000"
  }, {
    "city": "邯郸市",
    "name": "邱县",
    "id": "130430000000"
  }, {
    "city": "邯郸市",
    "name": "鸡泽县",
    "id": "130431000000"
  }, {
    "city": "邯郸市",
    "name": "广平县",
    "id": "130432000000"
  }, {
    "city": "邯郸市",
    "name": "馆陶县",
    "id": "130433000000"
  }, {
    "city": "邯郸市",
    "name": "魏县",
    "id": "130434000000"
  }, {
    "city": "邯郸市",
    "name": "曲周县",
    "id": "130435000000"
  }, {
    "city": "邯郸市",
    "name": "邯郸经济技术开发区",
    "id": "130471000000"
  }, {
    "city": "邯郸市",
    "name": "邯郸冀南新区",
    "id": "130473000000"
  }, {
    "city": "邯郸市",
    "name": "武安市",
    "id": "130481000000"
  }],
  "130500000000": [{
    "city": "邢台市",
    "name": "市辖区",
    "id": "130501000000"
  }, {
    "city": "邢台市",
    "name": "桥东区",
    "id": "130502000000"
  }, {
    "city": "邢台市",
    "name": "桥西区",
    "id": "130503000000"
  }, {
    "city": "邢台市",
    "name": "邢台县",
    "id": "130521000000"
  }, {
    "city": "邢台市",
    "name": "临城县",
    "id": "130522000000"
  }, {
    "city": "邢台市",
    "name": "内丘县",
    "id": "130523000000"
  }, {
    "city": "邢台市",
    "name": "柏乡县",
    "id": "130524000000"
  }, {
    "city": "邢台市",
    "name": "隆尧县",
    "id": "130525000000"
  }, {
    "city": "邢台市",
    "name": "任县",
    "id": "130526000000"
  }, {
    "city": "邢台市",
    "name": "南和县",
    "id": "130527000000"
  }, {
    "city": "邢台市",
    "name": "宁晋县",
    "id": "130528000000"
  }, {
    "city": "邢台市",
    "name": "巨鹿县",
    "id": "130529000000"
  }, {
    "city": "邢台市",
    "name": "新河县",
    "id": "130530000000"
  }, {
    "city": "邢台市",
    "name": "广宗县",
    "id": "130531000000"
  }, {
    "city": "邢台市",
    "name": "平乡县",
    "id": "130532000000"
  }, {
    "city": "邢台市",
    "name": "威县",
    "id": "130533000000"
  }, {
    "city": "邢台市",
    "name": "清河县",
    "id": "130534000000"
  }, {
    "city": "邢台市",
    "name": "临西县",
    "id": "130535000000"
  }, {
    "city": "邢台市",
    "name": "河北邢台经济开发区",
    "id": "130571000000"
  }, {
    "city": "邢台市",
    "name": "南宫市",
    "id": "130581000000"
  }, {
    "city": "邢台市",
    "name": "沙河市",
    "id": "130582000000"
  }],
  "130600000000": [{
    "city": "保定市",
    "name": "市辖区",
    "id": "130601000000"
  }, {
    "city": "保定市",
    "name": "竞秀区",
    "id": "130602000000"
  }, {
    "city": "保定市",
    "name": "莲池区",
    "id": "130606000000"
  }, {
    "city": "保定市",
    "name": "满城区",
    "id": "130607000000"
  }, {
    "city": "保定市",
    "name": "清苑区",
    "id": "130608000000"
  }, {
    "city": "保定市",
    "name": "徐水区",
    "id": "130609000000"
  }, {
    "city": "保定市",
    "name": "涞水县",
    "id": "130623000000"
  }, {
    "city": "保定市",
    "name": "阜平县",
    "id": "130624000000"
  }, {
    "city": "保定市",
    "name": "定兴县",
    "id": "130626000000"
  }, {
    "city": "保定市",
    "name": "唐县",
    "id": "130627000000"
  }, {
    "city": "保定市",
    "name": "高阳县",
    "id": "130628000000"
  }, {
    "city": "保定市",
    "name": "容城县",
    "id": "130629000000"
  }, {
    "city": "保定市",
    "name": "涞源县",
    "id": "130630000000"
  }, {
    "city": "保定市",
    "name": "望都县",
    "id": "130631000000"
  }, {
    "city": "保定市",
    "name": "安新县",
    "id": "130632000000"
  }, {
    "city": "保定市",
    "name": "易县",
    "id": "130633000000"
  }, {
    "city": "保定市",
    "name": "曲阳县",
    "id": "130634000000"
  }, {
    "city": "保定市",
    "name": "蠡县",
    "id": "130635000000"
  }, {
    "city": "保定市",
    "name": "顺平县",
    "id": "130636000000"
  }, {
    "city": "保定市",
    "name": "博野县",
    "id": "130637000000"
  }, {
    "city": "保定市",
    "name": "雄县",
    "id": "130638000000"
  }, {
    "city": "保定市",
    "name": "保定高新技术产业开发区",
    "id": "130671000000"
  }, {
    "city": "保定市",
    "name": "保定白沟新城",
    "id": "130672000000"
  }, {
    "city": "保定市",
    "name": "涿州市",
    "id": "130681000000"
  }, {
    "city": "保定市",
    "name": "定州市",
    "id": "130682000000"
  }, {
    "city": "保定市",
    "name": "安国市",
    "id": "130683000000"
  }, {
    "city": "保定市",
    "name": "高碑店市",
    "id": "130684000000"
  }],
  "130700000000": [{
    "city": "张家口市",
    "name": "市辖区",
    "id": "130701000000"
  }, {
    "city": "张家口市",
    "name": "桥东区",
    "id": "130702000000"
  }, {
    "city": "张家口市",
    "name": "桥西区",
    "id": "130703000000"
  }, {
    "city": "张家口市",
    "name": "宣化区",
    "id": "130705000000"
  }, {
    "city": "张家口市",
    "name": "下花园区",
    "id": "130706000000"
  }, {
    "city": "张家口市",
    "name": "万全区",
    "id": "130708000000"
  }, {
    "city": "张家口市",
    "name": "崇礼区",
    "id": "130709000000"
  }, {
    "city": "张家口市",
    "name": "张北县",
    "id": "130722000000"
  }, {
    "city": "张家口市",
    "name": "康保县",
    "id": "130723000000"
  }, {
    "city": "张家口市",
    "name": "沽源县",
    "id": "130724000000"
  }, {
    "city": "张家口市",
    "name": "尚义县",
    "id": "130725000000"
  }, {
    "city": "张家口市",
    "name": "蔚县",
    "id": "130726000000"
  }, {
    "city": "张家口市",
    "name": "阳原县",
    "id": "130727000000"
  }, {
    "city": "张家口市",
    "name": "怀安县",
    "id": "130728000000"
  }, {
    "city": "张家口市",
    "name": "怀来县",
    "id": "130730000000"
  }, {
    "city": "张家口市",
    "name": "涿鹿县",
    "id": "130731000000"
  }, {
    "city": "张家口市",
    "name": "赤城县",
    "id": "130732000000"
  }, {
    "city": "张家口市",
    "name": "张家口市高新技术产业开发区",
    "id": "130771000000"
  }, {
    "city": "张家口市",
    "name": "张家口市察北管理区",
    "id": "130772000000"
  }, {
    "city": "张家口市",
    "name": "张家口市塞北管理区",
    "id": "130773000000"
  }],
  "130800000000": [{
    "city": "承德市",
    "name": "市辖区",
    "id": "130801000000"
  }, {
    "city": "承德市",
    "name": "双桥区",
    "id": "130802000000"
  }, {
    "city": "承德市",
    "name": "双滦区",
    "id": "130803000000"
  }, {
    "city": "承德市",
    "name": "鹰手营子矿区",
    "id": "130804000000"
  }, {
    "city": "承德市",
    "name": "承德县",
    "id": "130821000000"
  }, {
    "city": "承德市",
    "name": "兴隆县",
    "id": "130822000000"
  }, {
    "city": "承德市",
    "name": "滦平县",
    "id": "130824000000"
  }, {
    "city": "承德市",
    "name": "隆化县",
    "id": "130825000000"
  }, {
    "city": "承德市",
    "name": "丰宁满族自治县",
    "id": "130826000000"
  }, {
    "city": "承德市",
    "name": "宽城满族自治县",
    "id": "130827000000"
  }, {
    "city": "承德市",
    "name": "围场满族蒙古族自治县",
    "id": "130828000000"
  }, {
    "city": "承德市",
    "name": "承德高新技术产业开发区",
    "id": "130871000000"
  }, {
    "city": "承德市",
    "name": "平泉市",
    "id": "130881000000"
  }],
  "130900000000": [{
    "city": "沧州市",
    "name": "市辖区",
    "id": "130901000000"
  }, {
    "city": "沧州市",
    "name": "新华区",
    "id": "130902000000"
  }, {
    "city": "沧州市",
    "name": "运河区",
    "id": "130903000000"
  }, {
    "city": "沧州市",
    "name": "沧县",
    "id": "130921000000"
  }, {
    "city": "沧州市",
    "name": "青县",
    "id": "130922000000"
  }, {
    "city": "沧州市",
    "name": "东光县",
    "id": "130923000000"
  }, {
    "city": "沧州市",
    "name": "海兴县",
    "id": "130924000000"
  }, {
    "city": "沧州市",
    "name": "盐山县",
    "id": "130925000000"
  }, {
    "city": "沧州市",
    "name": "肃宁县",
    "id": "130926000000"
  }, {
    "city": "沧州市",
    "name": "南皮县",
    "id": "130927000000"
  }, {
    "city": "沧州市",
    "name": "吴桥县",
    "id": "130928000000"
  }, {
    "city": "沧州市",
    "name": "献县",
    "id": "130929000000"
  }, {
    "city": "沧州市",
    "name": "孟村回族自治县",
    "id": "130930000000"
  }, {
    "city": "沧州市",
    "name": "河北沧州经济开发区",
    "id": "130971000000"
  }, {
    "city": "沧州市",
    "name": "沧州高新技术产业开发区",
    "id": "130972000000"
  }, {
    "city": "沧州市",
    "name": "沧州渤海新区",
    "id": "130973000000"
  }, {
    "city": "沧州市",
    "name": "泊头市",
    "id": "130981000000"
  }, {
    "city": "沧州市",
    "name": "任丘市",
    "id": "130982000000"
  }, {
    "city": "沧州市",
    "name": "黄骅市",
    "id": "130983000000"
  }, {
    "city": "沧州市",
    "name": "河间市",
    "id": "130984000000"
  }],
  "131000000000": [{
    "city": "廊坊市",
    "name": "市辖区",
    "id": "131001000000"
  }, {
    "city": "廊坊市",
    "name": "安次区",
    "id": "131002000000"
  }, {
    "city": "廊坊市",
    "name": "广阳区",
    "id": "131003000000"
  }, {
    "city": "廊坊市",
    "name": "固安县",
    "id": "131022000000"
  }, {
    "city": "廊坊市",
    "name": "永清县",
    "id": "131023000000"
  }, {
    "city": "廊坊市",
    "name": "香河县",
    "id": "131024000000"
  }, {
    "city": "廊坊市",
    "name": "大城县",
    "id": "131025000000"
  }, {
    "city": "廊坊市",
    "name": "文安县",
    "id": "131026000000"
  }, {
    "city": "廊坊市",
    "name": "大厂回族自治县",
    "id": "131028000000"
  }, {
    "city": "廊坊市",
    "name": "廊坊经济技术开发区",
    "id": "131071000000"
  }, {
    "city": "廊坊市",
    "name": "霸州市",
    "id": "131081000000"
  }, {
    "city": "廊坊市",
    "name": "三河市",
    "id": "131082000000"
  }],
  "131100000000": [{
    "city": "衡水市",
    "name": "市辖区",
    "id": "131101000000"
  }, {
    "city": "衡水市",
    "name": "桃城区",
    "id": "131102000000"
  }, {
    "city": "衡水市",
    "name": "冀州区",
    "id": "131103000000"
  }, {
    "city": "衡水市",
    "name": "枣强县",
    "id": "131121000000"
  }, {
    "city": "衡水市",
    "name": "武邑县",
    "id": "131122000000"
  }, {
    "city": "衡水市",
    "name": "武强县",
    "id": "131123000000"
  }, {
    "city": "衡水市",
    "name": "饶阳县",
    "id": "131124000000"
  }, {
    "city": "衡水市",
    "name": "安平县",
    "id": "131125000000"
  }, {
    "city": "衡水市",
    "name": "故城县",
    "id": "131126000000"
  }, {
    "city": "衡水市",
    "name": "景县",
    "id": "131127000000"
  }, {
    "city": "衡水市",
    "name": "阜城县",
    "id": "131128000000"
  }, {
    "city": "衡水市",
    "name": "河北衡水高新技术产业开发区",
    "id": "131171000000"
  }, {
    "city": "衡水市",
    "name": "衡水滨湖新区",
    "id": "131172000000"
  }, {
    "city": "衡水市",
    "name": "深州市",
    "id": "131182000000"
  }],
  "140100000000": [{
    "city": "太原市",
    "name": "市辖区",
    "id": "140101000000"
  }, {
    "city": "太原市",
    "name": "小店区",
    "id": "140105000000"
  }, {
    "city": "太原市",
    "name": "迎泽区",
    "id": "140106000000"
  }, {
    "city": "太原市",
    "name": "杏花岭区",
    "id": "140107000000"
  }, {
    "city": "太原市",
    "name": "尖草坪区",
    "id": "140108000000"
  }, {
    "city": "太原市",
    "name": "万柏林区",
    "id": "140109000000"
  }, {
    "city": "太原市",
    "name": "晋源区",
    "id": "140110000000"
  }, {
    "city": "太原市",
    "name": "清徐县",
    "id": "140121000000"
  }, {
    "city": "太原市",
    "name": "阳曲县",
    "id": "140122000000"
  }, {
    "city": "太原市",
    "name": "娄烦县",
    "id": "140123000000"
  }, {
    "city": "太原市",
    "name": "山西转型综合改革示范区",
    "id": "140171000000"
  }, {
    "city": "太原市",
    "name": "古交市",
    "id": "140181000000"
  }],
  "140200000000": [{
    "city": "大同市",
    "name": "市辖区",
    "id": "140201000000"
  }, {
    "city": "大同市",
    "name": "新荣区",
    "id": "140212000000"
  }, {
    "city": "大同市",
    "name": "平城区",
    "id": "140213000000"
  }, {
    "city": "大同市",
    "name": "云冈区",
    "id": "140214000000"
  }, {
    "city": "大同市",
    "name": "云州区",
    "id": "140215000000"
  }, {
    "city": "大同市",
    "name": "阳高县",
    "id": "140221000000"
  }, {
    "city": "大同市",
    "name": "天镇县",
    "id": "140222000000"
  }, {
    "city": "大同市",
    "name": "广灵县",
    "id": "140223000000"
  }, {
    "city": "大同市",
    "name": "灵丘县",
    "id": "140224000000"
  }, {
    "city": "大同市",
    "name": "浑源县",
    "id": "140225000000"
  }, {
    "city": "大同市",
    "name": "左云县",
    "id": "140226000000"
  }, {
    "city": "大同市",
    "name": "山西大同经济开发区",
    "id": "140271000000"
  }],
  "140300000000": [{
    "city": "阳泉市",
    "name": "市辖区",
    "id": "140301000000"
  }, {
    "city": "阳泉市",
    "name": "城区",
    "id": "140302000000"
  }, {
    "city": "阳泉市",
    "name": "矿区",
    "id": "140303000000"
  }, {
    "city": "阳泉市",
    "name": "郊区",
    "id": "140311000000"
  }, {
    "city": "阳泉市",
    "name": "平定县",
    "id": "140321000000"
  }, {
    "city": "阳泉市",
    "name": "盂县",
    "id": "140322000000"
  }],
  "140400000000": [{
    "city": "长治市",
    "name": "市辖区",
    "id": "140401000000"
  }, {
    "city": "长治市",
    "name": "潞州区",
    "id": "140412000000"
  }, {
    "city": "长治市",
    "name": "上党区",
    "id": "140413000000"
  }, {
    "city": "长治市",
    "name": "屯留区",
    "id": "140414000000"
  }, {
    "city": "长治市",
    "name": "潞城区",
    "id": "140415000000"
  }, {
    "city": "长治市",
    "name": "襄垣县",
    "id": "140423000000"
  }, {
    "city": "长治市",
    "name": "平顺县",
    "id": "140425000000"
  }, {
    "city": "长治市",
    "name": "黎城县",
    "id": "140426000000"
  }, {
    "city": "长治市",
    "name": "壶关县",
    "id": "140427000000"
  }, {
    "city": "长治市",
    "name": "长子县",
    "id": "140428000000"
  }, {
    "city": "长治市",
    "name": "武乡县",
    "id": "140429000000"
  }, {
    "city": "长治市",
    "name": "沁县",
    "id": "140430000000"
  }, {
    "city": "长治市",
    "name": "沁源县",
    "id": "140431000000"
  }, {
    "city": "长治市",
    "name": "山西长治高新技术产业园区",
    "id": "140471000000"
  }],
  "140500000000": [{
    "city": "晋城市",
    "name": "市辖区",
    "id": "140501000000"
  }, {
    "city": "晋城市",
    "name": "城区",
    "id": "140502000000"
  }, {
    "city": "晋城市",
    "name": "沁水县",
    "id": "140521000000"
  }, {
    "city": "晋城市",
    "name": "阳城县",
    "id": "140522000000"
  }, {
    "city": "晋城市",
    "name": "陵川县",
    "id": "140524000000"
  }, {
    "city": "晋城市",
    "name": "泽州县",
    "id": "140525000000"
  }, {
    "city": "晋城市",
    "name": "高平市",
    "id": "140581000000"
  }],
  "140600000000": [{
    "city": "朔州市",
    "name": "市辖区",
    "id": "140601000000"
  }, {
    "city": "朔州市",
    "name": "朔城区",
    "id": "140602000000"
  }, {
    "city": "朔州市",
    "name": "平鲁区",
    "id": "140603000000"
  }, {
    "city": "朔州市",
    "name": "山阴县",
    "id": "140621000000"
  }, {
    "city": "朔州市",
    "name": "应县",
    "id": "140622000000"
  }, {
    "city": "朔州市",
    "name": "右玉县",
    "id": "140623000000"
  }, {
    "city": "朔州市",
    "name": "山西朔州经济开发区",
    "id": "140671000000"
  }, {
    "city": "朔州市",
    "name": "怀仁市",
    "id": "140681000000"
  }],
  "140700000000": [{
    "city": "晋中市",
    "name": "市辖区",
    "id": "140701000000"
  }, {
    "city": "晋中市",
    "name": "榆次区",
    "id": "140702000000"
  }, {
    "city": "晋中市",
    "name": "榆社县",
    "id": "140721000000"
  }, {
    "city": "晋中市",
    "name": "左权县",
    "id": "140722000000"
  }, {
    "city": "晋中市",
    "name": "和顺县",
    "id": "140723000000"
  }, {
    "city": "晋中市",
    "name": "昔阳县",
    "id": "140724000000"
  }, {
    "city": "晋中市",
    "name": "寿阳县",
    "id": "140725000000"
  }, {
    "city": "晋中市",
    "name": "太谷县",
    "id": "140726000000"
  }, {
    "city": "晋中市",
    "name": "祁县",
    "id": "140727000000"
  }, {
    "city": "晋中市",
    "name": "平遥县",
    "id": "140728000000"
  }, {
    "city": "晋中市",
    "name": "灵石县",
    "id": "140729000000"
  }, {
    "city": "晋中市",
    "name": "介休市",
    "id": "140781000000"
  }],
  "140800000000": [{
    "city": "运城市",
    "name": "市辖区",
    "id": "140801000000"
  }, {
    "city": "运城市",
    "name": "盐湖区",
    "id": "140802000000"
  }, {
    "city": "运城市",
    "name": "临猗县",
    "id": "140821000000"
  }, {
    "city": "运城市",
    "name": "万荣县",
    "id": "140822000000"
  }, {
    "city": "运城市",
    "name": "闻喜县",
    "id": "140823000000"
  }, {
    "city": "运城市",
    "name": "稷山县",
    "id": "140824000000"
  }, {
    "city": "运城市",
    "name": "新绛县",
    "id": "140825000000"
  }, {
    "city": "运城市",
    "name": "绛县",
    "id": "140826000000"
  }, {
    "city": "运城市",
    "name": "垣曲县",
    "id": "140827000000"
  }, {
    "city": "运城市",
    "name": "夏县",
    "id": "140828000000"
  }, {
    "city": "运城市",
    "name": "平陆县",
    "id": "140829000000"
  }, {
    "city": "运城市",
    "name": "芮城县",
    "id": "140830000000"
  }, {
    "city": "运城市",
    "name": "永济市",
    "id": "140881000000"
  }, {
    "city": "运城市",
    "name": "河津市",
    "id": "140882000000"
  }],
  "140900000000": [{
    "city": "忻州市",
    "name": "市辖区",
    "id": "140901000000"
  }, {
    "city": "忻州市",
    "name": "忻府区",
    "id": "140902000000"
  }, {
    "city": "忻州市",
    "name": "定襄县",
    "id": "140921000000"
  }, {
    "city": "忻州市",
    "name": "五台县",
    "id": "140922000000"
  }, {
    "city": "忻州市",
    "name": "代县",
    "id": "140923000000"
  }, {
    "city": "忻州市",
    "name": "繁峙县",
    "id": "140924000000"
  }, {
    "city": "忻州市",
    "name": "宁武县",
    "id": "140925000000"
  }, {
    "city": "忻州市",
    "name": "静乐县",
    "id": "140926000000"
  }, {
    "city": "忻州市",
    "name": "神池县",
    "id": "140927000000"
  }, {
    "city": "忻州市",
    "name": "五寨县",
    "id": "140928000000"
  }, {
    "city": "忻州市",
    "name": "岢岚县",
    "id": "140929000000"
  }, {
    "city": "忻州市",
    "name": "河曲县",
    "id": "140930000000"
  }, {
    "city": "忻州市",
    "name": "保德县",
    "id": "140931000000"
  }, {
    "city": "忻州市",
    "name": "偏关县",
    "id": "140932000000"
  }, {
    "city": "忻州市",
    "name": "五台山风景名胜区",
    "id": "140971000000"
  }, {
    "city": "忻州市",
    "name": "原平市",
    "id": "140981000000"
  }],
  "141000000000": [{
    "city": "临汾市",
    "name": "市辖区",
    "id": "141001000000"
  }, {
    "city": "临汾市",
    "name": "尧都区",
    "id": "141002000000"
  }, {
    "city": "临汾市",
    "name": "曲沃县",
    "id": "141021000000"
  }, {
    "city": "临汾市",
    "name": "翼城县",
    "id": "141022000000"
  }, {
    "city": "临汾市",
    "name": "襄汾县",
    "id": "141023000000"
  }, {
    "city": "临汾市",
    "name": "洪洞县",
    "id": "141024000000"
  }, {
    "city": "临汾市",
    "name": "古县",
    "id": "141025000000"
  }, {
    "city": "临汾市",
    "name": "安泽县",
    "id": "141026000000"
  }, {
    "city": "临汾市",
    "name": "浮山县",
    "id": "141027000000"
  }, {
    "city": "临汾市",
    "name": "吉县",
    "id": "141028000000"
  }, {
    "city": "临汾市",
    "name": "乡宁县",
    "id": "141029000000"
  }, {
    "city": "临汾市",
    "name": "大宁县",
    "id": "141030000000"
  }, {
    "city": "临汾市",
    "name": "隰县",
    "id": "141031000000"
  }, {
    "city": "临汾市",
    "name": "永和县",
    "id": "141032000000"
  }, {
    "city": "临汾市",
    "name": "蒲县",
    "id": "141033000000"
  }, {
    "city": "临汾市",
    "name": "汾西县",
    "id": "141034000000"
  }, {
    "city": "临汾市",
    "name": "侯马市",
    "id": "141081000000"
  }, {
    "city": "临汾市",
    "name": "霍州市",
    "id": "141082000000"
  }],
  "141100000000": [{
    "city": "吕梁市",
    "name": "市辖区",
    "id": "141101000000"
  }, {
    "city": "吕梁市",
    "name": "离石区",
    "id": "141102000000"
  }, {
    "city": "吕梁市",
    "name": "文水县",
    "id": "141121000000"
  }, {
    "city": "吕梁市",
    "name": "交城县",
    "id": "141122000000"
  }, {
    "city": "吕梁市",
    "name": "兴县",
    "id": "141123000000"
  }, {
    "city": "吕梁市",
    "name": "临县",
    "id": "141124000000"
  }, {
    "city": "吕梁市",
    "name": "柳林县",
    "id": "141125000000"
  }, {
    "city": "吕梁市",
    "name": "石楼县",
    "id": "141126000000"
  }, {
    "city": "吕梁市",
    "name": "岚县",
    "id": "141127000000"
  }, {
    "city": "吕梁市",
    "name": "方山县",
    "id": "141128000000"
  }, {
    "city": "吕梁市",
    "name": "中阳县",
    "id": "141129000000"
  }, {
    "city": "吕梁市",
    "name": "交口县",
    "id": "141130000000"
  }, {
    "city": "吕梁市",
    "name": "孝义市",
    "id": "141181000000"
  }, {
    "city": "吕梁市",
    "name": "汾阳市",
    "id": "141182000000"
  }],
  "150100000000": [{
    "city": "呼和浩特市",
    "name": "市辖区",
    "id": "150101000000"
  }, {
    "city": "呼和浩特市",
    "name": "新城区",
    "id": "150102000000"
  }, {
    "city": "呼和浩特市",
    "name": "回民区",
    "id": "150103000000"
  }, {
    "city": "呼和浩特市",
    "name": "玉泉区",
    "id": "150104000000"
  }, {
    "city": "呼和浩特市",
    "name": "赛罕区",
    "id": "150105000000"
  }, {
    "city": "呼和浩特市",
    "name": "土默特左旗",
    "id": "150121000000"
  }, {
    "city": "呼和浩特市",
    "name": "托克托县",
    "id": "150122000000"
  }, {
    "city": "呼和浩特市",
    "name": "和林格尔县",
    "id": "150123000000"
  }, {
    "city": "呼和浩特市",
    "name": "清水河县",
    "id": "150124000000"
  }, {
    "city": "呼和浩特市",
    "name": "武川县",
    "id": "150125000000"
  }, {
    "city": "呼和浩特市",
    "name": "呼和浩特金海工业园区",
    "id": "150171000000"
  }, {
    "city": "呼和浩特市",
    "name": "呼和浩特经济技术开发区",
    "id": "150172000000"
  }],
  "150200000000": [{
    "city": "包头市",
    "name": "市辖区",
    "id": "150201000000"
  }, {
    "city": "包头市",
    "name": "东河区",
    "id": "150202000000"
  }, {
    "city": "包头市",
    "name": "昆都仑区",
    "id": "150203000000"
  }, {
    "city": "包头市",
    "name": "青山区",
    "id": "150204000000"
  }, {
    "city": "包头市",
    "name": "石拐区",
    "id": "150205000000"
  }, {
    "city": "包头市",
    "name": "白云鄂博矿区",
    "id": "150206000000"
  }, {
    "city": "包头市",
    "name": "九原区",
    "id": "150207000000"
  }, {
    "city": "包头市",
    "name": "土默特右旗",
    "id": "150221000000"
  }, {
    "city": "包头市",
    "name": "固阳县",
    "id": "150222000000"
  }, {
    "city": "包头市",
    "name": "达尔罕茂明安联合旗",
    "id": "150223000000"
  }, {
    "city": "包头市",
    "name": "包头稀土高新技术产业开发区",
    "id": "150271000000"
  }],
  "150300000000": [{
    "city": "乌海市",
    "name": "市辖区",
    "id": "150301000000"
  }, {
    "city": "乌海市",
    "name": "海勃湾区",
    "id": "150302000000"
  }, {
    "city": "乌海市",
    "name": "海南区",
    "id": "150303000000"
  }, {
    "city": "乌海市",
    "name": "乌达区",
    "id": "150304000000"
  }],
  "150400000000": [{
    "city": "赤峰市",
    "name": "市辖区",
    "id": "150401000000"
  }, {
    "city": "赤峰市",
    "name": "红山区",
    "id": "150402000000"
  }, {
    "city": "赤峰市",
    "name": "元宝山区",
    "id": "150403000000"
  }, {
    "city": "赤峰市",
    "name": "松山区",
    "id": "150404000000"
  }, {
    "city": "赤峰市",
    "name": "阿鲁科尔沁旗",
    "id": "150421000000"
  }, {
    "city": "赤峰市",
    "name": "巴林左旗",
    "id": "150422000000"
  }, {
    "city": "赤峰市",
    "name": "巴林右旗",
    "id": "150423000000"
  }, {
    "city": "赤峰市",
    "name": "林西县",
    "id": "150424000000"
  }, {
    "city": "赤峰市",
    "name": "克什克腾旗",
    "id": "150425000000"
  }, {
    "city": "赤峰市",
    "name": "翁牛特旗",
    "id": "150426000000"
  }, {
    "city": "赤峰市",
    "name": "喀喇沁旗",
    "id": "150428000000"
  }, {
    "city": "赤峰市",
    "name": "宁城县",
    "id": "150429000000"
  }, {
    "city": "赤峰市",
    "name": "敖汉旗",
    "id": "150430000000"
  }],
  "150500000000": [{
    "city": "通辽市",
    "name": "市辖区",
    "id": "150501000000"
  }, {
    "city": "通辽市",
    "name": "科尔沁区",
    "id": "150502000000"
  }, {
    "city": "通辽市",
    "name": "科尔沁左翼中旗",
    "id": "150521000000"
  }, {
    "city": "通辽市",
    "name": "科尔沁左翼后旗",
    "id": "150522000000"
  }, {
    "city": "通辽市",
    "name": "开鲁县",
    "id": "150523000000"
  }, {
    "city": "通辽市",
    "name": "库伦旗",
    "id": "150524000000"
  }, {
    "city": "通辽市",
    "name": "奈曼旗",
    "id": "150525000000"
  }, {
    "city": "通辽市",
    "name": "扎鲁特旗",
    "id": "150526000000"
  }, {
    "city": "通辽市",
    "name": "通辽经济技术开发区",
    "id": "150571000000"
  }, {
    "city": "通辽市",
    "name": "霍林郭勒市",
    "id": "150581000000"
  }],
  "150600000000": [{
    "city": "鄂尔多斯市",
    "name": "市辖区",
    "id": "150601000000"
  }, {
    "city": "鄂尔多斯市",
    "name": "东胜区",
    "id": "150602000000"
  }, {
    "city": "鄂尔多斯市",
    "name": "康巴什区",
    "id": "150603000000"
  }, {
    "city": "鄂尔多斯市",
    "name": "达拉特旗",
    "id": "150621000000"
  }, {
    "city": "鄂尔多斯市",
    "name": "准格尔旗",
    "id": "150622000000"
  }, {
    "city": "鄂尔多斯市",
    "name": "鄂托克前旗",
    "id": "150623000000"
  }, {
    "city": "鄂尔多斯市",
    "name": "鄂托克旗",
    "id": "150624000000"
  }, {
    "city": "鄂尔多斯市",
    "name": "杭锦旗",
    "id": "150625000000"
  }, {
    "city": "鄂尔多斯市",
    "name": "乌审旗",
    "id": "150626000000"
  }, {
    "city": "鄂尔多斯市",
    "name": "伊金霍洛旗",
    "id": "150627000000"
  }],
  "150700000000": [{
    "city": "呼伦贝尔市",
    "name": "市辖区",
    "id": "150701000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "海拉尔区",
    "id": "150702000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "扎赉诺尔区",
    "id": "150703000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "阿荣旗",
    "id": "150721000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "莫力达瓦达斡尔族自治旗",
    "id": "150722000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "鄂伦春自治旗",
    "id": "150723000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "鄂温克族自治旗",
    "id": "150724000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "陈巴尔虎旗",
    "id": "150725000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "新巴尔虎左旗",
    "id": "150726000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "新巴尔虎右旗",
    "id": "150727000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "满洲里市",
    "id": "150781000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "牙克石市",
    "id": "150782000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "扎兰屯市",
    "id": "150783000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "额尔古纳市",
    "id": "150784000000"
  }, {
    "city": "呼伦贝尔市",
    "name": "根河市",
    "id": "150785000000"
  }],
  "150800000000": [{
    "city": "巴彦淖尔市",
    "name": "市辖区",
    "id": "150801000000"
  }, {
    "city": "巴彦淖尔市",
    "name": "临河区",
    "id": "150802000000"
  }, {
    "city": "巴彦淖尔市",
    "name": "五原县",
    "id": "150821000000"
  }, {
    "city": "巴彦淖尔市",
    "name": "磴口县",
    "id": "150822000000"
  }, {
    "city": "巴彦淖尔市",
    "name": "乌拉特前旗",
    "id": "150823000000"
  }, {
    "city": "巴彦淖尔市",
    "name": "乌拉特中旗",
    "id": "150824000000"
  }, {
    "city": "巴彦淖尔市",
    "name": "乌拉特后旗",
    "id": "150825000000"
  }, {
    "city": "巴彦淖尔市",
    "name": "杭锦后旗",
    "id": "150826000000"
  }],
  "150900000000": [{
    "city": "乌兰察布市",
    "name": "市辖区",
    "id": "150901000000"
  }, {
    "city": "乌兰察布市",
    "name": "集宁区",
    "id": "150902000000"
  }, {
    "city": "乌兰察布市",
    "name": "卓资县",
    "id": "150921000000"
  }, {
    "city": "乌兰察布市",
    "name": "化德县",
    "id": "150922000000"
  }, {
    "city": "乌兰察布市",
    "name": "商都县",
    "id": "150923000000"
  }, {
    "city": "乌兰察布市",
    "name": "兴和县",
    "id": "150924000000"
  }, {
    "city": "乌兰察布市",
    "name": "凉城县",
    "id": "150925000000"
  }, {
    "city": "乌兰察布市",
    "name": "察哈尔右翼前旗",
    "id": "150926000000"
  }, {
    "city": "乌兰察布市",
    "name": "察哈尔右翼中旗",
    "id": "150927000000"
  }, {
    "city": "乌兰察布市",
    "name": "察哈尔右翼后旗",
    "id": "150928000000"
  }, {
    "city": "乌兰察布市",
    "name": "四子王旗",
    "id": "150929000000"
  }, {
    "city": "乌兰察布市",
    "name": "丰镇市",
    "id": "150981000000"
  }],
  "152200000000": [{
    "city": "兴安盟",
    "name": "乌兰浩特市",
    "id": "152201000000"
  }, {
    "city": "兴安盟",
    "name": "阿尔山市",
    "id": "152202000000"
  }, {
    "city": "兴安盟",
    "name": "科尔沁右翼前旗",
    "id": "152221000000"
  }, {
    "city": "兴安盟",
    "name": "科尔沁右翼中旗",
    "id": "152222000000"
  }, {
    "city": "兴安盟",
    "name": "扎赉特旗",
    "id": "152223000000"
  }, {
    "city": "兴安盟",
    "name": "突泉县",
    "id": "152224000000"
  }],
  "152500000000": [{
    "city": "锡林郭勒盟",
    "name": "二连浩特市",
    "id": "152501000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "锡林浩特市",
    "id": "152502000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "阿巴嘎旗",
    "id": "152522000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "苏尼特左旗",
    "id": "152523000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "苏尼特右旗",
    "id": "152524000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "东乌珠穆沁旗",
    "id": "152525000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "西乌珠穆沁旗",
    "id": "152526000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "太仆寺旗",
    "id": "152527000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "镶黄旗",
    "id": "152528000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "正镶白旗",
    "id": "152529000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "正蓝旗",
    "id": "152530000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "多伦县",
    "id": "152531000000"
  }, {
    "city": "锡林郭勒盟",
    "name": "乌拉盖管委会",
    "id": "152571000000"
  }],
  "152900000000": [{
    "city": "阿拉善盟",
    "name": "阿拉善左旗",
    "id": "152921000000"
  }, {
    "city": "阿拉善盟",
    "name": "阿拉善右旗",
    "id": "152922000000"
  }, {
    "city": "阿拉善盟",
    "name": "额济纳旗",
    "id": "152923000000"
  }, {
    "city": "阿拉善盟",
    "name": "内蒙古阿拉善经济开发区",
    "id": "152971000000"
  }],
  "210100000000": [{
    "city": "沈阳市",
    "name": "市辖区",
    "id": "210101000000"
  }, {
    "city": "沈阳市",
    "name": "和平区",
    "id": "210102000000"
  }, {
    "city": "沈阳市",
    "name": "沈河区",
    "id": "210103000000"
  }, {
    "city": "沈阳市",
    "name": "大东区",
    "id": "210104000000"
  }, {
    "city": "沈阳市",
    "name": "皇姑区",
    "id": "210105000000"
  }, {
    "city": "沈阳市",
    "name": "铁西区",
    "id": "210106000000"
  }, {
    "city": "沈阳市",
    "name": "苏家屯区",
    "id": "210111000000"
  }, {
    "city": "沈阳市",
    "name": "浑南区",
    "id": "210112000000"
  }, {
    "city": "沈阳市",
    "name": "沈北新区",
    "id": "210113000000"
  }, {
    "city": "沈阳市",
    "name": "于洪区",
    "id": "210114000000"
  }, {
    "city": "沈阳市",
    "name": "辽中区",
    "id": "210115000000"
  }, {
    "city": "沈阳市",
    "name": "康平县",
    "id": "210123000000"
  }, {
    "city": "沈阳市",
    "name": "法库县",
    "id": "210124000000"
  }, {
    "city": "沈阳市",
    "name": "新民市",
    "id": "210181000000"
  }],
  "210200000000": [{
    "city": "大连市",
    "name": "市辖区",
    "id": "210201000000"
  }, {
    "city": "大连市",
    "name": "中山区",
    "id": "210202000000"
  }, {
    "city": "大连市",
    "name": "西岗区",
    "id": "210203000000"
  }, {
    "city": "大连市",
    "name": "沙河口区",
    "id": "210204000000"
  }, {
    "city": "大连市",
    "name": "甘井子区",
    "id": "210211000000"
  }, {
    "city": "大连市",
    "name": "旅顺口区",
    "id": "210212000000"
  }, {
    "city": "大连市",
    "name": "金州区",
    "id": "210213000000"
  }, {
    "city": "大连市",
    "name": "普兰店区",
    "id": "210214000000"
  }, {
    "city": "大连市",
    "name": "长海县",
    "id": "210224000000"
  }, {
    "city": "大连市",
    "name": "瓦房店市",
    "id": "210281000000"
  }, {
    "city": "大连市",
    "name": "庄河市",
    "id": "210283000000"
  }],
  "210300000000": [{
    "city": "鞍山市",
    "name": "市辖区",
    "id": "210301000000"
  }, {
    "city": "鞍山市",
    "name": "铁东区",
    "id": "210302000000"
  }, {
    "city": "鞍山市",
    "name": "铁西区",
    "id": "210303000000"
  }, {
    "city": "鞍山市",
    "name": "立山区",
    "id": "210304000000"
  }, {
    "city": "鞍山市",
    "name": "千山区",
    "id": "210311000000"
  }, {
    "city": "鞍山市",
    "name": "台安县",
    "id": "210321000000"
  }, {
    "city": "鞍山市",
    "name": "岫岩满族自治县",
    "id": "210323000000"
  }, {
    "city": "鞍山市",
    "name": "海城市",
    "id": "210381000000"
  }],
  "210400000000": [{
    "city": "抚顺市",
    "name": "市辖区",
    "id": "210401000000"
  }, {
    "city": "抚顺市",
    "name": "新抚区",
    "id": "210402000000"
  }, {
    "city": "抚顺市",
    "name": "东洲区",
    "id": "210403000000"
  }, {
    "city": "抚顺市",
    "name": "望花区",
    "id": "210404000000"
  }, {
    "city": "抚顺市",
    "name": "顺城区",
    "id": "210411000000"
  }, {
    "city": "抚顺市",
    "name": "抚顺县",
    "id": "210421000000"
  }, {
    "city": "抚顺市",
    "name": "新宾满族自治县",
    "id": "210422000000"
  }, {
    "city": "抚顺市",
    "name": "清原满族自治县",
    "id": "210423000000"
  }],
  "210500000000": [{
    "city": "本溪市",
    "name": "市辖区",
    "id": "210501000000"
  }, {
    "city": "本溪市",
    "name": "平山区",
    "id": "210502000000"
  }, {
    "city": "本溪市",
    "name": "溪湖区",
    "id": "210503000000"
  }, {
    "city": "本溪市",
    "name": "明山区",
    "id": "210504000000"
  }, {
    "city": "本溪市",
    "name": "南芬区",
    "id": "210505000000"
  }, {
    "city": "本溪市",
    "name": "本溪满族自治县",
    "id": "210521000000"
  }, {
    "city": "本溪市",
    "name": "桓仁满族自治县",
    "id": "210522000000"
  }],
  "210600000000": [{
    "city": "丹东市",
    "name": "市辖区",
    "id": "210601000000"
  }, {
    "city": "丹东市",
    "name": "元宝区",
    "id": "210602000000"
  }, {
    "city": "丹东市",
    "name": "振兴区",
    "id": "210603000000"
  }, {
    "city": "丹东市",
    "name": "振安区",
    "id": "210604000000"
  }, {
    "city": "丹东市",
    "name": "宽甸满族自治县",
    "id": "210624000000"
  }, {
    "city": "丹东市",
    "name": "东港市",
    "id": "210681000000"
  }, {
    "city": "丹东市",
    "name": "凤城市",
    "id": "210682000000"
  }],
  "210700000000": [{
    "city": "锦州市",
    "name": "市辖区",
    "id": "210701000000"
  }, {
    "city": "锦州市",
    "name": "古塔区",
    "id": "210702000000"
  }, {
    "city": "锦州市",
    "name": "凌河区",
    "id": "210703000000"
  }, {
    "city": "锦州市",
    "name": "太和区",
    "id": "210711000000"
  }, {
    "city": "锦州市",
    "name": "黑山县",
    "id": "210726000000"
  }, {
    "city": "锦州市",
    "name": "义县",
    "id": "210727000000"
  }, {
    "city": "锦州市",
    "name": "凌海市",
    "id": "210781000000"
  }, {
    "city": "锦州市",
    "name": "北镇市",
    "id": "210782000000"
  }],
  "210800000000": [{
    "city": "营口市",
    "name": "市辖区",
    "id": "210801000000"
  }, {
    "city": "营口市",
    "name": "站前区",
    "id": "210802000000"
  }, {
    "city": "营口市",
    "name": "西市区",
    "id": "210803000000"
  }, {
    "city": "营口市",
    "name": "鲅鱼圈区",
    "id": "210804000000"
  }, {
    "city": "营口市",
    "name": "老边区",
    "id": "210811000000"
  }, {
    "city": "营口市",
    "name": "盖州市",
    "id": "210881000000"
  }, {
    "city": "营口市",
    "name": "大石桥市",
    "id": "210882000000"
  }],
  "210900000000": [{
    "city": "阜新市",
    "name": "市辖区",
    "id": "210901000000"
  }, {
    "city": "阜新市",
    "name": "海州区",
    "id": "210902000000"
  }, {
    "city": "阜新市",
    "name": "新邱区",
    "id": "210903000000"
  }, {
    "city": "阜新市",
    "name": "太平区",
    "id": "210904000000"
  }, {
    "city": "阜新市",
    "name": "清河门区",
    "id": "210905000000"
  }, {
    "city": "阜新市",
    "name": "细河区",
    "id": "210911000000"
  }, {
    "city": "阜新市",
    "name": "阜新蒙古族自治县",
    "id": "210921000000"
  }, {
    "city": "阜新市",
    "name": "彰武县",
    "id": "210922000000"
  }],
  "211000000000": [{
    "city": "辽阳市",
    "name": "市辖区",
    "id": "211001000000"
  }, {
    "city": "辽阳市",
    "name": "白塔区",
    "id": "211002000000"
  }, {
    "city": "辽阳市",
    "name": "文圣区",
    "id": "211003000000"
  }, {
    "city": "辽阳市",
    "name": "宏伟区",
    "id": "211004000000"
  }, {
    "city": "辽阳市",
    "name": "弓长岭区",
    "id": "211005000000"
  }, {
    "city": "辽阳市",
    "name": "太子河区",
    "id": "211011000000"
  }, {
    "city": "辽阳市",
    "name": "辽阳县",
    "id": "211021000000"
  }, {
    "city": "辽阳市",
    "name": "灯塔市",
    "id": "211081000000"
  }],
  "211100000000": [{
    "city": "盘锦市",
    "name": "市辖区",
    "id": "211101000000"
  }, {
    "city": "盘锦市",
    "name": "双台子区",
    "id": "211102000000"
  }, {
    "city": "盘锦市",
    "name": "兴隆台区",
    "id": "211103000000"
  }, {
    "city": "盘锦市",
    "name": "大洼区",
    "id": "211104000000"
  }, {
    "city": "盘锦市",
    "name": "盘山县",
    "id": "211122000000"
  }],
  "211200000000": [{
    "city": "铁岭市",
    "name": "市辖区",
    "id": "211201000000"
  }, {
    "city": "铁岭市",
    "name": "银州区",
    "id": "211202000000"
  }, {
    "city": "铁岭市",
    "name": "清河区",
    "id": "211204000000"
  }, {
    "city": "铁岭市",
    "name": "铁岭县",
    "id": "211221000000"
  }, {
    "city": "铁岭市",
    "name": "西丰县",
    "id": "211223000000"
  }, {
    "city": "铁岭市",
    "name": "昌图县",
    "id": "211224000000"
  }, {
    "city": "铁岭市",
    "name": "调兵山市",
    "id": "211281000000"
  }, {
    "city": "铁岭市",
    "name": "开原市",
    "id": "211282000000"
  }],
  "211300000000": [{
    "city": "朝阳市",
    "name": "市辖区",
    "id": "211301000000"
  }, {
    "city": "朝阳市",
    "name": "双塔区",
    "id": "211302000000"
  }, {
    "city": "朝阳市",
    "name": "龙城区",
    "id": "211303000000"
  }, {
    "city": "朝阳市",
    "name": "朝阳县",
    "id": "211321000000"
  }, {
    "city": "朝阳市",
    "name": "建平县",
    "id": "211322000000"
  }, {
    "city": "朝阳市",
    "name": "喀喇沁左翼蒙古族自治县",
    "id": "211324000000"
  }, {
    "city": "朝阳市",
    "name": "北票市",
    "id": "211381000000"
  }, {
    "city": "朝阳市",
    "name": "凌源市",
    "id": "211382000000"
  }],
  "211400000000": [{
    "city": "葫芦岛市",
    "name": "市辖区",
    "id": "211401000000"
  }, {
    "city": "葫芦岛市",
    "name": "连山区",
    "id": "211402000000"
  }, {
    "city": "葫芦岛市",
    "name": "龙港区",
    "id": "211403000000"
  }, {
    "city": "葫芦岛市",
    "name": "南票区",
    "id": "211404000000"
  }, {
    "city": "葫芦岛市",
    "name": "绥中县",
    "id": "211421000000"
  }, {
    "city": "葫芦岛市",
    "name": "建昌县",
    "id": "211422000000"
  }, {
    "city": "葫芦岛市",
    "name": "兴城市",
    "id": "211481000000"
  }],
  "220100000000": [{
    "city": "长春市",
    "name": "市辖区",
    "id": "220101000000"
  }, {
    "city": "长春市",
    "name": "南关区",
    "id": "220102000000"
  }, {
    "city": "长春市",
    "name": "宽城区",
    "id": "220103000000"
  }, {
    "city": "长春市",
    "name": "朝阳区",
    "id": "220104000000"
  }, {
    "city": "长春市",
    "name": "二道区",
    "id": "220105000000"
  }, {
    "city": "长春市",
    "name": "绿园区",
    "id": "220106000000"
  }, {
    "city": "长春市",
    "name": "双阳区",
    "id": "220112000000"
  }, {
    "city": "长春市",
    "name": "九台区",
    "id": "220113000000"
  }, {
    "city": "长春市",
    "name": "农安县",
    "id": "220122000000"
  }, {
    "city": "长春市",
    "name": "长春经济技术开发区",
    "id": "220171000000"
  }, {
    "city": "长春市",
    "name": "长春净月高新技术产业开发区",
    "id": "220172000000"
  }, {
    "city": "长春市",
    "name": "长春高新技术产业开发区",
    "id": "220173000000"
  }, {
    "city": "长春市",
    "name": "长春汽车经济技术开发区",
    "id": "220174000000"
  }, {
    "city": "长春市",
    "name": "榆树市",
    "id": "220182000000"
  }, {
    "city": "长春市",
    "name": "德惠市",
    "id": "220183000000"
  }],
  "220200000000": [{
    "city": "吉林市",
    "name": "市辖区",
    "id": "220201000000"
  }, {
    "city": "吉林市",
    "name": "昌邑区",
    "id": "220202000000"
  }, {
    "city": "吉林市",
    "name": "龙潭区",
    "id": "220203000000"
  }, {
    "city": "吉林市",
    "name": "船营区",
    "id": "220204000000"
  }, {
    "city": "吉林市",
    "name": "丰满区",
    "id": "220211000000"
  }, {
    "city": "吉林市",
    "name": "永吉县",
    "id": "220221000000"
  }, {
    "city": "吉林市",
    "name": "吉林经济开发区",
    "id": "220271000000"
  }, {
    "city": "吉林市",
    "name": "吉林高新技术产业开发区",
    "id": "220272000000"
  }, {
    "city": "吉林市",
    "name": "吉林中国新加坡食品区",
    "id": "220273000000"
  }, {
    "city": "吉林市",
    "name": "蛟河市",
    "id": "220281000000"
  }, {
    "city": "吉林市",
    "name": "桦甸市",
    "id": "220282000000"
  }, {
    "city": "吉林市",
    "name": "舒兰市",
    "id": "220283000000"
  }, {
    "city": "吉林市",
    "name": "磐石市",
    "id": "220284000000"
  }],
  "220300000000": [{
    "city": "四平市",
    "name": "市辖区",
    "id": "220301000000"
  }, {
    "city": "四平市",
    "name": "铁西区",
    "id": "220302000000"
  }, {
    "city": "四平市",
    "name": "铁东区",
    "id": "220303000000"
  }, {
    "city": "四平市",
    "name": "梨树县",
    "id": "220322000000"
  }, {
    "city": "四平市",
    "name": "伊通满族自治县",
    "id": "220323000000"
  }, {
    "city": "四平市",
    "name": "公主岭市",
    "id": "220381000000"
  }, {
    "city": "四平市",
    "name": "双辽市",
    "id": "220382000000"
  }],
  "220400000000": [{
    "city": "辽源市",
    "name": "市辖区",
    "id": "220401000000"
  }, {
    "city": "辽源市",
    "name": "龙山区",
    "id": "220402000000"
  }, {
    "city": "辽源市",
    "name": "西安区",
    "id": "220403000000"
  }, {
    "city": "辽源市",
    "name": "东丰县",
    "id": "220421000000"
  }, {
    "city": "辽源市",
    "name": "东辽县",
    "id": "220422000000"
  }],
  "220500000000": [{
    "city": "通化市",
    "name": "市辖区",
    "id": "220501000000"
  }, {
    "city": "通化市",
    "name": "东昌区",
    "id": "220502000000"
  }, {
    "city": "通化市",
    "name": "二道江区",
    "id": "220503000000"
  }, {
    "city": "通化市",
    "name": "通化县",
    "id": "220521000000"
  }, {
    "city": "通化市",
    "name": "辉南县",
    "id": "220523000000"
  }, {
    "city": "通化市",
    "name": "柳河县",
    "id": "220524000000"
  }, {
    "city": "通化市",
    "name": "梅河口市",
    "id": "220581000000"
  }, {
    "city": "通化市",
    "name": "集安市",
    "id": "220582000000"
  }],
  "220600000000": [{
    "city": "白山市",
    "name": "市辖区",
    "id": "220601000000"
  }, {
    "city": "白山市",
    "name": "浑江区",
    "id": "220602000000"
  }, {
    "city": "白山市",
    "name": "江源区",
    "id": "220605000000"
  }, {
    "city": "白山市",
    "name": "抚松县",
    "id": "220621000000"
  }, {
    "city": "白山市",
    "name": "靖宇县",
    "id": "220622000000"
  }, {
    "city": "白山市",
    "name": "长白朝鲜族自治县",
    "id": "220623000000"
  }, {
    "city": "白山市",
    "name": "临江市",
    "id": "220681000000"
  }],
  "220700000000": [{
    "city": "松原市",
    "name": "市辖区",
    "id": "220701000000"
  }, {
    "city": "松原市",
    "name": "宁江区",
    "id": "220702000000"
  }, {
    "city": "松原市",
    "name": "前郭尔罗斯蒙古族自治县",
    "id": "220721000000"
  }, {
    "city": "松原市",
    "name": "长岭县",
    "id": "220722000000"
  }, {
    "city": "松原市",
    "name": "乾安县",
    "id": "220723000000"
  }, {
    "city": "松原市",
    "name": "吉林松原经济开发区",
    "id": "220771000000"
  }, {
    "city": "松原市",
    "name": "扶余市",
    "id": "220781000000"
  }],
  "220800000000": [{
    "city": "白城市",
    "name": "市辖区",
    "id": "220801000000"
  }, {
    "city": "白城市",
    "name": "洮北区",
    "id": "220802000000"
  }, {
    "city": "白城市",
    "name": "镇赉县",
    "id": "220821000000"
  }, {
    "city": "白城市",
    "name": "通榆县",
    "id": "220822000000"
  }, {
    "city": "白城市",
    "name": "吉林白城经济开发区",
    "id": "220871000000"
  }, {
    "city": "白城市",
    "name": "洮南市",
    "id": "220881000000"
  }, {
    "city": "白城市",
    "name": "大安市",
    "id": "220882000000"
  }],
  "222400000000": [{
    "city": "延边朝鲜族自治州",
    "name": "延吉市",
    "id": "222401000000"
  }, {
    "city": "延边朝鲜族自治州",
    "name": "图们市",
    "id": "222402000000"
  }, {
    "city": "延边朝鲜族自治州",
    "name": "敦化市",
    "id": "222403000000"
  }, {
    "city": "延边朝鲜族自治州",
    "name": "珲春市",
    "id": "222404000000"
  }, {
    "city": "延边朝鲜族自治州",
    "name": "龙井市",
    "id": "222405000000"
  }, {
    "city": "延边朝鲜族自治州",
    "name": "和龙市",
    "id": "222406000000"
  }, {
    "city": "延边朝鲜族自治州",
    "name": "汪清县",
    "id": "222424000000"
  }, {
    "city": "延边朝鲜族自治州",
    "name": "安图县",
    "id": "222426000000"
  }],
  "230100000000": [{
    "city": "哈尔滨市",
    "name": "市辖区",
    "id": "230101000000"
  }, {
    "city": "哈尔滨市",
    "name": "道里区",
    "id": "230102000000"
  }, {
    "city": "哈尔滨市",
    "name": "南岗区",
    "id": "230103000000"
  }, {
    "city": "哈尔滨市",
    "name": "道外区",
    "id": "230104000000"
  }, {
    "city": "哈尔滨市",
    "name": "平房区",
    "id": "230108000000"
  }, {
    "city": "哈尔滨市",
    "name": "松北区",
    "id": "230109000000"
  }, {
    "city": "哈尔滨市",
    "name": "香坊区",
    "id": "230110000000"
  }, {
    "city": "哈尔滨市",
    "name": "呼兰区",
    "id": "230111000000"
  }, {
    "city": "哈尔滨市",
    "name": "阿城区",
    "id": "230112000000"
  }, {
    "city": "哈尔滨市",
    "name": "双城区",
    "id": "230113000000"
  }, {
    "city": "哈尔滨市",
    "name": "依兰县",
    "id": "230123000000"
  }, {
    "city": "哈尔滨市",
    "name": "方正县",
    "id": "230124000000"
  }, {
    "city": "哈尔滨市",
    "name": "宾县",
    "id": "230125000000"
  }, {
    "city": "哈尔滨市",
    "name": "巴彦县",
    "id": "230126000000"
  }, {
    "city": "哈尔滨市",
    "name": "木兰县",
    "id": "230127000000"
  }, {
    "city": "哈尔滨市",
    "name": "通河县",
    "id": "230128000000"
  }, {
    "city": "哈尔滨市",
    "name": "延寿县",
    "id": "230129000000"
  }, {
    "city": "哈尔滨市",
    "name": "尚志市",
    "id": "230183000000"
  }, {
    "city": "哈尔滨市",
    "name": "五常市",
    "id": "230184000000"
  }],
  "230200000000": [{
    "city": "齐齐哈尔市",
    "name": "市辖区",
    "id": "230201000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "龙沙区",
    "id": "230202000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "建华区",
    "id": "230203000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "铁锋区",
    "id": "230204000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "昂昂溪区",
    "id": "230205000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "富拉尔基区",
    "id": "230206000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "碾子山区",
    "id": "230207000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "梅里斯达斡尔族区",
    "id": "230208000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "龙江县",
    "id": "230221000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "依安县",
    "id": "230223000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "泰来县",
    "id": "230224000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "甘南县",
    "id": "230225000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "富裕县",
    "id": "230227000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "克山县",
    "id": "230229000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "克东县",
    "id": "230230000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "拜泉县",
    "id": "230231000000"
  }, {
    "city": "齐齐哈尔市",
    "name": "讷河市",
    "id": "230281000000"
  }],
  "230300000000": [{
    "city": "鸡西市",
    "name": "市辖区",
    "id": "230301000000"
  }, {
    "city": "鸡西市",
    "name": "鸡冠区",
    "id": "230302000000"
  }, {
    "city": "鸡西市",
    "name": "恒山区",
    "id": "230303000000"
  }, {
    "city": "鸡西市",
    "name": "滴道区",
    "id": "230304000000"
  }, {
    "city": "鸡西市",
    "name": "梨树区",
    "id": "230305000000"
  }, {
    "city": "鸡西市",
    "name": "城子河区",
    "id": "230306000000"
  }, {
    "city": "鸡西市",
    "name": "麻山区",
    "id": "230307000000"
  }, {
    "city": "鸡西市",
    "name": "鸡东县",
    "id": "230321000000"
  }, {
    "city": "鸡西市",
    "name": "虎林市",
    "id": "230381000000"
  }, {
    "city": "鸡西市",
    "name": "密山市",
    "id": "230382000000"
  }],
  "230400000000": [{
    "city": "鹤岗市",
    "name": "市辖区",
    "id": "230401000000"
  }, {
    "city": "鹤岗市",
    "name": "向阳区",
    "id": "230402000000"
  }, {
    "city": "鹤岗市",
    "name": "工农区",
    "id": "230403000000"
  }, {
    "city": "鹤岗市",
    "name": "南山区",
    "id": "230404000000"
  }, {
    "city": "鹤岗市",
    "name": "兴安区",
    "id": "230405000000"
  }, {
    "city": "鹤岗市",
    "name": "东山区",
    "id": "230406000000"
  }, {
    "city": "鹤岗市",
    "name": "兴山区",
    "id": "230407000000"
  }, {
    "city": "鹤岗市",
    "name": "萝北县",
    "id": "230421000000"
  }, {
    "city": "鹤岗市",
    "name": "绥滨县",
    "id": "230422000000"
  }],
  "230500000000": [{
    "city": "双鸭山市",
    "name": "市辖区",
    "id": "230501000000"
  }, {
    "city": "双鸭山市",
    "name": "尖山区",
    "id": "230502000000"
  }, {
    "city": "双鸭山市",
    "name": "岭东区",
    "id": "230503000000"
  }, {
    "city": "双鸭山市",
    "name": "四方台区",
    "id": "230505000000"
  }, {
    "city": "双鸭山市",
    "name": "宝山区",
    "id": "230506000000"
  }, {
    "city": "双鸭山市",
    "name": "集贤县",
    "id": "230521000000"
  }, {
    "city": "双鸭山市",
    "name": "友谊县",
    "id": "230522000000"
  }, {
    "city": "双鸭山市",
    "name": "宝清县",
    "id": "230523000000"
  }, {
    "city": "双鸭山市",
    "name": "饶河县",
    "id": "230524000000"
  }],
  "230600000000": [{
    "city": "大庆市",
    "name": "市辖区",
    "id": "230601000000"
  }, {
    "city": "大庆市",
    "name": "萨尔图区",
    "id": "230602000000"
  }, {
    "city": "大庆市",
    "name": "龙凤区",
    "id": "230603000000"
  }, {
    "city": "大庆市",
    "name": "让胡路区",
    "id": "230604000000"
  }, {
    "city": "大庆市",
    "name": "红岗区",
    "id": "230605000000"
  }, {
    "city": "大庆市",
    "name": "大同区",
    "id": "230606000000"
  }, {
    "city": "大庆市",
    "name": "肇州县",
    "id": "230621000000"
  }, {
    "city": "大庆市",
    "name": "肇源县",
    "id": "230622000000"
  }, {
    "city": "大庆市",
    "name": "林甸县",
    "id": "230623000000"
  }, {
    "city": "大庆市",
    "name": "杜尔伯特蒙古族自治县",
    "id": "230624000000"
  }, {
    "city": "大庆市",
    "name": "大庆高新技术产业开发区",
    "id": "230671000000"
  }],
  "230700000000": [{
    "city": "伊春市",
    "name": "市辖区",
    "id": "230701000000"
  }, {
    "city": "伊春市",
    "name": "伊春区",
    "id": "230702000000"
  }, {
    "city": "伊春市",
    "name": "南岔区",
    "id": "230703000000"
  }, {
    "city": "伊春市",
    "name": "友好区",
    "id": "230704000000"
  }, {
    "city": "伊春市",
    "name": "西林区",
    "id": "230705000000"
  }, {
    "city": "伊春市",
    "name": "翠峦区",
    "id": "230706000000"
  }, {
    "city": "伊春市",
    "name": "新青区",
    "id": "230707000000"
  }, {
    "city": "伊春市",
    "name": "美溪区",
    "id": "230708000000"
  }, {
    "city": "伊春市",
    "name": "金山屯区",
    "id": "230709000000"
  }, {
    "city": "伊春市",
    "name": "五营区",
    "id": "230710000000"
  }, {
    "city": "伊春市",
    "name": "乌马河区",
    "id": "230711000000"
  }, {
    "city": "伊春市",
    "name": "汤旺河区",
    "id": "230712000000"
  }, {
    "city": "伊春市",
    "name": "带岭区",
    "id": "230713000000"
  }, {
    "city": "伊春市",
    "name": "乌伊岭区",
    "id": "230714000000"
  }, {
    "city": "伊春市",
    "name": "红星区",
    "id": "230715000000"
  }, {
    "city": "伊春市",
    "name": "上甘岭区",
    "id": "230716000000"
  }, {
    "city": "伊春市",
    "name": "嘉荫县",
    "id": "230722000000"
  }, {
    "city": "伊春市",
    "name": "铁力市",
    "id": "230781000000"
  }],
  "230800000000": [{
    "city": "佳木斯市",
    "name": "市辖区",
    "id": "230801000000"
  }, {
    "city": "佳木斯市",
    "name": "向阳区",
    "id": "230803000000"
  }, {
    "city": "佳木斯市",
    "name": "前进区",
    "id": "230804000000"
  }, {
    "city": "佳木斯市",
    "name": "东风区",
    "id": "230805000000"
  }, {
    "city": "佳木斯市",
    "name": "郊区",
    "id": "230811000000"
  }, {
    "city": "佳木斯市",
    "name": "桦南县",
    "id": "230822000000"
  }, {
    "city": "佳木斯市",
    "name": "桦川县",
    "id": "230826000000"
  }, {
    "city": "佳木斯市",
    "name": "汤原县",
    "id": "230828000000"
  }, {
    "city": "佳木斯市",
    "name": "同江市",
    "id": "230881000000"
  }, {
    "city": "佳木斯市",
    "name": "富锦市",
    "id": "230882000000"
  }, {
    "city": "佳木斯市",
    "name": "抚远市",
    "id": "230883000000"
  }],
  "230900000000": [{
    "city": "七台河市",
    "name": "市辖区",
    "id": "230901000000"
  }, {
    "city": "七台河市",
    "name": "新兴区",
    "id": "230902000000"
  }, {
    "city": "七台河市",
    "name": "桃山区",
    "id": "230903000000"
  }, {
    "city": "七台河市",
    "name": "茄子河区",
    "id": "230904000000"
  }, {
    "city": "七台河市",
    "name": "勃利县",
    "id": "230921000000"
  }],
  "231000000000": [{
    "city": "牡丹江市",
    "name": "市辖区",
    "id": "231001000000"
  }, {
    "city": "牡丹江市",
    "name": "东安区",
    "id": "231002000000"
  }, {
    "city": "牡丹江市",
    "name": "阳明区",
    "id": "231003000000"
  }, {
    "city": "牡丹江市",
    "name": "爱民区",
    "id": "231004000000"
  }, {
    "city": "牡丹江市",
    "name": "西安区",
    "id": "231005000000"
  }, {
    "city": "牡丹江市",
    "name": "林口县",
    "id": "231025000000"
  }, {
    "city": "牡丹江市",
    "name": "牡丹江经济技术开发区",
    "id": "231071000000"
  }, {
    "city": "牡丹江市",
    "name": "绥芬河市",
    "id": "231081000000"
  }, {
    "city": "牡丹江市",
    "name": "海林市",
    "id": "231083000000"
  }, {
    "city": "牡丹江市",
    "name": "宁安市",
    "id": "231084000000"
  }, {
    "city": "牡丹江市",
    "name": "穆棱市",
    "id": "231085000000"
  }, {
    "city": "牡丹江市",
    "name": "东宁市",
    "id": "231086000000"
  }],
  "231100000000": [{
    "city": "黑河市",
    "name": "市辖区",
    "id": "231101000000"
  }, {
    "city": "黑河市",
    "name": "爱辉区",
    "id": "231102000000"
  }, {
    "city": "黑河市",
    "name": "嫩江县",
    "id": "231121000000"
  }, {
    "city": "黑河市",
    "name": "逊克县",
    "id": "231123000000"
  }, {
    "city": "黑河市",
    "name": "孙吴县",
    "id": "231124000000"
  }, {
    "city": "黑河市",
    "name": "北安市",
    "id": "231181000000"
  }, {
    "city": "黑河市",
    "name": "五大连池市",
    "id": "231182000000"
  }],
  "231200000000": [{
    "city": "绥化市",
    "name": "市辖区",
    "id": "231201000000"
  }, {
    "city": "绥化市",
    "name": "北林区",
    "id": "231202000000"
  }, {
    "city": "绥化市",
    "name": "望奎县",
    "id": "231221000000"
  }, {
    "city": "绥化市",
    "name": "兰西县",
    "id": "231222000000"
  }, {
    "city": "绥化市",
    "name": "青冈县",
    "id": "231223000000"
  }, {
    "city": "绥化市",
    "name": "庆安县",
    "id": "231224000000"
  }, {
    "city": "绥化市",
    "name": "明水县",
    "id": "231225000000"
  }, {
    "city": "绥化市",
    "name": "绥棱县",
    "id": "231226000000"
  }, {
    "city": "绥化市",
    "name": "安达市",
    "id": "231281000000"
  }, {
    "city": "绥化市",
    "name": "肇东市",
    "id": "231282000000"
  }, {
    "city": "绥化市",
    "name": "海伦市",
    "id": "231283000000"
  }],
  "232700000000": [{
    "city": "大兴安岭地区",
    "name": "漠河市",
    "id": "232701000000"
  }, {
    "city": "大兴安岭地区",
    "name": "呼玛县",
    "id": "232721000000"
  }, {
    "city": "大兴安岭地区",
    "name": "塔河县",
    "id": "232722000000"
  }, {
    "city": "大兴安岭地区",
    "name": "加格达奇区",
    "id": "232761000000"
  }, {
    "city": "大兴安岭地区",
    "name": "松岭区",
    "id": "232762000000"
  }, {
    "city": "大兴安岭地区",
    "name": "新林区",
    "id": "232763000000"
  }, {
    "city": "大兴安岭地区",
    "name": "呼中区",
    "id": "232764000000"
  }],
  "310100000000": [{
    "city": "市辖区",
    "name": "黄浦区",
    "id": "310101000000"
  }, {
    "city": "市辖区",
    "name": "徐汇区",
    "id": "310104000000"
  }, {
    "city": "市辖区",
    "name": "长宁区",
    "id": "310105000000"
  }, {
    "city": "市辖区",
    "name": "静安区",
    "id": "310106000000"
  }, {
    "city": "市辖区",
    "name": "普陀区",
    "id": "310107000000"
  }, {
    "city": "市辖区",
    "name": "虹口区",
    "id": "310109000000"
  }, {
    "city": "市辖区",
    "name": "杨浦区",
    "id": "310110000000"
  }, {
    "city": "市辖区",
    "name": "闵行区",
    "id": "310112000000"
  }, {
    "city": "市辖区",
    "name": "宝山区",
    "id": "310113000000"
  }, {
    "city": "市辖区",
    "name": "嘉定区",
    "id": "310114000000"
  }, {
    "city": "市辖区",
    "name": "浦东新区",
    "id": "310115000000"
  }, {
    "city": "市辖区",
    "name": "金山区",
    "id": "310116000000"
  }, {
    "city": "市辖区",
    "name": "松江区",
    "id": "310117000000"
  }, {
    "city": "市辖区",
    "name": "青浦区",
    "id": "310118000000"
  }, {
    "city": "市辖区",
    "name": "奉贤区",
    "id": "310120000000"
  }, {
    "city": "市辖区",
    "name": "崇明区",
    "id": "310151000000"
  }],
  "320100000000": [{
    "city": "南京市",
    "name": "市辖区",
    "id": "320101000000"
  }, {
    "city": "南京市",
    "name": "玄武区",
    "id": "320102000000"
  }, {
    "city": "南京市",
    "name": "秦淮区",
    "id": "320104000000"
  }, {
    "city": "南京市",
    "name": "建邺区",
    "id": "320105000000"
  }, {
    "city": "南京市",
    "name": "鼓楼区",
    "id": "320106000000"
  }, {
    "city": "南京市",
    "name": "浦口区",
    "id": "320111000000"
  }, {
    "city": "南京市",
    "name": "栖霞区",
    "id": "320113000000"
  }, {
    "city": "南京市",
    "name": "雨花台区",
    "id": "320114000000"
  }, {
    "city": "南京市",
    "name": "江宁区",
    "id": "320115000000"
  }, {
    "city": "南京市",
    "name": "六合区",
    "id": "320116000000"
  }, {
    "city": "南京市",
    "name": "溧水区",
    "id": "320117000000"
  }, {
    "city": "南京市",
    "name": "高淳区",
    "id": "320118000000"
  }],
  "320200000000": [{
    "city": "无锡市",
    "name": "市辖区",
    "id": "320201000000"
  }, {
    "city": "无锡市",
    "name": "锡山区",
    "id": "320205000000"
  }, {
    "city": "无锡市",
    "name": "惠山区",
    "id": "320206000000"
  }, {
    "city": "无锡市",
    "name": "滨湖区",
    "id": "320211000000"
  }, {
    "city": "无锡市",
    "name": "梁溪区",
    "id": "320213000000"
  }, {
    "city": "无锡市",
    "name": "新吴区",
    "id": "320214000000"
  }, {
    "city": "无锡市",
    "name": "江阴市",
    "id": "320281000000"
  }, {
    "city": "无锡市",
    "name": "宜兴市",
    "id": "320282000000"
  }],
  "320300000000": [{
    "city": "徐州市",
    "name": "市辖区",
    "id": "320301000000"
  }, {
    "city": "徐州市",
    "name": "鼓楼区",
    "id": "320302000000"
  }, {
    "city": "徐州市",
    "name": "云龙区",
    "id": "320303000000"
  }, {
    "city": "徐州市",
    "name": "贾汪区",
    "id": "320305000000"
  }, {
    "city": "徐州市",
    "name": "泉山区",
    "id": "320311000000"
  }, {
    "city": "徐州市",
    "name": "铜山区",
    "id": "320312000000"
  }, {
    "city": "徐州市",
    "name": "丰县",
    "id": "320321000000"
  }, {
    "city": "徐州市",
    "name": "沛县",
    "id": "320322000000"
  }, {
    "city": "徐州市",
    "name": "睢宁县",
    "id": "320324000000"
  }, {
    "city": "徐州市",
    "name": "徐州经济技术开发区",
    "id": "320371000000"
  }, {
    "city": "徐州市",
    "name": "新沂市",
    "id": "320381000000"
  }, {
    "city": "徐州市",
    "name": "邳州市",
    "id": "320382000000"
  }],
  "320400000000": [{
    "city": "常州市",
    "name": "市辖区",
    "id": "320401000000"
  }, {
    "city": "常州市",
    "name": "天宁区",
    "id": "320402000000"
  }, {
    "city": "常州市",
    "name": "钟楼区",
    "id": "320404000000"
  }, {
    "city": "常州市",
    "name": "新北区",
    "id": "320411000000"
  }, {
    "city": "常州市",
    "name": "武进区",
    "id": "320412000000"
  }, {
    "city": "常州市",
    "name": "金坛区",
    "id": "320413000000"
  }, {
    "city": "常州市",
    "name": "溧阳市",
    "id": "320481000000"
  }],
  "320500000000": [{
    "city": "苏州市",
    "name": "市辖区",
    "id": "320501000000"
  }, {
    "city": "苏州市",
    "name": "虎丘区",
    "id": "320505000000"
  }, {
    "city": "苏州市",
    "name": "吴中区",
    "id": "320506000000"
  }, {
    "city": "苏州市",
    "name": "相城区",
    "id": "320507000000"
  }, {
    "city": "苏州市",
    "name": "姑苏区",
    "id": "320508000000"
  }, {
    "city": "苏州市",
    "name": "吴江区",
    "id": "320509000000"
  }, {
    "city": "苏州市",
    "name": "苏州工业园区",
    "id": "320571000000"
  }, {
    "city": "苏州市",
    "name": "常熟市",
    "id": "320581000000"
  }, {
    "city": "苏州市",
    "name": "张家港市",
    "id": "320582000000"
  }, {
    "city": "苏州市",
    "name": "昆山市",
    "id": "320583000000"
  }, {
    "city": "苏州市",
    "name": "太仓市",
    "id": "320585000000"
  }],
  "320600000000": [{
    "city": "南通市",
    "name": "市辖区",
    "id": "320601000000"
  }, {
    "city": "南通市",
    "name": "崇川区",
    "id": "320602000000"
  }, {
    "city": "南通市",
    "name": "港闸区",
    "id": "320611000000"
  }, {
    "city": "南通市",
    "name": "通州区",
    "id": "320612000000"
  }, {
    "city": "南通市",
    "name": "如东县",
    "id": "320623000000"
  }, {
    "city": "南通市",
    "name": "南通经济技术开发区",
    "id": "320671000000"
  }, {
    "city": "南通市",
    "name": "启东市",
    "id": "320681000000"
  }, {
    "city": "南通市",
    "name": "如皋市",
    "id": "320682000000"
  }, {
    "city": "南通市",
    "name": "海门市",
    "id": "320684000000"
  }, {
    "city": "南通市",
    "name": "海安市",
    "id": "320685000000"
  }],
  "320700000000": [{
    "city": "连云港市",
    "name": "市辖区",
    "id": "320701000000"
  }, {
    "city": "连云港市",
    "name": "连云区",
    "id": "320703000000"
  }, {
    "city": "连云港市",
    "name": "海州区",
    "id": "320706000000"
  }, {
    "city": "连云港市",
    "name": "赣榆区",
    "id": "320707000000"
  }, {
    "city": "连云港市",
    "name": "东海县",
    "id": "320722000000"
  }, {
    "city": "连云港市",
    "name": "灌云县",
    "id": "320723000000"
  }, {
    "city": "连云港市",
    "name": "灌南县",
    "id": "320724000000"
  }, {
    "city": "连云港市",
    "name": "连云港经济技术开发区",
    "id": "320771000000"
  }, {
    "city": "连云港市",
    "name": "连云港高新技术产业开发区",
    "id": "320772000000"
  }],
  "320800000000": [{
    "city": "淮安市",
    "name": "市辖区",
    "id": "320801000000"
  }, {
    "city": "淮安市",
    "name": "淮安区",
    "id": "320803000000"
  }, {
    "city": "淮安市",
    "name": "淮阴区",
    "id": "320804000000"
  }, {
    "city": "淮安市",
    "name": "清江浦区",
    "id": "320812000000"
  }, {
    "city": "淮安市",
    "name": "洪泽区",
    "id": "320813000000"
  }, {
    "city": "淮安市",
    "name": "涟水县",
    "id": "320826000000"
  }, {
    "city": "淮安市",
    "name": "盱眙县",
    "id": "320830000000"
  }, {
    "city": "淮安市",
    "name": "金湖县",
    "id": "320831000000"
  }, {
    "city": "淮安市",
    "name": "淮安经济技术开发区",
    "id": "320871000000"
  }],
  "320900000000": [{
    "city": "盐城市",
    "name": "市辖区",
    "id": "320901000000"
  }, {
    "city": "盐城市",
    "name": "亭湖区",
    "id": "320902000000"
  }, {
    "city": "盐城市",
    "name": "盐都区",
    "id": "320903000000"
  }, {
    "city": "盐城市",
    "name": "大丰区",
    "id": "320904000000"
  }, {
    "city": "盐城市",
    "name": "响水县",
    "id": "320921000000"
  }, {
    "city": "盐城市",
    "name": "滨海县",
    "id": "320922000000"
  }, {
    "city": "盐城市",
    "name": "阜宁县",
    "id": "320923000000"
  }, {
    "city": "盐城市",
    "name": "射阳县",
    "id": "320924000000"
  }, {
    "city": "盐城市",
    "name": "建湖县",
    "id": "320925000000"
  }, {
    "city": "盐城市",
    "name": "盐城经济技术开发区",
    "id": "320971000000"
  }, {
    "city": "盐城市",
    "name": "东台市",
    "id": "320981000000"
  }],
  "321000000000": [{
    "city": "扬州市",
    "name": "市辖区",
    "id": "321001000000"
  }, {
    "city": "扬州市",
    "name": "广陵区",
    "id": "321002000000"
  }, {
    "city": "扬州市",
    "name": "邗江区",
    "id": "321003000000"
  }, {
    "city": "扬州市",
    "name": "江都区",
    "id": "321012000000"
  }, {
    "city": "扬州市",
    "name": "宝应县",
    "id": "321023000000"
  }, {
    "city": "扬州市",
    "name": "扬州经济技术开发区",
    "id": "321071000000"
  }, {
    "city": "扬州市",
    "name": "仪征市",
    "id": "321081000000"
  }, {
    "city": "扬州市",
    "name": "高邮市",
    "id": "321084000000"
  }],
  "321100000000": [{
    "city": "镇江市",
    "name": "市辖区",
    "id": "321101000000"
  }, {
    "city": "镇江市",
    "name": "京口区",
    "id": "321102000000"
  }, {
    "city": "镇江市",
    "name": "润州区",
    "id": "321111000000"
  }, {
    "city": "镇江市",
    "name": "丹徒区",
    "id": "321112000000"
  }, {
    "city": "镇江市",
    "name": "镇江新区",
    "id": "321171000000"
  }, {
    "city": "镇江市",
    "name": "丹阳市",
    "id": "321181000000"
  }, {
    "city": "镇江市",
    "name": "扬中市",
    "id": "321182000000"
  }, {
    "city": "镇江市",
    "name": "句容市",
    "id": "321183000000"
  }],
  "321200000000": [{
    "city": "泰州市",
    "name": "市辖区",
    "id": "321201000000"
  }, {
    "city": "泰州市",
    "name": "海陵区",
    "id": "321202000000"
  }, {
    "city": "泰州市",
    "name": "高港区",
    "id": "321203000000"
  }, {
    "city": "泰州市",
    "name": "姜堰区",
    "id": "321204000000"
  }, {
    "city": "泰州市",
    "name": "泰州医药高新技术产业开发区",
    "id": "321271000000"
  }, {
    "city": "泰州市",
    "name": "兴化市",
    "id": "321281000000"
  }, {
    "city": "泰州市",
    "name": "靖江市",
    "id": "321282000000"
  }, {
    "city": "泰州市",
    "name": "泰兴市",
    "id": "321283000000"
  }],
  "321300000000": [{
    "city": "宿迁市",
    "name": "市辖区",
    "id": "321301000000"
  }, {
    "city": "宿迁市",
    "name": "宿城区",
    "id": "321302000000"
  }, {
    "city": "宿迁市",
    "name": "宿豫区",
    "id": "321311000000"
  }, {
    "city": "宿迁市",
    "name": "沭阳县",
    "id": "321322000000"
  }, {
    "city": "宿迁市",
    "name": "泗阳县",
    "id": "321323000000"
  }, {
    "city": "宿迁市",
    "name": "泗洪县",
    "id": "321324000000"
  }, {
    "city": "宿迁市",
    "name": "宿迁经济技术开发区",
    "id": "321371000000"
  }],
  "330100000000": [{
    "city": "杭州市",
    "name": "市辖区",
    "id": "330101000000"
  }, {
    "city": "杭州市",
    "name": "上城区",
    "id": "330102000000"
  }, {
    "city": "杭州市",
    "name": "下城区",
    "id": "330103000000"
  }, {
    "city": "杭州市",
    "name": "江干区",
    "id": "330104000000"
  }, {
    "city": "杭州市",
    "name": "拱墅区",
    "id": "330105000000"
  }, {
    "city": "杭州市",
    "name": "西湖区",
    "id": "330106000000"
  }, {
    "city": "杭州市",
    "name": "滨江区",
    "id": "330108000000"
  }, {
    "city": "杭州市",
    "name": "萧山区",
    "id": "330109000000"
  }, {
    "city": "杭州市",
    "name": "余杭区",
    "id": "330110000000"
  }, {
    "city": "杭州市",
    "name": "富阳区",
    "id": "330111000000"
  }, {
    "city": "杭州市",
    "name": "临安区",
    "id": "330112000000"
  }, {
    "city": "杭州市",
    "name": "桐庐县",
    "id": "330122000000"
  }, {
    "city": "杭州市",
    "name": "淳安县",
    "id": "330127000000"
  }, {
    "city": "杭州市",
    "name": "建德市",
    "id": "330182000000"
  }],
  "330200000000": [{
    "city": "宁波市",
    "name": "市辖区",
    "id": "330201000000"
  }, {
    "city": "宁波市",
    "name": "海曙区",
    "id": "330203000000"
  }, {
    "city": "宁波市",
    "name": "江北区",
    "id": "330205000000"
  }, {
    "city": "宁波市",
    "name": "北仑区",
    "id": "330206000000"
  }, {
    "city": "宁波市",
    "name": "镇海区",
    "id": "330211000000"
  }, {
    "city": "宁波市",
    "name": "鄞州区",
    "id": "330212000000"
  }, {
    "city": "宁波市",
    "name": "奉化区",
    "id": "330213000000"
  }, {
    "city": "宁波市",
    "name": "象山县",
    "id": "330225000000"
  }, {
    "city": "宁波市",
    "name": "宁海县",
    "id": "330226000000"
  }, {
    "city": "宁波市",
    "name": "余姚市",
    "id": "330281000000"
  }, {
    "city": "宁波市",
    "name": "慈溪市",
    "id": "330282000000"
  }],
  "330300000000": [{
    "city": "温州市",
    "name": "市辖区",
    "id": "330301000000"
  }, {
    "city": "温州市",
    "name": "鹿城区",
    "id": "330302000000"
  }, {
    "city": "温州市",
    "name": "龙湾区",
    "id": "330303000000"
  }, {
    "city": "温州市",
    "name": "瓯海区",
    "id": "330304000000"
  }, {
    "city": "温州市",
    "name": "洞头区",
    "id": "330305000000"
  }, {
    "city": "温州市",
    "name": "永嘉县",
    "id": "330324000000"
  }, {
    "city": "温州市",
    "name": "平阳县",
    "id": "330326000000"
  }, {
    "city": "温州市",
    "name": "苍南县",
    "id": "330327000000"
  }, {
    "city": "温州市",
    "name": "文成县",
    "id": "330328000000"
  }, {
    "city": "温州市",
    "name": "泰顺县",
    "id": "330329000000"
  }, {
    "city": "温州市",
    "name": "温州经济技术开发区",
    "id": "330371000000"
  }, {
    "city": "温州市",
    "name": "瑞安市",
    "id": "330381000000"
  }, {
    "city": "温州市",
    "name": "乐清市",
    "id": "330382000000"
  }],
  "330400000000": [{
    "city": "嘉兴市",
    "name": "市辖区",
    "id": "330401000000"
  }, {
    "city": "嘉兴市",
    "name": "南湖区",
    "id": "330402000000"
  }, {
    "city": "嘉兴市",
    "name": "秀洲区",
    "id": "330411000000"
  }, {
    "city": "嘉兴市",
    "name": "嘉善县",
    "id": "330421000000"
  }, {
    "city": "嘉兴市",
    "name": "海盐县",
    "id": "330424000000"
  }, {
    "city": "嘉兴市",
    "name": "海宁市",
    "id": "330481000000"
  }, {
    "city": "嘉兴市",
    "name": "平湖市",
    "id": "330482000000"
  }, {
    "city": "嘉兴市",
    "name": "桐乡市",
    "id": "330483000000"
  }],
  "330500000000": [{
    "city": "湖州市",
    "name": "市辖区",
    "id": "330501000000"
  }, {
    "city": "湖州市",
    "name": "吴兴区",
    "id": "330502000000"
  }, {
    "city": "湖州市",
    "name": "南浔区",
    "id": "330503000000"
  }, {
    "city": "湖州市",
    "name": "德清县",
    "id": "330521000000"
  }, {
    "city": "湖州市",
    "name": "长兴县",
    "id": "330522000000"
  }, {
    "city": "湖州市",
    "name": "安吉县",
    "id": "330523000000"
  }],
  "330600000000": [{
    "city": "绍兴市",
    "name": "市辖区",
    "id": "330601000000"
  }, {
    "city": "绍兴市",
    "name": "越城区",
    "id": "330602000000"
  }, {
    "city": "绍兴市",
    "name": "柯桥区",
    "id": "330603000000"
  }, {
    "city": "绍兴市",
    "name": "上虞区",
    "id": "330604000000"
  }, {
    "city": "绍兴市",
    "name": "新昌县",
    "id": "330624000000"
  }, {
    "city": "绍兴市",
    "name": "诸暨市",
    "id": "330681000000"
  }, {
    "city": "绍兴市",
    "name": "嵊州市",
    "id": "330683000000"
  }],
  "330700000000": [{
    "city": "金华市",
    "name": "市辖区",
    "id": "330701000000"
  }, {
    "city": "金华市",
    "name": "婺城区",
    "id": "330702000000"
  }, {
    "city": "金华市",
    "name": "金东区",
    "id": "330703000000"
  }, {
    "city": "金华市",
    "name": "武义县",
    "id": "330723000000"
  }, {
    "city": "金华市",
    "name": "浦江县",
    "id": "330726000000"
  }, {
    "city": "金华市",
    "name": "磐安县",
    "id": "330727000000"
  }, {
    "city": "金华市",
    "name": "兰溪市",
    "id": "330781000000"
  }, {
    "city": "金华市",
    "name": "义乌市",
    "id": "330782000000"
  }, {
    "city": "金华市",
    "name": "东阳市",
    "id": "330783000000"
  }, {
    "city": "金华市",
    "name": "永康市",
    "id": "330784000000"
  }],
  "330800000000": [{
    "city": "衢州市",
    "name": "市辖区",
    "id": "330801000000"
  }, {
    "city": "衢州市",
    "name": "柯城区",
    "id": "330802000000"
  }, {
    "city": "衢州市",
    "name": "衢江区",
    "id": "330803000000"
  }, {
    "city": "衢州市",
    "name": "常山县",
    "id": "330822000000"
  }, {
    "city": "衢州市",
    "name": "开化县",
    "id": "330824000000"
  }, {
    "city": "衢州市",
    "name": "龙游县",
    "id": "330825000000"
  }, {
    "city": "衢州市",
    "name": "江山市",
    "id": "330881000000"
  }],
  "330900000000": [{
    "city": "舟山市",
    "name": "市辖区",
    "id": "330901000000"
  }, {
    "city": "舟山市",
    "name": "定海区",
    "id": "330902000000"
  }, {
    "city": "舟山市",
    "name": "普陀区",
    "id": "330903000000"
  }, {
    "city": "舟山市",
    "name": "岱山县",
    "id": "330921000000"
  }, {
    "city": "舟山市",
    "name": "嵊泗县",
    "id": "330922000000"
  }],
  "331000000000": [{
    "city": "台州市",
    "name": "市辖区",
    "id": "331001000000"
  }, {
    "city": "台州市",
    "name": "椒江区",
    "id": "331002000000"
  }, {
    "city": "台州市",
    "name": "黄岩区",
    "id": "331003000000"
  }, {
    "city": "台州市",
    "name": "路桥区",
    "id": "331004000000"
  }, {
    "city": "台州市",
    "name": "三门县",
    "id": "331022000000"
  }, {
    "city": "台州市",
    "name": "天台县",
    "id": "331023000000"
  }, {
    "city": "台州市",
    "name": "仙居县",
    "id": "331024000000"
  }, {
    "city": "台州市",
    "name": "温岭市",
    "id": "331081000000"
  }, {
    "city": "台州市",
    "name": "临海市",
    "id": "331082000000"
  }, {
    "city": "台州市",
    "name": "玉环市",
    "id": "331083000000"
  }],
  "331100000000": [{
    "city": "丽水市",
    "name": "市辖区",
    "id": "331101000000"
  }, {
    "city": "丽水市",
    "name": "莲都区",
    "id": "331102000000"
  }, {
    "city": "丽水市",
    "name": "青田县",
    "id": "331121000000"
  }, {
    "city": "丽水市",
    "name": "缙云县",
    "id": "331122000000"
  }, {
    "city": "丽水市",
    "name": "遂昌县",
    "id": "331123000000"
  }, {
    "city": "丽水市",
    "name": "松阳县",
    "id": "331124000000"
  }, {
    "city": "丽水市",
    "name": "云和县",
    "id": "331125000000"
  }, {
    "city": "丽水市",
    "name": "庆元县",
    "id": "331126000000"
  }, {
    "city": "丽水市",
    "name": "景宁畲族自治县",
    "id": "331127000000"
  }, {
    "city": "丽水市",
    "name": "龙泉市",
    "id": "331181000000"
  }],
  "340100000000": [{
    "city": "合肥市",
    "name": "市辖区",
    "id": "340101000000"
  }, {
    "city": "合肥市",
    "name": "瑶海区",
    "id": "340102000000"
  }, {
    "city": "合肥市",
    "name": "庐阳区",
    "id": "340103000000"
  }, {
    "city": "合肥市",
    "name": "蜀山区",
    "id": "340104000000"
  }, {
    "city": "合肥市",
    "name": "包河区",
    "id": "340111000000"
  }, {
    "city": "合肥市",
    "name": "长丰县",
    "id": "340121000000"
  }, {
    "city": "合肥市",
    "name": "肥东县",
    "id": "340122000000"
  }, {
    "city": "合肥市",
    "name": "肥西县",
    "id": "340123000000"
  }, {
    "city": "合肥市",
    "name": "庐江县",
    "id": "340124000000"
  }, {
    "city": "合肥市",
    "name": "合肥高新技术产业开发区",
    "id": "340171000000"
  }, {
    "city": "合肥市",
    "name": "合肥经济技术开发区",
    "id": "340172000000"
  }, {
    "city": "合肥市",
    "name": "合肥新站高新技术产业开发区",
    "id": "340173000000"
  }, {
    "city": "合肥市",
    "name": "巢湖市",
    "id": "340181000000"
  }],
  "340200000000": [{
    "city": "芜湖市",
    "name": "市辖区",
    "id": "340201000000"
  }, {
    "city": "芜湖市",
    "name": "镜湖区",
    "id": "340202000000"
  }, {
    "city": "芜湖市",
    "name": "弋江区",
    "id": "340203000000"
  }, {
    "city": "芜湖市",
    "name": "鸠江区",
    "id": "340207000000"
  }, {
    "city": "芜湖市",
    "name": "三山区",
    "id": "340208000000"
  }, {
    "city": "芜湖市",
    "name": "芜湖县",
    "id": "340221000000"
  }, {
    "city": "芜湖市",
    "name": "繁昌县",
    "id": "340222000000"
  }, {
    "city": "芜湖市",
    "name": "南陵县",
    "id": "340223000000"
  }, {
    "city": "芜湖市",
    "name": "无为县",
    "id": "340225000000"
  }, {
    "city": "芜湖市",
    "name": "芜湖经济技术开发区",
    "id": "340271000000"
  }, {
    "city": "芜湖市",
    "name": "安徽芜湖长江大桥经济开发区",
    "id": "340272000000"
  }],
  "340300000000": [{
    "city": "蚌埠市",
    "name": "市辖区",
    "id": "340301000000"
  }, {
    "city": "蚌埠市",
    "name": "龙子湖区",
    "id": "340302000000"
  }, {
    "city": "蚌埠市",
    "name": "蚌山区",
    "id": "340303000000"
  }, {
    "city": "蚌埠市",
    "name": "禹会区",
    "id": "340304000000"
  }, {
    "city": "蚌埠市",
    "name": "淮上区",
    "id": "340311000000"
  }, {
    "city": "蚌埠市",
    "name": "怀远县",
    "id": "340321000000"
  }, {
    "city": "蚌埠市",
    "name": "五河县",
    "id": "340322000000"
  }, {
    "city": "蚌埠市",
    "name": "固镇县",
    "id": "340323000000"
  }, {
    "city": "蚌埠市",
    "name": "蚌埠市高新技术开发区",
    "id": "340371000000"
  }, {
    "city": "蚌埠市",
    "name": "蚌埠市经济开发区",
    "id": "340372000000"
  }],
  "340400000000": [{
    "city": "淮南市",
    "name": "市辖区",
    "id": "340401000000"
  }, {
    "city": "淮南市",
    "name": "大通区",
    "id": "340402000000"
  }, {
    "city": "淮南市",
    "name": "田家庵区",
    "id": "340403000000"
  }, {
    "city": "淮南市",
    "name": "谢家集区",
    "id": "340404000000"
  }, {
    "city": "淮南市",
    "name": "八公山区",
    "id": "340405000000"
  }, {
    "city": "淮南市",
    "name": "潘集区",
    "id": "340406000000"
  }, {
    "city": "淮南市",
    "name": "凤台县",
    "id": "340421000000"
  }, {
    "city": "淮南市",
    "name": "寿县",
    "id": "340422000000"
  }],
  "340500000000": [{
    "city": "马鞍山市",
    "name": "市辖区",
    "id": "340501000000"
  }, {
    "city": "马鞍山市",
    "name": "花山区",
    "id": "340503000000"
  }, {
    "city": "马鞍山市",
    "name": "雨山区",
    "id": "340504000000"
  }, {
    "city": "马鞍山市",
    "name": "博望区",
    "id": "340506000000"
  }, {
    "city": "马鞍山市",
    "name": "当涂县",
    "id": "340521000000"
  }, {
    "city": "马鞍山市",
    "name": "含山县",
    "id": "340522000000"
  }, {
    "city": "马鞍山市",
    "name": "和县",
    "id": "340523000000"
  }],
  "340600000000": [{
    "city": "淮北市",
    "name": "市辖区",
    "id": "340601000000"
  }, {
    "city": "淮北市",
    "name": "杜集区",
    "id": "340602000000"
  }, {
    "city": "淮北市",
    "name": "相山区",
    "id": "340603000000"
  }, {
    "city": "淮北市",
    "name": "烈山区",
    "id": "340604000000"
  }, {
    "city": "淮北市",
    "name": "濉溪县",
    "id": "340621000000"
  }],
  "340700000000": [{
    "city": "铜陵市",
    "name": "市辖区",
    "id": "340701000000"
  }, {
    "city": "铜陵市",
    "name": "铜官区",
    "id": "340705000000"
  }, {
    "city": "铜陵市",
    "name": "义安区",
    "id": "340706000000"
  }, {
    "city": "铜陵市",
    "name": "郊区",
    "id": "340711000000"
  }, {
    "city": "铜陵市",
    "name": "枞阳县",
    "id": "340722000000"
  }],
  "340800000000": [{
    "city": "安庆市",
    "name": "市辖区",
    "id": "340801000000"
  }, {
    "city": "安庆市",
    "name": "迎江区",
    "id": "340802000000"
  }, {
    "city": "安庆市",
    "name": "大观区",
    "id": "340803000000"
  }, {
    "city": "安庆市",
    "name": "宜秀区",
    "id": "340811000000"
  }, {
    "city": "安庆市",
    "name": "怀宁县",
    "id": "340822000000"
  }, {
    "city": "安庆市",
    "name": "太湖县",
    "id": "340825000000"
  }, {
    "city": "安庆市",
    "name": "宿松县",
    "id": "340826000000"
  }, {
    "city": "安庆市",
    "name": "望江县",
    "id": "340827000000"
  }, {
    "city": "安庆市",
    "name": "岳西县",
    "id": "340828000000"
  }, {
    "city": "安庆市",
    "name": "安徽安庆经济开发区",
    "id": "340871000000"
  }, {
    "city": "安庆市",
    "name": "桐城市",
    "id": "340881000000"
  }, {
    "city": "安庆市",
    "name": "潜山市",
    "id": "340882000000"
  }],
  "341000000000": [{
    "city": "黄山市",
    "name": "市辖区",
    "id": "341001000000"
  }, {
    "city": "黄山市",
    "name": "屯溪区",
    "id": "341002000000"
  }, {
    "city": "黄山市",
    "name": "黄山区",
    "id": "341003000000"
  }, {
    "city": "黄山市",
    "name": "徽州区",
    "id": "341004000000"
  }, {
    "city": "黄山市",
    "name": "歙县",
    "id": "341021000000"
  }, {
    "city": "黄山市",
    "name": "休宁县",
    "id": "341022000000"
  }, {
    "city": "黄山市",
    "name": "黟县",
    "id": "341023000000"
  }, {
    "city": "黄山市",
    "name": "祁门县",
    "id": "341024000000"
  }],
  "341100000000": [{
    "city": "滁州市",
    "name": "市辖区",
    "id": "341101000000"
  }, {
    "city": "滁州市",
    "name": "琅琊区",
    "id": "341102000000"
  }, {
    "city": "滁州市",
    "name": "南谯区",
    "id": "341103000000"
  }, {
    "city": "滁州市",
    "name": "来安县",
    "id": "341122000000"
  }, {
    "city": "滁州市",
    "name": "全椒县",
    "id": "341124000000"
  }, {
    "city": "滁州市",
    "name": "定远县",
    "id": "341125000000"
  }, {
    "city": "滁州市",
    "name": "凤阳县",
    "id": "341126000000"
  }, {
    "city": "滁州市",
    "name": "苏滁现代产业园",
    "id": "341171000000"
  }, {
    "city": "滁州市",
    "name": "滁州经济技术开发区",
    "id": "341172000000"
  }, {
    "city": "滁州市",
    "name": "天长市",
    "id": "341181000000"
  }, {
    "city": "滁州市",
    "name": "明光市",
    "id": "341182000000"
  }],
  "341200000000": [{
    "city": "阜阳市",
    "name": "市辖区",
    "id": "341201000000"
  }, {
    "city": "阜阳市",
    "name": "颍州区",
    "id": "341202000000"
  }, {
    "city": "阜阳市",
    "name": "颍东区",
    "id": "341203000000"
  }, {
    "city": "阜阳市",
    "name": "颍泉区",
    "id": "341204000000"
  }, {
    "city": "阜阳市",
    "name": "临泉县",
    "id": "341221000000"
  }, {
    "city": "阜阳市",
    "name": "太和县",
    "id": "341222000000"
  }, {
    "city": "阜阳市",
    "name": "阜南县",
    "id": "341225000000"
  }, {
    "city": "阜阳市",
    "name": "颍上县",
    "id": "341226000000"
  }, {
    "city": "阜阳市",
    "name": "阜阳合肥现代产业园区",
    "id": "341271000000"
  }, {
    "city": "阜阳市",
    "name": "阜阳经济技术开发区",
    "id": "341272000000"
  }, {
    "city": "阜阳市",
    "name": "界首市",
    "id": "341282000000"
  }],
  "341300000000": [{
    "city": "宿州市",
    "name": "市辖区",
    "id": "341301000000"
  }, {
    "city": "宿州市",
    "name": "埇桥区",
    "id": "341302000000"
  }, {
    "city": "宿州市",
    "name": "砀山县",
    "id": "341321000000"
  }, {
    "city": "宿州市",
    "name": "萧县",
    "id": "341322000000"
  }, {
    "city": "宿州市",
    "name": "灵璧县",
    "id": "341323000000"
  }, {
    "city": "宿州市",
    "name": "泗县",
    "id": "341324000000"
  }, {
    "city": "宿州市",
    "name": "宿州马鞍山现代产业园区",
    "id": "341371000000"
  }, {
    "city": "宿州市",
    "name": "宿州经济技术开发区",
    "id": "341372000000"
  }],
  "341500000000": [{
    "city": "六安市",
    "name": "市辖区",
    "id": "341501000000"
  }, {
    "city": "六安市",
    "name": "金安区",
    "id": "341502000000"
  }, {
    "city": "六安市",
    "name": "裕安区",
    "id": "341503000000"
  }, {
    "city": "六安市",
    "name": "叶集区",
    "id": "341504000000"
  }, {
    "city": "六安市",
    "name": "霍邱县",
    "id": "341522000000"
  }, {
    "city": "六安市",
    "name": "舒城县",
    "id": "341523000000"
  }, {
    "city": "六安市",
    "name": "金寨县",
    "id": "341524000000"
  }, {
    "city": "六安市",
    "name": "霍山县",
    "id": "341525000000"
  }],
  "341600000000": [{
    "city": "亳州市",
    "name": "市辖区",
    "id": "341601000000"
  }, {
    "city": "亳州市",
    "name": "谯城区",
    "id": "341602000000"
  }, {
    "city": "亳州市",
    "name": "涡阳县",
    "id": "341621000000"
  }, {
    "city": "亳州市",
    "name": "蒙城县",
    "id": "341622000000"
  }, {
    "city": "亳州市",
    "name": "利辛县",
    "id": "341623000000"
  }],
  "341700000000": [{
    "city": "池州市",
    "name": "市辖区",
    "id": "341701000000"
  }, {
    "city": "池州市",
    "name": "贵池区",
    "id": "341702000000"
  }, {
    "city": "池州市",
    "name": "东至县",
    "id": "341721000000"
  }, {
    "city": "池州市",
    "name": "石台县",
    "id": "341722000000"
  }, {
    "city": "池州市",
    "name": "青阳县",
    "id": "341723000000"
  }],
  "341800000000": [{
    "city": "宣城市",
    "name": "市辖区",
    "id": "341801000000"
  }, {
    "city": "宣城市",
    "name": "宣州区",
    "id": "341802000000"
  }, {
    "city": "宣城市",
    "name": "郎溪县",
    "id": "341821000000"
  }, {
    "city": "宣城市",
    "name": "广德县",
    "id": "341822000000"
  }, {
    "city": "宣城市",
    "name": "泾县",
    "id": "341823000000"
  }, {
    "city": "宣城市",
    "name": "绩溪县",
    "id": "341824000000"
  }, {
    "city": "宣城市",
    "name": "旌德县",
    "id": "341825000000"
  }, {
    "city": "宣城市",
    "name": "宣城市经济开发区",
    "id": "341871000000"
  }, {
    "city": "宣城市",
    "name": "宁国市",
    "id": "341881000000"
  }],
  "350100000000": [{
    "city": "福州市",
    "name": "市辖区",
    "id": "350101000000"
  }, {
    "city": "福州市",
    "name": "鼓楼区",
    "id": "350102000000"
  }, {
    "city": "福州市",
    "name": "台江区",
    "id": "350103000000"
  }, {
    "city": "福州市",
    "name": "仓山区",
    "id": "350104000000"
  }, {
    "city": "福州市",
    "name": "马尾区",
    "id": "350105000000"
  }, {
    "city": "福州市",
    "name": "晋安区",
    "id": "350111000000"
  }, {
    "city": "福州市",
    "name": "长乐区",
    "id": "350112000000"
  }, {
    "city": "福州市",
    "name": "闽侯县",
    "id": "350121000000"
  }, {
    "city": "福州市",
    "name": "连江县",
    "id": "350122000000"
  }, {
    "city": "福州市",
    "name": "罗源县",
    "id": "350123000000"
  }, {
    "city": "福州市",
    "name": "闽清县",
    "id": "350124000000"
  }, {
    "city": "福州市",
    "name": "永泰县",
    "id": "350125000000"
  }, {
    "city": "福州市",
    "name": "平潭县",
    "id": "350128000000"
  }, {
    "city": "福州市",
    "name": "福清市",
    "id": "350181000000"
  }],
  "350200000000": [{
    "city": "厦门市",
    "name": "市辖区",
    "id": "350201000000"
  }, {
    "city": "厦门市",
    "name": "思明区",
    "id": "350203000000"
  }, {
    "city": "厦门市",
    "name": "海沧区",
    "id": "350205000000"
  }, {
    "city": "厦门市",
    "name": "湖里区",
    "id": "350206000000"
  }, {
    "city": "厦门市",
    "name": "集美区",
    "id": "350211000000"
  }, {
    "city": "厦门市",
    "name": "同安区",
    "id": "350212000000"
  }, {
    "city": "厦门市",
    "name": "翔安区",
    "id": "350213000000"
  }],
  "350300000000": [{
    "city": "莆田市",
    "name": "市辖区",
    "id": "350301000000"
  }, {
    "city": "莆田市",
    "name": "城厢区",
    "id": "350302000000"
  }, {
    "city": "莆田市",
    "name": "涵江区",
    "id": "350303000000"
  }, {
    "city": "莆田市",
    "name": "荔城区",
    "id": "350304000000"
  }, {
    "city": "莆田市",
    "name": "秀屿区",
    "id": "350305000000"
  }, {
    "city": "莆田市",
    "name": "仙游县",
    "id": "350322000000"
  }],
  "350400000000": [{
    "city": "三明市",
    "name": "市辖区",
    "id": "350401000000"
  }, {
    "city": "三明市",
    "name": "梅列区",
    "id": "350402000000"
  }, {
    "city": "三明市",
    "name": "三元区",
    "id": "350403000000"
  }, {
    "city": "三明市",
    "name": "明溪县",
    "id": "350421000000"
  }, {
    "city": "三明市",
    "name": "清流县",
    "id": "350423000000"
  }, {
    "city": "三明市",
    "name": "宁化县",
    "id": "350424000000"
  }, {
    "city": "三明市",
    "name": "大田县",
    "id": "350425000000"
  }, {
    "city": "三明市",
    "name": "尤溪县",
    "id": "350426000000"
  }, {
    "city": "三明市",
    "name": "沙县",
    "id": "350427000000"
  }, {
    "city": "三明市",
    "name": "将乐县",
    "id": "350428000000"
  }, {
    "city": "三明市",
    "name": "泰宁县",
    "id": "350429000000"
  }, {
    "city": "三明市",
    "name": "建宁县",
    "id": "350430000000"
  }, {
    "city": "三明市",
    "name": "永安市",
    "id": "350481000000"
  }],
  "350500000000": [{
    "city": "泉州市",
    "name": "市辖区",
    "id": "350501000000"
  }, {
    "city": "泉州市",
    "name": "鲤城区",
    "id": "350502000000"
  }, {
    "city": "泉州市",
    "name": "丰泽区",
    "id": "350503000000"
  }, {
    "city": "泉州市",
    "name": "洛江区",
    "id": "350504000000"
  }, {
    "city": "泉州市",
    "name": "泉港区",
    "id": "350505000000"
  }, {
    "city": "泉州市",
    "name": "惠安县",
    "id": "350521000000"
  }, {
    "city": "泉州市",
    "name": "安溪县",
    "id": "350524000000"
  }, {
    "city": "泉州市",
    "name": "永春县",
    "id": "350525000000"
  }, {
    "city": "泉州市",
    "name": "德化县",
    "id": "350526000000"
  }, {
    "city": "泉州市",
    "name": "金门县",
    "id": "350527000000"
  }, {
    "city": "泉州市",
    "name": "石狮市",
    "id": "350581000000"
  }, {
    "city": "泉州市",
    "name": "晋江市",
    "id": "350582000000"
  }, {
    "city": "泉州市",
    "name": "南安市",
    "id": "350583000000"
  }],
  "350600000000": [{
    "city": "漳州市",
    "name": "市辖区",
    "id": "350601000000"
  }, {
    "city": "漳州市",
    "name": "芗城区",
    "id": "350602000000"
  }, {
    "city": "漳州市",
    "name": "龙文区",
    "id": "350603000000"
  }, {
    "city": "漳州市",
    "name": "云霄县",
    "id": "350622000000"
  }, {
    "city": "漳州市",
    "name": "漳浦县",
    "id": "350623000000"
  }, {
    "city": "漳州市",
    "name": "诏安县",
    "id": "350624000000"
  }, {
    "city": "漳州市",
    "name": "长泰县",
    "id": "350625000000"
  }, {
    "city": "漳州市",
    "name": "东山县",
    "id": "350626000000"
  }, {
    "city": "漳州市",
    "name": "南靖县",
    "id": "350627000000"
  }, {
    "city": "漳州市",
    "name": "平和县",
    "id": "350628000000"
  }, {
    "city": "漳州市",
    "name": "华安县",
    "id": "350629000000"
  }, {
    "city": "漳州市",
    "name": "龙海市",
    "id": "350681000000"
  }],
  "350700000000": [{
    "city": "南平市",
    "name": "市辖区",
    "id": "350701000000"
  }, {
    "city": "南平市",
    "name": "延平区",
    "id": "350702000000"
  }, {
    "city": "南平市",
    "name": "建阳区",
    "id": "350703000000"
  }, {
    "city": "南平市",
    "name": "顺昌县",
    "id": "350721000000"
  }, {
    "city": "南平市",
    "name": "浦城县",
    "id": "350722000000"
  }, {
    "city": "南平市",
    "name": "光泽县",
    "id": "350723000000"
  }, {
    "city": "南平市",
    "name": "松溪县",
    "id": "350724000000"
  }, {
    "city": "南平市",
    "name": "政和县",
    "id": "350725000000"
  }, {
    "city": "南平市",
    "name": "邵武市",
    "id": "350781000000"
  }, {
    "city": "南平市",
    "name": "武夷山市",
    "id": "350782000000"
  }, {
    "city": "南平市",
    "name": "建瓯市",
    "id": "350783000000"
  }],
  "350800000000": [{
    "city": "龙岩市",
    "name": "市辖区",
    "id": "350801000000"
  }, {
    "city": "龙岩市",
    "name": "新罗区",
    "id": "350802000000"
  }, {
    "city": "龙岩市",
    "name": "永定区",
    "id": "350803000000"
  }, {
    "city": "龙岩市",
    "name": "长汀县",
    "id": "350821000000"
  }, {
    "city": "龙岩市",
    "name": "上杭县",
    "id": "350823000000"
  }, {
    "city": "龙岩市",
    "name": "武平县",
    "id": "350824000000"
  }, {
    "city": "龙岩市",
    "name": "连城县",
    "id": "350825000000"
  }, {
    "city": "龙岩市",
    "name": "漳平市",
    "id": "350881000000"
  }],
  "350900000000": [{
    "city": "宁德市",
    "name": "市辖区",
    "id": "350901000000"
  }, {
    "city": "宁德市",
    "name": "蕉城区",
    "id": "350902000000"
  }, {
    "city": "宁德市",
    "name": "霞浦县",
    "id": "350921000000"
  }, {
    "city": "宁德市",
    "name": "古田县",
    "id": "350922000000"
  }, {
    "city": "宁德市",
    "name": "屏南县",
    "id": "350923000000"
  }, {
    "city": "宁德市",
    "name": "寿宁县",
    "id": "350924000000"
  }, {
    "city": "宁德市",
    "name": "周宁县",
    "id": "350925000000"
  }, {
    "city": "宁德市",
    "name": "柘荣县",
    "id": "350926000000"
  }, {
    "city": "宁德市",
    "name": "福安市",
    "id": "350981000000"
  }, {
    "city": "宁德市",
    "name": "福鼎市",
    "id": "350982000000"
  }],
  "360100000000": [{
    "city": "南昌市",
    "name": "市辖区",
    "id": "360101000000"
  }, {
    "city": "南昌市",
    "name": "东湖区",
    "id": "360102000000"
  }, {
    "city": "南昌市",
    "name": "西湖区",
    "id": "360103000000"
  }, {
    "city": "南昌市",
    "name": "青云谱区",
    "id": "360104000000"
  }, {
    "city": "南昌市",
    "name": "湾里区",
    "id": "360105000000"
  }, {
    "city": "南昌市",
    "name": "青山湖区",
    "id": "360111000000"
  }, {
    "city": "南昌市",
    "name": "新建区",
    "id": "360112000000"
  }, {
    "city": "南昌市",
    "name": "南昌县",
    "id": "360121000000"
  }, {
    "city": "南昌市",
    "name": "安义县",
    "id": "360123000000"
  }, {
    "city": "南昌市",
    "name": "进贤县",
    "id": "360124000000"
  }],
  "360200000000": [{
    "city": "景德镇市",
    "name": "市辖区",
    "id": "360201000000"
  }, {
    "city": "景德镇市",
    "name": "昌江区",
    "id": "360202000000"
  }, {
    "city": "景德镇市",
    "name": "珠山区",
    "id": "360203000000"
  }, {
    "city": "景德镇市",
    "name": "浮梁县",
    "id": "360222000000"
  }, {
    "city": "景德镇市",
    "name": "乐平市",
    "id": "360281000000"
  }],
  "360300000000": [{
    "city": "萍乡市",
    "name": "市辖区",
    "id": "360301000000"
  }, {
    "city": "萍乡市",
    "name": "安源区",
    "id": "360302000000"
  }, {
    "city": "萍乡市",
    "name": "湘东区",
    "id": "360313000000"
  }, {
    "city": "萍乡市",
    "name": "莲花县",
    "id": "360321000000"
  }, {
    "city": "萍乡市",
    "name": "上栗县",
    "id": "360322000000"
  }, {
    "city": "萍乡市",
    "name": "芦溪县",
    "id": "360323000000"
  }],
  "360400000000": [{
    "city": "九江市",
    "name": "市辖区",
    "id": "360401000000"
  }, {
    "city": "九江市",
    "name": "濂溪区",
    "id": "360402000000"
  }, {
    "city": "九江市",
    "name": "浔阳区",
    "id": "360403000000"
  }, {
    "city": "九江市",
    "name": "柴桑区",
    "id": "360404000000"
  }, {
    "city": "九江市",
    "name": "武宁县",
    "id": "360423000000"
  }, {
    "city": "九江市",
    "name": "修水县",
    "id": "360424000000"
  }, {
    "city": "九江市",
    "name": "永修县",
    "id": "360425000000"
  }, {
    "city": "九江市",
    "name": "德安县",
    "id": "360426000000"
  }, {
    "city": "九江市",
    "name": "都昌县",
    "id": "360428000000"
  }, {
    "city": "九江市",
    "name": "湖口县",
    "id": "360429000000"
  }, {
    "city": "九江市",
    "name": "彭泽县",
    "id": "360430000000"
  }, {
    "city": "九江市",
    "name": "瑞昌市",
    "id": "360481000000"
  }, {
    "city": "九江市",
    "name": "共青城市",
    "id": "360482000000"
  }, {
    "city": "九江市",
    "name": "庐山市",
    "id": "360483000000"
  }],
  "360500000000": [{
    "city": "新余市",
    "name": "市辖区",
    "id": "360501000000"
  }, {
    "city": "新余市",
    "name": "渝水区",
    "id": "360502000000"
  }, {
    "city": "新余市",
    "name": "分宜县",
    "id": "360521000000"
  }],
  "360600000000": [{
    "city": "鹰潭市",
    "name": "市辖区",
    "id": "360601000000"
  }, {
    "city": "鹰潭市",
    "name": "月湖区",
    "id": "360602000000"
  }, {
    "city": "鹰潭市",
    "name": "余江区",
    "id": "360603000000"
  }, {
    "city": "鹰潭市",
    "name": "贵溪市",
    "id": "360681000000"
  }],
  "360700000000": [{
    "city": "赣州市",
    "name": "市辖区",
    "id": "360701000000"
  }, {
    "city": "赣州市",
    "name": "章贡区",
    "id": "360702000000"
  }, {
    "city": "赣州市",
    "name": "南康区",
    "id": "360703000000"
  }, {
    "city": "赣州市",
    "name": "赣县区",
    "id": "360704000000"
  }, {
    "city": "赣州市",
    "name": "信丰县",
    "id": "360722000000"
  }, {
    "city": "赣州市",
    "name": "大余县",
    "id": "360723000000"
  }, {
    "city": "赣州市",
    "name": "上犹县",
    "id": "360724000000"
  }, {
    "city": "赣州市",
    "name": "崇义县",
    "id": "360725000000"
  }, {
    "city": "赣州市",
    "name": "安远县",
    "id": "360726000000"
  }, {
    "city": "赣州市",
    "name": "龙南县",
    "id": "360727000000"
  }, {
    "city": "赣州市",
    "name": "定南县",
    "id": "360728000000"
  }, {
    "city": "赣州市",
    "name": "全南县",
    "id": "360729000000"
  }, {
    "city": "赣州市",
    "name": "宁都县",
    "id": "360730000000"
  }, {
    "city": "赣州市",
    "name": "于都县",
    "id": "360731000000"
  }, {
    "city": "赣州市",
    "name": "兴国县",
    "id": "360732000000"
  }, {
    "city": "赣州市",
    "name": "会昌县",
    "id": "360733000000"
  }, {
    "city": "赣州市",
    "name": "寻乌县",
    "id": "360734000000"
  }, {
    "city": "赣州市",
    "name": "石城县",
    "id": "360735000000"
  }, {
    "city": "赣州市",
    "name": "瑞金市",
    "id": "360781000000"
  }],
  "360800000000": [{
    "city": "吉安市",
    "name": "市辖区",
    "id": "360801000000"
  }, {
    "city": "吉安市",
    "name": "吉州区",
    "id": "360802000000"
  }, {
    "city": "吉安市",
    "name": "青原区",
    "id": "360803000000"
  }, {
    "city": "吉安市",
    "name": "吉安县",
    "id": "360821000000"
  }, {
    "city": "吉安市",
    "name": "吉水县",
    "id": "360822000000"
  }, {
    "city": "吉安市",
    "name": "峡江县",
    "id": "360823000000"
  }, {
    "city": "吉安市",
    "name": "新干县",
    "id": "360824000000"
  }, {
    "city": "吉安市",
    "name": "永丰县",
    "id": "360825000000"
  }, {
    "city": "吉安市",
    "name": "泰和县",
    "id": "360826000000"
  }, {
    "city": "吉安市",
    "name": "遂川县",
    "id": "360827000000"
  }, {
    "city": "吉安市",
    "name": "万安县",
    "id": "360828000000"
  }, {
    "city": "吉安市",
    "name": "安福县",
    "id": "360829000000"
  }, {
    "city": "吉安市",
    "name": "永新县",
    "id": "360830000000"
  }, {
    "city": "吉安市",
    "name": "井冈山市",
    "id": "360881000000"
  }],
  "360900000000": [{
    "city": "宜春市",
    "name": "市辖区",
    "id": "360901000000"
  }, {
    "city": "宜春市",
    "name": "袁州区",
    "id": "360902000000"
  }, {
    "city": "宜春市",
    "name": "奉新县",
    "id": "360921000000"
  }, {
    "city": "宜春市",
    "name": "万载县",
    "id": "360922000000"
  }, {
    "city": "宜春市",
    "name": "上高县",
    "id": "360923000000"
  }, {
    "city": "宜春市",
    "name": "宜丰县",
    "id": "360924000000"
  }, {
    "city": "宜春市",
    "name": "靖安县",
    "id": "360925000000"
  }, {
    "city": "宜春市",
    "name": "铜鼓县",
    "id": "360926000000"
  }, {
    "city": "宜春市",
    "name": "丰城市",
    "id": "360981000000"
  }, {
    "city": "宜春市",
    "name": "樟树市",
    "id": "360982000000"
  }, {
    "city": "宜春市",
    "name": "高安市",
    "id": "360983000000"
  }],
  "361000000000": [{
    "city": "抚州市",
    "name": "市辖区",
    "id": "361001000000"
  }, {
    "city": "抚州市",
    "name": "临川区",
    "id": "361002000000"
  }, {
    "city": "抚州市",
    "name": "东乡区",
    "id": "361003000000"
  }, {
    "city": "抚州市",
    "name": "南城县",
    "id": "361021000000"
  }, {
    "city": "抚州市",
    "name": "黎川县",
    "id": "361022000000"
  }, {
    "city": "抚州市",
    "name": "南丰县",
    "id": "361023000000"
  }, {
    "city": "抚州市",
    "name": "崇仁县",
    "id": "361024000000"
  }, {
    "city": "抚州市",
    "name": "乐安县",
    "id": "361025000000"
  }, {
    "city": "抚州市",
    "name": "宜黄县",
    "id": "361026000000"
  }, {
    "city": "抚州市",
    "name": "金溪县",
    "id": "361027000000"
  }, {
    "city": "抚州市",
    "name": "资溪县",
    "id": "361028000000"
  }, {
    "city": "抚州市",
    "name": "广昌县",
    "id": "361030000000"
  }],
  "361100000000": [{
    "city": "上饶市",
    "name": "市辖区",
    "id": "361101000000"
  }, {
    "city": "上饶市",
    "name": "信州区",
    "id": "361102000000"
  }, {
    "city": "上饶市",
    "name": "广丰区",
    "id": "361103000000"
  }, {
    "city": "上饶市",
    "name": "上饶县",
    "id": "361121000000"
  }, {
    "city": "上饶市",
    "name": "玉山县",
    "id": "361123000000"
  }, {
    "city": "上饶市",
    "name": "铅山县",
    "id": "361124000000"
  }, {
    "city": "上饶市",
    "name": "横峰县",
    "id": "361125000000"
  }, {
    "city": "上饶市",
    "name": "弋阳县",
    "id": "361126000000"
  }, {
    "city": "上饶市",
    "name": "余干县",
    "id": "361127000000"
  }, {
    "city": "上饶市",
    "name": "鄱阳县",
    "id": "361128000000"
  }, {
    "city": "上饶市",
    "name": "万年县",
    "id": "361129000000"
  }, {
    "city": "上饶市",
    "name": "婺源县",
    "id": "361130000000"
  }, {
    "city": "上饶市",
    "name": "德兴市",
    "id": "361181000000"
  }],
  "370100000000": [{
    "city": "济南市",
    "name": "市辖区",
    "id": "370101000000"
  }, {
    "city": "济南市",
    "name": "历下区",
    "id": "370102000000"
  }, {
    "city": "济南市",
    "name": "市中区",
    "id": "370103000000"
  }, {
    "city": "济南市",
    "name": "槐荫区",
    "id": "370104000000"
  }, {
    "city": "济南市",
    "name": "天桥区",
    "id": "370105000000"
  }, {
    "city": "济南市",
    "name": "历城区",
    "id": "370112000000"
  }, {
    "city": "济南市",
    "name": "长清区",
    "id": "370113000000"
  }, {
    "city": "济南市",
    "name": "章丘区",
    "id": "370114000000"
  }, {
    "city": "济南市",
    "name": "济阳区",
    "id": "370115000000"
  }, {
    "city": "济南市",
    "name": "平阴县",
    "id": "370124000000"
  }, {
    "city": "济南市",
    "name": "商河县",
    "id": "370126000000"
  }, {
    "city": "济南市",
    "name": "济南高新技术产业开发区",
    "id": "370171000000"
  }],
  "370200000000": [{
    "city": "青岛市",
    "name": "市辖区",
    "id": "370201000000"
  }, {
    "city": "青岛市",
    "name": "市南区",
    "id": "370202000000"
  }, {
    "city": "青岛市",
    "name": "市北区",
    "id": "370203000000"
  }, {
    "city": "青岛市",
    "name": "黄岛区",
    "id": "370211000000"
  }, {
    "city": "青岛市",
    "name": "崂山区",
    "id": "370212000000"
  }, {
    "city": "青岛市",
    "name": "李沧区",
    "id": "370213000000"
  }, {
    "city": "青岛市",
    "name": "城阳区",
    "id": "370214000000"
  }, {
    "city": "青岛市",
    "name": "即墨区",
    "id": "370215000000"
  }, {
    "city": "青岛市",
    "name": "青岛高新技术产业开发区",
    "id": "370271000000"
  }, {
    "city": "青岛市",
    "name": "胶州市",
    "id": "370281000000"
  }, {
    "city": "青岛市",
    "name": "平度市",
    "id": "370283000000"
  }, {
    "city": "青岛市",
    "name": "莱西市",
    "id": "370285000000"
  }],
  "370300000000": [{
    "city": "淄博市",
    "name": "市辖区",
    "id": "370301000000"
  }, {
    "city": "淄博市",
    "name": "淄川区",
    "id": "370302000000"
  }, {
    "city": "淄博市",
    "name": "张店区",
    "id": "370303000000"
  }, {
    "city": "淄博市",
    "name": "博山区",
    "id": "370304000000"
  }, {
    "city": "淄博市",
    "name": "临淄区",
    "id": "370305000000"
  }, {
    "city": "淄博市",
    "name": "周村区",
    "id": "370306000000"
  }, {
    "city": "淄博市",
    "name": "桓台县",
    "id": "370321000000"
  }, {
    "city": "淄博市",
    "name": "高青县",
    "id": "370322000000"
  }, {
    "city": "淄博市",
    "name": "沂源县",
    "id": "370323000000"
  }],
  "370400000000": [{
    "city": "枣庄市",
    "name": "市辖区",
    "id": "370401000000"
  }, {
    "city": "枣庄市",
    "name": "市中区",
    "id": "370402000000"
  }, {
    "city": "枣庄市",
    "name": "薛城区",
    "id": "370403000000"
  }, {
    "city": "枣庄市",
    "name": "峄城区",
    "id": "370404000000"
  }, {
    "city": "枣庄市",
    "name": "台儿庄区",
    "id": "370405000000"
  }, {
    "city": "枣庄市",
    "name": "山亭区",
    "id": "370406000000"
  }, {
    "city": "枣庄市",
    "name": "滕州市",
    "id": "370481000000"
  }],
  "370500000000": [{
    "city": "东营市",
    "name": "市辖区",
    "id": "370501000000"
  }, {
    "city": "东营市",
    "name": "东营区",
    "id": "370502000000"
  }, {
    "city": "东营市",
    "name": "河口区",
    "id": "370503000000"
  }, {
    "city": "东营市",
    "name": "垦利区",
    "id": "370505000000"
  }, {
    "city": "东营市",
    "name": "利津县",
    "id": "370522000000"
  }, {
    "city": "东营市",
    "name": "广饶县",
    "id": "370523000000"
  }, {
    "city": "东营市",
    "name": "东营经济技术开发区",
    "id": "370571000000"
  }, {
    "city": "东营市",
    "name": "东营港经济开发区",
    "id": "370572000000"
  }],
  "370600000000": [{
    "city": "烟台市",
    "name": "市辖区",
    "id": "370601000000"
  }, {
    "city": "烟台市",
    "name": "芝罘区",
    "id": "370602000000"
  }, {
    "city": "烟台市",
    "name": "福山区",
    "id": "370611000000"
  }, {
    "city": "烟台市",
    "name": "牟平区",
    "id": "370612000000"
  }, {
    "city": "烟台市",
    "name": "莱山区",
    "id": "370613000000"
  }, {
    "city": "烟台市",
    "name": "长岛县",
    "id": "370634000000"
  }, {
    "city": "烟台市",
    "name": "烟台高新技术产业开发区",
    "id": "370671000000"
  }, {
    "city": "烟台市",
    "name": "烟台经济技术开发区",
    "id": "370672000000"
  }, {
    "city": "烟台市",
    "name": "龙口市",
    "id": "370681000000"
  }, {
    "city": "烟台市",
    "name": "莱阳市",
    "id": "370682000000"
  }, {
    "city": "烟台市",
    "name": "莱州市",
    "id": "370683000000"
  }, {
    "city": "烟台市",
    "name": "蓬莱市",
    "id": "370684000000"
  }, {
    "city": "烟台市",
    "name": "招远市",
    "id": "370685000000"
  }, {
    "city": "烟台市",
    "name": "栖霞市",
    "id": "370686000000"
  }, {
    "city": "烟台市",
    "name": "海阳市",
    "id": "370687000000"
  }],
  "370700000000": [{
    "city": "潍坊市",
    "name": "市辖区",
    "id": "370701000000"
  }, {
    "city": "潍坊市",
    "name": "潍城区",
    "id": "370702000000"
  }, {
    "city": "潍坊市",
    "name": "寒亭区",
    "id": "370703000000"
  }, {
    "city": "潍坊市",
    "name": "坊子区",
    "id": "370704000000"
  }, {
    "city": "潍坊市",
    "name": "奎文区",
    "id": "370705000000"
  }, {
    "city": "潍坊市",
    "name": "临朐县",
    "id": "370724000000"
  }, {
    "city": "潍坊市",
    "name": "昌乐县",
    "id": "370725000000"
  }, {
    "city": "潍坊市",
    "name": "潍坊滨海经济技术开发区",
    "id": "370772000000"
  }, {
    "city": "潍坊市",
    "name": "青州市",
    "id": "370781000000"
  }, {
    "city": "潍坊市",
    "name": "诸城市",
    "id": "370782000000"
  }, {
    "city": "潍坊市",
    "name": "寿光市",
    "id": "370783000000"
  }, {
    "city": "潍坊市",
    "name": "安丘市",
    "id": "370784000000"
  }, {
    "city": "潍坊市",
    "name": "高密市",
    "id": "370785000000"
  }, {
    "city": "潍坊市",
    "name": "昌邑市",
    "id": "370786000000"
  }],
  "370800000000": [{
    "city": "济宁市",
    "name": "市辖区",
    "id": "370801000000"
  }, {
    "city": "济宁市",
    "name": "任城区",
    "id": "370811000000"
  }, {
    "city": "济宁市",
    "name": "兖州区",
    "id": "370812000000"
  }, {
    "city": "济宁市",
    "name": "微山县",
    "id": "370826000000"
  }, {
    "city": "济宁市",
    "name": "鱼台县",
    "id": "370827000000"
  }, {
    "city": "济宁市",
    "name": "金乡县",
    "id": "370828000000"
  }, {
    "city": "济宁市",
    "name": "嘉祥县",
    "id": "370829000000"
  }, {
    "city": "济宁市",
    "name": "汶上县",
    "id": "370830000000"
  }, {
    "city": "济宁市",
    "name": "泗水县",
    "id": "370831000000"
  }, {
    "city": "济宁市",
    "name": "梁山县",
    "id": "370832000000"
  }, {
    "city": "济宁市",
    "name": "济宁高新技术产业开发区",
    "id": "370871000000"
  }, {
    "city": "济宁市",
    "name": "曲阜市",
    "id": "370881000000"
  }, {
    "city": "济宁市",
    "name": "邹城市",
    "id": "370883000000"
  }],
  "370900000000": [{
    "city": "泰安市",
    "name": "市辖区",
    "id": "370901000000"
  }, {
    "city": "泰安市",
    "name": "泰山区",
    "id": "370902000000"
  }, {
    "city": "泰安市",
    "name": "岱岳区",
    "id": "370911000000"
  }, {
    "city": "泰安市",
    "name": "宁阳县",
    "id": "370921000000"
  }, {
    "city": "泰安市",
    "name": "东平县",
    "id": "370923000000"
  }, {
    "city": "泰安市",
    "name": "新泰市",
    "id": "370982000000"
  }, {
    "city": "泰安市",
    "name": "肥城市",
    "id": "370983000000"
  }],
  "371000000000": [{
    "city": "威海市",
    "name": "市辖区",
    "id": "371001000000"
  }, {
    "city": "威海市",
    "name": "环翠区",
    "id": "371002000000"
  }, {
    "city": "威海市",
    "name": "文登区",
    "id": "371003000000"
  }, {
    "city": "威海市",
    "name": "威海火炬高技术产业开发区",
    "id": "371071000000"
  }, {
    "city": "威海市",
    "name": "威海经济技术开发区",
    "id": "371072000000"
  }, {
    "city": "威海市",
    "name": "威海临港经济技术开发区",
    "id": "371073000000"
  }, {
    "city": "威海市",
    "name": "荣成市",
    "id": "371082000000"
  }, {
    "city": "威海市",
    "name": "乳山市",
    "id": "371083000000"
  }],
  "371100000000": [{
    "city": "日照市",
    "name": "市辖区",
    "id": "371101000000"
  }, {
    "city": "日照市",
    "name": "东港区",
    "id": "371102000000"
  }, {
    "city": "日照市",
    "name": "岚山区",
    "id": "371103000000"
  }, {
    "city": "日照市",
    "name": "五莲县",
    "id": "371121000000"
  }, {
    "city": "日照市",
    "name": "莒县",
    "id": "371122000000"
  }, {
    "city": "日照市",
    "name": "日照经济技术开发区",
    "id": "371171000000"
  }],
  "371200000000": [{
    "city": "莱芜市",
    "name": "市辖区",
    "id": "371201000000"
  }, {
    "city": "莱芜市",
    "name": "莱城区",
    "id": "371202000000"
  }, {
    "city": "莱芜市",
    "name": "钢城区",
    "id": "371203000000"
  }],
  "371300000000": [{
    "city": "临沂市",
    "name": "市辖区",
    "id": "371301000000"
  }, {
    "city": "临沂市",
    "name": "兰山区",
    "id": "371302000000"
  }, {
    "city": "临沂市",
    "name": "罗庄区",
    "id": "371311000000"
  }, {
    "city": "临沂市",
    "name": "河东区",
    "id": "371312000000"
  }, {
    "city": "临沂市",
    "name": "沂南县",
    "id": "371321000000"
  }, {
    "city": "临沂市",
    "name": "郯城县",
    "id": "371322000000"
  }, {
    "city": "临沂市",
    "name": "沂水县",
    "id": "371323000000"
  }, {
    "city": "临沂市",
    "name": "兰陵县",
    "id": "371324000000"
  }, {
    "city": "临沂市",
    "name": "费县",
    "id": "371325000000"
  }, {
    "city": "临沂市",
    "name": "平邑县",
    "id": "371326000000"
  }, {
    "city": "临沂市",
    "name": "莒南县",
    "id": "371327000000"
  }, {
    "city": "临沂市",
    "name": "蒙阴县",
    "id": "371328000000"
  }, {
    "city": "临沂市",
    "name": "临沭县",
    "id": "371329000000"
  }, {
    "city": "临沂市",
    "name": "临沂高新技术产业开发区",
    "id": "371371000000"
  }, {
    "city": "临沂市",
    "name": "临沂经济技术开发区",
    "id": "371372000000"
  }, {
    "city": "临沂市",
    "name": "临沂临港经济开发区",
    "id": "371373000000"
  }],
  "371400000000": [{
    "city": "德州市",
    "name": "市辖区",
    "id": "371401000000"
  }, {
    "city": "德州市",
    "name": "德城区",
    "id": "371402000000"
  }, {
    "city": "德州市",
    "name": "陵城区",
    "id": "371403000000"
  }, {
    "city": "德州市",
    "name": "宁津县",
    "id": "371422000000"
  }, {
    "city": "德州市",
    "name": "庆云县",
    "id": "371423000000"
  }, {
    "city": "德州市",
    "name": "临邑县",
    "id": "371424000000"
  }, {
    "city": "德州市",
    "name": "齐河县",
    "id": "371425000000"
  }, {
    "city": "德州市",
    "name": "平原县",
    "id": "371426000000"
  }, {
    "city": "德州市",
    "name": "夏津县",
    "id": "371427000000"
  }, {
    "city": "德州市",
    "name": "武城县",
    "id": "371428000000"
  }, {
    "city": "德州市",
    "name": "德州经济技术开发区",
    "id": "371471000000"
  }, {
    "city": "德州市",
    "name": "德州运河经济开发区",
    "id": "371472000000"
  }, {
    "city": "德州市",
    "name": "乐陵市",
    "id": "371481000000"
  }, {
    "city": "德州市",
    "name": "禹城市",
    "id": "371482000000"
  }],
  "371500000000": [{
    "city": "聊城市",
    "name": "市辖区",
    "id": "371501000000"
  }, {
    "city": "聊城市",
    "name": "东昌府区",
    "id": "371502000000"
  }, {
    "city": "聊城市",
    "name": "阳谷县",
    "id": "371521000000"
  }, {
    "city": "聊城市",
    "name": "莘县",
    "id": "371522000000"
  }, {
    "city": "聊城市",
    "name": "茌平县",
    "id": "371523000000"
  }, {
    "city": "聊城市",
    "name": "东阿县",
    "id": "371524000000"
  }, {
    "city": "聊城市",
    "name": "冠县",
    "id": "371525000000"
  }, {
    "city": "聊城市",
    "name": "高唐县",
    "id": "371526000000"
  }, {
    "city": "聊城市",
    "name": "临清市",
    "id": "371581000000"
  }],
  "371600000000": [{
    "city": "滨州市",
    "name": "市辖区",
    "id": "371601000000"
  }, {
    "city": "滨州市",
    "name": "滨城区",
    "id": "371602000000"
  }, {
    "city": "滨州市",
    "name": "沾化区",
    "id": "371603000000"
  }, {
    "city": "滨州市",
    "name": "惠民县",
    "id": "371621000000"
  }, {
    "city": "滨州市",
    "name": "阳信县",
    "id": "371622000000"
  }, {
    "city": "滨州市",
    "name": "无棣县",
    "id": "371623000000"
  }, {
    "city": "滨州市",
    "name": "博兴县",
    "id": "371625000000"
  }, {
    "city": "滨州市",
    "name": "邹平市",
    "id": "371681000000"
  }],
  "371700000000": [{
    "city": "菏泽市",
    "name": "市辖区",
    "id": "371701000000"
  }, {
    "city": "菏泽市",
    "name": "牡丹区",
    "id": "371702000000"
  }, {
    "city": "菏泽市",
    "name": "定陶区",
    "id": "371703000000"
  }, {
    "city": "菏泽市",
    "name": "曹县",
    "id": "371721000000"
  }, {
    "city": "菏泽市",
    "name": "单县",
    "id": "371722000000"
  }, {
    "city": "菏泽市",
    "name": "成武县",
    "id": "371723000000"
  }, {
    "city": "菏泽市",
    "name": "巨野县",
    "id": "371724000000"
  }, {
    "city": "菏泽市",
    "name": "郓城县",
    "id": "371725000000"
  }, {
    "city": "菏泽市",
    "name": "鄄城县",
    "id": "371726000000"
  }, {
    "city": "菏泽市",
    "name": "东明县",
    "id": "371728000000"
  }, {
    "city": "菏泽市",
    "name": "菏泽经济技术开发区",
    "id": "371771000000"
  }, {
    "city": "菏泽市",
    "name": "菏泽高新技术开发区",
    "id": "371772000000"
  }],
  "410100000000": [{
    "city": "郑州市",
    "name": "市辖区",
    "id": "410101000000"
  }, {
    "city": "郑州市",
    "name": "中原区",
    "id": "410102000000"
  }, {
    "city": "郑州市",
    "name": "二七区",
    "id": "410103000000"
  }, {
    "city": "郑州市",
    "name": "管城回族区",
    "id": "410104000000"
  }, {
    "city": "郑州市",
    "name": "金水区",
    "id": "410105000000"
  }, {
    "city": "郑州市",
    "name": "上街区",
    "id": "410106000000"
  }, {
    "city": "郑州市",
    "name": "惠济区",
    "id": "410108000000"
  }, {
    "city": "郑州市",
    "name": "中牟县",
    "id": "410122000000"
  }, {
    "city": "郑州市",
    "name": "郑州经济技术开发区",
    "id": "410171000000"
  }, {
    "city": "郑州市",
    "name": "郑州高新技术产业开发区",
    "id": "410172000000"
  }, {
    "city": "郑州市",
    "name": "郑州航空港经济综合实验区",
    "id": "410173000000"
  }, {
    "city": "郑州市",
    "name": "巩义市",
    "id": "410181000000"
  }, {
    "city": "郑州市",
    "name": "荥阳市",
    "id": "410182000000"
  }, {
    "city": "郑州市",
    "name": "新密市",
    "id": "410183000000"
  }, {
    "city": "郑州市",
    "name": "新郑市",
    "id": "410184000000"
  }, {
    "city": "郑州市",
    "name": "登封市",
    "id": "410185000000"
  }],
  "410200000000": [{
    "city": "开封市",
    "name": "市辖区",
    "id": "410201000000"
  }, {
    "city": "开封市",
    "name": "龙亭区",
    "id": "410202000000"
  }, {
    "city": "开封市",
    "name": "顺河回族区",
    "id": "410203000000"
  }, {
    "city": "开封市",
    "name": "鼓楼区",
    "id": "410204000000"
  }, {
    "city": "开封市",
    "name": "禹王台区",
    "id": "410205000000"
  }, {
    "city": "开封市",
    "name": "祥符区",
    "id": "410212000000"
  }, {
    "city": "开封市",
    "name": "杞县",
    "id": "410221000000"
  }, {
    "city": "开封市",
    "name": "通许县",
    "id": "410222000000"
  }, {
    "city": "开封市",
    "name": "尉氏县",
    "id": "410223000000"
  }, {
    "city": "开封市",
    "name": "兰考县",
    "id": "410225000000"
  }],
  "410300000000": [{
    "city": "洛阳市",
    "name": "市辖区",
    "id": "410301000000"
  }, {
    "city": "洛阳市",
    "name": "老城区",
    "id": "410302000000"
  }, {
    "city": "洛阳市",
    "name": "西工区",
    "id": "410303000000"
  }, {
    "city": "洛阳市",
    "name": "瀍河回族区",
    "id": "410304000000"
  }, {
    "city": "洛阳市",
    "name": "涧西区",
    "id": "410305000000"
  }, {
    "city": "洛阳市",
    "name": "吉利区",
    "id": "410306000000"
  }, {
    "city": "洛阳市",
    "name": "洛龙区",
    "id": "410311000000"
  }, {
    "city": "洛阳市",
    "name": "孟津县",
    "id": "410322000000"
  }, {
    "city": "洛阳市",
    "name": "新安县",
    "id": "410323000000"
  }, {
    "city": "洛阳市",
    "name": "栾川县",
    "id": "410324000000"
  }, {
    "city": "洛阳市",
    "name": "嵩县",
    "id": "410325000000"
  }, {
    "city": "洛阳市",
    "name": "汝阳县",
    "id": "410326000000"
  }, {
    "city": "洛阳市",
    "name": "宜阳县",
    "id": "410327000000"
  }, {
    "city": "洛阳市",
    "name": "洛宁县",
    "id": "410328000000"
  }, {
    "city": "洛阳市",
    "name": "伊川县",
    "id": "410329000000"
  }, {
    "city": "洛阳市",
    "name": "洛阳高新技术产业开发区",
    "id": "410371000000"
  }, {
    "city": "洛阳市",
    "name": "偃师市",
    "id": "410381000000"
  }],
  "410400000000": [{
    "city": "平顶山市",
    "name": "市辖区",
    "id": "410401000000"
  }, {
    "city": "平顶山市",
    "name": "新华区",
    "id": "410402000000"
  }, {
    "city": "平顶山市",
    "name": "卫东区",
    "id": "410403000000"
  }, {
    "city": "平顶山市",
    "name": "石龙区",
    "id": "410404000000"
  }, {
    "city": "平顶山市",
    "name": "湛河区",
    "id": "410411000000"
  }, {
    "city": "平顶山市",
    "name": "宝丰县",
    "id": "410421000000"
  }, {
    "city": "平顶山市",
    "name": "叶县",
    "id": "410422000000"
  }, {
    "city": "平顶山市",
    "name": "鲁山县",
    "id": "410423000000"
  }, {
    "city": "平顶山市",
    "name": "郏县",
    "id": "410425000000"
  }, {
    "city": "平顶山市",
    "name": "平顶山高新技术产业开发区",
    "id": "410471000000"
  }, {
    "city": "平顶山市",
    "name": "平顶山市新城区",
    "id": "410472000000"
  }, {
    "city": "平顶山市",
    "name": "舞钢市",
    "id": "410481000000"
  }, {
    "city": "平顶山市",
    "name": "汝州市",
    "id": "410482000000"
  }],
  "410500000000": [{
    "city": "安阳市",
    "name": "市辖区",
    "id": "410501000000"
  }, {
    "city": "安阳市",
    "name": "文峰区",
    "id": "410502000000"
  }, {
    "city": "安阳市",
    "name": "北关区",
    "id": "410503000000"
  }, {
    "city": "安阳市",
    "name": "殷都区",
    "id": "410505000000"
  }, {
    "city": "安阳市",
    "name": "龙安区",
    "id": "410506000000"
  }, {
    "city": "安阳市",
    "name": "安阳县",
    "id": "410522000000"
  }, {
    "city": "安阳市",
    "name": "汤阴县",
    "id": "410523000000"
  }, {
    "city": "安阳市",
    "name": "滑县",
    "id": "410526000000"
  }, {
    "city": "安阳市",
    "name": "内黄县",
    "id": "410527000000"
  }, {
    "city": "安阳市",
    "name": "安阳高新技术产业开发区",
    "id": "410571000000"
  }, {
    "city": "安阳市",
    "name": "林州市",
    "id": "410581000000"
  }],
  "410600000000": [{
    "city": "鹤壁市",
    "name": "市辖区",
    "id": "410601000000"
  }, {
    "city": "鹤壁市",
    "name": "鹤山区",
    "id": "410602000000"
  }, {
    "city": "鹤壁市",
    "name": "山城区",
    "id": "410603000000"
  }, {
    "city": "鹤壁市",
    "name": "淇滨区",
    "id": "410611000000"
  }, {
    "city": "鹤壁市",
    "name": "浚县",
    "id": "410621000000"
  }, {
    "city": "鹤壁市",
    "name": "淇县",
    "id": "410622000000"
  }, {
    "city": "鹤壁市",
    "name": "鹤壁经济技术开发区",
    "id": "410671000000"
  }],
  "410700000000": [{
    "city": "新乡市",
    "name": "市辖区",
    "id": "410701000000"
  }, {
    "city": "新乡市",
    "name": "红旗区",
    "id": "410702000000"
  }, {
    "city": "新乡市",
    "name": "卫滨区",
    "id": "410703000000"
  }, {
    "city": "新乡市",
    "name": "凤泉区",
    "id": "410704000000"
  }, {
    "city": "新乡市",
    "name": "牧野区",
    "id": "410711000000"
  }, {
    "city": "新乡市",
    "name": "新乡县",
    "id": "410721000000"
  }, {
    "city": "新乡市",
    "name": "获嘉县",
    "id": "410724000000"
  }, {
    "city": "新乡市",
    "name": "原阳县",
    "id": "410725000000"
  }, {
    "city": "新乡市",
    "name": "延津县",
    "id": "410726000000"
  }, {
    "city": "新乡市",
    "name": "封丘县",
    "id": "410727000000"
  }, {
    "city": "新乡市",
    "name": "长垣县",
    "id": "410728000000"
  }, {
    "city": "新乡市",
    "name": "新乡高新技术产业开发区",
    "id": "410771000000"
  }, {
    "city": "新乡市",
    "name": "新乡经济技术开发区",
    "id": "410772000000"
  }, {
    "city": "新乡市",
    "name": "新乡市平原城乡一体化示范区",
    "id": "410773000000"
  }, {
    "city": "新乡市",
    "name": "卫辉市",
    "id": "410781000000"
  }, {
    "city": "新乡市",
    "name": "辉县市",
    "id": "410782000000"
  }],
  "410800000000": [{
    "city": "焦作市",
    "name": "市辖区",
    "id": "410801000000"
  }, {
    "city": "焦作市",
    "name": "解放区",
    "id": "410802000000"
  }, {
    "city": "焦作市",
    "name": "中站区",
    "id": "410803000000"
  }, {
    "city": "焦作市",
    "name": "马村区",
    "id": "410804000000"
  }, {
    "city": "焦作市",
    "name": "山阳区",
    "id": "410811000000"
  }, {
    "city": "焦作市",
    "name": "修武县",
    "id": "410821000000"
  }, {
    "city": "焦作市",
    "name": "博爱县",
    "id": "410822000000"
  }, {
    "city": "焦作市",
    "name": "武陟县",
    "id": "410823000000"
  }, {
    "city": "焦作市",
    "name": "温县",
    "id": "410825000000"
  }, {
    "city": "焦作市",
    "name": "焦作城乡一体化示范区",
    "id": "410871000000"
  }, {
    "city": "焦作市",
    "name": "沁阳市",
    "id": "410882000000"
  }, {
    "city": "焦作市",
    "name": "孟州市",
    "id": "410883000000"
  }],
  "410900000000": [{
    "city": "濮阳市",
    "name": "市辖区",
    "id": "410901000000"
  }, {
    "city": "濮阳市",
    "name": "华龙区",
    "id": "410902000000"
  }, {
    "city": "濮阳市",
    "name": "清丰县",
    "id": "410922000000"
  }, {
    "city": "濮阳市",
    "name": "南乐县",
    "id": "410923000000"
  }, {
    "city": "濮阳市",
    "name": "范县",
    "id": "410926000000"
  }, {
    "city": "濮阳市",
    "name": "台前县",
    "id": "410927000000"
  }, {
    "city": "濮阳市",
    "name": "濮阳县",
    "id": "410928000000"
  }, {
    "city": "濮阳市",
    "name": "河南濮阳工业园区",
    "id": "410971000000"
  }, {
    "city": "濮阳市",
    "name": "濮阳经济技术开发区",
    "id": "410972000000"
  }],
  "411000000000": [{
    "city": "许昌市",
    "name": "市辖区",
    "id": "411001000000"
  }, {
    "city": "许昌市",
    "name": "魏都区",
    "id": "411002000000"
  }, {
    "city": "许昌市",
    "name": "建安区",
    "id": "411003000000"
  }, {
    "city": "许昌市",
    "name": "鄢陵县",
    "id": "411024000000"
  }, {
    "city": "许昌市",
    "name": "襄城县",
    "id": "411025000000"
  }, {
    "city": "许昌市",
    "name": "许昌经济技术开发区",
    "id": "411071000000"
  }, {
    "city": "许昌市",
    "name": "禹州市",
    "id": "411081000000"
  }, {
    "city": "许昌市",
    "name": "长葛市",
    "id": "411082000000"
  }],
  "411100000000": [{
    "city": "漯河市",
    "name": "市辖区",
    "id": "411101000000"
  }, {
    "city": "漯河市",
    "name": "源汇区",
    "id": "411102000000"
  }, {
    "city": "漯河市",
    "name": "郾城区",
    "id": "411103000000"
  }, {
    "city": "漯河市",
    "name": "召陵区",
    "id": "411104000000"
  }, {
    "city": "漯河市",
    "name": "舞阳县",
    "id": "411121000000"
  }, {
    "city": "漯河市",
    "name": "临颍县",
    "id": "411122000000"
  }, {
    "city": "漯河市",
    "name": "漯河经济技术开发区",
    "id": "411171000000"
  }],
  "411200000000": [{
    "city": "三门峡市",
    "name": "市辖区",
    "id": "411201000000"
  }, {
    "city": "三门峡市",
    "name": "湖滨区",
    "id": "411202000000"
  }, {
    "city": "三门峡市",
    "name": "陕州区",
    "id": "411203000000"
  }, {
    "city": "三门峡市",
    "name": "渑池县",
    "id": "411221000000"
  }, {
    "city": "三门峡市",
    "name": "卢氏县",
    "id": "411224000000"
  }, {
    "city": "三门峡市",
    "name": "河南三门峡经济开发区",
    "id": "411271000000"
  }, {
    "city": "三门峡市",
    "name": "义马市",
    "id": "411281000000"
  }, {
    "city": "三门峡市",
    "name": "灵宝市",
    "id": "411282000000"
  }],
  "411300000000": [{
    "city": "南阳市",
    "name": "市辖区",
    "id": "411301000000"
  }, {
    "city": "南阳市",
    "name": "宛城区",
    "id": "411302000000"
  }, {
    "city": "南阳市",
    "name": "卧龙区",
    "id": "411303000000"
  }, {
    "city": "南阳市",
    "name": "南召县",
    "id": "411321000000"
  }, {
    "city": "南阳市",
    "name": "方城县",
    "id": "411322000000"
  }, {
    "city": "南阳市",
    "name": "西峡县",
    "id": "411323000000"
  }, {
    "city": "南阳市",
    "name": "镇平县",
    "id": "411324000000"
  }, {
    "city": "南阳市",
    "name": "内乡县",
    "id": "411325000000"
  }, {
    "city": "南阳市",
    "name": "淅川县",
    "id": "411326000000"
  }, {
    "city": "南阳市",
    "name": "社旗县",
    "id": "411327000000"
  }, {
    "city": "南阳市",
    "name": "唐河县",
    "id": "411328000000"
  }, {
    "city": "南阳市",
    "name": "新野县",
    "id": "411329000000"
  }, {
    "city": "南阳市",
    "name": "桐柏县",
    "id": "411330000000"
  }, {
    "city": "南阳市",
    "name": "南阳高新技术产业开发区",
    "id": "411371000000"
  }, {
    "city": "南阳市",
    "name": "南阳市城乡一体化示范区",
    "id": "411372000000"
  }, {
    "city": "南阳市",
    "name": "邓州市",
    "id": "411381000000"
  }],
  "411400000000": [{
    "city": "商丘市",
    "name": "市辖区",
    "id": "411401000000"
  }, {
    "city": "商丘市",
    "name": "梁园区",
    "id": "411402000000"
  }, {
    "city": "商丘市",
    "name": "睢阳区",
    "id": "411403000000"
  }, {
    "city": "商丘市",
    "name": "民权县",
    "id": "411421000000"
  }, {
    "city": "商丘市",
    "name": "睢县",
    "id": "411422000000"
  }, {
    "city": "商丘市",
    "name": "宁陵县",
    "id": "411423000000"
  }, {
    "city": "商丘市",
    "name": "柘城县",
    "id": "411424000000"
  }, {
    "city": "商丘市",
    "name": "虞城县",
    "id": "411425000000"
  }, {
    "city": "商丘市",
    "name": "夏邑县",
    "id": "411426000000"
  }, {
    "city": "商丘市",
    "name": "豫东综合物流产业聚集区",
    "id": "411471000000"
  }, {
    "city": "商丘市",
    "name": "河南商丘经济开发区",
    "id": "411472000000"
  }, {
    "city": "商丘市",
    "name": "永城市",
    "id": "411481000000"
  }],
  "411500000000": [{
    "city": "信阳市",
    "name": "市辖区",
    "id": "411501000000"
  }, {
    "city": "信阳市",
    "name": "浉河区",
    "id": "411502000000"
  }, {
    "city": "信阳市",
    "name": "平桥区",
    "id": "411503000000"
  }, {
    "city": "信阳市",
    "name": "罗山县",
    "id": "411521000000"
  }, {
    "city": "信阳市",
    "name": "光山县",
    "id": "411522000000"
  }, {
    "city": "信阳市",
    "name": "新县",
    "id": "411523000000"
  }, {
    "city": "信阳市",
    "name": "商城县",
    "id": "411524000000"
  }, {
    "city": "信阳市",
    "name": "固始县",
    "id": "411525000000"
  }, {
    "city": "信阳市",
    "name": "潢川县",
    "id": "411526000000"
  }, {
    "city": "信阳市",
    "name": "淮滨县",
    "id": "411527000000"
  }, {
    "city": "信阳市",
    "name": "息县",
    "id": "411528000000"
  }, {
    "city": "信阳市",
    "name": "信阳高新技术产业开发区",
    "id": "411571000000"
  }],
  "411600000000": [{
    "city": "周口市",
    "name": "市辖区",
    "id": "411601000000"
  }, {
    "city": "周口市",
    "name": "川汇区",
    "id": "411602000000"
  }, {
    "city": "周口市",
    "name": "扶沟县",
    "id": "411621000000"
  }, {
    "city": "周口市",
    "name": "西华县",
    "id": "411622000000"
  }, {
    "city": "周口市",
    "name": "商水县",
    "id": "411623000000"
  }, {
    "city": "周口市",
    "name": "沈丘县",
    "id": "411624000000"
  }, {
    "city": "周口市",
    "name": "郸城县",
    "id": "411625000000"
  }, {
    "city": "周口市",
    "name": "淮阳县",
    "id": "411626000000"
  }, {
    "city": "周口市",
    "name": "太康县",
    "id": "411627000000"
  }, {
    "city": "周口市",
    "name": "鹿邑县",
    "id": "411628000000"
  }, {
    "city": "周口市",
    "name": "河南周口经济开发区",
    "id": "411671000000"
  }, {
    "city": "周口市",
    "name": "项城市",
    "id": "411681000000"
  }],
  "411700000000": [{
    "city": "驻马店市",
    "name": "市辖区",
    "id": "411701000000"
  }, {
    "city": "驻马店市",
    "name": "驿城区",
    "id": "411702000000"
  }, {
    "city": "驻马店市",
    "name": "西平县",
    "id": "411721000000"
  }, {
    "city": "驻马店市",
    "name": "上蔡县",
    "id": "411722000000"
  }, {
    "city": "驻马店市",
    "name": "平舆县",
    "id": "411723000000"
  }, {
    "city": "驻马店市",
    "name": "正阳县",
    "id": "411724000000"
  }, {
    "city": "驻马店市",
    "name": "确山县",
    "id": "411725000000"
  }, {
    "city": "驻马店市",
    "name": "泌阳县",
    "id": "411726000000"
  }, {
    "city": "驻马店市",
    "name": "汝南县",
    "id": "411727000000"
  }, {
    "city": "驻马店市",
    "name": "遂平县",
    "id": "411728000000"
  }, {
    "city": "驻马店市",
    "name": "新蔡县",
    "id": "411729000000"
  }, {
    "city": "驻马店市",
    "name": "河南驻马店经济开发区",
    "id": "411771000000"
  }],
  "419000000000": [{
    "city": "省直辖县级行政区划",
    "name": "济源市",
    "id": "419001000000"
  }],
  "420100000000": [{
    "city": "武汉市",
    "name": "市辖区",
    "id": "420101000000"
  }, {
    "city": "武汉市",
    "name": "江岸区",
    "id": "420102000000"
  }, {
    "city": "武汉市",
    "name": "江汉区",
    "id": "420103000000"
  }, {
    "city": "武汉市",
    "name": "硚口区",
    "id": "420104000000"
  }, {
    "city": "武汉市",
    "name": "汉阳区",
    "id": "420105000000"
  }, {
    "city": "武汉市",
    "name": "武昌区",
    "id": "420106000000"
  }, {
    "city": "武汉市",
    "name": "青山区",
    "id": "420107000000"
  }, {
    "city": "武汉市",
    "name": "洪山区",
    "id": "420111000000"
  }, {
    "city": "武汉市",
    "name": "东西湖区",
    "id": "420112000000"
  }, {
    "city": "武汉市",
    "name": "汉南区",
    "id": "420113000000"
  }, {
    "city": "武汉市",
    "name": "蔡甸区",
    "id": "420114000000"
  }, {
    "city": "武汉市",
    "name": "江夏区",
    "id": "420115000000"
  }, {
    "city": "武汉市",
    "name": "黄陂区",
    "id": "420116000000"
  }, {
    "city": "武汉市",
    "name": "新洲区",
    "id": "420117000000"
  }],
  "420200000000": [{
    "city": "黄石市",
    "name": "市辖区",
    "id": "420201000000"
  }, {
    "city": "黄石市",
    "name": "黄石港区",
    "id": "420202000000"
  }, {
    "city": "黄石市",
    "name": "西塞山区",
    "id": "420203000000"
  }, {
    "city": "黄石市",
    "name": "下陆区",
    "id": "420204000000"
  }, {
    "city": "黄石市",
    "name": "铁山区",
    "id": "420205000000"
  }, {
    "city": "黄石市",
    "name": "阳新县",
    "id": "420222000000"
  }, {
    "city": "黄石市",
    "name": "大冶市",
    "id": "420281000000"
  }],
  "420300000000": [{
    "city": "十堰市",
    "name": "市辖区",
    "id": "420301000000"
  }, {
    "city": "十堰市",
    "name": "茅箭区",
    "id": "420302000000"
  }, {
    "city": "十堰市",
    "name": "张湾区",
    "id": "420303000000"
  }, {
    "city": "十堰市",
    "name": "郧阳区",
    "id": "420304000000"
  }, {
    "city": "十堰市",
    "name": "郧西县",
    "id": "420322000000"
  }, {
    "city": "十堰市",
    "name": "竹山县",
    "id": "420323000000"
  }, {
    "city": "十堰市",
    "name": "竹溪县",
    "id": "420324000000"
  }, {
    "city": "十堰市",
    "name": "房县",
    "id": "420325000000"
  }, {
    "city": "十堰市",
    "name": "丹江口市",
    "id": "420381000000"
  }],
  "420500000000": [{
    "city": "宜昌市",
    "name": "市辖区",
    "id": "420501000000"
  }, {
    "city": "宜昌市",
    "name": "西陵区",
    "id": "420502000000"
  }, {
    "city": "宜昌市",
    "name": "伍家岗区",
    "id": "420503000000"
  }, {
    "city": "宜昌市",
    "name": "点军区",
    "id": "420504000000"
  }, {
    "city": "宜昌市",
    "name": "猇亭区",
    "id": "420505000000"
  }, {
    "city": "宜昌市",
    "name": "夷陵区",
    "id": "420506000000"
  }, {
    "city": "宜昌市",
    "name": "远安县",
    "id": "420525000000"
  }, {
    "city": "宜昌市",
    "name": "兴山县",
    "id": "420526000000"
  }, {
    "city": "宜昌市",
    "name": "秭归县",
    "id": "420527000000"
  }, {
    "city": "宜昌市",
    "name": "长阳土家族自治县",
    "id": "420528000000"
  }, {
    "city": "宜昌市",
    "name": "五峰土家族自治县",
    "id": "420529000000"
  }, {
    "city": "宜昌市",
    "name": "宜都市",
    "id": "420581000000"
  }, {
    "city": "宜昌市",
    "name": "当阳市",
    "id": "420582000000"
  }, {
    "city": "宜昌市",
    "name": "枝江市",
    "id": "420583000000"
  }],
  "420600000000": [{
    "city": "襄阳市",
    "name": "市辖区",
    "id": "420601000000"
  }, {
    "city": "襄阳市",
    "name": "襄城区",
    "id": "420602000000"
  }, {
    "city": "襄阳市",
    "name": "樊城区",
    "id": "420606000000"
  }, {
    "city": "襄阳市",
    "name": "襄州区",
    "id": "420607000000"
  }, {
    "city": "襄阳市",
    "name": "南漳县",
    "id": "420624000000"
  }, {
    "city": "襄阳市",
    "name": "谷城县",
    "id": "420625000000"
  }, {
    "city": "襄阳市",
    "name": "保康县",
    "id": "420626000000"
  }, {
    "city": "襄阳市",
    "name": "老河口市",
    "id": "420682000000"
  }, {
    "city": "襄阳市",
    "name": "枣阳市",
    "id": "420683000000"
  }, {
    "city": "襄阳市",
    "name": "宜城市",
    "id": "420684000000"
  }],
  "420700000000": [{
    "city": "鄂州市",
    "name": "市辖区",
    "id": "420701000000"
  }, {
    "city": "鄂州市",
    "name": "梁子湖区",
    "id": "420702000000"
  }, {
    "city": "鄂州市",
    "name": "华容区",
    "id": "420703000000"
  }, {
    "city": "鄂州市",
    "name": "鄂城区",
    "id": "420704000000"
  }],
  "420800000000": [{
    "city": "荆门市",
    "name": "市辖区",
    "id": "420801000000"
  }, {
    "city": "荆门市",
    "name": "东宝区",
    "id": "420802000000"
  }, {
    "city": "荆门市",
    "name": "掇刀区",
    "id": "420804000000"
  }, {
    "city": "荆门市",
    "name": "沙洋县",
    "id": "420822000000"
  }, {
    "city": "荆门市",
    "name": "钟祥市",
    "id": "420881000000"
  }, {
    "city": "荆门市",
    "name": "京山市",
    "id": "420882000000"
  }],
  "420900000000": [{
    "city": "孝感市",
    "name": "市辖区",
    "id": "420901000000"
  }, {
    "city": "孝感市",
    "name": "孝南区",
    "id": "420902000000"
  }, {
    "city": "孝感市",
    "name": "孝昌县",
    "id": "420921000000"
  }, {
    "city": "孝感市",
    "name": "大悟县",
    "id": "420922000000"
  }, {
    "city": "孝感市",
    "name": "云梦县",
    "id": "420923000000"
  }, {
    "city": "孝感市",
    "name": "应城市",
    "id": "420981000000"
  }, {
    "city": "孝感市",
    "name": "安陆市",
    "id": "420982000000"
  }, {
    "city": "孝感市",
    "name": "汉川市",
    "id": "420984000000"
  }],
  "421000000000": [{
    "city": "荆州市",
    "name": "市辖区",
    "id": "421001000000"
  }, {
    "city": "荆州市",
    "name": "沙市区",
    "id": "421002000000"
  }, {
    "city": "荆州市",
    "name": "荆州区",
    "id": "421003000000"
  }, {
    "city": "荆州市",
    "name": "公安县",
    "id": "421022000000"
  }, {
    "city": "荆州市",
    "name": "监利县",
    "id": "421023000000"
  }, {
    "city": "荆州市",
    "name": "江陵县",
    "id": "421024000000"
  }, {
    "city": "荆州市",
    "name": "荆州经济技术开发区",
    "id": "421071000000"
  }, {
    "city": "荆州市",
    "name": "石首市",
    "id": "421081000000"
  }, {
    "city": "荆州市",
    "name": "洪湖市",
    "id": "421083000000"
  }, {
    "city": "荆州市",
    "name": "松滋市",
    "id": "421087000000"
  }],
  "421100000000": [{
    "city": "黄冈市",
    "name": "市辖区",
    "id": "421101000000"
  }, {
    "city": "黄冈市",
    "name": "黄州区",
    "id": "421102000000"
  }, {
    "city": "黄冈市",
    "name": "团风县",
    "id": "421121000000"
  }, {
    "city": "黄冈市",
    "name": "红安县",
    "id": "421122000000"
  }, {
    "city": "黄冈市",
    "name": "罗田县",
    "id": "421123000000"
  }, {
    "city": "黄冈市",
    "name": "英山县",
    "id": "421124000000"
  }, {
    "city": "黄冈市",
    "name": "浠水县",
    "id": "421125000000"
  }, {
    "city": "黄冈市",
    "name": "蕲春县",
    "id": "421126000000"
  }, {
    "city": "黄冈市",
    "name": "黄梅县",
    "id": "421127000000"
  }, {
    "city": "黄冈市",
    "name": "龙感湖管理区",
    "id": "421171000000"
  }, {
    "city": "黄冈市",
    "name": "麻城市",
    "id": "421181000000"
  }, {
    "city": "黄冈市",
    "name": "武穴市",
    "id": "421182000000"
  }],
  "421200000000": [{
    "city": "咸宁市",
    "name": "市辖区",
    "id": "421201000000"
  }, {
    "city": "咸宁市",
    "name": "咸安区",
    "id": "421202000000"
  }, {
    "city": "咸宁市",
    "name": "嘉鱼县",
    "id": "421221000000"
  }, {
    "city": "咸宁市",
    "name": "通城县",
    "id": "421222000000"
  }, {
    "city": "咸宁市",
    "name": "崇阳县",
    "id": "421223000000"
  }, {
    "city": "咸宁市",
    "name": "通山县",
    "id": "421224000000"
  }, {
    "city": "咸宁市",
    "name": "赤壁市",
    "id": "421281000000"
  }],
  "421300000000": [{
    "city": "随州市",
    "name": "市辖区",
    "id": "421301000000"
  }, {
    "city": "随州市",
    "name": "曾都区",
    "id": "421303000000"
  }, {
    "city": "随州市",
    "name": "随县",
    "id": "421321000000"
  }, {
    "city": "随州市",
    "name": "广水市",
    "id": "421381000000"
  }],
  "422800000000": [{
    "city": "恩施土家族苗族自治州",
    "name": "恩施市",
    "id": "422801000000"
  }, {
    "city": "恩施土家族苗族自治州",
    "name": "利川市",
    "id": "422802000000"
  }, {
    "city": "恩施土家族苗族自治州",
    "name": "建始县",
    "id": "422822000000"
  }, {
    "city": "恩施土家族苗族自治州",
    "name": "巴东县",
    "id": "422823000000"
  }, {
    "city": "恩施土家族苗族自治州",
    "name": "宣恩县",
    "id": "422825000000"
  }, {
    "city": "恩施土家族苗族自治州",
    "name": "咸丰县",
    "id": "422826000000"
  }, {
    "city": "恩施土家族苗族自治州",
    "name": "来凤县",
    "id": "422827000000"
  }, {
    "city": "恩施土家族苗族自治州",
    "name": "鹤峰县",
    "id": "422828000000"
  }],
  "429000000000": [{
    "city": "省直辖县级行政区划",
    "name": "仙桃市",
    "id": "429004000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "潜江市",
    "id": "429005000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "天门市",
    "id": "429006000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "神农架林区",
    "id": "429021000000"
  }],
  "430100000000": [{
    "city": "长沙市",
    "name": "市辖区",
    "id": "430101000000"
  }, {
    "city": "长沙市",
    "name": "芙蓉区",
    "id": "430102000000"
  }, {
    "city": "长沙市",
    "name": "天心区",
    "id": "430103000000"
  }, {
    "city": "长沙市",
    "name": "岳麓区",
    "id": "430104000000"
  }, {
    "city": "长沙市",
    "name": "开福区",
    "id": "430105000000"
  }, {
    "city": "长沙市",
    "name": "雨花区",
    "id": "430111000000"
  }, {
    "city": "长沙市",
    "name": "望城区",
    "id": "430112000000"
  }, {
    "city": "长沙市",
    "name": "长沙县",
    "id": "430121000000"
  }, {
    "city": "长沙市",
    "name": "浏阳市",
    "id": "430181000000"
  }, {
    "city": "长沙市",
    "name": "宁乡市",
    "id": "430182000000"
  }],
  "430200000000": [{
    "city": "株洲市",
    "name": "市辖区",
    "id": "430201000000"
  }, {
    "city": "株洲市",
    "name": "荷塘区",
    "id": "430202000000"
  }, {
    "city": "株洲市",
    "name": "芦淞区",
    "id": "430203000000"
  }, {
    "city": "株洲市",
    "name": "石峰区",
    "id": "430204000000"
  }, {
    "city": "株洲市",
    "name": "天元区",
    "id": "430211000000"
  }, {
    "city": "株洲市",
    "name": "渌口区",
    "id": "430212000000"
  }, {
    "city": "株洲市",
    "name": "攸县",
    "id": "430223000000"
  }, {
    "city": "株洲市",
    "name": "茶陵县",
    "id": "430224000000"
  }, {
    "city": "株洲市",
    "name": "炎陵县",
    "id": "430225000000"
  }, {
    "city": "株洲市",
    "name": "云龙示范区",
    "id": "430271000000"
  }, {
    "city": "株洲市",
    "name": "醴陵市",
    "id": "430281000000"
  }],
  "430300000000": [{
    "city": "湘潭市",
    "name": "市辖区",
    "id": "430301000000"
  }, {
    "city": "湘潭市",
    "name": "雨湖区",
    "id": "430302000000"
  }, {
    "city": "湘潭市",
    "name": "岳塘区",
    "id": "430304000000"
  }, {
    "city": "湘潭市",
    "name": "湘潭县",
    "id": "430321000000"
  }, {
    "city": "湘潭市",
    "name": "湖南湘潭高新技术产业园区",
    "id": "430371000000"
  }, {
    "city": "湘潭市",
    "name": "湘潭昭山示范区",
    "id": "430372000000"
  }, {
    "city": "湘潭市",
    "name": "湘潭九华示范区",
    "id": "430373000000"
  }, {
    "city": "湘潭市",
    "name": "湘乡市",
    "id": "430381000000"
  }, {
    "city": "湘潭市",
    "name": "韶山市",
    "id": "430382000000"
  }],
  "430400000000": [{
    "city": "衡阳市",
    "name": "市辖区",
    "id": "430401000000"
  }, {
    "city": "衡阳市",
    "name": "珠晖区",
    "id": "430405000000"
  }, {
    "city": "衡阳市",
    "name": "雁峰区",
    "id": "430406000000"
  }, {
    "city": "衡阳市",
    "name": "石鼓区",
    "id": "430407000000"
  }, {
    "city": "衡阳市",
    "name": "蒸湘区",
    "id": "430408000000"
  }, {
    "city": "衡阳市",
    "name": "南岳区",
    "id": "430412000000"
  }, {
    "city": "衡阳市",
    "name": "衡阳县",
    "id": "430421000000"
  }, {
    "city": "衡阳市",
    "name": "衡南县",
    "id": "430422000000"
  }, {
    "city": "衡阳市",
    "name": "衡山县",
    "id": "430423000000"
  }, {
    "city": "衡阳市",
    "name": "衡东县",
    "id": "430424000000"
  }, {
    "city": "衡阳市",
    "name": "祁东县",
    "id": "430426000000"
  }, {
    "city": "衡阳市",
    "name": "衡阳综合保税区",
    "id": "430471000000"
  }, {
    "city": "衡阳市",
    "name": "湖南衡阳高新技术产业园区",
    "id": "430472000000"
  }, {
    "city": "衡阳市",
    "name": "湖南衡阳松木经济开发区",
    "id": "430473000000"
  }, {
    "city": "衡阳市",
    "name": "耒阳市",
    "id": "430481000000"
  }, {
    "city": "衡阳市",
    "name": "常宁市",
    "id": "430482000000"
  }],
  "430500000000": [{
    "city": "邵阳市",
    "name": "市辖区",
    "id": "430501000000"
  }, {
    "city": "邵阳市",
    "name": "双清区",
    "id": "430502000000"
  }, {
    "city": "邵阳市",
    "name": "大祥区",
    "id": "430503000000"
  }, {
    "city": "邵阳市",
    "name": "北塔区",
    "id": "430511000000"
  }, {
    "city": "邵阳市",
    "name": "邵东县",
    "id": "430521000000"
  }, {
    "city": "邵阳市",
    "name": "新邵县",
    "id": "430522000000"
  }, {
    "city": "邵阳市",
    "name": "邵阳县",
    "id": "430523000000"
  }, {
    "city": "邵阳市",
    "name": "隆回县",
    "id": "430524000000"
  }, {
    "city": "邵阳市",
    "name": "洞口县",
    "id": "430525000000"
  }, {
    "city": "邵阳市",
    "name": "绥宁县",
    "id": "430527000000"
  }, {
    "city": "邵阳市",
    "name": "新宁县",
    "id": "430528000000"
  }, {
    "city": "邵阳市",
    "name": "城步苗族自治县",
    "id": "430529000000"
  }, {
    "city": "邵阳市",
    "name": "武冈市",
    "id": "430581000000"
  }],
  "430600000000": [{
    "city": "岳阳市",
    "name": "市辖区",
    "id": "430601000000"
  }, {
    "city": "岳阳市",
    "name": "岳阳楼区",
    "id": "430602000000"
  }, {
    "city": "岳阳市",
    "name": "云溪区",
    "id": "430603000000"
  }, {
    "city": "岳阳市",
    "name": "君山区",
    "id": "430611000000"
  }, {
    "city": "岳阳市",
    "name": "岳阳县",
    "id": "430621000000"
  }, {
    "city": "岳阳市",
    "name": "华容县",
    "id": "430623000000"
  }, {
    "city": "岳阳市",
    "name": "湘阴县",
    "id": "430624000000"
  }, {
    "city": "岳阳市",
    "name": "平江县",
    "id": "430626000000"
  }, {
    "city": "岳阳市",
    "name": "岳阳市屈原管理区",
    "id": "430671000000"
  }, {
    "city": "岳阳市",
    "name": "汨罗市",
    "id": "430681000000"
  }, {
    "city": "岳阳市",
    "name": "临湘市",
    "id": "430682000000"
  }],
  "430700000000": [{
    "city": "常德市",
    "name": "市辖区",
    "id": "430701000000"
  }, {
    "city": "常德市",
    "name": "武陵区",
    "id": "430702000000"
  }, {
    "city": "常德市",
    "name": "鼎城区",
    "id": "430703000000"
  }, {
    "city": "常德市",
    "name": "安乡县",
    "id": "430721000000"
  }, {
    "city": "常德市",
    "name": "汉寿县",
    "id": "430722000000"
  }, {
    "city": "常德市",
    "name": "澧县",
    "id": "430723000000"
  }, {
    "city": "常德市",
    "name": "临澧县",
    "id": "430724000000"
  }, {
    "city": "常德市",
    "name": "桃源县",
    "id": "430725000000"
  }, {
    "city": "常德市",
    "name": "石门县",
    "id": "430726000000"
  }, {
    "city": "常德市",
    "name": "常德市西洞庭管理区",
    "id": "430771000000"
  }, {
    "city": "常德市",
    "name": "津市市",
    "id": "430781000000"
  }],
  "430800000000": [{
    "city": "张家界市",
    "name": "市辖区",
    "id": "430801000000"
  }, {
    "city": "张家界市",
    "name": "永定区",
    "id": "430802000000"
  }, {
    "city": "张家界市",
    "name": "武陵源区",
    "id": "430811000000"
  }, {
    "city": "张家界市",
    "name": "慈利县",
    "id": "430821000000"
  }, {
    "city": "张家界市",
    "name": "桑植县",
    "id": "430822000000"
  }],
  "430900000000": [{
    "city": "益阳市",
    "name": "市辖区",
    "id": "430901000000"
  }, {
    "city": "益阳市",
    "name": "资阳区",
    "id": "430902000000"
  }, {
    "city": "益阳市",
    "name": "赫山区",
    "id": "430903000000"
  }, {
    "city": "益阳市",
    "name": "南县",
    "id": "430921000000"
  }, {
    "city": "益阳市",
    "name": "桃江县",
    "id": "430922000000"
  }, {
    "city": "益阳市",
    "name": "安化县",
    "id": "430923000000"
  }, {
    "city": "益阳市",
    "name": "益阳市大通湖管理区",
    "id": "430971000000"
  }, {
    "city": "益阳市",
    "name": "湖南益阳高新技术产业园区",
    "id": "430972000000"
  }, {
    "city": "益阳市",
    "name": "沅江市",
    "id": "430981000000"
  }],
  "431000000000": [{
    "city": "郴州市",
    "name": "市辖区",
    "id": "431001000000"
  }, {
    "city": "郴州市",
    "name": "北湖区",
    "id": "431002000000"
  }, {
    "city": "郴州市",
    "name": "苏仙区",
    "id": "431003000000"
  }, {
    "city": "郴州市",
    "name": "桂阳县",
    "id": "431021000000"
  }, {
    "city": "郴州市",
    "name": "宜章县",
    "id": "431022000000"
  }, {
    "city": "郴州市",
    "name": "永兴县",
    "id": "431023000000"
  }, {
    "city": "郴州市",
    "name": "嘉禾县",
    "id": "431024000000"
  }, {
    "city": "郴州市",
    "name": "临武县",
    "id": "431025000000"
  }, {
    "city": "郴州市",
    "name": "汝城县",
    "id": "431026000000"
  }, {
    "city": "郴州市",
    "name": "桂东县",
    "id": "431027000000"
  }, {
    "city": "郴州市",
    "name": "安仁县",
    "id": "431028000000"
  }, {
    "city": "郴州市",
    "name": "资兴市",
    "id": "431081000000"
  }],
  "431100000000": [{
    "city": "永州市",
    "name": "市辖区",
    "id": "431101000000"
  }, {
    "city": "永州市",
    "name": "零陵区",
    "id": "431102000000"
  }, {
    "city": "永州市",
    "name": "冷水滩区",
    "id": "431103000000"
  }, {
    "city": "永州市",
    "name": "祁阳县",
    "id": "431121000000"
  }, {
    "city": "永州市",
    "name": "东安县",
    "id": "431122000000"
  }, {
    "city": "永州市",
    "name": "双牌县",
    "id": "431123000000"
  }, {
    "city": "永州市",
    "name": "道县",
    "id": "431124000000"
  }, {
    "city": "永州市",
    "name": "江永县",
    "id": "431125000000"
  }, {
    "city": "永州市",
    "name": "宁远县",
    "id": "431126000000"
  }, {
    "city": "永州市",
    "name": "蓝山县",
    "id": "431127000000"
  }, {
    "city": "永州市",
    "name": "新田县",
    "id": "431128000000"
  }, {
    "city": "永州市",
    "name": "江华瑶族自治县",
    "id": "431129000000"
  }, {
    "city": "永州市",
    "name": "永州经济技术开发区",
    "id": "431171000000"
  }, {
    "city": "永州市",
    "name": "永州市金洞管理区",
    "id": "431172000000"
  }, {
    "city": "永州市",
    "name": "永州市回龙圩管理区",
    "id": "431173000000"
  }],
  "431200000000": [{
    "city": "怀化市",
    "name": "市辖区",
    "id": "431201000000"
  }, {
    "city": "怀化市",
    "name": "鹤城区",
    "id": "431202000000"
  }, {
    "city": "怀化市",
    "name": "中方县",
    "id": "431221000000"
  }, {
    "city": "怀化市",
    "name": "沅陵县",
    "id": "431222000000"
  }, {
    "city": "怀化市",
    "name": "辰溪县",
    "id": "431223000000"
  }, {
    "city": "怀化市",
    "name": "溆浦县",
    "id": "431224000000"
  }, {
    "city": "怀化市",
    "name": "会同县",
    "id": "431225000000"
  }, {
    "city": "怀化市",
    "name": "麻阳苗族自治县",
    "id": "431226000000"
  }, {
    "city": "怀化市",
    "name": "新晃侗族自治县",
    "id": "431227000000"
  }, {
    "city": "怀化市",
    "name": "芷江侗族自治县",
    "id": "431228000000"
  }, {
    "city": "怀化市",
    "name": "靖州苗族侗族自治县",
    "id": "431229000000"
  }, {
    "city": "怀化市",
    "name": "通道侗族自治县",
    "id": "431230000000"
  }, {
    "city": "怀化市",
    "name": "怀化市洪江管理区",
    "id": "431271000000"
  }, {
    "city": "怀化市",
    "name": "洪江市",
    "id": "431281000000"
  }],
  "431300000000": [{
    "city": "娄底市",
    "name": "市辖区",
    "id": "431301000000"
  }, {
    "city": "娄底市",
    "name": "娄星区",
    "id": "431302000000"
  }, {
    "city": "娄底市",
    "name": "双峰县",
    "id": "431321000000"
  }, {
    "city": "娄底市",
    "name": "新化县",
    "id": "431322000000"
  }, {
    "city": "娄底市",
    "name": "冷水江市",
    "id": "431381000000"
  }, {
    "city": "娄底市",
    "name": "涟源市",
    "id": "431382000000"
  }],
  "433100000000": [{
    "city": "湘西土家族苗族自治州",
    "name": "吉首市",
    "id": "433101000000"
  }, {
    "city": "湘西土家族苗族自治州",
    "name": "泸溪县",
    "id": "433122000000"
  }, {
    "city": "湘西土家族苗族自治州",
    "name": "凤凰县",
    "id": "433123000000"
  }, {
    "city": "湘西土家族苗族自治州",
    "name": "花垣县",
    "id": "433124000000"
  }, {
    "city": "湘西土家族苗族自治州",
    "name": "保靖县",
    "id": "433125000000"
  }, {
    "city": "湘西土家族苗族自治州",
    "name": "古丈县",
    "id": "433126000000"
  }, {
    "city": "湘西土家族苗族自治州",
    "name": "永顺县",
    "id": "433127000000"
  }, {
    "city": "湘西土家族苗族自治州",
    "name": "龙山县",
    "id": "433130000000"
  }, {
    "city": "湘西土家族苗族自治州",
    "name": "湖南吉首经济开发区",
    "id": "433172000000"
  }, {
    "city": "湘西土家族苗族自治州",
    "name": "湖南永顺经济开发区",
    "id": "433173000000"
  }],
  "440100000000": [{
    "city": "广州市",
    "name": "市辖区",
    "id": "440101000000"
  }, {
    "city": "广州市",
    "name": "荔湾区",
    "id": "440103000000"
  }, {
    "city": "广州市",
    "name": "越秀区",
    "id": "440104000000"
  }, {
    "city": "广州市",
    "name": "海珠区",
    "id": "440105000000"
  }, {
    "city": "广州市",
    "name": "天河区",
    "id": "440106000000"
  }, {
    "city": "广州市",
    "name": "白云区",
    "id": "440111000000"
  }, {
    "city": "广州市",
    "name": "黄埔区",
    "id": "440112000000"
  }, {
    "city": "广州市",
    "name": "番禺区",
    "id": "440113000000"
  }, {
    "city": "广州市",
    "name": "花都区",
    "id": "440114000000"
  }, {
    "city": "广州市",
    "name": "南沙区",
    "id": "440115000000"
  }, {
    "city": "广州市",
    "name": "从化区",
    "id": "440117000000"
  }, {
    "city": "广州市",
    "name": "增城区",
    "id": "440118000000"
  }],
  "440200000000": [{
    "city": "韶关市",
    "name": "市辖区",
    "id": "440201000000"
  }, {
    "city": "韶关市",
    "name": "武江区",
    "id": "440203000000"
  }, {
    "city": "韶关市",
    "name": "浈江区",
    "id": "440204000000"
  }, {
    "city": "韶关市",
    "name": "曲江区",
    "id": "440205000000"
  }, {
    "city": "韶关市",
    "name": "始兴县",
    "id": "440222000000"
  }, {
    "city": "韶关市",
    "name": "仁化县",
    "id": "440224000000"
  }, {
    "city": "韶关市",
    "name": "翁源县",
    "id": "440229000000"
  }, {
    "city": "韶关市",
    "name": "乳源瑶族自治县",
    "id": "440232000000"
  }, {
    "city": "韶关市",
    "name": "新丰县",
    "id": "440233000000"
  }, {
    "city": "韶关市",
    "name": "乐昌市",
    "id": "440281000000"
  }, {
    "city": "韶关市",
    "name": "南雄市",
    "id": "440282000000"
  }],
  "440300000000": [{
    "city": "深圳市",
    "name": "市辖区",
    "id": "440301000000"
  }, {
    "city": "深圳市",
    "name": "罗湖区",
    "id": "440303000000"
  }, {
    "city": "深圳市",
    "name": "福田区",
    "id": "440304000000"
  }, {
    "city": "深圳市",
    "name": "南山区",
    "id": "440305000000"
  }, {
    "city": "深圳市",
    "name": "宝安区",
    "id": "440306000000"
  }, {
    "city": "深圳市",
    "name": "龙岗区",
    "id": "440307000000"
  }, {
    "city": "深圳市",
    "name": "盐田区",
    "id": "440308000000"
  }, {
    "city": "深圳市",
    "name": "龙华区",
    "id": "440309000000"
  }, {
    "city": "深圳市",
    "name": "坪山区",
    "id": "440310000000"
  }, {
    "city": "深圳市",
    "name": "光明区",
    "id": "440311000000"
  }],
  "440400000000": [{
    "city": "珠海市",
    "name": "市辖区",
    "id": "440401000000"
  }, {
    "city": "珠海市",
    "name": "香洲区",
    "id": "440402000000"
  }, {
    "city": "珠海市",
    "name": "斗门区",
    "id": "440403000000"
  }, {
    "city": "珠海市",
    "name": "金湾区",
    "id": "440404000000"
  }],
  "440500000000": [{
    "city": "汕头市",
    "name": "市辖区",
    "id": "440501000000"
  }, {
    "city": "汕头市",
    "name": "龙湖区",
    "id": "440507000000"
  }, {
    "city": "汕头市",
    "name": "金平区",
    "id": "440511000000"
  }, {
    "city": "汕头市",
    "name": "濠江区",
    "id": "440512000000"
  }, {
    "city": "汕头市",
    "name": "潮阳区",
    "id": "440513000000"
  }, {
    "city": "汕头市",
    "name": "潮南区",
    "id": "440514000000"
  }, {
    "city": "汕头市",
    "name": "澄海区",
    "id": "440515000000"
  }, {
    "city": "汕头市",
    "name": "南澳县",
    "id": "440523000000"
  }],
  "440600000000": [{
    "city": "佛山市",
    "name": "市辖区",
    "id": "440601000000"
  }, {
    "city": "佛山市",
    "name": "禅城区",
    "id": "440604000000"
  }, {
    "city": "佛山市",
    "name": "南海区",
    "id": "440605000000"
  }, {
    "city": "佛山市",
    "name": "顺德区",
    "id": "440606000000"
  }, {
    "city": "佛山市",
    "name": "三水区",
    "id": "440607000000"
  }, {
    "city": "佛山市",
    "name": "高明区",
    "id": "440608000000"
  }],
  "440700000000": [{
    "city": "江门市",
    "name": "市辖区",
    "id": "440701000000"
  }, {
    "city": "江门市",
    "name": "蓬江区",
    "id": "440703000000"
  }, {
    "city": "江门市",
    "name": "江海区",
    "id": "440704000000"
  }, {
    "city": "江门市",
    "name": "新会区",
    "id": "440705000000"
  }, {
    "city": "江门市",
    "name": "台山市",
    "id": "440781000000"
  }, {
    "city": "江门市",
    "name": "开平市",
    "id": "440783000000"
  }, {
    "city": "江门市",
    "name": "鹤山市",
    "id": "440784000000"
  }, {
    "city": "江门市",
    "name": "恩平市",
    "id": "440785000000"
  }],
  "440800000000": [{
    "city": "湛江市",
    "name": "市辖区",
    "id": "440801000000"
  }, {
    "city": "湛江市",
    "name": "赤坎区",
    "id": "440802000000"
  }, {
    "city": "湛江市",
    "name": "霞山区",
    "id": "440803000000"
  }, {
    "city": "湛江市",
    "name": "坡头区",
    "id": "440804000000"
  }, {
    "city": "湛江市",
    "name": "麻章区",
    "id": "440811000000"
  }, {
    "city": "湛江市",
    "name": "遂溪县",
    "id": "440823000000"
  }, {
    "city": "湛江市",
    "name": "徐闻县",
    "id": "440825000000"
  }, {
    "city": "湛江市",
    "name": "廉江市",
    "id": "440881000000"
  }, {
    "city": "湛江市",
    "name": "雷州市",
    "id": "440882000000"
  }, {
    "city": "湛江市",
    "name": "吴川市",
    "id": "440883000000"
  }],
  "440900000000": [{
    "city": "茂名市",
    "name": "市辖区",
    "id": "440901000000"
  }, {
    "city": "茂名市",
    "name": "茂南区",
    "id": "440902000000"
  }, {
    "city": "茂名市",
    "name": "电白区",
    "id": "440904000000"
  }, {
    "city": "茂名市",
    "name": "高州市",
    "id": "440981000000"
  }, {
    "city": "茂名市",
    "name": "化州市",
    "id": "440982000000"
  }, {
    "city": "茂名市",
    "name": "信宜市",
    "id": "440983000000"
  }],
  "441200000000": [{
    "city": "肇庆市",
    "name": "市辖区",
    "id": "441201000000"
  }, {
    "city": "肇庆市",
    "name": "端州区",
    "id": "441202000000"
  }, {
    "city": "肇庆市",
    "name": "鼎湖区",
    "id": "441203000000"
  }, {
    "city": "肇庆市",
    "name": "高要区",
    "id": "441204000000"
  }, {
    "city": "肇庆市",
    "name": "广宁县",
    "id": "441223000000"
  }, {
    "city": "肇庆市",
    "name": "怀集县",
    "id": "441224000000"
  }, {
    "city": "肇庆市",
    "name": "封开县",
    "id": "441225000000"
  }, {
    "city": "肇庆市",
    "name": "德庆县",
    "id": "441226000000"
  }, {
    "city": "肇庆市",
    "name": "四会市",
    "id": "441284000000"
  }],
  "441300000000": [{
    "city": "惠州市",
    "name": "市辖区",
    "id": "441301000000"
  }, {
    "city": "惠州市",
    "name": "惠城区",
    "id": "441302000000"
  }, {
    "city": "惠州市",
    "name": "惠阳区",
    "id": "441303000000"
  }, {
    "city": "惠州市",
    "name": "博罗县",
    "id": "441322000000"
  }, {
    "city": "惠州市",
    "name": "惠东县",
    "id": "441323000000"
  }, {
    "city": "惠州市",
    "name": "龙门县",
    "id": "441324000000"
  }],
  "441400000000": [{
    "city": "梅州市",
    "name": "市辖区",
    "id": "441401000000"
  }, {
    "city": "梅州市",
    "name": "梅江区",
    "id": "441402000000"
  }, {
    "city": "梅州市",
    "name": "梅县区",
    "id": "441403000000"
  }, {
    "city": "梅州市",
    "name": "大埔县",
    "id": "441422000000"
  }, {
    "city": "梅州市",
    "name": "丰顺县",
    "id": "441423000000"
  }, {
    "city": "梅州市",
    "name": "五华县",
    "id": "441424000000"
  }, {
    "city": "梅州市",
    "name": "平远县",
    "id": "441426000000"
  }, {
    "city": "梅州市",
    "name": "蕉岭县",
    "id": "441427000000"
  }, {
    "city": "梅州市",
    "name": "兴宁市",
    "id": "441481000000"
  }],
  "441500000000": [{
    "city": "汕尾市",
    "name": "市辖区",
    "id": "441501000000"
  }, {
    "city": "汕尾市",
    "name": "城区",
    "id": "441502000000"
  }, {
    "city": "汕尾市",
    "name": "海丰县",
    "id": "441521000000"
  }, {
    "city": "汕尾市",
    "name": "陆河县",
    "id": "441523000000"
  }, {
    "city": "汕尾市",
    "name": "陆丰市",
    "id": "441581000000"
  }],
  "441600000000": [{
    "city": "河源市",
    "name": "市辖区",
    "id": "441601000000"
  }, {
    "city": "河源市",
    "name": "源城区",
    "id": "441602000000"
  }, {
    "city": "河源市",
    "name": "紫金县",
    "id": "441621000000"
  }, {
    "city": "河源市",
    "name": "龙川县",
    "id": "441622000000"
  }, {
    "city": "河源市",
    "name": "连平县",
    "id": "441623000000"
  }, {
    "city": "河源市",
    "name": "和平县",
    "id": "441624000000"
  }, {
    "city": "河源市",
    "name": "东源县",
    "id": "441625000000"
  }],
  "441700000000": [{
    "city": "阳江市",
    "name": "市辖区",
    "id": "441701000000"
  }, {
    "city": "阳江市",
    "name": "江城区",
    "id": "441702000000"
  }, {
    "city": "阳江市",
    "name": "阳东区",
    "id": "441704000000"
  }, {
    "city": "阳江市",
    "name": "阳西县",
    "id": "441721000000"
  }, {
    "city": "阳江市",
    "name": "阳春市",
    "id": "441781000000"
  }],
  "441800000000": [{
    "city": "清远市",
    "name": "市辖区",
    "id": "441801000000"
  }, {
    "city": "清远市",
    "name": "清城区",
    "id": "441802000000"
  }, {
    "city": "清远市",
    "name": "清新区",
    "id": "441803000000"
  }, {
    "city": "清远市",
    "name": "佛冈县",
    "id": "441821000000"
  }, {
    "city": "清远市",
    "name": "阳山县",
    "id": "441823000000"
  }, {
    "city": "清远市",
    "name": "连山壮族瑶族自治县",
    "id": "441825000000"
  }, {
    "city": "清远市",
    "name": "连南瑶族自治县",
    "id": "441826000000"
  }, {
    "city": "清远市",
    "name": "英德市",
    "id": "441881000000"
  }, {
    "city": "清远市",
    "name": "连州市",
    "id": "441882000000"
  }],
  "445100000000": [{
    "city": "潮州市",
    "name": "市辖区",
    "id": "445101000000"
  }, {
    "city": "潮州市",
    "name": "湘桥区",
    "id": "445102000000"
  }, {
    "city": "潮州市",
    "name": "潮安区",
    "id": "445103000000"
  }, {
    "city": "潮州市",
    "name": "饶平县",
    "id": "445122000000"
  }],
  "445200000000": [{
    "city": "揭阳市",
    "name": "市辖区",
    "id": "445201000000"
  }, {
    "city": "揭阳市",
    "name": "榕城区",
    "id": "445202000000"
  }, {
    "city": "揭阳市",
    "name": "揭东区",
    "id": "445203000000"
  }, {
    "city": "揭阳市",
    "name": "揭西县",
    "id": "445222000000"
  }, {
    "city": "揭阳市",
    "name": "惠来县",
    "id": "445224000000"
  }, {
    "city": "揭阳市",
    "name": "普宁市",
    "id": "445281000000"
  }],
  "445300000000": [{
    "city": "云浮市",
    "name": "市辖区",
    "id": "445301000000"
  }, {
    "city": "云浮市",
    "name": "云城区",
    "id": "445302000000"
  }, {
    "city": "云浮市",
    "name": "云安区",
    "id": "445303000000"
  }, {
    "city": "云浮市",
    "name": "新兴县",
    "id": "445321000000"
  }, {
    "city": "云浮市",
    "name": "郁南县",
    "id": "445322000000"
  }, {
    "city": "云浮市",
    "name": "罗定市",
    "id": "445381000000"
  }],
  "450100000000": [{
    "city": "南宁市",
    "name": "市辖区",
    "id": "450101000000"
  }, {
    "city": "南宁市",
    "name": "兴宁区",
    "id": "450102000000"
  }, {
    "city": "南宁市",
    "name": "青秀区",
    "id": "450103000000"
  }, {
    "city": "南宁市",
    "name": "江南区",
    "id": "450105000000"
  }, {
    "city": "南宁市",
    "name": "西乡塘区",
    "id": "450107000000"
  }, {
    "city": "南宁市",
    "name": "良庆区",
    "id": "450108000000"
  }, {
    "city": "南宁市",
    "name": "邕宁区",
    "id": "450109000000"
  }, {
    "city": "南宁市",
    "name": "武鸣区",
    "id": "450110000000"
  }, {
    "city": "南宁市",
    "name": "隆安县",
    "id": "450123000000"
  }, {
    "city": "南宁市",
    "name": "马山县",
    "id": "450124000000"
  }, {
    "city": "南宁市",
    "name": "上林县",
    "id": "450125000000"
  }, {
    "city": "南宁市",
    "name": "宾阳县",
    "id": "450126000000"
  }, {
    "city": "南宁市",
    "name": "横县",
    "id": "450127000000"
  }],
  "450200000000": [{
    "city": "柳州市",
    "name": "市辖区",
    "id": "450201000000"
  }, {
    "city": "柳州市",
    "name": "城中区",
    "id": "450202000000"
  }, {
    "city": "柳州市",
    "name": "鱼峰区",
    "id": "450203000000"
  }, {
    "city": "柳州市",
    "name": "柳南区",
    "id": "450204000000"
  }, {
    "city": "柳州市",
    "name": "柳北区",
    "id": "450205000000"
  }, {
    "city": "柳州市",
    "name": "柳江区",
    "id": "450206000000"
  }, {
    "city": "柳州市",
    "name": "柳城县",
    "id": "450222000000"
  }, {
    "city": "柳州市",
    "name": "鹿寨县",
    "id": "450223000000"
  }, {
    "city": "柳州市",
    "name": "融安县",
    "id": "450224000000"
  }, {
    "city": "柳州市",
    "name": "融水苗族自治县",
    "id": "450225000000"
  }, {
    "city": "柳州市",
    "name": "三江侗族自治县",
    "id": "450226000000"
  }],
  "450300000000": [{
    "city": "桂林市",
    "name": "市辖区",
    "id": "450301000000"
  }, {
    "city": "桂林市",
    "name": "秀峰区",
    "id": "450302000000"
  }, {
    "city": "桂林市",
    "name": "叠彩区",
    "id": "450303000000"
  }, {
    "city": "桂林市",
    "name": "象山区",
    "id": "450304000000"
  }, {
    "city": "桂林市",
    "name": "七星区",
    "id": "450305000000"
  }, {
    "city": "桂林市",
    "name": "雁山区",
    "id": "450311000000"
  }, {
    "city": "桂林市",
    "name": "临桂区",
    "id": "450312000000"
  }, {
    "city": "桂林市",
    "name": "阳朔县",
    "id": "450321000000"
  }, {
    "city": "桂林市",
    "name": "灵川县",
    "id": "450323000000"
  }, {
    "city": "桂林市",
    "name": "全州县",
    "id": "450324000000"
  }, {
    "city": "桂林市",
    "name": "兴安县",
    "id": "450325000000"
  }, {
    "city": "桂林市",
    "name": "永福县",
    "id": "450326000000"
  }, {
    "city": "桂林市",
    "name": "灌阳县",
    "id": "450327000000"
  }, {
    "city": "桂林市",
    "name": "龙胜各族自治县",
    "id": "450328000000"
  }, {
    "city": "桂林市",
    "name": "资源县",
    "id": "450329000000"
  }, {
    "city": "桂林市",
    "name": "平乐县",
    "id": "450330000000"
  }, {
    "city": "桂林市",
    "name": "恭城瑶族自治县",
    "id": "450332000000"
  }, {
    "city": "桂林市",
    "name": "荔浦市",
    "id": "450381000000"
  }],
  "450400000000": [{
    "city": "梧州市",
    "name": "市辖区",
    "id": "450401000000"
  }, {
    "city": "梧州市",
    "name": "万秀区",
    "id": "450403000000"
  }, {
    "city": "梧州市",
    "name": "长洲区",
    "id": "450405000000"
  }, {
    "city": "梧州市",
    "name": "龙圩区",
    "id": "450406000000"
  }, {
    "city": "梧州市",
    "name": "苍梧县",
    "id": "450421000000"
  }, {
    "city": "梧州市",
    "name": "藤县",
    "id": "450422000000"
  }, {
    "city": "梧州市",
    "name": "蒙山县",
    "id": "450423000000"
  }, {
    "city": "梧州市",
    "name": "岑溪市",
    "id": "450481000000"
  }],
  "450500000000": [{
    "city": "北海市",
    "name": "市辖区",
    "id": "450501000000"
  }, {
    "city": "北海市",
    "name": "海城区",
    "id": "450502000000"
  }, {
    "city": "北海市",
    "name": "银海区",
    "id": "450503000000"
  }, {
    "city": "北海市",
    "name": "铁山港区",
    "id": "450512000000"
  }, {
    "city": "北海市",
    "name": "合浦县",
    "id": "450521000000"
  }],
  "450600000000": [{
    "city": "防城港市",
    "name": "市辖区",
    "id": "450601000000"
  }, {
    "city": "防城港市",
    "name": "港口区",
    "id": "450602000000"
  }, {
    "city": "防城港市",
    "name": "防城区",
    "id": "450603000000"
  }, {
    "city": "防城港市",
    "name": "上思县",
    "id": "450621000000"
  }, {
    "city": "防城港市",
    "name": "东兴市",
    "id": "450681000000"
  }],
  "450700000000": [{
    "city": "钦州市",
    "name": "市辖区",
    "id": "450701000000"
  }, {
    "city": "钦州市",
    "name": "钦南区",
    "id": "450702000000"
  }, {
    "city": "钦州市",
    "name": "钦北区",
    "id": "450703000000"
  }, {
    "city": "钦州市",
    "name": "灵山县",
    "id": "450721000000"
  }, {
    "city": "钦州市",
    "name": "浦北县",
    "id": "450722000000"
  }],
  "450800000000": [{
    "city": "贵港市",
    "name": "市辖区",
    "id": "450801000000"
  }, {
    "city": "贵港市",
    "name": "港北区",
    "id": "450802000000"
  }, {
    "city": "贵港市",
    "name": "港南区",
    "id": "450803000000"
  }, {
    "city": "贵港市",
    "name": "覃塘区",
    "id": "450804000000"
  }, {
    "city": "贵港市",
    "name": "平南县",
    "id": "450821000000"
  }, {
    "city": "贵港市",
    "name": "桂平市",
    "id": "450881000000"
  }],
  "450900000000": [{
    "city": "玉林市",
    "name": "市辖区",
    "id": "450901000000"
  }, {
    "city": "玉林市",
    "name": "玉州区",
    "id": "450902000000"
  }, {
    "city": "玉林市",
    "name": "福绵区",
    "id": "450903000000"
  }, {
    "city": "玉林市",
    "name": "容县",
    "id": "450921000000"
  }, {
    "city": "玉林市",
    "name": "陆川县",
    "id": "450922000000"
  }, {
    "city": "玉林市",
    "name": "博白县",
    "id": "450923000000"
  }, {
    "city": "玉林市",
    "name": "兴业县",
    "id": "450924000000"
  }, {
    "city": "玉林市",
    "name": "北流市",
    "id": "450981000000"
  }],
  "451000000000": [{
    "city": "百色市",
    "name": "市辖区",
    "id": "451001000000"
  }, {
    "city": "百色市",
    "name": "右江区",
    "id": "451002000000"
  }, {
    "city": "百色市",
    "name": "田阳县",
    "id": "451021000000"
  }, {
    "city": "百色市",
    "name": "田东县",
    "id": "451022000000"
  }, {
    "city": "百色市",
    "name": "平果县",
    "id": "451023000000"
  }, {
    "city": "百色市",
    "name": "德保县",
    "id": "451024000000"
  }, {
    "city": "百色市",
    "name": "那坡县",
    "id": "451026000000"
  }, {
    "city": "百色市",
    "name": "凌云县",
    "id": "451027000000"
  }, {
    "city": "百色市",
    "name": "乐业县",
    "id": "451028000000"
  }, {
    "city": "百色市",
    "name": "田林县",
    "id": "451029000000"
  }, {
    "city": "百色市",
    "name": "西林县",
    "id": "451030000000"
  }, {
    "city": "百色市",
    "name": "隆林各族自治县",
    "id": "451031000000"
  }, {
    "city": "百色市",
    "name": "靖西市",
    "id": "451081000000"
  }],
  "451100000000": [{
    "city": "贺州市",
    "name": "市辖区",
    "id": "451101000000"
  }, {
    "city": "贺州市",
    "name": "八步区",
    "id": "451102000000"
  }, {
    "city": "贺州市",
    "name": "平桂区",
    "id": "451103000000"
  }, {
    "city": "贺州市",
    "name": "昭平县",
    "id": "451121000000"
  }, {
    "city": "贺州市",
    "name": "钟山县",
    "id": "451122000000"
  }, {
    "city": "贺州市",
    "name": "富川瑶族自治县",
    "id": "451123000000"
  }],
  "451200000000": [{
    "city": "河池市",
    "name": "市辖区",
    "id": "451201000000"
  }, {
    "city": "河池市",
    "name": "金城江区",
    "id": "451202000000"
  }, {
    "city": "河池市",
    "name": "宜州区",
    "id": "451203000000"
  }, {
    "city": "河池市",
    "name": "南丹县",
    "id": "451221000000"
  }, {
    "city": "河池市",
    "name": "天峨县",
    "id": "451222000000"
  }, {
    "city": "河池市",
    "name": "凤山县",
    "id": "451223000000"
  }, {
    "city": "河池市",
    "name": "东兰县",
    "id": "451224000000"
  }, {
    "city": "河池市",
    "name": "罗城仫佬族自治县",
    "id": "451225000000"
  }, {
    "city": "河池市",
    "name": "环江毛南族自治县",
    "id": "451226000000"
  }, {
    "city": "河池市",
    "name": "巴马瑶族自治县",
    "id": "451227000000"
  }, {
    "city": "河池市",
    "name": "都安瑶族自治县",
    "id": "451228000000"
  }, {
    "city": "河池市",
    "name": "大化瑶族自治县",
    "id": "451229000000"
  }],
  "451300000000": [{
    "city": "来宾市",
    "name": "市辖区",
    "id": "451301000000"
  }, {
    "city": "来宾市",
    "name": "兴宾区",
    "id": "451302000000"
  }, {
    "city": "来宾市",
    "name": "忻城县",
    "id": "451321000000"
  }, {
    "city": "来宾市",
    "name": "象州县",
    "id": "451322000000"
  }, {
    "city": "来宾市",
    "name": "武宣县",
    "id": "451323000000"
  }, {
    "city": "来宾市",
    "name": "金秀瑶族自治县",
    "id": "451324000000"
  }, {
    "city": "来宾市",
    "name": "合山市",
    "id": "451381000000"
  }],
  "451400000000": [{
    "city": "崇左市",
    "name": "市辖区",
    "id": "451401000000"
  }, {
    "city": "崇左市",
    "name": "江州区",
    "id": "451402000000"
  }, {
    "city": "崇左市",
    "name": "扶绥县",
    "id": "451421000000"
  }, {
    "city": "崇左市",
    "name": "宁明县",
    "id": "451422000000"
  }, {
    "city": "崇左市",
    "name": "龙州县",
    "id": "451423000000"
  }, {
    "city": "崇左市",
    "name": "大新县",
    "id": "451424000000"
  }, {
    "city": "崇左市",
    "name": "天等县",
    "id": "451425000000"
  }, {
    "city": "崇左市",
    "name": "凭祥市",
    "id": "451481000000"
  }],
  "460100000000": [{
    "city": "海口市",
    "name": "市辖区",
    "id": "460101000000"
  }, {
    "city": "海口市",
    "name": "秀英区",
    "id": "460105000000"
  }, {
    "city": "海口市",
    "name": "龙华区",
    "id": "460106000000"
  }, {
    "city": "海口市",
    "name": "琼山区",
    "id": "460107000000"
  }, {
    "city": "海口市",
    "name": "美兰区",
    "id": "460108000000"
  }],
  "460200000000": [{
    "city": "三亚市",
    "name": "市辖区",
    "id": "460201000000"
  }, {
    "city": "三亚市",
    "name": "海棠区",
    "id": "460202000000"
  }, {
    "city": "三亚市",
    "name": "吉阳区",
    "id": "460203000000"
  }, {
    "city": "三亚市",
    "name": "天涯区",
    "id": "460204000000"
  }, {
    "city": "三亚市",
    "name": "崖州区",
    "id": "460205000000"
  }],
  "460300000000": [{
    "city": "三沙市",
    "name": "西沙群岛",
    "id": "460321000000"
  }, {
    "city": "三沙市",
    "name": "南沙群岛",
    "id": "460322000000"
  }, {
    "city": "三沙市",
    "name": "中沙群岛的岛礁及其海域",
    "id": "460323000000"
  }],
  "469000000000": [{
    "city": "省直辖县级行政区划",
    "name": "五指山市",
    "id": "469001000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "琼海市",
    "id": "469002000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "文昌市",
    "id": "469005000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "万宁市",
    "id": "469006000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "东方市",
    "id": "469007000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "定安县",
    "id": "469021000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "屯昌县",
    "id": "469022000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "澄迈县",
    "id": "469023000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "临高县",
    "id": "469024000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "白沙黎族自治县",
    "id": "469025000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "昌江黎族自治县",
    "id": "469026000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "乐东黎族自治县",
    "id": "469027000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "陵水黎族自治县",
    "id": "469028000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "保亭黎族苗族自治县",
    "id": "469029000000"
  }, {
    "city": "省直辖县级行政区划",
    "name": "琼中黎族苗族自治县",
    "id": "469030000000"
  }],
  "500100000000": [{
    "city": "市辖区",
    "name": "万州区",
    "id": "500101000000"
  }, {
    "city": "市辖区",
    "name": "涪陵区",
    "id": "500102000000"
  }, {
    "city": "市辖区",
    "name": "渝中区",
    "id": "500103000000"
  }, {
    "city": "市辖区",
    "name": "大渡口区",
    "id": "500104000000"
  }, {
    "city": "市辖区",
    "name": "江北区",
    "id": "500105000000"
  }, {
    "city": "市辖区",
    "name": "沙坪坝区",
    "id": "500106000000"
  }, {
    "city": "市辖区",
    "name": "九龙坡区",
    "id": "500107000000"
  }, {
    "city": "市辖区",
    "name": "南岸区",
    "id": "500108000000"
  }, {
    "city": "市辖区",
    "name": "北碚区",
    "id": "500109000000"
  }, {
    "city": "市辖区",
    "name": "綦江区",
    "id": "500110000000"
  }, {
    "city": "市辖区",
    "name": "大足区",
    "id": "500111000000"
  }, {
    "city": "市辖区",
    "name": "渝北区",
    "id": "500112000000"
  }, {
    "city": "市辖区",
    "name": "巴南区",
    "id": "500113000000"
  }, {
    "city": "市辖区",
    "name": "黔江区",
    "id": "500114000000"
  }, {
    "city": "市辖区",
    "name": "长寿区",
    "id": "500115000000"
  }, {
    "city": "市辖区",
    "name": "江津区",
    "id": "500116000000"
  }, {
    "city": "市辖区",
    "name": "合川区",
    "id": "500117000000"
  }, {
    "city": "市辖区",
    "name": "永川区",
    "id": "500118000000"
  }, {
    "city": "市辖区",
    "name": "南川区",
    "id": "500119000000"
  }, {
    "city": "市辖区",
    "name": "璧山区",
    "id": "500120000000"
  }, {
    "city": "市辖区",
    "name": "铜梁区",
    "id": "500151000000"
  }, {
    "city": "市辖区",
    "name": "潼南区",
    "id": "500152000000"
  }, {
    "city": "市辖区",
    "name": "荣昌区",
    "id": "500153000000"
  }, {
    "city": "市辖区",
    "name": "开州区",
    "id": "500154000000"
  }, {
    "city": "市辖区",
    "name": "梁平区",
    "id": "500155000000"
  }, {
    "city": "市辖区",
    "name": "武隆区",
    "id": "500156000000"
  }],
  "500200000000": [{
    "city": "县",
    "name": "城口县",
    "id": "500229000000"
  }, {
    "city": "县",
    "name": "丰都县",
    "id": "500230000000"
  }, {
    "city": "县",
    "name": "垫江县",
    "id": "500231000000"
  }, {
    "city": "县",
    "name": "忠县",
    "id": "500233000000"
  }, {
    "city": "县",
    "name": "云阳县",
    "id": "500235000000"
  }, {
    "city": "县",
    "name": "奉节县",
    "id": "500236000000"
  }, {
    "city": "县",
    "name": "巫山县",
    "id": "500237000000"
  }, {
    "city": "县",
    "name": "巫溪县",
    "id": "500238000000"
  }, {
    "city": "县",
    "name": "石柱土家族自治县",
    "id": "500240000000"
  }, {
    "city": "县",
    "name": "秀山土家族苗族自治县",
    "id": "500241000000"
  }, {
    "city": "县",
    "name": "酉阳土家族苗族自治县",
    "id": "500242000000"
  }, {
    "city": "县",
    "name": "彭水苗族土家族自治县",
    "id": "500243000000"
  }],
  "510100000000": [{
    "city": "成都市",
    "name": "市辖区",
    "id": "510101000000"
  }, {
    "city": "成都市",
    "name": "锦江区",
    "id": "510104000000"
  }, {
    "city": "成都市",
    "name": "青羊区",
    "id": "510105000000"
  }, {
    "city": "成都市",
    "name": "金牛区",
    "id": "510106000000"
  }, {
    "city": "成都市",
    "name": "武侯区",
    "id": "510107000000"
  }, {
    "city": "成都市",
    "name": "成华区",
    "id": "510108000000"
  }, {
    "city": "成都市",
    "name": "龙泉驿区",
    "id": "510112000000"
  }, {
    "city": "成都市",
    "name": "青白江区",
    "id": "510113000000"
  }, {
    "city": "成都市",
    "name": "新都区",
    "id": "510114000000"
  }, {
    "city": "成都市",
    "name": "温江区",
    "id": "510115000000"
  }, {
    "city": "成都市",
    "name": "双流区",
    "id": "510116000000"
  }, {
    "city": "成都市",
    "name": "郫都区",
    "id": "510117000000"
  }, {
    "city": "成都市",
    "name": "金堂县",
    "id": "510121000000"
  }, {
    "city": "成都市",
    "name": "大邑县",
    "id": "510129000000"
  }, {
    "city": "成都市",
    "name": "蒲江县",
    "id": "510131000000"
  }, {
    "city": "成都市",
    "name": "新津县",
    "id": "510132000000"
  }, {
    "city": "成都市",
    "name": "都江堰市",
    "id": "510181000000"
  }, {
    "city": "成都市",
    "name": "彭州市",
    "id": "510182000000"
  }, {
    "city": "成都市",
    "name": "邛崃市",
    "id": "510183000000"
  }, {
    "city": "成都市",
    "name": "崇州市",
    "id": "510184000000"
  }, {
    "city": "成都市",
    "name": "简阳市",
    "id": "510185000000"
  }],
  "510300000000": [{
    "city": "自贡市",
    "name": "市辖区",
    "id": "510301000000"
  }, {
    "city": "自贡市",
    "name": "自流井区",
    "id": "510302000000"
  }, {
    "city": "自贡市",
    "name": "贡井区",
    "id": "510303000000"
  }, {
    "city": "自贡市",
    "name": "大安区",
    "id": "510304000000"
  }, {
    "city": "自贡市",
    "name": "沿滩区",
    "id": "510311000000"
  }, {
    "city": "自贡市",
    "name": "荣县",
    "id": "510321000000"
  }, {
    "city": "自贡市",
    "name": "富顺县",
    "id": "510322000000"
  }],
  "510400000000": [{
    "city": "攀枝花市",
    "name": "市辖区",
    "id": "510401000000"
  }, {
    "city": "攀枝花市",
    "name": "东区",
    "id": "510402000000"
  }, {
    "city": "攀枝花市",
    "name": "西区",
    "id": "510403000000"
  }, {
    "city": "攀枝花市",
    "name": "仁和区",
    "id": "510411000000"
  }, {
    "city": "攀枝花市",
    "name": "米易县",
    "id": "510421000000"
  }, {
    "city": "攀枝花市",
    "name": "盐边县",
    "id": "510422000000"
  }],
  "510500000000": [{
    "city": "泸州市",
    "name": "市辖区",
    "id": "510501000000"
  }, {
    "city": "泸州市",
    "name": "江阳区",
    "id": "510502000000"
  }, {
    "city": "泸州市",
    "name": "纳溪区",
    "id": "510503000000"
  }, {
    "city": "泸州市",
    "name": "龙马潭区",
    "id": "510504000000"
  }, {
    "city": "泸州市",
    "name": "泸县",
    "id": "510521000000"
  }, {
    "city": "泸州市",
    "name": "合江县",
    "id": "510522000000"
  }, {
    "city": "泸州市",
    "name": "叙永县",
    "id": "510524000000"
  }, {
    "city": "泸州市",
    "name": "古蔺县",
    "id": "510525000000"
  }],
  "510600000000": [{
    "city": "德阳市",
    "name": "市辖区",
    "id": "510601000000"
  }, {
    "city": "德阳市",
    "name": "旌阳区",
    "id": "510603000000"
  }, {
    "city": "德阳市",
    "name": "罗江区",
    "id": "510604000000"
  }, {
    "city": "德阳市",
    "name": "中江县",
    "id": "510623000000"
  }, {
    "city": "德阳市",
    "name": "广汉市",
    "id": "510681000000"
  }, {
    "city": "德阳市",
    "name": "什邡市",
    "id": "510682000000"
  }, {
    "city": "德阳市",
    "name": "绵竹市",
    "id": "510683000000"
  }],
  "510700000000": [{
    "city": "绵阳市",
    "name": "市辖区",
    "id": "510701000000"
  }, {
    "city": "绵阳市",
    "name": "涪城区",
    "id": "510703000000"
  }, {
    "city": "绵阳市",
    "name": "游仙区",
    "id": "510704000000"
  }, {
    "city": "绵阳市",
    "name": "安州区",
    "id": "510705000000"
  }, {
    "city": "绵阳市",
    "name": "三台县",
    "id": "510722000000"
  }, {
    "city": "绵阳市",
    "name": "盐亭县",
    "id": "510723000000"
  }, {
    "city": "绵阳市",
    "name": "梓潼县",
    "id": "510725000000"
  }, {
    "city": "绵阳市",
    "name": "北川羌族自治县",
    "id": "510726000000"
  }, {
    "city": "绵阳市",
    "name": "平武县",
    "id": "510727000000"
  }, {
    "city": "绵阳市",
    "name": "江油市",
    "id": "510781000000"
  }],
  "510800000000": [{
    "city": "广元市",
    "name": "市辖区",
    "id": "510801000000"
  }, {
    "city": "广元市",
    "name": "利州区",
    "id": "510802000000"
  }, {
    "city": "广元市",
    "name": "昭化区",
    "id": "510811000000"
  }, {
    "city": "广元市",
    "name": "朝天区",
    "id": "510812000000"
  }, {
    "city": "广元市",
    "name": "旺苍县",
    "id": "510821000000"
  }, {
    "city": "广元市",
    "name": "青川县",
    "id": "510822000000"
  }, {
    "city": "广元市",
    "name": "剑阁县",
    "id": "510823000000"
  }, {
    "city": "广元市",
    "name": "苍溪县",
    "id": "510824000000"
  }],
  "510900000000": [{
    "city": "遂宁市",
    "name": "市辖区",
    "id": "510901000000"
  }, {
    "city": "遂宁市",
    "name": "船山区",
    "id": "510903000000"
  }, {
    "city": "遂宁市",
    "name": "安居区",
    "id": "510904000000"
  }, {
    "city": "遂宁市",
    "name": "蓬溪县",
    "id": "510921000000"
  }, {
    "city": "遂宁市",
    "name": "射洪县",
    "id": "510922000000"
  }, {
    "city": "遂宁市",
    "name": "大英县",
    "id": "510923000000"
  }],
  "511000000000": [{
    "city": "内江市",
    "name": "市辖区",
    "id": "511001000000"
  }, {
    "city": "内江市",
    "name": "市中区",
    "id": "511002000000"
  }, {
    "city": "内江市",
    "name": "东兴区",
    "id": "511011000000"
  }, {
    "city": "内江市",
    "name": "威远县",
    "id": "511024000000"
  }, {
    "city": "内江市",
    "name": "资中县",
    "id": "511025000000"
  }, {
    "city": "内江市",
    "name": "内江经济开发区",
    "id": "511071000000"
  }, {
    "city": "内江市",
    "name": "隆昌市",
    "id": "511083000000"
  }],
  "511100000000": [{
    "city": "乐山市",
    "name": "市辖区",
    "id": "511101000000"
  }, {
    "city": "乐山市",
    "name": "市中区",
    "id": "511102000000"
  }, {
    "city": "乐山市",
    "name": "沙湾区",
    "id": "511111000000"
  }, {
    "city": "乐山市",
    "name": "五通桥区",
    "id": "511112000000"
  }, {
    "city": "乐山市",
    "name": "金口河区",
    "id": "511113000000"
  }, {
    "city": "乐山市",
    "name": "犍为县",
    "id": "511123000000"
  }, {
    "city": "乐山市",
    "name": "井研县",
    "id": "511124000000"
  }, {
    "city": "乐山市",
    "name": "夹江县",
    "id": "511126000000"
  }, {
    "city": "乐山市",
    "name": "沐川县",
    "id": "511129000000"
  }, {
    "city": "乐山市",
    "name": "峨边彝族自治县",
    "id": "511132000000"
  }, {
    "city": "乐山市",
    "name": "马边彝族自治县",
    "id": "511133000000"
  }, {
    "city": "乐山市",
    "name": "峨眉山市",
    "id": "511181000000"
  }],
  "511300000000": [{
    "city": "南充市",
    "name": "市辖区",
    "id": "511301000000"
  }, {
    "city": "南充市",
    "name": "顺庆区",
    "id": "511302000000"
  }, {
    "city": "南充市",
    "name": "高坪区",
    "id": "511303000000"
  }, {
    "city": "南充市",
    "name": "嘉陵区",
    "id": "511304000000"
  }, {
    "city": "南充市",
    "name": "南部县",
    "id": "511321000000"
  }, {
    "city": "南充市",
    "name": "营山县",
    "id": "511322000000"
  }, {
    "city": "南充市",
    "name": "蓬安县",
    "id": "511323000000"
  }, {
    "city": "南充市",
    "name": "仪陇县",
    "id": "511324000000"
  }, {
    "city": "南充市",
    "name": "西充县",
    "id": "511325000000"
  }, {
    "city": "南充市",
    "name": "阆中市",
    "id": "511381000000"
  }],
  "511400000000": [{
    "city": "眉山市",
    "name": "市辖区",
    "id": "511401000000"
  }, {
    "city": "眉山市",
    "name": "东坡区",
    "id": "511402000000"
  }, {
    "city": "眉山市",
    "name": "彭山区",
    "id": "511403000000"
  }, {
    "city": "眉山市",
    "name": "仁寿县",
    "id": "511421000000"
  }, {
    "city": "眉山市",
    "name": "洪雅县",
    "id": "511423000000"
  }, {
    "city": "眉山市",
    "name": "丹棱县",
    "id": "511424000000"
  }, {
    "city": "眉山市",
    "name": "青神县",
    "id": "511425000000"
  }],
  "511500000000": [{
    "city": "宜宾市",
    "name": "市辖区",
    "id": "511501000000"
  }, {
    "city": "宜宾市",
    "name": "翠屏区",
    "id": "511502000000"
  }, {
    "city": "宜宾市",
    "name": "南溪区",
    "id": "511503000000"
  }, {
    "city": "宜宾市",
    "name": "叙州区",
    "id": "511504000000"
  }, {
    "city": "宜宾市",
    "name": "江安县",
    "id": "511523000000"
  }, {
    "city": "宜宾市",
    "name": "长宁县",
    "id": "511524000000"
  }, {
    "city": "宜宾市",
    "name": "高县",
    "id": "511525000000"
  }, {
    "city": "宜宾市",
    "name": "珙县",
    "id": "511526000000"
  }, {
    "city": "宜宾市",
    "name": "筠连县",
    "id": "511527000000"
  }, {
    "city": "宜宾市",
    "name": "兴文县",
    "id": "511528000000"
  }, {
    "city": "宜宾市",
    "name": "屏山县",
    "id": "511529000000"
  }],
  "511600000000": [{
    "city": "广安市",
    "name": "市辖区",
    "id": "511601000000"
  }, {
    "city": "广安市",
    "name": "广安区",
    "id": "511602000000"
  }, {
    "city": "广安市",
    "name": "前锋区",
    "id": "511603000000"
  }, {
    "city": "广安市",
    "name": "岳池县",
    "id": "511621000000"
  }, {
    "city": "广安市",
    "name": "武胜县",
    "id": "511622000000"
  }, {
    "city": "广安市",
    "name": "邻水县",
    "id": "511623000000"
  }, {
    "city": "广安市",
    "name": "华蓥市",
    "id": "511681000000"
  }],
  "511700000000": [{
    "city": "达州市",
    "name": "市辖区",
    "id": "511701000000"
  }, {
    "city": "达州市",
    "name": "通川区",
    "id": "511702000000"
  }, {
    "city": "达州市",
    "name": "达川区",
    "id": "511703000000"
  }, {
    "city": "达州市",
    "name": "宣汉县",
    "id": "511722000000"
  }, {
    "city": "达州市",
    "name": "开江县",
    "id": "511723000000"
  }, {
    "city": "达州市",
    "name": "大竹县",
    "id": "511724000000"
  }, {
    "city": "达州市",
    "name": "渠县",
    "id": "511725000000"
  }, {
    "city": "达州市",
    "name": "达州经济开发区",
    "id": "511771000000"
  }, {
    "city": "达州市",
    "name": "万源市",
    "id": "511781000000"
  }],
  "511800000000": [{
    "city": "雅安市",
    "name": "市辖区",
    "id": "511801000000"
  }, {
    "city": "雅安市",
    "name": "雨城区",
    "id": "511802000000"
  }, {
    "city": "雅安市",
    "name": "名山区",
    "id": "511803000000"
  }, {
    "city": "雅安市",
    "name": "荥经县",
    "id": "511822000000"
  }, {
    "city": "雅安市",
    "name": "汉源县",
    "id": "511823000000"
  }, {
    "city": "雅安市",
    "name": "石棉县",
    "id": "511824000000"
  }, {
    "city": "雅安市",
    "name": "天全县",
    "id": "511825000000"
  }, {
    "city": "雅安市",
    "name": "芦山县",
    "id": "511826000000"
  }, {
    "city": "雅安市",
    "name": "宝兴县",
    "id": "511827000000"
  }],
  "511900000000": [{
    "city": "巴中市",
    "name": "市辖区",
    "id": "511901000000"
  }, {
    "city": "巴中市",
    "name": "巴州区",
    "id": "511902000000"
  }, {
    "city": "巴中市",
    "name": "恩阳区",
    "id": "511903000000"
  }, {
    "city": "巴中市",
    "name": "通江县",
    "id": "511921000000"
  }, {
    "city": "巴中市",
    "name": "南江县",
    "id": "511922000000"
  }, {
    "city": "巴中市",
    "name": "平昌县",
    "id": "511923000000"
  }, {
    "city": "巴中市",
    "name": "巴中经济开发区",
    "id": "511971000000"
  }],
  "512000000000": [{
    "city": "资阳市",
    "name": "市辖区",
    "id": "512001000000"
  }, {
    "city": "资阳市",
    "name": "雁江区",
    "id": "512002000000"
  }, {
    "city": "资阳市",
    "name": "安岳县",
    "id": "512021000000"
  }, {
    "city": "资阳市",
    "name": "乐至县",
    "id": "512022000000"
  }],
  "513200000000": [{
    "city": "阿坝藏族羌族自治州",
    "name": "马尔康市",
    "id": "513201000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "汶川县",
    "id": "513221000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "理县",
    "id": "513222000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "茂县",
    "id": "513223000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "松潘县",
    "id": "513224000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "九寨沟县",
    "id": "513225000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "金川县",
    "id": "513226000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "小金县",
    "id": "513227000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "黑水县",
    "id": "513228000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "壤塘县",
    "id": "513230000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "阿坝县",
    "id": "513231000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "若尔盖县",
    "id": "513232000000"
  }, {
    "city": "阿坝藏族羌族自治州",
    "name": "红原县",
    "id": "513233000000"
  }],
  "513300000000": [{
    "city": "甘孜藏族自治州",
    "name": "康定市",
    "id": "513301000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "泸定县",
    "id": "513322000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "丹巴县",
    "id": "513323000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "九龙县",
    "id": "513324000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "雅江县",
    "id": "513325000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "道孚县",
    "id": "513326000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "炉霍县",
    "id": "513327000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "甘孜县",
    "id": "513328000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "新龙县",
    "id": "513329000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "德格县",
    "id": "513330000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "白玉县",
    "id": "513331000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "石渠县",
    "id": "513332000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "色达县",
    "id": "513333000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "理塘县",
    "id": "513334000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "巴塘县",
    "id": "513335000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "乡城县",
    "id": "513336000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "稻城县",
    "id": "513337000000"
  }, {
    "city": "甘孜藏族自治州",
    "name": "得荣县",
    "id": "513338000000"
  }],
  "513400000000": [{
    "city": "凉山彝族自治州",
    "name": "西昌市",
    "id": "513401000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "木里藏族自治县",
    "id": "513422000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "盐源县",
    "id": "513423000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "德昌县",
    "id": "513424000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "会理县",
    "id": "513425000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "会东县",
    "id": "513426000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "宁南县",
    "id": "513427000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "普格县",
    "id": "513428000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "布拖县",
    "id": "513429000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "金阳县",
    "id": "513430000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "昭觉县",
    "id": "513431000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "喜德县",
    "id": "513432000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "冕宁县",
    "id": "513433000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "越西县",
    "id": "513434000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "甘洛县",
    "id": "513435000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "美姑县",
    "id": "513436000000"
  }, {
    "city": "凉山彝族自治州",
    "name": "雷波县",
    "id": "513437000000"
  }],
  "520100000000": [{
    "city": "贵阳市",
    "name": "市辖区",
    "id": "520101000000"
  }, {
    "city": "贵阳市",
    "name": "南明区",
    "id": "520102000000"
  }, {
    "city": "贵阳市",
    "name": "云岩区",
    "id": "520103000000"
  }, {
    "city": "贵阳市",
    "name": "花溪区",
    "id": "520111000000"
  }, {
    "city": "贵阳市",
    "name": "乌当区",
    "id": "520112000000"
  }, {
    "city": "贵阳市",
    "name": "白云区",
    "id": "520113000000"
  }, {
    "city": "贵阳市",
    "name": "观山湖区",
    "id": "520115000000"
  }, {
    "city": "贵阳市",
    "name": "开阳县",
    "id": "520121000000"
  }, {
    "city": "贵阳市",
    "name": "息烽县",
    "id": "520122000000"
  }, {
    "city": "贵阳市",
    "name": "修文县",
    "id": "520123000000"
  }, {
    "city": "贵阳市",
    "name": "清镇市",
    "id": "520181000000"
  }],
  "520200000000": [{
    "city": "六盘水市",
    "name": "钟山区",
    "id": "520201000000"
  }, {
    "city": "六盘水市",
    "name": "六枝特区",
    "id": "520203000000"
  }, {
    "city": "六盘水市",
    "name": "水城县",
    "id": "520221000000"
  }, {
    "city": "六盘水市",
    "name": "盘州市",
    "id": "520281000000"
  }],
  "520300000000": [{
    "city": "遵义市",
    "name": "市辖区",
    "id": "520301000000"
  }, {
    "city": "遵义市",
    "name": "红花岗区",
    "id": "520302000000"
  }, {
    "city": "遵义市",
    "name": "汇川区",
    "id": "520303000000"
  }, {
    "city": "遵义市",
    "name": "播州区",
    "id": "520304000000"
  }, {
    "city": "遵义市",
    "name": "桐梓县",
    "id": "520322000000"
  }, {
    "city": "遵义市",
    "name": "绥阳县",
    "id": "520323000000"
  }, {
    "city": "遵义市",
    "name": "正安县",
    "id": "520324000000"
  }, {
    "city": "遵义市",
    "name": "道真仡佬族苗族自治县",
    "id": "520325000000"
  }, {
    "city": "遵义市",
    "name": "务川仡佬族苗族自治县",
    "id": "520326000000"
  }, {
    "city": "遵义市",
    "name": "凤冈县",
    "id": "520327000000"
  }, {
    "city": "遵义市",
    "name": "湄潭县",
    "id": "520328000000"
  }, {
    "city": "遵义市",
    "name": "余庆县",
    "id": "520329000000"
  }, {
    "city": "遵义市",
    "name": "习水县",
    "id": "520330000000"
  }, {
    "city": "遵义市",
    "name": "赤水市",
    "id": "520381000000"
  }, {
    "city": "遵义市",
    "name": "仁怀市",
    "id": "520382000000"
  }],
  "520400000000": [{
    "city": "安顺市",
    "name": "市辖区",
    "id": "520401000000"
  }, {
    "city": "安顺市",
    "name": "西秀区",
    "id": "520402000000"
  }, {
    "city": "安顺市",
    "name": "平坝区",
    "id": "520403000000"
  }, {
    "city": "安顺市",
    "name": "普定县",
    "id": "520422000000"
  }, {
    "city": "安顺市",
    "name": "镇宁布依族苗族自治县",
    "id": "520423000000"
  }, {
    "city": "安顺市",
    "name": "关岭布依族苗族自治县",
    "id": "520424000000"
  }, {
    "city": "安顺市",
    "name": "紫云苗族布依族自治县",
    "id": "520425000000"
  }],
  "520500000000": [{
    "city": "毕节市",
    "name": "市辖区",
    "id": "520501000000"
  }, {
    "city": "毕节市",
    "name": "七星关区",
    "id": "520502000000"
  }, {
    "city": "毕节市",
    "name": "大方县",
    "id": "520521000000"
  }, {
    "city": "毕节市",
    "name": "黔西县",
    "id": "520522000000"
  }, {
    "city": "毕节市",
    "name": "金沙县",
    "id": "520523000000"
  }, {
    "city": "毕节市",
    "name": "织金县",
    "id": "520524000000"
  }, {
    "city": "毕节市",
    "name": "纳雍县",
    "id": "520525000000"
  }, {
    "city": "毕节市",
    "name": "威宁彝族回族苗族自治县",
    "id": "520526000000"
  }, {
    "city": "毕节市",
    "name": "赫章县",
    "id": "520527000000"
  }],
  "520600000000": [{
    "city": "铜仁市",
    "name": "市辖区",
    "id": "520601000000"
  }, {
    "city": "铜仁市",
    "name": "碧江区",
    "id": "520602000000"
  }, {
    "city": "铜仁市",
    "name": "万山区",
    "id": "520603000000"
  }, {
    "city": "铜仁市",
    "name": "江口县",
    "id": "520621000000"
  }, {
    "city": "铜仁市",
    "name": "玉屏侗族自治县",
    "id": "520622000000"
  }, {
    "city": "铜仁市",
    "name": "石阡县",
    "id": "520623000000"
  }, {
    "city": "铜仁市",
    "name": "思南县",
    "id": "520624000000"
  }, {
    "city": "铜仁市",
    "name": "印江土家族苗族自治县",
    "id": "520625000000"
  }, {
    "city": "铜仁市",
    "name": "德江县",
    "id": "520626000000"
  }, {
    "city": "铜仁市",
    "name": "沿河土家族自治县",
    "id": "520627000000"
  }, {
    "city": "铜仁市",
    "name": "松桃苗族自治县",
    "id": "520628000000"
  }],
  "522300000000": [{
    "city": "黔西南布依族苗族自治州",
    "name": "兴义市",
    "id": "522301000000"
  }, {
    "city": "黔西南布依族苗族自治州",
    "name": "兴仁市",
    "id": "522302000000"
  }, {
    "city": "黔西南布依族苗族自治州",
    "name": "普安县",
    "id": "522323000000"
  }, {
    "city": "黔西南布依族苗族自治州",
    "name": "晴隆县",
    "id": "522324000000"
  }, {
    "city": "黔西南布依族苗族自治州",
    "name": "贞丰县",
    "id": "522325000000"
  }, {
    "city": "黔西南布依族苗族自治州",
    "name": "望谟县",
    "id": "522326000000"
  }, {
    "city": "黔西南布依族苗族自治州",
    "name": "册亨县",
    "id": "522327000000"
  }, {
    "city": "黔西南布依族苗族自治州",
    "name": "安龙县",
    "id": "522328000000"
  }],
  "522600000000": [{
    "city": "黔东南苗族侗族自治州",
    "name": "凯里市",
    "id": "522601000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "黄平县",
    "id": "522622000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "施秉县",
    "id": "522623000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "三穗县",
    "id": "522624000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "镇远县",
    "id": "522625000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "岑巩县",
    "id": "522626000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "天柱县",
    "id": "522627000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "锦屏县",
    "id": "522628000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "剑河县",
    "id": "522629000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "台江县",
    "id": "522630000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "黎平县",
    "id": "522631000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "榕江县",
    "id": "522632000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "从江县",
    "id": "522633000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "雷山县",
    "id": "522634000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "麻江县",
    "id": "522635000000"
  }, {
    "city": "黔东南苗族侗族自治州",
    "name": "丹寨县",
    "id": "522636000000"
  }],
  "522700000000": [{
    "city": "黔南布依族苗族自治州",
    "name": "都匀市",
    "id": "522701000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "福泉市",
    "id": "522702000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "荔波县",
    "id": "522722000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "贵定县",
    "id": "522723000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "瓮安县",
    "id": "522725000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "独山县",
    "id": "522726000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "平塘县",
    "id": "522727000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "罗甸县",
    "id": "522728000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "长顺县",
    "id": "522729000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "龙里县",
    "id": "522730000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "惠水县",
    "id": "522731000000"
  }, {
    "city": "黔南布依族苗族自治州",
    "name": "三都水族自治县",
    "id": "522732000000"
  }],
  "530100000000": [{
    "city": "昆明市",
    "name": "市辖区",
    "id": "530101000000"
  }, {
    "city": "昆明市",
    "name": "五华区",
    "id": "530102000000"
  }, {
    "city": "昆明市",
    "name": "盘龙区",
    "id": "530103000000"
  }, {
    "city": "昆明市",
    "name": "官渡区",
    "id": "530111000000"
  }, {
    "city": "昆明市",
    "name": "西山区",
    "id": "530112000000"
  }, {
    "city": "昆明市",
    "name": "东川区",
    "id": "530113000000"
  }, {
    "city": "昆明市",
    "name": "呈贡区",
    "id": "530114000000"
  }, {
    "city": "昆明市",
    "name": "晋宁区",
    "id": "530115000000"
  }, {
    "city": "昆明市",
    "name": "富民县",
    "id": "530124000000"
  }, {
    "city": "昆明市",
    "name": "宜良县",
    "id": "530125000000"
  }, {
    "city": "昆明市",
    "name": "石林彝族自治县",
    "id": "530126000000"
  }, {
    "city": "昆明市",
    "name": "嵩明县",
    "id": "530127000000"
  }, {
    "city": "昆明市",
    "name": "禄劝彝族苗族自治县",
    "id": "530128000000"
  }, {
    "city": "昆明市",
    "name": "寻甸回族彝族自治县",
    "id": "530129000000"
  }, {
    "city": "昆明市",
    "name": "安宁市",
    "id": "530181000000"
  }],
  "530300000000": [{
    "city": "曲靖市",
    "name": "市辖区",
    "id": "530301000000"
  }, {
    "city": "曲靖市",
    "name": "麒麟区",
    "id": "530302000000"
  }, {
    "city": "曲靖市",
    "name": "沾益区",
    "id": "530303000000"
  }, {
    "city": "曲靖市",
    "name": "马龙区",
    "id": "530304000000"
  }, {
    "city": "曲靖市",
    "name": "陆良县",
    "id": "530322000000"
  }, {
    "city": "曲靖市",
    "name": "师宗县",
    "id": "530323000000"
  }, {
    "city": "曲靖市",
    "name": "罗平县",
    "id": "530324000000"
  }, {
    "city": "曲靖市",
    "name": "富源县",
    "id": "530325000000"
  }, {
    "city": "曲靖市",
    "name": "会泽县",
    "id": "530326000000"
  }, {
    "city": "曲靖市",
    "name": "宣威市",
    "id": "530381000000"
  }],
  "530400000000": [{
    "city": "玉溪市",
    "name": "市辖区",
    "id": "530401000000"
  }, {
    "city": "玉溪市",
    "name": "红塔区",
    "id": "530402000000"
  }, {
    "city": "玉溪市",
    "name": "江川区",
    "id": "530403000000"
  }, {
    "city": "玉溪市",
    "name": "澄江县",
    "id": "530422000000"
  }, {
    "city": "玉溪市",
    "name": "通海县",
    "id": "530423000000"
  }, {
    "city": "玉溪市",
    "name": "华宁县",
    "id": "530424000000"
  }, {
    "city": "玉溪市",
    "name": "易门县",
    "id": "530425000000"
  }, {
    "city": "玉溪市",
    "name": "峨山彝族自治县",
    "id": "530426000000"
  }, {
    "city": "玉溪市",
    "name": "新平彝族傣族自治县",
    "id": "530427000000"
  }, {
    "city": "玉溪市",
    "name": "元江哈尼族彝族傣族自治县",
    "id": "530428000000"
  }],
  "530500000000": [{
    "city": "保山市",
    "name": "市辖区",
    "id": "530501000000"
  }, {
    "city": "保山市",
    "name": "隆阳区",
    "id": "530502000000"
  }, {
    "city": "保山市",
    "name": "施甸县",
    "id": "530521000000"
  }, {
    "city": "保山市",
    "name": "龙陵县",
    "id": "530523000000"
  }, {
    "city": "保山市",
    "name": "昌宁县",
    "id": "530524000000"
  }, {
    "city": "保山市",
    "name": "腾冲市",
    "id": "530581000000"
  }],
  "530600000000": [{
    "city": "昭通市",
    "name": "市辖区",
    "id": "530601000000"
  }, {
    "city": "昭通市",
    "name": "昭阳区",
    "id": "530602000000"
  }, {
    "city": "昭通市",
    "name": "鲁甸县",
    "id": "530621000000"
  }, {
    "city": "昭通市",
    "name": "巧家县",
    "id": "530622000000"
  }, {
    "city": "昭通市",
    "name": "盐津县",
    "id": "530623000000"
  }, {
    "city": "昭通市",
    "name": "大关县",
    "id": "530624000000"
  }, {
    "city": "昭通市",
    "name": "永善县",
    "id": "530625000000"
  }, {
    "city": "昭通市",
    "name": "绥江县",
    "id": "530626000000"
  }, {
    "city": "昭通市",
    "name": "镇雄县",
    "id": "530627000000"
  }, {
    "city": "昭通市",
    "name": "彝良县",
    "id": "530628000000"
  }, {
    "city": "昭通市",
    "name": "威信县",
    "id": "530629000000"
  }, {
    "city": "昭通市",
    "name": "水富市",
    "id": "530681000000"
  }],
  "530700000000": [{
    "city": "丽江市",
    "name": "市辖区",
    "id": "530701000000"
  }, {
    "city": "丽江市",
    "name": "古城区",
    "id": "530702000000"
  }, {
    "city": "丽江市",
    "name": "玉龙纳西族自治县",
    "id": "530721000000"
  }, {
    "city": "丽江市",
    "name": "永胜县",
    "id": "530722000000"
  }, {
    "city": "丽江市",
    "name": "华坪县",
    "id": "530723000000"
  }, {
    "city": "丽江市",
    "name": "宁蒗彝族自治县",
    "id": "530724000000"
  }],
  "530800000000": [{
    "city": "普洱市",
    "name": "市辖区",
    "id": "530801000000"
  }, {
    "city": "普洱市",
    "name": "思茅区",
    "id": "530802000000"
  }, {
    "city": "普洱市",
    "name": "宁洱哈尼族彝族自治县",
    "id": "530821000000"
  }, {
    "city": "普洱市",
    "name": "墨江哈尼族自治县",
    "id": "530822000000"
  }, {
    "city": "普洱市",
    "name": "景东彝族自治县",
    "id": "530823000000"
  }, {
    "city": "普洱市",
    "name": "景谷傣族彝族自治县",
    "id": "530824000000"
  }, {
    "city": "普洱市",
    "name": "镇沅彝族哈尼族拉祜族自治县",
    "id": "530825000000"
  }, {
    "city": "普洱市",
    "name": "江城哈尼族彝族自治县",
    "id": "530826000000"
  }, {
    "city": "普洱市",
    "name": "孟连傣族拉祜族佤族自治县",
    "id": "530827000000"
  }, {
    "city": "普洱市",
    "name": "澜沧拉祜族自治县",
    "id": "530828000000"
  }, {
    "city": "普洱市",
    "name": "西盟佤族自治县",
    "id": "530829000000"
  }],
  "530900000000": [{
    "city": "临沧市",
    "name": "市辖区",
    "id": "530901000000"
  }, {
    "city": "临沧市",
    "name": "临翔区",
    "id": "530902000000"
  }, {
    "city": "临沧市",
    "name": "凤庆县",
    "id": "530921000000"
  }, {
    "city": "临沧市",
    "name": "云县",
    "id": "530922000000"
  }, {
    "city": "临沧市",
    "name": "永德县",
    "id": "530923000000"
  }, {
    "city": "临沧市",
    "name": "镇康县",
    "id": "530924000000"
  }, {
    "city": "临沧市",
    "name": "双江拉祜族佤族布朗族傣族自治县",
    "id": "530925000000"
  }, {
    "city": "临沧市",
    "name": "耿马傣族佤族自治县",
    "id": "530926000000"
  }, {
    "city": "临沧市",
    "name": "沧源佤族自治县",
    "id": "530927000000"
  }],
  "532300000000": [{
    "city": "楚雄彝族自治州",
    "name": "楚雄市",
    "id": "532301000000"
  }, {
    "city": "楚雄彝族自治州",
    "name": "双柏县",
    "id": "532322000000"
  }, {
    "city": "楚雄彝族自治州",
    "name": "牟定县",
    "id": "532323000000"
  }, {
    "city": "楚雄彝族自治州",
    "name": "南华县",
    "id": "532324000000"
  }, {
    "city": "楚雄彝族自治州",
    "name": "姚安县",
    "id": "532325000000"
  }, {
    "city": "楚雄彝族自治州",
    "name": "大姚县",
    "id": "532326000000"
  }, {
    "city": "楚雄彝族自治州",
    "name": "永仁县",
    "id": "532327000000"
  }, {
    "city": "楚雄彝族自治州",
    "name": "元谋县",
    "id": "532328000000"
  }, {
    "city": "楚雄彝族自治州",
    "name": "武定县",
    "id": "532329000000"
  }, {
    "city": "楚雄彝族自治州",
    "name": "禄丰县",
    "id": "532331000000"
  }],
  "532500000000": [{
    "city": "红河哈尼族彝族自治州",
    "name": "个旧市",
    "id": "532501000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "开远市",
    "id": "532502000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "蒙自市",
    "id": "532503000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "弥勒市",
    "id": "532504000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "屏边苗族自治县",
    "id": "532523000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "建水县",
    "id": "532524000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "石屏县",
    "id": "532525000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "泸西县",
    "id": "532527000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "元阳县",
    "id": "532528000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "红河县",
    "id": "532529000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "金平苗族瑶族傣族自治县",
    "id": "532530000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "绿春县",
    "id": "532531000000"
  }, {
    "city": "红河哈尼族彝族自治州",
    "name": "河口瑶族自治县",
    "id": "532532000000"
  }],
  "532600000000": [{
    "city": "文山壮族苗族自治州",
    "name": "文山市",
    "id": "532601000000"
  }, {
    "city": "文山壮族苗族自治州",
    "name": "砚山县",
    "id": "532622000000"
  }, {
    "city": "文山壮族苗族自治州",
    "name": "西畴县",
    "id": "532623000000"
  }, {
    "city": "文山壮族苗族自治州",
    "name": "麻栗坡县",
    "id": "532624000000"
  }, {
    "city": "文山壮族苗族自治州",
    "name": "马关县",
    "id": "532625000000"
  }, {
    "city": "文山壮族苗族自治州",
    "name": "丘北县",
    "id": "532626000000"
  }, {
    "city": "文山壮族苗族自治州",
    "name": "广南县",
    "id": "532627000000"
  }, {
    "city": "文山壮族苗族自治州",
    "name": "富宁县",
    "id": "532628000000"
  }],
  "532800000000": [{
    "city": "西双版纳傣族自治州",
    "name": "景洪市",
    "id": "532801000000"
  }, {
    "city": "西双版纳傣族自治州",
    "name": "勐海县",
    "id": "532822000000"
  }, {
    "city": "西双版纳傣族自治州",
    "name": "勐腊县",
    "id": "532823000000"
  }],
  "532900000000": [{
    "city": "大理白族自治州",
    "name": "大理市",
    "id": "532901000000"
  }, {
    "city": "大理白族自治州",
    "name": "漾濞彝族自治县",
    "id": "532922000000"
  }, {
    "city": "大理白族自治州",
    "name": "祥云县",
    "id": "532923000000"
  }, {
    "city": "大理白族自治州",
    "name": "宾川县",
    "id": "532924000000"
  }, {
    "city": "大理白族自治州",
    "name": "弥渡县",
    "id": "532925000000"
  }, {
    "city": "大理白族自治州",
    "name": "南涧彝族自治县",
    "id": "532926000000"
  }, {
    "city": "大理白族自治州",
    "name": "巍山彝族回族自治县",
    "id": "532927000000"
  }, {
    "city": "大理白族自治州",
    "name": "永平县",
    "id": "532928000000"
  }, {
    "city": "大理白族自治州",
    "name": "云龙县",
    "id": "532929000000"
  }, {
    "city": "大理白族自治州",
    "name": "洱源县",
    "id": "532930000000"
  }, {
    "city": "大理白族自治州",
    "name": "剑川县",
    "id": "532931000000"
  }, {
    "city": "大理白族自治州",
    "name": "鹤庆县",
    "id": "532932000000"
  }],
  "533100000000": [{
    "city": "德宏傣族景颇族自治州",
    "name": "瑞丽市",
    "id": "533102000000"
  }, {
    "city": "德宏傣族景颇族自治州",
    "name": "芒市",
    "id": "533103000000"
  }, {
    "city": "德宏傣族景颇族自治州",
    "name": "梁河县",
    "id": "533122000000"
  }, {
    "city": "德宏傣族景颇族自治州",
    "name": "盈江县",
    "id": "533123000000"
  }, {
    "city": "德宏傣族景颇族自治州",
    "name": "陇川县",
    "id": "533124000000"
  }],
  "533300000000": [{
    "city": "怒江傈僳族自治州",
    "name": "泸水市",
    "id": "533301000000"
  }, {
    "city": "怒江傈僳族自治州",
    "name": "福贡县",
    "id": "533323000000"
  }, {
    "city": "怒江傈僳族自治州",
    "name": "贡山独龙族怒族自治县",
    "id": "533324000000"
  }, {
    "city": "怒江傈僳族自治州",
    "name": "兰坪白族普米族自治县",
    "id": "533325000000"
  }],
  "533400000000": [{
    "city": "迪庆藏族自治州",
    "name": "香格里拉市",
    "id": "533401000000"
  }, {
    "city": "迪庆藏族自治州",
    "name": "德钦县",
    "id": "533422000000"
  }, {
    "city": "迪庆藏族自治州",
    "name": "维西傈僳族自治县",
    "id": "533423000000"
  }],
  "540100000000": [{
    "city": "拉萨市",
    "name": "市辖区",
    "id": "540101000000"
  }, {
    "city": "拉萨市",
    "name": "城关区",
    "id": "540102000000"
  }, {
    "city": "拉萨市",
    "name": "堆龙德庆区",
    "id": "540103000000"
  }, {
    "city": "拉萨市",
    "name": "达孜区",
    "id": "540104000000"
  }, {
    "city": "拉萨市",
    "name": "林周县",
    "id": "540121000000"
  }, {
    "city": "拉萨市",
    "name": "当雄县",
    "id": "540122000000"
  }, {
    "city": "拉萨市",
    "name": "尼木县",
    "id": "540123000000"
  }, {
    "city": "拉萨市",
    "name": "曲水县",
    "id": "540124000000"
  }, {
    "city": "拉萨市",
    "name": "墨竹工卡县",
    "id": "540127000000"
  }, {
    "city": "拉萨市",
    "name": "格尔木藏青工业园区",
    "id": "540171000000"
  }, {
    "city": "拉萨市",
    "name": "拉萨经济技术开发区",
    "id": "540172000000"
  }, {
    "city": "拉萨市",
    "name": "西藏文化旅游创意园区",
    "id": "540173000000"
  }, {
    "city": "拉萨市",
    "name": "达孜工业园区",
    "id": "540174000000"
  }],
  "540200000000": [{
    "city": "日喀则市",
    "name": "桑珠孜区",
    "id": "540202000000"
  }, {
    "city": "日喀则市",
    "name": "南木林县",
    "id": "540221000000"
  }, {
    "city": "日喀则市",
    "name": "江孜县",
    "id": "540222000000"
  }, {
    "city": "日喀则市",
    "name": "定日县",
    "id": "540223000000"
  }, {
    "city": "日喀则市",
    "name": "萨迦县",
    "id": "540224000000"
  }, {
    "city": "日喀则市",
    "name": "拉孜县",
    "id": "540225000000"
  }, {
    "city": "日喀则市",
    "name": "昂仁县",
    "id": "540226000000"
  }, {
    "city": "日喀则市",
    "name": "谢通门县",
    "id": "540227000000"
  }, {
    "city": "日喀则市",
    "name": "白朗县",
    "id": "540228000000"
  }, {
    "city": "日喀则市",
    "name": "仁布县",
    "id": "540229000000"
  }, {
    "city": "日喀则市",
    "name": "康马县",
    "id": "540230000000"
  }, {
    "city": "日喀则市",
    "name": "定结县",
    "id": "540231000000"
  }, {
    "city": "日喀则市",
    "name": "仲巴县",
    "id": "540232000000"
  }, {
    "city": "日喀则市",
    "name": "亚东县",
    "id": "540233000000"
  }, {
    "city": "日喀则市",
    "name": "吉隆县",
    "id": "540234000000"
  }, {
    "city": "日喀则市",
    "name": "聂拉木县",
    "id": "540235000000"
  }, {
    "city": "日喀则市",
    "name": "萨嘎县",
    "id": "540236000000"
  }, {
    "city": "日喀则市",
    "name": "岗巴县",
    "id": "540237000000"
  }],
  "540300000000": [{
    "city": "昌都市",
    "name": "卡若区",
    "id": "540302000000"
  }, {
    "city": "昌都市",
    "name": "江达县",
    "id": "540321000000"
  }, {
    "city": "昌都市",
    "name": "贡觉县",
    "id": "540322000000"
  }, {
    "city": "昌都市",
    "name": "类乌齐县",
    "id": "540323000000"
  }, {
    "city": "昌都市",
    "name": "丁青县",
    "id": "540324000000"
  }, {
    "city": "昌都市",
    "name": "察雅县",
    "id": "540325000000"
  }, {
    "city": "昌都市",
    "name": "八宿县",
    "id": "540326000000"
  }, {
    "city": "昌都市",
    "name": "左贡县",
    "id": "540327000000"
  }, {
    "city": "昌都市",
    "name": "芒康县",
    "id": "540328000000"
  }, {
    "city": "昌都市",
    "name": "洛隆县",
    "id": "540329000000"
  }, {
    "city": "昌都市",
    "name": "边坝县",
    "id": "540330000000"
  }],
  "540400000000": [{
    "city": "林芝市",
    "name": "巴宜区",
    "id": "540402000000"
  }, {
    "city": "林芝市",
    "name": "工布江达县",
    "id": "540421000000"
  }, {
    "city": "林芝市",
    "name": "米林县",
    "id": "540422000000"
  }, {
    "city": "林芝市",
    "name": "墨脱县",
    "id": "540423000000"
  }, {
    "city": "林芝市",
    "name": "波密县",
    "id": "540424000000"
  }, {
    "city": "林芝市",
    "name": "察隅县",
    "id": "540425000000"
  }, {
    "city": "林芝市",
    "name": "朗县",
    "id": "540426000000"
  }],
  "540500000000": [{
    "city": "山南市",
    "name": "市辖区",
    "id": "540501000000"
  }, {
    "city": "山南市",
    "name": "乃东区",
    "id": "540502000000"
  }, {
    "city": "山南市",
    "name": "扎囊县",
    "id": "540521000000"
  }, {
    "city": "山南市",
    "name": "贡嘎县",
    "id": "540522000000"
  }, {
    "city": "山南市",
    "name": "桑日县",
    "id": "540523000000"
  }, {
    "city": "山南市",
    "name": "琼结县",
    "id": "540524000000"
  }, {
    "city": "山南市",
    "name": "曲松县",
    "id": "540525000000"
  }, {
    "city": "山南市",
    "name": "措美县",
    "id": "540526000000"
  }, {
    "city": "山南市",
    "name": "洛扎县",
    "id": "540527000000"
  }, {
    "city": "山南市",
    "name": "加查县",
    "id": "540528000000"
  }, {
    "city": "山南市",
    "name": "隆子县",
    "id": "540529000000"
  }, {
    "city": "山南市",
    "name": "错那县",
    "id": "540530000000"
  }, {
    "city": "山南市",
    "name": "浪卡子县",
    "id": "540531000000"
  }],
  "540600000000": [{
    "city": "那曲市",
    "name": "色尼区",
    "id": "540602000000"
  }, {
    "city": "那曲市",
    "name": "嘉黎县",
    "id": "540621000000"
  }, {
    "city": "那曲市",
    "name": "比如县",
    "id": "540622000000"
  }, {
    "city": "那曲市",
    "name": "聂荣县",
    "id": "540623000000"
  }, {
    "city": "那曲市",
    "name": "安多县",
    "id": "540624000000"
  }, {
    "city": "那曲市",
    "name": "申扎县",
    "id": "540625000000"
  }, {
    "city": "那曲市",
    "name": "索县",
    "id": "540626000000"
  }, {
    "city": "那曲市",
    "name": "班戈县",
    "id": "540627000000"
  }, {
    "city": "那曲市",
    "name": "巴青县",
    "id": "540628000000"
  }, {
    "city": "那曲市",
    "name": "尼玛县",
    "id": "540629000000"
  }, {
    "city": "那曲市",
    "name": "双湖县",
    "id": "540630000000"
  }],
  "542500000000": [{
    "city": "阿里地区",
    "name": "普兰县",
    "id": "542521000000"
  }, {
    "city": "阿里地区",
    "name": "札达县",
    "id": "542522000000"
  }, {
    "city": "阿里地区",
    "name": "噶尔县",
    "id": "542523000000"
  }, {
    "city": "阿里地区",
    "name": "日土县",
    "id": "542524000000"
  }, {
    "city": "阿里地区",
    "name": "革吉县",
    "id": "542525000000"
  }, {
    "city": "阿里地区",
    "name": "改则县",
    "id": "542526000000"
  }, {
    "city": "阿里地区",
    "name": "措勤县",
    "id": "542527000000"
  }],
  "610100000000": [{
    "city": "西安市",
    "name": "市辖区",
    "id": "610101000000"
  }, {
    "city": "西安市",
    "name": "新城区",
    "id": "610102000000"
  }, {
    "city": "西安市",
    "name": "碑林区",
    "id": "610103000000"
  }, {
    "city": "西安市",
    "name": "莲湖区",
    "id": "610104000000"
  }, {
    "city": "西安市",
    "name": "灞桥区",
    "id": "610111000000"
  }, {
    "city": "西安市",
    "name": "未央区",
    "id": "610112000000"
  }, {
    "city": "西安市",
    "name": "雁塔区",
    "id": "610113000000"
  }, {
    "city": "西安市",
    "name": "阎良区",
    "id": "610114000000"
  }, {
    "city": "西安市",
    "name": "临潼区",
    "id": "610115000000"
  }, {
    "city": "西安市",
    "name": "长安区",
    "id": "610116000000"
  }, {
    "city": "西安市",
    "name": "高陵区",
    "id": "610117000000"
  }, {
    "city": "西安市",
    "name": "鄠邑区",
    "id": "610118000000"
  }, {
    "city": "西安市",
    "name": "蓝田县",
    "id": "610122000000"
  }, {
    "city": "西安市",
    "name": "周至县",
    "id": "610124000000"
  }],
  "610200000000": [{
    "city": "铜川市",
    "name": "市辖区",
    "id": "610201000000"
  }, {
    "city": "铜川市",
    "name": "王益区",
    "id": "610202000000"
  }, {
    "city": "铜川市",
    "name": "印台区",
    "id": "610203000000"
  }, {
    "city": "铜川市",
    "name": "耀州区",
    "id": "610204000000"
  }, {
    "city": "铜川市",
    "name": "宜君县",
    "id": "610222000000"
  }],
  "610300000000": [{
    "city": "宝鸡市",
    "name": "市辖区",
    "id": "610301000000"
  }, {
    "city": "宝鸡市",
    "name": "渭滨区",
    "id": "610302000000"
  }, {
    "city": "宝鸡市",
    "name": "金台区",
    "id": "610303000000"
  }, {
    "city": "宝鸡市",
    "name": "陈仓区",
    "id": "610304000000"
  }, {
    "city": "宝鸡市",
    "name": "凤翔县",
    "id": "610322000000"
  }, {
    "city": "宝鸡市",
    "name": "岐山县",
    "id": "610323000000"
  }, {
    "city": "宝鸡市",
    "name": "扶风县",
    "id": "610324000000"
  }, {
    "city": "宝鸡市",
    "name": "眉县",
    "id": "610326000000"
  }, {
    "city": "宝鸡市",
    "name": "陇县",
    "id": "610327000000"
  }, {
    "city": "宝鸡市",
    "name": "千阳县",
    "id": "610328000000"
  }, {
    "city": "宝鸡市",
    "name": "麟游县",
    "id": "610329000000"
  }, {
    "city": "宝鸡市",
    "name": "凤县",
    "id": "610330000000"
  }, {
    "city": "宝鸡市",
    "name": "太白县",
    "id": "610331000000"
  }],
  "610400000000": [{
    "city": "咸阳市",
    "name": "市辖区",
    "id": "610401000000"
  }, {
    "city": "咸阳市",
    "name": "秦都区",
    "id": "610402000000"
  }, {
    "city": "咸阳市",
    "name": "杨陵区",
    "id": "610403000000"
  }, {
    "city": "咸阳市",
    "name": "渭城区",
    "id": "610404000000"
  }, {
    "city": "咸阳市",
    "name": "三原县",
    "id": "610422000000"
  }, {
    "city": "咸阳市",
    "name": "泾阳县",
    "id": "610423000000"
  }, {
    "city": "咸阳市",
    "name": "乾县",
    "id": "610424000000"
  }, {
    "city": "咸阳市",
    "name": "礼泉县",
    "id": "610425000000"
  }, {
    "city": "咸阳市",
    "name": "永寿县",
    "id": "610426000000"
  }, {
    "city": "咸阳市",
    "name": "长武县",
    "id": "610428000000"
  }, {
    "city": "咸阳市",
    "name": "旬邑县",
    "id": "610429000000"
  }, {
    "city": "咸阳市",
    "name": "淳化县",
    "id": "610430000000"
  }, {
    "city": "咸阳市",
    "name": "武功县",
    "id": "610431000000"
  }, {
    "city": "咸阳市",
    "name": "兴平市",
    "id": "610481000000"
  }, {
    "city": "咸阳市",
    "name": "彬州市",
    "id": "610482000000"
  }],
  "610500000000": [{
    "city": "渭南市",
    "name": "市辖区",
    "id": "610501000000"
  }, {
    "city": "渭南市",
    "name": "临渭区",
    "id": "610502000000"
  }, {
    "city": "渭南市",
    "name": "华州区",
    "id": "610503000000"
  }, {
    "city": "渭南市",
    "name": "潼关县",
    "id": "610522000000"
  }, {
    "city": "渭南市",
    "name": "大荔县",
    "id": "610523000000"
  }, {
    "city": "渭南市",
    "name": "合阳县",
    "id": "610524000000"
  }, {
    "city": "渭南市",
    "name": "澄城县",
    "id": "610525000000"
  }, {
    "city": "渭南市",
    "name": "蒲城县",
    "id": "610526000000"
  }, {
    "city": "渭南市",
    "name": "白水县",
    "id": "610527000000"
  }, {
    "city": "渭南市",
    "name": "富平县",
    "id": "610528000000"
  }, {
    "city": "渭南市",
    "name": "韩城市",
    "id": "610581000000"
  }, {
    "city": "渭南市",
    "name": "华阴市",
    "id": "610582000000"
  }],
  "610600000000": [{
    "city": "延安市",
    "name": "市辖区",
    "id": "610601000000"
  }, {
    "city": "延安市",
    "name": "宝塔区",
    "id": "610602000000"
  }, {
    "city": "延安市",
    "name": "安塞区",
    "id": "610603000000"
  }, {
    "city": "延安市",
    "name": "延长县",
    "id": "610621000000"
  }, {
    "city": "延安市",
    "name": "延川县",
    "id": "610622000000"
  }, {
    "city": "延安市",
    "name": "子长县",
    "id": "610623000000"
  }, {
    "city": "延安市",
    "name": "志丹县",
    "id": "610625000000"
  }, {
    "city": "延安市",
    "name": "吴起县",
    "id": "610626000000"
  }, {
    "city": "延安市",
    "name": "甘泉县",
    "id": "610627000000"
  }, {
    "city": "延安市",
    "name": "富县",
    "id": "610628000000"
  }, {
    "city": "延安市",
    "name": "洛川县",
    "id": "610629000000"
  }, {
    "city": "延安市",
    "name": "宜川县",
    "id": "610630000000"
  }, {
    "city": "延安市",
    "name": "黄龙县",
    "id": "610631000000"
  }, {
    "city": "延安市",
    "name": "黄陵县",
    "id": "610632000000"
  }],
  "610700000000": [{
    "city": "汉中市",
    "name": "市辖区",
    "id": "610701000000"
  }, {
    "city": "汉中市",
    "name": "汉台区",
    "id": "610702000000"
  }, {
    "city": "汉中市",
    "name": "南郑区",
    "id": "610703000000"
  }, {
    "city": "汉中市",
    "name": "城固县",
    "id": "610722000000"
  }, {
    "city": "汉中市",
    "name": "洋县",
    "id": "610723000000"
  }, {
    "city": "汉中市",
    "name": "西乡县",
    "id": "610724000000"
  }, {
    "city": "汉中市",
    "name": "勉县",
    "id": "610725000000"
  }, {
    "city": "汉中市",
    "name": "宁强县",
    "id": "610726000000"
  }, {
    "city": "汉中市",
    "name": "略阳县",
    "id": "610727000000"
  }, {
    "city": "汉中市",
    "name": "镇巴县",
    "id": "610728000000"
  }, {
    "city": "汉中市",
    "name": "留坝县",
    "id": "610729000000"
  }, {
    "city": "汉中市",
    "name": "佛坪县",
    "id": "610730000000"
  }],
  "610800000000": [{
    "city": "榆林市",
    "name": "市辖区",
    "id": "610801000000"
  }, {
    "city": "榆林市",
    "name": "榆阳区",
    "id": "610802000000"
  }, {
    "city": "榆林市",
    "name": "横山区",
    "id": "610803000000"
  }, {
    "city": "榆林市",
    "name": "府谷县",
    "id": "610822000000"
  }, {
    "city": "榆林市",
    "name": "靖边县",
    "id": "610824000000"
  }, {
    "city": "榆林市",
    "name": "定边县",
    "id": "610825000000"
  }, {
    "city": "榆林市",
    "name": "绥德县",
    "id": "610826000000"
  }, {
    "city": "榆林市",
    "name": "米脂县",
    "id": "610827000000"
  }, {
    "city": "榆林市",
    "name": "佳县",
    "id": "610828000000"
  }, {
    "city": "榆林市",
    "name": "吴堡县",
    "id": "610829000000"
  }, {
    "city": "榆林市",
    "name": "清涧县",
    "id": "610830000000"
  }, {
    "city": "榆林市",
    "name": "子洲县",
    "id": "610831000000"
  }, {
    "city": "榆林市",
    "name": "神木市",
    "id": "610881000000"
  }],
  "610900000000": [{
    "city": "安康市",
    "name": "市辖区",
    "id": "610901000000"
  }, {
    "city": "安康市",
    "name": "汉滨区",
    "id": "610902000000"
  }, {
    "city": "安康市",
    "name": "汉阴县",
    "id": "610921000000"
  }, {
    "city": "安康市",
    "name": "石泉县",
    "id": "610922000000"
  }, {
    "city": "安康市",
    "name": "宁陕县",
    "id": "610923000000"
  }, {
    "city": "安康市",
    "name": "紫阳县",
    "id": "610924000000"
  }, {
    "city": "安康市",
    "name": "岚皋县",
    "id": "610925000000"
  }, {
    "city": "安康市",
    "name": "平利县",
    "id": "610926000000"
  }, {
    "city": "安康市",
    "name": "镇坪县",
    "id": "610927000000"
  }, {
    "city": "安康市",
    "name": "旬阳县",
    "id": "610928000000"
  }, {
    "city": "安康市",
    "name": "白河县",
    "id": "610929000000"
  }],
  "611000000000": [{
    "city": "商洛市",
    "name": "市辖区",
    "id": "611001000000"
  }, {
    "city": "商洛市",
    "name": "商州区",
    "id": "611002000000"
  }, {
    "city": "商洛市",
    "name": "洛南县",
    "id": "611021000000"
  }, {
    "city": "商洛市",
    "name": "丹凤县",
    "id": "611022000000"
  }, {
    "city": "商洛市",
    "name": "商南县",
    "id": "611023000000"
  }, {
    "city": "商洛市",
    "name": "山阳县",
    "id": "611024000000"
  }, {
    "city": "商洛市",
    "name": "镇安县",
    "id": "611025000000"
  }, {
    "city": "商洛市",
    "name": "柞水县",
    "id": "611026000000"
  }],
  "620100000000": [{
    "city": "兰州市",
    "name": "市辖区",
    "id": "620101000000"
  }, {
    "city": "兰州市",
    "name": "城关区",
    "id": "620102000000"
  }, {
    "city": "兰州市",
    "name": "七里河区",
    "id": "620103000000"
  }, {
    "city": "兰州市",
    "name": "西固区",
    "id": "620104000000"
  }, {
    "city": "兰州市",
    "name": "安宁区",
    "id": "620105000000"
  }, {
    "city": "兰州市",
    "name": "红古区",
    "id": "620111000000"
  }, {
    "city": "兰州市",
    "name": "永登县",
    "id": "620121000000"
  }, {
    "city": "兰州市",
    "name": "皋兰县",
    "id": "620122000000"
  }, {
    "city": "兰州市",
    "name": "榆中县",
    "id": "620123000000"
  }, {
    "city": "兰州市",
    "name": "兰州新区",
    "id": "620171000000"
  }],
  "620200000000": [{
    "city": "嘉峪关市",
    "name": "市辖区",
    "id": "620201000000"
  }],
  "620300000000": [{
    "city": "金昌市",
    "name": "市辖区",
    "id": "620301000000"
  }, {
    "city": "金昌市",
    "name": "金川区",
    "id": "620302000000"
  }, {
    "city": "金昌市",
    "name": "永昌县",
    "id": "620321000000"
  }],
  "620400000000": [{
    "city": "白银市",
    "name": "市辖区",
    "id": "620401000000"
  }, {
    "city": "白银市",
    "name": "白银区",
    "id": "620402000000"
  }, {
    "city": "白银市",
    "name": "平川区",
    "id": "620403000000"
  }, {
    "city": "白银市",
    "name": "靖远县",
    "id": "620421000000"
  }, {
    "city": "白银市",
    "name": "会宁县",
    "id": "620422000000"
  }, {
    "city": "白银市",
    "name": "景泰县",
    "id": "620423000000"
  }],
  "620500000000": [{
    "city": "天水市",
    "name": "市辖区",
    "id": "620501000000"
  }, {
    "city": "天水市",
    "name": "秦州区",
    "id": "620502000000"
  }, {
    "city": "天水市",
    "name": "麦积区",
    "id": "620503000000"
  }, {
    "city": "天水市",
    "name": "清水县",
    "id": "620521000000"
  }, {
    "city": "天水市",
    "name": "秦安县",
    "id": "620522000000"
  }, {
    "city": "天水市",
    "name": "甘谷县",
    "id": "620523000000"
  }, {
    "city": "天水市",
    "name": "武山县",
    "id": "620524000000"
  }, {
    "city": "天水市",
    "name": "张家川回族自治县",
    "id": "620525000000"
  }],
  "620600000000": [{
    "city": "武威市",
    "name": "市辖区",
    "id": "620601000000"
  }, {
    "city": "武威市",
    "name": "凉州区",
    "id": "620602000000"
  }, {
    "city": "武威市",
    "name": "民勤县",
    "id": "620621000000"
  }, {
    "city": "武威市",
    "name": "古浪县",
    "id": "620622000000"
  }, {
    "city": "武威市",
    "name": "天祝藏族自治县",
    "id": "620623000000"
  }],
  "620700000000": [{
    "city": "张掖市",
    "name": "市辖区",
    "id": "620701000000"
  }, {
    "city": "张掖市",
    "name": "甘州区",
    "id": "620702000000"
  }, {
    "city": "张掖市",
    "name": "肃南裕固族自治县",
    "id": "620721000000"
  }, {
    "city": "张掖市",
    "name": "民乐县",
    "id": "620722000000"
  }, {
    "city": "张掖市",
    "name": "临泽县",
    "id": "620723000000"
  }, {
    "city": "张掖市",
    "name": "高台县",
    "id": "620724000000"
  }, {
    "city": "张掖市",
    "name": "山丹县",
    "id": "620725000000"
  }],
  "620800000000": [{
    "city": "平凉市",
    "name": "市辖区",
    "id": "620801000000"
  }, {
    "city": "平凉市",
    "name": "崆峒区",
    "id": "620802000000"
  }, {
    "city": "平凉市",
    "name": "泾川县",
    "id": "620821000000"
  }, {
    "city": "平凉市",
    "name": "灵台县",
    "id": "620822000000"
  }, {
    "city": "平凉市",
    "name": "崇信县",
    "id": "620823000000"
  }, {
    "city": "平凉市",
    "name": "庄浪县",
    "id": "620825000000"
  }, {
    "city": "平凉市",
    "name": "静宁县",
    "id": "620826000000"
  }, {
    "city": "平凉市",
    "name": "华亭市",
    "id": "620881000000"
  }],
  "620900000000": [{
    "city": "酒泉市",
    "name": "市辖区",
    "id": "620901000000"
  }, {
    "city": "酒泉市",
    "name": "肃州区",
    "id": "620902000000"
  }, {
    "city": "酒泉市",
    "name": "金塔县",
    "id": "620921000000"
  }, {
    "city": "酒泉市",
    "name": "瓜州县",
    "id": "620922000000"
  }, {
    "city": "酒泉市",
    "name": "肃北蒙古族自治县",
    "id": "620923000000"
  }, {
    "city": "酒泉市",
    "name": "阿克塞哈萨克族自治县",
    "id": "620924000000"
  }, {
    "city": "酒泉市",
    "name": "玉门市",
    "id": "620981000000"
  }, {
    "city": "酒泉市",
    "name": "敦煌市",
    "id": "620982000000"
  }],
  "621000000000": [{
    "city": "庆阳市",
    "name": "市辖区",
    "id": "621001000000"
  }, {
    "city": "庆阳市",
    "name": "西峰区",
    "id": "621002000000"
  }, {
    "city": "庆阳市",
    "name": "庆城县",
    "id": "621021000000"
  }, {
    "city": "庆阳市",
    "name": "环县",
    "id": "621022000000"
  }, {
    "city": "庆阳市",
    "name": "华池县",
    "id": "621023000000"
  }, {
    "city": "庆阳市",
    "name": "合水县",
    "id": "621024000000"
  }, {
    "city": "庆阳市",
    "name": "正宁县",
    "id": "621025000000"
  }, {
    "city": "庆阳市",
    "name": "宁县",
    "id": "621026000000"
  }, {
    "city": "庆阳市",
    "name": "镇原县",
    "id": "621027000000"
  }],
  "621100000000": [{
    "city": "定西市",
    "name": "市辖区",
    "id": "621101000000"
  }, {
    "city": "定西市",
    "name": "安定区",
    "id": "621102000000"
  }, {
    "city": "定西市",
    "name": "通渭县",
    "id": "621121000000"
  }, {
    "city": "定西市",
    "name": "陇西县",
    "id": "621122000000"
  }, {
    "city": "定西市",
    "name": "渭源县",
    "id": "621123000000"
  }, {
    "city": "定西市",
    "name": "临洮县",
    "id": "621124000000"
  }, {
    "city": "定西市",
    "name": "漳县",
    "id": "621125000000"
  }, {
    "city": "定西市",
    "name": "岷县",
    "id": "621126000000"
  }],
  "621200000000": [{
    "city": "陇南市",
    "name": "市辖区",
    "id": "621201000000"
  }, {
    "city": "陇南市",
    "name": "武都区",
    "id": "621202000000"
  }, {
    "city": "陇南市",
    "name": "成县",
    "id": "621221000000"
  }, {
    "city": "陇南市",
    "name": "文县",
    "id": "621222000000"
  }, {
    "city": "陇南市",
    "name": "宕昌县",
    "id": "621223000000"
  }, {
    "city": "陇南市",
    "name": "康县",
    "id": "621224000000"
  }, {
    "city": "陇南市",
    "name": "西和县",
    "id": "621225000000"
  }, {
    "city": "陇南市",
    "name": "礼县",
    "id": "621226000000"
  }, {
    "city": "陇南市",
    "name": "徽县",
    "id": "621227000000"
  }, {
    "city": "陇南市",
    "name": "两当县",
    "id": "621228000000"
  }],
  "622900000000": [{
    "city": "临夏回族自治州",
    "name": "临夏市",
    "id": "622901000000"
  }, {
    "city": "临夏回族自治州",
    "name": "临夏县",
    "id": "622921000000"
  }, {
    "city": "临夏回族自治州",
    "name": "康乐县",
    "id": "622922000000"
  }, {
    "city": "临夏回族自治州",
    "name": "永靖县",
    "id": "622923000000"
  }, {
    "city": "临夏回族自治州",
    "name": "广河县",
    "id": "622924000000"
  }, {
    "city": "临夏回族自治州",
    "name": "和政县",
    "id": "622925000000"
  }, {
    "city": "临夏回族自治州",
    "name": "东乡族自治县",
    "id": "622926000000"
  }, {
    "city": "临夏回族自治州",
    "name": "积石山保安族东乡族撒拉族自治县",
    "id": "622927000000"
  }],
  "623000000000": [{
    "city": "甘南藏族自治州",
    "name": "合作市",
    "id": "623001000000"
  }, {
    "city": "甘南藏族自治州",
    "name": "临潭县",
    "id": "623021000000"
  }, {
    "city": "甘南藏族自治州",
    "name": "卓尼县",
    "id": "623022000000"
  }, {
    "city": "甘南藏族自治州",
    "name": "舟曲县",
    "id": "623023000000"
  }, {
    "city": "甘南藏族自治州",
    "name": "迭部县",
    "id": "623024000000"
  }, {
    "city": "甘南藏族自治州",
    "name": "玛曲县",
    "id": "623025000000"
  }, {
    "city": "甘南藏族自治州",
    "name": "碌曲县",
    "id": "623026000000"
  }, {
    "city": "甘南藏族自治州",
    "name": "夏河县",
    "id": "623027000000"
  }],
  "630100000000": [{
    "city": "西宁市",
    "name": "市辖区",
    "id": "630101000000"
  }, {
    "city": "西宁市",
    "name": "城东区",
    "id": "630102000000"
  }, {
    "city": "西宁市",
    "name": "城中区",
    "id": "630103000000"
  }, {
    "city": "西宁市",
    "name": "城西区",
    "id": "630104000000"
  }, {
    "city": "西宁市",
    "name": "城北区",
    "id": "630105000000"
  }, {
    "city": "西宁市",
    "name": "大通回族土族自治县",
    "id": "630121000000"
  }, {
    "city": "西宁市",
    "name": "湟中县",
    "id": "630122000000"
  }, {
    "city": "西宁市",
    "name": "湟源县",
    "id": "630123000000"
  }],
  "630200000000": [{
    "city": "海东市",
    "name": "乐都区",
    "id": "630202000000"
  }, {
    "city": "海东市",
    "name": "平安区",
    "id": "630203000000"
  }, {
    "city": "海东市",
    "name": "民和回族土族自治县",
    "id": "630222000000"
  }, {
    "city": "海东市",
    "name": "互助土族自治县",
    "id": "630223000000"
  }, {
    "city": "海东市",
    "name": "化隆回族自治县",
    "id": "630224000000"
  }, {
    "city": "海东市",
    "name": "循化撒拉族自治县",
    "id": "630225000000"
  }],
  "632200000000": [{
    "city": "海北藏族自治州",
    "name": "门源回族自治县",
    "id": "632221000000"
  }, {
    "city": "海北藏族自治州",
    "name": "祁连县",
    "id": "632222000000"
  }, {
    "city": "海北藏族自治州",
    "name": "海晏县",
    "id": "632223000000"
  }, {
    "city": "海北藏族自治州",
    "name": "刚察县",
    "id": "632224000000"
  }],
  "632300000000": [{
    "city": "黄南藏族自治州",
    "name": "同仁县",
    "id": "632321000000"
  }, {
    "city": "黄南藏族自治州",
    "name": "尖扎县",
    "id": "632322000000"
  }, {
    "city": "黄南藏族自治州",
    "name": "泽库县",
    "id": "632323000000"
  }, {
    "city": "黄南藏族自治州",
    "name": "河南蒙古族自治县",
    "id": "632324000000"
  }],
  "632500000000": [{
    "city": "海南藏族自治州",
    "name": "共和县",
    "id": "632521000000"
  }, {
    "city": "海南藏族自治州",
    "name": "同德县",
    "id": "632522000000"
  }, {
    "city": "海南藏族自治州",
    "name": "贵德县",
    "id": "632523000000"
  }, {
    "city": "海南藏族自治州",
    "name": "兴海县",
    "id": "632524000000"
  }, {
    "city": "海南藏族自治州",
    "name": "贵南县",
    "id": "632525000000"
  }],
  "632600000000": [{
    "city": "果洛藏族自治州",
    "name": "玛沁县",
    "id": "632621000000"
  }, {
    "city": "果洛藏族自治州",
    "name": "班玛县",
    "id": "632622000000"
  }, {
    "city": "果洛藏族自治州",
    "name": "甘德县",
    "id": "632623000000"
  }, {
    "city": "果洛藏族自治州",
    "name": "达日县",
    "id": "632624000000"
  }, {
    "city": "果洛藏族自治州",
    "name": "久治县",
    "id": "632625000000"
  }, {
    "city": "果洛藏族自治州",
    "name": "玛多县",
    "id": "632626000000"
  }],
  "632700000000": [{
    "city": "玉树藏族自治州",
    "name": "玉树市",
    "id": "632701000000"
  }, {
    "city": "玉树藏族自治州",
    "name": "杂多县",
    "id": "632722000000"
  }, {
    "city": "玉树藏族自治州",
    "name": "称多县",
    "id": "632723000000"
  }, {
    "city": "玉树藏族自治州",
    "name": "治多县",
    "id": "632724000000"
  }, {
    "city": "玉树藏族自治州",
    "name": "囊谦县",
    "id": "632725000000"
  }, {
    "city": "玉树藏族自治州",
    "name": "曲麻莱县",
    "id": "632726000000"
  }],
  "632800000000": [{
    "city": "海西蒙古族藏族自治州",
    "name": "格尔木市",
    "id": "632801000000"
  }, {
    "city": "海西蒙古族藏族自治州",
    "name": "德令哈市",
    "id": "632802000000"
  }, {
    "city": "海西蒙古族藏族自治州",
    "name": "茫崖市",
    "id": "632803000000"
  }, {
    "city": "海西蒙古族藏族自治州",
    "name": "乌兰县",
    "id": "632821000000"
  }, {
    "city": "海西蒙古族藏族自治州",
    "name": "都兰县",
    "id": "632822000000"
  }, {
    "city": "海西蒙古族藏族自治州",
    "name": "天峻县",
    "id": "632823000000"
  }, {
    "city": "海西蒙古族藏族自治州",
    "name": "大柴旦行政委员会",
    "id": "632857000000"
  }],
  "640100000000": [{
    "city": "银川市",
    "name": "市辖区",
    "id": "640101000000"
  }, {
    "city": "银川市",
    "name": "兴庆区",
    "id": "640104000000"
  }, {
    "city": "银川市",
    "name": "西夏区",
    "id": "640105000000"
  }, {
    "city": "银川市",
    "name": "金凤区",
    "id": "640106000000"
  }, {
    "city": "银川市",
    "name": "永宁县",
    "id": "640121000000"
  }, {
    "city": "银川市",
    "name": "贺兰县",
    "id": "640122000000"
  }, {
    "city": "银川市",
    "name": "灵武市",
    "id": "640181000000"
  }],
  "640200000000": [{
    "city": "石嘴山市",
    "name": "市辖区",
    "id": "640201000000"
  }, {
    "city": "石嘴山市",
    "name": "大武口区",
    "id": "640202000000"
  }, {
    "city": "石嘴山市",
    "name": "惠农区",
    "id": "640205000000"
  }, {
    "city": "石嘴山市",
    "name": "平罗县",
    "id": "640221000000"
  }],
  "640300000000": [{
    "city": "吴忠市",
    "name": "市辖区",
    "id": "640301000000"
  }, {
    "city": "吴忠市",
    "name": "利通区",
    "id": "640302000000"
  }, {
    "city": "吴忠市",
    "name": "红寺堡区",
    "id": "640303000000"
  }, {
    "city": "吴忠市",
    "name": "盐池县",
    "id": "640323000000"
  }, {
    "city": "吴忠市",
    "name": "同心县",
    "id": "640324000000"
  }, {
    "city": "吴忠市",
    "name": "青铜峡市",
    "id": "640381000000"
  }],
  "640400000000": [{
    "city": "固原市",
    "name": "市辖区",
    "id": "640401000000"
  }, {
    "city": "固原市",
    "name": "原州区",
    "id": "640402000000"
  }, {
    "city": "固原市",
    "name": "西吉县",
    "id": "640422000000"
  }, {
    "city": "固原市",
    "name": "隆德县",
    "id": "640423000000"
  }, {
    "city": "固原市",
    "name": "泾源县",
    "id": "640424000000"
  }, {
    "city": "固原市",
    "name": "彭阳县",
    "id": "640425000000"
  }],
  "640500000000": [{
    "city": "中卫市",
    "name": "市辖区",
    "id": "640501000000"
  }, {
    "city": "中卫市",
    "name": "沙坡头区",
    "id": "640502000000"
  }, {
    "city": "中卫市",
    "name": "中宁县",
    "id": "640521000000"
  }, {
    "city": "中卫市",
    "name": "海原县",
    "id": "640522000000"
  }],
  "650100000000": [{
    "city": "乌鲁木齐市",
    "name": "市辖区",
    "id": "650101000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "天山区",
    "id": "650102000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "沙依巴克区",
    "id": "650103000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "新市区",
    "id": "650104000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "水磨沟区",
    "id": "650105000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "头屯河区",
    "id": "650106000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "达坂城区",
    "id": "650107000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "米东区",
    "id": "650109000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "乌鲁木齐县",
    "id": "650121000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "乌鲁木齐经济技术开发区",
    "id": "650171000000"
  }, {
    "city": "乌鲁木齐市",
    "name": "乌鲁木齐高新技术产业开发区",
    "id": "650172000000"
  }],
  "650200000000": [{
    "city": "克拉玛依市",
    "name": "市辖区",
    "id": "650201000000"
  }, {
    "city": "克拉玛依市",
    "name": "独山子区",
    "id": "650202000000"
  }, {
    "city": "克拉玛依市",
    "name": "克拉玛依区",
    "id": "650203000000"
  }, {
    "city": "克拉玛依市",
    "name": "白碱滩区",
    "id": "650204000000"
  }, {
    "city": "克拉玛依市",
    "name": "乌尔禾区",
    "id": "650205000000"
  }],
  "650400000000": [{
    "city": "吐鲁番市",
    "name": "高昌区",
    "id": "650402000000"
  }, {
    "city": "吐鲁番市",
    "name": "鄯善县",
    "id": "650421000000"
  }, {
    "city": "吐鲁番市",
    "name": "托克逊县",
    "id": "650422000000"
  }],
  "650500000000": [{
    "city": "哈密市",
    "name": "伊州区",
    "id": "650502000000"
  }, {
    "city": "哈密市",
    "name": "巴里坤哈萨克自治县",
    "id": "650521000000"
  }, {
    "city": "哈密市",
    "name": "伊吾县",
    "id": "650522000000"
  }],
  "652300000000": [{
    "city": "昌吉回族自治州",
    "name": "昌吉市",
    "id": "652301000000"
  }, {
    "city": "昌吉回族自治州",
    "name": "阜康市",
    "id": "652302000000"
  }, {
    "city": "昌吉回族自治州",
    "name": "呼图壁县",
    "id": "652323000000"
  }, {
    "city": "昌吉回族自治州",
    "name": "玛纳斯县",
    "id": "652324000000"
  }, {
    "city": "昌吉回族自治州",
    "name": "奇台县",
    "id": "652325000000"
  }, {
    "city": "昌吉回族自治州",
    "name": "吉木萨尔县",
    "id": "652327000000"
  }, {
    "city": "昌吉回族自治州",
    "name": "木垒哈萨克自治县",
    "id": "652328000000"
  }],
  "652700000000": [{
    "city": "博尔塔拉蒙古自治州",
    "name": "博乐市",
    "id": "652701000000"
  }, {
    "city": "博尔塔拉蒙古自治州",
    "name": "阿拉山口市",
    "id": "652702000000"
  }, {
    "city": "博尔塔拉蒙古自治州",
    "name": "精河县",
    "id": "652722000000"
  }, {
    "city": "博尔塔拉蒙古自治州",
    "name": "温泉县",
    "id": "652723000000"
  }],
  "652800000000": [{
    "city": "巴音郭楞蒙古自治州",
    "name": "库尔勒市",
    "id": "652801000000"
  }, {
    "city": "巴音郭楞蒙古自治州",
    "name": "轮台县",
    "id": "652822000000"
  }, {
    "city": "巴音郭楞蒙古自治州",
    "name": "尉犁县",
    "id": "652823000000"
  }, {
    "city": "巴音郭楞蒙古自治州",
    "name": "若羌县",
    "id": "652824000000"
  }, {
    "city": "巴音郭楞蒙古自治州",
    "name": "且末县",
    "id": "652825000000"
  }, {
    "city": "巴音郭楞蒙古自治州",
    "name": "焉耆回族自治县",
    "id": "652826000000"
  }, {
    "city": "巴音郭楞蒙古自治州",
    "name": "和静县",
    "id": "652827000000"
  }, {
    "city": "巴音郭楞蒙古自治州",
    "name": "和硕县",
    "id": "652828000000"
  }, {
    "city": "巴音郭楞蒙古自治州",
    "name": "博湖县",
    "id": "652829000000"
  }, {
    "city": "巴音郭楞蒙古自治州",
    "name": "库尔勒经济技术开发区",
    "id": "652871000000"
  }],
  "652900000000": [{
    "city": "阿克苏地区",
    "name": "阿克苏市",
    "id": "652901000000"
  }, {
    "city": "阿克苏地区",
    "name": "温宿县",
    "id": "652922000000"
  }, {
    "city": "阿克苏地区",
    "name": "库车县",
    "id": "652923000000"
  }, {
    "city": "阿克苏地区",
    "name": "沙雅县",
    "id": "652924000000"
  }, {
    "city": "阿克苏地区",
    "name": "新和县",
    "id": "652925000000"
  }, {
    "city": "阿克苏地区",
    "name": "拜城县",
    "id": "652926000000"
  }, {
    "city": "阿克苏地区",
    "name": "乌什县",
    "id": "652927000000"
  }, {
    "city": "阿克苏地区",
    "name": "阿瓦提县",
    "id": "652928000000"
  }, {
    "city": "阿克苏地区",
    "name": "柯坪县",
    "id": "652929000000"
  }],
  "653000000000": [{
    "city": "克孜勒苏柯尔克孜自治州",
    "name": "阿图什市",
    "id": "653001000000"
  }, {
    "city": "克孜勒苏柯尔克孜自治州",
    "name": "阿克陶县",
    "id": "653022000000"
  }, {
    "city": "克孜勒苏柯尔克孜自治州",
    "name": "阿合奇县",
    "id": "653023000000"
  }, {
    "city": "克孜勒苏柯尔克孜自治州",
    "name": "乌恰县",
    "id": "653024000000"
  }],
  "653100000000": [{
    "city": "喀什地区",
    "name": "喀什市",
    "id": "653101000000"
  }, {
    "city": "喀什地区",
    "name": "疏附县",
    "id": "653121000000"
  }, {
    "city": "喀什地区",
    "name": "疏勒县",
    "id": "653122000000"
  }, {
    "city": "喀什地区",
    "name": "英吉沙县",
    "id": "653123000000"
  }, {
    "city": "喀什地区",
    "name": "泽普县",
    "id": "653124000000"
  }, {
    "city": "喀什地区",
    "name": "莎车县",
    "id": "653125000000"
  }, {
    "city": "喀什地区",
    "name": "叶城县",
    "id": "653126000000"
  }, {
    "city": "喀什地区",
    "name": "麦盖提县",
    "id": "653127000000"
  }, {
    "city": "喀什地区",
    "name": "岳普湖县",
    "id": "653128000000"
  }, {
    "city": "喀什地区",
    "name": "伽师县",
    "id": "653129000000"
  }, {
    "city": "喀什地区",
    "name": "巴楚县",
    "id": "653130000000"
  }, {
    "city": "喀什地区",
    "name": "塔什库尔干塔吉克自治县",
    "id": "653131000000"
  }],
  "653200000000": [{
    "city": "和田地区",
    "name": "和田市",
    "id": "653201000000"
  }, {
    "city": "和田地区",
    "name": "和田县",
    "id": "653221000000"
  }, {
    "city": "和田地区",
    "name": "墨玉县",
    "id": "653222000000"
  }, {
    "city": "和田地区",
    "name": "皮山县",
    "id": "653223000000"
  }, {
    "city": "和田地区",
    "name": "洛浦县",
    "id": "653224000000"
  }, {
    "city": "和田地区",
    "name": "策勒县",
    "id": "653225000000"
  }, {
    "city": "和田地区",
    "name": "于田县",
    "id": "653226000000"
  }, {
    "city": "和田地区",
    "name": "民丰县",
    "id": "653227000000"
  }],
  "654000000000": [{
    "city": "伊犁哈萨克自治州",
    "name": "伊宁市",
    "id": "654002000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "奎屯市",
    "id": "654003000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "霍尔果斯市",
    "id": "654004000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "伊宁县",
    "id": "654021000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "察布查尔锡伯自治县",
    "id": "654022000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "霍城县",
    "id": "654023000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "巩留县",
    "id": "654024000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "新源县",
    "id": "654025000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "昭苏县",
    "id": "654026000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "特克斯县",
    "id": "654027000000"
  }, {
    "city": "伊犁哈萨克自治州",
    "name": "尼勒克县",
    "id": "654028000000"
  }],
  "654200000000": [{
    "city": "塔城地区",
    "name": "塔城市",
    "id": "654201000000"
  }, {
    "city": "塔城地区",
    "name": "乌苏市",
    "id": "654202000000"
  }, {
    "city": "塔城地区",
    "name": "额敏县",
    "id": "654221000000"
  }, {
    "city": "塔城地区",
    "name": "沙湾县",
    "id": "654223000000"
  }, {
    "city": "塔城地区",
    "name": "托里县",
    "id": "654224000000"
  }, {
    "city": "塔城地区",
    "name": "裕民县",
    "id": "654225000000"
  }, {
    "city": "塔城地区",
    "name": "和布克赛尔蒙古自治县",
    "id": "654226000000"
  }],
  "654300000000": [{
    "city": "阿勒泰地区",
    "name": "阿勒泰市",
    "id": "654301000000"
  }, {
    "city": "阿勒泰地区",
    "name": "布尔津县",
    "id": "654321000000"
  }, {
    "city": "阿勒泰地区",
    "name": "富蕴县",
    "id": "654322000000"
  }, {
    "city": "阿勒泰地区",
    "name": "福海县",
    "id": "654323000000"
  }, {
    "city": "阿勒泰地区",
    "name": "哈巴河县",
    "id": "654324000000"
  }, {
    "city": "阿勒泰地区",
    "name": "青河县",
    "id": "654325000000"
  }, {
    "city": "阿勒泰地区",
    "name": "吉木乃县",
    "id": "654326000000"
  }],
  "659000000000": [{
    "city": "自治区直辖县级行政区划",
    "name": "石河子市",
    "id": "659001000000"
  }, {
    "city": "自治区直辖县级行政区划",
    "name": "阿拉尔市",
    "id": "659002000000"
  }, {
    "city": "自治区直辖县级行政区划",
    "name": "图木舒克市",
    "id": "659003000000"
  }, {
    "city": "自治区直辖县级行政区划",
    "name": "五家渠市",
    "id": "659004000000"
  }, {
    "city": "自治区直辖县级行政区划",
    "name": "铁门关市",
    "id": "659006000000"
  }]
};
// CONCATENATED MODULE: ./packages/tools/pcc/index.js
/*
 * @Date: 2020-07-29 15:45:09
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 16:07:21
 */




// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/PccLink/src/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// { province, city, county }

/* harmony default export */ var PccLink_srcvue_type_script_lang_js_ = ({
  name: 'h-pcc-link',
  props: {
    connectSymbol: {
      type: String,
      default: '-'
    },
    height: {
      type: String,
      default: '30px'
    },
    layout: {
      type: String,
      default: 'top'
    },
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    // label的对齐方式 left / right   默认left
    labelAlign: {
      type: String,
      default: 'left'
    },
    // 是否带必填标识  left / right 指定必选标识的位置
    required: {
      type: String,
      default: ''
    },
    // 隐藏未选项
    hideNotSelected: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      provinceVal: '',
      cityVal: '',
      countyVal: '',
      // 返回数据
      changeVal: {
        province: undefined,
        city: undefined,
        county: undefined
      }
    };
  },
  computed: {
    province: function province() {
      return province_province;
    },
    city: function city() {
      return city_city[this.provinceVal];
    },
    county: function county() {
      return county_county[this.cityVal];
    }
  },
  watch: {
    provinceVal: function provinceVal() {
      this.cityVal = '';
      this.countyVal = '';
    },
    cityVal: function cityVal() {
      this.countyVal = '';
    },
    changeVal: {
      handler: function handler() {
        this.$emit('change', this.changeVal);
      },
      deep: true
    }
  },
  methods: {
    handleProvinceVal: function handleProvinceVal() {
      var _this = this;

      this.changeVal.province = province_province.filter(function (res) {
        return res.id === _this.provinceVal;
      })[0];
    },
    handleCityVal: function handleCityVal() {
      var _this2 = this;

      this.changeVal.city = city_city[this.provinceVal].filter(function (res) {
        return res.id === _this2.cityVal;
      })[0];
    },
    handleCountyVal: function handleCountyVal() {
      var _this3 = this;

      this.changeVal.county = county_county[this.cityVal].filter(function (res) {
        return res.id === _this3.countyVal;
      })[0];
    }
  }
});
// CONCATENATED MODULE: ./packages/components/PccLink/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PccLink_srcvue_type_script_lang_js_ = (PccLink_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/PccLink/src/index.vue?vue&type=style&index=0&id=04af87fd&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_04af87fd_lang_scss_scoped_true_ = __webpack_require__("da75");

// CONCATENATED MODULE: ./packages/components/PccLink/src/index.vue






/* normalize component */

var PccLink_src_component = normalizeComponent(
  components_PccLink_srcvue_type_script_lang_js_,
  srcvue_type_template_id_04af87fd_scoped_true_render,
  srcvue_type_template_id_04af87fd_scoped_true_staticRenderFns,
  false,
  null,
  "04af87fd",
  null
  
)

/* harmony default export */ var PccLink_src = (PccLink_src_component.exports);
// CONCATENATED MODULE: ./packages/components/PccLink/index.js


/*
 * @Date: 2020-07-29 15:21:06
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 15:25:42
 */


PccLink_src.install = function (Vue) {
  Vue.component(PccLink_src.name, PccLink_src);
};

/* harmony default export */ var PccLink = (PccLink_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e0ff510a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Select/src/index.vue?vue&type=template&id=45b1c3dd&scoped=true&
var srcvue_type_template_id_45b1c3dd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h--select",style:({'height': _vm.height})},[_vm._t("default")],2)}
var srcvue_type_template_id_45b1c3dd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Select/src/index.vue?vue&type=template&id=45b1c3dd&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Select/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Select_srcvue_type_script_lang_js_ = ({
  name: 'h-select',
  props: {
    height: {
      type: String,
      default: '30px'
    }
  },
  mounted: function mounted() {
    document.getElementsByTagName('body')[0].setAttribute('h-select', 'style');
  }
});
// CONCATENATED MODULE: ./packages/components/Select/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Select_srcvue_type_script_lang_js_ = (Select_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/Select/src/index.vue?vue&type=style&index=0&lang=scss&
var Select_srcvue_type_style_index_0_lang_scss_ = __webpack_require__("64d1");

// EXTERNAL MODULE: ./packages/components/Select/src/index.vue?vue&type=style&index=1&id=45b1c3dd&lang=scss&scoped=true&
var srcvue_type_style_index_1_id_45b1c3dd_lang_scss_scoped_true_ = __webpack_require__("6e0e");

// CONCATENATED MODULE: ./packages/components/Select/src/index.vue







/* normalize component */

var Select_src_component = normalizeComponent(
  components_Select_srcvue_type_script_lang_js_,
  srcvue_type_template_id_45b1c3dd_scoped_true_render,
  srcvue_type_template_id_45b1c3dd_scoped_true_staticRenderFns,
  false,
  null,
  "45b1c3dd",
  null
  
)

/* harmony default export */ var Select_src = (Select_src_component.exports);
// CONCATENATED MODULE: ./packages/components/Select/index.js


/*
 * @Date: 2020-07-29 16:31:56
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 16:39:06
 */


Select_src.install = function (Vue) {
  Vue.component(Select_src.name, Select_src);
};

/* harmony default export */ var Select = (Select_src);
// CONCATENATED MODULE: ./packages/index.js




/*
 * @Author: chenzhanghui
 * @Date: 2020-07-01 14:45:46
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-29 16:39:36
 */







 // 组件列表

var components = [Button, Table, Pagination, Audio, Input, FormItem, PccLink, Select]; // 定义install 方法，接收 Vue 作为参数，如果使用 use 注册插件，那么所有组件都会被注册

var install = function install(Vue) {
  if (install.installed) return; // 遍历注册全局组件

  components.map(function (component) {
    return Vue.component(component.name, component);
  });
}; // 判断是否是直接引入文件


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = (_objectSpread2({
  install: install
}, components));
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fecf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=h-ui.common.js.map