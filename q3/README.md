##### 3. A trie (or radix tree, prefix tree) is a tree-like data structure that may be used for efficiently matching a string to a value, for example matching a URL route to a function, which is used for high performance routing. Each branch in this tree is valued by a prefix and a unique value, and this structure continues recursively until there are no more child branches. Given a list of words: "bear", "bears", "bearing", "beer", "boar", write a function that accepts these words as `(a, b, ...n)` and returns a trie.

  answer: [Link](https://github.com/ibrahem-amin/CT-answers/blob/master/q3/index.html#L11)

  * Here are some considerations:
  * A prefix is not necessarily a single character. For example, the given strings will contain the prefixes “ear”, “oar”, “ing”, and “er”. Would sorting the strings in advance simplify processing?
    * sorting will not simplify the process.

  * Bonus a): Write another function that accepts a string and returns either the unique value for a corresponding branch, or undefined if there was no match.
    * answer [link](https://github.com/ibrahem-amin/CT-answers/blob/master/q3/index.html#L69)

  * Bonus b): Explain the advantages and disadvantages of using a trie, versus the more common iteration through a list of regular expressions used for routing in web applications.
    * advantages:
      * takes less space.
      * takes less time to search word of m characters to be on worest case O(m).
    * disadvantages:
      * if there is any special characters it my result long and meaningful prefixes 
