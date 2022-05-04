const searchBar = document.getElementById("searchBar")
const notFound = document.getElementById("notfound")
const R99ID = document.getElementById("r99id")
console.log(R99ID)
var nf = 1

var SMG = ["submachine", "submachinegun", "smg"]
var R99 = ["r99", "r9"]
var Volt = ["volt"]
var Altenator = ["alternator"]
var Prowler = ["prowler"]
var Car = ["car"]


var AR = ["flatline", "flat", "ar", "assaultrifle", "havoc", "hemlock", "r301", "carbine", "r301carbine", "vk47flat", "vl47flatline"]
var SNIPER = ["sniper", "sniperrifle", "change", "changerifle", "longbow", "longbowdmr", "kraber", "kraber.50calsniper", "sentinel"]
var PISTOL = ["wingman", "pistols", "handgun", "handguns", "re45", "p2020"]
var LMG = ["lmg", "spit", "spitfire"]
var SHOTGUN = ["eva", "eva8", "eva8auto", "mastif", "mastiff", "mastiffshotgun", "mozambique", "mozam", "pk", "peacekeeper"]
var MARKSMAN = ["3030", "repeater", "tripletake", "g7", "scout", "g7scout", "bocek", "bow", "bocekcompound", "bocekcompoundbow"]

var showR99 = 0
var showAlenator = 0

searchBar.addEventListener('keyup', (info) => {
    if (info.key === 'Enter') {
        nf = 1
        var typed = info.target.value.toLowerCase()
        var searched = typed.replace(/ /g, "")
        var searched = typed.replace(/-/g, "")
        console.log(searched)


        if (SMG.includes(searched)) {
            window.location.href = "//html/weapons/smg/smg.html"
            return;
        }
        if (R99.includes(searched)) {
            window.location.href = "/html/weapons/smg/r99.html"
            return;
        }
        if (Volt.includes(searched)) {
            window.location.href = "/html/weapons/smg/volt.html"
            return;
        }
        if (Altenator.includes(searched)) {
            window.location.href = "/html/weapons/smg/alternator.html"
            return;
        }
        if (Prowler.includes(searched)) {
            window.location.href = "/html/weapons/smg/prowler.html"
            return;
        }
        if (Car.includes(searched)) {
            window.location.href = "/html/weapons/smg/car.html"
            return;
        }







        if (AR.includes(searched)) {
            window.location.href = "/html/weapons/ar.html"
            return
        }
        if (SNIPER.includes(searched)) {
            window.location.href = "/html/weapons/sniper.html"
            return
        }
        if (PISTOL.includes(searched)) {
            window.location.href = "/html/weapons/pistol.html"
            return
        }
        if (LMG.includes(searched)) {
            window.location.href = "/html/weapons/lmg.html"
            return
        }
        if (SHOTGUN.includes(searched)) {
            window.location.href = "/html/weapons/shotgun.html"
            return
        }
        if (MARKSMAN.includes(searched)) {
            window.location.href = "/html/weapons/marksman.html"
            return
        }

        notFound.style.display = 'block'
    }
})
searchBar.addEventListener('keydown', (info) => {
    notFound.style.display = 'none'
})
const page = document.getElementById("menupage")
var onOff = 0

function showHide() {
    if (onOff === 0) {
        page.style.display = 'block'
        onOff = 1
        searchBar.style.display = 'none'
        return
    }
    if (onOff === 1) {
        page.style.display = 'none'
        searchBar.style.display = 'block'
        onOff = 0
        return
    }
}