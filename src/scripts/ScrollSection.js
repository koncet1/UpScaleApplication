const scrollToSection = (e, sectionId) => {
        e.preventDefault(); 

        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = 250; 

            const elementRect = section.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset; 
            const viewportCenter = window.innerHeight / 2; 
            const elementCenterOffset = section.offsetHeight / 2; 

            let targetScrollPosition = absoluteElementTop - viewportCenter + elementCenterOffset;

            targetScrollPosition = absoluteElementTop - window.innerHeight / 2 + section.offsetHeight / 2 - headerHeight / 2;

            window.scrollTo({
                top: targetScrollPosition,
                behavior: "smooth" 
            });
        }
    };
    
export default scrollToSection;