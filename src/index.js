class mitt {
    
  constructor() {
    this.events = new Map()
  }
  // 触发事件
  on(type, listener) {
    this.events.has(type) ? this.events.get(type).push(listener) : this.events.set(type, [listener])
  }
  // 注册事件
  emit(type, ...args) {
    this.events.get(type)?.map(fun => fun(...args))
  }
  off(type, listener) {
    this.events.delete(type)
  }
  once() {

  }
  clear() {
    this.events.clear()
  }

}
export default mitt;
