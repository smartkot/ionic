import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'counter',
    templateUrl: 'counter.html'
})
export class CounterComponent {
    @Input() count: number = 0;
    @Output() countChanged: EventEmitter<any>;

    constructor() {
        this.countChanged = new EventEmitter();
    }

    increment($event): void {
        this.count += 1;
        this.countChanged.emit({
            'countPrev': this.count - 1,
            'countCurrent': this.count,   
        });
    }

    decrement($event): void {
        if (this.count > 0) {
            this.count -= 1;
        }
        this.countChanged.emit({
            'countPrev': this.count + 1,
            'countCurrent': this.count,   
        });
    }
}