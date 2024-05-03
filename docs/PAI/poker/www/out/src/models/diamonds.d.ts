declare class DiamondCard {
    private rank;
    private suit;
    private imagePath;
    constructor(rank: string);
    toString(): string;
    getImagePath(): string;
}
declare class AceOfDiamonds extends DiamondCard {
    constructor();
}
declare class KingOfDiamonds extends DiamondCard {
    constructor();
}
declare class QueenOfDiamonds extends DiamondCard {
    constructor();
}
declare class JackOfDiamonds extends DiamondCard {
    constructor();
}
declare class TenOfDiamonds extends DiamondCard {
    constructor();
}
declare class NineOfDiamonds extends DiamondCard {
    constructor();
}
declare class EightOfDiamonds extends DiamondCard {
    constructor();
}
declare class SevenOfDiamonds extends DiamondCard {
    constructor();
}
declare class SixOfDiamonds extends DiamondCard {
    constructor();
}
declare class FiveOfDiamonds extends DiamondCard {
    constructor();
}
declare class FourOfDiamonds extends DiamondCard {
    constructor();
}
declare class ThreeOfDiamonds extends DiamondCard {
    constructor();
}
declare class TwoOfDiamonds extends DiamondCard {
    constructor();
}
export { AceOfDiamonds, KingOfDiamonds, QueenOfDiamonds, JackOfDiamonds, TenOfDiamonds, NineOfDiamonds, EightOfDiamonds, SevenOfDiamonds, SixOfDiamonds, FiveOfDiamonds, FourOfDiamonds, ThreeOfDiamonds, TwoOfDiamonds };
