import { Student } from "../../domain/entities/Students";
import { InMemoryStudentsRepository } from "../../test/InMemoryStudentsRepository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create challenge submission ude case", () => {

    it("should create new challenge subimission", async () => {

        const repositorStudent = new InMemoryStudentsRepository();


        // Pra funcionar os testes precisa chamar as informações
        const student = Student.create({
            nome: "Jonh",
            email: "jonh@gmail.com"
        });

        // Pra existir os testes precisa adicionar os testes
        repositorStudent.items.push(student);
        
        const sut = new CreateChallengeSubmission(
            // Cai no contructor que espera ao menos a quantia de argumentos passado a ele.
            repositorStudent,
        );        

        const response = await sut.execute({
            studentId: student.id,
            challengeId: "challenge",
        });

        expect(response).toBeTruthy();
    });
});