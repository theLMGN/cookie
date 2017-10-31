var jsonObj = [];
rows.each(function(index) {
    jsonObj.push({
        id: $this.find('.elementOne').val(),
        name: $this.find('.elementTwo').text()
    });
});
console.log(jsonObj)