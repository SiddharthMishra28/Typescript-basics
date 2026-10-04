export interface SimCard {
    carrier: string;
    phoneNumber: string;
    activate(): void;
    deactivate(): void;
}