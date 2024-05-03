declare class ClubCard {
    private rank;
    private suit;
    private imagePath;
    constructor(rank: string);
    toString(): string;
    getImagePath(): string;
}
declare class AceOfClubs extends ClubCard {
    constructor();
}
declare class KingOfClubs extends ClubCard {
    constructor();
}
declare class QueenOfClubs extends ClubCard {
    constructor();
}
declare class JackOfClubs extends ClubCard {
    constructor();
}
declare class TenOfClubs extends ClubCard {
    constructor();
}
declare class NineOfClubs extends ClubCard {
    constructor();
}
declare class EightOfClubs extends ClubCard {
    constructor();
}
declare class SevenOfClubs extends ClubCard {
    constructor();
}
declare class SixOfClubs extends ClubCard {
    constructor();
}
declare class FiveOfClubs extends ClubCard {
    constructor();
}
declare class FourOfClubs extends ClubCard {
    constructor();
}
declare class ThreeOfClubs extends ClubCard {
    constructor();
}
declare class TwoOfClubs extends ClubCard {
    constructor();
}
export { AceOfClubs, KingOfClubs, QueenOfClubs, JackOfClubs, TenOfClubs, NineOfClubs, EightOfClubs, SevenOfClubs, SixOfClubs, FiveOfClubs, FourOfClubs, ThreeOfClubs, TwoOfClubs };
