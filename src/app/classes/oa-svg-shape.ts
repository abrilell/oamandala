export class OaSvgShape {
  type: string | undefined = undefined;
  points: string | undefined = undefined;
  style: string | undefined = undefined;
  cx: number | undefined = undefined;
  cy: number | undefined = undefined;
  r: number | undefined = undefined;
  stroke: string | undefined = undefined;
  strokeWidth: number | undefined = undefined;
  fill: string | undefined = undefined;
  x1: number | undefined = undefined;
  y1: number | undefined = undefined;
  x2: number | undefined = undefined;
  y2: number | undefined = undefined;
  width: number | undefined = undefined;
  height: number | undefined = undefined;
  x: number | undefined = undefined;
  y: number | undefined = undefined;
  rx: number | undefined = undefined;
  ry: number | undefined = undefined;
  d: string | undefined = undefined;
  dx: number | undefined = undefined;
  fontSize: number | undefined = undefined;
  fontFamily: string | undefined = undefined;
  textAnchor: string | undefined = undefined;
  text: string | undefined = undefined;
  transform: string | undefined = undefined;

  getClone(): OaSvgShape {
    const ret: any = new OaSvgShape();
    Object.keys(this).forEach((key: string) => {
      ret[key as keyof OaSvgShape] = this[key as keyof OaSvgShape];
    });
    return ret;
  }

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
      case 'rect':
        html = this.getInnerHtmlRectangle();
        break;
      case 'ellipse':
        html = this.getInnerHtmlEllipse();
        break;
      case 'polyline':
        html = this.getInnerHtmlPolyline();
        break;
      case 'path':
        html = this.getInnerHtmlPath();
        break;
      case 'text':
        html = this.getInnerHtmlText();
        break;
    }
    return html;
  }

  private getInnerHtmlPolygon(): string {
    let ret: string = '<polygon';
    if (this.points !== undefined) {
      ret += ' points="' + this.points + '"';
    }
    if (this.style !== undefined) {
      ret += ' style="' + this.style + '"';
    }
    ret += ' />';
    return ret;
  }

  private getInnerHtmlCircle(): string {
    let ret = '<circle ';
    if (this.cx !== undefined) {
      ret += ' cx="' + this.cx + '"';
    }
    if (this.cy !== undefined) {
      ret += ' cy="' + this.cy + '"';
    }
    if (this.r !== undefined) {
      ret += ' r="' + this.r + '"';
    }
    if (this.stroke !== undefined) {
      ret += ' stroke="' + this.stroke + '"';
    }
    if (this.strokeWidth !== undefined) {
      ret += ' stroke-width="' + this.strokeWidth + '"';
    }
    if (this.fill !== undefined) {
      ret += ' fill="' + this.fill + '"';
    }
    ret += ' />';
    return ret;
  }

  private getInnerHtmlLine(): string {
    let ret = '<line';
    if (this.x1 !== undefined) {
      ret += ' x1="' + this.x1 + '" ';
    }
    if (this.y1 !== undefined) {
      ret += ' y1="' + this.y1 + '"';
    }
    if (this.x2 !== undefined) {
      ret += ' x2="' + this.x2 + '"';
    }
    if (this.y2 !== undefined) {
      ret += ' y2="' + this.y2 + '"';
    }
    if (this.style !== undefined) {
      ret += ' style="' + this.style + '"';
    }
    ret += ' />';
    return ret;
  }

  private getInnerHtmlRectangle(): string {
    let ret = '<rect';
    if (this.width !== undefined) {
      ret += ' width="' + this.width + '"';
    }
    if (this.height !== undefined) {
      ret += ' height="' + this.height + '"';
    }
    if (this.x !== undefined) {
      ret += ' x="' + this.x + '"';
    }
    if (this.y !== undefined) {
      ret += ' y="' + this.y + '"';
    }
    if (this.rx !== undefined) {
      ret += ' rx="' + this.rx + '"';
    }
    if (this.ry !== undefined) {
      ret += ' ry="' + this.ry + '"';
    }
    if (this.style !== undefined) {
      ret += ' style="' + this.style + '"';
    }
    ret += ' />';
    return ret;
  }

  private getInnerHtmlEllipse(): string {
    let ret = '<ellipse';
    if (this.cx !== undefined) {
      ret += ' cx="' + this.cx + '"';
    }
    if (this.cy !== undefined) {
      ret += ' cy="' + this.cy + '"';
    }
    if (this.rx !== undefined) {
      ret += ' rx="' + this.rx + '"';
    }
    if (this.ry !== undefined) {
      ret += ' ry="' + this.ry + '"';
    }
    if (this.style !== undefined) {
      ret += ' style="' + this.style + '"';
    }
    ret += ' />';
    return ret;
  }

  private getInnerHtmlPolyline(): string {
    let ret = '<polyline';
    if (this.points !== undefined) {
      ret += ' points="' + this.points + '"';
    }
    if (this.style !== undefined) {
      ret += ' style="' + this.style + '"';
    }
    ret += ' />';
    return ret;
  }

  private getInnerHtmlPath(): string {
    let ret = '<path';
    if (this.d !== undefined) {
      ret += ' d="' + this.d + '"';
    }
    if (this.stroke !== undefined) {
      ret += ' stroke="' + this.stroke + '"';
    }
    if (this.strokeWidth !== undefined) {
      ret += ' stroke-width="' + this.strokeWidth + '"';
    }
    if (this.fill !== undefined) {
      ret += ' fill="' + this.fill + '"';
    }
    ret += ' />';
    return ret;
  }

  private getInnerHtmlText(): string {
    let ret = '<text';
    if (this.x !== undefined) {
      ret += ' x="' + this.x + '"';
    }
    if (this.y !== undefined) {
      ret += ' y="' + this.y + '"';
    }
    if (this.dx !== undefined) {
      ret += ' dx="' + this.dx + '"';
    }
    if (this.fontSize !== undefined) {
      ret += ' font-size="' + this.fontSize + '"';
    }
    if (this.fontFamily !== undefined) {
      ret += ' font-family="' + this.fontFamily + '"';
    }
    if (this.fill !== undefined) {
      ret += ' fill="' + this.fill + '"';
    }
    if (this.stroke !== undefined) {
      ret += ' stroke="' + this.stroke + '"';
    }
    if (this.textAnchor !== undefined) {
      ret += ' text-anchor="' + this.textAnchor + '"';
    }
    if (this.transform !== undefined) {
      ret += ' transform="' + this.transform + '"';
    }
    ret += '>';
    if (this.text !== undefined) {
      ret += this.text;
    }
    ret += '</text>';
    return ret;
  }
}

