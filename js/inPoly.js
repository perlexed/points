
/**
 * Определение принадлежности точки многоугольнику
 *
 * @param {array} xp
 * @param {array} yp
 * @param {int} x
 * @param {int} y
 * @returns {boolean}
 */
module.exports = function inPoly(xp, yp, x, y) {
    const npol = xp.length;
    let j = npol - 1;
    let c = false;
    for (let i = 0; i < npol; i++) {
        if (
            (
                (
                    (yp[i] <= y) && (y < yp[j])
                )
                || (
                    (yp[j] <= y) && (y < yp[i])
                )
            )
            && (
                x > (xp[j] - xp[i]) * (y - yp[i]) / (yp[j] - yp[i]) + xp[i]
            )
        ) {
            c = !c
        }
        j = i;
    }
    return c;
};