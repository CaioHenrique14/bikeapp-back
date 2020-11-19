import * as mongoose from 'mongoose'

export const ParkingSpaceSchema = new mongoose.Schema({
  idPlace: { type: String, required: true },
  available: { type: Boolean, required: true },
})

export interface ParkingSpace extends mongoose.Document {
  idPlace: number
  available: boolean
}
