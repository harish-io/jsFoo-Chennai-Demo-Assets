Ext.setup
(
	{
		onReady : function()
		{
			console.log("Ready.");
			var panel, timeline;
			timeline = new Ext.Component({
			title :"Twitter Timeline",
			scroll : "vertical",
			tpl : [
			 		'<tpl for=".">',
                    '<div class="tweet">',
                            '<div class="avatar"><img src="{profile_image_url}" />',
                            '<div class="tweet-content">',
                                '<h2 id="tweetheading">{from_user}</h2>',
                                '<p id="tweettext">{text}</p>',
                            '</div>',
                            '</div>',
                    '</div>',
                	'</tpl>'
			 		]
			});
			
			panel = new Ext.TabPanel(

					{
						fullscreen: true,
						animation: "slide",
						items: [timeline]

					}
			)
			refresh = function()
			{
				/*var message = {
								profile_image:"", 
								from_user:"harish", 
								text:"Hello sencha!"
							};

				var messages = [message, message];
				*/
				Ext.util.JSONP.request
				(
					{
						url:"http://search.twitter.com/search.json",
						callbackKey: "callback",
						params: {
									q : "hsivaram",
									rpp: 100,
								},
						callback : function(data)
						{
							var messages = data.results;
							timeline.update(messages);
						}
						
					}
				)
			}
			refresh();

		}
	}
)