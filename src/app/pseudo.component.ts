import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pseudo',
    template:`
        <sandbox>
        <div class="col-md-6 sandbox-content">
            <div class="sandbox-inner" [ngClass]="{'triangle':triangle}">
                <div class="box before after" [ngClass]="{'before':before,'after':after}">
                    An inner content!    
                </div>
            </div>
        </div>
                    
        <div class="col-md-6">
            <div class="jumbotron">
                <div class="btn btn-success" (click)="toggleBefore()">toggle ::before</div>
                <div class="btn btn-success" (click)="toggleAfter()">toggle ::after</div>
                <div class="btn btn-success" (click)="toggleTriangle()">toggle ::after (triangle)</div>
                <pre>box::before: &#123; content:'*'; color: 'red' &#125;</pre>
                <pre>box::after: &#123; content:'123'; color: 'red' &#125;</pre>
                <pre>box::selection:&#123;color:yellow;background:black;&#125;</pre>
            </div>
        </div>
        
        </sandbox>
    `,
    styles: [`
        .btn {
            margin-bottom: 10px;
        }
        .sandbox-inner {
            justify-content: center;
            display: flex;
            align-items: center;
            min-height:400px;
        }
        .box {
            width:400px;
            height: 100px;
            background: lavender;
            line-height: 100px;
            text-align: center;
        }
        .inner-box {
            width:50px;
            height: 100px;
            background: #00d6fa;
            display: inline;
            font-size: 40px;
        }
        .box.before::before {
            content: '*';
            font-size: 30px; 
            color:red;                       
        }
        .box.after::after {
            content: '123';
            font-size: 30px;
            color:red;
        }
        .box::selection {
            color:yellow;
            background:black;
        }
        .sandbox-inner.triangle::after {
            content:'';
              width: 0; 
              height: 0; 
              border-top: 10px solid transparent;
              border-bottom: 10px solid transparent;
              
              border-left: 10px solid lavender;
        }
    `]
})
export class PseudoComponent implements OnInit {

    before:boolean = false;
    after:boolean = false;
    triangle:boolean = false;

    toggleBefore() {
        this.before = !this.before;
    }
    toggleAfter() {
        this.after = !this.after;
    }
    toggleTriangle() {
        this.triangle = !this.triangle;
    }


    constructor() { }

    ngOnInit() { }

}