import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'examples',
    template: `
        <sandbox>
            <div class="col-md-12 sandbox-content">
                <div class="outer">
                    <div class="inner1"></div>
                    <div class="inner2">
                        <div class="inner3"></div>
                        <div class="inner4"></div>
                    </div>                    
                </div>
            </div>
        
        </sandbox>
    `,
    styles:[`
        div {
            box-sizing: border-box;
        }
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
        .outer {
            width:400px;
            height: 200px;
            background: darkseagreen;
        }
        .inner1 {
            height: 200px;
            width: 300px;
            background:mediumvioletred;
            float:right;
        }
        .inner2 {
            height: 200px;
            width: 100px;
            background:greenyellow;
            float:left;
        }
        .inner3 {
            height: 100px;
            width: 100px;
            background:darkslategray;
            float:left;
        }
        .inner4 {
            height: 100px;
            width: 100px;
            background:blanchedalmond;
            float:left;
        }
        .sandbox-content div:hover {
            outline: 3px solid black;
        }
    `]
})
export class ExamplesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}