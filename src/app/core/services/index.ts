import { AuthService } from './auth.service';
import { ScreenService } from './screen.service';
import { AppInfoService } from './app-info.service';

export const CORE_PROVIDERS=[
  AuthService,
  ScreenService,
  AppInfoService,
]
export * from './app-info.service';
export * from './auth.service';
export * from './screen.service';
