import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NavComponent, AsideComponent, RouterModule, FooterComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {}
