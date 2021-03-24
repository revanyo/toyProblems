//Using BinarySearch.com style for solution

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */

class Solution {
  solve(node) {
    if (node === null) {
      return 0;
    }
    let count = 1;
    let current = node;
    while (current.next != null) {
      current = current.next;
      count++;
    }
    return count;
  }
}
