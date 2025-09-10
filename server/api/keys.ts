import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  // Example of fetching keys from environment variables
  const apiKeys = {
    publicKey: process.env.PUBLIC_KEY,
    secretKey: process.env.SECRET_KEY,
    // Add more keys as needed
  }

  // You can add authentication here if needed
  // const auth = getHeader(event, 'Authorization')
  // if (!auth) {
  //   throw createError({
  //     statusCode: 401,
  //     message: 'Unauthorized'
  //   })
  // }

  return {
    keys: apiKeys,
    timestamp: new Date().toISOString()
  }
}) 