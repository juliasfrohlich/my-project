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
          throw new Error('As informações são insuficientes para criar um processo de votação.')

      } else {
          const result = [ pollingProcess ]
          return new Promise(( resolve ) => {
            resolve(result)
          })
      }

    } catch (err) {
        return err
    }
  }

  async find ( filter = null, error = null ) {
    try {
      const data = this.pollingProcessDataMock.getData()
      if ( error ) {
        throw new Error(error)

      } else if(filter !== null) {
        const result = this.executeFilter(filter, data)
        return new Promise(( resolve ) => {
          resolve(result)
        })

      } else {
          return new Promise(( resolve ) => {
            resolve(data)
          })
      }
      
    } catch (err) {
        return err
    }
  }

  executeFilter (filter = {}, data = []){
    if(filter === {}) {
      throw new Error('Não é possível realizar busca com o filtro atual.')
    }

    if (data === []) {
      throw new Error('Não é possível realizar busca nos dados atuais.')
    }

    const filterKeys = Object.keys(filter)
    let filteredData = []
    let dataToFilter = data

    for (let key of filterKeys) {
      for (let item of dataToFilter ){
        if(item[key] === filter[key]) {
          filteredData.push(item)
          const index = dataToFilter.indexOf(item)
          delete dataToFilter[index]
        }
      }
    }

    return filteredData
    
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