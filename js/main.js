$(document).ready(function () {
	console.log("jquery loaded");

	$('[data-toggle="tooltip"]').tooltip();

	$("#add-group-btn").hide();
	$('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
		if ($("#question-group").hasClass("in")) {
			$("#add-group-btn").show();
			$("#add-question-btn").hide();
		} else {
			$("#add-group-btn").hide();
			$("#add-question-btn").show();
		}
	});

	$("#answer-type-btn").on("click", function () {
		$("#answer-types").addClass("answer-type__options--active");
	});

	$("#answer-type-btn-2").on("click", function () {
		$("#answer-types-2").addClass("answer-type__options--active");
	});

	// const quill = new Quill('#editor', {
	//   modules: {
	//     toolbar: [
	//       ['bold', 'italic', 'underline'],
	//       [{ list: 'bullet' }, { list: 'ordered' }],
	//     ],
	//   },
	//   theme: 'snow',
	// });

	// const textEditor = document.querySelector('.rich-text');
	// const label = textEditor.querySelector('.rich-text__label');

	// quill.on('selection-change', function (range, oldRange, source) {
	//   if (range) {
	//     label.style.top = '16px';
	//     label.style.fontSize = '12px';
	//   } else {
	//     label.style.top = '24px';
	//     label.style.fontSize = '18px';
	//   }
	// });

	// dnn multiselect dropdown

	$("#dnn-lab-report-dd").multiselect({
		nonSelectedText: "Select Lab Report",
		includeSelectAllOption: true,
		templates: {
			button: `<button
            type="button"
            class="multiselect dropdown-toggle dnn-multiselect__control" data-toggle="dropdown"
          >
          <span class="multiselect-selected-text dnn-multiselect__text"></span>
        </button>`,

			popupContainer: `<div class="dnn-multiselect__container dropdown-menu"></div>`,

			option: `<div class="dnn-multiselect__option multiselect-option"></div>`,
		},
	});

	$("#dnn-state-dd").multiselect({
		nonSelectedText: "Select State",
		includeSelectAllOption: true,
		templates: {
			button: `<button
            type="button"
            class="multiselect dropdown-toggle dnn-multiselect__control" data-toggle="dropdown"
          >
          <span class="multiselect-selected-text dnn-multiselect__text"></span>
        </button>`,

			popupContainer: `<div class="dnn-multiselect__container dropdown-menu"></div>`,

			option: `<div class="dnn-multiselect__option multiselect-option"></div>`,
		},
	});

	const swiper = new Swiper(".thumbs", {
		spaceBetween: 10,
		slidesPerView: 3,
		loop: false,
		centeredSlides: true,
		centeredSlidesBounds: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	new Swiper(".product-images__slider", {
		spaceBetween: 10,
		loop: false,
		thumbs: {
			swiper: swiper,
		},
	});

	$(".sidebar__toggle").click(function () {
		$(".sidebar").toggleClass("sidebar--collapsed");
	});

	console.log("js js");

	// Initialize the tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// Optional: Hide tooltip when the modal opens
	$("#confirm-modal").on("show.bs.modal", function () {
		$('[data-toggle="tooltip"]').tooltip("hide");
	});

	// Apex chart

	let dataType = "order";
	let dataRange = 15;
	let orderData = [
		392, 715, 123, 981, 456, 12, 842, 28, 620, 399, 775, 581, 211, 880, 40, 391,
		648, 257, 518, 915, 970, 517, 736, 147, 215, 823, 10, 309, 745, 532,
	];

	let revenueData = [
		34742, 19488, 10528, 42912, 18916, 15689, 21567, 48365, 37014, 26703, 33067,
		43762, 30687, 20415, 31302, 37286, 18011, 20189, 12943, 32481, 45498, 49563,
		45749, 44498, 17132, 29843, 40050, 29952, 11125, 46390, 33578, 43513,
	];

	let xaxis = [
		"27 Dec",
		"28 Dec",
		"29 Dec",
		"30 Dec",
		"31 Dec",
		"01 Jan",
		"02 Jan",
		"03 Jan",
		"04 Jan",
		"05 Jan",
		"06 Jan",
		"07 Jan",
		"08 Jan",
		"09 Jan",
		"10 Jan",
		"11 Jan",
		"12 Jan",
		"13 Jan",
		"14 Jan",
		"15 Jan",
		"16 Jan",
		"17 Jan",
		"18 Jan",
		"19 Jan",
		"20 Jan",
		"21 Jan",
		"22 Jan",
		"23 Jan",
		"24 Jan",
		"25 Jan",
		"26 Jan",
		"27 Jan",
	];

	function generateData() {
		let data = [];
		data = dataType == "order" ? orderData : revenueData;
		data = dataRange <= 30 ? data.splice(-dataRange) : data;
		return data;
	}

	console.log(dataRange <= 30 ? xaxis.splice(-dataRange) : xaxis);

	let options = {
		chart: {
			type: "area",
			height: 350,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
		},
		series: [
			{
				name: dataType == "order" ? "Order" : "Revenue",
				data: generateData(),
			},
		],
		xaxis: {
			categories: dataRange <= 30 ? xaxis.splice(-dataRange) : xaxis,
			labels: {
				style: {
					colors: "#333",
					fontSize: "12px",
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: "#333",
					fontSize: "12px",
				},
			},
			min: 0, // Minimum value for y-axis
			max: dataType == "order" ? 1000 : 50000, // Maximum value for y-axis
		},

		dataLabels: {
			enabled: true,
			formatter: function (val, opts) {
				return val;
			},

			textAnchor: "middle",
			distributed: false,
			offsetX: 0,
			offsetY: 0,
			style: {
				fontSize: "14px",
				fontFamily: "Helvetica, Arial, sans-serif",
				fontWeight: "bold",
				colors: ["#ffdc32"],
			},
			background: {
				enabled: true,
				foreColor: "#000",
				borderRadius: 2,
				borderWidth: 1,
				borderColor: "#000",
				opacity: 1,
				dropShadow: {
					enabled: false,
					top: 1,
					left: 1,
					blur: 1,
					color: "#000",
					opacity: 0.45,
				},
			},
			dropShadow: {
				enabled: false,
				top: 1,
				left: 1,
				blur: 1,
				color: "#000",
				opacity: 0.45,
			},
		},

		markers: {
			size: 1, // Marker size
			colors: ["#ffffff"], // Inner color of markers
			strokeColors: "#4CAF50", // Border color
			strokeWidth: 2,
			hover: {
				size: 7, // Marker size on hover
			},
		},
		stroke: {
			curve: "smooth",
			width: 3,
			colors: ["#214e9a"], // Line color
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: 0.3,
				gradientToColors: ["#214e9a"],
				inverseColors: false,
				opacityFrom: 0.5,
				opacityTo: 0.2,
				stops: [0, 100],
			},
		},
		tooltip: {
			enabled: true,
			x: {
				enabled: false,
				formatter: function (val) {
					return val; // Display x-axis label in tooltip
				},
			},
			y: {
				formatter: function (value) {
					return value; // Display value
				},
			},
		},
	};

	var chartEl = document.querySelector("#chart");
	if (chartEl) {
		var chart = new ApexCharts(chartEl, options);
		chart.render();
	}
});

