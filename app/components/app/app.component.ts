import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import * as MaterialColor from 'material-colors';

const MaterialColorNames = [
    'red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'cyan',
    'teal', 'green', 'lightGreen', 'lime', 'yellow', 'amber', 'orange',
    'deepOrange', 'brown', 'grey', 'blueGrey'
];

@Pipe({
    name: 'compress'
})
export class CompressPipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/\s\s+/g, ' ').trim();
    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toFixed'
})
export class ToFixedPipe implements PipeTransform {
    transform(n: number, args: number[]): any {
        return (+n).toFixed(+args);
    }
}

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    private t: number = (4 / 3) * Math.tan(Math.PI / 8);

    private headRadius: number = 100;
    private holeRatio: number = .5;
    private torsoHeight: number = 100;
    private torsoCurvature: number = 30;

    private color: string = MaterialColor['pink'][500];
    private availableColors: {hex: string, name: string}[] = [];

    private strokeWidth: number = 5;
    private strokeColor: string = "white";

    private shadowOpacity: number = .3;

    public get pathD(): string {
        return `
        M
          0 ${- this.headRadius}
        C 
          ${this.headRadius * this.t} ${- this.headRadius},
          ${this.headRadius} ${- this.headRadius * this.t},
          ${this.headRadius} 0
        S
          0 ${+this.headRadius + +this.torsoHeight - this.torsoCurvature},
          0 ${+this.headRadius + +this.torsoHeight}
        C
          0 ${+this.headRadius + +this.torsoHeight - this.torsoCurvature},
          -${this.headRadius} ${this.headRadius * this.t},
          -${this.headRadius} 0
        S
          ${- this.headRadius * this.t} -${this.headRadius},
          0 ${- this.headRadius}
        
        M
          0 ${- this.headRadius * this.holeRatio}
        C
          ${this.headRadius * this.t * this.holeRatio} ${- this.headRadius * this.holeRatio},
          ${this.headRadius * this.holeRatio} ${- this.headRadius * this.t * this.holeRatio},
          ${this.headRadius * this.holeRatio} 0
        S
          ${this.headRadius * this.t * this.holeRatio} ${this.headRadius * this.holeRatio}, 
          0 ${this.headRadius * this.holeRatio}
        S
          ${- this.headRadius * this.holeRatio} ${this.headRadius * this.t * this.holeRatio}, 
          ${- this.headRadius * this.holeRatio} 0
        S
          ${- this.headRadius * this.t * this.holeRatio} ${- this.headRadius * this.holeRatio}, 
          0 ${- this.headRadius * this.holeRatio}`;
    }

    constructor() {
        MaterialColorNames.forEach(color => {
            this.availableColors.push({
                hex: MaterialColor[color][500],
                name: color
            });
        });
    }

}
