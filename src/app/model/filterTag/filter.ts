import { FilterModel } from "./filter.model";
import { FilterTag } from "./filterTag";

export class Filter{
    activity?: FilterTag[];
    characteristics?: FilterTag[];
    crops?: FilterTag[];
    composition?: FilterTag[];
    phenologicalPhase?: FilterTag[];
    formulation?: FilterTag[];
    // cropProtection?: FilterTag[];
    activeIngredient?: FilterTag[];


    constructor(model: FilterModel){
        this.activity = this.activity ? this.activity.map(val => new FilterTag(val)) : [];
        this.characteristics = this.characteristics ? this.characteristics.map(val => new FilterTag(val)) : [];
        this.crops = this.crops ? this.crops.map(val => new FilterTag(val)) : [];
        this.composition = this.composition ? this.composition.map(val => new FilterTag(val)) : [];
        this.phenologicalPhase = this.phenologicalPhase ? this.phenologicalPhase.map(val => new FilterTag(val)) : [];
        this.formulation = this.formulation ? this.formulation.map(val => new FilterTag(val)) : [];
        this.activeIngredient = this.activeIngredient ? this.activeIngredient.map(val => new FilterTag(val)) : [];

    }
}