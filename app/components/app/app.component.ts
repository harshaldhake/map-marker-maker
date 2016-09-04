import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'compress'
})
export class CompressPipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/\s\s+/g, ' ').trim();
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

}
