/**
 * Solutions for Advent of Code 2020, Day 3, Part 1.
 * Original problem: https://adventofcode.com/2020/day/3
 */


 let testInput = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#'
];

// let input = testInput;
let input = require('../lib/get-input').getInput();

let height = input.length;
let width = input[0].length;
let position = 0;
let numTrees = 0;

for (let i = 0; i < height; i++) {
  if (input[i][position] == '#') {
    numTrees++;
  }
  position = (position + 3) % width;
}

console.log(numTrees);