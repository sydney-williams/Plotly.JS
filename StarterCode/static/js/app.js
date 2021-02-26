//read in sample.json file
//use d3.json to read in local file

d3.json("samples.json").then(function(data) {
    console.log(data);
    console.log(data['names']);
    //metadata = array object
    //metadata is an array object that holds subjects information (id,gender,age,etc.)
    //use metadata to read the demographic info
    var metadata = data['metadata'];
    console.log(metadata);
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
  console.log(data['metadata']);
  var metadata = data['metadata']
  metadata.filter(sampleObj => sampleObj.id == id);
  console.log('metadata')
})
}//end of buildTable Function

buildTable("941")

function optionChanged(id){
  metadata(id);
}