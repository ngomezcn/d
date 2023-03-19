enum BusinessPartnerE {
    //% block="CardCode"
    CardCode,
    //% block="CardName"
    CardName
}
class Greeter {
    greeting: string;
}

namespace SAP {
    //% blockId=BusinessPartner_B
    //% block="BusinessPartner $m"
    export function BusinessPartner(m?: BusinessPartnerE): any {
        return 1
    }

    //% blockId=wtf
    //% block="wtf $m"
    export function wtf(m?: Greeter): any {
        return 1
    }
}

namespace Variables {
    //% blockId=foo_B
    //% block="set $c to $value"
    export function setTo(c: any, value: any) {
        console.log('foo() function called!');
    }
}
