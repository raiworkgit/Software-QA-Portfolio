**Bug ID:** SECL-0354  
**Severity:** Medium  
**Priority:** Medium  
**Project:** Section-L  
**Environment:** Pre-production  

---

### Title:
[Crowdin In-Context | Sidebar Featured Banner] Banner Content Not Accessible in Crowdin In-Context Editor  

### Description:
Sidebar featured banner content is not accessible through the Crowdin in-context translation editor. As a result, translators are unable to select, edit, or validate translations for the affected sidebar content directly within the application interface.

### Steps to Reproduce:
1. Open the Crowdin in-context environment using a pre-production route
2. Navigate to sidebar banner 
3. Attempt to select or edit the sidebar banner text
5. Observe that the content is not available for selection or editing

### Expected Result:
Sidebar featured banner content should be available within the Crowdin in-context editor, allowing translators to edit and validate translations directly from the page.  

### Actual Result:
Sidebar featured banner content is not exposed to the Crowdin in-context editor and cannot be selected, edited, or validated for translation.  

### Evidence:
![Issue Preview](../../evidence/SECL-0354_inaccessible-crowdin-context.png)  

[View Full Recording](../../evidence/SECL-0354_inaccessible-crowdin-context.mp4)  


### Notes:
A minor usability issue remains where users may need to click near the edge of the Crowdin widget before edit icons become selectable. This does not block functionality but may affect ease of use.
