import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'cart',
    templateUrl: 'cart.html',
})
export class CartComponent implements OnInit {

    private _title: string = 'Корзина';
    private _mockData: any;
    private _summaryCost: number = 0;

    constructor() { }

    ngOnInit() {
        this._mockData = [
            {title: 'Название 1', price: 450, quantity: 1, image: 'assets/backend/food1.jpg'},
            {title: 'Название 2', price: 380, quantity: 1, image: 'assets/backend/food2.jpg'},
            {title: 'Название 3', price: 590, quantity: 2, image: 'assets/backend/food3.jpg'},
        ];

        this._summaryCost = this._mockData.reduce(
            (sum, item) => {
                return sum + item.price * item.quantity;
            }, 0);
    }
    
    clicked($event) {
        this._summaryCost += $event.costCurrent - $event.costPrev;
        if (this._summaryCost < 0) {
            this._summaryCost = 0;
        }

    }
}
