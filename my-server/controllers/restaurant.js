exports.getRestaurants = async function getRestaurants ( ) {
  try {
    const restaurants = await model.find()
    return ['ok', restaurants]

  } catch (err) {
     return ['error', err]
  }
}

exports.insertRestaurant = async function insertRestaurant (restaurant, model, error) {
 try {
   const createdRestaurant = await model.create(restaurant, error)
   return ['ok', createdRestaurant];

 } catch (err) {

     return ['error', err]
 }
}

exports.updatedRestaurant = async function updateRestaurant (id, payload) {
 try {
   const updatedRestaurant = await model.updateOne({_id: id}, payload)
   return ['ok', updatedRestaurant];

 } catch (err) {
     return ['error', err]
 }
}

exports.deleteRestaurantByName = async function deleteRestaurantByName (name) {
 try {
    const deletedRestaurant = await model.deleteOne({name: name})
    return ['ok', deletedRestaurant];

  } catch (err) {
   return ['error', err]
  }
}
