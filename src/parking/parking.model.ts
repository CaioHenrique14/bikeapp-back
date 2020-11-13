import * as mongoose from 'mongoose'

export const ParkingSchema = new mongoose.Schema({
  idPlace: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
})

export interface Parking extends mongoose.Document {
  idPlace: number
  name: string
  description: string
}
