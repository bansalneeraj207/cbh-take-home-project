# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Update Facilities, Shifts Table Table to Store Custom Agent IDs

Description:
Currently, the Facilities, Shifts Table table in the database does not have a field to store custom Agent IDs. 
This ticket involves updating the Facilities, Shifts Table table schema to include a new column for storing custom Agent IDs.

Acceptance Criteria:

The Facilities table schema is updated to include a new column named "custom_agent_id" of appropriate data type (e.g., VARCHAR).
The database schema migration script is created and tested to ensure the update is applied successfully.

Implementation Details:

Add a new column named "custom_agent_id" to the Facilities table with an appropriate data type for storing custom Agent IDs.
Write a migration script to apply the schema changes to the database.
Update any relevant application code to support the new column and ensure data integrity.

Time/Effort Estimate:
This ticket is estimated to take approximately 8 hours, including schema review, migration script development, testing, and code updates.

Ticket 2: Modify getShiftsByFacility Function to Retrieve Custom Agent IDs

Description:
This ticket involves modifying the existing function to include custom Agent IDs.

Acceptance Criteria:

The function returns the custom Agent IDs along with the other metadata for each Shift.

Implementation Details:

Modify the function logic to include the retrieval of custom Agent IDs from the Shifts table.
Write comprehensive test cases to verify the correctness of the updated function.

Time/Effort Estimate:
This ticket is estimated to take approximately 2 hours, including understanding the existing function, implementing the necessary changes, testing, and test case development.

Ticket 3: Update generateReport Function to Use Custom Agent IDs

Description:
This ticket involves modifying the generateReport function to incorporate the custom Agent IDs provided by the Facilities.

Acceptance Criteria:
The updated function generates the reports correctly, reflecting the custom Agent IDs provided by Facilities.

Implementation Details:

Modify the function logic to utilize the custom Agent IDs instead of the internal database IDs when generating reports.
Verify that the generated reports include the custom Agent IDs correctly.

Time/Effort Estimate:
This ticket is estimated to take approximately 2 hours, including understanding the existing function, implementing the necessary changes, testing, and report generation verification.