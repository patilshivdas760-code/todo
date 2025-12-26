import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from './models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

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
 isInEditmode: boolean = false
 editID! : string
  
@ViewChild ('todoitem') todoitem ! : ElementRef
 
 
constructor  (
  private _snackbar : MatSnackBar
){}
    
  ngOnInit(): void {
  }
ontodoadd() {

  if( this.todoitem.nativeElement.value.length> 0 ){
            
    let todoobj : Itodo ={
    toditem : this.todoitem.nativeElement.value,
    todoid : Date.now().toString()
  }
  this.todoitem.nativeElement.value =''
  this.todoarr.push(todoobj)

  this._snackbar.open(`this  todo item with id ${todoobj.todoid} created succefully`,"close",{
    horizontalPosition : 'center',
    verticalPosition: 'top',
    duration: 1000
  })
  }

}

trackbyid (index: number , todo : Itodo){
  return todo.todoid
}

removetodo(id:string){
  let getINDEX = this.todoarr.findIndex(t=>t.todoid ===id)
  this.todoarr.splice(getINDEX,1)

  this._snackbar.open(`the todo with id ${id} remove succesfully`,'close',{
    horizontalPosition : 'center',
    verticalPosition : 'top',
    duration : 3000
  })
}

onedit(t:Itodo){
  this.editID = t.todoid
   this.todoitem.nativeElement.value = t.toditem
   this.isInEditmode = true;
}

onupdate(){
  let updated_todo : Itodo = {
    toditem : this.todoitem.nativeElement.value,
    todoid : this.editID
  }
  this.todoitem.nativeElement.value =''
  let getINDEX = this.todoarr.findIndex(t=>t.todoid === updated_todo.todoid)

  this.todoarr[getINDEX]= updated_todo
  this.isInEditmode = false
  this._snackbar.open(`the todo item with id ${this.editID}`,"close",{
    horizontalPosition : 'center',
    verticalPosition : 'top',
    duration : 2000
  })
}


}







