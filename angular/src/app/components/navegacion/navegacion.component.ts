import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css',
})


export class NavegacionComponent {
  loginService: LoginService = inject(LoginService);
  logout() {
  this.loginService.logout();
  };
  }

