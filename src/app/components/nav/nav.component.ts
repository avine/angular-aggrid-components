import { Component, OnInit } from '@angular/core';
import { RoutePaths } from '@app/route-paths';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links = [
    { path: `/${RoutePaths.V1}`, label: 'Simple' },
    { path: `/${RoutePaths.V2}`, label: 'Advanced' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
