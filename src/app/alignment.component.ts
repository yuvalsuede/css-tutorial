import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'alignment',
    template: `
        <sandbox>
            <div class="col-md-6 sandbox-content">
                <div class="sandbox-inner" 
                    [style.text-align]="textAlign"
                    [style.line-height]="lineHeight"
                    [style.display]="parentDisplay"
                    [style.vertical-align]="parentVerticalAlign"
                >
                    
                    <ng-container *ngIf="showDiv"><div class="box" 
                        [style.position]="position" 
                        [style.left]="childLeft" 
                        [style.margin-left]="childMarginLeft"
                        [style.top]="childTop"                        
                        [style.margin-top]="childMarginTop"
                        [style.margin]="childMargin">
                        
                        
                    </div>
                    </ng-container>
                    <ng-container *ngIf="showText">I am a text</ng-container>                    
                    <ng-container *ngIf="showImg"><img [src]="'../assets/angular.png'" width="100" alt=""></ng-container>
                    
                </div>
            </div>
                        
            <div class="col-md-6">
                <div class="jumbotron">
                    <div class="btn btn-warning" (click)="toggleText()">toggleText</div>
                    <div class="btn btn-warning" (click)="toggleImg()">toggleImg</div>
                    <div class="btn btn-warning" (click)="toggleDiv()">toggleDiv</div>
                    <div>
                        <h3>parent</h3>
                        <div class="btn btn-primary" (click)="setTextAlign('center')">text-align: center</div>                    
                        <div class="btn btn-primary" (click)="setTextAlign('right')">text-align: right</div>                    
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">display</span>
                            <input [(ngModel)]="parentDisplay" type="text" class="form-control" placeholder="display" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">line-height</span>
                            <input [(ngModel)]="lineHeight" type="text" class="form-control" placeholder="line-height" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">vertical-align</span>
                            <input [(ngModel)]="parentVerticalAlign" type="text" class="form-control" placeholder="vertical-align" aria-describedby="basic-addon1">
                        </div>
                    </div>
                    <div>
                        <h3>children</h3>
                        <div class="btn btn-primary" (click)="setPosition('absolute')">position: absolute</div>                    
                        <div class="btn btn-primary" (click)="setPosition('relative')">position: relative</div>
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">left</span>
                            <input [(ngModel)]="childLeft" type="text" class="form-control" placeholder="left" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">margin-left</span>
                            <input [(ngModel)]="childMarginLeft" type="text" class="form-control" placeholder="margin-left" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">top</span>
                            <input [(ngModel)]="childTop" type="text" class="form-control" placeholder="top" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">margin-top</span>
                            <input [(ngModel)]="childMarginTop" type="text" class="form-control" placeholder="margin-top" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">margin</span>
                            <input [(ngModel)]="childMargin" type="text" class="form-control" placeholder="margin" aria-describedby="basic-addon1">
                        </div>
                    </div>
                                                            
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
export class AlignmentComponent implements OnInit {
    position:string;
    @Input('lineHeight') lineHeight:any;
    @Input('parentDisplay') parentDisplay:any;
    @Input('parentVerticalAlign') parentVerticalAlign:any;



    textAlign:string;
    showText:boolean = false;
    showImg:boolean = false;
    showDiv:boolean = false;

    @Input('childLeft') childLeft:any;
    @Input('childMarginLeft') childMarginLeft:any;
    @Input('childMarginTop') childMarginTop:any;
    @Input('childTop') childTop:any;
    @Input('childMargin') childMargin:any;

    toggleDiv() {
        this.showDiv = !this.showDiv;
    }
    toggleImg() {
        this.showImg = !this.showImg;
    }
    toggleText() {
        this.showText = !this.showText;
    }
    setTextAlign(align) {
        this.textAlign = align;
    }
    setPosition(position) {
        this.position = position;
    }

    constructor() { }

    ngOnInit() { }

}