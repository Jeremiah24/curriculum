/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */
  const solution = (num, i = 2, output = 0) => {
    if(i === num) {
    console.log('result:', output);
      return output
    }

    console.log(i);
    if (num%i === 0)
      output = output + i
    return solution(num,i+1,output)
   
  }
solution(6)


module.exports = {
  solution
}
