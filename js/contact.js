const page = document.getElementById("menupage")
var onOff = 0

function showHide() {
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