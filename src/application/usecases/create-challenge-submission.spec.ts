import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create challenge submission ude case", () => {

    it("should create new challenge subimission", async () => {
        const sut = new CreateChallengeSubmission();

        const response = await sut.execute({
            studentId: "student",
            challengeId: "challenge",

        });

        expect(response).toBeTruthy();
    });
});