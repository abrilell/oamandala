import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OaSvgShape } from 'src/app/classes/oa-svg-shape';
import { OaSvgShapeComponent } from '../oa-svg-shape/oa-svg-shape.component';

@Component({
  selector: 'app-oa-home',
  templateUrl: './oa-home.component.html',
  styleUrls: ['./oa-home.component.css'],
})
export class OaHomeComponent implements OnInit, AfterViewInit {
  listShape: OaSvgShape[] = [];

  constructor() {}

  ngOnInit(): void {
    let shape: OaSvgShape = new OaSvgShape();
    shape.type = 'polygon';
    shape.points = '500,2 879,405 500,808 123,405';
    shape.style =
      'fill: hsla(9, 100%, 64%, 0.6); stroke: purple; stroke-width: 1';
    this.listShape.push(shape);

    shape = new OaSvgShape();
    shape.type = 'circle';
    shape.cx = 500;
    shape.cy = 410;
    shape.r = 250;
    shape.stroke = 'white';
    shape.strokeWidth = 4;
    shape.fill = 'red';
    this.listShape.push(shape);

    shape = new OaSvgShape();
    shape.type = 'line';
    shape.x1 = 500;
    shape.y1 = 162;
    shape.x2 = 500;
    shape.y2 = 658;
    shape.style = 'stroke: black; stroke-width: 2';
    this.listShape.push(shape);
  }

  ngAfterViewInit(): void {
    const oaSvg = document.getElementById('oaSvgId');
    if (!oaSvg) {
      return;
    }
    let shapes: string = '';
    for (const shapeI of this.listShape) {
      shapes = shapes + shapeI.getInnerHtml();
    }
    oaSvg.innerHTML = shapes;
  }
}
