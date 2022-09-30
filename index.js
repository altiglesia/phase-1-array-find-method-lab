function superbowlWin(recordArray) {
    const result = recordArray.find(recordArray => recordArray.result === 'W');
    return !!result ? result.year: undefined;
}