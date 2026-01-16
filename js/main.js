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

	// Oqtane multiselect dropdown

	$("#oqtane-lab-report-dd").multiselect({
		nonSelectedText: "Select Lab Report",
		includeSelectAllOption: true,
		templates: {
			button: `<button
            type="button"
            class="multiselect dropdown-toggle oqtane-multiselect__control"  data-bs-toggle="dropdown"
    aria-expanded="false"
          >
          <span class="multiselect-selected-text oqtane-multiselect__text"></span>
        </button>`,

			popupContainer: `<div class="oqtane-multiselect__container dropdown-menu"></div>`,

			option: `<div class="oqtane-multiselect__option multiselect-option"></div>`,
		},
	});

	$("#oqtane-state-dd").multiselect({
		nonSelectedText: "Select State",
		includeSelectAllOption: true,
		templates: {
			button: `<button
            type="button"
            class="multiselect dropdown-toggle oqtane-multiselect__control"  data-bs-toggle="dropdown"
    aria-expanded="false"
          >
          <span class="multiselect-selected-text oqtane-multiselect__text"></span>
        </button>`,

			popupContainer: `<div class="oqtane-multiselect__container dropdown-menu"></div>`,

			option: `<div class="oqtane-multiselect__option multiselect-option"></div>`,
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

	$('.sidebar__menu').on('click', function () {
				$('.sidebar').toggleClass('sidebar--active');
				$('body').toggleClass('sidebar-open');

				// Toggle icon between hamburger and close
				var icon = $(this).find('i');
				if ($('.sidebar').hasClass('sidebar--active')) {
					icon.removeClass('icon-hamburger-wide').addClass('icon-cross');
				} else {
					icon.removeClass('icon-cross').addClass('icon-hamburger-wide');
				}
			});

			// Close sidebar when clicking outside of it
			$(document).on('click', function (e) {
				if (!$(e.target).closest('.sidebar, .sidebar__menu').length) {
					$('.sidebar').removeClass('sidebar--active');
					$('body').removeClass('sidebar-open');

					// Reset icon to hamburger
					$('.sidebar__menu i').removeClass('icon-cross').addClass('icon-hamburger-wide');
				}
			});

			// Prevent sidebar clicks from closing it
			$('.sidebar').on('click', function (e) {
				e.stopPropagation();
			});
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

	// Toggle details buttons
	$(document).on("click", ".toggle-details-btn", function () {
		$(this).siblings(".toggle-details-content").toggleClass("d-none");
	});
	// append overlay dynamically
	$("body").append('<div class="sidebar-overlay"></div>');

	$(".hamburger-btn").on("click", function () {
		$(".sidebar").addClass("is-open");
		$(".sidebar-overlay").addClass("is-active");
	});

	$(".sidebar__toggle, .sidebar-overlay").on("click", function () {
		$(".sidebar").removeClass("is-open");
		$(".sidebar-overlay").removeClass("is-active");
	});
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

//Search input multiple option added
(function (items, selectedItems) {
	// suggestions as objects with id + name
	var defaultSuggestions = [
		{ id: "cagr", name: "Cagrilintide Injectable Solution" },
		{ id: "ghk", name: "GHK-CU Injectable Solution" },
		{ id: "thymosin", name: "Thymosin Beta-4" },
		{ id: "bpc157", name: "BPC-157" },
	];
	// use passed `items` array if provided, otherwise default
	var suggestions =
		Array.isArray(items) && items.length ? items : defaultSuggestions;

	function attach(input) {
		var keyField = input.dataset.multiKey || "id";
		var labelField = input.dataset.multiLabel || "name";

		var container = input.closest(".oqtane-search");
		var wrapper = container.querySelector(".multi-select");
		var chipsWrap = wrapper.querySelector(".selected-chips");

		// Create dropdown wrapper
		var dropdownWrapper = document.createElement("div");
		dropdownWrapper.className = "dropdown-wrapper rounded-4";
		var list = document.createElement("ul");
		list.className =
			"suggestions-list d-flex flex-column gap-3 suggestions-list--multi";
		var footer = document.createElement("div");
		footer.className = "dropdown-footer border-0 border-bottom rounded-4";
		footer.innerHTML =
			'<a class="btn-sm-custom btn-add">Add</a><a class="btn-sm-custom btn-cancel">Cancel</a>';

		dropdownWrapper.appendChild(list);
		dropdownWrapper.appendChild(footer);
		wrapper.appendChild(dropdownWrapper);

		var menuList = container.querySelector("ul.suggestions-list.d-none");
		if (menuList) menuList.remove(); // Clean up old list if exists

		// stored as ids; initialize from `selectedItems` parameter if provided
		var selected = [];
		if (Array.isArray(selectedItems) && selectedItems.length) {
			// normalize selectedItems to ids according to keyField
			selected = selectedItems.map(function (si) {
				if (si == null) return si;
				if (typeof si === "object") return si[keyField] || si.id || String(si);
				return String(si);
			});
		}
		var tempSelected = [];

		function findById(id) {
			return suggestions.find(function (s) {
				return s[keyField] === id;
			});
		}

		function renderList(items) {
			list.innerHTML = items
				.map(function (it) {
					var id = it[keyField];
					var text = it[labelField];
					var isChecked = tempSelected.indexOf(id) !== -1 ? "checked" : "";
					return [
						'<li data-id="' + id + '"  class="px-3">',
						'<label class="custom-check">',
						'<span class="custom-check__input">',
						'<input type="checkbox" ' + isChecked + ">",
						"<span></span>",
						"</span>",
						'<span class="custom-check__label text-dark">' + text + "</span>",
						"</label>",
						"</li>",
					].join("");
				})
				.join("");
		}

		function renderChips() {
			chipsWrap.innerHTML = selected
				.map(function (s, idx) {
					var obj = findById(s);
					var label = obj ? obj[labelField] : s;
					return (
						'<span class="chip" data-idx="' +
						idx +
						'">' +
						label +
						'<span class="remove" aria-hidden>×</span></span>'
					);
				})
				.join("");
		}

		function availableSuggestions(q) {
			var ql = (q || "").toLowerCase();
			return suggestions.filter(function (s) {
				var txt = (s[labelField] || "").toLowerCase();
				return !ql || txt.indexOf(ql) !== -1;
			});
		}

		function openDropdown() {
			tempSelected = [...selected]; // Reset temp to committed state
			renderList(availableSuggestions(input.value.trim()));
			dropdownWrapper.classList.add("show");
		}

		function closeDropdown() {
			dropdownWrapper.classList.remove("show");
		}

		input.addEventListener("focus", openDropdown);
		input.addEventListener("click", function (e) {
			// open on every click
			e.stopPropagation();
			if (!dropdownWrapper.classList.contains("show")) openDropdown();
		});
		input.addEventListener("input", function () {
			renderList(availableSuggestions(input.value.trim()));
		});

		// Toggle checkbox on list item click
		list.addEventListener("mousedown", function (ev) {
			ev.preventDefault();
			var li = ev.target.closest("li");
			if (!li) return;
			var id = li.getAttribute("data-id");
			var idx = tempSelected.indexOf(id);
			if (idx === -1) tempSelected.push(id);
			else tempSelected.splice(idx, 1);

			// Re-render to update checkboxes
			renderList(availableSuggestions(input.value.trim()));
		});

		// Footer actions
		footer.addEventListener("mousedown", function (ev) {
			ev.preventDefault();
		}); // Prevent blur

		// Add / Cancel buttons
		var btnAdd = footer.querySelector(".btn-add");
		var btnCancel = footer.querySelector(".btn-cancel");

		if (btnAdd) {
			btnAdd.addEventListener("click", function (ev) {
				ev.preventDefault();
				selected = [...tempSelected];
				// renderChips();
				closeDropdown();
				// Log selected values as objects
				var selectedObjects = selected
					.map(function (id) {
						return findById(id);
					})
					.filter(Boolean);
				console.log("Selected items:", selectedObjects);
			});
		}

		if (btnCancel) {
			btnCancel.addEventListener("click", function (ev) {
				ev.preventDefault();
				tempSelected = [...selected];
				// do not change `selected`, just close
				closeDropdown();
			});
		}

		// Close dropdown when clicking outside
		document.addEventListener("click", function (ev) {
			if (!container.contains(ev.target)) {
				closeDropdown();
			}
		});

		// remove chip
		chipsWrap.addEventListener("click", function (ev) {
			var chip = ev.target.closest(".chip");
			if (!chip) return;
			var idx = parseInt(chip.getAttribute("data-idx"), 10);
			if (!isNaN(idx)) {
				selected.splice(idx, 1);
				renderChips();
			}
		});

		// backspace to remove last
		input.addEventListener("keydown", function (ev) {
			if (ev.key === "Backspace" && input.value === "" && selected.length) {
				selected.pop();
				renderChips();
			}
		});

		// hide on blur
		// input.addEventListener('blur', function () { setTimeout(closeDropdown, 200) });
		// initial render of chips (in case `selected` has values)
		renderChips();
	}

	document.addEventListener("DOMContentLoaded", function () {
		var inputs = document.querySelectorAll(".with-suggestions");
		for (var i = 0; i < inputs.length; i++) {
			var input = inputs[i];
			// ensure structure: wrap existing input into multi-select if not already
			var container = input.closest(".oqtane-search");
			if (!container) continue;
			var existingWrapper = container.querySelector(".multi-select");
			if (!existingWrapper) {
				var wrapper = document.createElement("div");
				wrapper.className = "multi-select-wrapper";
				var inner = document.createElement("div");
				inner.className = "multi-select";
				var chips = document.createElement("div");
				chips.className = "selected-chips";
				// List will be added in attach()

				container.insertBefore(wrapper, input);
				wrapper.appendChild(inner);
				inner.appendChild(chips);
				inner.appendChild(input);
			}
		}
		// reselect inputs after DOM operations
		inputs = document.querySelectorAll(".with-suggestions");
		for (i = 0; i < inputs.length; i++) attach(inputs[i]);
	});
})();
