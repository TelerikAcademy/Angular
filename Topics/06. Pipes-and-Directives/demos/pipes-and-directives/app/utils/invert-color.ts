import { RGB } from './RGB';

export function invert(color: string | RGB): RGB {
    if (color instanceof RGB) {
        return color.invert();
    }

    let div = document.createElement('div');

    div.style.color = color;
    document.body.appendChild(div);
    let style = window.getComputedStyle(div);
    let rgbColor = RGB.fromRgbString(style.color);
    return rgbColor.invert();
};
