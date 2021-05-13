export function copyById(id) {
    let toCopy = document.querySelector('#' + id)
    toCopy.select()
    toCopy.setSelectionRange(0, 99999)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
    document.activeElement.blur()
}
