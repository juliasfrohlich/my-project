module.exports = {
  date: {type: Date, required: true},
  week: {type: Number, required: true},
  votes: {type: Number, required: false, default: 0},
  winner: {type: String, required: false, default: 'ND'},
  status: {type: String, required: true}, // "Não iniciado", "Iniciado", "Encerrado"
  availableRestaurants: {
    type: [{ type: String }],
    required: true,  
    validate: v => Array.isArray(v) && v.length > 0
  },
  ballot: [{
    restaurant: { type: String },
    votes:[{type: SchemaTypes.Types.ObjectId}] //ID dos usuários
    }]
  }

