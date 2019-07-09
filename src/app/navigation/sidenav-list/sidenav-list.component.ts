import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../auth/store/auth.reducer';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() didNavigate = new EventEmitter<boolean>();
  isLoggedIn: boolean;

  constructor(private store: Store<{ auth: AuthState }>) {
  }

  ngOnInit() {
    this.store.select('auth').subscribe((state) => {
      this.isLoggedIn = state.isAuthenticated;
    });
  }


  onNavigate() {
    this.didNavigate.emit(true);
  }

}
