import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
}

interface Establishment {
  id: number;
  name: string;
}

interface UserAccess {
  canRead: boolean;
  canModify: boolean;
}

@Component({
  selector: 'app-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.css']
})
export class AccessManagementComponent implements OnInit {
  users: User[] = [
    { id: 1, name: 'Utilisateur 1' },
    { id: 2, name: 'Utilisateur 2' },
    { id: 3, name: 'Utilisateur 3' }
  ];
  selectedUser: User | null = null;
  establishments: Establishment[] = [
    { id: 1, name: 'Etablissement 1' },
    { id: 2, name: 'Etablissement 2' },
    { id: 3, name: 'Etablissement 3' }
  ];
  userAccess: { [key: number]: UserAccess } = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    // Réinitialiser les droits de l'utilisateur sélectionné
    this.userAccess = {};
  }

  onAccessChanged(event: Event, establishmentId: number, accessType: 'read' | 'modify'): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (!this.userAccess[establishmentId]) {
      this.userAccess[establishmentId] = { canRead: false, canModify: false };
    }
    this.userAccess[establishmentId][accessType] = isChecked;
  }
}
