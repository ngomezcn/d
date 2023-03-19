enum AlarmSound {
    //% block="CardCode"
    CardCode,
    //% block="CardName"
    CardName
}
namespace SAP {
    /**
     * Address led
     */
    //% blockId=BusinessPartner_B
    //% block="BusinessPartner $sound"
    //% expandableArgumentMode="toggle"
    export function test(sound?: AlarmSound) : number {
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

    /**
             * Address led
             */
    //% blockId=bar_B
    //% block="bar"
    export function bar() {
        console.log('bar() function called!');
    }
}
