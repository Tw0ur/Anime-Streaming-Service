import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Observable} from 'rxjs';
import {AuthService} from "../../service/auth/auth.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  auth: Observable<boolean>;
  id: string | null = null;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.auth = authService.isAuthenticated;
  }

  ngOnInit(): void {
    this.id = this.authService.getUserId();

    // Use paramMap to get the id from the route
    this.route.paramMap.subscribe(params => {
      // 'id' should match the parameter name defined in your route configuration
      this.id = params.get('id') || this.authService.getUserId();
    });
  }
}
