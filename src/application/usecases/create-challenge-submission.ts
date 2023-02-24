import { Submission } from "../../domain/entities/Submission";

type TCreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

 export class CreateChallengeSubmission {

    async execute({ studentId, challengeId }: TCreateChallengeSubmissionRequest) {

        const submission = Submission.create({
            studentId,
            challengeId
        });

        return submission;
    }
}