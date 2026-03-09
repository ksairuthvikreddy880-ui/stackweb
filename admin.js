// Admin Panel JavaScript

// Admin password from config
const ADMIN_PASSWORD = window.CONFIG?.admin?.password || 'stackweb@qwerty';

let allProjects = [];
let filteredProjects = [];

// Check if already logged in
window.addEventListener('DOMContentLoaded', () => {
    // Wait for Supabase service to be ready
    function checkAndLoad() {
        if (window.supabaseService && window.supabaseService.initialized) {
            const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
            if (isLoggedIn === 'true') {
                showAdminPanel();
            }
        } else {
            console.log('⏳ Waiting for Supabase service...');
            setTimeout(checkAndLoad, 200);
        }
    }
    
    setTimeout(checkAndLoad, 500);
});

// Login form handler
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const code = document.getElementById('adminCode').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    if (code === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        showAdminPanel();
    } else {
        errorMessage.textContent = '❌ Invalid admin code. Please try again.';
        document.getElementById('adminCode').value = '';
    }
});

// Show admin panel
function showAdminPanel() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    loadProjects();
}

// Logout
function logout() {
    sessionStorage.removeItem('adminLoggedIn');
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminCode').value = '';
    document.getElementById('errorMessage').textContent = '';
}

// Load projects from Supabase
async function loadProjects() {
    const loading = document.getElementById('loading');
    const noProjects = document.getElementById('noProjects');
    const table = document.getElementById('projectsTable');
    
    loading.style.display = 'block';
    noProjects.style.display = 'none';
    table.style.display = 'none';
    
    try {
        // Check if service exists
        if (!window.supabaseService) {
            throw new Error('Supabase service not initialized. Please refresh the page.');
        }

        const result = await window.supabaseService.getAllProjects();
        
        if (result.success) {
            allProjects = result.data || [];
            filteredProjects = allProjects;
            
            if (allProjects.length === 0) {
                loading.style.display = 'none';
                noProjects.style.display = 'block';
            } else {
                updateStats();
                displayProjects();
                loading.style.display = 'none';
                table.style.display = 'table';
            }
        } else {
            throw new Error(result.error || 'Unknown error occurred');
        }
    } catch (error) {
        console.error('Error loading projects:', error);
        
        // Check if it's a table not found error
        const isTableError = error.message.includes('relation') || 
                            error.message.includes('does not exist') ||
                            error.message.includes('JWT') ||
                            error.message.includes('permission');
        
        loading.innerHTML = `
            <div style="color: #ff4444; text-align: center; padding: 2rem;">
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">❌ Error loading projects</p>
                <p style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-muted);">${error.message}</p>
                
                ${isTableError ? `
                <div style="background: rgba(255,68,68,0.1); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; text-align: left;">
                    <p style="font-weight: bold; margin-bottom: 1rem;">⚠️ Database Setup Required</p>
                    <p style="font-size: 0.9rem; margin-bottom: 1rem;">The projects table doesn't exist yet. Follow these steps:</p>
                    <ol style="font-size: 0.85rem; line-height: 1.8; padding-left: 1.5rem;">
                        <li>Go to <a href="https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil/sql" target="_blank" style="color: var(--accent-cyan);">Supabase SQL Editor</a></li>
                        <li>Copy the SQL from <code>supabase-schema.sql</code> file</li>
                        <li>Paste it in the SQL Editor and click "Run"</li>
                        <li>Come back here and click "Retry Connection"</li>
                    </ol>
                </div>
                ` : ''}
                
                <button onclick="location.reload()" style="margin-right: 1rem; padding: 0.75rem 1.5rem; background: var(--accent-purple); color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">
                    Refresh Page
                </button>
                <button onclick="loadProjects()" style="padding: 0.75rem 1.5rem; background: var(--accent-cyan); color: var(--bg-dark); border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">
                    Retry Connection
                </button>
            </div>
        `;
    }
}

// Update statistics
function updateStats() {
    const total = allProjects.length;
    const newProjects = allProjects.filter(p => p.status === 'new').length;
    const avgBudget = total > 0 
        ? Math.round(allProjects.reduce((sum, p) => sum + p.budget, 0) / total)
        : 0;
    
    document.getElementById('totalProjects').textContent = total;
    document.getElementById('newProjects').textContent = newProjects;
    document.getElementById('avgBudget').textContent = `₹${avgBudget.toLocaleString('en-IN')}`;
}

