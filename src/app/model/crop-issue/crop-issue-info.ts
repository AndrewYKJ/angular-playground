import { User } from "../user/user";
import { CropIssueInfoModel } from "./crop-issue-info.model";
import { CropIssueProgram } from "./crop-issue-program";
import { CropIssueQuestion } from "./crop-issue-question";
import { Language } from "../language/language";
import { Pdf } from "./pdf";

export class CropIssueInfo {
    id: bigint;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
    language: Language;
    name: string;
    description: string;
    solution: string;
    usefulInfo: string;
    usefulInfoLinks: string[];
    question: CropIssueQuestion;
    programs: CropIssueProgram[];
    pdf: Pdf;

    constructor(model: CropIssueInfoModel) {
        this.id = model.id;
        this.createdBy = model.createdBy ? new User(model.createdBy) : null;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
        this.language = model.language ? new Language(model.language) : null;
        this.name = model.name;
        this.description = model.description;
        this.solution = model.solution;
        this.usefulInfo = model.usefulInfo;
        this.usefulInfoLinks = model.usefulInfoLinks ? model.usefulInfoLinks : [];
        this.question = model.question ? new CropIssueQuestion(model.question) : null;
        this.programs = model.programs ? model.programs.map(value => new CropIssueProgram(value)) : [];
        this.pdf = model.pdf ? new Pdf(model.pdf) : null;
    }
}
