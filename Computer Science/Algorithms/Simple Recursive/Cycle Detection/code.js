var listHasCycle = function(head) {

    // 1. is there a cycle?
    let slow = head.next
    let fast = head.next.next
    
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next.next
        
    }

    // 2. where does the cycle start?
    let cycleStartPosition = 0
    slow = head
    
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
        cycleStartPosition += 1
        
    }

    // 3. what is the length of the cycle?
    let cycleLength = 1
    fast = slow.next
    
    while (slow !== fast) {
        fast = fast.next
        cycleLength += 1
        
    }

    return {
      cycleLength,
      cycleStartPosition,
    }
}
// log {
const res = listHasCycle(list)
logTracer.print(`cycle start position: ${res.cycleStartPosition}`)
logTracer.print("\n")
logTracer.print(`cycle length: ${res.cycleLength}`)
