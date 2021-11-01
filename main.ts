qbit.qbitInit()
basic.forever(function () {
    led.setBrightness(64)
})
basic.forever(function () {
    qbit.setQbitRunSpeed(30, qbit.OrientionType.GO_AHEAD)
    basic.pause(500)
    qbit.setQbitRunSpeed(50, qbit.OrientionType.TURN_LEFT)
    basic.pause(100)
    qbit.setQbitRunSpeed(70, qbit.OrientionType.GO_AHEAD)
})
