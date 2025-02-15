function fadeOut(element, callback) {
    element.style.transition = "opacity 0.3s ease";
    element.style.opacity = 0;

    setTimeout(() => {
        element.style.display = 'none'; 
        if (callback) callback();
    }, 300);
}

function fadeIn(element) {
    element.style.display = 'flex';
    element.style.opacity = 0; 
    setTimeout(() => {
        element.style.transition = "opacity 0.3s ease";
        element.style.opacity = 1; 
    }, 10);
}

function showTools() {
    const techStack = document.getElementById('tech-stack');
    const libraries = document.getElementById('libraries');

    fadeOut(techStack, () => {
        fadeOut(libraries, () => {
            const tools = document.getElementById('tools');
            fadeIn(tools);
        });
    });
}

function showTechStack() {
    const tools = document.getElementById('tools');
    const libraries = document.getElementById('libraries');

    fadeOut(tools, () => {
        fadeOut(libraries, () => {
            const techStack = document.getElementById('tech-stack');
            fadeIn(techStack);
        });
    });
}

function showLibraries() {
    const techStack = document.getElementById('tech-stack');
    const tools = document.getElementById('tools');

    fadeOut(techStack, () => {
        fadeOut(tools, () => {
            const libraries = document.getElementById('libraries');
            fadeIn(libraries);
        });
    });
}