const imageInput = document.getElementById("inputImage");
const imageOutput = document.getElementById("uploadedImage");
const dropzoneContent = document.querySelector(".dropzone__content");
const dropzoneImage = document.querySelector(".dropzone__image");
const retakeButton = document.getElementById("retakeButton");
const cropButton = document.getElementById("cropButton");

let cropper;
let file;

if (
	imageInput &&
	imageOutput &&
	dropzoneContent &&
	dropzoneImage &&
	retakeButton &&
	cropButton
) {
	imageInput.addEventListener("change", () => {
		file = imageInput.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				imageOutput.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" />`;

				dropzoneContent.style.display = "none";
				dropzoneImage.style.display = "block";
				retakeButton.style.display = "block";
				cropButton.style.display = "block";

				setTimeout(() => {
					const imgTag = imageOutput.querySelector("img");
					cropper = new Cropper(imgTag, {
						aspectRatio: 16 / 9,
						viewMode: 1,
						autoCropArea: 1,
						ready() {
							cropper.setCropBoxData(cropper.getImageData());
						},
						crop(event) {
							const cropRatio = event.detail;
							console.log("Crop details:", cropRatio);
						},
					});

					imgTag.addEventListener("click", () => {
						cropper.setCropBoxData(cropper.getImageData());
					});
				}, 100);
			};

			reader.onerror = () => {
				alert("Error occurred while reading the file.");
			};

			reader.readAsDataURL(file);
		} else {
			alert("No file selected.");
		}
	});

	// cropButton.addEventListener("click", () => {
	// 	const imgTag = imageOutput.querySelector("img");
	// 	if (cropper && file) {
	// 		const fileType = file.type;
	// 		const croppedImageDataURL = cropper.getCroppedCanvas().toDataURL(fileType);
	// 		imgTag.src = croppedImageDataURL;
	// 		cropper.destroy();
	// 	} else {
	// 		alert("Error: No image loaded or cropper not initialized.");
	// 	}
	// });

	retakeButton.addEventListener("click", () => {
		imageInput.click();
	});
}
