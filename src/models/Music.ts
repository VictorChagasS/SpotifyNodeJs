import { Schema, model } from 'mongoose'

const Scheema = Schema
const MusicSchema = new Scheema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  album: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

export const Music = model('bancoMusica', MusicSchema)

/*
const user = {
  title:"Quase acústico #16",
  artist:"Trembolona",
  album:"Mnb Quase acústico"
 }

 new Music(user).save()
*/
