/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./work/src/index.js":
/*!***************************!*\
  !*** ./work/src/index.js ***!
  \***************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nvar _document$querySelect3, _document$querySelect4;\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nwindow.idFormater = function (value, row) {\n  return value;\n};\nwindow.customerFormater = function (value, row) {\n  return value;\n};\nwindow.nameFormater = function (value, row) {\n  return \"<div style=\\\"white-space: nowrap; overflow: hidden; max-width: 8vw; text-overflow: ellipsis;\\\" title=\\\"\".concat(value, \"\\\">\").concat(value, \"</div>\");\n};\nwindow.descriptionFormater = function (value, row) {\n  return \"<div style=\\\"white-space: nowrap; overflow: hidden; max-width: 12vw; text-overflow: ellipsis;\\\" title=\\\"\".concat(value, \"\\\">\").concat(value, \"</div>\");\n};\nwindow.paymentFormater = function (value, row) {\n  return \"<div>\\n        <div>Precio: <span>\".concat(row.price, \"</span></div>\\n        <div>Adelanto: <span>\").concat(row.payment, \"</span></div>\\n    </div>\");\n};\nwindow.deadlineFormater = function (value, row) {\n  var dat = value.split(\"T\");\n  var ham = dat[1].split(\":\");\n  return \"<div>\\n        <div>D\\xEDa: <span>\".concat(dat[0], \"</span></div>\\n        <div>Hora: <span>\").concat(ham[0], \":\").concat(ham[1], \"</span></div>\\n    </div>\");\n};\nwindow.deliveryDateFormater = function (value, row) {\n  if (value) {\n    var dat = value.split(\"T\");\n    var ham = dat[1].split(\":\");\n    return \"<div>\\n            <div>D\\xEDa: <span>\".concat(dat[0], \"</span></div>\\n            <div>Hora: <span>\").concat(ham[0], \":\").concat(ham[1], \"</span></div>\\n        </div>\");\n  } else {\n    return \"<div>En proceso...</div>\";\n  }\n};\nwindow.phaseFormater = function (value, row) {\n  var workPhase = row.phases.find(function (item) {\n    return item.phase.sequence == row.current_phase;\n  });\n  var icon = \"\";\n  switch (workPhase.status) {\n    case 1:\n      icon = \"<span title=\\\"Pendiente\\\" style=\\\"font-size: 1rem; color: firebrick; font-weight: 600;\\\" class=\\\"material-symbols-outlined\\\">hourglass_empty</span>\";\n      break;\n    case 2:\n      icon = \"<span title=\\\"Iniciado\\\" style=\\\"font-weight: 600; color: deepskyblue;\\\" class=\\\"material-symbols-outlined\\\">done</span>\";\n      break;\n    case 3:\n      icon = \"<span title=\\\"Terminado\\\" style=\\\"color: green;\\\" class=\\\"material-symbols-outlined\\\">done_all</span>\";\n      break;\n    default:\n      break;\n  }\n  return \"<div>\\n    <div>\".concat(row.current_phase, \" de \").concat(row.total_phase, \"</div>\\n    <div style=\\\"display: flex; align-items: center; justify-content: space-around;\\\"><span title=\\\"\").concat(workPhase.employee.name, \"\\\" style=\\\"font-weight: 600;\\\">\").concat(workPhase.phase.name, \"</span> \").concat(icon, \"</div>\\n    </div>\");\n};\nwindow.creationDateFormater = function (value, row) {\n  var dat = value.split(\"T\");\n  var ham = dat[1].split(\":\");\n  return \"<div>\\n        <div>D\\xEDa: <span>\".concat(dat[0], \"</span></div>\\n        <div>Hora: <span>\").concat(ham[0], \":\").concat(ham[1], \"</span></div>\\n    </div>\");\n};\nwindow.optionsDateFormater = function (value, row) {\n  var settings = \"<div title=\\\"Editar\\\" class=\\\"btn-edit\\\" style=\\\"display:inline-flex;align-items:center;\\\"><span class=\\\"material-icons btn-settings\\\">settings</span></div>\";\n  var report = \"<div title=\\\"Ver proforma\\\" class=\\\"btn-proforma\\\" style=\\\"display:inline-flex;align-items:center;\\\"><span class=\\\"material-icons btn-settings\\\" style=\\\"color: cornflowerblue;\\\">article</span></div>\";\n  var container = \"<div style=\\\"display:flex;justify-content:space-around;align-items:center\\\">\".concat(settings + report, \"</div>\");\n  return container;\n};\nwindow.tableCustomerEvents = {\n  \"click .btn-edit\": function clickBtnEdit(e, value, row, index) {\n    return showEditModal(row);\n  },\n  \"click .btn-proforma\": function clickBtnProforma(e, value, row, index) {\n    window.open(\"/work/proforma/\".concat(row.id, \"/\"), \"_blank\");\n  }\n  // \"click .btn-add\": (e, value, row, index) => showEditModal(row),\n};\n\nvar showNewModal = function showNewModal(data) {\n  // document.querySelector(\"#customer_name\").value = data.id;\n  document.querySelector(\"#work_customer\").value = data.name;\n  // document.querySelector(\"#customer_edit_dni\").value = data.dni;\n  // document.querySelector(\"#customer_edit_ruc\").value = data.ruc;\n  // document.querySelector(\"#customer_edit_phone\").value = data.phone;\n  // document.querySelector(\"#customer_edit_address\").value = data.address;\n  // document.querySelector(\"#customer_edit_email\").value = data.email;\n\n  var myModal = new bootstrap.Modal(\"#add-work-modal\", {\n    keyboard: false\n  });\n  myModal.show();\n};\nvar showEditModal = function showEditModal(data) {\n  document.querySelector(\"#work_id_edit\").value = data.id;\n  document.querySelector(\"#work_customer_edit\").value = data.customer.name;\n  document.querySelector(\"#work_name_edit\").value = data.name;\n  document.querySelector(\"#work_description_edit\").value = data.description;\n  document.querySelector(\"#work_date_edit\").value = data.deadline.slice(0, 16);\n  document.querySelector(\"#work_price_edit\").value = data.price;\n  document.querySelector(\"#work_payment_edit\").value = data.payment;\n  var $container = document.querySelector(\"#phases_edit_container\");\n  var $employees = document.querySelector(\"#all_employees\").innerHTML;\n  var content = \"\";\n  var _iterator = _createForOfIteratorHelper(data.phases),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var phase = _step.value;\n      content += \"<div class=\\\"mb-3\\\">\\n            <label style=\\\"font-weight: 600;\\\" for=\\\"work_phase_edit\".concat(phase.id, \"\\\" class=\\\"form-label\\\">Responsable de \").concat(phase.phase.name, \"</label>\\n            <input type=\\\"hidden\\\" class=\\\"form-control work_phase_id\\\" value=\\\"\").concat(phase.id, \"\\\">\\n            <select id=\\\"work_phase_edit\").concat(phase.id, \"\\\" class=\\\"form-select form-select-sm\\\" aria-label=\\\".form-select-sm example\\\">\\n                \").concat($employees, \"\\n            </select>\\n        </div>\");\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  $container.innerHTML = content;\n  var _iterator2 = _createForOfIteratorHelper(data.phases),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var _phase = _step2.value;\n      document.querySelector(\"#work_phase_edit\".concat(_phase.id)).value = \"\".concat(_phase.employee.id);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n  var myModal = new bootstrap.Modal(\"#edit-work-modal\", {\n    keyboard: false\n  });\n  myModal.show();\n};\ndocument.querySelector(\"#add-work-modal .btn-primary\").addEventListener(\"click\", /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {\n    var data, customerId, name, description, date, price, payment, i, _document$querySelect, _document$querySelect2, phase, response, work, text;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          data = {};\n          customerId = document.querySelector(\"#customerId\").value;\n          name = document.querySelector(\"#work_name\").value;\n          description = document.querySelector(\"#work_description\").value;\n          date = document.querySelector(\"#work_date\").value;\n          price = +document.querySelector(\"#work_price\").value;\n          payment = +document.querySelector(\"#work_payment\").value;\n          data.customerId = customerId;\n          data.name = name;\n          data.description = description;\n          data.date = date;\n          data.price = price;\n          data.payment = payment;\n          i = 1;\n        case 14:\n          if (false) {}\n          phase = (_document$querySelect = document.querySelector(\"#work_phase\".concat(i))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;\n          if (phase) {\n            _context.next = 18;\n            break;\n          }\n          return _context.abrupt(\"break\", 23);\n        case 18:\n          data[\"phase\".concat(i)] = phase;\n          data[\"phase\".concat(i, \"_id\")] = (_document$querySelect2 = document.querySelector(\"#work_phase\".concat(i, \"_id\"))) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value;\n          i++;\n          _context.next = 14;\n          break;\n        case 23:\n          data[\"phase_amount\"] = i - 1;\n          console.log(data);\n          _context.prev = 25;\n          _context.next = 28;\n          return fetch(\"/api/work/\", {\n            method: \"POST\",\n            headers: {\n              \"Content-Type\": \"application/json\",\n              \"X-CSRFToken\": document.querySelector(\"[name=csrfmiddlewaretoken]\").value\n            },\n            body: JSON.stringify(data)\n          });\n        case 28:\n          response = _context.sent;\n          if (response.ok) {\n            _context.next = 31;\n            break;\n          }\n          throw response;\n        case 31:\n          _context.next = 33;\n          return response.json();\n        case 33:\n          work = _context.sent;\n          console.log(work);\n          $(\"#work_table\").bootstrapTable(\"refresh\");\n          // alert(\"El nuevo cliente se guardó con exito!\");\n          _context.next = 45;\n          break;\n        case 38:\n          _context.prev = 38;\n          _context.t0 = _context[\"catch\"](25);\n          _context.next = 42;\n          return _context.t0.text();\n        case 42:\n          text = _context.sent;\n          console.log(text);\n          alert(\"El nuevo pedido no se pudo guardar. :(\");\n        case 45:\n          $(\"#add-work-modal\").modal(\"hide\");\n        case 46:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[25, 38]]);\n  }));\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\ndocument.querySelector(\"#edit-work-modal .btn-primary\").addEventListener(\"click\", /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {\n    var data, id, name, description, date, price, payment, phases, _iterator3, _step3, child, workPhaseId, workPhaseEmployeeId, response, work, text;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          data = {};\n          id = +document.querySelector(\"#work_id_edit\").value;\n          name = document.querySelector(\"#work_name_edit\").value;\n          description = document.querySelector(\"#work_description_edit\").value;\n          date = document.querySelector(\"#work_date_edit\").value;\n          price = +document.querySelector(\"#work_price_edit\").value;\n          payment = +document.querySelector(\"#work_payment_edit\").value;\n          data.id = id;\n          data.name = name;\n          data.description = description;\n          data.deadline = date;\n          data.price = price;\n          data.payment = payment;\n          phases = [];\n          _iterator3 = _createForOfIteratorHelper(document.querySelector(\"#phases_edit_container\").children);\n          try {\n            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n              child = _step3.value;\n              workPhaseId = +child.querySelector(\".work_phase_id\").value;\n              workPhaseEmployeeId = +child.querySelector(\"select\").value;\n              phases.push({\n                id: workPhaseId,\n                employee: workPhaseEmployeeId\n              });\n            }\n          } catch (err) {\n            _iterator3.e(err);\n          } finally {\n            _iterator3.f();\n          }\n          data.workPhases = phases;\n          console.log(data);\n          _context2.prev = 18;\n          _context2.next = 21;\n          return fetch(\"/api/work/\".concat(id, \"/\"), {\n            method: \"PUT\",\n            headers: {\n              \"Content-Type\": \"application/json\",\n              \"X-CSRFToken\": document.querySelector(\"[name=csrfmiddlewaretoken]\").value\n            },\n            body: JSON.stringify(data)\n          });\n        case 21:\n          response = _context2.sent;\n          if (response.ok) {\n            _context2.next = 24;\n            break;\n          }\n          throw response;\n        case 24:\n          _context2.next = 26;\n          return response.json();\n        case 26:\n          work = _context2.sent;\n          console.log(work);\n          $(\"#work_table\").bootstrapTable(\"refresh\");\n          _context2.next = 38;\n          break;\n        case 31:\n          _context2.prev = 31;\n          _context2.t0 = _context2[\"catch\"](18);\n          _context2.next = 35;\n          return _context2.t0.text();\n        case 35:\n          text = _context2.sent;\n          console.log(text);\n          alert(\"El pedido no se pudo actualizar. :(\");\n        case 38:\n          $(\"#edit-work-modal\").modal(\"hide\");\n        case 39:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2, null, [[18, 31]]);\n  }));\n  return function (_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nvar customerID = (_document$querySelect3 = document.querySelector(\"#customerId\")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value;\nvar customerName = (_document$querySelect4 = document.querySelector(\"#customerName\")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.value;\nif (customerID) {\n  showNewModal({\n    id: customerID,\n    name: customerName\n  });\n}\n\n//# sourceURL=webpack://app/./work/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./work/src/index.js"]();
/******/ 	
/******/ })()
;