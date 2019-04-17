import { Component, HostBinding, ViewEncapsulation } from "@angular/core";
import { ScreenService, AuthService, AppInfoService } from 'src/app/core/services';

@Component({
    selector: 'rp-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
  
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ') + ' centerCont';
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { }

  isAutorized() {
    return this.authService.isLoggedIn;
  }
}