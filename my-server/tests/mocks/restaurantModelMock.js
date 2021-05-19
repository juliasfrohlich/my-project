const RestaurantDataMock = require('./restaurantDataMock')

class restaurantModelMock {
  constructor (){
    this.RestaurantDataMock = new RestaurantDataMock()
  }
  async create (restaurant = {}, error = null) {
    try {
      if (error) {
        throw new Error(error)
      } else if (restaurant === {}){
        throw new Error('As informações são insuficientes para criar um usuário.')
      } else {
        return new Promise((resolve) => {
          resolve(restaurant)
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
  
  async updateOne (restaurant = {}, error = null) {
    try {
      if (error) {
        console.log('error: ', error)
        throw new Error(error)
      } else {
        return new Promise((resolve) => {
          resolve(restaurant)
        })
      }

    } catch (err) {
        return err
    }
  }

  async deleteOne (restaurant = {}, error = null) {
    try {
      if (error) {
        throw new Error(error)
      } else {
        return new Promise((resolve) => {
          resolve(restaurant)
        })
      }

    } catch (err) {
        return err
    }
  }
}


module.exports = new restaurantModelMock()