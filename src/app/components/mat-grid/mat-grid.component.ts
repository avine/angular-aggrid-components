import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user.model';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-mat-grid',
  templateUrl: './mat-grid.component.html',
  styleUrls: ['./mat-grid.component.scss']
})
export class MatGridComponent implements OnInit {
  dataSource: User[];

  displayedColumns = [
    'firstName',
    'lastName',
    'email',
    'role',
    'disabled'
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe(users => this.dataSource = users);
  }
}
