var on = 1
var backGrndColor = "green"

const btn_drop = document.getElementById("btn_drop")

const btn_alt = document.getElementById("btn_alt")

const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const button3 = document.getElementById("button-3")
const button4 = document.getElementById("button-4")
const button5 = document.getElementById("button-5")

const img_r99 = document.getElementById("img_r99")
const img_volt = document.getElementById("img_volt")
const img_prowler = document.getElementById("img_prowler")
const img_alternator = document.getElementById("img_alternator")
const img_car = document.getElementById("img_car")

const img_lightmag = document.getElementById("img-lightmag")
const img_barrel = document.getElementById("img-barrel")
const img_stock = document.getElementById("img-stock")
const img_1times = document.getElementById("img-1times")
const img_energymag = document.getElementById("img-energymag")
const img_heavymag = document.getElementById("img-heavymag")

const img_outlands = document.getElementById("img-outlands")
const img_killswitch = document.getElementById('img-killswitch')
const img_unloader = document.getElementById('img-unloader')
const img_gnarly = document.getElementById('img-gnarly')
const img_gal = document.getElementById("img-gal")
const img_ledrez = document.getElementById("img-ledrez")
const img_ocean = document.getElementById("img-ocean")
const img_illuminator = document.getElementById("img-illuminator")
const img_palate = document.getElementById("img-palate")

const btn_r99 = document.getElementById("btn_r99")
const btn_outlands = document.getElementById("btn_outlands")
const btn_killswitch = document.getElementById("btn_killswitch")
const btn_alternator = document.getElementById("btn_alternator")
const btn_gal = document.getElementById("btn_gal")

const outlands_text = document.getElementById("outlands-text")
const killswitch_text = document.getElementById("killswitch-text")
const ledrez_text = document.getElementById("ledrez-text")
const gal_text = document.getElementById("gal-text")


smg1()

function showHide() {
    if (on === 0) {
        button1.style.display = 'block'
        button2.style.display = 'block'
        button3.style.display = 'block'
        button4.style.display = 'block'
        button5.style.display = 'block'
        btn_drop.innerText = 'Weapons v'
        on = 1
        return
    }
    if (on === 1) {
        button1.style.display = 'none'
        button2.style.display = 'none'
        button3.style.display = 'none'
        button4.style.display = 'none'
        button5.style.display = 'none'
        btn_drop.innerText = 'Weapons ^'
        on = 0
        return
    }
}

function smg1() {
    clearAllPtw()

    button1.style.backgroundColor = "Red"
    button2.style.backgroundColor = backGrndColor
    button3.style.backgroundColor = backGrndColor
    button4.style.backgroundColor = backGrndColor
    button5.style.backgroundColor = backGrndColor

    img_r99.style.display = 'none'
    img_volt.style.display = 'none'
    img_prowler.style.display = 'none'
    img_alternator.style.display = 'block'
    img_car.style.display = 'none'

    img_barrel.style.display = 'block'
    img_lightmag.style.display = 'block'
    img_stock.style.display = 'block'
    img_1times.style.display = 'block'
    img_energymag.style.display = 'none'
    img_heavymag.style.display = 'none'

    btn_killswitch.style.display = 'none'
    btn_outlands.style.display = 'none'
    btn_alternator.style.display = 'block'
    btn_r99.style.display = 'none'
    btn_gal.style.display = 'block'
    btn_alt.style.display = 'block'

}

function smg2() {
    clearAllPtw()

    button1.style.backgroundColor = backGrndColor
    button2.style.backgroundColor = "red"
    button3.style.backgroundColor = backGrndColor
    button4.style.backgroundColor = backGrndColor
    button5.style.backgroundColor = backGrndColor

    img_r99.style.display = 'none'
    img_volt.style.display = 'none'
    img_prowler.style.display = 'block'
    img_alternator.style.display = 'none'
    img_car.style.display = 'none'

    img_barrel.style.display = 'none'
    img_lightmag.style.display = 'none'
    img_stock.style.display = 'block'
    img_1times.style.display = 'block'
    img_energymag.style.display = 'none'
    img_heavymag.style.display = 'block'
    img_heavymag.style.top = '45%'

    btn_killswitch.style.display = 'none'
    btn_outlands.style.display = 'none'
    btn_r99.style.display = 'none'
    btn_alternator.style = 'none'
    btn_gal.style = 'none'
    btn_alt.style.display = 'none'

}

function smg3() {
    clearAllPtw()

    button1.style.backgroundColor = backGrndColor
    button2.style.backgroundColor = backGrndColor
    button3.style.backgroundColor = "red"
    button4.style.backgroundColor = backGrndColor
    button5.style.backgroundColor = backGrndColor

    img_r99.style.display = 'block'
    img_volt.style.display = 'none'
    img_prowler.style.display = 'none'
    img_alternator.style.display = 'none'
    img_car.style.display = 'none'

    img_barrel.style.display = 'block'
    img_lightmag.style.display = 'block'
    img_stock.style.display = 'block'
    img_1times.style.display = 'block'
    img_energymag.style.display = 'none'
    img_heavymag.style.display = 'none'

    btn_killswitch.style.display = 'block'
    btn_outlands.style.display = 'block'
    btn_r99.style.display = 'block'
    btn_alternator.style = 'none'
    btn_gal.style = 'none'
    btn_alt.style.display = 'none'
}

