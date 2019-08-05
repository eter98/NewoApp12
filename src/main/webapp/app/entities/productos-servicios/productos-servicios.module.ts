import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp12SharedModule } from 'app/shared';
import {
  ProductosServiciosComponent,
  ProductosServiciosDetailComponent,
  ProductosServiciosUpdateComponent,
  ProductosServiciosDeletePopupComponent,
  ProductosServiciosDeleteDialogComponent,
  productosServiciosRoute,
  productosServiciosPopupRoute
} from './';

const ENTITY_STATES = [...productosServiciosRoute, ...productosServiciosPopupRoute];

@NgModule({
  imports: [NewoApp12SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProductosServiciosComponent,
    ProductosServiciosDetailComponent,
    ProductosServiciosUpdateComponent,
    ProductosServiciosDeleteDialogComponent,
    ProductosServiciosDeletePopupComponent
  ],
  entryComponents: [
    ProductosServiciosComponent,
    ProductosServiciosUpdateComponent,
    ProductosServiciosDeleteDialogComponent,
    ProductosServiciosDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp12ProductosServiciosModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
