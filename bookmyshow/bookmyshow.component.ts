import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmyshow',
  templateUrl: './bookmyshow.component.html',
  styleUrls: ['./bookmyshow.component.css']
})
export class BookmyshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
movie:object[]=[
{"title":'Bahubali 2',"theater": ['jagadamba','vmax','melody']},
{"title":'spiderman',"theater": ['jagadamba','vekenteshwara','inox','cmr centeral']},
{"title":'edge of tommorrow',"theater":["joythi",'gokul','urvasi']},
{"title":'prites of the carebbien', "theater":['vmax','kennira','dhurga']}
];
lists:[string];
booking:object={};
tickets:number;
phone:string;
movielist(event){
  this.lists=event.theater;
  this.booking["title"]=event.title
}
theaterslist(event:string){
  this.booking['theater']=event;
}

booktickets(){
  this.booking['ticket']=this.tickets;
  this.booking['mobile']=this.phone;
  alert("booking succesfully");
}

}
