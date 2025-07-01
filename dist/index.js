(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mitt = factory());
})(this, (function () { 'use strict';

  class mitt {
    constructor() {
      this.events = new Map();
    }
    on(type, listener) {
      this.events.has(type)
        ? this.events.get(type).push(listener)
        : this.events.set(type, [listener]);
    }
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
    once(type, listener) {
      const wrapped = (...args) => {
        listener(...args);
        this.off(type, wrapped);
      };
      this.on(type, wrapped);
    }
    clear() {
      this.events.clear();
    }
  }

  return mitt;

}));
