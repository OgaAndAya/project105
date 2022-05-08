
Webcam.set({
    width:300,
    height:500,
    image_format : 'png' ,
    png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5: ', ml5.version);
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json',modelLoaded);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XGPNtgiL9/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check(){
img=document.getElementById('selfie_image');
}
function gotResult(error,result){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
      }
}