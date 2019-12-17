import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GroupPage } from '../group/group';
import { CertsPage } from '../certs/certs';
import { SavingsPage } from '../savings/savings';
import { ProjectsPage } from '../projects/projects';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GroupPage;
  tab3Root = SavingsPage;
  tab4Root = CertsPage;
  tab5Root = ProjectsPage;

  constructor() {

  }
}
