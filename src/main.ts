import { PersonService } from './person-service';

let personService = new PersonService();

personService.getPersonFullName();

personService.getPersonFullNameAsPromise()
             
