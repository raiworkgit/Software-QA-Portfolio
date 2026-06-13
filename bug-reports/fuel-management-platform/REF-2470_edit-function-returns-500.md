**Bug ID:**  REF-2470   
**Severity:** Critical   
**Priority:** High   
**Project:** ReFuel   
**Environment:** Staging   

---

### Title:
Dealer and Fleet Edit Function Returns 500 Internal Server Error

### Description:
Editing Dealer and Fleet customer records results in a backend server error, preventing updates.

### Steps to Reproduce:
1. Login to Admin Portal
2. Navigate to Customers → Dealers
3. Click Edit
4. Repeat for Fleet customers

### Expected Result:
Edit page should load successfully with editable fields.

### Actual Result:
500 Internal Server Error is returned.

### Evidence:


### Notes:
Likely backend validation or missing entity mapping.