function smg4() {
    clearAllPtw()

    button1.style.backgroundColor = backGrndColor
    button2.style.backgroundColor = backGrndColor
    button3.style.backgroundColor = backGrndColor
    button4.style.backgroundColor = "red"
    button5.style.backgroundColor = backGrndColor

    img_r99.style.display = 'none'
    img_volt.style.display = 'block'
    img_prowler.style.display = 'none'
    img_alternator.style.display = 'none'
    img_car.style.display = 'none'

    img_barrel.style.display = 'block'
    img_lightmag.style.display = 'none'
    img_stock.style.display = 'block'
    img_1times.style.display = 'block'
    img_energymag.style.display = 'block'
    img_heavymag.style.display = 'none'

    btn_killswitch.style.display = 'none'
    btn_outlands.style.display = 'none'
    btn_r99.style.display = 'none'
    btn_alternator.style = 'none'
    btn_gal.style = 'none'
    btn_alt.style.display = 'none'
}

function smg5() {
    clearAllPtw()

    button1.style.backgroundColor = backGrndColor
    button2.style.backgroundColor = backGrndColor
    button3.style.backgroundColor = backGrndColor
    button4.style.backgroundColor = backGrndColor
    button5.style.backgroundColor = "red"

    img_r99.style.display = 'none'
    img_volt.style.display = 'none'
    img_prowler.style.display = 'none'
    img_alternator.style.display = 'none'
    img_car.style.display = 'block'

    img_barrel.style.display = 'block'
    img_lightmag.style.display = 'block'
    img_stock.style.display = 'block'
    img_1times.style.display = 'block'
    img_energymag.style.display = 'none'
    img_heavymag.style.display = 'block'
    img_heavymag.style.top = '37%'

    btn_killswitch.style.display = 'none'
    btn_outlands.style.display = 'none'
    btn_r99.style.display = 'none'
    btn_alternator.style = 'none'
    btn_gal.style = 'none'
    btn_alt.style.display = 'none'
}

function clearAllAttach() {
    img_barrel.style.display = 'none'
    img_lightmag.style.display = 'none'
    img_stock.style.display = 'none'
    img_1times.style.display = 'none'
    img_energymag.style.display = 'none'
    img_heavymag.style.display = 'none'
}

function clearAllWeapons() {
    img_r99.style.display = 'none'
    img_volt.style.display = 'none'
    img_prowler.style.display = 'none'
    img_alternator.style.display = 'none'
    img_car.style.display = 'none'
}

function clearAllPtw() {
    img_outlands.style.display = 'none'
    img_killswitch.style.display = 'none'
    outlands_text.style.display = 'none'
    killswitch_text.style.display = 'none'
    img_gnarly.style.display = 'none'
    img_unloader.style.display = 'none'
    img_gal.style.display = 'none'
    img_ledrez.style.display = 'none'
    gal_text.style.display = 'none'
    ledrez_text.style.display = 'none'
    img_ocean.style.display = 'none'
    img_palate.style.display = 'none'
    img_illuminator.style.display = 'none'

}

function ptw_r99_1() {
    clearAllPtw()
    clearAllWeapons()
    clearAllAttach()
    img_outlands.style.display = 'block'
    outlands_text.style.display = 'block'

}

function ptw_r99_2() {
    clearAllPtw()
    clearAllWeapons()
    clearAllAttach()
    img_killswitch.style.display = 'block'
    killswitch_text.style.display = 'block'

}

function ptw_r99_3() {
    clearAllPtw()
    clearAllWeapons()
    clearAllAttach()
    img_gnarly.style.display = 'block'
}

function ptw_r99_4() {
    clearAllPtw()
    clearAllWeapons()
    clearAllAttach()
    img_unloader.style.display = 'block'
}

function ptw_alternator_1() {
    clearAllPtw()
    clearAllWeapons()
    clearAllAttach()
    img_ledrez.style.display = 'block'
    gal_text.style.display = 'block'
}

function ptw_alternator_2() {
    clearAllPtw()
    clearAllWeapons()
    clearAllAttach()
    img_gal.style.display = 'block'
    ledrez_text.style.display = 'block'
}

function ptw_alternator_3() {
    clearAllPtw()
    clearAllWeapons()
    clearAllAttach()
    img_palate.style.display = 'block'
}

function ptw_alternator_4() {
    clearAllPtw()
    clearAllWeapons()
    clearAllAttach()
    img_illuminator.style.display = 'block'
}

function ptw_alternator_5() {
    clearAllPtw()
    clearAllWeapons()
    clearAllAttach()
    img_ocean.style.display = 'block'
}










const page = document.getElementById("menupage")
var onOff = 0

function showHide2() {
    if (onOff === 0) {
        page.style.display = 'block'
        onOff = 1
        return
    }
    if (onOff === 1) {
        page.style.display = 'none'
        onOff = 0
        return
    }
}