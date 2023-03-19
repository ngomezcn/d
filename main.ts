enum AlarmSound {
    //% block="CardCode"
    CardCode,
    //% block="CardName"
    CardName
}
namespace SAP {
    //% blockId=BusinessPartner_B
    //% block="BusinessPartner $sound"
    export function BusinessPartner(sound?: AlarmSound): number {
        return 1
    }

    /**
         * Address led
         */
    //% blockId=foo_B
    //% block="foo with $callback"
    export function foo(callback: Function) {
        console.log('foo() function called!');
        callback();
    }
}
