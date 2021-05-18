import { Component, OnInit } from '@angular/core';

import { User } from './../user'

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})

export class TemplateFormsComponent implements OnInit {
  usersList : Array<User>= [
    {
      name: 'Paco',
      surname: 'Fernández', 
      age: 32, 
      dni: '32115476V',
      birthday: '30/04/1989', 
      color: 'verde',
      gender: 'hombre',
    }
  ]

  user : User = {
    name: '',
    surname: '', 
    age: 0, 
    dni: '',
    birthday: 'dd/mm/aaaa', 
    color: '',
    gender: ''
  }

  position : number = 0
  action   : string = 'insert'

  constructor() { }

  ngOnInit(): void { }

  registerUser() : void {

    if( this.action === 'insert'){
      this.usersList.push( this.user )
    }else{
      this.usersList[this.position] = this.user
    }
   
    this.user = {
      name: '',
      surname: '', 
      age: 0, 
      dni: '',
      birthday: 'dd/mm/aaaa', 
      color: '',
      gender: '',
    }
   }

  edit( editPosition : number ) : void {
    this.user  = this.usersList[editPosition]
    this.action   = 'edit'
    this.position = editPosition
  }
  delete( deletePosition : number ) :void {
    this.usersList.splice( deletePosition , 1 )
  }
}
