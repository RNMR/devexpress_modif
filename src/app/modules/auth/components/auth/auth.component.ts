import { Component } from "@angular/core";
import { AuthService, AppInfoService } from 'src/app/core/services';

@Component({
    selector:'rp-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.scss'],
})
export class AuthComponent{

  login = '';
  password = '';

  constructor(private authService: AuthService, public appInfo: AppInfoService) { }

  onLoginClick(args) {
    if (!args.validationGroup.validate().isValid) {
      return;
    }

    this.authService.logIn(this.login, this.password);

    args.validationGroup.reset();
  }
}