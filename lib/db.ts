import { Redis } from '@upstash/redis'

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL
  ? process.env.UPSTASH_REDIS_REST_URL
  : 'https://usw1-elegant-ostrich-33923.upstash.io'

const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN
  ? process.env.UPSTASH_REDIS_REST_TOKEN
  : '<PASSWORD>'

export const db = new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN,
})
