import { AfterViewInit, Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentDirective } from '../../directives/dynamic-component.directive';
import { LoginComponent } from '../../pages/login/login.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild(LoginComponent) dynamic!: LoginComponent;

  modalTitle: string = '';
  isActive = false;

  constructor(private modalService: ModalService) { }

  ngAfterViewInit(): void {

    console.log('Values on ngAfterViewInit():');
    console.log("title:", this.dynamic);

    this.modalService._openModal$.subscribe((component: any) => {
      console.log('aqui')
      if(component === null){
        this.isActive = false;
        return
      }

      this.isActive = true;
    });
  }

  generateComponent(component: any):void{



  }

  ngOnInit(): void {

  }

  closeModal(): void {
    this.modalService.closeModal();
  }


}
