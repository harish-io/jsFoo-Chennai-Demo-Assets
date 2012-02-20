Ext.setup
(
	{
		onReady : function()
		{
			console.log("Ready");
			var panel;
			var simplelist;
			simplelist = new Ext.Component(
			{
					title : "simplelist",
					tpl: [
						'<tpl for=".">',
                    	'<div class="tweet">',
                                '<h2 id="tweetheading">{item}</h2>',
                                '<p id="tweettext">{item}</p>',
                    	'</div>',
                		'</tpl>'
						 ]
			}),
			panel = new Ext.TabPanel
			(
					{
						fullscreen :true,
						animation : "slide",
						items : [simplelist]
					}
			)
			displayList = function()
			{
				var sampleitem = {item: "I am Harish"}
				simplelist.update([sampleitem, sampleitem])
			}
			displayList();
		}
	}

)