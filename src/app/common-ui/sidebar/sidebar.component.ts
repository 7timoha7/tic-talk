import {Component, inject} from '@angular/core';
import {ProfileService} from "../../data/services/profile.service";
import {AsyncPipe, JsonPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {SubscriberCardComponent} from "../subsriber-card/subscriber-card.component";
import {RouterLink} from "@angular/router";
import {firstValueFrom} from "rxjs";
import {ImgUrlPipe} from "../../helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SvgIconComponent,
    NgForOf,
    SubscriberCardComponent,
    AsyncPipe,
    JsonPipe,
    RouterLink,
    ImgUrlPipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribersShortList()
  me = this.profileService.me

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: 'profile/me'
    },
    {
      label: 'Чаты',
      icon: 'chats',
      link: 'chats'
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search'
    },
  ]


  ngOnInit() {
    firstValueFrom(this.profileService.getMe())
  }
}
