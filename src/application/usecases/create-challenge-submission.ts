import { Submission } from "../../domain/entities/Submission";
import { StudentRepository } from "../repositories/StudentsRepositors";

type TCreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

 export class CreateChallengeSubmission {

    constructor(
        private studentRepository: StudentRepository,
    ){}

    async execute({ studentId, challengeId }: TCreateChallengeSubmissionRequest) {

        const student = await this.studentRepository.findById(studentId);

        if (!student) {
            throw new Error(`Student not found`)
        }

        const submission = Submission.create({
            studentId,
            challengeId
        });

        return submission;
    }
}