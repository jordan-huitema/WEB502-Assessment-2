function switchTo(id, pg) {
    // reset active class on buttons
    let btns = document.getElementsByClassName(pg)
    for (i = btns.length - 1; i >= 0; i--) {
        btns[i].className = btns[i].className.replace(` active`, "")
    }
    // set button class active
    let btn = document.getElementById(id)
    btn.className = `${btn.className} active`
    // switch elements
    toggle(pg.replace(`-switch`,""), 'hide')
    toggle(id, 'show')

}
console.log("ran switch.js")