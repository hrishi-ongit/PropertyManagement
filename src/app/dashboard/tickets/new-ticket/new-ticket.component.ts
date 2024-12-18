import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itickets } from '../../../shared/interface/shared.interface';
import { TICKETS } from '../../../shared/tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('formRef') form?: ElementRef<HTMLFormElement>;

  @Output() add = new EventEmitter<Itickets>();
  //add = output<{title: string, text: string}>();
  

  //Data binding with Template :-
  //1.Two way binding with [(ngModel)]
  
  //2.Template variables and refference's
  //Store a reference in the template as #variable and pass via method with type HTMLFormElement
  // onSubmit(input: HTMLInputElement){
  //   // onSubmit(input: any or string..excepted this way when tempalte sends titleInput.value){
  //   console.log(input.value);
  //   }

  // onSubmit(input: HTMLInputElement, form : HTMLFormElement){
  //   // onSubmit(input: any or string..excepted this way when tempalte sends titleInput.value){
  //   console.log(input.value);
  //   form.reset();
  // }

  

  // 3.@ViewChild of type ElementRef<HTMLFormElement>; line 12
  onSubmit(input: string, text: string){
      // onSubmit(input: any or string..excepted this way when tempalte sends titleInput.value){
      this.form?.nativeElement.reset();
      this.add.emit({
        title: input,
        request: text,
        status : 'open',
        id : TICKETS.length + 1 + ''
      });
    }

  // 4.@ContentChild('input') private control: ElementRef<HTMLInputElement | HTMLTextAreaElement>//this is control.ts
  // and in app-control template >> use the reference variable ..#var to the expected element


  ngOnInit(): void {
    //Imp note, In ngOnInit those variables that accessed through @ViewChild/ViewChildren, are not available or are undefined. ex,
    // console.log('NgOnInit');
    // console.log(this.form?.nativeElement, 'Init');//undefined init on first load
  }

  ngAfterViewInit(): void {
    // console.log(this.form?.nativeElement,'After');//form, Afterview init on first load
    // console.log('After view init');
  }
  //Use @ViewChild in ngAfterViewInit only
  // and @ContentChild in ngAfterContentInit

    // constructor(){
  //   afterRender(() => {
  //     console.log('After render')
  //   });//listens to all changes in entier app
  //   afterNextRender(() => {
  //     console.log('AfterNextrender')
  //   });//after next change i eniter app
  // }




}
