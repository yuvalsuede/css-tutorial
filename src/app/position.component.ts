import {Component, OnInit, ViewChild, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'position',
    template:`
        
        <sandbox>
            <div class="col-md-6 sandbox-content">
                <div class="sandbox-inner">
                    <div *ngIf="showDiv2" class="myDiv" style="width:100px;height:100px;background:red;"></div>
                    <div class="myDiv" [ngStyle]="Styles"></div>
                    
                </div>                            
            </div>
            
            <div class="col-md-6">
                <div class="jumbotron">
                    <div class="btn btn-primary toggleDiv" (click)="toggleDiv()">toggle div</div>                   
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">position</span>
                      <input [(ngModel)]="position" type="text" class="form-control" placeholder="position" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">top</span>
                      <input [(ngModel)]="top" type="text" class="form-control" placeholder="top" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">left</span>
                      <input [(ngModel)]="left" type="text" class="form-control" placeholder="left" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">bottom</span>
                      <input [(ngModel)]="bottom" type="text" class="form-control" placeholder="bottom" aria-describedby="basic-addon1">
                    </div>
                    
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">right</span>
                      <input [(ngModel)]="right" type="text" class="form-control" placeholder="right" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">width</span>
                      <input [(ngModel)]="width" type="text" class="form-control" placeholder="width" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">height</span>
                      <input [(ngModel)]="height" type="text" class="form-control" placeholder="height" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">zindex</span>
                      <input [(ngModel)]="zindex" type="text" class="form-control" placeholder="zindex" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">float</span>
                      <input [(ngModel)]="float" type="text" class="form-control" placeholder="float" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                      <span class="input-group-addon" id="basic-addon1">margin</span>
                      <input [(ngModel)]="margin" type="text" class="form-control" placeholder="margin" aria-describedby="basic-addon1">
                    </div>
                </div>
            </div>
            
        </sandbox>
    `,
    styles:[`
        :host {
            position:relative;
        }
        .myDiv {
            background: blue;
        }
        .input-group {
            margin-bottom: 10px;
        }
        .sandbox-content {
        }
        .sandbox-inner {
            width: 100%;
            height: 500px;
            background-color: #efefef;
            position: relative;
        }
        .toggleDiv {
            position:absolute;
            right: 20px;
            top: 5px;
        }
    `]
})
export class PositionComponent implements OnInit {

    showDiv2:boolean = false;

    @Input('top') top:any = 'auto'
    @Input('bottom') bottom:any;
    @Input('left') left:any;
    @Input('right') right:any;
    @Input('position') position:any;
    @Input('width') width: any = '100px';
    @Input('height') height:any = '100px';
    @Input('zindex') zindex:any = 0;
    @Input('float') float:any;
    @Input('margin') margin:any;

    get Styles() {
        return {
            'position': this.position,
            'left':this.left,
            'top': this.top,
            'right': this.right,
            'bottom': this.bottom,
            'width': this.width,
            'height': this.height,
            'z-index':this.zindex,
            'float':this.float,
            'margin':this.margin
        }
    }

    toggleDiv() {
        this.showDiv2 = !this.showDiv2;
    }

    constructor() { }

    ngOnInit() { }

}