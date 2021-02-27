//read in sample.json file
//use d3.json to read in local file

d3.json("samples.json").then(function(data) {
    //console.log(data);
    //console.log(data['names']);
    //metadata = array object
    //metadata is an array object that holds subjects information (id,gender,age,etc.)
    //use metadata to read the demographic info
    var metadata = data['metadata'];
    //console.log(metadata);
    //filter the metadata in order to retrieve a single id in the 153 items in the metadata array 

    // create an empty array to add 'names' to 
    // var names_from_data_names = data['names'];
    // console.log(names_from_data_names);
    // for (var i = 0; i < data['names'].length; i++){
    //   dropDown.push(data['names'].length)
    // }

    var names_from_data_names = data['names'];    
    var sel = document.getElementById('selDataset');
    for(var i = 0; i < data['names'].length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = names_from_data_names[i];
    opt.value = names_from_data_names[i];
    sel.appendChild(opt);
    }
});
  
// function optionChanged() {
//     console.log(new_value)
//     new_value = 
//     barPlot(new_value)
// }

// function barPlot(new_value) {
//     PLotly the new id
// }

function buildTable(id){
d3.json("samples.json").then(function(data){
  //console.log(data['metadata']);
  var metadata = data['metadata']
  var filteredData = metadata.filter(sampleObj => sampleObj.id == id);
  console.log(filteredData);
  var demo = document.getElementById('sample-metadata');
  demo.innerHTML =  "<h6>" + "Age:" + filteredData[0]['age'] + "\n" + "Gender:" + filteredData[0]['gender'] 
  + "\n" + "BB Type:" + filteredData[0]['bbtype'] + "\n" + "Ethnicity:" + filteredData[0]['ethnicity'] + 
  "\n" + "Location:" + filteredData[0]['location'] +"\n" + "WFREQ:"+ filteredData[0]['wfreq']+"</h6>";
  // demo.innerHTML =  "<pre>" + filte
  // demo.innerHTML =  "<p>" + filteredData[0]['age'] + "\n" + filteredData[0]['gender'] + "\n" + filteredData[0]['bbtype'] + "\n" + filteredData[0]['ethnicity'] + "\n" + filteredData[0]['location'] +"\n" + filteredData[0]['wfreq']+"</p>";
  // demo.innerHTML =  "<pre>" + filteredData[0]['bbtype'] + "\n" + filteredData[0]['ethnicity'] + "</pre>";
  // demo.innerHTML += filteredData[0]["age"]
  // demo.innerHTML += filteredData[0]['bbtype']
  // demo.innerHTML += filteredData[0]['ethnicity']
  // demo.innerHTML += filteredData[0]['gender']
  // demo.innerHTML += filteredData[0]['id']
  // demo.innerHTML += filteredData[0]['location']
  // demo.innerHTML += filteredData[0]['wfreq']
})
}//end of buildTable Function

function optionChanged(id){
  buildTable(id);
}

