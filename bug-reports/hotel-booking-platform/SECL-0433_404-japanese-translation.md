**Bug ID:** SECL-0433  
**Severity:** High  
**Priority:** High  
**Project:** Section-L  
**Environment:** Pre-production  

---

### Title:
404 Error on Japanese Translation Page

### Description:
The Japanese translation page in the pre-production environment returns a 404 error when accessed. This prevents users and translators from viewing or validating localized content for the affected page.

### Steps to Reproduce:
1. Open the Section-L platform in pre-production environment.  
2. Navigate to sidebar
3. Click on language selector or add /ja/ on URL for another route.
4. Choose Japanese
5. Observe the page response.

### Expected Result:
The Japanese translation page should load successfully and display localized content for review and editing.

### Actual Result:
The page returns a 404 error and is not accessible in the pre-production environment.

### Evidence:
![404 Error Screenshot](../../evidence/SECL-0433_404-japanese-translation)

### Notes:
Issue may be related to missing route configuration, deployment mismatch, or untranslated content not being properly registered in the localization system.
