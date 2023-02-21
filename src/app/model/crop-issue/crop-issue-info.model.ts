import { LanguageModel } from "../language/language.model";
import { UserModel } from "../user/user.model";
import { CropIssueProgramModel } from "./crop-issue-program.model";
import { CropIssueQuestionModel } from "./crop-issue-question.model";
import { PdfModel } from "./pdf.model";

export class CropIssueInfoModel {
    id: bigint;
    createdBy: UserModel;
    createdAt: string;
    updatedAt: string;
    language: LanguageModel;
    name: string;
    description: string;
    solution: string;
    usefulInfo: string;
    usefulInfoLinks: string[];
    question: CropIssueQuestionModel;
    programs: CropIssueProgramModel[];
    pdf: PdfModel;
}
