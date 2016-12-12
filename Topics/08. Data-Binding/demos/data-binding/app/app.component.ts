import { Component } from '@angular/core';

@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html',
    styles: [`ul{
        font-size: 20px;
        list-style-type: 'one;
    }
    li{
        display: inline-block;
        margin: 10px;
    }
    .active{
        color: white;
        background-color: gray;
    }`]
})
export class AppComponent {}
