import { Component, Input } from '@angular/core';
import { IItems } from 'src/app/Models/Item';


@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})

export class ItemsComponent {
    @Input() item : IItems;

    public showDesc = false;

    public Description() {
       this.showDesc = !this.showDesc;
    }

    public Buy(){
        this.item.totalCount -= 1;
    }
}