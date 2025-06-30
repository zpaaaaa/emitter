(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mitt = factory());
})(this, (function () { 'use strict';

  class mitt {
      
    constructor() {
      this.events = new Map();
    }
    // 触发事件
    on(type, listener) {
      this.events.has(type) ? this.events.get(type).push(listener) : this.events.set(type, [listener]);
    }
    // 注册事件
    emit(type, ...args) {
      this.events.get(type)?.map(fun => fun(...args));
    }
    off(type, listener) {
      this.events.delete(type);
    }
    once() {

    }
    clear() {
      this.events.clear();
    }

  }

  return mitt;

}));
