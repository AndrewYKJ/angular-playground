import { PdfModel } from "./pdf.model";

export class Pdf {
    id: bigint;
    filename: string;
    url: string;

    constructor(model: PdfModel) {
        this.id = model.id;
        this.filename = model.filename;
        this.url = model.url;
    }
}
