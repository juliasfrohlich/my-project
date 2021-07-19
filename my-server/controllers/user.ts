interface User {
  name?: string
  email?: string
  password?: string
  attribution?: string
  status?: string
}

//TODO: Ajustar tipos de parâmetros
const getUsers = async function getUsers ( model:any = {}, error: string = null ) {
   try {

    if ( model.find === undefined ){
      throw new Error("O modelo passado não possui o método find()")
    }
     const users = await model.find()

     if ( users instanceof Error)  {
      throw users
    }

     return ['ok', users]

   } catch (err) {
      return ['error', err]
   }
}

function isProcessValid (user: User) {
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

//TODO: Ajustar tipos de parâmetros
const createUser = async function createUser ( user: User = {}, model: any = {}, error: string = null ) {
  try {

    if ( model.create === undefined ){
      throw new Error("O modelo passado não possui o método create()")
    }

    if ( isProcessValid(user) === false ) {
      throw new Error('Dados insuficientes para criação de um novo usuário.')
   }

    const createdUser = await model.create( user, error )
    
    if ( createdUser instanceof Error ) {
      throw createdUser
    }
    return ['ok', createdUser];
    

  } catch (err) {
      return ['error', err]
  }
}

//TODO: Ajustar tipos de parâmetros
const updatedUser = async function updateUser ( id: string = '', payload: any = {}, model:any = {}, error: string = null ) {
  try {

    if ( model.updateOne === undefined ){
      throw new Error("O modelo passado não possui o método updateOne()")
    }
    const updatedUser = await model.updateOne( id, payload )

    if ( updatedUser instanceof Error ) {
      throw updatedUser
    }

    return ['ok', updatedUser];

  } catch (err) {
      return ['error', err]
  }
}

//TODO: Ajustar tipos de parâmetros
const deleteUserByName = async function deleteUserByName ( name: string = null, model:any = {}, error: string = null ) {
  try {

    if ( model.deleteOne === undefined ){
      throw new Error("O modelo passado não possui o método deleteOne()")
    }

    const deletedUser = await model.deleteOne( name )

     if ( deletedUser instanceof Error ) {
      throw deletedUser
    }

     return ['ok', deletedUser];

   } catch (err) {
    return ['error', err]
   }
 }


 export {
  getUsers,
  createUser,
  updatedUser,
  deleteUserByName
 }