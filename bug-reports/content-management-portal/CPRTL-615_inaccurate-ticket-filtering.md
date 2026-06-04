### Bug ID
CPRTL-615

## Severity
Medium

## Priority
High

### Project
Coden Portal

## Environment
- Environment: Pre-production
- Platform: Web Application

### Title
[Maintenance & Support | Date Filter] Incorrect Ticket Filtering Causes Inaccurate Progress Bar

---

### Description
The date filter does not correctly capture the intended ticket data. Some tickets that fall outside the selected date range are still included in the results. Because the platform progress bar is calculated based on the filtered tickets, this results in an incorrect progress percentage being displayed.

### Steps to Reproduce
1. Open Coden Portal.
2. Navigate to Maintenance & Support.
3. Select a platform or project with existing tickets.
4. Apply a specific date range using the **Date Filter**.
5. Review the list of filtered tickets.
6. Verify whether all displayed tickets fall within the selected date range.
7. Observe the progress bar percentage shown for the selected platform.

### Expected Result
Only tickets that fall within the selected date range should be included in the filtered results. The progress bar should calculate and display its percentage based solely on the filtered tickets.

### Actual Result
Some tickets outside the selected date range are included in the filtered results. As a result, the progress bar calculation includes incorrect ticket data and displays an inaccurate percentage.


### Evidence

### Screenshot
![Date Filter Issue](../../evidence/date-filter-progress-bar-error.png)

### Screen Recording
[View Recording](../../evidence/date-filter-progress-bar-error.mp4)

---

## Notes

- Issue affects the accuracy of platform progress tracking.
- Progress bar computation appears to use ticket records outside the selected date range.
- Further validation is recommended to ensure the date filter is consistently applied to all dependent calculations.
