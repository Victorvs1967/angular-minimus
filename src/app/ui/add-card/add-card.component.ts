import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui/ui.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit, OnDestroy {

  darkMode: boolean;
  sub1: Subscription;

  constructor(public ui: UiService) { }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }

  ngOnInit(): void {
    this.sub1 = this.ui.darkModeState.subscribe(isDark => this.darkMode = isDark);
  }

}
