import { Entity } from "../../core/domain/Entity";

type TSubmissionProps = {
    challengeId: string;
    studentId: string;
    createdAt?: Date;
}

export class Submission extends Entity<TSubmissionProps> {
    
    // Não posso acessar a classe de fora dela
    private constructor(props: TSubmissionProps, id?: string) {
        super(props, id);
    }

    static create(props: TSubmissionProps, id?: string) {
        const submission = new Submission({
            ...props, 
            createdAt: props.createdAt ?? new Date(),
        }, id);
        
        return submission;
    }
}