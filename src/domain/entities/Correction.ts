import { Entity } from "../../core/domain/Entity";

type TCorrectionProps = {
    grade: number;
    studenId: string;
    createdAt: Date;
}

export class Correction extends Entity<TCorrectionProps> {
    
    // Não posso acessar a classe de fora dela
    private constructor(props: TCorrectionProps, id?: string) {
        super(props, id);
    }

    // static chama sem instanciar a classe
    static create(props: TCorrectionProps, id?: string) {
        const correction = new Correction(props, id);
        
        return correction;
    }
}