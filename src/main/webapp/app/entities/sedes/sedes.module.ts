import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { NewoApp12SharedModule } from 'app/shared';
import {
  SedesComponent,
  SedesDetailComponent,
  SedesUpdateComponent,
  SedesDeletePopupComponent,
  SedesDeleteDialogComponent,
  sedesRoute,
  sedesPopupRoute
} from './';

const ENTITY_STATES = [...sedesRoute, ...sedesPopupRoute];

@NgModule({
  imports: [NewoApp12SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [SedesComponent, SedesDetailComponent, SedesUpdateComponent, SedesDeleteDialogComponent, SedesDeletePopupComponent],
  entryComponents: [SedesComponent, SedesUpdateComponent, SedesDeleteDialogComponent, SedesDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp12SedesModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
