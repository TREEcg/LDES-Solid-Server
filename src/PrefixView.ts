import {View} from "./ldes/View";

/**
 *
 */
export class PrefixView {
    prefix: string;
    view: View;
    constructor(prefix: string, view: View) {
        if(!prefix.endsWith('/')) 
            prefix += "/";
        this.prefix = prefix;
        this.view = view;
    }
}
