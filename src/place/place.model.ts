import * as mongoose from 'mongoose'

export const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
})

export interface Place extends mongoose.Document {
  name: string
  description: string
  latitude: number
  longitude: number
}
