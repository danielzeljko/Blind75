"use strict";

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const mergeTwoLists = function (list1, list2) {
  const head = new ListNode(null, null);
  let tail = head;

  while (list1 !== null && list2 != null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1) tail.next = list1;
  if (list2) tail.next = list2;

  return head.next;
};


