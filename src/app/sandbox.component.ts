import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sandbox',
    template: `
    <div class="container">
        <div class="panel panel-default">
          <div class="panel-body">
            <ng-content></ng-content>
          </div>
        </div>
    </div>`
        ,
    styles: [`
        .panel-body {
            min-height:400px;
        }
    `]
})
export class SandboxComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}