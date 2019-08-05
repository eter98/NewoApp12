import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp12SharedModule } from 'app/shared';
import {
  MargenNewoEventosComponent,
  MargenNewoEventosDetailComponent,
  MargenNewoEventosUpdateComponent,
  MargenNewoEventosDeletePopupComponent,
  MargenNewoEventosDeleteDialogComponent,
  margenNewoEventosRoute,
  margenNewoEventosPopupRoute
} from './';

const ENTITY_STATES = [...margenNewoEventosRoute, ...margenNewoEventosPopupRoute];

@NgModule({
  imports: [NewoApp12SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    MargenNewoEventosComponent,
    MargenNewoEventosDetailComponent,
    MargenNewoEventosUpdateComponent,
    MargenNewoEventosDeleteDialogComponent,
    MargenNewoEventosDeletePopupComponent
  ],
  entryComponents: [
    MargenNewoEventosComponent,
    MargenNewoEventosUpdateComponent,
    MargenNewoEventosDeleteDialogComponent,
    MargenNewoEventosDeletePopupComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp12MargenNewoEventosModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}