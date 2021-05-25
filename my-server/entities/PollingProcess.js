module.exports = {
  limit: {type: Number, required: true},
  date: {type: Date, required: true},
  week: {type: Number, required: true},
  votes: {type: Number, required: true, default: 0},
  winner: {type: String, required: true, default: 'ND'},
  status: {type: String, required: false},
  ballot: [{
    restaurant: String,
    votes:[SchemaTypes.Types.ObjectId] //ID dos usuários
    }]
  }

