import mongoose, { Schema } from 'mongoose'

const ProximityCardSchema = new Schema({
  title: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  },
  completed: [{
    type: Schema.Types.ObjectId,
    ref: 'CompletedTask'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

ProximityCardSchema.statics = {
  async findBlueprint (id) {
    return this.findById(id)
  },

  async findAllBlueprints () {
    return this.find()
  }
}

let ProximityCard

try {
  ProximityCard = mongoose.model('ProximityCard')
} catch (e) {
  ProximityCard = mongoose.model('ProximityCard', ProximityCardSchema)
}

export default ProximityCard
