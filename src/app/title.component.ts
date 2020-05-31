import { Component } from '@angular/core';

@Component({
    selector: 'mw-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})

export class TitleComponent {

    peoples = [{
        name: "Fabio",
        age: 30
    },
    {
        name: "Robin",
        age: 25
    },
    {
        name: "Adalberto",
        age: 40

    },{
        name: "ADSDAS",
        age: null

    }]


}
