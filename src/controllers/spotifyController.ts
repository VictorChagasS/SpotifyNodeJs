import { Music } from '../models/Music'
import { Request, Response } from 'express'

export const listMusic = (req:Request, res:Response) => {
  Music.find().lean().sort({ createdAt: -1 }).then((mus) => {
    res.render('index', { mus })
  }).catch((err) => (console.log(err)))
}

export const deleteMusic = (req:Request, res:Response) => {
  Music.deleteOne({ _id: req.body.ID }).then(() => res.redirect('/')).catch((err) => res.send(err))
}

export const createMusic = (req:Request, res:Response) => {
  res.render('createPage')
}

export const index = (req:Request, res:Response) => {
  res.redirect('/')
}
