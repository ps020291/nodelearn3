# nodelearn3


MongoDB Schema
Student
* Name
* Mobile
* Image
* EnrolledBatch [{BatchId, Joining Date}]
* Email/Username
* Password
* Active

Batch
* Batch Name
* Type


Course
* Name
* Duration
* Type
* Tags []
* BatchEnrolled []



Course Chapter
* Chapter title
* Seq Order
* Active
* Course ID
* Type [Free, Restricited]
* Content
* AssigendToBatch []  `if added * then assigned to all enrolled course batch`

