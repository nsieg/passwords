import jsSHA from 'jssha/dist/sha1'

export function hashSimple(master, alias, resultLength) {
    return b64Hash(master + alias).slice(0,resultLength)
}

export function hash(master, alias, resultLength) {
    const hash = b64Hash(master + alias)
    let result = hash.slice(0,resultLength)

    const isLower = x => /[a-z]/.test(x)
    const isUpper = x => /[A-Z]/.test(x)
    const isDigit = x => /[0-9]/.test(x)
    const isSpecial = x => !/[a-zA-Z0-9]/.test(x)

    const checks = [isLower, isUpper, isDigit, isSpecial]

    for(let check of checks) {
        while (Array.from(result).filter(check).length < 2) {
            const idxToSwap = firstIdxOfMostAvailableType(result, checks)
            const newEl = firstEleOfType(hash, resultLength, check)
            result = result.substring(0,idxToSwap) + newEl + result.substring(idxToSwap + 1)
        }        
    }

    return result
}

export function b64Hash(input) {
    const shaObj = new jsSHA("SHA-1", "TEXT", { encoding: "UTF8" });
    shaObj.update(input);
    const hash = shaObj.getHash("B64");

    //const sha1 = SHA1(input)
    //const b64 = Base64.stringify(sha1)
    return hash
}

export function firstEleOfType(hash, startIdx, check) {
    const newEl = [...hash.slice(startIdx)].find(x => check(x))
    if (newEl === undefined) {
        return firstEleOfType(b64Hash(hash), 0, check)
    }
    return newEl
}

export function firstIdxOfMostAvailableType(input, checks) {
    const noPerCheck = checks.map(x => [...input].filter(y => x(y)).length)
    const checkWithMostValues = checks[noPerCheck.indexOf(Math.max(...noPerCheck))]
    const idxToSwap = [...input].findIndex(x => checkWithMostValues(x))
    return idxToSwap
}
