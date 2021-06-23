const getProcesses = async function ( model = {} ) {
  try {

    if ( model.find === undefined ){
      throw new Error("O modelo passado não possui o método find()")
    }

    const pollingProcesses = await model.find()

    if ( pollingProcesses instanceof Error ) {
      throw new Error(pollingProcesses)
    }

    return ['ok', pollingProcesses]

  } catch (err) {
     return ['error', err]
  }
}

const getProcessesByDate = async function ( date = null, model = {} ) {
  try {

    if ( model.find === undefined ){
      throw new Error("O modelo passado não possui o método find()")
    }

    if ( !date ) {
      throw new Error('Data inválida')
   }
    const pollingProcesses = await model.find({date})
    if ( pollingProcesses instanceof Error ) {
      throw new Error(pollingProcesses)
    }
    if ( pollingProcesses === undefined ) {
      throw new Error('Nenhum processo foi identificado com a data indicada.')
    }

    return ['ok', pollingProcesses]

  } catch (err) {
     return ['error', err]
  }
}


function isProcessValid (process) {
  const requiredFields = [ 'date', 'week', 'availableRestaurants']

  let iAmValid = true

  requiredFields.forEach(field => { 
      const valid = Object.keys(process).includes(field) 
      if( valid === false ) {
        iAmValid = valid
      } 
  })

  return iAmValid;
}

const createProcess = async function ( process = {}, model = {}, error = null ) {

/**
 * const pollingProcessExample = {
      date: '05/05/2021',
      week: '1', 
      votes: '3',
      availableRestaurants: ['Risotinho', 'Super Frango Gravataí', 'Japa da Esquina'],
      ballot: []
    }
 * 
 */

 try {
    if ( model.create === undefined ){
      throw new Error("O modelo passado não possui o método updateOne()")
    }

   if ( isProcessValid(process) === false ) {
      throw new Error('Dados insuficientes para criação de um novo processo de votação.')
   }

   if ( await hasProcess( process, model ) === true ) {
     throw new Error('Processo já existe.')
   }

   const completeProcess = pollingProcessFactory( process )
   const createdProcess = await model.create( completeProcess )

   return ['ok', createdProcess];

 } catch (err) {

     return ['error', err]
 }
}

const hasProcess = async function (process = {}, model = {}) {
  try{
    const processes = await getProcessesByDate(process.date, model)
    if(process[0] === 'error'){
      throw new Error('Erro ao buscar processo por data')
    }
    if (processes[1].length > 0) {
      return true
    } 
  
    return false

  } catch(err) {
      return false
  }
}

function pollingProcessFactory (process) {
  let pollingProcess = process;
  pollingProcess.votes = 0
  pollingProcess.status = 'Não Iniciado'
  pollingProcess.winner = 'ND'
  pollingProcess = ballotFactory(pollingProcess)
  
  return pollingProcess
}

function ballotFactory (process) {
  let pollingProcess = process;
  pollingProcess.availableRestaurants.forEach(restaurant => {
    const newRestaraunt = {restaurant: restaurant, votes: []}
    pollingProcess.ballot.push(newRestaraunt)
  })
  return pollingProcess
}

const updateProcess = async function ( id = '', payload = {}, model = {}, error = null ) {
 try {
    if ( model.updateOne === undefined ){
      throw new Error("O modelo passado não possui o método updateOne()")
    }
   const updatedProcess = await model.updateOne( id, payload )

   if ( updatedProcess instanceof Error ) {
    throw new Error(updatedProcess)
  }

   return ['ok', updatedProcess];

 } catch (err) {
     return ['error', err]
 }
}

const deleteProcessById = async function ( id = '', model = {}, error = null ) {
 try {
    if ( model.deleteOne === undefined ){
      throw new Error("O modelo passado não possui o método deleteOne()")
    }

    const deletedProcess = await model.deleteOne( id )

    if ( deletedProcess instanceof Error ) {
      throw new Error(deletedProcess)
    }

    return ['ok', deletedProcess];

  } catch (err) {
   return ['error', err]
  }
}

module.exports = {
  getProcesses,
  createProcess,
  getProcessesByDate,
  hasProcess,
  updateProcess,
  deleteProcessById
}