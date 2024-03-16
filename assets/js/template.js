/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 0:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _template_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony import */ var _template_subscribe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
/* harmony import */ var _template_click_to_active_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95);
/* harmony import */ var _template_clear_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96);
/* harmony import */ var _template_scrolltop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97);
// Vendor




// Template






const heroSlider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.heroSlider', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Autoplay],
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
    },
});

const carousel = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-carousel', {
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
        0: {
            spaceBetween: 15,
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: "column",
            },
        },
        576: {
            spaceBetween: 15,
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: "column",
            },
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    }
});

const shopCardsCarousel = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-shop-cards-carousel', {
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
        0: {
            slidesPerView: 2.15,
            spaceBetween: 15,
        },
        576: {

        },
        768: {

        },
        992: {

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    }
});

const productPreview = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-shop-card-preview', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Mousewheel],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    mousewheel: {
        releaseOnEdges: true
    },
    nested: true,
    touchMoveStopPropagation: true,
    allowTouchMove: true,
    breakpoints: {
        0: {
            noSwipingClass: 'swiper-slide-next',
        },
        576: {

        },
        768: {

        },
        1200: {
            noSwipingClass: 'swiper-slide',
        },
    }
});
const productQuickView = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-shop-card-quick-view', {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation],
    navigation: {
        nextEl: '.swiper-nav .quick-next',
        prevEl: '.swiper-nav .quick-prev',
    },
    allowTouchMove: true,
    breakpoints: {
        0: {
            noSwipingClass: 'swiper-slide-next',
        },
        576: {

        },
        768: {

        },
        1200: {
            noSwipingClass: 'swiper-slide',
        },
    }
});


/***/ }),

/***/ 96:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(() => {
    'use strict'

    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');

    if(searchInput, searchClear) {
        searchInput.addEventListener('input', () => {
            if (searchInput.value.length > 0) {
                searchClear.classList.remove('d-none');
            } else {
                searchClear.classList.add('d-none');
            }
        })

        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.classList.add('d-none');
        });
    }
})();

/***/ }),

/***/ 95:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(() => {
    'use strict'

    const clickToActive = document.querySelectorAll('.click-to-active');

    clickToActive.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            element.classList.toggle('active');
        });
    });
})();

/***/ }),

/***/ 93:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(() => {
    'use strict'

    const header                 = document.getElementById('header');
    const headerTransparent      = document.querySelector('[data-header-animated="true"]');
    const headerTransparentClass = 'header-transparent';

    let dropdowns                = document.querySelectorAll('.dropdown');
    let dropdownOpen;

    function setTransparent(element) {
        element.classList.add(headerTransparentClass)
    }

    function removeTransparent(element) {
        element.classList.remove(headerTransparentClass)
    }

    function checkHeaderScroll() {
        return window.scrollY >= 5
    }

    if(header && header.hasAttribute('data-header-animated') && header.getAttribute('data-header-animated') === 'true') {
        //
        // Header load
        //

        document.addEventListener('DOMContentLoaded', function() {
            if (checkHeaderScroll()) {
                removeTransparent(headerTransparent);
            } else if(!dropdownOpen) {
                setTransparent(headerTransparent)
            }
        });

        //
        // Header scroll
        //

        window.addEventListener('scroll', function() {
            if (checkHeaderScroll()) {
                removeTransparent(headerTransparent);
            } else if(!dropdownOpen) {
                setTransparent(headerTransparent);
            }
        });

        //
        // Header hover
        //

        headerTransparent.addEventListener("mouseover", function() {
            removeTransparent(headerTransparent);
        });

        headerTransparent.addEventListener("mouseout", function() {
            if (!dropdownOpen && !checkHeaderScroll()) {
                setTransparent(headerTransparent)
            }
        });

        //
        // Header dropdown
        //

        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('show.bs.dropdown', event => {
                removeTransparent(headerTransparent);
                dropdownOpen = true;
            });

            dropdown.addEventListener('hide.bs.dropdown', event => {
                dropdownOpen = false;
                if (!checkHeaderScroll()) {
                    setTransparent(headerTransparent)
                }
            });
        });
    }

    if (header) {

        //
        // Header dropdown animation
        //

        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('show.bs.dropdown', event => {
                const slideDown = element => element.style.height = `${element.scrollHeight + 1}px`;
                slideDown(dropdown.querySelector('.dropdown-mega-menu'));
            })

            dropdown.addEventListener('hide.bs.dropdown', event => {
                dropdown.querySelector('.dropdown-mega-menu').style.height = 0;
            });
        });

        //
        // Header search
        //

        const headerSearchBtn = document.getElementById('headerSearchBtn');
        const headerSearchBtnClose = document.getElementById('headerSearchBtnClose');
        const headerSearch = document.getElementById('headerSearch');
        const searchInput = document.getElementById('searchInput');

        headerSearchBtn.addEventListener('click', e => {
            e.preventDefault();
            headerSearch.classList.remove('d-none')
            searchInput.focus();
        });

        headerSearchBtnClose.addEventListener('click', e => {
            e.preventDefault();
            headerSearch.classList.add('d-none')
        });
    }
})();

/***/ }),

/***/ 97:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(() => {
    'use strict'

    let toTop = document.querySelector('#top');

    if (toTop) {
        toTop.addEventListener('click', e => {
            e.preventDefault();
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        });
    }
})();

/***/ }),

/***/ 94:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(() => {
    'use strict'

    const emailField = document.getElementById("emailField");
    const button = document.getElementById("emailSend");

    if (emailField, button) {
        emailField.addEventListener("input", function () {
            const email = emailField.value;
            if (validateEmail(email)) {
                button.removeAttribute("disabled");
            } else {
                button.setAttribute("disabled", "");
            }
        });

        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        button.addEventListener('click', () => {
            button.classList.add('btn-state-active');
            button.classList.add('btn-state-load');
            button.classList.remove('btn-state-success')

            setTimeout(function() {
                button.classList.remove('btn-state-load')
                button.classList.add('btn-state-success')
            }, 2000);
        })
    }
})();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp"] = self["webpackChunkgulp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1], () => (__webpack_require__(0)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;