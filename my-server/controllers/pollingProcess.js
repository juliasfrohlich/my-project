exports.getProcesses = async function getProcesses ( ) {
  try {
    const processes = await model.find()
    return ['ok', processes]

  } catch (err) {
     return ['error', err]
  }
}

exports.insertProcess = async function insertProcess (process, model, error) {
 try {
   const createdProcess = await model.create(process, error)
   return ['ok', createdProcess];

 } catch (err) {

     return ['error', err]
 }
}

exports.updatedProcess = async function updateProcess (id, payload) {
 try {
   const updatedProcess = await model.updateOne({_id: id}, payload)
   return ['ok', updatedProcess];

 } catch (err) {
     return ['error', err]
 }
}

exports.deleteProcessByName = async function deleteProcessByName (name) {
 try {
    const deletedProcess = await model.deleteOne({name: name})
    return ['ok', deletedProcess];

  } catch (err) {
   return ['error', err]
  }
}
