import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

export const canActivateAuth = () => {
  const inLoggedIn = inject(AuthService).isAuth

  if (inLoggedIn) {
    return true
  }

  return inject(Router).createUrlTree(['/login'])
}
