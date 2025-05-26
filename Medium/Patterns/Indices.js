// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target){
    let map = new Map();  // Create a map to store the numbers and their indices
     for (let i = 0; i < nums.length; i++) {
         let complement = target - nums[i];  // Calculate the complement needed to reach the target
         if (map.has(complement)) {
             // If the complement exists in the map, return the indices
             return [map.get(complement), i];
         }
         // Otherwise, store the current number and its index in the map
         map.set(nums[i], i);
     }
 };
 
 let nums = [2,7,11,15];
 let targets = 9
 console.log(twoSum(nums,targets))