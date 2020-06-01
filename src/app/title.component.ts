import { Component } from '@angular/core';

@Component({
    selector: 'mw-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})

export class TitleComponent {

    peoples = [{
        name: "Fabio",
        age: 30,
        value: true
    },
    { 
        name: "Robin",
        age: 25,
        value: false
    },
    {
        name: "Adalberto",
        age: 40,
        value: true


    },{
        name: "ADSDAS",
        age: null,
        value: false

    }]

    addClass(peoples){
        const addClass = document.querySelector(".col");
        addClass.classList.add(peoples);
        // let index = peoples.findIndex(x => x.LastName === name);
        // console.log(index);
        // return index;

    }
}
