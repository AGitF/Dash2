topBar.style.borderRadius = '8px';
    topBar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    topBar.style.zIndex = '900';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '30px';
  }
  
  // Style cards
  document.querySelectorAll('.card').forEach(card => {
    card.style.backgroundColor = 'white';
    card.style.borderRadius = '8px';
    card.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    card.style.padding = '20px';
    card.style.marginBottom = '20px';
  });
  
  // Style card headers
  document.querySelectorAll('.card-header').forEach(header => {
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '15px';
  });
  
  // Style buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.style.padding = '10px 20px';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '1rem';
    btn.style.transition = 'all 0.3s';
  });
  
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.style.backgroundColor = '#4361ee';
    btn.style.color = 'white';
  });
  
  document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.style.backgroundColor = '#6c757d';
    btn.style.color = 'white';
  });
  
  document.querySelectorAll('.btn-success').forEach(btn => {
    btn.style.backgroundColor = '#2a9d8f';
    btn.style.color = 'white';
  });
  
  document.querySelectorAll('.btn-danger').forEach(btn => {
    btn.style.backgroundColor = '#e63946';
    btn.style.color = 'white';
  });
  
  // Style tables
  document.querySelectorAll('table').forEach(table => {
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
  });
  
  document.querySelectorAll('th, td').forEach(cell => {
    cell.style.padding = '12px 15px';
    cell.style.textAlign = 'left';
    cell.style.borderBottom = '1px solid #e9ecef';
  });
  
  document.querySelectorAll('thead').forEach(head => {
    head.style.backgroundColor = '#f8f9fa';
    head.style.borderBottom = '2px solid #dee2e6';
  });
  
  // Style badges
  document.querySelectorAll('.badge').forEach(badge => {
    badge.style.padding = '5px 10px';
    badge.style.borderRadius = '20px';
    badge.style.fontSize = '0.75rem';
    badge.style.fontWeight = '500';
  });
  
  document.querySelectorAll('.badge-primary').forEach(badge => {
    badge.style.backgroundColor = '#4895ef';
    badge.style.color = 'white';
  });
  
  document.querySelectorAll('.badge-success').forEach(badge => {
    badge.style.backgroundColor = '#2a9d8f';
    badge.style.color = 'white';
  });
  
  document.querySelectorAll('.badge-warning').forEach(badge => {
    badge.style.backgroundColor = '#f9c74f';
    badge.style.color = '#212529';
  });
  
  document.querySelectorAll('.badge-danger').forEach(badge => {
    badge.style.backgroundColor = '#e63946';
    badge.style.color = 'white';
  });
  
  // Style stat cards
  document.querySelectorAll('.stat-card').forEach(card => {
    card.style.backgroundColor = 'white';
    card.style.padding = '20px';
    card.style.borderRadius = '8px';
    card.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    card.style.textAlign = 'center';
  });
  
  document.querySelectorAll('.stat-value').forEach(value => {
    value.style.fontSize = '2rem';
    value.style.fontWeight = '700';
    value.style.margin = '10px 0';
    value.style.color = '#4361ee';
  });
  
  // Style the stats container with CSS Grid if supported
  const statsContainer = document.querySelector('.stats-container');
  if (statsContainer) {
    if ('gridTemplateColumns' in statsContainer.style) {
      statsContainer.style.display = 'grid';
      statsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
      statsContainer.style.gap = '20px';
      statsContainer.style.marginBottom = '30px';
    } else {
      // Fallback for older browsers
      statsContainer.style.display = 'flex';
      statsContainer.style.flexWrap = 'wrap';
      statsContainer.style.justifyContent = 'space-between';
      statsContainer.style.marginBottom = '30px';
      
      document.querySelectorAll('.stat-card').forEach(card => {
        card.style.flex = '1';
        card.style.minWidth = '200px';
        card.style.margin = '0 10px 20px 0';
      });
    }
  }
}

