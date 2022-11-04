import { getRandomBoolean, getRandomNumber, questionFormat } from "../helpers";
export const level2 = [
    "Introduction to whole number until 100",
    "Addition and subtraction of whole number until 100",
    "Multiplication and division of whole number until 100",
    "Introduction to 1/2, 1/3, and 1/4",
];

export const introductionToWholeNumberUntil100 = (): Result => {
    const answer = getRandomNumber(5, 100);
    const step = getRandomNumber(1, 4);
    const isAbove = getRandomBoolean();
    const question = questionFormat(`What's ${step} numbers ${isAbove ? 'after' : 'before'} ${isAbove ? answer + step : answer - step}`);
    // Output: What's X numbers before (answer - X)
    // Output: What's X numbers after (answer + X)

    return { question, answer };
}

export const additionAndSubtractionOfWholeNumberUntil100 = (): Result => {
    let firstNumber = getRandomNumber(1, 100);
    let secondNumber = getRandomNumber(1, 100);
    const isPlus = getRandomBoolean();
    // While addition result is above 100 or subtraction is below 1, generate new numbers
    while (
        isPlus && firstNumber + secondNumber > 100
        || !isPlus && firstNumber - secondNumber < 1
    ) {
        firstNumber = getRandomNumber(1, 100);
        secondNumber = getRandomNumber(1, 100);
    }

    const answer = isPlus ? firstNumber + secondNumber : firstNumber - secondNumber;
    const question = questionFormat(`${firstNumber} ${isPlus ? "+" : "-"} ${secondNumber} = ...?`);
    // Output: X + Y = ...?
    // Output: X - Y = ...?

    return { question, answer };
}

export const multiplicationAndDivisionOfWholeNumberUntil100 = (): Result => {
    let firstNumber = getRandomNumber(1, 100);
    let secondNumber = getRandomNumber(1, 100);
    const isMultiply = getRandomBoolean();
    // While multiplication result is above 100 or division result is not whole number, generate new numbers
    while (
        isMultiply && firstNumber * secondNumber > 100
        || !isMultiply && firstNumber % secondNumber !== 0
    ) {
        firstNumber = getRandomNumber(1, 100);
        secondNumber = getRandomNumber(1, 100);
    }

    const answer = isMultiply ? firstNumber * secondNumber : firstNumber - secondNumber;
    const question = questionFormat(`${firstNumber} ${isMultiply ? "+" : "-"} ${secondNumber} = ...?`);
    // Output: X * Y = ...?
    // Output: X / Y = ...?

    return { question, answer };
}

export const introductionToHalvesThirdsAndFourth = (): Result => {
    const denominator = getRandomNumber(2, 4);
    const answer = getRandomNumber(1, 100);

    const question = questionFormat(`1/${denominator} of ${answer * denominator} = ...?`);

    return { question, answer };
}
