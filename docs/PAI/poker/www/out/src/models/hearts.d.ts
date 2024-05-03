declare class HeartCard {
    private rank;
    private suit;
    private imagePath;
    constructor(rank: string);
    toString(): string;
    getImagePath(): string;
}
declare class AceOfHearts extends HeartCard {
    constructor();
}
declare class KingOfHearts extends HeartCard {
    constructor();
}
declare class QueenOfHearts extends HeartCard {
    constructor();
}
declare class JackOfHearts extends HeartCard {
    constructor();
}
declare class TenOfHearts extends HeartCard {
    constructor();
}
declare class NineOfHearts extends HeartCard {
    constructor();
}
declare class EightOfHearts extends HeartCard {
    constructor();
}
declare class SevenOfHearts extends HeartCard {
    constructor();
}
declare class SixOfHearts extends HeartCard {
    constructor();
}
declare class FiveOfHearts extends HeartCard {
    constructor();
}
declare class FourOfHearts extends HeartCard {
    constructor();
}
declare class ThreeOfHearts extends HeartCard {
    constructor();
}
declare class TwoOfHearts extends HeartCard {
    constructor();
}
export { AceOfHearts, KingOfHearts, QueenOfHearts, JackOfHearts, TenOfHearts, NineOfHearts, EightOfHearts, SevenOfHearts, SixOfHearts, FiveOfHearts, FourOfHearts, ThreeOfHearts, TwoOfHearts };
