export interface PlayerType {
    health: number;
    takeDamage(amount: number): void;
    isAlive(): boolean;
    move(direction: string): void;
}

export interface AiRobotType {
    position: { x: number; y: number };
    moveTowards(target: PlayerType): void;
    attack(target: PlayerType): void;
    isInRange(target: PlayerType): boolean;
}