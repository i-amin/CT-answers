# CT-answers

##### 1. Every DOM Node has a read-only property named `nodeType`, i.e. a nodeType valued `3` means it’s a `Text` node. Given an arbitrary DOM Node, write a function that finds all nested Text nodes and returns them in no particular order as an array.

##### 2. An object that has the prototype of a `Square` function inherits the prototype of a `Rectangle` function, but of course not all rectangles are squares. Suppose an instance of `Rectangle` has its own properties `width` and `height` changed so that it becomes a square.

  * 2a) What is the condition for a rectangle to also be a square? (not a trick question)
  * 2b) How can the Square class inherit the Rectangle class?
  * 2c) How can a rectangle instance inherit the `Square` prototype when it is actually a square?
  * 2d) Given a `Square` instance, how can it lose th	e `Square` prototype when it is no longer a square?

##### 3. A trie (or radix tree, prefix tree) is a tree-like data structure that may be used for efficiently matching a string to a value, for example matching a URL route to a function, which is used for high performance routing. Each branch in this tree is valued by a prefix and a unique value, and this structure continues recursively until there are no more child branches. Given a list of words: "bear", "bears", "bearing", "beer", "boar", write a function that accepts these words as `(a, b, ...n)` and returns a trie.

  * Here are some considerations:
  * A prefix is not necessarily a single character. For example, the given strings will contain the prefixes “ear”, “oar”, “ing”, and “er”. Would sorting the strings in advance simplify processing?

  * Bonus a): Write another function that accepts a string and returns either the unique value for a corresponding branch, or undefined if there was no match.

  * Bonus b): Explain the advantages and disadvantages of using a trie, versus the more common iteration through a list of regular expressions used for routing in web applications.