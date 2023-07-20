# Digital Alarm Clock Web Application

This is a Digital Alarm Clock web application that allows users to set and manage multiple alarms. The application is built using HTML, CSS, and JavaScript.

## Features

1. **Displaying Current Time (Clock)**: The application displays the current time in 12-hour format (HH:MM:SS AM/PM). The time automatically updates every second to reflect the current time.

2. **Set Alarms**: Users can set alarms by specifying the hours, minutes, seconds, and AM/PM using input fields. Clicking the "Set Alarm" button adds the alarm to the list.

3. **Display Alarm List**: All set alarms are displayed in a list. Each alarm entry shows the time in 12-hour format and includes a "Delete" button to remove the alarm.

4. **Delete Alarms**: Users can delete individual alarms from the list by clicking the "Delete" button next to each alarm.

5. **Alarm Alerts**: When an alarm's set time matches the current time, the application triggers an alert to notify the user that the alarm is going off.

## How to Use

1. Clone the repository or download the source code to your local machine.

2. Open the `index.html` file in your web browser to access the Digital Alarm Clock application.

### Digital Alarm Clock UI Components

1. **Time Display**: This section shows the current time in 12-hour format (HH:MM:SS AM/PM). The time automatically updates every second.

2. **Time Input for Alarm**: Users can enter values for hours, minutes, and seconds for the alarm. They can also select either AM or PM from the picklist. Clicking the "Set Alarm" button adds the alarm to the list.

   - If the user enters values outside the range (e.g., <0 or >12 for hours, or <0 or >59 for minutes/seconds), an alert will ask the user to enter correct values.

   - If the user leaves out any value for hours, minutes, or seconds, an alert will ask the user to enter all values.

3. **Alarm List**: The list displays all the alarms set by the user. Each entry shows the alarm time in 12-hour format, and there is a "Delete" button for each alarm. Clicking the "Delete" button removes the alarm from the list.

4. **Alarm Alerts**: If an alarm time matches the current time, an alert will notify the user that they have set an alarm with a matching time, and the alarm is going off now.

## Author

This Digital Alarm Clock application is developed by Yukta Sharma. You can contact me at yuktasharma2000@gmail.com for any questions or inquiries related to this project.

---

The converted text above is in Markdown format. You can use this in your project's README.md file to provide clear documentation and instructions for users.
