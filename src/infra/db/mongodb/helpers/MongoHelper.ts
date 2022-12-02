import { MongoClient, Collection, MongoClientOptions } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    const mongoConnectOpts: MongoClientOptions = {
      sslValidate: true,
      connectTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000
    }
    this.client = await MongoClient.connect(uri, mongoConnectOpts)
  },
  async disconnect (): Promise<void> {
    await this.client.close()
  },
  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}
