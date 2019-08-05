/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { NewoApp12TestModule } from '../../../test.module';
import { ComentarioBlogDeleteDialogComponent } from 'app/entities/comentario-blog/comentario-blog-delete-dialog.component';
import { ComentarioBlogService } from 'app/entities/comentario-blog/comentario-blog.service';

describe('Component Tests', () => {
  describe('ComentarioBlog Management Delete Component', () => {
    let comp: ComentarioBlogDeleteDialogComponent;
    let fixture: ComponentFixture<ComentarioBlogDeleteDialogComponent>;
    let service: ComentarioBlogService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NewoApp12TestModule],
        declarations: [ComentarioBlogDeleteDialogComponent]
      })
        .overrideTemplate(ComentarioBlogDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ComentarioBlogDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ComentarioBlogService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});