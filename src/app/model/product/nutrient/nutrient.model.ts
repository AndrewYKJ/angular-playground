import { User } from "../../user/user";

export class NutrientModel {
    id!: number;
    createdBy!: User;
    createdAt!: string;
    updatedAt!: string;
    name!: string;
    formula!: string;
    percentage?: string;
    nutrient?: string;
}
