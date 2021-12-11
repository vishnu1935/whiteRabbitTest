import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  userList: any;
  displayedColumns: string[] = ['name', 'gender', 'dob','email','phone','username'];
  dataSource = new MatTableDataSource();
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('dataSource')) {
      this.userService.getUserList().subscribe((data: any) => {
        if (data.results) {
          localStorage.removeItem('dataSource');
          const resultArray = JSON.stringify(data.results)
          localStorage.setItem('dataSource', resultArray);
          this.userList = JSON.parse(localStorage.getItem('dataSource'));
          this.dataSource = this.userList;
          console.log(this.userList);
        }
      });
    }
    else {
      this.userList = JSON.parse(localStorage.getItem('dataSource'));
      this.dataSource = this.userList;
    }
   
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

}
