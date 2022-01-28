package DataStructure;

public class DoubleLinkedList {
	class Node{  
	    int data;  
	    Node previous;  
	    Node next;  

	    public Node(int data) {  
	        this.data = data;  
	    }  
	}  

	//Represent the head and tail of the doubly linked list  
	Node head, tail = null;  
	  
	//addNode() will add a node to the list  
	public void addNode(int data) {  
	    //Create a new node  
	    Node newNode = new Node(data);  

	    //If list is empty  
	    if(head == null) {  
	        //Both head and tail will point to newNode  
	        head = tail = newNode;  
	        //head's previous will point to null  
	        head.previous = null;  
	        //tail's next will point to null, as it is the last node of the list  
	        tail.next = null;  
	    }  
	    else {  
	        //newNode will be added after tail such that tail's next will point to newNode  
	        tail.next = newNode;  
	        //newNode's previous will point to tail  
	        newNode.previous = tail;  
	        //newNode will become new tail  
	        tail = newNode;  
	        //As it is last node, tail's next will point to null  
	        tail.next = null;  
	    }  
	}  

	//display() will print out the nodes of the list  
	public void display() {  
	    //Node current will point to head  
	    Node current = head;  
	    if(head == null) {  
	        System.out.println("List is empty");  
	        return;  
	    }  
	    System.out.println("Nodes of doubly linked list: ");  
	    while(current != null) {  
	        //Prints each node by incrementing the pointer.  

	        System.out.print(current.data + " ");  
	        current = current.next;  
	    }  
	}  

	public static void main(String[] args) {  

	    DoubleLinkedList dList = new DoubleLinkedList();  
	    //Add nodes to the list  
	    dList.addNode(20);  
	    dList.addNode(25);  
	    dList.addNode(30);  
	    dList.addNode(35);  
	    dList.addNode(40);  

	    //Displays the nodes present in the list  
	    dList.display();  
	}  

}