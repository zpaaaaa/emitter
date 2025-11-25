// src/index.d.ts
type EventType = string | symbol;

type Handler<T = unknown> = (event?: T) => void;
type WildcardHandler<T = Record<string, unknown>> = (
  type: keyof T,
  event?: T[keyof T]
) => void;

interface EmitterEvents {
  '*': WildcardHandler;
  [key: string]: Handler | WildcardHandler;
}

declare class mitt {
  events: Map<EventType, Handler[]>;
  
  constructor();
  
  on<K extends keyof EmitterEvents>(type: K, handler: EmitterEvents[K]): void;
  on(type: '*', handler: WildcardHandler): void;
  on<T = unknown>(type: EventType, handler: Handler<T>): void;
  
  off<K extends keyof EmitterEvents>(type: K, handler: EmitterEvents[K]): void;
  off(type: '*', handler: WildcardHandler): void;
  off<T = unknown>(type: EventType, handler: Handler<T>): void;
  
  emit<K extends keyof EmitterEvents>(type: K, event?: Parameters<EmitterEvents[K]>[0]): void;
  emit<T = unknown>(type: EventType, event?: T): void;
  
  once<K extends keyof EmitterEvents>(type: K, handler: EmitterEvents[K]): void;
  once<T = unknown>(type: EventType, handler: Handler<T>): void;
  
  clear(): void;
}

export default mitt;