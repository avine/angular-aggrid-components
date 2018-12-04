import { Component, OnInit } from '@angular/core';
import { RoutePaths } from '@app/route-paths';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links = [
    `/${RoutePaths.V1}`,
    `/${RoutePaths.V2}`,
  ];

  constructor() { }

  ngOnInit() {
  }

}
