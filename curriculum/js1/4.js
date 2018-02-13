/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, s, i = 0, output = '') => {
    
  if (i === n){
    return output
  }
  output = output + s 
  return solution(n, s, i+1, output)

}

module.exports = {
  solution,
};
