import { faker} from '@faker-js/faker'
export const  getFakeUser = () =>{
return{
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zipCode: faker.person.zipCode()



}
} 