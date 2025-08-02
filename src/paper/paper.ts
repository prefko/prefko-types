'use strict';

import { TPrefDesignation } from '../core/player';

export enum PrefPaperPosition {
	LEFT = 'left',
	MIDDLE = 'middle',
	RIGHT = 'right',
}

export interface IPrefPaperEntry {
	readonly isNumber: boolean;
	readonly isRefa: boolean;
	readonly isHat: boolean;
	readonly json: any;
}

export interface IPrefPaperEntryNumber extends IPrefPaperEntry {
	readonly isNumber: true;
	readonly value: number;
	readonly repealed: boolean;
}

export interface IPrefPaperEntryRefa extends IPrefPaperEntry {
	readonly isRefa: true;
	readonly points: number;
}

export interface IPrefPaperEntryHat extends IPrefPaperEntry {
	readonly isHat: true;
	readonly count: number;
}

export interface IPrefPaperColumn {
	readonly designation: TPrefDesignation;
	readonly position: PrefPaperPosition;
	readonly entries: readonly IPrefPaperEntry[];
	readonly total: number;
}

export interface IPrefPaper {
	readonly columns: Record<TPrefDesignation, IPrefPaperColumn>;
	readonly gameCount: number;
	readonly isComplete: boolean;
}