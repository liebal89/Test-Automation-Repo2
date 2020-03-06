set HOME=%USERPROFILE%
cd "C:\Users\Administrator\Desktop\Test Automation Repo\Test-Automation-Repo2"
git clean -df
git fetch
git pull
cd "C:\Program Files (x86)\SmartBear\TestExecute 14\x64\Bin\"
TestExecute.exe "C:\Users\Administrator\Desktop\Test Automation Repo\Test-Automation-Repo2\TestComplete Tests\easyTravel Test Automation.pjs" /r /e /p:"Contact_Us_Larger_Map" /ExportSummary:"C:\Users\Administrator\Desktop\Test Results\Contact Us\results.xml"
taskkill /IM firefox.exe /F
git clean -df

