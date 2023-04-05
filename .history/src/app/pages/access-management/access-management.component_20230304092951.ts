import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  permissions: Permission[];
}

interface Permission {
  id: number;
  name: string;
  canEdit: boolean;
  canView: boolean;
  establishments: Establishment[];
}

interface Establishment {
  id: number;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.css']
})
export class AccessManagementComponent implements OnInit {

  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      permissions: [
        {
          id: 1,
          name: 'Sales',
          canEdit: true,
          canView: true,
          establishments: [
            {
              id: 1,
              name: 'Headquarters',
              selected: true
            },
            {
              id: 2,
              name: 'Branch Office',
              selected: false
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Jane Doe',
      permissions: [
        {
          id: 2,
          name: 'Marketing',
          canEdit: false,
          canView: true,
          establishments: [
            {
              id: 1,
              name: 'Headquarters',
              selected: true
            },
            {
              id: 3,
              name: 'Regional Office',
              selected: false
            }
          ]
        }
      ]
    }
  ];

  selectedUser: User = null;

  constructor() { }

  ngOnInit(): void {
  }

  onUserSelected(user: User): void {
    this.selectedUser = user;
  }

  onPermissionSelected(permission: Permission): void {
    permission.canView = !permission.canView;
  }

  onEstablishmentSelected(establishment: Establishment): void {
    establishment.selected = !establishment.selected;
  }

  onSave(): void {
    console.log('Saved!');
  }

}
