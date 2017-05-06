import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'display',
    template:`
        <sandbox>
        <div class="col-md-6 sandbox-content">
            <div class="sandbox-inner">
                <div class="separator">
                    <div class="btn btn-success" (click)="lessSquares()">remove squares</div>
                    <div class="btn btn-success" (click)="moreSquares()">add squares</div>
                </div>
                <div class="parent" 
                        style="width: 400px;height:400px; background:pink;"
                        [style.display]="ParentDisplay" 
                        [style.flex-direction]="_flexDirection"
                        [style.justify-content]="_justifyContent"
                        [style.align-items]="_alignItems"
                        >
                    <div *ngFor="let square of _squares" class="child" [style.display]="ChildrenDisplay" [style.flex-grow]="_flexGrow"></div>                   
                    <div style="background:cadetblue;" class="child" [style.display]="ChildrenDisplay" [style.flex-grow]="_flexGrow2 || _flexGrow">
                    </div>        
                </div>
            </div>
        </div>
                    
        <div class="col-md-6">
            <div class="jumbotron">
                <h3>parent: {{ ParentDisplay }}</h3>
                <div>
                    <div class="btn btn-primary" (click)="setParentDisplay('block')">block</div>
                    <div class="btn btn-primary" (click)="setParentDisplay('flex')">flex</div>
                    <div class="btn btn-primary" (click)="setParentDisplay('inline')">inline</div>
                    <div class="btn btn-primary" (click)="setParentDisplay('inline-block')">inline-block</div>                                    
                    <div class="btn btn-primary" (click)="setParentDisplay('table')">table</div>
                </div>
                <div class="separator">
                    <div class="btn btn-success" (click)="setParentFlexDirection('row')">flex-direction:row</div>
                    <div class="btn btn-success" (click)="setParentFlexDirection('column')">flex-direction:column</div>
                </div>
                <div class="separator">
                    <div class="btn btn-danger" (click)="setParentJustify('flex-start')">justify-content:flex-start</div>
                    <div class="btn btn-danger" (click)="setParentJustify('flex-end')">justify-content:flex-end</div>
                    <div class="btn btn-danger" (click)="setParentJustify('center')">justify-content:center</div>
                    <div class="btn btn-danger" (click)="toggleAlignItems()">align-items:center/none</div>
                </div>  
                <div class="separator">
                    <div class="btn btn-warning" (click)="setFlexGrow(0)">flex-grow:0</div>
                    <div class="btn btn-warning" (click)="setFlexGrow(1)">flex-grow:1</div>
                    <div class="btn btn-warning" (click)="setFlexGrow2(2)">flex-grow2:2</div>
                    <div class="btn btn-warning" (click)="setFlexGrow2(0)">flex-grow2:0</div>
                    
                </div> 

                <h3>children: {{ ChildrenDisplay }}</h3>
                <div class="btn btn-info" (click)="setChildrenDisplay('block')">block</div>
                <div class="btn btn-info" (click)="setChildrenDisplay('flex')">flex</div>
                <div class="btn btn-info" (click)="setChildrenDisplay('inline')">inline</div>
                <div class="btn btn-info" (click)="setChildrenDisplay('inline-block')">inline-block</div>
                <div class="btn btn-info" (click)="setChildrenDisplay('table-cell')">table-cell</div> 
            </div>
        </div>
        
        </sandbox>
    `,
    styles: [`
        .btn {
            margin-bottom: 10px;
        }
        .child {
            width: 100px;
            height: 100px;
            background: blue;
            margin: 5px;
        }
        .child1 {
            width: 50px;
            height: 50px;
            background: lightseagreen;
        }
        .separator {
            /*margin-top:10px;*/
        }
    `]
})
export class DisplayComponent implements OnInit {
    _parentDisplay = 'block';
    _flexDirection;
    _childrenDisplay = 'block';
    _justifyContent;
    _flexGrow;
    _flexGrow2;
    _squares:any = [];
    _alignItems;

    moreSquares() {
        this._squares.push(1);
    }
    lessSquares() {
        if (this._squares.length) this._squares.pop();
    }

    get ParentDisplay(){
        return this._parentDisplay;
    }

    setParentDisplay(display) {

        this.ParentDisplay = display
    }

    set ParentDisplay(display) {
        console.log(display);
        this._parentDisplay = display;
    }


    setParentFlexDirection(direction) {
        this._flexDirection = direction;
    }

    setParentJustify(justify) {
        this._justifyContent = justify;
    }

    toggleAlignItems() {
        if(this._alignItems) {
            this._alignItems = '';
        } else {
            this._alignItems = 'center';
        }
    }

    /*************************/

    get ChildrenDisplay(){
        return this._childrenDisplay;
    }

    setChildrenDisplay(display) {

        this.ChildrenDisplay = display
    }

    set ChildrenDisplay(display) {
        this._childrenDisplay = display;
    }

    setFlexGrow(grow) {
        this._flexGrow = grow;
    }
    setFlexGrow2(grow) {
        this._flexGrow2 = grow;
    }
    constructor() { }

    ngOnInit() { }
    
}