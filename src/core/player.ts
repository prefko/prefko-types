'use strict';

export type TPrefDesignation = 'p1' | 'p2' | 'p3';

export enum EPrefPlayerDealRole {
	NONE = 0,
	DEALER,
	FIRST_BIDDER,
	SECOND_BIDDER,
}

export enum EPrefPlayerPlayRole {
	NONE = 0,
	MAIN,
	RIGHT_FOLLOWER,
	LEFT_FOLLOWER,
}

export interface IPrefPlayer {
	readonly designation: TPrefDesignation;
	readonly name?: string;
	readonly dealRole: EPrefPlayerDealRole;
	readonly playRole: EPrefPlayerPlayRole;
}

export type TPrefGameOptions = {
	unlimitedRefe: boolean;
	playPikOnRefa: boolean;
	lastHandDoubleFall: boolean;
	lastHandLimitSoup: boolean;
	failPikAfterRefas: boolean;
	failPikAfterOneUnderZero: boolean;
	automaticBetlNoFailEnd: boolean;
	allowSubAndMortKontras: boolean;
};