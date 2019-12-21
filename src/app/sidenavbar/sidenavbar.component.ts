import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  public titlearray:any = [{name:"Title1",icon:"Home"},
  {name:"Title2",icon:"Home"},
  {name:"Title3",icon:"Home"},
  {name:"Title4",icon:"Home"},
  {name:"Title5",icon:"Home"},
  {name:"Title6",icon:"Home"}];
  constructor() { }

  ngOnInit() {
  }

}
