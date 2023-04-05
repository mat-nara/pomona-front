import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MasseComponent } from './masse/masse.component';
import { FlagComponent } from './flag/flag.component';
import { RubriquesComponent } from './rubriques/rubriques.component';
import { MontantsComponent } from './montants/montants.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { BulrubriqueComponent } from './bulrubrique/bulrubrique.component';
import { AdministrationComponent } from './administration/administration.component';
import { AvereesComponent } from './averees/averees.component';
import { EchantillonageComponent } from './echantillonage/echantillonage.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { AccessManagementComponent } from './access-management/access-management.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'masse', component: MasseComponent },
  { path: 'flag', component: FlagComponent },
  { path: 'rubriques', component: RubriquesComponent },
  { path: 'montants', component: MontantsComponent },
  { path: 'averees', component: AvereesComponent },
  { path: 'bulletin', component: BulletinComponent },
  { path: 'bulrubrique', component: BulrubriqueComponent },
  { path: 'echantillonnage', component: EchantillonageComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'testcomps', component: TestcompComponent },
  { path: 'accessm', component: AccessManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
