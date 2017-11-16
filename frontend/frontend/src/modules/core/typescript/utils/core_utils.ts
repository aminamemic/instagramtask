import {OPERATIONS} from "../config/constants";
export class CoreUtils {

    static format(theString: string, properties: any[]): string {
        for (let i = 0; i < properties.length; i++) {
            let regEx = new RegExp("\\{" + i + "\\}", "gm");
            theString = theString.replace(regEx, properties[i]);
        }
        return theString;
    }


    static guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    static notEmptyArray(value: Array<any>){
        return (value.length > 0);
    }

    static objectExist(value: any){
        return (value && value !== 'undefined' &&  value !== 'null') ;
    }

    static zeroIndex(index: number){
        return index < 10 ? ('0' + index) : index.toString();
    }

    static switchPositionsInArray(array: Array<any>, elementPosition: number, operation: string){
        if(CoreUtils.objectExist(array) && array.length > 1){
            let elementOne = array[elementPosition];
            if(operation === OPERATIONS.MINUS){
                let elementTwo = array[elementPosition - 1];
                array[elementPosition -1] = elementOne;
                array[elementPosition] = elementTwo;
            }
            else{
                let  elementTwo = array[elementPosition + 1];
                array[elementPosition + 1] = elementOne;
                array[elementPosition] = elementTwo;
            }
        }
    }

}
