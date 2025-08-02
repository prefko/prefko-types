'use strict';

import { TPrefDesignation } from '../core/player';
import { IPrefDeckCard } from '../core/card';
import { EPrefBid } from '../core/bid';
import { IPrefGame } from '../core/game';

export enum EPrefEnginePhase {
	DEAL = 'deal',
	BID = 'bid',
	PLAY = 'play',
	COMPLETE = 'complete',
}

export interface IPrefEngineCommand {
	readonly type: string;
	readonly designation: TPrefDesignation;
	readonly data: unknown;
}

export interface IPrefEngineEvent {
	readonly type: string;
	readonly gameId: string;
	readonly data: unknown;
}

export interface IPrefGameEngine {
	readonly gameId: string;
	readonly currentPhase: EPrefEnginePhase;
	readonly game: IPrefGame;
	readonly activePlayer: TPrefDesignation | null;
}