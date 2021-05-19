const RestaurantDataMock = require('./restaurantDataMock')

class restaurantModelMock {
  constructor (){
    this.restaurantDataMock = new RestaurantDataMock()
  }
  async create (restaurant = {}, error = null) {
    try {
      if (error) {
        throw new Error(error)
      } else if (restaurant === {}){
        throw new Error('As informações são insuficientes para criar um usuário.')
      } else {
        return new Promise((resolve) => {
          resolve([restaurant])
        })
      }

    } catch (err) {
        return err
    }
  }

  async find (error = null) {
    try {
      if (error) {
        throw new Error(error)
      } else {
        return new Promise((resolve) => {
          resolve(this.restaurantDataMock.getData())
        })
      }
      
    } catch (err) {
        return err
    }
  }
  
  async updateOne (id = '', dataToUpdate = {}, error = null) {
    try {
      if (error) {
        console.log('error: ', error)
        throw new Error(error)
      } else {
          const fieldToUpdate = Object.keys(dataToUpdate)[0]
          const restaurants = this.restaurantDataMock.getData()
          const restaurantToUpdate = restaurants.filter(restaurants => restaurants._id === id)

          let updatedRestaurant = restaurantToUpdate[0]
          updatedRestaurant[fieldToUpdate] = dataToUpdate[fieldToUpdate]
          return new Promise((resolve) => {
            resolve([updatedRestaurant])
          })
        }

    } catch (err) {
        return err
    }
  }

  async deleteOne (name = null, error = null) {
    try {
      if (error) {
        throw new Error(error)
      } else {
        const restaurants = this.restaurantDataMock.getData()
        console.log('restaurants: ', restaurants)
        const deletedRestaurant = restaurants.filter(restaurants => restaurants.name === name)
        console.log('deletedRestaurant: ', deletedRestaurant)

        return new Promise((resolve) => {
          resolve(deletedRestaurant)
        })
      }

    } catch (err) {
        return err
    }
  }
}


module.exports = new restaurantModelMock()