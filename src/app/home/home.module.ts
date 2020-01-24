import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoitingModule } from './home-routing.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoitingModule
    ]
})
export class HomeModule {

}
