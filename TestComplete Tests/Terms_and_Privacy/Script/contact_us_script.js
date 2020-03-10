
  
  function httpGetRequest()
{
  var address = "http://54.245.179.85:8079";

  // Create an aqHttpRequest object
  var aqHttpRequest = aqHttp.CreateGetRequest(address);

  // Specify the Content-Type header value
  aqHttpRequest.SetHeader("x-dynatrace-functional-test", "LSN1: Report an Outage; TSN1: Loading of Homepage");
  aqHttpRequest.SetHeader("x-dynatrace-functional-test", "LSN1: Report an Outage; TSN2: Loading Outage Map");

  // Send the request, get an aqHttpResponse object
  var aqHttpResponse = aqHttpRequest.Send();
  
  // Read the response data
  Log.Message(aqHttpResponse.AllHeaders); // All headers
  Log.Message(aqHttpResponse.GetHeader("x-dynatrace-functional-test")); // A specific header
  Log.Message(aqHttpResponse.StatusCode); // A status code
  Log.Message(aqHttpResponse.StatusText); // A status text
  Log.Message(aqHttpResponse.Text); // A response body
  
  // Save a response body to a file
  aqHttpResponse.SaveToFile("C:\\Work\\body.txt");
}