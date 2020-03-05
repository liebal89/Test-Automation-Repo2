set HOME=%USERPROFILE%
cd "C:\Users\Administrator\Desktop\Test_Automation_Repo"
git pull
cd "C:\Program Files (x86)\SmartBear\TestExecute 14\x64\Bin\"
TestExecute.exe "C:\Users\Administrator\Desktop\Test_Automation_Repo\TestComplete Tests\easyTravel Test Automation.pjs" /r /e /p:"Login_Logout" /ExportSummary:"C:\Users\Administrator\Desktop\Test_Automation_Repo\Test Results\Login Logout\results.xml"
taskkill /IM firefox.exe /F



