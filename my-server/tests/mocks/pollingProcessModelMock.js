const PollingProcessMock = require('./pollingProcesssDataMock')


class pollingProcessModelMock {
  constructor (){
    this.pollingProcessMock = new PollingProcessMock()
  }
  async create (pollingProcess = {}, error = null) {
    try {
      if (error) {
        throw new Error(error)
      } else if (pollingProcess === {}){
        throw new Error('As informações são insuficientes para criar um usuário.')
      } else {
        return new Promise((resolve) => {
          resolve(pollingProcess)
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
          resolve(this.pollingProcessMock.getData())
        })
      }
      
    } catch (err) {
        return err
    }
  }
  
  async updateOne (pollingProcess = {}, error = null) {
    try {
      if (error) {
        console.log('error: ', error)
        throw new Error(error)
      } else {
        return new Promise((resolve) => {
          resolve(pollingProcess)
        })
      }

    } catch (err) {
        return err
    }
  }

  async deleteOne (pollingProcess = {}, error = null) {
    try {
      if (error) {
        throw new Error(error)
      } else {
        return new Promise((resolve) => {
          resolve(pollingProcess)
        })
      }

    } catch (err) {
        return err
    }
  }
}


module.exports = new pollingProcessModelMock()