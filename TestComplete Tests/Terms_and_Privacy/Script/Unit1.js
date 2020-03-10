function contact_us_larger_map()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btFirefox).Run("about:blank");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btFirefox).Navigate("http://54.245.179.85:8080/");
  //Create and send an HTTP request with the specified method
  var request, response, LastResult, request1, response1;
  request = aqHttp.CreateRequest("HEAD", "http://54.245.179.85.8080", "", "");
  request.SetHeader("x-dynatrace-test", "contact us");
  response = request.Send(undefined);
  LastResult = response;
  //Clicks the 'linkContact' control.
  Aliases.browser.pageEasytravelOneStepToHappiness2.linkContact.Click();
  //Create and send an HTTP request with the specified method
  request1 = aqHttp.CreateRequest("HEAD", "http://54.245.179.85.8080", "", "");
  request1.SetHeader("x-dynatrace-test", "contact us");
  response1 = request1.Send(undefined);
  LastResult = response1;
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageEasytravelContact2.Wait();
  //Clicks the 'linkViewOnLargerMap' control.
  Aliases.browser.pageEasytravelContact2.formIceform.linkViewOnLargerMap.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageGoogleMaps.Wait();
}