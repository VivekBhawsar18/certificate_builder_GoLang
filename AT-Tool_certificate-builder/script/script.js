
// import { jsPDF } from 'jspdf';


window.onload = function () {
    document.getElementById("download-btn2")
        .addEventListener("click", () => {
            const canvas = this.document.getElementById("canvas");
            console.log(canvas);
            console.log(window);
            var opt = {
                margin: 1.5,
                filename: 'atCertificate.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            };
            html2pdf().from(canvas).set(opt).save();
        })
} // Function for downloading canvas as PDF 


var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var ApprInput = document.getElementById('toc')   //Type Of Certificate
var nameInput = document.getElementById('efn')   //Full Name
var cateInput = document.getElementById('ctgy')  // Category
var conInput = document.getElementById('ctrbn')  // Contribution
var CEOInput = document.getElementById('ceo')	 //CEO
var MonthInput = document.getElementById('mth')  //Month
var imgInput = document.getElementById('img')  //Image-Selection
var imgInput1 = document.getElementById('img1')  //Image-Selection
var imgInput2 = document.getElementById('img2')  //Image-Selection
var downloadBtn1 = document.getElementById('download-btn1') //Download-button_1
var downloadBtn2 = document.getElementById('download-btn2') //Download-button_2
var tempSelct = false  									   // Checking temp is selcted



const imgPath_array =[ 'certificates.at.com\\Plain_C.png' , 'certificates.at.com\\Plain_C1.jpg' , 'certificates.at.com\\Plain_C2.png' ] // Array of  image locations

function img_load(img_path){
	image.src = img_path;
}

	var image = new Image()
	image.crossOrigin="anonymous";
	image.src = img_load()
	image.onload = function () {
	drawImage()
}

function tempValid(){
	if (tempSelct==true){
		drawImage()
	} else{
		alert("Please select any one Template first");
	}
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '15px Lucida Console,Monospace'
	ctx.fillStyle = '#FFFFFF'
	ctx.fillText(ApprInput.value, 145, 176)

	ctx.font = '40px Lucida Handwriting,Cursive'
	ctx.fillStyle = '#d4af37'
	ctx.fillText(nameInput.value, 100, 265)

	ctx.font = '26px montserrat'
	ctx.fillStyle = '#000000'
	ctx.fillText(cateInput.value, 110, 343)

	ctx.font = '20px montserrat'
	ctx.fillStyle = '#000000'
	ctx.fillText(conInput.value, 100, 375)

	ctx.font='20px Arial,Sans-serif'
	ctx.fillText(CEOInput.value, 70, 450)
	ctx.fillText(MonthInput.value, 350, 450)


}

ApprInput.addEventListener('input', function () {
	tempValid()
})
nameInput.addEventListener('input', function () {
	tempValid()
})
cateInput.addEventListener('input', function () {
	tempValid()
})
conInput.addEventListener('input', function () {
	tempValid()
})
CEOInput.addEventListener('input', function () {
	tempValid()
})
MonthInput.addEventListener('input', function () {
	tempValid()
})


imgInput.addEventListener('click' , function(){
	tempSelct = true
	img_load(imgPath_array[0])
})

imgInput1.addEventListener('click' , function(){
	tempSelct = true
	img_load(imgPath_array[1])
})

imgInput2.addEventListener('click' , function(){
	tempSelct = true
	img_load(imgPath_array[2])
})

downloadBtn1.addEventListener('click', function () { 
	if (tempSelct==true){
		downloadBtn1.href = canvas.toDataURL('image/png')
		downloadBtn1.download = 'Certificate - ' + MonthInput.value
	} else{
		alert("Please Fill above form first");
	}

})

// htmlToImage.toPng(document && document.getElementById('canvas'),
//      {     quality: 1, backgroundColor: '#ffffff' })
//           .then(function(dataUrl) {
//             var doc = new jsPDF();
//             doc.addImage(dataUrl, 'PNG', 15, 40, 180, 180);
//             doc.save('pension-report' + '.pdf');
//           });
//     }