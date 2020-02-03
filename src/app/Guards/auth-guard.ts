import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsersServiceService } from '../services/users-service.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private usersService: UsersServiceService, private route: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.usersService.currentUserObject
        if (currentUser && currentUser.profile == 2) {
            return true;
        }

        this.usersService.logout();
        this.route.navigate(['/SignIn'], { queryParams: { returnUrl: state.url } });
        return false;
    }

}