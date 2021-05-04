import {insertDog, deleteDogByName} from '../controllers/dogs'

test ('Testa se um Dog é inserido no banco', async () => {
  //arrange
  const dog = {
    "name": "Pituca",
    "age": "1",
    "owner": "Julia",
    "breed": "srd"
}
  //act
  const insertedDog = await insertDog(dog)

  //assert
  expect(insertedDog.response.name).not.toBeNull()
})