class AiRobot {
    position: { x: number; y: number };

    constructor(x: number, y: number) {
        this.position = { x, y };
    }

    moveTowards(target: { position: { x: number; y: number } }) {
        if (this.position.x < target.position.x) {
            this.position.x++;
        } else if (this.position.x > target.position.x) {
            this.position.x--;
        }

        if (this.position.y < target.position.y) {
            this.position.y++;
        } else if (this.position.y > target.position.y) {
            this.position.y--;
        }
    }

    attack(target: { takeDamage: (amount: number) => void }) {
        target.takeDamage(10);
    }

    isInRange(target: { position: { x: number; y: number } }): boolean {
        const distance = Math.sqrt(
            (this.position.x - target.position.x) ** 2 +
            (this.position.y - target.position.y) ** 2
        );
        return distance <= 1; // Attack range
    }
}

export default AiRobot;