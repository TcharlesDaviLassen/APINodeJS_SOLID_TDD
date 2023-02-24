import { StudentRepository } from "../application/repositories/StudentsRepositors";
import { Student } from "../domain/entities/Students";

export class InMemoryStudentsRepository implements StudentRepository {

    // Cria um Array vazio pra salvar os dados em memória, sem bates na camada de INFRA da aplicação.
    // Assim que a aplicação para os dados são eliminados.
    public items: Student[] = [];

    // Quando for uma Promisse sempre vai ter um async.
    async findById(id: string): Promise<Student | null> {
        // find retorna undefined nao null

        const student = this.items.find(item => item.id === id);

        if (!student) {
            return null;
        }

        return student;

    }
};