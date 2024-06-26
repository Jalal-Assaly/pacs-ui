import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'PACS App';
  tabItems!: MenuItem[];
  loggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.tabItems = [
      {
        label: 'Home',
        routerLink: 'home'
      },
      {
        label: 'User Credentials',
        icon: 'pi pi-fw pi-user',
        items: [
          { label: 'Employee Credentials', icon: 'pi pi-fw pi-user', routerLink: '/user-credentials/employees' },
          { label: 'Visitor Credentials', icon: 'pi pi-fw pi-users', routerLink: '/user-credentials/visitors' }
        ]
      },
      {
        label: 'Attributes',
        icon: 'pi pi-objects-column',
        items: [
          { label: 'Access Points', icon: 'pi pi-fw pi-sign-in', routerLink: '/attributes-management/access-points' },
          { label: 'Employees', icon: 'pi pi-fw pi-user', routerLink: '/attributes-management/employees' },
          { label: 'Visitors', icon: 'pi pi-fw pi-users', routerLink: '/attributes-management/visitors' },
        ]
      },
      {
        label: 'Access Policies',
        icon: 'pi pi-lock',
        routerLink: '/access-policies'
      },
      {
        label: 'Visitor Management',
        icon: 'pi pi-id-card',
        routerLink: '/visitor-management'
      },
      {
        label: 'Access Logs',
        icon: 'pi pi-file-check',
        items: [
          { label: 'Employee Logs', icon: 'pi pi-fw pi-user', routerLink: '/access-logs/employees' },
          { label: 'Visitor Logs', icon: 'pi pi-fw pi-users', routerLink: '/access-logs/visitors' }
        ]
      }
    ];
  }
}