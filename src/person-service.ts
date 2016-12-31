declare var fetch: any;

export class PersonService {

  async getPersonFullNameUsingAsync() {
    let response = await fetch('./data/person.json');
    let person = await response.json();
    console.log(`${person.firstName} ${person.lastName}`);
  }

  async getPersonFullNameWithTryCatch() {
    try {
      let response = await fetch('./data/person2.json');
      let person = await response.json();
      console.log(`${person.firstName} ${person.lastName}`);
    }
    catch(e) {
      console.log('there was an error');
      console.log(e); 
    }
  }

  getPersonFullNameUsingThen() {
    return fetch('./data/person2.json')
           .then((response: any) => {
              return response.json();
           })
           .then((person: any) => {
             console.log(`${person.firstName} ${person.lastName}`);
           })
           .catch((e: any) => {
             console.log('error')
           })
           .then(() => {
             console.log('finally'); 
           })
  }
}