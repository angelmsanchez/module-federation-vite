import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './components';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeIndexComponent],
})
export class HomeModule {}
