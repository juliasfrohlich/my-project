class UserDataMock {
  constructor () {
    this.data = [
                {
                  _Id: '123',
                  Name: 'Julia',
                  Email: 'juliasfrohlich@hotmail.com',
                  Password: '123',
                  Attribution: 'Dev',
                  Status: 'Ativa' ,
                },
                {
                  _Id: '345',
                  Name: 'Yumi',
                  Email: 'yumicadela18@hotmail.com',
                  Password: '123',
                  Attribution: 'Tester',
                  Status: 'Ativa' ,
                },
                {
                  _Id: '357',
                  Name: 'Ryu',
                  Email: 'ryu@gmail.com',
                  Password: '123',
                  Attribution: 'Fighter',
                  Status: 'Ativa' ,
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