# Xapp
Simple Data Viewer (build with Sencha Ext JS 6.5.1)
# Launching the application
<ol>
  <li>
    <a href='http://www.sencha.com/products/sencha-cmd/'>Download and Install Sencha Cmd 6.5.1</a>
  </li>
  <li>
    <a href='http://www.sencha.com/products/extjs/evaluate/'>Download the Ext JS 6.5 SDK</a>
  </li>
 </ol>
  <br>
  Recommendation is to extract Ext JS in a fixed location in your "home" directory:
  <br><br>
  <strong>
  C:\Users\Me\sencha-sdks    # Windows
  <br>
    /Users/Me/sencha-sdks      # Mac OS X
  <br>
    /home/me/sencha-sdks       # Linux
  </strong>
  <br><br>
  After unzipping Ext JS in this folder, you should see a sub-folder such as the following (on Windows):
  <br><br>
  <strong>
  C:\Users\Myname\sencha-sdks\ext-6.5.1
  </strong>
  <br><br>
  Now that Sencha Cmd is installed and the Ext JS SDK is extracted, let's configure Sencha Cmd with this location. For example (on Windows):
  <br><br>
  <strong>
  > sencha config --prop sencha.sdk.path=C:\Users\Me\sencha-sdks --save
  </strong>
  <br><br>
  <strong>
  Check if sencha cmd was attatched to your system variable Path!
  </strong>
<br><br>
To build the application (to allow the browser to load it), run the following command from that same directory (application folder):
<br><br>
<strong>
 > sencha app watch
</strong>
<br><br>
You will see a few lines of information as Sencha Cmd builds the application, but there are two to take note of:
<br><br>
<strong>
...
[INF] Application available at http://localhost:1841
<br><br>
...
[INF] Waiting for changes...
</strong>
<br><br>
While app watch is running, a basic web server is serving the application directory. Now we can load http://localhost:1841 in the browser and see the application.
