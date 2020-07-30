# ServiceMeow
## A ServiceNow Plugin
### Current version: `0.3`
### Browsers supported:
• Chrome `75.0`

• Brave `0.65`

• Firefox `67.0`

### Description:
* Adds an icon to the browser toolbar, clicking it will open a fresh ServiceNow Incident form in a separate tab
* Clear Incident forms opened in a new tab get some of their field pre-filled:

  • Assignment Group
  
  • Urgency

  • Contact Type

  • Short Description

  • Description

* Pre-filled fields are also automatically highlighted
* Highlighting is also applied to the BI coding and KB section to point out fields that are not mandatory, but should be filled out nonetheless

### Version history:
```
0.3: Project renamed

0.2: Changed the fillout method from URL query to DOM manipulation
     Added form colors
     Added toolbar icon with its functionality
     Chrome and Brave port
```
### Current issues:
```
1.  DOM references do not work if the form is accessed in an iframe // done; need to auto-load on iframe src change
2.  Fields have to be refocused and then blurred for the values to be processed
```
### To be added:
```
1.  Highlighting of BI and KB sections for tabbed view // done
2.  Listener to be added to the CI field to catch and correct automatic Assignment Group changes
3.  Settings menu:
    3.1 Domain selector, if possible // not possible
    3.2 Color palettes // done
4. Update the Chrome/Brave port
```