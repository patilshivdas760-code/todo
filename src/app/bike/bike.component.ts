import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ibike } from './modules/bike';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent implements OnInit {

  bikearr: Array <Ibike> = [
    {
      bikename: "splender",
      bikeid: " 123 "
    },
     {
      bikename: "avenger",
      bikeid: " 124"
    },
     {
      bikename: "pulsar",
      bikeid: " 125 "
    },
    {
      bikename: "passion pro",
      bikeid: " 126"
    },
    {
      bikename: " GT ",
      bikeid: " 127 "
    }
  ]  
  
    @ViewChild ('biker') bikname ! : ElementRef
  ngOnInit(): void {
  }
  onbikeadd(){
    let bikeobj : Ibike ={
      bikename : this.bikname.nativeElement.value,
      bikeid : Date.now().toString()
    }
    this.bikname.nativeElement.value =''
    this.bikearr.push (bikeobj)
  }  
  trackbyid (index:number, bike : Ibike){
    return bike.bikeid
  }
 
  removebike(id:string){
    let getINDEX  = this.bikearr.findIndex(b=>b.bikeid === id)
    this.bikearr.splice(getINDEX,1)
  }

}
