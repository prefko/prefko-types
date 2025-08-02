'use strict';

import { TPrefDesignation } from '../core/player';

export interface IPrefScore {
	readonly designation: TPrefDesignation;
	readonly points: number;
	readonly gameNumber: number;
}

export interface IPrefGameScore {
	readonly gameNumber: number;
	readonly scores: Record<TPrefDesignation, number>;
	readonly winner?: TPrefDesignation;
}