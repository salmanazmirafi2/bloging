import express from 'express'
import { allPost, createPost, deletePost, getSingle, updatePost } from '../controlar/postRoute.js'

const postRoute = express.Router()

postRoute.post('/crate', createPost)
postRoute.put('/:id', updatePost)
postRoute.delete('/:id', deletePost)
postRoute.get('/single/:id', getSingle)
postRoute.get('/all', allPost)

export default postRoute