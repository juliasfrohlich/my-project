exports.getUsers = async function getUsers ( ) {
   try {
     const users = await model.find()
     return ['ok', users]

   } catch (err) {
      return ['error', err]
   }
}

exports.insertUser = async function insertUser (user, model, error) {
  try {
    console.log("erro no insertUser", insertUser)
    const createdUser = await model.create(user, error)
    console.log('created user: ', createdUser)
    return ['ok', createdUser];

  } catch (err) {
    console.log('fui capturado no controller')

      return ['error', err]
  }
}

exports.updatedUser = async function updateUser (id, payload) {
  try {
    const updatedUser = await model.updateOne({_id: id}, payload)
    return ['ok', updatedUser];

  } catch (err) {
      return ['error', err]
  }
}

exports.deleteUserByName =async function deleteUserByName (name) {
  try {
     const deletedUser = await model.deleteOne({name: name})
     return ['ok', deletedUser];

   } catch (err) {
    return ['error', err]
   }
 }
