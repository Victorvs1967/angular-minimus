import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FbService } from './service/fb/fb.service';
import { UiService } from './service/ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  showMenu = false;
  darkModeActive: boolean;

  userEmail = '';

  constructor(public ui: UiService, public fb: FbService, public router: Router) {}
  
  loggedIn = this.fb.isAuth();
  sub1;

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }

  ngOnInit(): void {
    this.sub1 = this.ui.darkModeState.subscribe(value => this.darkModeActive = value);
    this.fb.auth.userData().subscribe(user => this.userEmail = user.email);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  logout() {
    this.toggleMenu();
    this.router.navigateByUrl('/login');
    this.fb.auth.signout();
  }

}
