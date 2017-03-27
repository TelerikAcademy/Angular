export class RGB {
    red: number;
    green: number;
    blue: number;

   static fromRgbString(colorString: string) {
        let [red, green, blue] =
            colorString.substring('rgb()'.length, colorString.length - 1)
                .split(',')
                .map(Number);
        return new RGB(red, green, blue);
    }

    constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    invert() {
        return new RGB(
            255 - this.red,
            255 - this.green,
            255 - this.blue);
    }

    toString() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
}
