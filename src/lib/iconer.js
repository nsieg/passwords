import jsSHA from 'jssha/dist/sha1'

export function iconString(input) {

    const traffic = singleIconCode(input, 128640, 128709)
    const smiley = singleIconCode(input, 128512, 128591)
    const food = singleIconCode(input, 127799, 127868)
    const codes = [ traffic, smiley, food ]

    return codes.map(x => "&#" + x +";").join("")
}

export function singleIconCode(input, utfStartIdx, utfEndIdx) {
    const shaObj = new jsSHA("SHA-1", "TEXT", { encoding: "UTF8" });
    shaObj.update(input);
    const hash = shaObj.getHash("HEX");
    return utfStartIdx + parseInt(hash.toString(),16) % (utfEndIdx - utfStartIdx)
}


