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
          resolve([user])
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
  
  async updateOne (id = '', dataToUpdate = {}, error = null) {
    try {
      if (error) {
        console.log('error: ', error)
        throw new Error(error)
      } else {
        const fieldToUpdate = Object.keys(dataToUpdate)[0]
        console.log('dataToUpdate', dataToUpdate)
        const users = this.userDataMock.getData()
        const userToUpdate = users.filter(user => user._id === id)

        let updatedUser = userToUpdate[0]
        updatedUser[fieldToUpdate] = dataToUpdate[fieldToUpdate]
        return new Promise((resolve) => {
          resolve([updatedUser])
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
        const users = this.userDataMock.getData()
        const deletedUser = users.filter(user => user.name === name)
        return new Promise((resolve) => {
          resolve(deletedUser)
        })
      }

    } catch (err) {
        return err
    }
  }
}


module.exports = new userModelMock()