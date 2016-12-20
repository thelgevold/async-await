declare var fetch: any;

export class PersonService {

  async getPersonFullNameUsingAsync() {
    let response = await fetch('./data/person.json');
    let person = await response.json();
    console.log(`${person.firstName} ${person.lastName}`);
  }

  getPersonFullNameUsingThen() {
    return fetch('./data/person.json')
           .then((response: any) => {
              return response.json();
           })
           .then((person: any) => {
             console.log(`${person.firstName} ${person.lastName}`);
           })
  }
}