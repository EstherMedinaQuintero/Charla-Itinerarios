import { Hand } from "../models/hand.js";
declare class HandView {
    private hand;
    private container;
    private cardViews;
    constructor(hand: Hand, container: HTMLElement);
    render(): void;
    updateHand(newHand: Hand): void;
}
export { HandView };
