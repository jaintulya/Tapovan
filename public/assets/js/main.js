/**
 * Tapovan Vatsalyadham School (English Medium)
 * Core Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initBackToTop();
  initGallery();
  initPhotoUploader();
  initAdmissionForm();
  initContactForm();
  initDocSearch();
  initFeeCalculator();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation Menu
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeMobileMenu');
  const menuDrawer = document.getElementById('mobileMenuDrawer');
  const backdrop = document.getElementById('mobileMenuBackdrop');

  if (!toggleBtn || !menuDrawer) return;

  function openMenu() {
    menuDrawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuDrawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* --------------------------------------------------------------------------
   2. Back To Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   3. Gallery Filtering & Lightbox Modal
   -------------------------------------------------------------------------- */
function initGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightbox = document.getElementById('closeLightbox');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => {
          b.classList.remove('bg-navy', 'text-white', 'active');
          b.classList.add('bg-white', 'text-slate-700');
        });
        btn.classList.add('bg-navy', 'text-white', 'active');
        btn.classList.remove('bg-white', 'text-slate-700');

        const filter = btn.getAttribute('data-filter');
        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter || item.classList.contains('always-visible')) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Lightbox Click Listeners
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.view-lightbox');
    if (trigger && lightbox && lightboxImg) {
      const src = trigger.getAttribute('data-img') || trigger.querySelector('img')?.src;
      const title = trigger.getAttribute('data-title') || 'Tapovan Vatsalyadham School';
      if (src) {
        lightboxImg.src = src;
        if (lightboxCaption) lightboxCaption.textContent = title;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  });

  if (closeLightbox && lightbox) {
    closeLightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   4. Interactive "Add Extra Photo / Upload Photo" Feature
   -------------------------------------------------------------------------- */
function initPhotoUploader() {
  const uploadBtn = document.getElementById('addPhotoModalBtn');
  const uploadModal = document.getElementById('addPhotoModal');
  const closeModal = document.getElementById('closeAddPhotoModal');
  const cancelBtn = document.getElementById('cancelAddPhoto');
  const form = document.getElementById('addPhotoForm');
  const galleryGrid = document.getElementById('galleryGrid');

  // Load custom photos from localStorage
  loadCustomPhotos();

  if (!uploadBtn || !uploadModal) return;

  function openUploadModal() {
    uploadModal.classList.remove('hidden');
    uploadModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeUploadModal() {
    uploadModal.classList.add('hidden');
    uploadModal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  uploadBtn.addEventListener('click', openUploadModal);
  if (closeModal) closeModal.addEventListener('click', closeUploadModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeUploadModal);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.getElementById('newPhotoTitle');
      const categorySelect = document.getElementById('newPhotoCategory');
      const urlInput = document.getElementById('newPhotoUrl');
      const fileInput = document.getElementById('newPhotoFile');

      const title = titleInput ? titleInput.value.trim() : 'Campus Memory';
      const category = categorySelect ? categorySelect.value : 'campus';

      if (fileInput && fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
          saveAndAppendPhoto(event.target.result, title, category);
          form.reset();
          closeUploadModal();
        };
        reader.readAsDataURL(fileInput.files[0]);
      } else if (urlInput && urlInput.value.trim()) {
        saveAndAppendPhoto(urlInput.value.trim(), title, category);
        form.reset();
        closeUploadModal();
      } else {
        alert('Please choose an image file or paste an image URL.');
      }
    });
  }

  function saveAndAppendPhoto(imgSrc, title, category) {
    const newPhoto = {
      id: 'photo_' + Date.now(),
      src: imgSrc,
      title: title,
      category: category
    };

    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem('tvs_custom_photos') || '[]');
    } catch (e) {
      saved = [];
    }
    saved.unshift(newPhoto);
    try {
      localStorage.setItem('tvs_custom_photos', JSON.stringify(saved));
    } catch (e) {
      console.warn('Storage quota exceeded, photo rendered in current session.');
    }

    renderPhotoCard(newPhoto, true);
    showToastNotification('Photo successfully added to the school gallery!');
  }

  function loadCustomPhotos() {
    if (!galleryGrid) return;
    try {
      const saved = JSON.parse(localStorage.getItem('tvs_custom_photos') || '[]');
      saved.forEach(photo => renderPhotoCard(photo, false));
    } catch (e) {
      console.error(e);
    }
  }

  function renderPhotoCard(photo, prepend = false) {
    if (!galleryGrid) return;
    const card = document.createElement('div');
    card.className = 'gallery-item group relative overflow-hidden rounded-xl shadow-md border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';
    card.setAttribute('data-category', photo.category);

    card.innerHTML = `
      <div class="gallery-img-wrapper cursor-pointer view-lightbox" data-img="${photo.src}" data-title="${photo.title}">
        <img src="${photo.src}" alt="${photo.title}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
        <div class="gallery-overlay">
          <span class="inline-block px-2.5 py-1 text-xs font-semibold bg-amber-500 text-white rounded-full uppercase tracking-wider mb-2 w-max">${photo.category}</span>
          <h4 class="text-white text-lg font-bold">${photo.title}</h4>
          <p class="text-slate-200 text-xs mt-1">Tapovan Vatsalyadham School</p>
        </div>
      </div>
      <div class="p-3 bg-white flex items-center justify-between">
        <span class="text-xs font-medium text-slate-500 capitalize"><i class="fa-solid fa-tag text-amber-500 mr-1"></i> ${photo.category}</span>
        <button class="text-xs text-red-500 hover:text-red-700 delete-custom-photo font-medium" data-id="${photo.id}">
          <i class="fa-solid fa-trash mr-1"></i> Remove
        </button>
      </div>
    `;

    // Hook delete button
    card.querySelector('.delete-custom-photo').addEventListener('click', (e) => {
      e.stopPropagation();
      deleteCustomPhoto(photo.id, card);
    });

    if (prepend && galleryGrid.firstChild) {
      galleryGrid.insertBefore(card, galleryGrid.firstChild);
    } else {
      galleryGrid.appendChild(card);
    }
  }

  function deleteCustomPhoto(id, element) {
    if (confirm('Are you sure you want to remove this photo?')) {
      try {
        let saved = JSON.parse(localStorage.getItem('tvs_custom_photos') || '[]');
        saved = saved.filter(p => p.id !== id);
        localStorage.setItem('tvs_custom_photos', JSON.stringify(saved));
      } catch (e) {}
      element.remove();
      showToastNotification('Photo removed.');
    }
  }
}

