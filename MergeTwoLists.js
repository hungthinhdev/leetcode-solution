/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  [1,2,4]
//  [1,3,4]

function ListNode(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
}

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

var l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next = new ListNode(4);

var print = function(list) {
    let curr = list;
    while (curr) {
        console.log(curr.val);
        curr = curr.next;
    }
} 

var isEmpty = (mergedList) => mergedList === null;

var pushBack = function(list, val) {
    let newNode = new ListNode(val, undefined);

    if (isEmpty(list)) {
        list = newNode;
        return list;
    } 

    let currNode = list;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    currNode.next = newNode;
    return list;
}

var mergeTwoLists = function(l1, l2) {
    let mergedList = null;
    let list1 = l1, list2 = l2, val = 0;
    while (list1 && list2) {
        if (list1.val === list2.val) {
            val = list1.val;
            list1 = list1.next;
        } else if (list1.val < list2.val) {
            val = list1.val;
            list1 = list1.next;
        } else {
            val = list2.val;
            list2 = list2.next;
        }
        mergeTwoLists = pushBack(mergedList, val);
    }

    while (list1) {
        val = list1.val;
        mergedList = pushBack(mergedList, val);
        list1 = list1.next;
    }   

    while (list2) {
        val = list2.val;
        mergedList = pushBack(mergedList, val);
        list2 = list2.next;
    }

    return mergedList;
};

var mergeTwoLists = function(l1, l2) {
    // Check if either of the lists is null
    if (isEmpty(l1)) {
        return l2;
    } 

    if (isEmpty(l2)) {
        return l1;
    }

    // Head of the new linked list - this is the head of the resultant list
    let head = null;
    // Reference of head which is null at this point
    let temp = head;

    // Choose head which is smaller of the two lists
    if (l1.val <= l2.val) {
        head = temp = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        head = temp = new ListNode(l2.val);
        l2 = l2.next;
    }

    // Loop until any of the list become null
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            temp.next = new ListNode(l1.val);
            temp = temp.next;
            l1 = l1.next;
        } else {
            temp.next = new ListNode(l2.val);
            temp = temp.next;
            l2 = l2.next;
        }
    }

    // Add all the nodes in l1, if remaining
    while (l1) {
        temp.next = new ListNode(l1.val);
        temp = temp.next;
        l1 = l1.next;
    }

    // Add all the nodes in l2, if remaining
    while (l2) {
        temp.next = new ListNode(l2.val);
        temp = temp.next;
        l2 = l2.next;
    }

    return head;
}

var mergedList = mergeTwoLists(l1, l2);
print(mergedList);

