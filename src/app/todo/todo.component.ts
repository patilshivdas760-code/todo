import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from './models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoarr : Array <Itodo> = [
    {
    toditem : "angular",
    todoid : "123"   
  },
   {
    toditem : "js",
    todoid : "125"   
  },
   {
    toditem : "ts",
    todoid : "126"   
  },
   {
    toditem : "dsa",
    todoid : "152"   
  },
   {
    toditem : "css",
    todoid : "120"   
  },
   {
    toditem : "html",
    todoid : "120"   
  },
   {
    toditem : "java",
    todoid : "129"   
  },
]
  
@ViewChild ('todoitem') todoitem ! : ElementRef

  ngOnInit(): void {
  }
ontodoadd() {
  let todoobj : Itodo ={
    toditem : this.todoitem.nativeElement.value,
    todoid : Date.now().toString()
  }

  this.todoitem.nativeElement.value =''
  console.log (todoobj);


  this.todoarr.push(todoobj)
}

trackbyid (index: number , todo : Itodo){
  return todo.todoid
}

removetodo(id:string){
  let getINDEX = this.todoarr.findIndex(t=>t.todoid ===id)
  this.todoarr.splice(getINDEX,1)
}

}
