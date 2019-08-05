import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp12SharedModule } from 'app/shared';
import {
  CategoriaContenidosComponent,
  CategoriaContenidosDetailComponent,
  CategoriaContenidosUpdateComponent,
  CategoriaContenidosDeletePopupComponent,
  CategoriaContenidosDeleteDialogComponent,
  categoriaContenidosRoute,
  categoriaContenidosPopupRoute
} from './';

const ENTITY_STATES = [...categoriaContenidosRoute, ...categoriaContenidosPopupRoute];

@NgModule({
  imports: [NewoApp12SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CategoriaContenidosComponent,
    CategoriaContenidosDetailComponent,
    CategoriaContenidosUpdateComponent,
    CategoriaContenidosDeleteDialogComponent,
    CategoriaContenidosDeletePopupComponent
  ],
  entryComponents: [
    CategoriaContenidosComponent,
    CategoriaContenidosUpdateComponent,
    CategoriaContenidosDeleteDialogComponent,
    CategoriaContenidosDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp12CategoriaContenidosModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
