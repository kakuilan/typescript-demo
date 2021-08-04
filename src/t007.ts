//接口-类类型

interface ClockInterface007 {
    currentTime: Date;

    setTime(d: Date): void;
}

class Clock00 implements ClockInterface007 {
    currentTime: Date = new Date()

    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) {
    }
}
