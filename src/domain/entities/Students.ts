import { Entity } from "../../core/domain/Entity";

type TStudentProps = {
    nome: string;
    email: string;
}

export class Student extends Entity<TStudentProps> {
  
    // Não posso acessar a classe de fora dela
    private constructor(props: TStudentProps, id?: string) {
        super(props, id);
    }

    // static chama sem instanciar a classe
    static create(props: TStudentProps, id?: string) {
        const student = new Student(props, id);
        
        return student;
    }
}