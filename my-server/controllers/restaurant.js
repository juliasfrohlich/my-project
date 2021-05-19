exports.getRestaurants = async function getRestaurants (model = {} ) {
  try {

    if (model.find === undefined){
      throw new Error("O modelo passado não possui o método find()")
    }

    const restaurants = await model.find()

    if (restaurants instanceof Error) {
      throw new Error(restaurants)
    }

    return ['ok', restaurants]

  } catch (err) {
     return ['error', err]
  }
}

exports.insertRestaurant = async function insertRestaurant (restaurant = {}, model = {}, error = null) {
 try {
    if (model.create === undefined){
      throw new Error("O modelo passado não possui o método updateOne()")
    }
   const createdRestaurant = await model.create(restaurant, error)
   return ['ok', createdRestaurant];

 } catch (err) {

     return ['error', err]
 }
}

exports.updatedRestaurant = async function updateRestaurant (id = '', payload = {}, model = {}, error = null) {
 try {
    if (model.updateOne === undefined){
      throw new Error("O modelo passado não possui o método updateOne()")
    }
   const updatedRestaurant = await model.updateOne( id, payload)

   if (updatedRestaurant instanceof Error) {
    throw new Error(updatedRestaurant)
  }

   return ['ok', updatedRestaurant];

 } catch (err) {
     return ['error', err]
 }
}

exports.deleteRestaurantByName = async function deleteRestaurantByName (name = null, model = {}, error = null) {
 try {
    if (model.deleteOne === undefined){
      throw new Error("O modelo passado não possui o método deleteOne()")
    }
    const deletedRestaurant = await model.deleteOne(name)
    console.log('deletedRestaurant: ', deletedRestaurant)
    if (deletedRestaurant instanceof Error) {
      throw new Error(deletedRestaurant)
    }

    return ['ok', deletedRestaurant];

  } catch (err) {
   return ['error', err]
  }
}
