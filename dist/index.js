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
      this.events.has(type)
        ? this.events.get(type).push(listener)
        : this.events.set(type, [listener]);
    }
    // 注册事件   这可以触发当前订阅的所有事件 支持传递数组进行批量订阅
    emit(type, ...args) {
      if (typeof type === "string" && type === "*") {
        const allHandlers = [...this.events.values()];
        console.log(allHandlers);
        allHandlers.forEach((handler) => {
          handler.map((fun) => fun(...args));
        });
        return;
      }
      if (Array.isArray(type)) {
        type.forEach((item) => {
          this.events.get(item)?.map((fun) => fun(...args));
        });
        return;
      }
      let handlers = this.events.get(type);
      if (handlers) {
        this.events.get(type)?.map((fun) => fun(...args));
      }
    }
    off(type, listener) {
      const index = this.events.get(type).indexOf(listener);
      if (index > -1) {
        this.events.get(type).splice(index, 1);
      }
      if (this.events.get(type).length === 0) {
        this.events.delete(type);
      }
    }
    once() {
      throw new Error("Method not implemented.");
    }
    clear() {
      this.events.clear();
    }
  }

  return mitt;

}));
