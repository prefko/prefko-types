'use strict';

export enum PrefDeckSuit {
	SPADE = 'Spade',
	DIAMOND = 'Diamond',
	HEART = 'Heart',
	CLUB = 'Club',
}

export enum PrefDeckValue {
	SEVEN = 7,
	EIGHT = 8,
	NINE = 9,
	TEN = 10,
	JACK = 12,
	QUEEN = 13,
	KING = 14,
	ACE = 15,
}

export enum PrefDeckTrump {
	NONE = '',
	SPADE = 'Spade',
	DIAMOND = 'Diamond',
	HEART = 'Heart',
	CLUB = 'Club',
}

export interface IPrefDeckCard {
	readonly suit: PrefDeckSuit;
	readonly value: PrefDeckValue;
	readonly label: string;
	readonly unicode: string;
	readonly ppn: string;
}

export type PrefDeckPile = readonly IPrefDeckCard[];

export type PrefDeckDealType = {
	hand1: PrefDeckPile;
	hand2: PrefDeckPile;
	hand3: PrefDeckPile;
	talon: readonly [IPrefDeckCard, IPrefDeckCard];
};