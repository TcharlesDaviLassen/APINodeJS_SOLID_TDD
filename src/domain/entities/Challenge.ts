import { Entity } from "../../core/domain/Entity";

type TChallengeProps = {
    title: string;
    instructionsUrl: string;
}

export class Challenge extends Entity<TChallengeProps> {
    
    // Não posso acessar a classe de fora dela
    private constructor(props: TChallengeProps, id?: string) {
        super(props, id);
    }

    static create(props: TChallengeProps, id?: string) {
        const challenge = new Challenge(props, id);
        
        return challenge;
    }
}