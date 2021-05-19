exports.getProcesses = async function getProcesses ( model = {} ) {
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

exports.insertProcess = async function insertProcess ( process = {}, model = {}, error = null ) {
 try {
    if ( model.create === undefined ){
      throw new Error("O modelo passado não possui o método updateOne()")
    }
   const createdProcess = await model.create( process, error )

   return ['ok', createdProcess];

 } catch (err) {

     return ['error', err]
 }
}

exports.updatedProcess = async function updatedProcess ( id = '', payload = {}, model = {}, error = null ) {
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

exports.deleteProcessById = async function deleteProcessById ( id = '', model = {}, error = null ) {
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
