import { Component, Input } from '@angular/core';
import { IItems } from 'src/app/Models/Item';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})

export class ItemComponent {
    public showDesc = false;
    @Input() item : IItems;


    public Description() {
       this.showDesc = !this.showDesc;
    }

    public Buy(){
        this.item.totalCount -= 1;
    }
 }
