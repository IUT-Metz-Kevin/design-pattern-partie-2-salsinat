// Etat

interface PlayerBehavior {
    move(): void;
    jump(): void;
    attack(): void;
}

class Player implements PlayerBehavior {
    private _name: string;
    private _state: State;

    public constructor(name: string) {
        this.name = name;
        this.state = new IdlingState(this);
    }

    public get name(): string { return this._name; }
    public set name(name: string) {
        if (!/[a-zA-Z]{2,15}/.test(name))
    }
}