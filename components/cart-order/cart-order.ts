import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'cart-order',
    templateUrl: 'cart-order.html'
})
export class CartOrderComponent {

    @Input() title: string;
    @Input() quantity: number = 0;
    @Input() price: number = 0;
    @Input() image: string;
    @Output() cost: EventEmitter<any>;

    constructor() {
        this.cost = new EventEmitter();
    }
    
    clicked($event): void {
        this.cost.emit({
            'costPrev': $event.countPrev * this.price,
            'costCurrent': $event.countCurrent * this.price
        });
    }
}