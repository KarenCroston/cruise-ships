class Ship {
    constructor() {
        this.startingPort = 'Dover';
        this.previousPort = null;
    }
    setSail() {
        this.previousPort = this.currentPort;
        this.startingPort = null;
    }}
module.exports = Ship;