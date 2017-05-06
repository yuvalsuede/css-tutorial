import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'visibility',
    template: `
        <sandbox>
            <div class="col-md-6 sandbox-content">
                <div class="sandbox-inner">
                    <div class="box" style="background:aqua;text-align: center;line-height: 100px;">I am div</div>
                    <div *ngIf="inDOM" class="box" [ngStyle]="{'display':display, 'visibility':visibility, 'opacity':opacity}"></div>

                </div>
            </div>
                        
            <div class="col-md-6">
                <div class="jumbotron">
                    <div class="btn btn-warning" (click)="toggleDisplay()">display:{{display}}</div>
                    <div class="btn btn-warning" (click)="toggleVisibility()">visibility:{{visibility}}</div>
                    <div class="btn btn-warning" (click)="toggleOpacity()">opacity:{{opacity}}</div>
                    <div class="btn btn-warning" (click)="toggleDOM()">*ngIf = {{inDOM}}</div>                                                            
                </div>
            </div>
        
        </sandbox>
    `,
    styles:[`
        .sandbox-inner {
            background: lightgray;
            width:400px;
            height:400px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .box {
            width:100px;
            height:100px;
            background: darkslateblue;
                /* 
              position: relative;
              top: 50%;
              transform: perspective(1px) translateY(-50%); 
              */
        }
        .btn {
            margin-bottom: 10px;
        }
        .input-group {
            margin-bottom: 10px;
        }
    `]
})
export class VisibilityComponent implements OnInit {
    display:string = 'block';
    visibility:string = 'visible';
    inDOM:boolean = true;
    opacity:any = 1;

    toggleOpacity() {
        if(this.opacity) {
            this.opacity = 0;
        } else {
            this.opacity = 1;
        }
    }

    toggleDOM() {
        this.inDOM = !this.inDOM;
    }

    toggleDisplay(){
        if(this.display == 'block') {
            this.display = 'none';
        } else {
            this.display = 'block';
        }
    }

    toggleVisibility(){
        if(this.visibility == 'visible'){
            this.visibility = 'hidden';
        } else {
            this.visibility = 'visible';
        }
    }

    constructor() { }

    ngOnInit() { }

}