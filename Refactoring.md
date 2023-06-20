# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

In this refactored version, I focused on simplifying the logic and reducing the nesting level to make the code more readable. Early returns allow for a clearer flow of execution and reduce unnecessary indentation. The use of a helper function for hashing eliminates code duplication and makes the main function more concise. Additionally, I ensured that the refactored code maintains the same functionality as the original version by including comprehensive unit tests.

In this refactored version, i have focused on the following points mentioned below:-
1. Simplifying the logic by reducing the nested conditions to make the code more readable.
2. Early returns statements.
3. The use of a helper function for hashing to eliminate code duplication, hence, reducing the lines of code.
5. I ensured that the refactored code maintains the same functionality as the previous one.