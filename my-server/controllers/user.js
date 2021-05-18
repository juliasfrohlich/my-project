exports.getUsers = async function getUsers (model ) {
   try {

    if (model.find === undefined){
      throw new Error("O modelo passado não possui o método find()")
    }
     const users = await model.find()

     if (users instanceof Error) {
      throw new Error(users)
    }

     return ['ok', users]

   } catch (err) {
      return ['error', err]
   }
}

exports.insertUser = async function insertUser (user = {}, model = {}, error = null) {
  try {

    if (model.create === undefined){
      throw new Error("O modelo passado não possui o método create()")
    }

    if (!Object.keys(user).length){
      throw new Error("Erro ao criar usuário: Dados insuficientes.")
    }
    const createdUser = await model.create(user, error)
    
    if (createdUser instanceof Error) {
      throw new Error(createdUser)
    }
    return ['ok', createdUser];
    

  } catch (err) {

      return ['error', err]
  }
}

exports.updatedUser = async function updateUser (id, payload) {
  try {
    const updatedUser = await model.updateOne({_id: id}, payload)

    if (updatedUser instanceof Error) {
      throw new Error(updatedUser)
    }

    return ['ok', updatedUser];

  } catch (err) {
      return ['error', err]
  }
}

exports.deleteUserByName = async function deleteUserByName (name) {
  try {
     const deletedUser = await model.deleteOne({name: name})

     if (deletedUser instanceof Error) {
      throw new Error(deletedUser)
    }

     return ['ok', deletedUser];

   } catch (err) {
    return ['error', err]
   }
 }
