/**
 * Interface to create a PageFooterProp.
 * With these elements a button object is created in the footer.
 */
export interface PageFooterProps {
    title: string;
    type: "Positive" | "Negative" | "Transparent";
    onClick: () => void;
}