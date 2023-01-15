# Learnable Task: Credit Card Number Validation
 Validate a credit card number

# REGEX PATTERNS USED
## mastercardValidate Pattern test for values based on standard of the Mastercard 
- ^  represent the start of a pattern.
- 5[1-5]{1} represent that the first word must be 5 and the second word must be 1 - 5
- [0-9]{2} represent that the next two letters must be between 0 - 9 
- [\s]? represent that the whitespace character is optional because of the ? sign
- [0-9]{4} represent that the next four letters must be between 0 - 9
- [\s]? represent that the whitespace character is optional because of the ? sign
- [0-9]{4} represent that the next four letters must be between 0 - 9
‘$’ represents the end of the pattern.

## visaValidate Pattern test for values based on standard of the Visa Card 
- ^  represent the start of a pattern.
- 4{1} represent that the first word must be 4
- [0-9]{3} represent that the next three letters must be between 0 - 9 
- [\s]? represent that the whitespace character is optional because of the ? sign
- [0-9]{4} represent that the next four letters must be between 0 - 9
- [\s]? represent that the whitespace character is optional because of the ? sign
- [0-9]{4} represent that the next four letters must be between 0 - 9
- [\s]? represent that the whitespace character is optional because of the ? sign
- [0-9]{4} represent that the next four letters must be between 0 - 9
‘$’ represents the end of the pattern.

## expressValidate Pattern test for values based on standard of the American Express Card 
- ^  represent the start of a pattern.
- 3[4|7]{1} represent that first letter must be 3 and the second letter can be either 4 or 7.
- [0-9]{2} represent that the next two letters must be between 0 - 9 
- [\s]? represent that the whitespace character is optional because of the ? sign
- [0-9]{4} represent that the next four letters must be between 0 - 9
- [\s]? represent that the whitespace character is optional because of the ? sign
- [0-9]{4} represent that the next four letters must be between 0 - 9
- [\s]? represent that the whitespace character is optional because of the ? sign
- [0-9]{3} represent that the next three letters must be between 0 - 9
‘$’ represents the end of the pattern.
