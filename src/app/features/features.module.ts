import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { SearchInputComponent } from './movie/search-input/search-input.component';

@NgModule({
  imports: [FeaturesRoutingModule,SharedModule],
  declarations: [
    SearchInputComponent,
  ],
  providers: []
})
export class FeaturesModule {
}
