import {css} from "./utils";

const template = () =>`

`

export function tooltip(el) {
    return {
        show(){

        },
        hide(){
            css(el, {display: 'none'})
        }
    }
}