// Display projects in table
function displayProjects() {
    const tbody = document.getElementById('projectsBody');
    tbody.innerHTML = '';
    
    if (filteredProjects.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                    No projects match your filters
                </td>
            </tr>
        `;
        return;
    }
    
    filteredProjects.forEach(project => {
        const row = document.createElement('tr');
        const date = new Date(project.created_at).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        
        row.innerHTML = `
            <td>${date}</td>
            <td><strong>${project.project_name}</strong></td>
            <td>
                ${project.full_name}<br>
                <small style="color: var(--text-muted);">${project.email}</small>
            </td>
            <td><span class="type-badge">${formatType(project.website_type)}</span></td>
            <td><strong>₹${project.budget.toLocaleString('en-IN')}</strong></td>
            <td><span class="status-badge status-${project.status}">${formatStatus(project.status)}</span></td>
            <td>
                <button class="btn-view" onclick="viewProject('${project.id}')">View Details</button>
                <button class="btn-delete" data-project-id="${project.id}" data-project-name="${project.project_name.replace(/"/g, '&quot;')}" style="margin-left: 0.5rem;">Delete</button>
            </td>
        `;
        
        // Add event listener to delete button
        const deleteBtn = row.querySelector('.btn-delete');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project-id');
                const projectName = this.getAttribute('data-project-name');
                deleteProject(projectId, projectName);
            });
        }
        
        tbody.appendChild(row);
    });
}

// Filter projects
function filterProjects() {
    const statusFilter = document.getElementById('statusFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredProjects = allProjects.filter(project => {
        const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
        const matchesType = typeFilter === 'all' || project.website_type === typeFilter;
        const matchesSearch = searchTerm === '' || 
            project.project_name.toLowerCase().includes(searchTerm) ||
            project.full_name.toLowerCase().includes(searchTerm) ||
            project.email.toLowerCase().includes(searchTerm) ||
            (project.company && project.company.toLowerCase().includes(searchTerm));
        
        return matchesStatus && matchesType && matchesSearch;
    });
    
    displayProjects();
}

// View project details
function viewProject(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    const date = new Date(project.created_at).toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    modalBody.innerHTML = `
        <div class="project-detail">
            <h2>${project.project_name}</h2>
            
            <div class="detail-section">
                <h3>Project Information</h3>
                <div class="detail-row">
                    <div class="detail-label">Type:</div>
                    <div class="detail-value"><span class="type-badge">${formatType(project.website_type)}</span></div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Status:</div>
                    <div class="detail-value"><span class="status-badge status-${project.status}">${formatStatus(project.status)}</span></div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Budget:</div>
                    <div class="detail-value"><strong>₹${project.budget.toLocaleString('en-IN')}</strong></div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Communication:</div>
                    <div class="detail-value">${formatCommunication(project.communication_method)}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Submitted:</div>
                    <div class="detail-value">${date}</div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Project Description</h3>
                <p style="color: var(--text-muted); line-height: 1.8;">${project.project_description}</p>
            </div>
            
            <div class="detail-section">
                <h3>Client Information</h3>
                <div class="detail-row">
                    <div class="detail-label">Full Name:</div>
                    <div class="detail-value">${project.full_name}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Email:</div>
                    <div class="detail-value"><a href="mailto:${project.email}" style="color: var(--accent-cyan);">${project.email}</a></div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Phone:</div>
                    <div class="detail-value"><a href="tel:${project.phone}" style="color: var(--accent-cyan);">${project.phone}</a></div>
                </div>
                ${project.company ? `
                <div class="detail-row">
                    <div class="detail-label">Company:</div>
                    <div class="detail-value">${project.company}</div>
                </div>
                ` : ''}
            </div>
            
            <div class="detail-section">
                <h3>Actions</h3>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button onclick="updateStatus('${project.id}', 'in_progress')" class="btn-view">Mark In Progress</button>
                    <button onclick="updateStatus('${project.id}', 'completed')" class="btn-view">Mark Completed</button>
                    <button onclick="contactClient('${project.email}', '${project.phone}')" class="btn-view">Contact Client</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
}

// Update project status
async function updateStatus(projectId, newStatus) {
    try {
        const result = await window.supabaseService.updateProjectStatus(projectId, newStatus);
        
        if (result.success) {
            alert(`✅ Status updated to: ${formatStatus(newStatus)}`);
            closeModal();
            loadProjects();
        } else {
            alert(`❌ Failed to update status: ${result.error}`);
        }
    } catch (error) {
        alert(`❌ Error: ${error.message}`);
    }
}

// Contact client
function contactClient(email, phone) {
    // Get config values
    const whatsappNumber = phone.replace(/[\s\-\(\)]/g, '');
    const adminName = window.CONFIG?.whatsapp?.adminName || 'Ruthvik';
    
    // Format phone number for WhatsApp
    let formattedNumber = whatsappNumber;
    if (formattedNumber.startsWith('+')) {
        formattedNumber = formattedNumber.substring(1);
    }
    
    // Pre-filled message
    const message = encodeURIComponent(`Hi, I am ${adminName} from Stackweb`);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${formattedNumber}?text=${message}`, '_blank');
}

// Format helpers
function formatType(type) {
    const types = {
        'professional': 'Professional',
        'gaming': 'Gaming',
        'startup': 'Startup',
        'api': 'API & Backend'
    };
    return types[type] || type;
}

function formatStatus(status) {
    const statuses = {
        'new': 'New',
        'in_progress': 'In Progress',
        'completed': 'Completed'
    };
    return statuses[status] || status;
}

function formatCommunication(method) {
    const methods = {
        'admin-panel': 'Admin Panel',
        'gmail': 'Gmail',
        'whatsapp': 'WhatsApp',
        'sms': 'SMS'
    };
    return methods[method] || method;
}

// Delete project
async function deleteProject(projectId, projectName) {
    // Confirm deletion
    const confirmed = confirm(`Are you sure you want to delete the project "${projectName}"?\n\nThis action cannot be undone.`);
    
    if (!confirmed) {
        return;
    }
    
    try {
        // Check if service has delete method
        if (!window.supabaseService.deleteProject) {
            alert('Delete functionality not available. Please refresh the page.');
            return;
        }
        
        const result = await window.supabaseService.deleteProject(projectId);
        
        if (result.success) {
            alert('✅ Project deleted successfully!');
            // Reload projects
            loadProjects();
        } else {
            alert(`❌ Failed to delete project: ${result.error}`);
        }
    } catch (error) {
        alert(`❌ Error: ${error.message}`);
        console.error('Delete error:', error);
    }
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
