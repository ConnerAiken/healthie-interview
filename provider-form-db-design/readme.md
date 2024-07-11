# Question

Healthie is a platform which health and wellness providers use to provide services for their clients.
We want to create a new feature which allows providers to create forms for their clients to fill out.
Using a drag-and-drop interface, they can create a type of form which will then be filled out by multiple clients.

We want to support these types of form elements:
● text field
● select fields
● radio buttons
● checkboxes

Design the database schema you would use to implement this feature. The schema should support both
● providers creating multiple types of forms which any client can fill out
● clients filling out a form with answers

# Assumptions

● Providers and Clients have distinct accounts per organization
● Forms can be deleted/archived
● We want to retain historical form submissions even if a form is deleted
● Forms are unique to organizations
● I intentionally did not account for any indexing, only primary/foreign keys since the next question touches on that
