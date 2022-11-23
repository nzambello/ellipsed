export declare type IEllipsisOptions = {
    replaceStr?: string;
    responsive?: boolean;
    debounceDelay?: number;
    delimiter?: string;
}
declare const ellipsis: (selector: string, rows?: number, options?: IEllipsisOptions) => void;
declare const disableResponsive: (listener: EventListener) => void;
export { ellipsis, disableResponsive };