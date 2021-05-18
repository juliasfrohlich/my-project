class UserDataMock {
  constructor () {
    this.data = [
                {
                  Name: 'Julia',
                  Email: 'juliasfrohlich@hotmail.com',
                  Password: '123',
                  Attribution: 'Dev',
                  Status: 'Ativa' ,
                },
                {
                  Name: 'Yumi',
                  Email: 'yumicadela18@hotmail.com',
                  Password: '123',
                  Attribution: 'Tester',
                  Status: 'Ativa' ,
                },
                {
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