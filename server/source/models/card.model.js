import mongoose, { Schema } from 'mongoose'

const ProximityCardSchema = new Schema({
  title: {
    type: String
  },
  whitelisted: {
    type: Boolean,
    default: false
  },
  banned: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

ProximityCardSchema.methods = {
  async whitelist () {
    try {
      this.whitelisted = true
      return this.save()
    } catch (err) {
      return err
    }
  },

  async unwhitelist () {
    try {
      this.whitelisted = false
      return this.save()
    } catch (err) {
      return err
    }
  },

  async ban () {
    try {
      this.banned = true
      return this.save()
    } catch (err) {
      return err
    }
  },

  async unban () {
    try {
      this.banned = false
      return this.save()
    } catch (err) {
      return err
    }
  }
}

ProximityCardSchema.statics = {
  async findAllCards () {
    return this.find()
  },

  findByTitle (title) {
    return this.findOne({ title })
  },
}

let ProximityCard

try {
  ProximityCard = mongoose.model('ProximityCard')
} catch (e) {
  ProximityCard = mongoose.model('ProximityCard', ProximityCardSchema)
}

export default ProximityCard
