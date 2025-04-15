document.addEventListener('DOMContentLoaded', function() {
    // Animation for the service steps
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Calculate delay based on the index
            const index = parseInt(entry.target.getAttribute('data-index'));
            const delay = index * 150;
            
            // Apply animation with delay
            entry.target.style.animation = `fadeIn 0.8s ease forwards ${delay}ms`;
            entry.target.style.opacity = '1';
            
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    // Observe all service steps
    const serviceSteps = document.querySelectorAll('.service-step');
    serviceSteps.forEach(step => {
      observer.observe(step);
    });
    
    // Set correct heights and positions for stair effect
    serviceSteps.forEach((step, index) => {
      const stepWrapper = step.querySelector('.stair-wrapper');
      const stepVisual = step.querySelector('.stair-step-visual');
      const isEven = index % 2 === 0;
      
      // Add appropriate margin-top for stair effect (except first step)
      if (index > 0) {
        step.style.marginTop = '80px';
      }
      
      // Adjust connector visibility for last step
      if (index === serviceSteps.length - 1) {
        const connector = step.querySelector('.stair-connector');
        if (connector) connector.style.display = 'none';
      }
    });
    
    // Add hover effects
    const contentWrappers = document.querySelectorAll('.service-content-wrapper');
    contentWrappers.forEach(wrapper => {
      wrapper.addEventListener('mouseenter', () => {
        wrapper.style.transform = 'translateY(-5px)';
      });
      
      wrapper.addEventListener('mouseleave', () => {
        wrapper.style.transform = 'translateY(0)';
      });
    });
  });

 