import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";


interface IUser {
  id: number;
  name?: string;
  email?: string;
  password?: string
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',

})
export class ProfileComponent {
  user: IUser | undefined;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      if (userId) {
        this.user = this.authService.getUserId()
      }
    });
  }

}
