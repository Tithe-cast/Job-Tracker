
Questions & Answers

1️.Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

In JavaScript, DOM selection methods are used to access HTML elements for manipulation. The method getElementById() selects a single element based on its unique id attribute and returns one element only. It is fast and direct. In contrast, getElementsByClassName() selects elements using a class name and returns an HTMLCollection, which is live and automatically updates when the DOM changes.
On the other hand, querySelector() selects the first element that matches a given CSS selector. It is more flexible because it supports complex selectors such as class, id, and attribute combinations. Meanwhile, querySelectorAll() selects all elements that match a CSS selector and returns a static NodeList, which does not update automatically. Therefore, traditional methods are specific and simple, while query selector methods are more powerful and versatile.


2️. How to Create and Insert a New Element into the DOM

Creating and inserting a new element into the DOM involves a structured process. First, a new element is created using document.createElement(). At this stage, the element exists only in memory. It is not yet visible on the webpage.
Second, content or attributes are added using properties such as innerText, textContent, or by setting class and id attributes. The element gradually takes form.
Finally, the element is inserted into the document using methods like appendChild(), append(), or prepend(). Once inserted, it becomes part of the DOM structure and is rendered on the webpage. This process enables dynamic content creation in modern web applications.


3️.What is Event Bubbling? How Does It Work?

Event bubbling is a mechanism in the DOM event model where an event starts from the target element and then propagates upward through its parent elements. In simple terms, when a child element triggers an event, the event does not stop there. It moves upward. From child to parent. From inner to outer elements.
For example, if a button is placed inside a div and the button is clicked, the click event first executes on the button. Then it propagates to the div, and possibly to the body and document. This upward movement is known as event bubbling. It allows multiple elements to respond to a single event, though it must be managed carefully to avoid unexpected behavior.


4️.What is Event Delegation in JavaScript? Why is It Useful?

Event delegation is a technique where a single event listener is attached to a parent element instead of attaching separate listeners to multiple child elements. This approach works because of event bubbling. When a child element triggers an event, it bubbles up to the parent, where the event can be handled.
Inside the parent’s event handler, the event.target property is used to identify which child element initiated the event. This technique is efficient. Clean. Practical. It improves performance by reducing the number of event listeners, saves memory, and works effectively for dynamically added elements. Therefore, event delegation is considered a best practice in JavaScript event handling.


5️.Difference between preventDefault() and stopPropagation()

The methods preventDefault() and stopPropagation() are used to control event behavior in JavaScript, but they serve different purposes.
The method preventDefault() prevents the browser’s default action associated with an event. For example, it can stop a form from submitting or prevent a link from navigating to another page. However, the event itself continues to propagate through the DOM.
In contrast, stopPropagation() prevents the event from moving upward to parent elements. It stops the bubbling process. The default browser action may still occur unless explicitly prevented.
Thus, preventDefault() controls default browser behavior, while stopPropagation() controls event flow within the DOM. Understanding this distinction are essential for effective event management.

