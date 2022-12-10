import express from 'express'
import { getAll, logIn, signUp, singUser, userUpdate } from '../controlar/userControlar.js'

const userRoute = express.Router()

userRoute.post('/signup', signUp)
userRoute.post('/login', logIn)
userRoute.put('/account/:id', userUpdate)
userRoute.get('/:id', singUser)
userRoute.get('/', getAll)

export default userRoute