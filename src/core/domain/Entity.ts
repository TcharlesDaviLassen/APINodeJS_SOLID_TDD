import crypto from 'crypto';

// Como é uma classe Abstract pode se passar da forma a seguir.
export abstract class Entity<T> {
    
    protected _id!: string; // Quero que sejá acessivel apenas a essa classe e as que a faz o extends .
    public props!: T;

    constructor(props: T, id?: string) {
        this.props = props;
        this._id = id ?? crypto.randomUUID();
    }
 
}