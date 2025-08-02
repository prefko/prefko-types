'use strict';

export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepRequired<T> = {
	[P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

export type Result<T, E = Error> =
	| { success: true; data: T }
	| { success: false; error: E };

export type AsyncResult<T, E = Error> = Promise<Result<T, E>>;

export interface IEventEmitter<T = unknown> {
	on(event: string, listener: (data: T) => void): void;
	off(event: string, listener: (data: T) => void): void;
	emit(event: string, data: T): void;
}

export interface IDisposable {
	dispose(): void;
}

export interface IConfig {
	readonly [key: string]: unknown;
}

export interface ILogger {
	debug(message: string, ...args: unknown[]): void;
	info(message: string, ...args: unknown[]): void;
	warn(message: string, ...args: unknown[]): void;
	error(message: string, error?: Error): void;
}

export interface IValidationResult {
	readonly isValid: boolean;
	readonly errors: readonly string[];
}

export type Validator<T> = (value: T) => IValidationResult;

export type Factory<T, TArgs extends readonly unknown[] = readonly []> = (
	...args: TArgs
) => T;

export type Predicate<T> = (value: T) => boolean;

export type Mapper<TIn, TOut> = (input: TIn) => TOut;

export type Reducer<T, TAcc> = (accumulator: TAcc, current: T) => TAcc;

export type Timestamp = number;

export type UUID = string;

export type ReadonlyArray<T> = readonly T[];

export type ReadonlyRecord<K extends string | number | symbol, V> = Readonly<
	Record<K, V>
>;