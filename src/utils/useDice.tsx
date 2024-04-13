export default function useDice() {

    const dSix = (multiRoll?: number) => {
        const rolls = multiRoll ? multiRoll : 1;
        const numArr: number[] = [];
        for (let i = 0; i < rolls; i++) {
            numArr.push(Math.floor(Math.random() * 6) + 1)
        }
        return numArr;
    }

    const dTen = (multiRoll?: number) => {
        const rolls = multiRoll ? multiRoll : 1;
        const numArr: number[] = [];
        for (let i = 0; i < rolls; i++) {
            numArr.push(Math.floor(Math.random() * 10) + 1)
        }
        return numArr;
    }

    const sumArr = (arr: number[]) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) { sum = sum + arr[i] }
        return sum;
    }

    return {
        dSix,
        dTen,
        sumArr
    }
}