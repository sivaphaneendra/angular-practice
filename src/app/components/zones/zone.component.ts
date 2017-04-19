import { Component, NgZone } from '@angular/core';

@Component({
    selector: 'zone-component',
    template: `
    Zone process {{label}} and progress {{progress}}
    <button (click) ="doProgressIn()">Do-Progress</button>
    <button (click) ="doProgressOut()">Do-Progress-Outside-Angular</button>
    
    <div class="divClass" [style.color]="color">Sample</div>
    `,
    styles:[`
        .divClass{
            width: 50px;
            height:50px;
            border: 1px solid black;
        }
    `]
})

export class ZoneComponent{
    label:string = null;
    progress:number = 0;
    color:string = 'red';

    constructor(public ngZone: NgZone){
        //this is entire code block will run for the screen width changes.
        var mediaList = window.matchMedia('(min-width: 600px)');        

        mediaList.addListener((mediaList:any) => {
            console.log(mediaList);
            ngZone.run(()=>{
                this.color = mediaList.matches ? 'black': 'red';
            });
        });
        
    }

    doProgressIn = function(){
        this.label = "Inside Angular",
        this.progress = 0;
        this.increaseProgress(() => console.log("Zone in-processing completed"));
    }

    doProgressOut = function(){
        this.label = "Outside Angular",
        this.progress = 0;
        
        this.ngZone.runOutsideAngular(() => {
            this.increaseProgress(() => {
                this.ngZone.run(() => console.log('Zone out-processing completed'));
            });
        });
    }

    increaseProgress = function(callback:any){
        this.progress += 10;

        if(this.progress <100){
            setTimeout(()=>{
              this.increaseProgress(callback);    
            },1000)
        }else{
            callback();
        }
    }

    
}