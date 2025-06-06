class Player {
    health: number;

    constructor() {
        this.health = 100; // Initial health
    }

    takeDamage(amount: number): void {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0; // Prevent negative health
        }
    }

    isAlive(): boolean {
        return this.health > 0;
    }

    move(direction: string): void {
        // Logic for moving the player in the specified direction
        console.log(`Player moves ${direction}`);
    }
}

export default Player;