import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp12SharedModule } from 'app/shared';
import {
  BeneficioComponent,
  BeneficioDetailComponent,
  BeneficioUpdateComponent,
  BeneficioDeletePopupComponent,
  BeneficioDeleteDialogComponent,
  beneficioRoute,
  beneficioPopupRoute
} from './';

const ENTITY_STATES = [...beneficioRoute, ...beneficioPopupRoute];

@NgModule({
  imports: [NewoApp12SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    BeneficioComponent,
    BeneficioDetailComponent,
    BeneficioUpdateComponent,
    BeneficioDeleteDialogComponent,
    BeneficioDeletePopupComponent
  ],
  entryComponents: [BeneficioComponent, BeneficioUpdateComponent, BeneficioDeleteDialogComponent, BeneficioDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp12BeneficioModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
