const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catsSchema = new Schema({
  name: String
})

module.exports = mongoose.model('cat', catsSchema)

