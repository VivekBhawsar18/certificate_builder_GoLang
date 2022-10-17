window.onload = function () {
    document.getElementById("download-btn")
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
}


var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var ApprInput = document.getElementById('toc')   //Type Of Certificate
var nameInput = document.getElementById('efn')   //Full Name
var cateInput = document.getElementById('ctgy')  // Category
var conInput = document.getElementById('ctrbn')  // Contribution
var CEOInput = document.getElementById('ceo')	 //CEO
var MonthInput = document.getElementById('mth')  //Month
// var downloadBtn = document.querySelector('download-btn')



var image = new Image()
image.crossOrigin="anonymous";
image.src = 'certificates.at.com\\Plain_C.png'
image.onload = function () {
	drawImage()
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
	ctx.fillText(conInput.value, 75, 375)

	ctx.font='20px Arial,Sans-serif'
	ctx.fillText(CEOInput.value, 50, 450)
	ctx.fillText(MonthInput.value, 330, 450)


}

ApprInput.addEventListener('input', function () {
	drawImage()
})
nameInput.addEventListener('input', function () {
	drawImage()
})
cateInput.addEventListener('input', function () {
	drawImage()
})
conInput.addEventListener('input', function () {
	drawImage()
})
CEOInput.addEventListener('input', function () {
	drawImage()
})
MonthInput.addEventListener('input', function () {
	drawImage()
})
