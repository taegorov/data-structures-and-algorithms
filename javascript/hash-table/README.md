# Hashtables
<!-- Short summary or background information -->

Implementation of hash tables and its add, get, contains, and hash methods.

## Challenge
<!-- Description of the challenge -->

Implement a Hashtable Class with the following methods:

    add
        Arguments: key, value
        Returns: nothing
        This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
    get
        Arguments: key
        Returns: Value associated with that key in the table
    contains
        Arguments: key
        Returns: Boolean, indicating if the key exists in the table already.
    hash
        Arguments: key
        Returns: Index in the collection for that key


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Time O(1)
Space O(n)

## API
<!-- Description of each method publicly available in each of your hashtable -->


`Add()`

When adding a new key/value pair to a hashtable:

    send the key to the GetHash method.
    Once you determine the index of where it should be placed, go to that index
    Check if something exists at that index already, if it doesn’t, add it with the key/value pair.
    If something does exist, add the new key/value pair to the data structure within that bucket.

`Find()`

The Find takes in a key, gets the Hash, and goes to the index location specified. Once at the index location is found in the array, it is then the responsibility of the algorithm the iterate through the bucket and see if the key exists and return the value.

`Contains()`

The Contains method will accept a key, and return a bool on if that key exists inside the hashtable. The best way to do this is to have the contains call the GetHash and check the hashtable if the key exists in the table given the index returned.

`GetHash()`

The GetHash will accept a key as a string, conduct the hash, and then return the index of the array where the key/value should be placed.

([Source for the above here](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-30/resources/Hashtables.html))

## References

I referenced instructor Jacob Knaack's code during this code challenge, which the class worked on with him during lecture. 