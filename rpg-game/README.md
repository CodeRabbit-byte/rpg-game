# RPG Game

## Overview
This is a simple RPG game where the player must survive against AI robots that are closing in on them. The player has health points and can move around the game world while the AI robots attempt to attack.

## Features
- Player character with health management
- AI robots that move towards the player and can attack
- Game engine that manages the game state and updates
- Utility functions for random number generation and distance calculation

## Getting Started

### Prerequisites
- Node.js installed on your machine
- TypeScript installed globally (optional, can be run via npm scripts)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd rpg-game
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Game
To start the game, run the following command:
```
npm start
```

### Gameplay
- Use the keyboard to move the player character.
- Avoid the AI robots while managing your health.
- The game continues until the player's health reaches zero.

## File Structure
```
rpg-game
├── src
│   ├── main.ts
│   ├── game
│   │   ├── player.ts
│   │   ├── aiRobot.ts
│   │   └── gameEngine.ts
│   ├── utils
│   │   └── helpers.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing
Feel free to submit issues or pull requests to improve the game!