# WMATA arrivals iPhone widget

This guide contains instructions to set up an iPhone widget which will show the train arrivals at a Washington Metropolitan Area Transit Authority (WMATA) metro station of your choosing (line color, destination, and minutes until arrival). The widget pulls this information from WMATA's API, so it’s real-time. The datetime stamp in the bottom right corner shows when the widget was last updated, and the line above it shows the station’s name (so you don’t mix them up in case you want to have multiple widgets).


The widget looks like this:

![](https://github.com/user-attachments/assets/dd8aaa8c-76a6-4fcf-8a1b-4e570831e1d0)

I adapted the code for this from [here](https://github.com/metro-sign/dc-metro).

I wrote this for train stations and to show the next five arrivals (though the widget will show fewer than five if there are fewer than five trains on the way).

This guide assumes you’ll follow the steps below from your iPhone itself.


# Steps to set up the widget
1. Download the Scriptable app from the app store.

2. Open the script template in the Scriptable app:

    * From your iPhone, go [here](https://github.com/imperialnolini/WMATA-arrivals/blob/3a92bb9fff50dc1c440afe5488282954d8b6efc2/2%20WMATA%20ifelse%20w%20loc%20-%20share](https://github.com/imperialnolini/wmata-arrivals/blob/636620c5d9a468f1cda79ee2e82ab6545b09978c/2%20WMATA%20ifelse%20w%20loc%20-%20share.js).
    * Select all the text and copy it to your clipboard.
    * Create a new script in the Scriptable app and paste the code inside it.

3. Go [here](https://github.com/metro-sign/dc-metro), and use that information to edit the “LIST OF DICTIONARIES FOR UPCOMING ARRIVALS” section of the script (it should start around line five):

    * Replace “x” with the code for your metro stop (see the appendix of that GitHub website).
    * Replace “*STOP NAME HERE*” with the name of the metro stop corresponding with the code you use to replace “x.”
    * Replace “y” with your WMATA API key (see Part Three of that GitHub website).

4. Add the widget to your home screen:

    * Touch and hold to make the apps wobbly (as if you were going to rearrange them).
    * Click the plus icon in the top left corner, search for Scriptable, select the widget size you would like (I like the medium-sized one as pictured above), and select the name of the WMATA arrivals widget. Set “When Interacting” to “Run Script.”
  
5. To use the widget, click on it on your home screen; this will open the Scriptable app and refresh the widget. Go back to your home screen to look at the updated arrival times. The time you last updated the widget will be in the bottom right corner.

    * The widget should update itself automatically one time every morning or so. Other updates are up to you.
