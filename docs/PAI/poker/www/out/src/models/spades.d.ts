declare class SpadeCard {
    private rank;
    private suit;
    private imagePath;
    constructor(rank: string);
    toString(): string;
    getImagePath(): string;
}
declare class AceOfSpades extends SpadeCard {
    constructor();
}
declare class KingOfSpades extends SpadeCard {
    constructor();
}
declare class QueenOfSpades extends SpadeCard {
    constructor();
}
declare class JackOfSpades extends SpadeCard {
    constructor();
}
declare class TenOfSpades extends SpadeCard {
    constructor();
}
declare class NineOfSpades extends SpadeCard {
    constructor();
}
declare class EightOfSpades extends SpadeCard {
    constructor();
}
declare class SevenOfSpades extends SpadeCard {
    constructor();
}
declare class SixOfSpades extends SpadeCard {
    constructor();
}
declare class FiveOfSpades extends SpadeCard {
    constructor();
}
declare class FourOfSpades extends SpadeCard {
    constructor();
}
declare class ThreeOfSpades extends SpadeCard {
    constructor();
}
declare class TwoOfSpades extends SpadeCard {
    constructor();
}
export { AceOfSpades, KingOfSpades, QueenOfSpades, JackOfSpades, TenOfSpades, NineOfSpades, EightOfSpades, SevenOfSpades, SixOfSpades, FiveOfSpades, FourOfSpades, ThreeOfSpades, TwoOfSpades };
