import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynmpage',
  templateUrl: './dynmpage.component.html',
  styleUrls: ['./dynmpage.component.scss']
})
export class DynmpageComponent implements OnInit {

  public chart_array:any = [{name:"TITLE 1",desc:"lorusam ipsam",total:"500",year:"2019",color:"#35648b"},
  {name:"TITLE 2",desc:"lorusam ipsam",total:"500",year:"2019",color:"#35648b"},
  {name:"TITLE 3",desc:"lorusam ipsam",total:"500",year:"2019",color:"#35648b"},
  {name:"TITLE 1",desc:"lorusam ipsam",total:"500",year:"2019",color:"#35648b"},
  {name:"TITLE 2",desc:"lorusam ipsam",total:"500",year:"2019",color:"#35648b"},
  {name:"TITLE 3",desc:"lorusam ipsam",total:"500",year:"2019",color:"#35648b"},

];
  constructor() { }

  ngOnInit() {
  }

}
