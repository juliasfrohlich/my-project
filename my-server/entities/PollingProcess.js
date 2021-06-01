module.exports = {
  limit: {type: Number, required: true},
  date: {type: Date, required: true},
  week: {type: Number, required: true},
  votes: {type: Number, required: true, default: 0},
  winner: {type: String, required: true, default: 'ND'},
  status: {type: String, required: true}, // "Não iniciado", "Iniciado", "Encerrado"
  availableRestaurants: [{ type: String }],
  ballot: [{
    restaurants: { type: String },
    votes:[{type: SchemaTypes.Types.ObjectId}] //ID dos usuários
    }]
  }

