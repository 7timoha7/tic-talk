import {Component, inject} from '@angular/core';
import {ProfileService} from "../../data/services/profile.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService);

  ngOnInit() {
    console.log('ngOnInit');
    this.profileService.getMe().subscribe(val => {
      console.log(val)
    })
  }
}
