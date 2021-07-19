//TODO: Ajustar tipos de parâmetros
const getProcesses = async function ( model: any = {} ) {
  try {

    if ( model.find === undefined ){
      throw new Error("O modelo passado não possui o método find()")
    }

    const pollingProcesses = await model.find()

     //TODO Verificar se, ao apresentar um erro, o model efetivamente retorna uma instância do tipo Error
    if ( pollingProcesses instanceof Error ) {
      throw pollingProcesses
    }

    return ['ok', pollingProcesses]

  } catch (err) {
     return ['error', err]
  }
}
//TODO: Ajustar tipos de parâmetros
const getProcessesByDate = async function ( date:any = null, model:any = {}, error: string = null ) {
  try {

    if ( model.find === undefined ){
      throw new Error("O modelo passado não possui o método find()")
    }

    if ( !date ) {
      throw new Error('Data inválida')
    }
    
    const pollingProcesses = await model.find({ date })

     //TODO Verificar se, ao apresentar um erro, o model efetivamente retorna uma instância do tipo Error
    if ( pollingProcesses instanceof Error ) {
      throw pollingProcesses
    }
    if ( pollingProcesses === undefined ) {
      throw new Error('Nenhum processo foi identificado com a data indicada.')
    }

    return ['ok', pollingProcesses]

  } catch (err) {
     return ['error', err]
  }
}

//TODO: Ajustar tipos de parâmetros
function isProcessValid (process:any) {
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

//TODO: Ajustar tipos de parâmetros
const createProcess = async function ( process:any = {}, model:any = {}, error:string = null ) {

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

//TODO: Ajustar tipos de parâmetros
const hasProcess = async function (process:any = {}, model:any = {}) {
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

//TODO: Ajustar tipos de parâmetros
function pollingProcessFactory (process: any) {
  let pollingProcess = process;
  pollingProcess.votes = 0
  pollingProcess.status = 'Não Iniciado'
  pollingProcess.winner = 'ND'
  pollingProcess = ballotFactory(pollingProcess)
  
  return pollingProcess
}

//TODO: Ajustar tipos de parâmetros
function ballotFactory (process:any) {
  let pollingProcess = process;
  pollingProcess.availableRestaurants.forEach(restaurant => {
    const newRestaraunt = {restaurant: restaurant, votes: []}
    pollingProcess.ballot.push(newRestaraunt)
  })
  return pollingProcess
}

//TODO: Ajustar tipos de parâmetros
const updateProcess = async function ( id: any = '', payload: any = {}, model: any = {}, error: string = null ) {
 try {
    if ( model.updateOne === undefined ){
      throw new Error("O modelo passado não possui o método updateOne()")
    }

  //TODO Verificar se, ao apresentar um erro, o model efetivamente retorna uma instância do tipo Error
   const updatedProcess = await model.updateOne( id, payload )

   if ( updatedProcess instanceof Error ) {
    throw updatedProcess
  }

   return ['ok', updatedProcess];

 } catch (err) {
     return ['error', err]
 }
}

//TODO: Ajustar tipos de parâmetros
const deleteProcessById = async function ( id: any = '', model: any = {}, error: string = null ) {
 try {
    if ( model.deleteOne === undefined ){
      throw new Error("O modelo passado não possui o método deleteOne()")
    }

    const deletedProcess = await model.deleteOne( id )

    //TODO Verificar se, ao apresentar um erro, o model efetivamente retorna uma instância do tipo Error
    if ( deletedProcess instanceof Error ) {
      throw deletedProcess
    }

    return ['ok', deletedProcess];

  } catch (err) {
   return ['error', err]
  }
}

export {
  getProcesses,
  createProcess,
  getProcessesByDate,
  hasProcess,
  updateProcess,
  deleteProcessById
}