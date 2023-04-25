import dontev from 'dotenv'

dontev.config()

export const PORT        = process.env.PORT        || 3000
export const MONGODB_URI = process.env.MONGODB_URI || 'NO VARIABLE'
export const SECRET_JWT  = process.env.SECRET_JWT  || 'NO VARIABLE'