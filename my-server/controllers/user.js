exports.getUsers = async function getUsers ( model = {} ) {
   try {

    if ( model.find === undefined ){
      throw new Error("O modelo passado não possui o método find()")
    }
     const users = await model.find()

     if ( users instanceof Error)  {
      throw new Error(users)
    }

     return ['ok', users]

   } catch (err) {
      return ['error', err]
   }
}

function isProcessValid (user) {
  const requiredFields = ['name', 'email', 'password', 'attribution', 'status']

  let iAmValid = true

  requiredFields.forEach(field => { 
      const valid = Object.keys(user).includes(field) 
      if( valid === false ) {
        iAmValid = valid
      } 
  })

  return iAmValid;
}

exports.createUser = async function createUser ( user = {}, model = {}, error = null ) {
  try {

    if ( model.create === undefined ){
      throw new Error("O modelo passado não possui o método create()")
    }

    if ( isProcessValid(user) === false ) {
      throw new Error('Dados insuficientes para criação de um novo usuário.')
   }

    const createdUser = await model.create( user, error )
    
    if ( createdUser instanceof Error ) {
      throw new Error(createdUser)
    }
    return ['ok', createdUser];
    

  } catch (err) {
      return ['error', err]
  }
}

exports.updatedUser = async function updateUser ( id = '', payload = {}, model = {}, error = null ) {
  try {

    if ( model.updateOne === undefined ){
      throw new Error("O modelo passado não possui o método updateOne()")
    }
    const updatedUser = await model.updateOne( id, payload )

    if ( updatedUser instanceof Error ) {
      throw new Error(updatedUser)
    }

    return ['ok', updatedUser];

  } catch (err) {
      return ['error', err]
  }
}

exports.deleteUserByName = async function deleteUserByName ( name = null, model = {}, error = null ) {
  try {

    if ( model.deleteOne === undefined ){
      throw new Error("O modelo passado não possui o método deleteOne()")
    }

    const deletedUser = await model.deleteOne( name )

     if ( deletedUser instanceof Error ) {
      throw new Error(deletedUser)
    }

     return ['ok', deletedUser];

   } catch (err) {
    return ['error', err]
   }
 }
