[![Twitter Badge](https://img.shields.io/twitter/follow/halip26?style=social)](https://twitter.com/Halip26)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-0e76a8?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/halipuddin/)
[![Medium Badge](https://img.shields.io/badge/medium-%2312100E.svg?&style=for-square&logo=medium&logoColor=white)](https://medium.com/@halip26)

In this project Edit background color written in python, as you’ve seen in the preview image, users can change background color in seconds powered by Artificial Intelligence that already provided by [remove.bg](https://www.remove.bg) and you just need to call & use it thorough API (Application Programming Interface) that provided here [API](https://www.remove.bg/api).

<p align="center"><img src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif" style="width:100%"  /></p>

---

### 💻 &nbsp;Preview

<p align="center">Before</p>
<p align="center"><img src="images/preview1.png" style="width:100%" /></p>
<p align="center">After</p>
<p align="center"><img src="images/preview2.png" style="width:100%" /></p>

- 📫 How to reach me: &nbsp; [![Linkedin Badge](https://img.shields.io/badge/-Halipuddin%20Hambali-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/halipuddin/)

---

### 🛠 &nbsp;Languages and Tools

<p>
<img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg" title="Python" alt="Python" width="40" height="40"/>&nbsp;

<img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg" title="VSCode" alt="VSCode" width="40" height="40"/>&nbsp;

</p>

---

### **Project: Digital Clock**

This project implements a simple digital clock using HTML, CSS, and JavaScript. It displays the current time in 12-hour format with AM/PM indicators.

**Structure:**

- **index.html:** Contains the HTML structure of the clock, including the title, heading, and a placeholder element (`div`) where the time will be displayed.
- **style.css:** Defines the visual styling of the clock (optional).
- **script.js:** Implements the JavaScript logic to update the time dynamically.

**Functionality:**

1. **Retrieving Time:**
   - The `showTime()` function creates a new `Date` object to access the current time.
   - It extracts the hours, minutes, and seconds values.

2. **Formatting Time:**
   - For hours:
     - If `hours` is 0, it's set to 12 (midnight).
     - If `hours` is greater than 12, it's adjusted to the 12-hour format and the `session` is set to "PM".
   - For minutes and seconds:
     - If a value is less than 10, a leading "0" is added for consistent two-digit display.

3. **Displaying Time:**
   - The formatted time string is constructed using string concatenation.
   - The `document.getElementById("MyClockDisplay").innerText` property is used to update the content of the placeholder element with the current time.

4. **Continuous Update:**
   - The `setTimeout()` function calls `showTime()` repeatedly every 1 second (1000 milliseconds) to ensure the clock updates dynamically.

**Running the Project:**

1. Save the HTML, CSS, and JavaScript files in the same directory.
2. Open the `index.html` file in a web browser to view the digital clock.

**Customization:**

- You can modify the HTML structure and CSS styles to customize the appearance of the clock.
- While the current code uses a basic 12-hour format, you could potentially extend it to include additional features like 24-hour format, date display, or alarm functionality.

**Additional Notes:**

- The provided code assumes you have basic HTML, CSS, and JavaScript knowledge.
- For more advanced features, consider using JavaScript libraries or frameworks.
