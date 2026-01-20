class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            self.head.next = self.head  # Circular link
        else:
            temp = self.head
            while temp.next != self.head:
                temp = temp.next
            temp.next = new_node
            new_node.next = self.head  # Circular link

    def display(self):
        if not self.head:
            print("List is empty")
            return
        temp = self.head
        while True:
            print(temp.data, end=" -> ")
            temp = temp.next
            if temp == self.head:
                break
        print("(Back to Head)")

    def delete(self, key):
        if not self.head:
            return
        temp = self.head
        prev = None
        while True:
            if temp.data == key:
                if prev:
                    prev.next = temp.next
                else:  # Deleting head
                    tail = self.head
                    while tail.next != self.head:
                        tail = tail.next
                    if self.head == self.head.next:  # Only one node
                        self.head = None
                        return
                    tail.next = self.head.next
                    self.head = self.head.next
                return
            prev = temp
            temp = temp.next
            if temp == self.head:
                break

# User Input
cll = CircularLinkedList()
n = int(input("Enter number of elements for Circular Linked List: "))
for _ in range(n):
    cll.append(int(input("Enter element: ")))

print("Circular Linked List:")
cll.display()

delete_key = int(input("Enter value to delete: "))
cll.delete(delete_key)
print("After Deletion:")
cll.display()
