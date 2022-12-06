export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://127.0.0.1:27017/AirportAI',
  port: process.env.MONGO_URL ?? 3333,
  tokenKey: '123456',
  defaultToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQWlycG9ydEFJIiwiaWF0IjoxNjcwMjg3MzIyLCJleHAiOjE3MDE4MjMzMjJ9.V7V28a6Jp6OkynHXdQoEg0fBosv5FqOTUMO-xESbunk'
}
