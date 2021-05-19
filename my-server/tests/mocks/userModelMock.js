const UserDataMock = require('./usersDataMock')


class userModelMock {
  constructor (){
    this.userDataMock = new UserDataMock()
  }
  async create (user = {}, error = null) {
    try {
      if (error) {
        throw new Error(error)
      } else if (user === {}){
        throw new Error('As informações são insuficientes para criar um usuário.')
      } else {
        return new Promise((resolve) => {
          resolve(user)
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
          resolve(this.userDataMock.getData())
        })
      }
      
    } catch (err) {
        return err
    }
  }
  
  async updateOne (user = {}, error = null) {
    try {
      if (error) {
        console.log('error: ', error)
        throw new Error(error)
      } else {
        return new Promise((resolve) => {
          resolve(user)
        })
      }

    } catch (err) {
        return err
    }
  }

  async deleteOne (user = {}, error = null) {
    try {
      if (error) {
        throw new Error(error)
      } else {
        return new Promise((resolve) => {
          resolve(user)
        })
      }

    } catch (err) {
        return err
    }
  }
}


module.exports = new userModelMock()