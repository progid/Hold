var UI = UI || {};

UI.settings = {
	datapickers: {
		sound: new UI.Picker('sound', {
			fields: [
				{
					data: true,
					caption: 'Yes'
				},
				{
					data: false,
					caption: 'No'
				}
			]
		}),
		vibrate: new UI.Picker('vibrate', {
			fields: [
				{
					data: true,
					caption: 'Yes'
				},
				{
					data: false,
					caption: 'No'
				}
			]
		})
	}
}