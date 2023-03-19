enum BusinessPartnerE {
    //% block="CardCode"
    CardCode,
    //% block="CardName"
    CardName
}

enum OrderE {
    //% block="DocEntry"
    DocEntry,
    //% block="DocNum"
    DocNum
}
namespace SAP {
    //% blockId=BusinessPartner_B
    //% block="BusinessPartner $sound"
    export function BusinessPartner(sound?: BusinessPartnerE): any {
        return 1
    }

    //% blockId=Order_B
    //% block="Order $sound"
    export function Order(sound?: OrderE): any {
        return 1
    }

    /**
         * Address led
         */
    //% blockId=foo_B
    //% block="foo with $callback"
    export function foo(callback: any) {
        console.log('foo() function called!');
    }
}
