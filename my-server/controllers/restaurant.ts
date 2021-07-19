//TODO: Ajustar tipos de parâmetros
const getRestaurants = async function getRestaurants(model: any = {}, error: string = null) {
  try {

    if ( model.find === undefined ){
      throw new Error("O modelo passado não possui o método find()")
    }

    const restaurants = await model.find()

     //TODO Verificar se, ao apresentar um erro, o model efetivamente retorna uma instância do tipo Error
    if ( restaurants instanceof Error ) {
      throw restaurants
    }

    return ['ok', restaurants]

  } catch (err) {
     return ['error', err]
  }
}

//TODO: Ajustar tipos de parâmetros
function isProcessValid (restaurant: any) {
  const requiredFields = ['name', 'adress']
  let iAmValid = true
  requiredFields.forEach(field => { 
      const valid = Object.keys(restaurant).includes(field) 
      if( valid === false ) {
        iAmValid = valid
      } 
  })

  return iAmValid;
}

//TODO: Ajustar tipos de parâmetros
const insertRestaurant = async function insertRestaurant ( restaurant: any = {}, model: any = {}, error: string = null ) {
 try {

    if ( model.create === undefined ){
      throw new Error("O modelo passado não possui o método updateOne()")
    }

    if ( isProcessValid(restaurant) === false ) {
      throw new Error('Dados insuficientes para a inserção de um novo restaurante.')
   }

   const createdRestaurant = await model.create( restaurant, error )

   return ['ok', createdRestaurant];

 } catch (err) {

     return ['error', err]
 }
}

//TODO: Ajustar tipos de parâmetros
const updatedRestaurant = async function updateRestaurant ( id: any = '', payload: any = {}, model: any = {}, error: string = null ) {
 try {
    if ( model.updateOne === undefined ){
      throw new Error("O modelo passado não possui o método updateOne()")
    }
   const updatedRestaurant = await model.updateOne( id, payload )

    //TODO Verificar se, ao apresentar um erro, o model efetivamente retorna uma instância do tipo Error
   if ( updatedRestaurant instanceof Error ) {
    throw updatedRestaurant
  }

   return ['ok', updatedRestaurant];

 } catch (err) {
     return ['error', err]
 }
}

//TODO: Ajustar tipos de parâmetros
const deleteRestaurantByName = async function deleteRestaurantByName ( name: any = null, model: any = {}, error: string = null ) {
 try {

    if ( model.deleteOne === undefined ){
      throw new Error("O modelo passado não possui o método deleteOne()")
    }

    const deletedRestaurant = await model.deleteOne( name )

    //TODO Verificar se, ao apresentar um erro, o model efetivamente retorna uma instância do tipo Error
    if ( deletedRestaurant instanceof Error ) {
      throw deletedRestaurant
    }

    return ['ok', deletedRestaurant];

  } catch (err) {
   return ['error', err]
  }
}

export {
  getRestaurants,
  insertRestaurant,
  updatedRestaurant,
  deleteRestaurantByName
}