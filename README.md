# @prefko/types

Shared TypeScript type definitions for the Preferans card game libraries.

## Overview

This package provides essential type definitions for the Preferans card game, based on your actual implementations. It includes only the core types needed for cards, players, bids, tricks, games, paper scoring, ratings, and basic engine functionality.

## Installation

```bash
npm install @prefko/types
# or
pnpm add @prefko/types
```

## Usage

```typescript
import {
  IPrefDeckCard,
  PrefDeckSuit,
  PrefDeckValue,
  TPrefDesignation,
  EPrefBid,
  IPrefGame
} from '@prefko/types';

const card: IPrefDeckCard = {
  suit: PrefDeckSuit.Spade,
  value: PrefDeckValue.ACE,
  designation: 'SPADE_ACE'
};

const player: IPrefPlayer = {
  designation: 'p1',
  name: 'Alice'
};
```

## What's Included

### Core Types
- **Cards**: `IPrefDeckCard`, `PrefDeckSuit`, `PrefDeckValue`
- **Players**: `IPrefPlayer`, `TPrefDesignation`
- **Bidding**: `EPrefBid`, `EPrefContract`, `EPrefKontra`
- **Tricks**: `IPrefDeckTrick`
- **Game**: `IPrefGame`, `IPrefRound`

### Paper & Scoring
- **Paper**: `IPrefPaper`, `IPrefPaperEntry`
- **Scoring**: `IPrefScore`, `IPrefGameScore`

### Rating System
- **Rating**: `IPrefRating`, `IPrefRatingChange`

### Engine
- **Engine**: `IPrefGameEngine`, `EPrefEnginePhase`
- **Commands**: `IPrefEngineCommand`
- **Events**: `IPrefEngineEvent`

### Common Utilities
- **Types**: `Result<T>`, `DeepPartial<T>`, `Validator<T>`

## Design Principles

- **Immutability**: All interfaces use `readonly` properties
- **Type Safety**: Strict TypeScript definitions with no `any` types
- **Consistency**: Uniform naming conventions (interfaces prefixed with `I`)
- **Modularity**: Organized into logical categories for easy importing
- **Extensibility**: Generic types and flexible interfaces for customization

## Type Relationships

```
IGame
├── IPlayer[] (players)
├── IBiddingState (bidding)
└── ITrickPlayState (trick play)

IGameEngine
├── IEngineState (current state)
├── IEngineConfig (configuration)
└── IGameContext[] (active games)

IScoringPaper
├── IPlayerColumn[] (player scores)
└── IPaperEntry[] (score entries)
```

## Development

This package uses strict TypeScript compilation and ESLint rules to ensure type safety and consistency.

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

### Format

```bash
pnpm format
```

## Contributing

When adding new types:

1. Follow the existing naming conventions
2. Use `readonly` for all properties
3. Add comprehensive JSDoc comments
4. Group related types in appropriate modules
5. Export from the main `index.ts`

## License

Unlicense - see LICENSE file for details.
