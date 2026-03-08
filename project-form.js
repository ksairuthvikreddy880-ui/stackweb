// Project Form JavaScript - Multi-step Wizard

class ProjectForm {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 6;
        this.formData = {};
        
        this.form = document.getElementById('projectForm');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.submitBtn = document.getElementById('submitBtn');
        this.progressFill = document.getElementById('progressFill');
        this.successModal = document.getElementById('successModal');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateUI();
    }

    setupEventListeners() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousStep());
        this.nextBtn.addEventListener('click', () => this.nextStep());
        this.submitBtn.addEventListener('click', () => this.submitForm());

        // Budget validation
        const budgetInput = document.getElementById('budget');
        budgetInput.addEventListener('input', (e) => {
            if (e.target.value && parseInt(e.target.value) < 5000) {
                e.target.value = 5000;
            }
        });

        // Real-time validation for required fields
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
        });
    }

    validateField(field) {
        if (field.hasAttribute('required') && !field.value.trim()) {
            field.style.borderColor = '#ff4444';
            return false;
        } else {
            field.style.borderColor = '';
            return true;
        }
    }

    validateCurrentStep() {
        const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        
        let isValid = true;
        requiredFields.forEach(field => {
            if (field.type === 'radio') {
                const radioGroup = currentStepElement.querySelectorAll(`[name="${field.name}"]`);
                const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                if (!isChecked) {
                    isValid = false;
                    // Highlight the first option card
                    radioGroup[0].closest('.options-grid').style.borderColor = '#ff4444';
                }
            } else {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            }
        });

        // Special validation for budget
        if (this.currentStep === 4) {
            const budgetInput = document.getElementById('budget');
            if (budgetInput.value && parseInt(budgetInput.value) < 5000) {
                alert('Minimum budget is ₹5,000');
                isValid = false;
            }
        }

        return isValid;
    }

    nextStep() {
        if (!this.validateCurrentStep()) {
            alert('Please fill in all required fields before proceeding.');
            return;
        }

        this.saveStepData();

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateUI();
            
            // If moving to review step, populate review data
            if (this.currentStep === 6) {
                this.populateReview();
            }
        }
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateUI();
        }
    }

    saveStepData() {
        const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        const inputs = currentStepElement.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (input.type === 'radio') {
                if (input.checked) {
                    this.formData[input.name] = input.value;
                }
            } else {
                this.formData[input.name] = input.value;
            }
        });
    }

    updateUI() {
        // Update form steps visibility
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });
        document.querySelector(`.form-step[data-step="${this.currentStep}"]`).classList.add('active');

        // Update progress bar
        const progressPercentage = (this.currentStep / this.totalSteps) * 100;
        this.progressFill.style.width = `${progressPercentage}%`;

        // Update step indicators
        document.querySelectorAll('.step').forEach((step, index) => {
            const stepNumber = index + 1;
            step.classList.remove('active', 'completed');
            
            if (stepNumber === this.currentStep) {
                step.classList.add('active');
            } else if (stepNumber < this.currentStep) {
                step.classList.add('completed');
            }
        });

        // Update navigation buttons
        this.prevBtn.style.display = this.currentStep === 1 ? 'none' : 'block';
        this.nextBtn.style.display = this.currentStep === this.totalSteps ? 'none' : 'block';
        this.submitBtn.style.display = this.currentStep === this.totalSteps ? 'block' : 'none';

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    populateReview() {
        // Website Type
        const typeLabels = {
            'professional': 'Professional (Corporate & Business)',
            'gaming': 'Gaming (Gaming & Esports)',
            'startup': 'Startups (MVP & SaaS)',
            'api': 'API & Backend (Backend Services)'
        };
        document.getElementById('reviewType').textContent = typeLabels[this.formData.websiteType] || '-';

        // Project Details
        document.getElementById('reviewProjectName').textContent = this.formData.projectName || '-';
        document.getElementById('reviewDescription').textContent = this.formData.projectDescription || '-';

        // Communication
        const commLabels = {
            'admin-panel': 'Admin Panel',
            'gmail': 'Gmail',
            'whatsapp': 'WhatsApp',
            'sms': 'SMS'
        };
        document.getElementById('reviewCommunication').textContent = commLabels[this.formData.communication] || '-';

        // Budget
        const budget = this.formData.budget ? `₹${parseInt(this.formData.budget).toLocaleString('en-IN')}` : '-';
        document.getElementById('reviewBudget').textContent = budget;

        // Contact Information
        document.getElementById('reviewName').textContent = this.formData.fullName || '-';
        document.getElementById('reviewEmail').textContent = this.formData.email || '-';
        document.getElementById('reviewPhone').textContent = this.formData.phone || '-';
        document.getElementById('reviewCompany').textContent = this.formData.company || 'Not provided';
    }

    submitForm() {
        // Save final step data
        this.saveStepData();

        // Show loading state
        this.submitBtn.disabled = true;
        this.submitBtn.textContent = 'Submitting...';

        // Save to Supabase
        if (window.supabaseService) {
            window.supabaseService.saveProject(this.formData)
                .then(result => {
                    if (result.success) {
                        console.log('Project saved to database:', result.data);
                        this.showSuccessModal();
                    } else {
                        console.error('Failed to save project:', result.error);
                        // Still show success modal but log error
                        this.showSuccessModal();
                        alert('Project submitted but there was an issue saving to database. We have your information and will contact you soon.');
                    }
                })
                .catch(error => {
                    console.error('Error submitting to database:', error);
                    this.showSuccessModal();
                    alert('Project submitted but there was an issue saving to database. We have your information and will contact you soon.');
                })
                .finally(() => {
                    this.submitBtn.disabled = false;
                    this.submitBtn.textContent = 'Submit Project';
                });
        } else {
            // Fallback if Supabase is not available
            console.log('Supabase not available. Form Data:', this.formData);
            this.showSuccessModal();
        }

        // You can also send to email or other services here
        /*
        fetch('/api/submit-project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.formData)
        })
        .then(response => response.json())
        .then(data => {
            this.showSuccessModal();
        })
        .catch(error => {
            alert('Error submitting form. Please try again.');
            console.error('Error:', error);
        });
        */
    }

    showSuccessModal() {
        this.successModal.classList.add('active');
    }
}

// Initialize the form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectForm();
});
