//接口-类的静态与动态部分

//类接口
interface ClockInterface {
    tick(): void
}

//类构造器接口
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
}

function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log("beep beep")
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log("tick tock")
    }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)
