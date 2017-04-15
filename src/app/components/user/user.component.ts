import { Component } from '@angular/core';

@Component({
  selector: 'user',
  moduleId: module.id,
  templateUrl: 'user.component.html'
})

export class UserComponent  { 
  name: string;
  message: string; 
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean; 

  constructor() {
      this.name = 'Siva Phaneendra';
      this.message = 'Welcome to Angular2';
      this.email = 'sivaphaneendra1@gmail.com';
      this.address = {
          doorNo: '2-13',
          fullAddress: 'Endluru,Ongole-523225'
      }
      this.hobbies = ['Learn new things', ' Reading books', ' Watching movies', ' Play/watch cricket'];
      this.showHobbies = false;
  }

  toggleHobbies = function(){
      this.showHobbies = !this.showHobbies;
  }

  addHobby = function(newHobby:any){
      this.hobbies.push(newHobby);
  }

  deleteHobby = function(index:number){
      this.hobbies.splice(index,1);
  }
}

interface Address{
    doorNo: string;
    fullAddress: string;
}