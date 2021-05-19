class UserDataMock {
  constructor () {
    this.data = [
                {
                  _id: '123',
                  name: 'Julia',
                  email: 'juliasfrohlich@hotmail.com',
                  password: '123',
                  attribution: 'Dev',
                  status: 'Ativa' ,
                },
                {
                  _id: '345',
                  name: 'Yumi',
                  email: 'yumicadela18@hotmail.com',
                  password: '123',
                  attribution: 'Tester',
                  status: 'Ativa' ,
                },
                {
                  _id: '357',
                  name: 'Ryu',
                  email: 'ryu@gmail.com',
                  password: '123',
                  attribution: 'Fighter',
                  status: 'Ativa' ,
                }
              ]
}

  getData () {
    return this.data
  }

  setData (user) {
    this.data.push(user)
    return 
  }
}


module.exports = UserDataMock