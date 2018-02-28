DISCLAIMER: Sample scripts in this guide are not supported under any BetterCloud, Inc. (“BetterCloud”) support program or service and shall be deemed “Beta Services” under any Master Subscription Agreement or any other services agreement entered into with BetterCloud. The sample scripts are provided AS IS without representation or warranty of any kind, whether express or implied. BetterCloud disclaims all implied warranties including, without limitation, any implied warranties of merchantability or of fitness for a particular purpose. By using a sample script, you acknowledge and agree: (a) that the entire risk arising out of the use or performance of the sample scripts and documentation remains with you: and (b) that in no event shall BetterCloud, its employees, officers, directors, contractors or agents, or anyone else involved in the creation, production, or delivery of the scripts, be liable for any loss, costs, or damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or other pecuniary loss) arising out of or relating to the performance, use of, or inability to use the sample scripts or documentation, even if BetterCloud has been advised of the possibility of such damages.

SUMMARY: This script is taking every Google Group that contains a chosen string in their username and changes their domain to a given domain. (e.g., changing a Group with the string "corp" that is on @gameofclouds.com and changes the domain to @b.gameofclouds.com)

1) Open a new Google Sheet in Google Drive.
2) Go to Tools > Script Editor.
3) Remove any existing code and paste the Apps Script attached into the Script Editor.
4) Edit the domain string in the script to your chosen domain. http://screenshots.bettercloud.com/3W2w1S0A0Q2a
5) Change (string.indexOf("distro0"), to your own desried group keyword. Change the domain and the desired subdomains to your own as well.
http://screenshots.bettercloud.com/33132O2j1K41
6) Go to Resources > Advanced Google Services and enable the Admin Directory API. Enable the Admin SDK from the API console. http://screenshots.bettercloud.com/1H2m0o2y2Y0I
7) Run the script, click on View > Logs to see the groups that were changed. http://screenshots.bettercloud.com/340T1D0d1U17
