'use strict';

import { TPrefDesignation, TPrefGameOptions } from './player';

export type TPrefEvent = {
	source: string;
	event: string;
	data?: any;
};

export type TPrefRoundStatusObject = {
	next: string;
};

export interface IPrefGame {
	readonly id: string;
	readonly players: Record<TPrefDesignation, string>;
	readonly options: TPrefGameOptions;
	readonly currentRound: number;
	readonly maxRounds: number;
	readonly status: 'waiting' | 'in-progress' | 'finished';
}

export interface IPrefRound {
	readonly roundNumber: number;
	readonly gameId: string;
	readonly dealer: TPrefDesignation;
	readonly status: TPrefRoundStatusObject;
}