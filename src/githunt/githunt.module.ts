import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'shared/custom-material.module';
import { RouterModule } from '@angular/router';
import { GithuntContainer } from './containers/githunt.container';
import { SearchboxComponent } from './components/search-box/search-box.component';
import { ResultCellComponent } from './components/result-cell/result-cell.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { SearchEffects } from './store/effects';
import { ROUTES } from './configs';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CustomMaterialModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('searchs', reducers),
    EffectsModule.forFeature([SearchEffects])
  ],
  exports: [GithuntContainer],
  declarations: [GithuntContainer, SearchboxComponent, ResultCellComponent],
  providers: []
})
export class GithuntModule {}
