import { User } from "../../user/user";
import { NutrientModel } from "./nutrient.model";

export class Nutrient {
    id: number;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    name: string;
    formula: string;
    percentage? :string;
    nutrient?: string;

    constructor(model: NutrientModel){
        this.id = model.id;
        this.createdBy = model.createdBy;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.name = model.name;
        this.formula = model.formula;
        this.percentage = model.percentage;
        this.nutrient = model.nutrient;
    }
}


export class NutrientBody {
    id!: number;
    percentage!: string;
}