import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent, AUTH_COMPONENTS } from './components';

export const routes : Routes=[
    {
        path:'',
        component: AuthComponent,
    },
]
@NgModule({
    imports:[SharedModule, RouterModule.forChild(routes)],
    declarations:[...AUTH_COMPONENTS],
    exports:[...AUTH_COMPONENTS],
})
export class AuthModule{
    
}