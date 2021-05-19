const PollingProcessDataMock = require('./pollingProcessDataMock')

class pollingProcessModelMock {
  constructor (){
    this.pollingProcessDataMock = new PollingProcessDataMock()
  }
  async create ( pollingProcess = {}, error = null ) {
    try {
      if ( error ) {
        throw new Error(error)

      } else if ( pollingProcess === {} ){
          throw new Error('As informações são insuficientes para criar um usuário.')

      } else {
          return new Promise(( resolve ) => {
            resolve([ pollingProcess ])
          })
      }

    } catch (err) {
        return err
    }
  }

  async find ( error = null ) {
    try {
      if ( error ) {
        throw new Error(error)

      } else {
          return new Promise(( resolve ) => {
            resolve(this.pollingProcessDataMock.getData())
          })
      }
      
    } catch (err) {
        return err
    }
  }
  
  async updateOne ( id = '', dataToUpdate = {}, error = null ) {
    try {
      if ( error ) {
        throw new Error(error)

      } else {
          const fieldToUpdate = Object.keys(dataToUpdate)[0]
          const pollingProcesss = this.pollingProcessDataMock.getData()
          const pollingProcessToUpdate = pollingProcesss.filter( pollingProcesss => pollingProcesss._id === id )

          let updatedPollingProcess = pollingProcessToUpdate[0]
          updatedPollingProcess[fieldToUpdate] = dataToUpdate[fieldToUpdate]
          return new Promise(( resolve ) => {
            resolve([updatedPollingProcess])
          })
        }

    } catch (err) {
        return err
    }
  }

  async deleteOne ( id = '', error = null ) {
    try {
      if ( error ) {
        throw new Error(error)
      } else {
          const pollingProcesss = this.pollingProcessDataMock.getData()
          const deletedPollingProcess = pollingProcesss.filter(pollingProcesss => pollingProcesss._id === id)

          return new Promise(( resolve ) => {
            resolve( deletedPollingProcess )
          })
      }

    } catch (err) {
        return err
    }
  }
}


module.exports = new pollingProcessModelMock()