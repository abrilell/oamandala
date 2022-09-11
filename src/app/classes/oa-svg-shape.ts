export class OaSvgShape {
  type: string = '';
  points: string = '';
  style: string = '';
  cx: number = 0;
  cy: number = 0;
  r: number = 0;
  stroke: string = '';
  strokeWidth: number = 0;
  fill: string = '';
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;

  getInnerHtml(): string {
    let html: string = '';
    switch (this.type) {
      case 'polygon':
        html = this.getInnerHtmlPolygon();
        break;
      case 'circle':
        html = this.getInnerHtmlCircle();
        break;
      case 'line':
        html = this.getInnerHtmlLine();
        break;
    }
    return html;
  }

  private getInnerHtmlPolygon(): string {
    return (
      '<polygon points="' + this.points + '" style="' + this.style + '" />'
    );
  }

  private getInnerHtmlCircle(): string {
    return (
      '<circle cx="' +
      this.cx +
      '" cy="' +
      this.cy +
      '" r="' +
      this.r +
      '" stroke="' +
      this.stroke +
      '" stroke-width="' +
      this.strokeWidth +
      '" fill="' +
      this.fill +
      '" />'
    );
  }

  private getInnerHtmlLine(): string {
    return (
      '<line x1="' +
      this.x1 +
      '" y1="' +
      this.y1 +
      '" x2="' +
      this.x2 +
      '" y2="' +
      this.y2 +
      '" style="' +
      this.style +
      '" />'
    );
  }
}
