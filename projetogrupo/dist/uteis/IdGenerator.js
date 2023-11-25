"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGenerator = void 0;
const fs = require("fs");
class IdGenerator {
    constructor() {
        this.lastId = this.loadLastId();
    }
    static getInstance() {
        if (!IdGenerator.instance) {
            IdGenerator.instance = new IdGenerator();
        }
        return IdGenerator.instance;
    }
    loadLastId() {
        try {
            const data = fs.readFileSync('./src/dados/ids.json', 'utf-8');
            const jsonData = JSON.parse(data);
            return jsonData.lastId || 0;
        }
        catch (error) {
            return 0;
        }
    }
    saveLastId() {
        const data = { lastId: this.lastId };
        fs.writeFileSync('./src/dados/ids.json', JSON.stringify(data, null, 2), 'utf-8');
    }
    getNextId() {
        this.lastId++;
        this.saveLastId();
        return this.lastId;
    }
}
exports.IdGenerator = IdGenerator;
