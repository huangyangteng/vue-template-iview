//使用方式：在需要用到的地方import {deepCopy} from ''

/**
 *
 *深拷贝
 * @export
 * @param {*} obj
 * @returns
 */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}
