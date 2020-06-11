import { Component } from '@angular/core';

@Component({
    selector: 'mw-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})

export class TitleComponent {
    

    peoples = [{
        id: 0,
        name: "Fabio",
        age: 30,
        value: true
    },
    {   id: 1,
        name: "Robin",
        age: 25,
        value: false
    },
    {   id: 2,
        name: "Adalberto",
        age: 40,
        value: true


    },{id: 3,
        name: "ADSDAS",
        age: null,
        value: false

    }]

    addClass(name){
        const addClass = document.querySelectorAll(".col h3");

        console.log(name);
        
        

    }
}
