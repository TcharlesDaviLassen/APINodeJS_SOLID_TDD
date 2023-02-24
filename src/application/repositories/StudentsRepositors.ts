import { Student } from "../../domain/entities/Students";

// Abstração de repositorio
interface StudentRepository {
    findById(id: string): Promise<Student | null>;
}

export { StudentRepository }