function findUnsortedSubarray(nums) {
      let min = Number.MAX_VALUE;
      let max = Number.MIN_VALUE;
      let flag = false;

      for (let i = 1; i < nums.length; i++) {

          if (nums[i] < nums[i - 1]) {
              flag = true;
          }
          if (flag) {
              min = Math.min(min, nums[i]);
              
          }
      }

      console.log(`min = ${min}`);
      Tracer.delay();

      flag = false;
      for (let i = nums.length - 2; i >= 0; i--) {

          if (nums[i] > nums[i + 1]) {
              flag = true;
          }
          if (flag) {
              max = Math.max(max, nums[i]);
              
          }
      }

      console.log(`max = ${max}`);

      let l;
      let r;
      for (l = 0; l < nums.length; l++) {

          if (min < nums[l]) {
              
              break;
          }
      }
      
      for (r = nums.length - 1; r >= 0; r--) {

          if (max > nums[r]) {
              
              break;
          }
      }

      const result = r - l < 0
          ? 0
          : r - l + 1;

      console.log(`result = ${result}`);
      Tracer.delay();

      return result;
  }
  findUnsortedSubarray(D);
