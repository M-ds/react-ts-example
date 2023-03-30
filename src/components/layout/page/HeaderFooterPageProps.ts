import {PageHeaderProps} from "../header/PageHeaderProps";
import {PageFooterProps} from "../footer/PageFooterProps";

/**
 * Interface with the required objects to create a HeaderFooterPage
 */
export interface HeaderFooterPageProps {
    header: PageHeaderProps
    footer: PageFooterProps[]
    children: JSX.Element
}