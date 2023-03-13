import { MongoClient } from "mongodb";
import { environment } from "../environments/_index";

class Mongo {
    constructor() { }

    private _uri: string = `mongodb://${environment.mongodb.username}:${environment.mongodb.password}@${environment.mongodb.hostname}:${environment.mongodb.port}/${environment.mongodb.db}?authSource=admin`;

    private _client: MongoClient;
    protected get client(): MongoClient {
        if (!this._client) {
            this._client = new MongoClient(this._uri);
        }

        return this._client;
    }

    public async connect(dbname: string) {
        try {
            await this.client.connect();
            await this.client.db(dbname).command({ ping: 1 });
        } finally {
            await this.client.close();
        }
    }
}