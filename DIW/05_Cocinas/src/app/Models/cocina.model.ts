export class Cocina {
    ref: number;
    name: string;
    desc: string;
    color: string;
    price: number;
    img: string;

    constructor(ref: number, name: string, desc: string, color: string, price: number, img: string) {
        this.ref = ref;
        this.name = name;
        this.desc = desc;
        this.color = color;
        this.price = price;
        this.img = img;
    }
}