// Handle changing pages
function handlePageChange(targetPage) {
  console.log('Changing to page:', targetPage);
  
  // Update active sidebar link
  document.querySelectorAll('.sidebar-menu a').forEach(link => {
    if (link.getAttribute('data-page') === targetPage) {
      link.classList.add('active');
      link.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      link.style.borderLeft = '4px solid #4cc9f0';
    } else {
      link.classList.remove('active');
      link.style.backgroundColor = '';
      link.style.borderLeft = '';
    }
  });
  
  // Show the selected page, hide others
  document.querySelectorAll('.page-content').forEach(page => {
    if (page.id === targetPage) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
  
  // Update page title
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    // Get title from the active sidebar link
    const activeLink = document.querySelector(`.sidebar-menu a[data-page="${targetPage}"]`);
    if (activeLink) {
      // Extract text without the icon
      const linkText = activeLink.textContent.trim();
      pageTitle.textContent = linkText;
    }
  }
}

// Initialize charts if Chart.js is available
function initializeCharts() {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not loaded, skipping chart initialization');
    return;
  }
  
  // Revenue vs Expenses Chart
  const revenueExpensesChart = document.getElementById('revenueExpensesChart');
  if (revenueExpensesChart) {
    new Chart(revenueExpensesChart, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            data: [15000, 17200, 19800, 21500, 24500, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: '#4361ee',
            borderWidth: 0
          },
          {
            label: 'Expenses',
            data: [12400, 13800, 15200, 14900, 16200, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: '#e63946',
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': $' + context.raw.toLocaleString();
              }
            }
          }
        }
      }
    });
  }
  
  // Finance Chart
  const financeChart = document.getElementById('financeChart');
  if (financeChart) {
    new Chart(financeChart, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Revenue',
            data: [15000, 17200, 19800, 21500, 24500],
            borderColor: '#4361ee',
            backgroundColor: 'rgba(67, 97, 238, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Expenses',
            data: [12400, 13800, 15200, 14900, 16200],
            borderColor: '#e63946',
            backgroundColor: 'rgba(230, 57, 70, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Profit',
            data: [2600, 3400, 4600, 6600, 8300],
            borderColor: '#2a9d8f',
            backgroundColor: 'rgba(42, 157, 143, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': $' + context.raw.toLocaleString();
              }
            }
          }
        }
      }
    });
  }
}

// Add modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal backdrop
  const modalBackdrop = document.getElementById('modal-backdrop');
  
  // Add event listener to close modals when clicking outside
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function(e) {
      if (e.target === this) {
        // Only close if the backdrop itself was clicked
        closeAllModals();
      }
    });
  }
  
  // Add buttons event listeners
  const openModalButtons = {
    'add-event-btn': { id: 'event-modal', title: 'Add Event' },
    'add-contact-btn': { id: 'contact-modal', title: 'Add Contact' },
    'create-invoice-btn': { id: 'invoice-modal', title: 'Create Invoice' },
    'add-expense-btn': { id: 'expense-modal', title: 'Add Expense' },
    'add-project-btn': { id: 'project-modal', title: 'Add Project' },
    'add-task-btn': { id: 'task-modal', title: 'Add Task' }
  };
  
  Object.keys(openModalButtons).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create or open the modal
        const modalInfo = openModalButtons[btnId];
        createOrOpenModal(modalInfo.id, modalInfo.title);
      });
    }
  });
  
  // Initialize functionality
  initializeCharts();
});

// Open or create a modal
function createOrOpenModal(modalId, title) {
  let modal = document.getElementById(modalId);
  
  // Create the modal if it doesn't exist
  if (!modal) {
    modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${title}</h3>
        <button class="modal-close" id="close-${modalId}">&times;</button>
      </div>
      <div class="modal-body">
        <p>This modal content would be fully implemented in the complete application.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" id="cancel-${modalId}">Cancel</button>
        <button class="btn btn-primary" id="save-${modalId}">Save</button>
      </div>
    `;
    
    const modalBackdrop = document.getElementById('modal-backdrop');
    if (modalBackdrop) {
      modalBackdrop.appendChild(modal);
      
      // Style the modal
      modal.style.backgroundColor = 'white';
      modal.style.borderRadius = '8px';
      modal.style.width = '600px';
      modal.style.maxWidth = '90%';
      modal.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      modal.style.zIndex = '1060';
      modal.style.position = 'relative';
      modal.style.maxHeight = '85vh';
      modal.style.overflowY = 'auto';
      
      // Add close event listeners
      const closeBtn = document.getElementById(`close-${modalId}`);
      if (closeBtn) {
        closeBtn.addEventListener('click', closeAllModals);
        closeBtn.style.border = 'none';
        closeBtn.style.background = 'none';
        closeBtn.style.fontSize = '1.5rem';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#6c757d';
      }
      
      const cancelBtn = document.getElementById(`cancel-${modalId}`);
      if (cancelBtn) {
        cancelBtn.addEventListener('click', closeAllModals);
      }
      
      const saveBtn = document.getElementById(`save-${modalId}`);
      if (saveBtn) {
        saveBtn.addEventListener('click', function() {
          alert('Save functionality would be implemented in the complete application.');
          closeAllModals();
        });
      }
    }
  }
  
  // Open the modal
  openModal(modalId);
}

// Open a modal by ID
function openModal(modalId) {
  const backdrop = document.getElementById('modal-backdrop');
  const modal = document.getElementById(modalId);
  
  if (backdrop && modal) {
    backdrop.style.display = 'flex';
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100vw';
    backdrop.style.height = '100vh';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    backdrop.style.alignItems = 'center';
    backdrop.style.justifyContent = 'center';
    backdrop.style.zIndex = '1050';
    
    modal.style.display = 'block';
  }
}

// Close all open modals
function closeAllModals() {
  const backdrop = document.getElementById('modal-backdrop');
  const modals = document.querySelectorAll('.modal');
  
  if (backdrop) {
    backdrop.style.display = 'none';
  }
  
  modals.forEach(modal => {
    modal.style.display = 'none';
  });
}