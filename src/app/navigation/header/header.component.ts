import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../../auth/store/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggledSidenav = new EventEmitter<boolean>();
  title = 'Lloyd in Development';
  author = 'Lloyd Nicholson';
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private store: Store<{ auth: AuthState }>) {
  }

  ngOnInit() {
    this.store.select('auth').subscribe((data) => {
      this.isLoggedIn = data.isAuthenticated;
    });
  }

  onToggle() {
    this.toggledSidenav.emit(true);
  }

  onLogout() {
    this.authService.logout();
  }
}
