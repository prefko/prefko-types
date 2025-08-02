'use strict';

import { TPrefDesignation } from '../core/player';

export interface IPrefRating {
	readonly designation: TPrefDesignation;
	readonly rating: number;
	readonly gamesPlayed: number;
	readonly lastUpdated: Date;
}

export interface IPrefRatingChange {
	readonly designation: TPrefDesignation;
	readonly oldRating: number;
	readonly newRating: number;
	readonly change: number;
	readonly gameNumber: number;
	readonly timestamp: Date;
}