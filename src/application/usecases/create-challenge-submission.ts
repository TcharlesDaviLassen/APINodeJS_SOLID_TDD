import { Submission } from "../../domain/entities/Submission";

type TCreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

class CreateChallengeSubmission {
    execute({ studentId, challengeId }: TCreateChallengeSubmissionRequest) {
        const submission = Submission.create({
            studentId,
            challengeId
        });

        return submission;
    }
}