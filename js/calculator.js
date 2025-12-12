/**
 * Einsparungsrechner (Savings Calculator)
 * Calculates monthly and yearly savings based on hours saved and hourly wage
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get calculator elements
    const hoursInput = document.getElementById('hours-saved');
    const wageInput = document.getElementById('hourly-wage');
    const monthlyResult = document.getElementById('monthly-savings');
    const yearlyResult = document.getElementById('yearly-savings');
    
    // Check if calculator elements exist on the page
    if (!hoursInput || !wageInput || !monthlyResult || !yearlyResult) {
        return; // Exit if calculator not on page
    }
    
    /**
     * Calculate and update savings
     * Formula:
     * - Weekly savings = hours saved per week × hourly wage
     * - Monthly savings = weekly savings × 4 weeks
     * - Yearly savings = monthly savings × 12 months
     */
    function calculateSavings() {
        // Get input values
        const hoursPerWeek = parseFloat(hoursInput.value) || 0;
        const hourlyWage = parseFloat(wageInput.value) || 0;
        
        // Calculate savings
        const weeklySavings = hoursPerWeek * hourlyWage;
        const monthlySavings = weeklySavings * 4;
        const yearlySavings = monthlySavings * 12;
        
        // Update display with animation
        animateValue(monthlyResult, 0, monthlySavings, 600);
        animateValue(yearlyResult, 0, yearlySavings, 600);
    }
    
    /**
     * Animate number counting up
     * @param {Element} element - The element to update
     * @param {number} start - Starting value
     * @param {number} end - Ending value
     * @param {number} duration - Animation duration in ms
     */
    function animateValue(element, start, end, duration) {
        // Remove previous animation class
        element.classList.remove('result-value');
        void element.offsetWidth; // Trigger reflow
        element.classList.add('result-value');
        
        const startTime = performance.now();
        const startValue = start;
        const endValue = end;
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = startValue + (endValue - startValue) * easeOutQuart;
            
            // Format number with thousands separator and 2 decimals
            element.textContent = formatCurrency(currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    /**
     * Format number as currency (Euro)
     * @param {number} value - The value to format
     * @returns {string} Formatted currency string
     */
    function formatCurrency(value) {
        return new Intl.NumberFormat('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    }
    
    /**
     * Validate input to ensure only positive numbers
     * @param {Event} e - Input event
     */
    function validateInput(e) {
        const value = parseFloat(e.target.value);
        if (value < 0) {
            e.target.value = 0;
        }
    }
    
    // Add event listeners to inputs
    hoursInput.addEventListener('input', calculateSavings);
    wageInput.addEventListener('input', calculateSavings);
    
    // Validate inputs to prevent negative values
    hoursInput.addEventListener('change', validateInput);
    wageInput.addEventListener('change', validateInput);
    
    // Initial calculation with default values
    calculateSavings();
});

/**
 * Additional utility functions for future expansion
 * You can add more calculator features here
 */

// Example: Calculate ROI (Return on Investment)
function calculateROI(investment, savings) {
    if (investment <= 0) return 0;
    return ((savings - investment) / investment) * 100;
}

// Example: Calculate payback period
function calculatePaybackPeriod(investment, monthlySavings) {
    if (monthlySavings <= 0) return Infinity;
    return investment / monthlySavings;
}

// Export functions for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateROI,
        calculatePaybackPeriod
    };
}
