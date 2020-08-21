const mongoose = require('mongoose')

const kettySchema = mongoose.Schema({
  name: String
})

kettySchema.methods.speak = function () {
  const greeting = this.name?
  `kitty name is ${this.name}` : 'i dont know'
  console.log(greeting)
}
const Kitten = mongoose.model('Kitten', kettySchema)

const miao = new Kitten({name: 'miao'})
miao.speak()
miao.save(function (err, miao) {
  if (err) {
    return console.error(err);
  }
  console.log(miao)
})