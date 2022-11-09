import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output,
    OnChanges,
    ViewEncapsulation,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    ElementRef,
  } from '@angular/core';
  
  @Component({
    selector: 'app-item-cards',
    templateUrl: './item-cards.component.html',
    styleUrls: ['./item-cards.component.scss'],
    providers: [],
  })
  export class ItemCardsComponent
    implements
      OnInit,
      OnChanges,
      DoCheck,
      AfterContentChecked,
      AfterContentInit,
      OnDestroy
  {
    @Input() items: { itemName: string; itemStatus: string };
    @Input() status: any;
    @ViewChild('heading', { static: true }) header: ElementRef;
  
    newItemStatus: string = '';
  
    constructor() {}
  
    ngOnInit(): void {
    }
    ngOnChanges(changes: SimpleChanges): void {
    }
    ngDoCheck() {
    }
    ngAfterContentInit(): void {
    }
    ngAfterViewInit(): void {
    }
    ngAfterContentChecked(): void {
    }
    ngOnDestroy(): void {
    }
  }