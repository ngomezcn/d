enum AlarmSound {
    //% block="annoy"
    Annoy,
    //% block="alert"
    Alert
}
namespace SAP {
    /**
     * Address led
     */
    //% blockId=testB
    //% block="plot at $x"
    export function test(sound?: AlarmSound) : number {
        return sound
    }
}
