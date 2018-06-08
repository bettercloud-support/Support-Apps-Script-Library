1. Create a Google Sheet in Google Drive.
2. Input the Group emails you wish to remove members from in Column A and the email addresses of the members you wish to remove in Column B. ( http://screenshots.bettercloud.com/3Z1A1C0w1C3B )
3. In the sheet, go to Tools > Script Editor.
4. Remove any existing code and paste the Apps Script attached into the Script Editor: http://screenshots.bettercloud.com/0f1q0p0Q3y3L
5. Go to Resources > Advanced Google Services and then enable the Admin Directory API. Enable the Admin SDK from the Google API console as well. http://screenshots.bettercloud.com/0r123C1z1608
6. Save & Run the script.
7. Column C should populate with SUCCESS in the Group email row for successful removals, or errors if applicable