/* --------------------------------------------------------------------------
   5. Admission Enquiry Form Submission
   -------------------------------------------------------------------------- */
function initAdmissionForm() {
  const form = document.getElementById('admissionEnquiryForm');
  const modal = document.getElementById('admissionSuccessModal');
  const refDisplay = document.getElementById('admissionRefCode');
  const closeBtn = document.getElementById('closeAdmissionModal');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentName = document.getElementById('admStudentName')?.value || 'Candidate';
    const grade = document.getElementById('admGrade')?.value || 'Applied Grade';
    const phone = document.getElementById('admPhone')?.value || '';
    
    // Generate unique inquiry code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refCode = `TVS-2025-${randomNum}`;

    if (refDisplay) refDisplay.textContent = refCode;

    // Show modal
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      alert(`Thank you, ${studentName}! Your admission enquiry (${refCode}) for ${grade} has been registered. Our admissions office will reach you at ${phone}.`);
    }

    form.reset();
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }
}

/* --------------------------------------------------------------------------
   6. Contact Form Submission
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('generalContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || 'Guest';
    showToastNotification(`Thank you, ${name}! Your message has been sent to Tapovan Vatsalyadham administration.`);
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   7. Mandatory Disclosures Document Search
   -------------------------------------------------------------------------- */
function initDocSearch() {
  const searchInput = document.getElementById('docSearchInput');
  const rows = document.querySelectorAll('.disclosure-doc-row');
  const noResult = document.getElementById('noDocResult');

  if (!searchInput || rows.length === 0) return;

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    rows.forEach(row => {
      const title = row.getAttribute('data-doc-title')?.toLowerCase() || '';
      const category = row.getAttribute('data-doc-category')?.toLowerCase() || '';
      if (title.includes(term) || category.includes(term)) {
        row.style.display = '';
        visibleCount++;
      } else {
        row.style.display = 'none';
      }
    });

    if (noResult) {
      if (visibleCount === 0) {
        noResult.classList.remove('hidden');
      } else {
        noResult.classList.add('hidden');
      }
    }
  });
}

/* --------------------------------------------------------------------------
   8. Interactive Fee Calculator (Admissions Page)
   -------------------------------------------------------------------------- */
function initFeeCalculator() {
  const gradeSelect = document.getElementById('calcGradeSelect');
  const typeSelect = document.getElementById('calcTypeSelect');
  const feeDisplay = document.getElementById('calcTotalFee');
  const feeNotes = document.getElementById('calcFeeNotes');

  if (!gradeSelect || !typeSelect || !feeDisplay) return;

  const feeData = {
    'primary': { day: '₹38,000 / annum', residential: '₹1,15,000 / annum (incl. Gurukul lodging & 4 sattvic meals)' },
    'middle': { day: '₹44,000 / annum', residential: '₹1,25,000 / annum (incl. Gurukul lodging & 4 sattvic meals)' },
    'secondary': { day: '₹48,000 / annum', residential: '₹1,35,000 / annum (incl. Gurukul lodging & 4 sattvic meals)' },
    'sr_science': { day: '₹56,000 / annum', residential: '₹1,50,000 / annum (incl. Gurukul lodging & 4 sattvic meals)' },
    'sr_commerce': { day: '₹52,000 / annum', residential: '₹1,45,000 / annum (incl. Gurukul lodging & 4 sattvic meals)' }
  };

  function updateFee() {
    const grade = gradeSelect.value;
    const type = typeSelect.value;
    const selected = feeData[grade] || feeData['primary'];
    const amount = selected[type] || 'Contact School Office';
    
    feeDisplay.textContent = amount;
    if (feeNotes) {
      feeNotes.textContent = type === 'residential' 
        ? 'Includes spacious hall accommodation, individual cupboards & study desk, 4 pure sattvic meals & snacks, laundry services, and healthcare checkups.'
        : 'Includes CBSE academic tuition, smart digital classroom access, computer & science lab charges, sports & library.';
    }
  }

  gradeSelect.addEventListener('change', updateFee);
  typeSelect.addEventListener('change', updateFee);
}

/* --------------------------------------------------------------------------
   Toast Notification Helper
   -------------------------------------------------------------------------- */
function showToastNotification(message) {
  let toast = document.getElementById('tvsToastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'tvsToastNotification';
    toast.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-20 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i> <span class="text-sm font-medium">${message}</span>`;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 4000);
}
