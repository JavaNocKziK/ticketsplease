class Passport{
	/*	var dataArray - stores information about returned persons.
		dataArray[0] = Name
		dataArray[1] = Gender
		dataArray[2] = Country
		dataArray[3] = CountryRegionCode
		dataArray[4] = SkinTone
		dataArray[5] = Notes
		dataArray[6] = issueDate
		dataArray[7] = expiryDate
		dataArray[8] = Supplier
		dataArray[9] = RegionCode
	*/
	constructor() {
		this.dataString = $.ajax({
			url: 'ajax/ajaxGetRandomPerson.php',
			type: 'GET',
			async: false
		}).responseText;
		this.dataArray = this.dataString.split(';');
		console.log(this.dataArray);
		this.location = {
			x: 100,
			y: 100
		};
    }

	getName(){
		return this.dataArray[0];
	}
	getGender(){
		return this.dataArray[1];
	}
	getCountry(){
		return this.dataArray[2];
	}
	getCountryRegionCode(){
		return this.dataArray[3];
	}
	getSkinTone(){
		return this.dataArray[4];
	}
	getNotes(){
		return this.dataArray[5];
	}
	getissueDate(){
		return this.dataArray[6];
	}
	getexpiryDate(){
		return this.dataArray[7];
	}
	getSupplier(){
		return this.dataArray[8];
	}
	getRegionCode(){
		return this.dataArray[9];
	}
	render(context) {
		context.drawImage(
			Graphics.getGraphicByName('passport').image,
			this.location.x,
			this.location.y
		);
		context.fillStyle = "#212121";
		context.font = "20px Lucida Console";
			context.fillText(
				"Name: " + this.dataArray[0],
				this.location.x + 400,
				this.location.y + 50
			);

			context.fillText(
				"Nationality: " + this.dataArray[2],
				this.location.x + 400,
				this.location.y + 100
			);
			context.fillText(
				"Gender: " + this.dataArray[1],
				this.location.x + 400,
				this.location.y + 150
			);
	}
}
