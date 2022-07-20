// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3Uc9L":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "671e1004ff9404b7";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["3Uc9L"], null, "parcelRequire6919")
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define([
        'exports'
    ], factory) : factory(global.WHATWGFetch = {
    });
})(this, function(exports) {
    'use strict';
    var support = {
        searchParams: 'URLSearchParams' in self,
        iterable: 'Symbol' in self && 'iterator' in Symbol,
        blob: 'FileReader' in self && 'Blob' in self && function() {
            try {
                new Blob();
                return true;
            } catch (e) {
                return false;
            }
        }(),
        formData: 'FormData' in self,
        arrayBuffer: 'ArrayBuffer' in self
    };
    function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
    }
    if (support.arrayBuffer) {
        var viewClasses = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]'
        ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
    }
    function normalizeName(name) {
        if (typeof name !== 'string') name = String(name);
        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) throw new TypeError('Invalid character in header field name');
        return name.toLowerCase();
    }
    function normalizeValue(value) {
        if (typeof value !== 'string') value = String(value);
        return value;
    }
    // Build a destructive iterator for the value list
    function iteratorFor(items) {
        var iterator = {
            next: function() {
                var value = items.shift();
                return {
                    done: value === undefined,
                    value: value
                };
            }
        };
        if (support.iterable) iterator[Symbol.iterator] = function() {
            return iterator;
        };
        return iterator;
    }
    function Headers1(headers) {
        this.map = {
        };
        if (headers instanceof Headers1) headers.forEach(function(value, name) {
            this.append(name, value);
        }, this);
        else if (Array.isArray(headers)) headers.forEach(function(header) {
            this.append(header[0], header[1]);
        }, this);
        else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
        }, this);
    }
    Headers1.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ', ' + value : value;
    };
    Headers1.prototype['delete'] = function(name) {
        delete this.map[normalizeName(name)];
    };
    Headers1.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
    };
    Headers1.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
    };
    Headers1.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
    };
    Headers1.prototype.forEach = function(callback, thisArg) {
        for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
    };
    Headers1.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
            items.push(name);
        });
        return iteratorFor(items);
    };
    Headers1.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
            items.push(value);
        });
        return iteratorFor(items);
    };
    Headers1.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
            items.push([
                name,
                value
            ]);
        });
        return iteratorFor(items);
    };
    if (support.iterable) Headers1.prototype[Symbol.iterator] = Headers1.prototype.entries;
    function consumed(body) {
        if (body.bodyUsed) return Promise.reject(new TypeError('Already read'));
        body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
            reader.onload = function() {
                resolve(reader.result);
            };
            reader.onerror = function() {
                reject(reader.error);
            };
        });
    }
    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
    }
    function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
    }
    function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for(var i = 0; i < view.length; i++)chars[i] = String.fromCharCode(view[i]);
        return chars.join('');
    }
    function bufferClone(buf) {
        if (buf.slice) return buf.slice(0);
        else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
        }
    }
    function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
            this._bodyInit = body;
            if (!body) this._bodyText = '';
            else if (typeof body === 'string') this._bodyText = body;
            else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
            else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
            else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
            else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                // IE 10-11 can't handle a DataView body.
                this._bodyInit = new Blob([
                    this._bodyArrayBuffer
                ]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
            else this._bodyText = body = Object.prototype.toString.call(body);
            if (!this.headers.get('content-type')) {
                if (typeof body === 'string') this.headers.set('content-type', 'text/plain;charset=UTF-8');
                else if (this._bodyBlob && this._bodyBlob.type) this.headers.set('content-type', this._bodyBlob.type);
                else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
        };
        if (support.blob) {
            this.blob = function() {
                var rejected = consumed(this);
                if (rejected) return rejected;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                    this._bodyArrayBuffer
                ]));
                else if (this._bodyFormData) throw new Error('could not read FormData body as blob');
                else return Promise.resolve(new Blob([
                    this._bodyText
                ]));
            };
            this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                else return this.blob().then(readBlobAsArrayBuffer);
            };
        }
        this.text = function() {
            var rejected = consumed(this);
            if (rejected) return rejected;
            if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
            else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            else if (this._bodyFormData) throw new Error('could not read FormData body as text');
            else return Promise.resolve(this._bodyText);
        };
        if (support.formData) this.formData = function() {
            return this.text().then(decode);
        };
        this.json = function() {
            return this.text().then(JSON.parse);
        };
        return this;
    }
    // HTTP methods whose capitalization should be normalized
    var methods = [
        'DELETE',
        'GET',
        'HEAD',
        'OPTIONS',
        'POST',
        'PUT'
    ];
    function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
    }
    function Request1(input, options) {
        options = options || {
        };
        var body = options.body;
        if (input instanceof Request1) {
            if (input.bodyUsed) throw new TypeError('Already read');
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) this.headers = new Headers1(input.headers);
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
            }
        } else this.url = String(input);
        this.credentials = options.credentials || this.credentials || 'same-origin';
        if (options.headers || !this.headers) this.headers = new Headers1(options.headers);
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === 'GET' || this.method === 'HEAD') && body) throw new TypeError('Body not allowed for GET or HEAD requests');
        this._initBody(body);
    }
    Request1.prototype.clone = function() {
        return new Request1(this, {
            body: this._bodyInit
        });
    };
    function decode(body) {
        var form = new FormData();
        body.trim().split('&').forEach(function(bytes) {
            if (bytes) {
                var split = bytes.split('=');
                var name = split.shift().replace(/\+/g, ' ');
                var value = split.join('=').replace(/\+/g, ' ');
                form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
        });
        return form;
    }
    function parseHeaders(rawHeaders) {
        var headers = new Headers1();
        // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
        // https://tools.ietf.org/html/rfc7230#section-3.2
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
        preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(':');
            var key = parts.shift().trim();
            if (key) {
                var value = parts.join(':').trim();
                headers.append(key, value);
            }
        });
        return headers;
    }
    Body.call(Request1.prototype);
    function Response1(bodyInit, options) {
        if (!options) options = {
        };
        this.type = 'default';
        this.status = options.status === undefined ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = 'statusText' in options ? options.statusText : 'OK';
        this.headers = new Headers1(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit);
    }
    Body.call(Response1.prototype);
    Response1.prototype.clone = function() {
        return new Response1(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers1(this.headers),
            url: this.url
        });
    };
    Response1.error = function() {
        var response = new Response1(null, {
            status: 0,
            statusText: ''
        });
        response.type = 'error';
        return response;
    };
    var redirectStatuses = [
        301,
        302,
        303,
        307,
        308
    ];
    Response1.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) throw new RangeError('Invalid status code');
        return new Response1(null, {
            status: status,
            headers: {
                location: url
            }
        });
    };
    exports.DOMException = self.DOMException;
    try {
        new exports.DOMException();
    } catch (err) {
        exports.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
        };
        exports.DOMException.prototype = Object.create(Error.prototype);
        exports.DOMException.prototype.constructor = exports.DOMException;
    }
    function fetch(input, init) {
        return new Promise(function(resolve, reject) {
            var request = new Request1(input, init);
            if (request.signal && request.signal.aborted) return reject(new exports.DOMException('Aborted', 'AbortError'));
            var xhr = new XMLHttpRequest();
            function abortXhr() {
                xhr.abort();
            }
            xhr.onload = function() {
                var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || '')
                };
                options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                var body = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(new Response1(body, options));
            };
            xhr.onerror = function() {
                reject(new TypeError('Network request failed'));
            };
            xhr.ontimeout = function() {
                reject(new TypeError('Network request failed'));
            };
            xhr.onabort = function() {
                reject(new exports.DOMException('Aborted', 'AbortError'));
            };
            xhr.open(request.method, request.url, true);
            if (request.credentials === 'include') xhr.withCredentials = true;
            else if (request.credentials === 'omit') xhr.withCredentials = false;
            if ('responseType' in xhr && support.blob) xhr.responseType = 'blob';
            request.headers.forEach(function(value, name) {
                xhr.setRequestHeader(name, value);
            });
            if (request.signal) {
                request.signal.addEventListener('abort', abortXhr);
                xhr.onreadystatechange = function() {
                    // DONE (success or failure)
                    if (xhr.readyState === 4) request.signal.removeEventListener('abort', abortXhr);
                };
            }
            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
        });
    }
    fetch.polyfill = true;
    if (!self.fetch) {
        self.fetch = fetch;
        self.Headers = Headers1;
        self.Request = Request1;
        self.Response = Response1;
    }
    exports.Headers = Headers1;
    exports.Request = Request1;
    exports.Response = Response1;
    exports.fetch = fetch;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

//# sourceMappingURL=index.ff9404b7.js.map
