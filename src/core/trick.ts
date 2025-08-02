'use strict';

import { IPrefDeckCard } from './card';
import { TPrefDesignation } from './player';

export type TPrefDeckTrickPlayerType = {
	designation: TPrefDesignation;
	card: IPrefDeckCard;
};

export interface IPrefDeckTrick {
	readonly p1: IPrefDeckCard | null;
	readonly p2: IPrefDeckCard | null;
	readonly p3: IPrefDeckCard | null;
	readonly winner: TPrefDesignation | null;
	readonly isComplete: boolean;
}

export type TPrefRoundDiscarded = {
	discard1: IPrefDeckCard;
	discard2: IPrefDeckCard;
};