// ye file me ny Async error k lia used krni ha is ko Controller me ja k import krna ha
//ye wala function tri catch wala ha orPromise Javascript wala ha...Promise.resolve(theFunc(req, res, next)).catch(next);

module.exports = theFunc => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
}