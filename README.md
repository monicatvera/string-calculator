# Kata string calculator

This kata proposes the implementation of a function that performs the sum of the elements of an expression that receives as a parameter in the form of a character string.

## Test list
This expression has some peculiarities. Let's see the different use cases that we must cover:
  - [] In the case of receiving null or an empty string, the function must return 0.
  - [] In the case of receiving only a number in string format, it must be converted to a numeric type and returned.
  - [] In the case of receiving several numbers, it must correctly return the result of the sum. The numbers will be separated, by default, by commas.
  - [] It could be the case that some of the items separated by commas were a non-numeric character, such as a letter. These values should not affect the total result.
  - [] Lastly, the function must support custom separators. To do this, the first part of the expression will indicate the configuration. The beginning of the configuration will be given by a double slash, then the next character would be the separator chosen by the user and the end of the configuration is indicated by another slash.
