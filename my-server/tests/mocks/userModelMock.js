
class userModelMock {
  async create (user, error) {
    try {
      if (error) {
        console.log('entrei no throw')
        throw new Error(error)
      }else {
        return new Promise((resolve) => {
          resolve(user)
        })

      }

    } catch (err) {
      console.log('fui capturado na classe')
        return err
    }
  }
}

module.exports = new userModelMock()